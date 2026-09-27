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
