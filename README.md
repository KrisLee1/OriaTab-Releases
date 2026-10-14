# OriaTab · 扩展下载

**简体中文** · [繁體中文](docs/README.zh-TW.md) · [English](docs/README.en.md) · [日本語](docs/README.ja.md) · [한국어](docs/README.ko.md) · [Deutsch](docs/README.de.md) · [Français](docs/README.fr.md) · [Русский](docs/README.ru.md)

OriaTab 的公开扩展包发布仓库，提供安装包、版本说明和校验值。

[下载最新版本](https://github.com/KrisLee1/OriaTab-Releases/releases/latest) · [Edge 扩展商店](https://microsoftedge.microsoft.com/addons/detail/gjdpgbmoageooodkfnkjkookbblegkac) · [Chrome Web Store](https://chrome.google.com/webstore/detail/ohhiiomjfebohooaapnoiiegonnmhfhj) · [OriaTheme](https://theme.oria.org.cn)

桌面 Chrome 和 Edge 可以手动加载同一份 Manifest V3 扩展包。

## 手动安装

1. 在 Releases 的 Assets 中下载 `oriatab-0.1.1.zip`，解压到准备长期保留的文件夹。
2. Chrome 打开 `chrome://extensions`；Edge 打开 `edge://extensions`。
3. 开启「开发者模式」，点击「加载已解压的扩展程序」。
4. 选择包含 `manifest.json` 的解压目录，打开新标签页即可使用。

也可以通过仓库的 **Code → Download ZIP** 下载并解压，或使用 Git 克隆本仓库；加载其中的 [`extension/`](extension/) 文件夹即可。该目录是已解压的扩展包，包含 `manifest.json`。

## 首次使用

在「设置 → 外观」中选择语言、主题、明暗模式和颜色。Aide 的模型服务需要在 Aide 设置中配置平台、API 密钥和模型。

## 更新与校验

手动安装的版本需要手动更新。将新版本解压后替换原安装文件夹中的文件，在扩展管理页点击「重新加载」。保留同一个安装路径；不要先卸载扩展，卸载会移除本地扩展数据。

校验值见仓库的 [SHA256SUMS.txt](SHA256SUMS.txt)。macOS / Linux 可在下载目录运行 `shasum -a 256 oriatab-0.1.1.zip`，Windows PowerShell 可运行 `Get-FileHash .\oriatab-0.1.1.zip -Algorithm SHA256`，并与校验文件比较。

## 功能

- 可自定义新标签页，支持液态玻璃、其他主题、明暗模式和外观颜色。
- 书签、标签组、壁纸与日历。
- Aide 对话和翻译，可在普通网页中打开悬浮窗口；模型服务需自行配置。
- 简体中文、繁體中文、English、日本語、한국어、Deutsch、Français、Русский。

## 第三方声明

扩展包中的第三方组件声明和许可证见 [`extension/THIRD_PARTY_NOTICES.txt`](extension/THIRD_PARTY_NOTICES.txt) 与 [`extension/licenses/`](extension/licenses/)。

## 常见问题

- 加载失败：确认选择的目录直接包含 `manifest.json`，而不是它的上层目录。
- 新标签页没有变化：确认扩展已启用，并检查是否有其他新标签页扩展冲突。

[反馈问题](https://github.com/KrisLee1/OriaTab-Releases/issues)
