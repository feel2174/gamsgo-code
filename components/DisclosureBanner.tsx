import { DISCLOSURE_TEXT } from "@/lib/constants";

export function DisclosureBanner() {
  return (
    <p className="rounded-lg bg-neutral-100 px-3 py-2 text-xs leading-relaxed text-neutral-500">
      {DISCLOSURE_TEXT}
    </p>
  );
}
