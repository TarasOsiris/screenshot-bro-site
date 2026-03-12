import {
  CONTACT_MAILTO,
  EARLY_ACCESS_MAILTO,
  FEATURES,
  SITE_NAME,
  WITHOUT_BRO_POINTS,
  WITH_BRO_POINTS,
  WORKFLOW_STEPS,
} from "~/config/site";
import { AppleLogo, FeatureIcon } from "~/components/home/icons";

function AppPreview() {
  return (
    <div className="macos-window w-full mx-auto">
      <picture>
        <source
          srcSet="/app-preview-sm.avif 1125w, /app-preview.avif 2250w"
          sizes="(max-width: 1200px) 100vw, 1200px"
          type="image/avif"
        />
        <source
          srcSet="/app-preview-sm.webp 1125w, /app-preview.webp 2250w"
          sizes="(max-width: 1200px) 100vw, 1200px"
          type="image/webp"
        />
        <img
          src="/app-preview.png"
          srcSet="/app-preview-sm.png 1125w, /app-preview.png 2250w"
          sizes="(max-width: 1200px) 100vw, 1200px"
          width={2250}
          height={1334}
          alt="Screenshot Bro app - editing App Store screenshots with device frames, gradients, and multi-template layout"
          className="w-full h-auto block"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}

type CtaProps = {
  href?: string;
};

export function SiteNav({ href = EARLY_ACCESS_MAILTO }: CtaProps) {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 inset-x-0 z-40 border-b border-border-subtle bg-surface/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo-light.svg" alt={SITE_NAME} width="150" height="24" className="h-6 w-auto" />
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="text-xs text-white/50 hover:text-white/80 transition-colors hidden sm:block"
          >
            Features
          </a>
          <a
            href={href}
            className="text-xs font-medium bg-white/5 hover:bg-white/10 border border-border text-white/80 px-4 py-1.5 rounded-lg transition-all"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}

export function HeroSection({ href = EARLY_ACCESS_MAILTO }: CtaProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="hero-gradient" />
      <div className="grid-bg absolute inset-0 opacity-40" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h1
          className="animate-fade-up font-display font-800 text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-white">Design App Store</span>
          <br />
          <span className="text-accent">screenshots</span>
          <span className="text-white"> in </span>
          <span className="text-white">minutes.</span>
        </h1>

        <p
          className="animate-fade-up max-w-xl mx-auto text-base sm:text-lg text-white/55 leading-relaxed mb-10"
          style={{ animationDelay: "0.2s" }}
        >
          Design once, export every variant in 30+ languages. Device frames,
          gradients, text overlays - all in a lightning-fast native macOS
          editor.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href={href}
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
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19,12 12,19 5,12" />
            </svg>
          </a>
        </div>
      </div>

      <div
        className="animate-fade-up relative max-w-6xl mx-auto mt-16"
        style={{ animationDelay: "0.5s" }}
      >
        <AppPreview />
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent/10 blur-3xl rounded-full" />
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
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
          I was tired of spending hours in Figma tweaking App Store screenshots
          every time I shipped an update - and it got worse when I started
          localizing into multiple languages. So I built the tool I wished
          existed - a fast, native Mac app that lets you design once, localize
          into 30+ languages, and export everything. This is that tool.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative rounded-2xl bg-surface-raised border border-border p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose/10 text-rose text-xs font-medium mb-6">
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Without Screenshot Bro
            </div>
            <ul className="space-y-4">
              {WITHOUT_BRO_POINTS.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-sm text-white/50 leading-relaxed"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl bg-surface-raised border border-accent/30 p-8">
            <div className="absolute inset-0 rounded-2xl bg-accent/[0.03]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/10 text-mint text-xs font-medium mb-6">
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                With Screenshot Bro
              </div>
              <ul className="space-y-4">
                {WITH_BRO_POINTS.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 text-sm text-white/60 leading-relaxed"
                  >
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
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
            Capabilities
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Everything you need.
            <br className="hidden sm:block" />
            <span className="text-white/45">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card rounded-2xl p-6 flex flex-col gap-4"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `color-mix(in srgb, ${feature.accent} 12%, transparent)`,
                  color: feature.accent,
                }}
              >
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="font-display font-semibold text-white text-sm">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-white/50">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  return (
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
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.step} className="relative">
              <div className="font-mono text-5xl font-bold text-white/[0.04] mb-4">
                {step.step}
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DownloadSection({ href = EARLY_ACCESS_MAILTO }: CtaProps) {
  return (
    <section id="early-access" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
          Ready to ship
          <br />
          better screenshots?
        </h2>
        <p className="text-base text-white/55 mb-10 max-w-md mx-auto">
          Screenshot Bro is a native macOS app. Drop me an email to get early
          access and start shipping better screenshots today.
        </p>
        <a
          href={href}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-base transition-all hover:shadow-[0_0_48px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
        >
          <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
          Get Early Access
        </a>
        <p className="mt-4 text-xs text-white/40 font-mono">
          macOS app | Swift & SwiftUI | Zero dependencies
        </p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src="/logo-light.svg" alt={SITE_NAME} width="120" height="20" className="h-4 w-auto opacity-45" />
        </div>
        <div className="flex items-center gap-4">
          <a
            href={CONTACT_MAILTO}
            className="text-xs text-white/45 hover:text-white/80 transition-colors"
          >
            Contact
          </a>
          <span className="text-xs text-white/35">
            Built with SwiftUI. Designed for developers.
          </span>
        </div>
      </div>
    </footer>
  );
}

export function BackToTopButton({ visible }: { visible: boolean }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-surface-raised border border-border flex items-center justify-center text-white/40 hover:text-white/80 transition-all ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18,15 12,9 6,15" />
      </svg>
    </button>
  );
}
