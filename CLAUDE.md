# Report Vault — 작업 규칙

- **"report vault에 발행해줘"는 공개 페이지 발행까지를 뜻한다.** (사용자 지시 2026-09-04)
  `reports/*.html` 추가 + `index.html` 카드·집계 갱신 + 커밋을 작업 브랜치에 푸시하는 것으로 끝내지 말고,
  **`main`에 병합·푸시**해 GitHub Pages(https://oogamecooo-byte.github.io/report-vault/)에 반영될 때까지가 발행이다.
- **푸시 성공 ≠ 발행 완료 — 공개 페이지 반영을 확인한다.** (사용자 지시 2026-11-10 · Pages 배포가 GitHub 쪽 시간 초과로 취소돼 공개 페이지가 옛 판으로 남은 사고)
  `python3 pages_verify.py --fix [--url 공개주소 --expect 확인할 글자]` — 마지막 커밋의 Pages 배포를 따라가 확인하고, 실패·취소면 빈 커밋으로 1회 재배포한다(exit 0 = 반영 · 2 = 미반영).
  발행 훅·전광판·STOCK MAP·Dive 가드는 푸시 직후 이것을 뒤에서 자동 실행한다(결과 = `auto_publish.log`의 `Pages:` 줄). 사용자에게 "발행했다"고 말하기 전에는 앞에서 실행해 exit 0을 본다.
- `index.html`은 `reports/`를 스캔해 생성되는 인덱스다. 로컬 빌더(`build_vault.py`, .gitignore 대상)가 없는 환경에서는
  카드를 날짜 묶음 안에 파일명 내림차순으로 수동 삽입하고, 집계(전체 · 분류 · 주제 · 날짜 묶음 건수 · 폴더)를 함께 갱신한다.
  main이 그 사이 움직였으면 리베이스 후 집계를 `reports/` 실측과 반드시 재대조한다(같은 줄을 같은 값으로 바꾼 커밋끼리는 충돌 없이 합쳐져 건수가 1 모자라게 된다).
- **번역본의 날짜는 한국시간(KST) 기준으로 잡는다.** (사용자 지시 2026-09-15)
  원문 게시 시각이 미 동부시간으로 전날이어도 `vault-date`는 한국시간 날짜를 쓴다 —
  ET 기준일로 잡으면 카드가 전날 묶음에 들어가 "오늘 날짜에 없는" 상태가 된다.
  원문 발행일(ET/현지시각)은 보고서 본문에 따로 밝힌다.
- 보고서 메타: `<title>`, `vault-stage`, `vault-topic`, `vault-topics`(보조, `|` 구분), `vault-date`(기준일), `vault-published`(발행일), `description`(카드 요약).
- **Dive 계열은 메인 목록에 Deep-Dive만 올린다.** (사용자 지시 2026-09-29) R-Dive·History-Dive·People-Dive·one-page-thesis 보고서는
  `reports/`에 올리되 `<meta name="vault-unlisted" content="1">`를 달고 `index.html`에 카드를 넣지 않는다 — 같은 종목 Deep-Dive 본문 최상단
  「하위 Dive 모음」(`<!--dive-hub:start-->` … `<!--dive-hub:end-->`, `<body>` 바로 뒤) 상대 링크로만 연다. chart-dive 보고서는 `reports/`에도 올리지 않는다.
