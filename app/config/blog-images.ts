import type { BlogCategory } from "~/config/blog";
import { STARTER_TEMPLATES, templatePreview } from "~/config/templates";

// Blog cards use real Screenshot Bro template exports (public/template-gallery,
// see config/templates.ts) as covers instead of stock photos, tinted by the
// post's category. Every post has its own template, from the colour family of
// its category; a post missing here falls back to a hashed pick from that
// family, so add one when you add a post.
//
// public/blog-thumbs/ (the old Unsplash photos) is still read by
// scripts/generate-og-images.mjs for the social cards, so it stays.
const COVER_TEMPLATES: Record<string, string> = {
  "app-store-screenshot-majority-rule": "aurora",
  "iphone-duo-app-store-screenshots": "emerald",
  "googlebook-google-play-screenshots": "sapphire",
  "app-store-creative-assets": "cosmic-bloom",
  "screenshot-bro-mcp-server": "royal-blue",
  "butterkit-alternative": "golden",
  "best-app-store-screenshot-tools-for-mac": "copper-luxe",
  "best-app-screenshot-localization-tools": "solar-flare",
  "best-google-play-screenshot-tools": "teal-amber",
  "screenshot-bro-alternatives": "citrus-pop",
  "appscreens-alternative": "sunset",
  "screenshots-pro-alternative": "crimson",
  "rotato-alternative": "candy-pop",
  "placeit-alternative": "editorial-red",
  "mockuuups-studio-alternative": "peach-sorbet",
  "canva-app-store-screenshots": "purple-gold",
  "appmockup-alternative": "bauhaus-studio",
  "screenshot-studio-alternative": "sports",
  "applaunchpad-alternative": "volt",
  "previewed-alternative": "sorbet-split",
  "shotbot-alternative": "rainbow",
  "publish-app-on-google-play": "google-play",
  "google-play-promo-video": "aqua-motion",
  "app-store-description-that-converts": "iris",
  "app-store-keyword-research": "ocean-blue",
  "app-store-screenshots-for-games": "navy-plum",
  "app-store-screenshots-for-fitness-apps": "blueprint",
  "change-app-store-screenshots-without-updating-app": "indigo",
  "best-free-app-store-screenshot-generators": "atelier",
  "mac-app-store-screenshot-sizes": "forest",
  "iphone-simulator-screenshots": "nightfall",
  "submit-app-to-app-store": "white-indigo",
  "how-many-app-store-screenshots": "neon-nights",
  "screenshot-generator-vs-figma-vs-photoshop": "paper",
  "localize-screenshots-japan-china-germany": "steel-blue",
  "app-store-app-preview-video-specs": "mint-fresh",
  "device-mockup-generator-app-screenshots": "amethyst",
  "app-store-optimization-aso-guide": "deep-purple",
  "app-icon-sizes-design-guidelines": "dark-teal",
  "app-store-screenshot-examples": "violet",
  "google-play-feature-graphic-size-template-examples": "teal-noir",
  "app-store-screenshots-rejected-fix": "midnight",
  "google-play-screenshot-rejected-fix": "clean",
  "app-store-screenshot-order": "clean-2",
  "app-store-screenshot-copywriting-examples": "cyber-grid",
  "app-store-screenshot-mistakes": "dusk",
  "iphone-ipad-app-store-screenshots": "emerald-navy",
  "google-play-store-listing-graphics-checklist": "arctic-glass",
  "seasonal-app-store-screenshots": "forma",
  "app-store-screenshot-localization-guide": "graphite",
  "popular-figma-templates-app-store-screenshots-device-mockups": "ice-blue",
  "app-store-screenshot-designers-creators-to-follow": "indigo-noir",
  "google-play-screenshot-sizes-requirements": "verdant-calm",
  "ab-test-app-store-screenshots": "lilac-haze",
  "custom-product-pages-app-store-screenshots": "monochrome",
  "design-app-store-screenshots-in-figma": "navy",
  "best-app-store-screenshot-tools": "noir",
  "make-and-ship-screenshots-with-fastlane": "noir-cobalt",
  "upload-screenshots-to-app-store-connect": "obsidian",
  "screenshot-sizes-app-store-google-play": "green-pink",
  "app-store-screenshot-sizes": "still",
  "screenshots-that-convert": "onyx",
  "localize-app-store-screenshots": "lavender",
};

const FALLBACK_POOLS: Record<BlogCategory, string[]> = {
  Guide: ["aurora", "sapphire", "cosmic-bloom", "royal-blue", "lavender", "iris", "ocean-blue", "navy-plum"],
  Reference: ["emerald", "aqua-motion", "forest", "mint-fresh", "dark-teal", "teal-noir"],
  Comparison: ["golden", "copper-luxe", "solar-flare", "teal-amber", "citrus-pop", "sunset"],
};

const CATEGORY_TINTS: Record<BlogCategory, string> = {
  Guide: "var(--color-accent)",
  Reference: "var(--color-mint)",
  Comparison: "var(--color-warm)",
};

export type BlogCover = { name: string; width: number; height: number; shots: string[]; tint: string };

function hash(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) h = Math.imul(h ^ value.charCodeAt(i), 16777619) >>> 0;
  return h;
}

function coverFromTemplate(templateId: string, count: number, tint = CATEGORY_TINTS.Guide): BlogCover {
  const template = STARTER_TEMPLATES.find((t) => t.id === templateId) ?? STARTER_TEMPLATES[0];
  const { width, height, shotUrls } = templatePreview(template, "appStore");
  return { name: template.name, width, height, tint, shots: shotUrls.slice(0, count) };
}

export function getBlogCover(slug: string, category: BlogCategory, count = 3): BlogCover {
  const pool = FALLBACK_POOLS[category];
  const templateId = COVER_TEMPLATES[slug] ?? pool[hash(slug) % pool.length];
  return coverFromTemplate(templateId, count, CATEGORY_TINTS[category]);
}

export function ctaCoverFor(seed: string): BlogCover {
  const pool = FALLBACK_POOLS.Guide;
  return coverFromTemplate(pool[hash(seed) % pool.length], 3);
}
