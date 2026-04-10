import type { Route } from "./+types/blog._index";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { BLOG_POSTS } from "~/config/blog";
import { ContentLayout } from "~/components/ContentLayout";

export const meta: Route.MetaFunction = () => [
  { title: `Blog — ${SITE_NAME}` },
  {
    name: "description",
    content: `Guides, tips, and references for designing App Store screenshots. Learn how to create screenshots that convert, manage localization, and ship faster.`,
  },
];

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: `${SITE_URL}/blog` },
];

export default function BlogIndex() {
  return (
    <ContentLayout
      footerLinks={[
        { label: "\u2190 Back to Screenshot Bro", href: "/" },
        { label: "Changelog", href: "/changelog" },
      ]}
    >
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
                <span className="text-xs text-white/35 font-mono">
                  {post.date}
                </span>
                <span className="text-xs text-white/30">
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
