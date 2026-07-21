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
      className={`block w-full rounded-xl bg-rose-500 px-4 py-3.5 text-center text-base font-bold text-white shadow-sm shadow-rose-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-600 hover:shadow-md hover:shadow-rose-200 active:translate-y-0 active:scale-[0.98] active:bg-rose-700 ${className}`}
    >
      {label} →
    </a>
  );
}
