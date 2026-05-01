import { SectionIntro } from "~/components/home/SectionIntro";
import {
  INSTAGRAM_REEL_EMBED_URL,
  INSTAGRAM_REEL_URL,
} from "~/config/site";
import type { HomeCopy } from "~/config/localization";

export function InstagramReelSection({ copy }: { copy: HomeCopy }) {
  return (
    <section
      id="reel"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={copy.sections.reel.eyebrow}
          title={copy.sections.reel.title}
          description={copy.sections.reel.description}
        />

        <div className="flex flex-col items-center gap-6">
          <div className="relative w-full max-w-[360px] rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="relative" style={{ aspectRatio: "326 / 580" }}>
              <iframe
                src={INSTAGRAM_REEL_EMBED_URL}
                title={copy.ui.watchOnInstagram}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                scrolling="no"
                allow="encrypted-media; fullscreen; autoplay"
                allowFullScreen
              />
            </div>
          </div>

          <a
            href={INSTAGRAM_REEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white/[0.72] transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/[0.92]"
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
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            {copy.ui.watchOnInstagram}
          </a>
        </div>
      </div>
    </section>
  );
}
