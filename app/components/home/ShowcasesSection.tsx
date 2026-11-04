import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { DownloadIcon } from "~/components/home/small-icons";
import { useActiveLoopVideo } from "~/components/home/hooks";
import { McpSessionVisual } from "~/components/home/McpSessionVisual";
import { ButtonLink } from "~/components/ui/Button";
import { SectionIntro } from "~/components/home/SectionIntro";
import type { FeatureShowcase } from "~/config/site";
import { downloadPageUrl, type HomeCopy } from "~/config/localization";

const tabId = (id: string) => `showcase-tab-${id}`;

function ShowcaseMedia({
  showcase,
  active,
}: {
  showcase: FeatureShowcase;
  active: boolean;
}) {
  const isVideo = /\.(mp4|webm)$/.test(showcase.media);
  const videoRef = useActiveLoopVideo(isVideo ? showcase.media : "", active);

  if (showcase.visual === "mcp") {
    return <McpSessionVisual label={showcase.mediaAlt} />;
  }

  // Every clip shares one box so switching tabs never moves the page; the one
  // recording much taller than the box is letterboxed instead of cropped.
  const fit =
    showcase.mediaWidth / showcase.mediaHeight < 1.4
      ? "object-contain"
      : "object-cover object-top";
  const className = `w-full h-full block bg-surface-overlay ${fit}`;

  return isVideo ? (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="none"
      poster={active ? showcase.media.replace(/\.\w+$/, "-poster.webp") : undefined}
      width={showcase.mediaWidth}
      height={showcase.mediaHeight}
      className={className}
      aria-label={showcase.mediaAlt}
    />
  ) : (
    <img
      src={showcase.media}
      alt={showcase.mediaAlt}
      width={showcase.mediaWidth}
      height={showcase.mediaHeight}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export function ShowcasesSection({
  copy,
  href,
}: {
  copy: HomeCopy;
  href?: string;
}) {
  const ctaHref = href ?? downloadPageUrl(copy.locale.code);
  const showcases = copy.featureShowcases;
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  // Old deep links (/#auto-upload) open their tab. The browser cannot scroll
  // to a panel that was `hidden` when the hash was applied, so scroll once the
  // tab is shown.
  useEffect(() => {
    const selectFromHash = () => {
      const index = showcases.findIndex(
        (showcase) => `#${showcase.id}` === window.location.hash,
      );
      if (index < 0) return;
      setActiveIndex(index);
      setScrollTarget(showcases[index].id);
    };
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, [showcases]);

  useEffect(() => {
    if (!scrollTarget) return;
    document.getElementById(scrollTarget)?.scrollIntoView();
    setScrollTarget(null);
  }, [scrollTarget]);

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = showcases.length - 1;
    const next = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="showcases"
      className="py-24 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={copy.sections.showcases.eyebrow}
          title={copy.sections.showcases.title}
          description={copy.sections.showcases.description}
        />

        <div
          role="tablist"
          aria-label={copy.sections.showcases.eyebrow}
          className="-mt-6 mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {showcases.map((showcase, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={showcase.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={tabId(showcase.id)}
                aria-selected={selected}
                aria-controls={showcase.id}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={onTabKeyDown}
                className={`rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  selected
                    ? "bg-ink text-surface font-medium"
                    : "soft-pill text-ink/[0.68] hover:text-ink/[0.92]"
                }`}
              >
                {showcase.label}
              </button>
            );
          })}
        </div>

        <div className="showcase-panel overflow-hidden hover:transform-none!">
          {showcases.map((showcase, index) => {
            const active = index === activeIndex;
            return (
              <article
                key={showcase.id}
                id={showcase.id}
                role="tabpanel"
                aria-labelledby={tabId(showcase.id)}
                hidden={!active}
                className="scroll-mt-24 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
              >
                <div className="p-7 sm:p-10 flex flex-col justify-center">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight leading-[1.12] text-balance">
                    {showcase.title}
                  </h3>
                  <p className="mt-4 text-base text-ink/[0.6] leading-relaxed text-pretty">
                    {showcase.description}
                  </p>
                </div>

                <div
                  className={`order-first lg:order-none min-w-0 ${
                    showcase.visual === "mcp" ? "lg:aspect-[3/2]" : "aspect-[3/2]"
                  }`}
                >
                  <ShowcaseMedia showcase={showcase} active={active} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink href={ctaHref} size="lg">
            <DownloadIcon className="opacity-80 group-hover:opacity-100 transition-opacity" />
            {copy.primaryCtaLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
