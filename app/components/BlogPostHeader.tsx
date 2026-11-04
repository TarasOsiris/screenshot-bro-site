import { PostTitle } from "~/components/PostHeading";
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
      <PostTitle>{post.title}</PostTitle>
      <BlogTocDisclosure />
    </>
  );
}
