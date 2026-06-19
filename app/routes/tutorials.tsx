import { useState } from "react";

import type { Route } from "./+types/tutorials";
import { ContentLayout } from "~/components/ContentLayout";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { SITE_NAME, SITE_URL } from "~/config/site";
import {
  VIDEO_TUTORIALS,
  youtubeEmbedUrl,
  youtubeThumbnail,
  youtubeWatchUrl,
  type VideoTutorial,
} from "~/config/tutorials";

const TITLE = `Video Tutorials — ${SITE_NAME}`;
const DESCRIPTION = `Watch short video tutorials to learn ${SITE_NAME} — create projects, frame devices, localize, and export App Store and Google Play screenshots.`;
const PAGE_URL = `${SITE_URL}/tutorials`;

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

function VideoCard({ video }: { video: VideoTutorial }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group rounded-2xl border border-border bg-surface-raised overflow-hidden transition-all hover:border-white/20">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            src={`${youtubeEmbedUrl(video.youtubeId)}?autoplay=1&rel=0`}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${video.title}`}
            className="absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src={youtubeThumbnail(video.youtubeId)}
              alt={video.title}
              loading="lazy"
              width="480"
              height="360"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-black/55 border border-white/20 backdrop-blur-sm transition-all group-hover:bg-accent group-hover:border-accent group-hover:scale-105">
                <PlayIcon />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-6">
        <h2 className="font-display font-bold text-lg text-white leading-snug">
          {video.title}
        </h2>
        <p className="mt-2 text-sm text-white/55 leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
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
            Video Tutorials
          </h1>
          <p className="mt-4 text-base text-white/55 leading-relaxed">
            Short, focused walkthroughs that show you how to design and ship
            App Store and Google Play screenshots with {SITE_NAME}.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2">
          {VIDEO_TUTORIALS.map((video) => (
            <VideoCard key={video.youtubeId} video={video} />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white translate-x-0.5"
    >
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}
