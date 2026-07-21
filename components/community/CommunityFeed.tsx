"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { FeedPostCard } from "./FeedPostCard";
import { loadMorePostsAction } from "@/app/community/actions";
import type { CommunityPost } from "@/lib/community/types";

export function CommunityFeed({
  initialPosts,
  initialOffset,
  initialHasMore,
}: {
  initialPosts: CommunityPost[];
  initialOffset: number;
  initialHasMore: boolean;
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [offset, setOffset] = useState(initialOffset);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isPending, startTransition] = useTransition();
  const loadingRef = useRef(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasMore) return;
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingRef.current) {
          loadingRef.current = true;
          startTransition(async () => {
            const result = await loadMorePostsAction(offset);
            setPosts((prev) => [...prev, ...result.posts]);
            setOffset(result.nextOffset);
            setHasMore(result.hasMore);
            loadingRef.current = false;
          });
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [offset, hasMore]);

  return (
    <div className="flex flex-col gap-3">
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {posts.map((post) => (
          <FeedPostCard key={post.id} post={post} />
        ))}
      </ul>
      {hasMore ? (
        <div
          ref={sentinelRef}
          className="flex justify-center py-4 text-sm text-neutral-400"
        >
          {isPending ? "불러오는 중..." : ""}
        </div>
      ) : (
        posts.length > 0 && (
          <p className="py-4 text-center text-xs text-neutral-400">
            마지막 후기까지 다 보셨어요
          </p>
        )
      )}
    </div>
  );
}
