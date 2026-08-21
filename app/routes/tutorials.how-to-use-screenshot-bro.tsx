import type { Route } from "./+types/tutorials.how-to-use-screenshot-bro";
import { ContentLayout } from "~/components/ContentLayout";
import { DocFigure, renderBlocks } from "~/components/DocBlocks";
import { VideoCard } from "~/components/VideoCard";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { VIDEO_TUTORIALS } from "~/config/tutorials";
import {
  GUIDE_INTRO,
  GUIDE_NEXT_STEPS,
  GUIDE_STEPS,
  GUIDE_TOTAL_TIME,
  GUIDE_UPDATED,
} from "~/config/tutorial-guide";
import { formatBlogDate } from "~/lib/format-blog-date";
import { isLocaleCode, localizedPath, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return { locale: (locale || "en") as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches, params }) => {
  const locale = (params.locale || "en") as LocaleCode;
  const titles: Record<LocaleCode, string> = {
    en: `How to Use ${SITE_NAME} — Step-by-Step Guide`,
    es: `Cómo usar ${SITE_NAME} — Guía paso a paso`,
    zh: `如何使用 ${SITE_NAME} — 官方操作指南`,
    ja: `${SITE_NAME} の使い方 — 完全ステップ解説`,
    de: `So verwenden Sie ${SITE_NAME} — Schritt-für-Schritt`,
    fr: `Comment utiliser ${SITE_NAME} — Guide complet`,
    pt: `Como usar o ${SITE_NAME} — Guia passo a passo`,
    it: `Come usare ${SITE_NAME} — Guida pratica`,
    ko: `${SITE_NAME} 사용 방법 — 단계별 완전 가이드`,
    ar: `كيفية استخدام ${SITE_NAME} — دليل خطوة بخطوة`,
    hi: `${SITE_NAME} का उपयोग कैसे करें — चरण-दर-चरण गाइड`,
  };

  const descriptions: Record<LocaleCode, string> = {
    en: `Step-by-step guide to designing, localizing, and exporting App Store and Google Play screenshots with Screenshot Bro.`,
    es: `Guía paso a paso para diseñar, localizar y exportar capturas de App Store y Google Play con Screenshot Bro.`,
    zh: `通过 10 个清晰步骤，掌握在 Screenshot Bro 中设计、多语言翻译与一键导出应用商店截图的完整技巧。`,
    ja: `Screenshot Broを使ったApp StoreおよびGoogle Play向けスクリーンショットの設計・ローカライズ・書き出し完全ガイド。`,
    de: `Schritt-für-Schritt-Anleitung zur Erstellung und Lokalisierung von App Store Screenshots mit Screenshot Bro.`,
    fr: `Guide pas à pas pour concevoir, traduire et exporter vos captures d'écran avec Screenshot Bro.`,
    pt: `Guia passo a passo para criar, traduzir e exportar capturas de tela com o Screenshot Bro.`,
    it: `Guida passo dopo passo per creare, localizzare ed esportare screenshot con Screenshot Bro.`,
    ko: `Screenshot Bro로 App Store 및 Google Play 스크린샷을 디자인, 번역, 내보내는 10단계 가이드.`,
    ar: `دليل خطوة بخطوة لتصميم وتوطين وتصدير لقطات شاشة المتاجر عبر Screenshot Bro.`,
    hi: `Screenshot Bro के साथ स्क्रीनशॉट डिज़ाइन, अनुवाद और निर्यात करने की चरण-दर-चरण गाइड।`,
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const pageUrl = `${SITE_URL}${localizedPath(locale, "/tutorials/how-to-use-screenshot-bro")}`;

  return mergeMeta(matches, [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: pageUrl },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ]);
};

const INTRO_VIDEO = VIDEO_TUTORIALS[0];

function StepNumber({ index }: { index: number }) {
  return (
    <span className="font-mono text-xs text-accent-light">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

export default function HowToUseGuide() {
  const { locale } = useLoaderData<typeof loader>();

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: locale === "es" ? "Tutoriales" : locale === "zh" ? "教程" : locale === "ja" ? "チュートリアル" : "Tutorials", path: localizedPath(locale, "/tutorials") },
    { name: `How to use ${SITE_NAME}`, path: localizedPath(locale, "/tutorials/how-to-use-screenshot-bro") },
  ]);

  return (
    <ContentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <div className="max-w-6xl mx-auto">
        <header className="prose-policy mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
            {locale === "es" ? "Tutorial" : locale === "zh" ? "教程指南" : locale === "ja" ? "チュートリアル" : "Tutorial"}
          </p>
          <h1>How to use {SITE_NAME}</h1>
          <p className="meta">
            Updated {formatBlogDate(GUIDE_UPDATED, locale)}
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono mb-4">
              {locale === "es" ? "En esta página" : locale === "zh" ? "本页目录" : locale === "ja" ? "目次" : "On this page"}
            </p>
            <nav className="flex flex-col gap-2">
              <a
                href="#before"
                className="flex items-baseline gap-2.5 text-sm text-white/60 hover:text-white/95 transition-colors"
              >
                <span className="font-mono text-xs text-white/40">·</span>
                <span>Before you start</span>
              </a>
              {GUIDE_STEPS.map((guideStep, index) => (
                <a
                  key={guideStep.id}
                  href={`#${guideStep.id}`}
                  className="flex items-baseline gap-2.5 text-sm text-white/60 hover:text-white/95 transition-colors"
                >
                  <StepNumber index={index} />
                  <span>{guideStep.navTitle}</span>
                </a>
              ))}
              <a
                href="#next"
                className="flex items-baseline gap-2.5 text-sm text-white/60 hover:text-white/95 transition-colors"
              >
                <span className="font-mono text-xs text-white/40">→</span>
                <span>Where to go next</span>
              </a>
            </nav>
          </aside>

          <article className="prose-policy max-w-3xl">
            <section>
              <h2 id="before">Before you start</h2>
              {renderBlocks(GUIDE_INTRO, locale)}
              {INTRO_VIDEO && (
                <div className="not-prose my-8">
                  <p className="mb-4 text-sm text-white/55">
                    Prefer to watch first? This video covers the first two steps.
                  </p>
                  <VideoCard video={INTRO_VIDEO} headingLevel="h3" />
                </div>
              )}
            </section>

            {GUIDE_STEPS.map((guideStep, index) => (
              <section key={guideStep.id}>
                <h2 id={guideStep.id}>
                  <StepNumber index={index} />{" "}
                  <span className="ml-1">{guideStep.title}</span>
                </h2>
                <p className="-mt-2 mb-4 text-white/55 italic">
                  {guideStep.summary}
                </p>
                {guideStep.images?.map((image) => (
                  <DocFigure
                    key={image.src}
                    image={image}
                    src={image.src ?? ""}
                    locale={locale}
                  />
                ))}
                {renderBlocks(guideStep.blocks, locale)}
                {guideStep.learnMore && (
                  <p className="text-sm text-white/55">
                    Full reference:{" "}
                    {guideStep.learnMore.map((link, i) => (
                      <span key={link.href}>
                        {i > 0 && " · "}
                        <a href={link.href}>{link.label}</a>
                      </span>
                    ))}
                  </p>
                )}
              </section>
            ))}

            <section>
              <h2 id="next">Where to go next</h2>
              <ul>
                {GUIDE_NEXT_STEPS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </div>
    </ContentLayout>
  );
}
