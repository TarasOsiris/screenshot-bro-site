import type { MetaDescriptor } from "react-router";
import { BLOG_POSTS, type BlogPost } from "~/config/blog";
import { mergeMeta, type MetaMatchLike } from "~/config/meta";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "~/config/site";

const BLOG_OG_IMAGE = `${SITE_URL}/og-image.png`;
const AUTHOR_NAME = "Taras Leskiv";
const AUTHOR_URL = "https://x.com/soycastic";

function getPost(slug: string): BlogPost {
  const post = BLOG_POSTS.find((entry) => entry.slug === slug);
  if (!post) {
    throw new Error(`Unknown blog post slug: ${slug}`);
  }
  return post;
}

export function buildBlogPostMeta(
  slug: string,
  matches: readonly MetaMatchLike[],
): MetaDescriptor[] {
  const post = getPost(slug);
  const fullTitle = `${post.title} — ${SITE_NAME}`;
  const title = fullTitle.length <= 60 ? fullTitle : post.title;
  const url = `${SITE_URL}/blog/${post.slug}`;
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
  const post = getPost(slug);
  return [
    { rel: "canonical", href: `${SITE_URL}/blog/${post.slug}` },
  ];
}

export function buildBlogPostingJsonLd(slug: string): string {
  const post = getPost(slug);
  const url = `${SITE_URL}/blog/${post.slug}`;
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
        keywords: post.keywords?.join(", "),
        inLanguage: "en",
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
          "@id": `${SITE_URL}/blog#blog`,
          name: `${SITE_NAME} Blog`,
          url: `${SITE_URL}/blog`,
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
            item: `${SITE_URL}/blog`,
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
