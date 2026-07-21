import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { TrustBadges } from "@/components/TrustBadges";
import { ServicePriceCards } from "@/components/ServicePriceCards";
import { FeedPostCard } from "@/components/community/FeedPostCard";
import { SITE_TAGLINE } from "@/lib/constants";
import { listPostsPage } from "@/lib/community/store";

export const revalidate = 30;

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
  const { posts: reviewPosts } = await listPostsPage(0, 10);

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
          공식 아니라고 불안해하지 마세요. 아래 찐후기부터 바로 확인할 수
          있어요. 150개국 1,000만 명이 이미 확인했고, 결제 즉시 발송·24시간
          환불 보장까지 있어요.
        </p>
        <TrustBadges />
        <AffiliateCTA label="지금 40만원 아끼러 가기" />
      </section>

      <section
        className="animate-fade-up flex flex-col gap-3"
        style={{ animationDelay: "80ms" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">사기인지 아닌지, 찐후기부터 보세요</h2>
        </div>
        <p className="text-md text-neutral-500">
          가입 없이도 실제 이용 후기를 바로 확인할 수 있어요. 스크롤만
          내리면 됩니다.
        </p>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {reviewPosts.map((post) => (
            <FeedPostCard key={post.id} post={post} />
          ))}
        </ul>
        <Link
          href="/community"
          className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-center text-sm font-bold text-neutral-700 transition-colors hover:border-rose-300 hover:text-rose-500"
        >
          찐후기 더보기 →
        </Link>
        <Link
          href="/community/new"
          className="rounded-xl border border-dashed border-neutral-300 px-4 py-3 text-center text-sm font-semibold text-neutral-400 transition-colors hover:border-rose-300 hover:text-rose-500"
        >
          3초면 끝, 나도 후기 남기기 ✍️
        </Link>
      </section>

      <section
        className="animate-fade-up flex flex-col gap-3"
        style={{ animationDelay: "140ms" }}
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
        style={{ animationDelay: "200ms" }}
      >
        <h2 className="text-lg font-bold">지금 얼마나 새고 있는지 확인해보세요</h2>
        <ServicePriceCards
          serviceIds={["youtube-premium", "netflix", "chatgpt-plus", "spotify"]}
        />
        <Link
          href="/price-comparison"
          className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-center text-sm font-bold text-neutral-700 transition-colors hover:border-rose-300 hover:text-rose-500"
        >
          전체 서비스 가격 비교 더보기 →
        </Link>
      </section>

      <AffiliateCTA label="더 늦기 전에 구독료 아끼기" />
    </div>
  );
}
