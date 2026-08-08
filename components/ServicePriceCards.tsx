import Link from "next/link";
import { ServiceIconBadge } from "@/components/ServiceIcon";
import {
  GAMSGO_AFFILIATE_URL,
  SERVICE_PRICES,
  type ServiceCategory,
  type ServiceId,
  type ServicePrice,
} from "@/lib/constants";
import { SERVICE_ICONS } from "@/lib/serviceIcons";

const CATEGORY_ORDER: ServiceCategory[] = ["OTT", "AI", "음악", "소프트웨어", "게임"];

/** 가격 문자열 길이에 따라 알약 안에서 자연스럽게 보이도록 글자 크기를 단계적으로 낮춤 */
function gamsgoPriceTextClass(price: string) {
  if (price.length <= 10) return "text-2xl";
  if (price.length <= 16) return "text-lg";
  return "text-sm leading-snug";
}

/** 겜스고 실제 상품 카드의 흰색 상단 + 코랄 하단이 하나로 이어지는 "웨이브" 곡선 */
const WAVE_TOP_RADIUS = "50% 50% 0 0 / 22px 22px 0 0";

function ServicePriceCard({ service }: { service: ServicePrice }) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg">
      <span className="absolute right-4 top-4 z-10 max-w-[45%] truncate rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
        ✨ {service.discountLabel}
      </span>

      {/* 흰색 상단: 아이콘 + 한글명 + 영문명 알약. flex-1로 남는 공간을 흡수해
          가격 웨이브가 카드마다 다른 높이에서도 항상 하단에 고정되도록 함 */}
      <div className="flex flex-1 flex-col items-center gap-2 px-5 pb-6 pt-7 text-center">
        <ServiceIconBadge icon={SERVICE_ICONS[service.id]} size={40} />
        <h3 className="font-extrabold text-neutral-900">{service.name}</h3>
        {service.englishName && (
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
            {service.englishName}
          </span>
        )}
        {service.href && (
          <Link
            href={service.href}
            className="text-[11px] font-semibold text-neutral-500 underline decoration-neutral-200 underline-offset-2 transition-colors hover:text-rose-600 hover:decoration-rose-300"
          >
            자세히 알아보기
          </Link>
        )}
      </div>

      <a
        href={GAMSGO_AFFILIATE_URL}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="flex flex-col items-center gap-0.5 bg-rose-600 px-4 pb-5 pt-5 text-center transition-colors duration-200 hover:bg-rose-700 active:scale-[0.98]"
        style={{ borderRadius: WAVE_TOP_RADIUS }}
      >
        <span className="text-xs font-medium text-rose-50 line-through">
          정가 {service.officialPrice}
        </span>
        <span
          className={`font-extrabold text-white ${gamsgoPriceTextClass(service.gamsgoPrice)}`}
        >
          {service.gamsgoPrice}
        </span>
      </a>
    </div>
  );
}

/**
 * serviceIds를 주면 카테고리 구분 없이 해당 서비스만 평평한 그리드로 보여줌(랜딩페이지 티저용).
 * 생략하면 카테고리별로 묶어 전체 서비스를 보여줌(손해계산기 페이지용).
 */
export function ServicePriceCards({
  serviceIds,
}: {
  serviceIds?: ServiceId[];
}) {
  if (serviceIds) {
    const services = serviceIds
      .map((id) => SERVICE_PRICES.find((s) => s.id === id))
      .filter((s): s is ServicePrice => Boolean(s));

    return (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {services.map((service) => (
          <ServicePriceCard key={service.id} service={service} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {CATEGORY_ORDER.map((category) => {
        const services = SERVICE_PRICES.filter((s) => s.category === category);
        if (services.length === 0) return null;

        return (
          <section key={category} className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-neutral-500">{category}</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServicePriceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
