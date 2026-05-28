import { SITE_URL } from "~/config/site";
import { BLOG_POSTS } from "~/config/blog";
import { DEFAULT_LOCALE, LOCALES, localizedPath } from "~/config/localization";
import { CHANGELOG } from "~/routes/changelog";
import { EFFECTIVE_DATE as TERMS_EFFECTIVE_DATE } from "~/routes/terms";
import { EFFECTIVE_DATE as PRIVACY_EFFECTIVE_DATE } from "~/routes/privacy";

type SitemapEntry = {
  loc: string;
  changefreq: string;
  priority: string;
  lastmod: string;
  alternates?: { hrefLang: string; href: string }[];
};

const MONTHS: Record<string, string> = {
  january: "01", february: "02", march: "03", april: "04",
  may: "05", june: "06", july: "07", august: "08",
  september: "09", october: "10", november: "11", december: "12",
};

// Parse "May 13, 2026" → "2026-05-13". Returns today's date if parsing fails.
function parseLongDate(input: string): string {
  const match = input.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (!match) return new Date().toISOString().split("T")[0];
  const month = MONTHS[match[1].toLowerCase()];
  if (!month) return new Date().toISOString().split("T")[0];
  return `${match[3]}-${month}-${match[2].padStart(2, "0")}`;
}

function localeAlternates(path: string) {
  return [
    ...LOCALES.map((locale) => ({
      hrefLang: locale.htmlLang,
      href: `${SITE_URL}${localizedPath(locale.code, path)}`,
    })),
    { hrefLang: "x-default", href: `${SITE_URL}${path}` },
  ];
}

function buildSitemap(): string {
  const latestBlogDate = BLOG_POSTS.reduce(
    (latest, post) => (post.date > latest ? post.date : latest),
    BLOG_POSTS[0]?.date ?? new Date().toISOString().split("T")[0],
  );
  const latestChangelogDate = CHANGELOG[0]
    ? parseLongDate(CHANGELOG[0].date)
    : new Date().toISOString().split("T")[0];
  const termsDate = parseLongDate(TERMS_EFFECTIVE_DATE);
  const privacyDate = parseLongDate(PRIVACY_EFFECTIVE_DATE);
  const homeLastmod = latestBlogDate > latestChangelogDate ? latestBlogDate : latestChangelogDate;

  const staticEntries: SitemapEntry[] = [
    {
      loc: "/",
      changefreq: "weekly",
      priority: "1.0",
      lastmod: homeLastmod,
      alternates: localeAlternates("/"),
    },
    ...LOCALES.filter((locale) => locale.code !== DEFAULT_LOCALE).map(
      (locale): SitemapEntry => ({
        loc: localizedPath(locale.code),
        changefreq: "weekly",
        priority: "0.9",
        lastmod: homeLastmod,
        alternates: localeAlternates("/"),
      }),
    ),
    {
      loc: "/blog",
      changefreq: "weekly",
      priority: "0.8",
      lastmod: latestBlogDate,
      alternates: localeAlternates("/blog"),
    },
    ...LOCALES.filter((locale) => locale.code !== DEFAULT_LOCALE).map(
      (locale): SitemapEntry => ({
        loc: localizedPath(locale.code, "/blog"),
        changefreq: "weekly",
        priority: "0.8",
        lastmod: latestBlogDate,
        alternates: localeAlternates("/blog"),
      }),
    ),
    { loc: "/changelog", changefreq: "monthly", priority: "0.6", lastmod: latestChangelogDate },
    { loc: "/privacy", changefreq: "yearly", priority: "0.3", lastmod: privacyDate },
    { loc: "/terms", changefreq: "yearly", priority: "0.3", lastmod: termsDate },
    { loc: "/docs/help", changefreq: "monthly", priority: "0.7", lastmod: latestChangelogDate },
    { loc: "/docs/project-schema", changefreq: "monthly", priority: "0.5", lastmod: latestChangelogDate },
    { loc: "/vs/fastlane-snapshot", changefreq: "monthly", priority: "0.7", lastmod: latestBlogDate },
  ];

  const blogEntries: SitemapEntry[] = [];
  BLOG_POSTS.forEach((post) => {
    const path = `/blog/${post.slug}`;
    const alternates = post.localized === false ? undefined : localeAlternates(path);
    blogEntries.push({
      loc: path,
      changefreq: "monthly",
      priority: "0.7",
      lastmod: post.date,
      alternates,
    });
    if (post.localized !== false) {
      LOCALES.filter((locale) => locale.code !== DEFAULT_LOCALE).forEach((locale) => {
        blogEntries.push({
          loc: localizedPath(locale.code, path),
          changefreq: "monthly",
          priority: "0.7",
          lastmod: post.date,
          alternates,
        });
      });
    }
  });

  const urls = [...staticEntries, ...blogEntries]
    .map((entry) => {
      const altXml = entry.alternates
        ?.map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt.hrefLang}" href="${alt.href}"/>`,
        )
        .join("\n");
      return `  <url>
    <loc>${SITE_URL}${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${altXml ? `\n${altXml}` : ""}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
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
