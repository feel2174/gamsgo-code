# 홈 상단(above-the-fold) 재구성 설계

- 작성일: 2026-08-08
- 대상: `app/page.tsx` 홈 히어로 영역
- 벤치마크: pickleplus-coupon.com (전환 지향 상단 구성)
- 롤백 지점: git tag `pre-redesign-benchmark` (`git reset --hard pre-redesign-benchmark`)

## 배경 / 목표

참조 사이트(pickleplus-coupon.com)는 접속 즉시 상단에서 **행동 키워드 → 강조 박스 →
주 CTA → 점프 내비 → 서비스 로고 그리드** 순으로 사용자를 곧바로 전환 동선에 태운다.
현재 겜스고코드 홈은 태그라인 → H1 → 설명문단 → 신뢰배지 → CTA 순으로, 행동 유도의
"즉시성"이 약하고 눈에 띄는 할인 강조 요소가 없다.

이 재구성의 목표는 **홈 above-the-fold를 참조 사이트의 전환 지향 구성으로 재배치**하되,
겜스고의 실제 전환 방식(쿠폰 코드가 아닌 제휴 링크)과 브랜드(레드 #EF534F), 그리고
최근 확보한 성능 최적화(서브셋 폰트·이미지 0)를 유지하는 것이다.

## 범위

- **포함**: `app/page.tsx`의 첫 번째 `<section>`(히어로) 재구성.
- **제외**: 그 아래 기존 섹션(서비스 가격 카드, 커뮤니티 후기, 가이드 카드)과
  다른 페이지·서브페이지는 이번 범위 밖(그대로 유지).

## 결정 사항 (확정)

| 항목 | 결정 |
|---|---|
| 재구성 범위 | 홈 상단(above-the-fold)만 |
| 전환 방식 | 할인 강조 박스 + 즉시 CTA (없는 쿠폰 코드 위조 금지) |
| 레이아웃 | 참조형 스택: 헤드라인 → 할인박스 → CTA → 점프내비 → 로고그리드 |
| 브랜드 컬러 | 겜스고 레드 #EF534F 유지 (새 색 추가 없음) |

## 컴포넌트 구조 / 파일 변경

- **신설** `components/home/DiscountHeroBox.tsx`
  - 역할: 할인 강조 박스 + 주 CTA 묶음.
  - 입력: 없음(내부에서 `SERVICE_PRICES`의 대표 예시가와 `GAMSGO_AFFILIATE_URL` 사용) —
    또는 대표 서비스 id를 prop으로 받아 유연화(구현 시 결정, 기본값 youtube-premium).
  - 의존: `lib/constants`(가격·링크), 기존 `AffiliateCTA` 재사용 가능.
- **신설** `components/home/ServiceLogoStrip.tsx`
  - 역할: 대표 서비스 8~12개 브랜드 로고를 한 줄/그리드로 노출 + "150여 개 서비스 지원" 캡션.
  - 의존: 기존 `ServiceIconBadge`(`components/ServiceIcon.tsx`)와 `SERVICE_ICONS`
    (`lib/serviceIcons.ts`) 재사용 — 인라인 SVG/이니셜 배지, 네트워크 이미지 없음.
- **수정** `app/page.tsx`
  - 첫 히어로 `<section>`을 아래 "상단 블록 스펙" 순서로 재구성.
  - 기존 `AffiliateCTA`, `TrustBadges` 재사용. 하단 섹션은 변경 없음.
  - 점프링크 내비는 히어로 내 인라인(앵커 pills). 온페이지 섹션에 `id` 부여 필요.

## 상단 블록 스펙 (위 → 아래)

1. **행동 헤드라인 (H1)**
   - 문구(초안): "유튜브·넷플릭스·챗GPT 구독료, 최대 70% 할인"
   - 스타일: `text-2xl`~`text-3xl`, `font-extrabold`, `leading-snug`, 중앙 정렬.
   - 주의: 페이지 H1은 하나만 유지(기존 H1을 이 문구로 대체).

2. **할인 강조 박스** (`DiscountHeroBox`)
   - 코드 박스 자리 대체. 레드 계열 강조 카드.
   - 내용: `🔥 최대 70% 할인` + 실제 예시가(예: 유튜브 프리미엄 정가 14,900원 → 월 6,900원대).
     값은 `SERVICE_PRICES`의 실제 필드(`officialPrice`/`gamsgoPrice`) 사용 — 위조 금지.
   - 정가는 취소선(`line-through`), 할인가는 강조. 대비 AA 준수(레드 배경엔 흰/rose-50 텍스트).

3. **주 CTA 버튼**
   - 기존 `AffiliateCTA` 사용, 라벨 "지금 특가 확인하기 →".
   - 링크: `GAMSGO_AFFILIATE_URL`, `rel="sponsored noopener noreferrer"`, `target="_blank"`.

4. **신뢰 배지 한 줄**
   - 기존 `TrustBadges` 재사용(150개국·평점4.8·즉시발송·환불).

5. **점프링크 내비**
   - 온페이지 앵커 pills: `가격비교 · 찐후기 · 할인가이드` → 해당 섹션으로 스크롤.
   - 헤더의 키워드 스크롤 내비와 중복을 피하기 위해 "온페이지 앵커"로 차별화.
   - 대상 섹션에 `id`(예: `#price`, `#reviews`, `#guides`) 부여.

6. **서비스 로고 그리드** (`ServiceLogoStrip`)
   - 대표 8~12개 브랜드 로고(`SERVICE_ICONS`)를 한눈에. 캡션 "150여 개 서비스 지원".
   - 네트워크 이미지 0 (인라인 SVG/이니셜 배지).

## 성능 · 정직성 가드레일 (필수 준수)

- **히어로 배경 이미지 없음**: 텍스트/CSS만 사용해 최근 LCP 최적화 유지.
  - LCP 요소가 할인 박스 헤드라인으로 이동할 수 있으나, 프리로드된 서브셋 폰트 범위 내라
    LCP 영향은 미미. 새 폰트/이미지 리소스 추가 금지.
- **로고 그리드는 기존 인라인 SVG 배지 재사용**: woff2/이미지 추가 없음.
- **쿠폰 코드 위조 금지**: "코드 복사" 흉내 대신 실제 할인율·가격 기반 강조 박스.
- **팔레트 고정**: 겜스고 레드(#EF534F) 및 기존 rose/neutral 스케일만 사용.
- **접근성**: 색 대비 WCAG AA(본문 4.5:1) 유지, H1 단일·헤딩 순서 정합, CTA는 링크/버튼 시맨틱.

## 검증 방법

- 로컬 dev(`http://localhost:3000`)에서 상단 육안 확인.
- `npx tsc --noEmit` 통과.
- 로컬 Lighthouse(모바일)로 성능·접근성 점수가 재구성 전 대비 회귀하지 않는지 확인
  (특히 LCP·색대비·헤딩 순서).

## 롤백

문제 시 `git reset --hard pre-redesign-benchmark`로 재구성 전 상태(폰트 최적화 완료본)로 복귀.
