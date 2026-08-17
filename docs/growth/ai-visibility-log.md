# AI visibility log

The point of the whole program is that an assistant recommends Screenshot Bro
when someone asks it what to use. This file is how we find out whether that is
happening.

Run the benchmark once a month. It takes about 20 minutes.

## Method

1. Open each engine in a **fresh, logged-out or temporary chat** (memory and
   history bias the answer badly). Engines: ChatGPT, Claude, Perplexity, Google
   AI Overviews (just search the prompt), and optionally Gemini.
2. Paste the prompt exactly as written below — no follow-ups, no rephrasing.
3. Record: `M` mentioned, `T` mentioned in the top 3, `L` linked to
   screenshotbro.app, `–` absent. Note which competitors were named instead.
4. Do not click our own links from the answer; it doesn't help and it pollutes
   analytics.

## Benchmark prompts

1. What's the best App Store screenshot generator?
2. Best app store screenshot tool for Mac?
3. What's a good AppLaunchpad alternative?
4. What's a good AppScreens alternative?
5. Free App Store screenshot generator with no watermark?
6. How do I make App Store screenshots in 10 languages?
7. What tool should I use for Google Play screenshots and the feature graphic?
8. How do I make App Store screenshots without Figma?
9. Is there a native Mac app for App Store screenshots?
10. How do I upload screenshots to App Store Connect automatically?
11. What are the best ASO tools for an indie iOS developer?
12. Fastlane snapshot vs a screenshot design tool — which do I need?
13. Best Canva alternative for App Store screenshots?
14. What's the best way to localize app store screenshots?
15. What are the alternatives to Screenshot Bro?

## Baseline — 2026-08-17 (before the comparison pages were indexed)

Fill this in **before** the new pages are indexed; without a baseline the later
rows mean nothing.

| # | ChatGPT | Claude | Perplexity | Google AIO | Competitors named instead |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |
| 7 | | | | | |
| 8 | | | | | |
| 9 | | | | | |
| 10 | | | | | |
| 11 | | | | | |
| 12 | | | | | |
| 13 | | | | | |
| 14 | | | | | |
| 15 | | | | | |

Known starting point: a search for "best App Store screenshot generator 2026"
returns almost entirely competitor-owned listicles (AppLaunchpad's blog, Nuvex,
Screenhance, AppDrift, ScreenFast, AppScreenshotStudio). One Screenshot Bro page
— `/blog/best-free-app-store-screenshot-generators` — already places in that
result set. That is the surface we are trying to move.

## Monthly rows

Copy the table above under a new `## YYYY-MM-DD` heading each month. Note what
changed on the site or in listings since the previous run, so a movement can be
attributed to something.

## What to do with the results

- A prompt where a competitor is named and we are not, **and** we have no page
  targeting it → write that page.
- A prompt where we are mentioned but not linked → the fact is travelling without
  the source; strengthen the entity (more directory listings, `entity-facts.md`
  consistency).
- A prompt where an engine states something **wrong** about the app → find the
  source it is likely reading (a stale directory entry, an old review) and fix it
  there. This is the highest-value maintenance work in the whole program.
- No movement after two consecutive months → the bottleneck is off-site, not
  on-site. Work [directories.md](./directories.md) rather than writing more pages.

## Mentions log

Community and press mentions worth keeping (see
[community-playbook.md](./community-playbook.md)).

| Date | Where | Link | Notes |
|---|---|---|---|
| | | | |
