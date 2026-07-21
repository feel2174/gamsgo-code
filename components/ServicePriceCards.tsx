import Link from "next/link";
import { ServiceIconBadge } from "@/components/ServiceIcon";
import {
  GAMSGO_AFFILIATE_URL,
  SERVICE_PRICES,
  type ServiceCategory,
} from "@/lib/constants";
import { SERVICE_ICONS } from "@/lib/serviceIcons";

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
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
                >
                  {/* 위쪽 콘텐츠: flex-1로 남는 공간을 흡수해 버튼 영역이 카드마다 다른
                      높이에서도 항상 하단에 고정되도록 함 */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start gap-3">
                      <ServiceIconBadge
                        icon={SERVICE_ICONS[service.id]}
                        size={44}
                      />
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-bold text-neutral-900">
                            {service.name}
                          </h4>
                          <span className="shrink-0 rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-500">
                            {service.discountLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-full bg-neutral-50 px-2 py-1 text-[11px] font-medium text-neutral-500"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-col gap-0.5">
                      <p className="text-xs text-neutral-400 line-through">
                        정가 {service.officialPrice}
                      </p>
                      <p className="text-lg font-extrabold text-neutral-900">
                        {service.gamsgoPrice}
                      </p>
                    </div>
                  </div>

                  {/* 버튼 영역: 항상 카드 하단에 고정 */}
                  <div className="mt-4 flex flex-col gap-2">
                    {service.href && (
                      <Link
                        href={service.href}
                        className="text-center text-xs font-semibold text-neutral-400 transition-colors hover:text-rose-500"
                      >
                        자세히 알아보기
                      </Link>
                    )}
                    <a
                      href={GAMSGO_AFFILIATE_URL}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="flex items-center justify-center gap-1 rounded-lg bg-neutral-900 px-3 py-2.5 text-sm font-bold text-white transition-transform duration-150 active:scale-[0.98]"
                    >
                      겜스고에서 확인하기 <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
