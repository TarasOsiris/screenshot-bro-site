import type { Route } from "./+types/changelog";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { ContentLayout } from "~/components/ContentLayout";

export const meta: Route.MetaFunction = () => [
  { title: `Changelog — ${SITE_NAME}` },
  {
    name: "description",
    content: `What's new in ${SITE_NAME}. Release notes, new features, and improvements for the macOS App Store screenshot designer.`,
  },
];

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
    version: "1.3",
    date: "April 2026",
    title: "Project Templates & Keyboard Shortcuts",
    changes: [
      { type: "added", text: "Built-in project templates with pre-configured layouts, device frames, and backgrounds" },
      { type: "added", text: "Full keyboard shortcut support — nudge, duplicate, cut/copy/paste, z-order, zoom, and locale cycling" },
      { type: "added", text: "Shift-nudge for 10px jumps, Option-drag to clone shapes" },
      { type: "improved", text: "Faster canvas rendering for projects with many shapes" },
      { type: "fixed", text: "Text shapes now preserve line breaks on export" },
    ],
  },
  {
    version: "1.2",
    date: "March 2026",
    title: "Custom Fonts & iCloud Sync",
    changes: [
      { type: "added", text: "Import custom .ttf, .otf, and .ttc font files for text shapes" },
      { type: "added", text: "Opt-in iCloud Drive sync with last-writer-wins conflict resolution" },
      { type: "added", text: "SVG shape import — drop vector assets directly onto the canvas" },
      { type: "improved", text: "Background spanning now works across rows of different device sizes" },
      { type: "fixed", text: "Gradient angle control now snaps to 15-degree increments when holding Shift" },
    ],
  },
  {
    version: "1.1",
    date: "February 2026",
    title: "Localization & Batch Export",
    changes: [
      { type: "added", text: "30 language presets with per-shape text, position, and image overrides" },
      { type: "added", text: "Batch export — one click exports every locale and screenshot row as organized folders" },
      { type: "added", text: "Translation progress tracking across all locales" },
      { type: "improved", text: "Device frame library expanded with iPhone 17 series and iPad Pro models" },
      { type: "fixed", text: "Export at 3x scale no longer clips shapes near canvas edges" },
    ],
  },
  {
    version: "1.0",
    date: "January 2026",
    title: "Initial Release",
    changes: [
      { type: "added", text: "Multi-template editing — change a shape and it updates across all screenshots" },
      { type: "added", text: "Device frames for iPhone, iPad, MacBook, iMac, and Android devices" },
      { type: "added", text: "Background editor with solid colors, linear/radial/angular gradients, and image modes" },
      { type: "added", text: "Shape tools: rectangles, circles, stars, text, and images with full transform controls" },
      { type: "added", text: "Smart alignment with snap guides and pixel-perfect positioning" },
      { type: "added", text: "PNG & JPEG export at 1x, 2x, and 3x scales" },
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
    <ContentLayout
      footerLinks={[
        { label: "\u2190 Back to Screenshot Bro", href: "/" },
        { label: "Privacy", href: "/privacy" },
      ]}
    >
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
                <span className="text-sm text-white/35">{entry.date}</span>
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
