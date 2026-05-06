export const SITE_NAME = "Screenshot Bro";
export const SITE_DESCRIPTION =
  "Design App Store and Google Play screenshots on Mac. Add device frames, localize, batch export, and upload direct to App Store Connect.";
export const SITE_TAGLINE =
  "Design and upload App Store and Google Play screenshots in minutes.";
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ??
  "https://screenshotbro.app";

export const EARLY_ACCESS_EMAIL = "tleskiv@ninevastudios.com";
export const APP_STORE_APP_ID = "6760177675";
export const APP_STORE_URL = "https://apps.apple.com/us/app/screenshot-bro/id6760177675";
export const CONTACT_MAILTO = `mailto:${EARLY_ACCESS_EMAIL}`;
export const REDDIT_COMMUNITY_URL = "https://www.reddit.com/r/ScreenshotBro/";
export const PRIMARY_CTA_LABEL = "Get on the App Store";
export const TWITTER_HANDLE = "@soycastic";
export const X_PROFILE_URL = "https://x.com/soycastic";
export const INSTAGRAM_REEL_URL = "https://www.instagram.com/reels/DXtwyWMDHxF/";
export const INSTAGRAM_REEL_EMBED_URL =
  "https://www.instagram.com/reel/DXtwyWMDHxF/embed/";
export const APP_CATEGORY = "Graphics & Design";
export const MINIMUM_MACOS_VERSION = "15.0";
export const SITE_KEYWORDS = [
  "App Store screenshots",
  "App Store screenshot generator",
  "Mac App Store screenshots",
  "Google Play screenshots",
  "screenshot maker",
  "device frames",
  "app marketing screenshots",
  "localized screenshots",
  "auto translate screenshots",
  "App Store Connect screenshots",
  "upload to App Store Connect",
  "App Store Connect API upload",
  "automatic App Store screenshots upload",
  "macOS screenshot designer",
].join(", ");

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Showcases", href: "#showcases" },
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "FAQ", href: "#faq" },
];

export type SecondaryLinkKey =
  | "blog"
  | "changelog"
  | "docs"
  | "community"
  | "contact"
  | "privacy"
  | "terms";

export type SecondaryLink = {
  uiKey: SecondaryLinkKey;
  href: string;
  external?: boolean;
};

export const PRODUCT_LINKS: SecondaryLink[] = [
  { uiKey: "blog", href: "/blog" },
  { uiKey: "changelog", href: "/changelog" },
  { uiKey: "docs", href: "/docs/project-schema" },
];

export const COMMUNITY_LINKS: SecondaryLink[] = [
  { uiKey: "community", href: REDDIT_COMMUNITY_URL, external: true },
  { uiKey: "contact", href: CONTACT_MAILTO },
];

export const LEGAL_LINKS: SecondaryLink[] = [
  { uiKey: "privacy", href: "/privacy" },
  { uiKey: "terms", href: "/terms" },
];

export const BETA_BENEFITS = [
  "Available now on the Mac App Store",
  "Full workflow: import, design, auto-translate, localize, export",
  "Upload direct to App Store Connect — no more drag-and-drop in a browser tab",
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "Is Screenshot Bro only for macOS?",
    answer:
      "Yes. Screenshot Bro is a native macOS app built with Swift and SwiftUI, so it is designed for Mac-based App Store workflows.",
  },
  {
    question: "How do I get Screenshot Bro?",
    answer:
      "Download it from the Mac App Store. Install the app, launch it on your Mac, and you can start building screenshot sets right away.",
  },
  {
    question: "Can I localize screenshots for multiple languages?",
    answer:
      "Yes. Choose from 30 language presets, auto-translate missing copy, and add per-shape text, position, and image overrides. Exports are grouped automatically by language and screenshot row.",
  },
  {
    question: "Can I make Google Play screenshots too?",
    answer:
      "Yes. Screenshot Bro supports Android phone and tablet layouts alongside iPhone, iPad, MacBook, and iMac screenshot sets, so the same project can cover App Store and Google Play assets.",
  },
  {
    question: "What can I export?",
    answer:
      "Screenshot Bro exports PNG or JPEG assets at 1x, 2x, or 3x and organizes the output into predictable folders so App Store upload is less manual.",
  },
  {
    question: "Can I upload screenshots directly to App Store Connect?",
    answer:
      "Yes. Connect your App Store Connect API key once (Issuer ID, Key ID, and .p8) and Screenshot Bro uploads rendered screenshots straight to your chosen app and version. It auto-detects the correct display type for each row, matches your project locales to App Store Connect localizations, and replaces existing screenshots in a single pass — no manual drag-and-drop into the browser.",
  },
  {
    question: "Does it sync between Macs?",
    answer:
      "Yes. Screenshot Bro supports opt-in iCloud Drive sync. Projects stay available across all your Macs with automatic conflict resolution.",
  },
  {
    question: "Can I use custom fonts?",
    answer:
      "Yes. Import any .ttf, .otf, or .ttc font file and use it in text shapes. Fonts are registered for the app session so they work in both the editor and exports.",
  },
];

export type FeatureIconKey =
  | "templates"
  | "device"
  | "gradient"
  | "shapes"
  | "align"
  | "export"
  | "upload"
  | "project"
  | "native"
  | "cloud"
  | "fonts"
  | "starter"
  | "keyboard";

export type FeatureItem = {
  icon: FeatureIconKey;
  title: string;
  description: string;
  accent: string;
};

export const FEATURES: FeatureItem[] = [
  {
    icon: "templates",
    title: "Multi-Template Editing",
    description:
      "Edit once, update every variant. Change a shape or text and it flows across all your screenshots simultaneously.",
    accent: "var(--color-accent)",
  },
  {
    icon: "device",
    title: "Device Frames",
    description:
      'iPhone 17 series, iPad Pro 11" & 13", MacBook, iMac, and Android phone & tablet frames for App Store and Google Play screenshots. Accurate bezels, configurable body colors, and per-row defaults.',
    accent: "var(--color-mint)",
  },
  {
    icon: "gradient",
    title: "Backgrounds & Spanning",
    description:
      "Solid colors, linear/radial/angular gradients with multi-stop editor, or images with fill, fit, stretch, and tile modes. Backgrounds can span across multiple templates in a row.",
    accent: "var(--color-warm)",
  },
  {
    icon: "shapes",
    title: "Shape Tools + SVG",
    description:
      "Rectangles, circles, stars, text, images, SVGs, and device frames. Inline text editing, outlines, fill modes, shape clipping, and full transform controls.",
    accent: "var(--color-rose)",
  },
  {
    icon: "align",
    title: "Smart Alignment",
    description:
      "Snap guides appear as you drag, keeping everything lined up. Nudge with arrow keys, Option-drag to duplicate, Shift-drag to lock aspect ratio.",
    accent: "var(--color-accent-light)",
  },
  {
    icon: "export",
    title: "Localized Export",
    description:
      "Export PNG or JPEG at 1x-3x for multiple locales. Auto-organized folders by locale and row for App Store Connect, Google Play, and launch assets.",
    accent: "var(--color-warm-light)",
  },
  {
    icon: "upload",
    title: "Upload to App Store Connect",
    description:
      "One-click upload straight to App Store Connect. Auto-detect display types from row size, match project locales to App Store localizations, and replace existing screenshots with a preflight that catches problems before they reach Apple.",
    accent: "var(--color-warm)",
  },
  {
    icon: "project",
    title: "Localization Built In",
    description:
      "30 language presets from English to Arabic, Hindi, and CJK. Auto-translate missing copy, then fine-tune per-shape text, position, and image overrides with translation progress tracking.",
    accent: "var(--color-mint)",
  },
  {
    icon: "native",
    title: "Native macOS",
    description:
      "Built with Swift and SwiftUI. No Electron, no browser tab. Instant launch, native performance, auto-save, full undo/redo.",
    accent: "var(--color-accent)",
  },
  {
    icon: "cloud",
    title: "iCloud Sync",
    description:
      "Opt-in iCloud Drive sync keeps projects available across all your Macs. Last-writer-wins merge with tombstone-aware conflict resolution.",
    accent: "var(--color-mint)",
  },
  {
    icon: "fonts",
    title: "Custom Fonts",
    description:
      "Import your own .ttf, .otf, or .ttc font files. Use any typeface in text shapes — no system font limitations.",
    accent: "var(--color-warm)",
  },
  {
    icon: "starter",
    title: "Project Templates",
    description:
      "Start from built-in templates with pre-configured layouts, device frames, and backgrounds. Jump straight into designing.",
    accent: "var(--color-rose)",
  },
  {
    icon: "keyboard",
    title: "Keyboard Shortcuts",
    description:
      "Nudge, duplicate, cut/copy/paste, z-order, zoom, locale cycling, and select — all from the keyboard. Shift-nudge for 10px jumps, Option-drag to clone.",
    accent: "var(--color-accent-light)",
  },
];

export const WITHOUT_BRO_POINTS = [
  "Manually resize each screenshot in Figma or Photoshop",
  "Copy-paste device frames one by one across artboards",
  "Re-export every file when you change a single color",
  "Duplicate everything for each language, lose track of translations",
  "Drag and drop every PNG into App Store Connect by hand",
];

export const WITH_BRO_POINTS = [
  "Design one template - all variants update instantly",
  "Drop in device frames with a click, pick your model and color",
  "Add multiple locales with per-shape text overrides",
  "Export every screenshot, every language, every size - one click",
  "Upload direct to App Store Connect — no browser, no drag-and-drop",
];

export type FeatureShowcase = {
  id: string;
  label: string;
  title: string;
  description: string;
  media: string; // path to gif/video/image in public/
  mediaAlt: string;
};

export const FEATURE_SHOWCASES: FeatureShowcase[] = [
  {
    id: "batch-import",
    label: "Batch Import",
    title: "Drag, drop, done.",
    description:
      "Drag and drop multiple screenshots at once — Screenshot Bro imports them all and automatically wraps each one in the device frame. No manual placement, no tedious one-by-one workflow.",
    media: "/showcases/batch-export.mp4",
    mediaAlt:
      "Dragging and dropping multiple screenshots that automatically get wrapped in device frames",
  },
  {
    id: "auto-upload",
    label: "Auto Upload",
    title: "Upload to App Store Connect in one click.",
    description:
      "Connect your App Store Connect API key once, then push rendered screenshots straight to the right app, version, display type, and locale. Auto-detected display types, locale matching, preflight checks, and one-pass replace — no drag-and-drop in the browser.",
    media: "/showcases/autoupload.mp4",
    mediaAlt:
      "Uploading screenshots directly from Screenshot Bro to App Store Connect with auto-detected display types and matched locales",
  },
  {
    id: "shapes",
    label: "Shapes & Layers",
    title: "Build it up, layer by layer.",
    description:
      "Add rectangles, circles, stars, text, images, and SVGs — then resize, rotate, and style each one. Set fill colors, gradients, opacity, outlines, and corner radius right from the inspector. Stack layers, Shift-drag to lock aspect ratio, and snap to pixel-perfect alignment.",
    media: "/showcases/shapes.mp4",
    mediaAlt:
      "Adding and manipulating shapes on the screenshot canvas with resize handles and style controls",
  },
  {
    id: "backgrounds",
    label: "Backgrounds",
    title: "Make cool backgrounds.",
    description:
      "Choose from 12 gradient presets, build your own with the multi-stop editor, or drop in images with fill, fit, stretch, and tile modes. Backgrounds can span across multiple templates in a row for seamless, edge-to-edge designs. Adjust angle, opacity, and color stops — everything updates live.",
    media: "/showcases/backgrounds.mp4",
    mediaAlt:
      "Switching between gradient presets, solid colors, and spanning backgrounds across multiple screenshot templates",
  },
  {
    id: "device-frames",
    label: "Device Frames",
    title: "Customize device frames.",
    description:
      "Pick from a library of device bezels — iPhone, iPad, MacBook, iMac, and Android phones & tablets. Swap frames, choose body colors, and match your brand without re-importing screenshots.",
    media: "/showcases/frames.mp4",
    mediaAlt:
      "Selecting and customizing device frames around app screenshots",
  },
];

export type ShowcaseApp = {
  name: string;
  icon: string;
  url: string;
};

export const SHOWCASE_APPS: ShowcaseApp[] = [
  {
    name: "Refuells",
    icon: "/showcase/refuells.jpg",
    url: "https://apps.apple.com/app/refuells-fuel-trip-tracker/id6756374694",
  },
  {
    name: "AdRadar",
    icon: "/showcase/adradar.jpg",
    url: "https://apps.apple.com/app/adradar-ad-revenue-tracker/id6747883093",
  },
  {
    name: "TT Tracker",
    icon: "/showcase/tt-tracker.jpg",
    url: "https://apps.apple.com/app/table-tennis-training-tracker/id6758044383",
  },
  {
    name: "My Checklist Routines",
    icon: "/showcase/checklist-routines.jpg",
    url: "https://apps.apple.com/app/my-checklist-routines/id6759321248",
  },
  {
    name: "Utorbu",
    icon: "/showcase/utorbu.jpg",
    url: "https://apps.apple.com/ua/app/utorbu/id6759218990",
  },
  {
    name: "Chapper",
    icon: "/showcase/chapper.jpg",
    url: "https://apps.apple.com/us/app/chapper/id6760984679",
  },
  {
    name: "OneTap",
    icon: "/showcase/onetap.jpg",
    url: "https://apps.apple.com/us/app/onetap-ios-keyboard/id1639795583",
  },
  {
    name: "Pocket",
    icon: "/showcase/pocket.jpg",
    url: "https://apps.apple.com/us/app/pocket-track-your-expenses/id6745982820",
  },
  {
    name: "ChronoType",
    icon: "/showcase/chronotype.jpg",
    url: "https://apps.apple.com/us/app/chronotype-body-clock/id6761485174",
  },
  {
    name: "Wisp",
    icon: "/showcase/wisp.jpg",
    url: "https://apps.apple.com/us/app/wisp-wishlist-gift-registry/id6747362899",
  },
];

export type AppScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

export const APP_SCREENSHOTS: AppScreenshot[] = [
  {
    src: "/screenshots/01_screenshot.webp",
    alt: "Screenshot Bro editor showing multi-template App Store screenshot design with device frames",
    caption: "Design pretty App Store screenshots",
  },
  {
    src: "/screenshots/02_screenshot.webp",
    alt: "Batch export view with all project screenshots ready for App Store upload",
    caption: "Export the whole project at once",
  },
  {
    src: "/screenshots/03_screenshot.webp",
    alt: "Template picker showing multiple built-in layout templates for iPhone and iPad",
    caption: "Pick from built-in templates",
  },
  {
    src: "/screenshots/04_screenshot.webp",
    alt: "Localization editor with German locale showing per-shape text overrides",
    caption: "Localize screenshots easily",
  },
  {
    src: "/screenshots/05_screenshot.webp",
    alt: "Device frame selection showing MacBook, iPad, and iPhone frames on canvas",
    caption: "Add real device frames",
  },
  {
    src: "/screenshots/06_screenshot.webp",
    alt: "Background editor with gradient presets, color picker, and angle controls",
    caption: "Make beautiful backgrounds",
  },
  {
    src: "/screenshots/07_screenshot.webp",
    alt: "Shape tools with SVGs, stars, and colorful vector elements on the canvas",
    caption: "Add SVGs, shapes, and images",
  },
];

export type WorkflowStep = {
  step: string;
  title: string;
  description: string;
};

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Set Up Rows",
    description:
      'Pick your device sizes — iPhone 17, iPad Pro 11" or 13", MacBook, or iMac. Add as many rows as you need.',
  },
  {
    step: "02",
    title: "Design & Localize",
    description:
      "Drop in device frames, add text and shapes, choose a background. Add locales, auto-translate missing copy, and tune per-shape text overrides so every language stays pixel-perfect.",
  },
  {
    step: "03",
    title: "Export All",
    description:
      "Hit export. Get organized folders by locale and row with every screenshot at your chosen scale. One click.",
  },
  {
    step: "04",
    title: "Upload to App Store Connect",
    description:
      "Connect your API key once, then push screenshots straight to the right app, version, display type, and locale — no manual drag-and-drop into the browser.",
  },
];
