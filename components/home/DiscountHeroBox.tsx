import { AffiliateCTA } from "@/components/AffiliateCTA";
import { ServiceIconBadge } from "@/components/ServiceIcon";
import { getServiceById, type ServiceId } from "@/lib/constants";
import { SERVICE_ICONS } from "@/lib/serviceIcons";

/**
 * 상단 "할인 강조 박스" — 참조 사이트(pickleplus-coupon.com)의 쿠폰 코드 박스 자리를
 * 대체한다. 겜스고는 쿠폰 코드가 아닌 제휴 링크 방식이라, 없는 코드를 위조하는 대신
 * 실제 SERVICE_PRICES에 기재된 정가·할인가를 근거로 한 할인 강조 카드를 노출한다.
 *
 * 아래 예시 수치는 lib/constants.ts의 실제 값과 일치한다(위조 금지 원칙):
 *  - youtube-premium: 정가 월 14,900원 / gamsgoPriceKRW 6,900
 *  - netflix:         정가 월 17,000원 / gamsgoPriceKRW 5,000대
 */
interface HeroExample {
  id: ServiceId;
  officialMonthly: string;
  dealMonthly: string;
}

const HERO_EXAMPLES: HeroExample[] = [
  { id: "youtube-premium", officialMonthly: "14,900원", dealMonthly: "6,900원~" },
  { id: "netflix", officialMonthly: "17,000원", dealMonthly: "5,000원대" },
];

export function DiscountHeroBox() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-rose-200 bg-gradient-to-b from-rose-50 to-white p-5 text-left shadow-sm">
      <span className="inline-flex w-fit items-center gap-1.5 self-center rounded-full bg-rose-600 px-3.5 py-1.5 text-sm font-extrabold text-white">
        🔥 구독료 최대 70% 할인
      </span>

      <ul className="flex flex-col gap-2.5">
        {HERO_EXAMPLES.map((example) => {
          const service = getServiceById(example.id);
          return (
            <li
              key={example.id}
              className="flex items-center justify-between gap-3 rounded-xl bg-white px-3.5 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <ServiceIconBadge icon={SERVICE_ICONS[example.id]} size={32} />
                <span className="text-sm font-bold text-neutral-900">
                  {service.name}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-medium text-neutral-500 line-through">
                  월 {example.officialMonthly}
                </span>
                <span className="text-lg font-extrabold text-rose-600">
                  {example.dealMonthly}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="text-center text-xs text-neutral-500">
        정가 대비 · 월 환산 기준 · 결제 즉시 발송 · 24시간 환불 보장
      </p>

      <AffiliateCTA label="지금 특가 확인하기" />
    </div>
  );
}
