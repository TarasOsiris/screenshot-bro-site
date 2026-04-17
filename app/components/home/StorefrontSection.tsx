import { SectionIntro } from "~/components/home/SectionIntro";
import { STOREFRONT_POINTS } from "~/config/site";

export function StorefrontSection() {
  return (
    <section
      id="storefronts"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow="Storefronts"
          title="One Mac app for App Store and Google Play screenshots."
          description="Build the image set your listing needs: device-framed screenshots, localized headlines, translated variants, and organized exports for every screen."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STOREFRONT_POINTS.map((point) => (
            <article key={point.title} className="soft-panel rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/[0.56]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
