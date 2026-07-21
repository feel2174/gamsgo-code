import { generateNickname } from "./nickname";
import type { CommunityComment, CommunityPost } from "./types";

function seedPosts(): CommunityPost[] {
  return [
    {
      id: "seed-1",
      category: "겜스고 후기",
      nickname: generateNickname(),
      title: "겜스고 유튜브 프리미엄 3개월째 이용 후기",
      content:
        "가족 요금제 나눠쓰다가 겜스고로 갈아탔는데 광고 없는 건 똑같고 가격만 확 줄었어요. 초대 수락하고 5분도 안 걸려서 바로 적용됐습니다. 다만 계정 정책 바뀔 수도 있다는 건 감안하고 쓰는 중이에요.",
      hearts: 12,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
      comments: [
        {
          id: "seed-1-c1",
          nickname: generateNickname(),
          content: "저도 어제 신청했는데 진짜 빠르게 왔어요 ㅎㅎ",
          hearts: 3,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
        },
      ],
    },
    {
      id: "seed-2",
      category: "구독툴 후기",
      nickname: generateNickname(),
      title: "노션 플러스 vs 겜스고 챗gpt 같이 써보니",
      content:
        "업무는 노션, 글쓰기는 챗지피티로 나눠 쓰는데 둘 다 정가로 내면 한 달에 부담이 꽤 크더라고요. 챗gpt만 겜스고로 돌려도 체감이 확 다릅니다.",
      hearts: 8,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
      comments: [],
    },
    {
      id: "seed-3",
      category: "자유",
      nickname: generateNickname(),
      title: "다들 구독료로 한 달에 얼마 쓰세요?",
      content:
        "넷플릭스, 유튜브, 챗gpt 다 더하니까 예전엔 5만원 넘게 나갔는데 요즘은 절반도 안 써요. 다들 어떻게 관리하시는지 궁금합니다.",
      hearts: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
      comments: [
        {
          id: "seed-3-c1",
          nickname: generateNickname(),
          content: "저는 안 쓰는 구독부터 다 정리했어요. 그게 제일 크더라고요",
          hearts: 2,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString(),
        },
      ],
    },
  ];
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

export function getPost(id: string): CommunityPost | undefined {
  return getStore().find((p) => p.id === id);
}

export function createPost(input: {
  category: CommunityPost["category"];
  title: string;
  content: string;
}): CommunityPost {
  const post: CommunityPost = {
    id: crypto.randomUUID(),
    category: input.category,
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

export function heartPost(postId: string): number | undefined {
  const post = getPost(postId);
  if (!post) return undefined;
  post.hearts += 1;
  return post.hearts;
}

export function heartComment(
  postId: string,
  commentId: string
): number | undefined {
  const post = getPost(postId);
  const comment = post?.comments.find((c) => c.id === commentId);
  if (!comment) return undefined;
  comment.hearts += 1;
  return comment.hearts;
}
