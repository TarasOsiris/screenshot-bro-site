import { FeatureIcon } from "~/components/home/icons";
import { SectionIntro } from "~/components/home/SectionIntro";
import type { HomeCopy } from "~/config/localization";

export function FeaturesSection({ copy }: { copy: HomeCopy }) {
  return (
    <section
      id="features"
      className="relative py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={copy.sections.features.eyebrow}
          title={copy.sections.features.title}
          description={copy.sections.features.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {copy.features.map((feature, index) => (
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
