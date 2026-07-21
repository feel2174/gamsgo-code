export const SITE_NAME = "구독료 절약 가이드";
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
  },
  {
    id: "netflix",
    name: "넷플릭스 프리미엄",
    category: "OTT",
    officialPrice: "월 17,000원 (스탠다드 13,500원 / 광고형 7,000원)",
    gamsgoPrice: "월 5,000원대",
    discountLabel: "최대 70% 할인",
    href: "/netflix-discount",
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

export function getServiceById(id: ServiceId): ServicePrice {
  const service = SERVICE_PRICES.find((s) => s.id === id);
  if (!service) throw new Error(`Unknown service id: ${id}`);
  return service;
}
