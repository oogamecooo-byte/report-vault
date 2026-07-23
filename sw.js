// Report Vault 서비스워커 — 오프라인 캐싱 없음(사용자 요청).
// 설치 가능(installable) 조건 충족용 최소 워커 + 네트워크 pass-through.
// 항상 온라인으로 최신 보고서를 불러온다.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  // respondWith 를 호출하지 않으므로 브라우저 기본 네트워크 요청으로 처리(캐시 안 함).
});
