import type { CSSProperties } from "react";
import { SHOWCASE_APPS, X_PROFILE_URL, type ShowcaseApp } from "~/config/site";
import type { HomeCopy } from "~/config/localization";

function AppTile({ app, duplicate }: { app: ShowcaseApp; duplicate: boolean }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={duplicate ? -1 : undefined}
      title={app.name}
      className="group block transition-transform hover:scale-105"
    >
      <img
        src={app.icon}
        alt={`${app.name} app icon`}
        width="128"
        height="128"
        loading="lazy"
        decoding="async"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22%] shadow-md border border-ink/10 transition-shadow group-hover:shadow-accent/20"
      />
    </a>
  );
}

// Social proof straight under the hero: one slow strip of real apps whose
// store screenshots were made with Screenshot Bro.
export function AppShowcaseSection({ copy }: { copy: HomeCopy }) {
  return (
    <section
      id="app-showcase"
      aria-label={copy.sections.appShowcase.title}
      className="pb-16 pt-4 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-2 text-center mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono">
          {copy.sections.appShowcase.eyebrow}
        </p>
        <p className="text-sm text-ink/60">
          {copy.sections.appShowcase.description}{" "}
          <a
            href={X_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-ink/20 hover:text-ink hover:decoration-ink/50 transition-colors"
          >
            {copy.ui.submitApp}
          </a>
        </p>
      </div>

      <div
        className="marquee marquee--flat max-w-6xl mx-auto"
        style={{ "--marquee-duration": "70s" } as CSSProperties}
      >
        <div className="marquee-track">
          {[false, true].map((duplicate) => (
            <ul
              key={String(duplicate)}
              className="marquee-group"
              aria-hidden={duplicate || undefined}
            >
              {SHOWCASE_APPS.map((app) => (
                <li key={app.name}>
                  <AppTile app={app} duplicate={duplicate} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
