# tpo-sub-four

## JMeter quality tests

Generate JMeter plans:

```bash
python scripts/generate_jmx.py
```

Run load and ordinary stress tests:

```bash
./run_quality_tests.sh
```

Run the 503-oriented stress mode:

```bash
./run_quality_tests.sh until-503
```

The ordinary stress test for `config=3` checks when the response-time SLA is
violated. The `until-503` mode has no time limit: each generated
`stress_config3_until_503` plan runs until the first HTTP `503`. A Groovy
JSR223 PostProcessor named `Stop Test On First HTTP 503` stops JMeter
immediately when that response appears. If HTTP `503` never appears, stop the
JMeter run manually.

For GUI observation, the until-503 plans include `View Results Tree`,
`Summary Report`, `Aggregate Report`, and `Graph Results`. The summary is
written to `results/stress_config3_until_503/until_503_summary.csv`, including
`first_503_after_sec`.
