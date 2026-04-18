import { useLoopWithPause } from "~/components/home/hooks";
import { SectionIntro } from "~/components/home/SectionIntro";
import { APP_STORE_URL, FEATURE_SHOWCASES } from "~/config/site";
import type { FeatureShowcase } from "~/config/site";

function FeatureShowcaseBlock({
  showcase,
  href,
}: {
  showcase: FeatureShowcase;
  href: string;
}) {
  const isVideo =
    showcase.media.endsWith(".mp4") || showcase.media.endsWith(".webm");
  const videoRef = useLoopWithPause();

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
              Try it now
            </a>
            <a
              href="#early-access"
              className="text-sm text-white/[0.52] hover:text-white/[0.88] transition-colors"
            >
              See details
            </a>
          </div>
        </div>

        <div>
          {isVideo ? (
            <video
              ref={videoRef as React.RefObject<HTMLVideoElement>}
              src={showcase.media}
              autoPlay
              muted
              playsInline
              preload="none"
              poster={`/showcases/${showcase.id}-poster.webp`}
              className="showcase-media w-full h-full block"
              aria-label={showcase.mediaAlt}
            />
          ) : (
            <img
              src={showcase.media}
              alt={showcase.mediaAlt}
              className="showcase-media w-full h-full block"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
    </article>
  );
}

export function ShowcasesSection({ href = APP_STORE_URL }: { href?: string }) {
  return (
    <section
      id="showcases"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow="Showcases"
          title="See the core workflow before you install."
          description="Batch import, one-click App Store Connect upload, layers, backgrounds, and device frames — the moments most people use to judge whether this saves them time."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {FEATURE_SHOWCASES.map((showcase) => (
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
          {FEATURE_SHOWCASES.map((showcase) => (
            <FeatureShowcaseBlock
              key={showcase.id}
              showcase={showcase}
              href={href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
