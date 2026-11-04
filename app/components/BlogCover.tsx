import type { CSSProperties } from "react";
import type { BlogCover as BlogCoverData } from "~/config/blog-images";

// A fan of real template exports on the site's grid background, tinted by the
// post's category. Fills its (positioned, sized) parent, so the card reserves
// the space and nothing shifts while the images load. Decorative: the card's
// title already says what the post is.
export function BlogCover({
  cover,
  eager = false,
  shotWidth,
  className = "",
}: {
  cover: BlogCoverData;
  eager?: boolean;
  // Percent of the cover's width per shot; defaults suit a 16:9 card.
  shotWidth?: number;
  className?: string;
}) {
  const count = cover.shots.length;
  const width = shotWidth ?? (count >= 5 ? 19 : 26);
  const step = width * (count >= 5 ? 0.92 : 0.86);
  const style = { "--tint": cover.tint } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      style={style}
      className={`absolute inset-0 overflow-hidden bg-[color-mix(in_srgb,var(--tint)_9%,var(--color-surface-overlay))] ${className}`}
    >
      <div className="grid-bg absolute inset-0 [background-size:28px_28px] opacity-80" />
      <div className="absolute inset-x-0 -bottom-1/3 h-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--tint)_32%,transparent),transparent)]" />
      {cover.shots.map((src, i) => {
        const d = i - (count - 1) / 2;
        const shotStyle: CSSProperties = {
          width: `${width}%`,
          left: `${50 + d * step - width / 2}%`,
          top: `${14 + Math.abs(d) * 9}%`,
          zIndex: count - Math.abs(Math.round(d * 2)),
          transform: `rotate(${d * 3.5}deg)`,
        };
        return (
          <img
            key={src}
            src={src}
            alt=""
            width={462}
            height={1000}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            {...(eager && i === Math.floor(count / 2) ? { fetchPriority: "high" as const } : {})}
            style={shotStyle}
            className="absolute h-auto origin-bottom rounded-[10px] border border-ink/10 shadow-[0_18px_40px_-16px_rgba(5,5,7,0.45)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
          />
        );
      })}
    </div>
  );
}
