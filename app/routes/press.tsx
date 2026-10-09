import type { Route } from "./+types/press";
import { ContentLayout } from "~/components/ContentLayout";
import { Panel } from "~/components/ui/Panel";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import {
  APP_CATEGORY,
  APP_SCREENSHOTS,
  APP_STORE_URL,
  EARLY_ACCESS_EMAIL,
  MINIMUM_IPADOS_VERSION,
  MINIMUM_MACOS_VERSION,
  NINEVA_STUDIOS_NAME,
  NINEVA_STUDIOS_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  X_PROFILE_URL,
} from "~/config/site";

// Descriptions are copied verbatim from docs/growth/entity-facts.md — keep the
// two in step. Every asset links to a file already in public/.
const TITLE = `Press Kit — ${SITE_NAME}`;
const DESCRIPTION = `${SITE_NAME} press kit: app description, key facts, logos, app icon and screenshots to download, and a press contact.`;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: `${SITE_URL}/press` },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ]);

const SHORT_DESCRIPTION =
  "Screenshot Bro is a native Mac, iPad and iPhone app for designing App Store and Google Play screenshots: device frames, 81 locales, batch export, direct store upload.";

const LONG_DESCRIPTION = [
  "Screenshot Bro is a native Mac, iPad and iPhone app for producing App Store and Google Play screenshots. Instead of one design per size, the whole listing lives on a single continuous canvas: every device size, every screenshot row, and every locale side by side. Zoom out to see the entire set, zoom in to fix one headline.",
  "It includes device frames for iPhone, iPad, Mac, and Android, text, shapes, gradients, images and SVG, 50+ starter templates, 81 language presets with on-device auto-translate and per-shape text, position, and image overrides, batch export to PNG or JPEG organized by locale and row, and direct App Store Connect and Google Play upload. Project files are plain JSON, so they diff cleanly and belong to you.",
  "The free tier has no signup and no expiry: 1 project, 3 rows, 5 templates per row, every device frame, shape, and locale, watermark-free exports, store upload and iCloud sync. Pro lifts those limits: unlimited projects, rows, and templates.",
  "Made by Nineva Studios.",
];

const FACTS: { label: string; value: React.ReactNode }[] = [
  { label: "Product", value: SITE_NAME },
  { label: "Tagline", value: SITE_TAGLINE },
  { label: "Developer", value: <a href={NINEVA_STUDIOS_URL}>{NINEVA_STUDIOS_NAME}</a> },
  { label: "Founder", value: <a href={X_PROFILE_URL}>Taras Leskiv</a> },
  {
    label: "Platforms",
    value: `Mac (macOS ${MINIMUM_MACOS_VERSION}+), iPad and iPhone (iOS/iPadOS ${MINIMUM_IPADOS_VERSION}+)`,
  },
  { label: "Category", value: APP_CATEGORY },
  {
    label: "Price",
    value: (
      <>
        Free download with a free tier; Pro is an optional purchase (<a href="/pricing">details</a>)
      </>
    ),
  },
  {
    label: "Get it",
    value: (
      <>
        <a href={APP_STORE_URL}>App Store</a> or the <a href="/download">direct Mac download</a>
      </>
    ),
  },
  { label: "Website", value: <a href={SITE_URL}>{SITE_URL.replace("https://", "")}</a> },
];

const LOGOS = [
  { label: "Logo (for light backgrounds)", href: "/logo-light.svg", meta: "SVG" },
  { label: "Logo (for dark backgrounds)", href: "/logo-dark.svg", meta: "SVG" },
  { label: "Logo mark", href: "/logo.svg", meta: "SVG" },
  { label: "App icon", href: "/web-app-manifest-512x512.png", meta: "PNG, 512×512" },
  { label: "Social card", href: "/og-image.png", meta: "PNG, 1200×630" },
];

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([{ name: "Press kit", path: "/press" }]);

const LINK = "text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink/60";

export default function Press() {
  return (
    <ContentLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }} />
      <div className="max-w-4xl mx-auto">
        <section>
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono">Press kit</p>
          <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight">
            {SITE_NAME} press kit
          </h1>
          <p className="mt-5 text-lg text-ink/60 leading-relaxed">
            Everything you need to write about {SITE_NAME}: a description, key facts, and logos and
            screenshots to download. Questions or interview requests:{" "}
            <a href={`mailto:${EARLY_ACCESS_EMAIL}`} className={LINK}>
              {EARLY_ACCESS_EMAIL}
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="about-heading" className="mt-14">
          <h2 id="about-heading" className="font-display text-2xl font-bold tracking-tight text-ink">
            About
          </h2>
          <p className="mt-4 text-ink/75 leading-relaxed">{SHORT_DESCRIPTION}</p>
          <div className="mt-4 space-y-4 text-sm text-ink/[0.62] leading-relaxed">
            {LONG_DESCRIPTION.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="facts-heading" className="mt-14">
          <h2 id="facts-heading" className="font-display text-2xl font-bold tracking-tight text-ink">
            Fact sheet
          </h2>
          <Panel padding="sm" className="mt-5">
            <dl className="divide-y divide-border-subtle text-sm">
              {FACTS.map((fact) => (
                <div key={fact.label} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 py-3 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-ink/25">
                  <dt className="text-ink/60">{fact.label}</dt>
                  <dd className="text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
        </section>

        <section aria-labelledby="logos-heading" className="mt-14">
          <h2 id="logos-heading" className="font-display text-2xl font-bold tracking-tight text-ink">
            Logos and icon
          </h2>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LOGOS.map((logo) => (
              <li key={logo.href}>
                <Panel padding="sm" className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium text-ink">{logo.label}</p>
                    <p className="text-xs text-ink/60 font-mono">{logo.meta}</p>
                  </div>
                  <a href={logo.href} download className={`${LINK} text-sm shrink-0`}>
                    Download
                  </a>
                </Panel>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="screens-heading" className="mt-14">
          <h2 id="screens-heading" className="font-display text-2xl font-bold tracking-tight text-ink">
            Screenshots
          </h2>
          <p className="mt-2 text-sm text-ink/60">Mac app, 1440×900 WebP.</p>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {APP_SCREENSHOTS.map((shot) => (
              <li key={shot.src}>
                <figure>
                  <a href={shot.src} download>
                    <img
                      src={shot.src.replace(".webp", "-720.webp")}
                      alt={shot.alt}
                      width={720}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto rounded-2xl border border-border"
                    />
                  </a>
                  <figcaption className="mt-2 flex items-center justify-between gap-3 text-sm">
                    <span className="text-ink/70">{shot.caption}</span>
                    <a href={shot.src} download className={LINK}>
                      Download
                    </a>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </ContentLayout>
  );
}
