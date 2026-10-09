import type { BlogPost } from "~/config/blog";
import { getBlogThumb } from "~/config/blog-images";
import { buttonClass } from "~/components/ui/Button";
import { SectionIntro } from "~/components/home/SectionIntro";
import { localizedPath, type HomeCopy } from "~/config/localization";

export function BlogPreviewSection({
  copy,
  posts,
}: {
  copy: HomeCopy;
  // The newest posts in the page's locale, from the home loader.
  posts: BlogPost[];
}) {
  const highlight = posts.slice(0, 3);
  if (highlight.length === 0) return null;
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
          {highlight.map((post) => {
            const thumb = getBlogThumb(post.slug);
            return (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl bg-surface-raised border border-border overflow-hidden transition-all hover:border-ink/20 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-surface-overlay">
                  {thumb ? (
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      width={800}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : null}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 rounded bg-accent/10 text-accent-light text-[11px] font-medium">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-ink/60 font-mono">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-base text-ink group-hover:text-accent-light transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={localizedPath(copy.locale.code, "/blog")}
            className={buttonClass("secondary", "sm", "font-medium")}
          >
            {copy.ui.browseGuides}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
