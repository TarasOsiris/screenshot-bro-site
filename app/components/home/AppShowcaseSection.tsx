import type { CSSProperties } from "react";
import { SHOWCASE_APPS, X_PROFILE_URL, type ShowcaseApp } from "~/config/site";
import { appStoreCtaUrl, type HomeCopy } from "~/config/localization";
import { APP_STORE_REVIEWS, type AppStoreReview } from "~/config/app-store-proof";
import { fill } from "~/config/home-copy";

const SHOWN_REVIEWS = 3;

// A real App Store review, quoted as written (scripts/fetch-app-store-proof.mjs).
function ReviewCard({ review }: { review: AppStoreReview }) {
  return (
    <figure className="soft-panel rounded-3xl p-5 flex flex-col gap-3 text-left">
      <p className="text-warm-light text-sm tracking-[0.1em]" role="img" aria-label={`${review.rating}/5`}>
        {"★".repeat(review.rating)}
      </p>
      <blockquote className="flex-1">
        {review.title ? <p className="font-semibold text-ink">{review.title}</p> : null}
        <p className="mt-1 text-sm text-ink/65 leading-relaxed line-clamp-5">{review.text}</p>
      </blockquote>
      <figcaption className="text-xs text-ink/60 font-mono">
        {review.author} · App Store {review.country.toUpperCase()}
      </figcaption>
    </figure>
  );
}

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
          <span className="text-ink/55"> · {fill(copy.ui.showcaseCount, { count: SHOWCASE_APPS.length })}</span>
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

      {APP_STORE_REVIEWS.length > 0 ? (
        <div className="max-w-6xl mx-auto px-6 mt-12">
          <h2 className="text-center text-xs uppercase tracking-[0.25em] text-ink/60 font-mono">
            <a
              href={appStoreCtaUrl(copy.locale.code)}
              data-placement="reviews"
              className="hover:text-ink transition-colors"
            >
              {copy.ui.reviewsHeading}
            </a>
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {APP_STORE_REVIEWS.slice(0, SHOWN_REVIEWS).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
