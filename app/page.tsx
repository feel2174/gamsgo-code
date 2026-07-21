import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { PriceTable } from "@/components/PriceTable";
import { TrustBadges } from "@/components/TrustBadges";
import { SERVICE_PRICES, SITE_TAGLINE } from "@/lib/constants";
import { listPostsPage } from "@/lib/community/store";
import { formatRelativeTime } from "@/lib/community/time";

export const dynamic = "force-dynamic";

const guides = [
  {
    href: "/youtube-premium-discount",
    title: "유튜브 프리미엄 가격할인",
    desc: "정가로 내고 계셨다면 매달 8,000원 날린 거예요",
  },
  {
    href: "/netflix-discount",
    title: "넷플릭스 가격할인",
    desc: "4K 프리미엄 그대로, 정가와 만원 넘게 차이나요",
  },
  {
    href: "/chatgpt-plus-discount",
    title: "챗GPT 플러스 가격할인",
    desc: "AI 구독료도 반값 이하, 안 바꿀 이유가 없어요",
  },
  {
    href: "/price-comparison",
    title: "구독료 전체 가격 비교",
    desc: "내가 쓰는 서비스, 지금 얼마나 손해보고 있는지 확인",
  },
  {
    href: "/gamsgo-review",
    title: "겜스고 후기 및 안전성",
    desc: "사기 아니냐고요? 3,674명 후기로 직접 확인하세요",
  },
];

export default async function Home() {
  const { posts: latestPosts } = await listPostsPage(0, 2);

  return (
    <div className="flex flex-col gap-8">
      <section className="animate-fade-up flex flex-col gap-3 text-center">
        <p className="text-sm font-bold text-rose-500">{SITE_TAGLINE}</p>
        <h1 className="text-2xl font-extrabold leading-snug">
          유튜브·넷플릭스·챗GPT
          <br />
          정가로 내면, 1년에 40만원 손해예요
        </h1>
        <p className="text-md text-neutral-500">
          공식 아니라고 불안해하지 마세요. 150개국 1,000만 명이 이미 확인했고,
          결제 즉시 발송·24시간 환불 보장까지 있어요.
        </p>
        <TrustBadges />
        <AffiliateCTA label="지금 40만원 아끼러 가기" />
      </section>

      <section
        className="animate-fade-up flex flex-col gap-3"
        style={{ animationDelay: "80ms" }}
      >
        <h2 className="text-lg font-bold">다들 이렇게 아끼고 있었더라고요</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-sm active:translate-y-0"
            >
              <p className="font-semibold">{g.title}</p>
              <p className="text-md text-neutral-500">{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="animate-fade-up flex flex-col gap-3"
        style={{ animationDelay: "140ms" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">사기인지 아닌지, 찐후기부터 보세요</h2>
          <Link
            href="/community"
            className="text-xs font-semibold text-neutral-400 transition-colors hover:text-rose-500"
          >
            후기 더 보기 →
          </Link>
        </div>
        <p className="text-md text-neutral-500">
          가입 없이도 실제 이용 후기를 바로 확인할 수 있어요. 궁금한 점은
          방문해서 직접 확인해보세요.
        </p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              href={`/community/${post.id}`}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-sm"
            >
              <div className="mb-1 flex items-center gap-2 text-xs text-neutral-400">
                <span className="font-semibold text-neutral-500">
                  {post.nickname}
                </span>
                <span>·</span>
                <span>{formatRelativeTime(post.createdAt)}</span>
              </div>
              <p className="line-clamp-1 font-semibold">{post.title}</p>
              <p className="mt-1 text-xs text-neutral-400">❤️ {post.hearts}</p>
            </Link>
          ))}
        </div>
        <Link
          href="/community/new"
          className="rounded-xl border border-dashed border-neutral-300 px-4 py-3 text-center text-sm font-semibold text-neutral-400 transition-colors hover:border-rose-300 hover:text-rose-500"
        >
          3초면 끝, 나도 후기 남기기 ✍️
        </Link>
      </section>

      <section
        className="animate-fade-up flex flex-col gap-3"
        style={{ animationDelay: "200ms" }}
      >
        <h2 className="text-lg font-bold">지금 얼마나 새고 있는지 확인해보세요</h2>
        <PriceTable rows={SERVICE_PRICES} />
      </section>

      <AffiliateCTA label="더 늦기 전에 구독료 아끼기" />
    </div>
  );
}
