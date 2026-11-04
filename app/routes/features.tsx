import type { ReactNode } from "react";
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
} from "~/config/site";
import { STARTER_TEMPLATES } from "~/config/templates";

// The home page's #features grid shows eight cards; this is the full list from
// config/site.ts (the same copy the SoftwareApplication featureList reads), so
// the two never disagree. English-only, like /download and /pricing.
const TITLE = `Features — ${SITE_NAME}`;
const DESCRIPTION =
  "Device frames, multi-template editing, 81 language presets with on-device translation, batch export, App Store Connect and Google Play upload, and MCP.";

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

type Card = { key: string; title: string; description: string; icon: ReactNode };

type Visual = {
  images: { src: string; srcSet?: string; width: number; height: number }[];
  alt: string;
  caption: string;
};

const SCREENSHOT_SIZES = "(min-width: 1024px) 560px, 100vw";

function appStoreScreenshot(n: number) {
  return {
    src: `/screenshots/0${n}_screenshot.webp`,
    srcSet: `/screenshots/0${n}_screenshot-720.webp 720w, /screenshots/0${n}_screenshot.webp 1440w`,
    width: 1440,
    height: 900,
  };
}

// Cards that only make sense on this page; the rest come from FEATURES in config/site.ts.
const EXTRA_CARDS: Record<string, Card> = {
  overrides: {
    key: "overrides",
    title: "See What Each Language Changes",
    description:
      "Controls a language overrides are tinted amber, row headers count the shapes it changes, and the translation table puts every string side by side with per-cell Translate and Reset.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M12 4v16" />
      </svg>
    ),
  },
  overflow: {
    key: "overflow",
    title: "Catch Text That Doesn't Fit",
    description:
      "A translation too long for its box gets a dashed orange outline on the canvas and a warning in the upload checks. Enlarge the box, shorten the copy, or turn on Shrink to Fit.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" strokeDasharray="3 2.5" />
        <path d="M7 10h10M7 14h6" />
      </svg>
    ),
  },
  format: {
    key: "format",
    title: "Open Project Format",
    description:
      "Projects are plain JSON on your device, with a published schema, so you can read, diff or generate them with your own tools.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <path d="M14 3v6h6M10 13l-2 2 2 2M14 13l2 2-2 2" />
      </svg>
    ),
  },
};

const GROUPS: { id: string; title: string; description: string; keys: string[]; visual: Visual }[] = [
  {
    id: "design",
    title: "Design",
    description: "Lay out a whole listing on one canvas and change it in one place.",
    keys: ["templates", "starter", "device", "gradient", "shapes", "align", "fonts", "keyboard"],
    visual: {
      images: ["aurora/2", "sunset/2", "cosmic-bloom/3"].map((id) => ({
        src: `/template-gallery/${id}.webp`,
        width: 462,
        height: 1000,
      })),
      alt: "Three App Store screenshots from the Aurora, Sunset and Cosmic Bloom templates, each an iPhone frame with a headline",
      caption: `Three of the ${STARTER_TEMPLATES.length} built-in templates, exported from the app.`,
    },
  },
  {
    id: "localize",
    title: "Localize",
    description: "One design, every language — translated copy without duplicated layouts.",
    keys: ["project", "privacy", "overrides", "overflow"],
    visual: {
      images: [appStoreScreenshot(4)],
      alt: "The editor with a project switched to German: translated headlines over the same layout",
      caption: "Editing the German version of a project: the layout stays shared, the copy changes.",
    },
  },
  {
    id: "ship",
    title: "Export and upload",
    description: "From raw captures to the store without a browser tab.",
    keys: ["batch", "export", "upload", "automation"],
    visual: {
      images: [appStoreScreenshot(2)],
      alt: "An iPhone row and an iPad row of finished screenshots, ready to export together",
      caption: "Every row and language exports in one pass, sized for each store.",
    },
  },
  {
    id: "app",
    title: "The app",
    description: "Native, private and free to start.",
    keys: ["native", "cloud", "free", "format"],
    visual: {
      images: [{ src: "/docs-help/welcome.webp", width: 1660, height: 1080 }],
      alt: "The Screenshot Bro editor on a Mac: an iPhone row and an iPad row of screenshots with the inspector on the right",
      caption: "The editor on a Mac. With iCloud sync on, the same projects open on iPad and iPhone.",
    },
  },
];

const CARDS = new Map<string, Card>([
  ...FEATURES.map((feature): [string, Card] => [
    feature.icon,
    { key: feature.icon, title: feature.title, description: feature.description, icon: <FeatureIcon icon={feature.icon} /> },
  ]),
  ...Object.entries(EXTRA_CARDS),
]);

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([{ name: "Features", path: "/features" }]);

function FeatureCard({ card }: { card: Card }) {
  return (
    <div className="feature-card rounded-3xl p-6 flex flex-col gap-4">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent/10 text-accent-light">
        {card.icon}
      </div>
      <div className="space-y-2.5">
        <h3 className="font-display font-semibold text-ink text-base">{card.title}</h3>
        <p className="text-sm leading-relaxed text-ink/[0.62]">{card.description}</p>
      </div>
    </div>
  );
}

// Spans two columns and two rows of the four-column grid; `flip` puts it on the right.
function GroupVisual({ visual, flip }: { visual: Visual; flip: boolean }) {
  const strip = visual.images.length > 1;
  return (
    <figure
      className={`soft-panel rounded-3xl p-4 sm:p-5 flex flex-col gap-4 sm:col-span-2 lg:row-span-2 ${flip ? "lg:col-start-3" : ""}`}
    >
      <div className="relative flex-1 min-h-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--color-accent)_14%,transparent),transparent_70%)] lg:min-h-64">
        <div
          role="img"
          aria-label={visual.alt}
          className={`flex items-center justify-center gap-3 lg:absolute lg:inset-0 ${strip ? "py-2" : ""}`}
        >
          {visual.images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.srcSet ? SCREENSHOT_SIZES : undefined}
              width={image.width}
              height={image.height}
              alt=""
              loading="lazy"
              decoding="async"
              className={
                strip
                  ? "w-[30%] max-w-40 h-auto lg:max-w-none lg:w-[31%] lg:max-h-full lg:object-contain rounded-xl shadow-lg"
                  : "w-full h-auto lg:w-auto lg:max-w-full lg:max-h-full rounded-xl shadow-lg ring-1 ring-ink/10"
              }
            />
          ))}
        </div>
      </div>
      <figcaption className="text-xs text-ink/60 leading-relaxed">{visual.caption}</figcaption>
    </figure>
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
            Everything an App Store and Google Play screenshot tool should do
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

        {GROUPS.map((group, index) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="mt-20 scroll-mt-24">
            <h2 id={`${group.id}-heading`} className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              {group.title}
            </h2>
            <p className="mt-2 text-ink/60">{group.description}</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense gap-4">
              <GroupVisual visual={group.visual} flip={index % 2 === 1} />
              {group.keys.map((key) => {
                const card = CARDS.get(key);
                return card ? <FeatureCard key={key} card={card} /> : null;
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
