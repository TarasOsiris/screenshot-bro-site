import { useState } from "react";
import type { Route } from "./+types/blog._index";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { BLOG_CATEGORIES, getLocalizedBlogPosts, type BlogCategory, type BlogPost } from "~/config/blog";
import { getBlogThumb } from "~/config/blog-images";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";
import { buildOgLocaleMeta, isLocaleCode, localizedPath, type LocaleCode } from "~/config/localization";
import { formatBlogDate } from "~/lib/format-blog-date";
import { data, useLoaderData } from "react-router";

const INDEX_COPY: Record<
  LocaleCode,
  { eyebrow: string; title: string; description: string; latest: string; all: string; filterLabel: string }
> = {
  en: {
    eyebrow: "Blog",
    title: "Guides & Resources",
    description: "Practical guides for designing App Store screenshots that convert.",
    latest: "Latest",
    all: "All",
    filterLabel: "Filter articles by category",
  },
  es: {
    eyebrow: "Blog",
    title: "Guías y recursos",
    description: "Guías prácticas para diseñar capturas de la App Store que conviertan.",
    latest: "Lo último",
    all: "Todos",
    filterLabel: "Filtrar artículos por categoría",
  },
  zh: {
    eyebrow: "博客",
    title: "指南与资源",
    description: "设计 high 转化率 App Store 截图的实用指南。",
    latest: "最新",
    all: "全部",
    filterLabel: "按类别筛选文章",
  },
  hi: {
    eyebrow: "ब्लॉग",
    title: "गाइड और संसाधन",
    description: "ऐप स्टोर स्क्रीनशॉट डिज़ाइन करने के लिए व्यावहारिक गाइड जो वास्तव में कन्वर्ट हों।",
    latest: "नवीनतम",
    all: "सभी",
    filterLabel: "श्रेणी के अनुसार लेख फ़िल्टर करें",
  },
  fr: {
    eyebrow: "Blog",
    title: "Guides & Ressources",
    description: "Guides pratiques pour concevoir des captures App Store qui convertissent.",
    latest: "Dernier article",
    all: "Tous",
    filterLabel: "Filtrer les articles par catégorie",
  },
  ar: {
    eyebrow: "المدونة",
    title: "الأدلة والموارد",
    description: "أدلة عملية لتصميم لقطات شاشة App Store تؤدي بالفعل إلى زيادة التحويل.",
    latest: "الأحدث",
    all: "الكل",
    filterLabel: "تصفية المقالات حسب الفئة",
  },
  de: {
    eyebrow: "Blog",
    title: "Leitfäden & Ressourcen",
    description: "Praktische Leitfäden für das Design von App-Store-Screenshots, die konvertieren.",
    latest: "Neuester Beitrag",
    all: "Alle",
    filterLabel: "Artikel nach Kategorie filtern",
  },
  ja: {
    eyebrow: "ブログ",
    title: "ガイドとリソース",
    description: "ダウンロードにつながる App Store スクリーンショットをデザインするための実践ガイド。",
    latest: "最新",
    all: "すべて",
    filterLabel: "カテゴリーで記事を絞り込む",
  },
  pt: {
    eyebrow: "Blog",
    title: "Guias e Recursos",
    description: "Guias práticos para criar capturas de tela da App Store que convertem.",
    latest: "Mais recente",
    all: "Todos",
    filterLabel: "Filtrar artigos por categoria",
  },
  it: {
    eyebrow: "Blog",
    title: "Guide e Risorse",
    description: "Guide pratiche per progettare screenshot di App Store che convertono.",
    latest: "Ultimo articolo",
    all: "Tutti",
    filterLabel: "Filtra gli articoli per categoria",
  },
  ko: {
    eyebrow: "블로그",
    title: "가이드 및 리소스",
    description: "전환율을 높이는 App Store 스크린샷 디자인을 위한 실용 가이드.",
    latest: "최신",
    all: "전체",
    filterLabel: "카테고리별로 글 필터링",
  },
};

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return { locale: (locale || "en") as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches, params }) => {
  const locale = (params.locale || "en") as LocaleCode;
  const copy = INDEX_COPY[locale] || INDEX_COPY.en;
  const title = `${copy.title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${localizedPath(locale, "/blog")}`;

  return mergeMeta(matches, [
    { title },
    { name: "description", content: copy.description },
    ...buildOgLocaleMeta(locale),
    { property: "og:title", content: title },
    { property: "og:description", content: copy.description },
    { property: "og:url", content: url },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: copy.description },
  ]);
};

export const links: Route.LinksFunction = () => {
  // Canonical and alternate links are generated dynamically by root.tsx Layout.
  return [];
};

function CategoryPill({ category }: { category: BlogCategory }) {
  return (
    <span className="px-2 py-0.5 rounded bg-accent/10 text-accent-light text-[11px] font-medium">
      {category}
    </span>
  );
}

const PLACEHOLDER_GRADIENTS: Record<BlogCategory, string> = {
  Guide: "from-accent/25 to-surface",
  Reference: "from-mint/15 to-surface",
  Comparison: "from-warm/15 to-surface",
};

function CategoryPlaceholder({ category }: { category: BlogCategory }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${PLACEHOLDER_GRADIENTS[category]}`}
    >
      <span className="font-mono text-xs uppercase tracking-widest text-white/30">{category}</span>
    </div>
  );
}

function FeaturedCard({ post, locale, latestLabel }: { post: BlogPost; locale: LocaleCode; latestLabel: string }) {
  const thumb = getBlogThumb(post.slug);
  return (
    <a
      href={localizedPath(locale, `/blog/${post.slug}`)}
      className="group grid md:grid-cols-2 rounded-2xl border border-border bg-surface-raised overflow-hidden transition-all hover:border-white/20 hover:bg-surface-overlay mb-10"
    >
      <div className="relative aspect-video md:aspect-auto md:h-full md:min-h-72 overflow-hidden bg-surface-overlay">
        {thumb ? (
          <img
            src={thumb.src}
            alt={thumb.alt}
            width={800}
            height={450}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <CategoryPlaceholder category={post.category} />
        )}
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
      </div>
      <div className="p-7 md:p-9 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent-light">
            {latestLabel}
          </span>
          <CategoryPill category={post.category} />
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-accent-light transition-colors tracking-tight">
          {post.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/55 leading-relaxed">{post.description}</p>
        <div className="mt-5 flex items-center gap-3 text-xs text-white/60">
          <span className="font-mono">{formatBlogDate(post.date, locale)}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </a>
  );
}

function BlogCard({ post, locale }: { post: BlogPost; locale: LocaleCode }) {
  const thumb = getBlogThumb(post.slug);
  return (
    <a
      href={localizedPath(locale, `/blog/${post.slug}`)}
      className="group flex flex-col rounded-2xl border border-border bg-surface-raised overflow-hidden transition-all hover:border-white/20 hover:bg-surface-overlay"
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
        ) : (
          <CategoryPlaceholder category={post.category} />
        )}
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2.5">
          <CategoryPill category={post.category} />
          <span className="text-[11px] text-white/60 font-mono">{formatBlogDate(post.date, locale)}</span>
          <span className="text-[11px] text-white/55">{post.readTime}</span>
        </div>
        <h2 className="font-display font-semibold text-base text-white leading-snug group-hover:text-accent-light transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 text-sm text-white/50 leading-relaxed line-clamp-3">{post.description}</p>
      </div>
    </a>
  );
}

export default function BlogIndex() {
  const loaderData = useLoaderData<typeof loader>();
  const locale = loaderData.locale;
  const posts = getLocalizedBlogPosts(locale);
  const copy = INDEX_COPY[locale] || INDEX_COPY.en;
  const blogIndexUrl = `${SITE_URL}${localizedPath(locale, "/blog")}`;

  const [filter, setFilter] = useState<BlogCategory | "All">("All");
  const counts: Record<string, number> = { All: posts.length };
  for (const post of posts) {
    counts[post.category] = (counts[post.category] ?? 0) + 1;
  }
  const tabs: Array<BlogCategory | "All"> = ["All", ...BLOG_CATEGORIES.filter((c) => counts[c])];
  const gridPosts = filter === "All" ? posts.slice(1) : posts.filter((post) => post.category === filter);

  const blogJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${blogIndexUrl}#blog`,
        name: `${SITE_NAME} Blog`,
        url: blogIndexUrl,
        description: copy.description,
        inLanguage: locale,
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          url: `${SITE_URL}${localizedPath(locale, `/blog/${post.slug}`)}`,
          image: getBlogThumb(post.slug) ? `${SITE_URL}${getBlogThumb(post.slug)!.src}` : undefined,
          datePublished: post.date,
          dateModified: post.date,
          articleSection: post.category,
          keywords: post.keywords,
        })),
      },
      {
        "@type": "ItemList",
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}${localizedPath(locale, `/blog/${post.slug}`)}`,
          name: post.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: blogIndexUrl,
          },
        ],
      },
    ],
  });

  return (
    <ContentLayout locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: blogJsonLd }}
      />
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
            {copy.eyebrow}
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            {copy.title}
          </h1>
          <p className="mt-4 text-base text-white/55 leading-relaxed">
            {copy.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label={copy.filterLabel}>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              aria-pressed={filter === tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all cursor-pointer ${
                filter === tab
                  ? "bg-accent/15 border-accent/40 text-accent-light"
                  : "bg-surface-raised border-border text-white/60 hover:border-white/20 hover:text-white"
              }`}
            >
              {tab === "All" ? copy.all : tab}
              <span className="ms-1.5 text-[11px] font-mono opacity-60">{counts[tab]}</span>
            </button>
          ))}
        </div>

        {filter === "All" && posts.length > 0 && (
          <FeaturedCard post={posts[0]} locale={locale} latestLabel={copy.latest} />
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
