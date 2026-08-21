import type { Route } from "./+types/tutorials";
import { ContentLayout } from "~/components/ContentLayout";
import { VideoCard } from "~/components/VideoCard";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { SITE_NAME, SITE_URL } from "~/config/site";
import {
  VIDEO_TUTORIALS,
  youtubeEmbedUrl,
  youtubeThumbnail,
  youtubeWatchUrl,
} from "~/config/tutorials";
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
    en: `Tutorials — ${SITE_NAME}`,
    es: `Tutoriales — ${SITE_NAME}`,
    zh: `视频与实战教程 — ${SITE_NAME}`,
    ja: `チュートリアル・使い方 — ${SITE_NAME}`,
    de: `Tutorials & Anleitungen — ${SITE_NAME}`,
    fr: `Tutoriels & Guides — ${SITE_NAME}`,
    pt: `Tutoriais & Guias — ${SITE_NAME}`,
    it: `Tutorial e Guide pratiche — ${SITE_NAME}`,
    ko: `튜토리얼 및 사용 가이드 — ${SITE_NAME}`,
    ar: `الدروس والشروحات — ${SITE_NAME}`,
    hi: `ट्यूटोरियल और गाइड — ${SITE_NAME}`,
  };

  const descriptions: Record<LocaleCode, string> = {
    en: `Learn ${SITE_NAME} with a step-by-step written guide and short videos — create projects, frame devices, localize, and export store screenshots.`,
    es: `Aprende a usar ${SITE_NAME} con guías paso a paso y vídeos: crea proyectos, añade marcos, localiza y exporta capturas.`,
    zh: `通过图文指南与短视频快速掌握 ${SITE_NAME}：新建项目、设置机型框架、多语言翻译及批量导出。`,
    ja: `${SITE_NAME}の使い方ガイドと動画解説。プロジェクト作成からデバイス配置、多言語化、一括書き出しまでを網羅。`,
    de: `Lernen Sie ${SITE_NAME} mit Schritt-für-Schritt-Anleitungen und Videos kennen.`,
    fr: `Apprenez à utiliser ${SITE_NAME} grâce à notre guide pas à pas et nos vidéos explicatives.`,
    pt: `Aprenda a usar o ${SITE_NAME} com nosso guia passo a passo e vídeos práticos.`,
    it: `Impara a usare ${SITE_NAME} con guide pratiche e video tutorial passo dopo passo.`,
    ko: `단계별 가이드와 동영상으로 ${SITE_NAME} 마스터하기: 프로젝트 생성부터 디바이스 프레임, 다국어 번역, 스토어 업로드까지.`,
    ar: `تعلم استخدام ${SITE_NAME} عبر دليل خطوة بخطوة وفيديوهات قصيرة توضيحية.`,
    hi: `चरण-दर-चरण गाइड और लघु वीडियो के साथ ${SITE_NAME} का उपयोग करना सीखें।`,
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const pageUrl = `${SITE_URL}${localizedPath(locale, "/tutorials")}`;

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

function GuideCard({ locale }: { locale: LocaleCode }) {
  const guidePath = localizedPath(locale, "/tutorials/how-to-use-screenshot-bro");
  const copy = getTutorialsCopy(locale);

  return (
    <a
      href={guidePath}
      className="group block rounded-2xl border border-border bg-surface-raised p-8 transition-all hover:border-white/20"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono">
        {copy.guideEyebrow}
      </p>
      <h2 className="mt-3 font-display font-bold text-2xl text-white leading-snug">
        {copy.guideTitle}
      </h2>
      <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-2xl">
        {copy.guideDesc}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/85 group-hover:text-white transition-colors">
        {copy.guideCta}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </a>
  );
}

export default function Tutorials() {
  const { locale } = useLoaderData<typeof loader>();
  const copy = getTutorialsCopy(locale);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: copy.eyebrow, path: localizedPath(locale, "/tutorials") },
  ]);

  const videoListJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: VIDEO_TUTORIALS.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        thumbnailUrl: youtubeThumbnail(video.youtubeId),
        uploadDate: video.uploadDate,
        duration: video.duration,
        contentUrl: youtubeWatchUrl(video.youtubeId),
        embedUrl: youtubeEmbedUrl(video.youtubeId),
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
        },
      },
    })),
  });

  return (
    <ContentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: videoListJsonLd }}
      />
      <div className="max-w-5xl mx-auto">
        <header className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
            {copy.eyebrow}
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            {copy.heading}
          </h1>
          <p className="mt-4 text-base text-white/55 leading-relaxed">
            {copy.subheading}
          </p>
        </header>

        <GuideCard locale={locale} />

        <h2 className="mt-16 mb-8 font-display font-bold text-2xl text-white">
          {copy.videosHeading}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {VIDEO_TUTORIALS.map((video) => (
            <VideoCard key={video.youtubeId} video={video} headingLevel="h3" />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}

function getTutorialsCopy(locale: LocaleCode) {
  switch (locale) {
    case "es":
      return {
        eyebrow: "Tutoriales",
        heading: "Tutoriales",
        subheading: `Guía paso a paso y vídeos para diseñar y publicar capturas para App Store y Google Play con ${SITE_NAME}.`,
        guideEyebrow: "Guía completa",
        guideTitle: `Cómo usar ${SITE_NAME}`,
        guideDesc: "Todo el flujo de trabajo en diez pasos con capturas reales de la aplicación: desde tu primer proyecto hasta la subida a App Store Connect y Google Play.",
        guideCta: "Leer la guía",
        videosHeading: "Vídeos",
      };
    case "zh":
      return {
        eyebrow: "教程",
        heading: "教程与实战指南",
        subheading: `通过图文操作与短视频演示，学习如何使用 ${SITE_NAME} 快速设计并发布 App Store 与 Google Play 截图。`,
        guideEyebrow: "图文教程",
        guideTitle: `如何高效使用 ${SITE_NAME}`,
        guideDesc: "10 步掌握全套制作流程，每步配有高清操作截图——从创建项目、设置机型框架到多语言批量导出与一键上传。",
        guideCta: "阅读完整教程",
        videosHeading: "视频演示",
      };
    case "ja":
      return {
        eyebrow: "チュートリアル",
        heading: "チュートリアル",
        subheading: `${SITE_NAME} を使ってApp StoreとGoogle Play向けのスクリーンショットを作成・公開するための解説です。`,
        guideEyebrow: "ステップ解説",
        guideTitle: `${SITE_NAME} の使い方`,
        guideDesc: "新規プロジェクトの作成から端末フレーム設定、テキスト入力、多言語展開、ストア申請用書き出しまでを10ステップで網羅。",
        guideCta: "ガイドを読む",
        videosHeading: "動画チュートリアル",
      };
    case "de":
      return {
        eyebrow: "Tutorials",
        heading: "Tutorials",
        subheading: `Schritt-für-Schritt-Anleitungen und Videos zur Erstellung und Veröffentlichung von App Store Screenshots mit ${SITE_NAME}.`,
        guideEyebrow: "Schriftliche Anleitung",
        guideTitle: `So verwenden Sie ${SITE_NAME}`,
        guideDesc: "Der gesamte Ablauf in 10 Schritten: Von der Projekterstellung über Geräterahmen und Übersetzungen bis zum Export.",
        guideCta: "Anleitung lesen",
        videosHeading: "Videos",
      };
    case "fr":
      return {
        eyebrow: "Tutoriels",
        heading: "Tutoriels",
        subheading: `Guide pas à pas et courtes vidéos pour concevoir et exporter vos captures d'écran avec ${SITE_NAME}.`,
        guideEyebrow: "Guide écrit",
        guideTitle: `Comment utiliser ${SITE_NAME}`,
        guideDesc: "L'ensemble du flux en dix étapes illustrées : du premier projet à l'export final pour App Store Connect et Google Play.",
        guideCta: "Lire le guide",
        videosHeading: "Vidéos",
      };
    case "pt":
      return {
        eyebrow: "Tutoriais",
        heading: "Tutoriais",
        subheading: `Guia prático e vídeos para criar e enviar capturas de tela para a App Store e Google Play com ${SITE_NAME}.`,
        guideEyebrow: "Guia completo",
        guideTitle: `Como usar o ${SITE_NAME}`,
        guideDesc: "O fluxo de trabalho completo em 10 passos: do primeiro projeto até o envio final das capturas.",
        guideCta: "Ler o guia",
        videosHeading: "Vídeos",
      };
    case "it":
      return {
        eyebrow: "Tutorial",
        heading: "Tutorial",
        subheading: `Guide pratiche e video per progettare e pubblicare screenshot per App Store e Google Play con ${SITE_NAME}.`,
        guideEyebrow: "Guida dettagliata",
        guideTitle: `Come usare ${SITE_NAME}`,
        guideDesc: "L'intero flusso di lavoro in 10 passaggi con screenshot dell'app: dalla creazione del progetto all'esportazione.",
        guideCta: "Leggi la guida",
        videosHeading: "Video",
      };
    case "ko":
      return {
        eyebrow: "튜토리얼",
        heading: "튜토리얼",
        subheading: `${SITE_NAME}을 사용하여 App Store 및 Google Play용 스크린샷을 디자인하고 출시하는 방법.`,
        guideEyebrow: "상세 가이드",
        guideTitle: `${SITE_NAME} 사용 방법`,
        guideDesc: "첫 프로젝트 생성부터 디바이스 프레임, 다국어 번역, 스토어 업로드까지 10단계로 정리된 완전 가이드.",
        guideCta: "가이드 읽기",
        videosHeading: "비디오 튜토리얼",
      };
    case "ar":
      return {
        eyebrow: "الدروس",
        heading: "الدروس والشروحات",
        subheading: `دليل خطوة بخطوة وفيديوهات قصيرة توضح كيفية تصميم ورفع لقطات الشاشة عبر ${SITE_NAME}.`,
        guideEyebrow: "دليل إرشادي",
        guideTitle: `كيفية استخدام ${SITE_NAME}`,
        guideDesc: "خطوات العمل الكاملة في عشر خطوات مصورة: من المشروع الأول حتى التصدير والرفع النهائي للمتجر.",
        guideCta: "اقرأ الدليل",
        videosHeading: "الفيديوهات",
      };
    case "hi":
      return {
        eyebrow: "ट्यूटोरियल",
        heading: "ट्यूटोरियल",
        subheading: `${SITE_NAME} के साथ App Store और Google Play स्क्रीनशॉट डिज़ाइन और शिप करने की पूरी गाइड।`,
        guideEyebrow: "लिखित गाइड",
        guideTitle: `${SITE_NAME} का उपयोग कैसे करें`,
        guideDesc: "दस चरणों में पूरी कार्यप्रणाली: पहले प्रोजेक्ट से लेकर डिवाइस फ़्रेम, अनुवाद और स्टोर अपलोड तक।",
        guideCta: "गाइड पढ़ें",
        videosHeading: "वीडियो",
      };
    default:
      return {
        eyebrow: "Tutorials",
        heading: "Tutorials",
        subheading: `A written walkthrough and short videos showing how to design and ship App Store and Google Play screenshots with ${SITE_NAME}.`,
        guideEyebrow: "Written guide",
        guideTitle: `How to use ${SITE_NAME}`,
        guideDesc: "The whole workflow in ten steps, with a screenshot of the app at each one — from your first project through device frames, headlines, backgrounds and languages, to a finished set uploaded to App Store Connect or Google Play. About 20 minutes.",
        guideCta: "Read the guide",
        videosHeading: "Videos",
      };
  }
}

