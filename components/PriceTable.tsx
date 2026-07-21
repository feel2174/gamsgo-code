import Link from "next/link";
import type { ServicePrice } from "@/lib/constants";

export function PriceTable({ rows }: { rows: ServicePrice[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
      {rows.map((row, i) => (
        <div
          key={row.id}
          className={`flex flex-col gap-1 px-4 py-3 ${
            i !== rows.length - 1
              ? "border-b border-neutral-200 dark:border-neutral-800"
              : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              {row.href ? (
                <Link href={row.href} className="underline-offset-2 hover:underline">
                  {row.name}
                </Link>
              ) : (
                row.name
              )}
            </span>
            <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-bold text-red-600 dark:bg-red-950 dark:text-red-400">
              {row.discountLabel}
            </span>
          </div>
          <div className="text-sm text-neutral-500 line-through dark:text-neutral-500">
            정가 {row.officialPrice}
          </div>
          <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            겜스고가 {row.gamsgoPrice}
          </div>
        </div>
      ))}
    </div>
  );
}
