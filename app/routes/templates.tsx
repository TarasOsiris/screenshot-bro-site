import type { Route } from "./+types/templates";
import { ContentLayout } from "~/components/ContentLayout";
import { DownloadIcon } from "~/components/home/small-icons";
import { ButtonLink } from "~/components/ui/Button";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { STARTER_TEMPLATES, starterTemplateShots } from "~/config/templates";

// An indexable gallery of every bundled starter template. The home page's
// Templates section shows one at a time behind a picker; this lists them all,
// each with its own #id so a template can be linked directly. Images are the
// same real exports in public/template-gallery/ (see config/templates.ts).
const COUNT = STARTER_TEMPLATES.length;
const TITLE = `${COUNT} App Store Screenshot Templates — ${SITE_NAME}`;
const DESCRIPTION = `Browse all ${COUNT} App Store and Google Play screenshot templates built into Screenshot Bro. Each preview is a real export; start a project from any of them and swap in your screenshots.`;
const PREVIEW_SHOTS = 3;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: `${SITE_URL}/templates` },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ]);

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([{ name: "Templates", path: "/templates" }]);

const ITEM_LIST_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE_NAME} screenshot templates`,
  numberOfItems: COUNT,
  itemListElement: STARTER_TEMPLATES.map((template, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: template.name,
    url: `${SITE_URL}/templates#${template.id}`,
    image: `${SITE_URL}${starterTemplateShots(template)[0]}`,
  })),
});

export default function Templates() {
  return (
    <ContentLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ITEM_LIST_JSON_LD }} />
      <div className="max-w-6xl mx-auto">
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono">Templates</p>
          <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight text-balance">
            {COUNT} screenshot templates, ready for your app
          </h1>
          <p className="mt-5 text-lg text-ink/60 leading-relaxed text-balance">
            Every project in {SITE_NAME} can start from a finished design — headlines, backgrounds
            and device frames already laid out. Each preview below is a real export from the app with
            only the screenshots swapped in. Change any color, font or line of copy afterwards.
          </p>
        </section>

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STARTER_TEMPLATES.map((template, index) => (
            <li key={template.id} id={template.id} className="scroll-mt-24">
              <figure className="soft-panel rounded-3xl p-4 h-full flex flex-col">
                <div className="grid grid-cols-3 gap-2 overflow-hidden rounded-2xl">
                  {starterTemplateShots(template)
                    .slice(0, PREVIEW_SHOTS)
                    .map((src, shot) => (
                      <img
                        key={src}
                        src={src}
                        alt={
                          shot === 0
                            ? `${template.name} template exported from ${SITE_NAME}: App Store screenshots with headlines and device frames`
                            : ""
                        }
                        width={template.shotWidth}
                        height={template.shotHeight}
                        loading={index < 3 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-auto rounded-lg"
                      />
                    ))}
                </div>
                <figcaption className="mt-4 px-1">
                  <h2 className="font-display font-semibold text-ink">{template.name}</h2>
                  <p className="mt-1 text-xs text-ink/60 font-mono">
                    {template.columns} screenshots · {template.width}×{template.height} px
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <p className="text-ink/60">
            Pick a template in the <strong className="text-ink">New Project</strong> window (File ▸ New Project… on Mac).
            Templates are included on the free tier.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <ButtonLink href="/download" size="lg">
              <DownloadIcon /> Get {SITE_NAME}
            </ButtonLink>
            <ButtonLink href="/features" variant="secondary" size="lg">
              See every feature
            </ButtonLink>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
