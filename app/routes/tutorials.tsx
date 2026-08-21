import type { Route } from "./+types/tutorials";
import { ContentLayout } from "~/components/ContentLayout";
import { VideoCard } from "~/components/VideoCard";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { SITE_NAME, SITE_URL } from "~/config/site";
import {
  VIDEO_TUTORIALS,
  youtubeEmbedUrl,
  youtubeThumbnail,
  youtubeWatchUrl,
} from "~/config/tutorials";

const TITLE = `Tutorials — ${SITE_NAME}`;
const DESCRIPTION = `Learn ${SITE_NAME} with a step-by-step written guide and short videos — create projects, frame devices, localize, and export store screenshots.`;
const PAGE_URL = `${SITE_URL}/tutorials`;

const GUIDE_PATH = "/tutorials/how-to-use-screenshot-bro";

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([
  { name: "Tutorials", path: "/tutorials" },
]);

const VIDEO_LIST_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: VIDEO_TUTORIALS.map((video, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      thumbnailUrl: youtubeThumbnail(video.youtubeId),
      uploadDate: video.uploadDate,
      duration: video.duration,
      contentUrl: youtubeWatchUrl(video.youtubeId),
      embedUrl: youtubeEmbedUrl(video.youtubeId),
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    },
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

function GuideCard() {
  return (
    <a
      href={GUIDE_PATH}
      className="group block rounded-2xl border border-border bg-surface-raised p-8 transition-all hover:border-white/20"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono">
        Written guide
      </p>
      <h2 className="mt-3 font-display font-bold text-2xl text-white leading-snug">
        How to use {SITE_NAME}
      </h2>
      <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-2xl">
        The whole workflow in ten steps, with a screenshot of the app at each
        one — from your first project through device frames, headlines,
        backgrounds and languages, to a finished set uploaded to App Store
        Connect or Google Play. About 20 minutes.
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/85 group-hover:text-white transition-colors">
        Read the guide
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </a>
  );
}

export default function Tutorials() {
  return (
    <ContentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: VIDEO_LIST_JSON_LD }}
      />
      <div className="max-w-5xl mx-auto">
        <header className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
            Tutorials
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Tutorials
          </h1>
          <p className="mt-4 text-base text-white/55 leading-relaxed">
            A written walkthrough and short videos showing how to design and
            ship App Store and Google Play screenshots with {SITE_NAME}.
          </p>
        </header>

        <GuideCard />

        <h2 className="mt-16 mb-8 font-display font-bold text-2xl text-white">
          Videos
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {VIDEO_TUTORIALS.map((video) => (
            <VideoCard key={video.youtubeId} video={video} headingLevel="h3" />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
