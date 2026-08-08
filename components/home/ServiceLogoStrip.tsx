import { ServiceIconBadge } from "@/components/ServiceIcon";
import { getServiceById, type ServiceId } from "@/lib/constants";
import { SERVICE_ICONS } from "@/lib/serviceIcons";

/**
 * 상단 "서비스 로고 그리드" — 지원 서비스 커버리지를 한눈에 보여줘 신뢰를 주는 블록.
 * 기존 ServiceIconBadge(인라인 SVG/이니셜 배지)를 재사용하므로 네트워크 이미지가
 * 전혀 없다(최근 확보한 성능 최적화 유지).
 */
const FEATURED_IDS: ServiceId[] = [
  "youtube-premium",
  "netflix",
  "chatgpt-plus",
  "disney-plus",
  "spotify",
  "claude",
  "gemini",
  "apple-music",
  "notion",
  "canva",
  "microsoft-365",
  "adobe-cc",
];

export function ServiceLogoStrip() {
  return (
    <div className="flex flex-col gap-3">
      <ul className="grid grid-cols-4 gap-3 sm:grid-cols-6">
        {FEATURED_IDS.map((id) => {
          const service = getServiceById(id);
          return (
            <li key={id} className="flex flex-col items-center gap-1.5">
              <ServiceIconBadge icon={SERVICE_ICONS[id]} size={36} />
              <span className="w-full truncate text-center text-[11px] font-semibold text-neutral-500">
                {service.name}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="text-center text-xs text-neutral-500">
        유튜브·넷플릭스·챗GPT 등 <strong className="text-neutral-700">150여 개 서비스</strong> 할인 지원
      </p>
    </div>
  );
}
