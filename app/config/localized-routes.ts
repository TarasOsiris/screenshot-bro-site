import { localizedPath, stripLocale, type LocaleCode } from "~/config/localization";

// Locale-neutral paths whose *body copy* is translated.
//
// routes.ts mounts a `:locale` variant for far more paths than this — terms,
// privacy, changelog, /vs/*, /docs/* and the long how-to guide all render under
// a locale prefix — but those pages ship an English body with only a translated
// <title> and <meta description>. They are duplicates of the English page, not
// translations of it, so they canonicalize back to the English URL.
//
// Three things have to agree about that, or a crawler reports the mismatch:
//   - root.tsx emits a self-referencing canonical + hreflang cluster only here;
//   - sitemap.xml lists per-locale rows and xhtml:link alternates only here;
//   - internal links get a locale prefix only here (localeHref below).
// Adding a translation means translating the body, then adding the path here.
const TRANSLATED_PATHS = new Set(["/", "/blog", "/support", "/tutorials"]);

// Blog posts are translated as a matter of course — config/blog-translations.ts
// carries a row for every slug — so /blog/<slug> counts as translated unless the
// slug is listed here — the single source of truth, which sitemap.xml reads back
// through isBlogPostLocalized() so its hreflang sets match the rendered pages.
const UNTRANSLATED_BLOG_SLUGS = new Set<string>([]);

export function isBlogPostLocalized(slug: string): boolean {
  return !UNTRANSLATED_BLOG_SLUGS.has(slug);
}

export function hasTranslations(path: string): boolean {
  const clean = stripLocale(path.split(/[#?]/)[0]);
  if (TRANSLATED_PATHS.has(clean)) return true;
  const segments = clean.split("/").filter(Boolean);
  if (segments.length === 2 && segments[0] === "blog") {
    return isBlogPostLocalized(segments[1]);
  }
  return false;
}

// The one way to build an internal href or a self-referencing page URL.
// `path` is locale-neutral (a leading locale segment is stripped anyway), and
// the locale prefix is added only when the target actually has a translation —
// so no link ever points at a page that canonicalizes somewhere else.
export function localeHref(locale: LocaleCode, path = "/"): string {
  const clean = stripLocale(path.startsWith("/") ? path : `/${path}`);
  return hasTranslations(clean) ? localizedPath(locale, clean) : clean;
}
