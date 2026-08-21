import type { MetaDescriptor } from "react-router";
import { AUTHOR_NAME, AUTHOR_URL } from "~/config/blog-seo";
import { comparisonPath, getComparisonPage } from "~/config/comparisons";
import { mergeMeta, type MetaMatchLike } from "~/config/meta";
import { SITE_URL, TWITTER_HANDLE, SITE_NAME } from "~/config/site";
import { localizedPath, type LocaleCode } from "~/config/localization";

const OG_IMAGE = `${SITE_URL}/og-image.png`;

export function buildComparisonMeta(
  slug: string,
  matches: readonly MetaMatchLike[],
  locale: LocaleCode = "en",
): MetaDescriptor[] {
  const page = getComparisonPage(slug);
  const url = `${SITE_URL}${localizedPath(locale, comparisonPath(slug))}`;
  const title = page.title;
  const description = page.description;

  return mergeMeta(matches, [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: OG_IMAGE },
    { property: "article:published_time", content: page.datePublished },
    { property: "article:modified_time", content: page.lastVerified },
    { property: "article:author", content: AUTHOR_NAME },
    { property: "article:section", content: "Comparison" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:creator", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE },
  ]);
}

// Article rather than BlogPosting: /vs pages are not part of the blog, and
// TechArticle would signal a how-to. `about` ties the page to the
// SoftwareApplication node root.tsx already emits plus the competitor.
export function buildComparisonArticleJsonLd(slug: string, locale: LocaleCode = "en"): string {
  const page = getComparisonPage(slug);
  const url = `${SITE_URL}${localizedPath(locale, comparisonPath(slug))}`;
  const person = { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_URL };
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: page.heading,
    description: page.description,
    url,
    datePublished: page.datePublished,
    dateModified: page.lastVerified,
    articleSection: "Comparison",
    inLanguage: locale,
    image: OG_IMAGE,
    author: person,
    publisher: person,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: [
      { "@id": `${SITE_URL}/#software` },
      {
        "@type": "SoftwareApplication",
        name: page.competitor,
        url: page.competitorUrl,
      },
    ],
  });
}
