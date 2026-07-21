"use client";

import { useState } from "react";
import Link from "next/link";
import { StarRatingDisplay } from "./StarRatingDisplay";
import { formatRelativeTime } from "@/lib/community/time";
import type { CommunityPost } from "@/lib/community/types";

const POST_TYPE_STYLES: Record<string, string> = {
  후기: "bg-rose-50 text-rose-500",
  정보: "bg-sky-50 text-sky-600",
};

export function FeedPostCard({ post }: { post: CommunityPost }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="flex flex-col rounded-xl border border-neutral-200 bg-white p-4 transition-shadow duration-150 hover:shadow-sm">
      <div className="mb-1.5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-bold text-neutral-500">
          {post.serviceCategory}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${POST_TYPE_STYLES[post.postType]}`}
        >
          {post.postType}
        </span>
        <StarRatingDisplay rating={post.rating} size="text-xs" />
      </div>

      <Link
        href={`/community/${post.id}`}
        className="font-semibold text-neutral-900 transition-colors hover:text-rose-500"
      >
        {post.title}
      </Link>

      <p
        className={`mt-1 text-md text-neutral-600 ${expanded ? "" : "line-clamp-3"}`}
      >
        {post.content}
      </p>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-400">
          <span className="font-semibold text-neutral-500">
            {post.nickname}
          </span>
          <span>·</span>
          <span>{formatRelativeTime(post.createdAt)}</span>
          <span>·</span>
          <span>❤️ {post.hearts}</span>
          <span>💬 {post.comments.length}</span>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="shrink-0 text-xs font-bold text-rose-500 transition-colors hover:text-rose-600"
        >
          {expanded ? "접기" : "더보기"}
        </button>
      </div>
    </li>
  );
}
