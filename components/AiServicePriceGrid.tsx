import { ServiceIconBadge } from "@/components/ServiceIcon";
import { GAMSGO_AFFILIATE_URL } from "@/lib/constants";
import type { ServiceIcon } from "@/lib/serviceIcons";

export interface AiServicePrice {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  icon: ServiceIcon;
  officialPriceKRW: number;
  gamsgoPriceKRW: number;
}

/**
 * AI 구독료 비교 페이지 전용 카드. 겜스고 실제 화면의 "배지 + 가격 알약" 톤을
 * 그대로 가져온 디자인이라 다른 페이지의 ServicePriceCards와는 의도적으로 다르다.
 */
export function AiServicePriceGrid({ services }: { services: AiServicePrice[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {services.map((service) => (
        <a
          key={service.id}
          href={GAMSGO_AFFILIATE_URL}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-5 pt-6 transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
        >
          <span className="absolute right-4 top-4 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
            {service.badge}
          </span>

          <div className="flex flex-col items-center gap-2 text-center">
            <ServiceIconBadge icon={service.icon} size={40} />
            <h3 className="text-lg font-extrabold text-neutral-900">
              {service.name}
            </h3>
            <p className="text-xs text-neutral-500">{service.tagline}</p>
          </div>

          <div className="mt-4 flex flex-col items-center gap-0.5 rounded-2xl bg-rose-500 px-4 py-4 transition-colors duration-200 group-hover:bg-rose-600">
            <span className="text-xs font-medium text-rose-100 line-through">
              {service.officialPriceKRW.toLocaleString()}원
            </span>
            <span className="text-2xl font-extrabold text-white">
              {service.gamsgoPriceKRW.toLocaleString()}원
              <span className="ml-1 text-sm font-semibold text-rose-100">
                /월
              </span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
