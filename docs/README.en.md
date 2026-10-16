# OriaTab · Extension downloads

[简体中文](../README.md) · [繁體中文](../docs/README.zh-TW.md) · **English** · [日本語](../docs/README.ja.md) · [한국어](../docs/README.ko.md) · [Deutsch](../docs/README.de.md) · [Français](../docs/README.fr.md) · [Русский](../docs/README.ru.md)

[Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/gjdpgbmoageooodkfnkjkookbblegkac) · [Chrome Web Store](https://chrome.google.com/webstore/detail/ohhiiomjfebohooaapnoiiegonnmhfhj) · [OriaTheme](https://theme.oria.org.cn)

OriaTab is a customizable new tab page with search, bookmarks, tab groups, wallpapers and a calendar. Aide adds chat and translation, including a floating window on regular webpages.

## Download and install

Desktop Chrome and Edge use the same Manifest V3 package.

1. Download `oriatab-0.2.0.zip` from [Releases → Assets](https://github.com/KrisLee1/OriaTab-Releases/releases/latest) and extract it into a folder you will keep.
2. Open `chrome://extensions` in Chrome or `edge://extensions` in Edge.
3. Enable **Developer mode** and choose **Load unpacked**.
4. Select the folder directly containing `manifest.json`, then open a new tab.

Alternatively, use **Code → Download ZIP** and extract the repository, or clone it with Git. Load the [`extension/`](../extension/) folder inside it.

## Appearance and Aide

In **Settings → Appearance**, choose a language, Liquid Glass or another theme, light/dark mode and colors. The interface supports the eight languages linked above. Configure your provider, API key and model in Aide settings to use a model service.

## Updates and verification

Manually installed extensions require manual updates. Replace the files in the same installation folder and reload the extension on the browser's extension management page. Do not uninstall first: uninstalling removes local extension data.

Download [SHA256SUMS.txt](../SHA256SUMS.txt) from this repository. Calculate the ZIP's SHA-256 with the command below and compare the result with that file.

macOS / Linux:

```sh
shasum -a 256 oriatab-0.2.0.zip
```

Windows PowerShell:

```powershell
Get-FileHash .\oriatab-0.2.0.zip -Algorithm SHA256
```

## Troubleshooting

- Loading fails: make sure the selected folder directly contains `manifest.json`.
- The new tab page does not change: check that OriaTab is enabled and that another new tab extension is not conflicting.

[Report an issue](https://github.com/KrisLee1/OriaTab-Releases/issues) · [Third-party notices](../extension/THIRD_PARTY_NOTICES.txt) · [Licenses](../extension/licenses/)
