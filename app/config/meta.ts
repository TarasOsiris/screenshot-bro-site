import type { MetaDescriptor } from "react-router";
import { SITE_NAME, SITE_URL } from "~/config/site";

export type MetaMatchLike = {
  meta?: readonly MetaDescriptor[];
} | undefined;

export function buildBreadcrumbJsonLd(
  trail: { name: string; path: string }[],
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME,
        item: SITE_URL,
      },
      ...trail.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: entry.name,
        item: `${SITE_URL}${entry.path}`,
      })),
    ],
  });
}

function metaKey(m: MetaDescriptor): string | null {
  if ("title" in m) return "title";
  if ("name" in m && typeof m.name === "string") return `name:${m.name}`;
  if ("property" in m && typeof m.property === "string") {
    return `property:${m.property}`;
  }
  return null;
}

export function mergeMeta(
  matches: readonly MetaMatchLike[],
  overrides: MetaDescriptor[],
): MetaDescriptor[] {
  const overrideKeys = new Set(
    overrides.map(metaKey).filter((k): k is string => k !== null),
  );
  const parentMeta = matches
    .flatMap((match) => match?.meta ?? [])
    .filter((m) => {
      const key = metaKey(m);
      return key === null || !overrideKeys.has(key);
    });
  return [...parentMeta, ...overrides];
}
