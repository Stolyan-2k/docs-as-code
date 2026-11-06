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
