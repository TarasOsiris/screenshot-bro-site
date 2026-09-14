import type { CSSProperties } from "react";
import { SectionIntro } from "~/components/home/SectionIntro";
import { SHOWCASE_APPS, X_PROFILE_URL, type ShowcaseApp } from "~/config/site";
import type { HomeCopy } from "~/config/localization";

// Two interleaved rows drifting in opposite directions. Splitting by index
// parity keeps neighbours from the source list on different rows, so the grid
// reads as a checkerboard rather than two sorted halves.
const TOP_ROW = SHOWCASE_APPS.filter((_, index) => index % 2 === 0);
const BOTTOM_ROW = SHOWCASE_APPS.filter((_, index) => index % 2 === 1);

function AppTile({ app, duplicate }: { app: ShowcaseApp; duplicate: boolean }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={duplicate ? -1 : undefined}
      className="group flex w-24 flex-col items-center gap-3 transition-transform hover:scale-105 sm:w-28"
    >
      <img
        src={app.icon}
        alt={`${app.name} app icon`}
        width="128"
        height="128"
        loading="lazy"
        decoding="async"
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-[22%] shadow-lg border border-ink/10 transition-shadow group-hover:shadow-accent/20"
      />
      <span className="text-center text-sm font-medium text-ink/60 group-hover:text-ink/90 transition-colors">
        {app.name}
      </span>
    </a>
  );
}

function MarqueeRow({
  apps,
  duration,
  reverse = false,
}: {
  apps: ShowcaseApp[];
  duration: string;
  reverse?: boolean;
}) {
  // The checker stagger alternates on nth-child(even), so a group with an odd
  // number of tiles would break the pattern at the loop seam. Doubling an odd
  // row makes every group even-length and keeps the wrap invisible.
  const group = apps.length % 2 === 0 ? apps : [...apps, ...apps];

  return (
    <div className="marquee" style={{ "--marquee-duration": duration } as CSSProperties}>
      <div className={`marquee-track${reverse ? " marquee-track--reverse" : ""}`}>
        {[false, true].map((duplicate) => (
          <ul
            key={String(duplicate)}
            className="marquee-group"
            aria-hidden={duplicate || undefined}
          >
            {group.map((app, index) => (
              <li key={`${app.name}-${index}`}>
                <AppTile app={app} duplicate={duplicate} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function AppShowcaseSection({ copy }: { copy: HomeCopy }) {
  return (
    <section
      id="app-showcase"
      className="py-24 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionIntro
          eyebrow={copy.sections.appShowcase.eyebrow}
          title={copy.sections.appShowcase.title}
          description={copy.sections.appShowcase.description}
        />
      </div>

      <div className="flex flex-col gap-2">
        <MarqueeRow apps={TOP_ROW} duration="64s" />
        <MarqueeRow apps={BOTTOM_ROW} duration="82s" reverse />
      </div>

      <div className="mt-12 text-center px-6">
        <a
          href={X_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-ink/[0.06] px-5 py-3 text-sm font-medium text-ink/[0.72] transition-all hover:border-ink/20 hover:bg-ink/10 hover:text-ink/[0.92]"
        >
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          {copy.ui.submitApp}
        </a>
      </div>
    </section>
  );
}
