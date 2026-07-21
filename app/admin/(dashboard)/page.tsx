import { adminListPosts } from "@/lib/admin/store";
import { formatRelativeTime } from "@/lib/community/time";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import {
  deleteCommentAction,
  deletePostAction,
  hideCommentAction,
  hidePostAction,
  unhideCommentAction,
  unhidePostAction,
} from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const posts = await adminListPosts();
  const hiddenPosts = posts.filter((p) => p.status === "hidden").length;
  const totalComments = posts.reduce((sum, p) => sum + p.comments.length, 0);
  const hiddenComments = posts.reduce(
    (sum, p) => sum + p.comments.filter((c) => c.status === "hidden").length,
    0
  );

  return (
    <div className="flex flex-col gap-6">
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="전체 게시글" value={posts.length} />
        <StatCard label="숨김 처리된 글" value={hiddenPosts} tone="rose" />
        <StatCard label="전체 댓글" value={totalComments} />
        <StatCard label="숨김 처리된 댓글" value={hiddenComments} tone="rose" />
      </section>

      <section className="flex flex-col gap-3">
        {posts.length === 0 && (
          <p className="rounded-lg border border-dashed border-neutral-200 px-4 py-6 text-center text-sm text-neutral-400">
            아직 게시글이 없습니다.
          </p>
        )}
        {posts.map((post) => (
          <article
            key={post.id}
            className={`rounded-xl border p-4 ${
              post.status === "hidden"
                ? "border-rose-200 bg-rose-50/40"
                : "border-neutral-200 bg-white"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span
                className={`rounded-full px-2 py-0.5 font-bold ${
                  post.status === "hidden"
                    ? "bg-rose-500 text-white"
                    : "bg-neutral-100 text-neutral-500"
                }`}
              >
                {post.status === "hidden" ? "숨김" : "공개"}
              </span>
              <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-bold text-neutral-500">
                {post.serviceCategory}
              </span>
              <span className="rounded-full bg-sky-50 px-2 py-0.5 font-bold text-sky-600">
                {post.postType}
              </span>
              <span className="text-neutral-400">★ {post.rating.toFixed(1)}</span>
              <span className="text-neutral-400">{post.nickname}</span>
              <span className="text-neutral-300">·</span>
              <span className="text-neutral-400">
                {formatRelativeTime(post.createdAt)}
              </span>
            </div>

            <p className="mt-2 font-semibold text-neutral-900">{post.title}</p>
            <p className="mt-1 text-md text-neutral-600">{post.content}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {post.status === "hidden" ? (
                <form action={unhidePostAction.bind(null, post.id)}>
                  <button
                    type="submit"
                    className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-600 transition-colors hover:border-neutral-400"
                  >
                    다시 공개하기
                  </button>
                </form>
              ) : (
                <form action={hidePostAction.bind(null, post.id)}>
                  <button
                    type="submit"
                    className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-600 transition-colors hover:border-rose-300 hover:text-rose-500"
                  >
                    숨기기
                  </button>
                </form>
              )}
              <form action={deletePostAction.bind(null, post.id)}>
                <ConfirmSubmitButton
                  confirmMessage="이 게시글과 모든 댓글을 완전히 삭제할까요? 되돌릴 수 없습니다."
                  className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-400 transition-colors hover:border-red-300 hover:text-red-600"
                >
                  완전 삭제
                </ConfirmSubmitButton>
              </form>
            </div>

            {post.comments.length > 0 && (
              <details className="mt-3 rounded-lg border border-neutral-100 bg-neutral-50/60 px-3 py-2">
                <summary className="cursor-pointer text-xs font-semibold text-neutral-500">
                  댓글 {post.comments.length}개 관리
                </summary>
                <ul className="mt-2 flex flex-col gap-2">
                  {post.comments.map((comment) => (
                    <li
                      key={comment.id}
                      className={`rounded-lg border p-3 ${
                        comment.status === "hidden"
                          ? "border-rose-200 bg-rose-50"
                          : "border-neutral-200 bg-white"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span
                          className={`rounded-full px-2 py-0.5 font-bold ${
                            comment.status === "hidden"
                              ? "bg-rose-500 text-white"
                              : "bg-neutral-100 text-neutral-500"
                          }`}
                        >
                          {comment.status === "hidden" ? "숨김" : "공개"}
                        </span>
                        <span className="text-neutral-500">
                          {comment.nickname}
                        </span>
                        <span className="text-neutral-300">·</span>
                        <span className="text-neutral-400">
                          {formatRelativeTime(comment.createdAt)}
                        </span>
                      </div>
                      <p className="mt-1 text-md text-neutral-700">
                        {comment.content}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {comment.status === "hidden" ? (
                          <form
                            action={unhideCommentAction.bind(
                              null,
                              comment.id,
                              post.id
                            )}
                          >
                            <button
                              type="submit"
                              className="rounded-md border border-neutral-200 px-2.5 py-1 text-[11px] font-semibold text-neutral-600 transition-colors hover:border-neutral-400"
                            >
                              다시 공개
                            </button>
                          </form>
                        ) : (
                          <form
                            action={hideCommentAction.bind(
                              null,
                              comment.id,
                              post.id
                            )}
                          >
                            <button
                              type="submit"
                              className="rounded-md border border-neutral-200 px-2.5 py-1 text-[11px] font-semibold text-neutral-600 transition-colors hover:border-rose-300 hover:text-rose-500"
                            >
                              숨기기
                            </button>
                          </form>
                        )}
                        <form
                          action={deleteCommentAction.bind(
                            null,
                            comment.id,
                            post.id
                          )}
                        >
                          <ConfirmSubmitButton
                            confirmMessage="이 댓글을 완전히 삭제할까요? 되돌릴 수 없습니다."
                            className="rounded-md border border-neutral-200 px-2.5 py-1 text-[11px] font-semibold text-neutral-400 transition-colors hover:border-red-300 hover:text-red-600"
                          >
                            완전 삭제
                          </ConfirmSubmitButton>
                        </form>
                      </div>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: number;
  tone?: "neutral" | "rose";
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4">
      <p className="text-xs font-semibold text-neutral-400">{label}</p>
      <p
        className={`mt-1 text-2xl font-extrabold ${
          tone === "rose" && value > 0 ? "text-rose-500" : "text-neutral-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
