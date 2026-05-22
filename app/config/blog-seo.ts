import type { MetaDescriptor } from "react-router";
import { getLocalizedBlogPosts, type BlogPost } from "~/config/blog";
import { mergeMeta, type MetaMatchLike } from "~/config/meta";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "~/config/site";
import { localizedPath, type LocaleCode } from "~/config/localization";

const BLOG_OG_IMAGE = `${SITE_URL}/og-image.png`;
const AUTHOR_NAME = "Taras Leskiv";
const AUTHOR_URL = "https://x.com/soycastic";

function getPost(slug: string, locale: LocaleCode = "en"): BlogPost {
  const posts = getLocalizedBlogPosts(locale);
  const post = posts.find((entry) => entry.slug === slug);
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
  const title = `${post.title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${localizedPath(locale, `/blog/${post.slug}`)}`;
  const meta: MetaDescriptor[] = [
    { title },
    { name: "description", content: post.description },
    { property: "og:type", content: "article" },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.description },
    { property: "og:url", content: url },
    { property: "og:image", content: BLOG_OG_IMAGE },
    { property: "article:published_time", content: post.date },
    { property: "article:modified_time", content: post.date },
    { property: "article:author", content: AUTHOR_NAME },
    { property: "article:section", content: post.category },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:creator", content: TWITTER_HANDLE },
    { name: "twitter:title", content: post.title },
    { name: "twitter:description", content: post.description },
    { name: "twitter:image", content: BLOG_OG_IMAGE },
  ];

  if (post.keywords?.length) {
    meta.push({ name: "keywords", content: post.keywords.join(", ") });
    meta.push(
      ...post.keywords.map((keyword) => ({
        property: "article:tag",
        content: keyword,
      })),
    );
  }

  return mergeMeta(matches, meta);
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
        dateModified: post.date,
        articleSection: post.category,
        keywords: post.keywords,
        inLanguage: locale,
        image: BLOG_OG_IMAGE,
        author: {
          "@type": "Person",
          name: AUTHOR_NAME,
          url: AUTHOR_URL,
        },
        publisher: {
          "@type": "Person",
          name: AUTHOR_NAME,
          url: AUTHOR_URL,
        },
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
