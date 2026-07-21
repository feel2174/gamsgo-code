export const SITE_NAME = "짠구독";
export const SITE_TAGLINE = "짠내나게 아끼는 구독 생활";
export const SITE_URL = "https://example.com";
export const GAMSGO_AFFILIATE_URL = "https://www.gamsgo.com/partner/Chgyp";

export const DISCLOSURE_TEXT =
  "이 콘텐츠는 제휴 마케팅 활동의 일환으로 작성되었으며, 링크를 통한 가입 시 일정 수수료를 제공받을 수 있습니다.";

export type ServiceId =
  | "youtube-premium"
  | "netflix"
  | "chatgpt-plus"
  | "disney-plus"
  | "spotify";

export interface ServicePrice {
  id: ServiceId;
  name: string;
  category: "OTT" | "AI" | "음악";
  officialPrice: string;
  gamsgoPrice: string;
  discountLabel: string;
  href?: string;
  /** 구조화 데이터(Offer)용 확정 숫자 가격. 실시간 확인이 필요한 경우 생략 */
  gamsgoPriceKRW?: number;
}

export const SERVICE_PRICES: ServicePrice[] = [
  {
    id: "youtube-premium",
    name: "유튜브 프리미엄",
    category: "OTT",
    officialPrice: "월 14,900원 (연 178,800원)",
    gamsgoPrice: "연 82,800원 (월 환산 약 6,900원대)",
    discountLabel: "최대 70% 할인",
    href: "/youtube-premium-discount",
    gamsgoPriceKRW: 6900,
  },
  {
    id: "netflix",
    name: "넷플릭스 프리미엄",
    category: "OTT",
    officialPrice: "월 17,000원 (스탠다드 13,500원 / 광고형 7,000원)",
    gamsgoPrice: "월 5,000원대",
    discountLabel: "최대 70% 할인",
    href: "/netflix-discount",
    gamsgoPriceKRW: 5000,
  },
  {
    id: "chatgpt-plus",
    name: "챗GPT Plus",
    category: "AI",
    officialPrice: "월 $20 (약 2.8만원)",
    gamsgoPrice: "정가 대비 50% 이상 할인가 (실시간 확인 필요)",
    discountLabel: "최대 50%+ 할인",
    href: "/chatgpt-plus-discount",
  },
  {
    id: "disney-plus",
    name: "디즈니플러스",
    category: "OTT",
    officialPrice: "월 9,900원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "spotify",
    name: "스포티파이",
    category: "음악",
    officialPrice: "월 11,990원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
];

export interface KeywordLink {
  href: string;
  label: string;
}

/** 헤더 하단 가로스크롤 내비게이션에 노출되는 핵심 검색 키워드 */
export const TOP_KEYWORDS: KeywordLink[] = [
  { href: "/youtube-premium-discount", label: "유튜브 프리미엄 가격할인" },
  { href: "/netflix-discount", label: "넷플릭스 가격할인" },
  { href: "/chatgpt-plus-discount", label: "챗GPT 플러스 가격할인" },
  { href: "/price-comparison", label: "구독료 가격 비교" },
  { href: "/gamsgo-review", label: "겜스고 후기" },
  { href: "/community", label: "익명 후기 게시판" },
];

export function getServiceById(id: ServiceId): ServicePrice {
  const service = SERVICE_PRICES.find((s) => s.id === id);
  if (!service) throw new Error(`Unknown service id: ${id}`);
  return service;
}
