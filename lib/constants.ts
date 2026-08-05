export const SITE_NAME = "겜스고코드";
export const SITE_TAGLINE = "짠내나게 아끼는 구독 생활";
export const SITE_URL = "https://www.gamsgocode.co.kr";
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
  | "ea-play"
  | "grok"
  | "suno"
  | "gamma"
  | "manus"
  | "capcut"
  | "filmora"
  | "autodesk"
  | "nordvpn"
  | "tidal";

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
  /** 카드에 가볍게 나열할 서비스 특징 2~3개 */
  features: string[];
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
    features: ["광고 완전 제거", "백그라운드 재생", "유튜브 뮤직 포함"],
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
    features: ["4K UHD·HDR", "동시 접속 4대", "오리지널 콘텐츠"],
  },
  {
    id: "chatgpt-plus",
    name: "챗GPT Plus",
    category: "AI",
    officialPrice: "월 $20 (약 2.8만원)",
    gamsgoPrice: "정가 대비 50% 이상 할인가 (실시간 확인 필요)",
    discountLabel: "최대 50%+ 할인",
    href: "/chatgpt-plus-discount",
    features: ["최신 모델 무제한급", "이미지 생성", "코드 인터프리터"],
  },
  {
    id: "disney-plus",
    name: "디즈니플러스",
    category: "OTT",
    officialPrice: "월 9,900원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["마블·픽사·스타워즈", "내셔널지오그래픽", "4K 지원"],
  },
  {
    id: "spotify",
    name: "스포티파이",
    category: "음악",
    officialPrice: "월 11,990원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["광고 없는 음악", "오프라인 재생", "무제한 스킵"],
  },
  {
    id: "claude",
    name: "클로드 (Claude)",
    category: "AI",
    officialPrice: "월 $20",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["코딩에 강한 AI", "긴 문서 처리", "높은 사용량 한도"],
  },
  {
    id: "gemini",
    name: "제미나이 (Gemini)",
    category: "AI",
    officialPrice: "월 약 $19.99",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["구글 서비스 연동", "대용량 컨텍스트", "이미지·영상 이해"],
  },
  {
    id: "genspark",
    name: "젠스파크 (Genspark)",
    category: "AI",
    officialPrice: "월 $24.99",
    gamsgoPrice: "월 약 $16.99",
    discountLabel: "최대 30%+ 할인",
    features: ["슈퍼 AI 에이전트", "문서·슬라이드 자동생성", "멀티 모델 통합"],
  },
  {
    id: "perplexity",
    name: "퍼플렉시티 (Perplexity)",
    category: "AI",
    officialPrice: "월 $20",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["출처 기반 AI 검색", "실시간 정보", "리서치 모드"],
  },
  {
    id: "midjourney",
    name: "미드저니 (Midjourney)",
    category: "AI",
    officialPrice: "월 약 $10~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["고품질 AI 이미지", "다양한 스타일", "상업적 이용 가능"],
  },
  {
    id: "github-copilot",
    name: "깃허브 코파일럿",
    category: "AI",
    officialPrice: "월 $10",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["AI 코드 자동완성", "에디터 통합", "다양한 언어 지원"],
  },
  {
    id: "cursor",
    name: "커서 (Cursor)",
    category: "AI",
    officialPrice: "월 $20",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["AI 네이티브 에디터", "코드베이스 이해", "빠른 리팩터링"],
  },
  {
    id: "deepl",
    name: "딥엘 (DeepL)",
    category: "AI",
    officialPrice: "월 약 €10~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["자연스러운 번역 품질", "문서 통번역", "용어집 지원"],
  },
  {
    id: "canva",
    name: "캔바 (Canva Pro)",
    category: "소프트웨어",
    officialPrice: "월 약 14,000원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["프리미엄 템플릿", "배경 제거", "브랜드 키트"],
  },
  {
    id: "prime-video",
    name: "프라임 비디오",
    category: "OTT",
    officialPrice: "월 약 4,900원~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["아마존 오리지널", "무료배송 혜택 연계", "대여·구매 가능"],
  },
  {
    id: "apple-tv",
    name: "Apple TV+",
    category: "OTT",
    officialPrice: "월 약 6,900원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["애플 오리지널 시리즈", "돌비 애트모스", "가족 공유"],
  },
  {
    id: "crunchyroll",
    name: "크런치롤",
    category: "OTT",
    officialPrice: "월 약 $7.99~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["최신 애니메이션 동시방영", "광고 없음", "오프라인 다운로드"],
  },
  {
    id: "apple-music",
    name: "Apple Music",
    category: "음악",
    officialPrice: "월 약 8,900원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["공간음향 지원", "무손실 음질", "가사 싱크"],
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "소프트웨어",
    officialPrice: "월 약 11,900원",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["워드·엑셀·파워포인트", "원드라이브 저장공간", "다중 기기 설치"],
  },
  {
    id: "notion",
    name: "노션 (Notion)",
    category: "소프트웨어",
    officialPrice: "월 $10",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["메모+DB+협업", "무제한 파일 업로드", "버전 기록"],
  },
  {
    id: "figma",
    name: "피그마 (Figma)",
    category: "소프트웨어",
    officialPrice: "월 약 $15~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["실시간 협업 디자인", "무제한 버전 기록", "팀 라이브러리"],
  },
  {
    id: "expressvpn",
    name: "ExpressVPN",
    category: "소프트웨어",
    officialPrice: "월 약 $12.95",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["빠른 글로벌 서버", "노로그 정책", "다중 기기 동시 연결"],
  },
  {
    id: "adobe-cc",
    name: "어도비 (Adobe CC)",
    category: "소프트웨어",
    officialPrice: "월 약 $59.99",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["포토샵·일러스트 등 전체 앱", "클라우드 저장", "폰트 라이브러리"],
  },
  {
    id: "playstation-plus",
    name: "PlayStation Plus",
    category: "게임",
    officialPrice: "월 약 7,900원~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["온라인 멀티플레이", "매달 무료 게임", "클라우드 저장"],
  },
  {
    id: "xbox-game-pass",
    name: "Xbox Game Pass",
    category: "게임",
    officialPrice: "월 약 20,000원대",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["수백 종 게임 무제한", "출시 당일 신작 포함", "PC·콘솔 동시 지원"],
  },
  {
    id: "ea-play",
    name: "EA Play",
    category: "게임",
    officialPrice: "월 약 $5.99",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["EA 인기작 무제한", "신작 얼리 액세스", "회원 전용 할인"],
  },
  {
    id: "grok",
    name: "그록 (Grok)",
    category: "AI",
    officialPrice: "월 약 $30",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["실시간 X(트위터) 정보", "빠른 응답 속도", "이미지 생성"],
  },
  {
    id: "suno",
    name: "수노 (Suno)",
    category: "AI",
    officialPrice: "월 약 $10~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["AI 작곡·작사", "다양한 장르 생성", "상업적 이용 가능"],
  },
  {
    id: "gamma",
    name: "감마 (Gamma)",
    category: "AI",
    officialPrice: "월 약 $15~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["AI 프레젠테이션 제작", "문서·웹페이지 변환", "템플릿 다양"],
  },
  {
    id: "manus",
    name: "마누스 (Manus)",
    category: "AI",
    officialPrice: "월 약 $39~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["자율 실행 AI 에이전트", "복잡한 작업 자동화", "리서치·코딩"],
  },
  {
    id: "capcut",
    name: "캡컷 (CapCut)",
    category: "소프트웨어",
    officialPrice: "월 약 $9.99~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["AI 영상 편집", "템플릿·자막 자동생성", "워터마크 제거"],
  },
  {
    id: "filmora",
    name: "필모라 (Filmora)",
    category: "소프트웨어",
    officialPrice: "연 약 $49.99~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["직관적인 영상 편집", "AI 편집 도구", "스톡 콘텐츠 포함"],
  },
  {
    id: "autodesk",
    name: "오토데스크 (Autodesk)",
    category: "소프트웨어",
    officialPrice: "연 약 $305~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["AutoCAD 등 설계 툴", "3D 모델링", "산업 표준 CAD"],
  },
  {
    id: "nordvpn",
    name: "노드VPN (NordVPN)",
    category: "소프트웨어",
    officialPrice: "월 약 $12.99~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["전세계 서버망", "노로그 정책", "다중 기기 동시 연결"],
  },
  {
    id: "tidal",
    name: "타이달 (Tidal)",
    category: "음악",
    officialPrice: "월 약 $10.99~",
    gamsgoPrice: "겜스고에서 실시간 특가 확인",
    discountLabel: "할인가 확인 필요",
    features: ["고음질 무손실 스트리밍", "아티스트 독점 콘텐츠", "공간음향"],
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
  { href: "/ai-subscription-discount", label: "AI 구독료 비교" },
  { href: "/price-comparison", label: "구독료 가격 비교" },
  { href: "/gamsgo-review", label: "겜스고 후기" },
  { href: "/gamsgo-scam-check", label: "겜스고 사기 아니에요?" },
  { href: "/gamsgo-alternatives", label: "겜스고 대안 비교" },
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

export interface TrustFact {
  label: string;
  detail: string;
}

/** 겜스고 사기 논란 반박용 상세 신뢰 근거. TRUST_BADGES보다 한 단계 더 구체적인 근거가 필요한 페이지(겜스고 후기, 사기 팩트체크)에서 사용 */
export const PLATFORM_TRUST_FACTS: TrustFact[] = [
  {
    label: "정식 등록 법인, 6년 이상 운영",
    detail: "일회성 사이트가 아니라 수년간 동일한 사업자로 운영을 이어온 정식 법인입니다.",
  },
  {
    label: "Trustpilot 평점 4.0/5.0",
    detail: "국내 자체 후기뿐 아니라 해외 독립 리뷰 플랫폼인 Trustpilot에서도 검증 가능한 평점을 공개하고 있습니다.",
  },
  {
    label: "PCI DSS v4.0 결제 보안 인증",
    detail: "카드 결제 정보를 다루는 국제 표준 보안 인증을 획득해 결제 정보 유출 위험을 낮췄습니다.",
  },
  {
    label: "EU GDPR 개인정보 처리 기준 준수",
    detail: "유럽 개인정보보호법 기준에 맞춰 이용자 데이터를 처리한다고 명시하고 있습니다.",
  },
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
