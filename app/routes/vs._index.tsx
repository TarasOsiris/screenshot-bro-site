import type { Route } from "./+types/vs._index";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import {
  HUB_ROWS,
  LATEST_COMPARISON_VERIFIED,
  formatMonthYear,
  type HubRow,
} from "~/config/comparisons";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { SITE_NAME, SITE_URL } from "~/config/site";
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
    en: `${SITE_NAME} vs other App Store screenshot tools`,
    es: `${SITE_NAME} frente a otras herramientas de capturas para App Store`,
    zh: `${SITE_NAME} 与其他 App Store 截图生成器横向对比`,
    ja: `${SITE_NAME} と他のApp Storeスクリーンショット作成ツールの比較`,
    de: `${SITE_NAME} im Vergleich zu anderen App Store Screenshot-Tools`,
    fr: `${SITE_NAME} vs autres outils de captures d'écran App Store`,
    pt: `${SITE_NAME} vs outras ferramentas de captura de tela da App Store`,
    it: `${SITE_NAME} a confronto con altri generatori di screenshot per App Store`,
    ko: `${SITE_NAME}와 주요 App Store 스크린샷 툴 비교`,
    ar: `مقارنة ${SITE_NAME} مع أدوات لقطات شاشة App Store الأخرى`,
    hi: `${SITE_NAME} बनाम अन्य App Store स्क्रीनशॉट टूल्स`,
  };

  const descriptions: Record<LocaleCode, string> = {
    en: "Every App Store and Google Play screenshot tool compared against Screenshot Bro: platform, free tier, localization and store upload, with a page for each.",
    es: "Comparativa de herramientas para App Store y Google Play frente a Screenshot Bro: plataformas, versiones gratuitas, traducción y subida a tiendas.",
    zh: "全方位横向对比主流应用商店截图设计工具与 Screenshot Bro：平台支持、免费额度、多语言翻译及商店一键上传能力。",
    ja: "App Store / Google Playスクリーンショット作成ツールを徹底比較。対応OS、無料枠、翻訳機能、ストア直接送信機能の違いを解説。",
    de: "Vergleich aller führenden Screenshot-Tools mit Screenshot Bro: Plattformen, Gratis-Funktionen, Lokalisierung und Upload.",
    fr: "Comparatif complet des outils de captures d'écran App Store face à Screenshot Bro : fonctionnalités gratuites, traduction et export.",
    pt: "Comparativo detalhado de ferramentas para App Store e Google Play vs Screenshot Bro: recursos gratuitos, tradução e upload.",
    it: "Confronto dettagliato tra Screenshot Bro e i principali strumenti per screenshot di App Store e Google Play.",
    ko: "Screenshot Bro와 주요 App Store 스크린샷 제작 도구의 기능, 무료 제공 범위, 번역 및 스토어 업로드 지원 비교.",
    ar: "مقارنة شاملة بين Screenshot Bro وأبرز أدوات تصميم لقطات شاشة المتاجر.",
    hi: "Screenshot Bro और अन्य ऐप स्टोर स्क्रीनशॉट टूल्स की विस्तृत तुलना।",
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const pageUrl = `${SITE_URL}${localizedPath(locale, "/vs")}`;

  return mergeMeta(matches, [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: pageUrl },
    { property: "og:image", content: `${SITE_URL}/og-image.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
  ]);
};

const SCREENSHOT_BRO_ROW = {
  type: "Native Mac, iPad and iPhone app",
  free: "Watermark-free exports, upload included",
  localization: "81 presets, on-device auto-translate",
  upload: "Direct upload, free tier too",
};

const ITEM_LIST_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE_NAME} vs other App Store screenshot tools`,
  description: "Every App Store and Google Play screenshot tool compared against Screenshot Bro: platform, free tier, localization and store upload, with a page for each.",
  url: `${SITE_URL}/vs`,
  numberOfItems: HUB_ROWS.length,
  itemListElement: HUB_ROWS.map((row, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `${row.tool} vs ${SITE_NAME}`,
    url: `${SITE_URL}${row.href}`,
  })),
});

// Hand-written on purpose: the answers name specific tools, and a renamed
// competitor in comparisons.ts will not update this prose.
const FAQ_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best App Store screenshot generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There isn't one winner — the right tool depends on your platform and how repetitive your listing is. On a Mac, Screenshot Bro and Screenshot Studio handle the whole listing natively. In the browser, AppLaunchpad has the largest template library and AppMockUp Studio is free with no account. For 80+ languages with machine translation, AppScreens goes furthest. For screenshots generated by CI, Fastlane snapshot or the Screenshots Pro API fit better.",
      },
    },
    {
      "@type": "Question",
      name: "Which App Store screenshot tools are free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AppMockUp Studio is free in the browser with no account, and Fastlane snapshot and frameit are free and open source. Screenshot Bro's free tier exports without a watermark (1 project, 3 rows, 5 templates per row) and includes store upload. Most other tools either watermark free exports, cap the number of screenshots, or require payment before you can export at all.",
      },
    },
    {
      "@type": "Question",
      name: "Which screenshot tools upload directly to App Store Connect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Screenshot Bro uploads directly to App Store Connect and Google Play on every tier, free included. Screenshot Studio uploads directly, AppScreens offers automatic store upload on paid plans, and Fastlane can upload via the deliver action. Most browser generators export a folder of files that you upload by hand.",
      },
    },
  ],
});

function GroupList({ group, locale }: { group: HubRow["group"]; locale: LocaleCode }) {
  return (
    <ul>
      {HUB_ROWS.filter((row) => row.group === group).map((row) => (
        <li key={row.href}>
          <a href={localizedPath(locale, row.href)}>
            {row.tool} vs {SITE_NAME}
          </a>{" "}
          — {row.type.toLowerCase()}, {row.free.toLowerCase()}.
          {row.alternativeHref ? (
            <>
              {" "}
              Thinking of switching? See the{" "}
              <a href={localizedPath(locale, row.alternativeHref)}>{row.tool} alternative</a> guide.
            </>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function ComparisonsIndex() {
  const { locale } = useLoaderData<typeof loader>();
  const LAST_CHECKED = formatMonthYear(LATEST_COMPARISON_VERIFIED);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: locale === "es" ? "Comparativas" : locale === "zh" ? "对比评测" : locale === "ja" ? "ツール比較" : "Comparisons", path: localizedPath(locale, "/vs") },
  ]);

  return (
    <ContentLayout>
      <article className="max-w-3xl mx-auto prose-policy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ITEM_LIST_JSON_LD }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: FAQ_JSON_LD }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
        />

        <p className="meta">Comparisons · updated {LAST_CHECKED}</p>
        <h1>{SITE_NAME} vs other App Store screenshot tools</h1>
        <p>
          <strong>Short answer:</strong> if you work on a Mac, iPad or iPhone
          and your listing repeats across sizes and languages, {SITE_NAME} is
          built for exactly that. If you are on Windows, need Apple Watch, TV
          or Vision Pro sizes, want machine translation beyond the languages
          Apple&apos;s on-device translation covers, or want screenshots
          generated by CI, one of the tools below fits better — and each row
          links to a page that says why.
        </p>
        <p>
          Every comparison was checked against the other tool&apos;s own site;
          the most recent check was in {LAST_CHECKED}, and each page carries
          its own date. Pricing and features change, so verify current details
          there before deciding. If you think something here is wrong or out of
          date, <a href="/support">tell us</a> and we will fix it.
        </p>

        <h2>The full matrix</h2>
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Type</th>
              <th>Free tier</th>
              <th>Localization</th>
              <th>Store upload</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{SITE_NAME}</strong>
              </td>
              <td>{SCREENSHOT_BRO_ROW.type}</td>
              <td>{SCREENSHOT_BRO_ROW.free}</td>
              <td>{SCREENSHOT_BRO_ROW.localization}</td>
              <td>{SCREENSHOT_BRO_ROW.upload}</td>
            </tr>
            {HUB_ROWS.map((row) => (
              <tr key={row.href}>
                <td>
                  <a href={localizedPath(locale, row.href)}>{row.tool}</a>
                </td>
                <td>{row.type}</td>
                <td>{row.free}</td>
                <td>{row.localization}</td>
                <td>{row.upload}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Native apps</h2>
        <p>
          Tools that run locally, work offline, and keep project files on your
          own disk.
        </p>
        <GroupList group="native" locale={locale} />

        <h2>Browser generators</h2>
        <p>
          Nothing to install and they run on any operating system — the right
          answer if you are not on a Mac.
        </p>
        <GroupList group="browser" locale={locale} />

        <h2>Automation</h2>
        <p>
          For screenshots that should be produced by a pipeline rather than a
          person.
        </p>
        <GroupList group="automation" locale={locale} />

        <h2>Design tools and mockup libraries</h2>
        <p>
          General-purpose tools that can make store screenshots, with more
          freedom and more manual repetition.
        </p>
        <GroupList group="design" locale={locale} />

        <h2>Roundups</h2>
        <ul>
          <li>
            <a href="/blog/best-app-store-screenshot-tools-for-mac">
              Best App Store screenshot tools for Mac
            </a>{" "}
            — the native options in detail.
          </li>
          <li>
            <a href="/blog/best-app-screenshot-localization-tools">
              Best app screenshot localization tools
            </a>{" "}
            — language coverage compared.
          </li>
          <li>
            <a href="/blog/best-google-play-screenshot-tools">
              Best Google Play screenshot tools
            </a>{" "}
            — including the feature graphic.
          </li>
          <li>
            <a href="/blog/best-free-app-store-screenshot-generators">
              Best free App Store screenshot generators
            </a>{" "}
            — what you can ship without paying.
          </li>
          <li>
            <a href="/blog/screenshot-bro-alternatives">
              {SITE_NAME} alternatives
            </a>{" "}
            — when this app is the wrong choice.
          </li>
        </ul>

        <BlogCTA message="Try Screenshot Bro on one real listing — the free tier exports watermark-free, so you can judge it against any tool here." />
      </article>
    </ContentLayout>
  );
}
