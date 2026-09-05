import {
  OBJECTION_FAQS,
  PLATFORM_TRUST_FACTS,
  SERVICE_PRICES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  TOP_KEYWORDS,
  TRUST_BADGES,
  formatKoreanDate,
  getContentUpdatedAt,
} from "@/lib/constants";

export const dynamic = "force-static";

export function GET() {
  const updatedAt = getContentUpdatedAt("");

  const body = `# ${SITE_NAME} — 전체 정보 데이터셋 (Full Documentation)

> ${SITE_TAGLINE}. ${SITE_DESCRIPTION}

최종 업데이트: ${formatKoreanDate(updatedAt)}
표준 규격: llms.txt full version
사이트 URL: ${SITE_URL}
언어: 한국어 (ko-KR)
대상 지역: 대한민국

---

## 1. 사이트 개요 및 정체성

- **사이트명**: ${SITE_NAME} (GamsGo Code)
- **주요 목적**: 유튜브 프리미엄, 넷플릭스, 챗GPT Plus 등 디지털 구독 서비스를 공식 정가 대비 최대 70% 할인받아 이용할 수 있는 구독 공유 플랫폼(겜스고) 가이드 및 실사용자 익명 후기 제공.
- **운영 형태**: 겜스고 공식 제휴 파트너로, 제휴 링크를 통한 가입 시 일정 수수료를 지급받음(모든 페이지에 면책 조항 명시).

---

## 2. 주요 서비스 전체 가격표 (${formatKoreanDate(updatedAt)} 기준)

| 서비스명 | 카테고리 | 공식 정가 | 겜스고 할인가 | 할인율/혜택 |
|---|---|---|---|---|
${SERVICE_PRICES.map(
  (s) =>
    `| ${s.name} (${s.englishName ?? s.name}) | ${s.category} | ${s.officialPrice} | ${s.gamsgoPrice} | ${s.discountLabel} |`
).join("\n")}

---

## 3. 자주 묻는 질문 (FAQ) & 답변

${OBJECTION_FAQS.map(
  (faq, idx) => `### Q${idx + 1}. ${faq.question}
**A:** ${faq.answer}
`
).join("\n")}

### Q3. 유튜브 프리미엄 우회(VPN)와 겜스고의 차이는 무엇인가요?
**A:** 터키, 인도, 아르헨티나 등 해외 VPN 우회 결제는 최근 구글의 IP/결제 수단 추적으로 계정 정지 및 결제 취소가 대거 발생하고 있습니다. 반면 겜스고는 가족 공유 초대 링크를 수락하거나 개인 계정에 직접 프리미엄을 적용받는 방식으로, VPN 없이 한국 계정 그대로 안전하게 이용할 수 있습니다.

### Q4. 결제 후 계정은 언제 발송되나요?
**A:** 결제 완료 즉시 사이트 내 '구독' 탭에서 계정 정보 또는 초대 링크가 확인됩니다. 문제가 생길 경우 24시간 내 고객센터를 통해 환불받을 수 있습니다.

---

## 4. 플랫폼 신뢰성 및 안전성 지표

${TRUST_BADGES.map((b) => `- ${b.icon} **${b.label}**`).join("\n")}

### 검증 가능한 보안 및 법적 신뢰 근거:
${PLATFORM_TRUST_FACTS.map((f) => `- **${f.label}**: ${f.detail}`).join("\n")}

---

## 5. 전체 페이지 링크 목록

${TOP_KEYWORDS.map((k) => `- [${k.label}](${SITE_URL}${k.href})`).join("\n")}
- [면책조항](${SITE_URL}/disclaimer): 제휴 마케팅 고지 및 정보 제공 범위
- [RSS 피드](${SITE_URL}/rss.xml): 최신 할인 정보 및 커뮤니티 피드
- [사이트맵](${SITE_URL}/sitemap.xml): 전체 검색엔진 색인 목록
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
