import { useState, useEffect } from "react";

function useScrollFade(threshold = 100) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return visible;
}

// ─── Icons (inline SVG) ──────────────────────────────────────────────────────

function IconTemplates() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconDevice() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <line x1="12" y1="18" x2="12" y2="18.01" />
    </svg>
  );
}

function IconGradient() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" opacity="0.2" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function IconShapes() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 22,17 2,17" />
      <circle cx="17" cy="17" r="5" fill="var(--color-surface)" />
      <circle cx="17" cy="17" r="5" />
    </svg>
  );
}

function IconAlign() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <rect x="4" y="6" width="16" height="4" rx="1" />
      <rect x="6" y="14" width="12" height="4" rx="1" />
    </svg>
  );
}

function IconExport() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7,10 12,15 17,10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconProject() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconNative() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="18" x2="12" y2="20" />
    </svg>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.5-105.3-208-105.3-328.5 0-193 125.5-295.3 248.9-295.3 65.6 0 120.3 43.1 161.4 43.1 39.1 0 100.1-45.7 174.4-45.7 28.2 0 129.4 2.7 196.1 100.8zM554.1 159.4c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.8 32.4-54.5 83.6-54.5 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 134.9-71.3z" />
    </svg>
  );
}

// ─── Feature data ────────────────────────────────────────────────────────────

const features = [
  {
    icon: <IconTemplates />,
    title: "Multi-Template Editing",
    description: "Edit once, update every variant. Change a shape or text and it flows across all your screenshots simultaneously.",
    accent: "var(--color-accent)",
  },
  {
    icon: <IconDevice />,
    title: "Device Frames",
    description: "iPhone, iPad Pro 11\", iPad Pro 13\", and Mac Desktop frames. Accurate bezels, configurable body colors, and per-row defaults.",
    accent: "var(--color-mint)",
  },
  {
    icon: <IconGradient />,
    title: "Backgrounds & Spanning",
    description: "Solid colors, 12 gradient presets, or images. Gradients and images can span across multiple templates in a row for seamless designs.",
    accent: "var(--color-warm)",
  },
  {
    icon: <IconShapes />,
    title: "Shape Tools + SVG",
    description: "Rectangles, circles, text, images, SVGs, and device frames. Inline text editing, fill modes, shape clipping, and full transform controls.",
    accent: "var(--color-rose)",
  },
  {
    icon: <IconAlign />,
    title: "Smart Alignment",
    description: "Snap guides appear as you drag, keeping everything lined up. Nudge with arrow keys, Option-drag to duplicate, jump-to-shape magnifier.",
    accent: "var(--color-accent-light)",
  },
  {
    icon: <IconExport />,
    title: "Localized Export",
    description: "Export PNG or JPEG at 1x–3x for 30+ locales. Auto-organized folders by locale and row. One click, every language, every size.",
    accent: "var(--color-warm-light)",
  },
  {
    icon: <IconProject />,
    title: "Localization Built In",
    description: "30+ locale presets from English to Arabic. Per-shape text overrides, translation tracking, and keyboard shortcuts to flip between languages.",
    accent: "var(--color-mint)",
  },
  {
    icon: <IconNative />,
    title: "Native macOS",
    description: "Built with Swift and SwiftUI. No Electron, no browser tab. Instant launch, native performance, auto-save, full undo/redo.",
    accent: "var(--color-accent)",
  },
];

// ─── App Preview (mock UI) ───────────────────────────────────────────────────

function AppPreview() {
  return (
    <div className="macos-window w-full mx-auto">
      <img
        src="/app-preview.png"
        alt="Screenshot Bro app — editing App Store screenshots with device frames, gradients, and multi-template layout"
        className="w-full h-auto block"
      />
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function Home() {
  const showBackToTop = useScrollFade(600);

  return (
    <div className="min-h-screen">
      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-40 border-b border-border-subtle bg-surface/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-xs font-bold font-display">
              S
            </div>
            <span className="font-display font-bold text-sm text-white tracking-tight">
              Screenshot Bro
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-xs text-white/50 hover:text-white/80 transition-colors hidden sm:block">
              Features
            </a>
            <a
              href="mailto:tleskiv@ninevastudios.com?subject=Screenshot%20Bro%20Early%20Access"
              className="text-xs font-medium bg-white/5 hover:bg-white/10 border border-border text-white/80 px-4 py-1.5 rounded-lg transition-all"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="hero-gradient" />
        <div className="grid-bg absolute inset-0 opacity-40" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1
            className="animate-fade-up font-display font-800 text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-white">App Store</span>
            <br />
            <span className="text-gradient">screenshots,</span>
            <br />
            <span className="text-white">localized.</span>
          </h1>

          {/* Sub */}
          <p
            className="animate-fade-up max-w-xl mx-auto text-base sm:text-lg text-white/55 leading-relaxed mb-10"
            style={{ animationDelay: "0.2s" }}
          >
            Design once, export every variant in 30+ languages. Device frames, gradients,
            text overlays — all in a lightning-fast native macOS editor.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="mailto:tleskiv@ninevastudios.com?subject=Screenshot%20Bro%20Early%20Access"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm transition-all hover:shadow-[0_0_32px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
              Get Early Access
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] border border-border text-white/70 hover:text-white/90 hover:border-white/20 text-sm transition-all"
            >
              See what it does
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19,12 12,19 5,12" />
              </svg>
            </a>
          </div>
        </div>

        {/* App Preview */}
        <div
          className="animate-fade-up relative max-w-6xl mx-auto mt-16"
          style={{ animationDelay: "0.5s" }}
        >
          <AppPreview />
          {/* Glow under preview */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent/10 blur-3xl rounded-full" />
        </div>
      </section>

      {/* ── Why Screenshot Bro? ── */}
      <section className="py-28 px-6 border-t border-border-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-warm font-mono mb-3">
              The Problem
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Why Screenshot Bro?
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-center text-base text-white/55 leading-relaxed mb-16">
            I was tired of spending hours in Figma tweaking App Store screenshots every time I shipped an update — and it got worse when I started localizing into multiple languages. So I built the tool I wished existed — a fast, native Mac app that lets you design once, localize into 30+ languages, and export everything. This is that tool.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Without */}
            <div className="relative rounded-2xl bg-surface-raised border border-border p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose/10 text-rose text-xs font-medium mb-6">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Without Screenshot Bro
              </div>
              <ul className="space-y-4">
                {[
                  "Manually resize each screenshot in Figma or Photoshop",
                  "Copy-paste device frames one by one across artboards",
                  "Re-export every file when you change a single color",
                  "Duplicate everything for each language, lose track of translations",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="relative rounded-2xl bg-surface-raised border border-accent/30 p-8">
              <div className="absolute inset-0 rounded-2xl bg-accent/[0.03]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/10 text-mint text-xs font-medium mb-6">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                  With Screenshot Bro
                </div>
                <ul className="space-y-4">
                  {[
                    "Design one template — all variants update instantly",
                    "Drop in device frames with a click, pick your model and color",
                    "Add 30+ locales with per-shape text overrides",
                    "Export every screenshot, every language, every size — one click",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-mint shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
              Capabilities
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Everything you need.<br className="hidden sm:block" />
              <span className="text-white/45">Nothing you don't.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="feature-card rounded-2xl p-6 flex flex-col gap-4"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `color-mix(in srgb, ${f.accent} 12%, transparent)`,
                    color: f.accent,
                  }}
                >
                  {f.icon}
                </div>
                <h3 className="font-display font-semibold text-white text-sm">
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/50">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it Works ── */}
      <section className="py-28 px-6 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-warm font-mono mb-3">
              Workflow
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Three steps. Ship screenshots.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Set Up Rows",
                desc: "Pick your device sizes — iPhone 6.5\", iPad Pro 13\", Mac Desktop. Add as many rows as you need.",
              },
              {
                step: "02",
                title: "Design & Localize",
                desc: "Drop in device frames, add text and shapes, choose a background. Add locales and translate — per-shape text overrides keep every language pixel-perfect.",
              },
              {
                step: "03",
                title: "Export All",
                desc: "Hit export. Get organized folders by locale and row with every screenshot at your chosen scale. One click.",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="font-mono text-5xl font-bold text-white/[0.04] mb-4">
                  {s.step}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section id="download" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
            Ready to ship<br />better screenshots?
          </h2>
          <p className="text-base text-white/55 mb-10 max-w-md mx-auto">
            Screenshot Bro is a native macOS app. Drop me an email to get early access
            and start shipping better screenshots today.
          </p>
          <a
            href="mailto:tleskiv@ninevastudios.com?subject=Screenshot%20Bro%20Early%20Access"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-base transition-all hover:shadow-[0_0_48px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
            Get Early Access
          </a>
          <p className="mt-4 text-xs text-white/40 font-mono">
            macOS app · Swift & SwiftUI · Zero dependencies
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border-subtle py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-[9px] font-bold font-display">
              S
            </div>
            <span className="text-xs text-white/45">Screenshot Bro</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:tleskiv@ninevastudios.com" className="text-xs text-white/45 hover:text-white/80 transition-colors">
              Contact
            </a>
            <span className="text-xs text-white/35">
              Built with SwiftUI. Designed for developers.
            </span>
          </div>
        </div>
      </footer>

      {/* ── Back to Top ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-surface-raised border border-border flex items-center justify-center text-white/40 hover:text-white/80 transition-all ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18,15 12,9 6,15" />
        </svg>
      </button>
    </div>
  );
}
