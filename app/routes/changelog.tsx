import type { Route } from "./+types/changelog";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";

const CHANGELOG_TITLE = `Changelog — ${SITE_NAME}`;
const CHANGELOG_DESCRIPTION = `What's new in ${SITE_NAME}. Release notes, new features, and improvements for the macOS App Store screenshot designer.`;
const CHANGELOG_URL = `${SITE_URL}/changelog`;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: CHANGELOG_TITLE },
    { name: "description", content: CHANGELOG_DESCRIPTION },
    { property: "og:title", content: CHANGELOG_TITLE },
    { property: "og:description", content: CHANGELOG_DESCRIPTION },
    { property: "og:url", content: CHANGELOG_URL },
    { name: "twitter:title", content: CHANGELOG_TITLE },
    { name: "twitter:description", content: CHANGELOG_DESCRIPTION },
  ]);

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: `${SITE_URL}/changelog` },
];

type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  changes: { type: "added" | "improved" | "fixed"; text: string }[];
};

const CHANGELOG: ChangelogEntry[] = [
  {
    version: "2.6",
    date: "May 13, 2026",
    title: "Shape Lock, Inline Locale Bar, and Export Filename Suffixes",
    changes: [
      { type: "added", text: "Freeform-style shape Lock with pixel-perfect selection handles" },
      { type: "added", text: "\"Match Size to Selected Devices\" right-click action to resize a row to its device shapes" },
      { type: "added", text: "\"Translate Selected to All Languages\" action, with unified language terminology across the app" },
      { type: "added", text: "Optional locale code and custom suffix appended to exported screenshot filenames" },
      { type: "added", text: "SF Symbol icons in canvas and row context menus" },
      { type: "improved", text: "Locale switcher moved out of the toolbar into an inline flag-chip bar" },
      { type: "improved", text: "Shape properties bar split into per-control sections, with a rotation reset" },
      { type: "improved", text: "Font picker renders each entry in its own typeface" },
      { type: "improved", text: "Locked shapes are skipped during bulk operations and multi-select drags" },
      { type: "improved", text: "Screenshot drops honor the row's Android default" },
      { type: "improved", text: "RevenueCat user ID shown in the Purchase settings tab" },
      { type: "fixed", text: "Shapes that span into neighboring templates are preserved when a template is deleted" },
    ],
  },
  {
    version: "2.5",
    date: "May 9, 2026",
    title: "Onboarding Coach Marks, Help Window, and 3D Device Polish",
    changes: [
      { type: "added", text: "Interactive onboarding coach marks after the welcome modal" },
      { type: "added", text: "Comprehensive Help window covering core editor features" },
      { type: "added", text: "iPhone 17 Pro Max 3D device frame" },
      { type: "added", text: "Editable text field for shape rotation degrees" },
      { type: "added", text: "Post-purchase celebration sheet" },
      { type: "added", text: "Subscription tier details on the paywall, with a consolidated App Store Connect API Key UI" },
      { type: "added", text: "Periodic App Store review prompt after sustained use" },
      { type: "improved", text: "3D device controls unified into a single popover; size is preserved across orientation flips" },
      { type: "improved", text: "3D device pitch and yaw range widened to ±90°" },
      { type: "improved", text: "Generic Android device frames flex to match the dropped screenshot's aspect" },
      { type: "improved", text: "Refactored oversized views and centralized logging for better stability" },
    ],
  },
  {
    version: "2.4",
    date: "May 1, 2026",
    title: "Spanish UI, Showcase Export, and Pro Tier",
    changes: [
      { type: "added", text: "Spanish in-app localization with a language picker in Settings" },
      { type: "added", text: "38 additional language presets in the locale catalog, with unified flags and presets" },
      { type: "added", text: "Showcase export sheet with configurable aspect presets and per-row previews" },
      { type: "added", text: "Settings backup action — one-click zip of all app data" },
      { type: "added", text: "Pro tier with an Upgrade to Pro entry point in the toolbar for free users" },
      { type: "added", text: "iOS Simulator capture from the device shape context menu" },
      { type: "added", text: "Remove Background action on the image shape context menu" },
      { type: "added", text: "Show in Finder option in the project menu" },
      { type: "added", text: "Weight and italic controls for imported custom fonts, with auto-import of family siblings" },
      { type: "added", text: "Notifications when exports and App Store Connect uploads complete" },
      { type: "added", text: "App Store Connect demo mode for App Review" },
      { type: "improved", text: "Showcase export sheet UX overhaul" },
      { type: "improved", text: "App Store Connect setup flow with Clear Credentials moved into the API Key section" },
      { type: "improved", text: "Refreshed Indigo and Amethyst templates" },
      { type: "improved", text: "Native NSAlert for project rename and duplicate, prefilled with the current name" },
      { type: "improved", text: "SVG insertion scales up to a minimum dimension; Restore Aspect Ratio is available for every SVG" },
      { type: "improved", text: "Device shape image actions grouped under a single Image submenu" },
      { type: "improved", text: "Translation table scrolling polish" },
      { type: "fixed", text: "Screenshot now bleeds past the frame aperture to eliminate the halo seam" },
      { type: "fixed", text: "Template artifacts no longer carry over when instantiating from a template" },
      { type: "fixed", text: "Project rename text field caret no longer jumps" },
      { type: "fixed", text: "Main window reopens reliably when creating a project; app quits on last window close" },
      { type: "fixed", text: "Hardened App Store Connect upload by safely decoding legacy fields" },
    ],
  },
  {
    version: "2.3",
    date: "April 17, 2026",
    title: "Upload to App Store Connect",
    changes: [
      { type: "added", text: "One-click upload of rendered screenshots straight to App Store Connect via the official API" },
      { type: "added", text: "Auto-detected display types from row size, with override support for iPhone, iPad, and Mac" },
      { type: "added", text: "Locale matching between project locales and App Store version localizations" },
      { type: "added", text: "Preflight validation — flags oversized images, missing locales, version lock states, and platform conflicts before anything is uploaded" },
      { type: "added", text: "Metadata editing step in the upload wizard — adjust App Store copy before pushing" },
      { type: "added", text: "Per-project memory of the selected App Store Connect app and version" },
      { type: "added", text: "API key management: Issuer ID, Key ID, and .p8 stored securely in the macOS Keychain" },
    ],
  },
  {
    version: "2.2",
    date: "April 15, 2026",
    title: "Smarter Batch Import & Template Cleanup",
    changes: [
      { type: "added", text: "Reset All Images action — clear every device screenshot in a project in one go" },
      { type: "improved", text: "Batch import now fits images to the closest matching row and skips duplicates" },
      { type: "improved", text: "Saved templates only include the fonts they actually use; preview assets now render at 1x for smaller project files" },
      { type: "fixed", text: "Refreshed Sports template rendering and background fidelity" },
    ],
  },
  {
    version: "2.1",
    date: "March 31, 2026",
    title: "Rich Text, Per-Locale Export, New Templates",
    changes: [
      { type: "added", text: "Rich text editing for text shapes with per-character styling (weight, color, size)" },
      { type: "added", text: "Per-locale export menu — export any single locale without running the full batch" },
      { type: "added", text: "\"Duplicate to All Screenshots\" context action; renamed \"Clip to Screenshot\" → \"Clip to Frame\"" },
      { type: "added", text: "Directional duplicate (⌥-drag with arrow direction) and flag emojis in locale labels" },
      { type: "added", text: "Apple Watch Ultra 3 device frames and Abstract Pixel 9 template" },
      { type: "added", text: "Colorful, Forest, and Sports project templates with release metadata" },
      { type: "improved", text: "Rendered template previews in the New Project window for faster picking" },
      { type: "fixed", text: "Arrow keys no longer hijack cursor navigation inside text fields" },
      { type: "fixed", text: "New shapes no longer land off-screen after deleting templates" },
    ],
  },
  {
    version: "2.0",
    date: "March 10, 2026",
    title: "Initial Release — Screenshot Bro on the Mac App Store",
    changes: [
      { type: "added", text: "Multi-template editing — change a shape once, see it across every screenshot in the row" },
      { type: "added", text: "Device frames for iPhone 17 series, iPad Pro 11\" & 13\", MacBook, iMac, and Android phones & tablets" },
      { type: "added", text: "Background editor with solid colors, linear/radial/angular gradients, and image fill/fit/stretch/tile modes — backgrounds can span across templates" },
      { type: "added", text: "Shape tools: rectangles, circles, stars, text, images, SVGs, and device frames with full transform controls" },
      { type: "added", text: "Smart alignment with snap guides, Shift-nudge for 10px jumps, Option-drag to clone" },
      { type: "added", text: "30 language localization with per-shape text, position, and image overrides; auto-translate for missing copy" },
      { type: "added", text: "Batch screenshot import — drag multiple shots in and they auto-wrap in device frames" },
      { type: "added", text: "Custom font import (.ttf, .otf, .ttc) with per-project registration" },
      { type: "added", text: "Opt-in iCloud Drive sync with tombstone-aware conflict resolution across Macs" },
      { type: "added", text: "PNG & JPEG export at 1x, 2x, and 3x into folders organized by locale and row" },
      { type: "added", text: "Keyboard shortcuts for nudge, duplicate, cut/copy/paste, z-order, zoom, and locale cycling" },
    ],
  },
];

const TYPE_STYLES = {
  added: { label: "New", bg: "bg-mint/10", text: "text-mint" },
  improved: { label: "Improved", bg: "bg-accent/10", text: "text-accent-light" },
  fixed: { label: "Fixed", bg: "bg-warm/10", text: "text-warm" },
};

export default function Changelog() {
  return (
    <ContentLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
            Changelog
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            What's new in Screenshot Bro
          </h1>
          <p className="mt-4 text-base text-white/55 leading-relaxed">
            New features, improvements, and bug fixes shipped with each release.
          </p>
        </div>

        <div className="space-y-12">
          {CHANGELOG.map((entry) => (
            <article
              key={entry.version}
              className="relative pl-8 border-l border-border"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-surface" />

              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-medium text-accent-light">
                  v{entry.version}
                </span>
                <span className="text-sm text-white/60">{entry.date}</span>
              </div>

              <h2 className="font-display font-bold text-xl text-white mb-4">
                {entry.title}
              </h2>

              <ul className="space-y-3">
                {entry.changes.map((change) => {
                  const style = TYPE_STYLES[change.type];
                  return (
                    <li key={change.text} className="flex items-start gap-3">
                      <span
                        className={`shrink-0 mt-0.5 px-2 py-0.5 rounded text-[11px] font-medium ${style.bg} ${style.text}`}
                      >
                        {style.label}
                      </span>
                      <span className="text-sm text-white/60 leading-relaxed">
                        {change.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
