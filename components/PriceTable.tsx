import Link from "next/link";
import type { ServicePrice } from "@/lib/constants";

export function PriceTable({ rows }: { rows: ServicePrice[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      {rows.map((row, i) => (
        <div
          key={row.id}
          className={`flex flex-col gap-1 px-4 py-3 transition-colors duration-150 hover:bg-neutral-50 ${
            i !== rows.length - 1 ? "border-b border-neutral-200" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              {row.href ? (
                <Link
                  href={row.href}
                  className="underline-offset-2 transition-colors hover:text-rose-500 hover:underline"
                >
                  {row.name}
                </Link>
              ) : (
                row.name
              )}
            </span>
            <span className="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-500">
              {row.discountLabel}
            </span>
          </div>
          <div className="text-sm text-neutral-400 line-through">
            정가 {row.officialPrice}
          </div>
          <div className="text-sm font-medium text-neutral-800">
            겜스고가 {row.gamsgoPrice}
          </div>
        </div>
      ))}
    </div>
  );
}
