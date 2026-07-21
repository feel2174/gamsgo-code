import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import {
  GAMSGO_AFFILIATE_URL,
  SERVICE_PRICES,
  type ServiceCategory,
} from "@/lib/constants";

const CATEGORY_ORDER: ServiceCategory[] = ["OTT", "AI", "음악", "소프트웨어", "게임"];

export function ServicePriceCards() {
  return (
    <div className="flex flex-col gap-8">
      {CATEGORY_ORDER.map((category) => {
        const services = SERVICE_PRICES.filter((s) => s.category === category);
        if (services.length === 0) return null;

        return (
          <section key={category} className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-neutral-400">{category}</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-lg font-bold text-neutral-900">
                      {service.name}
                    </h4>
                    <span className="shrink-0 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-500">
                      {service.discountLabel}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col gap-1">
                    <p className="text-md text-neutral-400 line-through">
                      정가 {service.officialPrice}
                    </p>
                    <p className="text-xl font-extrabold text-neutral-900">
                      {service.gamsgoPrice}
                    </p>
                  </div>
                  {service.href ? (
                    <Link
                      href={service.href}
                      className="mt-4 flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2.5 text-sm font-semibold text-neutral-600 transition-colors group-hover:bg-rose-50 group-hover:text-rose-500"
                    >
                      자세히 보기 <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <a
                      href={GAMSGO_AFFILIATE_URL}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="mt-4 flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2.5 text-sm font-semibold text-neutral-600 transition-colors group-hover:bg-rose-50 group-hover:text-rose-500"
                    >
                      특가 확인하기 <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
      <AffiliateCTA label="가장 저렴한 서비스 지금 확인하기" />
    </div>
  );
}
