/** 1차 카테고리: 겜스고에서 판매 중인 서비스 목록 기준 */
export type CommunityServiceCategory =
  | "유튜브 프리미엄"
  | "넷플릭스"
  | "챗GPT Plus"
  | "디즈니플러스"
  | "스포티파이"
  | "기타 AI/OTT";

export const COMMUNITY_SERVICE_CATEGORIES: CommunityServiceCategory[] = [
  "유튜브 프리미엄",
  "넷플릭스",
  "챗GPT Plus",
  "디즈니플러스",
  "스포티파이",
  "기타 AI/OTT",
];

/** 2차 카테고리: 글의 성격 */
export type CommunityPostType = "후기" | "정보";

export const COMMUNITY_POST_TYPES: CommunityPostType[] = ["후기", "정보"];

export interface CommunityComment {
  id: string;
  nickname: string;
  content: string;
  hearts: number;
  createdAt: string;
}

export interface CommunityPost {
  id: string;
  serviceCategory: CommunityServiceCategory;
  postType: CommunityPostType;
  /** 이용한 서비스에 대한 별점 (1~5) */
  rating: number;
  nickname: string;
  title: string;
  content: string;
  hearts: number;
  createdAt: string;
  comments: CommunityComment[];
}
