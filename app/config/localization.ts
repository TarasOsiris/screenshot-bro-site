import type {
  FaqItem,
  FeatureItem,
  FeatureShowcase,
  NavItem,
  WorkflowStep,
} from "~/config/site";
import { HOME_DESCRIPTIONS } from "~/config/home-descriptions";
import {
  appStoreProductUrl,
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
    directDownload: string;
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

const EN_HOME_COPY: HomeCopy = {
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
    directDownload: "Prefer a direct download? Get the Mac DMG",
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
    | "productHuntAlt"
  >;
  featureTitles: string[];
  featureDescription: string;
  showcaseLabels: string[];
  showcaseTitles: string[];
  showcaseDescription: string;
  screenshotAltSuffix: string;
  workflowTitles: string[];
  workflowDescription: string;
};

function compactLandingContent(
  locale: Exclude<LocaleCode, "en">,
  copy: CompactLandingCopy,
): HomeCopyOverrides {
  // Per-card descriptions where translated; the shared one-liner is only the fallback.
  const described = HOME_DESCRIPTIONS[locale];
  return {
    socialImageAlt: copy.socialImageAlt,
    ui: copy.ui,
    features: FEATURES.map((feature, index) => ({
      ...feature,
      title: copy.featureTitles[index] ?? feature.title,
      description: described?.features[feature.icon] ?? copy.featureDescription,
    })),
    featureShowcases: FEATURE_SHOWCASES.map((showcase, index) => ({
      ...showcase,
      label: copy.showcaseLabels[index] ?? showcase.label,
      title: copy.showcaseTitles[index] ?? showcase.title,
      description: described?.showcases[index] ?? copy.showcaseDescription,
      mediaAlt: `${copy.showcaseTitles[index] ?? showcase.title} — ${copy.screenshotAltSuffix}`,
    })),
    workflowSteps: WORKFLOW_STEPS.map((step, index) => ({
      ...step,
      title: copy.workflowTitles[index] ?? step.title,
      description: described?.workflow[index] ?? copy.workflowDescription,
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
          "Exporta PNG o JPEG al tamaño exacto en píxeles de cada fila, para todos los locales a la vez. Carpetas organizadas automáticamente por locale y fila para App Store Connect, Google Play y assets de lanzamiento.",
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
          "Usa 16 presets de degradado, crea los tuyos con el editor multipunto o añade imágenes. Los fondos pueden extenderse por varias plantillas y actualizarse en vivo.",
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
      {
        label: "Agentes de IA y MCP",
        title: "Deja el trabajo pesado a tu agente de IA.",
        description:
          "Activa el servidor MCP local y Claude Code, Claude Desktop o Cursor podrán manejar Screenshot Bro: crear un proyecto, colocar filas y formas, importar capturas, traducir el texto, revisar las vistas previas renderizadas, exportar y sincronizar el set con App Store Connect. Solo escucha en 127.0.0.1, necesita un token de Ajustes y cada cambio se deshace con ⌘Z.",
        mediaAlt:
          "Sesión de un agente de IA que llama a las herramientas MCP de Screenshot Bro para crear, traducir, renderizar y subir capturas de App Store",
      },
    ]),
    workflowSteps: localizeWorkflowSteps([
      {
        title: "Configura filas",
        description:
          "Elige tus tamaños de dispositivo: iPhone, iPad, Mac o teléfono y tablet Android, cada uno preconfigurado con los píxeles que exige su tienda. Añade tantas filas como necesites.",
      },
      {
        title: "Diseña y localiza",
        description:
          "Añade marcos, texto, formas y fondo. Crea locales, traduce lo que falte y ajusta cada texto por forma para que cada idioma quede perfecto.",
      },
      {
        title: "Exporta todo",
        description:
          "Pulsa exportar y obtén carpetas organizadas por locale y fila, con cada captura al tamaño exacto que pide la tienda. Un clic.",
      },
      {
        title: "Sube a App Store Connect",
        description:
          "Conecta tu clave API una vez y envía capturas al app, versión, tipo de pantalla y locale correctos sin arrastrar archivos en el navegador.",
      },
    ]),
  },
  zh: compactLandingContent("zh", {
    socialImageAlt: "Screenshot Bro — 用设备边框、渐变和本地化制作 App Store 与 Google Play 截图的 Mac、iPad 和 iPhone 原生应用",
    ui: { docs: "文档", redditCommunity: "Reddit 社区", followOnX: "在 X 上关注", followOnThreads: "在 Threads 上关注", homeLabel: `${SITE_NAME} 首页`, read: "阅读", productLabel: "产品", resourcesLabel: "资源", productHuntAlt: "ScreenshotBro App - 设计并导出精美 App Store 截图。| Product Hunt" },
    featureTitles: ["多模板编辑", "设备边框", "背景与跨模板背景", "形状工具 + SVG", "智能对齐", "本地化导出", "上传到 App Store Connect", "AI 智能体与 MCP", "内建本地化", "原生 Mac、iPad 与 iPhone", "iCloud 同步", "自定义字体", "项目模板", "键盘快捷键", "隐私优先", "批量图片导入", "永久免费层级"],
    featureDescription: "为多语言商店截图准备的专注工具，保留原生性能、可重复模板和可直接提交的导出结果。",
    showcaseLabels: ["批量导入", "自动上传", "形状与图层", "背景", "设备边框", "AI 智能体与 MCP"],
    showcaseTitles: ["拖入，完成。", "一键上传到 App Store Connect。", "一层一层搭建。", "制作漂亮背景。", "自定义设备边框。", "让 AI 智能体替你处理繁琐工作。"],
    showcaseDescription: "核心工作流展示了 Screenshot Bro 如何减少重复设计、导出和上传步骤。",
    screenshotAltSuffix: "Screenshot Bro 界面截图",
    workflowTitles: ["设置行", "设计并本地化", "全部导出", "上传到 App Store Connect"],
    workflowDescription: "从设备尺寸到多语言导出和上传，整个截图流程都集中在一个原生应用中。",
  }),
  hi: compactLandingContent("hi", {
    socialImageAlt: "Screenshot Bro — Mac, iPad और iPhone के लिए App Store और Google Play screenshots बनाने वाला native ऐप",
    ui: { docs: "दस्तावेज़", redditCommunity: "Reddit समुदाय", followOnX: "X पर follow करें", followOnThreads: "Threads पर follow करें", homeLabel: `${SITE_NAME} होम`, read: "पढ़ें", productLabel: "उत्पाद", resourcesLabel: "संसाधन", productHuntAlt: "ScreenshotBro App - सुंदर App Store screenshots design और export करें. | Product Hunt" },
    featureTitles: ["मल्टी-टेम्पलेट एडिटिंग", "डिवाइस फ्रेम", "बैकग्राउंड और स्पैनिंग", "शेप टूल्स + SVG", "स्मार्ट अलाइनमेंट", "लोकलाइज्ड एक्सपोर्ट", "App Store Connect अपलोड", "AI एजेंट और MCP", "बिल्ट-इन लोकलाइजेशन", "नेटिव Mac, iPad और iPhone", "iCloud सिंक", "कस्टम फॉन्ट", "प्रोजेक्ट टेम्पलेट", "कीबोर्ड शॉर्टकट", "प्राइवेसी-फर्स्ट", "बैच इमेज इंपोर्ट", "हमेशा फ्री प्लान"],
    featureDescription: "Multi-language store screenshots के लिए focused tools, native performance, reusable templates और upload-ready exports के साथ।",
    showcaseLabels: ["बैच इंपोर्ट", "ऑटो अपलोड", "शेप्स और लेयर्स", "बैकग्राउंड", "डिवाइस फ्रेम", "AI एजेंट और MCP"],
    showcaseTitles: ["खींचें, छोड़ें, हो गया।", "App Store Connect पर एक क्लिक में अपलोड।", "लेयर दर लेयर बनाएं।", "सुंदर बैकग्राउंड बनाएं।", "डिवाइस फ्रेम कस्टमाइज़ करें।", "दोहराव वाला काम अपने AI एजेंट को सौंपें।"],
    showcaseDescription: "मुख्य वर्कफ़्लो दिखाता है कि Screenshot Bro दोहराव वाले डिज़ाइन, एक्सपोर्ट और अपलोड चरणों को कैसे कम करता है।",
    screenshotAltSuffix: "Screenshot Bro इंटरफ़ेस स्क्रीनशॉट",
    workflowTitles: ["पंक्तियां सेट करें", "डिजाइन और लोकलाइज करें", "सब एक्सपोर्ट करें", "App Store Connect पर अपलोड"],
    workflowDescription: "डिवाइस साइज़ से मल्टी-लैंग्वेज एक्सपोर्ट और अपलोड तक पूरा स्क्रीनशॉट वर्कफ़्लो एक नेटिव ऐप में रहता है।",
  }),
  fr: compactLandingContent("fr", {
    socialImageAlt: "Screenshot Bro — app native Mac, iPad et iPhone pour créer des captures App Store et Google Play avec cadres, dégradés et localisation",
    ui: { docs: "Documentation", redditCommunity: "Communauté Reddit", followOnX: "Suivre sur X", followOnThreads: "Suivre sur Threads", homeLabel: `Accueil ${SITE_NAME}`, read: "Lire", productLabel: "Produit", resourcesLabel: "Ressources", productHuntAlt: "ScreenshotBro App - Créez et exportez de belles captures App Store. | Product Hunt" },
    featureTitles: ["Édition multi-template", "Cadres d'appareils", "Arrière-plans étendus", "Outils de formes + SVG", "Alignement intelligent", "Export localisé", "Envoi App Store Connect", "Agents IA et MCP", "Localisation intégrée", "Natif Mac, iPad et iPhone", "Sync iCloud", "Polices personnalisées", "Templates de projet", "Raccourcis clavier", "Confidentialité d'abord", "Import d'images groupé", "Version gratuite permanente"],
    featureDescription: "Des outils ciblés pour des captures de store multilingues, avec performances natives, templates réutilisables et exports prêts à envoyer.",
    showcaseLabels: ["Import groupé", "Envoi auto", "Formes et calques", "Arrière-plans", "Cadres", "Agents IA et MCP"],
    showcaseTitles: ["Glissez, déposez, terminé.", "App Store Connect en un clic.", "Construisez calque par calque.", "Créez de beaux fonds.", "Personnalisez les cadres.", "Confiez les tâches répétitives à votre agent IA."],
    showcaseDescription: "Le flux principal montre comment Screenshot Bro réduit les étapes répétitives de design, d'export et d'envoi.",
    screenshotAltSuffix: "capture de l'interface Screenshot Bro",
    workflowTitles: ["Configurez les rangées", "Créez et localisez", "Exportez tout", "Envoyez à App Store Connect"],
    workflowDescription: "Des tailles d'appareils à l'export multilingue et à l'envoi, tout le flux reste dans une app native.",
  }),
  ar: compactLandingContent("ar", {
    socialImageAlt: "Screenshot Bro — تطبيق أصلي على Mac و iPad و iPhone لتصميم لقطات App Store و Google Play بإطارات وتدرجات وتوطين",
    ui: { docs: "الوثائق", redditCommunity: "مجتمع Reddit", followOnX: "تابع على X", followOnThreads: "تابع على Threads", homeLabel: `صفحة ${SITE_NAME} الرئيسية`, read: "اقرأ", productLabel: "المنتج", resourcesLabel: "الموارد", productHuntAlt: "ScreenshotBro App - صمّم وصدّر لقطات App Store جميلة. | Product Hunt" },
    featureTitles: ["تحرير متعدد القوالب", "إطارات الأجهزة", "الخلفيات والامتداد", "أدوات الأشكال + SVG", "محاذاة ذكية", "تصدير موطّن", "رفع إلى App Store Connect", "وكلاء الذكاء الاصطناعي و MCP", "توطين مدمج", "أصلي على Mac و iPad و iPhone", "مزامنة iCloud", "خطوط مخصصة", "قوالب المشاريع", "اختصارات لوحة المفاتيح", "الخصوصية أولاً", "استيراد صور جماعي", "خطة مجانية دائماً"],
    featureDescription: "أدوات مركزة للقطات متجر متعددة اللغات مع أداء أصلي وقوالب قابلة لإعادة الاستخدام وتصدير جاهز للرفع.",
    showcaseLabels: ["استيراد جماعي", "رفع تلقائي", "أشكال وطبقات", "خلفيات", "إطارات الأجهزة", "وكلاء الذكاء الاصطناعي و MCP"],
    showcaseTitles: ["اسحب، أفلت، انتهى.", "رفع App Store Connect بنقرة.", "ابنِه طبقة بعد طبقة.", "اصنع خلفيات جميلة.", "خصص إطارات الأجهزة.", "دع وكيل الذكاء الاصطناعي يتولى المهام الروتينية."],
    showcaseDescription: "يوضح سير العمل كيف يقلل Screenshot Bro خطوات التصميم والتصدير والرفع المتكررة.",
    screenshotAltSuffix: "لقطة من واجهة Screenshot Bro",
    workflowTitles: ["أعدّ الصفوف", "صمّم ووطّن", "صدّر الكل", "ارفع إلى App Store Connect"],
    workflowDescription: "من أحجام الأجهزة إلى التصدير متعدد اللغات والرفع، يبقى سير اللقطات داخل تطبيق أصلي واحد.",
  }),
  de: compactLandingContent("de", {
    socialImageAlt: "Screenshot Bro — native Mac-, iPad- und iPhone-App für App Store- und Google Play-Screenshots mit Geräterahmen, Verläufen und Lokalisierung",
    ui: { docs: "Dokumentation", redditCommunity: "Reddit-Community", followOnX: "Auf X folgen", followOnThreads: "Auf Threads folgen", homeLabel: `${SITE_NAME} Startseite`, read: "Lesen", productLabel: "Produkt", resourcesLabel: "Ressourcen", productHuntAlt: "ScreenshotBro App - Schöne App-Store-Screenshots gestalten und exportieren. | Product Hunt" },
    featureTitles: ["Multi-Template-Bearbeitung", "Geräterahmen", "Hintergründe & Spanning", "Formwerkzeuge + SVG", "Intelligente Ausrichtung", "Lokalisierter Export", "Upload zu App Store Connect", "KI-Agenten & MCP", "Lokalisierung integriert", "Nativ für Mac, iPad & iPhone", "iCloud-Synchronisierung", "Eigene Schriften", "Projektvorlagen", "Tastaturkürzel", "Datenschutz zuerst", "Batch-Bildimport", "Kostenlos dauerhaft"],
    featureDescription: "Fokussierte Werkzeuge für mehrsprachige Store-Screenshots mit nativer Performance, wiederverwendbaren Templates und uploadfertigen Exporten.",
    showcaseLabels: ["Batch-Import", "Auto-Upload", "Formen & Ebenen", "Hintergründe", "Geräterahmen", "KI-Agenten & MCP"],
    showcaseTitles: ["Ziehen, ablegen, fertig.", "App Store Connect mit einem Klick.", "Ebene für Ebene aufbauen.", "Schöne Hintergründe erstellen.", "Geräterahmen anpassen.", "Überlass die Fleißarbeit deinem KI-Agenten."],
    showcaseDescription: "Der Kernworkflow zeigt, wie Screenshot Bro wiederholte Design-, Export- und Upload-Schritte reduziert.",
    screenshotAltSuffix: "Screenshot der Screenshot-Bro-Oberfläche",
    workflowTitles: ["Zeilen einrichten", "Gestalten & lokalisieren", "Alles exportieren", "Zu App Store Connect hochladen"],
    workflowDescription: "Von Gerätegrößen bis Mehrsprachenexport und Upload bleibt der gesamte Screenshot-Workflow in einer nativen App.",
  }),
  ja: compactLandingContent("ja", {
    socialImageAlt: "Screenshot Bro — App Store・Google Playスクリーンショットをデバイスフレーム、グラデーション、ローカライズ付きで作成するMac/iPad/iPhoneネイティブアプリ",
    ui: { docs: "ドキュメント", redditCommunity: "Redditコミュニティ", followOnX: "Xでフォロー", followOnThreads: "Threadsでフォロー", homeLabel: `${SITE_NAME} ホーム`, read: "読む", productLabel: "製品", resourcesLabel: "リソース", productHuntAlt: "ScreenshotBro App - 美しいApp Storeスクリーンショットを作成・書き出し。| Product Hunt" },
    featureTitles: ["マルチテンプレート編集", "デバイスフレーム", "背景とスパン", "図形ツール + SVG", "スマート整列", "ローカライズ書き出し", "App Store Connectアップロード", "AIエージェントとMCP", "内蔵ローカライズ", "Mac・iPad・iPhoneにネイティブ対応", "iCloud同期", "カスタムフォント", "プロジェクトテンプレート", "キーボードショートカット", "プライバシー重視", "画像の一括読み込み", "ずっと無料のプラン"],
    featureDescription: "多言語ストア用スクリーンショットに特化したツール群。ネイティブ性能、再利用可能なテンプレート、提出しやすい書き出しを備えています。",
    showcaseLabels: ["一括読み込み", "自動アップロード", "図形とレイヤー", "背景", "デバイスフレーム", "AIエージェントとMCP"],
    showcaseTitles: ["ドラッグして完了。", "App Store Connectへワンクリック。", "レイヤーごとに作成。", "美しい背景を作成。", "フレームをカスタマイズ。", "面倒な作業はAIエージェントにおまかせ。"],
    showcaseDescription: "Screenshot Broが繰り返しのデザイン、書き出し、アップロード作業を減らす流れを紹介します。",
    screenshotAltSuffix: "Screenshot Broのインターフェイス画像",
    workflowTitles: ["行を設定", "デザインとローカライズ", "すべて書き出し", "App Store Connectへアップロード"],
    workflowDescription: "デバイスサイズから多言語書き出しとアップロードまで、スクリーンショット作業を1つのネイティブアプリで完結できます。",
  }),
  pt: compactLandingContent("pt", {
    socialImageAlt: "Screenshot Bro — app nativo para Mac, iPad e iPhone para criar capturas da App Store e Google Play com molduras, gradientes e localização",
    ui: { docs: "Documentação", redditCommunity: "Comunidade Reddit", followOnX: "Seguir no X", followOnThreads: "Seguir no Threads", homeLabel: `Início do ${SITE_NAME}`, read: "Ler", productLabel: "Produto", resourcesLabel: "Recursos", productHuntAlt: "ScreenshotBro App - Crie e exporte belas capturas da App Store. | Product Hunt" },
    featureTitles: ["Edição multi-template", "Molduras de dispositivos", "Fundos e expansão", "Formas + SVG", "Alinhamento inteligente", "Exportação localizada", "Envio ao App Store Connect", "Agentes de IA e MCP", "Localização integrada", "Nativo para Mac, iPad e iPhone", "Sincronização iCloud", "Fontes personalizadas", "Modelos de projeto", "Atalhos de teclado", "Privacidade primeiro", "Importação em lote", "Plano grátis para sempre"],
    featureDescription: "Ferramentas focadas para capturas de loja em vários idiomas, com desempenho nativo, modelos reutilizáveis e exportações prontas para envio.",
    showcaseLabels: ["Importação em lote", "Envio automático", "Formas e camadas", "Fundos", "Molduras", "Agentes de IA e MCP"],
    showcaseTitles: ["Arraste, solte, pronto.", "App Store Connect em um clique.", "Monte camada por camada.", "Crie fundos bonitos.", "Personalize molduras.", "Deixe o trabalho repetitivo com seu agente de IA."],
    showcaseDescription: "O fluxo principal mostra como o Screenshot Bro reduz etapas repetitivas de design, exportação e envio.",
    screenshotAltSuffix: "captura da interface do Screenshot Bro",
    workflowTitles: ["Configure linhas", "Projete e localize", "Exporte tudo", "Envie ao App Store Connect"],
    workflowDescription: "Dos tamanhos de dispositivo à exportação em vários idiomas e envio, todo o fluxo fica em um app nativo.",
  }),
  it: compactLandingContent("it", {
    socialImageAlt: "Screenshot Bro — app nativa per Mac, iPad e iPhone per creare screenshot App Store e Google Play con cornici, gradienti e localizzazione",
    ui: { docs: "Documentazione", redditCommunity: "Community Reddit", followOnX: "Segui su X", followOnThreads: "Segui su Threads", homeLabel: `Home di ${SITE_NAME}`, read: "Leggi", productLabel: "Prodotto", resourcesLabel: "Risorse", productHuntAlt: "ScreenshotBro App - Progetta ed esporta splendidi screenshot App Store. | Product Hunt" },
    featureTitles: ["Modifica multi-template", "Cornici dispositivo", "Sfondi estesi", "Strumenti forme + SVG", "Allineamento intelligente", "Export localizzato", "Upload App Store Connect", "Agenti IA e MCP", "Localizzazione integrata", "Nativa Mac, iPad e iPhone", "Sync iCloud", "Font personalizzati", "Template progetto", "Scorciatoie da tastiera", "Privacy prima di tutto", "Import batch", "Piano gratis per sempre"],
    featureDescription: "Strumenti mirati per screenshot store multilingue, con prestazioni native, template riutilizzabili ed export pronti per l'upload.",
    showcaseLabels: ["Import batch", "Upload automatico", "Forme e livelli", "Sfondi", "Cornici", "Agenti IA e MCP"],
    showcaseTitles: ["Trascina, rilascia, fatto.", "App Store Connect in un clic.", "Costruisci livello per livello.", "Crea sfondi belli.", "Personalizza le cornici.", "Lascia il lavoro ripetitivo al tuo agente IA."],
    showcaseDescription: "Il flusso principale mostra come Screenshot Bro riduce passaggi ripetitivi di design, export e upload.",
    screenshotAltSuffix: "schermata dell'interfaccia Screenshot Bro",
    workflowTitles: ["Configura righe", "Progetta e localizza", "Esporta tutto", "Carica su App Store Connect"],
    workflowDescription: "Dalle dimensioni dispositivo all'export multilingue e all'upload, tutto il workflow resta in un'app nativa.",
  }),
  ko: {
    socialImageAlt: "Screenshot Bro — Mac, iPad 및 iPhone용 네이티브 앱으로 App Store와 Google Play 스크린샷을 디바이스 프레임, 그라디언트, 현지화와 함께 제작",
    ui: { docs: "문서", redditCommunity: "Reddit 커뮤니티", followOnX: "X에서 팔로우", followOnThreads: "Threads에서 팔로우", homeLabel: `${SITE_NAME} 홈`, read: "읽기", productLabel: "제품", resourcesLabel: "리소스", productHuntAlt: "ScreenshotBro App - 아름다운 App Store 스크린샷을 디자인하고 내보내세요. | Product Hunt" },
    features: localizeFeatures([
      { title: "멀티 템플릿 편집", description: "한 번 편집하면 모든 변형이 업데이트됩니다. 도형이나 텍스트를 바꾸면 모든 스크린샷에 동시에 반영됩니다." },
      { title: "디바이스 프레임", description: "iPhone, iPad, MacBook, iMac, Android 프레임으로 App Store와 Google Play 스크린샷을 만들 수 있습니다. 정확한 베젤과 색상 설정을 지원합니다." },
      { title: "배경과 확장", description: "단색, 여러 종류의 그라디언트, 이미지 배경을 지원하며 한 행의 여러 템플릿에 배경을 이어서 적용할 수 있습니다." },
      { title: "도형 도구 + SVG", description: "사각형, 원, 별, 텍스트, 이미지, SVG, 디바이스 프레임을 추가하고 스타일과 변형을 조정할 수 있습니다." },
      { title: "스마트 정렬", description: "드래그할 때 스냅 가이드가 표시됩니다. 방향키로 이동하고 Option 드래그로 복제하며 Shift로 비율을 고정합니다." },
      { title: "현지화 내보내기", description: "각 행의 정확한 픽셀 크기로 PNG 또는 JPEG를 모든 locale에 한 번에 내보내고, App Store Connect, Google Play, 출시용 에셋에 맞게 locale과 행별 폴더로 자동 정리합니다." },
      { title: "App Store Connect 업로드", description: "디스플레이 유형 감지, locale 매칭, 사전 검사를 거쳐 App Store Connect에 원클릭 업로드합니다." },
      { title: "AI 에이전트와 MCP", description: "Mac에서 선택적으로 켜는 로컬 MCP 서버를 통해 Claude Code, Claude Desktop, Cursor가 프로젝트 생성, 행과 도형 배치, 스크린샷 가져오기, 번역, 미리보기 렌더링, 내보내기를 대신 수행합니다." },
      { title: "내장 현지화", description: "81개 언어 프리셋, 온디바이스 자동 번역, 도형별 텍스트·위치·이미지 재정의를 지원합니다." },
      { title: "Mac, iPad 및 iPhone 네이티브", description: "Swift와 SwiftUI로 제작되었습니다. Electron이나 브라우저 탭 없이 빠르게 실행되고 자동 저장을 지원합니다." },
      { title: "iCloud 동기화", description: "선택형 iCloud Drive 동기화로 Mac, iPad, iPhone에서 프로젝트를 사용할 수 있습니다." },
      { title: "사용자 지정 폰트", description: ".ttf, .otf, .ttc 파일을 가져와 텍스트 도형에서 원하는 서체를 사용할 수 있습니다." },
      { title: "프로젝트 템플릿", description: "레이아웃, 디바이스 프레임, 배경이 미리 설정된 내장 템플릿으로 바로 시작하세요." },
      { title: "키보드 단축키", description: "이동, 복제, 잘라내기/복사/붙여넣기, 레이어 순서, 줌, locale 전환, 선택을 키보드로 처리합니다." },
      { title: "개인정보 우선", description: "자동 번역은 Apple Translation을 통해 기기에서 실행됩니다. API 키, 서버, 광고 추적이 없습니다." },
      { title: "이미지 일괄 가져오기", description: "스크린샷 폴더를 드롭하면 파일명에서 디바이스 크기를 감지해 행을 일괄로 채웁니다." },
      { title: "영구 무료 플랜", description: "1개 프로젝트, 3개 행, 행당 5개 템플릿, 모든 프레임, 81개 locale, 모든 내보내기 형식. 워터마크와 가입이 없습니다." },
    ]),
    featureShowcases: localizeFeatureShowcases([
      { label: "일괄 가져오기", title: "드래그하고 놓으면 끝.", description: "여러 스크린샷을 한 번에 드롭하면 Screenshot Bro가 가져와 각각을 디바이스 프레임에 자동으로 배치합니다.", mediaAlt: "여러 스크린샷이 자동으로 디바이스 프레임에 들어가는 모습" },
      { label: "자동 업로드", title: "App Store Connect에 원클릭 업로드.", description: "API 키를 한 번 연결하면 올바른 앱, 버전, 디스플레이 유형, locale로 스크린샷을 보냅니다.", mediaAlt: "Screenshot Bro에서 App Store Connect로 스크린샷 업로드" },
      { label: "도형과 레이어", title: "레이어별로 완성하세요.", description: "도형, 텍스트, 이미지, SVG를 추가하고 크기, 회전, 색상, 그라디언트, 외곽선을 조정합니다.", mediaAlt: "캔버스에서 도형을 편집하는 모습" },
      { label: "배경", title: "멋진 배경 만들기.", description: "프리셋, 사용자 지정 그라디언트, 이미지를 사용하고 여러 템플릿에 걸친 배경을 만들 수 있습니다.", mediaAlt: "그라디언트와 확장 배경을 전환하는 모습" },
      { label: "디바이스 프레임", title: "프레임을 맞춤 설정.", description: "iPhone, iPad, MacBook, iMac, Android를 선택하고 색상을 바꿔 브랜드에 맞춥니다.", mediaAlt: "앱 스크린샷 주변의 디바이스 프레임을 선택하고 조정" },
      { label: "AI 에이전트와 MCP", title: "번거로운 작업은 AI 에이전트에게 맡기세요.", description: "로컬 MCP 서버를 켜면 Claude Code, Claude Desktop, Cursor가 Screenshot Bro를 직접 다룹니다. 프로젝트 생성, 행과 도형 배치, 스크린샷 가져오기, 텍스트 번역, 렌더링된 미리보기 확인, 내보내기, App Store Connect 동기화까지 처리합니다. 127.0.0.1에서만 수신하고 설정에서 받은 토큰이 필요하며, 모든 변경은 ⌘Z로 되돌릴 수 있습니다.", mediaAlt: "AI 에이전트가 Screenshot Bro MCP 도구를 호출해 App Store 스크린샷을 만들고 번역하고 렌더링하고 업로드하는 세션" },
    ]),
    workflowSteps: localizeWorkflowSteps([
      { title: "행 설정", description: "iPhone, iPad, Mac, Android 휴대폰과 태블릿 중에서 기기 크기를 선택하세요. 각 크기는 해당 스토어가 요구하는 픽셀로 미리 설정되어 있으며, 행은 필요한 만큼 추가할 수 있습니다." },
      { title: "디자인 및 현지화", description: "프레임, 텍스트, 도형, 배경을 추가하고 locale과 텍스트 재정의를 조정합니다." },
      { title: "모두 내보내기", description: "내보내기를 누르면 locale과 행별로 정리된 폴더에 모든 스크린샷이 스토어가 요구하는 정확한 크기로 담깁니다. 클릭 한 번이면 끝." },
      { title: "App Store Connect 업로드", description: "API 키를 연결하고 올바른 앱, 버전, 디스플레이 유형, locale로 스크린샷을 보냅니다." },
    ]),
  },
  uk: compactLandingContent("uk", {
    socialImageAlt: "Screenshot Bro — нативний додаток для Mac, iPad та iPhone для дизайну скриншотів App Store і Google Play з рамками пристроїв, градієнтами та локалізацією",
    ui: { docs: "Документація", redditCommunity: "Спільнота в Reddit", followOnX: "Стежити в X", followOnThreads: "Стежити в Threads", homeLabel: `${SITE_NAME} Головна`, read: "Читати", productLabel: "Продукт", resourcesLabel: "Ресурси", productHuntAlt: "ScreenshotBro App - Створюйте та експортуйте красиві скриншоти для App Store. | Product Hunt" },
    featureTitles: ["Мульти-шаблонне редагування", "Рамки пристроїв", "Фони та розтягування", "Інструменти фігур + SVG", "Розумне вирівнювання", "Локалізований експорт", "Завантаження в App Store Connect", "ШІ-агенти та MCP", "Вбудована локалізація", "Нативно для Mac, iPad та iPhone", "Синхронізація iCloud", "Власні шрифти", "Шаблони проектів", "Гарячі клавіші", "Конфіденційність понад усе", "Пакетний імпорт зображень", "Назавжди безкоштовний тариф"],
    featureDescription: "Спеціалізовані інструменти для багатомовних скриншотів магазинів із нативною швидкістю, шаблонами для повторного використання та експортом, готовим до завантаження.",
    showcaseLabels: ["Пакетний імпорт", "Автозавантаження", "Фігури та шари", "Фони", "Рамки пристроїв", "ШІ-агенти та MCP"],
    showcaseTitles: ["Перетягніть, відпустіть — готово.", "Завантажуйте в App Store Connect в один клік.", "Створюйте шар за шаром.", "Створюйте красиві фони.", "Налаштовуйте рамки пристроїв.", "Доручіть рутину своєму ШІ-агенту."],
    showcaseDescription: "Основний робочий процес показує, як Screenshot Bro усуває повторювану рутину під час дизайну, експорту та завантаження.",
    screenshotAltSuffix: "скриншот інтерфейсу Screenshot Bro",
    workflowTitles: ["Налаштуйте рядки", "Створюйте дизайн і локалізуйте", "Експортуйте все", "Завантажуйте в App Store Connect"],
    workflowDescription: "Від розмірів пристроїв до багатомовного експорту та завантаження — увесь робочий процес залишається в одному нативному додатку.",
  }),
  pl: compactLandingContent("pl", {
    socialImageAlt: "Screenshot Bro — natywna aplikacja na Maca, iPada i iPhone'a do projektowania zrzutów ekranu dla App Store i Google Play z ramkami urządzeń, gradientami i lokalizacją",
    ui: { docs: "Dokumentacja", redditCommunity: "Społeczność Reddit", followOnX: "Obserwuj na X", followOnThreads: "Obserwuj na Threads", homeLabel: `${SITE_NAME} Strona główna`, read: "Czytaj", productLabel: "Produkt", resourcesLabel: "Zasoby", productHuntAlt: "ScreenshotBro App - Projektuj i eksportuj piękne zrzuty ekranu dla App Store. | Product Hunt" },
    featureTitles: ["Edycja wielu szablonów", "Ramki urządzeń", "Tła i rozciąganie", "Narzędzia kształtów + SVG", "Inteligentne wyrównanie", "Zlokalizowany eksport", "Przesyłanie do App Store Connect", "Agenci AI i MCP", "Wbudowana lokalizacja", "Natywna na Maca, iPada i iPhone'a", "Synchronizacja iCloud", "Własne czcionki", "Szablony projektów", "Skróty klawiszowe", "Prywatność przede wszystkim", "Masowy import obrazów", "Zawsze darmowy plan"],
    featureDescription: "Dedykowane narzędzia do wielojęzycznych zrzutów ekranu w sklepach z natywną wydajnością, szablonami wielokrotnego użytku i eksportem gotowym do przesłania.",
    showcaseLabels: ["Masowy import", "Automatyczne przesyłanie", "Kształty i warstwy", "Tła", "Ramki urządzeń", "Agenci AI i MCP"],
    showcaseTitles: ["Przeciągnij, upuść, gotowe.", "Przesyłaj do App Store Connect jednym kliknięciem.", "Buduj warstwa po warstwie.", "Twórz atrakcyjne tła.", "Dostosuj ramki urządzeń.", "Zostaw żmudną robotę agentowi AI."],
    showcaseDescription: "Główny przepływ pracy pokazuje, jak Screenshot Bro eliminuje powtarzalne projektowanie, eksport i przesyłanie.",
    screenshotAltSuffix: "zrzut ekranu interfejsu Screenshot Bro",
    workflowTitles: ["Skonfiguruj wiersze", "Zaprojektuj i zlokalizuj", "Wyeksportuj wszystko", "Prześlij do App Store Connect"],
    workflowDescription: "Od rozmiarów urządzeń po wielojęzyczny eksport i przesyłanie — cały proces pozostaje w jednej natywnej aplikacji.",
  }),
  tr: compactLandingContent("tr", {
    socialImageAlt: "Screenshot Bro — Cihaz çerçeveleri, degradeler ve yerelleştirme ile App Store ve Google Play ekran görüntüleri tasarlamak için yerel Mac, iPad ve iPhone uygulaması",
    ui: { docs: "Belgeler", redditCommunity: "Reddit Topluluğu", followOnX: "X'te Takip Et", followOnThreads: "Threads'te Takip Et", homeLabel: `${SITE_NAME} Ana Sayfa`, read: "Oku", productLabel: "Ürün", resourcesLabel: "Kaynaklar", productHuntAlt: "ScreenshotBro App - Harika App Store ekran görüntüleri tasarlayın ve dışa aktarın. | Product Hunt" },
    featureTitles: ["Çoklu Şablon Düzenleme", "Cihaz Çerçeveleri", "Arka Planlar ve Yayma", "Şekil Araçları + SVG", "Akıllı Hizalama", "Yerelleştirilmiş Dışa Aktarma", "App Store Connect'e Yükleme", "Yapay Zeka Ajanları ve MCP", "Yerleşik Yerelleştirme", "Yerel Mac, iPad ve iPhone", "iCloud Eşzamanlama", "Özel Yazı Tipleri", "Proje Şablonları", "Klavye Kısayolları", "Önce Gizlilik", "Toplu Görsel İçe Aktarma", "Kalıcı Ücretsiz Plan"],
    featureDescription: "Yerel performans, yeniden kullanılabilir şablonlar ve yüklemeye hazır dışa aktarmalarla çok dilli mağaza ekran görüntüleri için odaklanmış araçlar.",
    showcaseLabels: ["Toplu İçe Aktarma", "Otomatik Yükleme", "Şekiller ve Katmanlar", "Arka Planlar", "Cihaz Çerçeveleri", "Yapay Zeka Ajanları ve MCP"],
    showcaseTitles: ["Sürükle, bırak, bitti.", "App Store Connect'e tek tıkla yükleyin.", "Katman katman inşa edin.", "Göz alıcı arka planlar oluşturun.", "Cihaz çerçevelerini özelleştirin.", "Angarya işleri yapay zeka ajanınıza bırakın."],
    showcaseDescription: "Temel iş akışı, Screenshot Bro'nun tekrarlayan tasarım, dışa aktarma ve yükleme adımlarını nasıl ortadan kaldırdığını gösterir.",
    screenshotAltSuffix: "Screenshot Bro arayüz ekran görüntüsü",
    workflowTitles: ["Satırları Ayarlayın", "Tasarlayın ve Yerelleştirin", "Hepsini Dışa Aktarın", "App Store Connect'e Yükleyin"],
    workflowDescription: "Cihaz boyutlarından çok dilli dışa aktarma ve yüklemeye kadar tüm ekran görüntüsü iş akışı tek bir yerel uygulamada kalır.",
  }),
  nl: compactLandingContent("nl", {
    socialImageAlt: "Screenshot Bro — native app voor Mac, iPad en iPhone voor het ontwerpen van App Store- en Google Play-screenshots met apparaatframes, verlopen en lokalisatie",
    ui: { docs: "Documentatie", redditCommunity: "Reddit-community", followOnX: "Volg op X", followOnThreads: "Volg op Threads", homeLabel: `${SITE_NAME} Home`, read: "Lees", productLabel: "Product", resourcesLabel: "Bronnen", productHuntAlt: "ScreenshotBro App - Ontwerp en exporteer prachtige App Store-screenshots. | Product Hunt" },
    featureTitles: ["Multi-template bewerking", "Apparaatframes", "Achtergronden & overspanning", "Vormgereedschappen + SVG", "Slimme uitlijning", "Gelokaliseerde export", "Uploaden naar App Store Connect", "AI-agenten & MCP", "Ingebouwde lokalisatie", "Native voor Mac, iPad & iPhone", "iCloud-synchronisatie", "Aangepaste lettertypen", "Projectsjablonen", "Toetscombinaties", "Privacy voorop", "Batch-afbeeldingsimport", "Blijvend gratis plan"],
    featureDescription: "Gerichte tools voor meertalige store-screenshots met native prestaties, herbruikbare sjablonen en exporten klaar voor upload.",
    showcaseLabels: ["Batch-import", "Automatische upload", "Vormen en lagen", "Achtergronden", "Apparaatframes", "AI-agenten & MCP"],
    showcaseTitles: ["Slepen, neerzetten, klaar.", "Upload naar App Store Connect in één klik.", "Bouw laag voor laag op.", "Maak prachtige achtergronden.", "Pas apparaatframes aan.", "Laat je AI-agent het saaie werk doen."],
    showcaseDescription: "De kernworkflow laat zien hoe Screenshot Bro repetitief ontwerp-, export- en uploadwerk elimineert.",
    screenshotAltSuffix: "Screenshot Bro-interface screenshot",
    workflowTitles: ["Rijen instellen", "Ontwerpen & lokaliseren", "Alles exporteren", "Uploaden naar App Store Connect"],
    workflowDescription: "Van apparaatformaten tot meertalige export en upload: de hele workflow blijft in één native app.",
  }),
  id: compactLandingContent("id", {
    socialImageAlt: "Screenshot Bro — aplikasi native Mac, iPad dan iPhone untuk mendesain tangkapan layar App Store dan Google Play dengan bingkai perangkat, gradien, dan lokalisasi",
    ui: { docs: "Dokumentasi", redditCommunity: "Komunitas Reddit", followOnX: "Ikuti di X", followOnThreads: "Ikuti di Threads", homeLabel: `${SITE_NAME} Beranda`, read: "Baca", productLabel: "Produk", resourcesLabel: "Sumber Daya", productHuntAlt: "ScreenshotBro App - Desain dan ekspor tangkapan layar App Store yang indah. | Product Hunt" },
    featureTitles: ["Pengeditan Multi-Template", "Bingkai Perangkat", "Latar Belakang & Rentang", "Alat Bentuk + SVG", "Perataan Cerdas", "Ekspor Terlokalisasi", "Unggah ke App Store Connect", "Agen AI & MCP", "Lokalisasi Bawaan", "Native untuk Mac, iPad & iPhone", "Sinkronisasi iCloud", "Font Khusus", "Template Proyek", "Pintasan Papan Ketik", "Privasi Utama", "Impor Gambar Massal", "Paket Gratis Selamanya"],
    featureDescription: "Alat terfokus untuk tangkapan layar toko multibahasa dengan performa native, template yang dapat digunakan kembali, dan ekspor siap unggah.",
    showcaseLabels: ["Impor Massal", "Unggah Otomatis", "Bentuk & Lapisan", "Latar Belakang", "Bingkai Perangkat", "Agen AI & MCP"],
    showcaseTitles: ["Tarik, lepas, selesai.", "Unggah ke App Store Connect dalam satu klik.", "Bangun lapis demi lapis.", "Buat latar belakang menarik.", "Sesuaikan bingkai perangkat.", "Serahkan pekerjaan rutin ke agen AI Anda."],
    showcaseDescription: "Alur kerja inti menunjukkan bagaimana Screenshot Bro menghilangkan pekerjaan desain, ekspor, dan unggah yang berulang.",
    screenshotAltSuffix: "tangkapan layar antarmuka Screenshot Bro",
    workflowTitles: ["Atur Baris", "Desain & Lokalisasi", "Ekspor Semua", "Unggah ke App Store Connect"],
    workflowDescription: "Dari ukuran perangkat hingga ekspor multibahasa dan pengunggahan, seluruh alur kerja tetap berada dalam satu aplikasi native.",
  }),
  vi: compactLandingContent("vi", {
    socialImageAlt: "Screenshot Bro — ứng dụng native trên Mac, iPad và iPhone để thiết kế ảnh chụp màn hình App Store và Google Play với khung thiết bị, gradient và bản địa hóa",
    ui: { docs: "Tài liệu", redditCommunity: "Cộng đồng Reddit", followOnX: "Theo dõi trên X", followOnThreads: "Theo dõi trên Threads", homeLabel: `${SITE_NAME} Trang chủ`, read: "Đọc", productLabel: "Sản phẩm", resourcesLabel: "Tài nguyên", productHuntAlt: "ScreenshotBro App - Thiết kế và xuất ảnh chụp màn hình App Store tuyệt đẹp. | Product Hunt" },
    featureTitles: ["Chỉnh sửa đa mẫu", "Khung thiết bị", "Hình nền & trải rộng", "Công cụ hình dạng + SVG", "Căn chỉnh thông minh", "Xuất bản địa hóa", "Tải lên App Store Connect", "AI Agent & MCP", "Bản địa hóa tích hợp", "Native cho Mac, iPad & iPhone", "Đồng bộ iCloud", "Phông chữ tùy chỉnh", "Mẫu dự án", "Phím tắt", "Bảo mật hàng đầu", "Nhập ảnh hàng loạt", "Gói miễn phí vĩnh viễn"],
    featureDescription: "Công cụ chuyên dụng cho ảnh chụp màn hình ứng dụng đa ngôn ngữ với hiệu năng native, mẫu tái sử dụng và xuất file sẵn sàng tải lên.",
    showcaseLabels: ["Nhập hàng loạt", "Tải lên tự động", "Hình dạng & lớp", "Hình nền", "Khung thiết bị", "AI Agent & MCP"],
    showcaseTitles: ["Kéo, thả, xong.", "Tải lên App Store Connect chỉ với một cú nhấp.", "Xây dựng từng lớp.", "Tạo hình nền ấn tượng.", "Tùy chỉnh khung thiết bị.", "Để AI agent lo những việc lặp đi lặp lại."],
    showcaseDescription: "Quy trình làm việc cốt lõi cho thấy Screenshot Bro giúp loại bỏ các bước thiết kế, xuất file và tải lên lặp đi lặp lại như thế nào.",
    screenshotAltSuffix: "ảnh chụp giao diện Screenshot Bro",
    workflowTitles: ["Thiết lập hàng", "Thiết kế & bản địa hóa", "Xuất tất cả", "Tải lên App Store Connect"],
    workflowDescription: "Từ kích thước thiết bị đến xuất đa ngôn ngữ và tải lên — toàn bộ quy trình làm việc đều nằm trong một ứng dụng native duy nhất.",
  }),
  th: compactLandingContent("th", {
    socialImageAlt: "Screenshot Bro — แอปเนทีฟบน Mac, iPad และ iPhone สำหรับออกแบบภาพสกรีนช็อต App Store และ Google Play พร้อมกรอบอุปกรณ์ การไล่ระดับสี และการแปลภาษา",
    ui: { docs: "เอกสารประกอบ", redditCommunity: "ชุมชน Reddit", followOnX: "ติดตามบน X", followOnThreads: "ติดตามบน Threads", homeLabel: `${SITE_NAME} หน้าแรก`, read: "อ่าน", productLabel: "ผลิตภัณฑ์", resourcesLabel: "แหล่งข้อมูล", productHuntAlt: "ScreenshotBro App - ออกแบบและส่งออกภาพสกรีนช็อต App Store ที่สวยงาม | Product Hunt" },
    featureTitles: ["แก้ไขหลายเทมเพลตพร้อมกัน", "กรอบอุปกรณ์", "พื้นหลังและการขยายข้ามหน้า", "เครื่องมือรูปทรง + SVG", "การจัดตำแหน่งอัจฉริยะ", "การส่งออกตามภาษา", "อัปโหลดไปยัง App Store Connect", "AI Agent และ MCP", "การแปลภาษาในตัว", "เนทีฟสำหรับ Mac, iPad และ iPhone", "การซิงค์ iCloud", "ฟอนต์แบบกำหนดเอง", "เทมเพลตโปรเจกต์", "คีย์ลัดบนแป้นพิมพ์", "เน้นความเป็นส่วนตัว", "นำเข้ารูปภาพเป็นชุด", "แผนฟรีตลอดไป"],
    featureDescription: "เครื่องมือเฉพาะทางสำหรับสกรีนช็อตหลายภาษา พร้อมประสิทธิภาพเนทีฟ เทมเพลตที่ใช้ซ้ำได้ และการส่งออกที่พร้อมอัปโหลดทันที",
    showcaseLabels: ["นำเข้าเป็นชุด", "อัปโหลดอัตโนมัติ", "รูปทรงและเลเยอร์", "พื้นหลัง", "กรอบอุปกรณ์", "AI Agent และ MCP"],
    showcaseTitles: ["ลาก วาง เรียบร้อย", "อัปโหลดไปยัง App Store Connect ในคลิกเดียว", "สร้างทีละเลเยอร์", "สร้างพื้นหลังที่สวยงาม", "ปรับแต่งกรอบอุปกรณ์", "ให้ AI Agent จัดการงานจุกจิกแทนคุณ"],
    showcaseDescription: "ขั้นตอนการทำงานหลักแสดงให้เห็นว่า Screenshot Bro ช่วยลดขั้นตอนการออกแบบ การส่งออก และการอัปโหลดที่ซ้ำซ้อนได้อย่างไร",
    screenshotAltSuffix: "ภาพหน้าจออินเทอร์เฟซ Screenshot Bro",
    workflowTitles: ["ตั้งค่าแถว", "ออกแบบและแปลภาษา", "ส่งออกทั้งหมด", "อัปโหลดไปยัง App Store Connect"],
    workflowDescription: "ตั้งแต่ขนาดอุปกรณ์ไปจนถึงการส่งออกหลายภาษาและการอัปโหลด ทุกขั้นตอนทำได้ในแอปเนทีฟเดียว",
  }),
  sv: compactLandingContent("sv", {
    socialImageAlt: "Screenshot Bro — nativ Mac-, iPad- och iPhone-app för att designa skärmdumpar för App Store och Google Play med enhetsramar, gradienter och lokalisering",
    ui: { docs: "Dokumentation", redditCommunity: "Reddit-community", followOnX: "Följ på X", followOnThreads: "Följ på Threads", homeLabel: `${SITE_NAME} Hem`, read: "Läs", productLabel: "Produkt", resourcesLabel: "Resurser", productHuntAlt: "ScreenshotBro App - Designa och exportera vackra App Store-skärmdumpar. | Product Hunt" },
    featureTitles: ["Redigering av flera mallar", "Enhetsramar", "Bakgrunder & spännvidd", "Formverktyg + SVG", "Smart justering", "Lokaliserad export", "Uppladdning till App Store Connect", "AI-agenter & MCP", "Inbyggd lokalisering", "Nativt för Mac, iPad & iPhone", "iCloud-synkronisering", "Anpassade typsnitt", "Projektmallar", "Kortkommandon", "Integritet först", "Batchimport av bilder", "Permanent gratisplan"],
    featureDescription: "Fokuserade verktyg för flerspråkiga butiksskärmdumpar med nativ prestanda, återanvändbara mallar och uppladdningsklara exporter.",
    showcaseLabels: ["Batchimport", "Automatisk uppladdning", "Former och lager", "Bakgrunder", "Enhetsramar", "AI-agenter & MCP"],
    showcaseTitles: ["Dra, släpp, klart.", "Ladda upp till App Store Connect med ett klick.", "Bygg lager för lager.", "Skapa snygga bakgrunder.", "Anpassa enhetsramar.", "Låt din AI-agent sköta grovjobbet."],
    showcaseDescription: "Kärnarbetsflödet visar hur Screenshot Bro eliminerar repetitivt design-, export- och uppladdningsarbete.",
    screenshotAltSuffix: "Screenshot Bro-gränssnittsskärmdump",
    workflowTitles: ["Ställ in rader", "Designa & lokalisera", "Exportera allt", "Ladda upp till App Store Connect"],
    workflowDescription: "Från enhetsstorlekar till flerspråkig export och uppladdning — hela arbetsflödet ryms i en enda nativ app.",
  }),
  da: compactLandingContent("da", {
    socialImageAlt: "Screenshot Bro — nativ Mac-, iPad- og iPhone-app til at designe App Store- og Google Play-skærmbilleder med enhedsrammer, gradueringer og lokalisering",
    ui: { docs: "Dokumentation", redditCommunity: "Reddit-fællesskab", followOnX: "Følg på X", followOnThreads: "Følg på Threads", homeLabel: `${SITE_NAME} Hjem`, read: "Læs", productLabel: "Produkt", resourcesLabel: "Ressourcer", productHuntAlt: "ScreenshotBro App - Design og eksportér smukke App Store-skærmbilleder. | Product Hunt" },
    featureTitles: ["Multi-skabelon redigering", "Enhedsrammer", "Baggrunde & spændvidde", "Formværktøjer + SVG", "Smart justering", "Lokaliseret eksport", "Upload til App Store Connect", "AI-agenter & MCP", "Indbygget lokalisering", "Nativ til Mac, iPad & iPhone", "iCloud-synkronisering", "Brugerdefinerede skrifttyper", "Projektskabeloner", "Tastaturgenveje", "Privatliv først", "Batch-import af billeder", "Permanent gratis plan"],
    featureDescription: "Fokuserede værktøjer til flersprogede butiksskærmbilleder med nativ ydeevne, genanvendelige skabeloner og upload-klare eksporter.",
    showcaseLabels: ["Batch-import", "Automatisk upload", "Former og lag", "Baggrunde", "Enhedsrammer", "AI-agenter & MCP"],
    showcaseTitles: ["Træk, slip, færdig.", "Upload til App Store Connect med ét klik.", "Byg lag for lag.", "Skab flotte baggrunde.", "Tilpas enhedsrammer.", "Lad din AI-agent klare det trivielle arbejde."],
    showcaseDescription: "Det centrale arbejdsflow viser, hvordan Screenshot Bro fjerner gentagne design-, eksport- og upload-opgaver.",
    screenshotAltSuffix: "Screenshot Bro brugerflade-skærmbillede",
    workflowTitles: ["Opsæt rækker", "Design & lokaliser", "Eksportér alt", "Upload til App Store Connect"],
    workflowDescription: "Fra enhedsstørrelser til flersproget eksport og upload — hele arbejdsgangen samlet i én nativ app.",
  }),
  fi: compactLandingContent("fi", {
    socialImageAlt: "Screenshot Bro — natiivi Mac-, iPad- ja iPhone-sovellus App Store- ja Google Play -kuvakaappausten suunnitteluun laitekehyksillä, liukuväreillä ja lokalisoinnilla",
    ui: { docs: "Dokumentaatio", redditCommunity: "Reddit-yhteisö", followOnX: "Seuraa X:ssä", followOnThreads: "Seuraa Threadsissä", homeLabel: `${SITE_NAME} Etusivu`, read: "Lue", productLabel: "Tuote", resourcesLabel: "Resurssit", productHuntAlt: "ScreenshotBro App - Suunnittele ja vie upeita App Store -kuvakaappauksia. | Product Hunt" },
    featureTitles: ["Usean mallin muokkaus", "Laitekehykset", "Taustat & kattavuus", "Muototyökalut + SVG", "Älykäs kohdistus", "Lokalisoitu vienti", "Lataus App Store Connectiin", "Tekoälyagentit & MCP", "Sisäänrakennettu lokalisointi", "Natiivi Macille, iPadille ja iPhonelle", "iCloud-synkronointi", "Mukautetut fontit", "Projektimallit", "Pikanäppäimet", "Yksityisyys edellä", "Kuvien erätuonti", "Pysyvästi ilmainen versio"],
    featureDescription: "Täsmälliset työkalut monikielisiin sovelluskaupan kuvakaappauksiin natiivilla suorituskyvyllä, uudelleenkäytettävillä malleilla ja latausvalmiilla viennillä.",
    showcaseLabels: ["Erätuonti", "Automaattinen lataus", "Muodot ja tasot", "Taustat", "Laitekehykset", "Tekoälyagentit & MCP"],
    showcaseTitles: ["Vedä, pudota, valmis.", "Lataa App Store Connectiin yhdellä napsautuksella.", "Rakenna taso tasolta.", "Luo upeita taustoja.", "Mukauta laitekehyksiä.", "Anna tekoälyagentin hoitaa rutiinityöt."],
    showcaseDescription: "Ydintyönkulku näyttää, miten Screenshot Bro poistaa toistuvat suunnittelu-, vienti- ja latausvaiheet.",
    screenshotAltSuffix: "Screenshot Bro -käyttöliittymän kuvakaappaus",
    workflowTitles: ["Määritä rivit", "Suunnittele ja lokalisoi", "Vie kaikki", "Lataa App Store Connectiin"],
    workflowDescription: "Laitteiden koosta monikieliseen vientiin ja lataukseen — koko työnkulku yhdessä natiivisovelluksessa.",
  }),
  no: compactLandingContent("no", {
    socialImageAlt: "Screenshot Bro — nativ Mac-, iPad- og iPhone-app for å designe App Store- og Google Play-skjermbilder med enhetsrammer, gradienter og lokalisering",
    ui: { docs: "Dokumentasjon", redditCommunity: "Reddit-fellesskap", followOnX: "Følg på X", followOnThreads: "Følg på Threads", homeLabel: `${SITE_NAME} Hjem`, read: "Les", productLabel: "Produkt", resourcesLabel: "Ressourcer", productHuntAlt: "ScreenshotBro App - Design og eksporter flotte App Store-skjermbilder. | Product Hunt" },
    featureTitles: ["Redigering av flere maler", "Enhetsrammer", "Bakgrunner & spennvidde", "Formverktøy + SVG", "Smart justering", "Lokalisert eksport", "Opplasting til App Store Connect", "AI-agenter & MCP", "Innebygd lokalisering", "Nativt for Mac, iPad & iPhone", "iCloud-synkronisering", "Egendefinerte fonter", "Prosjektmaler", "Tastatursnarveier", "Personvern først", "Batch-import av bilder", "Permanent gratisplan"],
    featureDescription: "Målrettede verktøy for flerspråklige butikkskjermbilder med nativ ytelse, gjenbrukbare maler og eksport klare for opplasting.",
    showcaseLabels: ["Batch-import", "Automatisk opplasting", "Former og lag", "Bakgrunner", "Enhetsrammer", "AI-agenter & MCP"],
    showcaseTitles: ["Dra, slipp, ferdig.", "Last opp til App Store Connect med ett klikk.", "Bygg lag for lag.", "Lag flotte bakgrunner.", "Tilpass enhetsrammer.", "La AI-agenten ta seg av rutinearbeidet."],
    showcaseDescription: "Det sentrale arbeidsflyten viser hvordan Screenshot Bro fjerner repetitivt design-, eksport- og opplastingsarbeid.",
    screenshotAltSuffix: "Screenshot Bro-grensesnittskjermbilde",
    workflowTitles: ["Sett opp rader", "Design & lokaliser", "Eksporter alt", "Last opp til App Store Connect"],
    workflowDescription: "Fra enhetsstørrelser til flerspråklig eksport og opplasting — hele arbeidsflyten i én enkelt nativ app.",
  }),
  cs: compactLandingContent("cs", {
    socialImageAlt: "Screenshot Bro — nativní aplikace pro Mac, iPad a iPhone k navrhování snímků obrazovky pro App Store a Google Play s rámečky zařízení, přechody a lokalizací",
    ui: { docs: "Dokumentace", redditCommunity: "Komunita Reddit", followOnX: "Sledovat na X", followOnThreads: "Sledovat na Threads", homeLabel: `${SITE_NAME} Domů`, read: "Číst", productLabel: "Produkt", resourcesLabel: "Zdroje", productHuntAlt: "ScreenshotBro App - Navrhujte a exportujte krásné snímky obrazovky pro App Store. | Product Hunt" },
    featureTitles: ["Úprava více šablon", "Rámečky zařízení", "Pozadí a prolínání", "Nástroje tvarů + SVG", "Chytré zarovnání", "Lokalizovaný export", "Nahrávání do App Store Connect", "AI agenti & MCP", "Vestavěná lokalizace", "Nativní pro Mac, iPad & iPhone", "Synchronizace přes iCloud", "Vlastní písma", "Projektové šablony", "Klávesové zkratky", "Důraz na soukromí", "Dávkový import obrázků", "Trvale bezplatný plán"],
    featureDescription: "Cílené nástroje pro vícejazyčné snímky obrazovky s nativním výkonem, znovupoužitelnými šablonami a exportem připraveným k nahrání.",
    showcaseLabels: ["Dávkový import", "Automatické nahrávání", "Tvary a vrstvy", "Pozadí", "Rámečky zařízení", "AI agenti & MCP"],
    showcaseTitles: ["Přetáhněte, pusťte, hotovo.", "Nahrávání do App Store Connect jedním kliknutím.", "Stavějte vrstvu po vrstvě.", "Vytvářejte působivá pozadí.", "Přizpůsobte rámečky zařízení.", "Nechte otravnou práci na svém AI agentovi."],
    showcaseDescription: "Základní pracovní postup ukazuje, jak Screenshot Bro odstraňuje opakující se návrhové, exportní a nahrávací kroky.",
    screenshotAltSuffix: "Snímek rozhraní aplikace Screenshot Bro",
    workflowTitles: ["Nastavení řádků", "Návrh a lokalizace", "Export všeho", "Nahrání do App Store Connect"],
    workflowDescription: "Od velikostí zařízení po vícejazyčný export a nahrávání — celý pracovní postup v jediné nativní aplikaci.",
  }),
  ro: compactLandingContent("ro", {
    socialImageAlt: "Screenshot Bro — aplicație nativă pentru Mac, iPad și iPhone pentru proiectarea capturilor de ecran pentru App Store și Google Play cu rame de dispozitive, degradeuri și localizare",
    ui: { docs: "Documentație", redditCommunity: "Comunitate Reddit", followOnX: "Urmărește pe X", followOnThreads: "Urmărește pe Threads", homeLabel: `${SITE_NAME} Acasă`, read: "Citește", productLabel: "Produs", resourcesLabel: "Resurse", productHuntAlt: "ScreenshotBro App - Proiectează și exportă capturi de ecran superbe pentru App Store. | Product Hunt" },
    featureTitles: ["Editare multi-șablon", "Rame de dispozitive", "Fundaluri & extindere", "Instrumente de forme + SVG", "Aliniere inteligentă", "Export localizat", "Încărcare în App Store Connect", "Agenți AI & MCP", "Localizare integrată", "Nativ pentru Mac, iPad & iPhone", "Sincronizare iCloud", "Fonturi personalizate", "Șabloane de proiect", "Scurtături de tastatură", "Confidențialitate prioritară", "Import în masă al imaginilor", "Plan gratuit permanent"],
    featureDescription: "Instrumente dedicate pentru capturi de ecran multilingve, cu performanță nativă, șabloane reutilizabile și exporturi gata de încărcare.",
    showcaseLabels: ["Import în masă", "Încărcare automată", "Forme și straturi", "Fundaluri", "Rame de dispozitive", "Agenți AI & MCP"],
    showcaseTitles: ["Trage, plasează, gata.", "Încărcare în App Store Connect cu un singur clic.", "Construiește strat cu strat.", "Creează fundaluri impresionante.", "Personalizează ramele dispozitivelor.", "Lasă agentul AI să se ocupe de munca repetitivă."],
    showcaseDescription: "Fluxul de lucru de bază arată cum Screenshot Bro elimină pașii repetitivi de design, export și încărcare.",
    screenshotAltSuffix: "Captură de ecran din interfața Screenshot Bro",
    workflowTitles: ["Configurează rândurile", "Proiectează și localizează", "Exportă tot", "Încarcă în App Store Connect"],
    workflowDescription: "De la dimensiunile dispozitivelor până la exportul multilingv și încărcare — întregul flux de lucru într-o singură aplicație nativă.",
  }),
  ms: compactLandingContent("ms", {
    socialImageAlt: "Screenshot Bro — aplikasi natif Mac, iPad dan iPhone untuk mereka bentuk tangkapan skrin App Store dan Google Play dengan bingkai peranti, kecerunan dan penyetempatan",
    ui: { docs: "Dokumentasi", redditCommunity: "Komuniti Reddit", followOnX: "Ikuti di X", followOnThreads: "Ikuti di Threads", homeLabel: `${SITE_NAME} Utama`, read: "Baca", productLabel: "Produk", resourcesLabel: "Sumber", productHuntAlt: "ScreenshotBro App - Reka dan eksport tangkapan skrin App Store yang cantik. | Product Hunt" },
    featureTitles: ["Penyuntingan pelbagai templat", "Bingkai peranti", "Latar belakang & rentangan", "Alat bentuk + SVG", "Penjajaran pintar", "Eksport setempat", "Muat naik ke App Store Connect", "Ejen AI & MCP", "Penyetempatan terbina dalam", "Natif untuk Mac, iPad & iPhone", "Penyelarasan iCloud", "Fon tersuai", "Templat projek", "Pintasan papan kekunci", "Privasi diutamakan", "Import imej secara pukal", "Pelan percuma selamanya"],
    featureDescription: "Alat khusus untuk tangkapan skrin gedung berbilang bahasa dengan prestasi natif, templat boleh guna semula dan eksport sedia dimuat naik.",
    showcaseLabels: ["Import pukal", "Muat naik automatik", "Bentuk dan lapisan", "Latar belakang", "Bingkai peranti", "Ejen AI & MCP"],
    showcaseTitles: ["Tarik, lepas, siap.", "Muat naik ke App Store Connect dengan satu klik.", "Bina lapisan demi lapisan.", "Cipta latar belakang yang menakjubkan.", "Sesuaikan bingkai peranti.", "Biar ejen AI anda uruskan kerja yang remeh."],
    showcaseDescription: "Aliran kerja utama menunjukkan bagaimana Screenshot Bro menghapuskan tugas reka bentuk, eksport dan muat naik yang berulang.",
    screenshotAltSuffix: "Tangkapan skrin antara muka Screenshot Bro",
    workflowTitles: ["Sediakan baris", "Reka & setempatkan", "Eksport semua", "Muat naik ke App Store Connect"],
    workflowDescription: "Daripada saiz peranti hingga eksport pelbagai bahasa dan muat naik — seluruh aliran kerja dalam satu aplikasi natif.",
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
          "Sí. Arrastra una carpeta de capturas y Screenshot Bro dirigirá cada una a la fila correcta según su tamaño en píxeles: las de iPhone a la fila de iPhone, iPad a iPad y Android a Android.",
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
      directDownload: "¿Prefieres la descarga directa? Consigue el DMG para Mac",
      browseGuides: "Ver todas las guías",
      submitApp: "Envía tu app",
      contactDeveloper: "Contactar al desarrollador",
      backToTop: "Volver arriba",
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
    },
    download: {
      titleLine1: "Listo para publicar",
      titleLine2: "mejores capturas?",
      description:
        "Descárgalo desde la App Store y usa el flujo completo en Mac, iPad o iPhone: configuración, diseño, traducción automática, localización y exportación.",
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
          "可以。直接拖入包含截图的文件夹，Screenshot Bro 会根据像素尺寸自动将每张截图分配到正确的行——iPhone 截图进 iPhone 行，iPad 进 iPad 行，Android 进 Android 行。",
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
      directDownload: "想直接下载？获取 Mac 版 DMG",
      browseGuides: "浏览所有指南",
      submitApp: "提交你的 App",
      contactDeveloper: "联系开发者",
      backToTop: "返回顶部",
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
    },
    download: {
      titleLine1: "准备发布",
      titleLine2: "更好的截图？",
      description:
        "从 App Store 下载，并在 Mac、iPad 或 iPhone 上使用完整截图流程：设置、设计、自动翻译、本地化和导出。",
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
          "हाँ। स्क्रीनशॉट का एक फ़ोल्डर ड्रॉप करें और Screenshot Bro प्रत्येक को उसके पिक्सेल आकार के अनुसार सही पंक्ति में भेजता है — iPhone शॉट्स iPhone पंक्ति में, iPad शॉट्स iPad में, Android शॉट्स Android में।",
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
      directDownload: "सीधा डाउनलोड चाहिए? Mac DMG पाएं",
      browseGuides: "सभी गाइड देखें",
      submitApp: "अपना ऐप भेजें",
      contactDeveloper: "डेवलपर से संपर्क करें",
      backToTop: "ऊपर जाएं",
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
    },
    download: {
      titleLine1: "बेहतर screenshots",
      titleLine2: "ship करने के लिए तैयार?",
      description:
        "App Store से डाउनलोड करें और Mac, iPad या iPhone पर setup, design, auto-translation, localization और export का पूरा workflow इस्तेमाल करें।",
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
          "Oui. Glissez un dossier de captures et Screenshot Bro achemine chaque fichier vers la bonne rangée selon sa résolution en pixels : les captures iPhone vers la rangée iPhone, iPad vers iPad, Android vers Android.",
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
      directDownload: "Vous préférez un téléchargement direct ? Récupérez le DMG pour Mac",
      browseGuides: "Voir tous les guides",
      submitApp: "Proposer votre app",
      contactDeveloper: "Contacter le développeur",
      backToTop: "Retour en haut",
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
    },
    download: {
      titleLine1: "Prêt à publier",
      titleLine2: "de meilleures captures?",
      description:
        "Téléchargez depuis l'App Store et utilisez le flux complet sur Mac, iPad ou iPhone : configuration, design, traduction automatique, localisation et export.",
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
          "نعم. اسحب مجلد لقطات الشاشة وسيوجه Screenshot Bro كل لقطة إلى الصف المناسب وفقاً لحجم أبعادها بالبكسل — صور iPhone إلى صف iPhone، و iPad إلى iPad، و Android إلى Android.",
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
      directDownload: "تفضّل التنزيل المباشر؟ احصل على ملف DMG لجهاز Mac",
      browseGuides: "تصفح كل الأدلة",
      submitApp: "أرسل تطبيقك",
      contactDeveloper: "تواصل مع المطور",
      backToTop: "العودة للأعلى",
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
    },
    download: {
      titleLine1: "جاهز لإطلاق",
      titleLine2: "لقطات أفضل؟",
      description:
        "نزّله من App Store واستخدم سير العمل الكامل على Mac أو iPad أو iPhone: الإعداد، التصميم، الترجمة التلقائية، التوطين والتصدير.",
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
          "Ja. Ziehen Sie einfach einen Ordner mit Screenshots hinein: Screenshot Bro ordnet jedes Bild anhand seiner Pixelgröße automatisch der richtigen Zeile zu — iPhone-Bilder in die iPhone-Zeile, iPad zu iPad und Android zu Android.",
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
      directDownload: "Lieber direkt herunterladen? Hol dir die DMG für den Mac",
      browseGuides: "Alle Anleitungen durchsuchen",
      submitApp: "App einreichen",
      contactDeveloper: "Entwickler kontaktieren",
      backToTop: "Zurück nach oben",
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
    },
    download: {
      titleLine1: "Bereit für",
      titleLine2: "bessere Screenshots?",
      description:
        "Lade die App aus dem App Store herunter und nutze den gesamten Workflow auf Mac, iPad oder iPhone: Einrichtung, Design, automatische Übersetzung, Lokalisierung und Export.",
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
      { label: "よくある質問", href: "#faq" },
    ],
    benefits: [
      "Mac・iPad・iPhone向けにApp Storeで配信中",
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
          "はい。スクリーンショットが入ったフォルダをドラッグ＆ドロップするだけで、Screenshot Broがピクセル解像度を自動判別し、適切な行（iPhone用画像はiPhone行、iPad用はiPad行、Android用はAndroid行）へ振り分けます。",
      },
      {
        question: "App Store Connectに直接アップロードできますか？",
        answer:
          "はい。App Store Connect APIキー（Issuer ID、Key ID、.p8ファイル）を一度設定するだけで、Screenshot Broが各行の適切な表示タイプ（Display Type）を自動検出し、プロジェクトの言語とストアの言語設定をマッチングして既存スクリーンショットを一括更新します。ブラウザ上で1枚ずつドラッグ＆ドロップする手間は不要です。",
      },
      {
        question: "複数デバイス間で同期できますか？",
        answer:
          "はい。任意のiCloud Drive同期を有効にすると、同一のApple AccountでサインインしているすべてのMac、iPad、iPhoneでプロジェクト、スクリーンショット、フォントを自動同期できます。競合が発生した場合はフィールド単位で最新の変更が自動統合されます。",
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
      directDownload: "直接ダウンロードをご希望ですか？Mac版DMGはこちら",
      browseGuides: "すべてのガイドを見る",
      submitApp: "アプリを掲載する",
      contactDeveloper: "開発者に連絡",
      backToTop: "トップへ戻る",
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
    },
    download: {
      titleLine1: "より魅力的なスクリーンショットを",
      titleLine2: "配信しませんか？",
      description:
        "App Storeからダウンロードして、Mac、iPad、iPhoneでセットアップ、デザイン、自動翻訳、ローカライズ、書き出しまでのフルワークフローを体験してください。",
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
          "Sim. Arraste uma pasta de capturas e o Screenshot Bro encaminhará cada uma para a linha correta de acordo com seu tamanho em pixels — imagens de iPhone para a linha do iPhone, iPad para iPad e Android para Android.",
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
      directDownload: "Prefere baixar direto? Baixe o DMG para Mac",
      browseGuides: "Navegar por todos os guias",
      submitApp: "Enviar seu app",
      contactDeveloper: "Contatar desenvolvedor",
      backToTop: "Voltar ao topo",
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
    },
    download: {
      titleLine1: "Pronto para publicar",
      titleLine2: "capturas de tela melhores?",
      description:
        "Baixe na App Store e utilize o fluxo completo no Mac, iPad ou iPhone: configuração, design, tradução automática, localização e exportação.",
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
          "Sì. Trascina una cartella di screenshot e Screenshot Bro smisterà ciascuna immagine nella riga corretta in base alla risoluzione in pixel: le immagini iPhone nella riga iPhone, iPad su iPad e Android su Android.",
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
      directDownload: "Preferisci il download diretto? Scarica il DMG per Mac",
      browseGuides: "Sfoglia tutte le guide",
      submitApp: "Invia la tua app",
      contactDeveloper: "Contatta lo sviluppatore",
      backToTop: "Torna in alto",
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
    },
    download: {
      titleLine1: "Pronto a pubblicare",
      titleLine2: "screenshot migliori?",
      description:
        "Scarica dall'App Store e prova il flusso di lavoro completo su Mac, iPad o iPhone: configurazione, design, traduzione automatica, localizzazione ed esportazione.",
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
          "네. 스크린샷이 담긴 폴더를 드래그하기만 하면 Screenshot Bro가 픽셀 해상도를 인식하여 올바른 행(iPhone 이미지는 iPhone 행, iPad는 iPad 행, Android는 Android 행)으로 자동 배치합니다.",
      },
      {
        question: "앱 내에서 App Store Connect로 바로 업로드할 수 있나요?",
        answer:
          "네. App Store Connect API 키(Issuer ID, Key ID, .p8 파일)를 한 번만 등록해 두면, Screenshot Bro가 각 행에 맞는 올바른 디스플레이 유형(Display Type)을 자동 감지하고 프로젝트 언어와 App Store Connect 현지화 설정을 매칭하여 기존 스크린샷을 한 번에 교체합니다. 브라우저에서 일일이 드래그 앤 드롭할 필요가 없습니다.",
      },
      {
        question: "여러 기기 간에 프로젝트가 동기화되나요?",
        answer:
          "네. 선택적 iCloud Drive 동기화를 사용하면 동일한 Apple 계정으로 로그인된 모든 Mac, iPad, iPhone에서 프로젝트, 스크린샷, 폰트를 동기화하여 사용할 수 있습니다. 충돌 발생 시 필드 단위로 최근 변경 내용이 자동 병합됩니다.",
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
      directDownload: "직접 다운로드를 원하시나요? Mac용 DMG 받기",
      browseGuides: "모든 가이드 둘러보기",
      submitApp: "앱 등록 신청",
      contactDeveloper: "개발자에게 연락하기",
      backToTop: "맨 위로 이동",
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
          "가격, 요구 사항, 개인정보 보호, 그리고 워크플로우가 App Store Connect와 어떻게 연결되는지 정리했습니다.",
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
    },
    download: {
      titleLine1: "더 매력적인 스크린샷을",
      titleLine2: "배포할 준비가 되셨나요?",
      description:
        "App Store에서 다운로드하여 Mac, iPad 또는 iPhone에서 설정, 디자인, 자동 번역, 현지화 및 내보내기까지의 모든 워크플로우를 지금 경험해보세요.",
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
          "Так. Перетягніть папку зі скриншотами, і Screenshot Bro автоматично розподілить кожен знімок у потрібний рядок за його піксельним розміром: скриншоти iPhone — у рядок iPhone, iPad — в iPad, а Android — в Android.",
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
      directDownload: "Хочете завантажити напряму? Отримайте DMG для Mac",
      browseGuides: "Усі посібники",
      submitApp: "Запропонувати додаток",
      contactDeveloper: "Написати розробнику",
      backToTop: "Вгору",
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
    },
    download: {
      titleLine1: "Готові публікувати",
      titleLine2: "кращі скриншоти?",
      description:
        "Завантажте з App Store та використовуйте повний робочий процес на Mac, iPad або iPhone: налаштування, дизайн, автопереклад, локалізація та експорт для App Store і Google Play.",
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
          "Tak. Przeciągnij folder ze zrzutami ekranu, a Screenshot Bro automatycznie przypisze każdy plik do właściwego wiersza na podstawie jego wymiarów w pikselach: zrzuty z iPhone'a do wiersza iPhone, z iPada do iPada, a z Androida do Androida.",
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
      directDownload: "Wolisz pobrać bezpośrednio? Pobierz plik DMG na Maca",
      browseGuides: "Wszystkie poradniki",
      submitApp: "Zgłoś aplikację",
      contactDeveloper: "Napisz do twórcy",
      backToTop: "W górę",
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
    },
    download: {
      titleLine1: "Gotowy na publikację",
      titleLine2: "lepszych zrzutów ekranu?",
      description:
        "Pobierz z App Store i korzystaj z pełnego przepływu pracy na Macu, iPadzie lub iPhonie: konfiguracja, projektowanie, automatyczne tłumaczenie, lokalizacja i eksport dla App Store i Google Play.",
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
      directDownload: "Doğrudan indirmeyi mi tercih edersiniz? Mac için DMG dosyasını alın",
      browseGuides: "Tüm rehberlere göz atın",
      submitApp: "Uygulamanızı gönderin",
      contactDeveloper: "Geliştiriciye ulaşın",
      backToTop: "Yukarı çık",
      availabilityNote: "macOS 15+ ve iOS/iPadOS 18+ uygulaması | Swift ve SwiftUI | App Store'da mevcut",
    },
    hero: {
      titleLead: "Dakikalar İçinde",
      titleAccent: "App Store",
      titleRest: " Ekran Görüntüleri Oluşturun",
      descriptionLead: "Bir kez tasarlayın. 81 dile yerelleştirin, her cihaz boyutunu oluşturun ve",
      descriptionStrong: "doğrudan App Store Connect'e yükleyin",
      descriptionTail: " — hepsi tek bir yerel Mac, iPad ve iPhone uygulamasında.",
    },
    sections: {
      showcases: { eyebrow: "Vitrin", title: "Yüklemeden önce ekran görüntüsü oluşturucunun nasıl çalıştığını görün.", description: "Toplu içe aktarma, tek tıkla App Store Connect yüklemesi, katmanlar ve cihaz çerçeveleri." },
      workflow: { eyebrow: "İş Akışı", title: "Ham görüntülerden App Store'a hazır varlıklara giden en kısa yol.", description: "Tek kullanımlık tasarım dosyaları yığını tutmadan kusursuz ekran görüntüleri oluşturun." },
      features: { eyebrow: "Yetenekler", title: "Bir App Store ekran görüntüsü aracının yapması gereken her şey.", description: "Düzen hızı, tutarlılık ve zahmetsiz dışa aktarma odaklı." },
      blog: { eyebrow: "Blogdan", title: "Daha iyi App Store ekran görüntüleri için rehberler.", description: "Dönüşüm sağlayan ekran görüntüleri tasarlamak için başvuru kaynakları." },
      faq: { eyebrow: "SSS", title: "Denemeden önce en çok sorulan sorular.", description: "Uyumluluk ve temel iş akışı hakkındaki yanıtlar." },
      appShowcase: { eyebrow: "Screenshot Bro ile Yayınlandı", title: "Harika bir topluluktassınız.", description: "Ekran görüntüleri için Screenshot Bro'yu kullanan bağımsız uygulamalar." },
    },
    problem: {
      story: "Metin veya diller her değiştiğinde Figma'da App Store ekran görüntülerini baştan yapmaktan yorulduğum için geliştirdim. Amaç basit: sistemi bir kez kurun, gerisini uygulamaya bırakın.",
    },
    download: {
      titleLine1: "Daha iyi ekran görüntüleri",
      titleLine2: "yayınlamaya hazır mısınız?",
      description: "App Store'dan indirin ve Mac, iPad veya iPhone'da tam iş akışını kullanın: kurulum, tasarım, yerelleştirme ve dışa aktarma.",
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
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Nu beschikbaar in de App Store voor Mac, iPad en iPhone",
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
          "Ja. Optionele synchronisatie via iCloud Drive houdt projecten beschikbaar op al uw Macs, iPads en iPhones.",
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
      directDownload: "Liever direct downloaden? Download de DMG voor Mac",
      browseGuides: "Bekijk alle gidsen",
      submitApp: "App aanmelden",
      contactDeveloper: "Contacteer ontwikkelaar",
      backToTop: "Naar boven",
      availabilityNote: "macOS 15+ en iOS/iPadOS 18+ app | Swift & SwiftUI | Beschikbaar in de App Store",
    },
    hero: {
      titleLead: "Maak & lokaliseer",
      titleAccent: "App Store",
      titleRest: " screenshots in minuten",
      descriptionLead: "Ontwerp één keer. Lokaliseer naar 81 talen, genereer elk apparaatformaat en",
      descriptionStrong: "upload direct naar App Store Connect",
      descriptionTail: " zonder screenshots handmatig opnieuw te maken. Alles in één native app.",
    },
    sections: {
      showcases: { eyebrow: "Voorbeelden", title: "Zie hoe de screenshotgenerator werkt voordat u installeert.", description: "Batch-import, one-click upload naar App Store Connect, lagen en apparaatframes." },
      workflow: { eyebrow: "Werkwijze", title: "Een kortere weg van ruwe beelden naar App Store-klare bestanden.", description: "Gericht op één taak: verzorgde screenshots maken zonder ontwerpmallen te onderhouden." },
      features: { eyebrow: "Mogelijkheden", title: "Alles wat een App Store screenshottool moet doen.", description: "Volledige focus op snelheid, lay-out en soepele export." },
      blog: { eyebrow: "Van de Blog", title: "Gidsen voor betere App Store-screenshots.", description: "Tips en handleidingen voor effectieve screenshots." },
      faq: { eyebrow: "FAQ", title: "Veelgestelde vragen voor het proberen.", description: "Antwoorden op de belangrijkste vragen." },
      appShowcase: { eyebrow: "Gemaakt met Screenshot Bro", title: "In goed gezelschap.", description: "Indie-apps die Screenshot Bro al gebruiken." },
    },
    problem: {
      story: "Gebouwd nadat ik te veel tijd in Figma doorbracht om screenshots opnieuw te maken bij elke tekstwijziging. Ontwerp het systeem één keer en laat de app de rest doen.",
    },
    download: {
      titleLine1: "Klaar om betere",
      titleLine2: "screenshots te publiceren?",
      description: "Download in de App Store en gebruik de complete workflow op Mac, iPad of iPhone.",
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
      directDownload: "Lebih suka unduhan langsung? Dapatkan DMG untuk Mac",
      browseGuides: "Jelajahi panduan",
      submitApp: "Kirim aplikasi",
      contactDeveloper: "Hubungi pengembang",
      backToTop: "Kembali ke atas",
      availabilityNote: "Aplikasi macOS 15+ dan iOS/iPadOS 18+ | Swift & SwiftUI | Tersedia di App Store",
    },
    hero: {
      titleLead: "Buat & Lokalisasikan",
      titleAccent: "App Store",
      titleRest: " Tangkapan Layar dalam Hitungan Menit",
      descriptionLead: "Desain sekali. Lokalisasikan ke 81 bahasa, hasilkan setiap ukuran perangkat, dan",
      descriptionStrong: "unggah langsung ke App Store Connect",
      descriptionTail: " tanpa mendesain ulang secara manual. Semua dalam satu aplikasi native.",
    },
    sections: {
      showcases: { eyebrow: "Pameran", title: "Lihat cara kerja pembuat tangkapan layar sebelum Anda memasangnya.", description: "Impor massal, unggah satu klik ke App Store Connect, lapisan, dan bingkai perangkat." },
      workflow: { eyebrow: "Alur Kerja", title: "Jalur lebih cepat dari tangkapan mentah ke aset siap App Store.", description: "Dibuat untuk satu tujuan: tangkapan layar rapi tanpa tumpukan file desain." },
      features: { eyebrow: "Kemampuan", title: "Semua yang dibutuhkan alat tangkapan layar App Store.", description: "Fokus pada kecepatan tata letak, konsistensi, dan kemudahan ekspor." },
      blog: { eyebrow: "Dari Blog", title: "Panduan untuk membuat tangkapan layar App Store yang lebih baik.", description: "Referensi dan panduan untuk merancang tangkapan layar yang meningkatkan konversi." },
      faq: { eyebrow: "FAQ", title: "Pertanyaan yang paling sering diajukan.", description: "Jawaban atas pertanyaan kompatibilitas dan ekspor." },
      appShowcase: { eyebrow: "Dibuat dengan Screenshot Bro", title: "Bersama aplikasi hebat lainnya.", description: "Aplikasi indie yang sudah menggunakan Screenshot Bro." },
    },
    problem: {
      story: "Saya membuatnya setelah terlalu banyak menghabiskan waktu di Figma mendesain ulang tangkapan layar setiap kali teks atau bahasa berubah. Desain sistemnya sekali, biarkan aplikasi menangani sisanya.",
    },
    download: {
      titleLine1: "Siap merilis tangkapan layar",
      titleLine2: "yang lebih baik?",
      description: "Unduh dari App Store dan gunakan alur kerja lengkap di Mac, iPad, atau iPhone.",
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
      directDownload: "Muốn tải trực tiếp? Tải bản DMG cho Mac",
      browseGuides: "Xem tất cả hướng dẫn",
      submitApp: "Gửi ứng dụng",
      contactDeveloper: "Liên hệ nhà phát triển",
      backToTop: "Lên đầu trang",
      availabilityNote: "Ứng dụng macOS 15+ và iOS/iPadOS 18+ | Swift & SwiftUI | Có sẵn trên App Store",
    },
    hero: {
      titleLead: "Tạo & Bản địa hóa",
      titleAccent: "App Store",
      titleRest: " Ảnh chụp màn hình trong tích tắc",
      descriptionLead: "Thiết kế một lần. Bản địa hóa sang 81 ngôn ngữ, tạo mọi kích thước thiết bị và",
      descriptionStrong: "tải trực tiếp lên App Store Connect",
      descriptionTail: " mà không cần làm lại từng ảnh thủ công. Tất cả trong một ứng dụng native.",
    },
    sections: {
      showcases: { eyebrow: "Trình diễn", title: "Xem cách công cụ hoạt động trước khi cài đặt.", description: "Nhập hàng loạt, tải lên App Store Connect một cú nhấp, các lớp và khung thiết bị." },
      workflow: { eyebrow: "Quy trình", title: "Con đường ngắn nhất từ ảnh thô đến tài nguyên hoàn thiện cho App Store.", description: "Tập trung vào một mục tiêu duy nhất: tạo ảnh chụp màn hình trau chuốt mà không cần quản lý nhiều file thiết kế." },
      features: { eyebrow: "Khả năng", title: "Tất cả những gì bạn cần cho ảnh chụp màn hình App Store.", description: "Tập trung vào tốc độ bố cục, tính nhất quán và xuất file mượt mà." },
      blog: { eyebrow: "Từ Blog", title: "Hướng dẫn tạo ảnh chụp màn hình App Store hiệu quả.", description: "Kinh nghiệm và tài liệu tham khảo để tăng tỷ lệ chuyển đổi." },
      faq: { eyebrow: "FAQ", title: "Các câu hỏi thường gặp trước khi dùng thử.", description: "Giải đáp về tính tương thích và quy trình xuất file." },
      appShowcase: { eyebrow: "Tạo bằng Screenshot Bro", title: "Đồng hành cùng các ứng dụng tuyệt vời.", description: "Các ứng dụng indie đã tin dùng Screenshot Bro." },
    },
    problem: {
      story: "Tôi tạo ra công cụ này sau khi mất quá nhiều thời gian trong Figma để làm lại ảnh chụp mỗi khi thay đổi văn bản hay màu sắc. Thiết kế hệ thống một lần và để ứng dụng lo phần còn lại.",
    },
    download: {
      titleLine1: "Sẵn sàng phát hành",
      titleLine2: "ảnh chụp màn hình đẹp hơn?",
      description: "Tải trên App Store và trải nghiệm quy trình làm việc hoàn chỉnh trên Mac, iPad hoặc iPhone.",
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
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "พร้อมใช้งานแล้วบน App Store สำหรับ Mac, iPad และ iPhone",
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
          "มี การซิงค์ผ่าน iCloud Drive ช่วยให้โปรเจกต์ของคุณพร้อมใช้งานบน Mac, iPad และ iPhone ทุกเครื่องของคุณ",
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
      directDownload: "อยากดาวน์โหลดโดยตรงใช่ไหม? รับไฟล์ DMG สำหรับ Mac",
      browseGuides: "ดูคู่มือทั้งหมด",
      submitApp: "ส่งแอปของคุณ",
      contactDeveloper: "ติดต่อผู้พัฒนา",
      backToTop: "กลับขึ้นด้านบน",
      availabilityNote: "แอป macOS 15+ และ iOS/iPadOS 18+ | Swift & SwiftUI | มีใน App Store",
    },
    hero: {
      titleLead: "สร้างและแปลภาษา",
      titleAccent: "App Store",
      titleRest: " สกรีนช็อตได้ในไม่กี่นาที",
      descriptionLead: "ออกแบบครั้งเดียว แปลได้ 81 ภาษา สร้างได้ทุกขนาดอุปกรณ์ และ",
      descriptionStrong: "อัปโหลดไปยัง App Store Connect โดยตรง",
      descriptionTail: " โดยไม่ต้องทำใหม่ทีละภาพ ทั้งหมดในแอปเนทีฟเดียว",
    },
    sections: {
      showcases: { eyebrow: "ตัวอย่าง", title: "ดูการทำงานของเครื่องมือก่อนติดตั้ง", description: "นำเข้าเป็นชุด อัปโหลด App Store Connect ในคลิกเดียว เลเยอร์ และกรอบอุปกรณ์" },
      workflow: { eyebrow: "ขั้นตอน", title: "เส้นทางที่เร็วที่สุดจากภาพต้นฉบับสู่ไฟล์พร้อมส่งสโตร์", description: "เน้นงานเดียว: สร้างสกรีนช็อตที่สวยงามโดยไม่ต้องดูแลไฟล์ดีไซน์จำนวนมาก" },
      features: { eyebrow: "ความสามารถ", title: "ทุกสิ่งที่เครื่องมือสกรีนช็อต App Store ควรมี", description: "มุ่งเน้นที่ความเร็วในการจัดวาง ความสม่ำเสมอ และการส่งออกที่ง่ายดาย" },
      blog: { eyebrow: "จากบล็อก", title: "คู่มือเพื่อสกรีนช็อต App Store ที่ดีกว่า", description: "แนวทางและข้อแนะนำเพื่อเพิ่มยอดดาวน์โหลด" },
      faq: { eyebrow: "FAQ", title: "คำถามที่พบบ่อยก่อนลองใช้", description: "คำตอบเกี่ยวกับความเข้ากันได้และการส่งออกไฟล์" },
      appShowcase: { eyebrow: "สร้างด้วย Screenshot Bro", title: "ร่วมเป็นส่วนหนึ่งกับแอปชั้นนำ", description: "แอปอินดี้ที่ใช้ Screenshot Bro ในการทำสกรีนช็อต" },
    },
    problem: {
      story: "ผมสร้างแอปนี้หลังจากเสียเวลาใน Figma ไปมากกับการแก้สกรีนช็อตทุกครั้งที่เปลี่ยนข้อความหรือภาษา ออกแบบระบบครั้งเดียวแล้วปล่อยให้แอปจัดการส่วนที่ซ้ำซ้อน",
    },
    download: {
      titleLine1: "พร้อมปล่อยสกรีนช็อต",
      titleLine2: "ที่ดูดียิ่งขึ้นหรือยัง?",
      description: "ดาวน์โหลดจาก App Store และใช้งานทุกฟังก์ชันบน Mac, iPad หรือ iPhone ได้ทันที",
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
      directDownload: "Föredrar du direktnedladdning? Hämta DMG-filen för Mac",
      browseGuides: "Bläddra bland guider",
      submitApp: "Skicka in app",
      contactDeveloper: "Kontakta utvecklaren",
      backToTop: "Till toppen",
      availabilityNote: "macOS 15+ och iOS/iPadOS 18+ app | Swift & SwiftUI | Tillgänglig i App Store",
    },
    hero: {
      titleLead: "Skapa & lokalisera",
      titleAccent: "App Store",
      titleRest: " skärmdumpar på några minuter",
      descriptionLead: "Designa en gång. Lokalisera till 81 språk, generera alla enhetsstorlekar och",
      descriptionStrong: "ladda upp direkt till App Store Connect",
      descriptionTail: " utan att bygga om skärmdumpar för hand. Allt i en nativ app.",
    },
    sections: {
      showcases: { eyebrow: "Exempel", title: "Se hur generatorn fungerar innan du installerar.", description: "Batchimport, uppladdning till App Store Connect med ett klick, lager och enhetsramar." },
      workflow: { eyebrow: "Arbetsflöde", title: "En kortare väg från råa skärmdumpar till färdiga butikstillgångar.", description: "Fokuserad på en uppgift: skapa snygga skärmdumpar utan att underhålla en hög med designfiler." },
      features: { eyebrow: "Kapacitet", title: "Allt ett skärmdumpsverktyg för App Store behöver göra.", description: "Fokus på snabb layout, konsekvens och smidig export." },
      blog: { eyebrow: "Från bloggen", title: "Guider för att skapa bättre App Store-skärmdumpar.", description: "Tips och referenser för att öka konverteringen." },
      faq: { eyebrow: "FAQ", title: "Vanliga frågor innan du testar.", description: "Svar om kompatibilitet och export." },
      appShowcase: { eyebrow: "Skapad med Screenshot Bro", title: "I gott sällskap.", description: "Indieappar som redan använder Screenshot Bro." },
    },
    problem: {
      story: "Jag byggde appen efter att ha lagt för mycket tid i Figma på att göra om skärmdumpar varje gång text eller färger ändrades. Bygg systemet en gång och låt appen göra resten.",
    },
    download: {
      titleLine1: "Redo att publicera",
      titleLine2: "bättre skärmdumpar?",
      description: "Hämta i App Store och upplev hela arbetsflödet på Mac, iPad eller iPhone.",
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
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Tilgængelig nu i App Store til Mac, iPad og iPhone",
      "Hele arbejdsgangen: importér, design, oversæt automatisk, lokaliser, eksportér",
      "Upload direkte til App Store Connect — slut med træk-og-slip i en browserfane",
    ],
    faqs: [
      {
        question: "Er Screenshot Bro gratis?",
        answer: "Ja. Den gratis plan er ikke tidsbegrænset og lader dig have 1 projekt med op til 3 rækker og 5 skabeloner pr. række — med fuld adgang til alle enhedsrammer, former og sprog, eksport uden vandmærke, upload til App Store Connect og Google Play samt iCloud-synkronisering. Pro fjerner begrænsningerne på projekter, rækker og skabeloner.",
      },
      {
        question: "Hvordan adskiller den sig fra en webbaseret generator til App Store-skærmbilleder?",
        answer: "Screenshot Bro er en nativ app til Mac, iPad og iPhone og ikke et browserværktøj, så projekter, skærmbilleder og skrifttyper bliver på disken, og daglig redigering kræver hverken konto eller internetforbindelse. Rendering og batch-eksport kører på din egen hardware i stedet for på en server. Hvis du bruger Windows eller Linux, vil samarbejde i en delt browsersession eller kun har brug for et eller to billeder, er et webbaseret værktøj til App Store-skærmbilleder et bedre valg — siden med alternativer dækker de tilfælde.",
      },
      {
        question: "Hvad kræver det at køre den?",
        answer: "macOS 15 (Sequoia) eller nyere på Mac, iPadOS 18 eller nyere på iPad eller iOS 18 eller nyere på iPhone. Ingen ekstra enhed, ingen konto og ingen internetforbindelse kræves til daglig redigering.",
      },
      {
        question: "Forlader mine data min enhed?",
        answer: "Dit arbejde gør ikke. Projekter, skærmbilleder og skrifttyper bliver på disken. Automatisk oversættelse kører via Apples Translation-framework på enheden — ingen API-nøgler, ingen tredjepartsservere. Valgfri synkronisering via iCloud Drive bruger din personlige iCloud-konto; vi driver ingen mellemliggende servere. Det, der faktisk sendes, er en anonym nedbrudsrapport, når noget går galt, samt anonyme optællinger af milepæle som »en eksport blev fuldført«, så vi ved, hvad vi skal forbedre — aldrig dine projekter, billeder eller den tekst, du skriver.",
      },
      {
        question: "Hvordan fungerer lokalisering?",
        answer: "Vælg mellem 81 sprogforudindstillinger, eller definér din egen kode. Automatisk oversættelse udfylder manglende tekst på enheden. Oversættelser gemmes som tekstoverstyringer pr. sprog, så layout, farver og billeder deles på tværs af alle sprog — design én gang, udgiv på alle sprog. Eksporter organiseres i sprogmapper, som App Store Connect kan bruge direkte.",
      },
      {
        question: "Kan jeg også lave skærmbilleder til Google Play?",
        answer: "Ja. Rækker til Android-telefoner og -tablets renderes side om side med iPhone, iPad og Mac i det samme projekt. Hver enhedskategori er forudindstillet til de pixelmål, den pågældende butik accepterer.",
      },
      {
        question: "Kan jeg trække skærmbilleder fra simulatoren og enheder direkte ind?",
        answer: "Ja. Slip en mappe med skærmbilleder, og Screenshot Bro sender hvert billede til den rigtige række ud fra pixelstørrelsen — iPhone-billeder til iPhone-rækken, iPad til iPad, Android til Android.",
      },
      {
        question: "Kan jeg uploade til App Store Connect inde fra appen?",
        answer: "Ja. Konfigurer din App Store Connect API-nøgle én gang (Issuer ID, Key ID og .p8). Screenshot Bro registrerer automatisk den rigtige skærmtype for hver række, matcher dine projektsprog med lokaliseringerne i App Store Connect og erstatter eksisterende skærmbilleder i én omgang — ingen træk-og-slip i browseren.",
      },
      {
        question: "Kan en AI-agent bygge mine skærmbilleder?",
        answer: "Ja. Screenshot Bro kører en valgfri lokal MCP-server på Mac, så en assistent som Claude Code, Claude Desktop eller Cursor kan oprette projekter, opsætte rækker og former, importere skærmbilleder, oversætte tekst, rendere forhåndsvisninger, den faktisk kan se, eksportere og synkronisere et færdigt sæt til App Store Connect. Serveren lytter kun på 127.0.0.1, hver anmodning kræver et adgangstoken, som du kopierer fra Indstillinger, og alle ændringer, agenten laver, kan fortrydes med ⌘Z.",
      },
      {
        question: "Synkroniserer den mellem enheder?",
        answer: "Ja — valgfri synkronisering via iCloud Drive holder projekter, skærmbilleder og skrifttyper tilgængelige på alle Mac-computere, iPads og iPhones, der er logget ind på din Apple-konto. Konflikter flettes felt for felt efter last-writer-wins-princippet, så redigering af det samme projekt på flere enheder samles pænt.",
      },
      {
        question: "Hvor får jeg support?",
        answer: "Bliv medlem af Screenshot Bro-Discord — det er den hurtigste måde at komme i kontakt med udvikleren, rapportere en fejl, spørge, hvordan noget virker, og se, hvad der kommer næste gang. Du kan også skrive en e-mail om private eller kontospecifikke forhold, og hjælpedokumentationen dækker alle dele af editoren.",
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
      directDownload: "Foretrækker du direkte download? Hent DMG-filen til Mac",
      browseGuides: "Gennemse guides",
      submitApp: "Indsend app",
      contactDeveloper: "Kontakt udvikleren",
      backToTop: "Til toppen",
      availabilityNote: "macOS 15+ og iOS/iPadOS 18+ app | Swift & SwiftUI | Tilgængelig i App Store",
    },
    hero: {
      titleLead: "Opret & lokaliser",
      titleAccent: "App Store",
      titleRest: " skærmbilleder på få minutter",
      descriptionLead: "Design én gang. Lokaliser til 81 sprog, generer alle enhedsstørrelser og",
      descriptionStrong: "upload direkte til App Store Connect",
      descriptionTail: " uden at genopbygge skærmbilleder manuelt. Alt i en nativ app.",
    },
    sections: {
      showcases: { eyebrow: "Eksempler", title: "Se hvordan generatoren fungerer, før du installerer.", description: "Batch-import, upload til App Store Connect med ét klik, lag og enhedsrammer." },
      workflow: { eyebrow: "Arbejdsgang", title: "En kortere vej fra rå skærmbilleder til færdige butiksaktiver.", description: "Fokuseret på én opgave: skab flotte skærmbilleder uden at vedligeholde en masse designfiler." },
      features: { eyebrow: "Funktioner", title: "Alt hvad et skærmbilledeværktøj til App Store skal kunne.", description: "Fokus på hurtigt layout, ensartethed og problemfri eksport." },
      blog: { eyebrow: "Fra bloggen", title: "Guides til bedre App Store-skærmbilleder.", description: "Tips og referencer til at forbedre konvertering." },
      faq: { eyebrow: "FAQ", title: "Ofte stillede spørgsmål før du prøver.", description: "Svar om kompatibilitet og eksport." }      ,
      appShowcase: { eyebrow: "Lavet med Screenshot Bro", title: "I godt selskab.", description: "Indie-apps, der allerede bruger Screenshot Bro." },
    },
    problem: {
      story: "Jeg byggede appen efter at have brugt for meget tid i Figma på at lave skærmbilleder om, hver gang tekst eller farver ændrede sig. Byg systemet én gang og lad appen klare resten.",
    },
    download: {
      titleLine1: "Klar til at udgive",
      titleLine2: "bedre skærmbilleder?",
      description: "Hent i App Store og oplev hele arbejdsgangen på Mac, iPad eller iPhone.",
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
      { label: "UKK", href: "#faq" },
    ],
    benefits: [
      "Saatavilla nyt App Storessa Macille, iPadille ja iPhonelle",
      "Koko työnkulku: tuonti, suunnittelu, automaattinen käännös, lokalisointi, vienti",
      "Lataa suoraan App Store Connectiin — ei enää vetämistä ja pudottamista selainvälilehdessä",
    ],
    faqs: [
      {
        question: "Onko Screenshot Bro ilmainen?",
        answer: "Kyllä. Ilmainen versio ei ole aikarajoitettu, ja siinä voit pitää 1 projektin, jossa on enintään 3 riviä ja 5 mallia riviä kohden — täysi pääsy kaikkiin laitekehyksiin, muotoihin ja kieliin, vienti ilman vesileimaa, lataus App Store Connectiin ja Google Playhin sekä iCloud-synkronointi sisältyvät. Pro poistaa projektien, rivien ja mallien rajoitukset.",
      },
      {
        question: "Miten tämä eroaa verkkopohjaisesta App Store -kuvakaappausgeneraattorista?",
        answer: "Screenshot Bro on natiivi Mac-, iPad- ja iPhone-sovellus eikä selaintyökalu, joten projektit, kuvakaappaukset ja fontit pysyvät levyllä, eikä päivittäinen muokkaus vaadi tiliä tai internetyhteyttä. Renderöinti ja erävienti tapahtuvat omalla laitteistollasi palvelimen sijaan. Jos käytät Windowsia tai Linuxia, haluat tehdä yhteistyötä jaetussa selainistunnossa tai tarvitset vain yhden tai kaksi kuvaa, verkkopohjainen App Store -kuvakaappaustyökalu sopii paremmin — vaihtoehtosivu käsittelee nämä tapaukset.",
      },
      {
        question: "Mitä tarvitsen sen käyttämiseen?",
        answer: "macOS 15 (Sequoia) tai uudempi Macissa, iPadOS 18 tai uudempi iPadissa tai iOS 18 tai uudempi iPhonessa. Päivittäinen muokkaus ei vaadi lisälaitetta, tiliä eikä internetyhteyttä.",
      },
      {
        question: "Poistuvatko tietoni laitteeltani?",
        answer: "Työsi ei poistu. Projektit, kuvakaappaukset ja fontit pysyvät levyllä. Automaattinen käännös toimii Applen laitteella toimivan Translation-kehyksen kautta — ei API-avaimia, ei kolmannen osapuolen palvelimia. Valinnainen iCloud Drive -synkronointi käyttää henkilökohtaista iCloud-tiliäsi; emme ylläpidä välipalvelimia. Lähetettäviä tietoja ovat nimetön kaatumisraportti, kun jokin menee rikki, sekä nimettömät lukumäärät virstanpylväistä, kuten ”vienti valmistui”, jotta tiedämme, mitä parantaa — ei koskaan projektejasi, kuviasi tai kirjoittamaasi tekstiä.",
      },
      {
        question: "Miten lokalisointi toimii?",
        answer: "Valitse 81 kieliesiasetuksesta tai määritä oma koodisi. Automaattinen käännös täyttää puuttuvat tekstit laitteella. Käännökset tallentuvat kielikohtaisina tekstin ohituksina, joten asettelu, värit ja kuvat pysyvät yhteisinä kaikille kielille — suunnittele kerran, julkaise kaikilla kielillä. Viennit järjestetään kielikansioihin, jotka App Store Connect voi ottaa suoraan käyttöön.",
      },
      {
        question: "Voinko tehdä myös Google Play -kuvakaappauksia?",
        answer: "Kyllä. Android-puhelimen ja -tabletin rivit renderöidään iPhonen, iPadin ja Macin rinnalla samassa projektissa. Jokainen laiteluokka on valmiiksi asetettu niihin pikselimittoihin, jotka kyseinen kauppa hyväksyy.",
      },
      {
        question: "Voinko pudottaa simulaattorin ja laitteiden kuvakaappaukset suoraan sovellukseen?",
        answer: "Kyllä. Pudota kansiollinen kuvakaappauksia, niin Screenshot Bro ohjaa jokaisen oikealle riville sen pikselikoon perusteella — iPhone-kuvat iPhone-riville, iPad-kuvat iPad-riville ja Android-kuvat Android-riville.",
      },
      {
        question: "Voinko ladata App Store Connectiin suoraan sovelluksesta?",
        answer: "Kyllä. Määritä App Store Connect -API-avaimesi kerran (Issuer ID, Key ID ja .p8). Screenshot Bro tunnistaa automaattisesti oikean näyttötyypin jokaiselle riville, täsmäyttää projektisi kielet App Store Connectin lokalisointeihin ja korvaa olemassa olevat kuvakaappaukset yhdellä kertaa — ei vetämistä ja pudottamista selaimessa.",
      },
      {
        question: "Voiko tekoälyagentti tehdä kuvakaappaukseni?",
        answer: "Kyllä. Screenshot Bro tarjoaa Macilla valinnaisen paikallisen MCP-palvelimen, joten avustaja, kuten Claude Code, Claude Desktop tai Cursor, voi luoda projekteja, asetella rivejä ja muotoja, tuoda kuvakaappauksia, kääntää tekstejä, renderöidä esikatseluja, joita se voi oikeasti katsoa, viedä ja synkronoida valmiin sarjan App Store Connectiin. Palvelin kuuntelee vain osoitteessa 127.0.0.1, jokainen pyyntö vaatii Asetuksista kopioitavan käyttötunnisteen, ja jokaisen agentin tekemän muutoksen voi kumota ⌘Z:lla.",
      },
      {
        question: "Synkronoituuko se laitteiden välillä?",
        answer: "Kyllä — valinnainen iCloud Drive -synkronointi pitää projektit, kuvakaappaukset ja fontit saatavilla jokaisella Macilla, iPadilla ja iPhonella, jolla on kirjauduttu Apple-tilillesi. Ristiriidat yhdistetään kenttä kerrallaan last-writer-wins-periaatteella, joten saman projektin muokkaus usealla laitteella yhdistyy siististi.",
      },
      {
        question: "Mistä saan tukea?",
        answer: "Liity Screenshot Bro -yhteisöön Discordissa — se on nopein tapa tavoittaa tekijä, ilmoittaa bugista, kysyä, miten jokin toimii, ja nähdä, mitä on tulossa seuraavaksi. Voit myös lähettää sähköpostia yksityisissä tai tiliin liittyvissä asioissa, ja ohjedokumentaatio kattaa editorin jokaisen osan.",
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
      directDownload: "Haluatko ladata suoraan? Hae Macin DMG-tiedosto",
      browseGuides: "Selaa oppaita",
      submitApp: "Lähetä sovellus",
      contactDeveloper: "Ota yhteyttä kehittäjään",
      backToTop: "Takaisin alkuun",
      availabilityNote: "macOS 15+ ja iOS/iPadOS 18+ sovellus | Swift & SwiftUI | Saatavilla App Storessa",
    },
    hero: {
      titleLead: "Luo & lokalisoi",
      titleAccent: "App Store",
      titleRest: " -kuvakaappaukset minuuteissa",
      descriptionLead: "Suunnittele kerran. Lokalisoi 81 kielelle, luo kaikki laitekoot ja",
      descriptionStrong: "lataa suoraan App Store Connectiin",
      descriptionTail: " rakentamatta kuvakaappauksia uudelleen käsin. Kaikki yhdessä natiivisovelluksessa.",
    },
    sections: {
      showcases: { eyebrow: "Esimerkit", title: "Katso miten generaattori toimii ennen asennusta.", description: "Erätuonti, lataus App Store Connectiin yhdellä napsautuksella, tasot ja laitekehykset." },
      workflow: { eyebrow: "Työnkulku", title: "Lyhyempi tie raakakuvista valmiisiin sovelluskaupan materiaaleihin.", description: "Keskittynyt yhteen tehtävään: luo kauniita kuvakaappauksia ilman raskasta suunnittelutiedostojen ylläpitoa." },
      features: { eyebrow: "Ominaisuudet", title: "Kaikki mitä App Store -kuvakaappaustyökalulta tarvitaan.", description: "Painopisteenä nopea asettelu, yhtenäisyys ja vaivaton vienti." },
      blog: { eyebrow: "Blogista", title: "Oppaat parempien App Store -kuvakaappausten tekemiseen.", description: "Vinkkejä ja referenssejä konversion parantamiseen." },
      faq: { eyebrow: "UKK", title: "Usein kysytyt kysymykset ennen kokeilua.", description: "Vastauksia yhteensopivuudesta ja viennistä." },
      appShowcase: { eyebrow: "Luotu Screenshot Brolla", title: "Hyvässä seurassa.", description: "Indie-sovellukset, jotka käyttävät jo Screenshot Brota." },
    },
    problem: {
      story: "Rakensin sovelluksen käytettyäni liikaa aikaa Figmassa kuvakaappausten tekemiseen alusta aina, kun teksti tai värit muuttuivat. Rakenna järjestelmä kerran ja anna sovelluksen hoitaa loput.",
    },
    download: {
      titleLine1: "Valmiina julkaisemaan",
      titleLine2: "parempia kuvakaappauksia?",
      description: "Lataa App Storesta ja koe koko työnkulku Macilla, iPadilla tai iPhonella.",
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
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Tilgjengelig nå i App Store for Mac, iPad og iPhone",
      "Hele arbeidsflyten: importer, design, oversett automatisk, lokaliser, eksporter",
      "Last opp direkte til App Store Connect — slutt på dra-og-slipp i en nettleserfane",
    ],
    faqs: [
      {
        question: "Er Screenshot Bro gratis?",
        answer: "Ja. Gratisplanen er ikke tidsbegrenset og lar deg ha 1 prosjekt med opptil 3 rader og 5 maler per rad — med full tilgang til alle enhetsrammer, former og språk, eksport uten vannmerke, opplasting til App Store Connect og Google Play og iCloud-synkronisering inkludert. Pro fjerner begrensningene for prosjekter, rader og maler.",
      },
      {
        question: "Hvordan skiller dette seg fra en nettbasert generator for App Store-skjermbilder?",
        answer: "Screenshot Bro er en nativ app for Mac, iPad og iPhone, ikke et nettleserverktøy, så prosjekter, skjermbilder og fonter blir liggende på disken, og daglig redigering krever verken konto eller internettforbindelse. Rendering og batch-eksport kjører på din egen maskinvare i stedet for på en server. Bruker du Windows eller Linux, vil samarbeide i en delt nettleserøkt eller trenger bare ett eller to bilder, passer et nettbasert verktøy for App Store-skjermbilder bedre — siden med alternativer dekker disse tilfellene.",
      },
      {
        question: "Hva trenger jeg for å kjøre den?",
        answer: "macOS 15 (Sequoia) eller nyere på Mac, iPadOS 18 eller nyere på iPad, eller iOS 18 eller nyere på iPhone. Ingen ekstra enhet, ingen konto og ingen internettforbindelse kreves for daglig redigering.",
      },
      {
        question: "Forlater dataene mine enheten?",
        answer: "Arbeidet ditt gjør ikke det. Prosjekter, skjermbilder og fonter blir liggende på disken. Automatisk oversettelse kjører gjennom Apples Translation-rammeverk på enheten — ingen API-nøkler, ingen tredjepartsservere. Valgfri synkronisering via iCloud Drive bruker din personlige iCloud-konto; vi drifter ingen mellomliggende servere. Det som faktisk sendes, er en anonym krasjrapport når noe går galt, pluss anonyme tellinger av milepæler som «en eksport ble fullført», slik at vi vet hva vi bør forbedre — aldri prosjektene, bildene eller teksten du skriver.",
      },
      {
        question: "Hvordan fungerer lokalisering?",
        answer: "Velg blant 81 språkforhåndsinnstillinger, eller definer din egen kode. Automatisk oversettelse fyller inn manglende tekst på enheten. Oversettelser lagres som tekstoverstyringer per språk, så layout, farger og bilder deles på tvers av alle språk — design én gang, publiser på alle språk. Eksporter organiseres i språkmapper som App Store Connect kan bruke direkte.",
      },
      {
        question: "Kan jeg lage skjermbilder for Google Play også?",
        answer: "Ja. Rader for Android-telefoner og -nettbrett rendres side om side med iPhone, iPad og Mac i samme prosjekt. Hver enhetskategori er forhåndsinnstilt til pikseldimensjonene den aktuelle butikken godtar.",
      },
      {
        question: "Kan jeg slippe skjermbilder fra simulator og enheter rett inn?",
        answer: "Ja. Slipp en mappe med skjermbilder, så sender Screenshot Bro hvert bilde til riktig rad basert på pikselstørrelsen — iPhone-bilder til iPhone-raden, iPad til iPad, Android til Android.",
      },
      {
        question: "Kan jeg laste opp til App Store Connect fra appen?",
        answer: "Ja. Konfigurer App Store Connect API-nøkkelen din én gang (Issuer ID, Key ID og .p8). Screenshot Bro gjenkjenner automatisk riktig skjermtype for hver rad, kobler prosjektspråkene dine til lokaliseringene i App Store Connect og erstatter eksisterende skjermbilder i én omgang — ingen dra-og-slipp i nettleseren.",
      },
      {
        question: "Kan en AI-agent lage skjermbildene mine?",
        answer: "Ja. Screenshot Bro kjører en valgfri lokal MCP-server på Mac, så en assistent som Claude Code, Claude Desktop eller Cursor kan opprette prosjekter, sette opp rader og former, importere skjermbilder, oversette tekst, rendre forhåndsvisninger den faktisk kan se på, eksportere og synkronisere et ferdig sett til App Store Connect. Serveren lytter bare på 127.0.0.1, hver forespørsel krever et tilgangstoken du kopierer fra Innstillinger, og alle endringer agenten gjør, kan angres med ⌘Z.",
      },
      {
        question: "Synkroniseres den mellom enheter?",
        answer: "Ja — valgfri synkronisering via iCloud Drive holder prosjekter, skjermbilder og fonter tilgjengelige på alle Mac-er, iPader og iPhoner som er logget på Apple-kontoen din. Konflikter slås sammen felt for felt etter last-writer-wins-prinsippet, så redigering av samme prosjekt på flere enheter går rent sammen.",
      },
      {
        question: "Hvor får jeg støtte?",
        answer: "Bli med i Screenshot Bro-Discorden — det er den raskeste måten å nå utvikleren på, rapportere en feil, spørre hvordan noe fungerer og se hva som kommer neste gang. Du kan også sende e-post om private eller kontospesifikke saker, og hjelpedokumentasjonen dekker alle deler av editoren.",
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
      directDownload: "Foretrekker du direkte nedlasting? Last ned DMG-filen for Mac",
      browseGuides: "Bla gjennom guider",
      submitApp: "Send inn app",
      contactDeveloper: "Kontakt utvikleren",
      backToTop: "Til toppen",
      availabilityNote: "macOS 15+ og iOS/iPadOS 18+ app | Swift & SwiftUI | Tilgjengelig i App Store",
    },
    hero: {
      titleLead: "Opprett & lokaliser",
      titleAccent: "App Store",
      titleRest: " skjermbilder på minutter",
      descriptionLead: "Design én gang. Lokaliser til 81 språk, generer alle enhetsstørrelser og",
      descriptionStrong: "last opp direkte til App Store Connect",
      descriptionTail: " uten å bygge om skjermbilder manuelt. Alt i en nativ app.",
    },
    sections: {
      showcases: { eyebrow: "Eksempler", title: "Se hvordan generatoren fungerer før du installerer.", description: "Batch-import, opplasting til App Store Connect med ett klikk, lag og enhetsrammer." },
      workflow: { eyebrow: "Arbeidsflyt", title: "En kortere vei fra rå skjermbilder til ferdige butikkressurser.", description: "Fokusert på én oppgave: lag flotte skjermbilder uten å vedlikeholde en haug med designfiler." },
      features: { eyebrow: "Funksjoner", title: "Alt et skjermbildeverktøy for App Store trenger å gjøre.", description: "Fokus på raskt oppsett, konsistens og sømløs eksport." },
      blog: { eyebrow: "Fra bloggen", title: "Guider for å lage bedre App Store-skjermbilder.", description: "Tips og referenser for å øke konverteringen." },
      faq: { eyebrow: "FAQ", title: "Ofte stilte spørsmål før du prøver.", description: "Svar om kompatibilitet og eksport." },
      appShowcase: { eyebrow: "Laget med Screenshot Bro", title: "I godt selskap.", description: "Indie-apper som allerede bruker Screenshot Bro." },
    },
    problem: {
      story: "Jeg bygde appen etter å ha brukt for mye tid i Figma på å gjøre om skjermbilder hver gang tekst eller farger ble endret. Bygg systemet én gang og la appen gjøre resten.",
    },
    download: {
      titleLine1: "Klar til å publisere",
      titleLine2: "bedre skjermbilder?",
      description: "Hent i App Store og opplev hele arbeidsflyten på Mac, iPad eller iPhone.",
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
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Dostupné nyní v App Store pro Mac, iPad a iPhone",
      "Celý pracovní postup: import, návrh, automatický překlad, lokalizace, export",
      "Nahrávání přímo do App Store Connect — konec přetahování v záložce prohlížeče",
    ],
    faqs: [
      {
        question: "Je Screenshot Bro zdarma?",
        answer: "Ano. Bezplatný plán není časově omezený a umožňuje mít 1 projekt s až 3 řádky a 5 šablonami na řádek — s plným přístupem ke všem rámečkům zařízení, tvarům a jazykům, exporty bez vodoznaku, nahráváním do App Store Connect a Google Play a synchronizací přes iCloud. Pro ruší limity projektů, řádků a šablon.",
      },
      {
        question: "Čím se liší od webového generátoru snímků pro App Store?",
        answer: "Screenshot Bro je nativní aplikace pro Mac, iPad a iPhone, ne nástroj v prohlížeči, takže projekty, snímky a písma zůstávají na disku a běžná práce nevyžaduje účet ani připojení k internetu. Renderování a dávkový export běží na vašem vlastním hardwaru místo na serveru. Pokud používáte Windows nebo Linux, chcete spolupracovat ve sdílené relaci prohlížeče nebo potřebujete jen jeden či dva obrázky, bude pro vás vhodnější webový nástroj na snímky pro App Store — stránka s alternativami tyto případy popisuje.",
      },
      {
        question: "Co potřebuji ke spuštění?",
        answer: "macOS 15 (Sequoia) nebo novější na Macu, iPadOS 18 nebo novější na iPadu, nebo iOS 18 nebo novější na iPhonu. Pro běžnou práci není potřeba žádné doprovodné zařízení, účet ani připojení k internetu.",
      },
      {
        question: "Opouštějí moje data zařízení?",
        answer: "Vaše práce ne. Projekty, snímky a písma zůstávají na disku. Automatický překlad běží přes framework Translation od Applu přímo v zařízení — žádné API klíče, žádné servery třetích stran. Volitelná synchronizace přes iCloud Drive používá váš osobní účet iCloud; neprovozujeme žádné zprostředkující servery. Odesílá se jen anonymní zpráva o pádu, když se něco pokazí, a anonymní počty milníků jako „export dokončen“, abychom věděli, co zlepšit — nikdy vaše projekty, obrázky ani texty, které píšete.",
      },
      {
        question: "Jak funguje lokalizace?",
        answer: "Vyberte si z 81 jazykových předvoleb nebo definujte vlastní kód. Automatický překlad doplní chybějící texty přímo v zařízení. Překlady se ukládají jako textové přepisy pro jednotlivé jazyky, takže rozvržení, barvy a obrázky zůstávají sdílené napříč všemi jazyky — navrhněte jednou, vydejte ve všech jazycích. Exporty se třídí do jazykových složek, které App Store Connect přímo převezme.",
      },
      {
        question: "Mohu vytvářet i snímky pro Google Play?",
        answer: "Ano. Řádky pro telefony a tablety s Androidem se renderují vedle iPhonu, iPadu a Macu ve stejném projektu. Každá kategorie zařízení je předem nastavená na pixelové rozměry, které příslušný obchod přijímá.",
      },
      {
        question: "Mohu snímky ze simulátoru a zařízení rovnou přetáhnout do aplikace?",
        answer: "Ano. Přetáhněte složku se snímky a Screenshot Bro přiřadí každý z nich do správného řádku podle pixelové velikosti — snímky z iPhonu do řádku iPhone, z iPadu do iPadu, z Androidu do Androidu.",
      },
      {
        question: "Mohu nahrávat do App Store Connect přímo z aplikace?",
        answer: "Ano. Jednou nastavte svůj API klíč k App Store Connect (Issuer ID, Key ID a .p8). Screenshot Bro automaticky rozpozná správný typ displeje pro každý řádek, spáruje jazyky projektu s lokalizacemi v App Store Connect a nahradí stávající snímky v jediném průchodu — žádné přetahování v prohlížeči.",
      },
      {
        question: "Může moje snímky vytvořit AI agent?",
        answer: "Ano. Screenshot Bro na Macu provozuje volitelný lokální MCP server, takže asistent jako Claude Code, Claude Desktop nebo Cursor může vytvářet projekty, rozvrhovat řádky a tvary, importovat snímky, překládat texty, renderovat náhledy, které si skutečně může prohlédnout, exportovat a synchronizovat hotovou sadu do App Store Connect. Server naslouchá pouze na 127.0.0.1, každý požadavek vyžaduje přístupový token, který zkopírujete z Nastavení, a každou změnu, kterou agent provede, lze vrátit pomocí ⌘Z.",
      },
      {
        question: "Synchronizuje se mezi zařízeními?",
        answer: "Ano — volitelná synchronizace přes iCloud Drive udržuje projekty, snímky a písma dostupné na každém Macu, iPadu a iPhonu přihlášeném k vašemu Apple účtu. Konflikty se slučují pole po poli podle principu last-writer-wins, takže úpravy stejného projektu na více zařízeních se čistě sjednotí.",
      },
      {
        question: "Kde najdu podporu?",
        answer: "Připojte se k Discordu Screenshot Bro — je to nejrychlejší způsob, jak se spojit s autorem, nahlásit chybu, zeptat se, jak něco funguje, a podívat se, co se chystá. Pro soukromé záležitosti nebo věci týkající se účtu můžete napsat i e-mail a nápověda pokrývá každou část editoru.",
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
      directDownload: "Chcete raději stahovat přímo? Stáhněte si DMG pro Mac",
      browseGuides: "Procházet průvodce",
      submitApp: "Odeslat aplikaci",
      contactDeveloper: "Kontaktovat vývojáře",
      backToTop: "Zpět nahoru",
      availabilityNote: "Aplikace pro macOS 15+ a iOS/iPadOS 18+ | Swift & SwiftUI | Dostupné v App Store",
    },
    hero: {
      titleLead: "Vytvářejte & lokalizujte",
      titleAccent: "App Store",
      titleRest: " snímky během několika minut",
      descriptionLead: "Navrhněte jednou. Lokalizujte do 81 jazyků, generujte všechny velikosti zařízení a",
      descriptionStrong: "nahrávejte přímo do App Store Connect",
      descriptionTail: " bez nutnosti ručně předělávat snímky. Vše v nativní aplikaci.",
    },
    sections: {
      showcases: { eyebrow: "Příklady", title: "Podívejte se, jak generátor funguje, ještě před instalací.", description: "Dávkový import, nahrání do App Store Connect jedním kliknutím, vrstvy a rámečky zařízení." },
      workflow: { eyebrow: "Pracovní postup", title: "Kratší cesta od hrubých snímků k hotovým materiálům pro obchod.", description: "Zaměřeno na jeden cíl: vytvořit skvělé snímky bez nutnosti spravovat hromady návrhových souborů." },
      features: { eyebrow: "Schopnosti", title: "Vše, co nástroj pro snímky App Store potřebuje.", description: "Důraz na rychlé rozvržení, konzistenci a snadný export." },
      blog: { eyebrow: "Z blogu", title: "Průvodci pro tvorbu lepších snímků obrazovky pro App Store.", description: "Tipy a doporučení pro zvýšení konverze." },
      faq: { eyebrow: "FAQ", title: "Často kladené otázky před vyzkoušením.", description: "Odpovědi ohledně kompatibility a exportu." },
      appShowcase: { eyebrow: "Vytvořeno v Screenshot Bro", title: "V dobré společnosti.", description: "Indie aplikace, které již používají Screenshot Bro." },
    },
    problem: {
      story: "Aplikaci jsem vytvořil poté, co jsem strávil příliš mnoho času ve Figmě předěláváním snímků při každé změně textu nebo barev. Nastavte systém jednou a nechte aplikaci udělat zbytek.",
    },
    download: {
      titleLine1: "Připraveni publikovat",
      titleLine2: "lepší snímky obrazovky?",
      description: "Stáhněte si aplikaci v App Store a vyzkoušejte celý pracovní postup na Macu, iPadu nebo iPhonu.",
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
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Disponibilă acum în App Store pentru Mac, iPad și iPhone",
      "Flux de lucru complet: import, design, traducere automată, localizare, export",
      "Încărcare direct în App Store Connect — gata cu drag-and-drop într-o filă de browser",
    ],
    faqs: [
      {
        question: "Screenshot Bro este gratuit?",
        answer: "Da. Planul gratuit nu are limită de timp și îți permite să păstrezi 1 proiect cu până la 3 rânduri și 5 șabloane pe rând — cu acces complet la toate ramele de dispozitive, formele și limbile, exporturi fără filigran, încărcare în App Store Connect și Google Play și sincronizare iCloud incluse. Pro elimină limitele de proiecte, rânduri și șabloane.",
      },
      {
        question: "Prin ce diferă de un generator web de capturi de ecran pentru App Store?",
        answer: "Screenshot Bro este o aplicație nativă pentru Mac, iPad și iPhone, nu un instrument în browser, așa că proiectele, capturile și fonturile rămân pe disc, iar editarea de zi cu zi nu necesită cont sau conexiune la internet. Randarea și exportul în masă rulează pe propriul tău hardware, nu pe un server. Dacă folosești Windows sau Linux, vrei să colaborezi într-o sesiune de browser partajată sau ai nevoie doar de una sau două imagini, un instrument web pentru capturi App Store ți se potrivește mai bine — pagina de alternative acoperă aceste situații.",
      },
      {
        question: "De ce am nevoie ca să o rulez?",
        answer: "macOS 15 (Sequoia) sau mai nou pe Mac, iPadOS 18 sau mai nou pe iPad ori iOS 18 sau mai nou pe iPhone. Pentru editarea de zi cu zi nu ai nevoie de un dispozitiv suplimentar, de cont sau de conexiune la internet.",
      },
      {
        question: "Datele mele părăsesc dispozitivul?",
        answer: "Munca ta, nu. Proiectele, capturile și fonturile rămân pe disc. Traducerea automată rulează prin framework-ul Translation de la Apple, direct pe dispozitiv — fără chei API, fără servere terțe. Sincronizarea opțională prin iCloud Drive folosește contul tău personal iCloud; nu operăm niciun server intermediar. Ce se trimite totuși este un raport anonim de eroare atunci când ceva se strică, plus numărători anonime ale unor momente-cheie precum „un export s-a finalizat”, ca să știm ce să îmbunătățim — niciodată proiectele, imaginile sau textele pe care le scrii.",
      },
      {
        question: "Cum funcționează localizarea?",
        answer: "Alege dintre 81 de presetări de limbă sau definește-ți propriul cod. Traducerea automată completează textele lipsă pe dispozitiv. Traducerile se salvează ca suprascrieri de text pentru fiecare limbă, astfel încât aspectul, culorile și imaginile rămân comune tuturor limbilor — proiectezi o dată, publici în toate limbile. Exporturile sunt organizate în foldere pe limbi, pe care App Store Connect le poate prelua direct.",
      },
      {
        question: "Pot face și capturi de ecran pentru Google Play?",
        answer: "Da. Rândurile pentru telefoane și tablete Android se randează alături de iPhone, iPad și Mac în același proiect. Fiecare categorie de dispozitive vine presetată la dimensiunile în pixeli acceptate de magazinul respectiv.",
      },
      {
        question: "Pot plasa direct capturile din simulator și de pe dispozitive?",
        answer: "Da. Plasează un folder cu capturi, iar Screenshot Bro trimite fiecare captură în rândul potrivit după dimensiunea în pixeli — capturile de iPhone în rândul de iPhone, cele de iPad la iPad, cele de Android la Android.",
      },
      {
        question: "Pot încărca în App Store Connect direct din aplicație?",
        answer: "Da. Configurează o singură dată cheia API App Store Connect (Issuer ID, Key ID și .p8). Screenshot Bro detectează automat tipul de afișaj potrivit pentru fiecare rând, potrivește limbile proiectului cu localizările din App Store Connect și înlocuiește capturile existente dintr-o singură trecere — fără drag-and-drop în browser.",
      },
      {
        question: "Poate un agent AI să-mi creeze capturile?",
        answer: "Da. Screenshot Bro găzduiește pe Mac un server MCP local opțional, astfel încât un asistent precum Claude Code, Claude Desktop sau Cursor poate crea proiecte, aranja rânduri și forme, importa capturi, traduce textele, randa previzualizări pe care le poate vedea efectiv, exporta și sincroniza un set finalizat în App Store Connect. Serverul ascultă doar pe 127.0.0.1, fiecare cerere necesită un token de acces pe care îl copiezi din Setări, iar orice modificare făcută de agent poate fi anulată cu ⌘Z.",
      },
      {
        question: "Se sincronizează între dispozitive?",
        answer: "Da — sincronizarea opțională prin iCloud Drive păstrează proiectele, capturile și fonturile disponibile pe fiecare Mac, iPad și iPhone conectat la contul tău Apple. Conflictele se îmbină câmp cu câmp, după principiul last-writer-wins, așa că editarea aceluiași proiect pe mai multe dispozitive converge curat.",
      },
      {
        question: "Unde primesc asistență?",
        answer: "Intră pe serverul de Discord Screenshot Bro — este cea mai rapidă cale de a ajunge la creatorul aplicației, de a raporta o eroare, de a întreba cum funcționează ceva și de a vedea ce urmează. Poți scrie și pe e-mail pentru chestiuni private sau legate de cont, iar documentația de ajutor acoperă fiecare parte a editorului.",
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
      directDownload: "Preferi descărcarea directă? Ia fișierul DMG pentru Mac",
      browseGuides: "Răsfoiește ghidurile",
      submitApp: "Trimite aplicația",
      contactDeveloper: "Contactează dezvoltatorul",
      backToTop: "Înapoi sus",
      availabilityNote: "Aplicație pentru macOS 15+ și iOS/iPadOS 18+ | Swift & SwiftUI | Disponibilă în App Store",
    },
    hero: {
      titleLead: "Creează & localizează",
      titleAccent: "App Store",
      titleRest: " capturi de ecran în câteva minute",
      descriptionLead: "Proiectează o dată. Localizează în 81 de limbi, generează toate dimensiunile de dispozitive și",
      descriptionStrong: "încarcă direct în App Store Connect",
      descriptionTail: " fără a reface manual capturile. Totul într-o aplicație nativă.",
    },
    sections: {
      showcases: { eyebrow: "Exemple", title: "Vezi cum funcționează generatorul înainte de instalare.", description: "Import în masă, încărcare în App Store Connect cu un clic, straturi și rame de dispozitive." },
      workflow: { eyebrow: "Flux de lucru", title: "O cale mai scurtă de la capturile brute la materialele finale pentru magazin.", description: "Conceput pentru un singur scop: creează capturi superbe fără a întreține o grămadă de fișiere de design." },
      features: { eyebrow: "Capabilități", title: "Tot ce trebuie să facă un instrument de capturi pentru App Store.", description: "Accent pe aspect rapid, consecvență și export fără bătăi de cap." },
      blog: { eyebrow: "Din blog", title: "Ghiduri pentru a crea capturi de ecran mai bune pentru App Store.", description: "Sfaturi și referințe pentru a crește conversia." },
      faq: { eyebrow: "FAQ", title: "Întrebări frecvente înainte de testare.", description: "Răspunsuri despre compatibilitate și export." },
      appShowcase: { eyebrow: "Creat cu Screenshot Bro", title: "În companie bună.", description: "Aplicații indie care folosesc deja Screenshot Bro." },
    },
    problem: {
      story: "Am creat aplicația după ce am petrecut prea mult timp în Figma refăcând capturile de fiecare dată când se modificau textele sau culorile. Configurează sistemul o dată și lasă aplicația să facă restul.",
    },
    download: {
      titleLine1: "Gata să publici",
      titleLine2: "capturi de ecran mai bune?",
      description: "Descarcă din App Store și experimentează întregul flux de lucru pe Mac, iPad sau iPhone.",
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
      { label: "Soalan Lazim", href: "#faq" },
    ],
    benefits: [
      "Kini tersedia di App Store untuk Mac, iPad dan iPhone",
      "Aliran kerja penuh: import, reka, terjemah automatik, setempatkan, eksport",
      "Muat naik terus ke App Store Connect — tiada lagi tarik dan lepas dalam tab pelayar",
    ],
    faqs: [
      {
        question: "Adakah Screenshot Bro percuma?",
        answer: "Ya. Pelan percuma tidak terhad masa dan membolehkan anda menyimpan 1 projek dengan sehingga 3 baris dan 5 templat setiap baris — akses penuh kepada setiap bingkai peranti, bentuk dan bahasa, eksport tanpa tera air, muat naik ke App Store Connect dan Google Play, serta penyelarasan iCloud disertakan. Pro menghapuskan had projek, baris dan templat.",
      },
      {
        question: "Apakah bezanya dengan penjana tangkapan skrin App Store berasaskan web?",
        answer: "Screenshot Bro ialah aplikasi natif Mac, iPad dan iPhone, bukan alat pelayar, jadi projek, tangkapan skrin dan fon kekal pada cakera dan penyuntingan harian tidak memerlukan akaun atau sambungan internet. Proses render dan eksport pukal berjalan pada perkakasan anda sendiri, bukan pada pelayan. Jika anda menggunakan Windows atau Linux, mahu bekerjasama dalam sesi pelayar yang dikongsi, atau hanya memerlukan satu atau dua imej, alat tangkapan skrin App Store berasaskan web lebih sesuai — halaman alternatif merangkumi kes-kes tersebut.",
      },
      {
        question: "Apakah yang saya perlukan untuk menjalankannya?",
        answer: "macOS 15 (Sequoia) atau lebih baharu pada Mac, iPadOS 18 atau lebih baharu pada iPad, atau iOS 18 atau lebih baharu pada iPhone. Tiada peranti pendamping, tiada akaun dan tiada sambungan internet diperlukan untuk penyuntingan harian.",
      },
      {
        question: "Adakah data saya keluar dari peranti saya?",
        answer: "Kerja anda tidak. Projek, tangkapan skrin dan fon kekal pada cakera. Terjemahan automatik berjalan melalui rangka kerja Translation Apple pada peranti — tiada kunci API, tiada pelayan pihak ketiga. Penyelarasan iCloud Drive pilihan menggunakan akaun iCloud peribadi anda; kami tidak mengendalikan sebarang pelayan perantara. Yang dihantar hanyalah laporan ranap tanpa nama apabila sesuatu rosak, serta kiraan tanpa nama bagi pencapaian seperti “eksport selesai” supaya kami tahu apa yang perlu diperbaiki — tidak sekali-kali projek, imej atau teks yang anda tulis.",
      },
      {
        question: "Bagaimanakah penyetempatan berfungsi?",
        answer: "Pilih daripada 81 pratetap bahasa, atau tentukan kod anda sendiri. Terjemahan automatik mengisi teks yang tiada pada peranti. Terjemahan disimpan sebagai gantian teks bagi setiap bahasa, jadi susun atur, warna dan imej dikongsi merentas setiap bahasa — reka sekali, terbitkan dalam setiap bahasa. Eksport disusun ke dalam folder bahasa yang boleh terus diambil oleh App Store Connect.",
      },
      {
        question: "Bolehkah saya membuat tangkapan skrin Google Play juga?",
        answer: "Ya. Baris telefon dan tablet Android dirender bersama iPhone, iPad dan Mac dalam projek yang sama. Setiap kategori peranti dipratetap kepada dimensi piksel yang diterima oleh gedung berkenaan.",
      },
      {
        question: "Bolehkah saya terus melepaskan tangkapan skrin simulator dan peranti ke dalamnya?",
        answer: "Ya. Lepaskan folder tangkapan skrin dan Screenshot Bro menghalakan setiap satu ke baris yang betul berdasarkan saiz pikselnya — tangkapan iPhone ke baris iPhone, iPad ke iPad, Android ke Android.",
      },
      {
        question: "Bolehkah saya memuat naik ke App Store Connect dari dalam aplikasi?",
        answer: "Ya. Konfigurasikan kunci API App Store Connect anda sekali (Issuer ID, Key ID dan .p8). Screenshot Bro mengesan jenis paparan yang betul bagi setiap baris secara automatik, memadankan bahasa projek anda dengan penyetempatan App Store Connect dan menggantikan tangkapan skrin sedia ada dalam satu laluan — tiada tarik dan lepas dalam pelayar.",
      },
      {
        question: "Bolehkah ejen AI membina tangkapan skrin saya?",
        answer: "Ya. Screenshot Bro menyediakan pelayan MCP setempat pilihan pada Mac, jadi pembantu seperti Claude Code, Claude Desktop atau Cursor boleh mencipta projek, menyusun baris dan bentuk, mengimport tangkapan skrin, menterjemah teks, merender pratonton yang benar-benar boleh dilihatnya, mengeksport dan menyelaraskan set yang siap ke App Store Connect. Pelayan hanya mendengar pada 127.0.0.1, setiap permintaan memerlukan token akses yang anda salin daripada Tetapan, dan setiap perubahan yang dibuat oleh ejen boleh dibuat asal dengan ⌘Z.",
      },
      {
        question: "Adakah ia menyelaras antara peranti?",
        answer: "Ya — penyelarasan iCloud Drive pilihan memastikan projek, tangkapan skrin dan fon tersedia pada setiap Mac, iPad dan iPhone yang didaftar masuk ke Akaun Apple anda. Konflik digabungkan medan demi medan secara last-writer-wins, jadi penyuntingan projek yang sama pada beberapa peranti berpadu dengan kemas.",
      },
      {
        question: "Di manakah saya boleh mendapatkan sokongan?",
        answer: "Sertai Discord Screenshot Bro — ia cara terpantas untuk menghubungi pembangunnya, melaporkan pepijat, bertanya cara sesuatu berfungsi dan melihat apa yang akan datang. E-mel juga boleh digunakan untuk apa-apa perkara peribadi atau khusus akaun, dan dokumen bantuan merangkumi setiap bahagian editor.",
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
      directDownload: "Lebih suka muat turun terus? Dapatkan DMG untuk Mac",
      browseGuides: "Semak panduan",
      submitApp: "Hantar aplikasi",
      contactDeveloper: "Hubungi pembangun",
      backToTop: "Kembali ke atas",
      availabilityNote: "Aplikasi macOS 15+ dan iOS/iPadOS 18+ | Swift & SwiftUI | Boleh didapati di App Store",
    },
    hero: {
      titleLead: "Cipta & setempatkan",
      titleAccent: "App Store",
      titleRest: " tangkapan skrin dalam beberapa minit",
      descriptionLead: "Reka sekali. Setempatkan ke 81 bahasa, jana semua saiz peranti dan",
      descriptionStrong: "muat naik terus ke App Store Connect",
      descriptionTail: " tanpa membina semula tangkapan skrin secara manual. Segalanya dalam satu aplikasi natif.",
    },
    sections: {
      showcases: { eyebrow: "Contoh", title: "Lihat bagaimana penjana berfungsi sebelum memasang.", description: "Import pukal, muat naik ke App Store Connect dengan satu klik, lapisan dan bingkai peranti." },
      workflow: { eyebrow: "Aliran kerja", title: "Laluan lebih pantas daripada tangkapan mentah ke aset gedung yang siap.", description: "Fokus pada satu matlamat: cipta tangkapan skrin hebat tanpa perlu menyelenggara timbunan fail reka bentuk." },
      features: { eyebrow: "Keupayaan", title: "Semua yang diperlukan oleh alat tangkapan skrin App Store.", description: "Tumpuan pada susun atur pantas, ketekalan dan eksport yang lancar." },
      blog: { eyebrow: "Daripada blog", title: "Panduan untuk mereka bentuk tangkapan skrin App Store yang lebih baik.", description: "Petua dan rujukan untuk meningkatkan kadar penukaran." },
      faq: { eyebrow: "Soalan Lazim", title: "Soalan lazim sebelum anda mencuba.", description: "Jawapan mengenai keserasian dan eksport." },
      appShowcase: { eyebrow: "Dicipta dengan Screenshot Bro", title: "Bersama rakan hebat.", description: "Aplikasi indie yang sudah menggunakan Screenshot Bro." },
    },
    problem: {
      story: "Saya membina aplikasi ini selepas menghabiskan terlalu banyak masa dalam Figma membuat semula tangkapan skrin setiap kali teks atau warna berubah. Bina sistem sekali dan biarkan aplikasi selesaikan bakinya.",
    },
    download: {
      titleLine1: "Sedia untuk terbitkan",
      titleLine2: "tangkapan skrin yang lebih baik?",
      description: "Dapatkan di App Store dan rasai seluruh aliran kerja di Mac, iPad atau iPhone.",
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
export function appStoreCtaUrl(locale: LocaleCode = DEFAULT_LOCALE): string {
  return appStoreProductUrl(getLocaleInfo(locale).storefront);
}

export function getLocaleFromPath(pathname: string): LocaleCode {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocaleCode(segment) ? segment : DEFAULT_LOCALE;
}

// The Templates section's copy, kept apart from the per-locale overrides so the
// whole feature's strings sit in one place. `{count}` is filled in from the
// template list, so the number never drifts from what the gallery shows.
type TemplatesCopy = {
  nav: string;
  section: SectionCopy;
  ui: Pick<
    HomeCopy["ui"],
    | "templateAlt"
    | "templateMeta"
    | "startWithTemplate"
    | "templatePickerLabel"
    | "previousTemplate"
    | "nextTemplate"
    | "pauseTemplates"
    | "playTemplates"
    | "showAllTemplates"
    | "showFewerTemplates"
  >;
};

const LOCALIZED_TEMPLATES_COPY: Record<Exclude<LocaleCode, "en">, TemplatesCopy> = {
  es: {
    nav: "Plantillas",
    section: {
      eyebrow: "Plantillas",
      title: "{count} plantillas. Elige una y añade tus capturas.",
      description: "Cada proyecto puede empezar con un diseño terminado: titulares, fondos y marcos de dispositivo ya colocados. Cada vista previa es una exportación real de la app, solo con las capturas cambiadas. Después puedes cambiar cualquier color, fuente o texto.",
    },
    ui: {
      templateAlt: (name) => `Plantilla ${name} exportada desde Screenshot Bro: una fila de capturas de App Store con titulares y marcos de iPhone`,
      templateMeta: (columns, width, height) => `${columns} capturas, ${width}×${height} px cada una`,
      startWithTemplate: "Empezar con esta plantilla",
      templatePickerLabel: "Elige una plantilla para verla",
      previousTemplate: "Plantilla anterior",
      nextTemplate: "Plantilla siguiente",
      pauseTemplates: "Pausar la rotación de plantillas",
      playTemplates: "Reanudar la rotación de plantillas",
      showAllTemplates: (count) => `Ver las ${count} plantillas`,
      showFewerTemplates: "Ver menos",
    },
  },
  zh: {
    nav: "模板",
    section: {
      eyebrow: "模板",
      title: "{count} 套模板。选一套，放入你的截图。",
      description: "每个项目都可以从成品设计开始：标题、背景和设备边框都已排好。下面的每个预览都是应用真实导出的结果，只替换了截图。之后可以随意修改颜色、字体和文案。",
    },
    ui: {
      templateAlt: (name) => `从 Screenshot Bro 导出的 ${name} 模板：一行带标题和 iPhone 边框的 App Store 截图`,
      templateMeta: (columns, width, height) => `${columns} 张截图，每张 ${width}×${height} 像素`,
      startWithTemplate: "使用此模板开始",
      templatePickerLabel: "选择要预览的模板",
      previousTemplate: "上一个模板",
      nextTemplate: "下一个模板",
      pauseTemplates: "暂停模板轮播",
      playTemplates: "播放模板轮播",
      showAllTemplates: (count) => `查看全部 ${count} 个模板`,
      showFewerTemplates: "收起",
    },
  },
  hi: {
    nav: "टेम्पलेट",
    section: {
      eyebrow: "टेम्पलेट",
      title: "{count} टेम्पलेट। एक चुनें, अपने स्क्रीनशॉट डालें।",
      description: "हर प्रोजेक्ट एक तैयार डिज़ाइन से शुरू हो सकता है: हेडलाइन, बैकग्राउंड और डिवाइस फ्रेम पहले से सेट। नीचे हर प्रीव्यू ऐप का असली एक्सपोर्ट है, बस स्क्रीनशॉट बदले गए हैं। बाद में कोई भी रंग, फ़ॉन्ट या टेक्स्ट बदलें।",
    },
    ui: {
      templateAlt: (name) => `Screenshot Bro से एक्सपोर्ट किया गया ${name} टेम्पलेट: हेडलाइन और iPhone फ्रेम के साथ App Store स्क्रीनशॉट की एक पंक्ति`,
      templateMeta: (columns, width, height) => `${columns} स्क्रीनशॉट, हर एक ${width}×${height} px`,
      startWithTemplate: "इस टेम्पलेट से शुरू करें",
      templatePickerLabel: "प्रीव्यू के लिए टेम्पलेट चुनें",
      previousTemplate: "पिछला टेम्पलेट",
      nextTemplate: "अगला टेम्पलेट",
      pauseTemplates: "टेम्पलेट रोटेशन रोकें",
      playTemplates: "टेम्पलेट रोटेशन चलाएँ",
      showAllTemplates: (count) => `सभी ${count} टेम्पलेट देखें`,
      showFewerTemplates: "कम दिखाएँ",
    },
  },
  fr: {
    nav: "Modèles",
    section: {
      eyebrow: "Modèles",
      title: "{count} modèles. Choisissez-en un, ajoutez vos captures.",
      description: "Chaque projet peut partir d'un design fini : titres, arrière-plans et cadres d'appareil déjà en place. Chaque aperçu ci-dessous est un vrai export de l'app, seules les captures ont changé. Modifiez ensuite n'importe quelle couleur, police ou texte.",
    },
    ui: {
      templateAlt: (name) => `Modèle ${name} exporté depuis Screenshot Bro : une rangée de captures App Store avec titres et cadres d'iPhone`,
      templateMeta: (columns, width, height) => `${columns} captures, ${width}×${height} px chacune`,
      startWithTemplate: "Commencer avec ce modèle",
      templatePickerLabel: "Choisissez un modèle à prévisualiser",
      previousTemplate: "Modèle précédent",
      nextTemplate: "Modèle suivant",
      pauseTemplates: "Mettre en pause le défilement des modèles",
      playTemplates: "Reprendre le défilement des modèles",
      showAllTemplates: (count) => `Voir les ${count} modèles`,
      showFewerTemplates: "Voir moins",
    },
  },
  ar: {
    nav: "القوالب",
    section: {
      eyebrow: "القوالب",
      title: "{count} قالبًا. اختر واحدًا وأضف لقطاتك.",
      description: "يمكن أن يبدأ كل مشروع من تصميم جاهز: العناوين والخلفيات وإطارات الأجهزة في أماكنها. كل معاينة أدناه تصدير حقيقي من التطبيق مع تبديل اللقطات فقط. غيّر أي لون أو خط أو نص لاحقًا.",
    },
    ui: {
      templateAlt: (name) => `قالب ${name} مُصدَّر من Screenshot Bro: صف من لقطات App Store مع عناوين وإطارات iPhone`,
      templateMeta: (columns, width, height) => `${columns} لقطات، كل منها ${width}×${height} بكسل`,
      startWithTemplate: "ابدأ بهذا القالب",
      templatePickerLabel: "اختر قالبًا لمعاينته",
      previousTemplate: "القالب السابق",
      nextTemplate: "القالب التالي",
      pauseTemplates: "إيقاف تبديل القوالب مؤقتًا",
      playTemplates: "تشغيل تبديل القوالب",
      showAllTemplates: (count) => `عرض كل القوالب (${count})`,
      showFewerTemplates: "عرض أقل",
    },
  },
  de: {
    nav: "Vorlagen",
    section: {
      eyebrow: "Vorlagen",
      title: "{count} Vorlagen. Eine wählen, Screenshots einsetzen.",
      description: "Jedes Projekt kann mit einem fertigen Design starten: Überschriften, Hintergründe und Geräterahmen sind schon gesetzt. Jede Vorschau unten ist ein echter Export aus der App, nur die Screenshots sind ausgetauscht. Farben, Schriften und Texte lassen sich danach frei ändern.",
    },
    ui: {
      templateAlt: (name) => `Vorlage ${name}, exportiert aus Screenshot Bro: eine Reihe App-Store-Screenshots mit Überschriften und iPhone-Rahmen`,
      templateMeta: (columns, width, height) => `${columns} Screenshots, je ${width}×${height} px`,
      startWithTemplate: "Mit dieser Vorlage starten",
      templatePickerLabel: "Vorlage für die Vorschau wählen",
      previousTemplate: "Vorherige Vorlage",
      nextTemplate: "Nächste Vorlage",
      pauseTemplates: "Vorlagenwechsel pausieren",
      playTemplates: "Vorlagenwechsel fortsetzen",
      showAllTemplates: (count) => `Alle ${count} Vorlagen anzeigen`,
      showFewerTemplates: "Weniger anzeigen",
    },
  },
  ja: {
    nav: "テンプレート",
    section: {
      eyebrow: "テンプレート",
      title: "{count} 種類のテンプレート。選んでスクリーンショットを入れるだけ。",
      description: "どのプロジェクトも完成したデザインから始められます。見出し、背景、デバイスフレームは配置済み。下のプレビューはすべてアプリからの実際の書き出しで、差し替えたのはスクリーンショットだけです。色やフォント、文言は後から自由に変更できます。",
    },
    ui: {
      templateAlt: (name) => `Screenshot Bro から書き出した ${name} テンプレート：見出しと iPhone フレーム付きの App Store スクリーンショット 1 行`,
      templateMeta: (columns, width, height) => `スクリーンショット ${columns} 枚、各 ${width}×${height} px`,
      startWithTemplate: "このテンプレートで始める",
      templatePickerLabel: "プレビューするテンプレートを選択",
      previousTemplate: "前のテンプレート",
      nextTemplate: "次のテンプレート",
      pauseTemplates: "テンプレートの自動切り替えを一時停止",
      playTemplates: "テンプレートの自動切り替えを再開",
      showAllTemplates: (count) => `${count} 個のテンプレートをすべて表示`,
      showFewerTemplates: "表示を減らす",
    },
  },
  pt: {
    nav: "Modelos",
    section: {
      eyebrow: "Modelos",
      title: "{count} modelos. Escolha um e coloque suas capturas.",
      description: "Todo projeto pode começar de um design pronto: títulos, fundos e molduras de dispositivo já posicionados. Cada prévia abaixo é uma exportação real do app, só com as capturas trocadas. Depois, mude qualquer cor, fonte ou texto.",
    },
    ui: {
      templateAlt: (name) => `Modelo ${name} exportado do Screenshot Bro: uma fileira de capturas da App Store com títulos e molduras de iPhone`,
      templateMeta: (columns, width, height) => `${columns} capturas, ${width}×${height} px cada`,
      startWithTemplate: "Começar com este modelo",
      templatePickerLabel: "Escolha um modelo para visualizar",
      previousTemplate: "Modelo anterior",
      nextTemplate: "Próximo modelo",
      pauseTemplates: "Pausar a rotação de modelos",
      playTemplates: "Retomar a rotação de modelos",
      showAllTemplates: (count) => `Ver todos os ${count} modelos`,
      showFewerTemplates: "Ver menos",
    },
  },
  it: {
    nav: "Modelli",
    section: {
      eyebrow: "Modelli",
      title: "{count} modelli. Scegline uno e inserisci i tuoi screenshot.",
      description: "Ogni progetto può partire da un design finito: titoli, sfondi e cornici dei dispositivi già al loro posto. Ogni anteprima qui sotto è una vera esportazione dall'app, con i soli screenshot sostituiti. Poi cambia qualsiasi colore, font o testo.",
    },
    ui: {
      templateAlt: (name) => `Modello ${name} esportato da Screenshot Bro: una fila di screenshot per l'App Store con titoli e cornici iPhone`,
      templateMeta: (columns, width, height) => `${columns} screenshot, ${width}×${height} px ciascuno`,
      startWithTemplate: "Inizia con questo modello",
      templatePickerLabel: "Scegli un modello da visualizzare",
      previousTemplate: "Modello precedente",
      nextTemplate: "Modello successivo",
      pauseTemplates: "Metti in pausa la rotazione dei modelli",
      playTemplates: "Riprendi la rotazione dei modelli",
      showAllTemplates: (count) => `Mostra tutti i ${count} modelli`,
      showFewerTemplates: "Mostra meno",
    },
  },
  ko: {
    nav: "템플릿",
    section: {
      eyebrow: "템플릿",
      title: "템플릿 {count}종. 하나 고르고 스크린샷만 넣으세요.",
      description: "모든 프로젝트를 완성된 디자인에서 시작할 수 있습니다. 헤드라인, 배경, 기기 프레임이 이미 배치되어 있습니다. 아래 미리보기는 모두 앱에서 실제로 내보낸 결과이며 스크린샷만 바꿨습니다. 색상, 글꼴, 문구는 나중에 자유롭게 바꾸세요.",
    },
    ui: {
      templateAlt: (name) => `Screenshot Bro에서 내보낸 ${name} 템플릿: 헤드라인과 iPhone 프레임이 있는 App Store 스크린샷 한 줄`,
      templateMeta: (columns, width, height) => `스크린샷 ${columns}장, 각 ${width}×${height}px`,
      startWithTemplate: "이 템플릿으로 시작",
      templatePickerLabel: "미리 볼 템플릿 선택",
      previousTemplate: "이전 템플릿",
      nextTemplate: "다음 템플릿",
      pauseTemplates: "템플릿 자동 전환 일시정지",
      playTemplates: "템플릿 자동 전환 재생",
      showAllTemplates: (count) => `템플릿 ${count}개 모두 보기`,
      showFewerTemplates: "간단히 보기",
    },
  },
  uk: {
    nav: "Шаблони",
    section: {
      eyebrow: "Шаблони",
      title: "{count} шаблонів. Оберіть один і додайте свої скриншоти.",
      description: "Кожен проєкт може стартувати з готового дизайну: заголовки, фони й рамки пристроїв уже на місцях. Кожне прев'ю нижче — справжній експорт із застосунку, змінено лише скриншоти. Потім змінюйте будь-який колір, шрифт чи текст.",
    },
    ui: {
      templateAlt: (name) => `Шаблон ${name}, експортований зі Screenshot Bro: ряд скриншотів для App Store із заголовками та рамками iPhone`,
      templateMeta: (columns, width, height) => `Скриншотів: ${columns}, кожен ${width}×${height} px`,
      startWithTemplate: "Почати з цього шаблону",
      templatePickerLabel: "Оберіть шаблон для перегляду",
      previousTemplate: "Попередній шаблон",
      nextTemplate: "Наступний шаблон",
      pauseTemplates: "Призупинити зміну шаблонів",
      playTemplates: "Відновити зміну шаблонів",
      showAllTemplates: (count) => `Показати всі ${count} шаблони`,
      showFewerTemplates: "Показати менше",
    },
  },
  pl: {
    nav: "Szablony",
    section: {
      eyebrow: "Szablony",
      title: "{count} szablonów. Wybierz jeden i wstaw swoje zrzuty.",
      description: "Każdy projekt może zacząć się od gotowego projektu: nagłówki, tła i ramki urządzeń są już na miejscu. Każdy podgląd poniżej to prawdziwy eksport z aplikacji, podmieniono tylko zrzuty ekranu. Potem zmień dowolny kolor, czcionkę lub tekst.",
    },
    ui: {
      templateAlt: (name) => `Szablon ${name} wyeksportowany ze Screenshot Bro: rząd zrzutów do App Store z nagłówkami i ramkami iPhone`,
      templateMeta: (columns, width, height) => `Zrzuty: ${columns}, każdy ${width}×${height} px`,
      startWithTemplate: "Zacznij od tego szablonu",
      templatePickerLabel: "Wybierz szablon do podglądu",
      previousTemplate: "Poprzedni szablon",
      nextTemplate: "Następny szablon",
      pauseTemplates: "Wstrzymaj zmianę szablonów",
      playTemplates: "Wznów zmianę szablonów",
      showAllTemplates: (count) => `Pokaż wszystkie szablony (${count})`,
      showFewerTemplates: "Pokaż mniej",
    },
  },
  tr: {
    nav: "Şablonlar",
    section: {
      eyebrow: "Şablonlar",
      title: "{count} şablon. Birini seçin, ekran görüntülerinizi ekleyin.",
      description: "Her proje hazır bir tasarımla başlayabilir: başlıklar, arka planlar ve cihaz çerçeveleri yerinde. Aşağıdaki her önizleme uygulamadan alınmış gerçek bir dışa aktarımdır; yalnızca ekran görüntüleri değiştirildi. Sonra istediğiniz rengi, yazı tipini veya metni değiştirin.",
    },
    ui: {
      templateAlt: (name) => `Screenshot Bro'dan dışa aktarılan ${name} şablonu: başlıklı ve iPhone çerçeveli bir sıra App Store ekran görüntüsü`,
      templateMeta: (columns, width, height) => `${columns} ekran görüntüsü, her biri ${width}×${height} px`,
      startWithTemplate: "Bu şablonla başla",
      templatePickerLabel: "Önizlemek için bir şablon seçin",
      previousTemplate: "Önceki şablon",
      nextTemplate: "Sonraki şablon",
      pauseTemplates: "Şablon geçişini duraklat",
      playTemplates: "Şablon geçişini başlat",
      showAllTemplates: (count) => `${count} şablonun tümünü göster`,
      showFewerTemplates: "Daha az göster",
    },
  },
  nl: {
    nav: "Sjablonen",
    section: {
      eyebrow: "Sjablonen",
      title: "{count} sjablonen. Kies er een en zet je screenshots erin.",
      description: "Elk project kan beginnen met een kant-en-klaar ontwerp: koppen, achtergronden en apparaatframes staan al klaar. Elke preview hieronder is een echte export uit de app, alleen de screenshots zijn vervangen. Pas daarna elke kleur, elk lettertype of elke tekst aan.",
    },
    ui: {
      templateAlt: (name) => `Sjabloon ${name} geëxporteerd uit Screenshot Bro: een rij App Store-screenshots met koppen en iPhone-frames`,
      templateMeta: (columns, width, height) => `${columns} screenshots, elk ${width}×${height} px`,
      startWithTemplate: "Begin met dit sjabloon",
      templatePickerLabel: "Kies een sjabloon om te bekijken",
      previousTemplate: "Vorig sjabloon",
      nextTemplate: "Volgend sjabloon",
      pauseTemplates: "Sjabloonrotatie pauzeren",
      playTemplates: "Sjabloonrotatie hervatten",
      showAllTemplates: (count) => `Alle ${count} sjablonen tonen`,
      showFewerTemplates: "Minder tonen",
    },
  },
  id: {
    nav: "Templat",
    section: {
      eyebrow: "Templat",
      title: "{count} templat. Pilih satu, masukkan tangkapan layar Anda.",
      description: "Setiap proyek bisa dimulai dari desain jadi: judul, latar, dan bingkai perangkat sudah tertata. Setiap pratinjau di bawah adalah ekspor asli dari aplikasi, hanya tangkapan layarnya yang diganti. Ubah warna, font, atau teks apa pun setelahnya.",
    },
    ui: {
      templateAlt: (name) => `Templat ${name} yang diekspor dari Screenshot Bro: satu baris tangkapan layar App Store dengan judul dan bingkai iPhone`,
      templateMeta: (columns, width, height) => `${columns} tangkapan layar, masing-masing ${width}×${height} px`,
      startWithTemplate: "Mulai dengan templat ini",
      templatePickerLabel: "Pilih templat untuk pratinjau",
      previousTemplate: "Templat sebelumnya",
      nextTemplate: "Templat berikutnya",
      pauseTemplates: "Jeda rotasi templat",
      playTemplates: "Putar rotasi templat",
      showAllTemplates: (count) => `Lihat semua ${count} templat`,
      showFewerTemplates: "Tampilkan lebih sedikit",
    },
  },
  vi: {
    nav: "Mẫu",
    section: {
      eyebrow: "Mẫu",
      title: "{count} mẫu. Chọn một mẫu, thả ảnh chụp màn hình vào.",
      description: "Mỗi dự án có thể bắt đầu từ một thiết kế hoàn chỉnh: tiêu đề, nền và khung thiết bị đã sắp sẵn. Mỗi bản xem trước bên dưới là bản xuất thật từ ứng dụng, chỉ thay ảnh chụp màn hình. Sau đó đổi bất kỳ màu, phông chữ hay nội dung nào.",
    },
    ui: {
      templateAlt: (name) => `Mẫu ${name} xuất từ Screenshot Bro: một hàng ảnh chụp App Store có tiêu đề và khung iPhone`,
      templateMeta: (columns, width, height) => `${columns} ảnh chụp, mỗi ảnh ${width}×${height} px`,
      startWithTemplate: "Bắt đầu với mẫu này",
      templatePickerLabel: "Chọn mẫu để xem trước",
      previousTemplate: "Mẫu trước",
      nextTemplate: "Mẫu tiếp theo",
      pauseTemplates: "Tạm dừng chuyển mẫu",
      playTemplates: "Tiếp tục chuyển mẫu",
      showAllTemplates: (count) => `Xem tất cả ${count} mẫu`,
      showFewerTemplates: "Thu gọn",
    },
  },
  th: {
    nav: "เทมเพลต",
    section: {
      eyebrow: "เทมเพลต",
      title: "{count} เทมเพลต เลือกหนึ่งแบบ แล้วใส่ภาพหน้าจอของคุณ",
      description: "ทุกโปรเจกต์เริ่มจากดีไซน์ที่เสร็จแล้วได้ ทั้งหัวข้อ พื้นหลัง และกรอบอุปกรณ์จัดวางไว้ให้ ตัวอย่างด้านล่างทุกภาพคือไฟล์ที่ส่งออกจริงจากแอป เปลี่ยนแค่ภาพหน้าจอเท่านั้น จากนั้นปรับสี ฟอนต์ หรือข้อความได้ตามต้องการ",
    },
    ui: {
      templateAlt: (name) => `เทมเพลต ${name} ที่ส่งออกจาก Screenshot Bro: แถวภาพหน้าจอ App Store พร้อมหัวข้อและกรอบ iPhone`,
      templateMeta: (columns, width, height) => `ภาพหน้าจอ ${columns} ภาพ ภาพละ ${width}×${height} px`,
      startWithTemplate: "เริ่มด้วยเทมเพลตนี้",
      templatePickerLabel: "เลือกเทมเพลตเพื่อดูตัวอย่าง",
      previousTemplate: "เทมเพลตก่อนหน้า",
      nextTemplate: "เทมเพลตถัดไป",
      pauseTemplates: "หยุดการสลับเทมเพลตชั่วคราว",
      playTemplates: "เล่นการสลับเทมเพลต",
      showAllTemplates: (count) => `ดูเทมเพลตทั้งหมด ${count} แบบ`,
      showFewerTemplates: "แสดงน้อยลง",
    },
  },
  sv: {
    nav: "Mallar",
    section: {
      eyebrow: "Mallar",
      title: "{count} mallar. Välj en och lägg in dina skärmbilder.",
      description: "Varje projekt kan börja från en färdig design: rubriker, bakgrunder och enhetsramar är redan på plats. Varje förhandsvisning nedan är en riktig export från appen där bara skärmbilderna bytts ut. Ändra sedan valfri färg, typsnitt eller text.",
    },
    ui: {
      templateAlt: (name) => `Mallen ${name} exporterad från Screenshot Bro: en rad App Store-skärmbilder med rubriker och iPhone-ramar`,
      templateMeta: (columns, width, height) => `${columns} skärmbilder, ${width}×${height} px vardera`,
      startWithTemplate: "Börja med den här mallen",
      templatePickerLabel: "Välj en mall att förhandsgranska",
      previousTemplate: "Föregående mall",
      nextTemplate: "Nästa mall",
      pauseTemplates: "Pausa mallväxlingen",
      playTemplates: "Starta mallväxlingen",
      showAllTemplates: (count) => `Visa alla ${count} mallar`,
      showFewerTemplates: "Visa färre",
    },
  },
  da: {
    nav: "Skabeloner",
    section: {
      eyebrow: "Skabeloner",
      title: "{count} skabeloner. Vælg én, og sæt dine skærmbilleder ind.",
      description: "Hvert projekt kan starte fra et færdigt design: overskrifter, baggrunde og enhedsrammer er allerede på plads. Hver forhåndsvisning nedenfor er en rigtig eksport fra appen, hvor kun skærmbillederne er skiftet ud. Ret bagefter enhver farve, skrifttype eller tekst.",
    },
    ui: {
      templateAlt: (name) => `Skabelonen ${name} eksporteret fra Screenshot Bro: en række App Store-skærmbilleder med overskrifter og iPhone-rammer`,
      templateMeta: (columns, width, height) => `${columns} skærmbilleder, ${width}×${height} px hver`,
      startWithTemplate: "Start med denne skabelon",
      templatePickerLabel: "Vælg en skabelon at se",
      previousTemplate: "Forrige skabelon",
      nextTemplate: "Næste skabelon",
      pauseTemplates: "Sæt skabelonskift på pause",
      playTemplates: "Genoptag skabelonskift",
      showAllTemplates: (count) => `Vis alle ${count} skabeloner`,
      showFewerTemplates: "Vis færre",
    },
  },
  fi: {
    nav: "Mallit",
    section: {
      eyebrow: "Mallit",
      title: "{count} mallia. Valitse yksi ja lisää kuvakaappauksesi.",
      description: "Jokainen projekti voi alkaa valmiista suunnittelusta: otsikot, taustat ja laitekehykset ovat jo paikoillaan. Jokainen alla oleva esikatselu on aito vienti sovelluksesta, vain kuvakaappaukset on vaihdettu. Muuta sen jälkeen mitä tahansa väriä, fonttia tai tekstiä.",
    },
    ui: {
      templateAlt: (name) => `Malli ${name} vietynä Screenshot Brosta: rivi App Store -kuvakaappauksia otsikoilla ja iPhone-kehyksillä`,
      templateMeta: (columns, width, height) => `${columns} kuvakaappausta, kukin ${width}×${height} px`,
      startWithTemplate: "Aloita tällä mallilla",
      templatePickerLabel: "Valitse esikatseltava malli",
      previousTemplate: "Edellinen malli",
      nextTemplate: "Seuraava malli",
      pauseTemplates: "Keskeytä mallien vaihtuminen",
      playTemplates: "Jatka mallien vaihtumista",
      showAllTemplates: (count) => `Näytä kaikki ${count} mallia`,
      showFewerTemplates: "Näytä vähemmän",
    },
  },
  no: {
    nav: "Maler",
    section: {
      eyebrow: "Maler",
      title: "{count} maler. Velg én, og legg inn skjermbildene dine.",
      description: "Hvert prosjekt kan starte fra et ferdig design: overskrifter, bakgrunner og enhetsrammer er allerede på plass. Hver forhåndsvisning nedenfor er en ekte eksport fra appen, der bare skjermbildene er byttet ut. Endre deretter hvilken som helst farge, skrift eller tekst.",
    },
    ui: {
      templateAlt: (name) => `Malen ${name} eksportert fra Screenshot Bro: en rad App Store-skjermbilder med overskrifter og iPhone-rammer`,
      templateMeta: (columns, width, height) => `${columns} skjermbilder, ${width}×${height} px hver`,
      startWithTemplate: "Start med denne malen",
      templatePickerLabel: "Velg en mal å forhåndsvise",
      previousTemplate: "Forrige mal",
      nextTemplate: "Neste mal",
      pauseTemplates: "Sett malbytte på pause",
      playTemplates: "Fortsett malbytte",
      showAllTemplates: (count) => `Vis alle ${count} malene`,
      showFewerTemplates: "Vis færre",
    },
  },
  cs: {
    nav: "Šablony",
    section: {
      eyebrow: "Šablony",
      title: "{count} šablon. Vyberte jednu a vložte své snímky.",
      description: "Každý projekt může začít hotovým návrhem: nadpisy, pozadí a rámečky zařízení jsou už rozmístěné. Každý náhled níže je skutečný export z aplikace, vyměněny jsou jen snímky obrazovky. Potom změňte libovolnou barvu, písmo nebo text.",
    },
    ui: {
      templateAlt: (name) => `Šablona ${name} exportovaná ze Screenshot Bro: řada snímků pro App Store s nadpisy a rámečky iPhonu`,
      templateMeta: (columns, width, height) => `Snímků: ${columns}, každý ${width}×${height} px`,
      startWithTemplate: "Začít s touto šablonou",
      templatePickerLabel: "Vyberte šablonu k náhledu",
      previousTemplate: "Předchozí šablona",
      nextTemplate: "Další šablona",
      pauseTemplates: "Pozastavit střídání šablon",
      playTemplates: "Spustit střídání šablon",
      showAllTemplates: (count) => `Zobrazit všech ${count} šablon`,
      showFewerTemplates: "Zobrazit méně",
    },
  },
  ro: {
    nav: "Șabloane",
    section: {
      eyebrow: "Șabloane",
      title: "{count} șabloane. Alege unul și adaugă capturile tale.",
      description: "Orice proiect poate porni de la un design gata făcut: titluri, fundaluri și rame de dispozitiv deja așezate. Fiecare previzualizare de mai jos este un export real din aplicație, doar capturile au fost înlocuite. Apoi schimbă orice culoare, font sau text.",
    },
    ui: {
      templateAlt: (name) => `Șablonul ${name} exportat din Screenshot Bro: un rând de capturi App Store cu titluri și rame de iPhone`,
      templateMeta: (columns, width, height) => `${columns} capturi, fiecare ${width}×${height} px`,
      startWithTemplate: "Începe cu acest șablon",
      templatePickerLabel: "Alege un șablon de previzualizat",
      previousTemplate: "Șablonul anterior",
      nextTemplate: "Șablonul următor",
      pauseTemplates: "Întrerupe rotația șabloanelor",
      playTemplates: "Pornește rotația șabloanelor",
      showAllTemplates: (count) => `Vezi toate cele ${count} șabloane`,
      showFewerTemplates: "Vezi mai puține",
    },
  },
  ms: {
    nav: "Templat",
    section: {
      eyebrow: "Templat",
      title: "{count} templat. Pilih satu, masukkan tangkapan skrin anda.",
      description: "Setiap projek boleh bermula daripada reka bentuk siap: tajuk, latar dan bingkai peranti sudah tersusun. Setiap pratonton di bawah ialah eksport sebenar daripada aplikasi, hanya tangkapan skrin yang ditukar. Kemudian ubah apa-apa warna, fon atau teks.",
    },
    ui: {
      templateAlt: (name) => `Templat ${name} dieksport daripada Screenshot Bro: satu baris tangkapan skrin App Store dengan tajuk dan bingkai iPhone`,
      templateMeta: (columns, width, height) => `${columns} tangkapan skrin, setiap satu ${width}×${height} px`,
      startWithTemplate: "Mula dengan templat ini",
      templatePickerLabel: "Pilih templat untuk pratonton",
      previousTemplate: "Templat sebelumnya",
      nextTemplate: "Templat seterusnya",
      pauseTemplates: "Jeda putaran templat",
      playTemplates: "Mainkan putaran templat",
      showAllTemplates: (count) => `Lihat kesemua ${count} templat`,
      showFewerTemplates: "Tunjuk kurang",
    },
  },
};

// Slots the Templates link in after Showcases, where the section sits on the page.
function withTemplatesNav(items: HomeCopy["navItems"], label: string): HomeCopy["navItems"] {
  if (items.some((item) => item.href === "#templates")) return items;
  const at = items.findIndex((item) => item.href === "#showcases") + 1;
  return [...items.slice(0, at), { label, href: "#templates" }, ...items.slice(at)];
}

export function getHomeCopy(locale: LocaleCode): HomeCopy {
  if (locale === DEFAULT_LOCALE) return EN_HOME_COPY;

  const localeInfo = getLocaleInfo(locale);
  const landingContent = LOCALIZED_LANDING_CONTENT[locale as Exclude<LocaleCode, "en">];
  const overrides = LOCALIZED_OVERRIDES[locale as Exclude<LocaleCode, "en">];
  const templates = LOCALIZED_TEMPLATES_COPY[locale as Exclude<LocaleCode, "en">];

  return {
    ...EN_HOME_COPY,
    ...landingContent,
    ...overrides,
    locale: localeInfo,
    navItems: withTemplatesNav(
      overrides.navItems ?? landingContent.navItems ?? EN_HOME_COPY.navItems,
      templates.nav,
    ),
    ui: {
      ...EN_HOME_COPY.ui,
      ...landingContent.ui,
      ...overrides.ui,
      ...templates.ui,
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
      templates: templates.section,
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
