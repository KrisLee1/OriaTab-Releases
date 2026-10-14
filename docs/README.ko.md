# OriaTab · 확장 프로그램 다운로드

[简体中文](../README.md) · [繁體中文](../docs/README.zh-TW.md) · [English](../docs/README.en.md) · [日本語](../docs/README.ja.md) · **한국어** · [Deutsch](../docs/README.de.md) · [Français](../docs/README.fr.md) · [Русский](../docs/README.ru.md)

[Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/gjdpgbmoageooodkfnkjkookbblegkac) · [OriaTheme](https://theme.oria.org.cn)

OriaTab은 검색, 북마크, 탭 그룹, 배경화면, 달력을 갖춘 맞춤형 새 탭 페이지입니다. Aide의 채팅과 번역은 일반 웹페이지에서도 플로팅 창으로 사용할 수 있습니다.

## 다운로드 및 설치

데스크톱 Chrome과 Edge에서 동일한 Manifest V3 패키지를 사용합니다. Chrome 웹 스토어 버전은 심사 중입니다.

1. [Releases → Assets](https://github.com/KrisLee1/OriaTab-Releases/releases/latest)에서 `oriatab-0.1.0.zip`을 다운로드하고 계속 사용할 폴더에 압축을 풉니다.
2. Chrome에서 `chrome://extensions`, Edge에서 `edge://extensions`를 엽니다.
3. **개발자 모드**를 켜고 **압축해제된 확장 프로그램을 로드합니다**를 선택합니다.
4. `manifest.json`이 바로 들어 있는 폴더를 선택한 뒤 새 탭을 엽니다.

저장소의 **Code → Download ZIP**으로 다운로드하여 압축을 풀거나 Git으로 복제한 후, 내부의 [`extension/`](../extension/) 폴더를 로드해도 됩니다.

## 외관 및 Aide

**설정 → 외관**에서 언어, 리퀴드 글래스 또는 다른 테마, 라이트/다크 모드, 색상을 선택할 수 있습니다. 인터페이스는 위에 링크된 8개 언어를 지원합니다. 모델 서비스를 사용하려면 Aide 설정에서 제공업체, API 키, 모델을 직접 설정하세요.

## 업데이트 및 검증

수동 설치한 확장 프로그램은 수동으로 업데이트해야 합니다. 같은 설치 폴더의 파일을 새 버전으로 교체한 뒤 확장 프로그램 관리 페이지에서 새로고침하세요. 먼저 삭제하면 로컬 데이터가 제거되므로 삭제하지 마세요.

첨부된 `SHA256SUMS.txt`를 다운로드하고 아래 명령으로 ZIP의 SHA-256을 계산하여 비교하세요.

macOS / Linux:

```sh
shasum -a 256 oriatab-0.1.0.zip
```

Windows PowerShell:

```powershell
Get-FileHash .\oriatab-0.1.0.zip -Algorithm SHA256
```

## 문제 해결

- 로드 실패: 선택한 폴더에 `manifest.json`이 바로 들어 있는지 확인하세요.
- 새 탭이 바뀌지 않음: OriaTab이 사용 설정되어 있는지, 다른 새 탭 확장 프로그램과 충돌하는지 확인하세요.

[문제 신고](https://github.com/KrisLee1/OriaTab-Releases/issues) · [타사 고지](../extension/THIRD_PARTY_NOTICES.txt) · [라이선스](../extension/licenses/)
