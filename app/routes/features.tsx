import type { Route } from "./+types/features";
import { ContentLayout } from "~/components/ContentLayout";
import { FeatureIcon } from "~/components/home/icons";
import { DownloadIcon } from "~/components/home/small-icons";
import { ButtonLink } from "~/components/ui/Button";
import { Panel } from "~/components/ui/Panel";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import {
  FEATURE_SHOWCASES,
  FEATURES,
  SITE_NAME,
  SITE_URL,
  WORKFLOW_STEPS,
  type FeatureIconKey,
  type FeatureItem,
} from "~/config/site";
import { STARTER_TEMPLATES } from "~/config/templates";

// The home page's #features grid shows eight cards; this is the full list from
// config/site.ts (the same copy the SoftwareApplication featureList reads), so
// the two never disagree. English-only, like /download and /pricing.
const TITLE = `Features — ${SITE_NAME}`;
const DESCRIPTION =
  "Everything Screenshot Bro does: device frames, multi-template editing, 81 language presets with on-device translation, batch export, App Store Connect and Google Play upload, and a local MCP server.";

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: `${SITE_URL}/features` },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ]);

const GROUPS: { id: string; title: string; description: string; keys: FeatureIconKey[] }[] = [
  {
    id: "design",
    title: "Design",
    description: "Lay out a whole listing on one canvas and change it in one place.",
    keys: ["templates", "starter", "device", "gradient", "shapes", "align", "fonts", "keyboard"],
  },
  {
    id: "localize",
    title: "Localize",
    description: "One design, every language — translated copy without duplicated layouts.",
    keys: ["project", "privacy"],
  },
  {
    id: "ship",
    title: "Export and upload",
    description: "From raw captures to the store without a browser tab.",
    keys: ["batch", "export", "upload", "automation"],
  },
  {
    id: "app",
    title: "The app",
    description: "Native, private and free to start.",
    keys: ["native", "cloud", "free"],
  },
];

const byKey = new Map(FEATURES.map((feature) => [feature.icon, feature]));

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([{ name: "Features", path: "/features" }]);

function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <div className="feature-card rounded-3xl p-6 flex flex-col gap-4">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent/10 text-accent-light">
        <FeatureIcon icon={feature.icon} />
      </div>
      <div className="space-y-2.5">
        <h3 className="font-display font-semibold text-ink text-base">{feature.title}</h3>
        <p className="text-sm leading-relaxed text-ink/[0.62]">{feature.description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <ContentLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }} />
      <div className="max-w-6xl mx-auto">
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono">Features</p>
          <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight text-balance">
            Everything an App Store screenshot tool should do
          </h1>
          <p className="mt-5 text-lg text-ink/60 leading-relaxed text-balance">
            {SITE_NAME} is a native Mac, iPad and iPhone app for designing, localizing, exporting and
            uploading App Store and Google Play screenshots. Here is the whole feature set.
          </p>
          <nav aria-label="Feature groups" className="mt-8 flex flex-wrap justify-center gap-2">
            {GROUPS.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-ink/10 bg-ink/[0.05] px-4 py-1.5 text-sm text-ink/75 hover:text-ink hover:border-ink/20"
              >
                {group.title}
              </a>
            ))}
          </nav>
        </section>

        {GROUPS.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="mt-20 scroll-mt-24">
            <h2 id={`${group.id}-heading`} className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              {group.title}
            </h2>
            <p className="mt-2 text-ink/60">{group.description}</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {group.keys.map((key) => {
                const feature = byKey.get(key);
                return feature ? <FeatureCard key={key} feature={feature} /> : null;
              })}
            </div>
          </section>
        ))}

        <section aria-labelledby="in-depth-heading" className="mt-24">
          <h2 id="in-depth-heading" className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            In depth
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURE_SHOWCASES.map((showcase) => (
              <Panel key={showcase.id}>
                <p className="text-[11px] uppercase tracking-[0.25em] text-accent-light font-mono">{showcase.label}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{showcase.title}</h3>
                <p className="mt-2 text-sm text-ink/[0.62] leading-relaxed">{showcase.description}</p>
              </Panel>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/60">
            Watch each of these in motion in the{" "}
            <a href="/#showcases" className="text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink/60">
              showcase videos on the home page
            </a>
            , or start from one of the{" "}
            <a href="/templates" className="text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink/60">
              {STARTER_TEMPLATES.length} built-in templates
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="workflow-heading" className="mt-24">
          <h2 id="workflow-heading" className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            The workflow
          </h2>
          <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WORKFLOW_STEPS.map((step) => (
              <li key={step.step}>
                <Panel padding="sm" className="h-full">
                  <p className="font-mono text-sm text-accent-light">{step.step}</p>
                  <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink/[0.62] leading-relaxed">{step.description}</p>
                </Panel>
              </li>
            ))}
          </ol>
        </section>

        <Panel tone="accent" padding="lg" className="mt-24 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            Free to start, no signup
          </h2>
          <p className="mt-3 text-ink/60 max-w-xl mx-auto">
            Every feature above works on the free tier, within one project of three rows and five
            templates per row. Pro lifts those limits.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <ButtonLink href="/download" size="lg">
              <DownloadIcon /> Get {SITE_NAME}
            </ButtonLink>
            <ButtonLink href="/pricing" variant="secondary" size="lg">
              Compare Free and Pro
            </ButtonLink>
          </div>
        </Panel>
      </div>
    </ContentLayout>
  );
}
