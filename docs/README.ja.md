# OriaTab · 拡張機能のダウンロード

[简体中文](../README.md) · [繁體中文](../docs/README.zh-TW.md) · [English](../docs/README.en.md) · **日本語** · [한국어](../docs/README.ko.md) · [Deutsch](../docs/README.de.md) · [Français](../docs/README.fr.md) · [Русский](../docs/README.ru.md)

[Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/gjdpgbmoageooodkfnkjkookbblegkac) · [Chrome Web Store](https://chrome.google.com/webstore/detail/ohhiiomjfebohooaapnoiiegonnmhfhj) · [OriaTheme](https://theme.oria.org.cn)

OriaTab は、検索、ブックマーク、タブグループ、壁紙、カレンダーを備えた、カスタマイズ可能な新しいタブページです。Aide のチャットと翻訳は、通常のウェブページでもフローティングウィンドウで利用できます。

## ダウンロードとインストール

デスクトップ版 Chrome と Edge は同じ Manifest V3 パッケージを使用します。

1. [Releases → Assets](https://github.com/KrisLee1/OriaTab-Releases/releases/latest) から `oriatab-0.1.1.zip` をダウンロードし、継続して使用するフォルダーに展開します。
2. Chrome では `chrome://extensions`、Edge では `edge://extensions` を開きます。
3. 「デベロッパー モード」を有効にし、「パッケージ化されていない拡張機能を読み込む」を選びます。
4. `manifest.json` が直接入っているフォルダーを選択し、新しいタブを開きます。

リポジトリの **Code → Download ZIP** からダウンロードして展開するか、Git でクローンして、その中の [`extension/`](../extension/) フォルダーを読み込むこともできます。

## 外観と Aide

「設定 → 外観」で言語、液体ガラスなどのテーマ、ライト／ダークモード、色を選択できます。上部のリンクにある 8 言語に対応しています。モデルサービスを利用するには、Aide の設定でプロバイダー、API キー、モデルを設定してください。

## 更新と検証

手動インストールした拡張機能は手動で更新します。同じインストール先のファイルを新しいバージョンに置き換え、拡張機能の管理ページで再読み込みしてください。アンインストールするとローカルデータが削除されるため、先にアンインストールしないでください。

リポジトリの [SHA256SUMS.txt](../SHA256SUMS.txt) をダウンロードし、次のコマンドで ZIP の SHA-256 を計算して値を比較します。

macOS / Linux:

```sh
shasum -a 256 oriatab-0.1.1.zip
```

Windows PowerShell:

```powershell
Get-FileHash .\oriatab-0.1.1.zip -Algorithm SHA256
```

## 問題が発生した場合

- 読み込めない：選択したフォルダーに `manifest.json` が直接入っているか確認してください。
- 新しいタブが変わらない：拡張機能が有効か、他の新しいタブ拡張機能と競合していないか確認してください。

[問題を報告](https://github.com/KrisLee1/OriaTab-Releases/issues) · [第三者に関する通知](../extension/THIRD_PARTY_NOTICES.txt) · [ライセンス](../extension/licenses/)
