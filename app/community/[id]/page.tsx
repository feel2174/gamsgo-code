import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, listPostIdsForSitemap } from "@/lib/community/store";
import { createCommentAction, heartCommentAction, heartPostAction } from "../actions";
import { HeartButton } from "@/components/community/HeartButton";
import { StarRatingDisplay } from "@/components/community/StarRatingDisplay";
import { formatRelativeTime } from "@/lib/community/time";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { ORGANIZATION_ID, SITE_LANG, SITE_URL, WEBSITE_ID } from "@/lib/constants";

export const revalidate = 30;

export async function generateStaticParams() {
  const posts = await listPostIdsForSitemap();
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) {
    // 삭제되었거나 존재하지 않는 글은 색인 대상이 아니다
    return buildMetadata({
      title: "게시글",
      description: "익명 후기 게시판",
      path: `/community/${id}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    // 줄바꿈이 그대로 들어가면 메타 설명이 잘려 보이므로 공백으로 정규화
    description: post.content.replace(/\s+/g, " ").trim().slice(0, 155),
    path: `/community/${id}`,
    publishedTime: post.createdAt,
    modifiedTime: post.createdAt,
  });
}

export default async function CommunityPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();

  // 익명 게시판이라 작성자별 프로필 페이지가 없다. Google이 요구하는 author.url은
  // 해당 작성자의 글/댓글이 실제로 노출되는 게시글 URL로 채운다.
  const postUrl = `${SITE_URL}/community/${post.id}`;

  const discussionJsonLd = {
    "@context": "https://schema.org",
    "@type": "DiscussionForumPosting",
    "@id": `${postUrl}#post`,
    headline: post.title,
    name: post.title,
    inLanguage: SITE_LANG,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: postUrl,
    dateModified: post.createdAt,
    ...(post.rating
      ? {
          reviewRating: {
            "@type": "Rating",
            ratingValue: post.rating,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    text: post.content,
    datePublished: post.createdAt,
    url: postUrl,
    author: {
      "@type": "Person",
      name: post.nickname,
      url: postUrl,
    },
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/LikeAction",
        userInteractionCount: post.hearts,
      },
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/CommentAction",
        userInteractionCount: post.comments.length,
      },
    ],
    comment: post.comments.map((comment) => ({
      "@type": "Comment",
      text: comment.content,
      datePublished: comment.createdAt,
      author: { "@type": "Person", name: comment.nickname, url: postUrl },
    })),
  };

  return (
    <div className="flex flex-col gap-6">
      <BreadcrumbJsonLd
        items={[
          { name: "홈", path: "/" },
          { name: "익명 후기 게시판", path: "/community" },
          { name: post.title, path: `/community/${post.id}` },
        ]}
      />
      {/* 사용자 입력이 들어가므로 반드시 이스케이프 처리되는 JsonLd 사용 */}
      <JsonLd data={discussionJsonLd} />
      <Link href="/community" className="text-sm text-neutral-500">
        ← 목록으로
      </Link>

      <article className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-bold text-neutral-600">
            {post.serviceCategory}
          </span>
          <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-600">
            {post.postType}
          </span>
          <StarRatingDisplay rating={post.rating} size="text-xs" />
          <span className="text-xs text-neutral-500">{post.nickname}</span>
          <span className="text-xs text-neutral-300">·</span>
          <span className="text-xs text-neutral-500">
            {formatRelativeTime(post.createdAt)}
          </span>
        </div>
        <h1 className="text-xl font-extrabold leading-snug">{post.title}</h1>
        <p className="whitespace-pre-wrap text-md leading-relaxed text-neutral-700">
          {post.content}
        </p>
        <HeartButton
          initialCount={post.hearts}
          storageKey={`heart-post-${post.id}`}
          action={heartPostAction.bind(null, post.id)}
        />
      </article>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-bold text-neutral-700">
          댓글 {post.comments.length}
        </h2>
        <ul className="flex flex-col gap-3">
          {post.comments.map((comment) => (
            <li
              key={comment.id}
              className="rounded-lg border border-neutral-200 bg-white px-3.5 py-3"
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xs font-semibold text-neutral-600">
                  {comment.nickname}
                </span>
                <span className="text-xs text-neutral-300">·</span>
                <span className="text-xs text-neutral-500">
                  {formatRelativeTime(comment.createdAt)}
                </span>
              </div>
              <p className="text-md text-neutral-700">{comment.content}</p>
              <div className="mt-2">
                <HeartButton
                  initialCount={comment.hearts}
                  storageKey={`heart-comment-${comment.id}`}
                  action={heartCommentAction.bind(null, post.id, comment.id)}
                  size="sm"
                />
              </div>
            </li>
          ))}
          {post.comments.length === 0 && (
            <li className="rounded-lg border border-dashed border-neutral-200 px-3.5 py-4 text-center text-sm text-neutral-500">
              아직 댓글이 없어요. 첫 댓글을 남겨보세요.
            </li>
          )}
        </ul>

        <form
          action={createCommentAction.bind(null, post.id)}
          className="flex gap-2"
        >
          <input
            name="content"
            required
            maxLength={300}
            placeholder="익명으로 댓글 남기기"
            className="flex-1 rounded-lg border border-neutral-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-neutral-900"
          />
          <button
            type="submit"
            className="rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-bold text-white transition-transform duration-150 active:scale-95"
          >
            등록
          </button>
        </form>
      </section>
    </div>
  );
}
