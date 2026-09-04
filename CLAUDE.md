# Report Vault — 작업 규칙

- **"report vault에 발행해줘"는 공개 페이지 발행까지를 뜻한다.** (사용자 지시 2026-09-04)
  `reports/*.html` 추가 + `index.html` 카드·집계 갱신 + 커밋을 작업 브랜치에 푸시하는 것으로 끝내지 말고,
  **`main`에 병합·푸시**해 GitHub Pages(https://oogamecooo-byte.github.io/report-vault/)에 반영될 때까지가 발행이다.
- `index.html`은 `reports/`를 스캔해 생성되는 인덱스다. 로컬 빌더(`build_vault.py`, .gitignore 대상)가 없는 환경에서는
  카드를 날짜 묶음 안에 파일명 내림차순으로 수동 삽입하고, 집계(전체 · 분류 · 주제 · 날짜 묶음 건수 · 폴더)를 함께 갱신한다.
  main이 그 사이 움직였으면 리베이스 후 집계를 `reports/` 실측과 반드시 재대조한다(같은 줄을 같은 값으로 바꾼 커밋끼리는 충돌 없이 합쳐져 건수가 1 모자라게 된다).
- 보고서 메타: `<title>`, `vault-stage`, `vault-topic`, `vault-topics`(보조, `|` 구분), `vault-date`(기준일), `vault-published`(발행일), `description`(카드 요약).
