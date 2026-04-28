import { BLOG_POSTS } from "~/config/blog";
import { SectionIntro } from "~/components/home/SectionIntro";
import type { HomeCopy } from "~/config/localization";

const HIGHLIGHT = BLOG_POSTS.slice(0, 3);

export function BlogPreviewSection({ copy }: { copy: HomeCopy }) {
  if (HIGHLIGHT.length === 0) return null;
  return (
    <section
      id="from-the-blog"
      className="py-24 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={copy.sections.blog.eyebrow}
          title={copy.sections.blog.title}
          description={copy.sections.blog.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {HIGHLIGHT.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl bg-surface-raised border border-border p-6 transition-all hover:border-white/20 hover:bg-surface-overlay flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 rounded bg-accent/10 text-accent-light text-[11px] font-medium">
                  {post.category}
                </span>
                <span className="text-[11px] text-white/60 font-mono">
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-display font-semibold text-base text-white group-hover:text-accent-light transition-colors mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed flex-1">
                {post.description}
              </p>
              <span className="mt-5 text-xs font-mono text-accent-light group-hover:text-white transition-colors">
                {copy.ui.read} →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/[0.76] transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            {copy.ui.browseGuides}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
