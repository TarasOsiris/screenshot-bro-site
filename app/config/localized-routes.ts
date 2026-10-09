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

// Blog posts are not on that list. config/blog-translations.ts carries a
// translated title and description for every slug — which the translated
// /{locale}/blog index uses — but every post body is English. routes.ts
// therefore mounts no per-post `:locale` route: /{locale}/blog/<slug> 301s to
// /blog/<slug> (routes/blog.locale-redirect.tsx), sitemap.xml lists the English
// URL only, and localeHref() below never prefixes a post link. Translate a body
// first, then give that post its own `:locale` route and add it here.
export function hasTranslations(path: string): boolean {
  return TRANSLATED_PATHS.has(stripLocale(path.split(/[#?]/)[0]));
}

// The one way to build an internal href or a self-referencing page URL.
// `path` is locale-neutral (a leading locale segment is stripped anyway), and
// the locale prefix is added only when the target actually has a translation —
// so no link ever points at a page that canonicalizes somewhere else.
export function localeHref(locale: LocaleCode, path = "/"): string {
  const clean = stripLocale(path.startsWith("/") ? path : `/${path}`);
  return hasTranslations(clean) ? localizedPath(locale, clean) : clean;
}
