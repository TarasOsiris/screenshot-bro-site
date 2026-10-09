// The App Store rating and recent written reviews, fetched at build time by
// scripts/fetch-app-store-proof.mjs into app/generated/ (not committed). The
// glob returns nothing when the file is missing — a typecheck without a build,
// or a build that couldn't reach Apple — and the site then shows neither.

export type AppStoreReview = {
  id: string;
  rating: number;
  title: string;
  text: string;
  author: string;
  date: string;
  country: string;
};

type AppStoreProof = {
  fetchedAt: string | null;
  rating: { value: number; count: number; storefronts: number } | null;
  reviews: AppStoreReview[];
};

// A rating is shown, and added to the SoftwareApplication schema, only once
// enough people have rated the app for the average to mean something.
export const MIN_RATING_COUNT = 5;

const files = import.meta.glob<AppStoreProof>("../generated/app-store-proof.json", {
  eager: true,
  import: "default",
});
const proof: AppStoreProof | undefined = Object.values(files)[0];

export const APP_STORE_RATING =
  proof?.rating && proof.rating.count >= MIN_RATING_COUNT && proof.rating.value > 0
    ? { value: proof.rating.value, count: proof.rating.count }
    : null;

// Real reviews only, as written, newest first; four stars and up, since they
// are shown as endorsements. Never edited or invented.
export const APP_STORE_REVIEWS: AppStoreReview[] = (proof?.reviews ?? []).filter(
  (review) => review.rating >= 4,
);
