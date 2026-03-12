export const SITE_NAME = "Screenshot Bro";
export const SITE_DESCRIPTION =
  "Design App Store screenshots in minutes with Screenshot Bro — a native macOS app. Device frames, gradient backgrounds, 30+ locales, batch export, and multi-template editing. Built with SwiftUI.";
export const SITE_TAGLINE = "Design App Store screenshots in minutes.";
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ??
  "https://screenshotbro.app";

export const EARLY_ACCESS_EMAIL = "tleskiv@ninevastudios.com";
export const EARLY_ACCESS_SUBJECT = "Screenshot Bro Early Access";
export const EARLY_ACCESS_MAILTO = `mailto:${EARLY_ACCESS_EMAIL}?subject=${encodeURIComponent(
  EARLY_ACCESS_SUBJECT,
)}`;
export const CONTACT_MAILTO = `mailto:${EARLY_ACCESS_EMAIL}`;

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
      "Export PNG or JPEG at 1x-3x for 30+ locales. Auto-organized folders by locale and row. One click, every language, every size.",
    accent: "var(--color-warm-light)",
  },
  {
    icon: "project",
    title: "Localization Built In",
    description:
      "30+ locale presets from English to Arabic. Per-shape text overrides, translation tracking, and keyboard shortcuts to flip between languages.",
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
  "Add 30+ locales with per-shape text overrides",
  "Export every screenshot, every language, every size - one click",
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
