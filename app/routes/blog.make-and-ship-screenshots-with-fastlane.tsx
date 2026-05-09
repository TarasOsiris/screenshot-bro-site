import type { Route } from "./+types/blog.make-and-ship-screenshots-with-fastlane";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { CodeBlock } from "~/components/CodeBlock";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { highlight } from "~/lib/highlight";

const SLUG = "make-and-ship-screenshots-with-fastlane";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches);
export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export function loader() {
  const SNAPFILE = `# fastlane/Snapfile

devices([
  "iPhone 17 Pro Max",     # 6.9"  -> 1320 x 2868 (required slot in 2026)
  "iPhone 17 Pro",         # 6.3"  -> 1206 x 2622 (optional, nicer in store listings)
  "iPad Pro 13-inch (M4)", # 13"   -> 2064 x 2752 (required if you ship an iPad build)
])

languages([
  "en-US",
  "de-DE",
  "fr-FR",
  "es-ES",
  "ja",
])

scheme("MyAppUITests")           # the UI-testing scheme that runs Snapshot tests
output_directory("./fastlane/screenshots")
clear_previous_screenshots(true)
override_status_bar(true)        # 9:41, full battery, full signal
concurrent_simulators(true)
stop_after_first_error(true)
number_of_retries(1)
`;

const SNAPSHOT_HELPER_INTEGRATION = `// MyAppUITests/MyAppUITests.swift

import XCTest

final class MyAppUITests: XCTestCase {
    override func setUpWithError() throws {
        continueAfterFailure = false
        let app = XCUIApplication()
        setupSnapshot(app)               // injects the locale + screenshot bridge
        app.launchArguments += [
            "-UITests",
            "-AppleLanguages", "(\\(Snapshot.deviceLanguage))",
            "-AppleLocale", Snapshot.currentLocale,
        ]
        app.launch()
    }

    func testScreenshots() {
        let app = XCUIApplication()

        snapshot("01-Home")              // tap pattern: drive UI, then snapshot

        app.tabBars.buttons["Library"].tap()
        snapshot("02-Library")

        app.cells.element(boundBy: 0).tap()
        snapshot("03-Detail")

        app.navigationBars.buttons.element(boundBy: 0).tap()
        app.tabBars.buttons["Settings"].tap()
        snapshot("04-Settings")
    }
}
`;

const FRAMEFILE = `// fastlane/screenshots/Framefile.json
{
  "device_frame_version": "latest",
  "default": {
    "keyword": {
      "font": "./fonts/Inter-SemiBold.ttf",
      "color": "#FFFFFF",
      "padding": 50
    },
    "title": {
      "font": "./fonts/Inter-Bold.ttf",
      "color": "#FFFFFF"
    },
    "background": "./background.png",
    "padding": 80,
    "show_complete_frame": false,
    "title_below_image": false,
    "stack_title": true
  },
  "data": [
    {
      "filter": "Home",
      "keyword": { "color": "#9F7AEA" },
      "frame": "BLACK"
    },
    {
      "filter": "Settings",
      "keyword": { "color": "#3B82F6" },
      "frame": "WHITE"
    }
  ]
}
`;

const TITLE_STRINGS = `/* fastlane/screenshots/en-US/title.strings */

"01-Home"     = "Track every match.\\nIn one tap.";
"02-Library"  = "Your full history,\\nalways with you.";
"03-Detail"   = "Drill into any session.";
"04-Settings" = "Sync across all devices.";
`;

const KEYWORD_STRINGS = `/* fastlane/screenshots/en-US/keyword.strings */
/* keywords are rendered above the title, smaller */

"01-Home"     = "FAST";
"02-Library"  = "ORGANIZED";
"03-Detail"   = "DEEP";
"04-Settings" = "EVERYWHERE";
`;

const DELIVERFILE = `# fastlane/Deliverfile

app_identifier("com.example.myapp")
team_id("ABCDE12345")

# Auth via App Store Connect API key (preferred over username/password).
api_key_path("./fastlane/asc_api_key.json")

# Where to read screenshots / metadata from.
screenshots_path("./fastlane/screenshots")
metadata_path("./fastlane/metadata")

# Only push screenshots — leave the binary, pricing, IAPs, etc. alone.
skip_binary_upload(true)
skip_metadata(false)
skip_screenshots(false)
skip_app_version_update(true)

# Don't ask for confirmation in CI.
force(true)
overwrite_screenshots(true)
run_precheck_before_submit(false)
submit_for_review(false)

# Match a screenshot file against the right App Store display family.
# Useful when fastlane's resolution-based detection is ambiguous.
ignore_language_directory_validation(false)
`;

const ASC_KEY = `// fastlane/asc_api_key.json
{
  "key_id": "ABCD1234EF",
  "issuer_id": "57246542-96fe-1a63-e053-0824d011072a",
  "key": "-----BEGIN PRIVATE KEY-----\\nMIGTAg...truncated...A==\\n-----END PRIVATE KEY-----",
  "duration": 1200,
  "in_house": false
}
`;

const FASTFILE = `# fastlane/Fastfile

default_platform(:ios)

platform :ios do
  desc "Capture screenshots with snapshot"
  lane :screenshots do
    capture_ios_screenshots         # alias for snapshot
  end

  desc "Frame screenshots with frameit"
  lane :frame do
    frame_screenshots(
      path: "./fastlane/screenshots",
      use_platform: "IOS"
    )
  end

  desc "Build framed screenshots end-to-end"
  lane :build_marketing do
    capture_ios_screenshots
    frame_screenshots(path: "./fastlane/screenshots", use_platform: "IOS")
  end

  desc "Upload screenshots to App Store Connect"
  lane :upload_screenshots do
    upload_to_app_store(             # alias for deliver
      skip_binary_upload: true,
      skip_metadata: true,
      skip_app_version_update: true,
      force: true,
      overwrite_screenshots: true,
      run_precheck_before_submit: false
    )
  end

  desc "Full release pipeline: capture, frame, upload"
  lane :ship_screenshots do
    capture_ios_screenshots
    frame_screenshots(path: "./fastlane/screenshots", use_platform: "IOS")
    upload_to_app_store(
      skip_binary_upload: true,
      skip_metadata: true,
      skip_app_version_update: true,
      force: true,
      overwrite_screenshots: true
    )
  end
end
`;

const GHA_WORKFLOW = `# .github/workflows/screenshots.yml

name: Screenshots

on:
  workflow_dispatch:
  push:
    paths:
      - "fastlane/**"
      - "MyAppUITests/**"

jobs:
  screenshots:
    runs-on: macos-26       # Xcode 26.x default; macos-15 also works with explicit xcode-select
    timeout-minutes: 90
    env:
      LC_ALL: en_US.UTF-8
      LANG: en_US.UTF-8
      FASTLANE_SKIP_UPDATE_CHECK: "1"
      FASTLANE_HIDE_CHANGELOG: "1"

    steps:
      - uses: actions/checkout@v4

      - name: Select Xcode
        run: sudo xcode-select -s /Applications/Xcode_26.3.app

      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: "3.3"
          bundler-cache: true

      - name: Write App Store Connect API key
        run: |
          mkdir -p fastlane
          echo "$ASC_API_KEY_JSON" > fastlane/asc_api_key.json
        env:
          ASC_API_KEY_JSON: \${{ secrets.ASC_API_KEY_JSON }}

      - name: Capture, frame, upload
        run: bundle exec fastlane ios ship_screenshots

      - name: Archive framed screenshots
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: screenshots
          path: fastlane/screenshots
`;

  const BUNDLER_INSTALL = `# system Ruby on macOS 14+ is fine, but rbenv/asdf is cleaner
gem install bundler
bundle init
echo 'gem "fastlane"' >> Gemfile
bundle install --path vendor/bundle

# from now on, run fastlane via:
bundle exec fastlane <lane>`;

  const FASTLANE_INIT = `bundle exec fastlane init
# choose option 4: "Manual setup"`;

  const APPFILE = `# fastlane/Appfile
app_identifier("com.example.myapp")
apple_id("you@example.com")     # only needed if you fall back to legacy auth
team_id("ABCDE12345")           # Developer Portal team ID`;

  const SNAPSHOT_INIT = `bundle exec fastlane snapshot init`;

  const SNAPSHOT_RUN = `bundle exec fastlane snapshot

# or, equivalently, in a Fastfile lane:
#   capture_ios_screenshots`;

  const FRAMEIT_DOWNLOAD = `# Download device frames once (cached under ~/.frameit/)
bundle exec fastlane frameit download_frames

# Frame everything in fastlane/screenshots, including subfolders
bundle exec fastlane frameit --use_platform IOS`;

  const FOLDER_LAYOUT = `fastlane/screenshots/
├── en-US/
│   ├── iPhone 17 Pro Max-01-Home_framed.png       # 6.9" iPhone
│   ├── iPhone 17 Pro Max-02-Library_framed.png
│   ├── iPad Pro 13-inch (M4)-01-Home_framed.png   # 13" iPad
│   ├── title.strings
│   └── keyword.strings
├── de-DE/
│   └── ...
└── Framefile.json`;

  const DRY_RUN = `# verify which display families and locales will be touched, no upload
bundle exec fastlane deliver --verify_only

# inspect the resolved configuration
bundle exec fastlane deliver --print_resolved_options

# real upload
bundle exec fastlane deliver`;

  const CHEAT_SHEET = `# Setup (once)
bundle init && echo 'gem "fastlane"' >> Gemfile && bundle install
bundle exec fastlane init
bundle exec fastlane snapshot init
bundle exec fastlane frameit download_frames

# Per release
bundle exec fastlane ship_screenshots`;

  return {
    blocks: {
      bundlerInstall: highlight("bash", BUNDLER_INSTALL),
      fastlaneInit: highlight("bash", FASTLANE_INIT),
      appfile: highlight("ruby", APPFILE),
      ascKey: highlight("json", ASC_KEY),
      snapfile: highlight("ruby", SNAPFILE),
      snapshotHelper: highlight("swift", SNAPSHOT_HELPER_INTEGRATION),
      snapshotInit: highlight("bash", SNAPSHOT_INIT),
      snapshotRun: highlight("bash", SNAPSHOT_RUN),
      frameitDownload: highlight("bash", FRAMEIT_DOWNLOAD),
      framefile: highlight("json", FRAMEFILE),
      titleStrings: highlight("plaintext", TITLE_STRINGS),
      keywordStrings: highlight("plaintext", KEYWORD_STRINGS),
      folderLayout: highlight("plaintext", FOLDER_LAYOUT),
      deliverfile: highlight("ruby", DELIVERFILE),
      dryRun: highlight("bash", DRY_RUN),
      fastfile: highlight("ruby", FASTFILE),
      ghaWorkflow: highlight("yaml", GHA_WORKFLOW),
      cheatSheet: highlight("bash", CHEAT_SHEET),
    },
  };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { blocks } = loaderData;
  return (
    <ContentLayout>
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={SLUG} />

          <p>
            <a
              href="https://fastlane.tools"
              target="_blank"
              rel="noopener noreferrer"
            >
              fastlane
            </a>{" "}
            is a Ruby toolchain for automating the boring parts of shipping iOS
            and Android apps. Its three screenshot-related actions —{" "}
            <code>snapshot</code>, <code>frameit</code>, and <code>deliver</code> —
            cover the full pipeline: drive your app inside an XCUITest to
            capture raw images, wrap them in device frames with marketing copy,
            and push the result to App Store Connect. This guide walks through
            the pipeline end-to-end with the configuration files, lane
            definitions, and CI workflow you need to run it.
          </p>

          <p>
            By the end you will have: a Ruby Bundler-pinned setup, an App Store
            Connect API key, a working <code>Snapfile</code> +{" "}
            <code>SnapshotHelper.swift</code>, a <code>Framefile.json</code> with
            per-screenshot keywords and titles, a <code>Deliverfile</code> tuned
            for screenshot-only uploads, a four-lane <code>Fastfile</code>, and
            a GitHub Actions workflow that runs the whole thing on a{" "}
            <code>macos-26</code> runner.
          </p>

          <h2>1. Prerequisites and Mental Model</h2>
          <p>
            Before any Ruby gets installed, get the conceptual picture clear.
            The screenshot pipeline has three independent stages, each owned by
            a separate fastlane action:
          </p>
          <ol>
            <li>
              <strong>Capture</strong> — an XCUITest runs against a simulator
              and calls <code>snapshot("01-Home")</code> at the moments you want
              recorded. fastlane's <code>snapshot</code> action launches the
              right simulators, switches each one to the right locale, runs the
              test, and pulls the resulting PNGs into{" "}
              <code>fastlane/screenshots/&lt;locale&gt;/</code>.
            </li>
            <li>
              <strong>Frame</strong> — <code>frameit</code> reads each PNG,
              picks a device frame based on the image resolution, optionally
              composites a background and marketing title, and writes a{" "}
              <code>_framed.png</code> alongside the original.
            </li>
            <li>
              <strong>Upload</strong> — <code>deliver</code> walks the
              screenshots folder, matches each image to an App Store Connect{" "}
              <em>display family</em> (e.g.{" "}
              <a href="/blog/app-store-screenshot-sizes">iPhone 6.9", iPad 13"</a>),
              and replaces the screenshot set on the editable App Store version
              via the App Store Connect API.
            </li>
          </ol>
          <p>
            Each stage is independently runnable. You can take screenshots
            without uploading them, frame screenshots produced by another tool,
            or upload pre-built screenshots without ever invoking the simulator.
          </p>

          <h2>2. Install fastlane the Sane Way: Bundler</h2>
          <p>
            Don't <code>brew install fastlane</code>. Pin fastlane per-project
            with{" "}
            <a
              href="https://bundler.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bundler
            </a>{" "}
            so every machine that builds your project — your laptop, a
            teammate's laptop, CI — runs the same version. From the project
            root:
          </p>
          <CodeBlock html={blocks.bundlerInstall} />
          <p>
            Commit <code>Gemfile</code> and <code>Gemfile.lock</code>. Add{" "}
            <code>vendor/bundle</code> to your <code>.gitignore</code>. Now
            initialize fastlane in the project:
          </p>
          <CodeBlock html={blocks.fastlaneInit} />
          <p>
            This creates a <code>fastlane/</code> directory with{" "}
            <code>Fastfile</code> and <code>Appfile</code>. Fill in your bundle
            identifier and team ID in <code>Appfile</code>:
          </p>
          <CodeBlock html={blocks.appfile} />

          <h2>3. The App Store Connect API Key</h2>
          <p>
            Username/password auth is deprecated for new accounts and
            two-factor-protected for everyone else, which makes it useless on
            CI. Use an{" "}
            <a
              href="https://appstoreconnect.apple.com/access/integrations/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store Connect API key
            </a>{" "}
            instead. In App Store Connect → <strong>Users and Access</strong>{" "}
            → <strong>Integrations</strong> → <strong>App Store Connect API</strong>:
          </p>
          <ol>
            <li>
              Click <strong>Generate API Key</strong> (you only do this once per
              team; lost <code>.p8</code> files cannot be re-downloaded).
            </li>
            <li>
              Give it the <strong>App Manager</strong> role. <strong>Developer</strong>{" "}
              is not enough to upload screenshots; <strong>Admin</strong> is more
              than you need.
            </li>
            <li>
              Note the <strong>Key ID</strong> (10 chars, e.g.{" "}
              <code>ABCD1234EF</code>) and the team's{" "}
              <strong>Issuer ID</strong> (UUID at the top of the same page).
            </li>
            <li>Download the <code>AuthKey_ABCD1234EF.p8</code> file.</li>
          </ol>
          <p>
            fastlane reads the key from a JSON file. Save it as{" "}
            <code>fastlane/asc_api_key.json</code> (and put that path in{" "}
            <code>.gitignore</code>):
          </p>
          <CodeBlock html={blocks.ascKey} />
          <p>
            <code>duration</code> is the lifetime of each generated JWT in
            seconds; the maximum Apple accepts is <code>1200</code> (20
            minutes). The <code>key</code> field is the full contents of the{" "}
            <code>.p8</code> file, including the <code>BEGIN/END PRIVATE KEY</code>{" "}
            lines, with literal <code>\n</code> for line breaks.
          </p>
          <p>
            On CI, never check the JSON in. Store the JSON contents as a single
            secret (e.g. <code>ASC_API_KEY_JSON</code>) and write the file at
            run time — there is an example in the GitHub Actions section below.
          </p>

          <h2>4. snapshot — Capturing Screenshots in XCUITest</h2>
          <p>
            <code>snapshot</code> works by injecting a small Swift helper into
            your UI test target. The helper hooks into the test runtime so that
            every call to <code>snapshot("name")</code> from your test takes a
            screenshot of the simulator screen, names it, and writes it to a
            disk location fastlane already knows how to find.
          </p>

          <h3>Generate the helper</h3>
          <CodeBlock html={blocks.snapshotInit} />
          <p>
            This creates <code>fastlane/Snapfile</code> and{" "}
            <code>fastlane/SnapshotHelper.swift</code>. Add{" "}
            <code>SnapshotHelper.swift</code> to your{" "}
            <strong>UI testing target</strong> in Xcode (drag it in, make sure
            "MyAppUITests" is the only checked target — never include it in the
            app binary).
          </p>

          <h3>Snapfile</h3>
          <p>
            <code>Snapfile</code> tells <code>snapshot</code> which devices to
            spin up, which locales to run each test in, and which UI test scheme
            to invoke:
          </p>
          <CodeBlock html={blocks.snapfile} />
          <p>Highlights:</p>
          <ul>
            <li>
              <strong><code>devices</code></strong> — names must match exactly
              what <code>xcrun simctl list devices</code> prints. Apple changes
              names every year (e.g. "iPhone 17 Pro Max" replaced "iPhone 16 Pro
              Max"). If a device name is wrong, snapshot will silently skip it.
            </li>
            <li>
              <strong><code>languages</code></strong> — pass either a region
              code like <code>"en-US"</code> or a bare language code like{" "}
              <code>"ja"</code>. Each entry generates a folder under{" "}
              <code>output_directory</code>.
            </li>
            <li>
              <strong><code>override_status_bar(true)</code></strong> — uses{" "}
              <code>simctl status_bar override</code> to show 9:41, full
              battery, and full Wi-Fi/cell signal in every screenshot. Apple
              does not technically require this, but most reviewers expect it.
            </li>
            <li>
              <strong><code>concurrent_simulators</code></strong> — runs
              multiple simulators in parallel. Cuts wall time roughly by the
              number of devices, but each simulator costs ~3 GB of RAM, so it is
              brutal on under-resourced CI runners.
            </li>
            <li>
              <strong><code>clear_previous_screenshots</code></strong> — deletes{" "}
              <code>fastlane/screenshots/&lt;locale&gt;/</code> at the start of
              each run. Without this, stale shots from removed test cases pile
              up forever.
            </li>
          </ul>

          <h3>Wire snapshot into your XCUITest</h3>
          <p>
            <code>SnapshotHelper</code> exposes two free functions:{" "}
            <code>setupSnapshot(_:)</code> (call once per test) and{" "}
            <code>snapshot(_:)</code> (call wherever you want to record a
            frame).
          </p>
          <CodeBlock html={blocks.snapshotHelper} />
          <p>A few practical notes:</p>
          <ul>
            <li>
              Pass <code>-UITests</code> as a launch argument and check for it
              in your app to disable analytics, swap in deterministic seed data,
              skip onboarding, or stub network calls. Reviewers (and your
              future self) will thank you.
            </li>
            <li>
              <code>snapshot</code> blocks until the screen capture completes,
              so you can immediately drive the next interaction afterwards.
            </li>
            <li>
              If the UI animates, add{" "}
              <code>UIView.setAnimationsEnabled(false)</code> behind a launch
              argument. Animation mid-capture produces blurry shots.
            </li>
            <li>
              Name screenshots with a numeric prefix (<code>01-</code>,{" "}
              <code>02-</code>) so the filename order matches App Store Connect
              display order. <code>deliver</code> uploads them in lexical order.
            </li>
          </ul>

          <h3>Run snapshot</h3>
          <CodeBlock html={blocks.snapshotRun} />
          <p>
            Output lands in{" "}
            <code>fastlane/screenshots/&lt;locale&gt;/iPhone 17 Pro Max-01-Home.png</code>{" "}
            and friends. Snapshot also generates{" "}
            <code>screenshots.html</code> — open it to flip through all locales
            and devices in a single page.
          </p>

          <h2>5. frameit — Adding Device Frames and Titles</h2>
          <p>
            Raw screenshots are bare device viewports. <code>frameit</code>{" "}
            wraps them in physical device frames, optionally adds a background,
            a marketing title, and a smaller "keyword" line above it.
          </p>
          <CodeBlock html={blocks.frameitDownload} />
          <p>
            For each <code>foo.png</code> in the screenshots tree,{" "}
            <code>frameit</code> writes <code>foo_framed.png</code> next to it.
            Originals are left in place; <code>deliver</code> picks up the
            framed version automatically when present (and falls back to the
            raw version if not).
          </p>

          <h3>Framefile.json</h3>
          <p>
            Default frames look like a dev test — black frame, no background, no
            text. Configure them with{" "}
            <code>fastlane/screenshots/Framefile.json</code>:
          </p>
          <CodeBlock html={blocks.framefile} />
          <p>Key fields:</p>
          <ul>
            <li>
              <strong><code>background</code></strong> — a PNG that the framed
              device is composited onto. Should be wider than your largest
              screenshot output. <code>frameit</code> centers the device
              vertically by default; <code>title_below_image</code> and{" "}
              <code>show_complete_frame</code> control how text and frame
              interact.
            </li>
            <li>
              <strong><code>data[]</code></strong> — per-screenshot overrides
              keyed by a substring filter against the screenshot filename. The
              second entry above only applies to files with "Settings" in the
              name. Use this for color theming per row.
            </li>
            <li>
              <strong><code>frame</code></strong> — overrides the device frame
              color for matching files. The values <code>frameit</code>{" "}
              recognizes in <code>Framefile.json</code> are{" "}
              <code>BLACK</code>, <code>WHITE</code>, <code>GOLD</code>, and{" "}
              <code>ROSE_GOLD</code>. The frame artwork itself is downloaded
              from Apple's marketing-resources Sketch files via{" "}
              <code>fastlane frameit download_frames</code>.
            </li>
          </ul>

          <h3>Per-locale title.strings and keyword.strings</h3>
          <p>
            Marketing copy comes from two parallel per-locale strings files —{" "}
            <code>title.strings</code> for the headline and{" "}
            <code>keyword.strings</code> for the smaller label above it. Keys
            are the screenshot filenames without extension or device prefix:
          </p>
          <CodeBlock html={blocks.titleStrings} />
          <CodeBlock html={blocks.keywordStrings} />
          <p>
            Translations go in{" "}
            <code>fastlane/screenshots/de-DE/title.strings</code> and{" "}
            <code>fastlane/screenshots/de-DE/keyword.strings</code>,{" "}
            <code>fastlane/screenshots/ja/title.strings</code>, and so on. Use{" "}
            <code>\n</code> for line breaks. Missing locales fall back to the
            untranslated screenshot (no title rendered) — there is no automatic
            English fallback.
          </p>

          <h3>Fonts</h3>
          <p>
            Drop TTF or OTF files in{" "}
            <code>fastlane/screenshots/fonts/</code> and reference them with a
            relative path in <code>Framefile.json</code>. Variable fonts are
            supported. If you reference a font that does not exist, frameit
            silently falls back to a default sans-serif and the result will look
            wrong without warning.
          </p>

          <h2>6. deliver — Uploading to App Store Connect</h2>
          <p>
            <code>deliver</code> walks the screenshots folder, matches each PNG
            to an App Store Connect display family, then talks to the App Store
            Connect API to replace the screenshot set on the currently editable
            version. With API key auth and a focused{" "}
            <code>Deliverfile</code>, the upload step is one command.
          </p>

          <h3>Folder layout</h3>
          <p>
            <code>deliver</code> expects a flat per-locale layout — no device
            subfolders. Display family is detected from the image resolution
            (and, when ambiguous, from the device prefix in the filename that{" "}
            <code>snapshot</code> already adds):
          </p>
          <CodeBlock html={blocks.folderLayout} />

          <h3>Deliverfile</h3>
          <CodeBlock html={blocks.deliverfile} />
          <p>The flags that matter most:</p>
          <ul>
            <li>
              <strong><code>skip_binary_upload</code></strong> — without this,{" "}
              <code>deliver</code> looks for an IPA and refuses to run if none
              is present.
            </li>
            <li>
              <strong><code>skip_metadata</code></strong> — set to{" "}
              <code>true</code> if you only want screenshots and have no{" "}
              <code>fastlane/metadata/</code> directory. Set to <code>false</code>{" "}
              to ship localized titles, descriptions, keywords, and promotional
              text in the same call.
            </li>
            <li>
              <strong><code>force(true)</code></strong> — skips the "Are you
              sure?" prompt that <code>deliver</code> shows before pushing.
              Required on CI.
            </li>
            <li>
              <strong><code>overwrite_screenshots(true)</code></strong> — wipes
              the existing screenshot set in each display family before
              uploading new shots. Without this, new uploads append to old ones
              up to the 10-screenshot limit, then fail.
            </li>
            <li>
              <strong><code>run_precheck_before_submit(false)</code></strong> —{" "}
              <code>precheck</code> scans metadata for risky terms ("Beta",
              competitor names, censored words). It is great pre-submit but
              wrong for screenshot-only updates.
            </li>
          </ul>

          <h3>Dry-run, then ship</h3>
          <CodeBlock html={blocks.dryRun} />
          <p>
            On the first real upload, <code>deliver</code> prints an HTML
            preview at <code>fastlane/preview.html</code> and waits for
            confirmation unless <code>force(true)</code> is set. Always open the
            preview the first time on a new device family — that is when
            display-family mismatches show up.
          </p>

          <h2>7. The Full Fastfile</h2>
          <p>
            One file with four lanes covering capture, frame, capture+frame, and
            full ship. Local development uses one lane; CI uses another.
          </p>
          <CodeBlock html={blocks.fastfile} />
          <p>
            <code>capture_ios_screenshots</code>, <code>frame_screenshots</code>,
            and <code>upload_to_app_store</code> are the canonical names of{" "}
            <code>snapshot</code>, <code>frameit</code>, and{" "}
            <code>deliver</code>. The short names still work but the long ones
            are clearer and don't shadow Ruby keywords.
          </p>

          <h2>8. CI on GitHub Actions</h2>
          <p>
            Screenshots are slow (15 minutes is typical for 5 locales × 3
            devices) but they parallelize well across simulators. A single{" "}
            <code>macos-26</code> runner with concurrent simulators is usually
            enough.
          </p>
          <CodeBlock html={blocks.ghaWorkflow} />
          <p>Things that make CI runs reliable:</p>
          <ul>
            <li>
              <strong>Pin Xcode.</strong> <code>sudo xcode-select -s</code> with
              an explicit path. GitHub-hosted runners ship multiple Xcode
              versions and the default is whichever they decided this month.
            </li>
            <li>
              <strong>Pin the runner image.</strong> Use a versioned image
              like <code>macos-26</code> or <code>macos-15</code>, not{" "}
              <code>macos-latest</code>. A runner upgrade three weeks before
              release is the kind of surprise you do not want.
            </li>
            <li>
              <strong>Cache the Bundler install.</strong>{" "}
              <code>bundler-cache: true</code> in <code>setup-ruby</code> shaves
              a minute or two off every run.
            </li>
            <li>
              <strong>Write the API key from a single secret.</strong> Storing
              <code>key_id</code>, <code>issuer_id</code>, and <code>key</code>{" "}
              as separate secrets is more rotation-friendly but more error-prone.
              One JSON-shaped secret is fine for small teams.
            </li>
            <li>
              <strong>Upload the framed screenshots as an artifact</strong> even
              when the upload step fails. You almost always want to inspect what
              was generated before re-running.
            </li>
          </ul>

          <h2>9. Common Errors and Fixes</h2>

          <h3>"Could not find a device matching..."</h3>
          <p>
            Snapshot's device names must match{" "}
            <code>xcrun simctl list devicetypes</code> exactly. Apple ships a
            new top-of-line device every year and Apple's calendar-based
            versioning means the toolchain rolls forward fast.{" "}
            <code>"iPhone 17 Pro Max"</code> ships with{" "}
            <strong>Xcode 26</strong> (released Fall 2025); on Xcode 16 the
            6.9" device was <code>"iPhone 16 Pro Max"</code>. After every Xcode
            upgrade, re-run <code>xcrun simctl list devicetypes | grep iPhone</code>{" "}
            and update <code>Snapfile</code>.
          </p>

          <h3>"Unable to verify upload" / 401 Unauthorized</h3>
          <p>
            Your JWT expired mid-upload, the API key has been revoked, or its
            role was downgraded. Check that <code>duration</code> in{" "}
            <code>asc_api_key.json</code> is at most <code>1200</code>, then
            re-issue the key.
          </p>

          <h3>"App Store Connect is locked"</h3>
          <p>
            The version you are uploading to is in <em>In Review</em> or{" "}
            <em>Pending Developer Release</em>. Screenshots are read-only in
            those states. Create a new version (the "Prepare for Submission"
            slot) and re-run.
          </p>

          <h3>Screenshots end up in the wrong display family</h3>
          <p>
            <code>deliver</code> matches by image resolution. If you exported a
            6.9" iPhone screenshot at 1320 × 2868 it will land in the 6.9" slot;
            if you scaled it to 1284 × 2778 it lands in the legacy 6.5" slot. If
            both display families exist on your version, supply the device
            family in the filename — that is the prefix <code>snapshot</code>{" "}
            already produces. Manual exports often skip it.
          </p>

          <h3>"Screenshot has alpha channel" / unexpected transparency</h3>
          <p>
            App Store Connect has historically rejected PNGs with transparency,
            and <code>deliver</code> still warns when it sees an alpha channel.
            Apple's current screenshot specification page no longer states the
            rule explicitly, but flattening alpha is the safe move. Run the
            file through <code>sips -s format png</code> with a PNG color
            profile, or re-export without an alpha channel.{" "}
            <code>frameit</code>'s composited output is always opaque; raw{" "}
            <code>simctl io ... screenshot</code> output can include alpha if
            your root view is not opaque.
          </p>

          <h3>"Locale ru-RU does not exist for this app"</h3>
          <p>
            <code>deliver</code> only uploads to App Store Connect locales that
            already exist on the version. Add the locale in App Store Connect
            first (or set <code>force_create_app(true)</code> +
            metadata in <code>deliver</code>), then re-run.
          </p>

          <h3>Concurrent simulators eat all the RAM</h3>
          <p>
            Each iPhone 17 Pro Max simulator booted with the keyboard up costs
            ~2.5 GB. On a 16 GB MacBook running three at once will swap and
            crash mid-test. Set <code>concurrent_simulators(false)</code>{" "}
            locally; let CI run them in parallel on a beefier runner.
          </p>

          <h2>10. When fastlane Is Overkill</h2>
          <p>
            fastlane's screenshot pipeline is great when:
          </p>
          <ul>
            <li>
              You already have a UI test target and your team is comfortable
              maintaining XCUITest fixtures.
            </li>
            <li>
              You want screenshots to be a CI artifact, regenerated on every
              release.
            </li>
            <li>
              You localize and want the layout to be defined once in code, not
              redrawn per language.
            </li>
          </ul>
          <p>It is the wrong choice when:</p>
          <ul>
            <li>
              You want full art direction over each screenshot — typography,
              composition, decorative elements. <code>frameit</code> is a
              templating engine, not a design tool.
            </li>
            <li>
              You need to ship a{" "}
              <a href="/blog/screenshots-that-convert">
                marketing-quality screenshot
              </a>{" "}
              of a feature that does not yet exist in the app, or that exists
              only behind a feature flag your test target cannot reach.
            </li>
            <li>
              You are a solo dev who would rather design once in a Mac app and
              click <strong>Upload</strong>. The Ruby toolchain plus XCUITest
              plus Xcode-version pinning is real maintenance overhead.
            </li>
          </ul>
          <p>
            For the design-first workflow,{" "}
            <a href="/">Screenshot Bro</a> covers the same ground —{" "}
            <a href="/blog/localize-app-store-screenshots">localized layouts</a>,
            device frames,{" "}
            <a href="/blog/upload-screenshots-to-app-store-connect">
              one-click App Store Connect upload
            </a>{" "}
            with the same API key — without the XCUITest plumbing.
          </p>

          <h2>TL;DR Cheat Sheet</h2>
          <CodeBlock html={blocks.cheatSheet} />
          <p>
            That is the full pipeline. Two commands at install time, one
            command per release. The complexity hides in the configuration
            files above — and once they are written, they barely change.
          </p>
          <p>
            Wondering whether to set this up at all, or to use a Mac app
            for the same job? See{" "}
            <a href="/vs/fastlane-snapshot">
              Fastlane snapshot vs Screenshot Bro
            </a>{" "}
            for the side-by-side and the "use both" workflow.
          </p>
        </article>

        <BlogCTA message="Want the same upload flow without the XCUITest pipeline? Design and ship App Store screenshots from one Mac app." />
        <RelatedPosts currentSlug={SLUG} />
      </div>
    </ContentLayout>
  );
}
