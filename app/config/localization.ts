import type {
  AppScreenshot,
  FaqItem,
  FeatureItem,
  FeatureShowcase,
  NavItem,
  WorkflowStep,
} from "~/config/site";
import {
  appStoreCampaignUrl,
  APP_SCREENSHOTS,
  BETA_BENEFITS,
  FAQS,
  FEATURE_SHOWCASES,
  FEATURES,
  NAV_ITEMS,
  SITE_DESCRIPTION,
  SITE_NAME,
  WORKFLOW_STEPS,
  WITHOUT_BRO_POINTS,
  WITH_BRO_POINTS,
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
  withoutBroPoints: string[];
  withBroPoints: string[];
  featureShowcases: FeatureShowcase[];
  appScreenshots: AppScreenshot[];
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
    tryItNow: string;
    seeDetails: string;
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
    appScreenshots: string;
    previousScreenshot: string;
    nextScreenshot: string;
    goToScreenshot: (index: number) => string;
    slideCount: (index: number, total: number) => string;
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
    problem: SectionCopy;
    workflow: SectionCopy;
    features: SectionCopy;
    screenshots: SectionCopy;
    testimonials: SectionCopy;
    blog: SectionCopy;
    faq: SectionCopy;
    appShowcase: SectionCopy;
  };
  problem: {
    story: string;
    withoutLabel: string;
    withLabel: string;
  };
  testimonials: {
    quote: string;
    name: string;
    app: string;
    icon: string;
  }[];
  download: {
    titleLine1: string;
    titleLine2: string;
    description: string;
  };
  footer: {
    note: string;
  };
};

const EN_TESTIMONIALS = [
  {
    quote:
      "I used to spend a whole afternoon on screenshots after every release. With Screenshot Bro, I set up templates once and now I just swap the new shots in and hit export.",
    name: "Refuells Developer",
    app: "Refuells",
    icon: "/showcase/refuells.jpg",
  },
  {
    quote:
      "The localization feature is a lifesaver. I support 6 languages and exporting all of them used to be the worst part of any update. Now it takes one click.",
    name: "AdRadar Developer",
    app: "AdRadar",
    icon: "/showcase/adradar.jpg",
  },
  {
    quote:
      "Finally a tool that gets out of the way. No Figma plugins, no browser tabs — just a native app that does the job fast.",
    name: "TT Tracker Developer",
    app: "TT Tracker",
    icon: "/showcase/tt-tracker.jpg",
  },
];

const EN_HOME_COPY: HomeCopy = {
  locale: LOCALES[0],
  siteTitle: `${SITE_NAME} — App Store Screenshots on Mac, iPad & iPhone`,
  siteDescription: SITE_DESCRIPTION,
  socialImageAlt:
    "Screenshot Bro — native Mac, iPad and iPhone app for designing App Store and Google Play screenshots with device frames, gradients, and localization",
  primaryCtaLabel: "Get Screenshot Bro",
  navItems: NAV_ITEMS,
  benefits: BETA_BENEFITS,
  faqs: FAQS,
  features: FEATURES,
  withoutBroPoints: WITHOUT_BRO_POINTS,
  withBroPoints: WITH_BRO_POINTS,
  featureShowcases: FEATURE_SHOWCASES,
  appScreenshots: APP_SCREENSHOTS,
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
    tryItNow: "Try it now",
    seeDetails: "See details",
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
    appScreenshots: "App screenshots",
    previousScreenshot: "Previous screenshot",
    nextScreenshot: "Next screenshot",
    goToScreenshot: (index) => `Go to screenshot ${index}`,
    slideCount: (index, total) => `${index} of ${total}`,
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
      "Design once. Localize into 70+ languages, generate every device size, and",
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
    problem: {
      eyebrow: "Why It Exists",
      title:
        "Because shipping one new feature should not mean rebuilding every screenshot.",
      description:
        "Screenshot Bro came from the same loop most app teams hit: a product update lands, then the screenshot file set turns into a repetitive mini-project again.",
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
    screenshots: {
      eyebrow: "Screenshots",
      title: "See it in action.",
      description:
        "App Store screenshots of Screenshot Bro itself - the same editor you use for App Store and Google Play screenshot sets.",
    },
    testimonials: {
      eyebrow: "Developers",
      title: "What developers are saying.",
      description:
        "Real feedback from indie developers using Screenshot Bro in production.",
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
        "The product is early, but the core workflow is already there. These answers handle the main compatibility and export questions.",
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
    withoutLabel: "Without Screenshot Bro",
    withLabel: "With Screenshot Bro",
  },
  testimonials: EN_TESTIMONIALS,
  download: {
    titleLine1: "Ready to ship",
    titleLine2: "better screenshots?",
    description:
      "Download from the App Store and use the full screenshot workflow on Mac or iPad: setup, design, auto-translation, localization, and export for App Store and Google Play assets.",
  },
  footer: {
    note:
      "Built with SwiftUI. Designed for developers shipping App Store updates.",
  },
};

type HomeCopyOverrides = Partial<Omit<HomeCopy, "locale" | "ui" | "sections" | "hero" | "problem" | "download" | "footer">> & {
  ui?: Partial<HomeCopy["ui"]>;
  sections?: Partial<HomeCopy["sections"]>;
  hero?: Partial<HomeCopy["hero"]>;
  problem?: Partial<HomeCopy["problem"]>;
  download?: Partial<HomeCopy["download"]>;
  footer?: Partial<HomeCopy["footer"]>;
};

function localizeFeatures(
  copy: Pick<FeatureItem, "title" | "description">[],
): FeatureItem[] {
  return FEATURES.map((feature, index) => ({
    ...feature,
    ...copy[index],
  }));
}

function localizeFeatureShowcases(
  copy: Pick<FeatureShowcase, "label" | "title" | "description" | "mediaAlt">[],
): FeatureShowcase[] {
  return FEATURE_SHOWCASES.map((showcase, index) => ({
    ...showcase,
    ...copy[index],
  }));
}

function localizeAppScreenshots(
  copy: Pick<AppScreenshot, "alt" | "caption">[],
): AppScreenshot[] {
  return APP_SCREENSHOTS.map((screenshot, index) => ({
    ...screenshot,
    ...copy[index],
  }));
}

function localizeWorkflowSteps(
  copy: Pick<WorkflowStep, "title" | "description">[],
): WorkflowStep[] {
  return WORKFLOW_STEPS.map((step, index) => ({
    ...step,
    ...copy[index],
  }));
}

type CompactLandingCopy = {
  socialImageAlt: string;
  ui: Pick<
    HomeCopy["ui"],
    | "docs"
    | "redditCommunity"
    | "followOnX"
    | "followOnThreads"
    | "homeLabel"
    | "read"
    | "productLabel"
    | "resourcesLabel"
    | "appScreenshots"
    | "productHuntAlt"
  >;
  featureTitles: string[];
  featureDescription: string;
  withoutBroPoints: string[];
  withBroPoints: string[];
  showcaseLabels: string[];
  showcaseTitles: string[];
  showcaseDescription: string;
  screenshotCaptions: string[];
  screenshotAltSuffix: string;
  workflowTitles: string[];
  workflowDescription: string;
  testimonialQuotes: string[];
  developerLabel: string;
};

function compactLandingContent(copy: CompactLandingCopy): HomeCopyOverrides {
  return {
    socialImageAlt: copy.socialImageAlt,
    ui: copy.ui,
    features: FEATURES.map((feature, index) => ({
      ...feature,
      title: copy.featureTitles[index] ?? feature.title,
      description: copy.featureDescription,
    })),
    withoutBroPoints: copy.withoutBroPoints,
    withBroPoints: copy.withBroPoints,
    featureShowcases: FEATURE_SHOWCASES.map((showcase, index) => ({
      ...showcase,
      label: copy.showcaseLabels[index] ?? showcase.label,
      title: copy.showcaseTitles[index] ?? showcase.title,
      description: copy.showcaseDescription,
      mediaAlt: `${copy.showcaseTitles[index] ?? showcase.title} — ${copy.screenshotAltSuffix}`,
    })),
    appScreenshots: APP_SCREENSHOTS.map((screenshot, index) => ({
      ...screenshot,
      caption: copy.screenshotCaptions[index] ?? screenshot.caption,
      alt: `${copy.screenshotCaptions[index] ?? screenshot.caption} — ${copy.screenshotAltSuffix}`,
    })),
    workflowSteps: WORKFLOW_STEPS.map((step, index) => ({
      ...step,
      title: copy.workflowTitles[index] ?? step.title,
      description: copy.workflowDescription,
    })),
    testimonials: EN_TESTIMONIALS.map((testimonial, index) => ({
      ...testimonial,
      quote: copy.testimonialQuotes[index] ?? testimonial.quote,
      name: `${testimonial.app} ${copy.developerLabel}`,
    })),
  };
}

const LOCALIZED_LANDING_CONTENT: Record<Exclude<LocaleCode, "en">, HomeCopyOverrides> = {
  es: {
    socialImageAlt:
      "Screenshot Bro — app nativa para Mac, iPad y iPhone para diseñar capturas de App Store y Google Play con marcos de dispositivo, degradados y localización",
    ui: {
      docs: "Documentación",
      redditCommunity: "Comunidad de Reddit",
      followOnX: "Seguir en X",
      followOnThreads: "Seguir en Threads",
      homeLabel: `Inicio de ${SITE_NAME}`,
      read: "Leer",
      productLabel: "Producto",
      resourcesLabel: "Recursos",
      appScreenshots: "Capturas de la app",
      productHuntAlt:
        "ScreenshotBro App - Diseña y exporta capturas bonitas para App Store. | Product Hunt",
    },
    features: localizeFeatures([
      {
        title: "Edición multi-plantilla",
        description:
          "Edita una vez y actualiza cada variante. Cambia una forma o texto y se aplica a todas tus capturas a la vez.",
      },
      {
        title: "Marcos de dispositivo",
        description:
          'Marcos de iPhone 18 Pro, la serie iPhone 17, iPhone Duo, iPad Pro de 11" y 13", MacBook, iMac, Apple Watch Ultra 3, móviles Android y tablets para capturas de App Store y Google Play. Biseles precisos, colores configurables y valores por fila.',
      },
      {
        title: "Fondos y expansión",
        description:
          "Colores sólidos, degradados lineales, radiales y angulares con editor multipunto, o imágenes en modos rellenar, ajustar, estirar y mosaico. Los fondos pueden extenderse por varias plantillas de una fila.",
      },
      {
        title: "Formas + SVG",
        description:
          "Rectángulos, círculos, estrellas, texto, imágenes, SVG y marcos de dispositivo. Edición de texto inline, contornos, modos de relleno, recorte y controles completos de transformación.",
      },
      {
        title: "Alineación inteligente",
        description:
          "Las guías aparecen al arrastrar para mantener todo alineado. Ajusta con las flechas, duplica con Option-arrastrar y bloquea proporción con Shift-arrastrar.",
      },
      {
        title: "Exportación localizada",
        description:
          "Exporta PNG o JPEG a 1x-3x para múltiples locales. Carpetas organizadas automáticamente por locale y fila para App Store Connect, Google Play y assets de lanzamiento.",
      },
      {
        title: "Subida a App Store Connect",
        description:
          "Subida directa con un clic. Detecta tipos de pantalla por tamaño de fila, empareja locales del proyecto con App Store Connect y reemplaza capturas con validación previa.",
      },
      {
        title: "Agentes de IA y MCP",
        description:
          "Un servidor MCP local y opcional en Mac permite que Claude Code, Claude Desktop o Cursor manejen la app: crear proyectos, colocar filas y formas, importar capturas, traducir, renderizar vistas previas y exportar.",
      },
      {
        title: "Localización integrada",
        description:
          "81 idiomas predefinidos de inglés a árabe, hindi y CJK. Traduce automáticamente el texto faltante y ajusta texto, posición e imágenes por locale con seguimiento de progreso.",
      },
      {
        title: "Nativa para Mac, iPad y iPhone",
        description:
          "Construida con Swift y SwiftUI para Mac, iPad y iPhone. Sin Electron ni pestañas de navegador. Arranque rápido, rendimiento nativo, guardado automático y deshacer/rehacer completo.",
      },
      {
        title: "Sincronización iCloud",
        description:
          "La sincronización opcional con iCloud Drive mantiene tus proyectos disponibles en tus Mac, iPad y iPhone. Mezcla de último cambio con resolución de conflictos segura.",
      },
      {
        title: "Tipografías personalizadas",
        description:
          "Importa archivos .ttf, .otf o .ttc. Usa cualquier tipografía en formas de texto, sin limitarte a las fuentes del sistema.",
      },
      {
        title: "Plantillas de proyecto",
        description:
          "Empieza desde plantillas incluidas con layouts, marcos de dispositivo y fondos preconfigurados. Salta directo al diseño.",
      },
      {
        title: "Atajos de teclado",
        description:
          "Mover, duplicar, cortar, copiar, pegar, ordenar capas, zoom, cambio de locale y selección desde el teclado. Shift para saltos de 10 px, Option para clonar.",
      },
      {
        title: "Privacidad primero",
        description:
          "La traducción automática corre en el dispositivo con Translation de Apple. Sin claves API, cuentas ni seguimiento publicitario: proyectos, fuentes y capturas se quedan en tu equipo.",
      },
      {
        title: "Importación por lotes",
        description:
          "Suelta una carpeta de capturas y deja que el tamaño del dispositivo se detecte desde el nombre. Rellena filas de iPhone, iPad o Mac sin nombrar archivos uno por uno.",
      },
      {
        title: "Plan gratis para siempre",
        description:
          "1 proyecto, 3 filas y 5 plantillas por fila, con todos los marcos, los 81 locales y todos los formatos de exportación. Sin marca de agua, caducidad ni registro.",
      },
    ]),
    withoutBroPoints: [
      "Redimensionar cada captura manualmente en Figma o Photoshop",
      "Copiar y pegar marcos de dispositivo uno por uno entre mesas de trabajo",
      "Reexportar todos los archivos al cambiar un solo color",
      "Duplicarlo todo para cada idioma y perder el control de traducciones",
      "Arrastrar cada PNG a App Store Connect a mano",
    ],
    withBroPoints: [
      "Diseña una plantilla y todas las variantes se actualizan al instante",
      "Añade marcos de dispositivo con un clic y elige modelo y color",
      "Añade varios locales con sobreescrituras de texto por forma",
      "Exporta cada captura, idioma y tamaño con un clic",
      "Sube directo a App Store Connect, sin navegador ni arrastrar archivos",
    ],
    featureShowcases: localizeFeatureShowcases([
      {
        label: "Importación por lotes",
        title: "Arrastra, suelta, listo.",
        description:
          "Arrastra varias capturas a la vez: Screenshot Bro las importa y envuelve cada una automáticamente en su marco de dispositivo. Sin colocación manual ni flujo una por una.",
        mediaAlt:
          "Varias capturas arrastradas que se colocan automáticamente dentro de marcos de dispositivo",
      },
      {
        label: "Subida automática",
        title: "Sube a App Store Connect con un clic.",
        description:
          "Conecta tu clave API una vez y envía las capturas renderizadas al app, versión, display type y locale correctos. Detección automática, validaciones y reemplazo en una pasada.",
        mediaAlt:
          "Subida directa de capturas desde Screenshot Bro a App Store Connect con tipos y locales detectados",
      },
      {
        label: "Formas y capas",
        title: "Constrúyelo capa por capa.",
        description:
          "Añade rectángulos, círculos, estrellas, texto, imágenes y SVG; luego redimensiona, rota y estiliza cada elemento desde el inspector.",
        mediaAlt:
          "Añadir y manipular formas en el lienzo con tiradores de tamaño y controles de estilo",
      },
      {
        label: "Fondos",
        title: "Crea fondos atractivos.",
        description:
          "Usa 12 presets de degradado, crea los tuyos con el editor multipunto o añade imágenes. Los fondos pueden extenderse por varias plantillas y actualizarse en vivo.",
        mediaAlt:
          "Cambio entre presets de degradado, colores sólidos y fondos extendidos en varias plantillas",
      },
      {
        label: "Marcos",
        title: "Personaliza marcos de dispositivo.",
        description:
          "Elige entre iPhone, iPad, MacBook, iMac y Android. Cambia marcos, elige colores y adapta la composición a tu marca sin reimportar capturas.",
        mediaAlt: "Selección y personalización de marcos alrededor de capturas de apps",
      },
    ]),
    appScreenshots: localizeAppScreenshots([
      {
        alt: "Editor de Screenshot Bro con diseño de capturas App Store en varias plantillas y marcos de dispositivo",
        caption: "Diseña capturas bonitas para App Store",
      },
      {
        alt: "Vista de exportación por lotes con todas las capturas listas para subir a App Store",
        caption: "Exporta todo el proyecto de una vez",
      },
      {
        alt: "Selector de plantillas con layouts integrados para iPhone y iPad",
        caption: "Elige entre plantillas integradas",
      },
      {
        alt: "Editor de localización con locale alemán y sobreescrituras de texto por forma",
        caption: "Localiza capturas fácilmente",
      },
      {
        alt: "Selección de marcos con MacBook, iPad e iPhone en el lienzo",
        caption: "Añade marcos de dispositivo reales",
      },
      {
        alt: "Editor de fondos con presets de degradado, selector de color y ángulo",
        caption: "Crea fondos bonitos",
      },
      {
        alt: "Herramientas de formas con SVG, estrellas y elementos vectoriales de colores",
        caption: "Añade SVG, formas e imágenes",
      },
    ]),
    workflowSteps: localizeWorkflowSteps([
      {
        title: "Configura filas",
        description:
          'Elige tamaños de dispositivo: iPhone 17, iPad Pro de 11" o 13", MacBook o iMac. Añade tantas filas como necesites.',
      },
      {
        title: "Diseña y localiza",
        description:
          "Añade marcos, texto, formas y fondo. Crea locales, traduce lo que falte y ajusta cada texto por forma para que cada idioma quede perfecto.",
      },
      {
        title: "Exporta todo",
        description:
          "Pulsa exportar y obtén carpetas organizadas por locale y fila con cada captura a la escala elegida. Un clic.",
      },
      {
        title: "Sube a App Store Connect",
        description:
          "Conecta tu clave API una vez y envía capturas al app, versión, tipo de pantalla y locale correctos sin arrastrar archivos en el navegador.",
      },
    ]),
    testimonials: [
      {
        quote:
          "Antes pasaba toda una tarde con capturas después de cada release. Con Screenshot Bro configuro plantillas una vez, cambio las nuevas capturas y exporto.",
        name: "Desarrollador de Refuells",
        app: "Refuells",
        icon: "/showcase/refuells.jpg",
      },
      {
        quote:
          "La localización me salvó. Mantengo 6 idiomas y exportarlos todos era lo peor de cada actualización. Ahora es un clic.",
        name: "Desarrollador de AdRadar",
        app: "AdRadar",
        icon: "/showcase/adradar.jpg",
      },
      {
        quote:
          "Por fin una herramienta que no estorba. Sin plugins de Figma ni pestañas del navegador: una app nativa que hace el trabajo rápido.",
        name: "Desarrollador de TT Tracker",
        app: "TT Tracker",
        icon: "/showcase/tt-tracker.jpg",
      },
    ],
  },
  zh: compactLandingContent({
    socialImageAlt: "Screenshot Bro — 用设备边框、渐变和本地化制作 App Store 与 Google Play 截图的 Mac、iPad 和 iPhone 原生应用",
    ui: { docs: "文档", redditCommunity: "Reddit 社区", followOnX: "在 X 上关注", followOnThreads: "在 Threads 上关注", homeLabel: `${SITE_NAME} 首页`, read: "阅读", productLabel: "产品", resourcesLabel: "资源", appScreenshots: "应用截图", productHuntAlt: "ScreenshotBro App - 设计并导出精美 App Store 截图。| Product Hunt" },
    featureTitles: ["多模板编辑", "设备边框", "背景与跨模板背景", "形状工具 + SVG", "智能对齐", "本地化导出", "上传到 App Store Connect", "AI 智能体与 MCP", "内建本地化", "原生 Mac 与 iPad", "iCloud 同步", "自定义字体", "项目模板", "键盘快捷键", "隐私优先", "批量图片导入", "永久免费层级"],
    featureDescription: "为多语言商店截图准备的专注工具，保留原生性能、可重复模板和可直接提交的导出结果。",
    withoutBroPoints: ["手动调整每张截图尺寸", "逐个复制设备边框", "改一个颜色就重新导出所有文件", "为每种语言复制全部内容", "手动上传每个 PNG"],
    withBroPoints: ["一个模板更新所有版本", "一键添加设备边框", "按形状添加多语言文本", "一键导出所有语言和尺寸", "直接上传到 App Store Connect"],
    showcaseLabels: ["批量导入", "自动上传", "形状与图层", "背景", "设备边框"],
    showcaseTitles: ["拖入，完成。", "一键上传到 App Store Connect。", "一层一层搭建。", "制作漂亮背景。", "自定义设备边框。"],
    showcaseDescription: "核心工作流展示了 Screenshot Bro 如何减少重复设计、导出和上传步骤。",
    screenshotCaptions: ["设计漂亮的 App Store 截图", "一次导出整个项目", "从内建模板中选择", "轻松本地化截图", "添加真实设备边框", "制作漂亮背景", "添加 SVG、形状和图片"],
    screenshotAltSuffix: "Screenshot Bro 界面截图",
    workflowTitles: ["设置行", "设计并本地化", "全部导出", "上传到 App Store Connect"],
    workflowDescription: "从设备尺寸到多语言导出和上传，整个截图流程都集中在一个原生应用中。",
    testimonialQuotes: ["以前每次发布后，我都要花很久处理截图。现在设置一次模板，替换新截图后直接导出。", "本地化功能非常省时间。多语言导出以前最麻烦，现在只要一键。", "终于有一个不挡路的工具。没有浏览器标签页，就是快速完成工作的原生应用。"],
    developerLabel: "开发者",
  }),
  hi: compactLandingContent({
    socialImageAlt: "Screenshot Bro — Mac, iPad और iPhone के लिए App Store और Google Play screenshots बनाने वाला native ऐप",
    ui: { docs: "दस्तावेज़", redditCommunity: "Reddit समुदाय", followOnX: "X पर follow करें", followOnThreads: "Threads पर follow करें", homeLabel: `${SITE_NAME} होम`, read: "पढ़ें", productLabel: "उत्पाद", resourcesLabel: "संसाधन", appScreenshots: "ऐप स्क्रीनशॉट", productHuntAlt: "ScreenshotBro App - सुंदर App Store screenshots design और export करें. | Product Hunt" },
    featureTitles: ["मल्टी-टेम्पलेट एडिटिंग", "डिवाइस फ्रेम", "बैकग्राउंड और स्पैनिंग", "शेप टूल्स + SVG", "स्मार्ट अलाइनमेंट", "लोकलाइज्ड एक्सपोर्ट", "App Store Connect अपलोड", "AI एजेंट और MCP", "बिल्ट-इन लोकलाइजेशन", "नेटिव Mac, iPad और iPhone", "iCloud सिंक", "कस्टम फॉन्ट", "प्रोजेक्ट टेम्पलेट", "कीबोर्ड शॉर्टकट", "प्राइवेसी-फर्स्ट", "बैच इमेज इंपोर्ट", "हमेशा फ्री प्लान"],
    featureDescription: "Multi-language store screenshots के लिए focused tools, native performance, reusable templates और upload-ready exports के साथ।",
    withoutBroPoints: ["हर screenshot manually resize करना", "डिवाइस फ्रेम एक-एक करके copy करना", "एक color बदलने पर सब export करना", "हर language के लिए सब duplicate करना", "हर PNG manually upload करना"],
    withBroPoints: ["एक template से सभी variants update", "एक click में device frame जोड़ें", "Per-shape text से locales जोड़ें", "हर language और size one click में export", "App Store Connect पर direct upload"],
    showcaseLabels: ["बैच इंपोर्ट", "ऑटो अपलोड", "शेप्स और लेयर्स", "बैकग्राउंड", "डिवाइस फ्रेम"],
    showcaseTitles: ["खींचें, छोड़ें, हो गया।", "App Store Connect पर एक क्लिक में अपलोड।", "लेयर दर लेयर बनाएं।", "सुंदर बैकग्राउंड बनाएं।", "डिवाइस फ्रेम कस्टमाइज़ करें।"],
    showcaseDescription: "मुख्य वर्कफ़्लो दिखाता है कि Screenshot Bro दोहराव वाले डिज़ाइन, एक्सपोर्ट और अपलोड चरणों को कैसे कम करता है।",
    screenshotCaptions: ["सुंदर App Store स्क्रीनशॉट डिज़ाइन करें", "पूरा प्रोजेक्ट एक साथ एक्सपोर्ट करें", "बिल्ट-इन टेम्पलेट चुनें", "स्क्रीनशॉट आसानी से लोकलाइज़ करें", "असली डिवाइस फ्रेम जोड़ें", "सुंदर बैकग्राउंड बनाएं", "SVG, शेप्स और इमेज जोड़ें"],
    screenshotAltSuffix: "Screenshot Bro इंटरफ़ेस स्क्रीनशॉट",
    workflowTitles: ["पंक्तियां सेट करें", "डिजाइन और लोकलाइज करें", "सब एक्सपोर्ट करें", "App Store Connect पर अपलोड"],
    workflowDescription: "डिवाइस साइज़ से मल्टी-लैंग्वेज एक्सपोर्ट और अपलोड तक पूरा स्क्रीनशॉट वर्कफ़्लो एक नेटिव ऐप में रहता है।",
    testimonialQuotes: ["हर release के बाद screenshots में बहुत समय लगता था। अब templates एक बार set करता हूं और new shots export कर देता हूं।", "Localization feature बहुत time बचाता है। Multiple languages export करना अब one click है।", "आखिरकार ऐसा tool मिला जो रास्ते में नहीं आता — browser tabs नहीं, fast native app।"],
    developerLabel: "डेवलपर",
  }),
  fr: compactLandingContent({
    socialImageAlt: "Screenshot Bro — app native Mac, iPad et iPhone pour créer des captures App Store et Google Play avec cadres, dégradés et localisation",
    ui: { docs: "Documentation", redditCommunity: "Communauté Reddit", followOnX: "Suivre sur X", followOnThreads: "Suivre sur Threads", homeLabel: `Accueil ${SITE_NAME}`, read: "Lire", productLabel: "Produit", resourcesLabel: "Ressources", appScreenshots: "Captures de l'app", productHuntAlt: "ScreenshotBro App - Créez et exportez de belles captures App Store. | Product Hunt" },
    featureTitles: ["Édition multi-template", "Cadres d'appareils", "Arrière-plans étendus", "Outils de formes + SVG", "Alignement intelligent", "Export localisé", "Envoi App Store Connect", "Agents IA et MCP", "Localisation intégrée", "Natif Mac, iPad et iPhone", "Sync iCloud", "Polices personnalisées", "Templates de projet", "Raccourcis clavier", "Confidentialité d'abord", "Import d'images groupé", "Version gratuite permanente"],
    featureDescription: "Des outils ciblés pour des captures de store multilingues, avec performances natives, templates réutilisables et exports prêts à envoyer.",
    withoutBroPoints: ["Redimensionner chaque capture à la main", "Copier les cadres un par un", "Réexporter tout pour une couleur", "Tout dupliquer pour chaque langue", "Envoyer chaque PNG manuellement"],
    withBroPoints: ["Un template met tout à jour", "Ajoutez un cadre en un clic", "Ajoutez des textes par locale", "Exportez toutes les langues en un clic", "Envoyez directement à App Store Connect"],
    showcaseLabels: ["Import groupé", "Envoi auto", "Formes et calques", "Arrière-plans", "Cadres"],
    showcaseTitles: ["Glissez, déposez, terminé.", "App Store Connect en un clic.", "Construisez calque par calque.", "Créez de beaux fonds.", "Personnalisez les cadres."],
    showcaseDescription: "Le flux principal montre comment Screenshot Bro réduit les étapes répétitives de design, d'export et d'envoi.",
    screenshotCaptions: ["Créez de belles captures App Store", "Exportez tout le projet d'un coup", "Choisissez des templates intégrés", "Localisez facilement vos captures", "Ajoutez de vrais cadres d'appareils", "Créez de beaux arrière-plans", "Ajoutez SVG, formes et images"],
    screenshotAltSuffix: "capture de l'interface Screenshot Bro",
    workflowTitles: ["Configurez les rangées", "Créez et localisez", "Exportez tout", "Envoyez à App Store Connect"],
    workflowDescription: "Des tailles d'appareils à l'export multilingue et à l'envoi, tout le flux reste dans une app native.",
    testimonialQuotes: ["Avant, les captures prenaient tout un après-midi après chaque sortie. Maintenant je remplace les images et j'exporte.", "La localisation fait gagner beaucoup de temps. Exporter plusieurs langues se fait maintenant en un clic.", "Enfin un outil qui ne gêne pas : pas d'onglets navigateur, juste une app native rapide."],
    developerLabel: "développeur",
  }),
  ar: compactLandingContent({
    socialImageAlt: "Screenshot Bro — تطبيق أصلي على Mac و iPad و iPhone لتصميم لقطات App Store و Google Play بإطارات وتدرجات وتوطين",
    ui: { docs: "الوثائق", redditCommunity: "مجتمع Reddit", followOnX: "تابع على X", followOnThreads: "تابع على Threads", homeLabel: `صفحة ${SITE_NAME} الرئيسية`, read: "اقرأ", productLabel: "المنتج", resourcesLabel: "الموارد", appScreenshots: "لقطات التطبيق", productHuntAlt: "ScreenshotBro App - صمّم وصدّر لقطات App Store جميلة. | Product Hunt" },
    featureTitles: ["تحرير متعدد القوالب", "إطارات الأجهزة", "الخلفيات والامتداد", "أدوات الأشكال + SVG", "محاذاة ذكية", "تصدير موطّن", "رفع إلى App Store Connect", "وكلاء الذكاء الاصطناعي و MCP", "توطين مدمج", "أصلي على Mac و iPad و iPhone", "مزامنة iCloud", "خطوط مخصصة", "قوالب المشاريع", "اختصارات لوحة المفاتيح", "الخصوصية أولاً", "استيراد صور جماعي", "خطة مجانية دائماً"],
    featureDescription: "أدوات مركزة للقطات متجر متعددة اللغات مع أداء أصلي وقوالب قابلة لإعادة الاستخدام وتصدير جاهز للرفع.",
    withoutBroPoints: ["تغيير حجم كل لقطة يدوياً", "نسخ الإطارات واحداً تلو الآخر", "إعادة تصدير كل شيء بسبب لون واحد", "تكرار كل شيء لكل لغة", "رفع كل PNG يدوياً"],
    withBroPoints: ["قالب واحد يحدّث كل النسخ", "إضافة إطار بنقرة واحدة", "نصوص لكل لغة ولكل شكل", "تصدير كل اللغات بنقرة", "رفع مباشر إلى App Store Connect"],
    showcaseLabels: ["استيراد جماعي", "رفع تلقائي", "أشكال وطبقات", "خلفيات", "إطارات الأجهزة"],
    showcaseTitles: ["اسحب، أفلت، انتهى.", "رفع App Store Connect بنقرة.", "ابنِه طبقة بعد طبقة.", "اصنع خلفيات جميلة.", "خصص إطارات الأجهزة."],
    showcaseDescription: "يوضح سير العمل كيف يقلل Screenshot Bro خطوات التصميم والتصدير والرفع المتكررة.",
    screenshotCaptions: ["صمّم لقطات App Store جميلة", "صدّر المشروع كله مرة واحدة", "اختر من القوالب المدمجة", "وطّن اللقطات بسهولة", "أضف إطارات أجهزة حقيقية", "اصنع خلفيات جميلة", "أضف SVG وأشكالاً وصوراً"],
    screenshotAltSuffix: "لقطة من واجهة Screenshot Bro",
    workflowTitles: ["أعدّ الصفوف", "صمّم ووطّن", "صدّر الكل", "ارفع إلى App Store Connect"],
    workflowDescription: "من أحجام الأجهزة إلى التصدير متعدد اللغات والرفع، يبقى سير اللقطات داخل تطبيق أصلي واحد.",
    testimonialQuotes: ["كانت اللقطات تستغرق وقتاً طويلاً بعد كل إصدار. الآن أبدل الصور في القوالب وأصدّر.", "التوطين يوفر الكثير من الوقت. تصدير عدة لغات أصبح بنقرة واحدة.", "أخيراً أداة لا تعيق العمل: لا تبويبات متصفح، فقط تطبيق أصلي سريع."],
    developerLabel: "مطوّر",
  }),
  de: compactLandingContent({
    socialImageAlt: "Screenshot Bro — native Mac-, iPad- und iPhone-App für App Store- und Google Play-Screenshots mit Geräterahmen, Verläufen und Lokalisierung",
    ui: { docs: "Dokumentation", redditCommunity: "Reddit-Community", followOnX: "Auf X folgen", followOnThreads: "Auf Threads folgen", homeLabel: `${SITE_NAME} Startseite`, read: "Lesen", productLabel: "Produkt", resourcesLabel: "Ressourcen", appScreenshots: "App-Screenshots", productHuntAlt: "ScreenshotBro App - Schöne App-Store-Screenshots gestalten und exportieren. | Product Hunt" },
    featureTitles: ["Multi-Template-Bearbeitung", "Geräterahmen", "Hintergründe & Spanning", "Formwerkzeuge + SVG", "Intelligente Ausrichtung", "Lokalisierter Export", "Upload zu App Store Connect", "KI-Agenten & MCP", "Lokalisierung integriert", "Nativ für Mac, iPad & iPhone", "iCloud-Synchronisierung", "Eigene Schriften", "Projektvorlagen", "Tastaturkürzel", "Datenschutz zuerst", "Batch-Bildimport", "Kostenlos dauerhaft"],
    featureDescription: "Fokussierte Werkzeuge für mehrsprachige Store-Screenshots mit nativer Performance, wiederverwendbaren Templates und uploadfertigen Exporten.",
    withoutBroPoints: ["Jeden Screenshot manuell skalieren", "Geräterahmen einzeln kopieren", "Alles wegen einer Farbe neu exportieren", "Alles pro Sprache duplizieren", "Jedes PNG manuell hochladen"],
    withBroPoints: ["Ein Template aktualisiert alle Varianten", "Geräterahmen per Klick hinzufügen", "Texte pro Locale und Form pflegen", "Alle Sprachen mit einem Klick exportieren", "Direkt zu App Store Connect hochladen"],
    showcaseLabels: ["Batch-Import", "Auto-Upload", "Formen & Ebenen", "Hintergründe", "Geräterahmen"],
    showcaseTitles: ["Ziehen, ablegen, fertig.", "App Store Connect mit einem Klick.", "Ebene für Ebene aufbauen.", "Schöne Hintergründe erstellen.", "Geräterahmen anpassen."],
    showcaseDescription: "Der Kernworkflow zeigt, wie Screenshot Bro wiederholte Design-, Export- und Upload-Schritte reduziert.",
    screenshotCaptions: ["Schöne App-Store-Screenshots gestalten", "Ganzes Projekt auf einmal exportieren", "Integrierte Vorlagen auswählen", "Screenshots einfach lokalisieren", "Echte Geräterahmen hinzufügen", "Schöne Hintergründe erstellen", "SVGs, Formen und Bilder hinzufügen"],
    screenshotAltSuffix: "Screenshot der Screenshot-Bro-Oberfläche",
    workflowTitles: ["Zeilen einrichten", "Gestalten & lokalisieren", "Alles exportieren", "Zu App Store Connect hochladen"],
    workflowDescription: "Von Gerätegrößen bis Mehrsprachenexport und Upload bleibt der gesamte Screenshot-Workflow in einer nativen App.",
    testimonialQuotes: ["Früher dauerten Screenshots nach jedem Release ewig. Jetzt tausche ich Bilder in Templates aus und exportiere.", "Lokalisierung spart enorm Zeit. Mehrere Sprachen zu exportieren ist jetzt ein Klick.", "Endlich ein Tool, das nicht stört: keine Browser-Tabs, nur eine schnelle native App."],
    developerLabel: "Entwickler",
  }),
  ja: compactLandingContent({
    socialImageAlt: "Screenshot Bro — App Store・Google Playスクリーンショットをデバイスフレーム、グラデーション、ローカライズ付きで作成するMac/iPad/iPhoneネイティブアプリ",
    ui: { docs: "ドキュメント", redditCommunity: "Redditコミュニティ", followOnX: "Xでフォロー", followOnThreads: "Threadsでフォロー", homeLabel: `${SITE_NAME} ホーム`, read: "読む", productLabel: "製品", resourcesLabel: "リソース", appScreenshots: "アプリのスクリーンショット", productHuntAlt: "ScreenshotBro App - 美しいApp Storeスクリーンショットを作成・書き出し。| Product Hunt" },
    featureTitles: ["マルチテンプレート編集", "デバイスフレーム", "背景とスパン", "図形ツール + SVG", "スマート整列", "ローカライズ書き出し", "App Store Connectアップロード", "AIエージェントとMCP", "内蔵ローカライズ", "MacとiPadにネイティブ対応", "iCloud同期", "カスタムフォント", "プロジェクトテンプレート", "キーボードショートカット", "プライバシー重視", "画像の一括読み込み", "ずっと無料のプラン"],
    featureDescription: "多言語ストア用スクリーンショットに特化したツール群。ネイティブ性能、再利用可能なテンプレート、提出しやすい書き出しを備えています。",
    withoutBroPoints: ["各スクリーンショットを手動でリサイズ", "フレームを一つずつコピー", "色変更だけで全ファイルを書き出し直し", "言語ごとにすべて複製", "各PNGを手動アップロード"],
    withBroPoints: ["1つのテンプレートで全バリエーション更新", "ワンクリックでフレーム追加", "形状ごとにlocaleテキストを管理", "全言語を一括書き出し", "App Store Connectへ直接アップロード"],
    showcaseLabels: ["一括読み込み", "自動アップロード", "図形とレイヤー", "背景", "デバイスフレーム"],
    showcaseTitles: ["ドラッグして完了。", "App Store Connectへワンクリック。", "レイヤーごとに作成。", "美しい背景を作成。", "フレームをカスタマイズ。"],
    showcaseDescription: "Screenshot Broが繰り返しのデザイン、書き出し、アップロード作業を減らす流れを紹介します。",
    screenshotCaptions: ["美しいApp Storeスクリーンショットを作成", "プロジェクト全体を一括書き出し", "内蔵テンプレートを選択", "簡単にローカライズ", "本物のデバイスフレームを追加", "美しい背景を作成", "SVG、図形、画像を追加"],
    screenshotAltSuffix: "Screenshot Broのインターフェイス画像",
    workflowTitles: ["行を設定", "デザインとローカライズ", "すべて書き出し", "App Store Connectへアップロード"],
    workflowDescription: "デバイスサイズから多言語書き出しとアップロードまで、スクリーンショット作業を1つのネイティブアプリで完結できます。",
    testimonialQuotes: ["以前はリリース後のスクリーンショット作業に時間がかかっていました。今はテンプレートに画像を差し替えて書き出すだけです。", "ローカライズ機能で大幅に時間を節約できます。複数言語の書き出しがワンクリックになりました。", "作業を邪魔しないツールです。ブラウザタブではなく、速いネイティブアプリです。"],
    developerLabel: "開発者",
  }),
  pt: compactLandingContent({
    socialImageAlt: "Screenshot Bro — app nativo para Mac, iPad e iPhone para criar capturas da App Store e Google Play com molduras, gradientes e localização",
    ui: { docs: "Documentação", redditCommunity: "Comunidade Reddit", followOnX: "Seguir no X", followOnThreads: "Seguir no Threads", homeLabel: `Início do ${SITE_NAME}`, read: "Ler", productLabel: "Produto", resourcesLabel: "Recursos", appScreenshots: "Capturas de tela do app", productHuntAlt: "ScreenshotBro App - Crie e exporte belas capturas da App Store. | Product Hunt" },
    featureTitles: ["Edição multi-template", "Molduras de dispositivos", "Fundos e expansão", "Formas + SVG", "Alinhamento inteligente", "Exportação localizada", "Envio ao App Store Connect", "Agentes de IA e MCP", "Localização integrada", "Nativo para Mac, iPad e iPhone", "Sincronização iCloud", "Fontes personalizadas", "Modelos de projeto", "Atalhos de teclado", "Privacidade primeiro", "Importação em lote", "Plano grátis para sempre"],
    featureDescription: "Ferramentas focadas para capturas de loja em vários idiomas, com desempenho nativo, modelos reutilizáveis e exportações prontas para envio.",
    withoutBroPoints: ["Redimensionar cada captura manualmente", "Copiar molduras uma por uma", "Reexportar tudo por uma cor", "Duplicar tudo para cada idioma", "Enviar cada PNG manualmente"],
    withBroPoints: ["Um modelo atualiza todas as variantes", "Adicione molduras com um clique", "Gerencie textos por locale e forma", "Exporte todos os idiomas em um clique", "Envie direto ao App Store Connect"],
    showcaseLabels: ["Importação em lote", "Envio automático", "Formas e camadas", "Fundos", "Molduras"],
    showcaseTitles: ["Arraste, solte, pronto.", "App Store Connect em um clique.", "Monte camada por camada.", "Crie fundos bonitos.", "Personalize molduras."],
    showcaseDescription: "O fluxo principal mostra como o Screenshot Bro reduz etapas repetitivas de design, exportação e envio.",
    screenshotCaptions: ["Crie belas capturas da App Store", "Exporte o projeto inteiro de uma vez", "Escolha modelos integrados", "Localize capturas facilmente", "Adicione molduras reais", "Crie belos fundos", "Adicione SVGs, formas e imagens"],
    screenshotAltSuffix: "captura da interface do Screenshot Bro",
    workflowTitles: ["Configure linhas", "Projete e localize", "Exporte tudo", "Envie ao App Store Connect"],
    workflowDescription: "Dos tamanhos de dispositivo à exportação em vários idiomas e envio, todo o fluxo fica em um app nativo.",
    testimonialQuotes: ["Antes eu gastava muito tempo em capturas após cada lançamento. Agora troco imagens nos modelos e exporto.", "A localização economiza muito tempo. Exportar vários idiomas agora leva um clique.", "Finalmente uma ferramenta que não atrapalha: sem abas de navegador, só um app nativo rápido."],
    developerLabel: "desenvolvedor",
  }),
  it: compactLandingContent({
    socialImageAlt: "Screenshot Bro — app nativa per Mac, iPad e iPhone per creare screenshot App Store e Google Play con cornici, gradienti e localizzazione",
    ui: { docs: "Documentazione", redditCommunity: "Community Reddit", followOnX: "Segui su X", followOnThreads: "Segui su Threads", homeLabel: `Home di ${SITE_NAME}`, read: "Leggi", productLabel: "Prodotto", resourcesLabel: "Risorse", appScreenshots: "Screenshot dell'app", productHuntAlt: "ScreenshotBro App - Progetta ed esporta splendidi screenshot App Store. | Product Hunt" },
    featureTitles: ["Modifica multi-template", "Cornici dispositivo", "Sfondi estesi", "Strumenti forme + SVG", "Allineamento intelligente", "Export localizzato", "Upload App Store Connect", "Agenti IA e MCP", "Localizzazione integrata", "Nativa Mac, iPad e iPhone", "Sync iCloud", "Font personalizzati", "Template progetto", "Scorciatoie da tastiera", "Privacy prima di tutto", "Import batch", "Piano gratis per sempre"],
    featureDescription: "Strumenti mirati per screenshot store multilingue, con prestazioni native, template riutilizzabili ed export pronti per l'upload.",
    withoutBroPoints: ["Ridimensionare ogni screenshot manualmente", "Copiare cornici una alla volta", "Riesportare tutto per un colore", "Duplicare tutto per ogni lingua", "Caricare ogni PNG manualmente"],
    withBroPoints: ["Un template aggiorna tutte le varianti", "Aggiungi cornici con un clic", "Gestisci testi per locale e forma", "Esporta tutte le lingue in un clic", "Carica diretto su App Store Connect"],
    showcaseLabels: ["Import batch", "Upload automatico", "Forme e livelli", "Sfondi", "Cornici"],
    showcaseTitles: ["Trascina, rilascia, fatto.", "App Store Connect in un clic.", "Costruisci livello per livello.", "Crea sfondi belli.", "Personalizza le cornici."],
    showcaseDescription: "Il flusso principale mostra come Screenshot Bro riduce passaggi ripetitivi di design, export e upload.",
    screenshotCaptions: ["Crea bellissimi screenshot App Store", "Esporta l'intero progetto insieme", "Scegli template integrati", "Localizza screenshot facilmente", "Aggiungi cornici reali", "Crea sfondi belli", "Aggiungi SVG, forme e immagini"],
    screenshotAltSuffix: "schermata dell'interfaccia Screenshot Bro",
    workflowTitles: ["Configura righe", "Progetta e localizza", "Esporta tutto", "Carica su App Store Connect"],
    workflowDescription: "Dalle dimensioni dispositivo all'export multilingue e all'upload, tutto il workflow resta in un'app nativa.",
    testimonialQuotes: ["Prima perdevo molto tempo sugli screenshot dopo ogni release. Ora cambio le immagini nei template ed esporto.", "La localizzazione fa risparmiare tantissimo tempo. Esportare più lingue ora richiede un clic.", "Finalmente uno strumento che non intralcia: niente schede browser, solo un'app nativa veloce."],
    developerLabel: "sviluppatore",
  }),
  ko: {
    socialImageAlt: "Screenshot Bro — Mac, iPad 및 iPhone용 네이티브 앱으로 App Store와 Google Play 스크린샷을 디바이스 프레임, 그라디언트, 현지화와 함께 제작",
    ui: { docs: "문서", redditCommunity: "Reddit 커뮤니티", followOnX: "X에서 팔로우", followOnThreads: "Threads에서 팔로우", homeLabel: `${SITE_NAME} 홈`, read: "읽기", productLabel: "제품", resourcesLabel: "리소스", appScreenshots: "앱 스크린샷", productHuntAlt: "ScreenshotBro App - 아름다운 App Store 스크린샷을 디자인하고 내보내세요. | Product Hunt" },
    features: localizeFeatures([
      { title: "멀티 템플릿 편집", description: "한 번 편집하면 모든 변형이 업데이트됩니다. 도형이나 텍스트를 바꾸면 모든 스크린샷에 동시에 반영됩니다." },
      { title: "디바이스 프레임", description: "iPhone, iPad, MacBook, iMac, Android 프레임으로 App Store와 Google Play 스크린샷을 만들 수 있습니다. 정확한 베젤과 색상 설정을 지원합니다." },
      { title: "배경과 확장", description: "단색, 여러 종류의 그라디언트, 이미지 배경을 지원하며 한 행의 여러 템플릿에 배경을 이어서 적용할 수 있습니다." },
      { title: "도형 도구 + SVG", description: "사각형, 원, 별, 텍스트, 이미지, SVG, 디바이스 프레임을 추가하고 스타일과 변형을 조정할 수 있습니다." },
      { title: "스마트 정렬", description: "드래그할 때 스냅 가이드가 표시됩니다. 방향키로 이동하고 Option 드래그로 복제하며 Shift로 비율을 고정합니다." },
      { title: "현지화 내보내기", description: "여러 locale에 대해 PNG 또는 JPEG를 1x-3x로 내보내고 언어와 행별 폴더로 자동 정리합니다." },
      { title: "App Store Connect 업로드", description: "디스플레이 유형 감지, locale 매칭, 사전 검사를 거쳐 App Store Connect에 원클릭 업로드합니다." },
      { title: "AI 에이전트와 MCP", description: "Mac에서 선택적으로 켜는 로컬 MCP 서버를 통해 Claude Code, Claude Desktop, Cursor가 프로젝트 생성, 행과 도형 배치, 스크린샷 가져오기, 번역, 미리보기 렌더링, 내보내기를 대신 수행합니다." },
      { title: "내장 현지화", description: "81개 언어 프리셋, 온디바이스 자동 번역, 도형별 텍스트·위치·이미지 재정의를 지원합니다." },
      { title: "Mac, iPad 및 iPhone 네이티브", description: "Swift와 SwiftUI로 제작되었습니다. Electron이나 브라우저 탭 없이 빠르게 실행되고 자동 저장을 지원합니다." },
      { title: "iCloud 동기화", description: "선택형 iCloud Drive 동기화로 Mac과 iPad에서 프로젝트를 사용할 수 있습니다." },
      { title: "사용자 지정 폰트", description: ".ttf, .otf, .ttc 파일을 가져와 텍스트 도형에서 원하는 서체를 사용할 수 있습니다." },
      { title: "프로젝트 템플릿", description: "레이아웃, 디바이스 프레임, 배경이 미리 설정된 내장 템플릿으로 바로 시작하세요." },
      { title: "키보드 단축키", description: "이동, 복제, 잘라내기/복사/붙여넣기, 레이어 순서, 줌, locale 전환, 선택을 키보드로 처리합니다." },
      { title: "개인정보 우선", description: "자동 번역은 Apple Translation을 통해 기기에서 실행됩니다. API 키, 서버, 광고 추적이 없습니다." },
      { title: "이미지 일괄 가져오기", description: "스크린샷 폴더를 드롭하면 파일명에서 디바이스 크기를 감지해 행을 일괄로 채웁니다." },
      { title: "영구 무료 플랜", description: "1개 프로젝트, 3개 행, 행당 5개 템플릿, 모든 프레임, 81개 locale, 모든 내보내기 형식. 워터마크와 가입이 없습니다." },
    ]),
    withoutBroPoints: ["Figma나 Photoshop에서 각 스크린샷을 수동으로 리사이즈", "아트보드마다 디바이스 프레임을 하나씩 복사", "색상 하나를 바꿔도 모든 파일을 다시 내보내기", "언어마다 모든 것을 복제하고 번역 상태를 잃어버리기", "각 PNG를 App Store Connect에 직접 드래그 앤 드롭"],
    withBroPoints: ["템플릿 하나로 모든 변형을 즉시 업데이트", "클릭 한 번으로 디바이스 프레임과 색상 선택", "도형별 텍스트 재정의로 여러 locale 추가", "모든 스크린샷, 언어, 크기를 한 번에 내보내기", "브라우저 없이 App Store Connect에 직접 업로드"],
    featureShowcases: localizeFeatureShowcases([
      { label: "일괄 가져오기", title: "드래그하고 놓으면 끝.", description: "여러 스크린샷을 한 번에 드롭하면 Screenshot Bro가 가져와 각각을 디바이스 프레임에 자동으로 배치합니다.", mediaAlt: "여러 스크린샷이 자동으로 디바이스 프레임에 들어가는 모습" },
      { label: "자동 업로드", title: "App Store Connect에 원클릭 업로드.", description: "API 키를 한 번 연결하면 올바른 앱, 버전, 디스플레이 유형, locale로 스크린샷을 보냅니다.", mediaAlt: "Screenshot Bro에서 App Store Connect로 스크린샷 업로드" },
      { label: "도형과 레이어", title: "레이어별로 완성하세요.", description: "도형, 텍스트, 이미지, SVG를 추가하고 크기, 회전, 색상, 그라디언트, 외곽선을 조정합니다.", mediaAlt: "캔버스에서 도형을 편집하는 모습" },
      { label: "배경", title: "멋진 배경 만들기.", description: "프리셋, 사용자 지정 그라디언트, 이미지를 사용하고 여러 템플릿에 걸친 배경을 만들 수 있습니다.", mediaAlt: "그라디언트와 확장 배경을 전환하는 모습" },
      { label: "디바이스 프레임", title: "프레임을 맞춤 설정.", description: "iPhone, iPad, MacBook, iMac, Android를 선택하고 색상을 바꿔 브랜드에 맞춥니다.", mediaAlt: "앱 스크린샷 주변의 디바이스 프레임을 선택하고 조정" },
    ]),
    appScreenshots: localizeAppScreenshots([
      { alt: "여러 템플릿과 디바이스 프레임을 보여주는 Screenshot Bro 편집기", caption: "아름다운 App Store 스크린샷 디자인" },
      { alt: "업로드 준비가 된 프로젝트 스크린샷 일괄 내보내기 화면", caption: "전체 프로젝트를 한 번에 내보내기" },
      { alt: "iPhone 및 iPad용 내장 템플릿 선택기", caption: "내장 템플릿 선택" },
      { alt: "독일어 locale과 텍스트 재정의를 보여주는 현지화 편집기", caption: "스크린샷을 쉽게 현지화" },
      { alt: "MacBook, iPad, iPhone 프레임 선택 화면", caption: "실제 디바이스 프레임 추가" },
      { alt: "그라디언트와 색상 선택기가 있는 배경 편집기", caption: "아름다운 배경 만들기" },
      { alt: "SVG와 벡터 요소를 포함한 도형 도구", caption: "SVG, 도형, 이미지 추가" },
    ]),
    workflowSteps: localizeWorkflowSteps([
      { title: "행 설정", description: "iPhone, iPad Pro, MacBook, iMac 크기를 선택하고 필요한 만큼 행을 추가합니다." },
      { title: "디자인 및 현지화", description: "프레임, 텍스트, 도형, 배경을 추가하고 locale과 텍스트 재정의를 조정합니다." },
      { title: "모두 내보내기", description: "선택한 배율의 스크린샷을 locale과 행별 폴더로 정리해 받습니다." },
      { title: "App Store Connect 업로드", description: "API 키를 연결하고 올바른 앱, 버전, 디스플레이 유형, locale로 스크린샷을 보냅니다." },
    ]),
    testimonials: [
      { quote: "예전에는 릴리스 후 스크린샷 작업에 오후를 통째로 썼습니다. Screenshot Bro에서는 템플릿을 한 번 만들고 새 이미지만 바꿔 내보냅니다.", name: "Refuells 개발자", app: "Refuells", icon: "/showcase/refuells.jpg" },
      { quote: "현지화 기능이 정말 큰 도움이 됩니다. 6개 언어를 지원하는데 예전에는 내보내기가 가장 힘들었습니다. 이제는 한 번 클릭이면 됩니다.", name: "AdRadar 개발자", app: "AdRadar", icon: "/showcase/adradar.jpg" },
      { quote: "드디어 작업을 방해하지 않는 도구입니다. Figma 플러그인도 브라우저 탭도 없이 빠른 네이티브 앱입니다.", name: "TT Tracker 개발자", app: "TT Tracker", icon: "/showcase/tt-tracker.jpg" },
    ],
  },
  uk: compactLandingContent({
    socialImageAlt: "Screenshot Bro — нативний додаток для Mac, iPad та iPhone для дизайну скриншотів App Store і Google Play з рамками пристроїв, градієнтами та локалізацією",
    ui: { docs: "Документація", redditCommunity: "Спільнота в Reddit", followOnX: "Стежити в X", followOnThreads: "Стежити в Threads", homeLabel: `${SITE_NAME} Головна`, read: "Читати", productLabel: "Продукт", resourcesLabel: "Ресурси", appScreenshots: "Скриншоти додатку", productHuntAlt: "ScreenshotBro App - Створюйте та експортуйте красиві скриншоти для App Store. | Product Hunt" },
    featureTitles: ["Мульти-шаблонне редагування", "Рамки пристроїв", "Фони та розтягування", "Інструменти фігур + SVG", "Розумне вирівнювання", "Локалізований експорт", "Завантаження в App Store Connect", "ШІ-агенти та MCP", "Вбудована локалізація", "Нативно для Mac, iPad та iPhone", "Синхронізація iCloud", "Власні шрифти", "Шаблони проектів", "Гарячі клавіші", "Конфіденційність понад усе", "Пакетний імпорт зображень", "Назавжди безкоштовний тариф"],
    featureDescription: "Спеціалізовані інструменти для багатомовних скриншотів магазинів із нативною швидкістю, шаблонами для повторного використання та експортом, готовим до завантаження.",
    withoutBroPoints: ["Ручна зміна розміру кожного скриншота у Figma або Photoshop", "Копіювання рамок пристроїв по одній між артбордами", "Повторний експорт усіх файлів через зміну одного кольору", "Дублювання всього для кожної мови та втрата контролю над перекладами", "Ручне перетягування кожного PNG в App Store Connect"],
    withBroPoints: ["Один шаблон оновлює всі варіанти миттєво", "Додавання рамок пристроїв в один клік із вибором моделі та кольору", "Додавання локалей із перевизначенням тексту для кожної фігури", "Експорт усіх скриншотів, мов і розмірів в один клік", "Пряме завантаження в App Store Connect без браузера"],
    showcaseLabels: ["Пакетний імпорт", "Автозавантаження", "Фігури та шари", "Фони", "Рамки пристроїв"],
    showcaseTitles: ["Перетягніть, відпустіть — готово.", "Завантажуйте в App Store Connect в один клік.", "Створюйте шар за шаром.", "Створюйте красиві фони.", "Налаштовуйте рамки пристроїв."],
    showcaseDescription: "Основний робочий процес показує, як Screenshot Bro усуває повторювану рутину під час дизайну, експорту та завантаження.",
    screenshotCaptions: ["Створюйте красиві скриншоти для App Store", "Експортуйте весь проект за один раз", "Обирайте із вбудованих шаблонів", "Легко локалізуйте скриншоти", "Додавайте реальні рамки пристроїв", "Створюйте красиві фони", "Додавайте SVG, фігури та зображення"],
    screenshotAltSuffix: "скриншот інтерфейсу Screenshot Bro",
    workflowTitles: ["Налаштуйте рядки", "Створюйте дизайн і локалізуйте", "Експортуйте все", "Завантажуйте в App Store Connect"],
    workflowDescription: "Від розмірів пристроїв до багатомовного експорту та завантаження — увесь робочий процес залишається в одному нативному додатку.",
    testimonialQuotes: ["Раніше після кожного релізу я витрачав цілий день на скриншоти. У Screenshot Bro я налаштував шаблони один раз — тепер просто підставляю нові кадри й тисну експорт.", "Локалізація — це просто порятунок. Я підтримую 6 мов, і експорт усіх версій був найгіршою частиною оновлень. Тепер це один клік.", "Нарешті інструмент, який не заважає. Жодних плагінів для Figma, жодних вкладок браузера — лише швидкий нативний додаток, який робить свою справу."],
    developerLabel: "Розробник",
  }),
  pl: compactLandingContent({
    socialImageAlt: "Screenshot Bro — natywna aplikacja na Maca, iPada i iPhone'a do projektowania zrzutów ekranu dla App Store i Google Play z ramkami urządzeń, gradientami i lokalizacją",
    ui: { docs: "Dokumentacja", redditCommunity: "Społeczność Reddit", followOnX: "Obserwuj na X", followOnThreads: "Obserwuj na Threads", homeLabel: `${SITE_NAME} Strona główna`, read: "Czytaj", productLabel: "Produkt", resourcesLabel: "Zasoby", appScreenshots: "Zrzuty ekranu aplikacji", productHuntAlt: "ScreenshotBro App - Projektuj i eksportuj piękne zrzuty ekranu dla App Store. | Product Hunt" },
    featureTitles: ["Edycja wielu szablonów", "Ramki urządzeń", "Tła i rozciąganie", "Narzędzia kształtów + SVG", "Inteligentne wyrównanie", "Zlokalizowany eksport", "Przesyłanie do App Store Connect", "Agenci AI i MCP", "Wbudowana lokalizacja", "Natywna na Maca, iPada i iPhone'a", "Synchronizacja iCloud", "Własne czcionki", "Szablony projektów", "Skróty klawiszowe", "Prywatność przede wszystkim", "Masowy import obrazów", "Zawsze darmowy plan"],
    featureDescription: "Dedykowane narzędzia do wielojęzycznych zrzutów ekranu w sklepach z natywną wydajnością, szablonami wielokrotnego użytku i eksportem gotowym do przesłania.",
    withoutBroPoints: ["Ręczna zmiana rozmiaru każdego zrzutu ekranu w Figma lub Photoshopie", "Kopiowanie ramek urządzeń pojedynczo między obszarami roboczymi", "Ponowny eksport wszystkich plików po zmianie jednego koloru", "Duplikowanie wszystkiego dla każdego języka i utrata kontroli nad tłumaczeniami", "Ręczne przeciąganie każdego pliku PNG do App Store Connect"],
    withBroPoints: ["Jeden szablon aktualizuje wszystkie warianty natychmiast", "Dodawanie ramek urządzeń jednym kliknięciem z wyborem modelu i koloru", "Dodawanie wersji językowych z nadpisywaniem tekstu dla każdego kształtu", "Eksport wszystkich zrzutów, języków i rozmiarów jednym kliknięciem", "Bezpośrednie przesyłanie do App Store Connect bez przeglądarki"],
    showcaseLabels: ["Masowy import", "Automatyczne przesyłanie", "Kształty i warstwy", "Tła", "Ramki urządzeń"],
    showcaseTitles: ["Przeciągnij, upuść, gotowe.", "Przesyłaj do App Store Connect jednym kliknięciem.", "Buduj warstwa po warstwie.", "Twórz atrakcyjne tła.", "Dostosuj ramki urządzeń."],
    showcaseDescription: "Główny przepływ pracy pokazuje, jak Screenshot Bro eliminuje powtarzalne projektowanie, eksport i przesyłanie.",
    screenshotCaptions: ["Projektuj piękne zrzuty ekranu dla App Store", "Eksportuj cały projekt za jednym razem", "Wybieraj spośród wbudowanych szablonów", "Łatwo lokalizuj zrzuty ekranu", "Dodawaj realistyczne ramki urządzeń", "Twórz piękne tła", "Dodawaj pliki SVG, kształty i obrazy"],
    screenshotAltSuffix: "zrzut ekranu interfejsu Screenshot Bro",
    workflowTitles: ["Skonfiguruj wiersze", "Zaprojektuj i zlokalizuj", "Wyeksportuj wszystko", "Prześlij do App Store Connect"],
    workflowDescription: "Od rozmiarów urządzeń po wielojęzyczny eksport i przesyłanie — cały proces pozostaje w jednej natywnej aplikacji.",
    testimonialQuotes: ["Kiedyś spędzałem całe popołudnie na zrzutach ekranu po każdym wydaniu. W Screenshot Bro konfiguruję szablony raz, a teraz tylko podmieniam nowe ujęcia i klikam eksport.", "Funkcja lokalizacji to zbawienie. Obsługuję 6 języków i eksportowanie ich wszystkich było najgorszą częścią każdej aktualizacji. Teraz to jedno kliknięcie.", "Wreszcie narzędzie, które nie przeszkadza w pracy. Żadnych wtyczek do Figmy, żadnych kart w przeglądarce — po prostu natywna aplikacja, która działa szybko."],
    developerLabel: "Twórca",
  }),
  tr: compactLandingContent({
    socialImageAlt: "Screenshot Bro — Cihaz çerçeveleri, degradeler ve yerelleştirme ile App Store ve Google Play ekran görüntüleri tasarlamak için yerel Mac, iPad ve iPhone uygulaması",
    ui: { docs: "Belgeler", redditCommunity: "Reddit Topluluğu", followOnX: "X'te Takip Et", followOnThreads: "Threads'te Takip Et", homeLabel: `${SITE_NAME} Ana Sayfa`, read: "Oku", productLabel: "Ürün", resourcesLabel: "Kaynaklar", appScreenshots: "Uygulama Ekran Görüntüleri", productHuntAlt: "ScreenshotBro App - Harika App Store ekran görüntüleri tasarlayın ve dışa aktarın. | Product Hunt" },
    featureTitles: ["Çoklu Şablon Düzenleme", "Cihaz Çerçeveleri", "Arka Planlar ve Yayma", "Şekil Araçları + SVG", "Akıllı Hizalama", "Yerelleştirilmiş Dışa Aktarma", "App Store Connect'e Yükleme", "Yapay Zeka Ajanları ve MCP", "Yerleşik Yerelleştirme", "Yerel Mac, iPad ve iPhone", "iCloud Eşzamanlama", "Özel Yazı Tipleri", "Proje Şablonları", "Klavye Kısayolları", "Önce Gizlilik", "Toplu Görsel İçe Aktarma", "Kalıcı Ücretsiz Plan"],
    featureDescription: "Yerel performans, yeniden kullanılabilir şablonlar ve yüklemeye hazır dışa aktarmalarla çok dilli mağaza ekran görüntüleri için odaklanmış araçlar.",
    withoutBroPoints: ["Figma veya Photoshop'ta her ekran görüntüsünü manuel boyutlandırmak", "Çalışma yüzeyleri arasında cihaz çerçevelerini tek tek kopyalamak", "Tek bir renk değiştiğinde tüm dosyaları yeniden dışa aktarmak", "Her dil için her şeyi çoğaltıp çeviri takibini kaybetmek", "Her PNG dosyasını App Store Connect'e elle sürüklemek"],
    withBroPoints: ["Tek bir şablon tasarlayın, tüm varyantlar anında güncellensin", "Tek tıkla cihaz çerçeveleri ve renkleri ekleyin", "Şekil başına metin geçersiz kılmalarıyla çoklu diller ekleyin", "Tüm ekran görüntülerini, dilleri ve boyutları tek tıkla dışa aktarın", "Tarayıcı olmadan doğrudan App Store Connect'e yükleyin"],
    showcaseLabels: ["Toplu İçe Aktarma", "Otomatik Yükleme", "Şekiller ve Katmanlar", "Arka Planlar", "Cihaz Çerçeveleri"],
    showcaseTitles: ["Sürükle, bırak, bitti.", "App Store Connect'e tek tıkla yükleyin.", "Katman katman inşa edin.", "Göz alıcı arka planlar oluşturun.", "Cihaz çerçevelerini özelleştirin."],
    showcaseDescription: "Temel iş akışı, Screenshot Bro'nun tekrarlayan tasarım, dışa aktarma ve yükleme adımlarını nasıl ortadan kaldırdığını gösterir.",
    screenshotCaptions: ["Harika App Store ekran görüntüleri tasarlayın", "Tüm projeyi tek seferde dışa aktarın", "Yerleşik şablonlardan seçin", "Ekran görüntülerini kolayca yerelleştirin", "Gerçek cihaz çerçeveleri ekleyin", "Güzel arka planlar oluşturun", "SVG, şekiller ve görseller ekleyin"],
    screenshotAltSuffix: "Screenshot Bro arayüz ekran görüntüsü",
    workflowTitles: ["Satırları Ayarlayın", "Tasarlayın ve Yerelleştirin", "Hepsini Dışa Aktarın", "App Store Connect'e Yükleyin"],
    workflowDescription: "Cihaz boyutlarından çok dilli dışa aktarma ve yüklemeye kadar tüm ekran görüntüsü iş akışı tek bir yerel uygulamada kalır.",
    testimonialQuotes: ["Eskiden her sürümden sonra ekran görüntüleri için bütün bir öğleden sonramı harcardım. Screenshot Bro ile şablonları bir kez kurdum, artık sadece yeni kareleri değiştirip dışa aktarıyorum.", "Yerelleştirme özelliği hayat kurtarıcı. 6 dili destekliyorum ve hepsini dışa aktarmak güncellemelerin en zor kısmıydı. Artık tek bir tık.", "Sonunda işime engel olmayan bir araç. Figma eklentisi yok, tarayıcı sekmesi yok — sadece işi hızlıca bitiren yerel bir uygulama."],
    developerLabel: "Geliştiricisi",
  }),
  nl: compactLandingContent({
    socialImageAlt: "Screenshot Bro — native Mac- en iPad-app voor het ontwerpen van App Store- en Google Play-screenshots met apparaatframes, verlopen en lokalisatie",
    ui: { docs: "Documentatie", redditCommunity: "Reddit-community", followOnX: "Volg op X", followOnThreads: "Volg op Threads", homeLabel: `${SITE_NAME} Home`, read: "Lees", productLabel: "Product", resourcesLabel: "Bronnen", appScreenshots: "App-screenshots", productHuntAlt: "ScreenshotBro App - Ontwerp en exporteer prachtige App Store-screenshots. | Product Hunt" },
    featureTitles: ["Multi-template bewerking", "Apparaatframes", "Achtergronden & overspanning", "Vormgereedschappen + SVG", "Slimme uitlijning", "Gelokaliseerde export", "Uploaden naar App Store Connect", "AI-agenten & MCP", "Ingebouwde lokalisatie", "Native voor Mac, iPad & iPhone", "iCloud-synchronisatie", "Aangepaste lettertypen", "Projectsjablonen", "Toetscombinaties", "Privacy voorop", "Batch-afbeeldingsimport", "Blijvend gratis plan"],
    featureDescription: "Gerichte tools voor meertalige store-screenshots met native prestaties, herbruikbare sjablonen en exporten klaar voor upload.",
    withoutBroPoints: ["Elk screenshot handmatig schalen in Figma of Photoshop", "Apparaatframes één voor één kopiëren tussen artboards", "Alles opnieuw exporteren bij het aanpassen van één kleur", "Alles dupliceren voor elke taal en vertaaloverzicht verliezen", "Elke PNG handmatig naar App Store Connect slepen"],
    withBroPoints: ["Ontwerp één sjabloon en alle varianten worden direct bijgewerkt", "Voeg apparaatframes toe met één klik en kies model en kleur", "Voeg meerdere talen toe met tekstaanpassingen per vorm", "Exporteer alle screenshots, talen en formaten in één klik", "Upload direct naar App Store Connect zonder browser"],
    showcaseLabels: ["Batch-import", "Automatische upload", "Vormen en lagen", "Achtergronden", "Apparaatframes"],
    showcaseTitles: ["Slepen, neerzetten, klaar.", "Upload naar App Store Connect in één klik.", "Bouw laag voor laag op.", "Maak prachtige achtergronden.", "Pas apparaatframes aan."],
    showcaseDescription: "De kernworkflow laat zien hoe Screenshot Bro repetitief ontwerp-, export- en uploadwerk elimineert.",
    screenshotCaptions: ["Ontwerp prachtige App Store-screenshots", "Exporteer het hele project in één keer", "Kies uit ingebouwde sjablonen", "Lokaliseer screenshots eenvoudig", "Voeg echte apparaatframes toe", "Maak mooie achtergronden", "Voeg SVG's, vormen en afbeeldingen toe"],
    screenshotAltSuffix: "Screenshot Bro-interface screenshot",
    workflowTitles: ["Rijen instellen", "Ontwerpen & lokaliseren", "Alles exporteren", "Uploaden naar App Store Connect"],
    workflowDescription: "Van apparaatformaten tot meertalige export en upload: de hele workflow blijft in één native app.",
    testimonialQuotes: ["Vroeger was ik na elke release een hele middag kwijt aan screenshots. Met Screenshot Bro stel ik sjablonen één keer in en hoef ik alleen nieuwe beelden te wisselen en op export te drukken.", "De lokalisatiefunctie is een uitkomst. Ik ondersteun 6 talen en alles exporteren was het zwaarste deel van elke update. Nu is het één klik.", "Eindelijk een tool die niet in de weg zit. Geen Figma-plug-ins, geen browsertabbladen — gewoon een snelle native app die het werk doet."],
    developerLabel: "ontwikkelaar",
  }),
  id: compactLandingContent({
    socialImageAlt: "Screenshot Bro — aplikasi native Mac, iPad dan iPhone untuk mendesain tangkapan layar App Store dan Google Play dengan bingkai perangkat, gradien, dan lokalisasi",
    ui: { docs: "Dokumentasi", redditCommunity: "Komunitas Reddit", followOnX: "Ikuti di X", followOnThreads: "Ikuti di Threads", homeLabel: `${SITE_NAME} Beranda`, read: "Baca", productLabel: "Produk", resourcesLabel: "Sumber Daya", appScreenshots: "Tangkapan Layar Aplikasi", productHuntAlt: "ScreenshotBro App - Desain dan ekspor tangkapan layar App Store yang indah. | Product Hunt" },
    featureTitles: ["Pengeditan Multi-Template", "Bingkai Perangkat", "Latar Belakang & Rentang", "Alat Bentuk + SVG", "Perataan Cerdas", "Ekspor Terlokalisasi", "Unggah ke App Store Connect", "Agen AI & MCP", "Lokalisasi Bawaan", "Native untuk Mac, iPad & iPhone", "Sinkronisasi iCloud", "Font Khusus", "Template Proyek", "Pintasan Papan Ketik", "Privasi Utama", "Impor Gambar Massal", "Paket Gratis Selamanya"],
    featureDescription: "Alat terfokus untuk tangkapan layar toko multibahasa dengan performa native, template yang dapat digunakan kembali, dan ekspor siap unggah.",
    withoutBroPoints: ["Mengubah ukuran setiap tangkapan layar secara manual di Figma atau Photoshop", "Menyalin bingkai perangkat satu per satu antar artboard", "Mengekspor ulang semua file saat mengubah satu warna", "Menduplikasi semuanya untuk setiap bahasa dan kehilangan jejak terjemahan", "Menyeret setiap PNG ke App Store Connect secara manual"],
    withBroPoints: ["Desain satu template dan semua varian langsung diperbarui", "Tambahkan bingkai perangkat dalam satu klik dan pilih model serta warna", "Tambahkan berbagai bahasa dengan penimpaan teks per bentuk", "Ekspor semua tangkapan layar, bahasa, dan ukuran dalam satu klik", "Unggah langsung ke App Store Connect tanpa browser"],
    showcaseLabels: ["Impor Massal", "Unggah Otomatis", "Bentuk & Lapisan", "Latar Belakang", "Bingkai Perangkat"],
    showcaseTitles: ["Tarik, lepas, selesai.", "Unggah ke App Store Connect dalam satu klik.", "Bangun lapis demi lapis.", "Buat latar belakang menarik.", "Sesuaikan bingkai perangkat."],
    showcaseDescription: "Alur kerja inti menunjukkan bagaimana Screenshot Bro menghilangkan pekerjaan desain, ekspor, dan unggah yang berulang.",
    screenshotCaptions: ["Desain tangkapan layar App Store yang indah", "Ekspor seluruh proyek sekaligus", "Pilih dari template bawaan", "Lokalisasikan tangkapan layar dengan mudah", "Tambahkan bingkai perangkat nyata", "Buat latar belakang yang indah", "Tambahkan SVG, bentuk, dan gambar"],
    screenshotAltSuffix: "tangkapan layar antarmuka Screenshot Bro",
    workflowTitles: ["Atur Baris", "Desain & Lokalisasi", "Ekspor Semua", "Unggah ke App Store Connect"],
    workflowDescription: "Dari ukuran perangkat hingga ekspor multibahasa dan pengunggahan, seluruh alur kerja tetap berada dalam satu aplikasi native.",
    testimonialQuotes: ["Dulu saya menghabiskan sepanjang sore untuk tangkapan layar setelah setiap rilis. Dengan Screenshot Bro, saya mengatur template sekali dan sekarang hanya mengganti gambar baru lalu klik ekspor.", "Fitur lokalisasi sangat menghemat waktu. Mendukung 6 bahasa dan mengekspor semuanya dulunya adalah bagian terburuk. Sekarang cukup satu klik.", "Akhirnya ada alat yang tidak merepotkan. Tanpa plugin Figma, tanpa tab browser — hanya aplikasi native cepat yang menyelesaikan pekerjaan."],
    developerLabel: "Pengembang",
  }),
  vi: compactLandingContent({
    socialImageAlt: "Screenshot Bro — ứng dụng native trên Mac, iPad và iPhone để thiết kế ảnh chụp màn hình App Store và Google Play với khung thiết bị, gradient và bản địa hóa",
    ui: { docs: "Tài liệu", redditCommunity: "Cộng đồng Reddit", followOnX: "Theo dõi trên X", followOnThreads: "Theo dõi trên Threads", homeLabel: `${SITE_NAME} Trang chủ`, read: "Đọc", productLabel: "Sản phẩm", resourcesLabel: "Tài nguyên", appScreenshots: "Ảnh chụp ứng dụng", productHuntAlt: "ScreenshotBro App - Thiết kế và xuất ảnh chụp màn hình App Store tuyệt đẹp. | Product Hunt" },
    featureTitles: ["Chỉnh sửa đa mẫu", "Khung thiết bị", "Hình nền & trải rộng", "Công cụ hình dạng + SVG", "Căn chỉnh thông minh", "Xuất bản địa hóa", "Tải lên App Store Connect", "AI Agent & MCP", "Bản địa hóa tích hợp", "Native cho Mac, iPad & iPhone", "Đồng bộ iCloud", "Phông chữ tùy chỉnh", "Mẫu dự án", "Phím tắt", "Bảo mật hàng đầu", "Nhập ảnh hàng loạt", "Gói miễn phí vĩnh viễn"],
    featureDescription: "Công cụ chuyên dụng cho ảnh chụp màn hình ứng dụng đa ngôn ngữ với hiệu năng native, mẫu tái sử dụng và xuất file sẵn sàng tải lên.",
    withoutBroPoints: ["Thay đổi kích thước từng ảnh chụp màn hình thủ công trong Figma hoặc Photoshop", "Sao chép từng khung thiết bị giữa các artboard", "Xuất lại toàn bộ file khi chỉ đổi một màu sắc", "Nhân bản mọi thứ cho từng ngôn ngữ và mất kiểm soát bản dịch", "Kéo từng file PNG vào App Store Connect bằng tay"],
    withBroPoints: ["Thiết kế một mẫu và tất cả biến thể được cập nhật ngay lập tức", "Thêm khung thiết bị chỉ với một cú nhấp và chọn kiểu dáng, màu sắc", "Thêm nhiều ngôn ngữ với ghi đè văn bản theo từng hình", "Xuất tất cả ảnh chụp màn hình, ngôn ngữ và kích thước trong một cú nhấp", "Tải trực tiếp lên App Store Connect không cần trình duyệt"],
    showcaseLabels: ["Nhập hàng loạt", "Tải lên tự động", "Hình dạng & lớp", "Hình nền", "Khung thiết bị"],
    showcaseTitles: ["Kéo, thả, xong.", "Tải lên App Store Connect chỉ với một cú nhấp.", "Xây dựng từng lớp.", "Tạo hình nền ấn tượng.", "Tùy chỉnh khung thiết bị."],
    showcaseDescription: "Quy trình làm việc cốt lõi cho thấy Screenshot Bro giúp loại bỏ các bước thiết kế, xuất file và tải lên lặp đi lặp lại như thế nào.",
    screenshotCaptions: ["Thiết kế ảnh chụp màn hình App Store đẹp mắt", "Xuất toàn bộ dự án cùng một lúc", "Chọn từ các mẫu tích hợp sẵn", "Bản địa hóa ảnh chụp màn hình dễ dàng", "Thêm khung thiết bị thực tế", "Tạo hình nền tuyệt đẹp", "Thêm SVG, hình dạng và hình ảnh"],
    screenshotAltSuffix: "ảnh chụp giao diện Screenshot Bro",
    workflowTitles: ["Thiết lập hàng", "Thiết kế & bản địa hóa", "Xuất tất cả", "Tải lên App Store Connect"],
    workflowDescription: "Từ kích thước thiết bị đến xuất đa ngôn ngữ và tải lên — toàn bộ quy trình làm việc đều nằm trong một ứng dụng native duy nhất.",
    testimonialQuotes: ["Trước đây tôi mất cả buổi chiều để làm ảnh chụp màn hình sau mỗi lần phát hành. Với Screenshot Bro, tôi tạo mẫu một lần và giờ chỉ cần thay ảnh mới rồi bấm xuất.", "Tính năng bản địa hóa thực sự cứu cánh. Tôi hỗ trợ 6 ngôn ngữ và xuất tất cả từng là phần mệt nhất. Giờ chỉ mất một cú nhấp.", "Cuối cùng cũng có một công cụ gọn gàng. Không plugin Figma, không tab trình duyệt — chỉ là một ứng dụng native nhanh chóng hoàn thành công việc."],
    developerLabel: "Nhà phát triển",
  }),
  th: compactLandingContent({
    socialImageAlt: "Screenshot Bro — แอปเนทีฟบน Mac และ iPad สำหรับออกแบบภาพสกรีนช็อต App Store และ Google Play พร้อมกรอบอุปกรณ์ การไล่ระดับสี และการแปลภาษา",
    ui: { docs: "เอกสารประกอบ", redditCommunity: "ชุมชน Reddit", followOnX: "ติดตามบน X", followOnThreads: "ติดตามบน Threads", homeLabel: `${SITE_NAME} หน้าแรก`, read: "อ่าน", productLabel: "ผลิตภัณฑ์", resourcesLabel: "แหล่งข้อมูล", appScreenshots: "สกรีนช็อตของแอป", productHuntAlt: "ScreenshotBro App - ออกแบบและส่งออกภาพสกรีนช็อต App Store ที่สวยงาม | Product Hunt" },
    featureTitles: ["แก้ไขหลายเทมเพลตพร้อมกัน", "กรอบอุปกรณ์", "พื้นหลังและการขยายข้ามหน้า", "เครื่องมือรูปทรง + SVG", "การจัดตำแหน่งอัจฉริยะ", "การส่งออกตามภาษา", "อัปโหลดไปยัง App Store Connect", "AI Agent และ MCP", "การแปลภาษาในตัว", "เนทีฟสำหรับ Mac และ iPad", "การซิงค์ iCloud", "ฟอนต์แบบกำหนดเอง", "เทมเพลตโปรเจกต์", "คีย์ลัดบนแป้นพิมพ์", "เน้นความเป็นส่วนตัว", "นำเข้ารูปภาพเป็นชุด", "แผนฟรีตลอดไป"],
    featureDescription: "เครื่องมือเฉพาะทางสำหรับสกรีนช็อตหลายภาษา พร้อมประสิทธิภาพเนทีฟ เทมเพลตที่ใช้ซ้ำได้ และการส่งออกที่พร้อมอัปโหลดทันที",
    withoutBroPoints: ["ปรับขนาดสกรีนช็อตแต่ละภาพด้วยตนเองใน Figma หรือ Photoshop", "คัดลอกและวางกรอบอุปกรณ์ทีละชิ้นระหว่างอาร์ตบอร์ด", "ส่งออกไฟล์ทั้งหมดใหม่เมื่อเปลี่ยนสีเพียงสีเดียว", "ทำซ้ำทุกอย่างสำหรับแต่ละภาษาจนควบคุมการแปลไม่ได้", "ลากไฟล์ PNG แต่ละไฟล์ไปยัง App Store Connect ด้วยตนเอง"],
    withBroPoints: ["ออกแบบเทมเพลตเดียว อัปเดตทุกรูปแบบทันที", "เพิ่มกรอบอุปกรณ์ได้ในคลิกเดียวพร้อมเลือกรุ่นและสี", "เพิ่มหลายภาษาพร้อมปรับแต่งข้อความแยกตามรูปทรง", "ส่งออกสกรีนช็อต ทุกภาษา และทุกขนาดได้ในคลิกเดียว", "อัปโหลดไปยัง App Store Connect ได้โดยตรงโดยไม่ต้องเปิดเบราว์เซอร์"],
    showcaseLabels: ["นำเข้าเป็นชุด", "อัปโหลดอัตโนมัติ", "รูปทรงและเลเยอร์", "พื้นหลัง", "กรอบอุปกรณ์"],
    showcaseTitles: ["ลาก วาง เรียบร้อย", "อัปโหลดไปยัง App Store Connect ในคลิกเดียว", "สร้างทีละเลเยอร์", "สร้างพื้นหลังที่สวยงาม", "ปรับแต่งกรอบอุปกรณ์"],
    showcaseDescription: "ขั้นตอนการทำงานหลักแสดงให้เห็นว่า Screenshot Bro ช่วยลดขั้นตอนการออกแบบ การส่งออก และการอัปโหลดที่ซ้ำซ้อนได้อย่างไร",
    screenshotCaptions: ["ออกแบบสกรีนช็อต App Store ที่สวยงาม", "ส่งออกทั้งโปรเจกต์ได้ในคราวเดียว", "เลือกจากเทมเพลตในตัว", "แปลภาษาสกรีนช็อตได้อย่างง่ายดาย", "เพิ่มกรอบอุปกรณ์จริง", "สร้างพื้นหลังที่สวยงาม", "เพิ่ม SVG รูปทรง และรูปภาพ"],
    screenshotAltSuffix: "ภาพหน้าจออินเทอร์เฟซ Screenshot Bro",
    workflowTitles: ["ตั้งค่าแถว", "ออกแบบและแปลภาษา", "ส่งออกทั้งหมด", "อัปโหลดไปยัง App Store Connect"],
    workflowDescription: "ตั้งแต่ขนาดอุปกรณ์ไปจนถึงการส่งออกหลายภาษาและการอัปโหลด ทุกขั้นตอนทำได้ในแอปเนทีฟเดียว",
    testimonialQuotes: ["เมื่อก่อนผมต้องเสียเวลาทั้งบ่ายไปกับสกรีนช็อตหลังปล่อยอัปเดตทุกครั้ง ด้วย Screenshot Bro ผมตั้งค่าเทมเพลตครั้งเดียว ตอนนี้แค่เปลี่ยนภาพใหม่แล้วกดส่งออก", "ฟีเจอร์แปลภาษาช่วยประหยัดเวลาได้มาก ผมรองรับ 6 ภาษา และการส่งออกทั้งหมดเคยเป็นงานที่เหนื่อยที่สุด ตอนนี้คลิกเดียวจบ", "ในที่สุดก็มีเครื่องมือที่ทำงานได้ตรงใจ ไม่มีปลั๊กอิน Figma ไม่มีแท็บเบราว์เซอร์ — แค่แอปเนทีฟที่ทำงานได้รวดเร็ว"],
    developerLabel: "ผู้พัฒนา",
  }),
  sv: compactLandingContent({
    socialImageAlt: "Screenshot Bro — nativ Mac-, iPad- och iPhone-app för att designa skärmdumpar för App Store och Google Play med enhetsramar, gradienter och lokalisering",
    ui: { docs: "Dokumentation", redditCommunity: "Reddit-community", followOnX: "Följ på X", followOnThreads: "Följ på Threads", homeLabel: `${SITE_NAME} Hem`, read: "Läs", productLabel: "Produkt", resourcesLabel: "Resurser", appScreenshots: "Appskärmdumpar", productHuntAlt: "ScreenshotBro App - Designa och exportera vackra App Store-skärmdumpar. | Product Hunt" },
    featureTitles: ["Redigering av flera mallar", "Enhetsramar", "Bakgrunder & spännvidd", "Formverktyg + SVG", "Smart justering", "Lokaliserad export", "Uppladdning till App Store Connect", "AI-agenter & MCP", "Inbyggd lokalisering", "Nativt för Mac, iPad & iPhone", "iCloud-synkronisering", "Anpassade typsnitt", "Projektmallar", "Kortkommandon", "Integritet först", "Batchimport av bilder", "Permanent gratisplan"],
    featureDescription: "Fokuserade verktyg för flerspråkiga butiksskärmdumpar med nativ prestanda, återanvändbara mallar och uppladdningsklara exporter.",
    withoutBroPoints: ["Ändra storlek på varje skärmdump manuellt i Figma eller Photoshop", "Kopiera enhetsramar en efter en mellan ritytor", "Exportera om alla filer när en enda färg ändras", "Duplicera allt för varje språk och tappa överblicken över översättningar", "Dra varje PNG-fil till App Store Connect för hand"],
    withBroPoints: ["Designa en mall och alla varianter uppdateras direkt", "Lägg till enhetsramar med ett klick och välj modell och färg", "Lägg till flera språk med textanpassningar per form", "Exportera alla skärmdumpar, språk och storlekar med ett klick", "Ladda upp direkt till App Store Connect utan webbläsare"],
    showcaseLabels: ["Batchimport", "Automatisk uppladdning", "Former och lager", "Bakgrunder", "Enhetsramar"],
    showcaseTitles: ["Dra, släpp, klart.", "Ladda upp till App Store Connect med ett klick.", "Bygg lager för lager.", "Skapa snygga bakgrunder.", "Anpassa enhetsramar."],
    showcaseDescription: "Kärnarbetsflödet visar hur Screenshot Bro eliminerar repetitivt design-, export- och uppladdningsarbete.",
    screenshotCaptions: ["Designa snygga App Store-skärmdumpar", "Exportera hela projektet på en gång", "Välj bland inbyggda mallar", "Lokalisera skärmdumpar enkelt", "Lägg till verkliga enhetsramar", "Skapa vackra bakgrunder", "Lägg till SVG, former och bilder"],
    screenshotAltSuffix: "Screenshot Bro-gränssnittsskärmdump",
    workflowTitles: ["Ställ in rader", "Designa & lokalisera", "Exportera allt", "Ladda upp till App Store Connect"],
    workflowDescription: "Från enhetsstorlekar till flerspråkig export och uppladdning — hela arbetsflödet ryms i en enda nativ app.",
    testimonialQuotes: ["Tidigare lade jag en hel eftermiddag på skärmdumpar efter varje release. Med Screenshot Bro ställer jag in mallarna en gång och byter bara ut bilderna och exporterar.", "Lokaliseringsfunktionen är en räddare i nöden. Jag stöder 6 språk och att exportera alla var den värsta delen av varje uppdatering. Nu krävs bara ett klick.", "Äntligen ett verktyg som inte är i vägen. Inga Figma-plugins, inga webbläsarflikar — bara en snabb nativ app som gör jobbet."],
    developerLabel: "utvecklare",
  }),
  da: compactLandingContent({
    socialImageAlt: "Screenshot Bro — nativ Mac-, iPad- og iPhone-app til at designe App Store- og Google Play-skærmbilleder med enhedsrammer, gradueringer og lokalisering",
    ui: { docs: "Dokumentation", redditCommunity: "Reddit-fællesskab", followOnX: "Følg på X", followOnThreads: "Følg på Threads", homeLabel: `${SITE_NAME} Hjem`, read: "Læs", productLabel: "Produkt", resourcesLabel: "Ressourcer", appScreenshots: "App-skærmbilleder", productHuntAlt: "ScreenshotBro App - Design og eksportér smukke App Store-skærmbilleder. | Product Hunt" },
    featureTitles: ["Multi-skabelon redigering", "Enhedsrammer", "Baggrunde & spændvidde", "Formværktøjer + SVG", "Smart justering", "Lokaliseret eksport", "Upload til App Store Connect", "AI-agenter & MCP", "Indbygget lokalisering", "Nativ til Mac, iPad & iPhone", "iCloud-synkronisering", "Brugerdefinerede skrifttyper", "Projektskabeloner", "Tastaturgenveje", "Privatliv først", "Batch-import af billeder", "Permanent gratis plan"],
    featureDescription: "Fokuserede værktøjer til flersprogede butiksskærmbilleder med nativ ydeevne, genanvendelige skabeloner og upload-klare eksporter.",
    withoutBroPoints: ["Tilpas størrelsen på hvert skærmbillede manuelt i Figma eller Photoshop", "Kopier enhedsrammer én efter én mellem artboards", "Geneksportér alle filer, når en enkelt farve ændres", "Duplikér alt for hvert sprog og mist overblikket over oversættelser", "Træk hver PNG-fil ind i App Store Connect med hånden"],
    withBroPoints: ["Design én skabelon, og alle varianter opdateres med det samme", "Tilføj enhedsrammer med et klik, og vælg model og farve", "Tilføj flere sprog med teksttilsidesættelser pr. form", "Eksportér alle skærmbilleder, sprog og størrelser med et klik", "Upload direkte til App Store Connect uden browser"],
    showcaseLabels: ["Batch-import", "Automatisk upload", "Former og lag", "Baggrunde", "Enhedsrammer"],
    showcaseTitles: ["Træk, slip, færdig.", "Upload til App Store Connect med ét klik.", "Byg lag for lag.", "Skab flotte baggrunde.", "Tilpas enhedsrammer."],
    showcaseDescription: "Det centrale arbejdsflow viser, hvordan Screenshot Bro fjerner gentagne design-, eksport- og upload-opgaver.",
    screenshotCaptions: ["Design flotte App Store-skærmbilleder", "Eksportér hele projektet på én gang", "Vælg blandt indbyggede skabeloner", "Lokaliser skærmbilleder nemt", "Tilføj realistiske enhedsrammer", "Skab smukke baggrunde", "Tilføj SVG, former og billeder"],
    screenshotAltSuffix: "Screenshot Bro brugerflade-skærmbillede",
    workflowTitles: ["Opsæt rækker", "Design & lokaliser", "Eksportér alt", "Upload til App Store Connect"],
    workflowDescription: "Fra enhedsstørrelser til flersproget eksport og upload — hele arbejdsgangen samlet i én nativ app.",
    testimonialQuotes: ["Jeg plejede at bruge en hel eftermiddag på skærmbilleder efter hver udgivelse. Med Screenshot Bro opsætter jeg skabelonerne én gang og udskifter bare billederne og eksporterer.", "Lokaliseringsfunktionen er en kæmpe hjælp. Jeg understøtter 6 sprog, og at eksportere alle var den værste del af hver opdatering. Nu tager det ét klik.", "Endelig et værktøj, der ikke er i vejen. Ingen Figma-plugins, ingen browserfaner — bare en hurtig nativ app, der gør arbejdet."],
    developerLabel: "udvikler",
  }),
  fi: compactLandingContent({
    socialImageAlt: "Screenshot Bro — natiivi Mac-, iPad- ja iPhone-sovellus App Store- ja Google Play -kuvakaappausten suunnitteluun laitekehyksillä, liukuväreillä ja lokalisoinnilla",
    ui: { docs: "Dokumentaatio", redditCommunity: "Reddit-yhteisö", followOnX: "Seuraa X:ssä", followOnThreads: "Seuraa Threadsissä", homeLabel: `${SITE_NAME} Etusivu`, read: "Lue", productLabel: "Tuote", resourcesLabel: "Resurssit", appScreenshots: "Sovelluksen kuvakaappaukset", productHuntAlt: "ScreenshotBro App - Suunnittele ja vie upeita App Store -kuvakaappauksia. | Product Hunt" },
    featureTitles: ["Usean mallin muokkaus", "Laitekehykset", "Taustat & kattavuus", "Muototyökalut + SVG", "Älykäs kohdistus", "Lokalisoitu vienti", "Lataus App Store Connectiin", "Tekoälyagentit & MCP", "Sisäänrakennettu lokalisointi", "Natiivi Macille, iPadille ja iPhonelle", "iCloud-synkronointi", "Mukautetut fontit", "Projektimallit", "Pikanäppäimet", "Yksityisyys edellä", "Kuvien erätuonti", "Pysyvästi ilmainen versio"],
    featureDescription: "Täsmälliset työkalut monikielisiin sovelluskaupan kuvakaappauksiin natiivilla suorituskyvyllä, uudelleenkäytettävillä malleilla ja latausvalmiilla viennillä.",
    withoutBroPoints: ["Jokaisen kuvakaappauksen koon muuttaminen manuaalisesti Figmassa tai Photoshopissa", "Laitekehysten kopiointi yksitellen työpohjien välillä", "Kaikkien tiedostojen vienti uudelleen yhden värimuutoksen vuoksi", "Kaiken monistaminen jokaiselle kielelle ja käännösten hallinnan menetys", "Jokaisen PNG-tiedoston vetäminen App Store Connectiin käsin"],
    withBroPoints: ["Suunnittele yksi malli ja kaikki versiot päivittyvät heti", "Lisää laitekehykset yhdellä napsautuksella ja valitse malli sekä väri", "Lisää useita kieliä muotokohtaisilla tekstikorvauksilla", "Vie kaikki kuvakaappaukset, kielet ja koot yhdellä napsautuksella", "Lataa suoraan App Store Connectiin ilman selainta"],
    showcaseLabels: ["Erätuonti", "Automaattinen lataus", "Muodot ja tasot", "Taustat", "Laitekehykset"],
    showcaseTitles: ["Vedä, pudota, valmis.", "Lataa App Store Connectiin yhdellä napsautuksella.", "Rakenna taso tasolta.", "Luo upeita taustoja.", "Mukauta laitekehyksiä."],
    showcaseDescription: "Ydintyönkulku näyttää, miten Screenshot Bro poistaa toistuvat suunnittelu-, vienti- ja latausvaiheet.",
    screenshotCaptions: ["Suunnittele upeita App Store -kuvakaappauksia", "Vie koko projekti kerralla", "Valitse sisäänrakennetuista malleista", "Lokalisoi kuvakaappaukset vaivattomasti", "Lisää realistisia laitekehyksiä", "Luo kauniita taustoja", "Lisää SVG-kuvia, muotoja ja kuvia"],
    screenshotAltSuffix: "Screenshot Bro -käyttöliittymän kuvakaappaus",
    workflowTitles: ["Määritä rivit", "Suunnittele ja lokalisoi", "Vie kaikki", "Lataa App Store Connectiin"],
    workflowDescription: "Laitteiden koosta monikieliseen vientiin ja lataukseen — koko työnkulku yhdessä natiivisovelluksessa.",
    testimonialQuotes: ["Käytin ennen kokonaisen iltapäivän kuvakaappauksiin jokaisen julkaisun jälkeen. Screenshot Bron avulla loin mallit kerran ja nyt vain vaihdan uudet kuvat ja vien.", "Lokalisointiominaisuus on todellinen hengenpelastaja. Tuen 6 kieltä ja kaikkien vienti oli päivitysten raskain vaihe. Nyt se hoituu yhdellä klikkauksella.", "Viimeinkin työkalu, joka ei ole tiellä. Ei Figma-liitännäisiä, ei selainvälilehtiä — vain nopea natiivisovellus, joka tekee työn."],
    developerLabel: "kehittäjä",
  }),
  no: compactLandingContent({
    socialImageAlt: "Screenshot Bro — nativ Mac-, iPad- og iPhone-app for å designe App Store- og Google Play-skjermbilder med enhetsrammer, gradienter og lokalisering",
    ui: { docs: "Dokumentasjon", redditCommunity: "Reddit-fellesskap", followOnX: "Følg på X", followOnThreads: "Følg på Threads", homeLabel: `${SITE_NAME} Hjem`, read: "Les", productLabel: "Produkt", resourcesLabel: "Ressourcer", appScreenshots: "Appskjermbilder", productHuntAlt: "ScreenshotBro App - Design og eksporter flotte App Store-skjermbilder. | Product Hunt" },
    featureTitles: ["Redigering av flere maler", "Enhetsrammer", "Bakgrunner & spennvidde", "Formverktøy + SVG", "Smart justering", "Lokalisert eksport", "Opplasting til App Store Connect", "AI-agenter & MCP", "Innebygd lokalisering", "Nativt for Mac, iPad & iPhone", "iCloud-synkronisering", "Egendefinerte fonter", "Prosjektmaler", "Tastatursnarveier", "Personvern først", "Batch-import av bilder", "Permanent gratisplan"],
    featureDescription: "Målrettede verktøy for flerspråklige butikkskjermbilder med nativ ytelse, gjenbrukbare maler og eksport klare for opplasting.",
    withoutBroPoints: ["Endre størrelse på hvert skjermbilde manuelt i Figma eller Photoshop", "Kopiere enhetsrammer én etter én mellom artboards", "Eksportere alle filer på nytt når en enkelt farge endres", "Duplisere alt for hvert språk og miste kontrollen over oversettelser", "Dra hver PNG-fil til App Store Connect for hånd"],
    withBroPoints: ["Design én mal, og alle varianter oppdateres umiddelbart", "Legg til enhetsrammer med ett klikk og velg modell og farge", "Legg til flere språk med tekstoverstyringer per form", "Eksporter alle skjermbilder, språk og størrelser med ett klikk", "Last opp direkte til App Store Connect uten nettleser"],
    showcaseLabels: ["Batch-import", "Automatisk opplasting", "Former og lag", "Bakgrunner", "Enhetsrammer"],
    showcaseTitles: ["Dra, slipp, ferdig.", "Last opp til App Store Connect med ett klikk.", "Bygg lag for lag.", "Lag flotte bakgrunner.", "Tilpass enhetsrammer."],
    showcaseDescription: "Det sentrale arbeidsflyten viser hvordan Screenshot Bro fjerner repetitivt design-, eksport- og opplastingsarbeid.",
    screenshotCaptions: ["Design flotte App Store-skjermbilder", "Eksporter hele prosjektet samtidig", "Velg blant innebygde maler", "Lokaliser skjermbilder enkelt", "Legg til realistiske enhetsrammer", "Lag vakre bakgrunner", "Legg til SVG, former og bilder"],
    screenshotAltSuffix: "Screenshot Bro-grensesnittskjermbilde",
    workflowTitles: ["Sett opp rader", "Design & lokaliser", "Eksporter alt", "Last opp til App Store Connect"],
    workflowDescription: "Fra enhetsstørrelser til flerspråklig eksport og opplasting — hele arbeidsflyten i én enkelt nativ app.",
    testimonialQuotes: ["Tidligere brukte jeg en hel ettermiddag på skjermbilder etter hver utgivelse. Med Screenshot Bro setter jeg opp malene én gang og bytter bare ut bildene og eksporterer.", "Lokaliseringsfunksjonen er en livredder. Jeg støtter 6 språk, og å eksportere alle var den verste delen av hver oppdatering. Nå tar det ett klikk.", "Endelig et verktøy som ikke er i veien. Ingen Figma-plugins, ingen nettleserfaner — bare en rask nativ app som gjør jobben."],
    developerLabel: "utvikler",
  }),
  cs: compactLandingContent({
    socialImageAlt: "Screenshot Bro — nativní aplikace pro Mac, iPad a iPhone k navrhování snímků obrazovky pro App Store a Google Play s rámečky zařízení, přechody a lokalizací",
    ui: { docs: "Dokumentace", redditCommunity: "Komunita Reddit", followOnX: "Sledovat na X", followOnThreads: "Sledovat na Threads", homeLabel: `${SITE_NAME} Domů`, read: "Číst", productLabel: "Produkt", resourcesLabel: "Zdroje", appScreenshots: "Snímky aplikace", productHuntAlt: "ScreenshotBro App - Navrhujte a exportujte krásné snímky obrazovky pro App Store. | Product Hunt" },
    featureTitles: ["Úprava více šablon", "Rámečky zařízení", "Pozadí a prolínání", "Nástroje tvarů + SVG", "Chytré zarovnání", "Lokalizovaný export", "Nahrávání do App Store Connect", "AI agenti & MCP", "Vestavěná lokalizace", "Nativní pro Mac, iPad & iPhone", "Synchronizace přes iCloud", "Vlastní písma", "Projektové šablony", "Klávesové zkratky", "Důraz na soukromí", "Dávkový import obrázků", "Trvale bezplatný plán"],
    featureDescription: "Cílené nástroje pro vícejazyčné snímky obrazovky s nativním výkonem, znovupoužitelnými šablonami a exportem připraveným k nahrání.",
    withoutBroPoints: ["Ruční změna velikosti každého snímku ve Figmě nebo Photoshopu", "Kopírování rámečků zařízení jeden po druhém mezi plátny", "Opětovný export všech souborů při změně jediné barvy", "Duplikování všeho pro každý jazyk a ztráta přehledu o překladech", "Ruční přetahování každého souboru PNG do App Store Connect"],
    withBroPoints: ["Navrhněte jednu šablonu a všechny varianty se okamžitě aktualizují", "Přidejte rámečky zařízení jedním kliknutím a zvolte model i barvu", "Přidejte více jazyků s přepsáním textu podle jednotlivých tvarů", "Exportujte všechny snímky, jazyky a velikosti jedním kliknutím", "Nahrávejte přímo do App Store Connect bez nutnosti otevírat prohlížeč"],
    showcaseLabels: ["Dávkový import", "Automatické nahrávání", "Tvary a vrstvy", "Pozadí", "Rámečky zařízení"],
    showcaseTitles: ["Přetáhněte, pusťte, hotovo.", "Nahrávání do App Store Connect jedním kliknutím.", "Stavějte vrstvu po vrstvě.", "Vytvářejte působivá pozadí.", "Přizpůsobte rámečky zařízení."],
    showcaseDescription: "Základní pracovní postup ukazuje, jak Screenshot Bro odstraňuje opakující se návrhové, exportní a nahrávací kroky.",
    screenshotCaptions: ["Navrhujte krásné snímky pro App Store", "Exportujte celý projekt najednou", "Vybírejte z vestavěných šablon", "Snadno lokalizujte snímky obrazovky", "Přidávejte realistické rámečky zařízení", "Vytvářejte nádherná pozadí", "Přidávejte SVG, tvary a obrázky"],
    screenshotAltSuffix: "Snímek rozhraní aplikace Screenshot Bro",
    workflowTitles: ["Nastavení řádků", "Návrh a lokalizace", "Export všeho", "Nahrání do App Store Connect"],
    workflowDescription: "Od velikostí zařízení po vícejazyčný export a nahrávání — celý pracovní postup v jediné nativní aplikaci.",
    testimonialQuotes: ["Dříve jsem po každém vydání strávil celé odpoledne tvorbou snímků. Se Screenshot Bro nastavím šablony jednou a pak jen vyměním obrázky a exportuji.", "Funkce lokalizace mi nesmírně pomáhá. Podporuji 6 jazyků a jejich export býval nejhorší částí aktualizace. Nyní to trvá jedno kliknutí.", "Konečně nástroj, který nepřekáží. Žádné doplňky pro Figmu, žádné záložky v prohlížeči — jen rychlá nativní aplikace, která udělá svou práci."],
    developerLabel: "vývojář",
  }),
  ro: compactLandingContent({
    socialImageAlt: "Screenshot Bro — aplicație nativă pentru Mac, iPad și iPhone pentru proiectarea capturilor de ecran pentru App Store și Google Play cu rame de dispozitive, degradeuri și localizare",
    ui: { docs: "Documentație", redditCommunity: "Comunitate Reddit", followOnX: "Urmărește pe X", followOnThreads: "Urmărește pe Threads", homeLabel: `${SITE_NAME} Acasă`, read: "Citește", productLabel: "Produs", resourcesLabel: "Resurse", appScreenshots: "Capturi din aplicație", productHuntAlt: "ScreenshotBro App - Proiectează și exportă capturi de ecran superbe pentru App Store. | Product Hunt" },
    featureTitles: ["Editare multi-șablon", "Rame de dispozitive", "Fundaluri & extindere", "Instrumente de forme + SVG", "Aliniere inteligentă", "Export localizat", "Încărcare în App Store Connect", "Agenți AI & MCP", "Localizare integrată", "Nativ pentru Mac, iPad & iPhone", "Sincronizare iCloud", "Fonturi personalizate", "Șabloane de proiect", "Scurtături de tastatură", "Confidențialitate prioritară", "Import în masă al imaginilor", "Plan gratuit permanent"],
    featureDescription: "Instrumente dedicate pentru capturi de ecran multilingve, cu performanță nativă, șabloane reutilizabile și exporturi gata de încărcare.",
    withoutBroPoints: ["Redimensionarea manuală a fiecărei capturi în Figma sau Photoshop", "Copierea ramelor de dispozitive una câte una între artboard-uri", "Reexportarea tuturor fișierelor la schimbarea unei singure culori", "Duplicarea întregului proiect pentru fiecare limbă și pierderea controlului traducerilor", "Tragerea manuală a fiecărui fișier PNG în App Store Connect"],
    withBroPoints: ["Proiectează un singur șablon și toate variantele se actualizează instantaneu", "Adaugă rame de dispozitive cu un clic și alege modelul și culoarea", "Adaugă mai multe limbi cu înlocuiri de text per formă", "Exportă toate capturile, limbile și dimensiunile cu un singur clic", "Încarcă direct în App Store Connect fără a deschide browserul"],
    showcaseLabels: ["Import în masă", "Încărcare automată", "Forme și straturi", "Fundaluri", "Rame de dispozitive"],
    showcaseTitles: ["Trage, plasează, gata.", "Încărcare în App Store Connect cu un singur clic.", "Construiește strat cu strat.", "Creează fundaluri impresionante.", "Personalizează ramele dispozitivelor."],
    showcaseDescription: "Fluxul de lucru de bază arată cum Screenshot Bro elimină pașii repetitivi de design, export și încărcare.",
    screenshotCaptions: ["Proiectează capturi de ecran superbe pentru App Store", "Exportă întregul proiect deodată", "Alege din șabloanele integrate", "Localizează capturile de ecran cu ușurință", "Adaugă rame realiste de dispozitive", "Creează fundaluri spectaculoase", "Adaugă SVG-uri, forme și imagini"],
    screenshotAltSuffix: "Captură de ecran din interfața Screenshot Bro",
    workflowTitles: ["Configurează rândurile", "Proiectează și localizează", "Exportă tot", "Încarcă în App Store Connect"],
    workflowDescription: "De la dimensiunile dispozitivelor până la exportul multilingv și încărcare — întregul flux de lucru într-o singură aplicație nativă.",
    testimonialQuotes: ["Obișnuiam să petrec o după-amiază întreagă cu capturile după fiecare lansare. Cu Screenshot Bro am configurat șabloanele o dată, iar acum doar schimb imaginile și export.", "Funcția de localizare este salvatoare. Suport 6 limbi, iar exportul tuturor era cea mai grea parte a fiecărei actualizări. Acum se face cu un singur clic.", "În sfârșit un instrument care nu stă în cale. Fără plugin-uri de Figma, fără tab-uri de browser — doar o aplicație nativă rapidă care își face treaba."],
    developerLabel: "dezvoltator",
  }),
  ms: compactLandingContent({
    socialImageAlt: "Screenshot Bro — aplikasi natif Mac, iPad dan iPhone untuk mereka bentuk tangkapan skrin App Store dan Google Play dengan bingkai peranti, kecerunan dan penyetempatan",
    ui: { docs: "Dokumentasi", redditCommunity: "Komuniti Reddit", followOnX: "Ikuti di X", followOnThreads: "Ikuti di Threads", homeLabel: `${SITE_NAME} Utama`, read: "Baca", productLabel: "Produk", resourcesLabel: "Sumber", appScreenshots: "Tangkapan skrin aplikasi", productHuntAlt: "ScreenshotBro App - Reka dan eksport tangkapan skrin App Store yang cantik. | Product Hunt" },
    featureTitles: ["Penyuntingan pelbagai templat", "Bingkai peranti", "Latar belakang & rentangan", "Alat bentuk + SVG", "Penjajaran pintar", "Eksport setempat", "Muat naik ke App Store Connect", "Ejen AI & MCP", "Penyetempatan terbina dalam", "Natif untuk Mac, iPad & iPhone", "Penyelarasan iCloud", "Fon tersuai", "Templat projek", "Pintasan papan kekunci", "Privasi diutamakan", "Import imej secara pukal", "Pelan percuma selamanya"],
    featureDescription: "Alat khusus untuk tangkapan skrin gedung berbilang bahasa dengan prestasi natif, templat boleh guna semula dan eksport sedia dimuat naik.",
    withoutBroPoints: ["Mengubah saiz setiap tangkapan skrin secara manual dalam Figma atau Photoshop", "Menyalin bingkai peranti satu persatu antara artboard", "Mengeksport semula semua fail apabila menukar satu warna sahaja", "Menduplikasi segalanya untuk setiap bahasa dan hilang kawalan terjemahan", "Menyeret setiap fail PNG ke App Store Connect secara manual"],
    withBroPoints: ["Reka satu templat dan semua varian dikemas kini serta-merta", "Tambah bingkai peranti dengan satu klik serta pilih model dan warna", "Tambah pelbagai bahasa dengan penggantian teks bagi setiap bentuk", "Eksport semua tangkapan skrin, bahasa dan saiz dengan satu klik", "Muat naik terus ke App Store Connect tanpa memerlukan pelayar web"],
    showcaseLabels: ["Import pukal", "Muat naik automatik", "Bentuk dan lapisan", "Latar belakang", "Bingkai peranti"],
    showcaseTitles: ["Tarik, lepas, siap.", "Muat naik ke App Store Connect dengan satu klik.", "Bina lapisan demi lapisan.", "Cipta latar belakang yang menakjubkan.", "Sesuaikan bingkai peranti."],
    showcaseDescription: "Aliran kerja utama menunjukkan bagaimana Screenshot Bro menghapuskan tugas reka bentuk, eksport dan muat naik yang berulang.",
    screenshotCaptions: ["Reka tangkapan skrin App Store yang menawan", "Eksport seluruh projek sekali gus", "Pilih daripada templat terbina dalam", "Setempatkan tangkapan skrin dengan mudah", "Tambah bingkai peranti realistik", "Cipta latar belakang yang cantik", "Tambah SVG, bentuk dan imej"],
    screenshotAltSuffix: "Tangkapan skrin antara muka Screenshot Bro",
    workflowTitles: ["Sediakan baris", "Reka & setempatkan", "Eksport semua", "Muat naik ke App Store Connect"],
    workflowDescription: "Daripada saiz peranti hingga eksport pelbagai bahasa dan muat naik — seluruh aliran kerja dalam satu aplikasi natif.",
    testimonialQuotes: ["Dulu saya luangkan sepanjang petang untuk tangkapan skrin selepas setiap keluaran. Dengan Screenshot Bro, saya sediakan templat sekali dan kini hanya tukar gambar dan tekan eksport.", "Ciri penyetempatan sangat membantu. Saya menyokong 6 bahasa dan mengeksport semuanya adalah bahagian paling leceh. Kini hanya perlu satu klik.", "Akhirnya ada alat yang memudahkan kerja. Tiada pemalam Figma, tiada tab pelayar — hanya aplikasi natif pantas yang menyelesaikan tugas."],
    developerLabel: "pembangun",
  }),
};

const LOCALIZED_OVERRIDES: Record<Exclude<LocaleCode, "en">, HomeCopyOverrides> = {
  es: {
    siteTitle: `${SITE_NAME} — Capturas de App Store y Google Play en Mac`,
    siteDescription:
      "Diseña capturas para App Store y Google Play en una app nativa para Mac, iPad y iPhone. Marcos de dispositivos, localización y subida a App Store Connect.",
    primaryCtaLabel: "Ver en App Store",
    navItems: [
      { label: "Ejemplos", href: "#showcases" },
      { label: "Funciones", href: "#features" },
      { label: "Flujo", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Disponible ahora en la App Store para Mac, iPad y iPhone",
      "Flujo completo: importar, diseñar, traducir, localizar y exportar",
      "Subida directa a App Store Connect sin arrastrar archivos en el navegador",
    ],
    faqs: [
      {
        question: "¿Screenshot Bro es gratis?",
        answer:
          "Sí. El nivel gratuito no caduca: 1 proyecto con hasta 3 filas y 5 plantillas por fila, con acceso completo a todos los marcos de dispositivos, formas y locales, exportaciones sin marca de agua, subida a App Store Connect y Google Play, y sincronización por iCloud. Pro elimina los límites de proyectos, filas y plantillas.",
      },
      {
        question: "¿En qué se diferencia de un generador de capturas de App Store basado en web?",
        answer:
          "Screenshot Bro es una aplicación nativa para Mac, iPad e iPhone en lugar de una herramienta de navegador, por lo que los proyectos, capturas y tipografías se guardan en el disco y la edición diaria no requiere cuenta ni conexión a internet. El renderizado y la exportación por lotes se ejecutan en tu propio hardware en lugar de un servidor. Si estás en Windows o Linux, deseas colaborar en una sesión de navegador compartida o solo necesitas una o dos imágenes, una herramienta web es una mejor opción; nuestra página de alternativas cubre esos casos.",
      },
      {
        question: "¿Qué necesito para usarlo?",
        answer:
          "macOS 15 (Sequoia) o posterior en Mac, iPadOS 18 o posterior en iPad, o iOS 18 o posterior en iPhone. No hace falta dispositivo acompañante, cuenta ni conexión a internet para la edición diaria.",
      },
      {
        question: "¿Mis datos salen de mi dispositivo?",
        answer:
          "Tu trabajo no. Los proyectos, capturas y tipografías se guardan en tu disco. La traducción automática se ejecuta en el dispositivo a través del framework Translation de Apple: sin claves API ni servidores externos. La sincronización opcional con iCloud Drive usa tu cuenta personal de iCloud; no gestionamos servidores intermediarios. Lo único que se envía es un informe de fallos anónimo cuando algo se rompe, además de recuentos anónimos de hitos como «una exportación finalizada» para saber qué mejorar: nunca tus proyectos, imágenes ni el texto que escribes.",
      },
      {
        question: "¿Cómo funciona la localización?",
        answer:
          "Elige entre 81 idiomas predefinidos o añade tu propio código. La traducción automática en el dispositivo rellena el texto que falte. Las traducciones se guardan como modificaciones de texto por idioma, por lo que el diseño, color e imágenes se comparten entre todos los idiomas: diseña una vez y publica en cualquier idioma. Las exportaciones se organizan en carpetas por idioma listas para App Store Connect.",
      },
      {
        question: "¿Puedo crear capturas para Google Play también?",
        answer:
          "Sí. Las filas para teléfonos y tablets Android se renderizan junto a las de iPhone, iPad y Mac en el mismo proyecto. Cada categoría de dispositivo viene preconfigurada con las dimensiones exactas en píxeles que acepta la tienda correspondiente.",
      },
      {
        question: "¿Puedo arrastrar capturas de simuladores y dispositivos directamente?",
        answer:
          "Sí. Arrastra una carpeta de capturas y Screenshot Bro dirigirá cada una a la fila correcta según su tamaño en píxeles: las de iPhone a la fila de iPhone, iPad a iPad y Android a Android. Un botón de captura de un clic en cada plantilla también inserta la captura de simulador más reciente directamente en el lienzo.",
      },
      {
        question: "¿Puedo subir directo a App Store Connect desde la app?",
        answer:
          "Sí. Configura tu clave API de App Store Connect una vez (Issuer ID, Key ID y archivo .p8). Screenshot Bro detecta automáticamente el display type correcto para cada fila, casa los idiomas del proyecto con las localizaciones de App Store Connect y reemplaza las capturas existentes en una sola pasada, sin arrastrar archivos en el navegador.",
      },
      {
        question: "¿Se sincroniza entre dispositivos?",
        answer:
          "Sí: la sincronización opcional con iCloud Drive mantiene los proyectos, capturas y fuentes disponibles en cada Mac, iPad e iPhone con tu misma cuenta de Apple. Los conflictos se resuelven campo por campo con la regla del último cambio (last-writer-wins), por lo que editar el mismo proyecto en varios dispositivos se sincroniza a la perfección.",
      },
      {
        question: "¿Puede un agente de IA crear mis capturas?",
        answer:
          "Sí. Screenshot Bro incluye un servidor MCP local y opcional en Mac, de modo que un asistente como Claude Code, Claude Desktop o Cursor puede crear proyectos, colocar filas y formas, importar capturas, traducir el texto, renderizar vistas previas que puede ver, exportar y sincronizar el set final con App Store Connect. El servidor solo escucha en 127.0.0.1, cada petición necesita un token de acceso que copias desde Ajustes y cualquier cambio del agente se deshace con ⌘Z.",
      },
      {
        question: "¿Dónde consigo ayuda?",
        answer:
          "Únete al Discord de Screenshot Bro: es la vía más rápida para hablar con el desarrollador, reportar un fallo, preguntar cómo funciona algo y ver qué está por llegar. El correo también sirve para cualquier asunto privado o relacionado con tu cuenta, y la documentación cubre cada parte del editor.",
      },
    ],
    ui: {
      skipToContent: "Saltar al contenido",
      tutorials: "Tutoriales",
      docs: "Documentación",
      changelog: "Novedades",
      comparisons: "Todas las comparativas",
      vsFastlane: "Comparar con Fastlane",
      community: "Comunidad",
      joinDiscord: "Únete al Discord",
      privacy: "Privacidad",
      terms: "Términos",
      contact: "Contacto",
      friends: "Amigos",
      followJourney: "Sigue mi progreso",
      madeWithLoveAt: "Hecho con ❤️ en",
      language: "Idioma",
      sectionsLabel: "Secciones",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      seeInAction: "Ver cómo funciona",
      tryItNow: "Pruébalo ahora",
      seeDetails: "Ver detalles",
      browseGuides: "Ver todas las guías",
      submitApp: "Envía tu app",
      contactDeveloper: "Contactar al desarrollador",
      backToTop: "Volver arriba",
      previousScreenshot: "Captura anterior",
      nextScreenshot: "Captura siguiente",
      goToScreenshot: (index) => `Ir a la captura ${index}`,
      slideCount: (index, total) => `${index} de ${total}`,
      availabilityNote:
        "App para macOS 15+ y iOS/iPadOS 18+ | Swift y SwiftUI | Disponible en la App Store",
    },
    hero: {
      titleLead: "Diseña y publica",
      titleAccent: "App Store",
      titleRest: " capturas.",
      descriptionLead:
        "Importa tus capturas, añade marcos de dispositivo, localiza el texto, traduce lo que falte y",
      descriptionStrong: "sube todo directo a App Store Connect",
      descriptionTail: "— desde una app nativa para Mac, iPad y iPhone rápida.",
    },
    sections: {
      showcases: {
        eyebrow: "Ejemplos",
        title: "Mira el flujo principal antes de instalar.",
        description:
          "Importación por lotes, subida a App Store Connect, capas, fondos y marcos de dispositivo en un solo flujo.",
      },
      problem: {
        eyebrow: "Por qué existe",
        title:
          "Publicar una función nueva no debería obligarte a rehacer todas las capturas.",
        description:
          "Screenshot Bro nació del mismo problema de muchos equipos: cambia el producto y las capturas se convierten otra vez en un mini-proyecto repetitivo.",
      },
      workflow: {
        eyebrow: "Flujo",
        title: "Un camino más corto desde capturas brutas hasta assets listos.",
        description:
          "La app se centra en una tarea: crear capturas pulidas sin mantener decenas de archivos de diseño sueltos.",
      },
      features: {
        eyebrow: "Capacidades",
        title: "Todo lo necesario. Nada de ruido.",
        description:
          "Velocidad de maquetación, consistencia y exportación ordenada sin navegador ni redimensionado repetitivo.",
      },
      screenshots: {
        eyebrow: "Capturas",
        title: "Míralo en acción.",
        description:
          "Capturas reales de Screenshot Bro en la App Store: el mismo editor que usarás para tus assets.",
      },
      testimonials: {
        eyebrow: "Desarrolladores",
        title: "Lo que dicen los desarrolladores.",
        description:
          "Comentarios reales de desarrolladores indie que usan Screenshot Bro en producción.",
      },
      blog: {
        eyebrow: "Del blog",
        title: "Guías para enviar mejores capturas de App Store.",
        description:
          "Referencias y guías para tamaños, localización, subida y diseño de capturas.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Preguntas frecuentes antes de probarlo.",
        description:
          "Respuestas sobre compatibilidad, exportación y el flujo principal.",
      },
      appShowcase: {
        eyebrow: "Creado con Screenshot Bro",
        title: "Estarías en buena compañía.",
        description:
          "Apps indie que ya usan Screenshot Bro para sus capturas de App Store y Google Play.",
      },
    },
    problem: {
      story:
        "Lo construí después de pasar demasiado tiempo en Figma rehaciendo capturas cada vez que cambiaba el texto, los degradados o los idiomas. La idea es simple: diseña el sistema una vez y deja que la app haga lo repetitivo.",
      withoutLabel: "Sin Screenshot Bro",
      withLabel: "Con Screenshot Bro",
    },
    download: {
      titleLine1: "Listo para publicar",
      titleLine2: "mejores capturas?",
      description:
        "Descárgalo desde la App Store y usa el flujo completo en Mac o iPad: configuración, diseño, traducción automática, localización y exportación.",
    },
    footer: {
      note:
        "Creado con SwiftUI. Diseñado para desarrolladores que publican actualizaciones en App Store.",
    },
  },
  zh: {
    siteTitle: `${SITE_NAME} — Mac、iPad 和 iPhone 上的 App Store 与 Google Play 截图设计工具`,
    siteDescription:
      "用原生 Mac、iPad 和 iPhone 应用设计 App Store 和 Google Play 截图。设备边框、本地化、自动翻译、批量导出，并可直接上传到 App Store Connect。",
    primaryCtaLabel: "在 App Store 获取",
    benefits: [
      "现已在 Mac、iPad 和 iPhone 的 App Store 上架",
      "完整流程：导入、设计、自动翻译、本地化和导出",
      "直接上传到 App Store Connect，不再在浏览器里拖放文件",
    ],
    faqs: [
      {
        question: "Screenshot Bro 是免费的吗？",
        answer:
          "是的。免费版本没有时间限制，支持保留 1 个项目、最多 3 行及每行 5 个模版，可无限制使用所有机型框架、图形与多语言，导出绝无水印，且包含 App Store Connect 和 Google Play 上传以及 iCloud 同步功能。升级至 Pro 版可解锁项目、行数和模版数量限制。",
      },
      {
        question: "它与基于网页的 App Store 截图生成器有何不同？",
        answer:
          "Screenshot Bro 是一款专为 Mac、iPad 和 iPhone 打造的原生应用，而不是网页工具。因此项目、截图和字体完全保存在本地磁盘上，日常编辑无需注册账号，也无需联网。渲染和批量导出均利用你本地设备的硬件性能，而非远端服务器。如果你使用 Windows 或 Linux、需要多人网页协同，或者只需要制作一两张图片，网页版截图工具可能更适合——替代方案页面涵盖了这些场景。",
      },
      {
        question: "运行需要什么系统环境？",
        answer:
          "Mac 需运行 macOS 15 (Sequoia) 或更高版本，iPad 需 iPadOS 18 或更高版本，iPhone 需 iOS 18 或更高版本。日常编辑无需辅助设备、无需注册账号，也无需网络连接。",
      },
      {
        question: "我的数据会离开本地设备吗？",
        answer:
          "你的创作内容绝不会离开设备。项目、截图和字体均保存在本地磁盘中。自动翻译完全通过 Apple 本地端 Translation 框架运行，无需 API 密钥或第三方服务器。可选的 iCloud Drive 同步直接使用你的个人 iCloud 账户，我们不架设任何中间服务器。我们仅在应用崩溃时接收匿名错误报告，以及诸如「完成了一次导出」等匿名里程碑计数以持续改进产品，绝不会收集你的项目、图片或输入的文字。",
      },
      {
        question: "多语言本地化是如何运作的？",
        answer:
          "你可以从 81 种预设语言中选择，也可以自定义语言代码。设备端自动翻译会补全缺失的文案。翻译内容以每种语言的文本覆盖形式保存，因此排版、配色和图像在所有语言之间共享——只需设计一次，即可发布所有语言版本。导出时会自动按语言建立文件夹，App Store Connect 可以直接读取。",
      },
      {
        question: "我可以制作 Google Play 截图吗？",
        answer:
          "可以。Android 手机和平板截图行可以与 iPhone、iPad 和 Mac 放在同一个项目中并排设计。每个设备分类均预设了对应商店官方认可的像素尺寸。",
      },
      {
        question: "可以直接拖入模拟器和真机截图吗？",
        answer:
          "可以。直接拖入包含截图的文件夹，Screenshot Bro 会根据像素尺寸自动将每张截图分配到正确的行——iPhone 截图进 iPhone 行，iPad 进 iPad 行，Android 进 Android 行。每个模版上的一键截取按钮还可以直接将最新的模拟器截图提取到画布中。",
      },
      {
        question: "可以在应用内直接上传到 App Store Connect 吗？",
        answer:
          "可以。只需配置一次 App Store Connect API 密钥（Issuer ID、Key ID 及 .p8 密钥文件），Screenshot Bro 就会自动识别每行的正确展示类型（display type），将项目语言与 App Store Connect 语言设置精准匹配，并一键替换已有截图——彻底告别在浏览器中手动拖拽文件的繁琐。",
      },
      {
        question: "它能在多台设备之间同步吗？",
        answer:
          "可以——开启可选的 iCloud Drive 同步后，登录同一 Apple 账户的所有 Mac、iPad 和 iPhone 都可以无缝访问项目、截图和字体。冲突采用字段级“以最后写入为准”规则合并，因此在多台设备上编辑同一项目也能平滑收敛。",
      },
      {
        question: "AI 智能体可以帮我制作截图吗？",
        answer:
          "可以。Screenshot Bro 在 Mac 上内置了可选的本地 MCP 服务器，Claude Code、Claude Desktop 或 Cursor 等助手可以创建项目、排布行与图形、导入截图、翻译文案、渲染它能实际查看的预览、导出，并把完成的截图同步到 App Store Connect。服务器仅监听 127.0.0.1，每个请求都需要你在设置中复制的访问令牌，智能体的每一次改动都可以用 ⌘Z 撤销。",
      },
      {
        question: "我该去哪里获取支持？",
        answer:
          "加入 Screenshot Bro 的 Discord 社区——这是联系开发者、反馈 Bug、询问用法以及了解后续更新最快的方式。涉及隐私或账号的问题也可以直接发邮件，帮助文档则涵盖了编辑器的每个功能。",
      },
    ],
    navItems: [
      { label: "演示", href: "#showcases" },
      { label: "功能", href: "#features" },
      { label: "流程", href: "#workflow" },
      { label: "常见问题", href: "#faq" },
    ],
    ui: {
      skipToContent: "跳到内容",
      blog: "博客",
      tutorials: "教程",
      changelog: "更新日志",
      comparisons: "全部对比",
      vsFastlane: "对比 Fastlane",
      community: "社区",
      joinDiscord: "加入 Discord 社区",
      privacy: "隐私",
      terms: "条款",
      contact: "联系",
      friends: "朋友的应用",
      followJourney: "关注我的进展",
      madeWithLoveAt: "用 ❤️ 制作于",
      language: "语言",
      sectionsLabel: "章节",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      seeInAction: "查看演示",
      tryItNow: "立即试用",
      seeDetails: "查看详情",
      browseGuides: "浏览所有指南",
      submitApp: "提交你的 App",
      contactDeveloper: "联系开发者",
      backToTop: "返回顶部",
      previousScreenshot: "上一张截图",
      nextScreenshot: "下一张截图",
      goToScreenshot: (index) => `转到第 ${index} 张截图`,
      slideCount: (index, total) => `${index} / ${total}`,
      availabilityNote: "macOS 15+ 和 iOS/iPadOS 18+ 应用 | Swift 和 SwiftUI | 已上架 App Store",
    },
    hero: {
      titleLead: "设计并发布",
      titleAccent: "App Store",
      titleRest: " 截图。",
      descriptionLead:
        "导入截图，套用设备边框，本地化文案，自动翻译缺失文本，并",
      descriptionStrong: "直接上传到 App Store Connect",
      descriptionTail: "— 全部在一个快速的原生 Mac、iPad 和 iPhone 应用中完成。",
    },
    sections: {
      showcases: {
        eyebrow: "演示",
        title: "安装前先看看核心流程。",
        description:
          "批量导入、一键上传 App Store Connect、图层、背景和设备边框都在同一个流程里。",
      },
      problem: {
        eyebrow: "为什么做它",
        title: "发布一个新功能，不该意味着重做所有商店截图。",
        description:
          "产品更新后，截图文件又变成重复的小项目。Screenshot Bro 就是为解决这个循环而做。",
      },
      workflow: {
        eyebrow: "流程",
        title: "从原始截图到可提交素材，更短的路径。",
        description:
          "它只专注一件事：不用维护一堆一次性设计文件，也能生成精致截图集。",
      },
      features: {
        eyebrow: "功能",
        title: "你需要的都有，不需要的没有。",
        description:
          "专注布局速度、截图一致性和稳定导出，不需要浏览器标签页或重复调整尺寸。",
      },
      screenshots: {
        eyebrow: "截图",
        title: "看看实际界面。",
        description:
          "这些是 Screenshot Bro 自己的 App Store 截图，也是你会使用的同一个编辑器。",
      },
      testimonials: {
        eyebrow: "开发者",
        title: "开发者怎么说。",
        description: "来自正在使用 Screenshot Bro 的独立开发者反馈。",
      },
      blog: {
        eyebrow: "博客",
        title: "帮助你发布更好商店截图的指南。",
        description: "关于尺寸、本地化、上传和截图设计的参考与实践指南。",
      },
      faq: {
        eyebrow: "常见问题",
        title: "试用前大家最常问的问题。",
        description: "关于兼容性、导出和核心流程的主要答案。",
      },
      appShowcase: {
        eyebrow: "由 Screenshot Bro 制作",
        title: "你会和这些应用在一起。",
        description: "已有独立应用使用 Screenshot Bro 制作商店截图。",
      },
    },
    problem: {
      story:
        "我做它，是因为每次文案、渐变或语言变化，都要在 Figma 里重新处理 App Store 截图太浪费时间。目标很简单：系统设计一次，重复工作交给应用。",
      withoutLabel: "没有 Screenshot Bro",
      withLabel: "使用 Screenshot Bro",
    },
    download: {
      titleLine1: "准备发布",
      titleLine2: "更好的截图？",
      description:
        "从 App Store 下载，并在 Mac 或 iPad 上使用完整截图流程：设置、设计、自动翻译、本地化和导出。",
    },
    footer: {
      note: "使用 SwiftUI 构建。为需要发布 App Store 更新的开发者设计。",
    },
  },
  hi: {
    siteTitle: `${SITE_NAME} — App Store और Google Play स्क्रीनशॉट Mac पर`,
    siteDescription:
      "नेटिव Mac, iPad और iPhone ऐप में App Store और Google Play स्क्रीनशॉट डिजाइन करें। डिवाइस फ्रेम, लोकलाइजेशन और App Store Connect पर सीधा अपलोड।",
    primaryCtaLabel: "App Store पर पाएं",
    benefits: [
      "Mac, iPad और iPhone के लिए App Store पर अभी उपलब्ध",
      "पूरा workflow: import, design, auto-translate, localize और export",
      "App Store Connect पर सीधा upload, browser में drag-and-drop नहीं",
    ],
    faqs: [
      {
        question: "क्या Screenshot Bro मुफ़्त है?",
        answer:
          "हाँ। मुफ़्त टियर असीमित समय के लिए है और आपको प्रति पंक्ति 5 टेम्प्लेट तक 3 पंक्तियों के साथ 1 प्रोजेक्ट रखने की अनुमति देता है — हर डिवाइस फ़्रेम, आकार और भाषा तक पूरी पहुँच, वॉटरमार्क-मुक्त निर्यात, App Store Connect और Google Play अपलोड, तथा iCloud सिंक शामिल है। Pro वर्ज़न प्रोजेक्ट, पंक्ति और टेम्प्लेट की सीमाओं को हटा देता है।",
      },
      {
        question: "यह वेब-आधारित App Store स्क्रीनशॉट जेनरेटर से कैसे अलग है?",
        answer:
          "Screenshot Bro ब्राउज़र टूल के बजाय एक नेटिव Mac, iPad और iPhone ऐप है, इसलिए प्रोजेक्ट, स्क्रीनशॉट और फ़ॉन्ट डिस्क पर रहते हैं और रोज़मर्रा के संपादन के लिए किसी खाते या इंटरनेट कनेक्शन की आवश्यकता नहीं होती है। रेंडरिंग और बैच निर्यात सर्वर के बजाय आपके अपने हार्डवेयर पर चलते हैं। यदि आप Windows या Linux पर हैं, किसी ब्राउज़र सत्र में सहयोग करना चाहते हैं, या केवल एक या दो छवियों की आवश्यकता है, तो एक वेब टूल बेहतर विकल्प है — विकल्प पृष्ठ उन मामलों को कवर करता है।",
      },
      {
        question: "इसे चलाने के लिए क्या आवश्यकता है?",
        answer:
          "Mac पर macOS 15 (Sequoia) या बाद का वर्ज़न, iPad पर iPadOS 18 या बाद का, या iPhone पर iOS 18 या बाद का। रोज़मर्रा के संपादन के लिए किसी साथी डिवाइस, खाते या इंटरनेट कनेक्शन की आवश्यकता नहीं है।",
      },
      {
        question: "क्या मेरा डेटा मेरे डिवाइस से बाहर जाता है?",
        answer:
          "आपका काम नहीं जाता। प्रोजेक्ट, स्क्रीनशॉट और फ़ॉन्ट डिस्क पर रहते हैं। स्वचालित अनुवाद Apple के ऑन-डिवाइस Translation फ़्रेमवर्क के माध्यम से चलता है — कोई API कुंजी या तृतीय-पक्ष सर्वर नहीं। वैकल्पिक iCloud Drive सिंक आपके व्यक्तिगत iCloud खाते का उपयोग करता है; हम कोई मध्यस्थ सर्वर संचालित नहीं करते हैं। जब कोई समस्या आती है तो केवल एक अनाम क्रैश रिपोर्ट भेजी जाती है, साथ ही सुधार के लिए 'एक निर्यात पूरा हुआ' जैसे अनाम माइलस्टोन काउंट — कभी भी आपके प्रोजेक्ट, छवियां या आपके द्वारा लिखा गया टेक्स्ट नहीं।",
      },
      {
        question: "स्थानीयकरण (Localization) कैसे काम करता है?",
        answer:
          "81 भाषा प्रीसेट में से चुनें, या अपना स्वयं का कोड परिभाषित करें। ऑटो-ट्रांसलेट डिवाइस पर छूटे हुए टेक्स्ट को भरता है। अनुवाद प्रति-भाषा टेक्स्ट ओवरराइड के रूप में सहेजते हैं, इसलिए लेआउट, रंग और छवियां हर भाषा में साझा रहती हैं — एक बार डिज़ाइन करें, हर भाषा में शिप करें। निर्यात भाषा फ़ोल्डरों में व्यवस्थित होते हैं जिन्हें App Store Connect सीधे ले सकता है।",
      },
      {
        question: "क्या मैं Google Play स्क्रीनशॉट भी बना सकता हूँ?",
        answer:
          "हाँ। एक ही प्रोजेक्ट में iPhone, iPad और Mac के साथ Android फ़ोन और टैबलेट पंक्तियाँ भी रेंडर होती हैं। प्रत्येक डिवाइस श्रेणी संबंधित स्टोर द्वारा स्वीकृत पिक्सेल आयामों पर पहले से सेट होती है।",
      },
      {
        question: "क्या मैं सिम्युलेटर और डिवाइस स्क्रीनशॉट सीधे ड्रॉप कर सकता हूँ?",
        answer:
          "हाँ। स्क्रीनशॉट का एक फ़ोल्डर ड्रॉप करें और Screenshot Bro प्रत्येक को उसके पिक्सेल आकार के अनुसार सही पंक्ति में भेजता है — iPhone शॉट्स iPhone पंक्ति में, iPad शॉट्स iPad में, Android शॉट्स Android में। प्रत्येक टेम्प्लेट पर एक-क्लिक कैप्चर बटन सबसे हालिया सिम्युलेटर स्क्रीनशॉट को सीधे कैनवास में खींचता है।",
      },
      {
        question: "क्या मैं ऐप के भीतर से सीधे App Store Connect पर अपलोड कर सकता हूँ?",
        answer:
          "हाँ। अपनी App Store Connect API कुंजी को एक बार कॉन्फ़िगर करें (Issuer ID, Key ID, और .p8 फ़ाइल)। Screenshot Bro प्रत्येक पंक्ति के लिए सही डिस्प्ले प्रकार का स्वतः पता लगाता है, आपके प्रोजेक्ट की भाषाओं को App Store Connect स्थानीयकरण से मिलाता है, और एक ही बार में मौजूदा स्क्रीनशॉट को बदल देता है — ब्राउज़र में ड्रैग-एंड-ड्रॉप की कोई आवश्यकता नहीं।",
      },
      {
        question: "क्या यह विभिन्न डिवाइसों के बीच सिंक होता है?",
        answer:
          "हाँ — ऑप्ट-इन iCloud Drive सिंक आपके Apple खाते में साइन इन किए गए प्रत्येक Mac, iPad और iPhone पर प्रोजेक्ट, स्क्रीनशॉट और फ़ॉन्ट उपलब्ध रखता है। विवादों को फ़ील्ड-दर-फ़ील्ड लास्ट-राइटर-विन्स के साथ सुचारू रूप से मर्ज किया जाता है।",
      },
      {
        question: "क्या कोई AI एजेंट मेरे स्क्रीनशॉट बना सकता है?",
        answer:
          "हाँ। Screenshot Bro में Mac पर एक वैकल्पिक लोकल MCP सर्वर है, जिससे Claude Code, Claude Desktop या Cursor जैसे असिस्टेंट प्रोजेक्ट बना सकते हैं, रो और शेप लगा सकते हैं, स्क्रीनशॉट इंपोर्ट कर सकते हैं, टेक्स्ट का अनुवाद कर सकते हैं, प्रीव्यू रेंडर करके देख सकते हैं, एक्सपोर्ट कर सकते हैं और तैयार सेट को App Store Connect पर सिंक कर सकते हैं। सर्वर सिर्फ 127.0.0.1 पर सुनता है, हर अनुरोध के लिए सेटिंग्स से कॉपी किया गया एक्सेस टोकन चाहिए, और एजेंट का हर बदलाव ⌘Z से वापस लिया जा सकता है।",
      },
      {
        question: "मुझे सहायता कहाँ मिलेगी?",
        answer:
          "Screenshot Bro के Discord से जुड़ें — डेवलपर तक पहुँचने, बग रिपोर्ट करने, कुछ पूछने और आगे क्या आ रहा है यह जानने का यह सबसे तेज़ तरीका है। निजी या खाते से जुड़ी बातों के लिए ईमेल भी कर सकते हैं, और सहायता दस्तावेज़ एडिटर के हर हिस्से को कवर करते हैं।",
      },
    ],
    navItems: [
      { label: "शोकेस", href: "#showcases" },
      { label: "फीचर", href: "#features" },
      { label: "वर्कफ्लो", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    ui: {
      skipToContent: "कंटेंट पर जाएं",
      blog: "ब्लॉग",
      tutorials: "ट्यूटोरियल",
      docs: "दस्तावेज़",
      changelog: "बदलाव",
      comparisons: "सभी तुलनाएं",
      vsFastlane: "Fastlane से तुलना",
      community: "समुदाय",
      joinDiscord: "Discord से जुड़ें",
      privacy: "प्राइवेसी",
      terms: "शर्तें",
      contact: "संपर्क",
      friends: "दोस्तों के ऐप्स",
      followJourney: "मेरी यात्रा देखें",
      madeWithLoveAt: "❤️ से बनाया, यहां:",
      language: "भाषा",
      productLabel: "उत्पाद",
      resourcesLabel: "संसाधन",
      sectionsLabel: "अनुभाग",
      openMenu: "मेनू खोलें",
      closeMenu: "मेनू बंद करें",
      seeInAction: "काम करते देखें",
      tryItNow: "अभी आजमाएं",
      seeDetails: "विवरण देखें",
      browseGuides: "सभी गाइड देखें",
      submitApp: "अपना ऐप भेजें",
      contactDeveloper: "डेवलपर से संपर्क करें",
      backToTop: "ऊपर जाएं",
      previousScreenshot: "पिछला स्क्रीनशॉट",
      nextScreenshot: "अगला स्क्रीनशॉट",
      goToScreenshot: (index) => `स्क्रीनशॉट ${index} पर जाएं`,
      slideCount: (index, total) => `${index} / ${total}`,
      availabilityNote:
        "macOS 15+ और iOS/iPadOS 18+ ऐप | Swift और SwiftUI | App Store पर उपलब्ध",
    },
    hero: {
      titleLead: "डिजाइन करें और शिप करें",
      titleAccent: "App Store",
      titleRest: " स्क्रीनशॉट।",
      descriptionLead:
        "अपने शॉट्स इंपोर्ट करें, डिवाइस फ्रेम लगाएं, कॉपी लोकलाइज करें, छूटा टेक्स्ट ऑटो-ट्रांसलेट करें और",
      descriptionStrong: "सीधे App Store Connect पर अपलोड करें",
      descriptionTail: "— सब एक तेज नेटिव Mac, iPad और iPhone ऐप से।",
    },
    sections: {
      showcases: {
        eyebrow: "शोकेस",
        title: "इंस्टॉल करने से पहले मुख्य वर्कफ्लो देखें।",
        description:
          "बैच इंपोर्ट, एक-क्लिक App Store Connect अपलोड, लेयर्स, बैकग्राउंड और डिवाइस फ्रेम एक ही जगह।",
      },
      problem: {
        eyebrow: "क्यों बनाया गया",
        title:
          "एक नया फीचर शिप करने का मतलब हर स्क्रीनशॉट दोबारा बनाना नहीं होना चाहिए।",
        description:
          "उत्पाद अपडेट के बाद स्क्रीनशॉट सेट फिर से दोहराव वाला काम बन जाता है। Screenshot Bro इसी समस्या से निकला।",
      },
      workflow: {
        eyebrow: "वर्कफ्लो",
        title: "कच्चे स्क्रीनशॉट से App Store-ready assets तक छोटा रास्ता।",
        description:
          "ऐप एक काम पर केंद्रित है: कई अलग-अलग डिजाइन फाइलें संभाले बिना polished screenshot sets बनाना।",
      },
      features: {
        eyebrow: "क्षमताएं",
        title: "जो चाहिए वह सब। गैरजरूरी कुछ नहीं।",
        description:
          "तेज लेआउट, consistent screenshots और साफ export पर फोकस। कोई browser tab या repeated resize नहीं।",
      },
      screenshots: {
        eyebrow: "स्क्रीनशॉट",
        title: "इसे काम करते देखें।",
        description:
          "Screenshot Bro के App Store screenshots: वही editor जिससे आप अपने screenshots बनाएंगे।",
      },
      testimonials: {
        eyebrow: "डेवलपर्स",
        title: "डेवलपर्स क्या कह रहे हैं।",
        description: "प्रोडक्शन में Screenshot Bro इस्तेमाल कर रहे indie developers की राय।",
      },
      blog: {
        eyebrow: "ब्लॉग से",
        title: "बेहतर App Store screenshots शिप करने की गाइड।",
        description: "Sizing, localization, upload और design के लिए references और playbooks.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "ट्राय करने से पहले आम सवाल।",
        description: "Compatibility, export और core workflow के मुख्य जवाब।",
      },
      appShowcase: {
        eyebrow: "Screenshot Bro से शिप किया गया",
        title: "आप अच्छी company में होंगे।",
        description: "Indie apps जो App Store और Google Play screenshots के लिए Screenshot Bro इस्तेमाल कर रहे हैं।",
      },
    },
    problem: {
      story:
        "मैंने इसे इसलिए बनाया क्योंकि हर copy, gradient या language change पर Figma में App Store screenshots दोबारा बनाना बहुत समय लेता था। लक्ष्य सरल है: system एक बार design करें और repetitive काम app को करने दें।",
      withoutLabel: "Screenshot Bro के बिना",
      withLabel: "Screenshot Bro के साथ",
    },
    download: {
      titleLine1: "बेहतर screenshots",
      titleLine2: "ship करने के लिए तैयार?",
      description:
        "App Store से डाउनलोड करें और Mac या iPad पर setup, design, auto-translation, localization और export का पूरा workflow इस्तेमाल करें।",
    },
    footer: {
      note: "SwiftUI से बनाया गया। App Store updates ship करने वाले developers के लिए।",
    },
  },
  fr: {
    siteTitle: `${SITE_NAME} — Captures App Store et Google Play sur Mac`,
    siteDescription:
      "Créez des captures App Store et Google Play dans une app native pour Mac, iPad et iPhone. Cadres d'appareils, localisation et envoi vers App Store Connect.",
    primaryCtaLabel: "Voir sur l'App Store",
    benefits: [
      "Disponible maintenant sur l'App Store pour Mac, iPad et iPhone",
      "Flux complet : import, design, traduction automatique, localisation et export",
      "Envoi direct vers App Store Connect sans glisser-déposer dans le navigateur",
    ],
    faqs: [
      {
        question: "Screenshot Bro est-il gratuit ?",
        answer:
          "Oui. L'offre gratuite est illimitée dans le temps et vous permet de conserver 1 projet avec jusqu'à 3 rangées et 5 modèles par rangée — accès complet à tous les gabarits d'appareils, formes et langues, exports sans filigrane, envoi direct vers App Store Connect et Google Play, et synchronisation iCloud inclus. La version Pro lève les limites de projets, rangées et modèles.",
      },
      {
        question: "En quoi est-ce différent d'un générateur de captures App Store en ligne ?",
        answer:
          "Screenshot Bro est une application native pour Mac, iPad et iPhone et non un outil web dans le navigateur : vos projets, captures et polices restent sur votre disque, et l'édition quotidienne ne nécessite aucun compte ni connexion internet. Le rendu et l'export par lot s'exécutent sur votre propre matériel au lieu d'un serveur. Si vous travaillez sur Windows ou Linux, souhaitez collaborer dans le navigateur ou n'avez besoin que d'une ou deux images, un outil web sera plus adapté — notre page d'alternatives détaille ces cas.",
      },
      {
        question: "Que faut-il pour l'utiliser ?",
        answer:
          "macOS 15 (Sequoia) ou version ultérieure sur Mac, iPadOS 18 ou ultérieur sur iPad, ou iOS 18 ou ultérieur sur iPhone. Aucun appareil compagnon, compte ou connexion internet requis pour l'édition quotidienne.",
      },
      {
        question: "Mes données quittent-elles mon appareil ?",
        answer:
          "Vos créations restent chez vous. Projets, captures et polices restent stockés sur votre disque. La traduction automatique utilise le framework Translation d'Apple directement sur l'appareil : sans clés API ni serveurs tiers. La synchronisation iCloud Drive facultative passe par votre compte personnel iCloud ; nous n'exploitons aucun serveur intermédiaire. Seul un rapport de plantage anonyme est envoyé en cas d'erreur, ainsi que des compteurs anonymes d'étapes clés comme « un export terminé » pour améliorer l'application — jamais vos projets, images ou textes saisis.",
      },
      {
        question: "Comment fonctionne la localisation ?",
        answer:
          "Choisissez parmi 81 langues prédéfinies ou définissez votre propre code. La traduction automatique sur l'appareil comble les textes manquants. Les traductions sont enregistrées sous forme de surcharges par langue : mise en page, couleurs et images restent partagées entre toutes les langues — concevez une fois, publiez dans toutes les langues. Les exports sont organisés en dossiers par langue prêts pour App Store Connect.",
      },
      {
        question: "Puis-je aussi créer des captures pour Google Play ?",
        answer:
          "Oui. Les rangées pour téléphones et tablettes Android s'affichent aux côtés de l'iPhone, de l'iPad et du Mac dans le même projet. Chaque catégorie d'appareil est préconfigurée aux dimensions en pixels exactes acceptées par chaque store.",
      },
      {
        question: "Puis-je glisser-déposer directement des captures de simulateurs ou d'appareils ?",
        answer:
          "Oui. Glissez un dossier de captures et Screenshot Bro achemine chaque fichier vers la bonne rangée selon sa résolution en pixels : les captures iPhone vers la rangée iPhone, iPad vers iPad, Android vers Android. Un bouton de capture en un clic sur chaque modèle permet aussi d'insérer directement la capture de simulateur la plus récente.",
      },
      {
        question: "Puis-je envoyer directement vers App Store Connect depuis l'application ?",
        answer:
          "Oui. Configurez votre clé API App Store Connect une seule fois (Issuer ID, Key ID et fichier .p8). Screenshot Bro détecte automatiquement le type d'affichage approprié pour chaque rangée, associe vos langues de projet aux localisations App Store Connect et remplace les captures existantes en une seule passe, sans glisser-déposer dans le navigateur.",
      },
      {
        question: "L'application se synchronise-t-elle entre plusieurs appareils ?",
        answer:
          "Oui — la synchronisation facultative via iCloud Drive garde vos projets, captures et polices accessibles sur chaque Mac, iPad et iPhone connecté à votre compte Apple. Les conflits sont fusionnés champ par champ (dernier enregistrement prioritaire) pour une synchronisation fluide.",
      },
      {
        question: "Un agent IA peut-il créer mes captures ?",
        answer:
          "Oui. Screenshot Bro héberge un serveur MCP local et optionnel sur Mac : un assistant comme Claude Code, Claude Desktop ou Cursor peut créer des projets, disposer les lignes et les formes, importer vos captures, traduire le texte, générer des aperçus qu'il voit réellement, exporter et synchroniser le set final avec App Store Connect. Le serveur n'écoute que sur 127.0.0.1, chaque requête exige un jeton d'accès copié depuis les Réglages, et chaque modification de l'agent s'annule avec ⌘Z.",
      },
      {
        question: "Où obtenir de l'aide ?",
        answer:
          "Rejoignez le Discord de Screenshot Bro : c'est le moyen le plus rapide de joindre le développeur, signaler un bug, poser une question et voir ce qui arrive ensuite. L'e-mail reste disponible pour tout sujet privé ou lié à votre compte, et la documentation couvre chaque partie de l'éditeur.",
      },
    ],
    navItems: [
      { label: "Démos", href: "#showcases" },
      { label: "Fonctions", href: "#features" },
      { label: "Flux", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    ui: {
      skipToContent: "Aller au contenu",
      blog: "Blog",
      tutorials: "Tutoriels",
      docs: "Documentation",
      changelog: "Nouveautés",
      comparisons: "Toutes les comparaisons",
      vsFastlane: "Comparer à Fastlane",
      community: "Communauté",
      joinDiscord: "Rejoindre le Discord",
      privacy: "Confidentialité",
      terms: "Conditions",
      contact: "Contact",
      friends: "Amis",
      followJourney: "Suivre mon parcours",
      madeWithLoveAt: "Fait avec ❤️ chez",
      language: "Langue",
      sectionsLabel: "Sections",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      seeInAction: "Voir en action",
      tryItNow: "Essayer maintenant",
      seeDetails: "Voir les détails",
      browseGuides: "Voir tous les guides",
      submitApp: "Proposer votre app",
      contactDeveloper: "Contacter le développeur",
      backToTop: "Retour en haut",
      previousScreenshot: "Capture précédente",
      nextScreenshot: "Capture suivante",
      goToScreenshot: (index) => `Aller à la capture ${index}`,
      slideCount: (index, total) => `${index} sur ${total}`,
      availabilityNote:
        "App macOS 15+ et iOS/iPadOS 18+ | Swift et SwiftUI | Disponible sur l'App Store",
    },
    hero: {
      titleLead: "Créez et publiez",
      titleAccent: "App Store",
      titleRest: " captures d'écran.",
      descriptionLead:
        "Importez vos captures, ajoutez des cadres d'appareils, localisez le texte, traduisez automatiquement ce qui manque et",
      descriptionStrong: "envoyez directement vers App Store Connect",
      descriptionTail: "— depuis une app native rapide pour Mac, iPad et iPhone.",
    },
    sections: {
      showcases: {
        eyebrow: "Démos",
        title: "Voyez le flux principal avant d'installer.",
        description:
          "Import groupé, envoi App Store Connect, calques, arrière-plans et cadres d'appareils dans un seul flux.",
      },
      problem: {
        eyebrow: "Pourquoi ça existe",
        title:
          "Publier une nouvelle fonctionnalité ne devrait pas obliger à refaire toutes les captures.",
        description:
          "Screenshot Bro vient du même problème que rencontrent beaucoup d'équipes: après chaque mise à jour, les captures redeviennent un mini-projet répétitif.",
      },
      workflow: {
        eyebrow: "Flux",
        title: "Un chemin plus court vers des assets prêts pour l'App Store.",
        description:
          "Le produit se concentre sur une tâche: créer des captures soignées sans maintenir une pile de fichiers de design uniques.",
      },
      features: {
        eyebrow: "Capacités",
        title: "Tout ce qu'il faut. Rien de superflu.",
        description:
          "Vitesse de mise en page, cohérence des captures et export propre. Pas d'onglet navigateur, pas de redimensionnement répétitif.",
      },
      screenshots: {
        eyebrow: "Captures",
        title: "Voyez-le en action.",
        description:
          "Captures App Store de Screenshot Bro lui-même: le même éditeur que vous utiliserez.",
      },
      testimonials: {
        eyebrow: "Développeurs",
        title: "Ce que disent les développeurs.",
        description:
          "Retours réels de développeurs indépendants qui utilisent Screenshot Bro en production.",
      },
      blog: {
        eyebrow: "Sur le blog",
        title: "Guides pour publier de meilleures captures App Store.",
        description:
          "Références et guides pour les tailles, la localisation, l'envoi et le design de captures.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Les questions avant d'essayer.",
        description:
          "Les réponses principales sur la compatibilité, l'export et le flux de travail.",
      },
      appShowcase: {
        eyebrow: "Publié avec Screenshot Bro",
        title: "Vous seriez bien entouré.",
        description:
          "Des apps indépendantes utilisent déjà Screenshot Bro pour leurs captures App Store et Google Play.",
      },
    },
    problem: {
      story:
        "Je l'ai créé après avoir passé trop de temps dans Figma à refaire des captures App Store à chaque changement de texte, de dégradé ou de langue. L'objectif est simple: concevoir le système une fois, puis laisser l'app gérer le répétitif.",
      withoutLabel: "Sans Screenshot Bro",
      withLabel: "Avec Screenshot Bro",
    },
    download: {
      titleLine1: "Prêt à publier",
      titleLine2: "de meilleures captures?",
      description:
        "Téléchargez depuis l'App Store et utilisez le flux complet sur Mac ou iPad: configuration, design, traduction automatique, localisation et export.",
    },
    footer: {
      note:
        "Construit avec SwiftUI. Pensé pour les développeurs qui publient des mises à jour App Store.",
    },
  },
  ar: {
    siteTitle: `${SITE_NAME} — لقطات App Store و Google Play على Mac`,
    siteDescription:
      "صمّم لقطات App Store و Google Play داخل تطبيق أصلي على Mac و iPad و iPhone. إطارات أجهزة، توطين، ترجمة تلقائية، تصدير جماعي ورفع مباشر إلى App Store Connect.",
    primaryCtaLabel: "احصل عليه من App Store",
    benefits: [
      "متوفر الآن على App Store لأجهزة Mac و iPad و iPhone",
      "سير كامل: استيراد، تصميم، ترجمة تلقائية، توطين وتصدير",
      "رفع مباشر إلى App Store Connect بدون السحب والإفلات في المتصفح",
    ],
    faqs: [
      {
        question: "هل Screenshot Bro مجاني؟",
        answer:
          "نعم. الباقة المجانية غير محدودة بوقت وتتيح لك الاحتفاظ بمشروع واحد مع ما يصل إلى 3 صفوف و 5 قوالب لكل صف — وصول كامل إلى كل إطار جهاز وشكل ولغة، وتصدير بدون علامات مائية، مع دعم الرفع المباشر إلى App Store Connect و Google Play ومزامنة iCloud. بينما تلغي باقة Pro القيود على عدد المشاريع والصفوف والقوالب.",
      },
      {
        question: "كيف يختلف هذا التطبيق عن أدوات تصميم لقطات شاشة App Store عبر المتصفح؟",
        answer:
          "Screenshot Bro هو تطبيق أصلي لأجهزة Mac و iPad و iPhone وليس أداة ويب، مما يعني أن المشاريع ولقطات الشاشة والخطوط تبقى على القرص المحلي ولا يتطلب التحرير اليومي أي حساب أو اتصال بالإنترنت. تتم المعالجة والتصدير الجماعي على جهازك الخاص بدلاً من خوادم خارجية. إذا كنت تستخدم Windows أو Linux أو ترغب في العمل التشاركي عبر المتصفح، فإن أدوات الويب تناسبك أكثر — وتوضح صفحة البدائل تلك الحالات.",
      },
      {
        question: "ما الذي أحتاجه لتشغيله؟",
        answer:
          "نظام macOS 15 (Sequoia) أو أحدث على Mac، أو iPadOS 18 أو أحدث على iPad، أو iOS 18 أو أحدث على iPhone. لا يلزم جهاز إضافي، ولا حساب، ولا اتصال بالإنترنت للتحرير اليومي.",
      },
      {
        question: "هل تغادر بياناتي جهازي؟",
        answer:
          "أعمالك ومشاريعك لا تغادر جهازك أبداً. تُحفظ المشاريع ولقطات الشاشة والخطوط محلياً. وتتم الترجمة التلقائية عبر إطار عمل Translation من Apple داخل الجهاز مباشرة بدون مفاتيح API أو خوادم وسيطة. تستخدم مزامنة iCloud Drive الاختيارية حسابك الشخصي في iCloud، ونحن لا ندير أي خوادم وسيطة. الشيء الوحيد الذي يُرسل هو تقرير أعطال مجهول الهوية عند حدوث خطأ، بالإضافة إلى إحصاءات عامة ومجهولة للمساعدة في تحسين التطبيق — دون جمع أي من مشاريعك أو صورك أو نصوصك.",
      },
      {
        question: "كيف تعمل ميزة التوطين وتعدد اللغات؟",
        answer:
          "اختر من بين 81 لغة معدة مسبقاً أو أضف رمز لغتك المخصص. تملأ الترجمة التلقائية على الجهاز أي نصوص مفقودة. تُحفظ الترجمات كتعديلات نصية خاصة بكل لغة، بحيث تبقى التصاميم والألوان والصور مشتركة عبر كل اللغات — صمم مرة واحدة وانشر بجميع اللغات. يتم تنظيم الملفات المصدرة في مجلدات جاهزة للرفع المباشر إلى App Store Connect.",
      },
      {
        question: "هل يمكنني إنشاء لقطات شاشة لمتجر Google Play أيضاً؟",
        answer:
          "نعم. تظهر صفوف هواتف وأجهزة Android اللوحية جنباً إلى جنب مع صفوف iPhone و iPad و Mac في نفس المشروع. تأتي كل فئة جهاز مجهزة مسبقاً بالأبعاد الدقيقة التي يقبلها كل متجر.",
      },
      {
        question: "هل يمكنني سحب لقطات شاشة المحاكي والأجهزة مباشرة إلى التطبيق؟",
        answer:
          "نعم. اسحب مجلد لقطات الشاشة وسيوجه Screenshot Bro كل لقطة إلى الصف المناسب وفقاً لحجم أبعادها بالبكسل — صور iPhone إلى صف iPhone، و iPad إلى iPad، و Android إلى Android. كما يتيح زر الالتقاط بنقرة واحدة في كل قالب جلب أحدث لقطة شاشة من المحاكي إلى لوحة العمل مباشرة.",
      },
      {
        question: "هل يمكن الرفع مباشرة إلى App Store Connect من داخل التطبيق؟",
        answer:
          "نعم. قم بتهيئة مفتاح API الخاص بـ App Store Connect لمرة واحدة (معرف Issuer ID و Key ID وملف .p8)، وسيقوم Screenshot Bro تلقائياً باكتشاف نوع العرض المناسب لكل صف ومطابقة لغات المشروع مع لغات المتجر واستبدال اللقطات الحالية دفعة واحدة — دون الحاجة إلى السحب والإفلات في المتصفح.",
      },
      {
        question: "هل يتزامن التطبيق بين مختلف الأجهزة؟",
        answer:
          "نعم — تتيح مزامنة iCloud Drive الاختيارية إبقاء المشاريع ولقطات الشاشة والخطوط متاحة عبر جميع أجهزة Mac و iPad و iPhone المسجلة بحساب Apple الخاص بك، مع دمج التعديلات بسلاسة وفقاً لآخر حفظ.",
      },
      {
        question: "هل يمكن لوكيل ذكاء اصطناعي إنشاء لقطاتي؟",
        answer:
          "نعم. يشغّل Screenshot Bro خادم MCP محليًا اختياريًا على Mac، فيستطيع مساعد مثل Claude Code أو Claude Desktop أو Cursor إنشاء المشاريع وترتيب الصفوف والأشكال واستيراد اللقطات وترجمة النصوص وعرض معاينات يراها فعليًا والتصدير ومزامنة المجموعة النهائية مع App Store Connect. يستمع الخادم على 127.0.0.1 فقط، وتحتاج كل طلبية إلى رمز وصول تنسخه من الإعدادات، ويمكن التراجع عن أي تغيير بالضغط على ⌘Z.",
      },
      {
        question: "أين أحصل على الدعم؟",
        answer:
          "انضم إلى خادم Discord الخاص بـ Screenshot Bro — إنها أسرع طريقة للتواصل مع المطوّر والإبلاغ عن الأخطاء وطرح الأسئلة ومعرفة ما هو قادم. يمكنك أيضًا مراسلتنا عبر البريد الإلكتروني لأي أمر خاص أو متعلق بحسابك، كما تغطي وثائق المساعدة كل جزء من المحرر.",
      },
    ],
    navItems: [
      { label: "العروض", href: "#showcases" },
      { label: "الميزات", href: "#features" },
      { label: "سير العمل", href: "#workflow" },
      { label: "الأسئلة", href: "#faq" },
    ],
    ui: {
      skipToContent: "تخطي إلى المحتوى",
      blog: "المدونة",
      tutorials: "الدروس التعليمية",
      changelog: "سجل التغييرات",
      comparisons: "كل المقارنات",
      vsFastlane: "مقارنة مع Fastlane",
      community: "المجتمع",
      joinDiscord: "انضم إلى Discord",
      privacy: "الخصوصية",
      terms: "الشروط",
      contact: "تواصل",
      friends: "تطبيقات الأصدقاء",
      followJourney: "تابع رحلتي",
      madeWithLoveAt: "صُنع بـ ❤️ في",
      language: "اللغة",
      sectionsLabel: "الأقسام",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      seeInAction: "شاهده عملياً",
      tryItNow: "جرّبه الآن",
      seeDetails: "عرض التفاصيل",
      browseGuides: "تصفح كل الأدلة",
      submitApp: "أرسل تطبيقك",
      contactDeveloper: "تواصل مع المطور",
      backToTop: "العودة للأعلى",
      previousScreenshot: "اللقطة السابقة",
      nextScreenshot: "اللقطة التالية",
      goToScreenshot: (index) => `اذهب إلى اللقطة ${index}`,
      slideCount: (index, total) => `${index} من ${total}`,
      availabilityNote:
        "تطبيق macOS 15+ و iOS/iPadOS 18+ | Swift و SwiftUI | متوفر على App Store",
    },
    hero: {
      titleLead: "صمّم وانشر لقطات",
      titleAccent: "App Store",
      titleRest: ".",
      descriptionLead:
        "استورد لقطاتك، أضف إطارات الأجهزة، وطّن النصوص، ترجم النص المفقود تلقائياً، ثم",
      descriptionStrong: "ارفع مباشرة إلى App Store Connect",
      descriptionTail: "— كل ذلك من تطبيق أصلي وسريع على Mac و iPad و iPhone.",
    },
    sections: {
      showcases: {
        eyebrow: "العروض",
        title: "شاهد سير العمل الأساسي قبل التثبيت.",
        description:
          "استيراد جماعي، رفع بنقرة واحدة إلى App Store Connect، طبقات، خلفيات وإطارات أجهزة في سير واحد.",
      },
      problem: {
        eyebrow: "لماذا وُجد",
        title:
          "إطلاق ميزة جديدة لا يجب أن يعني إعادة بناء كل لقطات المتجر.",
        description:
          "ظهر Screenshot Bro من مشكلة متكررة: تحديث المنتج يصل، ثم تتحول ملفات اللقطات إلى مشروع صغير متعب من جديد.",
      },
      workflow: {
        eyebrow: "سير العمل",
        title: "طريق أقصر من اللقطات الخام إلى أصول جاهزة للمتجر.",
        description:
          "يركز المنتج على مهمة واحدة: إنشاء مجموعات لقطات مصقولة دون إدارة كومة من ملفات التصميم المؤقتة.",
      },
      features: {
        eyebrow: "القدرات",
        title: "كل ما تحتاجه. بلا زوائد.",
        description:
          "سرعة في التخطيط، اتساق في اللقطات وتصدير مرتب. بلا تبويب متصفح ولا تغيير مقاسات متكرر.",
      },
      screenshots: {
        eyebrow: "اللقطات",
        title: "شاهده أثناء العمل.",
        description:
          "لقطات App Store لتطبيق Screenshot Bro نفسه: نفس المحرر الذي ستستخدمه.",
      },
      testimonials: {
        eyebrow: "المطورون",
        title: "ماذا يقول المطورون.",
        description:
          "آراء حقيقية من مطورين مستقلين يستخدمون Screenshot Bro في الإنتاج.",
      },
      blog: {
        eyebrow: "من المدونة",
        title: "أدلة لإطلاق لقطات App Store أفضل.",
        description:
          "مراجع وخطط للأحجام، التوطين، الرفع وتصميم لقطات App Store و Google Play.",
      },
      faq: {
        eyebrow: "الأسئلة الشائعة",
        title: "الأسئلة التي تُطرح قبل التجربة.",
        description:
          "إجابات حول التوافق، التصدير وسير العمل الأساسي.",
      },
      appShowcase: {
        eyebrow: "نُشرت باستخدام Screenshot Bro",
        title: "ستكون في صحبة جيدة.",
        description:
          "تطبيقات مستقلة تستخدم Screenshot Bro للقطات App Store و Google Play.",
      },
    },
    problem: {
      story:
        "بنيته بعد وقت طويل ضاع في Figma لإعادة لقطات App Store كلما تغير النص أو التدرج أو اللغة. الهدف بسيط: صمّم النظام مرة واحدة، ودع التطبيق يتولى الأجزاء المتكررة.",
      withoutLabel: "بدون Screenshot Bro",
      withLabel: "مع Screenshot Bro",
    },
    download: {
      titleLine1: "جاهز لإطلاق",
      titleLine2: "لقطات أفضل؟",
      description:
        "نزّله من App Store واستخدم سير العمل الكامل على Mac أو iPad: الإعداد، التصميم، الترجمة التلقائية، التوطين والتصدير.",
    },
    footer: {
      note:
        "مبني باستخدام SwiftUI. مصمم للمطورين الذين يطلقون تحديثات App Store.",
    },
  },
  de: {
    siteTitle: `${SITE_NAME} — Screenshots für App Store & Google Play`,
    siteDescription:
      "Screenshots für App Store und Google Play in einer nativen App für Mac, iPad und iPhone. Geräterahmen, Lokalisierung und direkter Upload zu App Store Connect.",
    primaryCtaLabel: "Im App Store laden",
    navItems: [
      { label: "Beispiele", href: "#showcases" },
      { label: "Funktionen", href: "#features" },
      { label: "Workflow", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Jetzt im App Store für Mac, iPad und iPhone erhältlich",
      "Vollständiger Workflow: Importieren, Gestalten, Übersetzen, Lokalisieren und Exportieren",
      "Direkter Upload zu App Store Connect ohne lästiges Drag-and-Drop im Browser",
    ],
    faqs: [
      {
        question: "Ist Screenshot Bro kostenlos?",
        answer:
          "Ja. Die kostenlose Version ist zeitlich unbegrenzt und ermöglicht es Ihnen, 1 Projekt mit bis zu 3 Zeilen und 5 Vorlagen pro Zeile zu verwalten — voller Zugriff auf alle Geräterahmen, Formen und Sprachen, wasserzeichenfreie Exporte, Upload zu App Store Connect und Google Play sowie iCloud-Synchronisierung inklusive. Pro hebt die Begrenzungen für Projekte, Zeilen und Vorlagen auf.",
      },
      {
        question: "Wie unterscheidet sich dies von einem webbasierten App Store Screenshot-Generator?",
        answer:
          "Screenshot Bro ist eine native App für Mac, iPad und iPhone und kein Browser-Tool. Projekte, Screenshots und Schriftarten bleiben auf Ihrer Festplatte, und für die tägliche Bearbeitung sind weder ein Konto noch eine Internetverbindung erforderlich. Rendering und Batch-Export laufen auf Ihrer eigenen Hardware statt auf einem Server. Wenn Sie Windows oder Linux nutzen, im Browser zusammenarbeiten möchten oder nur ein oder zwei Bilder benötigen, ist ein Web-Tool die passendere Wahl — unsere Alternativen-Seite deckt diese Fälle ab.",
      },
      {
        question: "Was brauche ich, um die App zu nutzen?",
        answer:
          "macOS 15 (Sequoia) oder neuer auf dem Mac, iPadOS 18 oder neuer auf dem iPad oder iOS 18 oder neuer auf dem iPhone. Für die alltägliche Bearbeitung ist kein Zusatzgerät, kein Konto und keine Internetverbindung erforderlich.",
      },
      {
        question: "Verlassen meine Daten mein Gerät?",
        answer:
          "Ihre Arbeitsdaten nicht. Projekte, Screenshots und Schriftarten verbleiben auf Ihrer Festplatte. Die automatische Übersetzung läuft direkt auf dem Gerät über Apples Translation-Framework — keine API-Schlüssel, keine Drittanbieter-Server. Die optionale iCloud Drive-Synchronisierung nutzt Ihr persönliches iCloud-Konto; wir betreiben keine Zwischenserver. Bei Fehlern wird lediglich ein anonymer Absturzbericht gesendet sowie anonyme Zähler für Meilensteine wie „ein Export wurde abgeschlossen“, um das Produkt zu verbessern — niemals Ihre Projekte, Bilder oder eingegebenen Texte.",
      },
      {
        question: "Wie funktioniert die Lokalisierung?",
        answer:
          "Wählen Sie aus 81 vordefinierten Sprachprofilen oder geben Sie eigene Sprachcodes ein. Die automatische Übersetzung füllt fehlende Texte direkt auf dem Gerät aus. Übersetzungen werden als sprachspezifische Textanpassungen gespeichert, sodass Layout, Farben und Bilder für alle Sprachen einheitlich bleiben — einmal gestalten, in allen Sprachen veröffentlichen. Die Exporte werden übersichtlich in Sprachordnern abgelegt, die App Store Connect direkt verarbeiten kann.",
      },
      {
        question: "Kann ich auch Screenshots für Google Play erstellen?",
        answer:
          "Ja. Zeilen für Android-Smartphones und -Tablets können im selben Projekt neben iPhone, iPad und Mac angelegt werden. Jede Gerätekategorie ist auf die von den jeweiligen Stores geforderten Pixelabmessungen voreingestellt.",
      },
      {
        question: "Kann ich Screenshots aus dem Simulator oder von Geräten direkt hineinziehen?",
        answer:
          "Ja. Ziehen Sie einfach einen Ordner mit Screenshots hinein: Screenshot Bro ordnet jedes Bild anhand seiner Pixelgröße automatisch der richtigen Zeile zu — iPhone-Bilder in die iPhone-Zeile, iPad zu iPad und Android zu Android. Eine 1-Klick-Aufnahmetaste an jeder Vorlage zieht zudem den neuesten Simulator-Screenshot direkt auf die Arbeitsfläche.",
      },
      {
        question: "Kann ich direkt aus der App zu App Store Connect hochladen?",
        answer:
          "Ja. Richten Sie Ihren App Store Connect API-Schlüssel einmalig ein (Issuer ID, Key ID und .p8-Datei). Screenshot Bro erkennt automatisch den passenden Anzeigetyp für jede Zeile, gleicht die Projektsprachen mit den Lokalisierungen in App Store Connect ab und ersetzt vorhandene Screenshots in einem Durchgang — ganz ohne Drag-and-Drop im Browser.",
      },
      {
        question: "Werden Daten zwischen verschiedenen Geräten synchronisiert?",
        answer:
          "Ja — die optionale iCloud Drive-Synchronisierung hält Projekte, Screenshots und Schriftarten auf jedem Mac, iPad und iPhone bereit, der mit Ihrem Apple-Account angemeldet ist. Versionskonflikte werden feldweise nach dem Last-Writer-Wins-Prinzip zusammengeführt.",
      },
      {
        question: "Kann ein KI-Agent meine Screenshots bauen?",
        answer:
          "Ja. Screenshot Bro betreibt auf dem Mac einen optionalen lokalen MCP-Server, sodass ein Assistent wie Claude Code, Claude Desktop oder Cursor Projekte anlegen, Zeilen und Formen setzen, Screenshots importieren, Texte übersetzen, Vorschauen rendern und ansehen, exportieren und das fertige Set mit App Store Connect abgleichen kann. Der Server lauscht nur auf 127.0.0.1, jede Anfrage braucht ein Zugriffstoken aus den Einstellungen, und jede Änderung lässt sich mit ⌘Z rückgängig machen.",
      },
      {
        question: "Wo bekomme ich Unterstützung?",
        answer:
          "Treten Sie dem Screenshot-Bro-Discord bei — das ist der schnellste Weg, den Entwickler zu erreichen, einen Fehler zu melden, eine Frage zu stellen und zu sehen, was als Nächstes kommt. Für Privates oder Kontofragen funktioniert weiterhin die E-Mail, und die Hilfe-Dokumentation deckt jeden Teil des Editors ab.",
      },
    ],
    ui: {
      skipToContent: "Zum Inhalt springen",
      blog: "Blog",
      tutorials: "Anleitungen",
      docs: "Dokumentation",
      changelog: "Changelog",
      comparisons: "Alle Vergleiche",
      vsFastlane: "Vergleich mit Fastlane",
      community: "Community",
      joinDiscord: "Discord beitreten",
      privacy: "Datenschutz",
      terms: "AGB",
      contact: "Kontakt",
      friends: "Freunde",
      followJourney: "Folge meiner Reise",
      madeWithLoveAt: "Mit ❤️ gemacht in",
      language: "Sprache",
      sectionsLabel: "Bereiche",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      seeInAction: "In Aktion sehen",
      tryItNow: "Jetzt ausprobieren",
      seeDetails: "Details ansehen",
      browseGuides: "Alle Anleitungen durchsuchen",
      submitApp: "App einreichen",
      contactDeveloper: "Entwickler kontaktieren",
      backToTop: "Zurück nach oben",
      previousScreenshot: "Vorheriger Screenshot",
      nextScreenshot: "Nächster Screenshot",
      goToScreenshot: (index) => `Gehe zu Screenshot ${index}`,
      slideCount: (index, total) => `${index} von ${total}`,
      availabilityNote:
        "macOS 15+ und iOS/iPadOS 18+ App | Swift & SwiftUI | Im App Store erhältlich",
    },
    hero: {
      titleLead: "Gestalte und veröffentliche",
      titleAccent: "App Store",
      titleRest: " Screenshots.",
      descriptionLead:
        "Importiere deine Screenshots, passe sie in Geräterahmen ein, lokalisiere den Text, übersetze fehlende Texte automatisch und",
      descriptionStrong: "lade sie direkt zu App Store Connect hoch",
      descriptionTail: "— alles aus einer schnellen, nativen App für Mac, iPad und iPhone.",
    },
    sections: {
      showcases: {
        eyebrow: "Demos",
        title: "Sieh dir den Workflow an, bevor du installierst.",
        description:
          "Batch-Import, App Store Connect Upload mit einem Klick, Ebenen, Hintergründe und Geräterahmen in einem einzigen Workflow.",
      },
      problem: {
        eyebrow: "Warum es existiert",
        title:
          "Die Veröffentlichung eines neuen Features sollte nicht bedeuten, jeden Screenshot neu zu erstellen.",
        description:
          "Screenshot Bro entstand aus dem ständigen Kreislauf, den fast alle App-Teams kennen: Nach jedem Produkt-Update wird die Aktualisierung der Screenshots zu einem lästigen Mini-Projekt.",
      },
      workflow: {
        eyebrow: "Workflow",
        title: "Ein kürzerer Weg von rohen Screenshots zu fertigen Store-Assets.",
        description:
          "Die App konzentriert sich ganz auf eine Aufgabe: Erstelle ansprechende Screenshot-Sets, ohne einen Haufen einmaliger Designdateien verwalten zu müssen.",
      },
      features: {
        eyebrow: "Funktionen",
        title: "Alles, was du brauchst. Nichts, was du nicht brauchst.",
        description:
          "Voller Fokus auf Layout-Geschwindigkeit, Konsistenz und reibungslosen Export. Keine Browser-Tabs, kein wiederholtes Ändern der Bildgröße.",
      },
      screenshots: {
        eyebrow: "Screenshots",
        title: "Sieh es in Aktion.",
        description:
          "App Store Screenshots von Screenshot Bro selbst – derselbe Editor, den du für deine Screenshots verwendest.",
      },
      testimonials: {
        eyebrow: "Entwickler",
        title: "Was Entwickler sagen.",
        description:
          "Echtes Feedback von Indie-Entwicklern, die Screenshot Bro produktiv nutzen.",
      },
      blog: {
        eyebrow: "Aus dem Blog",
        title: "Anleitungen für bessere App Store Screenshots.",
        description:
          "Referenzen und Playbooks zur Größe, Lokalisierung, zum Upload und Design von App Store & Google Play Screenshots.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Häufige Fragen vor dem Ausprobieren.",
        description:
          "Antworten zu Kompatibilität, Export und dem grundlegenden Workflow.",
      },
      appShowcase: {
        eyebrow: "Mit Screenshot Bro erstellt",
        title: "Du bist in bester Gesellschaft.",
        description:
          "Indie-Apps, die Screenshot Bro bereits für ihre App Store & Google Play Screenshots nutzen.",
      },
    },
    problem: {
      story:
        "Ich habe die App entwickelt, nachdem ich zu viel Zeit in Figma damit verbracht habe, App-Store-Screenshots bei jeder Änderung von Texten, Verläufen oder Sprachen neu zu erstellen. Das Ziel ist einfach: Gestalte das System einmal und lass die App die lästige Arbeit machen.",
      withoutLabel: "Ohne Screenshot Bro",
      withLabel: "Mit Screenshot Bro",
    },
    download: {
      titleLine1: "Bereit für",
      titleLine2: "bessere Screenshots?",
      description:
        "Lade die App aus dem App Store herunter und nutze den gesamten Workflow auf Mac oder iPad: Einrichtung, Design, automatische Übersetzung, Lokalisierung und Export.",
    },
    footer: {
      note:
        "Entwickelt mit SwiftUI. Gemacht für Entwickler, die App-Store-Updates veröffentlichen.",
    },
  },
  ja: {
    siteTitle: `${SITE_NAME} — Mac、iPad、iPhone用App Store & Google Playスクリーンショット作成ツール`,
    siteDescription:
      "App StoreとGoogle Play用のスクリーンショットをネイティブMac、iPad、iPhoneアプリでデザイン。デバイスフレーム、ローカライズ、自動翻訳、バッチ書き出し、App Store Connectへの直接アップロードに対応。",
    primaryCtaLabel: "App Storeでダウンロード",
    navItems: [
      { label: "デモ", href: "#showcases" },
      { label: "機能", href: "#features" },
      { label: "ワークフロー", href: "#workflow" },
      { label: "よくある質問", href: "#faq" },
    ],
    benefits: [
      "MacとiPad向けにApp Storeで配信中",
      "インポート、デザイン、翻訳、ローカライズ、書き出しまでの完全なワークフロー",
      "ブラウザへのドラッグ＆ドロップ不要で、App Store Connectに直接アップロード",
    ],
    faqs: [
      {
        question: "Screenshot Broは無料ですか？",
        answer:
          "はい。無料プランには利用期限がなく、1プロジェクト（最大3行、各行5テンプレートまで）を管理できます。すべてのデバイスフレーム、図形、言語プリセットへのフルアクセス、透かし（ウォーターマーク）なしのエクスポート、App Store ConnectおよびGoogle Playへの直接アップロード、iCloud同期が含まれます。Proプランにアップグレードすると、プロジェクト数、行数、テンプレート数の上限が解除されます。",
      },
      {
        question: "WebベースのApp Storeスクリーンショット作成ツールとは何が違いますか？",
        answer:
          "Screenshot Broはブラウザで動くツールではなく、Mac、iPad、iPhone専用のネイティブアプリケーションです。プロジェクト、画像、フォントはすべてローカルディスクに保存され、日常的な編集作業にアカウント登録やインターネット接続は一切不要です。レンダリングや一括書き出しもクラウドサーバーではなくご自身の端末ハードウェア上で高速に処理されます。WindowsやLinuxをお使いの場合や、Web上でリアルタイム共同編集を行いたい場合はWebツールが適しています（比較・代替ツールページで詳しく解説しています）。",
      },
      {
        question: "動作環境を教えてください。",
        answer:
          "MacはmacOS 15（Sequoia）以降、iPadはiPadOS 18以降、iPhoneはiOS 18以降に対応しています。日常の編集作業に外部機器、アカウント登録、ネット接続は不要です。",
      },
      {
        question: "データがデバイスの外部に送信されることはありますか？",
        answer:
          "作成中のプロジェクトデータが外部に送信されることはありません。プロジェクト、スクリーンショット、フォントは端末内に安全に保存されます。自動翻訳はAppleのオンデバイスTranslationフレームワークを使用するため、APIキーや外部サーバーは不要です。任意のiCloud Drive同期はお客様個人のiCloudアカウントを使用し、中間サーバーは存在しません。不具合発生時の匿名のクラッシュレポートや、品質改善のための「書き出し完了」などの匿名マイルストーン統計のみが送信され、プロジェクトや画像、入力テキストが収集されることは決してありません。",
      },
      {
        question: "ローカライズ（多言語対応）はどのように機能しますか？",
        answer:
          "81言語のプリセットから選択するか、独自の言語コードを追加できます。オンデバイスの自動翻訳により未翻訳テキストをすばやく補完します。翻訳は言語ごとのテキスト上書きとして保存されるため、レイアウト、配色、画像は全言語共通で保持されます（1回デザインすれば全言語に展開可能）。書き出し時はApp Store Connectがそのまま読み込める言語別フォルダに整理されます。",
      },
      {
        question: "Google Play用のスクリーンショットも作成できますか？",
        answer:
          "はい。同じプロジェクト内で、iPhone、iPad、Macの行と並んでAndroidスマートフォンやタブレットの行を同時に編集・レンダリングできます。各デバイスカテゴリは各ストアが指定する正確なピクセル寸法にあらかじめ設定されています。",
      },
      {
        question: "シミュレータや実機のスクリーンショットを直接ドラッグ＆ドロップできますか？",
        answer:
          "はい。スクリーンショットが入ったフォルダをドラッグ＆ドロップするだけで、Screenshot Broがピクセル解像度を自動判別し、適切な行（iPhone用画像はiPhone行、iPad用はiPad行、Android用はAndroid行）へ振り分けます。各テンプレートのワンクリック取り込みボタンを使えば、最新のシミュレータ画像をキャンバスに直接読み込むことも可能です。",
      },
      {
        question: "App Store Connectに直接アップロードできますか？",
        answer:
          "はい。App Store Connect APIキー（Issuer ID、Key ID、.p8ファイル）を一度設定するだけで、Screenshot Broが各行の適切な表示タイプ（Display Type）を自動検出し、プロジェクトの言語とストアの言語設定をマッチングして既存スクリーンショットを一括更新します。ブラウザ上で1枚ずつドラッグ＆ドロップする手間は不要です。",
      },
      {
        question: "複数デバイス間で同期できますか？",
        answer:
          "はい。任意のiCloud Drive同期を有効にすると、同一のApple AccountでサインインしているすべてのMacおよびiPadでプロジェクト、スクリーンショット、フォントを自動同期できます。競合が発生した場合はフィールド単位で最新の変更が自動統合されます。",
      },
      {
        question: "AIエージェントにスクリーンショットを作らせられますか？",
        answer:
          "はい。Screenshot BroはMacで任意のローカルMCPサーバーを起動でき、Claude Code、Claude Desktop、Cursorなどのアシスタントがプロジェクト作成、行や図形の配置、スクリーンショットの読み込み、テキストの翻訳、実際に確認できるプレビューのレンダリング、書き出し、App Store Connectへの同期まで行えます。サーバーは127.0.0.1のみで待ち受け、リクエストごとに設定からコピーしたアクセストークンが必要で、エージェントの変更は⌘Zで取り消せます。",
      },
      {
        question: "サポートはどこで受けられますか？",
        answer:
          "Screenshot Bro の Discord にご参加ください。開発者に直接連絡し、不具合を報告し、使い方を質問し、次に来る機能を知るための一番早い方法です。プライバシーやアカウントに関わる内容はメールでも受け付けており、ヘルプドキュメントはエディタの各機能を網羅しています。",
      },
    ],
    ui: {
      skipToContent: "コンテンツへスキップ",
      blog: "ブログ",
      tutorials: "チュートリアル",
      changelog: "変更履歴",
      comparisons: "すべての比較",
      vsFastlane: "Fastlaneとの比較",
      community: "コミュニティ",
      joinDiscord: "Discord に参加",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: "お問い合わせ",
      friends: "友人のアプリ",
      followJourney: "開発プロセスをフォロー",
      madeWithLoveAt: "Made with ❤️ at",
      language: "言語",
      sectionsLabel: "セクション",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
      seeInAction: "実際の動作を見る",
      tryItNow: "今すぐ試す",
      seeDetails: "詳細を見る",
      browseGuides: "すべてのガイドを見る",
      submitApp: "アプリを掲載する",
      contactDeveloper: "開発者に連絡",
      backToTop: "トップへ戻る",
      previousScreenshot: "前のスクリーンショット",
      nextScreenshot: "次のスクリーンショット",
      goToScreenshot: (index) => `スクリーンショット ${index} へ移動`,
      slideCount: (index, total) => `${total}枚中 ${index}枚目`,
      availabilityNote:
        "macOS 15以降・iOS/iPadOS 18以降のアプリ | Swift & SwiftUI | App Storeで入手可能",
    },
    hero: {
      titleLead: "デザインから",
      titleAccent: "App Store",
      titleRest: " への書き出しまでをスムーズに。",
      descriptionLead:
        "ショットをインポートし、デバイスフレームを重ね、テキストをローカライズ。不足しているテキストは自動翻訳し、",
      descriptionStrong: "App Store Connectに直接アップロード",
      descriptionTail: "— これらすべてを、高速なネイティブMac、iPad、iPhoneアプリで完結できます。",
    },
    sections: {
      showcases: {
        eyebrow: "デモ",
        title: "インストール前に、コアとなるワークフローを確認。",
        description:
          "一括インポート、ワンクリックでのApp Store Connectアップロード、レイヤー、背景、デバイスフレームなど、作業時間を劇的に短縮する機能をご覧ください。",
      },
      problem: {
        eyebrow: "開発の背景",
        title:
          "新しい機能をリリースするたびに、すべてのスクリーンショットを作り直す必要はありません。",
        description:
          "製品のアップデートがあるたびに、スクリーンショット作成という単調で時間のかかる作業が繰り返される。Screenshot Broは、そんな多くの開発チームが直面する課題から誕生しました。",
      },
      workflow: {
        eyebrow: "ワークフロー",
        title: "生のスクリーンショットからApp Store提出用アセットへの最短ルート。",
        description:
          "一回限りのデザインファイルを大量に管理することなく、美しく洗練されたスクリーンショットを作成するという一つの目的に特化しています。",
      },
      features: {
        eyebrow: "機能と特徴",
        title: "必要なものだけを。無駄なものは一切なし。",
        description:
          "レイアウトの高速化、スクリーンショットの一貫性、そして書き出しの安定性に焦点を当てています。ブラウザのタブを行き来したり、サイズ変更を繰り返したりする必要はありません。",
      },
      screenshots: {
        eyebrow: "スクリーンショット",
        title: "実際の画面を見る。",
        description:
          "Screenshot Bro自体のApp Store用スクリーンショットです。App StoreやGoogle Play用のアセットを作成する際と全く同じエディタを使用しています。",
      },
      testimonials: {
        eyebrow: "デベロッパーの声",
        title: "開発者からのフィードバック。",
        description:
          "実際にScreenshot Broを本番環境で導入している個人開発者からのリアルな感想です。",
      },
      blog: {
        eyebrow: "ブログ記事",
        title: "より効果的なApp Storeスクリーンショットを作成するためのガイド。",
        description:
          "サイズ選定、ローカライズ、アップロード、そしてコンバージョンにつながるデザインのコツやプレイブック。",
      },
      faq: {
        eyebrow: "よくある質問",
        title: "試す前に解消しておきたい疑問。",
        description:
          "互換性、書き出し、そして基本ワークフローに関する主な回答をまとめています。",
      },
      appShowcase: {
        eyebrow: "Screenshot Broで作成されたアプリ",
        title: "多くのアプリがすでに導入しています。",
        description:
          "App StoreやGoogle Playのスクリーンショット作成にScreenshot Broを採用している個人開発アプリのご紹介。",
      },
    },
    problem: {
      story:
        "テキストやグラデーション、言語が変わるたびに、FigmaでApp Store用のスクリーンショットを何度も作り直す手間に疲れてこのアプリを作りました。目的はシンプルです。システムを一度デザインすれば、あとはアプリが繰り返しの作業を自動で処理します。",
      withoutLabel: "Screenshot Broなし",
      withLabel: "Screenshot Broあり",
    },
    download: {
      titleLine1: "より魅力的なスクリーンショットを",
      titleLine2: "配信しませんか？",
      description:
        "App Storeからダウンロードして、MacまたはiPadでセットアップ、デザイン、自動翻訳、ローカライズ、書き出しまでのフルワークフローを体験してください。",
    },
    footer: {
      note:
        "SwiftUIで構築。App Storeのアップデートをリリースする開発者のためにデザインされました。",
    },
  },
  pt: {
    siteTitle: `${SITE_NAME} — Capturas para App Store e Google Play`,
    siteDescription:
      "Crie capturas para App Store e Google Play em um app nativo para Mac, iPad e iPhone. Molduras de dispositivos, localização e envio para App Store Connect.",
    primaryCtaLabel: "Obter na App Store",
    navItems: [
      { label: "Exemplos", href: "#showcases" },
      { label: "Recursos", href: "#features" },
      { label: "Fluxo de Trabalho", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Disponível agora na App Store para Mac, iPad e iPhone",
      "Fluxo completo: importar, projetar, traduzir, localizar e exportar",
      "Envio direto para o App Store Connect sem arrastar arquivos no navegador",
    ],
    faqs: [
      {
        question: "O Screenshot Bro é gratuito?",
        answer:
          "Sim. O plano gratuito não expira e permite manter 1 projeto com até 3 linhas e 5 modelos por linha — acesso completo a todas as molduras de dispositivos, formas e idiomas, exportações sem marca d'água, envio para App Store Connect e Google Play e sincronização pelo iCloud inclusos. O Pro remove os limites de projetos, linhas e modelos.",
      },
      {
        question: "Como ele se diferencia de um gerador de capturas de tela web?",
        answer:
          "O Screenshot Bro é um aplicativo nativo para Mac, iPad e iPhone, e não uma ferramenta no navegador. Seus projetos, capturas e fontes ficam no seu disco e a edição diária não requer conta nem conexão com a internet. A renderização e a exportação em lote rodam no seu próprio hardware em vez de um servidor. Se você usa Windows ou Linux, deseja colaborar em uma sessão compartilhada no navegador ou precisa de apenas uma ou duas imagens, uma ferramenta web é mais indicada — nossa página de alternativas detalha esses casos.",
      },
      {
        question: "O que preciso para usá-lo?",
        answer:
          "macOS 15 (Sequoia) ou posterior no Mac, iPadOS 18 ou posterior no iPad, ou iOS 18 ou posterior no iPhone. Nenhum dispositivo adicional, conta ou conexão à internet é necessária para a edição diária.",
      },
      {
        question: "Meus dados saem do meu dispositivo?",
        answer:
          "Seus trabalhos não. Projetos, capturas e fontes ficam gravados no seu disco. A tradução automática funciona diretamente no dispositivo usando o framework Translation da Apple — sem chaves de API nem servidores de terceiros. A sincronização opcional via iCloud Drive utiliza sua conta pessoal do iCloud; não operamos servidores intermediários. Apenas relatórios anônimos de falhas são enviados em caso de erro, além de contagens anônimas de marcos como «uma exportação concluída» para melhorarmos o app — nunca seus projetos, imagens ou textos.",
      },
      {
        question: "Como funciona a localização?",
        answer:
          "Escolha entre 81 idiomas pré-configurados ou adicione seu próprio código. A tradução automática no dispositivo preenche os textos que faltarem. As traduções são salvas como substituições de texto por idioma, mantendo layout, cores e imagens compartilhados entre todas as línguas — desenhe uma vez e publique em todos os idiomas. As exportações são organizadas em pastas por idioma prontas para o App Store Connect.",
      },
      {
        question: "Posso criar capturas de tela para o Google Play também?",
        answer:
          "Sim. As linhas para celulares e tablets Android são editadas lado a lado com iPhone, iPad e Mac no mesmo projeto. Cada categoria de dispositivo já vem pré-configurada nas dimensões exatas em pixels aceitas pelas respectivas lojas.",
      },
      {
        question: "Posso arrastar capturas do simulador e de aparelhos diretamente?",
        answer:
          "Sim. Arraste uma pasta de capturas e o Screenshot Bro encaminhará cada uma para a linha correta de acordo com seu tamanho em pixels — imagens de iPhone para a linha do iPhone, iPad para iPad e Android para Android. Um botão de captura com um clique em cada modelo também puxa a captura mais recente do simulador diretamente para a tela.",
      },
      {
        question: "Posso enviar diretamente para o App Store Connect a partir do aplicativo?",
        answer:
          "Sim. Configure sua chave de API do App Store Connect uma única vez (Issuer ID, Key ID e arquivo .p8) e o Screenshot Bro detectará automaticamente o display type correto para cada linha, associará os idiomas do projeto às localizações do App Store Connect e substituirá as capturas existentes em uma única etapa — sem arrastar e soltar no navegador.",
      },
      {
        question: "Ele sincroniza entre diferentes dispositivos?",
        answer:
          "Sim — a sincronização opcional via iCloud Drive mantém projetos, capturas e fontes disponíveis em todos os Macs, iPads e iPhones conectados com sua Conta Apple. Conflitos são mesclados campo a campo priorizando a última alteração.",
      },
      {
        question: "Um agente de IA pode criar minhas capturas?",
        answer:
          "Sim. O Screenshot Bro tem um servidor MCP local e opcional no Mac, então um assistente como Claude Code, Claude Desktop ou Cursor pode criar projetos, posicionar linhas e formas, importar capturas, traduzir o texto, renderizar prévias que ele realmente vê, exportar e sincronizar o conjunto final com o App Store Connect. O servidor escuta apenas em 127.0.0.1, cada requisição exige um token de acesso copiado dos Ajustes, e qualquer mudança do agente é desfeita com ⌘Z.",
      },
      {
        question: "Onde consigo suporte?",
        answer:
          "Entre no Discord do Screenshot Bro — é o caminho mais rápido para falar com o desenvolvedor, relatar um bug, tirar dúvidas e ver o que vem por aí. O e-mail continua valendo para assuntos privados ou de conta, e a documentação cobre cada parte do editor.",
      },
    ],
    ui: {
      skipToContent: "Ir para o conteúdo",
      blog: "Blog",
      tutorials: "Tutoriais",
      docs: "Documentação",
      changelog: "Notas de Versão",
      comparisons: "Todas as comparações",
      vsFastlane: "Comparar com Fastlane",
      community: "Comunidade",
      joinDiscord: "Entrar no Discord",
      privacy: "Privacidade",
      terms: "Termos de Uso",
      contact: "Contato",
      friends: "Amigos",
      followJourney: "Acompanhe minha jornada",
      madeWithLoveAt: "Feito com ❤️ em",
      language: "Idioma",
      sectionsLabel: "Seções",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      seeInAction: "Ver em ação",
      tryItNow: "Experimente agora",
      seeDetails: "Ver detalhes",
      browseGuides: "Navegar por todos os guias",
      submitApp: "Enviar seu app",
      contactDeveloper: "Contatar desenvolvedor",
      backToTop: "Voltar ao topo",
      previousScreenshot: "Captura de tela anterior",
      nextScreenshot: "Próxima captura de tela",
      goToScreenshot: (index) => `Ir para a captura de tela ${index}`,
      slideCount: (index, total) => `${index} de ${total}`,
      availabilityNote:
        "App para macOS 15+ e iOS/iPadOS 18+ | Swift & SwiftUI | Disponível na App Store",
    },
    hero: {
      titleLead: "Crie e publique",
      titleAccent: "App Store",
      titleRest: " capturas de tela.",
      descriptionLead:
        "Importe suas capturas, coloque-as em molduras de dispositivos, localize os textos, auto-traduza o que faltar e",
      descriptionStrong: "suba direto para o App Store Connect",
      descriptionTail: "— tudo a partir de um único app nativo e rápido para Mac, iPad e iPhone.",
    },
    sections: {
      showcases: {
        eyebrow: "Exemplos",
        title: "Veja o fluxo de trabalho principal antes de instalar.",
        description:
          "Importação em lote, envio para o App Store Connect em um clique, camadas, fundos e molduras de dispositivos em um único fluxo de trabalho.",
      },
      problem: {
        eyebrow: "Por que Existe",
        title:
          "Lançar um novo recurso não deveria significar refazer todas as capturas de tela.",
        description:
          "O Screenshot Bro surgiu do mesmo ciclo que a maioria das equipes enfrenta: uma atualização do produto é lançada, e o conjunto de capturas de tela vira um mini-projeto repetitivo de novo.",
      },
      workflow: {
        eyebrow: "Fluxo de Trabalho",
        title: "Um caminho mais curto de capturas brutas a arquivos prontos para a App Store.",
        description:
          "O produto é focado em apenas uma tarefa: criar conjuntos de capturas de tela refinados sem precisar manter um monte de arquivos de design avulsos.",
      },
      features: {
        eyebrow: "Recursos",
        title: "Tudo o que você precisa. Nada de excessos.",
        description:
          "Foco na velocidade de layout, consistência das capturas de tela e simplicidade de exportação. Sem abas do navegador ou redimensionamento repetitivo.",
      },
      screenshots: {
        eyebrow: "Capturas de Tela",
        title: "Veja em ação.",
        description:
          "Capturas de tela do próprio Screenshot Bro na App Store — o mesmo editor que você usará para as capturas do seu aplicativo.",
      },
      testimonials: {
        eyebrow: "Desenvolvedores",
        title: "O que os desenvolvedores estão dizendo.",
        description:
          "Feedback real de desenvolvedores independentes usando o Screenshot Bro em produção.",
      },
      blog: {
        eyebrow: "Do Blog",
        title: "Guias para publicar melhores capturas de tela na App Store.",
        description:
          "Referências e práticas recomendadas para dimensionamento, localização, upload e design de capturas de tela da App Store e Google Play.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "As perguntas mais frequentes antes de testar.",
        description:
          "Respostas diretas sobre compatibilidade, exportação e o funcionamento do fluxo de trabalho.",
      },
      appShowcase: {
        eyebrow: "Publicado com Screenshot Bro",
        title: "Você estará em boa companhia.",
        description:
          "Apps independentes que já usam o Screenshot Bro para suas capturas de tela na App Store e Google Play.",
      },
    },
    problem: {
      story:
        "Eu o criei depois de passar tempo demais no Figma refazendo capturas de tela para a App Store sempre que mudávamos textos, gradientes ou idiomas. O objetivo é simples: projete o sistema uma vez e deixe o app cuidar da parte repetitiva.",
      withoutLabel: "Sem o Screenshot Bro",
      withLabel: "Com o Screenshot Bro",
    },
    download: {
      titleLine1: "Pronto para publicar",
      titleLine2: "capturas de tela melhores?",
      description:
        "Baixe na App Store e utilize o fluxo completo no Mac ou iPad: configuração, design, tradução automática, localização e exportação.",
    },
    footer: {
      note:
        "Desenvolvido com SwiftUI. Projetado para desenvolvedores que enviam atualizações para a App Store.",
    },
  },
  it: {
    siteTitle: `${SITE_NAME} — Screenshot per App Store e Google Play`,
    siteDescription:
      "Progetta screenshot per App Store e Google Play in un'app nativa per Mac, iPad e iPhone. Cornici per dispositivi, localizzazione e upload su App Store Connect.",
    primaryCtaLabel: "Scarica su App Store",
    navItems: [
      { label: "Esempi", href: "#showcases" },
      { label: "Funzionalità", href: "#features" },
      { label: "Flusso di lavoro", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Disponibile ora sull'App Store per Mac, iPad e iPhone",
      "Flusso completo: importa, progetta, traduci, localizza ed esporta",
      "Caricamento diretto su App Store Connect senza trascinare file nel browser",
    ],
    faqs: [
      {
        question: "Screenshot Bro è gratuito?",
        answer:
          "Sì. Il piano gratuito non ha limiti di tempo e ti consente di gestire 1 progetto con un massimo di 3 righe e 5 modelli per riga: accesso completo a tutte le cornici dei dispositivi, forme e lingue, esportazioni senza filigrana, caricamento diretto su App Store Connect e Google Play e sincronizzazione iCloud inclusi. La versione Pro rimuove i limiti su progetti, righe e modelli.",
      },
      {
        question: "In che modo si differenzia da un generatore di screenshot per App Store basato sul web?",
        answer:
          "Screenshot Bro è un'applicazione nativa per Mac, iPad e iPhone anziché uno strumento nel browser: progetti, screenshot e font rimangono sul tuo disco e l'editing quotidiano non richiede alcun account né connessione a Internet. Il rendering e l'esportazione in batch vengono eseguiti direttamente sul tuo hardware invece che su un server remoto. Se utilizzi Windows o Linux, desideri collaborare nel browser o hai bisogno solo di una o due immagini, uno strumento web rappresenta una scelta migliore: la nostra pagina delle alternative illustra questi casi.",
      },
      {
        question: "Di cosa ho bisogno per usarlo?",
        answer:
          "macOS 15 (Sequoia) o versioni successive su Mac, iPadOS 18 o versioni successive su iPad, oppure iOS 18 o versioni successive su iPhone. Nessun dispositivo aggiuntivo, account o connessione internet richiesta per l'editing quotidiano.",
      },
      {
        question: "I miei dati lasciano il mio dispositivo?",
        answer:
          "I tuoi progetti non lasciano mai il dispositivo. File di progetto, screenshot e font rimangono memorizzati in locale sul disco. La traduzione automatica si appoggia al framework Translation di Apple direttamente sul dispositivo: senza chiavi API né server di terze parti. La sincronizzazione facoltativa con iCloud Drive sfrutta il tuo account personale iCloud; non gestiamo server intermediari. L'unica cosa che viene trasmessa è un report di arresto anomalo quando qualcosa non funziona, insieme a statistiche anonime di utilizzo come «un'esportazione completata» per aiutarci a migliorare l'app: mai i tuoi progetti, le tue immagini o il testo che scrivi.",
      },
      {
        question: "Come funziona la localizzazione?",
        answer:
          "Scegli tra 81 lingue preimpostate o definisci il tuo codice personalizzato. La traduzione automatica on-device completa i testi mancanti. Le traduzioni vengono salvate come modifiche testuali per ciascuna lingua, preservando layout, colori e immagini su tutti gli idiomi: progetta una volta sola e pubblica ovunque. I file esportati sono suddivisi in cartelle per lingua pronte per App Store Connect.",
      },
      {
        question: "Posso creare anche screenshot per Google Play?",
        answer:
          "Sì. Le righe dedicate a smartphone e tablet Android vengono gestite affiancate a iPhone, iPad e Mac nello stesso progetto. Ogni categoria di dispositivo è preimpostata con le esatte dimensioni in pixel richieste dai rispettivi store.",
      },
      {
        question: "Posso trascinare direttamente screenshot da simulatori e dispositivi reali?",
        answer:
          "Sì. Trascina una cartella di screenshot e Screenshot Bro smisterà ciascuna immagine nella riga corretta in base alla risoluzione in pixel: le immagini iPhone nella riga iPhone, iPad su iPad e Android su Android. Un pulsante di acquisizione a un clic su ciascun modello consente inoltre di inserire l'ultimo screenshot del simulatore direttamente nell'area di lavoro.",
      },
      {
        question: "Posso caricare direttamente su App Store Connect dall'applicazione?",
        answer:
          "Sì. Configura la chiave API di App Store Connect una sola volta (Issuer ID, Key ID e file .p8). Screenshot Bro individua automaticamente il display type appropriato per ciascuna riga, abbina le lingue del progetto alle localizzazioni di App Store Connect e aggiorna gli screenshot esistenti in un solo passaggio, eliminando il trascinamento manuale nel browser.",
      },
      {
        question: "Si sincronizza tra più dispositivi?",
        answer:
          "Sì: la sincronizzazione facoltativa via iCloud Drive mantiene progetti, screenshot e font disponibili su ogni Mac, iPad e iPhone associato al tuo Apple Account. Le modifiche concorrenti vengono unite campo per campo con priorità all'ultima modifica.",
      },
      {
        question: "Un agente IA può creare i miei screenshot?",
        answer:
          "Sì. Screenshot Bro include un server MCP locale e opzionale su Mac, così un assistente come Claude Code, Claude Desktop o Cursor può creare progetti, disporre righe e forme, importare screenshot, tradurre i testi, generare anteprime che vede davvero, esportare e sincronizzare il set finito con App Store Connect. Il server ascolta solo su 127.0.0.1, ogni richiesta richiede un token di accesso copiato dalle Impostazioni e ogni modifica dell'agente si annulla con ⌘Z.",
      },
      {
        question: "Dove posso ottenere assistenza?",
        answer:
          "Unisciti al Discord di Screenshot Bro: è il modo più rapido per raggiungere lo sviluppatore, segnalare un bug, chiedere come funziona qualcosa e scoprire cosa sta per arrivare. L'email resta valida per questioni private o legate all'account, e la documentazione copre ogni parte dell'editor.",
      },
    ],
    ui: {
      skipToContent: "Vai al contenuto",
      blog: "Blog",
      tutorials: "Tutorial",
      docs: "Documentazione",
      changelog: "Novità",
      comparisons: "Tutti i confronti",
      vsFastlane: "Confronta con Fastlane",
      community: "Community",
      joinDiscord: "Unisciti al Discord",
      privacy: "Privacy",
      terms: "Termini",
      contact: "Contatti",
      friends: "Amici",
      followJourney: "Segui il mio percorso",
      madeWithLoveAt: "Fatto con ❤️ a",
      language: "Lingua",
      sectionsLabel: "Sezioni",
      openMenu: "Apri menu",
      closeMenu: "Chiudi menu",
      seeInAction: "Guarda in azione",
      tryItNow: "Prova ora",
      seeDetails: "Vedi dettagli",
      browseGuides: "Sfoglia tutte le guide",
      submitApp: "Invia la tua app",
      contactDeveloper: "Contatta lo sviluppatore",
      backToTop: "Torna in alto",
      previousScreenshot: "Screenshot precedente",
      nextScreenshot: "Screenshot successivo",
      goToScreenshot: (index) => `Vai allo screenshot ${index}`,
      slideCount: (index, total) => `${index} di ${total}`,
      availabilityNote:
        "App per macOS 15+ e iOS/iPadOS 18+ | Swift e SwiftUI | Disponibile sull'App Store",
    },
    hero: {
      titleLead: "Progetta e pubblica",
      titleAccent: "App Store",
      titleRest: " screenshot.",
      descriptionLead:
        "Importa i tuoi screenshot, inseriscili in cornici per dispositivi, localizza i testi, traduci automaticamente i testi mancanti e",
      descriptionStrong: "carica tutto direttamente su App Store Connect",
      descriptionTail: "— tutto da un'unica e veloce app nativa per Mac, iPad e iPhone.",
    },
    sections: {
      showcases: {
        eyebrow: "Esempi",
        title: "Guarda il flusso di lavoro principale prima di installare.",
        description:
          "Importazione in batch, caricamento su App Store Connect in un clic, livelli, sfondi e cornici per dispositivi in un unico flusso di lavoro.",
      },
      problem: {
        eyebrow: "Perché esiste",
        title:
          "Rilasciare una nuova funzionalità non dovrebbe significare rifare ogni singolo screenshot.",
        description:
          "Screenshot Bro nasce dallo stesso circolo vizioso in cui si trovano molti team: dopo ogni aggiornamento del prodotto, il set di screenshot si trasforma nuovamente in un noioso mini-progetto.",
      },
      workflow: {
        eyebrow: "Flusso di lavoro",
        title: "Una scorciatoia dagli screenshot grezzi agli asset pronti per l'App Store.",
        description:
          "L'app è focalizzata su un unico compito: creare set di screenshot curati senza dover gestire una montagna di file di design temporanei.",
      },
      features: {
        eyebrow: "Funzionalità",
        title: "Tutto ciò di cui hai bisogno. Niente di superfluo.",
        description:
          "Velocità di impaginazione, coerenza degli screenshot ed esportazione ordinata. Niente schede del browser o ridimensionamenti ripetitivi.",
      },
      screenshots: {
        eyebrow: "Screenshot",
        title: "Guardalo in azione.",
        description:
          "Gli screenshot dell'App Store di Screenshot Bro stesso: lo stesso editor che userai per creare i tuoi asset.",
      },
      testimonials: {
        eyebrow: "Sviluppatori",
        title: "Cosa dicono gli sviluppatori.",
        description:
          "Feedback reali da parte di sviluppatori indipendenti che usano Screenshot Bro in produzione.",
      },
      blog: {
        eyebrow: "Dal Blog",
        title: "Guide per pubblicare screenshot migliori su App Store.",
        description:
          "Riferimenti e playbook per dimensioni, localizzazione, caricamento e progettazione di screenshot per App Store e Google Play.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Le domande più frequenti prima di provarlo.",
        description:
          "Risposte chiare su compatibilità, esportazione e sul funzionamento del flusso di lavoro.",
      },
      appShowcase: {
        eyebrow: "Creato con Screenshot Bro",
        title: "Saresti in ottima compagnia.",
        description:
          "App indipendenti che già utilizzano Screenshot Bro per i loro screenshot su App Store e Google Play.",
      },
    },
    problem: {
      story:
        "L'ho creato dopo aver passato troppo tempo su Figma a rifare gli screenshot dell'App Store ogni volta che cambiavano testi, sfumature o lingue. L'obiettivo è semplice: progetta il sistema una volta e lascia che l'app gestisca le parti ripetitive.",
      withoutLabel: "Senza Screenshot Bro",
      withLabel: "Con Screenshot Bro",
    },
    download: {
      titleLine1: "Pronto a pubblicare",
      titleLine2: "screenshot migliori?",
      description:
        "Scarica dall'App Store e prova il flusso di lavoro completo su Mac o iPad: configurazione, design, traduzione automatica, localizzazione ed esportazione.",
    },
    footer: {
      note:
        "Sviluppato con SwiftUI. Progettato per gli sviluppatori che pubblicano aggiornamenti sull'App Store.",
    },
  },
  ko: {
    siteTitle: `${SITE_NAME} — Mac, iPad 및 iPhone용 App Store & Google Play 스크린샷 디자인 도구`,
    siteDescription:
      "네이티브 Mac, iPad 및 iPhone 앱에서 App Store 및 Google Play 스크린샷을 디자인하세요. 디바이스 프레임, 현지화, 자동 번역, 일괄 내보내기, App Store Connect 직접 업로드를 지원합니다.",
    primaryCtaLabel: "App Store에서 받기",
    navItems: [
      { label: "쇼케이스", href: "#showcases" },
      { label: "주요 기능", href: "#features" },
      { label: "워크플로우", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "현재 Mac, iPad 및 iPhone용 App Store에서 다운로드 가능",
      "가져오기, 디자인, 자동 번역, 현지화, 내보내기까지 완벽한 워크플로우",
      "브라우저 드래그 앤 드롭 없이 App Store Connect에 직접 업로드",
    ],
    faqs: [
      {
        question: "Screenshot Bro는 무료인가요?",
        answer:
          "네. 무료 버전은 기간 제한 없이 영구적으로 사용할 수 있으며, 1개 프로젝트(최대 3개 행, 행당 5개 템플릿)를 생성할 수 있습니다. 모든 디바이스 프레임, 도형, 다국어 프리셋 지원, 워터마크 없는 내보내기, App Store Connect 및 Google Play 직접 업로드, iCloud 동기화가 모두 포함됩니다. Pro 버전으로 업그레이드하면 프로젝트, 행, 템플릿 개수 제한이 모두 해제됩니다.",
      },
      {
        question: "웹 기반 App Store 스크린샷 생성기와 어떤 점이 다른가요?",
        answer:
          "Screenshot Bro는 브라우저 웹 도구가 아닌 Mac, iPad, iPhone용 전용 네이티브 앱입니다. 따라서 프로젝트, 이미지, 폰트가 로컬 디스크에 안전하게 보관되며 일상적인 편집에 계정 생성이나 인터넷 연결이 필요하지 않습니다. 렌더링과 일괄 내보내기 역시 원격 서버가 아닌 사용자 기기의 하드웨어에서 직접 실행됩니다. Windows나 Linux를 사용하시거나 브라우저에서 협업해야 하는 경우, 혹은 한두 장의 이미지만 필요한 경우에는 웹 기반 도구가 더 적합할 수 있으며 대안 페이지에서 관련 도구들을 안내하고 있습니다.",
      },
      {
        question: "사용하려면 어떤 기기와 OS가 필요한가요?",
        answer:
          "Mac은 macOS 15(Sequoia) 이상, iPad는 iPadOS 18 이상, iPhone은 iOS 18 이상이 필요합니다. 일상적인 편집 작업에는 별도의 기기, 계정, 인터넷 연결이 필요하지 않습니다.",
      },
      {
        question: "내 데이터가 기기 외부로 전송되나요?",
        answer:
          "작업하신 프로젝트 데이터는 절대 기기 외부로 유출되지 않습니다. 프로젝트, 스크린샷, 폰트는 모두 로컬 디스크에 보관됩니다. 자동 번역은 Apple의 온디바이스 Translation 프레임워크를 통해 기기 내에서 처리되므로 API 키나 외부 서버가 필요하지 않습니다. 선택적인 iCloud Drive 동기화는 사용자의 개인 iCloud 계정을 사용하며 당사는 중간 서버를 운영하지 않습니다. 오류 발생 시 문제 해결을 위한 익명 충돌 보고서와 서비스 개선을 위한 '내보내기 완료' 등의 익명 통계만 전송될 뿐, 프로젝트 내용, 이미지, 작성 텍스트는 일체 수집되지 않습니다.",
      },
      {
        question: "현지화(Localization)는 어떻게 작동하나요?",
        answer:
          "81개 사전 설정 언어 중에서 선택하거나 사용자 지정 언어 코드를 추가할 수 있습니다. 온디바이스 자동 번역이 누락된 텍스트를 기기 내에서 채워줍니다. 번역은 언어별 텍스트 오버라이드로 저장되므로 레이아웃, 색상, 이미지는 모든 언어에서 공유됩니다. 한 번만 디자인하면 모든 언어로 바로 출시할 수 있습니다. 내보내기 시 App Store Connect에서 즉시 인식할 수 있는 언어별 폴더로 자동 정리됩니다.",
      },
      {
        question: "Google Play용 스크린샷도 만들 수 있나요?",
        answer:
          "네. 동일한 프로젝트 내에서 iPhone, iPad, Mac과 함께 Android 스마트폰 및 태블릿 행을 나란히 배치하여 작업할 수 있습니다. 각 기기 카테고리는 해당 스토어에서 요구하는 정확한 픽셀 규격으로 사전 설정되어 있습니다.",
      },
      {
        question: "시뮬레이터나 기기 스크린샷을 직접 드래그 앤 드롭할 수 있나요?",
        answer:
          "네. 스크린샷이 담긴 폴더를 드래그하기만 하면 Screenshot Bro가 픽셀 해상도를 인식하여 올바른 행(iPhone 이미지는 iPhone 행, iPad는 iPad 행, Android는 Android 행)으로 자동 배치합니다. 각 템플릿의 원클릭 캡처 버튼을 누르면 가장 최근 시뮬레이터 스크린샷을 캔버스로 바로 가져올 수도 있습니다.",
      },
      {
        question: "앱 내에서 App Store Connect로 바로 업로드할 수 있나요?",
        answer:
          "네. App Store Connect API 키(Issuer ID, Key ID, .p8 파일)를 한 번만 등록해 두면, Screenshot Bro가 각 행에 맞는 올바른 디스플레이 유형(Display Type)을 자동 감지하고 프로젝트 언어와 App Store Connect 현지화 설정을 매칭하여 기존 스크린샷을 한 번에 교체합니다. 브라우저에서 일일이 드래그 앤 드롭할 필요가 없습니다.",
      },
      {
        question: "여러 기기 간에 프로젝트가 동기화되나요?",
        answer:
          "네. 선택적 iCloud Drive 동기화를 사용하면 동일한 Apple 계정으로 로그인된 모든 Mac과 iPad에서 프로젝트, 스크린샷, 폰트를 동기화하여 사용할 수 있습니다. 충돌 발생 시 필드 단위로 최근 변경 내용이 자동 병합됩니다.",
      },
      {
        question: "AI 에이전트가 스크린샷을 만들어 줄 수 있나요?",
        answer:
          "네. Screenshot Bro는 Mac에서 선택적으로 켤 수 있는 로컬 MCP 서버를 제공합니다. Claude Code, Claude Desktop, Cursor 같은 어시스턴트가 프로젝트 생성, 행과 도형 배치, 스크린샷 가져오기, 텍스트 번역, 직접 확인할 수 있는 미리보기 렌더링, 내보내기, App Store Connect 동기화까지 처리합니다. 서버는 127.0.0.1에서만 대기하고 모든 요청에 설정에서 복사한 액세스 토큰이 필요하며, 에이전트의 변경은 ⌘Z로 되돌릴 수 있습니다.",
      },
      {
        question: "지원은 어디서 받을 수 있나요?",
        answer:
          "Screenshot Bro Discord에 참여해 보세요. 개발자에게 직접 연락하고, 버그를 제보하고, 사용법을 묻고, 다음에 무엇이 나올지 확인하는 가장 빠른 방법입니다. 개인적이거나 계정 관련 문의는 이메일로도 가능하며, 도움말 문서는 편집기의 모든 기능을 다룹니다.",
      },
    ],
    ui: {
      skipToContent: "본문으로 건너뛰기",
      blog: "블로그",
      tutorials: "튜토리얼",
      changelog: "업데이트 소식",
      comparisons: "전체 비교",
      vsFastlane: "Fastlane과 비교",
      community: "커뮤니티",
      joinDiscord: "Discord 참여하기",
      privacy: "개인정보 처리방침",
      terms: "이용약관",
      contact: "문의하기",
      friends: "친구들의 앱",
      followJourney: "개발 여정 팔로우",
      madeWithLoveAt: "Made with ❤️ at",
      language: "언어",
      sectionsLabel: "섹션",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
      seeInAction: "기능 데모 보기",
      tryItNow: "지금 사용해보기",
      seeDetails: "자세히 보기",
      browseGuides: "모든 가이드 둘러보기",
      submitApp: "앱 등록 신청",
      contactDeveloper: "개발자에게 연락하기",
      backToTop: "맨 위로 이동",
      previousScreenshot: "이전 스크린샷",
      nextScreenshot: "다음 스크린샷",
      goToScreenshot: (index) => `스크린샷 ${index}로 이동`,
      slideCount: (index, total) => `${total}개 중 ${index}번째`,
      availabilityNote:
        "macOS 15+ 및 iOS/iPadOS 18+ 앱 | Swift 및 SwiftUI | App Store에서 다운로드 가능",
    },
    hero: {
      titleLead: "스크린샷 디자인부터",
      titleAccent: "App Store",
      titleRest: " 등록까지 간편하게.",
      descriptionLead:
        "스크린샷을 가져오고, 디바이스 프레임을 씌우고, 문구를 현지화하며, 누락된 텍스트는 자동으로 번역하여",
      descriptionStrong: "App Store Connect에 바로 업로드하세요",
      descriptionTail: "— 이 모든 작업이 빠르고 네이티브한 하나의 Mac, iPad 및 iPhone 앱에서 가능합니다.",
    },
    sections: {
      showcases: {
        eyebrow: "쇼케이스",
        title: "설치하기 전에 핵심 워크플로우를 확인하세요.",
        description:
          "일괄 가져오기, 원클릭 App Store Connect 업로드, 레이어, 배경, 디바이스 프레임 등 대부분의 사용자가 시간을 절약할 수 있는 주요 기능들을 보여줍니다.",
      },
      problem: {
        eyebrow: "개발 배경",
        title:
          "새로운 기능을 출시할 때마다 모든 스크린샷을 다시 만들 필요가 없어야 합니다.",
        description:
          "Screenshot Bro는 대부분의 앱 개발 팀들이 겪는 문제에서 시작되었습니다. 제품이 업데이트되면 스크린샷 세트를 수정하는 번거로운 미니 프로젝트가 반복되곤 합니다.",
      },
      workflow: {
        eyebrow: "워크플로우",
        title: "원본 스크린샷에서 App Store에 바로 제출할 수 있는 리소스까지의 단축 경로.",
        description:
          "단발성 디자인 파일을 대량으로 관리할 필요 없이, 깔끔하게 다듬어진 스크린샷 세트를 손쉽게 만드는 단 하나의 작업에만 집중합니다.",
      },
      features: {
        eyebrow: "주요 기능",
        title: "필요한 모든 기능. 불필요한 기능은 제로.",
        description:
          "레이아웃 속도, 스크린샷의 일관성, 직관적인 내보내기에 집중했습니다. 불필요한 브라우저 탭 이동이나 크기 조절 반복 작업이 필요 없습니다.",
      },
      screenshots: {
        eyebrow: "스크린샷",
        title: "직접 확인해보세요.",
        description:
          "Screenshot Bro 앱 자체의 App Store 스크린샷입니다. 귀하의 앱 스크린샷 세트를 제작할 때 사용하게 될 에디터와 동일합니다.",
      },
      testimonials: {
        eyebrow: "개발자 한마디",
        title: "개발자들의 솔직한 후기.",
        description:
          "실제 프로덕션 환경에서 Screenshot Bro를 사용 중인 1인 개발자들의 실제 피드백입니다.",
      },
      blog: {
        eyebrow: "블로그 소식",
        title: "더 나은 App Store 스크린샷 제작을 위한 가이드.",
        description:
          "실제 전환율을 높여주는 App Store 및 Google Play 스크린샷 규격, 현지화, 업로드 및 디자인에 관한 참고용 플레이북입니다.",
      },
      faq: {
        eyebrow: "자주 묻는 질문",
        title: "사용하기 전에 가장 많이 묻는 질문들.",
        description:
          "초기 단계이지만 호환성 및 내보내기, 핵심 워크플로우에 대한 명쾌한 답변을 담았습니다.",
      },
      appShowcase: {
        eyebrow: "Screenshot Bro로 완성된 앱",
        title: "훌륭한 앱들과 함께하세요.",
        description:
          "App Store와 Google Play 스크린샷 제작에 이미 Screenshot Bro를 사용하고 있는 인디 앱들을 소개합니다.",
      },
    },
    problem: {
      story:
        "텍스트나 그라데이션, 언어가 바뀔 때마다 Figma에서 매번 App Store 스크린샷을 새로 디자인하는 데 너무 많은 시간을 낭비한 끝에 이 앱을 개발하게 되었습니다. 목표는 간단합니다. 템플릿 시스템을 한 번 구축해두면 반복적인 작업은 앱이 알아서 처리하는 것입니다.",
      withoutLabel: "Screenshot Bro 사용 전",
      withLabel: "Screenshot Bro 사용 후",
    },
    download: {
      titleLine1: "더 매력적인 스크린샷을",
      titleLine2: "배포할 준비가 되셨나요?",
      description:
        "App Store에서 다운로드하여 Mac 또는 iPad에서 설정, 디자인, 자동 번역, 현지화 및 내보내기까지의 모든 워크플로우를 지금 경험해보세요.",
    },
    footer: {
      note:
        "SwiftUI로 개발되었습니다. App Store 업데이트를 릴리스하는 모든 개발자들을 위해 디자인되었습니다.",
    },
  },
  uk: {
    siteTitle: `${SITE_NAME} — Скриншоти для App Store та Google Play на Mac`,
    siteDescription:
      "Створюйте скриншоти для App Store та Google Play у нативному додатку для Mac, iPad та iPhone. Рамки пристроїв, локалізація та пряме завантаження в App Store Connect.",
    primaryCtaLabel: "Завантажити в App Store",
    navItems: [
      { label: "Показ", href: "#showcases" },
      { label: "Можливості", href: "#features" },
      { label: "Процес", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Вже доступно в App Store для Mac, iPad та iPhone",
      "Повний робочий процес: імпорт, дизайн, автопереклад, локалізація та експорт",
      "Пряме завантаження в App Store Connect без ручного перетягування у браузері",
    ],
    faqs: [
      {
        question: "Чи Screenshot Bro безкоштовний?",
        answer:
          "Так. Безкоштовний тариф необмежений за часом: 1 проект до 3 рядків і 5 шаблонів на рядок — із повним доступом до всіх рамок пристроїв, фігур і 81 мов, експортом без водяних знаків, завантаженням в App Store Connect і Google Play та синхронізацією iCloud. Тариф Pro знімає всі обмеження на проекти, рядки та шаблони.",
      },
      {
        question: "Чим це відрізняється від онлайн-генераторів скриншотів?",
        answer:
          "Screenshot Bro — це нативний додаток для Mac, iPad та iPhone, а не інструмент у браузері. Ваші проекти, скриншоти та шрифти зберігаються на диску, а щоденне редагування не потребує облікового запису чи інтернету. Рендеринг і пакетний експорт працюють на вашому власному залізі, а не на віддаленому сервері. Якщо ви користуєтеся Windows чи Linux, потребуєте спільної роботи в браузері або вам потрібні лише одне-два зображення, веб-інструмент може підійти краще — наша сторінка альтернатив описує ці випадки.",
      },
      {
        question: "Що потрібно для запуску?",
        answer:
          "macOS 15 (Sequoia) або новіша на Mac, iPadOS 18 або новіша на iPad, або iOS 18 або новіша на iPhone. Для щоденної роботи не потрібні додаткові пристрої, облікові записи чи підключення до інтернету.",
      },
      {
        question: "Чи залишають мої дані мій пристрій?",
        answer:
          "Ваша робота залишається на пристрої. Проекти, скриншоти та шрифти зберігаються локально на диску. Автоматичний переклад виконується прямо на пристрої через фреймворк Apple Translation — жодних API-ключів чи сторонніх серверів. Опціональна синхронізація через iCloud Drive використовує ваш особистий обліковий запис iCloud; ми не використовуємо проміжних серверів. Єдине, що надсилається — це анонімний звіт про збої у разі помилки та анонімні лічильники етапів (наприклад, «завершено експорт»), щоб знати, що покращувати. Ми ніколи не збираємо ваші проекти, зображення чи введений текст.",
      },
      {
        question: "Як працює локалізація?",
        answer:
          "Обирайте серед 81 попередньо налаштованих мов або додайте власний код локалі. Автопереклад на пристрої заповнює відсутній текст. Переклади зберігаються як перевизначення тексту для кожної мови, тому макет, кольори та зображення залишаються спільними для всіх мов: оформіть один раз і публікуйте будь-якою мовою. Експортовані файли автоматично розподіляються по папках мов, готових для App Store Connect.",
      },
      {
        question: "Чи можу я створювати скриншоти для Google Play?",
        answer:
          "Так. Рядки для телефонів і планшетів Android рендеряться поруч із рядками для iPhone, iPad і Mac в одному проекті. Кожна категорія пристроїв попередньо налаштована під точні піксельні розміри, які вимагає відповідний магазин.",
      },
      {
        question: "Чи можна перетягувати скриншоти з симуляторів і пристроїв напряму?",
        answer:
          "Так. Перетягніть папку зі скриншотами, і Screenshot Bro автоматично розподілить кожен знімок у потрібний рядок за його піксельним розміром: скриншоти iPhone — у рядок iPhone, iPad — в iPad, а Android — в Android. Кнопка захоплення в один клік на кожному шаблоні також вставляє найновіший знімок із симулятора безпосередньо на полотно.",
      },
      {
        question: "Чи можна завантажувати в App Store Connect напряму з додатку?",
        answer:
          "Так. Налаштуйте API-ключ App Store Connect один раз (Issuer ID, Key ID та файл .p8). Screenshot Bro автоматично визначить правильний тип дисплея для кожного рядка, співставить мови проекту з локалізаціями App Store Connect і замінить наявні скриншоти за один прохід — без перетягування файлів у браузері.",
      },
      {
        question: "Чи синхронізується це між пристроями?",
        answer:
          "Так. Опціональна синхронізація через iCloud Drive забезпечує доступність проектів, скриншотів і шрифтів на кожному Mac, iPad та iPhone під вашим обліковим записом Apple. Конфлікти вирішуються по полях за правилом останньої зміни (last-writer-wins), тому редагування одного проекту на різних пристроях синхронізується ідеально.",
      },
      {
        question: "Чи може ШІ-агент створювати мої скриншоти?",
        answer:
          "Так. Screenshot Bro містить опціональний локальний MCP-сервер на Mac, тому асистенти на зразок Claude Code, Claude Desktop або Cursor можуть створювати проекти, розміщувати рядки та фігури, імпортувати скриншоти, перекладати текст, рендерити прев'ю, експортувати та завантажувати фінальний набір в App Store Connect. Сервер слухає лише 127.0.0.1, кожен запит потребує токена доступу з Налаштувань, а будь-які зміни агента можна скасувати через ⌘Z.",
      },
      {
        question: "Де отримати допомогу та підтримку?",
        answer:
          "Приєднуйтесь до Discord Screenshot Bro — це найшвидший спосіб поспілкуватися з розробником, повідомити про баг, запитати пораду або дізнатися про майбутні функції. Електронна пошта також чудово підходить для приватних питань, а документація охоплює всі можливості редактора.",
      },
    ],
    ui: {
      skipToContent: "Перейти до вмісту",
      blog: "Блог",
      tutorials: "Посібники",
      docs: "Документація",
      changelog: "Історія змін",
      comparisons: "Усі порівняння",
      vsFastlane: "Порівняти з Fastlane",
      community: "Спільнота",
      joinDiscord: "Приєднатися до Discord",
      privacy: "Конфіденційність",
      terms: "Умови",
      contact: "Контакти",
      friends: "Додатки друзів",
      followJourney: "Стежити за розробкою",
      madeWithLoveAt: "Зроблено з ❤️ у",
      language: "Мова",
      sectionsLabel: "Розділи",
      openMenu: "Відкрити меню",
      closeMenu: "Закрити меню",
      seeInAction: "Подивитися в дії",
      tryItNow: "Спробувати зараз",
      seeDetails: "Детальніше",
      browseGuides: "Усі посібники",
      submitApp: "Запропонувати додаток",
      contactDeveloper: "Написати розробнику",
      backToTop: "Вгору",
      previousScreenshot: "Попередній скриншот",
      nextScreenshot: "Наступний скриншот",
      goToScreenshot: (index) => `Перейти до скриншота ${index}`,
      slideCount: (index, total) => `${index} з ${total}`,
      availabilityNote:
        "Додаток для macOS 15+ та iOS/iPadOS 18+ | Swift і SwiftUI | Доступно в App Store",
    },
    hero: {
      titleLead: "Створюйте та публікуйте",
      titleAccent: "App Store",
      titleRest: " скриншоти.",
      descriptionLead:
        "Імпортуйте кадри, обрамляйте їх у рамки пристроїв, локалізуйте текст, автоматично перекладайте відсутні фрагменти та",
      descriptionStrong: "завантажуйте напряму в App Store Connect",
      descriptionTail: " — усе в одному швидкому нативному додатку для Mac, iPad та iPhone.",
    },
    sections: {
      showcases: {
        eyebrow: "Показ",
        title: "Подивіться, як працює генератор скриншотів перед встановленням.",
        description:
          "Пакетний імпорт, завантаження в App Store Connect в один клік, шари, фони та рамки пристроїв — те, що заощаджує найбільше часу.",
      },
      problem: {
        eyebrow: "Навіщо це створено",
        title:
          "Реліз однієї функції не повинен означати переробку кожного скриншота.",
        description:
          "Screenshot Bro з'явився через проблему, знайому кожному: виходить оновлення, і набір скриншотів знову перетворюється на рутинний міні-проект.",
      },
      workflow: {
        eyebrow: "Процес",
        title: "Коротший шлях від сирих знімків до готових матеріалів для App Store.",
        description:
          "Продукт заточений під одне завдання: створювати вишукані скриншоти без підтримки купи одноразових файлів дизайну.",
      },
      features: {
        eyebrow: "Можливості",
        title: "Усе, що має робити генератор скриншотів. І нічого зайвого.",
        description:
          "Швидкість верстки, узгодженість скриншотів і зручний експорт. Без вкладок браузера, складних графічних редакторів та нудної зміни розмірів.",
      },
      screenshots: {
        eyebrow: "Скриншоти",
        title: "Подивіться в дії.",
        description:
          "Скриншоти самого додатку Screenshot Bro в App Store — той самий редактор, який ви будете використовувати для своїх скриншотів.",
      },
      testimonials: {
        eyebrow: "Розробники",
        title: "Що кажуть розробники.",
        description:
          "Реальні відгуки від інді-розробників, які використовують Screenshot Bro у продакшені.",
      },
      blog: {
        eyebrow: "З блогу",
        title: "Посібники зі створення кращих скриншотів для App Store.",
        description:
          "Довідники та інструкції щодо розмірів, локалізації, завантаження та дизайну скриншотів, які дійсно конвертують.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Запитання, які найчастіше ставлять перед використанням.",
        description:
          "Відповіді на головні питання щодо сумісності, експорту та основного робочого процесу.",
      },
      appShowcase: {
        eyebrow: "Створено за допомогою Screenshot Bro",
        title: "Ви в чудовій компанії.",
        description:
          "Інді-додатки, які вже використовують Screenshot Bro для скриншотів у App Store та Google Play.",
      },
    },
    problem: {
      story:
        "Я створив його після того, як провів занадто багато часу у Figma, переробляючи скриншоти для App Store щоразу, коли змінювався текст, градієнти чи мови. Мета проста: налаштуйте систему один раз, а рутину довірте додатку.",
      withoutLabel: "Без Screenshot Bro",
      withLabel: "З Screenshot Bro",
    },
    download: {
      titleLine1: "Готові публікувати",
      titleLine2: "кращі скриншоти?",
      description:
        "Завантажте з App Store та використовуйте повний робочий процес на Mac або iPad: налаштування, дизайн, автопереклад, локалізація та експорт для App Store і Google Play.",
    },
    footer: {
      note:
        "Створено на SwiftUI. Створено для розробників, які регулярно випускають оновлення в App Store.",
    },
  },
  pl: {
    siteTitle: `${SITE_NAME} — Zrzuty ekranu do App Store i Google Play na Maca`,
    siteDescription:
      "Projektuj zrzuty ekranu dla App Store i Google Play w natywnej aplikacji na Maca, iPada i iPhone'a. Ramki urządzeń, lokalizacja i bezpośrednie przesyłanie do App Store Connect.",
    primaryCtaLabel: "Pobierz w App Store",
    navItems: [
      { label: "Przykłady", href: "#showcases" },
      { label: "Funkcje", href: "#features" },
      { label: "Przepływ pracy", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Dostępne w App Store na Maca, iPada i iPhone'a",
      "Pełny przepływ pracy: import, projektowanie, automatyczne tłumaczenie, lokalizacja i eksport",
      "Bezpośrednie przesyłanie do App Store Connect bez ręcznego przeciągania plików w przeglądarce",
    ],
    faqs: [
      {
        question: "Czy Screenshot Bro jest darmowy?",
        answer:
          "Tak. Plan darmowy nie wygasa: 1 projekt z maksymalnie 3 wierszami i 5 szablonami na wiersz, z pełnym dostępem do wszystkich ramek urządzeń, kształtów i 81 wersji językowych, eksportem bez znaku wodnego, przesyłaniem do App Store Connect i Google Play oraz synchronizacją iCloud. Wersja Pro usuwa limity projektów, wierszy i szablonów.",
      },
      {
        question: "Czym różni się od generatorów zrzutów ekranu w przeglądarce?",
        answer:
          "Screenshot Bro to natywna aplikacja na Maca, iPada i iPhone'a, a nie narzędzie w przeglądarce. Projekty, zrzuty ekranu i czcionki są zapisywane na Twoim dysku, a codzienna edycja nie wymaga konta ani połączenia z internetem. Renderowanie i masowy eksport działają na Twoim własnym sprzęcie, a nie na serwerze. Jeśli używasz systemu Windows lub Linux, potrzebujesz współpracy zespołowej w czasie rzeczywistym lub tylko jednego czy dwóch obrazów, narzędzie przeglądarkowe może być lepszym wyborem — nasza strona z alternatywami opisuje te przypadki.",
      },
      {
        question: "Czego potrzebuję, aby go używać?",
        answer:
          "macOS 15 (Sequoia) lub nowszego na Macu, iPadOS 18 lub nowszego na iPadzie lub iOS 18 lub nowszego na iPhonie. Do codziennej pracy nie są wymagane żadne dodatkowe urządzenia, konta ani połączenie z internetem.",
      },
      {
        question: "Czy moje dane opuszczają moje urządzenie?",
        answer:
          "Twoja praca nie. Projekty, zrzuty ekranu i czcionki są przechowywane lokalnie na Twoim dysku. Automatyczne tłumaczenie działa bezpośrednio na urządzeniu za pośrednictwem frameworka Apple Translation — bez kluczy API i zewnętrznych serwerów. Opcjonalna synchronizacja z iCloud Drive korzysta z Twojego osobistego konta iCloud; nie prowadzimy żadnych serwerów pośredniczących. Jedyne, co jest wysyłane, to anonimowe raporty o awariach oraz anonimowe liczniki zdarzeń (np. «zakończono eksport»), aby wiedzieć, co ulepszyć — nigdy Twoje projekty, obrazy ani wpisywany tekst.",
      },
      {
        question: "Jak działa lokalizacja?",
        answer:
          "Wybieraj spośród 81 predefiniowanych języków lub dodaj własny kod lokalizacji. Automatyczne tłumaczenie na urządzeniu uzupełnia brakujący tekst. Tłumaczenia są zapisywane jako nadpisania tekstu dla poszczególnych języków, więc układ, kolory i obrazy są współdzielone: projektujesz raz i publikujesz w dowolnym języku. Wyeksportowane pliki są automatycznie organizowane w foldery według języków, gotowe dla App Store Connect.",
      },
      {
        question: "Czy mogę tworzyć zrzuty ekranu również dla Google Play?",
        answer:
          "Tak. Wiersze dla telefonów i tabletów z Androidem renderują się obok wierszy dla iPhone'a, iPada i Maca w tym samym projekcie. Każda kategoria urządzeń jest wstępnie skonfigurowana pod kątem dokładnych wymiarów w pikselach wymaganych przez dany sklep.",
      },
      {
        question: "Czy mogę przeciągać zrzuty ekranu bezpośrednio z symulatorów i urządzeń?",
        answer:
          "Tak. Przeciągnij folder ze zrzutami ekranu, a Screenshot Bro automatycznie przypisze każdy plik do właściwego wiersza na podstawie jego wymiarów w pikselach: zrzuty z iPhone'a do wiersza iPhone, z iPada do iPada, a z Androida do Androida. Przycisk przechwytywania jednym kliknięciem na każdym szablonie wstawia również najnowszy zrzut z symulatora bezpośrednio na płótno.",
      },
      {
        question: "Czy mogę przesyłać bezpośrednio do App Store Connect z aplikacji?",
        answer:
          "Tak. Skonfiguruj klucz API App Store Connect raz (Issuer ID, Key ID i plik .p8). Screenshot Bro automatycznie wykrywa właściwy typ ekranu dla każdego wiersza, dopasowuje języki projektu do lokalizacji w App Store Connect i podmienia istniejące zrzuty ekranu w jednym przebiegu — bez przeciągania plików w przeglądarce.",
      },
      {
        question: "Czy synchronizuje się między urządzeniami?",
        answer:
          "Tak. Opcjonalna synchronizacja z iCloud Drive sprawia, że Twoje projekty, zrzuty ekranu i czcionki są dostępne na każdym Macu, iPadzie i iPhonie zalogowanym na Twoje konto Apple. Konflikty są rozwiązywane bezpiecznie na poziomie pól według zasady ostatniej zmiany.",
      },
      {
        question: "Czy agent AI może stworzyć moje zrzuty ekranu?",
        answer:
          "Tak. Screenshot Bro zawiera opcjonalny lokalny serwer MCP na Macu, dzięki czemu asystenci tacy jak Claude Code, Claude Desktop lub Cursor mogą tworzyć projekty, układać wiersze i kształty, importować zrzuty ekranu, tłumaczyć teksty, renderować podglądy, eksportować i przesyłać gotowy zestaw do App Store Connect. Serwer nasłuchuje tylko na 127.0.0.1, każde żądanie wymaga tokenu dostępu z Ustawień, a wszelkie zmiany wykonane przez agenta można cofnąć za pomocą ⌘Z.",
      },
      {
        question: "Gdzie mogę uzyskać pomoc i wsparcie?",
        answer:
          "Dołącz do serwera Discord Screenshot Bro — to najszybszy sposób na kontakt z twórcą, zgłoszenie błędu, zadanie pytania lub sprawdzenie nadchodzących funkcji. E-mail jest również świetną opcją w sprawach prywatnych, a dokumentacja szczegółowo opisuje wszystkie możliwości edytora.",
      },
    ],
    ui: {
      skipToContent: "Przejdź do treści",
      blog: "Blog",
      tutorials: "Poradniki",
      docs: "Dokumentacja",
      changelog: "Historia zmian",
      comparisons: "Wszystkie porównania",
      vsFastlane: "Porównaj z Fastlane",
      community: "Społeczność",
      joinDiscord: "Dołącz do Discorda",
      privacy: "Prywatność",
      terms: "Regulamin",
      contact: "Kontakt",
      friends: "Aplikacje znajomych",
      followJourney: "Śledź moją drogę",
      madeWithLoveAt: "Stworzone z ❤️ w",
      language: "Język",
      sectionsLabel: "Sekcje",
      openMenu: "Otwórz menu",
      closeMenu: "Zamknij menu",
      seeInAction: "Zobacz w akcji",
      tryItNow: "Wypróbuj teraz",
      seeDetails: "Zobacz szczegóły",
      browseGuides: "Wszystkie poradniki",
      submitApp: "Zgłoś aplikację",
      contactDeveloper: "Napisz do twórcy",
      backToTop: "W górę",
      previousScreenshot: "Poprzedni zrzut ekranu",
      nextScreenshot: "Następny zrzut ekranu",
      goToScreenshot: (index) => `Przejdź do zrzutu ekranu ${index}`,
      slideCount: (index, total) => `${index} z ${total}`,
      availabilityNote:
        "Aplikacja na macOS 15+ i iOS/iPadOS 18+ | Swift i SwiftUI | Dostępna w App Store",
    },
    hero: {
      titleLead: "Twórz i publikuj",
      titleAccent: "App Store",
      titleRest: " zrzuty ekranu.",
      descriptionLead:
        "Importuj zrzuty, oprawiaj je w ramki urządzeń, lokalizuj tekst, automatycznie tłumacz brakujące fragmenty i",
      descriptionStrong: "przesyłaj bezpośrednio do App Store Connect",
      descriptionTail: " — wszystko w jednej szybkiej, natywnej aplikacji na Maca, iPada i iPhone'a.",
    },
    sections: {
      showcases: {
        eyebrow: "Prezentacja",
        title: "Zobacz, jak działa generator zrzutów ekranu, zanim zainstalujesz.",
        description:
          "Masowy import, przesyłanie do App Store Connect jednym kliknięciem, warstwy, tła i ramki urządzeń — to, co pozwala zaoszczędzić najwięcej czasu.",
      },
      problem: {
        eyebrow: "Dlaczego powstał",
        title:
          "Wydanie jednej nowej funkcji nie powinno oznaczać projektowania wszystkich zrzutów od nowa.",
        description:
          "Screenshot Bro powstał z problemu, który zna każdy: pojawia się aktualizacja, a zestaw zrzutów ekranu znowu staje się monotonnym miniprojektem.",
      },
      workflow: {
        eyebrow: "Przepływ pracy",
        title: "Krótsza droga od surowych zrzutów do gotowych materiałów dla App Store.",
        description:
          "Produkt jest stworzony do jednego zadania: tworzenia dopracowanych zrzutów bez konieczności utrzymywania wielu jednorazowych plików graficznych.",
      },
      features: {
        eyebrow: "Możliwości",
        title: "Wszystko, co powinien robić generator zrzutów ekranu. I nic zbędnego.",
        description:
          "Szybkość układania, spójność zrzutów i bezproblemowy eksport. Bez kart w przeglądarce, skomplikowanych programów graficznych i żmudnej zmiany rozmiarów.",
      },
      screenshots: {
        eyebrow: "Zrzuty ekranu",
        title: "Zobacz w akcji.",
        description:
          "Zrzuty ekranu samej aplikacji Screenshot Bro w App Store — ten sam edytor, którego używasz do swoich zrzutów ekranu.",
      },
      testimonials: {
        eyebrow: "Twórcy",
        title: "Co mówią deweloperzy.",
        description:
          "Prawdziwe opinie niezależnych deweloperów korzystających ze Screenshot Bro na co dzień.",
      },
      blog: {
        eyebrow: "Z bloga",
        title: "Poradniki dotyczące tworzenia lepszych zrzutów ekranu dla App Store.",
        description:
          "Przewodniki i wskazówki dotyczące wymiarów, lokalizacji, przesyłania i projektowania zrzutów, które naprawdę konwertują.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Pytania, które najczęściej padają przed wypróbowaniem.",
        description:
          "Odpowiedzi na najważniejsze pytania dotyczące kompatybilności, eksportu i podstawowego przepływu pracy.",
      },
      appShowcase: {
        eyebrow: "Stworzone za pomocą Screenshot Bro",
        title: "Jesteś w świetnym towarzystwie.",
        description:
          "Aplikacje niezależnych twórców, które już używają Screenshot Bro do zrzutów w App Store i Google Play.",
      },
    },
    problem: {
      story:
        "Stworzyłem go po spędzeniu zbyt wielu godzin w Figmie na poprawianiu zrzutów ekranu dla App Store za każdym razem, gdy zmieniał się tekst, gradienty lub języki. Cel jest prosty: zaprojektuj system raz, a powtarzalne czynności zostaw aplikacji.",
      withoutLabel: "Bez Screenshot Bro",
      withLabel: "Ze Screenshot Bro",
    },
    download: {
      titleLine1: "Gotowy na publikację",
      titleLine2: "lepszych zrzutów ekranu?",
      description:
        "Pobierz z App Store i korzystaj z pełnego przepływu pracy na Macu lub iPadzie: konfiguracja, projektowanie, automatyczne tłumaczenie, lokalizacja i eksport dla App Store i Google Play.",
    },
    footer: {
      note:
        "Stworzone w SwiftUI. Zaprojektowane dla twórców aplikacji regularnie publikujących aktualizacje w App Store.",
    },
  },
  tr: {
    siteTitle: `${SITE_NAME} — Mac'te App Store ve Google Play Ekran Görüntüleri`,
    siteDescription:
      "Mac, iPad ve iPhone için yerel uygulamada App Store ve Google Play ekran görüntüleri tasarlayın. Cihaz çerçeveleri, yerelleştirme ve doğrudan App Store Connect yüklemesi.",
    primaryCtaLabel: "App Store'dan İndir",
    navItems: [
      { label: "Örnekler", href: "#showcases" },
      { label: "Özellikler", href: "#features" },
      { label: "İş Akışı", href: "#workflow" },
      { label: "SSS", href: "#faq" },
    ],
    benefits: [
      "Mac, iPad ve iPhone için App Store'da mevcut",
      "Tam iş akışı: içe aktarma, tasarım, otomatik çeviri, yerelleştirme ve dışa aktarma",
      "Tarayıcıda sürükleyip bırakmadan doğrudan App Store Connect'e yükleme",
    ],
    faqs: [
      {
        question: "Screenshot Bro ücretsiz mi?",
        answer:
          "Evet. Ücretsiz planın süresi dolmaz: 3 satıra kadar ve satır başına 5 şablonla 1 proje, tüm cihaz çerçevelerine, şekillere ve 81 yerel ayara tam erişim, filigransız dışa aktarma, App Store Connect ve Google Play yüklemesi ve iCloud eşzamanlama içerir. Pro sürümü proje, satır ve şablon sınırlarını kaldırır.",
      },
      {
        question: "Web tabanlı ekran görüntüsü oluşturuculardan farkı nedir?",
        answer:
          "Screenshot Bro, tarayıcı aracı değil Mac, iPad ve iPhone için yerel bir uygulamadır. Projeler, ekran görüntüleri ve yazı tipleri diskinizde saklanır; günlük düzenleme için hesap veya internet gerekmez. İşleme ve toplu dışa aktarma uzak sunucu yerine kendi donanımınızda çalışır.",
      },
      {
        question: "Çalıştırmak için neye ihtiyacım var?",
        answer:
          "Mac'te macOS 15 (Sequoia) veya üstü, iPad'de iPadOS 18 veya üstü ya da iPhone'da iOS 18 veya üstü. Günlük düzenleme için ek bir cihaza, hesaba veya internet bağlantısına gerek yoktur.",
      },
      {
        question: "Verilerim cihazımdan dışarı çıkıyor mu?",
        answer:
          "Çalışmalarınız cihazınızda kalır. Projeler, ekran görüntüleri ve yazı tipleri yerel diskinizde depolanır. Otomatik çeviri Apple Translation çerçevesiyle doğrudan cihazda çalışır — API anahtarı veya üçüncü taraf sunucu yoktur.",
      },
      {
        question: "Yerelleştirme nasıl çalışır?",
        answer:
          "81 önceden tanımlanmış dilden birini seçin veya kendi yerel ayar kodunuzu ekleyin. Cihaz içi otomatik çeviri eksik metinleri tamamlar. Çeviriler dil başına metin geçersiz kılmaları olarak saklanır; böylece düzen ve görseller paylaşılır.",
      },
      {
        question: "Google Play için de ekran görüntüsü oluşturabilir miyim?",
        answer:
          "Evet. Android telefon ve tablet satırları, aynı projede iPhone, iPad ve Mac satırlarıyla yan yana işlenir. Her cihaz kategorisi, mağazanın gerektirdiği tam piksel boyutlarıyla önceden yapılandırılmıştır.",
      },
      {
        question: "Simülatörlerden ve cihazlardan ekran görüntülerini doğrudan sürükleyebilir miyim?",
        answer:
          "Evet. Ekran görüntüleri klasörünü sürükleyin; Screenshot Bro her görüntüyü piksel boyutuna göre doğru satıra otomatik olarak yerleştirir.",
      },
      {
        question: "Uygulamadan doğrudan App Store Connect'e yükleyebilir miyim?",
        answer:
          "Evet. App Store Connect API anahtarınızı bir kez yapılandırın. Screenshot Bro her satır için doğru ekran türünü algılar ve mevcut ekran görüntülerini tek geçişte günceller.",
      },
      {
        question: "Cihazlar arasında eşitleniyor mu?",
        answer:
          "Evet. İsteğe bağlı iCloud Drive eşitlemesi projelerinizi, ekran görüntülerinizi ve yazı tiplerinizi tüm Apple cihazlarınızda kullanılabilir tutar.",
      },
      {
        question: "Bir yapay zeka ajanı ekran görüntülerimi oluşturabilir mi?",
        answer:
          "Evet. Screenshot Bro, Mac'te isteğe bağlı bir yerel MCP sunucusu içerir; böylece Claude veya Cursor gibi asistanlar projeler oluşturabilir, metinleri çevirebilir ve App Store Connect'e yükleyebilir.",
      },
      {
        question: "Nereden yardım ve destek alabilirim?",
        answer:
          "Screenshot Bro Discord topluluğuna katılın — geliştiriciyle konuşmanın ve geri bildirim paylaşmanın en hızlı yoludur. Özel konular için e-posta da gönderebilirsiniz.",
      },
    ],
    ui: {
      skipToContent: "İçeriğe atla",
      blog: "Blog",
      tutorials: "Rehberler",
      docs: "Belgeler",
      changelog: "Değişiklik Günlüğü",
      comparisons: "Tüm Karşılaştırmalar",
      vsFastlane: "Fastlane ile Karşılaştır",
      community: "Topluluk",
      joinDiscord: "Discord'a Katıl",
      privacy: "Gizlilik",
      terms: "Şartlar",
      contact: "İletişim",
      friends: "Arkadaş Uygulamaları",
      followJourney: "Yolculuğumu Takip Et",
      madeWithLoveAt: "❤️ ile yapıldı:",
      language: "Dil",
      sectionsLabel: "Bölümler",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      seeInAction: "Çalışırken görün",
      tryItNow: "Şimdi deneyin",
      seeDetails: "Detayları görün",
      browseGuides: "Tüm rehberlere göz atın",
      submitApp: "Uygulamanızı gönderin",
      contactDeveloper: "Geliştiriciye ulaşın",
      backToTop: "Yukarı çık",
      previousScreenshot: "Önceki ekran görüntüsü",
      nextScreenshot: "Sonraki ekran görüntüsü",
      goToScreenshot: (index) => `Ekran görüntüsüne git: ${index}`,
      slideCount: (index, total) => `${index} / ${total}`,
      availabilityNote: "macOS 15+ ve iOS/iPadOS 18+ uygulaması | Swift ve SwiftUI | App Store'da mevcut",
    },
    hero: {
      titleLead: "Dakikalar İçinde",
      titleAccent: "App Store",
      titleRest: " Ekran Görüntüleri Oluşturun",
      descriptionLead: "Bir kez tasarlayın. 70'ten fazla dile yerelleştirin, her cihaz boyutunu oluşturun ve",
      descriptionStrong: "doğrudan App Store Connect'e yükleyin",
      descriptionTail: " — hepsi tek bir yerel Mac, iPad ve iPhone uygulamasında.",
    },
    sections: {
      showcases: { eyebrow: "Vitrin", title: "Yüklemeden önce ekran görüntüsü oluşturucunun nasıl çalıştığını görün.", description: "Toplu içe aktarma, tek tıkla App Store Connect yüklemesi, katmanlar ve cihaz çerçeveleri." },
      problem: { eyebrow: "Neden Var", title: "Tek bir yeni özellik yayınlamak tüm ekran görüntülerini yeniden yapmak anlamına gelmemeli.", description: "Screenshot Bro, her güncellemede ekran görüntülerinin sıkıcı bir projeye dönüşmesini engeller." },
      workflow: { eyebrow: "İş Akışı", title: "Ham görüntülerden App Store'a hazır varlıklara giden en kısa yol.", description: "Tek kullanımlık tasarım dosyaları yığını tutmadan kusursuz ekran görüntüleri oluşturun." },
      features: { eyebrow: "Yetenekler", title: "Bir App Store ekran görüntüsü aracının yapması gereken her şey.", description: "Düzen hızı, tutarlılık ve zahmetsiz dışa aktarma odaklı." },
      screenshots: { eyebrow: "Ekran Görüntüleri", title: "Çalışırken görün.", description: "Screenshot Bro uygulamasının App Store ekran görüntüleri." },
      testimonials: { eyebrow: "Geliştiriciler", title: "Geliştiriciler ne diyor?", description: "Screenshot Bro'yu üretimde kullanan bağımsız geliştiricilerden geri bildirimler." },
      blog: { eyebrow: "Blogdan", title: "Daha iyi App Store ekran görüntüleri için rehberler.", description: "Dönüşüm sağlayan ekran görüntüleri tasarlamak için başvuru kaynakları." },
      faq: { eyebrow: "SSS", title: "Denemeden önce en çok sorulan sorular.", description: "Uyumluluk ve temel iş akışı hakkındaki yanıtlar." },
      appShowcase: { eyebrow: "Screenshot Bro ile Yayınlandı", title: "Harika bir topluluktassınız.", description: "Ekran görüntüleri için Screenshot Bro'yu kullanan bağımsız uygulamalar." },
    },
    problem: {
      story: "Metin veya diller her değiştiğinde Figma'da App Store ekran görüntülerini baştan yapmaktan yorulduğum için geliştirdim. Amaç basit: sistemi bir kez kurun, gerisini uygulamaya bırakın.",
      withoutLabel: "Screenshot Bro Olmadan",
      withLabel: "Screenshot Bro İle",
    },
    download: {
      titleLine1: "Daha iyi ekran görüntüleri",
      titleLine2: "yayınlamaya hazır mısınız?",
      description: "App Store'dan indirin ve Mac veya iPad'de tam iş akışını kullanın: kurulum, tasarım, yerelleştirme ve dışa aktarma.",
    },
    footer: {
      note: "SwiftUI ile geliştirildi. App Store güncellemeleri yayınlayan geliştiriciler için tasarlandı.",
    },
  },
  nl: {
    siteTitle: `${SITE_NAME} — App Store & Google Play screenshots op Mac`,
    siteDescription:
      "Ontwerp screenshots voor App Store en Google Play in een native app voor Mac, iPad en iPhone. Apparaatframes, lokalisatie en directe upload naar App Store Connect.",
    primaryCtaLabel: "Download in App Store",
    navItems: [
      { label: "Voorbeelden", href: "#showcases" },
      { label: "Functies", href: "#features" },
      { label: "Werkwijze", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Nu beschikbaar in de App Store voor Mac en iPad",
      "Volledige workflow: importeren, ontwerpen, automatisch vertalen, lokaliseren en exporteren",
      "Direct uploaden naar App Store Connect zonder bestanden in de browser te slepen",
    ],
    faqs: [
      {
        question: "Is Screenshot Bro gratis?",
        answer:
          "Ja. Het gratis plan verloopt nooit: 1 project met maximaal 3 rijen en 5 sjablonen per rij, met volledige toegang tot alle apparaatframes, vormen en 81 talen, export zonder watermerk, store-upload en iCloud-synchronisatie. Pro verwijdert alle limieten.",
      },
      {
        question: "Waarin verschilt het van webgebaseerde screenshotgenerators?",
        answer:
          "Screenshot Bro is een native app voor Mac, iPad en iPhone in plaats van een browsertool. Uw projecten, screenshots en lettertypen blijven veilig op uw eigen schijf.",
      },
      {
        question: "Wat heb ik nodig om het te gebruiken?",
        answer:
          "macOS 15 (Sequoia) of nieuwer op Mac, iPadOS 18 of nieuwer op iPad, of iOS 18 of nieuwer op iPhone. Geen account of internet vereist voor dagelijks gebruik.",
      },
      {
        question: "Verlaten mijn gegevens mijn apparaat?",
        answer:
          "Nee. Uw projecten en bestanden blijven lokaal op uw apparaat. Automatische vertaling draait op het apparaat via Apple Translation.",
      },
      {
        question: "Hoe werkt lokalisatie?",
        answer:
          "Kies uit 81 vooraf geconfigureerde talen. Automatische vertaling op het apparaat vult ontbrekende tekst aan. Wijzigingen worden per taal bewaard.",
      },
      {
        question: "Kan ik ook screenshots maken voor Google Play?",
        answer:
          "Ja. Android-rijen worden naast iPhone-, iPad- en Mac-rijen in hetzelfde project weergegeven, met de exacte afmetingen van de winkel.",
      },
      {
        question: "Kan ik screenshots rechtstreeks vanaf simulatoren slepen?",
        answer:
          "Ja. Sleep een map met screenshots en Screenshot Bro wijst elk bestand automatisch toe aan de juiste rij op basis van de afmetingen.",
      },
      {
        question: "Kan ik direct uploaden naar App Store Connect?",
        answer:
          "Ja. Stel uw API-sleutel eenmalig in en Screenshot Bro uploadt screenshots direct naar de juiste display types en talen.",
      },
      {
        question: "Synchroniseert het tussen apparaten?",
        answer:
          "Ja. Optionele synchronisatie via iCloud Drive houdt projecten beschikbaar op al uw Macs en iPads.",
      },
      {
        question: "Kan een AI-agent mijn screenshots maken?",
        answer:
          "Ja. Screenshot Bro bevat een optionele lokale MCP-server op Mac voor integratie met Claude of Cursor.",
      },
      {
        question: "Waar vind ik hulp en ondersteuning?",
        answer:
          "Word lid van onze Discord — de snelste manier om in contact te komen met de ontwikkelaar. E-mail is ook altijd welkom.",
      },
    ],
    ui: {
      skipToContent: "Naar inhoud",
      blog: "Blog",
      tutorials: "Handleidingen",
      docs: "Documentatie",
      changelog: "Wijzigingen",
      comparisons: "Alle vergelijkingen",
      vsFastlane: "Vergelijk met Fastlane",
      community: "Community",
      joinDiscord: "Word lid van Discord",
      privacy: "Privacy",
      terms: "Voorwaarden",
      contact: "Contact",
      friends: "Vrienden-apps",
      followJourney: "Volg mijn reis",
      madeWithLoveAt: "Gemaakt met ❤️ in",
      language: "Taal",
      sectionsLabel: "Secties",
      openMenu: "Menu openen",
      closeMenu: "Menu sluiten",
      seeInAction: "Bekijk in actie",
      tryItNow: "Probeer nu",
      seeDetails: "Bekijk details",
      browseGuides: "Bekijk alle gidsen",
      submitApp: "App aanmelden",
      contactDeveloper: "Contacteer ontwikkelaar",
      backToTop: "Naar boven",
      previousScreenshot: "Vorig screenshot",
      nextScreenshot: "Volgend screenshot",
      goToScreenshot: (index) => `Ga naar screenshot ${index}`,
      slideCount: (index, total) => `${index} van ${total}`,
      availabilityNote: "macOS 15+ en iOS/iPadOS 18+ app | Swift & SwiftUI | Beschikbaar in de App Store",
    },
    hero: {
      titleLead: "Maak & lokaliseer",
      titleAccent: "App Store",
      titleRest: " screenshots in minuten",
      descriptionLead: "Ontwerp één keer. Lokaliseer naar 70+ talen, genereer elk apparaatformaat en",
      descriptionStrong: "upload direct naar App Store Connect",
      descriptionTail: " zonder screenshots handmatig opnieuw te maken. Alles in één native app.",
    },
    sections: {
      showcases: { eyebrow: "Voorbeelden", title: "Zie hoe de screenshotgenerator werkt voordat u installeert.", description: "Batch-import, one-click upload naar App Store Connect, lagen en apparaatframes." },
      problem: { eyebrow: "Waarom het bestaat", title: "Eén nieuwe functie uitbrengen mag niet betekenen dat alle screenshots opnieuw moeten.", description: "Screenshot Bro lost de herhalende screenshotroutine op bij elke app-update." },
      workflow: { eyebrow: "Werkwijze", title: "Een kortere weg van ruwe beelden naar App Store-klare bestanden.", description: "Gericht op één taak: verzorgde screenshots maken zonder ontwerpmallen te onderhouden." },
      features: { eyebrow: "Mogelijkheden", title: "Alles wat een App Store screenshottool moet doen.", description: "Volledige focus op snelheid, lay-out en soepele export." },
      screenshots: { eyebrow: "Screenshots", title: "Bekijk het in actie.", description: "App Store-screenshots van Screenshot Bro zelf." },
      testimonials: { eyebrow: "Ontwikkelaars", title: "Wat ontwikkelaars zeggen.", description: "Echte feedback van indie-ontwikkelaars." },
      blog: { eyebrow: "Van de Blog", title: "Gidsen voor betere App Store-screenshots.", description: "Tips en handleidingen voor effectieve screenshots." },
      faq: { eyebrow: "FAQ", title: "Veelgestelde vragen voor het proberen.", description: "Antwoorden op de belangrijkste vragen." },
      appShowcase: { eyebrow: "Gemaakt met Screenshot Bro", title: "In goed gezelschap.", description: "Indie-apps die Screenshot Bro al gebruiken." },
    },
    problem: {
      story: "Gebouwd nadat ik te veel tijd in Figma doorbracht om screenshots opnieuw te maken bij elke tekstwijziging. Ontwerp het systeem één keer en laat de app de rest doen.",
      withoutLabel: "Zonder Screenshot Bro",
      withLabel: "Met Screenshot Bro",
    },
    download: {
      titleLine1: "Klaar om betere",
      titleLine2: "screenshots te publiceren?",
      description: "Download in de App Store en gebruik de complete workflow op Mac of iPad.",
    },
    footer: {
      note: "Gebouwd met SwiftUI. Ontworpen voor app-ontwikkelaars.",
    },
  },
  id: {
    siteTitle: `${SITE_NAME} — Tangkapan Layar App Store & Google Play di Mac`,
    siteDescription:
      "Desain tangkapan layar untuk App Store dan Google Play dalam aplikasi native untuk Mac, iPad, dan iPhone. Bingkai perangkat, lokalisasi, dan unggah langsung ke App Store Connect.",
    primaryCtaLabel: "Unduh di App Store",
    navItems: [
      { label: "Contoh", href: "#showcases" },
      { label: "Fitur", href: "#features" },
      { label: "Alur Kerja", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Tersedia sekarang di App Store untuk Mac, iPad dan iPhone",
      "Alur kerja lengkap: impor, desain, terjemahan otomatis, lokalisasi, dan ekspor",
      "Unggah langsung ke App Store Connect tanpa menyeret file di browser",
    ],
    faqs: [
      {
        question: "Apakah Screenshot Bro gratis?",
        answer:
          "Ya. Paket gratis tidak memiliki batas waktu: 1 proyek hingga 3 baris dan 5 template per baris, dengan akses penuh ke semua bingkai perangkat, bentuk, dan 81 bahasa, ekspor tanpa watermark, unggah ke toko, dan sinkronisasi iCloud. Pro menghapus batasan.",
      },
      {
        question: "Apa bedanya dengan pembuat tangkapan layar berbasis web?",
        answer:
          "Screenshot Bro adalah aplikasi native untuk Mac, iPad, dan iPhone. Proyek, tangkapan layar, dan font Anda tersimpan aman di disk lokal Anda.",
      },
      {
        question: "Apa yang saya perlukan untuk menggunakannya?",
        answer:
          "macOS 15 (Sequoia) atau lebih baru di Mac, iPadOS 18 atau lebih baru di iPad, atau iOS 18 atau lebih baru di iPhone. Tidak memerlukan akun atau internet untuk pengeditan harian.",
      },
      {
        question: "Apakah data saya keluar dari perangkat?",
        answer:
          "Tidak. Proyek dan file Anda tetap tersimpan di perangkat lokal. Terjemahan otomatis berjalan di perangkat melalui Apple Translation.",
      },
      {
        question: "Bagaimana cara kerja lokalisasi?",
        answer:
          "Pilih dari 81 bahasa bawaan. Terjemahan otomatis di perangkat mengisi teks yang hilang. Penyesuaian disimpan per bahasa.",
      },
      {
        question: "Bisakah saya membuat tangkapan layar untuk Google Play juga?",
        answer:
          "Ya. Baris ponsel dan tablet Android dirender bersama baris iPhone, iPad, dan Mac dalam proyek yang sama.",
      },
      {
        question: "Bisakah saya menyeret tangkapan layar dari simulator langsung?",
        answer:
          "Ya. Seret folder tangkapan layar dan Screenshot Bro akan mengarahkannya ke baris yang benar berdasarkan ukuran piksel.",
      },
      {
        question: "Bisakah saya mengunggah langsung ke App Store Connect?",
        answer:
          "Ya. Konfigurasikan kunci API sekali, dan aplikasi akan mengunggah tangkapan layar ke jenis layar dan bahasa yang tepat.",
      },
      {
        question: "Apakah tersinkronisasi antar perangkat?",
        answer:
          "Ya. Sinkronisasi iCloud Drive opsional menjaga proyek tetap tersedia di semua perangkat Mac, iPad dan iPhone Anda.",
      },
      {
        question: "Bisakah agen AI membuat tangkapan layar saya?",
        answer:
          "Ya. Screenshot Bro menyertakan server MCP lokal opsional di Mac untuk integrasi dengan Claude atau Cursor.",
      },
      {
        question: "Di mana saya bisa mendapatkan bantuan dan dukungan?",
        answer:
          "Bergabunglah dengan Discord Screenshot Bro — cara tercepat untuk terhubung dengan pengembang. Email juga selalu terbuka.",
      },
    ],
    ui: {
      skipToContent: "Lewati ke konten",
      blog: "Blog",
      tutorials: "Panduan",
      docs: "Dokumentasi",
      changelog: "Catatan Rilis",
      comparisons: "Semua Perbandingan",
      vsFastlane: "Bandingkan dengan Fastlane",
      community: "Komunitas",
      joinDiscord: "Gabung Discord",
      privacy: "Privasi",
      terms: "Ketentuan",
      contact: "Kontak",
      friends: "Aplikasi Teman",
      followJourney: "Ikuti Perjalanan Saya",
      madeWithLoveAt: "Dibuat dengan ❤️ di",
      language: "Bahasa",
      sectionsLabel: "Bagian",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      seeInAction: "Lihat cara kerjanya",
      tryItNow: "Coba sekarang",
      seeDetails: "Lihat detail",
      browseGuides: "Jelajahi panduan",
      submitApp: "Kirim aplikasi",
      contactDeveloper: "Hubungi pengembang",
      backToTop: "Kembali ke atas",
      previousScreenshot: "Tangkapan layar sebelumnya",
      nextScreenshot: "Tangkapan layar berikutnya",
      goToScreenshot: (index) => `Buka tangkapan layar ${index}`,
      slideCount: (index, total) => `${index} dari ${total}`,
      availabilityNote: "Aplikasi macOS 15+ dan iOS/iPadOS 18+ | Swift & SwiftUI | Tersedia di App Store",
    },
    hero: {
      titleLead: "Buat & Lokalisasikan",
      titleAccent: "App Store",
      titleRest: " Tangkapan Layar dalam Hitungan Menit",
      descriptionLead: "Desain sekali. Lokalisasikan ke 70+ bahasa, hasilkan setiap ukuran perangkat, dan",
      descriptionStrong: "unggah langsung ke App Store Connect",
      descriptionTail: " tanpa mendesain ulang secara manual. Semua dalam satu aplikasi native.",
    },
    sections: {
      showcases: { eyebrow: "Pameran", title: "Lihat cara kerja pembuat tangkapan layar sebelum Anda memasangnya.", description: "Impor massal, unggah satu klik ke App Store Connect, lapisan, dan bingkai perangkat." },
      problem: { eyebrow: "Alasan Dibuat", title: "Merilis satu fitur baru tidak seharusnya berarti mendesain ulang semua tangkapan layar.", description: "Screenshot Bro menghilangkan kerumitan pembaruan tangkapan layar di setiap rilis." },
      workflow: { eyebrow: "Alur Kerja", title: "Jalur lebih cepat dari tangkapan mentah ke aset siap App Store.", description: "Dibuat untuk satu tujuan: tangkapan layar rapi tanpa tumpukan file desain." },
      features: { eyebrow: "Kemampuan", title: "Semua yang dibutuhkan alat tangkapan layar App Store.", description: "Fokus pada kecepatan tata letak, konsistensi, dan kemudahan ekspor." },
      screenshots: { eyebrow: "Tangkapan Layar", title: "Lihat dalam aksi nyata.", description: "Tangkapan layar App Store dari Screenshot Bro sendiri." },
      testimonials: { eyebrow: "Pengembang", title: "Apa kata pengembang.", description: "Ulasan nyata dari pengembang indie." },
      blog: { eyebrow: "Dari Blog", title: "Panduan untuk membuat tangkapan layar App Store yang lebih baik.", description: "Referensi dan panduan untuk merancang tangkapan layar yang meningkatkan konversi." },
      faq: { eyebrow: "FAQ", title: "Pertanyaan yang paling sering diajukan.", description: "Jawaban atas pertanyaan kompatibilitas dan ekspor." },
      appShowcase: { eyebrow: "Dibuat dengan Screenshot Bro", title: "Bersama aplikasi hebat lainnya.", description: "Aplikasi indie yang sudah menggunakan Screenshot Bro." },
    },
    problem: {
      story: "Saya membuatnya setelah terlalu banyak menghabiskan waktu di Figma mendesain ulang tangkapan layar setiap kali teks atau bahasa berubah. Desain sistemnya sekali, biarkan aplikasi menangani sisanya.",
      withoutLabel: "Tanpa Screenshot Bro",
      withLabel: "Dengan Screenshot Bro",
    },
    download: {
      titleLine1: "Siap merilis tangkapan layar",
      titleLine2: "yang lebih baik?",
      description: "Unduh dari App Store dan gunakan alur kerja lengkap di Mac atau iPad.",
    },
    footer: {
      note: "Dibuat dengan SwiftUI. Dirancang untuk pengembang aplikasi App Store.",
    },
  },
  vi: {
    siteTitle: `${SITE_NAME} — Ảnh chụp màn hình App Store & Google Play trên Mac`,
    siteDescription:
      "Thiết kế ảnh chụp màn hình cho App Store và Google Play trong ứng dụng native cho Mac, iPad và iPhone. Khung thiết bị, bản địa hóa và tải trực tiếp lên App Store Connect.",
    primaryCtaLabel: "Tải trên App Store",
    navItems: [
      { label: "Trình diễn", href: "#showcases" },
      { label: "Tính năng", href: "#features" },
      { label: "Quy trình", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Hiện có sẵn trên App Store cho Mac, iPad và iPhone",
      "Quy trình hoàn chỉnh: nhập, thiết kế, tự động dịch, bản địa hóa và xuất file",
      "Tải trực tiếp lên App Store Connect không cần kéo thả trong trình duyệt",
    ],
    faqs: [
      {
        question: "Screenshot Bro có miễn phí không?",
        answer:
          "Có. Gói miễn phí không giới hạn thời gian: 1 dự án với tối đa 3 hàng và 5 mẫu mỗi hàng, toàn quyền truy cập tất cả khung thiết bị, hình dạng và 81 ngôn ngữ, xuất không có watermark, tải lên cửa hàng và đồng bộ iCloud. Bản Pro mở khóa mọi giới hạn.",
      },
      {
        question: "Khác gì so với các công cụ tạo ảnh chụp màn hình trên web?",
        answer:
          "Screenshot Bro là ứng dụng native cho Mac, iPad và iPhone. Dự án, ảnh chụp và phông chữ được lưu trữ an toàn trên ổ đĩa của bạn.",
      },
      {
        question: "Tôi cần gì để sử dụng ứng dụng?",
        answer:
          "macOS 15 (Sequoia) trở lên trên Mac, iPadOS 18 trở lên trên iPad hoặc iOS 18 trở lên trên iPhone. Không cần tài khoản hay kết nối mạng khi chỉnh sửa hàng ngày.",
      },
      {
        question: "Dữ liệu của tôi có rời khỏi thiết bị không?",
        answer:
          "Không. Dự án và hình ảnh của bạn được lưu cục bộ. Tính năng tự động dịch chạy trực tiếp trên thiết bị qua Apple Translation.",
      },
      {
        question: "Bản địa hóa hoạt động như thế nào?",
        answer:
          "Chọn từ 81 ngôn ngữ tích hợp sẵn. Dịch tự động trên thiết bị sẽ điền văn bản còn thiếu. Các thay đổi được lưu riêng cho từng ngôn ngữ.",
      },
      {
        question: "Tôi có thể tạo ảnh chụp cho Google Play không?",
        answer:
          "Có. Các hàng cho điện thoại và máy tính bảng Android được kết xuất song song với iPhone, iPad và Mac trong cùng một dự án.",
      },
      {
        question: "Có thể kéo ảnh trực tiếp từ trình giả lập vào không?",
        answer:
          "Có. Kéo thư mục ảnh vào và Screenshot Bro sẽ tự động phân loại từng ảnh vào đúng hàng theo kích thước pixel.",
      },
      {
        question: "Tôi có thể tải trực tiếp lên App Store Connect không?",
        answer:
          "Có. Thiết lập khóa API một lần và ứng dụng sẽ tự động tải ảnh lên đúng loại màn hình và ngôn ngữ chỉ trong một lượt.",
      },
      {
        question: "Ứng dụng có đồng bộ giữa các thiết bị không?",
        answer:
          "Có. Tính năng đồng bộ iCloud Drive tùy chọn giúp các dự án của bạn luôn sẵn sàng trên mọi máy Mac, iPad và iPhone.",
      },
      {
        question: "AI Agent có thể tạo ảnh chụp màn hình giúp tôi không?",
        answer:
          "Có. Screenshot Bro tích hợp máy chủ MCP cục bộ tùy chọn trên Mac cho phép Claude hoặc Cursor thao tác và xuất ảnh tự động.",
      },
      {
        question: "Tôi có thể tìm sự trợ giúp ở đâu?",
        answer:
          "Tham gia Discord của Screenshot Bro để trao đổi trực tiếp với nhà phát triển. Bạn cũng có thể gửi email bất cứ lúc nào.",
      },
    ],
    ui: {
      skipToContent: "Chuyển đến nội dung",
      blog: "Blog",
      tutorials: "Hướng dẫn",
      docs: "Tài liệu",
      changelog: "Lịch sử cập nhật",
      comparisons: "Tất cả so sánh",
      vsFastlane: "So sánh với Fastlane",
      community: "Cộng đồng",
      joinDiscord: "Tham gia Discord",
      privacy: "Bảo mật",
      terms: "Điều khoản",
      contact: "Liên hệ",
      friends: "Ứng dụng bạn bè",
      followJourney: "Theo dõi hành trình",
      madeWithLoveAt: "Được tạo với ❤️ tại",
      language: "Ngôn ngữ",
      sectionsLabel: "Mục",
      openMenu: "Mở menu",
      closeMenu: "Đóng menu",
      seeInAction: "Xem hoạt động",
      tryItNow: "Thử ngay",
      seeDetails: "Xem chi tiết",
      browseGuides: "Xem tất cả hướng dẫn",
      submitApp: "Gửi ứng dụng",
      contactDeveloper: "Liên hệ nhà phát triển",
      backToTop: "Lên đầu trang",
      previousScreenshot: "Ảnh trước",
      nextScreenshot: "Ảnh sau",
      goToScreenshot: (index) => `Chuyển đến ảnh ${index}`,
      slideCount: (index, total) => `${index} trên ${total}`,
      availabilityNote: "Ứng dụng macOS 15+ và iOS/iPadOS 18+ | Swift & SwiftUI | Có sẵn trên App Store",
    },
    hero: {
      titleLead: "Tạo & Bản địa hóa",
      titleAccent: "App Store",
      titleRest: " Ảnh chụp màn hình trong tích tắc",
      descriptionLead: "Thiết kế một lần. Bản địa hóa sang hơn 70 ngôn ngữ, tạo mọi kích thước thiết bị và",
      descriptionStrong: "tải trực tiếp lên App Store Connect",
      descriptionTail: " mà không cần làm lại từng ảnh thủ công. Tất cả trong một ứng dụng native.",
    },
    sections: {
      showcases: { eyebrow: "Trình diễn", title: "Xem cách công cụ hoạt động trước khi cài đặt.", description: "Nhập hàng loạt, tải lên App Store Connect một cú nhấp, các lớp và khung thiết bị." },
      problem: { eyebrow: "Lý do ra đời", title: "Phát hành một tính năng mới không nên đồng nghĩa với việc làm lại toàn bộ ảnh chụp.", description: "Screenshot Bro giải quyết sự mệt mỏi khi cập nhật ảnh chụp màn hình mỗi bản phát hành." },
      workflow: { eyebrow: "Quy trình", title: "Con đường ngắn nhất từ ảnh thô đến tài nguyên hoàn thiện cho App Store.", description: "Tập trung vào một mục tiêu duy nhất: tạo ảnh chụp màn hình trau chuốt mà không cần quản lý nhiều file thiết kế." },
      features: { eyebrow: "Khả năng", title: "Tất cả những gì bạn cần cho ảnh chụp màn hình App Store.", description: "Tập trung vào tốc độ bố cục, tính nhất quán và xuất file mượt mà." },
      screenshots: { eyebrow: "Ảnh chụp màn hình", title: "Xem trong thực tế.", description: "Ảnh chụp màn hình App Store của chính Screenshot Bro." },
      testimonials: { eyebrow: "Nhà phát triển", title: "Nhà phát triển nói gì.", description: "Phản hồi thực tế từ các nhà phát triển indie." },
      blog: { eyebrow: "Từ Blog", title: "Hướng dẫn tạo ảnh chụp màn hình App Store hiệu quả.", description: "Kinh nghiệm và tài liệu tham khảo để tăng tỷ lệ chuyển đổi." },
      faq: { eyebrow: "FAQ", title: "Các câu hỏi thường gặp trước khi dùng thử.", description: "Giải đáp về tính tương thích và quy trình xuất file." },
      appShowcase: { eyebrow: "Tạo bằng Screenshot Bro", title: "Đồng hành cùng các ứng dụng tuyệt vời.", description: "Các ứng dụng indie đã tin dùng Screenshot Bro." },
    },
    problem: {
      story: "Tôi tạo ra công cụ này sau khi mất quá nhiều thời gian trong Figma để làm lại ảnh chụp mỗi khi thay đổi văn bản hay màu sắc. Thiết kế hệ thống một lần và để ứng dụng lo phần còn lại.",
      withoutLabel: "Không có Screenshot Bro",
      withLabel: "Có Screenshot Bro",
    },
    download: {
      titleLine1: "Sẵn sàng phát hành",
      titleLine2: "ảnh chụp màn hình đẹp hơn?",
      description: "Tải trên App Store và trải nghiệm quy trình làm việc hoàn chỉnh trên Mac hoặc iPad.",
    },
    footer: {
      note: "Được xây dựng bằng SwiftUI. Dành cho các nhà phát triển phát hành ứng dụng trên App Store.",
    },
  },
  th: {
    siteTitle: `${SITE_NAME} — สกรีนช็อต App Store & Google Play บน Mac`,
    siteDescription:
      "ออกแบบสกรีนช็อตสำหรับ App Store และ Google Play ในแอปเนทีฟสำหรับ Mac, iPad และ iPhone กรอบอุปกรณ์ การแปลภาษา และอัปโหลดตรงไปยัง App Store Connect",
    primaryCtaLabel: "ดาวน์โหลดบน App Store",
    navItems: [
      { label: "ตัวอย่าง", href: "#showcases" },
      { label: "ฟีเจอร์", href: "#features" },
      { label: "ขั้นตอน", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "พร้อมใช้งานแล้วบน App Store สำหรับ Mac และ iPad",
      "ครบทุกขั้นตอน: นำเข้า ออกแบบ แปลภาษาอัตโนมัติ และส่งออก",
      "อัปโหลดไปยัง App Store Connect ได้โดยตรงโดยไม่ต้องลากไฟล์ในเบราว์เซอร์",
    ],
    faqs: [
      {
        question: "Screenshot Bro ใช้งานฟรีหรือไม่?",
        answer:
          "ใช่ แผนฟรีไม่มีวันหมดอายุ: 1 โปรเจกต์ สูงสุด 3 แถว และ 5 เทมเพลตต่อแถว พร้อมเข้าถึงกรอบอุปกรณ์ รูปทรง และ 81 ภาษาได้อย่างเต็มที่ ส่งออกได้โดยไม่มีลายน้ำ และซิงค์ iCloud ได้ แผน Pro จะปลดล็อกขีดจำกัดทั้งหมด",
      },
      {
        question: "แตกต่างจากเครื่องมือสร้างสกรีนช็อตบนเว็บอย่างไร?",
        answer:
          "Screenshot Bro เป็นแอปเนทีฟสำหรับ Mac, iPad และ iPhone ข้อมูลโปรเจกต์ ภาพ และฟอนต์ของคุณจะถูกเก็บไว้ในเครื่องของคุณอย่างปลอดภัย",
      },
      {
        question: "ต้องใช้อุปกรณ์ใดบ้าง?",
        answer:
          "macOS 15 (Sequoia) ขึ้นไปบน Mac, iPadOS 18 ขึ้นไปบน iPad หรือ iOS 18 ขึ้นไปบน iPhone โดยไม่ต้องเชื่อมต่ออินเทอร์เน็ตสำหรับการแก้ไขทั่วไป",
      },
      {
        question: "ข้อมูลของฉันจะถูกส่งออกจากเครื่องหรือไม่?",
        answer:
          "ไม่ ข้อมูลของคุณจะอยู่บนอุปกรณ์ของคุณ การแปลภาษาอัตโนมัติทำงานบนอุปกรณ์ผ่าน Apple Translation",
      },
      {
        question: "การแปลภาษาทำงานอย่างไร?",
        answer:
          "เลือกจาก 81 ภาษาที่กำหนดไว้ล่วงหน้า ระบบแปลภาษาในตัวจะเติมข้อความที่ขาดหายไป และบันทึกการปรับแต่งแยกตามภาษา",
      },
      {
        question: "สามารถสร้างสกรีนช็อตสำหรับ Google Play ได้ด้วยหรือไม่?",
        answer:
          "ได้ แถวสำหรับโทรศัพท์และแท็บเล็ต Android จะถูกสร้างควบคู่ไปกับ iPhone, iPad และ Mac ในโปรเจกต์เดียวกัน",
      },
      {
        question: "สามารถลากสกรีนช็อตจากเครื่องจำลองมาใส่ได้โดยตรงหรือไม่?",
        answer:
          "ได้ ลากโฟลเดอร์สกรีนช็อตเข้ามา แล้ว Screenshot Bro จะจัดสรรแต่ละภาพไปยังแถวที่ถูกต้องตามขนาดพิกเซลโดยอัตโนมัติ",
      },
      {
        question: "สามารถอัปโหลดไปยัง App Store Connect ได้โดยตรงหรือไม่?",
        answer:
          "ได้ ตั้งค่าคีย์ API เพียงครั้งเดียว แล้วแอปจะอัปโหลดสกรีนช็อตไปยังทุกขนาดหน้าจอและภาษาที่ถูกต้องในขั้นตอนเดียว",
      },
      {
        question: "มีการซิงค์ระหว่างอุปกรณ์หรือไม่?",
        answer:
          "มี การซิงค์ผ่าน iCloud Drive ช่วยให้โปรเจกต์ของคุณพร้อมใช้งานบน Mac และ iPad ทุกเครื่องของคุณ",
      },
      {
        question: "ให้ AI Agent ช่วยสร้างสกรีนช็อตได้หรือไม่?",
        answer:
          "ได้ Screenshot Bro มีเซิร์ฟเวอร์ MCP ภายในเครื่องบน Mac เพื่อให้ผู้ช่วยเช่น Claude หรือ Cursor ทำงานอัตโนมัติได้",
      },
      {
        question: "สามารถขอความช่วยเหลือได้ที่ไหน?",
        answer:
          "เข้าร่วม Discord ของ Screenshot Bro เพื่อพูดคุยกับผู้พัฒนาได้โดยตรง หรือส่งอีเมลถึงเราได้ตลอดเวลา",
      },
    ],
    ui: {
      skipToContent: "ข้ามไปยังเนื้อหา",
      blog: "บล็อก",
      tutorials: "บทเรียน",
      docs: "เอกสาร",
      changelog: "บันทึกการเปลี่ยนแปลง",
      comparisons: "การเปรียบเทียบทั้งหมด",
      vsFastlane: "เปรียบเทียบกับ Fastlane",
      community: "ชุมชน",
      joinDiscord: "เข้าร่วม Discord",
      privacy: "ความเป็นส่วนตัว",
      terms: "ข้อกำหนด",
      contact: "ติดต่อ",
      friends: "แอปเพื่อนๆ",
      followJourney: "ติดตามการพัฒนา",
      madeWithLoveAt: "สร้างด้วย ❤️ ที่",
      language: "ภาษา",
      sectionsLabel: "ส่วนต่างๆ",
      openMenu: "เปิดเมนู",
      closeMenu: "ปิดเมนู",
      seeInAction: "ดูการทำงาน",
      tryItNow: "ลองใช้เลย",
      seeDetails: "ดูรายละเอียด",
      browseGuides: "ดูคู่มือทั้งหมด",
      submitApp: "ส่งแอปของคุณ",
      contactDeveloper: "ติดต่อผู้พัฒนา",
      backToTop: "กลับขึ้นด้านบน",
      previousScreenshot: "ภาพก่อนหน้า",
      nextScreenshot: "ภาพถัดไป",
      goToScreenshot: (index) => `ไปยังภาพที่ ${index}`,
      slideCount: (index, total) => `${index} จาก ${total}`,
      availabilityNote: "แอป macOS 15+ และ iOS/iPadOS 18+ | Swift & SwiftUI | มีใน App Store",
    },
    hero: {
      titleLead: "สร้างและแปลภาษา",
      titleAccent: "App Store",
      titleRest: " สกรีนช็อตได้ในไม่กี่นาที",
      descriptionLead: "ออกแบบครั้งเดียว แปลภาษาได้มากกว่า 70 ภาษา สร้างได้ทุกขนาดอุปกรณ์ และ",
      descriptionStrong: "อัปโหลดไปยัง App Store Connect โดยตรง",
      descriptionTail: " โดยไม่ต้องทำใหม่ทีละภาพ ทั้งหมดในแอปเนทีฟเดียว",
    },
    sections: {
      showcases: { eyebrow: "ตัวอย่าง", title: "ดูการทำงานของเครื่องมือก่อนติดตั้ง", description: "นำเข้าเป็นชุด อัปโหลด App Store Connect ในคลิกเดียว เลเยอร์ และกรอบอุปกรณ์" },
      problem: { eyebrow: "เหตุผลที่สร้าง", title: "การปล่อยฟีเจอร์ใหม่ไม่ควรหมายถึงการต้องทำสกรีนช็อตใหม่ทั้งหมด", description: "Screenshot Bro ช่วยแก้ปัญหาความยุ่งยากในการอัปเดตสกรีนช็อตทุกครั้งที่ปล่อยแอป" },
      workflow: { eyebrow: "ขั้นตอน", title: "เส้นทางที่เร็วที่สุดจากภาพต้นฉบับสู่ไฟล์พร้อมส่งสโตร์", description: "เน้นงานเดียว: สร้างสกรีนช็อตที่สวยงามโดยไม่ต้องดูแลไฟล์ดีไซน์จำนวนมาก" },
      features: { eyebrow: "ความสามารถ", title: "ทุกสิ่งที่เครื่องมือสกรีนช็อต App Store ควรมี", description: "มุ่งเน้นที่ความเร็วในการจัดวาง ความสม่ำเสมอ และการส่งออกที่ง่ายดาย" },
      screenshots: { eyebrow: "สกรีนช็อต", title: "ดูภาพการทำงานจริง", description: "สกรีนช็อต App Store ของตัวแอป Screenshot Bro เอง" },
      testimonials: { eyebrow: "ผู้พัฒนา", title: "เสียงตอบรับจากนักพัฒนา", description: "ความคิดเห็นจริงจากนักพัฒนาอิสระ" },
      blog: { eyebrow: "จากบล็อก", title: "คู่มือเพื่อสกรีนช็อต App Store ที่ดีกว่า", description: "แนวทางและข้อแนะนำเพื่อเพิ่มยอดดาวน์โหลด" },
      faq: { eyebrow: "FAQ", title: "คำถามที่พบบ่อยก่อนลองใช้", description: "คำตอบเกี่ยวกับความเข้ากันได้และการส่งออกไฟล์" },
      appShowcase: { eyebrow: "สร้างด้วย Screenshot Bro", title: "ร่วมเป็นส่วนหนึ่งกับแอปชั้นนำ", description: "แอปอินดี้ที่ใช้ Screenshot Bro ในการทำสกรีนช็อต" },
    },
    problem: {
      story: "ผมสร้างแอปนี้หลังจากเสียเวลาใน Figma ไปมากกับการแก้สกรีนช็อตทุกครั้งที่เปลี่ยนข้อความหรือภาษา ออกแบบระบบครั้งเดียวแล้วปล่อยให้แอปจัดการส่วนที่ซ้ำซ้อน",
      withoutLabel: "เมื่อไม่มี Screenshot Bro",
      withLabel: "เมื่อใช้ Screenshot Bro",
    },
    download: {
      titleLine1: "พร้อมปล่อยสกรีนช็อต",
      titleLine2: "ที่ดูดียิ่งขึ้นหรือยัง?",
      description: "ดาวน์โหลดจาก App Store และใช้งานทุกฟังก์ชันบน Mac หรือ iPad ได้ทันที",
    },
    footer: {
      note: "สร้างด้วย SwiftUI ออกแบบมาเพื่อนักพัฒนาที่อัปเดตแอปบน App Store สม่ำเสมอ",
    },
  },
  sv: {
    siteTitle: `${SITE_NAME} — App Store & Google Play-skärmdumpar på Mac`,
    siteDescription:
      "Designa skärmdumpar för App Store och Google Play i en nativ app för Mac, iPad och iPhone. Enhetsramar, lokalisering och direkt uppladdning till App Store Connect.",
    primaryCtaLabel: "Hämta i App Store",
    navItems: [
      { label: "Exempel", href: "#showcases" },
      { label: "Funktioner", href: "#features" },
      { label: "Arbetsflöde", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Tillgänglig nu i App Store för Mac, iPad och iPhone",
      "Komplett arbetsflöde: import, design, automatisk översättning, lokalisering och export",
      "Direkt uppladdning till App Store Connect utan att dra filer i webbläsaren",
    ],
    faqs: [
      {
        question: "Är Screenshot Bro gratis?",
        answer:
          "Ja. Gratisplanen löper aldrig ut: 1 projekt med upp till 3 rader och 5 mallar per rad, med full åtkomst till alla enhetsramar, former och 81 språk, export utan vattenstämpel, butiksuppladdning och iCloud-synkronisering. Pro tar bort alla begränsningar.",
      },
      {
        question: "Hur skiljer det sig från webbaserade verktyg?",
        answer:
          "Screenshot Bro är en nativ app för Mac, iPad och iPhone. Dina projekt, skärmdumpar och typsnitt sparas lokalt på din hårddisk.",
      },
      {
        question: "Vad krävs för att köra appen?",
        answer:
          "macOS 15 (Sequoia) eller senare på Mac, iPadOS 18 eller senare på iPad, eller iOS 18 eller senare på iPhone. Inget konto eller internet krävs för daglig redigering.",
      },
      {
        question: "Lämnar mina data min enhet?",
        answer:
          "Nej. Dina filer förblir lokalt på din enhet. Automatisk översättning körs direkt på enheten via Apple Translation.",
      },
      {
        question: "Hur fungerar lokalisering?",
        answer:
          "Välj bland 81 förkonfigurerade språk. Maskinöversättning fyller i saknad text, och ändringar sparas separat per språk.",
      },
      {
        question: "Kan jag skapa skärmdumpar för Google Play också?",
        answer:
          "Ja. Rader för Android renderas tillsammans med iPhone, iPad och Mac i samma projekt med exakta butiksdimensioner.",
      },
      {
        question: "Kan jag dra skärmdumpar direkt från simulatorer?",
        answer:
          "Ja. Dra in en mapp med skärmdumpar så placeras varje bild automatiskt i rätt rad baserat på upplösningen.",
      },
      {
        question: "Kan jag ladda upp direkt till App Store Connect?",
        answer:
          "Ja. Konfigurera din API-nyckel en gång så laddar appen upp skärmdumpar till rätt skärmstorlekar och språk i ett enda svep.",
      },
      {
        question: "Synkroniseras det mellan enheter?",
        answer:
          "Ja. Valfri iCloud Drive-synkronisering håller dina projekt tillgängliga på alla dina Mac-, iPad- och iPhone-enheter.",
      },
      {
        question: "Kan en AI-agent skapa mina skärmdumpar?",
        answer:
          "Ja. Screenshot Bro innehåller en valfri lokal MCP-server på Mac för automatisering med verktyg som Claude eller Cursor.",
      },
      {
        question: "Var kan jag få hjälp och support?",
        answer:
          "Gå med i vår Discord — det snabbaste sättet att nå utvecklaren. E-post är också alltid välkommet.",
      },
    ],
    ui: {
      skipToContent: "Hoppa till innehåll",
      blog: "Blogg",
      tutorials: "Guider",
      docs: "Dokumentation",
      changelog: "Ändringslogg",
      comparisons: "Alla jämförelser",
      vsFastlane: "Jämför med Fastlane",
      community: "Gemenskap",
      joinDiscord: "Gå med i Discord",
      privacy: "Integritet",
      terms: "Villkor",
      contact: "Kontakt",
      friends: "Vänners appar",
      followJourney: "Följ min resa",
      madeWithLoveAt: "Skapad med ❤️ i",
      language: "Språk",
      sectionsLabel: "Sektioner",
      openMenu: "Öppna meny",
      closeMenu: "Stäng meny",
      seeInAction: "Se i praktiken",
      tryItNow: "Prova nu",
      seeDetails: "Se detaljer",
      browseGuides: "Bläddra bland guider",
      submitApp: "Skicka in app",
      contactDeveloper: "Kontakta utvecklaren",
      backToTop: "Till toppen",
      previousScreenshot: "Föregående skärmdump",
      nextScreenshot: "Nästa skärmdump",
      goToScreenshot: (index) => `Gå till skärmdump ${index}`,
      slideCount: (index, total) => `${index} av ${total}`,
      availabilityNote: "macOS 15+ och iOS/iPadOS 18+ app | Swift & SwiftUI | Tillgänglig i App Store",
    },
    hero: {
      titleLead: "Skapa & lokalisera",
      titleAccent: "App Store",
      titleRest: " skärmdumpar på några minuter",
      descriptionLead: "Designa en gång. Lokalisera till 70+ språk, generera alla enhetsstorlekar och",
      descriptionStrong: "ladda upp direkt till App Store Connect",
      descriptionTail: " utan att bygga om skärmdumpar för hand. Allt i en nativ app.",
    },
    sections: {
      showcases: { eyebrow: "Exempel", title: "Se hur generatorn fungerar innan du installerar.", description: "Batchimport, uppladdning till App Store Connect med ett klick, lager och enhetsramar." },
      problem: { eyebrow: "Varför den finns", title: "Att släppa en ny funktion ska inte innebära att göra om alla skärmdumpar.", description: "Screenshot Bro eliminerar det repetitiva arbetet vid varje appuppdatering." },
      workflow: { eyebrow: "Arbetsflöde", title: "En kortare väg från råa skärmdumpar till färdiga butikstillgångar.", description: "Fokuserad på en uppgift: skapa snygga skärmdumpar utan att underhålla en hög med designfiler." },
      features: { eyebrow: "Kapacitet", title: "Allt ett skärmdumpsverktyg för App Store behöver göra.", description: "Fokus på snabb layout, konsekvens och smidig export." },
      screenshots: { eyebrow: "Skärmdumpar", title: "Se den i aktion.", description: "App Store-skärmdumpar från Screenshot Bro själv." },
      testimonials: { eyebrow: "Utvecklare", title: "Vad utvecklare säger.", description: "Verklig feedback från oberoende utvecklare." },
      blog: { eyebrow: "Från bloggen", title: "Guider för att skapa bättre App Store-skärmdumpar.", description: "Tips och referenser för att öka konverteringen." },
      faq: { eyebrow: "FAQ", title: "Vanliga frågor innan du testar.", description: "Svar om kompatibilitet och export." },
      appShowcase: { eyebrow: "Skapad med Screenshot Bro", title: "I gott sällskap.", description: "Indieappar som redan använder Screenshot Bro." },
    },
    problem: {
      story: "Jag byggde appen efter att ha lagt för mycket tid i Figma på att göra om skärmdumpar varje gång text eller färger ändrades. Bygg systemet en gång och låt appen göra resten.",
      withoutLabel: "Utan Screenshot Bro",
      withLabel: "Med Screenshot Bro",
    },
    download: {
      titleLine1: "Redo att publicera",
      titleLine2: "bättre skärmdumpar?",
      description: "Hämta i App Store och upplev hela arbetsflödet på Mac eller iPad.",
    },
    footer: {
      note: "Byggd med SwiftUI. Designad för utvecklare som släpper App Store-uppdateringar.",
    },
  },
  da: {
    siteTitle: `${SITE_NAME} — App Store og Google Play skærmbilleder på Mac`,
    siteDescription: "Design skærmbilleder til App Store og Google Play i en nativ app til Mac, iPad og iPhone. Enhedsrammer, lokalisering og direkte upload til App Store Connect.",
    primaryCtaLabel: "Hent i App Store",
    navItems: [
      { label: "Eksempler", href: "#showcases" },
      { label: "Funktioner", href: "#features" },
      { label: "Arbejdsgang", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Tilgængelig nu i App Store til Mac, iPad og iPhone",
      "Engangskøb eller gratis plan — intet abonnement påkrævet",
      "Native macOS-, iOS- og iPadOS-app med iCloud-synkronisering",
      "Eksportér forudindstillinger for alle enhedsstørrelser med ét klik",
    ],
    faqs: [
      {
        question: "Hvad gør Screenshot Bro anderledes end webbaserede generatorer?",
        answer: "Screenshot Bro er en 100 % nativ macOS-, iOS- og iPadOS-app. Dine data forbliver på din enhed, der er ingen månedlige abonnementer, og du kan arbejde offline. Den er optimeret til hastighed og understøtter tastaturgenveje, batch-import og direkte upload til App Store Connect.",
      },
      {
        question: "Kan jeg lokalisere skærmbilleder til flere sprog?",
        answer: "Ja! Screenshot Bro er bygget med lokalisering i højsædet. Du kan tilføje flere sprog, overstyre tekst og billeder pr. sprog og eksportere alle lokaliserede varianter på én gang.",
      },
      {
        question: "Hvilke enhedsstørrelser understøttes?",
        answer: "Alle standardstørrelser til App Store og Google Play, herunder iPhones med Dynamic Island, iPads, MacBooks, Apple Watch og Android-telefoner.",
      },
      {
        question: "Er der et abonnement?",
        answer: "Nej. Screenshot Bro tilbyder en generøs gratis plan og et simpelt engangskøb for livstidsadgang til Pro-funktioner.",
      },
      {
        question: "Kan jeg uploade direkte til App Store Connect?",
        answer: "Ja. Med App Store Connect API-nøgler kan du uploade dine eksporterede skærmbilleder direkte til dine app-versioner uden at åbne browseren.",
      },
    ],
    ui: {
      skipToContent: "Spring til indhold",
      blog: "Blog",
      tutorials: "Vejledninger",
      docs: "Dokumentation",
      changelog: "Ændringslog",
      comparisons: "Alle sammenligninger",
      vsFastlane: "Sammenlign med Fastlane",
      community: "Fællesskab",
      discord: "Discord",
      joinDiscord: "Deltag i Discord",
      privacy: "Fortrolighed",
      terms: "Vilkår",
      contact: "Kontakt",
      friends: "Venners apps",
      followJourney: "Følg min rejse",
      madeWithLoveAt: "Lavet med ❤️ i",
      language: "Sprog",
      sectionsLabel: "Sektioner",
      openMenu: "Åbn menu",
      closeMenu: "Luk menu",
      seeInAction: "Se i praksis",
      tryItNow: "Prøv nu",
      seeDetails: "Se detaljer",
      browseGuides: "Gennemse guides",
      submitApp: "Indsend app",
      contactDeveloper: "Kontakt udvikleren",
      backToTop: "Til toppen",
      previousScreenshot: "Forrige skærmbillede",
      nextScreenshot: "Næste skærmbillede",
      goToScreenshot: (index) => `Gå til skærmbillede ${index}`,
      slideCount: (index, total) => `${index} af ${total}`,
      availabilityNote: "macOS 15+ og iOS/iPadOS 18+ app | Swift & SwiftUI | Tilgængelig i App Store",
    },
    hero: {
      titleLead: "Opret & lokaliser",
      titleAccent: "App Store",
      titleRest: " skærmbilleder på få minutter",
      descriptionLead: "Design én gang. Lokaliser til 70+ sprog, generer alle enhedsstørrelser og",
      descriptionStrong: "upload direkte til App Store Connect",
      descriptionTail: " uden at genopbygge skærmbilleder manuelt. Alt i en nativ app.",
    },
    sections: {
      showcases: { eyebrow: "Eksempler", title: "Se hvordan generatoren fungerer, før du installerer.", description: "Batch-import, upload til App Store Connect med ét klik, lag og enhedsrammer." },
      problem: { eyebrow: "Hvorfor den findes", title: "Udgivelse af en ny funktion bør ikke betyde genopbygning af alle skærmbilleder.", description: "Screenshot Bro fjerner det gentagne arbejde ved hver appopdatering." },
      workflow: { eyebrow: "Arbejdsgang", title: "En kortere vej fra rå skærmbilleder til færdige butiksaktiver.", description: "Fokuseret på én opgave: skab flotte skærmbilleder uden at vedligeholde en masse designfiler." },
      features: { eyebrow: "Funktioner", title: "Alt hvad et skærmbilledeværktøj til App Store skal kunne.", description: "Fokus på hurtigt layout, ensartethed og problemfri eksport." },
      screenshots: { eyebrow: "Skærmbilleder", title: "Se den i aktion.", description: "App Store-skærmbilleder fra Screenshot Bro selv." },
      testimonials: { eyebrow: "Udviklere", title: "Hvad udviklere siger.", description: "Ægte feedback fra uafhængige udviklere." },
      blog: { eyebrow: "Fra bloggen", title: "Guides til bedre App Store-skærmbilleder.", description: "Tips og referencer til at forbedre konvertering." },
      faq: { eyebrow: "FAQ", title: "Ofte stillede spørgsmål før du prøver.", description: "Svar om kompatibilitet og eksport." }      ,
      appShowcase: { eyebrow: "Lavet med Screenshot Bro", title: "I godt selskab.", description: "Indie-apps, der allerede bruger Screenshot Bro." },
    },
    problem: {
      story: "Jeg byggede appen efter at have brugt for meget tid i Figma på at lave skærmbilleder om, hver gang tekst eller farver ændrede sig. Byg systemet én gang og lad appen klare resten.",
      withoutLabel: "Uden Screenshot Bro",
      withLabel: "Med Screenshot Bro",
    },
    download: {
      titleLine1: "Klar til at udgive",
      titleLine2: "bedre skærmbilleder?",
      description: "Hent i App Store og oplev hele arbejdsgangen på Mac eller iPad.",
    },
    footer: {
      note: "Bygget med SwiftUI. Designet til udviklere, der udgiver App Store-opdateringer.",
    },
  },
  fi: {
    siteTitle: `${SITE_NAME} — App Store- ja Google Play -kuvakaappaukset Macilla`,
    siteDescription: "Suunnittele kuvakaappauksia App Storelle ja Google Playlle natiivilla Mac-, iPad- ja iPhone-sovelluksella. Laitekehykset, lokalisointi ja suora lataus App Store Connectiin.",
    primaryCtaLabel: "Hanki App Storesta",
    navItems: [
      { label: "Esimerkit", href: "#showcases" },
      { label: "Ominaisuudet", href: "#features" },
      { label: "Työnkulku", href: "#workflow" },
      { label: "UKK", href: "#faq" },
    ],
    benefits: [
      "Saatavilla nyt App Storessa Macille, iPadille ja iPhonelle",
      "Kertaostos tai ilmainen versio — ei tilauspakkoa",
      "Natiivi macOS-, iOS- ja iPadOS-sovellus iCloud-synkronoinnilla",
      "Vie kaikkien laitteiden kokomallit yhdellä napsautuksella",
    ],
    faqs: [
      {
        question: "Mikä erottaa Screenshot Bron verkkopohjaisista generaattoreista?",
        answer: "Screenshot Bro on 100 % natiivi macOS-, iOS- ja iPadOS-sovellus. Tietosi pysyvät laitteellasi, kuukausimaksuja ei ole ja voit työskennellä offline-tilassa. Se on optimoitu nopeuteen ja tukee pikanäppäimiä, erätuontia ja suoraa latausta App Store Connectiin.",
      },
      {
        question: "Voinko lokalisoida kuvakaappaukset useille kielille?",
        answer: "Kyllä! Screenshot Bro on rakennettu lokalisointi edellä. Voit lisätä useita kieliä, korvata tekstit ja kuvat kielikohtaisesti ja viedä kaikki lokalisoidut versiot kerralla.",
      },
      {
        question: "Mitä laitekokoja tuetaan?",
        answer: "Kaikkia virallisia App Store- ja Google Play -kokoja, mukaan lukien Dynamic Islandilla varustetut iPhonet, iPadit, MacBookit, Apple Watchit ja Android-puhelimet.",
      },
      {
        question: "Onko palvelussa kuukausitilausta?",
        answer: "Ei. Screenshot Bro tarjoaa kattavan ilmaisen suunnitelman sekä edullisen kertaostoksen Pro-ominaisuuksien elinikäiseen käyttöön.",
      },
      {
        question: "Voinko ladata kuvat suoraan App Store Connectiin?",
        answer: "Kyllä. App Store Connect -rajapinta-avaimien avulla voit ladata viedyt kuvakaappaukset suoraan sovellusversioihisi avaamatta selainta.",
      },
    ],
    ui: {
      skipToContent: "Siirry sisältöön",
      blog: "Blogi",
      tutorials: "Oppaat",
      docs: "Dokumentaatio",
      changelog: "Muutosloki",
      comparisons: "Kaikki vertailut",
      vsFastlane: "Vertaa Fastlaneen",
      community: "Yhteisö",
      discord: "Discord",
      joinDiscord: "Liity Discordiin",
      privacy: "Tietosuoja",
      terms: "Käyttöehdot",
      contact: "Yhteystiedot",
      friends: "Ystävien sovellukset",
      followJourney: "Seuraa matkaani",
      madeWithLoveAt: "Tehty ❤️:llä paikassa",
      language: "Kieli",
      sectionsLabel: "Osiot",
      openMenu: "Avaa valikko",
      closeMenu: "Sulje valikko",
      seeInAction: "Katso toiminnassa",
      tryItNow: "Kokeile nyt",
      seeDetails: "Katso tiedot",
      browseGuides: "Selaa oppaita",
      submitApp: "Lähetä sovellus",
      contactDeveloper: "Ota yhteyttä kehittäjään",
      backToTop: "Takaisin alkuun",
      previousScreenshot: "Edellinen kuvakaappaus",
      nextScreenshot: "Seuraava kuvakaappaus",
      goToScreenshot: (index) => `Siirry kuvakaappaukseen ${index}`,
      slideCount: (index, total) => `${index} / ${total}`,
      availabilityNote: "macOS 15+ ja iOS/iPadOS 18+ sovellus | Swift & SwiftUI | Saatavilla App Storessa",
    },
    hero: {
      titleLead: "Luo & lokalisoi",
      titleAccent: "App Store",
      titleRest: " -kuvakaappaukset minuuteissa",
      descriptionLead: "Suunnittele kerran. Lokalisoi yli 70 kielelle, luo kaikki laitekoot ja",
      descriptionStrong: "lataa suoraan App Store Connectiin",
      descriptionTail: " rakentamatta kuvakaappauksia uudelleen käsin. Kaikki yhdessä natiivisovelluksessa.",
    },
    sections: {
      showcases: { eyebrow: "Esimerkit", title: "Katso miten generaattori toimii ennen asennusta.", description: "Erätuonti, lataus App Store Connectiin yhdellä napsautuksella, tasot ja laitekehykset." },
      problem: { eyebrow: "Miksi se on luotu", title: "Uuden ominaisuuden julkaisun ei pitäisi tarkoittaa kaikkien kuvakaappausten tekemistä alusta.", description: "Screenshot Bro poistaa toistuvan työn jokaisesta sovelluspäivityksestä." },
      workflow: { eyebrow: "Työnkulku", title: "Lyhyempi tie raakakuvista valmiisiin sovelluskaupan materiaaleihin.", description: "Keskittynyt yhteen tehtävään: luo kauniita kuvakaappauksia ilman raskasta suunnittelutiedostojen ylläpitoa." },
      features: { eyebrow: "Ominaisuudet", title: "Kaikki mitä App Store -kuvakaappaustyökalulta tarvitaan.", description: "Painopisteenä nopea asettelu, yhtenäisyys ja vaivaton vienti." },
      screenshots: { eyebrow: "Kuvakaappaukset", title: "Katso se toiminnassa.", description: "Screenshot Bron omat App Store -kuvakaappaukset." },
      testimonials: { eyebrow: "Kehittäjät", title: "Mitä kehittäjät sanovat.", description: "Aitoa palautetta itsenäisiltä kehittäjiltä." }      ,
      blog: { eyebrow: "Blogista", title: "Oppaat parempien App Store -kuvakaappausten tekemiseen.", description: "Vinkkejä ja referenssejä konversion parantamiseen." },
      faq: { eyebrow: "UKK", title: "Usein kysytyt kysymykset ennen kokeilua.", description: "Vastauksia yhteensopivuudesta ja viennistä." },
      appShowcase: { eyebrow: "Luotu Screenshot Brolla", title: "Hyvässä seurassa.", description: "Indie-sovellukset, jotka käyttävät jo Screenshot Brota." },
    },
    problem: {
      story: "Rakensin sovelluksen käytettyäni liikaa aikaa Figmassa kuvakaappausten tekemiseen alusta aina, kun teksti tai värit muuttuivat. Rakenna järjestelmä kerran ja anna sovelluksen hoitaa loput.",
      withoutLabel: "Ilman Screenshot Brota",
      withLabel: "Screenshot Bron kanssa",
    },
    download: {
      titleLine1: "Valmiina julkaisemaan",
      titleLine2: "parempia kuvakaappauksia?",
      description: "Lataa App Storesta ja koe koko työnkulku Macilla tai iPadilla.",
    },
    footer: {
      note: "Rakennettu SwiftUI:lla. Suunniteltu kehittäjille, jotka julkaisevat App Store -päivityksiä.",
    },
  },
  no: {
    siteTitle: `${SITE_NAME} — App Store- og Google Play-skjermbilder på Mac`,
    siteDescription: "Design skjermbilder for App Store og Google Play i en nativ app for Mac, iPad og iPhone. Enhetsrammer, lokalisering og direkte opplasting til App Store Connect.",
    primaryCtaLabel: "Hent i App Store",
    navItems: [
      { label: "Eksempler", href: "#showcases" },
      { label: "Funksjoner", href: "#features" },
      { label: "Arbeidsflyt", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Tilgjengelig nå i App Store for Mac, iPad og iPhone",
      "Engangskjøp eller gratisplan — intet abonnement kreves",
      "Nativ macOS-, iOS- og iPadOS-app med iCloud-synkronisering",
      "Eksporter forhåndsinnstillinger for alle enhetsstørrelser med ett klikk",
    ],
    faqs: [
      {
        question: "Hva gjør Screenshot Bro annerledes enn nettbaserte generatorer?",
        answer: "Screenshot Bro er en 100 % nativ macOS-, iOS- og iPadOS-app. Dine data forblir på enheten din, det er ingen månedlige abonnementer, og du kan jobbe offline. Den er optimalisert for hastighet og støtter hurtigtaster, batch-import og direkte opplasting til App Store Connect.",
      },
      {
        question: "Kan jeg lokalisere skjermbilder til flere språk?",
        answer: "Ja! Screenshot Bro er bygget med lokalisering i fokus. Du kan legge til flere språk, overstyre tekst og bilder per språk og eksportere alle lokaliserte varianter samtidig.",
      },
      {
        question: "Hvilke enhetsstørrelser støttes?",
        answer: "Alle offisielle størrelser for App Store og Google Play, inkludert iPhoner med Dynamic Island, iPads, MacBooks, Apple Watch og Android-telefoner.",
      },
      {
        question: "Er det et abonnement?",
        answer: "Nei. Screenshot Bro tilbyr en raus gratisplan og et enkelt engangskjøp for livstidstilgang til Pro-funksjoner.",
      },
      {
        question: "Kan jeg laste opp direkte til App Store Connect?",
        answer: "Ja. Med App Store Connect API-nøkler kan du laste opp eksporterte skjermbilder direkte til app-versjonene dine uten å åpne nettleseren.",
      },
    ],
    ui: {
      skipToContent: "Hopp til innhold",
      blog: "Blogg",
      tutorials: "Veiledninger",
      docs: "Dokumentasjon",
      changelog: "Endringslogg",
      comparisons: "Alle sammenligninger",
      vsFastlane: "Sammenlign med Fastlane",
      community: "Fellesskap",
      discord: "Discord",
      joinDiscord: "Bli med i Discord",
      privacy: "Personvern",
      terms: "Vilkår",
      contact: "Kontakt",
      friends: "Venners apper",
      followJourney: "Følg min reise",
      madeWithLoveAt: "Laget med ❤️ i",
      language: "Språk",
      sectionsLabel: "Seksjoner",
      openMenu: "Åpne meny",
      closeMenu: "Lukk meny",
      seeInAction: "Se i praksis",
      tryItNow: "Prøv nå",
      seeDetails: "Se detaljer",
      browseGuides: "Bla gjennom guider",
      submitApp: "Send inn app",
      contactDeveloper: "Kontakt utvikleren",
      backToTop: "Til toppen",
      previousScreenshot: "Forrige skjermbilde",
      nextScreenshot: "Neste skjermbilde",
      goToScreenshot: (index) => `Gå til skjermbilde ${index}`,
      slideCount: (index, total) => `${index} av ${total}`,
      availabilityNote: "macOS 15+ og iOS/iPadOS 18+ app | Swift & SwiftUI | Tilgjengelig i App Store",
    },
    hero: {
      titleLead: "Opprett & lokaliser",
      titleAccent: "App Store",
      titleRest: " skjermbilder på minutter",
      descriptionLead: "Design én gang. Lokaliser til 70+ språk, generer alle enhetsstørrelser og",
      descriptionStrong: "last opp direkte til App Store Connect",
      descriptionTail: " uten å bygge om skjermbilder manuelt. Alt i en nativ app.",
    },
    sections: {
      showcases: { eyebrow: "Eksempler", title: "Se hvordan generatoren fungerer før du installerer.", description: "Batch-import, opplasting til App Store Connect med ett klikk, lag og enhetsrammer." },
      problem: { eyebrow: "Hvorfor den finnes", title: "Å lansere en ny funksjon bør ikke bety å bygge om alle skjermbilder.", description: "Screenshot Bro fjerner det repetitive arbeidet ved hver appoppdatering." },
      workflow: { eyebrow: "Arbeidsflyt", title: "En kortere vei fra rå skjermbilder til ferdige butikkressurser.", description: "Fokusert på én oppgave: lag flotte skjermbilder uten å vedlikeholde en haug med designfiler." },
      features: { eyebrow: "Funksjoner", title: "Alt et skjermbildeverktøy for App Store trenger å gjøre.", description: "Fokus på raskt oppsett, konsistens og sømløs eksport." },
      screenshots: { eyebrow: "Skjermbilder", title: "Se den i aksjon.", description: "App Store-skjermbilder fra Screenshot Bro selv." },
      testimonials: { eyebrow: "Utviklere", title: "Hva utviklere sier.", description: "Ekte tilbakemeldinger fra uavhengige utviklere." },
      blog: { eyebrow: "Fra bloggen", title: "Guider for å lage bedre App Store-skjermbilder.", description: "Tips og referenser for å øke konverteringen." },
      faq: { eyebrow: "FAQ", title: "Ofte stilte spørsmål før du prøver.", description: "Svar om kompatibilitet og eksport." },
      appShowcase: { eyebrow: "Laget med Screenshot Bro", title: "I godt selskap.", description: "Indie-apper som allerede bruker Screenshot Bro." },
    },
    problem: {
      story: "Jeg bygde appen etter å ha brukt for mye tid i Figma på å gjøre om skjermbilder hver gang tekst eller farger ble endret. Bygg systemet én gang og la appen gjøre resten.",
      withoutLabel: "Uten Screenshot Bro",
      withLabel: "Med Screenshot Bro",
    },
    download: {
      titleLine1: "Klar til å publisere",
      titleLine2: "bedre skjermbilder?",
      description: "Hent i App Store og opplev hele arbeidsflyten på Mac eller iPad.",
    },
    footer: {
      note: "Bygget med SwiftUI. Designet for utviklere som publiserer App Store-oppdateringer.",
    },
  },
  cs: {
    siteTitle: `${SITE_NAME} — Snímky pro App Store a Google Play na Macu`,
    siteDescription: "Navrhujte snímky obrazovky pro App Store a Google Play v nativní aplikaci pro Mac, iPad a iPhone. Rámečky zařízení, lokalizace a nahrávání do App Store Connect.",
    primaryCtaLabel: "Získat v App Store",
    navItems: [
      { label: "Příklady", href: "#showcases" },
      { label: "Schopnosti", href: "#features" },
      { label: "Postup", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Nyní k dispozici v App Store pro Mac, iPad a iPhone",
      "Jednorázový nákup nebo bezplatný plán — žádné předplatné",
      "Nativní aplikace pro macOS, iOS a iPadOS se synchronizací iCloud",
      "Export všech velikostí zařízení jedním kliknutím",
    ],
    faqs: [
      {
        question: "V čem je Screenshot Bro jiný než webové generátory?",
        answer: "Screenshot Bro je 100% nativní aplikace pro macOS, iOS a iPadOS. Vaše data zůstávají na vašem zařízení, neplatíte žádné měsíční poplatky a můžete pracovat offline. Je optimalizována pro rychlost a podporuje klávesové zkratky, dávkový import a přímé nahrávání do App Store Connect.",
      },
      {
        question: "Mohu snímky lokalizovat do více jazyků?",
        answer: "Ano! Screenshot Bro je navržen s důrazem na lokalizaci. Můžete přidávat více jazyků, přepisovat texty i obrázky pro každý jazyk a exportovat všechny jazykové varianty najednou.",
      },
      {
        question: "Jaké velikosti zařízení jsou podporovány?",
        answer: "Všechny oficiální rozměry pro App Store i Google Play, včetně iPhonů s Dynamic Island, iPadů, MacBooků, Apple Watch a telefonů Android.",
      },
      {
        question: "Vyžaduje aplikace předplatné?",
        answer: "Ne. Screenshot Bro nabízí štědrý bezplatný tarif a jednoduchý jednorázový nákup pro doživotní přístup k funkcím Pro.",
      },
      {
        question: "Mohu nahrávat přímo do App Store Connect?",
        answer: "Ano. Pomocí API klíčů App Store Connect můžete exportované snímky nahrávat přímo do verzí svých aplikací bez nutnosti otevírat webový prohlížeč.",
      },
    ],
    ui: {
      skipToContent: "Přejít k obsahu",
      blog: "Blog",
      tutorials: "Návody",
      docs: "Dokumentace",
      changelog: "Seznam změn",
      comparisons: "Všechna srovnání",
      vsFastlane: "Porovnat s Fastlane",
      community: "Komunita",
      discord: "Discord",
      joinDiscord: "Připojit se k Discordu",
      privacy: "Soukromí",
      terms: "Podmínky",
      contact: "Kontakt",
      friends: "Aplikace přátel",
      followJourney: "Sledovat mou cestu",
      madeWithLoveAt: "Vytvořeno s ❤️ v",
      language: "Jazyk",
      sectionsLabel: "Sekce",
      openMenu: "Otevřít nabídku",
      closeMenu: "Zavřít nabídku",
      seeInAction: "Zobrazit v praxi",
      tryItNow: "Vyzkoušet hned",
      seeDetails: "Zobrazit podrobnosti",
      browseGuides: "Procházet průvodce",
      submitApp: "Odeslat aplikaci",
      contactDeveloper: "Kontaktovat vývojáře",
      backToTop: "Zpět nahoru",
      previousScreenshot: "Předchozí snímek",
      nextScreenshot: "Další snímek",
      goToScreenshot: (index) => `Přejít na snímek ${index}`,
      slideCount: (index, total) => `${index} z ${total}`,
      availabilityNote: "Aplikace pro macOS 15+ a iOS/iPadOS 18+ | Swift & SwiftUI | Dostupné v App Store",
    },
    hero: {
      titleLead: "Vytvářejte & lokalizujte",
      titleAccent: "App Store",
      titleRest: " snímky během několika minut",
      descriptionLead: "Navrhněte jednou. Lokalizujte do více než 70 jazyků, generujte všechny velikosti zařízení a",
      descriptionStrong: "nahrávejte přímo do App Store Connect",
      descriptionTail: " bez nutnosti ručně předělávat snímky. Vše v nativní aplikaci.",
    },
    sections: {
      showcases: { eyebrow: "Příklady", title: "Podívejte se, jak generátor funguje, ještě před instalací.", description: "Dávkový import, nahrání do App Store Connect jedním kliknutím, vrstvy a rámečky zařízení." },
      problem: { eyebrow: "Proč vznikl", title: "Vydání nové funkce by nemělo znamenat předělávání všech snímků obrazovky.", description: "Screenshot Bro odstraňuje opakující se práci při každé aktualizaci aplikace." },
      workflow: { eyebrow: "Pracovní postup", title: "Kratší cesta od hrubých snímků k hotovým materiálům pro obchod.", description: "Zaměřeno na jeden cíl: vytvořit skvělé snímky bez nutnosti spravovat hromady návrhových souborů." },
      features: { eyebrow: "Schopnosti", title: "Vše, co nástroj pro snímky App Store potřebuje.", description: "Důraz na rychlé rozvržení, konzistenci a snadný export." },
      screenshots: { eyebrow: "Snímky obrazovky", title: "Podívejte se na něj v akci.", description: "Snímky pro App Store ze samotné aplikace Screenshot Bro." },
      testimonials: { eyebrow: "Vývojáři", title: "Co říkají vývojáři.", description: "Skutečná zpětná vazba od nezávislých tvůrců." },
      blog: { eyebrow: "Z blogu", title: "Průvodci pro tvorbu lepších snímků obrazovky pro App Store.", description: "Tipy a doporučení pro zvýšení konverze." },
      faq: { eyebrow: "FAQ", title: "Často kladené otázky před vyzkoušením.", description: "Odpovědi ohledně kompatibility a exportu." },
      appShowcase: { eyebrow: "Vytvořeno v Screenshot Bro", title: "V dobré společnosti.", description: "Indie aplikace, které již používají Screenshot Bro." },
    },
    problem: {
      story: "Aplikaci jsem vytvořil poté, co jsem strávil příliš mnoho času ve Figmě předěláváním snímků při každé změně textu nebo barev. Nastavte systém jednou a nechte aplikaci udělat zbytek.",
      withoutLabel: "Bez Screenshot Bro",
      withLabel: "Se Screenshot Bro",
    },
    download: {
      titleLine1: "Připraveni publikovat",
      titleLine2: "lepší snímky obrazovky?",
      description: "Stáhněte si aplikaci v App Store a vyzkoušejte celý pracovní postup na Macu nebo iPadu.",
    },
    footer: {
      note: "Vytvořeno v SwiftUI. Navrženo pro vývojáře, kteří vydávají aktualizace v App Store.",
    },
  },
  ro: {
    siteTitle: `${SITE_NAME} — Capturi pentru App Store și Google Play pe Mac`,
    siteDescription: "Proiectează capturi pentru App Store și Google Play într-o aplicație nativă pentru Mac, iPad și iPhone. Rame de dispozitive, localizare și încărcare în App Store Connect.",
    primaryCtaLabel: "Descarcă din App Store",
    navItems: [
      { label: "Exemple", href: "#showcases" },
      { label: "Capabilități", href: "#features" },
      { label: "Flux", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Disponibilă acum în App Store pentru Mac, iPad și iPhone",
      "Achiziție unică sau plan gratuit — fără abonament obligatoriu",
      "Aplicație nativă macOS, iOS și iPadOS cu sincronizare iCloud",
      "Exportă șabloane pentru toate dimensiunile de dispozitive cu un singur clic",
    ],
    faqs: [
      {
        question: "Prin ce se deosebește Screenshot Bro de generatoarele web?",
        answer: "Screenshot Bro este o aplicație 100% nativă pentru macOS, iOS și iPadOS. Datele tale rămân pe dispozitiv, nu există abonamente lunare și poți lucra offline. Este optimizată pentru viteză și suportă comenzi rapide, import în masă și încărcare directă în App Store Connect.",
      },
      {
        question: "Pot localiza capturile de ecran în mai multe limbi?",
        answer: "Da! Screenshot Bro este construit cu accent pe localizare. Poți adăuga multiple limbi, înlocui texte și imagini per limbă și exporta toate variantele localizate dintr-o dată.",
      },
      {
        question: "Ce dimensiuni de dispozitive sunt acceptate?",
        answer: "Toate dimensiunile oficiale pentru App Store și Google Play, inclusiv iPhone-uri cu Dynamic Island, iPad-uri, MacBook-uri, Apple Watch și telefoane Android.",
      },
      {
        question: "Există vreun abonament?",
        answer: "Nu. Screenshot Bro oferă un plan gratuit generos și o achiziție unică simplă pentru acces pe viață la funcțiile Pro.",
      },
      {
        question: "Pot încărca direct în App Store Connect?",
        answer: "Da. Folosind cheile API App Store Connect, poți încărca capturile exportate direct în versiunile aplicațiilor tale fără a deschide browserul.",
      },
    ],
    ui: {
      skipToContent: "Sari la conținut",
      blog: "Blog",
      tutorials: "Ghiduri",
      docs: "Documentație",
      changelog: "Istoric versiuni",
      comparisons: "Toate comparațiile",
      vsFastlane: "Compară cu Fastlane",
      community: "Comunitate",
      discord: "Discord",
      joinDiscord: "Alătură-te pe Discord",
      privacy: "Confidențialitate",
      terms: "Termeni",
      contact: "Contact",
      friends: "Aplicațiile prietenilor",
      followJourney: "Urmărește călătoria mea",
      madeWithLoveAt: "Creat cu ❤️ în",
      language: "Limbă",
      sectionsLabel: "Secțiuni",
      openMenu: "Deschide meniul",
      closeMenu: "Închide meniul",
      seeInAction: "Vezi în acțiune",
      tryItNow: "Încearcă acum",
      seeDetails: "Vezi detalii",
      browseGuides: "Răsfoiește ghidurile",
      submitApp: "Trimite aplicația",
      contactDeveloper: "Contactează dezvoltatorul",
      backToTop: "Înapoi sus",
      previousScreenshot: "Captura anterioară",
      nextScreenshot: "Captura următoare",
      goToScreenshot: (index) => `Mergi la captura ${index}`,
      slideCount: (index, total) => `${index} din ${total}`      ,
      availabilityNote: "Aplicație pentru macOS 15+ și iOS/iPadOS 18+ | Swift & SwiftUI | Disponibilă în App Store",
    },
    hero: {
      titleLead: "Creează & localizează",
      titleAccent: "App Store",
      titleRest: " capturi de ecran în câteva minute",
      descriptionLead: "Proiectează o dată. Localizează în peste 70 de limbi, generează toate dimensiunile de dispozitive și",
      descriptionStrong: "încarcă direct în App Store Connect",
      descriptionTail: " fără a reface manual capturile. Totul într-o aplicație nativă.",
    },
    sections: {
      showcases: { eyebrow: "Exemple", title: "Vezi cum funcționează generatorul înainte de instalare.", description: "Import în masă, încărcare în App Store Connect cu un clic, straturi și rame de dispozitive." },
      problem: { eyebrow: "De ce există", title: "Lansarea unei funcționalități noi nu ar trebui să însemne refacerea tuturor capturilor.", description: "Screenshot Bro elimină munca repetitivă la fiecare actualizare a aplicației." },
      workflow: { eyebrow: "Flux de lucru", title: "O cale mai scurtă de la capturile brute la materialele finale pentru magazin.", description: "Conceput pentru un singur scop: creează capturi superbe fără a întreține o grămadă de fișiere de design." },
      features: { eyebrow: "Capabilități", title: "Tot ce trebuie să facă un instrument de capturi pentru App Store.", description: "Accent pe aspect rapid, consecvență și export fără bătăi de cap." },
      screenshots: { eyebrow: "Capturi de ecran", title: "Vezi aplicația în acțiune.", description: "Capturi de App Store chiar din Screenshot Bro." },
      testimonials: { eyebrow: "Dezvoltatori", title: "Ce spun dezvoltatorii.", description: "Feedback real de la creatori independenți." },
      blog: { eyebrow: "Din blog", title: "Ghiduri pentru a crea capturi de ecran mai bune pentru App Store.", description: "Sfaturi și referințe pentru a crește conversia." },
      faq: { eyebrow: "FAQ", title: "Întrebări frecvente înainte de testare.", description: "Răspunsuri despre compatibilitate și export." },
      appShowcase: { eyebrow: "Creat cu Screenshot Bro", title: "În companie bună.", description: "Aplicații indie care folosesc deja Screenshot Bro." },
    },
    problem: {
      story: "Am creat aplicația după ce am petrecut prea mult timp în Figma refăcând capturile de fiecare dată când se modificau textele sau culorile. Configurează sistemul o dată și lasă aplicația să facă restul.",
      withoutLabel: "Fără Screenshot Bro",
      withLabel: "Cu Screenshot Bro",
    },
    download: {
      titleLine1: "Gata să publici",
      titleLine2: "capturi de ecran mai bune?",
      description: "Descarcă din App Store și experimentează întregul flux de lucru pe Mac sau iPad.",
    },
    footer: {
      note: "Construit cu SwiftUI. Creat pentru dezvoltatorii care publică actualizări în App Store.",
    },
  },
  ms: {
    siteTitle: `${SITE_NAME} — Tangkapan Skrin App Store & Google Play di Mac`,
    siteDescription: "Reka tangkapan skrin untuk App Store dan Google Play dalam aplikasi natif Mac, iPad dan iPhone. Bingkai peranti, penyetempatan dan muat naik terus ke App Store Connect.",
    primaryCtaLabel: "Dapatkan di App Store",
    navItems: [
      { label: "Contoh", href: "#showcases" },
      { label: "Keupayaan", href: "#features" },
      { label: "Aliran Kerja", href: "#workflow" },
      { label: "Soalan Lazim", href: "#faq" },
    ],
    benefits: [
      "Boleh didapati sekarang di App Store untuk Mac, iPad dan iPhone",
      "Pembelian sekali atau pelan percuma — tiada langganan diperlukan",
      "Aplikasi natif macOS, iOS dan iPadOS dengan penyelarasan iCloud",
      "Eksport pratetap semua saiz peranti dengan satu klik",
    ],
    faqs: [
      {
        question: "Apakah perbezaan Screenshot Bro berbanding penjana berasaskan web?",
        answer: "Screenshot Bro ialah aplikasi 100% natif macOS, iOS dan iPadOS. Data anda kekal pada peranti anda, tiada langganan bulanan dan anda boleh bekerja di luar talian. Ia dioptimumkan untuk kelajuan serta menyokong pintasan papan kekunci, import pukal dan muat naik terus ke App Store Connect.",
      },
      {
        question: "Bolehkah saya menyetempatkan tangkapan skrin ke pelbagai bahasa?",
        answer: "Ya! Screenshot Bro dibina khusus untuk penyetempatan. Anda boleh menambah pelbagai bahasa, menggantikan teks dan imej bagi setiap bahasa serta mengeksport semua varian setempat secara serentak.",
      },
      {
        question: "Apakah saiz peranti yang disokong?",
        answer: "Semua saiz rasmi App Store dan Google Play, termasuk iPhone dengan Dynamic Island, iPad, MacBook, Apple Watch dan telefon Android.",
      },
      {
        question: "Adakah terdapat langganan bulanan?",
        answer: "Tidak. Screenshot Bro menyediakan pelan percuma yang mencukupi serta pembelian sekali untuk akses sepanjang hayat kepada ciri-ciri Pro.",
      },
      {
        question: "Bolehkah saya memuat naik terus ke App Store Connect?",
        answer: "Ya. Dengan kunci API App Store Connect, anda boleh memuat naik tangkapan skrin yang dieksport terus ke versi aplikasi anda tanpa membuka pelayar web.",
      },
    ],
    ui: {
      skipToContent: "Langkau ke kandungan",
      blog: "Blog",
      tutorials: "Tutorial",
      docs: "Dokumentasi",
      changelog: "Log Perubahan",
      comparisons: "Semua perbandingan",
      vsFastlane: "Bandingkan dengan Fastlane",
      community: "Komuniti",
      discord: "Discord",
      joinDiscord: "Sertai Discord",
      privacy: "Privasi",
      terms: "Terma",
      contact: "Hubungi",
      friends: "Aplikasi rakan",
      followJourney: "Ikuti perjalanan saya",
      madeWithLoveAt: "Dibuat dengan ❤️ di",
      language: "Bahasa",
      sectionsLabel: "Bahagian",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      seeInAction: "Lihat dalam tindakan",
      tryItNow: "Cuba sekarang",
      seeDetails: "Lihat butiran",
      browseGuides: "Semak panduan",
      submitApp: "Hantar aplikasi",
      contactDeveloper: "Hubungi pembangun",
      backToTop: "Kembali ke atas",
      previousScreenshot: "Tangkapan skrin sebelumnya",
      nextScreenshot: "Tangkapan skrin seterusnya",
      goToScreenshot: (index) => `Pergi ke tangkapan skrin ${index}`,
      slideCount: (index, total) => `${index} daripada ${total}`,
      availabilityNote: "Aplikasi macOS 15+ dan iOS/iPadOS 18+ | Swift & SwiftUI | Boleh didapati di App Store",
    },
    hero: {
      titleLead: "Cipta & setempatkan",
      titleAccent: "App Store",
      titleRest: " tangkapan skrin dalam beberapa minit",
      descriptionLead: "Reka sekali. Setempatkan ke 70+ bahasa, jana semua saiz peranti dan",
      descriptionStrong: "muat naik terus ke App Store Connect",
      descriptionTail: " tanpa membina semula tangkapan skrin secara manual. Segalanya dalam satu aplikasi natif.",
    },
    sections: {
      showcases: { eyebrow: "Contoh", title: "Lihat bagaimana penjana berfungsi sebelum memasang.", description: "Import pukal, muat naik ke App Store Connect dengan satu klik, lapisan dan bingkai peranti." },
      problem: { eyebrow: "Sebab ia dicipta", title: "Mengeluarkan ciri baharu tidak sepatutnya bermakna membina semula semua tangkapan skrin.", description: "Screenshot Bro menghapuskan kerja berulang dalam setiap kemas kini aplikasi." },
      workflow: { eyebrow: "Aliran kerja", title: "Laluan lebih pantas daripada tangkapan mentah ke aset gedung yang siap.", description: "Fokus pada satu matlamat: cipta tangkapan skrin hebat tanpa perlu menyelenggara timbunan fail reka bentuk." },
      features: { eyebrow: "Keupayaan", title: "Semua yang diperlukan oleh alat tangkapan skrin App Store.", description: "Tumpuan pada susun atur pantas, ketekalan dan eksport yang lancar." },
      screenshots: { eyebrow: "Tangkapan skrin", title: "Lihat ia beraksi.", description: "Tangkapan skrin App Store daripada Screenshot Bro sendiri." },
      testimonials: { eyebrow: "Pembangun", title: "Apa kata pembangun.", description: "Maklum balas sebenar daripada pencipta indie." },
      blog: { eyebrow: "Daripada blog", title: "Panduan untuk mereka bentuk tangkapan skrin App Store yang lebih baik.", description: "Petua dan rujukan untuk meningkatkan kadar penukaran." },
      faq: { eyebrow: "Soalan Lazim", title: "Soalan lazim sebelum anda mencuba.", description: "Jawapan mengenai keserasian dan eksport." },
      appShowcase: { eyebrow: "Dicipta dengan Screenshot Bro", title: "Bersama rakan hebat.", description: "Aplikasi indie yang sudah menggunakan Screenshot Bro." },
    },
    problem: {
      story: "Saya membina aplikasi ini selepas menghabiskan terlalu banyak masa dalam Figma membuat semula tangkapan skrin setiap kali teks atau warna berubah. Bina sistem sekali dan biarkan aplikasi selesaikan bakinya.",
      withoutLabel: "Tanpa Screenshot Bro",
      withLabel: "Dengan Screenshot Bro",
    },
    download: {
      titleLine1: "Sedia untuk terbitkan",
      titleLine2: "tangkapan skrin yang lebih baik?",
      description: "Dapatkan di App Store dan rasai seluruh aliran kerja di Mac atau iPad.",
    },
    footer: {
      note: "Dibina dengan SwiftUI. Direka untuk pembangun yang mengeluarkan kemas kini App Store.",
    },
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
export function appStoreCtaUrl(
  locale: LocaleCode = DEFAULT_LOCALE,
  campaign = "website",
): string {
  return appStoreCampaignUrl(campaign, getLocaleInfo(locale).storefront);
}

export function getLocaleFromPath(pathname: string): LocaleCode {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocaleCode(segment) ? segment : DEFAULT_LOCALE;
}

export function getHomeCopy(locale: LocaleCode): HomeCopy {
  if (locale === DEFAULT_LOCALE) return EN_HOME_COPY;

  const localeInfo = getLocaleInfo(locale);
  const landingContent = LOCALIZED_LANDING_CONTENT[locale as Exclude<LocaleCode, "en">];
  const overrides = LOCALIZED_OVERRIDES[locale as Exclude<LocaleCode, "en">];

  return {
    ...EN_HOME_COPY,
    ...landingContent,
    ...overrides,
    locale: localeInfo,
    ui: {
      ...EN_HOME_COPY.ui,
      ...landingContent.ui,
      ...overrides.ui,
    },
    hero: {
      ...EN_HOME_COPY.hero,
      ...landingContent.hero,
      ...overrides.hero,
    },
    sections: {
      ...EN_HOME_COPY.sections,
      ...landingContent.sections,
      ...overrides.sections,
    },
    problem: {
      ...EN_HOME_COPY.problem,
      ...landingContent.problem,
      ...overrides.problem,
    },
    download: {
      ...EN_HOME_COPY.download,
      ...landingContent.download,
      ...overrides.download,
    },
    footer: {
      ...EN_HOME_COPY.footer,
      ...landingContent.footer,
      ...overrides.footer,
    },
  };
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
