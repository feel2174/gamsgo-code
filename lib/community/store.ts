import { generateNickname } from "./nickname";
import type { CommunityComment, CommunityPost, CommunityPostType, CommunityServiceCategory } from "./types";

function seedPosts(): CommunityPost[] {
  const raw: Array<Omit<CommunityPost, "nickname" | "comments"> & { comments: number }> = [
    {
      id: "seed-1",
      serviceCategory: "유튜브 프리미엄",
      postType: "후기",
      rating: 5,
      title: "겜스고 유튜브 프리미엄 3개월째 이용 후기",
      content:
        "가족 요금제 나눠쓰다가 겜스고로 갈아탔는데 광고 없는 건 똑같고 가격만 확 줄었어요. 초대 수락하고 5분도 안 걸려서 바로 적용됐습니다. 다만 계정 정책 바뀔 수도 있다는 건 감안하고 쓰는 중이에요. 화질도 전혀 차이 없고 유튜브 뮤직도 그대로 써서 만족스럽습니다. 재구독 의사 100%예요.",
      hearts: 12,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
      comments: 1,
    },
    {
      id: "seed-2",
      serviceCategory: "챗GPT Plus",
      postType: "정보",
      rating: 4,
      title: "노션 플러스 vs 겜스고 챗gpt 같이 써보니",
      content:
        "업무는 노션, 글쓰기는 챗지피티로 나눠 쓰는데 둘 다 정가로 내면 한 달에 부담이 꽤 크더라고요. 챗gpt만 겜스고로 돌려도 체감이 확 다릅니다.",
      hearts: 8,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
      comments: 0,
    },
    {
      id: "seed-3",
      serviceCategory: "기타 AI/OTT",
      postType: "정보",
      rating: 4,
      title: "다들 구독료로 한 달에 얼마 쓰세요?",
      content:
        "넷플릭스, 유튜브, 챗gpt 다 더하니까 예전엔 5만원 넘게 나갔는데 요즘은 절반도 안 써요. 다들 어떻게 관리하시는지 궁금합니다.",
      hearts: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
      comments: 1,
    },
    {
      id: "seed-4",
      serviceCategory: "넷플릭스 프리미엄",
      postType: "후기",
      rating: 4.5,
      title: "넷플릭스 겜스고로 6개월째, 딱 한 번 끊긴 적 있어요",
      content:
        "6개월 이용하면서 딱 한 번 계정이 안 열린 적이 있었는데 고객센터 문의하니까 30분 안에 새 계정으로 바로 교체해줬어요. 4K 화질도 그대로라 만족합니다.",
      hearts: 9,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 40).toISOString(),
      comments: 0,
    },
    {
      id: "seed-5",
      serviceCategory: "젠스파크 (Genspark)",
      postType: "정보",
      rating: 4,
      title: "젠스파크 겜스고로 쓰는 사람 있나요?",
      content:
        "AI 에이전트로 요즘 젠스파크 많이 쓰던데 정가가 부담스러워서 겜스고로 알아보는 중입니다. 써보신 분 후기 궁금해요.",
      hearts: 3,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(),
      comments: 0,
    },
    {
      id: "seed-6",
      serviceCategory: "디즈니플러스",
      postType: "후기",
      rating: 3.5,
      title: "디즈니플러스 겜스고, 콘텐츠는 좋은데 로그인이 가끔 느려요",
      content:
        "콘텐츠 라인업이나 화질은 만족하는데 가끔 로그인이 좀 오래 걸릴 때가 있어요. 그것 빼고는 가격 대비 만족합니다.",
      hearts: 4,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(),
      comments: 0,
    },
    {
      id: "seed-7",
      serviceCategory: "스포티파이",
      postType: "후기",
      rating: 5,
      title: "스포티파이 패밀리 나눠쓰는 것보다 겜스고가 낫더라고요",
      content:
        "지인들이랑 패밀리 요금제 나눠쓰다가 정산이 귀찮아서 겜스고로 갈아탔어요. 광고 없고 오프라인 재생도 똑같이 돼요.",
      hearts: 6,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 70).toISOString(),
      comments: 0,
    },
    {
      id: "seed-8",
      serviceCategory: "클로드 (Claude)",
      postType: "정보",
      rating: 4,
      title: "클로드 겜스고 특가는 언제 자주 뜨나요?",
      content:
        "챗gpt는 겜스고로 쓰고 있는데 클로드도 특가가 있는지 궁금합니다. 코딩할 때는 클로드가 더 편해서요.",
      hearts: 2,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 80).toISOString(),
      comments: 0,
    },
    {
      id: "seed-9",
      serviceCategory: "유튜브 프리미엄",
      postType: "정보",
      rating: 4.5,
      title: "유튜브 프리미엄 가족형 vs 개인 충전형 차이 정리해봤어요",
      content:
        "가족형은 프로필 1개 공유라 계정 관리가 좀 더 필요하고, 개인 충전형은 내 계정에 바로 적용돼서 훨씬 편해요. 가격은 개인 충전형이 조금 더 비싸지만 그만한 가치가 있더라고요.",
      hearts: 7,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 90).toISOString(),
      comments: 0,
    },
  ];

  return raw.map((post) => ({
    ...post,
    nickname: generateNickname(),
    comments: Array.from({ length: post.comments }, (_, i) => ({
      id: `${post.id}-c${i + 1}`,
      nickname: generateNickname(),
      content:
        i === 0
          ? "저도 궁금했던 내용인데 도움 됐어요 감사합니다"
          : "저도 비슷한 경험 있어요",
      hearts: 3 - i,
      createdAt: new Date(
        new Date(post.createdAt).getTime() + 1000 * 60 * 60 * 2
      ).toISOString(),
    })),
  }));
}

declare global {
  var __communityPosts: CommunityPost[] | undefined;
}

function getStore(): CommunityPost[] {
  if (!globalThis.__communityPosts) {
    globalThis.__communityPosts = seedPosts();
  }
  return globalThis.__communityPosts;
}

export function listPosts(): CommunityPost[] {
  return [...getStore()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function listPostsPage(
  offset: number,
  limit: number
): { posts: CommunityPost[]; nextOffset: number; hasMore: boolean } {
  const all = listPosts();
  const posts = all.slice(offset, offset + limit);
  const nextOffset = offset + posts.length;
  return { posts, nextOffset, hasMore: nextOffset < all.length };
}

export function getPost(id: string): CommunityPost | undefined {
  return getStore().find((p) => p.id === id);
}

export function createPost(input: {
  serviceCategory: CommunityServiceCategory;
  postType: CommunityPostType;
  rating: number;
  title: string;
  content: string;
}): CommunityPost {
  const post: CommunityPost = {
    id: crypto.randomUUID(),
    serviceCategory: input.serviceCategory,
    postType: input.postType,
    rating: input.rating,
    nickname: generateNickname(),
    title: input.title,
    content: input.content,
    hearts: 0,
    createdAt: new Date().toISOString(),
    comments: [],
  };
  getStore().unshift(post);
  return post;
}

export function createComment(
  postId: string,
  content: string
): CommunityComment | undefined {
  const post = getPost(postId);
  if (!post) return undefined;
  const comment: CommunityComment = {
    id: crypto.randomUUID(),
    nickname: generateNickname(),
    content,
    hearts: 0,
    createdAt: new Date().toISOString(),
  };
  post.comments.push(comment);
  return comment;
}

export function adjustPostHearts(
  postId: string,
  delta: 1 | -1
): number | undefined {
  const post = getPost(postId);
  if (!post) return undefined;
  post.hearts = Math.max(0, post.hearts + delta);
  return post.hearts;
}

export function adjustCommentHearts(
  postId: string,
  commentId: string,
  delta: 1 | -1
): number | undefined {
  const post = getPost(postId);
  const comment = post?.comments.find((c) => c.id === commentId);
  if (!comment) return undefined;
  comment.hearts = Math.max(0, comment.hearts + delta);
  return comment.hearts;
}
