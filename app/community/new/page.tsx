import { createPostAction } from "../actions";
import {
  COMMUNITY_POST_TYPES,
  COMMUNITY_SERVICE_CATEGORIES,
} from "@/lib/community/types";
import { StarRatingInput } from "@/components/community/StarRatingInput";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "찐후기 남기기",
  description: "겜스고 구독 후기나 써본 구독툴 이야기를 익명으로 남겨보세요.",
  path: "/community/new",
  noIndex: true,
});

export default function NewCommunityPostPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-extrabold leading-snug">찐후기 남기기</h1>
        <p className="text-md text-neutral-500">
          글을 올리면 자연물+과일·채소를 조합한 랜덤 닉네임이 자동으로
          붙어요. 로그인은 필요 없어요.
        </p>
      </header>

      <form action={createPostAction} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="serviceCategory"
              className="text-sm font-semibold text-neutral-700"
            >
              어떤 서비스인가요
            </label>
            <select
              id="serviceCategory"
              name="serviceCategory"
              className="select-field rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-neutral-900"
            >
              {COMMUNITY_SERVICE_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="postType"
              className="text-sm font-semibold text-neutral-700"
            >
              글 종류
            </label>
            <select
              id="postType"
              name="postType"
              className="select-field rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-neutral-900"
            >
              {COMMUNITY_POST_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-neutral-700">
            이용한 서비스, 별점을 남겨주세요
          </span>
          <StarRatingInput />
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
          3초면 끝, 후기 등록하기 →
        </button>
      </form>
    </div>
  );
}
