import {
  MINIMUM_IPADOS_VERSION,
  MINIMUM_MACOS_VERSION,
  SITE_NAME,
} from "~/config/site";

// Single source of truth for the /vs section. One entry here drives the hub
// matrix, its group lists and ItemList schema, the sitemap, llms.txt, and the
// ComparisonShell lookup. Adding a page = one entry + the route file + a pair
// of routes.ts lines (base and `:locale`). Re-verifying = bump `lastVerified`.

export type ComparisonGroup = "native" | "browser" | "automation" | "design";

export type HubRow = {
  tool: string;
  href: string;
  group: ComparisonGroup;
  type: string;
  free: string;
  localization: string;
  upload: string;
  // The long-form "why switch" post for the same competitor, when one exists.
  alternativeHref?: string;
};

export type ComparisonPage = {
  slug: string; // URL is /vs/<slug>
  competitor: string;
  competitorUrl: string;
  heading: string; // <h1>
  title: string; // <title>, keep ≤ 60 chars
  description: string; // meta description, keep ≤ 155 chars
  readTime: string;
  datePublished: string; // ISO yyyy-mm-dd
  // ISO date the competitor's details were last checked. Drives the "Checked
  // <Month YYYY>" stamp, dateModified, article:modified_time and sitemap lastmod.
  lastVerified: string;
  // Where the competitor facts were checked, e.g. "AppScreens' own site and
  // knowledge base". Rendered in the verification paragraph.
  checkedAgainst: string;
  group: ComparisonGroup;
  type: string;
  free: string;
  localization: string;
  upload: string;
  alternativeHref?: string;
};

export const comparisonPath = (slug: string) => `/vs/${slug}`;

// The "Screenshot Bro" column, verified against the app source. Every /vs page
// reads its cells from here so eleven pages cannot drift apart.
export const SCREENSHOT_BRO_FACTS = {
  platform: `Native Mac, iPad and iPhone app (macOS ${MINIMUM_MACOS_VERSION}+, iOS/iPadOS ${MINIMUM_IPADOS_VERSION}+), from the App Store`,
  account: "None — no signup; projects are local files",
  priceModel:
    "Free tier with no expiry; Pro unlock sold as a lifetime purchase or a subscription (price shown in the app)",
  freeTier:
    "1 project, 3 rows, 5 templates per row; every device frame, shape and locale; store uploads included",
  watermark: "None on any export, free tier included",
  frames:
    'iPhone 17 / 17 Pro / 17 Pro Max / Air, iPad Pro 11" and 13", MacBook Air and Pro, iMac, Apple Watch Ultra 3, abstract Android phone and tablet',
  sizes:
    "Presets for every App Store iPhone, iPad and Mac size and Google Play phone and tablet; custom row sizes; no Watch, TV or Vision Pro presets",
  layout:
    "One continuous multi-row canvas; shapes and backgrounds can span across screenshots",
  templates: "50+ starter templates, fully editable",
  localization:
    "81 built-in language presets plus custom codes; on-device auto-translate (no API keys) for the languages Apple's Translation framework supports; per-locale text, style, image and position overrides",
  ascUpload:
    "Built in — App Store Connect API key, checksum-based sync of only what changed, metadata editing",
  playUpload:
    "Built in — Google Play Developer API via a service account, staged as a Play edit",
  export:
    "PNG or JPEG at exact store pixel sizes, one folder per locale and row; Continuous and Showcase modes",
  threeDVideo: "Two 3D iPhone frames; no video or App Preview export",
  automation:
    "Opt-in local MCP server on Mac — 26 tools let Claude Code, Claude Desktop or Cursor build, translate, preview, export and sync a set; no hosted API or CLI",
  offlineFiles:
    "Fully offline; plain-JSON project files with a public schema; opt-in iCloud sync",
  collaboration:
    "Single-user; share the project folder or sync via iCloud; no team accounts",
  bestFor:
    "Apple-platform developers shipping repeated sets across sizes and languages to both stores",
} as const;

export const COMPARISON_PAGES: ComparisonPage[] = [
  {
    slug: "screenshot-studio",
    competitor: "Screenshot Studio",
    competitorUrl: "https://appstorescreenshotstudio.com/",
    heading: `${SITE_NAME} vs Screenshot Studio`,
    title: `${SITE_NAME} vs Screenshot Studio — which to use?`,
    description:
      "Screenshot Studio covers Watch, TV and Vision Pro with AI translation; Screenshot Bro exports free and uploads to both stores. Which native Mac app fits.",
    readTime: "11 min read",
    datePublished: "2026-08-20",
    lastVerified: "2026-08-20",
    checkedAgainst: "Screenshot Studio's own site and its App Store listing",
    group: "native",
    type: "Native Mac, iOS, visionOS app",
    free: "Try free; pay to export",
    localization: "AI translation, any language",
    upload: "App Store Connect only",
    alternativeHref: "/blog/screenshot-studio-alternative",
  },
  {
    slug: "butterkit",
    competitor: "ButterKit",
    competitorUrl: "https://butterkit.app/",
    heading: `${SITE_NAME} vs ButterKit`,
    title: `${SITE_NAME} vs ButterKit — which to use?`,
    description:
      "ButterKit needs macOS 26 and your own AI key for 50 languages; Screenshot Bro runs on macOS 15, ships 81 locale presets and uploads to Google Play too.",
    readTime: "12 min read",
    datePublished: "2026-08-25",
    lastVerified: "2026-08-25",
    checkedAgainst:
      "ButterKit's own site, documentation and pricing page, and its Mac App Store listing",
    group: "native",
    type: "Native Mac app, macOS 26+",
    free: "Unlimited, but watermarked",
    localization: "19 on-device; 50 with your API key",
    upload: "App Store Connect only",
    alternativeHref: "/blog/butterkit-alternative",
  },
  {
    slug: "shotbot",
    competitor: "Shotbot",
    competitorUrl:
      "https://apps.apple.com/us/app/shotbot-framed-screenshots/id6450552843",
    heading: `${SITE_NAME} vs Shotbot`,
    title: `${SITE_NAME} vs Shotbot — which to use?`,
    description:
      "Shotbot frames one screenshot in seconds from the share sheet; Screenshot Bro designs the whole store listing. When each fits, and how they work together.",
    readTime: "10 min read",
    datePublished: "2026-08-20",
    lastVerified: "2026-08-20",
    checkedAgainst: "Shotbot's App Store listing and the open-source repository it links to",
    group: "native",
    type: "Native iOS, Mac, visionOS",
    free: "Limited frames per day",
    localization: "None (framing only)",
    upload: "Save or share images",
    alternativeHref: "/blog/shotbot-alternative",
  },
  {
    slug: "rotato",
    competitor: "Rotato",
    competitorUrl: "https://rotato.app/",
    heading: `${SITE_NAME} vs Rotato`,
    title: `${SITE_NAME} vs Rotato — which to use?`,
    description:
      "Rotato renders 3D device animations and video; Screenshot Bro builds flat, localized App Store sets. Row-by-row comparison and the pipeline that uses both.",
    readTime: "10 min read",
    datePublished: "2026-08-20",
    lastVerified: "2026-08-20",
    checkedAgainst: "Rotato's own site and help pages",
    group: "native",
    type: "Native Mac app (web beta)",
    free: "Unlimited trial, watermarked",
    localization: "Not a built-in workflow",
    upload: "Export files",
    alternativeHref: "/blog/rotato-alternative",
  },
  {
    slug: "applaunchpad",
    competitor: "AppLaunchpad",
    competitorUrl: "https://theapplaunchpad.com/",
    heading: `${SITE_NAME} vs AppLaunchpad`,
    title: `${SITE_NAME} vs AppLaunchpad — which to use?`,
    description:
      "AppLaunchpad's browser editor and 1000+ templates versus Screenshot Bro's native Mac app with store upload and 81 locales: pricing, limits, who wins where.",
    readTime: "10 min read",
    datePublished: "2026-08-20",
    lastVerified: "2026-08-20",
    checkedAgainst: "AppLaunchpad's own site and help center",
    group: "browser",
    type: "Browser",
    free: "10 templates, 100+ graphics",
    localization: "Yes, duplicate per language",
    upload: "Export files",
    alternativeHref: "/blog/applaunchpad-alternative",
  },
  {
    slug: "previewed",
    competitor: "Previewed",
    competitorUrl: "https://previewed.app/",
    heading: `${SITE_NAME} vs Previewed`,
    title: `${SITE_NAME} vs Previewed — which to use?`,
    description:
      "Previewed makes 3D mockups and promo videos in the browser; Screenshot Bro makes store-ready localized sets on Mac. Pricing, exports and fit compared.",
    readTime: "10 min read",
    datePublished: "2026-08-20",
    lastVerified: "2026-08-20",
    checkedAgainst: "Previewed's own site and pricing page",
    group: "browser",
    type: "Browser",
    free: "Free at 720p, credit required",
    localization: "Not stated on its site",
    upload: "Export files",
    alternativeHref: "/blog/previewed-alternative",
  },
  {
    slug: "appscreens",
    competitor: "AppScreens",
    competitorUrl: "https://appscreens.com/",
    heading: `${SITE_NAME} vs AppScreens`,
    title: `${SITE_NAME} vs AppScreens — which to use?`,
    description:
      "AppScreens' browser generator with 80+ locales versus Screenshot Bro's native Mac app with a watermark-free free tier and direct upload, factor by factor.",
    readTime: "10 min read",
    datePublished: "2026-08-20",
    lastVerified: "2026-08-20",
    checkedAgainst: "AppScreens' own site and knowledge base",
    group: "browser",
    type: "Browser",
    free: "5 screenshots, 1 project",
    localization: "80+ languages (paid)",
    upload: "1-click upload (paid)",
    alternativeHref: "/blog/appscreens-alternative",
  },
  {
    slug: "appmockup-studio",
    competitor: "AppMockUp Studio",
    competitorUrl: "https://app-mockup.com/",
    heading: `${SITE_NAME} vs AppMockUp Studio`,
    title: `${SITE_NAME} vs AppMockUp Studio — which to use?`,
    description:
      "AppMockUp Studio is free in the browser with no account; Screenshot Bro is a native Mac app for repeated, localized sets with upload. Which fits when.",
    readTime: "10 min read",
    datePublished: "2026-08-20",
    lastVerified: "2026-08-20",
    checkedAgainst: "AppMockUp Studio's own site, help center and its January 2025 relaunch post",
    group: "browser",
    type: "Browser, no account",
    free: "Free; 10 Main Screenshots",
    localization: "Not a built-in workflow",
    upload: "Export files",
    alternativeHref: "/blog/appmockup-alternative",
  },
  {
    slug: "screenshots-pro",
    competitor: "Screenshots Pro",
    competitorUrl: "https://screenshots.pro/",
    heading: `${SITE_NAME} vs Screenshots Pro`,
    title: `${SITE_NAME} vs Screenshots Pro — which to use?`,
    description:
      "Screenshots Pro's cloud editor, 3D angles and REST API versus Screenshot Bro's native, offline Mac app with free store upload: plans, limits, fit.",
    readTime: "10 min read",
    datePublished: "2026-08-20",
    lastVerified: "2026-08-20",
    checkedAgainst: "Screenshots Pro's own site, pricing and licence pages, and its developer docs",
    group: "automation",
    type: "Browser",
    free: "Free Basic, attribution link",
    localization: "Auto-translate (Standard plan)",
    upload: "Export files",
    alternativeHref: "/blog/screenshots-pro-alternative",
  },
  {
    slug: "fastlane-snapshot",
    competitor: "Fastlane snapshot",
    competitorUrl: "https://fastlane.tools/",
    heading: `Fastlane snapshot vs ${SITE_NAME}`,
    title: `Fastlane snapshot vs ${SITE_NAME} — which to use?`,
    description:
      "Fastlane snapshot captures UI screenshots from XCUITest; Screenshot Bro designs marketing screenshots. They solve different problems.",
    readTime: "8 min read",
    datePublished: "2026-05-09",
    lastVerified: "2026-08-20",
    checkedAgainst: "the fastlane docs and GitHub repositories",
    group: "automation",
    type: "Command line",
    free: "Free and open source",
    localization: "Titles from .strings files",
    upload: "Yes, via deliver",
  },
  {
    slug: "mockuuups-studio",
    competitor: "Mockuuups Studio",
    competitorUrl: "https://mockuuups.studio/",
    heading: `${SITE_NAME} vs Mockuuups Studio`,
    title: `${SITE_NAME} vs Mockuuups Studio — which to use?`,
    description:
      "Mockuuups Studio's 5,300+ photoreal mockups and design plugins versus Screenshot Bro's App Store size presets, locales and upload: pricing and fit.",
    readTime: "10 min read",
    datePublished: "2026-08-20",
    lastVerified: "2026-08-20",
    checkedAgainst: "Mockuuups Studio's own site, pricing page and help center",
    group: "design",
    type: "Desktop, web and plugins",
    free: "Limited; attribution",
    localization: "Not a built-in workflow",
    upload: "Export files",
    alternativeHref: "/blog/mockuuups-studio-alternative",
  },
  {
    slug: "placeit",
    competitor: "Placeit",
    competitorUrl: "https://placeit.net/",
    heading: `${SITE_NAME} vs Placeit`,
    title: `${SITE_NAME} vs Placeit — which to use?`,
    description:
      "Placeit's all-in-one design subscription versus Screenshot Bro's purpose-built App Store screenshot app: watermarks, pricing, store sizes, locales, upload.",
    readTime: "10 min read",
    datePublished: "2026-08-20",
    lastVerified: "2026-08-20",
    checkedAgainst: "Placeit's own site, pricing page and help center",
    group: "design",
    type: "Browser design library",
    free: "Watermarked downloads",
    localization: "Manual per language",
    upload: "Download files",
    alternativeHref: "/blog/placeit-alternative",
  },
];

// Competitors covered only by a blog post. They still belong on the hub.
export const BLOG_ONLY_HUB_ROWS: HubRow[] = [
  {
    tool: "Canva",
    href: "/blog/canva-app-store-screenshots",
    type: "Browser and desktop",
    free: "Free plan",
    localization: "Manual per language",
    upload: "Download files",
    group: "design",
  },
  {
    tool: "Figma and Photoshop",
    href: "/blog/screenshot-generator-vs-figma-vs-photoshop",
    type: "Design tools",
    free: "Figma free tier",
    localization: "Manual, or via plugins",
    upload: "Export files",
    group: "design",
  },
];

export const HUB_ROWS: HubRow[] = [
  ...COMPARISON_PAGES.map(
    (page): HubRow => ({
      tool: page.competitor,
      href: comparisonPath(page.slug),
      group: page.group,
      type: page.type,
      free: page.free,
      localization: page.localization,
      upload: page.upload,
      alternativeHref: page.alternativeHref,
    }),
  ),
  ...BLOG_ONLY_HUB_ROWS,
];

export function getComparisonPage(slug: string): ComparisonPage {
  const page = COMPARISON_PAGES.find((entry) => entry.slug === slug);
  if (!page) throw new Error(`Unknown comparison slug: ${slug}`);
  return page;
}

export const LATEST_COMPARISON_VERIFIED = COMPARISON_PAGES.reduce(
  (latest, page) => (page.lastVerified > latest ? page.lastVerified : latest),
  COMPARISON_PAGES[0].lastVerified,
);

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Static table rather than Intl: server and browser ICU data can differ, and a
// mismatch in the stamp would be a hydration error.
export function formatMonthYear(iso: string): string {
  const [year, month] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}
