// The Product Hunt "featured" badge, in the light or dark variant to match the
// theme. Shared by the hero and the footer.
const PH_URL =
  "https://www.producthunt.com/products/screenshotbro-mac-app?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-screenshotbro-mac-app";
const BADGE = (theme: "neutral" | "dark") =>
  `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1106959&theme=${theme}&t=1775116842049`;

export function ProductHuntBadge({
  alt,
  lazy = false,
  className = "",
}: {
  alt: string;
  lazy?: boolean;
  className?: string;
}) {
  const imgClass = `opacity-80 hover:opacity-100 transition-opacity ${className}`.trim();
  return (
    <a href={PH_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
      <img
        src={BADGE("neutral")}
        alt={alt}
        width="200"
        height="43"
        loading={lazy ? "lazy" : undefined}
        className={`theme-light-only ${imgClass}`}
      />
      <img
        src={BADGE("dark")}
        alt={alt}
        width="200"
        height="43"
        loading={lazy ? "lazy" : undefined}
        className={`theme-dark-only ${imgClass}`}
      />
    </a>
  );
}
