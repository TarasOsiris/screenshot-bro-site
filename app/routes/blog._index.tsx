import type { Route } from "./+types/blog._index";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { getLocalizedBlogPosts } from "~/config/blog";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";
import { isLocaleCode, localizedPath, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

const INDEX_COPY: Record<LocaleCode, { eyebrow: string; title: string; description: string }> = {
  en: {
    eyebrow: "Blog",
    title: "Guides & Resources",
    description: "Practical guides for designing App Store screenshots that convert.",
  },
  es: {
    eyebrow: "Blog",
    title: "Guías y recursos",
    description: "Guías prácticas para diseñar capturas de la App Store que conviertan.",
  },
  zh: {
    eyebrow: "博客",
    title: "指南与资源",
    description: "设计 high 转化率 App Store 截图的实用指南。",
  },
  hi: {
    eyebrow: "ब्लॉग",
    title: "गाइड और संसाधन",
    description: "ऐप स्टोर स्क्रीनशॉट डिज़ाइन करने के लिए व्यावहारिक गाइड जो वास्तव में कन्वर्ट हों।",
  },
  fr: {
    eyebrow: "Blog",
    title: "Guides & Ressources",
    description: "Guides pratiques pour concevoir des captures App Store qui convertissent.",
  },
  ar: {
    eyebrow: "المدونة",
    title: "الأدلة والموارد",
    description: "أدلة عملية لتصميم لقطات شاشة App Store تؤدي بالفعل إلى زيادة التحويل.",
  },
  de: {
    eyebrow: "Blog",
    title: "Leitfäden & Ressourcen",
    description: "Praktische Leitfäden für das Design von App-Store-Screenshots, die konvertieren.",
  },
  ja: {
    eyebrow: "ブログ",
    title: "ガイドとリソース",
    description: "ダウンロードにつながる App Store スクリーンショットをデザインするための実践ガイド。",
  },
  pt: {
    eyebrow: "Blog",
    title: "Guias e Recursos",
    description: "Guias práticos para criar capturas de tela da App Store que convertem.",
  },
  it: {
    eyebrow: "Blog",
    title: "Guide e Risorse",
    description: "Guide pratiche per progettare screenshot di App Store che convertono.",
  },
  ko: {
    eyebrow: "블로그",
    title: "가이드 및 리소스",
    description: "전환율을 높이는 App Store 스크린샷 디자인을 위한 실용 가이드.",
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

export default function BlogIndex() {
  const loaderData = useLoaderData<typeof loader>();
  const locale = loaderData.locale;
  const posts = getLocalizedBlogPosts(locale);
  const copy = INDEX_COPY[locale] || INDEX_COPY.en;
  const blogIndexUrl = `${SITE_URL}${localizedPath(locale, "/blog")}`;

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
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
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

        <div className="space-y-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={localizedPath(locale, `/blog/${post.slug}`)}
              className="block group rounded-2xl bg-surface-raised border border-border p-7 transition-all hover:border-white/20 hover:bg-surface-overlay"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 rounded bg-accent/10 text-accent-light text-[11px] font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-white/60 font-mono">
                  {post.date}
                </span>
                <span className="text-xs text-white/55">
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-display font-bold text-xl text-white group-hover:text-accent-light transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-white/55 leading-relaxed">
                {post.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
