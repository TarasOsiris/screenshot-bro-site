import { getLocalizedBlogPosts } from "~/config/blog";
import { buildBlogPostingJsonLd } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { formatBlogDate } from "~/lib/format-blog-date";

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
