import { TRUST_BADGES } from "@/lib/constants";

export function TrustBadges() {
  return (
    <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1.5">
      {TRUST_BADGES.map((badge) => (
        <li
          key={badge.label}
          className="flex items-center gap-1 text-xs font-semibold text-neutral-500"
        >
          <span aria-hidden>{badge.icon}</span>
          {badge.label}
        </li>
      ))}
    </ul>
  );
}
