import { ButtonLink } from "~/components/ui/Button";
import { ArrowDownIcon, DownloadIcon } from "~/components/home/small-icons";
import { useDeferredLoopVideo } from "~/components/home/hooks";
import { downloadPageUrl, type HomeCopy } from "~/config/localization";
import { APP_STORE_RATING } from "~/config/app-store-proof";
import { fill } from "~/config/home-copy";
import { ProductHuntBadge } from "~/components/home/ProductHuntBadge";

// Proof right under the CTAs: the App Store rating once enough people have
// rated (config/app-store-proof.ts gates it) and the Product Hunt badge.
function HeroProof({ copy }: { copy: HomeCopy }) {
  return (
    <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3">
      {APP_STORE_RATING ? (
        <p className="flex items-center gap-2 text-sm text-ink/70">
          <span className="text-warm-light tracking-[0.1em]" aria-hidden="true">
            ★★★★★
          </span>
          <span>
            {fill(copy.ui.ratingSummary, {
              rating: APP_STORE_RATING.value.toFixed(1),
              count: APP_STORE_RATING.count,
            })}
          </span>
        </p>
      ) : null}
      <ProductHuntBadge alt={copy.ui.productHuntAlt} />
    </div>
  );
}

function AppPreview({ label }: { label: string }) {
  const videoRef = useDeferredLoopVideo("/demo-main.mp4");

  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden">
      <video
        ref={videoRef as React.RefObject<HTMLVideoElement>}
        autoPlay
        muted
        playsInline
        preload="none"
        // The src is set after first paint (useDeferredLoopVideo), so the
        // intrinsic size and the poster frame are what reserve the box and fill
        // it until then — no layout shift, no empty rectangle before hydration.
        width={1660}
        height={1080}
        poster="/demo-main-poster.webp"
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 1.25;
        }}
        className="w-full h-auto block aspect-[1660/1080]"
        aria-label={label}
      />
    </div>
  );
}

export function HeroSection({
  copy,
  href,
}: {
  copy: HomeCopy;
  href?: string;
}) {
  const ctaHref = href ?? downloadPageUrl(copy.locale.code);

  return (
    <section className="relative pt-32 pb-14 px-6 overflow-hidden">
      <div className="hero-gradient" />
      <div className="grid-bg absolute inset-0 opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="animate-fade-up mt-6 font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.98]"
            style={{ animationDelay: "0.12s" }}
          >
            <span className="text-ink">{copy.hero.titleLead}</span>
            <br />
            <span className="text-accent">{copy.hero.titleAccent}</span>
            <span className="text-ink">{copy.hero.titleRest}</span>
          </h1>

          <p
            className="animate-fade-up max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-ink/[0.62] leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            {copy.hero.descriptionLead}{" "}
            <span className="text-ink/[0.85]">
              {copy.hero.descriptionStrong}
            </span>{" "}
            {copy.hero.descriptionTail}
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.28s" }}
          >
            <ButtonLink href={ctaHref}>
              <DownloadIcon className="opacity-80 group-hover:opacity-100 transition-opacity" />
              {copy.primaryCtaLabel}
            </ButtonLink>
            <ButtonLink href="#showcases" variant="secondary">
              {copy.ui.seeInAction}
              <ArrowDownIcon />
            </ButtonLink>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.34s" }}>
            <HeroProof copy={copy} />
          </div>
        </div>

        <div
          className="animate-fade-up relative max-w-6xl mx-auto mt-14"
          style={{ animationDelay: "0.42s" }}
        >
          <AppPreview label={copy.hero.videoLabel} />
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
