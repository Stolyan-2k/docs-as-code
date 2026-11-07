# Docs as Code

Практическая работа по настройке среды Docs as Code.

Автор: Yan Komarevtsev

## Запуск

Требуются Python 3.9+ и Git. Из корня репозитория:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
mkdocs serve
```

В Windows активируйте окружение командой `.venv\Scripts\activate`.
Откройте адрес, указанный MkDocs в терминале (по умолчанию порт 8000).

## Проверка сборки

```bash
mkdocs build --strict
```

Исходники документации находятся в `docs/`, настройки — в `mkdocs.yml`.
Используются встроенная тема `readthedocs` и плагин `search` с русским языком.
Каталоги `.venv/` и `site/` не добавляются в Git.

## Скриншот

![Работающий документационный сайт](screenshots/site.png)

## Практика 2: система определения спама

Добавлены описание проекта и комплект документации, три User Stories с критериями
приёмки, основной Use Case и две UML-диаграммы Mermaid.
Страницы доступны в разделе «Проект» навигации сайта.

Mermaid 10.9.3 включён локально в `docs/assets/vendor/`; лицензия MIT хранится
рядом. Скрипт `docs/assets/javascripts/diagrams.js` отображает блоки Mermaid
в браузере. Для просмотра диаграмм нужен JavaScript; доступ к CDN не требуется.
Источник библиотеки: https://cdn.jsdelivr.net/npm/mermaid@10.9.3/dist/mermaid.min.js

Скриншоты практики 2:

- [Страница проекта](screenshots/practice-2.png)
- [Диаграмма последовательности](screenshots/practice-2-sequence.png)
- [Диаграмма классов](screenshots/practice-2-classes.png)


## Практика 3: документирование API

- Спецификация: [`docs/api/openapi.yaml`](docs/api/openapi.yaml), OpenAPI 3.0.3.
- Описание и инструкция проверки: [`docs/api/index.md`](docs/api/index.md).
- После `mkdocs serve` откройте раздел «API», затем ссылку «Открыть Swagger UI».
- Описаны проверка сообщения, получение результата и сохранение исправленной категории.
- Backend не реализован; сервер условный, отправка запросов из Swagger UI отключена.
- Скриншот: [Swagger UI с раскрытой основной операцией](screenshots/practice-3-swagger.png).

Проверка контракта:

```bash
python -m pip install -r requirements-dev.txt
python -m openapi_spec_validator docs/api/openapi.yaml
mkdocs build --strict
```

Swagger UI 5.17.14 хранится в `docs/assets/vendor/swagger-ui/` вместе с лицензией
Apache-2.0. Источник: https://www.npmjs.com/package/swagger-ui-dist/v/5.17.14.
Для просмотра API внешний CDN не нужен.

## Практика 4: документирование ML-модели

Выбран кандидат `SafeTechDev/Russian-Spam-classifier` для русскоязычной проверки
спама. Описан `alt-gnome/telegram-spam` — внешний оценочный набор по карточке
модели, а не её обучающая выборка.

- [Model Card](docs/ml/model-card.md): источники, архитектура, заявленные метрики, ограничения и связь с API.
- [Data Sheet](docs/ml/dataset.md): состав, объём, неизвестные сведения о сборе и предобработке, план оценки.
- [Риски](docs/ml/risks.md): потенциальный bias и этические риски с мерами снижения.

Источники проверены 6 ноября 2026 года; ссылки на изученные ревизии закреплены
в документации. Модель не запускалась и не обучалась; собственные метрики
не заявляются. Раздел «ML» доступен в меню после `mkdocs serve`.
Новые скриншоты по заданию практики 4 не требуются.
