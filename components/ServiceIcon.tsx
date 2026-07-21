import type { ServiceIcon } from "@/lib/serviceIcons";

export function ServiceIconBadge({
  icon,
  size = 40,
}: {
  icon: ServiceIcon;
  size?: number;
}) {
  if (icon.kind === "brand") {
    return (
      <span
        className="flex shrink-0 items-center justify-center rounded-xl bg-neutral-50"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 24 24"
          fill={`#${icon.hex}`}
          style={{ width: size * 0.55, height: size * 0.55 }}
          aria-hidden
        >
          <path d={icon.path} />
        </svg>
      </span>
    );
  }

  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-xl text-white"
      style={{
        width: size,
        height: size,
        backgroundColor: `#${icon.hex}`,
        fontSize: size * 0.4,
      }}
      aria-hidden
    >
      <span className="font-extrabold">{icon.letter}</span>
    </span>
  );
}
