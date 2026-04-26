import { BLOG_POSTS } from "~/config/blog";

export function RelatedPosts({
  currentSlug,
  limit = 3,
}: {
  currentSlug: string;
  limit?: number;
}) {
  const related = BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(
    0,
    limit,
  );
  if (related.length === 0) return null;
  return (
    <aside
      aria-labelledby="related-posts-heading"
      className="mt-14 pt-10 border-t border-border-subtle"
    >
      <h2
        id="related-posts-heading"
        className="font-display font-bold text-xl text-white mb-6"
      >
        Keep reading
      </h2>
      <ul className="space-y-4">
        {related.map((post) => (
          <li key={post.slug}>
            <a
              href={`/blog/${post.slug}`}
              className="block group rounded-2xl bg-surface-raised border border-border p-5 transition-all hover:border-white/20 hover:bg-surface-overlay"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 rounded bg-accent/10 text-accent-light text-[11px] font-medium">
                  {post.category}
                </span>
                <span className="text-[11px] text-white/60 font-mono">
                  {post.readTime}
                </span>
              </div>
              <p className="font-display font-semibold text-base text-white group-hover:text-accent-light transition-colors mb-1">
                {post.title}
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                {post.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
