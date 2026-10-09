import type {
  FaqItem,
  FeatureItem,
  FeatureShowcase,
  NavItem,
  WorkflowStep,
} from "~/config/site";
import {
  appStoreProductUrl,
  DEFAULT_APP_STORE_COUNTRY,
  DOWNLOAD_BENEFITS,
  FAQS,
  FEATURE_SHOWCASES,
  FEATURES,
  NAV_ITEMS,
  SITE_DESCRIPTION,
  SITE_NAME,
  WORKFLOW_STEPS,
} from "~/config/site";

export type LocaleCode =
  | "en"
  | "es"
  | "zh"
  | "hi"
  | "fr"
  | "ar"
  | "de"
  | "ja"
  | "pt"
  | "it"
  | "ko"
  | "uk"
  | "pl"
  | "tr"
  | "nl"
  | "id"
  | "vi"
  | "th"
  | "sv"
  | "da"
  | "fi"
  | "no"
  | "cs"
  | "ro"
  | "ms";

export type LocaleInfo = {
  code: LocaleCode;
  label: string;
  nativeLabel: string;
  htmlLang: string;
  ogLocale: string;
  dir: "ltr" | "rtl";
  // App Store storefront to send this locale's visitors to. A language is not
  // a country, so this is a deliberate pick per locale, not derived from
  // `ogLocale` (which carries no real country for Arabic).
  storefront: string;
};

export const DEFAULT_LOCALE: LocaleCode = "en";

export const LOCALES: LocaleInfo[] = [
  { code: "en", label: "English", nativeLabel: "English", htmlLang: "en", ogLocale: "en_US", dir: "ltr", storefront: "us" },
  { code: "es", label: "Spanish", nativeLabel: "Español", htmlLang: "es", ogLocale: "es_ES", dir: "ltr", storefront: "es" },
  { code: "zh", label: "Chinese", nativeLabel: "简体中文", htmlLang: "zh-Hans", ogLocale: "zh_CN", dir: "ltr", storefront: "cn" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", htmlLang: "hi", ogLocale: "hi_IN", dir: "ltr", storefront: "in" },
  { code: "fr", label: "French", nativeLabel: "Français", htmlLang: "fr", ogLocale: "fr_FR", dir: "ltr", storefront: "fr" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", htmlLang: "ar", ogLocale: "ar_AR", dir: "rtl", storefront: "sa" },
  { code: "de", label: "German", nativeLabel: "Deutsch", htmlLang: "de", ogLocale: "de_DE", dir: "ltr", storefront: "de" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語", htmlLang: "ja", ogLocale: "ja_JP", dir: "ltr", storefront: "jp" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português", htmlLang: "pt-BR", ogLocale: "pt_BR", dir: "ltr", storefront: "br" },
  { code: "it", label: "Italian", nativeLabel: "Italiano", htmlLang: "it", ogLocale: "it_IT", dir: "ltr", storefront: "it" },
  { code: "ko", label: "Korean", nativeLabel: "한국어", htmlLang: "ko", ogLocale: "ko_KR", dir: "ltr", storefront: "kr" },
  { code: "uk", label: "Ukrainian", nativeLabel: "Українська", htmlLang: "uk", ogLocale: "uk_UA", dir: "ltr", storefront: "ua" },
  { code: "pl", label: "Polish", nativeLabel: "Polski", htmlLang: "pl", ogLocale: "pl_PL", dir: "ltr", storefront: "pl" },
  { code: "tr", label: "Turkish", nativeLabel: "Türkçe", htmlLang: "tr", ogLocale: "tr_TR", dir: "ltr", storefront: "tr" },
  { code: "nl", label: "Dutch", nativeLabel: "Nederlands", htmlLang: "nl", ogLocale: "nl_NL", dir: "ltr", storefront: "nl" },
  { code: "id", label: "Indonesian", nativeLabel: "Bahasa Indonesia", htmlLang: "id", ogLocale: "id_ID", dir: "ltr", storefront: "id" },
  { code: "vi", label: "Vietnamese", nativeLabel: "Tiếng Việt", htmlLang: "vi", ogLocale: "vi_VN", dir: "ltr", storefront: "vn" },
  { code: "th", label: "Thai", nativeLabel: "ไทย", htmlLang: "th", ogLocale: "th_TH", dir: "ltr", storefront: "th" },
  { code: "sv", label: "Swedish", nativeLabel: "Svenska", htmlLang: "sv", ogLocale: "sv_SE", dir: "ltr", storefront: "se" },
  { code: "da", label: "Danish", nativeLabel: "Dansk", htmlLang: "da", ogLocale: "da_DK", dir: "ltr", storefront: "dk" },
  { code: "fi", label: "Finnish", nativeLabel: "Suomi", htmlLang: "fi", ogLocale: "fi_FI", dir: "ltr", storefront: "fi" },
  { code: "no", label: "Norwegian", nativeLabel: "Norsk", htmlLang: "no", ogLocale: "nb_NO", dir: "ltr", storefront: "no" },
  { code: "cs", label: "Czech", nativeLabel: "Čeština", htmlLang: "cs", ogLocale: "cs_CZ", dir: "ltr", storefront: "cz" },
  { code: "ro", label: "Romanian", nativeLabel: "Română", htmlLang: "ro", ogLocale: "ro_RO", dir: "ltr", storefront: "ro" },
  { code: "ms", label: "Malay", nativeLabel: "Bahasa Melayu", htmlLang: "ms", ogLocale: "ms_MY", dir: "ltr", storefront: "my" },
];

const LOCALE_CODES = new Set(LOCALES.map((locale) => locale.code));

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HomeCopy = {
  locale: LocaleInfo;
  siteTitle: string;
  siteDescription: string;
  socialImageAlt: string;
  primaryCtaLabel: string;
  navItems: NavItem[];
  benefits: string[];
  faqs: FaqItem[];
  features: FeatureItem[];
  featureShowcases: FeatureShowcase[];
  workflowSteps: WorkflowStep[];
  ui: {
    skipToContent: string;
    blog: string;
    tutorials: string;
    docs: string;
    changelog: string;
    comparisons: string;
    vsFastlane: string;
    community: string;
    discord: string;
    joinDiscord: string;
    privacy: string;
    terms: string;
    contact: string;
    friends: string;
    redditCommunity: string;
    followOnX: string;
    followOnThreads: string;
    followJourney: string;
    madeWithLoveAt: string;
    language: string;
    homeLabel: string;
    seeInAction: string;
    read: string;
    browseGuides: string;
    submitApp: string;
    contactDeveloper: string;
    productLabel: string;
    resourcesLabel: string;
    sectionsLabel: string;
    openMenu: string;
    closeMenu: string;
    backToTop: string;
    templateAlt: (name: string) => string;
    templateMeta: (columns: number, width: number, height: number) => string;
    startWithTemplate: string;
    templatePickerLabel: string;
    previousTemplate: string;
    nextTemplate: string;
    pauseTemplates: string;
    playTemplates: string;
    showAllTemplates: (count: number) => string;
    showFewerTemplates: string;
    productHuntAlt: string;
    availabilityNote: string;
  };
  hero: {
    titleLead: string;
    titleAccent: string;
    titleRest: string;
    descriptionLead: string;
    descriptionStrong: string;
    descriptionTail: string;
    videoLabel: string;
  };
  sections: {
    showcases: SectionCopy;
    templates: SectionCopy;
    workflow: SectionCopy;
    features: SectionCopy;
    blog: SectionCopy;
    faq: SectionCopy;
    appShowcase: SectionCopy;
  };
  problem: {
    story: string;
  };
  download: {
    titleLine1: string;
    titleLine2: string;
    description: string;
  };
  footer: {
    note: string;
  };
};

export const EN_HOME_COPY: HomeCopy = {
  locale: LOCALES[0],
  siteTitle: "App Store Screenshot Tool for Mac, iPad & iPhone",
  siteDescription: SITE_DESCRIPTION,
  socialImageAlt:
    "Screenshot Bro — native Mac, iPad and iPhone app for designing App Store and Google Play screenshots with device frames, gradients, and localization",
  primaryCtaLabel: "Get Screenshot Bro",
  navItems: NAV_ITEMS,
  benefits: DOWNLOAD_BENEFITS,
  faqs: FAQS,
  features: FEATURES,
  featureShowcases: FEATURE_SHOWCASES,
  workflowSteps: WORKFLOW_STEPS,
  ui: {
    skipToContent: "Skip to content",
    blog: "Blog",
    tutorials: "Tutorials",
    docs: "Docs",
    changelog: "Changelog",
    comparisons: "All comparisons",
    vsFastlane: "Compare to Fastlane",
    community: "Community",
    discord: "Discord",
    joinDiscord: "Join the Discord",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    friends: "Friends",
    redditCommunity: "Reddit community",
    followOnX: "Follow on X",
    followOnThreads: "Follow on Threads",
    followJourney: "Follow my journey",
    madeWithLoveAt: "Made with ❤️ at",
    language: "Language",
    homeLabel: `${SITE_NAME} home`,
    seeInAction: "See it in action",
    read: "Read",
    browseGuides: "Browse all guides",
    submitApp: "Submit your app",
    contactDeveloper: "Contact the developer",
    productLabel: "Product",
    resourcesLabel: "Resources",
    sectionsLabel: "Sections",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "Back to top",
    templateAlt: (name) =>
      `${name} template exported from Screenshot Bro: a row of App Store screenshots with headlines and iPhone frames`,
    templateMeta: (columns, width, height) =>
      `${columns} screenshots, ${width}×${height} px each`,
    startWithTemplate: "Start with this template",
    templatePickerLabel: "Choose a template to preview",
    previousTemplate: "Previous template",
    nextTemplate: "Next template",
    pauseTemplates: "Pause template rotation",
    playTemplates: "Play template rotation",
    showAllTemplates: (count) => `Show all ${count} templates`,
    showFewerTemplates: "Show fewer",
    productHuntAlt:
      "ScreenshotBro App - Design and export beautiful App Store screenshots. | Product Hunt",
    availabilityNote:
      "macOS 15+ and iOS/iPadOS 18+ app | Swift & SwiftUI | Available on the App Store",
  },
  hero: {
    titleLead: "Create & Localize",
    titleAccent: "App Store",
    titleRest: " Screenshots in Minutes",
    descriptionLead:
      "Design once. Localize into 81 languages, generate every device size, and",
    descriptionStrong: "upload directly to App Store Connect",
    descriptionTail:
      "without rebuilding screenshots by hand. All in one native app.",
    videoLabel:
      "Screenshot Bro app demo - designing App Store screenshots with device frames, gradients, and batch export",
  },
  sections: {
    showcases: {
      eyebrow: "Showcases",
      title: "See how the screenshot generator works before you install.",
      description:
        "Batch import, one-click App Store Connect upload, layers, backgrounds, and device frames — the moments most people use to judge whether this saves them time.",
    },
    templates: {
      eyebrow: "Templates",
      title: "{count} templates. Pick one, drop in your screenshots.",
      description:
        "Every project can start from a finished design: headlines, backgrounds, and device frames already laid out. Each preview below is a real export from the app, with only the screenshots swapped in. Change any color, font, or line of copy afterwards.",
    },
    workflow: {
      eyebrow: "Workflow",
      title: "A shorter path from raw screenshots to App Store-ready assets.",
      description:
        "The product is opinionated around one job: create polished screenshot sets without maintaining a pile of one-off design files.",
    },
    features: {
      eyebrow: "Capabilities",
      title:
        "Everything an App Store screenshot tool should do. Nothing it shouldn't.",
      description:
        "The feature set stays focused on layout speed, screenshot consistency, and export sanity. No browser tab, no general-purpose design suite, no repetitive resize work.",
    },
    blog: {
      eyebrow: "From the Blog",
      title: "Guides for shipping better App Store screenshots.",
      description:
        "References and playbooks for sizing, localizing, uploading, and designing App Store and Google Play screenshots that actually convert.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "The questions most people ask before trying it.",
      description:
        "Pricing, requirements, privacy, and how the workflow fits with App Store Connect.",
    },
    appShowcase: {
      eyebrow: "Shipped with Screenshot Bro",
      title: "You'd be in good company.",
      description:
        "Indie apps already using Screenshot Bro for their App Store and Google Play screenshots.",
    },
  },
  problem: {
    story:
      "I built it after spending too much time in Figma redoing App Store screenshots every time copy, gradients, or languages changed. The goal is simple: design the system once, then let the app handle the repetitive parts.",
  },
  download: {
    titleLine1: "Ready to ship",
    titleLine2: "better screenshots?",
    description:
      "Download from the App Store and use the full screenshot workflow on Mac, iPad, or iPhone: setup, design, auto-translation, localization, and export for App Store and Google Play assets.",
  },
  footer: {
    note:
      "Built with SwiftUI. Designed for developers shipping App Store updates.",
  },
};

export function isLocaleCode(value: string | undefined): value is LocaleCode {
  return Boolean(value && LOCALE_CODES.has(value as LocaleCode));
}

export function getLocaleInfo(locale: LocaleCode): LocaleInfo {
  return LOCALES.find((entry) => entry.code === locale) ?? LOCALES[0];
}

// The one way to build a clickable App Store CTA. Sends visitors to the
// storefront for the locale they are reading, so prices, language and ratings
// on the product page match the page they came from. (On a Mac or iPad the
// link hands off to the App Store app, which resolves the app id against the
// signed-in Apple Account instead — the country only shapes the web page.)
export function appStoreCtaUrl(locale: LocaleCode = DEFAULT_LOCALE): string {
  return appStoreProductUrl(getLocaleInfo(locale).storefront);
}

// Every main CTA goes to /download, which offers the App Store and the direct
// download side by side. /download is English-only, so the visitor's storefront
// rides along as ?store= for its App Store button.
export function downloadPageUrl(locale: LocaleCode = DEFAULT_LOCALE): string {
  const storefront = getLocaleInfo(locale).storefront;
  return storefront === DEFAULT_APP_STORE_COUNTRY ? "/download" : `/download?store=${storefront}`;
}

export function getLocaleFromPath(pathname: string): LocaleCode {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocaleCode(segment) ? segment : DEFAULT_LOCALE;
}

// Drops a leading /{locale} segment so a path is always locale-neutral before
// anything prefixes it again. Callers that already hold a clean slug lose
// nothing; callers that pass an already-localized path stop producing
// /pt/pt/blog/... , which is a hard 404 on every locale-prefixed route.
export function stripLocale(path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (segments.length > 0 && isLocaleCode(segments[0])) segments.shift();
  return "/" + segments.join("/");
}

export function localizedPath(locale: LocaleCode, path = "/"): string {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  const normalizedPath = stripLocale(withSlash);
  if (locale === DEFAULT_LOCALE) return normalizedPath;
  if (normalizedPath === "/") return `/${locale}`;
  return `/${locale}${normalizedPath}`;
}

// Routes routes.ts mounts only at the unprefixed URL — there is no `:locale`
// variant, so /es/friends is a 404 rather than a page. Matching is by first path
// segment. Keep in sync with routes.ts.
//
// This is about which URLs *exist*, not about which pages are translated: plenty
// of locale-prefixed routes do exist and still serve English (terms, changelog,
// /vs/...). config/localized-routes.ts is the authority on that, and it is what
// link builders, canonicals and the sitemap consult.
export const GLOBAL_ROUTE_PATHS = [
  "/friends",
  "/sitemap.xml",
  "/llms.txt",
];

const GLOBAL_PATH_SEGMENTS = new Set(
  GLOBAL_ROUTE_PATHS.map((path) => path.split("/")[1]),
);

export function isGlobalPath(path: string): boolean {
  const segment = path.replace(/^\/+/, "").split(/[/#?]/)[0];
  return GLOBAL_PATH_SEGMENTS.has(segment);
}

// Safety net for the doubled prefixes (/pt/pt/blog/...) that a link-building bug
// put into crawler indexes before it was fixed. Collapses every leading locale
// segment down to the first one in a single hop, so /pt/pt/pt/... never turns
// into a redirect chain. Returns null when the path has at most one.
export function dedupedLocalePath(pathname: string): string | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length < 2 || !isLocaleCode(segments[0]) || !isLocaleCode(segments[1])) {
    return null;
  }
  const locale = segments[0];
  let rest = segments.slice(1);
  while (rest.length > 0 && isLocaleCode(rest[0])) rest = rest.slice(1);
  return "/" + [locale, ...rest].join("/");
}

// /es/friends and its kin were never real routes, but crawlers and an older
// locale switcher found them anyway. Map them back to the one canonical URL so
// they 301 instead of 404. Returns null when the path isn't a locale-prefixed
// global route (so callers keep serving their normal 404).
export function canonicalGlobalPath(pathname: string): string | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length < 2 || !isLocaleCode(segments[0])) return null;
  const canonical = "/" + segments.slice(1).join("/");
  // Segment match, same rule as isGlobalPath: /es/friends/<x> → /friends/<x>.
  // An unknown leaf still ends in a 404 after one hop, never a loop.
  return isGlobalPath(canonical) ? canonical : null;
}

export function buildHomeAlternates(path = "/") {
  return LOCALES.map((locale) => ({
    rel: "alternate",
    hrefLang: locale.htmlLang,
    href: localizedPath(locale.code, path),
  }));
}

export function buildOgLocaleMeta(
  current: LocaleCode = DEFAULT_LOCALE,
): { property: string; content: string }[] {
  const currentInfo = getLocaleInfo(current);
  return [
    { property: "og:locale", content: currentInfo.ogLocale },
    ...LOCALES.filter((locale) => locale.code !== current).map((locale) => ({
      property: "og:locale:alternate",
      content: locale.ogLocale,
    })),
  ];
}
