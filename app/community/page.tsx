import Link from "next/link";
import { listPostsPage } from "@/lib/community/store";
import type { CommunityPost } from "@/lib/community/types";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { CommunityFeed } from "@/components/community/CommunityFeed";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "익명 후기 게시판 — 겜스고·구독툴 솔직 후기",
  description:
    "겜스고 구독 후기와 내가 써본 구독 서비스를 익명으로 자유롭게 공유하는 게시판입니다.",
  path: "/community",
});

const PAGE_SIZE = 6;

const itemListJsonLd = (posts: CommunityPost[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: posts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}/community/${post.id}`,
    name: post.title,
  })),
});

export default async function CommunityPage() {
  const { posts, nextOffset, hasMore } = await listPostsPage(0, PAGE_SIZE);

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
        <p className="text-md text-neutral-500">
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

      <CommunityFeed
        initialPosts={posts}
        initialOffset={nextOffset}
        initialHasMore={hasMore}
      />
    </div>
  );
}
