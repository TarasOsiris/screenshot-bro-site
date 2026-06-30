import { AppleLogo } from "~/components/home/icons";
import { ArrowDownIcon } from "~/components/home/small-icons";
import { useDeferredLoopVideo } from "~/components/home/hooks";
import { APP_STORE_CTA_URL } from "~/config/site";
import type { HomeCopy } from "~/config/localization";

function AppPreview({ label }: { label: string }) {
  const videoRef = useDeferredLoopVideo("/demo-main.mp4");

  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden">
      <video
        ref={videoRef as React.RefObject<HTMLVideoElement>}
        autoPlay
        muted
        playsInline
        preload="none"
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 1.25;
        }}
        className="w-full h-auto block"
        aria-label={label}
      />
    </div>
  );
}

export function HeroSection({
  copy,
  href = APP_STORE_CTA_URL,
}: {
  copy: HomeCopy;
  href?: string;
}) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="hero-gradient" />
      <div className="grid-bg absolute inset-0 opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="animate-fade-up mt-6 font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.98]"
            style={{ animationDelay: "0.12s" }}
          >
            <span className="text-white">{copy.hero.titleLead}</span>
            <br />
            <span className="text-accent">{copy.hero.titleAccent}</span>
            <span className="text-white">{copy.hero.titleRest}</span>
          </h1>

          <p
            className="animate-fade-up max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-white/[0.62] leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            {copy.hero.descriptionLead}{" "}
            <span className="text-white/[0.85]">
              {copy.hero.descriptionStrong}
            </span>{" "}
            {copy.hero.descriptionTail}
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
              {copy.primaryCtaLabel}
            </a>
            <a
              href="#showcases"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] border border-border text-white/[0.72] hover:text-white/[0.92] hover:border-white/20 text-sm transition-all"
            >
              {copy.ui.seeInAction}
              <ArrowDownIcon />
            </a>
          </div>

        </div>

        <div
          className="animate-fade-up relative max-w-6xl mx-auto mt-14"
          style={{ animationDelay: "0.42s" }}
        >
          <AppPreview label={copy.hero.videoLabel} />
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
