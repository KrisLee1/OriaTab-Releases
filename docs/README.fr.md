# OriaTab · Télécharger l’extension

[简体中文](../README.md) · [繁體中文](../docs/README.zh-TW.md) · [English](../docs/README.en.md) · [日本語](../docs/README.ja.md) · [한국어](../docs/README.ko.md) · [Deutsch](../docs/README.de.md) · **Français** · [Русский](../docs/README.ru.md)

[Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/gjdpgbmoageooodkfnkjkookbblegkac) · [OriaTheme](https://theme.oria.org.cn)

OriaTab propose une page de nouvel onglet personnalisable avec recherche, favoris, groupes d’onglets, fonds d’écran et calendrier. Aide permet de discuter et de traduire, y compris dans une fenêtre flottante sur les pages web ordinaires.

## Téléchargement et installation

Chrome et Edge pour ordinateur utilisent le même paquet Manifest V3. La version du Chrome Web Store est en cours d’examen.

1. Téléchargez `oriatab-0.1.0.zip` dans [Releases → Assets](https://github.com/KrisLee1/OriaTab-Releases/releases/latest), puis extrayez-le dans un dossier que vous conserverez.
2. Ouvrez `chrome://extensions` dans Chrome ou `edge://extensions` dans Edge.
3. Activez le **Mode développeur**, puis choisissez **Charger l’extension non empaquetée**.
4. Sélectionnez le dossier contenant directement `manifest.json`, puis ouvrez un nouvel onglet.

Vous pouvez aussi télécharger le dépôt via **Code → Download ZIP** et l’extraire, ou le cloner avec Git. Chargez ensuite le dossier [`extension/`](../extension/) qu’il contient.

## Apparence et Aide

Dans **Paramètres → Apparence**, choisissez la langue, Liquid Glass ou un autre thème, le mode clair/sombre et les couleurs. L’interface prend en charge les huit langues proposées en haut de cette page. Pour utiliser un service de modèles, configurez le fournisseur, la clé API et le modèle dans les paramètres d’Aide.

## Mise à jour et vérification

Une installation manuelle nécessite des mises à jour manuelles. Remplacez les fichiers dans le même dossier d’installation, puis rechargez l’extension depuis sa page de gestion. Ne la désinstallez pas au préalable : cela supprimerait ses données locales.

Téléchargez la pièce jointe `SHA256SUMS.txt`. Calculez le SHA-256 du ZIP avec la commande ci-dessous, puis comparez le résultat au fichier.

macOS / Linux:

```sh
shasum -a 256 oriatab-0.1.0.zip
```

Windows PowerShell:

```powershell
Get-FileHash .\oriatab-0.1.0.zip -Algorithm SHA256
```

## Dépannage

- Échec du chargement : vérifiez que le dossier sélectionné contient directement `manifest.json`.
- Le nouvel onglet ne change pas : vérifiez qu’OriaTab est activé et qu’aucune autre extension de nouvel onglet n’entre en conflit.

[Signaler un problème](https://github.com/KrisLee1/OriaTab-Releases/issues) · [Avis relatifs aux tiers](../extension/THIRD_PARTY_NOTICES.txt) · [Licences](../extension/licenses/)
