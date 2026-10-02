import { DownloadIcon } from "~/components/home/small-icons";
import { useLazyLoopVideo } from "~/components/home/hooks";
import { McpSessionVisual } from "~/components/home/McpSessionVisual";
import { ButtonLink } from "~/components/ui/Button";
import { SectionIntro } from "~/components/home/SectionIntro";
import type { FeatureShowcase } from "~/config/site";
import { downloadPageUrl, type HomeCopy } from "~/config/localization";

function FeatureShowcaseBlock({ showcase }: { showcase: FeatureShowcase }) {
  const isVideo =
    showcase.media.endsWith(".mp4") || showcase.media.endsWith(".webm");
  const videoRef = useLazyLoopVideo(showcase.media);

  return (
    <article
      id={showcase.id}
      className="showcase-panel overflow-hidden scroll-mt-24"
    >
      <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-4">
              {showcase.label}
            </p>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-[1.06]">
              {showcase.title}
            </h3>
            <p className="mt-5 text-lg text-ink/[0.58] leading-relaxed max-w-xl">
              {showcase.description}
            </p>
          </div>
        </div>

        <div className="min-w-0">
          {showcase.visual === "mcp" ? (
            <McpSessionVisual label={showcase.mediaAlt} />
          ) : isVideo ? (
            <video
              ref={videoRef as React.RefObject<HTMLVideoElement>}
              autoPlay
              muted
              playsInline
              preload="none"
              width={showcase.mediaWidth}
              height={showcase.mediaHeight}
              className="showcase-media w-full h-auto lg:h-full block"
              aria-label={showcase.mediaAlt}
            />
          ) : (
            <img
              src={showcase.media}
              alt={showcase.mediaAlt}
              width={showcase.mediaWidth}
              height={showcase.mediaHeight}
              className="showcase-media w-full h-auto lg:h-full block"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
    </article>
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

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {copy.featureShowcases.map((showcase) => (
            <a
              key={showcase.id}
              href={`#${showcase.id}`}
              className="soft-pill rounded-full px-4 py-2 text-sm text-ink/[0.68] hover:text-ink/[0.92] transition-colors"
            >
              {showcase.label}
            </a>
          ))}
        </div>

        <div className="space-y-8">
          {copy.featureShowcases.map((showcase) => (
            <FeatureShowcaseBlock key={showcase.id} showcase={showcase} />
          ))}
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
