import Link from "next/link";
import { listPosts } from "@/lib/community/store";
import { buildMetadata } from "@/lib/seo";
import { formatRelativeTime } from "@/lib/community/time";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "익명 후기 게시판 — 겜스고·구독툴 솔직 후기",
  description:
    "겜스고 구독 후기와 내가 써본 구독 서비스를 익명으로 자유롭게 공유하는 게시판입니다.",
  path: "/community",
});

const POST_TYPE_STYLES: Record<string, string> = {
  후기: "bg-rose-50 text-rose-500",
  정보: "bg-sky-50 text-sky-600",
};

function renderStars(rating: number) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

const itemListJsonLd = (posts: ReturnType<typeof listPosts>) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: posts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}/community/${post.id}`,
    name: post.title,
  })),
});

export default function CommunityPage() {
  const posts = listPosts();

  return (
    <div className="flex flex-col gap-6">
      <BreadcrumbJsonLd
        items={[
          { name: "홈", path: "/" },
          { name: "익명 후기 게시판", path: "/community" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd(posts)),
        }}
      />
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-extrabold leading-snug">
          익명 후기 게시판, 사기인지 아닌지 여기서 확인
        </h1>
        <p className="text-sm text-neutral-500">
          가입 없이도 볼 수 있어요. 먼저 읽어보고, 나도 솔직하게 남겨보세요.
          닉네임은 매번 랜덤으로 생성돼서 부담 없어요.
        </p>
      </header>

      <Link
        href="/community/new"
        className="block rounded-xl bg-neutral-900 px-4 py-3 text-center text-sm font-bold text-white transition-transform duration-150 active:scale-[0.98]"
      >
        3초면 끝, 나도 후기 남기기 ✍️
      </Link>

      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/community/${post.id}`}
              className="block h-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-sm"
            >
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-bold text-neutral-500">
                  {post.serviceCategory}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${POST_TYPE_STYLES[post.postType]}`}
                >
                  {post.postType}
                </span>
              </div>
              <p className="font-semibold text-neutral-900">{post.title}</p>
              <p className="mt-1 line-clamp-2 text-sm text-neutral-500">
                {post.content}
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-neutral-400">
                <span className="text-amber-400" aria-hidden>
                  {renderStars(post.rating)}
                </span>
                <span className="font-semibold text-neutral-500">
                  {post.nickname}
                </span>
                <span>·</span>
                <span>{formatRelativeTime(post.createdAt)}</span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-xs text-neutral-400">
                <span>❤️ {post.hearts}</span>
                <span>💬 {post.comments.length}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
