import { createPostAction } from "../actions";
import { COMMUNITY_CATEGORIES } from "@/lib/community/types";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "익명으로 후기 남기기",
  description: "겜스고 구독 후기나 써본 구독툴 이야기를 익명으로 남겨보세요.",
  path: "/community/new",
  noIndex: true,
});

export default function NewCommunityPostPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-extrabold leading-snug">익명으로 후기 남기기</h1>
        <p className="text-sm text-neutral-500">
          글을 올리면 자연물+과일·채소를 조합한 랜덤 닉네임이 자동으로
          붙어요. 로그인은 필요 없어요.
        </p>
      </header>

      <form action={createPostAction} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-neutral-700">
            카테고리
          </label>
          <div className="flex gap-2">
            {COMMUNITY_CATEGORIES.map((category, i) => (
              <label
                key={category}
                className="flex-1 cursor-pointer rounded-lg border border-neutral-200 px-2 py-2 text-center text-xs font-medium text-neutral-500 transition-colors has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-900 has-[:checked]:text-white"
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  defaultChecked={i === 0}
                  className="sr-only"
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-semibold text-neutral-700">
            제목
          </label>
          <input
            id="title"
            name="title"
            required
            minLength={2}
            maxLength={60}
            placeholder="예) 겜스고 넷플릭스 두 달 써본 후기"
            className="rounded-lg border border-neutral-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-neutral-900"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="content"
            className="text-sm font-semibold text-neutral-700"
          >
            내용
          </label>
          <textarea
            id="content"
            name="content"
            required
            minLength={5}
            maxLength={1000}
            rows={8}
            placeholder="솔직한 경험을 편하게 남겨주세요."
            className="resize-none rounded-lg border border-neutral-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-neutral-900"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-neutral-900 px-4 py-3.5 text-sm font-bold text-white transition-transform duration-150 active:scale-[0.98]"
        >
          익명으로 올리기
        </button>
      </form>
    </div>
  );
}
