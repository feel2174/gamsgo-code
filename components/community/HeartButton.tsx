"use client";

import { useState, useSyncExternalStore, useTransition } from "react";

function subscribeNoop() {
  return () => {};
}

function readHearted(storageKey: string) {
  return () => window.localStorage.getItem(storageKey) === "1";
}

function readHeartedServer() {
  return false;
}

export function HeartButton({
  initialCount,
  storageKey,
  action,
  size = "md",
}: {
  initialCount: number;
  storageKey: string;
  action: (delta: 1 | -1) => Promise<number | undefined>;
  size?: "sm" | "md";
}) {
  const [count, setCount] = useState(initialCount);
  const [pop, setPop] = useState(false);
  const [, startTransition] = useTransition();

  const hearted = useSyncExternalStore(
    subscribeNoop,
    readHearted(storageKey),
    readHeartedServer
  );

  function handleClick() {
    const next = !hearted;
    const delta = next ? 1 : -1;

    if (next) {
      window.localStorage.setItem(storageKey, "1");
      setPop(true);
      window.setTimeout(() => setPop(false), 320);
    } else {
      window.localStorage.removeItem(storageKey);
    }

    setCount((c) => Math.max(0, c + delta));
    startTransition(() => {
      action(delta);
    });
  }

  const isSmall = size === "sm";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={hearted}
      aria-label={hearted ? "공감 취소" : "공감하기"}
      className={`inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white text-neutral-500 transition-colors duration-150 hover:border-rose-200 hover:bg-rose-50 active:scale-95 ${
        isSmall ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm"
      }`}
    >
      <span
        className={`inline-block ${pop ? "animate-heart-pop" : ""}`}
        aria-hidden
      >
        {hearted ? "❤️" : "🤍"}
      </span>
      <span className="font-semibold tabular-nums">{count}</span>
    </button>
  );
}
