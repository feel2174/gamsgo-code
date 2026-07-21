const STAR_INDEXES = [1, 2, 3, 4, 5];

export function StarRatingDisplay({
  rating,
  size = "text-sm",
}: {
  rating: number;
  size?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1 ${size}`}>
      <span className="flex items-center gap-0.5" aria-hidden>
        {STAR_INDEXES.map((starIndex) => {
          const fill = Math.max(0, Math.min(1, rating - (starIndex - 1)));
          return (
            <span key={starIndex} className="relative inline-block leading-none">
              <span className="text-neutral-300">★</span>
              <span
                className="absolute inset-0 overflow-hidden text-amber-400"
                style={{ width: `${fill * 100}%` }}
              >
                ★
              </span>
            </span>
          );
        })}
      </span>
      <span className="font-semibold text-neutral-500">
        {rating.toFixed(1)}
      </span>
    </span>
  );
}
