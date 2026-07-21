export type CommunityCategory = "겜스고 후기" | "구독툴 후기" | "자유";

export interface CommunityComment {
  id: string;
  nickname: string;
  content: string;
  hearts: number;
  createdAt: string;
}

export interface CommunityPost {
  id: string;
  category: CommunityCategory;
  nickname: string;
  title: string;
  content: string;
  hearts: number;
  createdAt: string;
  comments: CommunityComment[];
}

export const COMMUNITY_CATEGORIES: CommunityCategory[] = [
  "겜스고 후기",
  "구독툴 후기",
  "자유",
];
