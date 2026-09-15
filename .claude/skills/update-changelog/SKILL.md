---
name: update-changelog
description: Bring the site's /changelog up to date with the Screenshot Bro app's shipped versions. Use when the user says "update changelog", "add the new versions to the changelog", or after a new app release has been shipped from ../screenshot-mac.
---

# Update Changelog

The changelog is the `CHANGELOG` array in `app/routes/changelog.tsx`, newest first. It is
English-only content (the page chrome is localized, the entries are not). The app lives in
`../screenshot-mac` (`/Users/taras/repo/experiments/screenshot-mac`) and every uploaded build is
tagged there as `v<MARKETING_VERSION>-<BUILD>` (e.g. `v4.16-138`).

`app/routes/sitemap[.]xml.tsx` derives the changelog/docs/home `lastmod` from `CHANGELOG[0].date`
via `parseLongDate`, so the date string format is load-bearing.

## Entry shape

```ts
{
  version: "4.16",                 // marketing version only, no build number
  date: "September 15, 2026",      // "Month D, YYYY" — parseLongDate depends on it
  title: "Variable Fonts and Replace SVG",   // short, names the headline change
  changes: [
    { type: "added", text: "..." },     // badge "New"
    { type: "improved", text: "..." },  // badge "Improved"
    { type: "fixed", text: "..." },     // badge "Fixed"
  ],
},
```

Order changes `added` → `improved` → `fixed`. Sentence case, no trailing period, one line each.

## Steps

### 1. Find what's missing

```bash
sed -n '/export const CHANGELOG/,/^  },/p' app/routes/changelog.tsx | head -8   # newest entry
cd ../screenshot-mac
git for-each-ref --sort=creatordate --format='%(refname:short) %(creatordate:short)' refs/tags | tail -40
```

Every marketing version with a tag newer than the newest entry needs one entry. **Also re-check the
newest existing entry**: it may have been written before that version's final build was tagged
(4.2 was written at build 111 and missed 112–113). Compare its commit with the last tag of that
version and fold anything user-visible from the gap into it.

Dates: use the date of the version's **final** build tag. If two marketing versions share one build
(3.2 / 3.3), write one entry with `version: "3.2 / 3.3"`.

### 2. Collect the commits per version

The range for version N is `<final tag of N-1>..<final tag of N>`. The shell is **zsh — arrays are
1-indexed**, so a `tags[i-1]` loop starting at `i=1` silently drops the last range. Safer:

```bash
cd ../screenshot-mac
git log --reverse --format='%h %s' v4.15-136..v4.16-138
git log -1 --format=%b <sha>        # read the body for anything ambiguous
```

Read bodies, not just subjects — subjects are written for developers ("Take X off the main
thread") and the body says what the user saw ("a 3 s editor hang"). Don't over-read: a long body
usually opens with the user-facing symptom in its first paragraph.

### 3. Cross-check against the App Store "What's New"

The `submit` skill writes a user-facing summary per version; when it exists, it is the best source
of wording and of what mattered. Read the en-US text for each missing version:

```bash
asc versions list --app 6760177675 --platform MAC_OS --limit 20 --output json \
  | python3 -c "import sys,json; [print(v['id'], v['attributes']['versionString'], v['attributes']['appStoreState']) for v in json.load(sys.stdin)['data']]"
asc localizations list --version "<VERSION_ID>" --locale en-US --output json \
  | python3 -c "import sys,json; d=json.load(sys.stdin)['data']; print(d[0]['attributes'].get('whatsNew') if d else '-')"
```

`New features and bug fixes` is the placeholder, not a summary — fall back to the commits. What's
New can omit things (it's short by design), and it can also over-claim: 4.10's listed two "fixes"
for regressions introduced and fixed within 4.10's own unreleased builds. Before copying a fix
line, confirm the bug existed in the previous *released* version
(`git log -G'<symbol>' <prev final tag>..<this final tag>` shows whether the breaking change is
inside this range).
Use `--platform IOS` too if a version only shipped on iOS. Note the `appStoreState`: versions
past the one currently `READY_FOR_DISTRIBUTION` are uploaded but not live yet — still add them
(site convention is one entry per tagged version) but tell the user which ones aren't live.

### 4. Write the entries

Include what a customer would notice: new features, UI changes, speedups they'd feel, crashes,
hangs, data-loss and sync fixes, new device frames/templates/UI languages, privacy-relevant
changes (crash reporting, analytics — describe them honestly).

Leave out: refactors, tests, lint, Sentry noise suppression ("stop reporting X as a hang"),
instrumentation, build/ship/submit skill changes, CLAUDE.md edits, version bumps, and **App Store
listing work** (ASO keywords, store descriptions, "Add N App Store locales", translating listing
copy) — those change the store page, not the app. Also skip anything `#if DEBUG` (e.g. Simulator
capture) and features added then reverted within the same version.

Honesty rules (these pages get quoted by answer engines):
- Only claim what the commit or What's New actually says. No "much faster", "all", or counts that
  aren't in the source. Verify numbers (templates, locales, frames) in the app source when unsure.
- A fix to a regression introduced and fixed inside the same version isn't a changelog line.
- A regression fixed in a *later* version is a `fixed` line in that later version.
- Use the app's shipping UI labels (`Settings ▸ General ▸ Copy Diagnostics`, `Show in Finder`),
  not internal type names or MCP tool names like `import_screenshots`.

### 5. Verify

```bash
npm run typecheck
npm run build
PORT=3187 npx react-router-serve build/server/index.js &
curl -s http://localhost:3187/changelog | sed 's/<!-- -->//g' | grep -o 'v[0-9.]*<' | head
curl -s http://localhost:3187/sitemap.xml | grep -A1 '/changelog<'   # lastmod == newest entry date
kill %1
```

React SSR puts `<!-- -->` between `v` and the version, hence the `sed`. If the port answers with
stale content, another server is already bound to it — pick another port.

### 6. Commit and push

Straight to `main` (the site deploys from it):

```bash
git add app/routes/changelog.tsx
git commit -m "Add changelog entries for app versions <first> through <last>"
git push
```

Mention in the body which tags the entries were reconstructed from and any version that is
uploaded but not yet live on the App Store.
