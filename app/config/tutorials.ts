export type VideoTutorial = {
  /** YouTube video id (the `v=` parameter). */
  youtubeId: string;
  title: string;
  description: string;
  /** ISO 8601 date the video was published, e.g. "2026-06-15". */
  uploadDate: string;
  /** ISO 8601 duration, e.g. "PT1M34S". */
  duration: string;
};

// Newest first — this list grows as more tutorials are published.
export const VIDEO_TUTORIALS: VideoTutorial[] = [
  {
    youtubeId: "PcntnllcD5k",
    title: "How to Create Your First Project in Screenshot Bro",
    description:
      "Get started with Screenshot Bro: name your project, choose a layout, set screen sizes for iPhone, iPad, and Android, and swap templates at any time.",
    uploadDate: "2026-06-15",
    duration: "PT1M34S",
  },
];

export function youtubeThumbnail(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function youtubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}
