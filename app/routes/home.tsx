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
    description: "Pixel-perfect iPhone and iPad mockups. Set the device body color, drop in your screen content, done.",
    accent: "var(--color-mint)",
  },
  {
    icon: <IconGradient />,
    title: "Beautiful Backgrounds",
    description: "13 gradient presets — Ocean, Sunset, Mint, Berry — or craft your own with multi-stop gradients and angle control.",
    accent: "var(--color-warm)",
  },
  {
    icon: <IconShapes />,
    title: "Shape Tools",
    description: "Rectangles, circles, text, images, SVGs, and device frames. Full control over color, opacity, rotation, and border radius.",
    accent: "var(--color-rose)",
  },
  {
    icon: <IconAlign />,
    title: "Smart Alignment",
    description: "Snap guides appear as you drag, keeping everything lined up. Nudge with arrow keys for pixel-perfect placement.",
    accent: "var(--color-accent-light)",
  },
  {
    icon: <IconExport />,
    title: "Batch Export",
    description: "PNG or JPEG at 1x, 2x, or 3x. Export all rows and templates at once into organized folders. One click.",
    accent: "var(--color-warm-light)",
  },
  {
    icon: <IconProject />,
    title: "Project Management",
    description: "Save, name, and switch between screenshot projects. Auto-saves as you work. Full undo/redo support.",
    accent: "var(--color-mint)",
  },
  {
    icon: <IconNative />,
    title: "Native macOS",
    description: "Built with Swift and SwiftUI. No Electron, no browser tab. Instant launch, native performance, zero lag.",
    accent: "var(--color-accent)",
  },
];

// ─── App Preview (mock UI) ───────────────────────────────────────────────────

function AppPreview() {
  return (
    <div className="macos-window w-full max-w-4xl mx-auto">
      {/* Title bar */}
      <div className="macos-titlebar">
        <div className="macos-dot" style={{ background: "#ff5f57" }} />
        <div className="macos-dot" style={{ background: "#febc2e" }} />
        <div className="macos-dot" style={{ background: "#28c840" }} />
        <span className="ml-3 text-xs text-white/30 font-mono">Screenshot Bro — My App Screenshots</span>
      </div>

      {/* App content mock */}
      <div className="bg-[#13131d] p-6 flex gap-4">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col gap-2 w-40 shrink-0">
          <div className="text-[10px] uppercase tracking-widest text-white/20 mb-1 font-mono">Rows</div>
          {["iPhone 6.5″", "iPad 13″"].map((label, i) => (
            <div
              key={label}
              className={`text-xs px-3 py-2 rounded-lg cursor-default ${
                i === 0 ? "bg-accent/20 text-accent-light" : "text-white/40 hover:text-white/60"
              }`}
            >
              {label}
            </div>
          ))}
          <div className="mt-auto text-[10px] text-white/15 font-mono">v1.0.0</div>
        </div>

        {/* Canvas area */}
        <div className="flex-1 flex gap-3 overflow-hidden">
          {[
            { from: "#6366f1", to: "#a855f7" },
            { from: "#f59e0b", to: "#ef4444" },
            { from: "#34d399", to: "#3b82f6" },
          ].map((grad, i) => (
            <div
              key={i}
              className="flex-1 aspect-[9/19.5] rounded-lg relative overflow-hidden"
              style={{
                background: `linear-gradient(160deg, ${grad.from}, ${grad.to})`,
                minWidth: 0,
              }}
            >
              {/* Mock device frame */}
              <div className="absolute inset-x-[15%] top-[12%] bottom-[8%] rounded-[14px] bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="w-[70%] h-[60%] rounded-md bg-white/10 flex flex-col gap-1.5 p-2">
                  <div className="h-2 w-3/4 rounded bg-white/20" />
                  <div className="h-2 w-1/2 rounded bg-white/15" />
                  <div className="flex-1 rounded bg-white/5 mt-1" />
                </div>
              </div>
              {/* Mock text overlay */}
              <div className="absolute bottom-[4%] inset-x-0 text-center">
                <div className="text-[8px] font-semibold text-white/80 drop-shadow-lg tracking-wide">
                  {["Track Progress", "Stay Focused", "Achieve Goals"][i]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspector */}
        <div className="hidden lg:flex flex-col gap-3 w-44 shrink-0">
          <div className="text-[10px] uppercase tracking-widest text-white/20 font-mono">Inspector</div>
          {[
            ["Background", "Gradient"],
            ["Angle", "160°"],
            ["Format", "PNG"],
            ["Scale", "3x"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between text-xs">
              <span className="text-white/30">{label}</span>
              <span className="text-white/60 font-mono text-[11px]">{value}</span>
            </div>
          ))}
          <div className="mt-2 flex gap-1.5">
            {["#6366f1", "#a855f7", "#f59e0b", "#34d399"].map((c) => (
              <div
                key={c}
                className="w-5 h-5 rounded-full border border-white/10"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>
      </div>
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
            <a href="#features" className="text-xs text-white/40 hover:text-white/80 transition-colors hidden sm:block">
              Features
            </a>
            <a
              href="#download"
              className="text-xs font-medium bg-white/5 hover:bg-white/10 border border-border text-white/80 px-4 py-1.5 rounded-lg transition-all"
            >
              Download
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
            <span className="text-white">batch‑crafted.</span>
          </h1>

          {/* Sub */}
          <p
            className="animate-fade-up max-w-xl mx-auto text-base sm:text-lg text-white/40 leading-relaxed mb-10"
            style={{ animationDelay: "0.2s" }}
          >
            Design once, export every variant. Device frames, gradients, text overlays —
            all in a lightning-fast native macOS editor.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#download"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm transition-all hover:shadow-[0_0_32px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
              Download for Mac
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] border border-border text-white/60 hover:text-white/90 hover:border-white/20 text-sm transition-all"
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
          className="animate-fade-up relative max-w-4xl mx-auto mt-16 px-4"
          style={{ animationDelay: "0.5s" }}
        >
          <AppPreview />
          {/* Glow under preview */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent/10 blur-3xl rounded-full" />
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
              <span className="text-white/30">Nothing you don't.</span>
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
                <p className="text-xs leading-relaxed text-white/35">
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
                desc: "Pick your device sizes — iPhone 6.5\", iPad 13\", whatever you need. Add as many rows as you want.",
              },
              {
                step: "02",
                title: "Design Once",
                desc: "Drop in device frames, add text and shapes, choose a gradient. Changes flow across all templates.",
              },
              {
                step: "03",
                title: "Export All",
                desc: "Hit export. Get organized folders with every screenshot at your chosen scale. That's it.",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="font-mono text-5xl font-bold text-white/[0.04] mb-4">
                  {s.step}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gradient Showcase ── */}
      <section className="py-20 px-6 border-t border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-rose font-mono mb-3">
              Presets
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Gorgeous gradients, built in.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { name: "Ocean", from: "#2563eb", to: "#06b6d4" },
              { name: "Sunset", from: "#f97316", to: "#ec4899" },
              { name: "Peach", from: "#fb923c", to: "#f472b6" },
              { name: "Mint", from: "#34d399", to: "#2dd4bf" },
              { name: "Berry", from: "#a855f7", to: "#ec4899" },
              { name: "Flame", from: "#ef4444", to: "#f59e0b" },
              { name: "Night", from: "#1e1b4b", to: "#7c3aed" },
            ].map((g) => (
              <div key={g.name} className="group cursor-default">
                <div
                  className="aspect-[3/4] rounded-xl transition-transform group-hover:scale-105 group-hover:shadow-lg"
                  style={{
                    background: `linear-gradient(160deg, ${g.from}, ${g.to})`,
                  }}
                />
                <p className="text-[11px] text-white/25 mt-2 text-center font-mono group-hover:text-white/50 transition-colors">
                  {g.name}
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
          <p className="text-base text-white/35 mb-10 max-w-md mx-auto">
            Download Screenshot Bro for free. No sign-up, no watermarks.
            Just open and start creating.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-base transition-all hover:shadow-[0_0_48px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
            Download for macOS
          </a>
          <p className="mt-4 text-xs text-white/20 font-mono">
            Requires macOS 14 Sonoma or later
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
            <span className="text-xs text-white/25">Screenshot Bro</span>
          </div>
          <p className="text-xs text-white/15">
            Built with SwiftUI. Designed for developers.
          </p>
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
