import type { MetaDescriptor } from "react-router";

export type MetaMatchLike = {
  meta?: readonly MetaDescriptor[];
} | undefined;

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
