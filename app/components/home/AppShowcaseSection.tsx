import { SectionIntro } from "~/components/home/SectionIntro";
import { SHOWCASE_APPS, X_PROFILE_URL } from "~/config/site";
import type { HomeCopy } from "~/config/localization";

export function AppShowcaseSection({ copy }: { copy: HomeCopy }) {
  return (
    <section
      id="app-showcase"
      className="py-24 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={copy.sections.appShowcase.eyebrow}
          title={copy.sections.appShowcase.title}
          description={copy.sections.appShowcase.description}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {SHOWCASE_APPS.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
            >
              <img
                src={app.icon}
                alt={`${app.name} app icon`}
                width="128"
                height="128"
                loading="lazy"
                decoding="async"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-[22%] shadow-lg border border-white/10 transition-shadow group-hover:shadow-accent/20"
              />
              <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors">
                {app.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={X_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white/[0.72] transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/[0.92]"
          >
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            {copy.ui.submitApp}
          </a>
        </div>
      </div>
    </section>
  );
}
