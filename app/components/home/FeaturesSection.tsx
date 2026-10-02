import { FeatureIcon } from "~/components/home/icons";
import { SectionIntro } from "~/components/home/SectionIntro";
import type { FeatureIconKey } from "~/config/site";
import type { HomeCopy } from "~/config/localization";

// The showcases above already demo batch import, upload, shapes, backgrounds,
// frames and MCP, so the grid only carries what they don't — eight cards, two
// even rows. Picked by key so every locale's translated list still lines up.
const HOME_FEATURES: FeatureIconKey[] = [
  "templates",
  "project",
  "export",
  "cloud",
  "native",
  "fonts",
  "privacy",
  "free",
];

export function FeaturesSection({ copy }: { copy: HomeCopy }) {
  const features = HOME_FEATURES.map((key) =>
    copy.features.find((feature) => feature.icon === key),
  ).filter((feature) => feature !== undefined);

  return (
    <section
      id="features"
      className="relative py-24 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={copy.sections.features.eyebrow}
          title={copy.sections.features.title}
          description={copy.sections.features.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.icon}
              className="feature-card rounded-3xl p-6 flex flex-col gap-4"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent/10 text-accent-light">
                <FeatureIcon icon={feature.icon} />
              </div>
              <div className="space-y-2.5">
                <h3 className="font-display font-semibold text-ink text-base">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/[0.62]">
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
