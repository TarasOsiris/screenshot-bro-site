import { getLocalizedBlogPosts } from "~/config/blog";
import type { LocaleCode } from "~/config/localization";

const KEEP_READING_COPIES: Record<LocaleCode, string> = {
  en: "Keep reading",
  es: "Seguir leyendo",
  zh: "继续阅读",
  hi: "पढ़ना जारी रखें",
  fr: "Continuer la lecture",
  ar: "متابعة القراءة",
  de: "Weiterlesen",
  ja: "読み続ける",
  pt: "Continuar lendo",
  it: "Continua a leggere",
  ko: "계속 읽기"
};

export function RelatedPosts({
  currentSlug,
  locale = "en",
  limit = 3,
}: {
  currentSlug: string;
  locale?: LocaleCode;
  limit?: number;
}) {
  const posts = getLocalizedBlogPosts(locale);
  const related = posts.filter((post) => post.slug !== currentSlug).slice(
    0,
    limit,
  );
  if (related.length === 0) return null;

  const keepReadingText = KEEP_READING_COPIES[locale] || KEEP_READING_COPIES.en;

  return (
    <aside
      aria-labelledby="related-posts-heading"
      className="mt-14 pt-10 border-t border-border-subtle"
    >
      <h2
        id="related-posts-heading"
        className="font-display font-bold text-xl text-white mb-6"
      >
        {keepReadingText}
      </h2>
      <ul className="space-y-4">
        {related.map((post) => {
          const href = locale === "en" ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`;
          return (
            <li key={post.slug}>
              <a
                href={href}
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
          );
        })}
      </ul>
    </aside>
  );
}
