import type { Route } from "./+types/changelog";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { ContentLayout } from "~/components/ContentLayout";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([
  { name: "Changelog", path: "/changelog" },
]);

const CHANGELOG_TITLE = `Changelog — ${SITE_NAME}`;
const CHANGELOG_DESCRIPTION = `What's new in ${SITE_NAME}. Release notes, new features, and improvements for the App Store screenshot designer for Mac and iPad.`;
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

type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  changes: { type: "added" | "improved" | "fixed"; text: string }[];
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "4.2",
    date: "August 19, 2026",
    title: "Stability Sweep",
    changes: [
      { type: "fixed", text: "Background gradient and image settings are no longer lost when you switch background styles and save" },
      { type: "fixed", text: "Undo after an iCloud sync no longer restores pre-sync content over another device's edits" },
      { type: "fixed", text: "Showcase export no longer drops the background image picked in the export sheet" },
      { type: "fixed", text: "Text shapes no longer render blank intermittently in exports; blur and shadows now match the canvas exactly" },
      { type: "fixed", text: "Edits made right before quitting are saved reliably" },
      { type: "fixed", text: "Store uploads no longer abort midway, leak temporary files, or write to the wrong row" },
      { type: "fixed", text: "Google Play uploads with unreadable source images are caught up front instead of failing mid-upload" },
      { type: "fixed", text: "Dragging the blur slider is now a single undo step instead of one per tick" },
      { type: "improved", text: "Faster launch — font scanning no longer blocks startup" },
      { type: "improved", text: "Exports encode in the background, so the app stays responsive during large exports" },
      { type: "improved", text: "Roughly 5 MB smaller download — landscape device frames are now derived from the portrait artwork" },
      { type: "improved", text: "Major internal restructuring across the app for long-term stability" },
    ],
  },
  {
    version: "4.1",
    date: "August 16, 2026",
    title: "No More Upload Hangs",
    changes: [
      { type: "fixed", text: "App no longer hangs during Google Play and App Store Connect uploads" },
      { type: "fixed", text: "Remaining UI freezes during export rendering" },
      { type: "improved", text: "Failures are now reported automatically so issues get diagnosed and fixed faster" },
    ],
  },
  {
    version: "4.0",
    date: "August 15, 2026",
    title: "Landscape Imports and Upload Safety",
    changes: [
      { type: "added", text: "Automatic crash reporting to catch and fix issues faster" },
      { type: "improved", text: "Landscape screenshots are framed with a landscape device on import" },
      { type: "fixed", text: "App Store uploads no longer go out with missing device frames" },
    ],
  },
  {
    version: "3.9",
    date: "August 14, 2026",
    title: "Smart App Store Screenshot Sync",
    changes: [
      { type: "added", text: "App Store upload is now a true sync — screenshots are matched by checksum and only actual changes are uploaded, reordered, or removed" },
      { type: "added", text: "Review-changes screen shows unchanged, moved, new, and removed screenshots with previews before anything touches App Store Connect" },
      { type: "added", text: "Metadata-only upload mode — push App Store copy without re-uploading screenshots" },
      { type: "added", text: "Single-screenshot App Store uploads" },
      { type: "added", text: "MCP tools to preview and apply the App Store screenshot sync from an AI agent" },
      { type: "improved", text: "Background override opens in a popover so the canvas stays visible while you edit" },
    ],
  },
  {
    version: "3.8",
    date: "August 5, 2026",
    title: "Docked iPad Panels",
    changes: [
      { type: "improved", text: "iPad properties panels dock above the bar instead of opening a dimming sheet" },
      { type: "fixed", text: "Font-size field no longer flattens mixed text sizes when a selection contains more than one size" },
    ],
  },
  {
    version: "3.7",
    date: "July 28, 2026",
    title: "App Store Metadata via MCP",
    changes: [
      { type: "added", text: "MCP tools for editing App Store Connect description metadata" },
      { type: "improved", text: "\"Open Settings\" from the upload flow lands directly on the App Store Connect tab" },
      { type: "improved", text: "Internal restructuring of the editor and upload code for stability" },
      { type: "fixed", text: "Crash in release builds caused by a compiler optimization" },
    ],
  },
  {
    version: "3.6",
    date: "July 20, 2026",
    title: "In-App MCP Server, Ten New Templates, and a Faster Editor",
    changes: [
      { type: "added", text: "In-app MCP server on macOS — an opt-in, token-protected way to let AI agents like Claude drive the editor directly, with a new Settings ▸ Automation tab" },
      { type: "added", text: "Ten new bundled project templates" },
      { type: "added", text: "Outline support for image shapes" },
      { type: "added", text: "Automation/MCP and Google Play topics in the Help window" },
      { type: "added", text: "Per-screenshot toggles in showcase export for single-row projects" },
      { type: "improved", text: "Settings redesigned with a sidebar layout" },
      { type: "improved", text: "Multi-locale export is significantly faster" },
      { type: "improved", text: "Smoother editing — autosave runs in the background and drags no longer re-render entire rows" },
      { type: "improved", text: "Undoing a single-row shape edit no longer touches other rows" },
      { type: "improved", text: "Selected shape's handles always stay on top and grabbable" },
      { type: "improved", text: "Upload wizard shows metadata tabs for every version instead of skipping the step" },
    ],
  },
  {
    version: "3.5",
    date: "July 6, 2026",
    title: "Upload Flow Cleanup",
    changes: [
      { type: "improved", text: "Simplified App Store Connect upload flow" },
      { type: "improved", text: "Unified styling across the bottom shape-properties bar" },
    ],
  },
  {
    version: "3.4",
    date: "June 30, 2026",
    title: "Upload Wizard Polish",
    changes: [
      { type: "improved", text: "\"What's New\" now appears at the top of the This Version metadata section" },
      { type: "improved", text: "Upload wizard remembers which row plan cards you expanded" },
      { type: "improved", text: "Removed crash-prone code paths across the app" },
    ],
  },
  {
    version: "3.2 / 3.3",
    date: "June 27, 2026",
    title: "All-New iPhone Onboarding",
    changes: [
      { type: "improved", text: "Redesigned iPhone onboarding — real-UI illustrations, a template marquee, bigger device previews, and landscape support" },
      { type: "fixed", text: "Paywall no longer stays stuck after finishing onboarding" },
      { type: "fixed", text: "Paywall flicker on launch, with a polished purchase celebration" },
    ],
  },
  {
    version: "3.1",
    date: "June 24, 2026",
    title: "iPhone Fixes and Editor Shortcuts",
    changes: [
      { type: "added", text: "Edit/View mode toggle in the iPhone editor" },
      { type: "added", text: "Delete key removes the selected shapes" },
      { type: "improved", text: "Translations table scrolls smoothly with a visible scrollbar, even on large grids" },
      { type: "fixed", text: "App Store builds on iOS were iPad-only — the iPhone app is now included" },
      { type: "fixed", text: "Canvas no longer blinks when switching between edit and view modes" },
    ],
  },
  {
    version: "3.0",
    date: "June 21, 2026",
    title: "Upload to Google Play",
    changes: [
      { type: "added", text: "Google Play upload — push finished screenshots straight to the Play Store, with platform-aware upload windows" },
      { type: "added", text: "Google Play graphics bundled template" },
      { type: "added", text: "Per-row \"Exclude when uploading to App Store Connect\" toggle" },
      { type: "added", text: "Center any element from the context menu" },
      { type: "improved", text: "New app icon built with Apple's Icon Composer" },
      { type: "improved", text: "Selected row stands out with a two-tone tinted header and accent rules" },
      { type: "improved", text: "Upload preflight groups screenshots by source row instead of by locale" },
      { type: "improved", text: "App Store Connect metadata page defaults to the base locale, pinned on top" },
      { type: "improved", text: "Faster canvas thanks to cached SVG and device snapshot renders" },
      { type: "improved", text: "iPhone editor polish: row title header, resizable bottom sheet, and a tidier locale toolbar" },
      { type: "fixed", text: "Generic Android frames no longer lose their image-adapted aspect on export" },
    ],
  },
  {
    version: "2.9",
    date: "June 11, 2026",
    title: "Text Backgrounds, Per-Text Localization, and Project Starring",
    changes: [
      { type: "added", text: "Text background controls — add a colored highlight behind any text shape" },
      { type: "added", text: "Star projects to pin your favorites to the top of the switcher, on both Mac and iPad" },
      { type: "added", text: "Per-text localization popover in the shape properties bar for quickly translating a single text shape" },
      { type: "added", text: "Change a project's base language" },
      { type: "added", text: "Apply an imported custom font to the selected shapes straight from the properties bar" },
      { type: "added", text: "App version is now shown in Settings" },
      { type: "improved", text: "Rich-text formatting is now undoable, and the formatting bar stays visible the whole time you're editing text" },
      { type: "improved", text: "Cmd+Z / Cmd+Shift+Z route through document undo while still deferring to text editors" },
      { type: "improved", text: "Translations are guarded against wrong-language substitution; rich-text translations are recognized and shown read-only" },
      { type: "improved", text: "App Store Connect upload fans out to every matching locale at once" },
      { type: "fixed", text: "Reordering templates no longer detaches shapes or drops rapid clicks" },
      { type: "fixed", text: "Project deletions now stick across iCloud sync" },
      { type: "fixed", text: "Translation banner no longer re-fires every time you return to a non-base locale" },
      { type: "fixed", text: "Horizontal row scrolling no longer goes missing on launch" },
      { type: "fixed", text: "Rich-text formatting undo works on the first edit after opening a project" },
    ],
  },
  {
    version: "2.8",
    date: "June 6, 2026",
    title: "iPad Onboarding, App Store Connect Upload on iPad, and Export Destinations",
    changes: [
      { type: "added", text: "App Store Connect upload now works on iPad and iPhone" },
      { type: "added", text: "Full-screen multi-step onboarding flow on iPad" },
      { type: "added", text: "Export destination chooser on iPad — save to Photos, Files, or the share sheet" },
      { type: "added", text: "Nightfall bundled template" },
      { type: "improved", text: "In-place rich text editing on iPad with a docked formatting bar" },
      { type: "improved", text: "Larger gradient editor controls and a refined angle wheel" },
      { type: "improved", text: "iCloud sync no longer blocks the UI; project thumbnails load asynchronously" },
      { type: "improved", text: "App Store Connect upload wizard: collapsible preflight panel and per-row plan cards" },
      { type: "improved", text: "Shadow presets keep your current shadow color" },
      { type: "improved", text: "Row inspector sidebar remembers its open/closed state" },
      { type: "improved", text: "Crisper template thumbnails on Retina displays" },
      { type: "improved", text: "First launch shows a Create Project screen instead of auto-creating a project" },
      { type: "fixed", text: "Showcase and export backgrounds render correctly on iPad" },
      { type: "fixed", text: "Toolbar no longer takes several seconds to appear on first iPad project open" },
      { type: "fixed", text: "Context-menu previews are correct at every zoom level" },
    ],
  },
  {
    version: "2.7",
    date: "June 3, 2026",
    title: "Screenshot Bro Comes to iPad & iPhone",
    changes: [
      { type: "added", text: "Full iPad and iPhone app — the complete editor on iPadOS/iOS, sharing the same projects and templates" },
      { type: "added", text: "Touch-first iPad UI: Projects home screen, adaptive toolbar, larger touch targets, and export via the share sheet" },
      { type: "added", text: "Configurable drop shadows for device frames, editable across multi-selections" },
      { type: "added", text: "Per-row Edit/Preview mode toggle" },
      { type: "added", text: "Cmd+B/I/U formatting shortcuts for inline text selections" },
      { type: "added", text: "Portuguese (Portugal) screenshot locale" },
      { type: "improved", text: "Translation table cells are multiline with a stable caret, and line breaks survive auto-translation" },
      { type: "improved", text: "Editor chrome appears immediately on project open instead of waiting for images" },
      { type: "improved", text: "Selecting an SVG preset auto-enables its color override" },
      { type: "improved", text: "Refreshed Rainbow template" },
      { type: "fixed", text: "Opacity, rotation, and size edits no longer land on the wrong shape after changing selection" },
      { type: "fixed", text: "Language bar no longer forces the window taller than the screen" },
      { type: "fixed", text: "Quick Look arrow keys are no longer swallowed by shape nudging" },
    ],
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }}
      />
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
