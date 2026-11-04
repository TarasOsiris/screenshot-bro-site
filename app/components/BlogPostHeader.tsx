import { BlogTocDisclosure } from "~/components/BlogPostLayout";
import { BLOG_POSTS } from "~/config/blog";
import { buildBlogPostingJsonLd } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { formatBlogDate } from "~/lib/format-blog-date";

export function BlogPostHeader({ slug, locale = "en" }: { slug: string; locale?: LocaleCode }) {
  const post = BLOG_POSTS.find((entry) => entry.slug === slug);
  if (!post) return null;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildBlogPostingJsonLd(slug, locale) }}
      />
      <p className="meta mb-4!">
        {formatBlogDate(post.date, locale)} &middot; {post.readTime}
      </p>
      {/* .prose-policy sets the size unlayered, hence `!`; line-height is only
          inherited from its 1.75, so a plain utility tightens it. */}
      <h1 className="text-[1.875rem]! leading-[1.12] text-balance sm:text-[2.25rem]! mb-6!">{post.title}</h1>
      <BlogTocDisclosure />
    </>
  );
}
