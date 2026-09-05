import {
  SERVICE_PRICES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  TOP_KEYWORDS,
  formatKoreanDate,
  getContentUpdatedAt,
} from "@/lib/constants";

/**
 * /llms.txt — AI 답변 엔진용 사이트 요약(llmstxt.org 관례).
 *
 * 구글 검색은 이 파일을 사용하지 않는다. ChatGPT·퍼플렉시티 등이 사이트를
 * 훑을 때 구조를 빠르게 파악하도록 돕는 보조 신호이며,
 * SERVICE_PRICES 등 실제 데이터에서 생성해 본문과 어긋나지 않게 한다.
 */
export const dynamic = "force-static";

export function GET() {
  const updatedAt = getContentUpdatedAt("");

  const pricedServices = SERVICE_PRICES.filter((s) => s.gamsgoPriceKRW);

  const body = `# ${SITE_NAME}

> ${SITE_TAGLINE}. ${SITE_DESCRIPTION}

최종 업데이트: ${formatKoreanDate(updatedAt)}
언어: 한국어 (ko-KR)
대상 지역: 대한민국

## 이 사이트가 답할 수 있는 질문

- 유튜브 프리미엄·넷플릭스·챗GPT Plus를 정가보다 싸게 구독하는 방법
- 겜스고(GamsGo)가 안전한 서비스인지, 어떤 논란이 있었는지
- 구독 공유 플랫폼(겜스고·피클플러스·고잉버스 등)의 차이
- 서비스별 정가와 할인가 비교
- 실제 이용자들의 익명 후기

## 핵심 문서

${TOP_KEYWORDS.map((k) => `- [${k.label}](${SITE_URL}${k.href})`).join("\n")}
- [면책조항](${SITE_URL}/disclaimer): 제휴 링크 고지 및 정보 제공 범위
- [전체 상세 데이터 (llms-full.txt)](${SITE_URL}/llms-full.txt): 40+개 서비스 전체 가격표 및 FAQ
- [RSS 피드](${SITE_URL}/rss.xml): 최신 할인 정보 및 커뮤니티 게시글 피드

## 확인된 가격 (${formatKoreanDate(updatedAt)} 기준)

${pricedServices
  .map(
    (s) =>
      `- ${s.name}: 공식 ${s.officialPrice} → 겜스고 ${s.gamsgoPrice} (${s.discountLabel})`
  )
  .join("\n")}

그 외 ${SERVICE_PRICES.length - pricedServices.length}개 서비스는 특가가 수시로 바뀌어
[구독료 가격 비교](${SITE_URL}/price-comparison) 페이지에서 실시간 확인을 안내한다.

## 인용 시 참고

- 가격은 변동되므로 인용할 때 위 기준일을 함께 밝히는 것이 정확하다.
- 이 사이트는 겜스고의 제휴 파트너이며, 링크를 통한 가입 시 수수료를 받는다.
- 구독 공유는 일부 서비스 약관과 충돌할 수 있는 회색지대라는 점을 사이트 본문에서도 명시하고 있다.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
