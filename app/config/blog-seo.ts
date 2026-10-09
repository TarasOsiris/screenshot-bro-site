import type { MetaDescriptor } from "react-router";
import { BLOG_POSTS, type BlogPost } from "~/config/blog";
import { mergeMeta, type MetaMatchLike } from "~/config/meta";
import { OG_IMAGE_NAMES } from "~/config/og-images";
import {
  NINEVA_STUDIOS_NAME,
  NINEVA_STUDIOS_URL,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from "~/config/site";
import { buildOgLocaleMeta, localizedPath, type LocaleCode } from "~/config/localization";

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// The post's own 1200×630 card from scripts/generate-og-images.mjs, falling
// back to the site-wide image for a post rendered before `npm run og`.
export function ogImageFor(name: string): string {
  return OG_IMAGE_NAMES.has(name) ? `${SITE_URL}/og/${name}.jpg` : DEFAULT_OG_IMAGE;
}
export const AUTHOR_NAME = "Taras Leskiv";
export const AUTHOR_URL = "https://x.com/soycastic";

// Articles name the studio as publisher — the same node as root.tsx's
// Organization — with the raster logo that article rich results expect.
// The author stays the person who wrote the piece.
export const PUBLISHER_ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: NINEVA_STUDIOS_NAME,
  url: NINEVA_STUDIOS_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/web-app-manifest-512x512.png`,
    width: 512,
    height: 512,
  },
};

function getPost(slug: string, locale: LocaleCode = "en"): BlogPost {
  // Post bodies are English-only, so their metadata is too.
  const post = BLOG_POSTS.find((entry) => entry.slug === slug);
  if (!post) {
    throw new Error(`Unknown blog post slug: ${slug} for locale: ${locale}`);
  }
  return post;
}

export function buildBlogPostMeta(
  slug: string,
  matches: readonly MetaMatchLike[],
  locale: LocaleCode = "en",
): MetaDescriptor[] {
  const post = getPost(slug, locale);
  const fullTitle = `${post.title} — ${SITE_NAME}`;
  const title = fullTitle.length <= 60 ? fullTitle : post.title;
  const url = `${SITE_URL}${localizedPath(locale, `/blog/${post.slug}`)}`;
  const image = ogImageFor(`blog-${post.slug}`);
  const meta: MetaDescriptor[] = [
    { title },
    { name: "description", content: post.description },
    ...buildOgLocaleMeta(locale),
    { property: "og:type", content: "article" },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: post.title },
    { property: "article:published_time", content: post.date },
    { property: "article:modified_time", content: post.dateModified ?? post.date },
    { property: "article:author", content: AUTHOR_NAME },
    { property: "article:section", content: post.category },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:creator", content: TWITTER_HANDLE },
    { name: "twitter:title", content: post.title },
    { name: "twitter:description", content: post.description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: post.title },
  ];

  if (post.keywords?.length) {
    meta.push(
      ...post.keywords.map((keyword) => ({
        property: "article:tag",
        content: keyword,
      })),
    );
  }

  return mergeMeta(matches, meta);
}

export type BlogFaqItem = {
  question: string;
  answer: string;
};

// Answer engines and rich results read FAQPage; the rendered <h3>/<p> pairs in
// BlogArticleShell are invisible to them without it.
export function buildFaqJsonLd(faqs: readonly BlogFaqItem[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
}

export function buildBlogPostLinks(slug: string) {
  // Canonical links are handled dynamically by the root Layout (root.tsx)
  // to support different locales. We return an empty array here to avoid duplicates.
  return [];
}

export function buildBlogPostingJsonLd(slug: string, locale: LocaleCode = "en"): string {
  const post = getPost(slug, locale);
  const url = `${SITE_URL}${localizedPath(locale, `/blog/${post.slug}`)}`;
  const blogUrl = `${SITE_URL}${localizedPath(locale, "/blog")}`;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        datePublished: post.date,
        dateModified: post.dateModified ?? post.date,
        articleSection: post.category,
        keywords: post.keywords?.join(", "),
        inLanguage: locale,
        image: {
          "@type": "ImageObject",
          url: ogImageFor(`blog-${post.slug}`),
          width: 1200,
          height: 630,
        },
        author: {
          "@type": "Person",
          name: AUTHOR_NAME,
          url: AUTHOR_URL,
        },
        publisher: PUBLISHER_ORGANIZATION,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        isPartOf: {
          "@type": "Blog",
          "@id": `${blogUrl}#blog`,
          name: `${SITE_NAME} Blog`,
          url: blogUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: blogUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  });
}
