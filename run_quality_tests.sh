#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

JMETER_SAVE_ARGS=(
  -Jjmeter.save.saveservice.output_format=csv
  -Jjmeter.save.saveservice.print_field_names=true
  -Jjmeter.save.saveservice.response_code=true
  -Jjmeter.save.saveservice.successful=true
  -Jjmeter.save.saveservice.label=true
  -Jjmeter.save.saveservice.time=true
  -Jjmeter.save.saveservice.latency=true
  -Jjmeter.save.saveservice.timestamp_format=ms
)

usage() {
  cat <<'EOF'
Usage: ./run_quality_tests.sh [all|load|stress|until-503]

Modes:
  all        Run load and ordinary stress tests.
  load       Run load tests for configs 1, 2, 3.
  stress     Run ordinary config=3 stress tests for SLA response time checks.
  until-503  Increase config=3 load with no time limit until first HTTP 503.
EOF
}

run_jmeter_plan() {
  local plan="$1"
  local out="$2"
  local log="$3"

  rm -f "$out" "$log"
  jmeter -n -t "$plan" -l "$out" -j "$log" "${JMETER_SAVE_ARGS[@]}"
}

analyze_until_503_jtl() {
  local file="$1"
  local analysis_json

  analysis_json="$(python scripts/analyze_until_503_jtl.py "$file")"
  python - "$analysis_json" <<'PY'
import json
import sys

result = json.loads(sys.argv[1])
first_503_after_sec = result["first_503_after_sec"]
print(
    "{total_samples},{total_503},{first_503_after_sec},{has_503}".format(
        total_samples=result["total_samples"],
        total_503=result["total_503"],
        first_503_after_sec="" if first_503_after_sec is None else first_503_after_sec,
        has_503=str(result["has_503"]).lower(),
    )
)
PY
}

run_load() {
  mkdir -p results/load

  for config in 1 2 3; do
    plan="quality_jmeter_plans/load/load_config${config}_7users_140rpm_ctt.jmx"
    out="results/load/load_config${config}_7users_140rpm_ctt.jtl"
    log="results/load/load_config${config}_7users_140rpm_ctt.log"
    run_jmeter_plan "$plan" "$out" "$log"
  done
}

run_stress() {
  mkdir -p results/stress_config3

  for spec in 1users_20rpm 2users_40rpm 4users_80rpm 7users_140rpm 10users_200rpm 12users_240rpm 16users_320rpm; do
    plan="quality_jmeter_plans/stress_config3/stress_config3_${spec}_ctt.jmx"
    out="results/stress_config3/stress_config3_${spec}_ctt.jtl"
    log="results/stress_config3/stress_config3_${spec}_ctt.log"
    run_jmeter_plan "$plan" "$out" "$log"
  done
}

run_until_503() {
  local plan_dir="quality_jmeter_plans/stress_config3_until_503"
  local result_dir="results/stress_config3_until_503"
  local summary="${result_dir}/until_503_summary.csv"
  local manual_stop=0

  trap 'manual_stop=1' INT TERM

  mkdir -p "$result_dir"
  printf 'users,rpm,jtl_file,total_samples,total_503,first_503_after_sec,has_503,status\n' > "$summary"

  # ./run_quality_tests.sh until-503:
  # - runs config=3 stress plans by increasing load;
  # - does not apply an external timeout;
  # - each JMeter plan runs forever until its JSR223 PostProcessor stops it
  #   after the first HTTP 503;
  # - if 503 never appears, stop JMeter manually;
  # - the full suite stops at the first load where 503 is found;
  # - results are written to results/stress_config3_until_503/until_503_summary.csv.

  for spec in \
    "1 20" \
    "2 40" \
    "4 80" \
    "7 140" \
    "10 200" \
    "12 240" \
    "16 320" \
    "20 400" \
    "24 480" \
    "32 640" \
    "40 800" \
    "50 1000" \
    "60 1200" \
    "80 1600" \
    "100 2000"; do
    read -r users rpm <<< "$spec"
    name="stress_config3_until_503_${users}users_${rpm}rpm_ctt"
    plan="${plan_dir}/${name}.jmx"
    out="${result_dir}/${name}.jtl"
    log="${result_dir}/${name}.log"
    local analysis_fields first_503_after_sec has_503 jmeter_status total_503 total_samples
    jmeter_status=0

    if run_jmeter_plan "$plan" "$out" "$log"; then
      jmeter_status=0
    else
      jmeter_status=$?
    fi

    analysis_fields="0,0,,false"
    if [[ -s "$out" ]]; then
      if ! analysis_fields="$(analyze_until_503_jtl "$out")"; then
        printf 'Failed to analyze %s\n' "$out" >&2
        analysis_fields="0,0,,false"
        jmeter_status=1
      fi
    elif (( jmeter_status == 0 )); then
      printf 'JMeter produced empty or missing JTL: %s\n' "$out" >&2
      jmeter_status=1
    fi

    IFS=',' read -r total_samples total_503 first_503_after_sec has_503 <<< "$analysis_fields"

    if [[ "$has_503" == "true" ]]; then
      printf '%s,%s,%s,%s,%s,%s,%s,stopped_on_503\n' \
        "$users" "$rpm" "${name}.jtl" "$total_samples" "$total_503" "$first_503_after_sec" "$has_503" >> "$summary"
      printf 'HTTP 503 detected at %s users / %s rpm\n' "$users" "$rpm"
      trap - INT TERM
      return 0
    fi

    if (( manual_stop == 1 || jmeter_status == 130 || jmeter_status == 143 )); then
      local manual_return_status="$jmeter_status"
      if (( manual_return_status == 0 )); then
        manual_return_status=130
      fi
      printf '%s,%s,%s,%s,%s,%s,%s,manual_stop_without_503\n' \
        "$users" "$rpm" "${name}.jtl" "$total_samples" "$total_503" "$first_503_after_sec" "$has_503" >> "$summary"
      printf 'JMeter was stopped manually at %s users / %s rpm without HTTP 503\n' "$users" "$rpm" >&2
      trap - INT TERM
      return "$manual_return_status"
    fi

    if (( jmeter_status != 0 )); then
      printf '%s,%s,%s,%s,%s,%s,%s,jmeter_failed\n' \
        "$users" "$rpm" "${name}.jtl" "$total_samples" "$total_503" "$first_503_after_sec" "$has_503" >> "$summary"
      printf 'JMeter failed at %s users / %s rpm; see %s\n' "$users" "$rpm" "$log" >&2
      trap - INT TERM
      return "$jmeter_status"
    fi

    printf '%s,%s,%s,%s,%s,%s,%s,stopped_without_503\n' \
      "$users" "$rpm" "${name}.jtl" "$total_samples" "$total_503" "$first_503_after_sec" "$has_503" >> "$summary"
    printf 'JMeter stopped at %s users / %s rpm without HTTP 503; stopping load increase\n' "$users" "$rpm" >&2
    trap - INT TERM
    return 0
  done

  printf 'HTTP 503 was not detected up to 100 users / 2000 rpm\n'
  trap - INT TERM
}

mode="${1:-all}"

case "$mode" in
  all)
    run_load
    run_stress
    ;;
  load)
    run_load
    ;;
  stress)
    run_stress
    ;;
  until-503)
    run_until_503
    ;;
  -h|--help|help)
    usage
    ;;
  *)
    usage >&2
    exit 2
    ;;
esac
