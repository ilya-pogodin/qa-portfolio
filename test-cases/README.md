# Тест-кейсы

Наборы проверок по проекту ZooTicket — система онлайн-покупки билетов в зоопарк.

| Файл | Объект | Кейсов |
|---|---|---|
| [TC-payments-create.md](TC-payments-create.md) | POST /payments — создание платежа | 12 |
| [TC-payments-refund.md](TC-payments-refund.md) | POST /payments/{id}/refund — возврат | 10 |
| [TC-ticket-lifecycle.md](TC-ticket-lifecycle.md) | переходы состояний билета | 10 |
| [TEMPLATE.md](TEMPLATE.md) | шаблон и правила оформления | — |

Часть кейсов помечена как заблокированные: ожидаемый результат невозможно зафиксировать, пока не уточнены требования. Соответствующие вопросы вынесены в [дефекты требований](../bug-reports).
