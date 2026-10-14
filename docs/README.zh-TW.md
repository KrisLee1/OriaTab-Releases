# OriaTab · 擴充功能下載

[简体中文](../README.md) · **繁體中文** · [English](../docs/README.en.md) · [日本語](../docs/README.ja.md) · [한국어](../docs/README.ko.md) · [Deutsch](../docs/README.de.md) · [Français](../docs/README.fr.md) · [Русский](../docs/README.ru.md)

[Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/gjdpgbmoageooodkfnkjkookbblegkac) · [Chrome Web Store](https://chrome.google.com/webstore/detail/ohhiiomjfebohooaapnoiiegonnmhfhj) · [OriaTheme](https://theme.oria.org.cn)

OriaTab 提供可自訂的新分頁，結合搜尋、書籤、分頁群組、桌布、日曆，以及可在一般網頁中使用的 Aide 對話與翻譯。

## 下載與安裝

適用於桌面版 Chrome 與 Edge，兩者使用相同的 Manifest V3 擴充功能套件。

1. 在 [Releases](https://github.com/KrisLee1/OriaTab-Releases/releases/latest) 的 Assets 下載 `oriatab-0.1.1.zip`，解壓縮到準備長期保留的資料夾。
2. Chrome 開啟 `chrome://extensions`；Edge 開啟 `edge://extensions`。
3. 開啟「開發人員模式」，選擇「載入未封裝項目」。
4. 選取直接包含 `manifest.json` 的資料夾，開啟新分頁即可使用。

也可以透過倉庫的 **Code → Download ZIP** 下載並解壓縮，或使用 Git 複製倉庫，再載入其中的 [`extension/`](../extension/) 資料夾。

## 外觀與 Aide

在「設定 → 外觀」選擇語言、液態玻璃或其他主題、明暗模式與顏色。介面支援本頁上方列出的 8 種語言。Aide 的模型服務需要在 Aide 設定中自行設定平台、API 金鑰與模型。

## 更新與校驗

手動安裝的版本需要手動更新。將新版檔案替換到相同的安裝路徑，再於擴充功能管理頁重新載入。請勿先解除安裝，這會移除本機資料。

下載倉庫的 [SHA256SUMS.txt](../SHA256SUMS.txt)，以以下指令計算 ZIP 的 SHA-256，並比較校驗值。

macOS / Linux:

```sh
shasum -a 256 oriatab-0.1.1.zip
```

Windows PowerShell:

```powershell
Get-FileHash .\oriatab-0.1.1.zip -Algorithm SHA256
```

## 疑難排解

- 載入失敗：確認所選資料夾直接包含 `manifest.json`。
- 新分頁沒有變化：確認擴充功能已啟用，並檢查其他新分頁擴充功能是否衝突。

[回報問題](https://github.com/KrisLee1/OriaTab-Releases/issues) · [第三方聲明](../extension/THIRD_PARTY_NOTICES.txt) · [授權條款](../extension/licenses/)
