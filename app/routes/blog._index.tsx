import type { Route } from "./+types/blog._index";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { BLOG_POSTS } from "~/config/blog";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";

const BLOG_INDEX_TITLE = `Blog — ${SITE_NAME}`;
const BLOG_INDEX_DESCRIPTION =
  "Guides, tips, and references for designing App Store and Google Play screenshots that convert, with localization and export workflows.";
const BLOG_INDEX_URL = `${SITE_URL}/blog`;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: BLOG_INDEX_TITLE },
    { name: "description", content: BLOG_INDEX_DESCRIPTION },
    { property: "og:title", content: BLOG_INDEX_TITLE },
    { property: "og:description", content: BLOG_INDEX_DESCRIPTION },
    { property: "og:url", content: BLOG_INDEX_URL },
    { name: "twitter:title", content: BLOG_INDEX_TITLE },
    { name: "twitter:description", content: BLOG_INDEX_DESCRIPTION },
  ]);

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: BLOG_INDEX_URL },
];

const BLOG_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${BLOG_INDEX_URL}#blog`,
      name: `${SITE_NAME} Blog`,
      url: BLOG_INDEX_URL,
      description: BLOG_INDEX_DESCRIPTION,
      inLanguage: "en",
      blogPost: BLOG_POSTS.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        keywords: post.keywords?.join(", "),
      })),
    },
    {
      "@type": "ItemList",
      itemListElement: BLOG_POSTS.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
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
          item: BLOG_INDEX_URL,
        },
      ],
    },
  ],
});

export default function BlogIndex() {
  return (
    <ContentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: BLOG_JSON_LD }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
            Blog
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Guides & Resources
          </h1>
          <p className="mt-4 text-base text-white/55 leading-relaxed">
            Practical guides for designing App Store screenshots that convert.
          </p>
        </div>

        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group rounded-2xl bg-surface-raised border border-border p-7 transition-all hover:border-white/20 hover:bg-surface-overlay"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 rounded bg-accent/10 text-accent-light text-[11px] font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-white/60 font-mono">
                  {post.date}
                </span>
                <span className="text-xs text-white/55">
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-display font-bold text-xl text-white group-hover:text-accent-light transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-white/50 leading-relaxed">
                {post.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
