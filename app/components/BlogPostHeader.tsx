import { BLOG_POSTS } from "~/config/blog";
import { buildBlogPostingJsonLd } from "~/config/blog-seo";

function formatBlogDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostHeader({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find((entry) => entry.slug === slug);
  if (!post) return null;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildBlogPostingJsonLd(slug) }}
      />
      <p className="meta">
        {formatBlogDate(post.date)} &middot; {post.readTime}
      </p>
      <h1>{post.title}</h1>
    </>
  );
}
