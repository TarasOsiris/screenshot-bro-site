declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

import { useEffect } from "react";

import type { Route } from "./+types/friends";
import { ContentLayout } from "~/components/ContentLayout";
import { AppleLogo } from "~/components/home/icons";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import {
  CONTACT_MAILTO,
  DISCORD_INVITE_URL,
  EARLY_ACCESS_EMAIL,
  SITE_NAME,
  SITE_URL,
  X_PROFILE_URL,
} from "~/config/site";
import {
  FRIENDS_RATINGS_VERIFIED,
  FRIEND_APPS,
  friendIconPath,
  friendStoreUrl,
  friendWebsiteUrl,
  type FriendApp,
} from "~/config/friends";

const PAGE_PATH = "/friends";
const TITLE = `Friends — ${SITE_NAME}`;
const DESCRIPTION =
  "Indie apps built by developers we know. No affiliate links, no paid placements — we just think they're good.";

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: `${SITE_URL}${PAGE_PATH}` },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ]);

function StarGlyph() {
  return (
    <svg
      aria-hidden="true"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96z" />
    </svg>
  );
}

// "2026-08-31" → "August 2026". The verified date is a plain ISO string, so
// build the Date in UTC to keep the month stable west of Greenwich.
function formatVerified(isoDate: string): string {
  const [year, month] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

// GA4 outbound tracking for the friend links. Delegated from the list rather
// than wired per anchor so a new entry needs no extra code: the data attributes
// on the anchor carry everything the event needs.
function useFriendLinkTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement).closest?.("a[data-friend]");
      if (!anchor) return;
      window.gtag?.("event", "friend_link_click", {
        event_category: "outbound",
        event_label: `${anchor.getAttribute("data-friend")}:${anchor.getAttribute("data-destination")}`,
        transport_type: "beacon",
      });
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}

function FriendCard({ app }: { app: FriendApp }) {
  const websiteHref = friendWebsiteUrl(app);

  return (
    <article className="rounded-2xl border border-border bg-surface-raised p-6 sm:p-8 transition-all hover:border-white/20">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
        <img
          src={friendIconPath(app)}
          alt={`${app.name} app icon`}
          width="512"
          height="512"
          loading="lazy"
          decoding="async"
          className="w-16 h-16 shrink-0 rounded-[22%] border border-white/10 shadow-lg"
        />

        <div className="min-w-0">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
            {app.name}
          </h2>

          <p className="mt-1 text-sm text-white/45">
            {app.subtitle}
            <span aria-hidden="true" className="mx-2 text-white/25">
              ·
            </span>
            by {app.developer}
          </p>

          <p className="mt-2 flex items-center gap-2 text-sm text-white/55">
            <span className="text-warm">
              <StarGlyph />
            </span>
            <span className="font-medium text-white/80">
              {app.rating.toFixed(1)}
            </span>
            <span aria-hidden="true" className="text-white/25">
              ·
            </span>
            {app.ratingCount} ratings
          </p>

          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            {app.description}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={friendStoreUrl(app)}
              data-friend={app.slug}
              data-destination="app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-light px-5 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
              App Store
              <span aria-hidden="true" className="opacity-60">
                ↗
              </span>
            </a>
            {websiteHref ? (
              <a
                href={websiteHref}
                data-friend={app.slug}
                data-destination="website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white/[0.72] transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/[0.92]"
              >
                Website
                <span aria-hidden="true" className="opacity-60">
                  ↗
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Friends() {
  useFriendLinkTracking();

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Friends", path: PAGE_PATH },
  ]);

  const appListJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Friends of ${SITE_NAME}`,
    itemListElement: FRIEND_APPS.map((app, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: app.name,
        description: app.description,
        applicationCategory: "MobileApplication",
        operatingSystem: "iOS",
        image: `${SITE_URL}${friendIconPath(app)}`,
        url: app.storeUrl,
        author: { "@type": "Person", name: app.developer },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: app.rating.toFixed(1),
          ratingCount: app.ratingCount,
        },
      },
    })),
  });

  return (
    <ContentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: appListJsonLd }}
      />
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
            Friends
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Apps by people we know.
          </h1>
          <p className="mt-4 text-base text-white/55 leading-relaxed">
            Indie apps built by developers we know. No affiliate links, no paid
            placements, no revenue share — we just think they're good, and this
            page is where we say so.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {FRIEND_APPS.map((app) => (
            <FriendCard key={app.storeUrl} app={app} />
          ))}
        </div>

        <p className="mt-6 text-xs text-white/35">
          Ratings and review counts checked{" "}
          {formatVerified(FRIENDS_RATINGS_VERIFIED)}. The App Store has the
          current numbers.
        </p>

        <section className="mt-14 rounded-2xl border border-border bg-surface-raised p-6 sm:p-8">
          <h2 className="font-display font-bold text-2xl text-white tracking-tight">
            Your app here
          </h2>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            Building something good on your own? If your app would fit this
            list, come say hello on Discord or on X and we can talk about
            pointing at each other's work. Email works too:{" "}
            <a
              href={CONTACT_MAILTO}
              className="text-white/85 underline underline-offset-4 decoration-white/25 hover:decoration-white/60 transition-colors"
            >
              {EARLY_ACCESS_EMAIL}
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            It's an indie app made by an actual person, it isn't a subscription
            trap, and you're happy to link back — that's the whole bar. You
            don't have to use {SITE_NAME} for your screenshots.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-light px-5 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Join the Discord
            </a>
            <a
              href={X_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white/[0.72] transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/[0.92]"
            >
              Message us on X
            </a>
          </div>
        </section>
      </div>
    </ContentLayout>
  );
}
