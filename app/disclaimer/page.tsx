import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "면책조항",
  description: `${SITE_NAME} 콘텐츠 이용에 관한 면책조항입니다.`,
  path: "/disclaimer",
});

const sections = [
  {
    title: "정보 제공 목적",
    body: "이 사이트에 게시된 모든 콘텐츠(가격 비교표, 서비스 소개, 이용 후기, 커뮤니티 게시글 포함)는 단순 리뷰 및 정보 제공을 목적으로 작성되었으며, 특정 서비스의 구매·가입을 보증하거나 대행하지 않습니다.",
  },
  {
    title: "가격·할인 정보의 변동 가능성",
    body: "표시된 정가 및 할인가는 조사 시점 기준 정보이며 환율, 정책 변경 등에 따라 실시간으로 달라질 수 있습니다. 실제 결제 전에는 반드시 겜스고 등 해당 서비스 페이지에서 최종 가격을 다시 확인하시기 바랍니다.",
  },
  {
    title: "커뮤니티 게시글에 대한 책임",
    body: "찐후기 게시판에 올라오는 글과 별점, 댓글은 익명 이용자가 자유롭게 작성한 개인 의견이며, 사이트 운영자의 공식 입장이나 사실 확인을 거친 정보가 아닙니다. 게시된 내용의 정확성에 대해 책임지지 않습니다.",
  },
  {
    title: "제휴 마케팅 고지",
    body: "이 사이트는 겜스고 제휴 마케팅 프로그램에 참여하고 있으며, 링크를 통한 가입 시 일정 수수료를 제공받을 수 있습니다. 이는 콘텐츠 작성 방향에 영향을 줄 수 있는 이해관계이며, 이용자는 이 점을 감안해 정보를 참고하시기 바랍니다.",
  },
  {
    title: "법적·재무적 조언 아님",
    body: "이 사이트의 콘텐츠는 법률, 재무, 소비자 보호와 관련된 전문적인 조언을 대체하지 않습니다. 서비스 이용에 따른 약관 위반, 정책 변경 등의 리스크는 이용자 본인의 판단과 책임 하에 결정해야 합니다.",
  },
];

export default function DisclaimerPage() {
  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-extrabold leading-snug">면책조항</h1>
        <p className="text-md text-neutral-500">
          이 사이트를 이용하시기 전에 아래 내용을 확인해주세요.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <section key={section.title} className="flex flex-col gap-2">
            <h2 className="text-md font-bold text-neutral-900">
              {section.title}
            </h2>
            <p className="text-md leading-relaxed text-neutral-600">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
