# OriaTab · Загрузка расширения

[简体中文](../README.md) · [繁體中文](../docs/README.zh-TW.md) · [English](../docs/README.en.md) · [日本語](../docs/README.ja.md) · [한국어](../docs/README.ko.md) · [Deutsch](../docs/README.de.md) · [Français](../docs/README.fr.md) · **Русский**

[Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/gjdpgbmoageooodkfnkjkookbblegkac) · [Chrome Web Store](https://chrome.google.com/webstore/detail/ohhiiomjfebohooaapnoiiegonnmhfhj) · [OriaTheme](https://theme.oria.org.cn)

OriaTab — настраиваемая страница новой вкладки с поиском, закладками, группами вкладок, обоями и календарём. Aide добавляет чат и перевод, в том числе в плавающем окне на обычных веб-страницах.

## Загрузка и установка

Настольные версии Chrome и Edge используют один пакет Manifest V3.

1. Скачайте `oriatab-0.2.0.zip` из раздела [Releases → Assets](https://github.com/KrisLee1/OriaTab-Releases/releases/latest) и распакуйте в папку, которую будете хранить постоянно.
2. Откройте `chrome://extensions` в Chrome или `edge://extensions` в Edge.
3. Включите **Режим разработчика** и выберите **Загрузить распакованное расширение**.
4. Выберите папку, в которой непосредственно находится `manifest.json`, и откройте новую вкладку.

Можно также скачать репозиторий через **Code → Download ZIP** и распаковать его или клонировать с помощью Git. Затем загрузите вложенную папку [`extension/`](../extension/).

## Оформление и Aide

В разделе **Настройки → Оформление** выберите язык, Liquid Glass или другую тему, светлый/тёмный режим и цвета. Интерфейс поддерживает восемь языков, ссылки на которые приведены выше. Для использования сервиса моделей настройте провайдера, API-ключ и модель в настройках Aide.

## Обновление и проверка

Расширение, установленное вручную, обновляется вручную. Замените файлы в той же папке установки и перезагрузите расширение на странице управления расширениями. Не удаляйте расширение перед обновлением: это приведёт к удалению его локальных данных.

Скачайте [SHA256SUMS.txt](../SHA256SUMS.txt) из этого репозитория. Вычислите SHA-256 архива ZIP следующей командой и сравните результат с этим файлом.

macOS / Linux:

```sh
shasum -a 256 oriatab-0.2.0.zip
```

Windows PowerShell:

```powershell
Get-FileHash .\oriatab-0.2.0.zip -Algorithm SHA256
```

## Решение проблем

- Ошибка загрузки: убедитесь, что выбранная папка непосредственно содержит `manifest.json`.
- Новая вкладка не изменилась: проверьте, включён ли OriaTab и нет ли конфликта с другим расширением новой вкладки.

[Сообщить о проблеме](https://github.com/KrisLee1/OriaTab-Releases/issues) · [Уведомления о сторонних компонентах](../extension/THIRD_PARTY_NOTICES.txt) · [Лицензии](../extension/licenses/)
