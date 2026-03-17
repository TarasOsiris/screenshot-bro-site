import { useCallback, type RefCallback } from "react";

import { AppleLogo, FeatureIcon } from "~/components/home/icons";
import {
  BETA_BENEFITS,
  CONTACT_MAILTO,
  EARLY_ACCESS_MAILTO,
  FAQS,
  FEATURE_SHOWCASES,
  FEATURES,
  HERO_HIGHLIGHTS,
  NAV_ITEMS,
  PRIMARY_CTA_LABEL,
  SITE_NAME,
  WITHOUT_BRO_POINTS,
  WITH_BRO_POINTS,
  WORKFLOW_STEPS,
} from "~/config/site";
import type {
  FaqItem,
  FeatureShowcase,
  NavItem,
} from "~/config/site";

function useLoopWithPause(delayMs = 2000): RefCallback<HTMLVideoElement> {
  return useCallback(
    (el: HTMLVideoElement | null) => {
      if (!el) return;

      const handler = () => {
        window.setTimeout(() => {
          el.currentTime = 0;
          void el.play();
        }, delayMs);
      };

      el.addEventListener("ended", handler);
    },
    [delayMs],
  );
}

function ArrowDownIcon() {
  return (
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
  );
}

function ChevronUpIcon() {
  return (
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
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl mx-auto mt-5 text-base text-white/55 leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function AppPreview() {
  const videoRef = useLoopWithPause();

  return (
    <div className="macos-window w-full mx-auto">
      <div className="macos-titlebar">
        <span
          aria-hidden="true"
          className="macos-dot"
          style={{ background: "#ff5f57" }}
        />
        <span
          aria-hidden="true"
          className="macos-dot"
          style={{ background: "#febc2e" }}
        />
        <span
          aria-hidden="true"
          className="macos-dot"
          style={{ background: "#28c840" }}
        />
        <span className="ml-3 text-xs text-white/45 font-mono">
          Screenshot Bro beta preview
        </span>
      </div>
      <video
        ref={videoRef}
        src="/demo-main.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full h-auto block"
        aria-label="Screenshot Bro app demo - designing App Store screenshots with device frames, gradients, and batch export"
      />
    </div>
  );
}

function NavLink({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      className="text-sm text-white/55 hover:text-white/90 transition-colors"
    >
      {item.label}
    </a>
  );
}

type CtaProps = {
  href?: string;
};

export function SiteNav({ href = EARLY_ACCESS_MAILTO }: CtaProps) {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 inset-x-0 z-40 border-b border-border-subtle bg-surface/78 backdrop-blur-2xl"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <a href="#main-content" className="flex items-center shrink-0">
          <img
            src="/logo-light.svg"
            alt={SITE_NAME}
            width="150"
            height="24"
            className="h-6 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </div>

        <a
          href={href}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/[0.88] transition-all hover:border-white/20 hover:bg-white/10"
        >
          <AppleLogo className="opacity-80" />
          {PRIMARY_CTA_LABEL}
        </a>
      </div>
    </nav>
  );
}

export function HeroSection({ href = EARLY_ACCESS_MAILTO }: CtaProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="hero-gradient" />
      <div className="grid-bg absolute inset-0 opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/[0.72]"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-mint pulse-ring" />
            Native macOS app
            <span className="text-white/25">/</span>
            Public beta on TestFlight
          </div>

          <h1
            className="animate-fade-up mt-6 font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.94]"
            style={{ animationDelay: "0.12s" }}
          >
            <span className="text-white">Design App Store</span>
            <br />
            <span className="text-accent">screenshots</span>
            <span className="text-white"> without </span>
            <span className="text-white">Figma busywork.</span>
          </h1>

          <p
            className="animate-fade-up max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-white/[0.62] leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Import your shots, wrap them in device frames, localize the copy,
            and export every size from one fast native Mac app.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.28s" }}
          >
            <a
              href={href}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm transition-all hover:shadow-[0_0_32px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
              {PRIMARY_CTA_LABEL}
            </a>
            <a
              href="#showcases"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] border border-border text-white/[0.72] hover:text-white/[0.92] hover:border-white/20 text-sm transition-all"
            >
              Explore the workflow
              <ArrowDownIcon />
            </a>
          </div>

          <ul
            className="animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.34s" }}
          >
            {HERO_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="soft-pill rounded-full px-4 py-2 text-sm text-white/[0.68]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="animate-fade-up relative max-w-6xl mx-auto mt-14"
          style={{ animationDelay: "0.42s" }}
        >
          <AppPreview />
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}

export function ShowcasesSection({ href = EARLY_ACCESS_MAILTO }: CtaProps) {
  return (
    <section
      id="showcases"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow="Showcases"
          title="See the core workflow before you install."
          description="Browse the main product moments in the order most people evaluate them: setup speed, design control, backgrounds, localization, and export."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {FEATURE_SHOWCASES.map((showcase) => (
            <a
              key={showcase.id}
              href={`#${showcase.id}`}
              className="soft-pill rounded-full px-4 py-2 text-sm text-white/[0.68] hover:text-white/[0.92] transition-colors"
            >
              {showcase.label}
            </a>
          ))}
        </div>

        <div className="space-y-8">
          {FEATURE_SHOWCASES.map((showcase) => (
            <FeatureShowcaseBlock
              key={showcase.id}
              showcase={showcase}
              href={href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureShowcaseBlock({
  showcase,
  href,
}: {
  showcase: FeatureShowcase;
  href: string;
}) {
  const isVideo =
    showcase.media.endsWith(".mp4") || showcase.media.endsWith(".webm");
  const videoRef = useLoopWithPause();

  return (
    <article
      id={showcase.id}
      className="showcase-panel overflow-hidden scroll-mt-24"
    >
      <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent font-mono mb-4">
              {showcase.label}
            </p>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.06]">
              {showcase.title}
            </h3>
            <p className="mt-5 text-lg text-white/[0.58] leading-relaxed max-w-xl">
              {showcase.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={href}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-white/[0.88] transition-all hover:border-white/20 hover:bg-white/10"
            >
              Try this in the beta
            </a>
            <a
              href="#early-access"
              className="text-sm text-white/[0.52] hover:text-white/[0.88] transition-colors"
            >
              See beta details
            </a>
          </div>
        </div>

        <div>
          {isVideo ? (
            <video
              ref={videoRef}
              src={showcase.media}
              autoPlay
              muted
              playsInline
              preload="none"
              className="showcase-media w-full h-full block"
              aria-label={showcase.mediaAlt}
            />
          ) : (
            <img
              src={showcase.media}
              alt={showcase.mediaAlt}
              className="showcase-media w-full h-full block"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
    </article>
  );
}

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow="Workflow"
          title="A shorter path from raw screenshots to App Store-ready assets."
          description="The product is opinionated around one job: create polished screenshot sets without maintaining a pile of one-off design files."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.step} className="workflow-card rounded-3xl p-7">
              <div className="font-mono text-5xl font-bold text-accent/50 mb-5">
                {step.step}
              </div>
              <h3 className="font-display font-semibold text-white text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow="Capabilities"
          title="Everything you need. Nothing you don't."
          description="The feature set stays focused on layout speed, screenshot consistency, and export sanity. No browser tab, no general-purpose design suite, no repetitive resize work."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card rounded-3xl p-6 flex flex-col gap-4 min-h-[220px]"
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
              <div className="space-y-3">
                <h3 className="font-display font-semibold text-white text-base">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/[0.52]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="py-28 px-6 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto">
        <SectionIntro
          eyebrow="Why It Exists"
          title="Because shipping one new feature should not mean rebuilding every screenshot."
          description="Screenshot Bro came from the same loop most app teams hit: a product update lands, then the screenshot file set turns into a repetitive mini-project again."
        />

        <div className="soft-panel rounded-3xl p-8 sm:p-10 mb-10">
          <p className="max-w-3xl text-base text-white/[0.62] leading-relaxed">
            I built it after spending too much time in Figma redoing App Store
            screenshots every time copy, gradients, or languages changed. The
            goal is simple: design the system once, then let the app handle the
            repetitive parts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="relative rounded-3xl bg-surface-raised border border-border p-8">
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
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-3xl bg-surface-raised border border-accent/30 p-8">
            <div className="absolute inset-0 rounded-3xl bg-accent/[0.03]" />
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
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-mint shrink-0" />
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

function FaqItemBlock({ item }: { item: FaqItem }) {
  return (
    <details className="faq-item rounded-2xl">
      <summary className="cursor-pointer list-none px-6 py-5 font-display text-lg font-semibold text-white flex items-center justify-between gap-4">
        <span>{item.question}</span>
        <span className="text-white/35 text-2xl leading-none">+</span>
      </summary>
      <div className="px-6 pb-5">
        <p className="text-sm text-white/[0.58] leading-relaxed">{item.answer}</p>
      </div>
    </details>
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto">
        <SectionIntro
          eyebrow="FAQ"
          title="The questions most people ask before trying it."
          description="The product is early, but the core workflow is already there. These answers handle the main compatibility and export questions."
        />

        <div className="space-y-4">
          {FAQS.map((item) => (
            <FaqItemBlock key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function DownloadSection({ href = EARLY_ACCESS_MAILTO }: CtaProps) {
  return (
    <section
      id="early-access"
      className="relative py-32 px-6 overflow-hidden border-t border-border-subtle scroll-mt-24"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
          Ready to ship
          <br />
          better screenshots?
        </h2>
        <p className="text-base text-white/[0.58] mb-10 max-w-2xl mx-auto leading-relaxed">
          Join the public beta through TestFlight and use the current macOS app
          for the full screenshot workflow: setup, design, localization, and
          export.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
          {BETA_BENEFITS.map((item) => (
            <div key={item} className="soft-panel rounded-2xl p-5">
              <p className="text-sm text-white/[0.62] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={href}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-base transition-all hover:shadow-[0_0_48px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
            {PRIMARY_CTA_LABEL}
          </a>
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/[0.8] transition-all hover:border-white/20 hover:bg-white/10"
          >
            Contact the developer
          </a>
        </div>

        <p className="mt-4 text-xs text-white/40 font-mono">
          macOS app | Swift & SwiftUI | Public beta via TestFlight
        </p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <img
            src="/logo-light.svg"
            alt={SITE_NAME}
            width="120"
            height="20"
            className="h-4 w-auto opacity-45"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
          <a
            href={CONTACT_MAILTO}
            className="text-sm text-white/55 hover:text-white/90 transition-colors"
          >
            Contact
          </a>
        </div>

        <span className="text-sm text-white/40 text-center">
          Built with SwiftUI. Designed for developers shipping App Store
          updates.
        </span>
      </div>
    </footer>
  );
}

export function BackToTopButton({ visible }: { visible: boolean }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-surface-raised border border-border flex items-center justify-center text-white/45 hover:text-white/85 transition-all ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ChevronUpIcon />
    </button>
  );
}
