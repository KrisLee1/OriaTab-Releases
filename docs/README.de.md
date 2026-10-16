# OriaTab · Erweiterung herunterladen

[简体中文](../README.md) · [繁體中文](../docs/README.zh-TW.md) · [English](../docs/README.en.md) · [日本語](../docs/README.ja.md) · [한국어](../docs/README.ko.md) · **Deutsch** · [Français](../docs/README.fr.md) · [Русский](../docs/README.ru.md)

[Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/gjdpgbmoageooodkfnkjkookbblegkac) · [Chrome Web Store](https://chrome.google.com/webstore/detail/ohhiiomjfebohooaapnoiiegonnmhfhj) · [OriaTheme](https://theme.oria.org.cn)

OriaTab ist eine anpassbare neue Tab-Seite mit Suche, Lesezeichen, Tabgruppen, Hintergrundbildern und Kalender. Aide bietet Chat und Übersetzung auch in einem schwebenden Fenster auf gewöhnlichen Webseiten.

## Download und Installation

Chrome und Edge für Desktop verwenden dasselbe Manifest-V3-Paket.

1. Lade `oriatab-0.2.0.zip` unter [Releases → Assets](https://github.com/KrisLee1/OriaTab-Releases/releases/latest) herunter und entpacke die Datei in einen Ordner, den du dauerhaft behältst.
2. Öffne `chrome://extensions` in Chrome oder `edge://extensions` in Edge.
3. Aktiviere den **Entwicklermodus** und wähle **Entpackte Erweiterung laden**.
4. Wähle den Ordner, der `manifest.json` direkt enthält, und öffne einen neuen Tab.

Alternativ kannst du das Repository über **Code → Download ZIP** herunterladen und entpacken oder mit Git klonen. Lade anschließend den enthaltenen Ordner [`extension/`](../extension/).

## Darstellung und Aide

Unter **Einstellungen → Darstellung** kannst du Sprache, Liquid Glass oder ein anderes Design, hellen/dunklen Modus und Farben wählen. Die Oberfläche unterstützt die acht oben verlinkten Sprachen. Für einen Modelldienst musst du Anbieter, API-Schlüssel und Modell in den Aide-Einstellungen einrichten.

## Updates und Prüfsumme

Manuell installierte Erweiterungen müssen manuell aktualisiert werden. Ersetze die Dateien im selben Installationsordner und lade die Erweiterung auf der Verwaltungsseite neu. Deinstalliere sie nicht vorher: Dabei werden lokale Erweiterungsdaten entfernt.

Lade [SHA256SUMS.txt](../SHA256SUMS.txt) aus diesem Repository herunter. Berechne mit dem folgenden Befehl den SHA-256-Wert der ZIP-Datei und vergleiche ihn mit der Prüfsumme.

macOS / Linux:

```sh
shasum -a 256 oriatab-0.2.0.zip
```

Windows PowerShell:

```powershell
Get-FileHash .\oriatab-0.2.0.zip -Algorithm SHA256
```

## Fehlerbehebung

- Laden fehlgeschlagen: Prüfe, ob `manifest.json` direkt im ausgewählten Ordner liegt.
- Neue Tab-Seite unverändert: Prüfe, ob OriaTab aktiviert ist und ob eine andere Erweiterung für neue Tabs einen Konflikt verursacht.

[Problem melden](https://github.com/KrisLee1/OriaTab-Releases/issues) · [Hinweise zu Drittanbietern](../extension/THIRD_PARTY_NOTICES.txt) · [Lizenzen](../extension/licenses/)
