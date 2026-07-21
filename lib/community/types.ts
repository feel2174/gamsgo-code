import { SERVICE_PRICES } from "@/lib/constants";

/** 1차 카테고리: 겜스고에서 판매 중인 서비스 목록(전체) + 기타 */
export type CommunityServiceCategory = string;

export const COMMUNITY_SERVICE_CATEGORIES: CommunityServiceCategory[] = [
  ...SERVICE_PRICES.map((s) => s.name),
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
  /** 이용한 서비스에 대한 별점 (0.5~5.0, 0.5 단위) */
  rating: number;
  nickname: string;
  title: string;
  content: string;
  hearts: number;
  createdAt: string;
  comments: CommunityComment[];
}
