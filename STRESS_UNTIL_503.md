# Stress Until HTTP 503

Этот набор тестов ищет минимальное количество параллельных пользователей, при котором приложение начинает возвращать именно HTTP `503`. Ошибки `Duration Assertion` и превышение SLA `620 ms` учитываются отдельно и не подменяют критерий `responseCode == 503`.

## SSH-туннель

Перед запуском нужен локальный туннель на порт `8079`. Команда зависит от выданного стенда, общий вид:

```bash
ssh -L 8079:<remote-service-host>:80 <ssh-user>@<ssh-host>
```

После поднятия туннеля приложение должно отвечать на:

```bash
http://localhost:8079/?token=497921026&user=-1356108256&config=3
```

Если в `results/selected_config.txt` уже выбрана другая конфигурация, скрипт использует ее. Если файл не найден или не читается, используется `config=3`.

## Генерация JMX

Планы лежат в:

```text
quality_jmeter_plans/stress_until_503/
```

Перегенерировать первичный диапазон можно так:

```bash
python scripts/generate_stress_until_503_jmx.py
```

Первичный диапазон пользователей: `1, 2, 3, 4, 5, 7, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128`. Для каждого уровня `rpm = users * 20`.

## Запуск

```bash
scripts/run_until_503.sh
```

Скрипт проверяет `jmeter --version`, проверяет доступность приложения через `curl`, затем последовательно запускает JMeter-планы. Каждый прогон длится `90` секунд. Если HTTP `503` найден между двумя соседними уровнями первичного диапазона, скрипт дополнительно прогоняет все целые значения пользователей между ними и выводит минимальное значение.

## Результаты

JTL и логи:

```text
results/stress_until_503/
```

HTML-отчеты JMeter:

```text
html_reports/stress_until_503/<users>users_<rpm>rpm/
```

Итоговые таблицы:

```text
results/stress_until_503/until_503_summary.csv
results/stress_until_503/until_503_summary.md
```

Графики:

```text
report_assets/stress_until_503/until_503_response_time_vs_users.png
report_assets/stress_until_503/until_503_http_503_count_vs_users.png
report_assets/stress_until_503/until_503_error_rate_vs_users.png
report_assets/stress_until_503/until_503_throughput_rpm_vs_users.png
```

## Интерпретация

Искомое значение - первая строка, где `has_503 = true` и `http_503 > 0`. Соответствующий `users` - минимальное найденное количество параллельных пользователей, а `rpm = users * 20` - целевая нагрузка. Предыдущий стабильный уровень - максимальный протестированный `users` ниже найденного значения, где HTTP `503` не было.
