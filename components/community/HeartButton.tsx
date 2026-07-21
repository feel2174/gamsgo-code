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
  action: () => Promise<number | undefined>;
  size?: "sm" | "md";
}) {
  const [count, setCount] = useState(initialCount);
  const [clicked, setClicked] = useState(false);
  const [pop, setPop] = useState(false);
  const [, startTransition] = useTransition();

  const storedHearted = useSyncExternalStore(
    subscribeNoop,
    readHearted(storageKey),
    readHeartedServer
  );
  const hearted = clicked || storedHearted;

  function handleClick() {
    if (hearted) return;
    setClicked(true);
    setCount((c) => c + 1);
    setPop(true);
    window.localStorage.setItem(storageKey, "1");
    startTransition(() => {
      action();
    });
    window.setTimeout(() => setPop(false), 320);
  }

  const isSmall = size === "sm";

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={hearted}
      aria-pressed={hearted}
      className={`inline-flex items-center gap-1 rounded-full border transition-all duration-200 ${
        isSmall ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm"
      } ${
        hearted
          ? "border-rose-200 bg-rose-50 text-rose-500"
          : "border-neutral-200 bg-white text-neutral-500 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 active:scale-95"
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
