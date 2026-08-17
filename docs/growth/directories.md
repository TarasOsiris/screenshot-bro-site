# Directory submissions

Where Screenshot Bro should be listed, in priority order. Copy every field from
[entity-facts.md](./entity-facts.md) verbatim.

**Why this list is ordered the way it is.** Answer engines lean heavily on sites
that already answer "alternatives to X" and "best X tools" queries — AlternativeTo,
SaaSHub, Slant, Product Hunt. A listing there is worth more than ten low-traffic
"submit your startup" pages, because it puts us inside the exact page structure a
model is summarising when someone asks for a recommendation.

Work top-down. Two or three submissions a day is plenty; they take longer than
you expect because each wants slightly different asset sizes.

## Status key

`todo` · `submitted` (waiting for review) · `live` (URL recorded) · `rejected` (note why)

---

## Tier 1 — comparison and alternative surfaces

These pages *are* the answer for "X alternative" queries. Highest priority.

| Site | What it needs | Cost | Status | Live URL / date |
|---|---|---|---|---|
| AlternativeTo | Account, description, icon, 3+ screenshots, category, then add ourselves as an alternative to AppLaunchpad, Previewed, AppScreens, Placeit, Canva | Free | todo | |
| SaaSHub | Description, logo, categories, competitor tags | Free | todo | |
| Slant | Add Screenshot Bro as an option under "best App Store screenshot tools" with pros/cons | Free | todo | |
| Product Hunt | Launch day, gallery, first comment from the maker, 60-char tagline | Free | todo | |
| G2 | Vendor profile; needs a couple of real reviews to be useful | Free tier | todo | |
| Capterra / GetApp | Vendor profile, category listing | Free tier | todo | |
| StackShare | Tool profile, "we use this" from our own stack | Free | todo | |
| Crunchbase | Company profile for Nineva Studios, product listed | Free tier | todo | |

## Tier 2 — indie / launch directories

Cheap backlinks and real early traffic. Product Hunt alternatives, mostly.

| Site | What it needs | Cost | Status | Live URL / date |
|---|---|---|---|---|
| Uneed | Launch slot, images, tagline | Free / paid boost | todo | |
| Fazier | Launch listing | Free | todo | |
| Microlaunch | Launch listing | Free / paid | todo | |
| StartupBase | Product profile | Free | todo | |
| BetaList | Early-stage profile | Free / paid skip-queue | todo | |
| Peerlist Projects | Maker profile plus project | Free | todo | |
| Indie Hackers | Product page plus a real build post | Free | todo | |
| F6S | Company profile | Free | todo | |
| SideProjectors | Project listing | Free | todo | |
| Hacker News (Show HN) | One post, honest framing, be around to answer | Free | todo | |
| Toolify | Tool profile, category tags | Free / paid | todo | |
| There's An AI For That | Only if we ship an AI-labelled feature — auto-translate may qualify | Free / paid | todo | |

## Tier 3 — Mac and iOS specific

Smaller audiences, much higher intent — these readers are Mac users who buy apps.

| Site | What it needs | Cost | Status | Live URL / date |
|---|---|---|---|---|
| MacUpdate | App listing, version, icon, screenshots | Free | todo | |
| Softpedia Mac | App submission | Free | todo | |
| iOS Dev Tools (iosdev.tools) | Tool submission | Free | todo | |
| awesome-ios / awesome-mac GitHub lists | PR adding the app under the right heading | Free | todo | |
| iOS Dev Weekly / iOS Goodies / SwiftLee-style newsletters | Pitch email, one paragraph | Free | todo | |
| MacStories, 9to5Mac, MacRumors tip lines | Short pitch with a real angle, not a press release | Free | todo | |
| Setapp | Only if we ever want subscription distribution — read terms first | Rev-share | todo | |

## Tier 4 — ASO and app-marketing niches

Where the actual buyer already spends time.

| Site | What it needs | Cost | Status | Live URL / date |
|---|---|---|---|---|
| ASO tool roundups (Appfigures, AppTweak, MobileAction blogs) | Pitch to be added to an existing roundup | Free | todo | |
| r/iOSProgramming, r/androiddev tool threads | See [community-playbook.md](./community-playbook.md) | Free | todo | |
| Indie app newsletters (e.g. Indie Dev Monday) | Short pitch | Free | todo | |
| Product directories run by competitors | Some accept submissions — worth checking, they rank well | Free | todo | |

---

## Submission checklist (per site)

1. Description copied from `entity-facts.md`, not rewritten.
2. Category: Graphics & Design or Developer Tools — same choice everywhere.
3. Same 4–6 screenshots, same order.
4. Link to `https://screenshotbro.app`, not to the App Store, unless the field
   asks for a store link specifically.
5. Where a "compare with" or "alternative to" field exists, name the competitors
   we have pages for — that is the connection an answer engine follows.
6. Record the live URL and date in the table above, and commit the change.

## After a batch

Run `npm run indexnow` after any site change so the new pages are re-submitted,
and add newly acquired listing URLs to the next monthly check in
[ai-visibility-log.md](./ai-visibility-log.md).
