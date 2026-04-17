import { AppleLogo } from "~/components/home/icons";
import { ArrowDownIcon } from "~/components/home/small-icons";
import { useLoopWithPause } from "~/components/home/hooks";
import { APP_STORE_URL, PRIMARY_CTA_LABEL } from "~/config/site";

function AppPreview() {
  const videoRef = useLoopWithPause();

  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden">
      <video
        ref={videoRef as React.RefObject<HTMLVideoElement>}
        src="/demo-main.mp4"
        autoPlay
        muted
        playsInline
        preload="metadata"
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 1.25;
        }}
        className="w-full h-auto block"
        aria-label="Screenshot Bro app demo - designing App Store screenshots with device frames, gradients, and batch export"
      />
    </div>
  );
}

export function HeroSection({ href = APP_STORE_URL }: { href?: string }) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="hero-gradient" />
      <div className="grid-bg absolute inset-0 opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="animate-fade-up mt-6 font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.94]"
            style={{ animationDelay: "0.12s" }}
          >
            <span className="text-white">Design App Store</span>
            <br />
            <span className="text-accent">and Google Play</span>
            <br />
            <span className="text-white">screenshots</span>
            <span className="text-white"> without </span>
            <span className="text-white">Figma busywork.</span>
          </h1>

          <p
            className="animate-fade-up max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-white/[0.62] leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Import your shots, wrap them in device frames, localize the copy,
            auto-translate missing text, and export store-ready files from one
            fast native Mac app.
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

          <div
            className="animate-fade-up mt-6 flex justify-center"
            style={{ animationDelay: "0.34s" }}
          >
            <a
              href="https://www.producthunt.com/products/screenshotbro-mac-app?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-screenshotbro-mac-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1106959&theme=light&t=1775116842049"
                alt="ScreenshotBro Mac App - Design and export beautiful App Store screenshots. | Product Hunt"
                width="250"
                height="54"
              />
            </a>
          </div>
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
