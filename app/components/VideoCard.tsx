import { useState } from "react";

import {
  youtubeEmbedUrl,
  youtubeThumbnail,
  type VideoTutorial,
} from "~/config/tutorials";

export function VideoCard({
  video,
  headingLevel = "h2",
}: {
  video: VideoTutorial;
  /** Pick the level that keeps the surrounding page's outline intact. */
  headingLevel?: "h2" | "h3";
}) {
  const [playing, setPlaying] = useState(false);
  const Heading = headingLevel;

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
        <Heading className="font-display font-bold text-lg text-white leading-snug">
          {video.title}
        </Heading>
        <p className="mt-2 text-sm text-white/55 leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
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
