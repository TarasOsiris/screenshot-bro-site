export const SITE_NAME = "Screenshot Bro";
export const SITE_DESCRIPTION =
  "Design App Store screenshots in minutes. Device frames, gradients, localization, batch export — all in a native macOS app.";
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
];

export type FeatureIconKey =
  | "templates"
  | "device"
  | "gradient"
  | "shapes"
  | "align"
  | "export"
  | "project"
  | "native";

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
      'iPhone, iPad Pro 11", iPad Pro 13", and Mac Desktop frames. Accurate bezels, configurable body colors, and per-row defaults.',
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
      "Rectangles, circles, text, images, SVGs, and device frames. Inline text editing, fill modes, shape clipping, and full transform controls.",
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
      "Pick from a library of device bezels — iPhone, iPad, Mac, Apple Watch, and more. Swap frames, adjust colors, and match your brand without re-importing screenshots.",
    media: "/showcases/frames.mp4",
    mediaAlt:
      "Selecting and customizing device frames around app screenshots",
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
