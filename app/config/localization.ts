import type {
  AppScreenshot,
  FaqItem,
  FeatureItem,
  FeatureShowcase,
  NavItem,
  WorkflowStep,
} from "~/config/site";
import {
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

export type LocaleCode = "en" | "es" | "zh" | "hi" | "fr" | "ar" | "de" | "ja" | "pt" | "it" | "ko";

export type LocaleInfo = {
  code: LocaleCode;
  label: string;
  nativeLabel: string;
  htmlLang: string;
  ogLocale: string;
  dir: "ltr" | "rtl";
};

export const DEFAULT_LOCALE: LocaleCode = "en";

export const LOCALES: LocaleInfo[] = [
  { code: "en", label: "English", nativeLabel: "English", htmlLang: "en", ogLocale: "en_US", dir: "ltr" },
  { code: "es", label: "Spanish", nativeLabel: "Español", htmlLang: "es", ogLocale: "es_ES", dir: "ltr" },
  { code: "zh", label: "Chinese", nativeLabel: "简体中文", htmlLang: "zh-Hans", ogLocale: "zh_CN", dir: "ltr" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", htmlLang: "hi", ogLocale: "hi_IN", dir: "ltr" },
  { code: "fr", label: "French", nativeLabel: "Français", htmlLang: "fr", ogLocale: "fr_FR", dir: "ltr" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", htmlLang: "ar", ogLocale: "ar_AR", dir: "rtl" },
  { code: "de", label: "German", nativeLabel: "Deutsch", htmlLang: "de", ogLocale: "de_DE", dir: "ltr" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語", htmlLang: "ja", ogLocale: "ja_JP", dir: "ltr" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português", htmlLang: "pt-BR", ogLocale: "pt_BR", dir: "ltr" },
  { code: "it", label: "Italian", nativeLabel: "Italiano", htmlLang: "it", ogLocale: "it_IT", dir: "ltr" },
  { code: "ko", label: "Korean", nativeLabel: "한국어", htmlLang: "ko", ogLocale: "ko_KR", dir: "ltr" },
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
    docs: string;
    changelog: string;
    vsFastlane: string;
    community: string;
    privacy: string;
    terms: string;
    contact: string;
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
    watchOnInstagram: string;
    productLabel: string;
    resourcesLabel: string;
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
    reel: SectionCopy;
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
  siteTitle: `${SITE_NAME} — App Store & Google Play Screenshots`,
  siteDescription: SITE_DESCRIPTION,
  socialImageAlt:
    "Screenshot Bro — native Mac and iPad app for designing App Store and Google Play screenshots with device frames, gradients, and localization",
  primaryCtaLabel: "Get on the App Store",
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
    docs: "Docs",
    changelog: "Changelog",
    vsFastlane: "Compare to Fastlane",
    community: "Community",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
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
    watchOnInstagram: "Watch on Instagram",
    productLabel: "Product",
    resourcesLabel: "Resources",
    backToTop: "Back to top",
    appScreenshots: "App screenshots",
    previousScreenshot: "Previous screenshot",
    nextScreenshot: "Next screenshot",
    goToScreenshot: (index) => `Go to screenshot ${index}`,
    slideCount: (index, total) => `${index} of ${total}`,
    productHuntAlt:
      "ScreenshotBro App - Design and export beautiful App Store screenshots. | Product Hunt",
    availabilityNote:
      "macOS 15+ and iPadOS 18+ app | Swift & SwiftUI | Available on the App Store",
  },
  hero: {
    titleLead: "Design and ship",
    titleAccent: "App Store",
    titleRest: " screenshots.",
    descriptionLead:
      "Import your shots, wrap them in device frames, localize the copy, auto-translate missing text, and",
    descriptionStrong: "upload straight to App Store Connect",
    descriptionTail: "— all from one fast native Mac and iPad app.",
    videoLabel:
      "Screenshot Bro app demo - designing App Store screenshots with device frames, gradients, and batch export",
  },
  sections: {
    showcases: {
      eyebrow: "Showcases",
      title: "See the core workflow before you install.",
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
      title: "Everything you need. Nothing you don't.",
      description:
        "The feature set stays focused on layout speed, screenshot consistency, and export sanity. No browser tab, no general-purpose design suite, no repetitive resize work.",
    },
    screenshots: {
      eyebrow: "Screenshots",
      title: "See it in action.",
      description:
        "App Store screenshots of Screenshot Bro itself - the same editor you use for App Store and Google Play screenshot sets.",
    },
    reel: {
      eyebrow: "On Instagram",
      title: "A 60-second tour of the app.",
      description:
        "Watch device frames, layers, localized exports, and one-click App Store Connect upload come together inside Screenshot Bro.",
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

const LOCALIZED_OVERRIDES: Record<Exclude<LocaleCode, "en">, HomeCopyOverrides> = {
  es: {
    siteTitle: `${SITE_NAME} — Diseñador de capturas para App Store y Google Play en Mac y iPad`,
    siteDescription:
      "Diseña capturas para App Store y Google Play en una app nativa para Mac y iPad. Marcos de dispositivos, localización, traducción automática, exportación por lotes y subida directa a App Store Connect.",
    primaryCtaLabel: "Ver en App Store",
    navItems: [
      { label: "Ejemplos", href: "#showcases" },
      { label: "Funciones", href: "#features" },
      { label: "Flujo", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Disponible ahora en la App Store para Mac y iPad",
      "Flujo completo: importar, diseñar, traducir, localizar y exportar",
      "Subida directa a App Store Connect sin arrastrar archivos en el navegador",
    ],
    faqs: [
      {
        question: "¿Screenshot Bro es gratis?",
        answer:
          "Sí. El nivel gratuito no caduca: 1 proyecto con hasta 3 filas y 5 plantillas por fila, con acceso completo a todos los marcos, formas y locales y exportaciones sin marca de agua. Pro elimina esos límites y habilita la subida a App Store Connect y la sincronización por iCloud.",
      },
      {
        question: "¿Qué necesito para usarlo?",
        answer:
          "macOS 15 (Sequoia) o posterior en Mac, o iPadOS 18 o posterior en iPad. No hace falta dispositivo acompañante, cuenta ni conexión a internet para editar.",
      },
      {
        question: "¿Mis datos salen de mi dispositivo?",
        answer:
          "Por defecto, no. Los proyectos, capturas y tipografías se guardan localmente. La traducción automática usa el framework Translation de Apple en el dispositivo: sin claves API, sin servidores externos, sin analítica. La sincronización iCloud Drive es opcional y va por tu cuenta personal de iCloud.",
      },
      {
        question: "¿Cómo funciona la localización?",
        answer:
          "Elige entre 30 idiomas predefinidos o añade el tuyo. La traducción automática rellena el texto que falte en el dispositivo. Las traducciones se guardan como sobreescrituras por locale, así diseñas una vez y se aplica a todos los idiomas. La exportación organiza las carpetas por locale para subir directo a App Store Connect.",
      },
      {
        question: "¿Puedo subir directo a App Store Connect?",
        answer:
          "Sí. Conecta tu clave API de App Store Connect una vez (Issuer ID, Key ID y archivo .p8) y Screenshot Bro detecta el display type correcto, casa los locales con las localizaciones de App Store Connect y reemplaza las capturas en una sola pasada — sin arrastrar archivos en el navegador.",
      },
    ],
    ui: {
      skipToContent: "Saltar al contenido",
      changelog: "Novedades",
      vsFastlane: "Comparar con Fastlane",
      community: "Comunidad",
      privacy: "Privacidad",
      terms: "Términos",
      contact: "Contacto",
      followJourney: "Sigue mi progreso",
      madeWithLoveAt: "Hecho con ❤️ en",
      language: "Idioma",
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
        "App para macOS 15+ y iPadOS 18+ | Swift y SwiftUI | Disponible en la App Store",
    },
    hero: {
      titleLead: "Diseña y publica",
      titleAccent: "App Store",
      titleRest: " screenshots.",
      descriptionLead:
        "Importa tus capturas, añade marcos de dispositivo, localiza el texto, traduce lo que falte y",
      descriptionStrong: "sube todo directo a App Store Connect",
      descriptionTail: "— desde una app nativa para Mac y iPad rápida.",
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
    siteTitle: `${SITE_NAME} — Mac 和 iPad 上的 App Store 与 Google Play 截图设计工具`,
    siteDescription:
      "用原生 Mac 和 iPad 应用设计 App Store 和 Google Play 截图。设备边框、本地化、自动翻译、批量导出，并可直接上传到 App Store Connect。",
    primaryCtaLabel: "在 App Store 获取",
    benefits: [
      "现已在 Mac 和 iPad 的 App Store 上架",
      "完整流程：导入、设计、自动翻译、本地化和导出",
      "直接上传到 App Store Connect，不再在浏览器里拖放文件",
    ],
    faqs: [
      {
        question: "Screenshot Bro 是免费的吗？",
        answer:
          "是的。免费版没有时间限制：1 个项目，最多 3 行、每行 5 个模板，可使用全部设备外框、形状和语言，导出无水印。Pro 版解除这些限制，并启用 App Store Connect 上传与 iCloud 同步。",
      },
      {
        question: "运行需要什么？",
        answer:
          "Mac 需要 macOS 15（Sequoia）或更新版本，iPad 需要 iPadOS 18 或更新版本。日常编辑无需配套设备、账号或网络连接。",
      },
      {
        question: "我的数据会离开设备吗？",
        answer:
          "默认不会。项目、截图和字体都保存在本地。自动翻译通过苹果的 Translation 框架在设备本地运行——无 API key、无第三方服务器、无统计追踪。可选的 iCloud Drive 同步使用你自己的 iCloud 账号，我们没有任何中间服务器。",
      },
      {
        question: "本地化是怎么运作的？",
        answer:
          "可从 30 种语言预设中选择，也可以添加自定义语言代码。自动翻译在本地补齐缺失文案。翻译保存为按语言的文本覆盖，所以布局、颜色、图片在所有语言中共用——设计一次，多语言交付。导出按语言分文件夹，可直接上传到 App Store Connect。",
      },
      {
        question: "可以直接上传到 App Store Connect 吗？",
        answer:
          "可以。一次配置 App Store Connect API Key（Issuer ID、Key ID 和 .p8 文件）。Screenshot Bro 会自动识别每行的显示类型，把项目语言匹配到 App Store Connect 的本地化，并一次性替换所有截图——无需在浏览器里拖拽。",
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
      changelog: "更新日志",
      vsFastlane: "对比 Fastlane",
      community: "社区",
      privacy: "隐私",
      terms: "条款",
      contact: "联系",
      followJourney: "关注我的进展",
      madeWithLoveAt: "用 ❤️ 制作于",
      language: "语言",
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
      availabilityNote: "macOS 15+ 和 iPadOS 18+ 应用 | Swift 和 SwiftUI | 已上架 App Store",
    },
    hero: {
      titleLead: "设计并发布",
      titleAccent: "App Store",
      titleRest: " 截图。",
      descriptionLead:
        "导入截图，套用设备边框，本地化文案，自动翻译缺失文本，并",
      descriptionStrong: "直接上传到 App Store Connect",
      descriptionTail: "— 全部在一个快速的原生 Mac 和 iPad 应用中完成。",
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
    siteTitle: `${SITE_NAME} — Mac और iPad के लिए App Store और Google Play स्क्रीनशॉट डिजाइनर`,
    siteDescription:
      "नेटिव Mac और iPad ऐप में App Store और Google Play स्क्रीनशॉट डिजाइन करें। डिवाइस फ्रेम, लोकलाइजेशन, ऑटो-ट्रांसलेट, बैच एक्सपोर्ट और App Store Connect पर सीधा अपलोड।",
    primaryCtaLabel: "App Store पर पाएं",
    benefits: [
      "Mac और iPad के लिए App Store पर अभी उपलब्ध",
      "पूरा workflow: import, design, auto-translate, localize और export",
      "App Store Connect पर सीधा upload, browser में drag-and-drop नहीं",
    ],
    faqs: [
      {
        question: "क्या Screenshot Bro फ्री है?",
        answer:
          "हां। Free tier की कोई time limit नहीं है: 1 project, अधिकतम 3 rows और हर row में 5 templates, सभी device frames, shapes और locales तक पूरी पहुंच, बिना watermark exports। Pro इन limits को हटाता है और App Store Connect upload व iCloud sync unlock करता है।",
      },
      {
        question: "इसे चलाने के लिए क्या चाहिए?",
        answer:
          "Mac पर macOS 15 (Sequoia) या उससे नया, या iPad पर iPadOS 18 या उससे नया। Editing के लिए न companion device चाहिए, न account, न internet connection।",
      },
      {
        question: "क्या मेरा data device से बाहर जाता है?",
        answer:
          "Default रूप से नहीं। Projects, screenshots और fonts local में रहते हैं। Auto-translate Apple के on-device Translation framework से चलता है — कोई API key नहीं, कोई third-party server नहीं, कोई analytics नहीं। Optional iCloud Drive sync आपके personal iCloud account से होता है; हमारा कोई intermediate server नहीं है।",
      },
      {
        question: "Localization कैसे काम करती है?",
        answer:
          "30 language presets में से चुनें, या custom code define करें। Auto-translate missing text on-device भर देता है। Translations per-locale text overrides के रूप में save होती हैं, इसलिए layout, color और images सभी locales में share रहते हैं — design एक बार, deploy हर भाषा में। Exports locale folders में organize होते हैं जिन्हें App Store Connect सीधे ले लेता है।",
      },
      {
        question: "क्या App Store Connect पर direct upload हो सकता है?",
        answer:
          "हां। App Store Connect API key एक बार configure करें (Issuer ID, Key ID और .p8 file)। Screenshot Bro हर row के लिए सही display type detect करता है, project locales को App Store Connect localizations से match करता है और एक pass में मौजूदा screenshots replace कर देता है — browser में drag-drop की जरूरत नहीं।",
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
      changelog: "बदलाव",
      vsFastlane: "Fastlane से तुलना",
      community: "समुदाय",
      privacy: "प्राइवेसी",
      terms: "शर्तें",
      contact: "संपर्क",
      followJourney: "मेरी यात्रा देखें",
      madeWithLoveAt: "❤️ से बनाया, यहां:",
      language: "भाषा",
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
        "macOS 15+ और iPadOS 18+ ऐप | Swift और SwiftUI | App Store पर उपलब्ध",
    },
    hero: {
      titleLead: "डिजाइन करें और शिप करें",
      titleAccent: "App Store",
      titleRest: " स्क्रीनशॉट।",
      descriptionLead:
        "अपने शॉट्स इंपोर्ट करें, डिवाइस फ्रेम लगाएं, कॉपी लोकलाइज करें, छूटा टेक्स्ट ऑटो-ट्रांसलेट करें और",
      descriptionStrong: "सीधे App Store Connect पर अपलोड करें",
      descriptionTail: "— सब एक तेज नेटिव Mac और iPad ऐप से।",
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
    siteTitle: `${SITE_NAME} — Créateur de captures App Store et Google Play pour Mac et iPad`,
    siteDescription:
      "Créez des captures App Store et Google Play dans une app native pour Mac et iPad. Cadres d'appareils, localisation, traduction automatique, export groupé et envoi direct vers App Store Connect.",
    primaryCtaLabel: "Voir sur l'App Store",
    benefits: [
      "Disponible maintenant sur l'App Store pour Mac et iPad",
      "Flux complet : import, design, traduction automatique, localisation et export",
      "Envoi direct vers App Store Connect sans glisser-déposer dans le navigateur",
    ],
    faqs: [
      {
        question: "Screenshot Bro est-il gratuit ?",
        answer:
          "Oui. La version gratuite n'expire jamais : 1 projet, jusqu'à 3 rangées et 5 templates par rangée, accès complet à tous les cadres, formes et locales, exports sans filigrane. Pro lève ces limites et active l'envoi vers App Store Connect et la sync iCloud.",
      },
      {
        question: "Que faut-il pour l'utiliser ?",
        answer:
          "macOS 15 (Sequoia) ou plus récent sur Mac, ou iPadOS 18 ou plus récent sur iPad. Aucun appareil compagnon, compte ou connexion internet n'est requis pour éditer.",
      },
      {
        question: "Mes données quittent-elles mon appareil ?",
        answer:
          "Par défaut, non. Projets, captures et polices restent en local. La traduction automatique passe par le framework Translation d'Apple sur l'appareil — pas de clé API, pas de serveur tiers, pas d'analytics. La sync iCloud Drive est optionnelle et utilise votre compte iCloud personnel ; nous n'opérons aucun serveur intermédiaire.",
      },
      {
        question: "Comment fonctionne la localisation ?",
        answer:
          "Choisissez parmi 30 langues prédéfinies, ou ajoutez votre propre code. La traduction automatique remplit le texte manquant sur l'appareil. Les traductions sont enregistrées comme des surcharges texte par locale : layout, couleurs et images sont partagés entre toutes les langues. Conception unique, livraison dans chaque langue. L'export crée un dossier par locale, prêt pour App Store Connect.",
      },
      {
        question: "Puis-je envoyer directement vers App Store Connect ?",
        answer:
          "Oui. Configurez votre clé API App Store Connect une fois (Issuer ID, Key ID et fichier .p8). Screenshot Bro détecte le bon display type pour chaque rangée, fait correspondre vos locales aux localisations App Store Connect et remplace les captures existantes en une seule passe — sans glisser-déposer dans le navigateur.",
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
      changelog: "Nouveautés",
      vsFastlane: "Comparer à Fastlane",
      community: "Communauté",
      privacy: "Confidentialité",
      terms: "Conditions",
      contact: "Contact",
      followJourney: "Suivre mon parcours",
      madeWithLoveAt: "Fait avec ❤️ chez",
      language: "Langue",
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
        "App macOS 15+ et iPadOS 18+ | Swift et SwiftUI | Disponible sur l'App Store",
    },
    hero: {
      titleLead: "Créez et publiez",
      titleAccent: "App Store",
      titleRest: " screenshots.",
      descriptionLead:
        "Importez vos captures, ajoutez des cadres d'appareils, localisez le texte, traduisez automatiquement ce qui manque et",
      descriptionStrong: "envoyez directement vers App Store Connect",
      descriptionTail: "— depuis une app native rapide pour Mac et iPad.",
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
    siteTitle: `${SITE_NAME} — مصمم لقطات App Store و Google Play على Mac و iPad`,
    siteDescription:
      "صمّم لقطات App Store و Google Play داخل تطبيق أصلي على Mac و iPad. إطارات أجهزة، توطين، ترجمة تلقائية، تصدير جماعي ورفع مباشر إلى App Store Connect.",
    primaryCtaLabel: "احصل عليه من App Store",
    benefits: [
      "متوفر الآن على App Store لأجهزة Mac و iPad",
      "سير كامل: استيراد، تصميم، ترجمة تلقائية، توطين وتصدير",
      "رفع مباشر إلى App Store Connect بدون السحب والإفلات في المتصفح",
    ],
    faqs: [
      {
        question: "هل Screenshot Bro مجاني؟",
        answer:
          "نعم. النسخة المجانية بلا حد زمني: مشروع واحد، حتى 3 صفوف و5 قوالب لكل صف، مع وصول كامل إلى جميع إطارات الأجهزة والأشكال واللغات وتصدير بدون علامة مائية. تزيل خطة Pro هذه الحدود وتُفعّل الرفع إلى App Store Connect ومزامنة iCloud.",
      },
      {
        question: "ما الذي أحتاجه لتشغيله؟",
        answer:
          "macOS 15 (Sequoia) أو أحدث على Mac، أو iPadOS 18 أو أحدث على iPad. لا حاجة إلى جهاز مرافق ولا حساب ولا اتصال إنترنت للتعديل اليومي.",
      },
      {
        question: "هل تغادر بياناتي جهازي؟",
        answer:
          "افتراضياً لا. تبقى المشاريع واللقطات والخطوط على القرص. تعمل الترجمة التلقائية عبر إطار Translation من Apple على الجهاز — بدون مفاتيح API ولا خوادم خارجية ولا تتبع. مزامنة iCloud Drive اختيارية وتستخدم حسابك الشخصي على iCloud؛ لا نشغّل أي خوادم وسيطة.",
      },
      {
        question: "كيف يعمل التوطين؟",
        answer:
          "اختر من بين 30 لغة جاهزة، أو أضف رمزك الخاص. تملأ الترجمة التلقائية النصوص الناقصة على الجهاز. تُحفظ الترجمات كتجاوزات نصية لكل لغة، فيما يبقى التصميم واللون والصور مشتركة بين جميع اللغات — صمم مرة واحدة، انشر بكل اللغات. يُنظَّم التصدير في مجلدات حسب اللغة جاهزة لـ App Store Connect.",
      },
      {
        question: "هل يمكن الرفع مباشرة إلى App Store Connect؟",
        answer:
          "نعم. اضبط مفتاح App Store Connect API مرة واحدة (Issuer ID وKey ID وملف .p8). يتعرّف Screenshot Bro تلقائياً على نوع الشاشة لكل صف، ويطابق لغات مشروعك مع توطينات App Store Connect، ويستبدل اللقطات الحالية في تمريرة واحدة — بدون السحب والإفلات في المتصفح.",
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
      changelog: "سجل التغييرات",
      vsFastlane: "مقارنة مع Fastlane",
      community: "المجتمع",
      privacy: "الخصوصية",
      terms: "الشروط",
      contact: "تواصل",
      followJourney: "تابع رحلتي",
      madeWithLoveAt: "صُنع بـ ❤️ في",
      language: "اللغة",
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
        "تطبيق macOS 15+ و iPadOS 18+ | Swift و SwiftUI | متوفر على App Store",
    },
    hero: {
      titleLead: "صمّم وانشر",
      titleAccent: "App Store",
      titleRest: " screenshots.",
      descriptionLead:
        "استورد لقطاتك، أضف إطارات الأجهزة، وطّن النصوص، ترجم النص المفقود تلقائياً، ثم",
      descriptionStrong: "ارفع مباشرة إلى App Store Connect",
      descriptionTail: "— كل ذلك من تطبيق أصلي وسريع على Mac و iPad.",
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
    siteTitle: `${SITE_NAME} — Screenshot-Designer für App Store & Google Play auf Mac und iPad`,
    siteDescription:
      "Gestalte Screenshots für den App Store und Google Play in einer nativen App für Mac und iPad. Geräterahmen, Lokalisierung, automatische Übersetzung, Batch-Export und direkter Upload zu App Store Connect.",
    primaryCtaLabel: "Im App Store laden",
    navItems: [
      { label: "Beispiele", href: "#showcases" },
      { label: "Funktionen", href: "#features" },
      { label: "Workflow", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Jetzt im App Store für Mac und iPad erhältlich",
      "Vollständiger Workflow: Importieren, Gestalten, Übersetzen, Lokalisieren und Exportieren",
      "Direkter Upload zu App Store Connect ohne lästiges Drag-and-Drop im Browser",
    ],
    faqs: [
      {
        question: "Ist Screenshot Bro kostenlos?",
        answer:
          "Ja. Die kostenlose Version läuft nicht ab: 1 Projekt mit bis zu 3 Zeilen und 5 Vorlagen pro Zeile, mit vollem Zugriff auf alle Geräterahmen, Formen und Lokalisierungen sowie wasserzeichenfreie Exporte. Pro hebt diese Limits auf und ermöglicht den Upload zu App Store Connect sowie iCloud-Synchronisierung.",
      },
      {
        question: "Was brauche ich, um die App zu nutzen?",
        answer:
          "macOS 15 (Sequoia) oder neuer auf dem Mac, oder iPadOS 18 oder neuer auf dem iPad. Kein Begleitgerät, kein Account und keine Internetverbindung für das Bearbeiten erforderlich.",
      },
      {
        question: "Verlassen meine Daten mein Gerät?",
        answer:
          "Standardmäßig nein. Projekte, Screenshots und Schriftarten werden lokal gespeichert. Die automatische Übersetzung läuft direkt auf dem Gerät über Apples Translation-Framework – keine API-Schlüssel, keine Drittanbieterserver, keine Analyse. Die optionale Synchronisierung über iCloud Drive läuft über Ihren persönlichen iCloud-Account; wir betreiben keine zwischengeschateden Server.",
      },
      {
        question: "Wie funktioniert die Lokalisierung?",
        answer:
          "Wählen Sie aus 30 vordefinierten Sprachen oder fügen Sie Ihren eigenen Sprachcode hinzu. Die automatische Übersetzung füllt fehlenden Text direkt auf dem Gerät aus. Übersetzungen werden als Text-Overrides pro Sprache gespeichert, sodass Layout, Farben und Bilder für alle Sprachen geteilt werden – einmal entwerfen, in jeder Sprache bereitstellen. Exporte werden in Ordnern nach Sprache organisiert, bereit für App Store Connect.",
      },
      {
        question: "Kann ich direkt zu App Store Connect hochladen?",
        answer:
          "Ja. Konfigurieren Sie einmalig Ihren App Store Connect API-Schlüssel (Issuer ID, Key ID und .p8-Datei). Screenshot Bro erkennt automatisch den richtigen Display-Typ für jede Zeile, gleicht die Projekt-Sprachen mit den Lokalisierungen in App Store Connect ab und ersetzt die vorhandenen Screenshots in einem Rutsch – ganz ohne Drag-and-Drop im Browser.",
      },
    ],
    ui: {
      skipToContent: "Zum Inhalt springen",
      blog: "Blog",
      changelog: "Changelog",
      vsFastlane: "Vergleich mit Fastlane",
      community: "Community",
      privacy: "Datenschutz",
      terms: "AGB",
      contact: "Kontakt",
      followJourney: "Folge meiner Reise",
      madeWithLoveAt: "Mit ❤️ gemacht in",
      language: "Sprache",
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
        "macOS 15+ und iPadOS 18+ App | Swift & SwiftUI | Im App Store erhältlich",
    },
    hero: {
      titleLead: "Gestalte und veröffentliche",
      titleAccent: "App Store",
      titleRest: " Screenshots.",
      descriptionLead:
        "Importiere deine Screenshots, passe sie in Geräterahmen ein, lokalisiere den Text, übersetze fehlende Texte automatisch und",
      descriptionStrong: "lade sie direkt zu App Store Connect hoch",
      descriptionTail: "— alles aus einer schnellen, nativen App für Mac und iPad.",
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
    siteTitle: `${SITE_NAME} — Mac・iPad用App Store & Google Playスクリーンショット作成ツール`,
    siteDescription:
      "App StoreとGoogle Play用のスクリーンショットをネイティブMac・iPadアプリでデザイン。デバイスフレーム、ローカライズ、自動翻訳、バッチ書き出し、App Store Connectへの直接アップロードに対応。",
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
          "はい。無料版に期限はありません。最大3行、各行5つのテンプレートまでの1プロジェクトを作成でき、すべてのデバイスフレーム、図形、言語へのアクセスと、ウォーターマークなしの書き出しが可能です。Proプランではこれらの制限が解除され、App Store ConnectへのアップロードとiCloud同期が有効になります。",
      },
      {
        question: "動作環境を教えてください。",
        answer:
          "MacではmacOS 15（Sequoia）以降、iPadではiPadOS 18以降が必要です。編集作業に別のデバイスやアカウント作成、インターネット接続は必要ありません。",
      },
      {
        question: "データがデバイスの外部に送信されることはありますか？",
        answer:
          "デフォルトでは送信されません。プロジェクト、スクリーンショット、フォントはローカルに保存されます。自動翻訳はAppleのオンデバイスTranslationフレームワークを使用するため、APIキーや外部サーバー、分析機能は一切使用しません。iCloud Driveの同期はオプションで、ユーザー自身の個人用iCloudアカウント経由で行われます。開発元が中間サーバーを運営することはありません。",
      },
      {
        question: "ローカライズはどのように機能しますか？",
        answer:
          "30以上のプリセット言語から選択するか、独自の言語コードを追加できます。自動翻訳機能により、不足しているテキストをデバイス上で補完します。翻訳は言語ごとのテキスト上書き（オーバーライド）として保存されるため、レイアウト、カラー、画像はすべての言語で共有されます。一度デザインすれば、すべての言語に展開可能です。書き出し時は言語ごとにフォルダが自動整理され、App Store Connectにそのままアップロードできます。",
      },
      {
        question: "App Store Connectに直接アップロードできますか？",
        answer:
          "はい。App Store ConnectのAPIキー（Issuer ID、Key ID、および.p8ファイル）を一度設定すれば、Screenshot Broが各行の正しいディスプレイタイプを検出し、プロジェクトの言語をApp Store Connectのローカライズ設定と一致させて、一括でスクリーンショットを差し替えます。ブラウザでファイルを1つずつドラッグ＆ドロップする必要はありません。",
      },
    ],
    ui: {
      skipToContent: "コンテンツへスキップ",
      blog: "ブログ",
      changelog: "変更履歴",
      vsFastlane: "Fastlaneとの比較",
      community: "コミュニティ",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: "お問い合わせ",
      followJourney: "開発プロセスをフォロー",
      madeWithLoveAt: "Made with ❤️ at",
      language: "言語",
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
        "macOS 15以降・iPadOS 18以降のアプリ | Swift & SwiftUI | App Storeで入手可能",
    },
    hero: {
      titleLead: "デザインから",
      titleAccent: "App Store",
      titleRest: " への書き出しまでをスムーズに。",
      descriptionLead:
        "ショットをインポートし、デバイスフレームを重ね、テキストをローカライズ。不足しているテキストは自動翻訳し、",
      descriptionStrong: "App Store Connectに直接アップロード",
      descriptionTail: "— これらすべてを、高速なネイティブMac・iPadアプリで完結できます。",
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
          "サイズ選定、ローカライズ、アップロード、그리고 コンバージョンにつながるデザインのコツやプレイブック。",
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
    siteTitle: `${SITE_NAME} — Criador de Capturas de Tela para App Store e Google Play no Mac e iPad`,
    siteDescription:
      "Crie capturas de tela para App Store e Google Play em um app nativo para Mac e iPad. Molduras de dispositivos, localização, tradução automática, exportação em lote e envio direto para o App Store Connect.",
    primaryCtaLabel: "Obter na App Store",
    navItems: [
      { label: "Exemplos", href: "#showcases" },
      { label: "Recursos", href: "#features" },
      { label: "Fluxo de Trabalho", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Disponível agora na App Store para Mac e iPad",
      "Fluxo completo: importar, projetar, traduzir, localizar e exportar",
      "Envio direto para o App Store Connect sem arrastar arquivos no navegador",
    ],
    faqs: [
      {
        question: "O Screenshot Bro é gratuito?",
        answer:
          "Sim. A versão gratuita não expira: 1 projeto com até 3 linhas e 5 modelos por linha, com acesso total a todas as molduras de dispositivos, formas e idiomas, e exportações sem marca d'água. A versão Pro remove esses limites e ativa o envio para o App Store Connect e sincronização pelo iCloud.",
      },
      {
        question: "O que preciso para usá-lo?",
        answer:
          "macOS 15 (Sequoia) ou posterior no Mac, ou iPadOS 18 ou posterior no iPad. Não é necessário dispositivo complementar, conta ou conexão com a internet para editar.",
      },
      {
        question: "Meus dados saem do meu dispositivo?",
        answer:
          "Por padrão, não. Projetos, capturas de tela e fontes são armazenados localmente. A tradução automática funciona no dispositivo usando o framework Translation da Apple — sem chaves de API, sem servidores de terceiros, sem telemetria. A sincronização opcional do iCloud Drive é feita diretamente na sua conta pessoal do iCloud; não operamos servidores intermediários.",
      },
      {
        question: "Como funciona a localização?",
        answer:
          "Escolha entre 30 idiomas predefinidos ou adicione seu próprio código de idioma. A tradução automática preenche o texto ausente no dispositivo. As traduções são salvas como substituições de texto por idioma, de modo que o layout, as cores e as imagens são compartilhados entre todos os idiomas — crie uma vez, implante em qualquer idioma. As exportações são organizadas em pastas por idioma, prontas para o App Store Connect.",
      },
      {
        question: "Posso enviar diretamente para o App Store Connect?",
        answer:
          "Sim. Configure sua chave de API do App Store Connect uma vez (Issuer ID, Key ID e arquivo .p8). O Screenshot Bro detects o tipo de exibição correto para cada linha, associa os idiomas do projeto com as localizações do App Store Connect e substitui as capturas existentes de uma só vez — sem arrastar arquivos no navegador.",
      },
    ],
    ui: {
      skipToContent: "Ir para o conteúdo",
      blog: "Blog",
      changelog: "Notas de Versão",
      vsFastlane: "Comparar com Fastlane",
      community: "Comunidade",
      privacy: "Privacidade",
      terms: "Termos de Uso",
      contact: "Contato",
      followJourney: "Acompanhe minha jornada",
      madeWithLoveAt: "Feito com ❤️ em",
      language: "Idioma",
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
        "App para macOS 15+ e iPadOS 18+ | Swift & SwiftUI | Disponível na App Store",
    },
    hero: {
      titleLead: "Crie e publique",
      titleAccent: "App Store",
      titleRest: " screenshots.",
      descriptionLead:
        "Importe suas capturas, coloque-as em molduras de dispositivos, localize os textos, auto-traduza o que faltar e",
      descriptionStrong: "suba direto para o App Store Connect",
      descriptionTail: "— tudo a partir de um único app nativo e rápido para Mac e iPad.",
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
    siteTitle: `${SITE_NAME} — Designer di screenshot per App Store e Google Play su Mac e iPad`,
    siteDescription:
      "Progetta screenshot per App Store e Google Play in un'app nativa per Mac e iPad. Cornici per dispositivi, localizzazione, traduzione automatica, esportazione in batch e caricamento diretto su App Store Connect.",
    primaryCtaLabel: "Scarica su App Store",
    navItems: [
      { label: "Esempi", href: "#showcases" },
      { label: "Funzionalità", href: "#features" },
      { label: "Flusso di lavoro", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Disponibile ora sull'App Store per Mac e iPad",
      "Flusso completo: importa, progetta, traduci, localizza ed esporta",
      "Caricamento diretto su App Store Connect senza trascinare file nel browser",
    ],
    faqs: [
      {
        question: "Screenshot Bro è gratuito?",
        answer:
          "Sì. La versione gratuita non ha scadenza: 1 progetto con un massimo di 3 righe e 5 modelli per riga, con accesso completo a tutte le cornici, forme e lingue ed esportazioni senza filigrana. La versione Pro rimuove questi limiti e abilita il caricamento su App Store Connect e la sincronizzazione iCloud.",
      },
      {
        question: "Di cosa ho bisogno per usarlo?",
        answer:
          "macOS 15 (Sequoia) o successivo su Mac, oppure iPadOS 18 o successivo su iPad. Non è richiesto alcun dispositivo di supporto, account o connessione Internet per modificare.",
      },
      {
        question: "I miei dati lasciano il mio dispositivo?",
        answer:
          "Per impostazione predefinita, no. Progetti, screenshot e font vengono memorizzati localmente. La traduzione automatica avviene sul dispositivo tramite il framework Translation di Apple: nessuna chiave API, nessun server di terze parti, nessuna telemetria. La sincronizzazione opzionale tramite iCloud Drive utilizza il tuo account iCloud personale; non gestiamo alcun server intermediario.",
      },
      {
        question: "Come funziona la localizzazione?",
        answer:
          "Scegli tra 30 lingue predefinite o aggiungi il tuo codice lingua personalizzato. La traduzione automatica compila il testo mancante direttamente sul dispositivo. Le traduzioni sono salvate come modifiche testuali specifiche per locale, quindi layout, colori e immagini sono condivisi tra tutte le lingue: progetti una volta, distribuisci in ogni lingua. Le esportazioni sono organizzate in cartelle per lingua, pronte per App Store Connect.",
      },
      {
        question: "Can I caricare direttamente su App Store Connect?",
        answer:
          "Sì. Configura la tua chiave API di App Store Connect una sola volta (Issuer ID, Key ID e file .p8). Screenshot Bro rileva automaticamente il tipo di visualizzazione corretto per ciascuna riga, associa le lingue del progetto con le localizzazioni di App Store Connect e sostituisce gli screenshot esistenti in un unico passaggio, senza dover trascinare file nel browser.",
      },
    ],
    ui: {
      skipToContent: "Vai al contenuto",
      blog: "Blog",
      changelog: "Novità",
      vsFastlane: "Confronta con Fastlane",
      community: "Community",
      privacy: "Privacy",
      terms: "Termini",
      contact: "Contatti",
      followJourney: "Segui il mio percorso",
      madeWithLoveAt: "Fatto con ❤️ a",
      language: "Lingua",
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
        "App per macOS 15+ e iPadOS 18+ | Swift e SwiftUI | Disponibile sull'App Store",
    },
    hero: {
      titleLead: "Progetta e pubblica",
      titleAccent: "App Store",
      titleRest: " screenshot.",
      descriptionLead:
        "Importa i tuoi screenshot, inseriscili in cornici per dispositivi, localizza i testi, traduci automaticamente i testi mancanti e",
      descriptionStrong: "carica tutto direttamente su App Store Connect",
      descriptionTail: "— tutto da un'unica e veloce app nativa per Mac e iPad.",
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
    siteTitle: `${SITE_NAME} — Mac 및 iPad용 App Store & Google Play 스크린샷 디자인 도구`,
    siteDescription:
      "네이티브 Mac 및 iPad 앱에서 App Store 및 Google Play 스크린샷을 디자인하세요. 디바이스 프레임, 현지화, 자동 번역, 일괄 내보내기, App Store Connect 직접 업로드를 지원합니다.",
    primaryCtaLabel: "App Store에서 받기",
    navItems: [
      { label: "쇼케이스", href: "#showcases" },
      { label: "주요 기능", href: "#features" },
      { label: "워크플로우", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "현재 Mac 및 iPad용 App Store에서 다운로드 가능",
      "가져오기, 디자인, 자동 번역, 현지화, 내보내기까지 완벽한 워크플로우",
      "브라우저 드래그 앤 드롭 없이 App Store Connect에 직접 업로드",
    ],
    faqs: [
      {
        question: "Screenshot Bro는 무료인가요?",
        answer:
          "네, 무료 버전은 기간 제한 없이 사용하실 수 있습니다. 최대 3개 행, 행당 5개 템플릿의 1개 프로젝트를 지원하며, 모든 디바이스 프레임, 도형, 다국어 설정을 제한 없이 사용하고 워터마크 없이 내보낼 수 있습니다. Pro 플랜은 이러한 제한을 해제하고 App Store Connect 업로드 및 iCloud 동기화 기능을 제공합니다.",
      },
      {
        question: "사용하려면 무엇이 필요한가요?",
        answer:
          "Mac에서는 macOS 15(Sequoia) 이상, iPad에서는 iPadOS 18 이상이 필요합니다. 편집 시 별도의 기기 연결, 계정 가입 또는 인터넷 연결은 필요하지 않습니다.",
      },
      {
        question: "내 데이터가 기기 외부로 전송되나요?",
        answer:
          "기본적으로 전송되지 않습니다. 프로젝트, 스크린샷, 폰트는 모두 로컬에 저장됩니다. 자동 번역은 외부 API 키, 제3자 서버, 분석 추적 없이 Apple의 온디바이스 Translation 프레임워크를 통해 기기 자체에서 실행됩니다. 선택 사항인 iCloud Drive 동기화는 사용자의 개인 iCloud 계정을 통해 진행되며, 개발사 측에서 중간 서버를 운영하지 않습니다.",
      },
      {
        question: "현지화(Localization)는 어떻게 작동하나요?",
        answer:
          "30개의 미리 정의된 언어 중에서 선택하거나 사용자 지정 언어 코드를 추가할 수 있습니다. 자동 번역이 기기 내에서 누락된 텍스트를 채워줍니다. 번역은 언어별 텍스트 재정의(Override)로 저장되므로 레이아웃, 색상, 이미지는 모든 언어에서 공유됩니다. 즉, 한 번만 디자인하면 모든 언어로 배포할 수 있습니다. 내보내기는 언어별 폴더로 정리되어 App Store Connect에 바로 업로드할 수 있는 상태로 저장됩니다.",
      },
      {
        question: "App Store Connect에 직접 업로드할 수 있나요?",
        answer:
          "네, 가능합니다. App Store Connect API 키(Issuer ID, Key ID 및 .p8 파일)를 한 번만 설정하면, Screenshot Bro가 각 행에 맞는 올바른 디스플레이 유형을 감지하고 프로젝트의 언어를 App Store Connect의 현지화 설정과 매칭하여 기존 스크린샷을 한 번에 교체합니다. 브라우저에서 하나씩 드래그 앤 드롭할 필요가 없습니다.",
      },
    ],
    ui: {
      skipToContent: "본문으로 건너뛰기",
      blog: "블로그",
      changelog: "업데이트 소식",
      vsFastlane: "Fastlane과 비교",
      community: "커뮤니티",
      privacy: "개인정보 처리방침",
      terms: "이용약관",
      contact: "문의하기",
      followJourney: "개발 여정 팔로우",
      madeWithLoveAt: "Made with ❤️ at",
      language: "언어",
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
        "macOS 15+ 및 iPadOS 18+ 앱 | Swift 및 SwiftUI | App Store에서 다운로드 가능",
    },
    hero: {
      titleLead: "스크린샷 디자인부터",
      titleAccent: "App Store",
      titleRest: " 등록까지 간편하게.",
      descriptionLead:
        "스크린샷을 가져오고, 디바이스 프레임을 씌우고, 문구를 현지화하며, 누락된 텍스트는 자동으로 번역하여",
      descriptionStrong: "App Store Connect에 바로 업로드하세요",
      descriptionTail: "— 이 모든 작업이 빠르고 네이티브한 하나의 Mac 및 iPad 앱에서 가능합니다.",
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
};

export function isLocaleCode(value: string | undefined): value is LocaleCode {
  return Boolean(value && LOCALE_CODES.has(value as LocaleCode));
}

export function getLocaleInfo(locale: LocaleCode): LocaleInfo {
  return LOCALES.find((entry) => entry.code === locale) ?? LOCALES[0];
}

export function getLocaleFromPath(pathname: string): LocaleCode {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocaleCode(segment) ? segment : DEFAULT_LOCALE;
}

export function getHomeCopy(locale: LocaleCode): HomeCopy {
  if (locale === DEFAULT_LOCALE) return EN_HOME_COPY;

  const localeInfo = getLocaleInfo(locale);
  const overrides = LOCALIZED_OVERRIDES[locale as Exclude<LocaleCode, "en">];

  return {
    ...EN_HOME_COPY,
    ...overrides,
    locale: localeInfo,
    ui: {
      ...EN_HOME_COPY.ui,
      ...overrides.ui,
    },
    hero: {
      ...EN_HOME_COPY.hero,
      ...overrides.hero,
    },
    sections: {
      ...EN_HOME_COPY.sections,
      ...overrides.sections,
    },
    problem: {
      ...EN_HOME_COPY.problem,
      ...overrides.problem,
    },
    download: {
      ...EN_HOME_COPY.download,
      ...overrides.download,
    },
    footer: {
      ...EN_HOME_COPY.footer,
      ...overrides.footer,
    },
  };
}

export function localizedPath(locale: LocaleCode, path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return normalizedPath;
  if (normalizedPath === "/") return `/${locale}`;
  return `/${locale}${normalizedPath}`;
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
