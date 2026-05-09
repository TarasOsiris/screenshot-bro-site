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

export type LocaleCode = "en" | "es" | "zh" | "hi" | "fr" | "ar";

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
    community: string;
    privacy: string;
    terms: string;
    contact: string;
    redditCommunity: string;
    followOnX: string;
    followJourney: string;
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
      "Finally a tool that gets out of the way. No Figma plugins, no browser tabs — just a native Mac app that does the job fast.",
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
    "Screenshot Bro — native macOS app for designing App Store and Google Play screenshots with device frames, gradients, and localization",
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
    community: "Community",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    redditCommunity: "Reddit community",
    followOnX: "Follow on X",
    followJourney: "Follow my journey",
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
      "ScreenshotBro Mac App - Design and export beautiful App Store screenshots. | Product Hunt",
    availabilityNote:
      "macOS 15+ app | Swift & SwiftUI | Available on the Mac App Store",
  },
  hero: {
    titleLead: "Design and ship",
    titleAccent: "App Store",
    titleRest: " screenshots.",
    descriptionLead:
      "Import your shots, wrap them in device frames, localize the copy, auto-translate missing text, and",
    descriptionStrong: "upload straight to App Store Connect",
    descriptionTail: "— all from one fast native Mac app.",
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
        "Mac App Store screenshots of Screenshot Bro itself - the same editor you use for App Store and Google Play screenshot sets.",
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
      "Download from the Mac App Store and use the full screenshot workflow: setup, design, auto-translation, localization, and export for App Store and Google Play assets.",
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
    siteTitle: `${SITE_NAME} — Diseñador de capturas para App Store y Google Play en Mac`,
    siteDescription:
      "Diseña capturas para App Store y Google Play en una app nativa para Mac. Marcos de dispositivos, localización, traducción automática, exportación por lotes y subida directa a App Store Connect.",
    primaryCtaLabel: "Ver en App Store",
    navItems: [
      { label: "Ejemplos", href: "#showcases" },
      { label: "Funciones", href: "#features" },
      { label: "Flujo", href: "#workflow" },
      { label: "FAQ", href: "#faq" },
    ],
    benefits: [
      "Disponible ahora en la Mac App Store",
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
          "macOS 15 (Sequoia) o posterior, en Apple Silicon o Intel. No hace falta iPhone acompañante, cuenta ni conexión a internet para editar.",
      },
      {
        question: "¿Mis datos salen de mi Mac?",
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
      community: "Comunidad",
      privacy: "Privacidad",
      terms: "Términos",
      contact: "Contacto",
      followJourney: "Sigue mi progreso",
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
        "App para macOS 15+ | Swift y SwiftUI | Disponible en la Mac App Store",
    },
    hero: {
      titleLead: "Diseña y publica",
      titleAccent: "App Store",
      titleRest: " screenshots.",
      descriptionLead:
        "Importa tus capturas, añade marcos de dispositivo, localiza el texto, traduce lo que falte y",
      descriptionStrong: "sube todo directo a App Store Connect",
      descriptionTail: "— desde una app nativa para Mac rápida.",
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
          "Capturas reales de Screenshot Bro en la Mac App Store: el mismo editor que usarás para tus assets.",
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
        "Descárgalo desde la Mac App Store y usa el flujo completo: configuración, diseño, traducción automática, localización y exportación.",
    },
    footer: {
      note:
        "Creado con SwiftUI. Diseñado para desarrolladores que publican actualizaciones en App Store.",
    },
  },
  zh: {
    siteTitle: `${SITE_NAME} — Mac 上的 App Store 和 Google Play 截图设计工具`,
    siteDescription:
      "用原生 Mac 应用设计 App Store 和 Google Play 截图。设备边框、本地化、自动翻译、批量导出，并可直接上传到 App Store Connect。",
    primaryCtaLabel: "在 App Store 获取",
    benefits: [
      "现已上架 Mac App Store",
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
          "macOS 15（Sequoia）或更新版本，支持 Apple Silicon 与 Intel。无需配套 iPhone、账号或网络连接即可日常编辑。",
      },
      {
        question: "我的数据会离开 Mac 吗？",
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
      community: "社区",
      privacy: "隐私",
      terms: "条款",
      contact: "联系",
      followJourney: "关注我的进展",
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
      availabilityNote: "macOS 15+ 应用 | Swift 和 SwiftUI | 已上架 Mac App Store",
    },
    hero: {
      titleLead: "设计并发布",
      titleAccent: "App Store",
      titleRest: " 截图。",
      descriptionLead:
        "导入截图，套用设备边框，本地化文案，自动翻译缺失文本，并",
      descriptionStrong: "直接上传到 App Store Connect",
      descriptionTail: "— 全部在一个快速的原生 Mac 应用中完成。",
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
          "这些是 Screenshot Bro 自己的 Mac App Store 截图，也是你会使用的同一个编辑器。",
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
        "从 Mac App Store 下载，并使用完整截图流程：设置、设计、自动翻译、本地化和导出。",
    },
    footer: {
      note: "使用 SwiftUI 构建。为需要发布 App Store 更新的开发者设计。",
    },
  },
  hi: {
    siteTitle: `${SITE_NAME} — Mac के लिए App Store और Google Play स्क्रीनशॉट डिजाइनर`,
    siteDescription:
      "नेटिव Mac ऐप में App Store और Google Play स्क्रीनशॉट डिजाइन करें। डिवाइस फ्रेम, लोकलाइजेशन, ऑटो-ट्रांसलेट, बैच एक्सपोर्ट और App Store Connect पर सीधा अपलोड।",
    primaryCtaLabel: "App Store पर पाएं",
    benefits: [
      "Mac App Store पर अभी उपलब्ध",
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
          "macOS 15 (Sequoia) या उससे नया, Apple Silicon या Intel पर। Editing के लिए न तो iPhone चाहिए, न account, न internet connection।",
      },
      {
        question: "क्या मेरा data Mac से बाहर जाता है?",
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
      community: "समुदाय",
      privacy: "प्राइवेसी",
      terms: "शर्तें",
      contact: "संपर्क",
      followJourney: "मेरी यात्रा देखें",
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
        "macOS 15+ ऐप | Swift और SwiftUI | Mac App Store पर उपलब्ध",
    },
    hero: {
      titleLead: "डिजाइन करें और शिप करें",
      titleAccent: "App Store",
      titleRest: " स्क्रीनशॉट।",
      descriptionLead:
        "अपने शॉट्स इंपोर्ट करें, डिवाइस फ्रेम लगाएं, कॉपी लोकलाइज करें, छूटा टेक्स्ट ऑटो-ट्रांसलेट करें और",
      descriptionStrong: "सीधे App Store Connect पर अपलोड करें",
      descriptionTail: "— सब एक तेज नेटिव Mac ऐप से।",
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
          "Screenshot Bro के Mac App Store screenshots: वही editor जिससे आप अपने screenshots बनाएंगे।",
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
        "Mac App Store से डाउनलोड करें और setup, design, auto-translation, localization और export का पूरा workflow इस्तेमाल करें।",
    },
    footer: {
      note: "SwiftUI से बनाया गया। App Store updates ship करने वाले developers के लिए।",
    },
  },
  fr: {
    siteTitle: `${SITE_NAME} — Créateur de captures App Store et Google Play pour Mac`,
    siteDescription:
      "Créez des captures App Store et Google Play dans une app Mac native. Cadres d'appareils, localisation, traduction automatique, export groupé et envoi direct vers App Store Connect.",
    primaryCtaLabel: "Voir sur l'App Store",
    benefits: [
      "Disponible maintenant sur le Mac App Store",
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
          "macOS 15 (Sequoia) ou plus récent, sur Apple Silicon ou Intel. Pas d'iPhone compagnon, pas de compte, pas de connexion internet requise pour éditer.",
      },
      {
        question: "Mes données quittent-elles mon Mac ?",
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
      community: "Communauté",
      privacy: "Confidentialité",
      terms: "Conditions",
      contact: "Contact",
      followJourney: "Suivre mon parcours",
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
        "App macOS 15+ | Swift et SwiftUI | Disponible sur le Mac App Store",
    },
    hero: {
      titleLead: "Créez et publiez",
      titleAccent: "App Store",
      titleRest: " screenshots.",
      descriptionLead:
        "Importez vos captures, ajoutez des cadres d'appareils, localisez le texte, traduisez automatiquement ce qui manque et",
      descriptionStrong: "envoyez directement vers App Store Connect",
      descriptionTail: "— depuis une app Mac native et rapide.",
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
          "Captures Mac App Store de Screenshot Bro lui-même: le même éditeur que vous utiliserez.",
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
        "Téléchargez depuis le Mac App Store et utilisez le flux complet: configuration, design, traduction automatique, localisation et export.",
    },
    footer: {
      note:
        "Construit avec SwiftUI. Pensé pour les développeurs qui publient des mises à jour App Store.",
    },
  },
  ar: {
    siteTitle: `${SITE_NAME} — مصمم لقطات App Store و Google Play على Mac`,
    siteDescription:
      "صمّم لقطات App Store و Google Play داخل تطبيق Mac أصلي. إطارات أجهزة، توطين، ترجمة تلقائية، تصدير جماعي ورفع مباشر إلى App Store Connect.",
    primaryCtaLabel: "احصل عليه من App Store",
    benefits: [
      "متوفر الآن على Mac App Store",
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
          "macOS 15 (Sequoia) أو أحدث، على Apple Silicon أو Intel. لا حاجة إلى iPhone مرافق ولا حساب ولا اتصال إنترنت للتعديل اليومي.",
      },
      {
        question: "هل تغادر بياناتي جهاز Mac؟",
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
      community: "المجتمع",
      privacy: "الخصوصية",
      terms: "الشروط",
      contact: "تواصل",
      followJourney: "تابع رحلتي",
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
        "تطبيق macOS 15+ | Swift و SwiftUI | متوفر على Mac App Store",
    },
    hero: {
      titleLead: "صمّم وانشر",
      titleAccent: "App Store",
      titleRest: " screenshots.",
      descriptionLead:
        "استورد لقطاتك، أضف إطارات الأجهزة، وطّن النصوص، ترجم النص المفقود تلقائياً، ثم",
      descriptionStrong: "ارفع مباشرة إلى App Store Connect",
      descriptionTail: "— كل ذلك من تطبيق Mac أصلي وسريع.",
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
          "لقطات Mac App Store لتطبيق Screenshot Bro نفسه: نفس المحرر الذي ستستخدمه.",
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
        "نزّله من Mac App Store واستخدم سير العمل الكامل: الإعداد، التصميم، الترجمة التلقائية، التوطين والتصدير.",
    },
    footer: {
      note:
        "مبني باستخدام SwiftUI. مصمم للمطورين الذين يطلقون تحديثات App Store.",
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
