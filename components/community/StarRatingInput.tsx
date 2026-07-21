const STARS = [5, 4, 3, 2, 1] as const;

export function StarRatingInput() {
  return (
    <div
      className="flex w-fit flex-row-reverse items-center gap-1"
      role="radiogroup"
      aria-label="이용한 서비스 별점"
    >
      {STARS.map((value) => (
        <label key={value} className="cursor-pointer">
          <input
            type="radio"
            name="rating"
            value={value}
            required
            className="peer sr-only"
          />
          <span className="peer-checked:text-amber-400 text-2xl leading-none text-neutral-300 transition-colors">
            ★
          </span>
        </label>
      ))}
    </div>
  );
}
