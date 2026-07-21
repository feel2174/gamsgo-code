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
  | "spotify"
  | "claude"
  | "gemini"
  | "genspark"
  | "perplexity"
  | "midjourney"
  | "github-copilot"
  | "cursor"
  | "deepl"
  | "canva"
  | "prime-video"
  | "apple-tv"
  | "crunchyroll"
  | "apple-music"
  | "microsoft-365"
  | "notion"
  | "figma"
  | "expressvpn"
  | "adobe-cc"
  | "playstation-plus"
  | "xbox-game-pass"
  | "ea-play";

export type ServiceCategory = "OTT" | "AI" | "음악" | "소프트웨어" | "게임";

export interface ServicePrice {
  id: ServiceId;
  name: string;
  category: ServiceCategory;
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
  {
    id: "claude",
    name: "클로드 (Claude)",
    category: "AI",
    officialPrice: "월 $20",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "gemini",
    name: "제미나이 (Gemini)",
    category: "AI",
    officialPrice: "월 약 $19.99",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "genspark",
    name: "젠스파크 (Genspark)",
    category: "AI",
    officialPrice: "월 $24.99",
    gamsgoPrice: "월 약 $16.99",
    discountLabel: "최대 30%+ 할인",
  },
  {
    id: "perplexity",
    name: "퍼플렉시티 (Perplexity)",
    category: "AI",
    officialPrice: "월 $20",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "midjourney",
    name: "미드저니 (Midjourney)",
    category: "AI",
    officialPrice: "월 약 $10~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "github-copilot",
    name: "깃허브 코파일럿",
    category: "AI",
    officialPrice: "월 $10",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "cursor",
    name: "커서 (Cursor)",
    category: "AI",
    officialPrice: "월 $20",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "deepl",
    name: "딥엘 (DeepL)",
    category: "AI",
    officialPrice: "월 약 €10~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "canva",
    name: "캔바 (Canva Pro)",
    category: "소프트웨어",
    officialPrice: "월 약 14,000원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "prime-video",
    name: "프라임 비디오",
    category: "OTT",
    officialPrice: "월 약 4,900원~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "apple-tv",
    name: "Apple TV+",
    category: "OTT",
    officialPrice: "월 약 6,900원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "crunchyroll",
    name: "크런치롤",
    category: "OTT",
    officialPrice: "월 약 $7.99~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "apple-music",
    name: "Apple Music",
    category: "음악",
    officialPrice: "월 약 8,900원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "소프트웨어",
    officialPrice: "월 약 11,900원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "notion",
    name: "노션 (Notion)",
    category: "소프트웨어",
    officialPrice: "월 $10",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "figma",
    name: "피그마 (Figma)",
    category: "소프트웨어",
    officialPrice: "월 약 $15~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "expressvpn",
    name: "ExpressVPN",
    category: "소프트웨어",
    officialPrice: "월 약 $12.95",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "adobe-cc",
    name: "어도비 (Adobe CC)",
    category: "소프트웨어",
    officialPrice: "월 약 $59.99",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "playstation-plus",
    name: "PlayStation Plus",
    category: "게임",
    officialPrice: "월 약 7,900원~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "xbox-game-pass",
    name: "Xbox Game Pass",
    category: "게임",
    officialPrice: "월 약 20,000원대",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
  },
  {
    id: "ea-play",
    name: "EA Play",
    category: "게임",
    officialPrice: "월 약 $5.99",
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

export interface TrustBadge {
  icon: string;
  label: string;
}

/** 신뢰 배지: '사기 아닌가' 반박을 즉시 제거하기 위한 구체적 수치·권위 요소 */
export const TRUST_BADGES: TrustBadge[] = [
  { icon: "🌍", label: "150개국 1,000만 명" },
  { icon: "⭐", label: "평점 4.8 (3,674건)" },
  { icon: "⚡", label: "결제 후 즉시 발송" },
  { icon: "🔄", label: "24시간 환불 보장" },
];

/** 사기/신뢰 반박을 선제 차단하는 공통 objection FAQ. 각 페이지 FAQ 최상단에 배치 */
export const OBJECTION_FAQS = [
  {
    question: "이거 사기 아니에요?",
    answer:
      "겜스고는 전 세계 150개국에서 1,000만 명 이상이 이용 중이고, 실제 이용자 평점도 4.8점(3,674건)입니다. 결제 즉시 계정이 발송되고, 문제가 생기면 24시간 안에 환불도 받을 수 있어서 걱정하시는 것보다 훨씬 안전하게 운영되고 있어요.",
  },
  {
    question: "진짜 정상적으로 다 되나요? 어디 막히는 거 아니에요?",
    answer:
      "네. 별도 앱 설치나 우회 프로그램 없이 공식 앱·사이트에 그대로 로그인해서 씁니다. 화질, 기능 모두 정가로 결제한 것과 100% 동일하게 작동해요.",
  },
];

export function getServiceById(id: ServiceId): ServicePrice {
  const service = SERVICE_PRICES.find((s) => s.id === id);
  if (!service) throw new Error(`Unknown service id: ${id}`);
  return service;
}
