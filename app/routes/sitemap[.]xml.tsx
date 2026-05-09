import { SITE_URL } from "~/config/site";
import { BLOG_POSTS } from "~/config/blog";
import { DEFAULT_LOCALE, LOCALES, localizedPath } from "~/config/localization";

type SitemapEntry = {
  loc: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
};

const STATIC_PAGES: SitemapEntry[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  ...LOCALES.filter((locale) => locale.code !== DEFAULT_LOCALE).map((locale) => ({
    loc: localizedPath(locale.code),
    changefreq: "weekly",
    priority: "0.9",
  })),
  { loc: "/blog", changefreq: "weekly", priority: "0.8" },
  { loc: "/changelog", changefreq: "monthly", priority: "0.6" },
  { loc: "/privacy", changefreq: "monthly", priority: "0.3" },
  { loc: "/terms", changefreq: "monthly", priority: "0.3" },
  { loc: "/docs/help", changefreq: "monthly", priority: "0.7" },
  { loc: "/docs/project-schema", changefreq: "monthly", priority: "0.5" },
];

function buildSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  const blogEntries: SitemapEntry[] = BLOG_POSTS.map((post) => ({
    loc: `/blog/${post.slug}`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod: post.date,
  }));

  const allEntries = [...STATIC_PAGES, ...blogEntries];

  const urls = allEntries
    .map(
      (entry) => `  <url>
    <loc>${SITE_URL}${entry.loc}</loc>
    <lastmod>${entry.lastmod ?? today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function loader() {
  const sitemap = buildSitemap();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
