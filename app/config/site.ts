export const SITE_NAME = "Screenshot Bro";
export const SITE_DESCRIPTION =
  "Design App Store screenshots in minutes. Device frames, gradients, localization, iCloud sync, batch export — all in a native macOS app.";
export const SITE_TAGLINE = "Design App Store screenshots in minutes.";
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ??
  "https://screenshotbro.app";

export const EARLY_ACCESS_EMAIL = "tleskiv@ninevastudios.com";
export const TESTFLIGHT_URL = "https://testflight.apple.com/join/GWjeTCFh";
export const EARLY_ACCESS_MAILTO = TESTFLIGHT_URL;
export const CONTACT_MAILTO = `mailto:${EARLY_ACCESS_EMAIL}`;
export const PRIMARY_CTA_LABEL = "Join public beta";

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

export const BETA_BENEFITS = [
  "Instant access through TestFlight on macOS",
  "Current core workflow: import, design, localize, export",
  "Direct feedback loop with the developer while the product evolves",
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
    question: "How do I join the beta?",
    answer:
      "Use the public beta button to open the TestFlight invite. Install the app, launch it on your Mac, and you can start building screenshot sets right away.",
  },
  {
    question: "Can I localize screenshots for multiple languages?",
    answer:
      "Yes. Projects can carry multiple locales, with per-shape text overrides and exports grouped automatically by language and screenshot row.",
  },
  {
    question: "What can I export?",
    answer:
      "Screenshot Bro exports PNG or JPEG assets at 1x, 2x, or 3x and organizes the output into predictable folders so App Store upload is less manual.",
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
      'iPhone 17 series, iPad Pro 11" & 13", MacBook, iMac, and Android phone & tablet frames. Accurate bezels, configurable body colors, and per-row defaults.',
    accent: "var(--color-mint)",
  },
  {
    icon: "gradient",
    title: "Backgrounds & Spanning",
    description:
      "Solid colors, 12 gradient presets, or images. Gradients and images can span across multiple templates in a row for seamless designs.",
    accent: "var(--color-warm)",
  },
  {
    icon: "shapes",
    title: "Shape Tools + SVG",
    description:
      "Rectangles, circles, stars, text, images, SVGs, and device frames. Inline text editing, fill modes, shape clipping, and full transform controls.",
    accent: "var(--color-rose)",
  },
  {
    icon: "align",
    title: "Smart Alignment",
    description:
      "Snap guides appear as you drag, keeping everything lined up. Nudge with arrow keys, Option-drag to duplicate, jump-to-shape magnifier.",
    accent: "var(--color-accent-light)",
  },
  {
    icon: "export",
    title: "Localized Export",
    description:
      "Export PNG or JPEG at 1x-3x for multiple locales. Auto-organized folders by locale and row. One click, every language, every size.",
    accent: "var(--color-warm-light)",
  },
  {
    icon: "project",
    title: "Localization Built In",
    description:
      "Locale presets from English to Arabic. Per-shape text overrides, translation tracking, and keyboard shortcuts to flip between languages.",
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
      "Nudge, duplicate, cut/copy/paste, z-order, zoom, and select — all from the keyboard. Shift-nudge for 10px jumps, Option-drag to clone.",
    accent: "var(--color-accent-light)",
  },
];

export const WITHOUT_BRO_POINTS = [
  "Manually resize each screenshot in Figma or Photoshop",
  "Copy-paste device frames one by one across artboards",
  "Re-export every file when you change a single color",
  "Duplicate everything for each language, lose track of translations",
];

export const WITH_BRO_POINTS = [
  "Design one template - all variants update instantly",
  "Drop in device frames with a click, pick your model and color",
  "Add multiple locales with per-shape text overrides",
  "Export every screenshot, every language, every size - one click",
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
    id: "shapes",
    label: "Shapes & Layers",
    title: "Build it up, layer by layer.",
    description:
      "Add rectangles, circles, stars, text, images, and SVGs — then resize, rotate, and style each one. Set fill colors, opacity, outlines, and corner radius right from the inspector. Stack layers, lock aspect ratios, and snap to pixel-perfect alignment.",
    media: "/showcases/shapes.mp4",
    mediaAlt:
      "Adding and manipulating shapes on the screenshot canvas with resize handles and style controls",
  },
  {
    id: "backgrounds",
    label: "Backgrounds",
    title: "Make cool backgrounds.",
    description:
      "Choose from 12 gradient presets, solid colors, or drop in your own images. Gradients and images can span across multiple templates in a row for seamless, edge-to-edge designs. Adjust angle, opacity, and color stops — every background updates live across all templates.",
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
      'Pick your device sizes - iPhone 6.5", iPad Pro 13", Mac Desktop. Add as many rows as you need.',
  },
  {
    step: "02",
    title: "Design & Localize",
    description:
      "Drop in device frames, add text and shapes, choose a background. Add locales and translate - per-shape text overrides keep every language pixel-perfect.",
  },
  {
    step: "03",
    title: "Export All",
    description:
      "Hit export. Get organized folders by locale and row with every screenshot at your chosen scale. One click.",
  },
];
