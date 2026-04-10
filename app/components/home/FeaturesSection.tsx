import { FeatureIcon } from "~/components/home/icons";
import { SectionIntro } from "~/components/home/SectionIntro";
import { FEATURES } from "~/config/site";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow="Capabilities"
          title="Everything you need. Nothing you don't."
          description="The feature set stays focused on layout speed, screenshot consistency, and export sanity. No browser tab, no general-purpose design suite, no repetitive resize work."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card rounded-3xl p-6 flex flex-col gap-4 min-h-[220px]"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `color-mix(in srgb, ${feature.accent} 12%, transparent)`,
                  color: feature.accent,
                }}
              >
                <FeatureIcon icon={feature.icon} />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-semibold text-white text-base">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/[0.52]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
