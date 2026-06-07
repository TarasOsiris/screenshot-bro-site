---
name: add-showcase-app
description: Add an iOS/App Store (or Google Play) app to the Screenshot Bro app showcase. Use when the user gives an App Store / Google Play link and asks to add it to the showcase, "add this app", or list it among the showcased apps.
---

# Add Showcase App

Adds an app to the showcase grid rendered on the homepage. The data lives in
`app/config/site.ts` as the `SHOWCASE_APPS` array, and each app's icon is a
local file in `public/showcase/`.

## Data model

`app/config/site.ts`:

```ts
export type ShowcaseApp = {
  name: string;
  icon: string; // path under /public, e.g. "/showcase/dibsify.jpg"
  url: string;  // App Store or Google Play listing URL
};

export const SHOWCASE_APPS: ShowcaseApp[] = [ /* ... */ ];
```

Icons live in `public/showcase/<slug>.jpg` (lowercase, hyphenated slug). They are
512×512 JPEGs downloaded from the store. No remote URLs — always download the
icon locally.

## Steps

### 1. Get the app's name and icon

For an **App Store** URL, extract the numeric track id (the `id##########` part)
and use the iTunes Lookup API:

```bash
APP_ID=6769796676   # the digits after "id" in the URL
curl -s "https://itunes.apple.com/lookup?id=$APP_ID" \
  | python3 -c "import sys,json; d=json.load(sys.stdin)['results'][0]; print(d['trackName']); print(d.get('artworkUrl512') or d['artworkUrl100'])"
```

The first line is the app name, the second is the icon URL. Prefer the
`artworkUrl512`. If only `artworkUrl100` is returned, swap the trailing
`100x100bb.jpg` for `512x512bb.jpg` to get a higher-res icon.

Pick a concise display `name` (the store `trackName` often has a long
"App: subtitle" form — use just the brand, e.g. "Dibsify" not
"Dibsify: Wishlist, RSVP, Event"). When in doubt, match the brevity of the
existing entries.

For a **Google Play** URL there is no public lookup API — ask the user for the
app name and a 512×512 icon, or grab the icon from the listing page's
`og:image` / `meta` tags.

### 2. Download the icon

Choose a slug (lowercase, hyphenated, matching the brand name):

```bash
curl -s -o public/showcase/<slug>.jpg "<icon-url>"
file public/showcase/<slug>.jpg   # confirm it's a valid JPEG (512x512)
```

### 3. Add the entry

Append a new object to the **end** of the `SHOWCASE_APPS` array in
`app/config/site.ts`, matching the existing formatting:

```ts
  {
    name: "Dibsify",
    icon: "/showcase/dibsify.jpg",
    url: "https://apps.apple.com/us/app/dibsify-wishlist-rsvp-event/id6769796676",
  },
```

Keep the user's original store URL.

### 4. Commit and push

Stage the icon and the config change, commit with a clear message, and push.

```bash
git add public/showcase/<slug>.jpg app/config/site.ts
git commit -m "Add <Name> to app showcase"
```

Push to the branch the user requests (default to the session's working branch;
only push to `main` when explicitly asked).

If a stop hook flags the commit as Unverified, set the author and re-author the
tip commit, then re-push:

```bash
git config user.email noreply@anthropic.com && git config user.name Claude
git commit --amend --no-edit --reset-author
```

## Notes

- The showcase grid (`app/components/home/AppShowcaseSection.tsx`) maps over
  `SHOWCASE_APPS` automatically — no component edits are needed.
- Icons are lazy-loaded at 128×128 display size; a 512×512 source is plenty.
- Avoid duplicates: check the array for the same `url`/`name` before adding.
