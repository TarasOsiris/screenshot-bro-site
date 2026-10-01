import { readFile } from "node:fs/promises";
import path from "node:path";

export type LatestRelease = {
  version: string;
  build: string;
  sizeBytes: number;
  publishedAt: string; // ISO date
};

// The appcast is the single source of truth for the direct-download build: `ship-direct`
// rewrites it on every release, so the download page can never show a stale version.
const APPCAST_PATHS = ["public/appcast.xml", "build/client/appcast.xml"];

export async function loadLatestRelease(): Promise<LatestRelease | null> {
  for (const relative of APPCAST_PATHS) {
    try {
      const xml = await readFile(path.join(process.cwd(), relative), "utf8");
      return parseLatestRelease(xml);
    } catch {
      continue;
    }
  }
  return null;
}

export function parseLatestRelease(xml: string): LatestRelease | null {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => {
    const item = match[1];
    const tag = (name: string) => item.match(new RegExp(`<${name}>([^<]*)</${name}>`))?.[1]?.trim();
    return {
      version: tag("sparkle:shortVersionString"),
      build: tag("sparkle:version"),
      pubDate: tag("pubDate"),
      length: item.match(/<enclosure[^>]*\slength="(\d+)"/)?.[1],
    };
  });
  const newest = items
    .filter((item) => item.version && item.build && item.length && item.pubDate)
    .sort((a, b) => Number(b.build) - Number(a.build))[0];
  if (!newest) return null;
  const published = new Date(newest.pubDate!);
  if (Number.isNaN(published.getTime())) return null;
  return {
    version: newest.version!,
    build: newest.build!,
    sizeBytes: Number(newest.length),
    publishedAt: published.toISOString(),
  };
}
