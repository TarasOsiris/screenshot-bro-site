// The /friends list — indie apps we link to because we like them, not because
// anyone paid for the spot. Single source of truth for the page; an entry here
// plus an icon at public/friend-icons/<slug>.jpg is all a new friend needs.
// The surrounding registration (already done) is:
//   - app/routes/friends.tsx      — the page that renders this array
//   - app/routes.ts               — route("friends", …), English-only, no :locale
//   - app/config/localization.ts  — "/friends" in GLOBAL_ROUTE_PATHS + ui.friends
//   - app/config/site.ts          — the COMMUNITY_LINKS footer entry
//   - app/routes/sitemap[.]xml.tsx and llms[.]txt.tsx
//
// The icon directory is public/friend-icons/, NOT public/friends/. A public/
// directory whose name matches a route path is a redirect loop: react-router-
// serve 301s /friends -> /friends/ for the directory, and root.tsx 301s the
// trailing slash back off. See STATIC_DIR_SEGMENTS in app/root.tsx.

export type FriendApp = {
  /** Lowercase, hyphenated. Also names the icon file and the analytics event. */
  slug: string;
  /** Display name — the brand only, not the full store title. */
  name: string;
  /** The App Store subtitle, or a one-line descriptor of our own. */
  subtitle: string;
  developer: string;
  storeUrl: string;
  websiteUrl?: string;
  /** Raw averageUserRating from the store; rendered with toFixed(1). */
  rating: number;
  ratingCount: number;
  /** Two to four sentences, written by us, about what the app actually does. */
  description: string;
};

// Ratings and review counts are copied by hand and go stale silently, so the
// page prints the month they were last checked. Refresh with:
//   curl -s "https://itunes.apple.com/lookup?id=<id>" | python3 -m json.tool
export const FRIENDS_RATINGS_VERIFIED = "2026-08-31";

// What our friends see in their own analytics when traffic arrives from here.
// The App Store campaign token lands in their App Analytics → Acquisition →
// Campaigns; the UTM triple lands in whatever they run on their own site.
const APP_STORE_CAMPAIGN = "screenshotbro_friends";
const UTM_SOURCE = "screenshotbro";
const UTM_MEDIUM = "referral";
const UTM_CAMPAIGN = "friends";

// Icons are 512×512 JPEGs downloaded from the store, never hotlinked. Deriving
// the path from the slug means a rename can't leave a broken <img> behind.
export function friendIconPath(app: FriendApp): string {
  return `/friend-icons/${app.slug}.jpg`;
}

/**
 * The friend's App Store URL with our campaign token attached, for clickable
 * CTAs only. Structured data and canonical references keep the bare `storeUrl`.
 * Note this deliberately carries no `pt` — that provider token identifies us as
 * the campaign provider for OUR app, and has no business on someone else's
 * listing.
 */
export function friendStoreUrl(app: FriendApp): string {
  const url = new URL(app.storeUrl);
  url.searchParams.set("ct", APP_STORE_CAMPAIGN);
  url.searchParams.set("mt", "8");
  return url.toString();
}

/** The friend's own site, UTM-tagged so they can see the referral. */
export function friendWebsiteUrl(app: FriendApp): string | undefined {
  if (!app.websiteUrl) return undefined;
  const url = new URL(app.websiteUrl);
  url.searchParams.set("utm_source", UTM_SOURCE);
  url.searchParams.set("utm_medium", UTM_MEDIUM);
  url.searchParams.set("utm_campaign", UTM_CAMPAIGN);
  return url.toString();
}

export const FRIEND_APPS: FriendApp[] = [
  {
    slug: "init-habits",
    name: "init.Habits",
    subtitle: "Habit tracker for developers",
    developer: "Vladyslav Glogus",
    storeUrl: "https://apps.apple.com/app/id6761077074",
    websiteUrl: "https://inithabits.com",
    rating: 4.95455,
    ratingCount: 22,
    description:
      "A habit tracker styled like the terminal you already live in — monospaced, keyboard-first, and quiet about it. Five tracking modes, routines, streaks you can shield from one bad day, and a GitHub-style contribution graph of your whole history. There's an Apple Watch app, nine widgets, a browser version, and 23 themes if Tokyo Night is your thing. Local-first, works offline, and the core is free.",
  },
];
