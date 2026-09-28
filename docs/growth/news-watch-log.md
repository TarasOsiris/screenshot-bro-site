# Store screenshot news watch

Weekly log of the Screenshot Bro store-screenshot news watch. Newest entry last.
Every factual claim published to the site must trace to a primary-source URL
recorded here.

## 2026-09-27

- **Scanned:** developer.apple.com/news (Jun–Sep 2026 items), the App Store
  Connect screenshot specifications reference, developer.apple.com/app-store/whats-new,
  /app-store/asset-best-practices, /app-store/product-page, the HIG
  "Designing for iPhone Duo" article (via Apple's tutorials data endpoint),
  developer.apple.com/iphone-duo, fastlane releases (RubyGems version index plus
  GitHub release notes for 2.240.0 / 2.240.1), Google Play graphic-asset
  requirements.

- **Findings:**
  - **Apple creative assets — product page headers, search results assets, the
    Asset Library and a product page preview tool.** Announced at
    <https://developer.apple.com/news/?id=kug6m2ea> (Aug 5) and pushed again in
    the iOS 27 submissions item <https://developer.apple.com/news/?id=k1mtkt1k>
    (Sep 9). Guidance and templates are live at
    <https://developer.apple.com/app-store/asset-best-practices/>; status is
    "coming this fall" per <https://developer.apple.com/app-store/whats-new/>.
    Matters because it is the first change to the product page layout that is not
    about screenshot dimensions, and because Apple states that without a search
    result asset your screenshots fill that slot (up to three, orientation
    dependent). The site had zero coverage. **Published.**
  - **Apple has not published a public pixel spec for creative assets** — only
    Figma / Photoshop / Pixelmator / Sketch templates. The dimensions circulating
    in third-party posts (3840x1646 header, 3840x2560 search, 5244x2950
    universal) are read off those templates, not from an Apple spec page.
    Deliberately not published as numbers; the article tells readers to treat the
    template as the specification.
  - **Apple Watch Ultra 4 and Series 12 are now listed** on
    <https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications>
    (Ultra 4 + Ultra 3 = 422x514; Series 12 / 11 / 10 = 416x496; SE 2 sits in the
    368x448 group). Two existing posts listed only Ultra 3 and Series 11/10. The
    pixel values were already correct — only the device lists were stale.
    **Updated.**
  - **iPhone Duo screenshot sizes** (outer 1398x2034, inner 2007x2853; App Store
    Connect uploads "available later this year"; device ships Oct 23 on iOS 27.1;
    Xcode 27.1 beta adds the simulator with the new poses). Verified on Apple's
    spec page — but `blog.app-store-screenshot-sizes` already covers all of it,
    including the upload caveat, in every locale. Not republished. Note that the
    two displays do **not** share an aspect ratio (1.455 vs 1.422), contrary to
    several secondary write-ups.
  - **fastlane 2.240.0 (Sep 14) and 2.240.1 (Sep 15).** Nothing screenshot-facing:
    the notable entries are a spaceship fix for where App Store Connect API keys
    now live, an upload_to_testflight/altool false-failure fix, and a new
    `disallow_xcodebuild_settings_lookup` option for gym/scan/snapshot. No frameit
    device frames for iPhone Duo, no iOS 27 creative-asset support. Not worth a
    post; worth watching.
  - **Google Play:** nothing material. No Play Console announcement in this window
    touching graphic assets; requirements unchanged (2–8 screenshots per form
    factor, phone required, min 320px shortest side / max 3840px longest, aspect
    no wider than 2:1, 1024x500 feature graphic).
  - **Competitors:** no launches, pricing changes or shutdowns surfaced in this
    window for the tools the site has alternative pages for.

- **Published:** `app-store-creative-assets` — "App Store Creative Assets:
  Headers and Search Results" (Guide, 2026-09-27)

- **Updated:** `app-store-screenshot-sizes`, `screenshot-sizes-app-store-google-play`
  — Apple Watch device lists corrected (added Ultra 4, Series 12, SE 2, Series 2/1);
  `dateModified` bumped to 2026-09-27 in `blog.ts` and all ten locale arrays.

- **Watching:**
  - Asset Library, product page headers and search result assets going live in
    App Store Connect ("this fall"). When they ship, the new article needs the
    real upload flow, and Apple may publish a spec table that would let us quote
    dimensions. Re-check every run.
  - iPhone Duo on Oct 23, and App Store Connect accepting Duo screenshot uploads
    "later this year" — the sizes post currently says uploads are not accepted
    yet, which becomes wrong the moment that ships.
  - fastlane: frameit iPhone Duo frames, and deliver support for the Duo display
    types or for creative assets.
  - April 2027 SDK floor (iOS 27 SDK required for uploads to App Store Connect).
    Far out, no action yet.

## 2026-09-28

Note: the previous run was 2026-09-27, so the genuinely new window here is one
day. Scanning still covered the full 7–10 day window to catch anything the last
run missed, and it caught one item (Apple's Sep 18 iPhone Duo resources).

- **Scanned:** developer.apple.com/news (all September 2026 items),
  developer.apple.com/news/releases (Xcode 27 / 27.1 beta / 27.2 beta, iOS 27.0
  and 27.2 beta 2, App Store Connect 3.3, App Store Connect API 4.5, TestFlight
  4.4.0), the App Store Connect screenshot specifications reference,
  developer.apple.com/help/app-store-connect/release-notes,
  developer.apple.com/app-store/whats-new, developer.apple.com/design/resources,
  the App Review Guidelines (section 2.3.x), the App Store Connect API 4.5 and
  4.4.1 release notes (via Apple's tutorials JSON endpoint), fastlane versions on
  RubyGems, Google Play graphic-asset requirements, plus searches on ASO
  screenshot research and competitor pricing.

- **Findings:** nothing material enough to publish.
  - **Apple shipped an official iPhone Duo product bezel** in Apple Design
    Resources — Photoshop + PNG, ~331 MB, confirmed HTTP 200 at
    <https://devimages-cdn.apple.com/design/resources/download/Bezel-iPhone-Duo.dmg>
    (linked from <https://developer.apple.com/design/resources/> under Product
    Bezels). Announced in "Build for iPhone Duo with new resources",
    <https://developer.apple.com/news/?id=nyuppv9r> (Sep 18), alongside Xcode
    27.1 beta and iOS/iPadOS 27 Figma and Sketch UI kits. The last run missed
    this item. It is real and relevant — official device art for the foldable —
    but it is one download link, not an article, and it contradicts nothing on
    the site: `blog.device-mockup-generator-app-screenshots` already lists Apple
    Design Resources as a free frame source and already covers the three Duo
    views. Not published, not edited (the post is localized inline across ten
    locales; a single optional sentence is not worth that churn). Worth folding
    into the Duo section the next time that post is edited for another reason.
  - **App Store Connect API 4.5** (Sep 22) —
    <https://developer.apple.com/documentation/appstoreconnectapi/app-store-connect-api-4-5-release-notes>.
    Nothing screenshot-facing: app performance overview data, subscription
    `marketSettings` / `multiSeatStatus`, Game Center score moderation, Korean
    age-rating overrides; deprecates the `territories` relationship on app tags.
    Notably **no Asset Library or creative-asset endpoints yet** — so the
    creative-assets feature is still not automatable.
  - **App Store Connect 3.3** (Sep 23) —
    <https://developer.apple.com/help/app-store-connect/release-notes/>. The
    iPhone/iPad app only: landscape orientation on iPhone, iPhone Mirroring
    resizing, faster internal-tester invites. Nothing about assets.
  - **Creative assets unchanged.** Product page headers, search results assets,
    the Asset Library and the product page preview are all still listed as
    "coming this fall" on <https://developer.apple.com/app-store/whats-new/>.
    No pixel spec published; the article shipped on 2026-09-27 remains accurate.
  - **Screenshot specifications unchanged** since the last run — re-verified the
    full table at
    <https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications>.
    iPhone Duo still outer 1398x2034 / inner 2007x2853 with "support for
    uploading assets available later this year". Apple Watch device lists
    (Ultra 4 / Series 12 / SE 3) match what the two size posts now say after
    last run's fix. No corrections needed.
  - **App Review Guidelines** — 2.3.3 (screenshots must show the app in use;
    text and image overlays allowed) and 2.3.7 (no prices or non-specific terms
    in screenshots and previews) are verbatim unchanged. No new screenshot or
    metadata rule.
  - **fastlane** — still 2.240.1, built 2026-09-15 (RubyGems version index). No
    release since the last run. Still no frameit Duo frames and no deliver
    support for Duo display types or creative assets.
  - **Google Play** — nothing material. No Play Console announcement in this
    window touching graphic assets; requirements unchanged.
  - **ASO research** — searches surfaced only secondary SEO blog posts recycling
    unattributed conversion percentages (20–35% lift, "first three frames carry
    70% of conversion weight", and similar). No primary study from AppTweak,
    Sensor Tower, Appfigures or Apple behind any of them. Dropped per the
    primary-source rule; nothing published.
  - **Competitors** — no launches, pricing changes or shutdowns surfaced for the
    tools the site has alternative pages for. A one-day window makes this a weak
    check; nothing to act on either way.

- **Published:** none — quiet week, correctly so. The substantive item of this
  10-day window (creative assets) was published yesterday.

- **Updated:** none. No existing post is contradicted by anything found.

- **Watching:**
  - Asset Library, product page headers, search result assets and the product
    page preview going live in App Store Connect ("this fall"). Still not in the
    API as of 4.5 — watch both the App Store Connect release notes and the next
    API release notes. When it ships, `app-store-creative-assets` needs the real
    upload flow, and Apple may finally publish quotable dimensions.
  - iPhone Duo ships Oct 23; App Store Connect accepting Duo uploads "later this
    year". `app-store-screenshot-sizes` and
    `device-mockup-generator-app-screenshots` both currently say uploads are not
    accepted yet, in all locales — both go wrong the day that ships. Highest
    priority correction on the list.
  - Apple's Duo product bezel (above) — fold into the mockup post's Duo section
    on its next edit.
  - fastlane: frameit Duo frames, deliver support for Duo display types or
    creative assets. No release since 2.240.1.
  - April 2027 SDK floor (iOS 27 SDK required for App Store Connect uploads).
    Far out, no action yet.
