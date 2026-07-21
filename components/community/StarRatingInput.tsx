"use client";

import { useState } from "react";

const STAR_INDEXES = [1, 2, 3, 4, 5];

function StarGlyph({ fill }: { fill: number }) {
  return (
    <span className="relative inline-block text-2xl leading-none">
      <span className="text-neutral-300">★</span>
      <span
        className="absolute inset-0 overflow-hidden text-amber-400"
        style={{ width: `${fill * 100}%` }}
        aria-hidden
      >
        ★
      </span>
    </span>
  );
}

export function StarRatingInput({
  name = "rating",
  defaultValue = 5,
}: {
  name?: string;
  defaultValue?: number;
}) {
  const [value, setValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const display = hoverValue ?? value;

  return (
    <div className="flex items-center gap-2">
      <input type="hidden" name={name} value={value} />
      <div
        className="flex items-center gap-0.5"
        role="radiogroup"
        aria-label="이용한 서비스 별점"
        onMouseLeave={() => setHoverValue(null)}
      >
        {STAR_INDEXES.map((starIndex) => {
          const fill = Math.max(0, Math.min(1, display - (starIndex - 1)));
          return (
            <span key={starIndex} className="relative">
              <StarGlyph fill={fill} />
              <button
                type="button"
                aria-label={`${starIndex - 0.5}점`}
                className="absolute inset-y-0 left-0 w-1/2"
                onMouseEnter={() => setHoverValue(starIndex - 0.5)}
                onClick={() => setValue(starIndex - 0.5)}
              />
              <button
                type="button"
                aria-label={`${starIndex}점`}
                className="absolute inset-y-0 right-0 w-1/2"
                onMouseEnter={() => setHoverValue(starIndex)}
                onClick={() => setValue(starIndex)}
              />
            </span>
          );
        })}
      </div>
      <span className="text-sm font-semibold text-neutral-600">
        {value.toFixed(1)}
      </span>
    </div>
  );
}
