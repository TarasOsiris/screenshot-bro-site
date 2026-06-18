import { useLazyLoopVideo } from "~/components/home/hooks";
import { SectionIntro } from "~/components/home/SectionIntro";
import { APP_STORE_URL } from "~/config/site";
import type { FeatureShowcase } from "~/config/site";
import type { HomeCopy } from "~/config/localization";

function FeatureShowcaseBlock({
  showcase,
  href,
  copy,
}: {
  showcase: FeatureShowcase;
  href: string;
  copy: HomeCopy;
}) {
  const isVideo =
    showcase.media.endsWith(".mp4") || showcase.media.endsWith(".webm");
  const videoRef = useLazyLoopVideo(showcase.media);

  return (
    <article
      id={showcase.id}
      className="showcase-panel overflow-hidden scroll-mt-24"
    >
      <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent font-mono mb-4">
              {showcase.label}
            </p>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.06]">
              {showcase.title}
            </h3>
            <p className="mt-5 text-lg text-white/[0.58] leading-relaxed max-w-xl">
              {showcase.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={href}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-white/[0.88] transition-all hover:border-white/20 hover:bg-white/10"
            >
              {copy.ui.tryItNow}
            </a>
            <a
              href="#early-access"
              className="text-sm text-white/[0.52] hover:text-white/[0.88] transition-colors"
            >
              {copy.ui.seeDetails}
            </a>
          </div>
        </div>

        <div className="min-w-0">
          {isVideo ? (
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
  href = APP_STORE_URL,
}: {
  copy: HomeCopy;
  href?: string;
}) {
  return (
    <section
      id="showcases"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
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
              className="soft-pill rounded-full px-4 py-2 text-sm text-white/[0.68] hover:text-white/[0.92] transition-colors"
            >
              {showcase.label}
            </a>
          ))}
        </div>

        <div className="space-y-8">
          {copy.featureShowcases.map((showcase) => (
            <FeatureShowcaseBlock
              key={showcase.id}
              showcase={showcase}
              href={href}
              copy={copy}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
