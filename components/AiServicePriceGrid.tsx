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

/** 겜스고 실제 상품 카드의 흰색 상단 + 코랄 하단이 하나로 이어지는 "웨이브" 곡선 */
const WAVE_TOP_RADIUS = "50% 50% 0 0 / 22px 22px 0 0";

/**
 * AI 구독료 비교 페이지 전용 카드. 겜스고 실제 화면의 "배지 + 웨이브 가격 영역" 톤을
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
          className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
        >
          <span className="absolute right-4 top-4 z-10 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
            ✨ {service.badge}
          </span>

          <div className="flex flex-col items-center gap-2 px-5 pb-6 pt-7 text-center">
            <ServiceIconBadge icon={service.icon} size={40} />
            <h3 className="text-lg font-extrabold text-neutral-900">
              {service.name}
            </h3>
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
              {service.tagline}
            </span>
          </div>

          <div
            className="flex flex-col items-center gap-0.5 bg-rose-600 px-4 pb-5 pt-5 transition-colors duration-200 group-hover:bg-rose-700"
            style={{ borderRadius: WAVE_TOP_RADIUS }}
          >
            <span className="text-xs font-medium text-rose-50 line-through">
              {service.officialPriceKRW.toLocaleString()}원
            </span>
            <span className="text-2xl font-extrabold text-white">
              {service.gamsgoPriceKRW.toLocaleString()}원
              <span className="ml-1 text-sm font-semibold text-rose-50">
                /월
              </span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
