// Build step: fetches the App Store rating and recent written reviews for
// Screenshot Bro and writes app/generated/app-store-proof.json, which
// config/app-store-proof.ts reads. Runs before `react-router build`.
//
// - Rating: Apple's public lookup API, one call per storefront the site
//   targets, combined into one weighted average over every rating.
// - Reviews: the public customer-reviews RSS for English-language storefronts,
//   so the quotes can be shown as written.
//
// Never fails the build. Offline or on an API error, it keeps whatever file a
// previous run left behind, or writes an empty one — the site then simply
// shows no rating and no reviews.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const APP_ID = "6760177675";
const OUT = path.resolve("app/generated/app-store-proof.json");
// Storefronts from config/localization.ts LOCALES, plus the larger English ones.
const STOREFRONTS = [
  "us", "es", "cn", "in", "fr", "sa", "de", "jp", "br", "it", "kr", "ua", "pl",
  "tr", "nl", "id", "vn", "th", "se", "dk", "fi", "no", "cz", "ro", "my",
  "gb", "ca", "au",
];
const REVIEW_STOREFRONTS = ["us", "gb", "ca", "au"];
const MAX_REVIEWS = 6;

async function getJson(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(8_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function fetchRating() {
  let weighted = 0;
  let count = 0;
  let storefronts = 0;
  let failures = 0;
  await Promise.all(
    STOREFRONTS.map(async (country) => {
      try {
        const data = await getJson(`https://itunes.apple.com/lookup?id=${APP_ID}&country=${country}`);
        const app = data.results?.[0];
        const n = Number(app?.userRatingCount ?? 0);
        const avg = Number(app?.averageUserRating ?? 0);
        if (n > 0 && avg > 0) {
          weighted += avg * n;
          count += n;
          storefronts += 1;
        }
      } catch {
        failures += 1;
      }
    }),
  );
  if (failures === STOREFRONTS.length) throw new Error("every lookup failed");
  return count > 0
    ? { value: Math.round((weighted / count) * 10) / 10, count, storefronts }
    : { value: 0, count: 0, storefronts: 0 };
}

async function fetchReviews() {
  const reviews = [];
  for (const country of REVIEW_STOREFRONTS) {
    try {
      const data = await getJson(
        `https://itunes.apple.com/${country}/rss/customerreviews/id=${APP_ID}/sortBy=mostRecent/json`,
      );
      const entries = [data.feed?.entry ?? []].flat();
      for (const entry of entries) {
        const rating = Number(entry?.["im:rating"]?.label);
        const text = entry?.content?.label?.trim();
        if (!rating || !text) continue;
        reviews.push({
          id: String(entry.id?.label ?? ""),
          rating,
          title: entry.title?.label?.trim() ?? "",
          text,
          author: entry.author?.name?.label?.trim() ?? "",
          date: String(entry.updated?.label ?? "").slice(0, 10),
          country,
        });
      }
    } catch {
      // a storefront without reviews or a network error: skip it
    }
  }
  const seen = new Set();
  return reviews
    .filter((review) => (seen.has(review.id) ? false : seen.add(review.id)))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, MAX_REVIEWS);
}

async function main() {
  let previous = null;
  try {
    previous = JSON.parse(await readFile(OUT, "utf8"));
  } catch {
    // first run
  }
  try {
    const [rating, reviews] = await Promise.all([fetchRating(), fetchReviews()]);
    const proof = { fetchedAt: new Date().toISOString(), rating, reviews };
    await mkdir(path.dirname(OUT), { recursive: true });
    await writeFile(OUT, JSON.stringify(proof, null, 2) + "\n");
    console.log(
      `app-store-proof: ${rating.count} rating(s), avg ${rating.value} over ${rating.storefronts} storefront(s); ${reviews.length} review(s)`,
    );
  } catch (error) {
    if (previous) {
      console.warn(`app-store-proof: fetch failed (${error.message}); keeping the previous file`);
      return;
    }
    await mkdir(path.dirname(OUT), { recursive: true });
    await writeFile(OUT, JSON.stringify({ fetchedAt: null, rating: null, reviews: [] }, null, 2) + "\n");
    console.warn(`app-store-proof: fetch failed (${error.message}); wrote an empty file`);
  }
}

await main();
