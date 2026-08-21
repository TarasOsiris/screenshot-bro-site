import type { Route } from "./+types/tutorials.how-to-use-screenshot-bro";
import { ContentLayout } from "~/components/ContentLayout";
import { DocFigure, renderBlocks } from "~/components/DocBlocks";
import { VideoCard } from "~/components/VideoCard";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { VIDEO_TUTORIALS } from "~/config/tutorials";
import {
  GUIDE_INTRO,
  GUIDE_NEXT_STEPS,
  GUIDE_STEPS,
  GUIDE_TOTAL_TIME,
  GUIDE_UPDATED,
} from "~/config/tutorial-guide";
import { formatBlogDate } from "~/lib/format-blog-date";

const PATH = "/tutorials/how-to-use-screenshot-bro";
const PAGE_URL = `${SITE_URL}${PATH}`;
const TITLE = `How to Use ${SITE_NAME} — ${SITE_NAME}`;
const DESCRIPTION =
  "Step-by-step guide to designing, localizing, and exporting App Store and Google Play screenshots with Screenshot Bro.";

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([
  { name: "Tutorials", path: "/tutorials" },
  { name: `How to use ${SITE_NAME}`, path: PATH },
]);

const HOW_TO_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to use ${SITE_NAME}`,
  description: DESCRIPTION,
  totalTime: GUIDE_TOTAL_TIME,
  url: PAGE_URL,
  tool: [{ "@type": "HowToTool", name: SITE_NAME }],
  supply: [
    { "@type": "HowToSupply", name: "Raw screenshots of your app" },
  ],
  step: GUIDE_STEPS.map((guideStep, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: guideStep.title,
    text: guideStep.summary,
    url: `${PAGE_URL}#${guideStep.id}`,
    ...(guideStep.images?.[0]?.src
      ? { image: `${SITE_URL}${guideStep.images[0].src}` }
      : {}),
  })),
});

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: PAGE_URL },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ]);

const INTRO_VIDEO = VIDEO_TUTORIALS[0];

function StepNumber({ index }: { index: number }) {
  return (
    <span className="font-mono text-xs text-accent-light">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

export default function HowToUseGuide() {
  return (
    <ContentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: HOW_TO_JSON_LD }}
      />
      <div className="max-w-6xl mx-auto">
        <header className="prose-policy mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
            Tutorial
          </p>
          <h1>How to use {SITE_NAME}</h1>
          <p className="meta">
            Ten steps, about 20 minutes · Updated{" "}
            {formatBlogDate(GUIDE_UPDATED, "en")}
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono mb-4">
              On this page
            </p>
            <nav className="flex flex-col gap-2">
              <a
                href="#before"
                className="flex items-baseline gap-2.5 text-sm text-white/60 hover:text-white/95 transition-colors"
              >
                <span className="font-mono text-xs text-white/40">·</span>
                <span>Before you start</span>
              </a>
              {GUIDE_STEPS.map((guideStep, index) => (
                <a
                  key={guideStep.id}
                  href={`#${guideStep.id}`}
                  className="flex items-baseline gap-2.5 text-sm text-white/60 hover:text-white/95 transition-colors"
                >
                  <StepNumber index={index} />
                  <span>{guideStep.navTitle}</span>
                </a>
              ))}
              <a
                href="#next"
                className="flex items-baseline gap-2.5 text-sm text-white/60 hover:text-white/95 transition-colors"
              >
                <span className="font-mono text-xs text-white/40">→</span>
                <span>Where to go next</span>
              </a>
            </nav>
          </aside>

          <article className="prose-policy max-w-3xl">
            <section>
              <h2 id="before">Before you start</h2>
              {renderBlocks(GUIDE_INTRO, "en")}
              {INTRO_VIDEO && (
                <div className="not-prose my-8">
                  <p className="mb-4 text-sm text-white/55">
                    Prefer to watch first? This video covers the first two
                    steps.
                  </p>
                  <VideoCard video={INTRO_VIDEO} headingLevel="h3" />
                </div>
              )}
            </section>

            {GUIDE_STEPS.map((guideStep, index) => (
              <section key={guideStep.id}>
                <h2 id={guideStep.id}>
                  <StepNumber index={index} />{" "}
                  <span className="ml-1">{guideStep.title}</span>
                </h2>
                <p className="-mt-2 mb-4 text-white/55 italic">
                  {guideStep.summary}
                </p>
                {guideStep.images?.map((image) => (
                  <DocFigure
                    key={image.src}
                    image={image}
                    src={image.src ?? ""}
                    locale="en"
                  />
                ))}
                {renderBlocks(guideStep.blocks, "en")}
                {guideStep.learnMore && (
                  <p className="text-sm text-white/55">
                    Full reference:{" "}
                    {guideStep.learnMore.map((link, i) => (
                      <span key={link.href}>
                        {i > 0 && " · "}
                        <a href={link.href}>{link.label}</a>
                      </span>
                    ))}
                  </p>
                )}
              </section>
            ))}

            <section>
              <h2 id="next">Where to go next</h2>
              <ul>
                {GUIDE_NEXT_STEPS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </div>
    </ContentLayout>
  );
}
