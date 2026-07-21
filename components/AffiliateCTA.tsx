import { GAMSGO_AFFILIATE_URL } from "@/lib/constants";

export function AffiliateCTA({
  label = "겜스고에서 특가 확인하기",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={GAMSGO_AFFILIATE_URL}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={`block w-full rounded-xl bg-red-600 px-4 py-3.5 text-center text-base font-bold text-white active:bg-red-700 ${className}`}
    >
      {label} →
    </a>
  );
}
