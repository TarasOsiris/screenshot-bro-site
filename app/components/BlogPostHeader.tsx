import { getLocalizedBlogPosts } from "~/config/blog";
import { buildBlogPostingJsonLd } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";

function formatBlogDate(iso: string, locale: LocaleCode): string {
  const [year, month, day] = iso.split("-").map(Number);
  const localesMap: Record<LocaleCode, string> = {
    en: "en-US",
    es: "es-ES",
    zh: "zh-CN",
    hi: "hi-IN",
    fr: "fr-FR",
    ar: "ar-EG"
  };
  return new Date(year, month - 1, day).toLocaleDateString(localesMap[locale] || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostHeader({ slug, locale = "en" }: { slug: string; locale?: LocaleCode }) {
  const posts = getLocalizedBlogPosts(locale);
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) return null;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildBlogPostingJsonLd(slug, locale) }}
      />
      <p className="meta">
        {formatBlogDate(post.date, locale)} &middot; {post.readTime}
      </p>
      <h1>{post.title}</h1>
    </>
  );
}
