import type { Route } from "./+types/blog.make-and-ship-screenshots-with-fastlane";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { CodeBlock } from "~/components/CodeBlock";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { highlight } from "~/lib/highlight";
import { data, useLoaderData } from "react-router";
import { isLocaleCode, type LocaleCode } from "~/config/localization";

const SLUG = "make-and-ship-screenshots-with-fastlane";

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }

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
    locale: (locale || "en") as LocaleCode,
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

export const meta: Route.MetaFunction = ({ matches, params }) =>
  buildBlogPostMeta(SLUG, matches, (params.locale || "en") as LocaleCode);

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { blocks, locale } = loaderData;
  return (
    <ContentLayout locale={locale}>
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={SLUG} locale={locale} />
          {renderContent(locale, blocks)}
        </article>
        <BlogCTA message={getCTAMessage(locale)} />
        <RelatedPosts currentSlug={SLUG} locale={locale} />
      </div>
    </ContentLayout>
  );
}

function getCTAMessage(locale: LocaleCode): string {
  switch (locale) {
    case "es":
      return "¿Quieres el mismo flujo de subida sin la pipeline de XCUITest? Diseña y envía capturas de la App Store desde una sola aplicación para Mac y iPad.";
    case "zh":
      return "想要无需 XCUITest 流水线的相同上传流程？只需一款 Mac 和 iPad 应用即可设计并交付 App Store 截图。";
    case "hi":
      return "क्या आप XCUITest पाइपलाइन के बिना समान अपलोड फ्लो चाहते हैं? एक ही Mac और iPad ऐप से App Store screenshots डिज़ाइन करें और भेजें।";
    case "fr":
      return "Vous voulez le même flux d'envoi sans le pipeline XCUITest ? Concevez et livrez vos captures App Store depuis une seule application Mac et iPad.";
    case "ar":
      return "هل تريد نفس تدفق الرفع بدون خط أنابيب XCUITest؟ صمم واشحن لقطات شاشة App Store من تطبيق واحد على Mac و iPad.";
    default:
      return "Want the same upload flow without the XCUITest pipeline? Design and ship App Store screenshots from one Mac and iPad app.";
  }
}

function renderContent(locale: LocaleCode, blocks: any) {
  switch (locale) {
    case "es":
      return <ContentEs blocks={blocks} />;
    case "zh":
      return <ContentZh blocks={blocks} />;
    case "hi":
      return <ContentHi blocks={blocks} />;
    case "fr":
      return <ContentFr blocks={blocks} />;
    case "ar":
      return <ContentAr blocks={blocks} />;
    default:
      return <ContentEn blocks={blocks} />;
  }
}

function ContentEn({ blocks }: { blocks: any }) {
  return (
    <>
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
          <a href="/blog/app-store-screenshot-sizes">iPhone 6.9&quot;, iPad 13&quot;</a>),
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
          <strong>Generate API Key</strong> (you only do this once per
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
          name. Use this for color themes per row.
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
      <h3>&quot;Could not find a device matching...&quot;</h3>
      <p>
        Snapshot's device names must match{" "}
        <code>xcrun simctl list devicetypes</code> exactly. Apple ships a
        new top-of-line device every year and Apple's calendar-based
        versioning means the toolchain rolls forward fast.{" "}
        <code>&quot;iPhone 17 Pro Max&quot;</code> ships with{" "}
        <strong>Xcode 26</strong> (released Fall 2025); on Xcode 16 the
        6.9&quot; device was <code>&quot;iPhone 16 Pro Max&quot;</code>. After every Xcode
        upgrade, re-run <code>xcrun simctl list devicetypes | grep iPhone</code>{" "}
        and update <code>Snapfile</code>.
      </p>

      <h3>&quot;Unable to verify upload&quot; / 401 Unauthorized</h3>
      <p>
        Your JWT expired mid-upload, the API key has been revoked, or its
        role was downgraded. Check that <code>duration</code> in{" "}
        <code>asc_api_key.json</code> is at most <code>1200</code>, then
        re-issue the key.
      </p>

      <h3>&quot;App Store Connect is locked&quot;</h3>
      <p>
        The version you are uploading to is in <em>In Review</em> or{" "}
        <em>Pending Developer Release</em>. Screenshots are read-only in
        those states. Create a new version (the "Prepare for Submission"
        slot) and re-run.
      </p>

      <h3>Screenshots end up in the wrong display family</h3>
      <p>
        <code>deliver</code> matches by image resolution. If you exported a
        6.9&quot; iPhone screenshot at 1320 × 2868 it will land in the 6.9&quot; slot;
        if you scaled it to 1284 × 2778 it lands in the legacy 6.5&quot; slot. If
        both display families exist on your version, supply the device
        family in the filename — that is the prefix <code>snapshot</code>{" "}
        already produces. Manual exports often skip it.
      </p>

      <h3>&quot;Screenshot has alpha channel&quot; / unexpected transparency</h3>
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

      <h3>&quot;Locale ru-RU does not exist for this app&quot;</h3>
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
          You are a solo dev who would rather design once in a Mac or iPad app
          and click <strong>Upload</strong>. The Ruby toolchain plus XCUITest
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
        Wondering whether to set this up at all, or to use a Mac/iPad app for
        the same job? See{" "}
        <a href="/vs/fastlane-snapshot">
          Fastlane snapshot vs Screenshot Bro
        </a>{" "}
        for the side-by-side and the "use both" workflow.
      </p>
    </>
  );
}

function ContentEs({ blocks }: { blocks: any }) {
  return (
    <>
      <p>
        <a
          href="https://fastlane.tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          fastlane
        </a>{" "}
        es una suite de herramientas de Ruby para automatizar las partes aburridas del lanzamiento de aplicaciones iOS y Android. Sus tres acciones relacionadas con capturas de pantalla —{" "}
        <code>snapshot</code>, <code>frameit</code> y <code>deliver</code> — cubren todo el pipeline: ejecutan tu aplicación dentro de un XCUITest para capturar imágenes sin procesar, las envuelven en marcos de dispositivos con textos de marketing y suben el resultado a App Store Connect. Esta guía recorre todo el pipeline de extremo a extremo con los archivos de configuración, las definiciones de carriles (lanes) y el flujo de trabajo de CI que necesitas para ejecutarlo.
      </p>

      <p>
        Al final tendrás: una configuración fijada con Ruby Bundler, una clave de API de App Store Connect, un <code>Snapfile</code> y un <code>SnapshotHelper.swift</code> en funcionamiento, un <code>Framefile.json</code> con palabras clave y títulos por captura de pantalla, un <code>Deliverfile</code> ajustado para subidas exclusivas de capturas de pantalla, un <code>Fastfile</code> de cuatro carriles (lanes) y un flujo de trabajo de GitHub Actions que ejecuta todo en un ejecutor <code>macos-26</code>.
      </p>

      <h2>1. Requisitos previos y modelo mental</h2>
      <p>
        Antes de instalar Ruby, ten clara la idea conceptual. El pipeline de capturas de pantalla consta de tres etapas independientes, cada una propiedad de una acción de fastlane distinta:
      </p>
      <ol>
        <li>
          <strong>Capturar</strong> — un XCUITest se ejecuta en un simulador y llama a <code>snapshot(&quot;01-Home&quot;)</code> en los momentos que deseas registrar. La acción <code>snapshot</code> de fastlane inicia los simuladores correctos, cambia cada uno al idioma (locale) correspondiente, ejecuta la prueba y coloca los archivos PNG resultantes en{" "}
          <code>fastlane/screenshots/&lt;locale&gt;/</code>.
        </li>
        <li>
          <strong>Enmarcar</strong> — <code>frameit</code> lee cada archivo PNG, elige un marco de dispositivo basado en la resolución de la imagen, opcionalmente compone un fondo y un título de marketing, y escribe un archivo <code>_framed.png</code> junto al original.
        </li>
        <li>
          <strong>Subir</strong> — <code>deliver</code> recorre la carpeta de capturas de pantalla, asocia cada imagen con una <em>familia de pantallas</em> de App Store Connect (por ejemplo,{" "}
          <a href="/blog/app-store-screenshot-sizes">iPhone 6.9&quot;, iPad 13&quot;</a>), y reemplaza el conjunto de capturas de pantalla en la versión editable de la App Store mediante la API de App Store Connect.
        </li>
      </ol>
      <p>
        Cada etapa se puede ejecutar de forma independiente. Puedes tomar capturas de pantalla sin subirlas, enmarcar capturas producidas por otra herramienta o subir capturas preparadas previamente sin tener que invocar el simulador.
      </p>

      <h2>2. Instalar fastlane de forma sensata: Bundler</h2>
      <p>
        No uses <code>brew install fastlane</code>. Fija la versión de fastlane por proyecto con{" "}
        <a
          href="https://bundler.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bundler
        </a>{" "}
        para que todas las máquinas que compilan tu proyecto — tu portátil, el de un compañero, el sistema de CI — ejecuten la misma versión. Desde la raíz del proyecto:
      </p>
      <CodeBlock html={blocks.bundlerInstall} />
      <p>
        Haz commit de <code>Gemfile</code> y <code>Gemfile.lock</code>. Añade{" "}
        <code>vendor/bundle</code> a tu <code>.gitignore</code>. Ahora inicializa fastlane en el proyecto:
      </p>
      <CodeBlock html={blocks.fastlaneInit} />
      <p>
        Esto crea un directorio <code>fastlane/</code> con los archivos{" "}
        <code>Fastfile</code> y <code>Appfile</code>. Completa tu identificador de lote (bundle identifier) y el ID de tu equipo en <code>Appfile</code>:
      </p>
      <CodeBlock html={blocks.appfile} />

      <h2>3. La clave de API de App Store Connect</h2>
      <p>
        La autenticación por usuario/contraseña está obsoleta para cuentas nuevas y protegida por doble factor para los demás, lo que la hace inservible en entornos de CI. En su lugar, usa una{" "}
        <a
          href="https://appstoreconnect.apple.com/access/integrations/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          clave de API de App Store Connect
        </a>{" "}
        . En App Store Connect → <strong>Usuarios y acceso</strong> → <strong>Integraciones</strong> → <strong>API de App Store Connect</strong>:
      </p>
      <ol>
        <li>
          <strong>Generar clave de API</strong> (solo se hace una vez por equipo; los archivos <code>.p8</code> perdidos no se pueden volver a descargar).
        </li>
        <li>
          Asígnala el rol de <strong>Gestor de aplicaciones</strong>. <strong>Desarrollador</strong> no es suficiente para subir capturas de pantalla; <strong>Administrador</strong> es más de lo que necesitas.
        </li>
        <li>
          Anota el <strong>ID de clave</strong> (10 caracteres, por ejemplo, <code>ABCD1234EF</code>) y el <strong>ID de emisor</strong> del equipo (UUID en la parte superior de la misma página).
        </li>
        <li>Descarga el archivo <code>AuthKey_ABCD1234EF.p8</code>.</li>
      </ol>
      <p>
        fastlane lee la clave de un archivo JSON. Guárdalo como{" "}
        <code>fastlane/asc_api_key.json</code> (y añade esa ruta a tu <code>.gitignore</code>):
      </p>
      <CodeBlock html={blocks.ascKey} />
      <p>
        <code>duration</code> es el tiempo de vida de cada JWT generado en segundos; el máximo que acepta Apple es <code>1200</code> (20 minutos). El campo <code>key</code> contiene todo el contenido del archivo <code>.p8</code>, incluyendo las líneas <code>BEGIN/END PRIVATE KEY</code>, utilizando <code>\n</code> literal para los saltos de línea.
      </p>
      <p>
        En CI, nunca subas el JSON al repositorio. Almacena el contenido del JSON como un secreto único (por ejemplo, <code>ASC_API_KEY_JSON</code>) y escribe el archivo en tiempo de ejecución; abajo encontrarás un ejemplo en la sección de GitHub Actions.
      </p>

      <h2>4. snapshot — Capturar capturas de pantalla en XCUITest</h2>
      <p>
        <code>snapshot</code> funciona inyectando un pequeño asistente (helper) de Swift en tu target de pruebas de interfaz de usuario (UI). El asistente se integra en el entorno de ejecución de las pruebas de modo que cada llamada a <code>snapshot(&quot;nombre&quot;)</code> desde tu prueba tome una captura de la pantalla del simulador, le asigne un nombre y la escriba en una ubicación del disco que fastlane ya sabe cómo encontrar.
      </p>

      <h3>Generar el asistente</h3>
      <CodeBlock html={blocks.snapshotInit} />
      <p>
        Esto crea <code>fastlane/Snapfile</code> y{" "}
        <code>fastlane/SnapshotHelper.swift</code>. Añade{" "}
        <code>SnapshotHelper.swift</code> a tu <strong>target de pruebas de interfaz de usuario</strong> en Xcode (arrástralo hacia adentro, asegúrate de que &quot;MyAppUITests&quot; sea el único target seleccionado; nunca lo incluyas en el binario de la aplicación).
      </p>

      <h3>Snapfile</h3>
      <p>
        <code>Snapfile</code> indica a <code>snapshot</code> qué dispositivos arrancar, en qué idiomas ejecutar cada prueba y qué esquema de pruebas de interfaz de usuario invocar:
      </p>
      <CodeBlock html={blocks.snapfile} />
      <p>Puntos destacados:</p>
      <ul>
        <li>
          <strong><code>devices</code></strong> — los nombres deben coincidir exactamente con lo que imprime <code>xcrun simctl list devices</code>. Apple cambia los nombres cada año (por ejemplo, &quot;iPhone 17 Pro Max&quot; reemplazó a &quot;iPhone 16 Pro Max&quot;). Si el nombre de un dispositivo es incorrecto, snapshot lo omitirá silenciosamente.
        </li>
        <li>
          <strong><code>languages</code></strong> — pasa un código de región como <code>&quot;en-US&quot;</code> o un código de idioma básico como <code>&quot;ja&quot;</code>. Cada entrada genera una carpeta dentro de <code>output_directory</code>.
        </li>
        <li>
          <strong><code>override_status_bar(true)</code></strong> — utiliza <code>simctl status_bar override</code> para mostrar las 9:41, batería completa y señal completa de Wi-Fi/red celular en cada captura. Apple no lo exige estrictamente, pero la mayoría de los revisores lo esperan.
        </li>
        <li>
          <strong><code>concurrent_simulators</code></strong> — ejecuta múltiples simuladores en paralelo. Reduce el tiempo de ejecución aproximadamente por el número de dispositivos, pero cada simulador consume unos 3 GB de RAM, por lo que es exigente en entornos de CI con pocos recursos.
        </li>
        <li>
          <strong><code>clear_previous_screenshots</code></strong> — elimina <code>fastlane/screenshots/&lt;locale&gt;/</code> al inicio de cada ejecución. Sin esto, las capturas obsoletas de pruebas eliminadas se acumularán indefinidamente.
        </li>
      </ul>

      <h3>Conectar snapshot en tu XCUITest</h3>
      <p>
        <code>SnapshotHelper</code> expone dos funciones independientes: <code>setupSnapshot(_:)</code> (llámala una vez por prueba) y <code>snapshot(_:)</code> (llámala donde quieras registrar un fotograma).
      </p>
      <CodeBlock html={blocks.snapshotHelper} />
      <p>Algunas notas prácticas:</p>
      <ul>
        <li>
          Pasa <code>-UITests</code> como argumento de lanzamiento y compruébalo en tu aplicación para desactivar la analítica, cargar datos semilla deterministas, saltarte el onboarding o simular respuestas de red. Los revisores (y tu yo del futuro) te lo agradecerán.
        </li>
        <li>
          <code>snapshot</code> se bloquea hasta que finaliza la captura de pantalla, por lo que puedes continuar inmediatamente con la siguiente interacción.
        </li>
        <li>
          Si la interfaz tiene animaciones, añade <code>UIView.setAnimationsEnabled(false)</code> controlado por un argumento de lanzamiento. Capturar en medio de una animación genera imágenes borrosas.
        </li>
        <li>
          Nombra las capturas de pantalla con un prefijo numérico (<code>01-</code>, <code>02-</code>) para que el orden del nombre de archivo coincida con el orden de visualización de App Store Connect. <code>deliver</code> las sube en orden léxico.
        </li>
      </ul>

      <h3>Ejecutar snapshot</h3>
      <CodeBlock html={blocks.snapshotRun} />
      <p>
        El resultado se almacena en <code>fastlane/screenshots/&lt;locale&gt;/iPhone 17 Pro Max-01-Home.png</code> y similares. Snapshot también genera <code>screenshots.html</code>; ábrelo para revisar todos los idiomas y dispositivos en una sola página.
      </p>

      <h2>5. frameit — Añadir marcos de dispositivos y títulos</h2>
      <p>
        Las capturas de pantalla sin procesar son solo vistas del dispositivo. <code>frameit</code> las envuelve en marcos físicos de dispositivos, opcionalmente añade un fondo, un título de marketing y una línea de &quot;palabra clave&quot; más pequeña por encima.
      </p>
      <CodeBlock html={blocks.frameitDownload} />
      <p>
        Para cada archivo <code>foo.png</code> en la estructura de capturas, <code>frameit</code> escribe un archivo <code>foo_framed.png</code> junto a él. Los originales se conservan; <code>deliver</code> selecciona automáticamente la versión enmarcada si está disponible (y recurre a la versión sin procesar si no lo está).
      </p>

      <h3>Framefile.json</h3>
      <p>
        Los marcos por defecto parecen pruebas de desarrollo: marco negro, sin fondo y sin texto. Configúralos con <code>fastlane/screenshots/Framefile.json</code>:
      </p>
      <CodeBlock html={blocks.framefile} />
      <p>Campos clave:</p>
      <ul>
        <li>
          <strong><code>background</code></strong> — una imagen PNG sobre la que se compone el dispositivo enmarcado. Debe ser más ancha que tu captura de pantalla más grande. <code>frameit</code> centra el dispositivo verticalmente por defecto; <code>title_below_image</code> y <code>show_complete_frame</code> controlan cómo interactúan el texto y el marco.
        </li>
        <li>
          <strong><code>data[]</code></strong> — anulaciones específicas por captura de pantalla filtradas por una subcadena del nombre de archivo de la captura. La segunda entrada de arriba solo se aplica a los archivos que contienen &quot;Settings&quot; en el nombre. Úsalo para tematizar con colores por fila.
        </li>
        <li>
          <strong><code>frame</code></strong> — anula el color del marco del dispositivo para los archivos que coincidan. Los valores que <code>frameit</code> reconoce en <code>Framefile.json</code> son <code>BLACK</code>, <code>WHITE</code>, <code>GOLD</code> y <code>ROSE_GOLD</code>. El arte del marco en sí se descarga de los archivos Sketch de recursos de marketing de Apple a través de <code>fastlane frameit download_frames</code>.
        </li>
      </ul>

      <h3>Archivos title.strings y keyword.strings por idioma</h3>
      <p>
        Los textos de marketing provienen de dos archivos de cadenas paralelos por idioma: <code>title.strings</code> para el título principal y <code>keyword.strings</code> para la etiqueta más pequeña arriba. Las claves son los nombres de archivo de las capturas de pantalla sin extensión ni prefijo de dispositivo:
      </p>
      <CodeBlock html={blocks.titleStrings} />
      <CodeBlock html={blocks.keywordStrings} />
      <p>
        Las traducciones van en <code>fastlane/screenshots/de-DE/title.strings</code> y <code>fastlane/screenshots/de-DE/keyword.strings</code>, <code>fastlane/screenshots/ja/title.strings</code>, etc. Usa <code>\n</code> para saltos de línea. Los idiomas que falten usarán la captura de pantalla sin traducir (sin título renderizado); no hay fallback automático al inglés.
      </p>

      <h3>Fuentes</h3>
      <p>
        Coloca archivos TTF u OTF en <code>fastlane/screenshots/fonts/</code> y haz referencia a ellos con una ruta relativa en <code>Framefile.json</code>. Se admiten fuentes variables. Si haces referencia a una fuente que no existe, frameit volverá silenciosamente a una tipografía sans-serif por defecto y el resultado se verá mal sin previo aviso.
      </p>

      <h2>6. deliver — Subir a App Store Connect</h2>
      <p>
        <code>deliver</code> recorre la carpeta de capturas de pantalla, asocia cada archivo PNG con una familia de pantallas de App Store Connect, y luego se comunica con la API de App Store Connect para reemplazar el conjunto de capturas en la versión actualmente editable. Con autenticación por clave de API y un <code>Deliverfile</code> bien enfocado, el paso de subida se reduce a un solo comando.
      </p>

      <h3>Estructura de carpetas</h3>
      <p>
        <code>deliver</code> espera una estructura plana por idioma, sin subcarpetas de dispositivos. La familia de pantallas se detecta a partir de la resolución de la imagen (y, en caso de ambigüedad, del prefijo de dispositivo en el nombre de archivo que <code>snapshot</code> ya añade):
      </p>
      <CodeBlock html={blocks.folderLayout} />

      <h3>Deliverfile</h3>
      <CodeBlock html={blocks.deliverfile} />
      <p>Los parámetros que más importan:</p>
      <ul>
        <li>
          <strong><code>skip_binary_upload</code></strong> — sin esto, <code>deliver</code> buscará un archivo IPA y se negará a ejecutarse si no está presente.
        </li>
        <li>
          <strong><code>skip_metadata</code></strong> — establécelo en <code>true</code> si solo deseas subir capturas y no tienes un directorio <code>fastlane/metadata/</code>. Establécelo en <code>false</code> para subir títulos localizados, descripciones, palabras clave y texto promocional en la misma llamada.
        </li>
        <li>
          <strong><code>force(true)</code></strong> — omite la pregunta de confirmación &quot;¿Estás seguro?&quot; que <code>deliver</code> muestra antes de subir. Requerido en CI.
        </li>
        <li>
          <strong><code>overwrite_screenshots(true)</code></strong> — borra el conjunto de capturas existente en cada familia de pantallas antes de subir las nuevas. Sin esto, las nuevas subidas se añadirán a las antiguas hasta el límite de 10 capturas, y luego fallará.
        </li>
        <li>
          <strong><code>run_precheck_before_submit(false)</code></strong> — <code>precheck</code> analiza los metadatos en busca de términos de riesgo (&quot;Beta&quot;, nombres de competidores, palabras censuradas). Es ideal antes del envío, pero incorrecto para actualizaciones exclusivas de capturas de pantalla.
        </li>
      </ul>

      <h3>Simulación y luego envío</h3>
      <CodeBlock html={blocks.dryRun} />
      <p>
        En la primera subida real, <code>deliver</code> imprime una vista previa HTML en <code>fastlane/preview.html</code> y espera confirmación a menos que <code>force(true)</code> esté activado. Abre siempre la vista previa la primera vez en una nueva familia de dispositivos; ahí es cuando se hacen evidentes las discrepancias de familias de pantallas.
      </p>

      <h2>7. El archivo Fastfile completo</h2>
      <p>
        Un archivo con cuatro carriles (lanes) que cubren capturar, enmarcar, capturar+enmarcar y envío completo. El desarrollo local usa un carril y el sistema de CI usa otro.
      </p>
      <CodeBlock html={blocks.fastfile} />
      <p>
        <code>capture_ios_screenshots</code>, <code>frame_screenshots</code> y <code>upload_to_app_store</code> son los nombres canónicos de <code>snapshot</code>, <code>frameit</code> y <code>deliver</code>. Los nombres cortos siguen funcionando, pero los largos son más claros y no chocan con palabras clave de Ruby.
      </p>

      <h2>8. CI en GitHub Actions</h2>
      <p>
        Las capturas de pantalla son lentas (15 minutos es lo habitual para 5 idiomas × 3 dispositivos) pero se pueden paralelizar bien entre simuladores. Un único ejecutor <code>macos-26</code> con simuladores concurrentes suele ser suficiente.
      </p>
      <CodeBlock html={blocks.ghaWorkflow} />
      <p>Cosas que hacen que las ejecuciones en CI sean fiables:</p>
      <ul>
        <li>
          <strong>Fijar la versión de Xcode.</strong> Usa <code>sudo xcode-select -s</code> con una ruta explícita. Los ejecutores alojados en GitHub incluyen múltiples versiones de Xcode y la predeterminada es la que hayan decidido para ese mes.
        </li>
        <li>
          <strong>Fijar la imagen del ejecutor.</strong> Usa una imagen con versión como <code>macos-26</code> o <code>macos-15</code>, no <code>macos-latest</code>. Una actualización del ejecutor tres semanas antes del lanzamiento es el tipo de sorpresa que quieres evitar.
        </li>
        <li>
          <strong>Caché de la instalación de Bundler.</strong> <code>bundler-cache: true</code> en <code>setup-ruby</code> ahorra un minuto o dos en cada ejecución.
        </li>
        <li>
          <strong>Escribir la clave de API desde un único secreto.</strong> Almacenar <code>key_id</code>, <code>issuer_id</code> y <code>key</code> como secretos separados es más cómodo para la rotación pero más propenso a errores. Un solo secreto estructurado como JSON está bien para equipos pequeños.
        </li>
        <li>
          <strong>Subir las capturas enmarcadas como artefacto</strong> incluso si el paso de subida falla. Casi siempre querrás inspeccionar lo que se generó antes de volver a ejecutar.
        </li>
      </ul>

      <h2>9. Errores comunes y soluciones</h2>
      <h3>&quot;Could not find a device matching...&quot;</h3>
      <p>
        Los nombres de dispositivos de Snapshot deben coincidir exactamente con <code>xcrun simctl list devicetypes</code>. Apple lanza un dispositivo nuevo cada año y el control de versiones basado en el calendario de Apple hace que la suite de herramientas avance rápido. <code>&quot;iPhone 17 Pro Max&quot;</code> se lanza con <strong>Xcode 26</strong> (finales de 2025); en Xcode 16 el dispositivo de 6.9&quot; era <code>&quot;iPhone 16 Pro Max&quot;</code>. Después de cada actualización de Xcode, vuelve a ejecutar <code>xcrun simctl list devicetypes | grep iPhone</code> y actualiza <code>Snapfile</code>.
      </p>

      <h3>&quot;Unable to verify upload&quot; / 401 Unauthorized</h3>
      <p>
        Tu JWT expiró a mitad de la subida, la clave de API ha sido revocada o su rol fue degradado. Comprueba que <code>duration</code> en <code>asc_api_key.json</code> sea como máximo <code>1200</code> y luego vuelve a generar la clave.
      </p>

      <h3>&quot;App Store Connect is locked&quot;</h3>
      <p>
        La versión a la que estás subiendo está en estado <em>En revisión</em> o <em>Pendiente de publicación por el desarrollador</em>. Las capturas de pantalla son de solo lectura en estos estados. Crea una nueva versión (la sección &quot;Preparar para el envío&quot;) y vuelve a ejecutar.
      </p>

      <h3>Las capturas de pantalla terminan en la familia de pantallas incorrecta</h3>
      <p>
        <code>deliver</code> asocia las imágenes por su resolución. Si exportaste una captura de iPhone de 6.9&quot; a 1320 × 2868, caerá en el slot de 6.9&quot;; si la escalaste a 1284 × 2778, caerá en el slot heredado de 6.5&quot;. Si ambas familias de pantallas existen en tu versión, proporciona la familia de dispositivos en el nombre del archivo (este es el prefijo que <code>snapshot</code> ya genera). Las exportaciones manuales a menudo lo omiten.
      </p>

      <h3>&quot;Screenshot has alpha channel&quot; / transparencia inesperada</h3>
      <p>
        App Store Connect ha rechazado históricamente los archivos PNG con transparencia, y <code>deliver</code> sigue advirtiendo cuando detecta un canal alfa. La página actual de especificaciones de capturas de Apple ya no menciona esta regla explícitamente, pero aplanar el canal alfa es la opción más segura. Procesa el archivo con <code>sips -s format png</code> con un perfil de color PNG, o vuelve a exportarlo sin canal alfa. El resultado compuesto de <code>frameit</code> siempre es opaco; la salida de <code>simctl io ... screenshot</code> sin procesar puede incluir alfa si tu vista raíz no es opaca.
      </p>

      <h3>&quot;Locale ru-RU does not exist for this app&quot;</h3>
      <p>
        <code>deliver</code> solo sube a los idiomas de App Store Connect que ya existen en la versión. Añade el idioma en App Store Connect primero (o define <code>force_create_app(true)</code> + metadatos en <code>deliver</code>) y luego vuelve a ejecutar.
      </p>

      <h3>Los simuladores concurrentes consumen toda la RAM</h3>
      <p>
        Cada simulador de iPhone 17 Pro Max iniciado con el teclado desplegado consume unos 2.5 GB. En un MacBook de 16 GB, ejecutar tres a la vez provocará uso de memoria swap y cuelgues a mitad de la prueba. Establece <code>concurrent_simulators(false)</code> localmente y deja que CI los ejecute en paralelo en un ejecutor más potente.
      </p>

      <h2>10. Cuándo fastlane es demasiado</h2>
      <p>
        El pipeline de capturas de pantalla de fastlane es excelente cuando:
      </p>
      <ul>
        <li>
          Ya tienes un target de pruebas de UI y tu equipo se siente cómodo manteniendo fixtures de XCUITest.
        </li>
        <li>
          Quieres que las capturas de pantalla sean un artefacto de CI, regenerado con cada versión.
        </li>
        <li>
          Localizas tu app y quieres que el diseño se defina una vez en el código, sin tener que rediseñarlo por idioma.
        </li>
      </ul>
      <p>Es la opción incorrecta cuando:</p>
      <ul>
        <li>
          Quieres una dirección de arte completa en cada captura (tipografía, composición, elementos decorativos). <code>frameit</code> es un motor de plantillas, no una herramienta de diseño.
        </li>
        <li>
          Necesitas enviar una <a href="/blog/screenshots-that-convert">captura de pantalla con calidad de marketing</a> de una función que aún no existe en la aplicación, o que solo está detrás de un feature flag al que tu target de pruebas no puede acceder.
        </li>
        <li>
          Eres un desarrollador independiente que prefiere diseñar una vez en una aplicación de Mac y hacer clic en <strong>Subir</strong>. La suite de herramientas de Ruby más XCUITest más la fijación de versiones de Xcode representa una sobrecarga de mantenimiento real.
        </li>
      </ul>
      <p>
        Para un flujo de trabajo centrado en el diseño, <a href="/">Screenshot Bro</a> cubre el mismo terreno — <a href="/blog/localize-app-store-screenshots">diseños localizados</a>, marcos de dispositivos y <a href="/blog/upload-screenshots-to-app-store-connect">subida a App Store Connect con un solo clic</a> con la misma clave de API — sin la complejidad de XCUITest.
      </p>

      <h2>Resumen rápido (TL;DR)</h2>
      <CodeBlock html={blocks.cheatSheet} />
      <p>
        Ese es todo el pipeline. Dos comandos al momento de instalar, un comando por lanzamiento. La complejidad reside en los archivos de configuración anteriores, y una vez escritos, apenas cambian.
      </p>
      <p>
        ¿Te preguntas si vale la pena configurar esto o si es mejor usar una aplicación de Mac para el mismo trabajo? Consulta <a href="/vs/fastlane-snapshot">Fastlane snapshot frente a Screenshot Bro</a> para ver la comparación detallada y conocer el flujo de trabajo combinado.
      </p>
    </>
  );
}

function ContentZh({ blocks }: { blocks: any }) {
  return (
    <>
      <p>
        <a
          href="https://fastlane.tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          fastlane
        </a>{" "}
        是一个用于自动执行 iOS 和 Android 应用发布中繁琐环节的 Ruby 工具链。它的三个与截图相关的操作 ——{" "}
        <code>snapshot</code>、<code>frameit</code> 和 <code>deliver</code> —— 覆盖了完整的流水线：在 XCUITest 中驱动您的应用以捕获原始图像，将其包裹在带有营销文案的设备框架中，并将结果推送到 App Store Connect。本指南将通过您运行它配置所需的文件、车道（lane）定义和 CI 工作流，端到端地梳理该流水线。
      </p>

      <p>
        在结束时，您将拥有：一个使用 Ruby Bundler 锁定版本的设置、一个 App Store Connect API 密钥、一个正常工作的 <code>Snapfile</code> +{" "}
        <code>SnapshotHelper.swift</code>、一个带有每张截图关键字和标题的 <code>Framefile.json</code>、一个专门针对仅上传截图进行调整的 <code>Deliverfile</code>、一个包含四个车道的 <code>Fastfile</code>，以及一个在 <code>macos-26</code> 运行器上运行整个流程的 GitHub Actions 工作流。
      </p>

      <h2>1. 前提条件与思维模型</h2>
      <p>
        在安装 any Ruby 之前，先理清概念。截图流水线包含三个独立的阶段，每个阶段由不同的 fastlane 操作负责：
      </p>
      <ol>
        <li>
          <strong>捕获</strong> —— XCUITest 在模拟器上运行，并在您希望记录的瞬间调用 <code>snapshot(&quot;01-Home&quot;)</code>。fastlane 的 <code>snapshot</code> 操作会启动正确的模拟器，将每个模拟器切换到正确的语言环境（locale），运行测试，并将生成的 PNG 提取到{" "}
          <code>fastlane/screenshots/&lt;locale&gt;/</code> 中。
        </li>
        <li>
          <strong>框架化</strong> —— <code>frameit</code> 读取每个 PNG，根据图像分辨率选择设备框架，可选地合成背景和营销标题，并在原始图像旁写入一个 <code>_framed.png</code>。
        </li>
        <li>
          <strong>上传</strong> —— <code>deliver</code> 遍历截图文件夹，将每张图像与 App Store Connect <em>显示类型</em>（例如{" "}
          <a href="/blog/app-store-screenshot-sizes">iPhone 6.9&quot;、iPad 13&quot;</a>），并通过 App Store Connect API 替换可编辑 App Store 版本上的截图集。
        </li>
      </ol>
      <p>
        每个阶段都是独立可运行的。您可以只截取屏幕截图而不上传它们，也可以为其他工具生成的截图添加框架，或者直接上传预先制作好的截图，而完全无需调用模拟器。
      </p>

      <h2>2. 推荐的 fastlane 安装方式：Bundler</h2>
      <p>
        不要使用 <code>brew install fastlane</code>。建议在项目中使用{" "}
        <a
          href="https://bundler.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bundler
        </a>{" "}
        锁定项目的 fastlane 版本，以便构建项目的每台机器（您的笔记本电脑、同事的笔记本电脑、CI）都运行相同的版本。在项目根目录下执行：
      </p>
      <CodeBlock html={blocks.bundlerInstall} />
      <p>
        提交 <code>Gemfile</code> 和 <code>Gemfile.lock</code>。将{" "}
        <code>vendor/bundle</code> 添加到您的 <code>.gitignore</code> 中。现在，在项目中初始化 fastlane：
      </p>
      <CodeBlock html={blocks.fastlaneInit} />
      <p>
        这会创建一个包含 <code>Fastfile</code> 和 <code>Appfile</code> 的 <code>fastlane/</code> 目录。在 <code>Appfile</code> 中填写您的 bundle 标识符和团队 ID：
      </p>
      <CodeBlock html={blocks.appfile} />

      <h2>3. App Store Connect API 密钥</h2>
      <p>
        对于新账户，用户名/密码认证已被弃用，并且对所有人都启用了双重认证保护，这使其在 CI 上无法使用。请改用{" "}
        <a
          href="https://appstoreconnect.apple.com/access/integrations/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect API 密钥
        </a>{" "}
        。在 App Store Connect → <strong>用户和访问</strong> → <strong>集成</strong> → <strong>App Store Connect API</strong> 中：
      </p>
      <ol>
        <li>
          <strong>生成 API 密钥</strong>（每个团队只需执行一次；丢失的 <code>.p8</code> 文件无法重新下载）。
        </li>
        <li>
          为其分配 <strong>App 管理</strong> 角色。<strong>开发人员</strong> 权限不足以上传截图，而 <strong>管理</strong> 权限超出了您的实际需求。
        </li>
        <li>
          记录 <strong>密钥 ID</strong>（10 位字符，例如 <code>ABCD1234EF</code>）以及团队的 <strong>签发商 ID</strong>（页面顶部的 UUID）。
        </li>
        <li>下载 <code>AuthKey_ABCD1234EF.p8</code> 文件。</li>
      </ol>
      <p>
        fastlane 会从 JSON 文件中读取密钥。将其保存为 <code>fastlane/asc_api_key.json</code>（并将此路径加入 <code>.gitignore</code> 中）：
      </p>
      <CodeBlock html={blocks.ascKey} />
      <p>
        <code>duration</code> 是每个生成的 JWT 的有效期（秒）；Apple 接受的最大值为 <code>1200</code>（20 分钟）。<code>key</code> 字段是 <code>.p8</code> 文件的完整内容，包括 <code>BEGIN/END PRIVATE KEY</code> 行，换行符使用字面量 <code>\n</code>。
      </p>
      <p>
        在 CI 上，切勿将该 JSON 文件提交到仓库中。应将 JSON 内容存为单个机密变量（例如 <code>ASC_API_KEY_JSON</code>），并在运行时写入文件 —— 下文的 GitHub Actions 部分有相关示例。
      </p>

      <h2>4. snapshot —— 在 XCUITest 中捕获截图</h2>
      <p>
        <code>snapshot</code> 通过在您的 UI 测试目标中注入 un 小型 Swift 辅助工具来工作。该辅助工具会挂载到测试运行时，使测试中对 <code>snapshot(&quot;name&quot;)</code> 的每一次调用都能截取模拟器屏幕、为其命名，并写入 fastlane 已知路径的磁盘位置。
      </p>

      <h3>生成辅助工具</h3>
      <CodeBlock html={blocks.snapshotInit} />
      <p>
        这会创建 <code>fastlane/Snapfile</code> 和{" "}
        <code>fastlane/SnapshotHelper.swift</code>。将{" "}
        <code>SnapshotHelper.swift</code> 添加到 Xcode 中您的 <strong>UI 测试目标</strong>中（将其拖入，确保 &quot;MyAppUITests&quot; 是唯一勾选的目标 —— 切勿将其包含在应用二进制文件中）。
      </p>

      <h3>Snapfile</h3>
      <p>
        <code>Snapfile</code> 告知 <code>snapshot</code> 应启动哪些设备、在哪些语言环境下运行测试，以及调用哪个 UI 测试方案：
      </p>
      <CodeBlock html={blocks.snapfile} />
      <p>亮点：</p>
      <ul>
        <li>
          <strong><code>devices</code></strong> —— 名称必须与 <code>xcrun simctl list devices</code> 输出的名称完全匹配。Apple 每年都会更改名称（例如用 &quot;iPhone 17 Pro Max&quot; 代替 &quot;iPhone 16 Pro Max&quot;）。如果设备名称错误，snapshot 会默默跳过它。
        </li>
        <li>
          <strong><code>languages</code></strong> —— 传递类似于 <code>&quot;en-US&quot;</code> 的区域代码或类似于 <code>&quot;ja&quot;</code> 的基础语言代码。每个条目都会在 <code>output_directory</code> 下生成一个文件夹。
        </li>
        <li>
          <strong><code>override_status_bar(true)</code></strong> —— 使用 <code>simctl status_bar override</code> 使每张截图都显示 9:41、满电量和满信号。Apple 技术上并不强制要求这一点，但大多数审核人员都期望看到这样的截图。
        </li>
        <li>
          <strong><code>concurrent_simulators</code></strong> —— 并行运行多个模拟器。这能大幅缩短测试总耗时（大约缩短至设备数的比例），但每个模拟器大约需要消耗 3 GB 内存，因此对资源不足的 CI 运行器来说压力非常大。
        </li>
        <li>
          <strong><code>clear_previous_screenshots</code></strong> —— 在每次运行开始时删除 <code>fastlane/screenshots/&lt;locale&gt;/</code>。如果不配置此项，已移除测试用例的旧截图将会永久堆积。
        </li>
      </ul>

      <h3>在 XCUITest 中接入 snapshot</h3>
      <p>
        <code>SnapshotHelper</code> 暴露了两个全局函数：<code>setupSnapshot(_:)</code>（每个测试调用一次）和 <code>snapshot(_:)</code>（在您希望记录帧的位置调用）。
      </p>
      <CodeBlock html={blocks.snapshotHelper} />
      <p>几点实用建议：</p>
      <ul>
        <li>
          通过启动参数传入 <code>-UITests</code> 并检查该参数，用以在应用中禁用数据分析、替换为确定性的种子数据、跳过引导页或模拟网络请求。审核人员（以及未来的您自己）会为此感谢您的。
        </li>
        <li>
          <code>snapshot</code> 会阻塞直到屏幕截图完成，因此您可以在此之后立即执行下一次交互。
        </li>
        <li>
          如果界面有动画，可在启动参数后添加 <code>UIView.setAnimationsEnabled(false)</code>。截屏时如果有动画进行，会导致图片模糊。
        </li>
        <li>
          为截图名称加上数字前缀（<code>01-</code>, <code>02-</code>），以便文件名顺序与 App Store Connect 的显示顺序匹配。<code>deliver</code> 会按字母顺序进行上传。
        </li>
      </ul>

      <h3>运行 snapshot</h3>
      <CodeBlock html={blocks.snapshotRun} />
      <p>
        输出结果会保存在 <code>fastlane/screenshots/&lt;locale&gt;/iPhone 17 Pro Max-01-Home.png</code> 等路径下。Snapshot 还会生成一个 <code>screenshots.html</code> 文件，您可以直接打开它，在一个页面中快速预览所有语言和设备下的截图。
      </p>

      <h2>5. frameit —— 添加设备框架与标题</h2>
      <p>
        原始截图只是裸露的设备视口。<code>frameit</code> 会将它们包裹在物理设备框架中，并可选地添加背景、营销标题以及上方更小的“关键字”行。
      </p>
      <CodeBlock html={blocks.frameitDownload} />
      <p>
        对于截图目录树中的每一个 <code>foo.png</code>，<code>frameit</code> 都会在其旁边写入一个 <code>foo_framed.png</code>。原始文件会被保留；如果存在框架版本，<code>deliver</code> 会自动读取框架版本（不存在时则回退到原始版本）。
      </p>

      <h3>Framefile.json</h3>
      <p>
        默认的框架看起来就像开发测试图片 —— 黑色外框、没有背景、没有文本。您可以通过 <code>fastlane/screenshots/Framefile.json</code> 来配置它们：
      </p>
      <CodeBlock html={blocks.framefile} />
      <p>关键字段：</p>
      <ul>
        <li>
          <strong><code>background</code></strong> —— 被包围的设备所合成到的背景 PNG。尺寸应宽于您输出的最大截图。<code>frameit</code> 默认会垂直居中设备；<code>title_below_image</code> 和 <code>show_complete_frame</code> 用于控制文本与外框的交互方式。
        </li>
        <li>
          <strong><code>data[]</code></strong> —— 针对特定截图的覆盖配置，以截图文件名的子字符串作为过滤键。上面的第二条仅适用于名称中带有 “Settings” 的文件。可以用于针对不同的功能行进行不同的色彩搭配。
        </li>
        <li>
          <strong><code>frame</code></strong> —— 覆盖匹配文件的设备框架颜色。<code>frameit</code> 在 <code>Framefile.json</code> 中识别的值包括 <code>BLACK</code>、<code>WHITE</code>、<code>GOLD</code> 和 <code>ROSE_GOLD</code>。框架素材本身会在执行 <code>fastlane frameit download_frames</code> 时从 Apple 营销资源的 Sketch 文件中下载。
        </li>
      </ul>

      <h3>分语言环境的 title.strings 和 keyword.strings</h3>
      <p>
        营销文案来自于两个平行的分语言环境 strings 文件 —— 标题使用 <code>title.strings</code>，上方较小的标签使用 <code>keyword.strings</code>。键为不带扩展名或设备前缀的截图文件名：
      </p>
      <CodeBlock html={blocks.titleStrings} />
      <CodeBlock html={blocks.keywordStrings} />
      <p>
        翻译文件放入 <code>fastlane/screenshots/de-DE/title.strings</code> 和 <code>fastlane/screenshots/de-DE/keyword.strings</code>、<code>fastlane/screenshots/ja/title.strings</code> 等路径下。换行使用 <code>\n</code>。缺失翻译的语言环境会直接显示未翻译的截图（不渲染标题） —— 这里没有自动退回到英文的机制。
      </p>

      <h3>字体</h3>
      <p>
        将 TTF 或 OTF 文件放入 <code>fastlane/screenshots/fonts/</code> 中，并在 <code>Framefile.json</code> 中使用相对路径进行引用。支持可变字体。如果您引用了不存在的字体，frameit 会默默地退回到默认的无衬线字体，而生成的结果可能在没有任何警告的情况下看起来是错的。
      </p>

      <h2>6. deliver —— 上传到 App Store Connect</h2>
      <p>
        <code>deliver</code> 遍历截图文件夹，将每个 PNG 与 App Store Connect 显示类型进行匹配，然后通过 App Store Connect API 替换当前可编辑版本上的截图集。配置好 API 密钥认证和精简的 <code>Deliverfile</code> 后，上传步骤只需一条命令即可搞定。
      </p>

      <h3>目录布局</h3>
      <p>
        <code>deliver</code> 需要平铺的分语言环境目录结构 —— 不能包含设备子文件夹。显示类型是根据图像分辨率检测的（在有歧义时，会根据 <code>snapshot</code> 已经加入的文件名设备前缀进行检测）：
      </p>
      <CodeBlock html={blocks.folderLayout} />

      <h3>Deliverfile</h3>
      <CodeBlock html={blocks.deliverfile} />
      <p>最重要的参数：</p>
      <ul>
        <li>
          <strong><code>skip_binary_upload</code></strong> —— 如果不配置此项，<code>deliver</code> 会寻找 IPA 包，如果没有则会拒绝运行。
        </li>
        <li>
          <strong><code>skip_metadata</code></strong> —— 如果您只想更新截图且没有 <code>fastlane/metadata/</code> 目录，可将其设为 <code>true</code>。设为 <code>false</code> 则可以在同一次调用中一并提交本地化的标题、描述、关键字和促销文本。
        </li>
        <li>
          <strong><code>force(true)</code></strong> —— 跳过 <code>deliver</code> 在推送前显示的确认提示。在 CI 上为必填项。
        </li>
        <li>
          <strong><code>overwrite_screenshots(true)</code></strong> —— 在上传新图前清空每个显示类型中已有的截图。如果不开启，新上传的图会追加在老图后面，直到达到 10 张的限制，然后报错。
        </li>
        <li>
          <strong><code>run_precheck_before_submit(false)</code></strong> —— <code>precheck</code> 会扫描元数据中是否有风险词汇（“Beta”、竞品名称、敏感词等）。这在提交审核前很有用，但对于仅更新截图的操作来说并不适用。
        </li>
      </ul>

      <h3>干跑测试与正式发布</h3>
      <CodeBlock html={blocks.dryRun} />
      <p>
        在第一次实际上传时，<code>deliver</code> 会在 <code>fastlane/preview.html</code> 中生成一个 HTML 预览文件，并暂停等待确认（除非设置了 <code>force(true)</code>）。在引入新设备族时，请务必先打开预览文件查看，因为这是发现显示类型不匹配的最佳时机。
      </p>

      <h2>7. 完整的 Fastfile 文件</h2>
      <p>
        这一个文件定义了四个车道，涵盖了捕获、框架化、捕获+框架化以及完整发布。本地开发使用一个车道，而 CI 运行则使用另一个车道。
      </p>
      <CodeBlock html={blocks.fastfile} />
      <p>
        <code>capture_ios_screenshots</code>、<code>frame_screenshots</code> 和 <code>upload_to_app_store</code> 分别是 <code>snapshot</code>、<code>frameit</code> 和 <code>deliver</code> 的规范别名。短名称仍然有效，但长名称更加清晰，且不会遮蔽 Ruby 关键字。
      </p>

      <h2>8. 在 GitHub Actions 上配置 CI</h2>
      <p>
        截图速度较慢（5 种语言 × 3 款设备通常需要 15 分钟），但可以通过模拟器并行进行。一个运行在 <code>macos-26</code> 上的并行模拟器工作流通常就足够了。
      </p>
      <CodeBlock html={blocks.ghaWorkflow} />
      <p>让 CI 运行更可靠的技巧：</p>
      <ul>
        <li>
          <strong>锁定 Xcode 版本。</strong> 使用明确的路径调用 <code>sudo xcode-select -s</code>。GitHub 托管的运行器附带了多个 Xcode 版本，默认版本是他们本月选定的版本。
        </li>
        <li>
          <strong>锁定运行器镜像。</strong> 使用类似 <code>macos-26</code> 或 <code>macos-15</code> 的带版本号镜像，不要使用 <code>macos-latest</code>。在版本发布前三周遇到运行器升级，绝对是您最不想面对的“惊喜”。
        </li>
        <li>
          <strong>缓存 Bundler 安装。</strong> 在 <code>setup-ruby</code> 中使用 <code>bundler-cache: true</code> 可以让每次运行节省一到两分钟。
        </li>
        <li>
          <strong>从单个机密变量中写入 API 密钥。</strong> 将 <code>key_id</code>、<code>issuer_id</code> 和 <code>key</code> 存为多个独立的机密变量更方便密钥轮换，但更容易配置出错。对于小团队来说，使用单个 JSON 格式的机密变量就足够了。
        </li>
        <li>
          <strong>将框架化的截图上传为工件</strong>，即使上传步骤失败也是如此。在重新运行之前，您几乎总是想检查一下究竟生成了什么图。
        </li>
      </ul>

      <h2>9. 常见错误及解决方法</h2>
      <h3>&quot;Could not find a device matching...&quot;</h3>
      <p>
        Snapshot 中的设备名称必须与 <code>xcrun simctl list devicetypes</code> 完全一致。Apple 每年都会发布最新的旗舰设备，而 Apple 基于年份的版本命名逻辑意味着工具链更新换代非常快。<code>&quot;iPhone 17 Pro Max&quot;</code> 随 <strong>Xcode 26</strong>（2025 年秋季发布）一同推出；在 Xcode 16 上，6.9 英寸的设备名为 <code>&quot;iPhone 16 Pro Max&quot;</code>。在每次 Xcode 升级后，建议重新运行 <code>xcrun simctl list devicetypes | grep iPhone</code> 并更新您的 <code>Snapfile</code>。
      </p>

      <h3>&quot;Unable to verify upload&quot; / 401 Unauthorized</h3>
      <p>
        您的 JWT 在上传中途过期、API 密钥被吊销或其角色权限被降级。请检查 <code>asc_api_key.json</code> 中的 <code>duration</code> 是否小于等于 <code>1200</code>，然后重新签发密钥。
      </p>

      <h3>&quot;App Store Connect is locked&quot;</h3>
      <p>
        您正在上传的版本正处于“正在审核（In Review）”或“等待开发者发布（Pending Developer Release）”状态。在这些状态下，截图是只读的。请创建一个新版本（“准备提交”状态）并重新运行。
      </p>

      <h3>截图进入了错误的显示类型</h3>
      <p>
        <code>deliver</code> 是根据图像分辨率来匹配显示类型的。如果您导出了一张 1320 × 2868 分辨率的 6.9 英寸 iPhone 截图，它会落入 6.9 英寸的插槽；如果您将其缩放到了 1284 × 2778 分辨率，它会落入旧版的 6.5 英寸插槽。如果您的应用版本中同时存在这两种显示类型，请在文件名中指明设备系列 —— 也就是 <code>snapshot</code> 已经自动生成的文件名前缀。手动导出的截图往往会漏掉这个前缀。
      </p>

      <h3>&quot;Screenshot has alpha channel&quot; / 意外的透明度</h3>
      <p>
        App Store Connect 历史上一直拒绝带透明通道的 PNG 图像，并且当 <code>deliver</code> 发现 Alpha 通道时仍然会发出警告。虽然 Apple 当前的截图规范页面不再明确声明此规则，但去掉 Alpha 通道是最稳妥的做法。可以使用 <code>sips -s format png</code> 配合 PNG 色彩配置处理该文件，或者重新导出为不带 Alpha 通道的文件。<code>frameit</code> 合成的输出始终是不透明的；但如果您的根视图是不透明的，原始的 <code>simctl io ... screenshot</code> 输出仍然可能会包含 Alpha 通道。
      </p>

      <h3>&quot;Locale ru-RU does not exist for this app&quot;</h3>
      <p>
        <code>deliver</code> 只会上传到您当前版本中已经创建 of App Store Connect 语言环境。请先在 App Store Connect 后台添加该语言环境（或在 <code>deliver</code> 中设置 <code>force_create_app(true)</code> + 元数据），然后重新运行。
      </p>

      <h3>并行模拟器吃光了所有内存</h3>
      <p>
        每个在调出键盘状态下启动的 iPhone 17 Pro Max 模拟器都会消耗大约 2.5 GB 内存。在 16 GB 内存的 MacBook 上同时运行三个模拟器会导致频繁使用 Swap 并在测试中途崩溃。建议在本地将 <code>concurrent_simulators(false)</code> 设为 false，将并行测试留给配置更高的 CI 运行器来执行。
      </p>

      <h2>10. 何时 fastlane 会显得大材小用</h2>
      <p>
        在以下情况下，fastlane 的截图流水线非常好用：
      </p>
      <ul>
        <li>
          您已经拥有一个 UI 测试目标，且团队能够熟练维护 XCUITest 桩数据。
        </li>
        <li>
          您希望将截图作为 CI 构建产物，在每次发布时重新生成。
        </li>
        <li>
          您支持多语言本地化，且希望通过代码一次性定义好版式，而不是针对每种语言单独绘制。
        </li>
      </ul>
      <p>在以下情况下，它不是一个好选择：</p>
      <ul>
        <li>
          您想对每张截图进行极致的艺术设计 —— 排版、构图、装饰性元素等。<code>frameit</code> 是一个模板引擎，而非设计工具。
        </li>
        <li>
          您需要发布某项在应用中尚未实现、或仅在测试目标无法触及的 Feature Flag 之后的<a href="/blog/screenshots-that-convert">营销级精美截图</a>。
        </li>
        <li>
          您是一名独立开发者，宁愿在 Mac 或 iPad 应用中设计一次并直接点击 <strong>上传</strong>。维护 Ruby 工具链、XCUITest 以及锁定 Xcode 版本带来的实际维护成本是相当高的。
        </li>
      </ul>
      <p>
        对于设计优先的工作流，<a href="/">Screenshot Bro</a> 涵盖了相同的领域 —— <a href="/blog/localize-app-store-screenshots">本地化布局</a>、设备框架、使用相同 API 密钥的<a href="/blog/upload-screenshots-to-app-store-connect">一键上传 App Store Connect</a>，且无需任何复杂的 XCUITest 配置。
      </p>

      <h2>一页纸备忘单</h2>
      <CodeBlock html={blocks.cheatSheet} />
      <p>
        这就是完整的流水线。安装时执行两个命令，每次发布时执行一个命令。复杂性都被封装在了上述配置文件中，一旦配置好，它们几乎不需要改动。
      </p>
      <p>
        想知道是完全自己搭建这套系统，还是使用 Mac 桌面端应用来完成同样的工作？您可以查阅 <a href="/vs/fastlane-snapshot">Fastlane snapshot 对比 Screenshot Bro</a> 来了解两者的直接对比和“混合使用”工作流。
      </p>
    </>
  );
}

function ContentHi({ blocks }: { blocks: any }) {
  return (
    <>
      <p>
        <a
          href="https://fastlane.tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          fastlane
        </a>{" "}
        आईओएस (iOS) और एंड्रॉइड (Android) ऐप्स भेजने के उबाऊ हिस्सों को स्वचालित करने के लिए एक रूबी (Ruby) टूलचेन है। इसके स्क्रीनशॉट से जुड़े तीन कार्य —{" "}
        <code>snapshot</code>, <code>frameit</code>, और <code>deliver</code> — पूरे पाइपलाइन को कवर करते हैं: कच्ची छवियों को कैप्चर करने के लिए अपने ऐप को XCUITest के अंदर चलाएं, उन्हें मार्केटिंग कॉपी के साथ डिवाइस फ़्रेम में लपेटें, और परिणाम को ऐप स्टोर कनेक्ट (App Store Connect) पर पुश करें। यह मार्गदर्शिका आपके लिए आवश्यक कॉन्फ़िगरेशन फ़ाइलों, लेन (lane) परिभाषाओं और CI वर्कफ़्लो के साथ पाइपलाइन को शुरू से अंत तक समझाती है।
      </p>

      <p>
        अंत तक आपके पास होगा: एक रूबी बंडलर-पिन सेटअप, एक ऐप स्टोर कनेक्ट एपीआई कुंजी, एक काम करने वाला <code>Snapfile</code> +{" "}
        <code>SnapshotHelper.swift</code>, स्क्रीनशॉट के अनुसार कीवर्ड और शीर्षकों के साथ एक <code>Framefile.json</code>, केवल स्क्रीनशॉट अपलोड के लिए ट्यून की गई एक <code>Deliverfile</code>, चार-लेन वाली <code>Fastfile</code>, और एक गिटहब एक्शन्स (GitHub Actions) वर्कफ़्लो जो <code>macos-26</code> रनर पर पूरा सेटअप चलाता है।
      </p>

      <h2>1. पूर्वापेक्षाएँ और मानसिक मॉडल</h2>
      <p>
        रूबी इंस्टॉल करने से पहले, वैचारिक तस्वीर को पूरी तरह स्पष्ट कर लें। स्क्रीनशॉट पाइपलाइन के तीन स्वतंत्र चरण होते हैं, जिनमें से प्रत्येक एक अलग fastlane कार्य के स्वामित्व में होता है:
      </p>
      <ol>
        <li>
          <strong>कैप्चर</strong> — एक XCUITest सिम्युलेटर के खिलाफ चलता है और उन क्षणों पर <code>snapshot(&quot;01-Home&quot;)</code> को कॉल करता है जिन्हें आप रिकॉर्ड करना चाहते हैं। फ़ास्टलेन का <code>snapshot</code> कार्य सही सिम्युलेटर लॉन्च करता है, प्रत्येक को सही लोकेल में स्विच करता है, परीक्षण चलाता है, और परिणामी PNG फ़ाइलों को{" "}
          <code>fastlane/screenshots/&lt;locale&gt;/</code> में खींचता है।
        </li>
        <li>
          <strong>फ़्रेम</strong> — <code>frameit</code> प्रत्येक PNG को पढ़ता है, छवि रिज़ॉल्यूशन के आधार पर एक डिवाइस फ़्रेम चुनता है, वैकल्पिक रूप से एक बैकग्राउंड और मार्केटिंग शीर्षक जोड़ता है, और मूल फ़ाइल के साथ एक <code>_framed.png</code> लिखता है।
        </li>
        <li>
          <strong>अपलोड</strong> — <code>deliver</code> स्क्रीनशॉट फ़ोल्डर में जाता है, प्रत्येक छवि को एक ऐप स्टोर कनेक्ट <em>डिस्प्ले फ़ैमिली</em> (जैसे{" "}
          <a href="/blog/app-store-screenshot-sizes">iPhone 6.9&quot;, iPad 13&quot;</a>), और ऐप स्टोर कनेक्ट एपीआई के माध्यम से संपादन योग्य ऐप स्टोर संस्करण पर स्क्रीनशॉट सेट को बदल देता है।
        </li>
      </ol>
      <p>
        प्रत्येक चरण को स्वतंत्र रूप से चलाया जा सकता है। आप स्क्रीनशॉट को बिना अपलोड किए ले सकते हैं, किसी अन्य टूल द्वारा निर्मित स्क्रीनशॉट को फ़्रेम कर सकते हैं, या सिम्युलेटर को बिना कॉल किए प्री-बिल्ट स्क्रीनशॉट अपलोड कर सकते हैं।
      </p>

      <h2>2. समझदारी से फ़ास्टलेन स्थापित करें: बंडलर (Bundler)</h2>
      <p>
        <code>brew install fastlane</code> का उपयोग न करें। प्रोजेक्ट के अनुसार फ़ास्टलेन को{" "}
        <a
          href="https://bundler.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          बंडलर
        </a>{" "}
        के साथ पिन करें ताकि आपके प्रोजेक्ट को बनाने वाली हर मशीन — आपका लैपटॉप, सहकर्मी का लैपटॉप, या CI — एक ही संस्करण चलाए। प्रोजेक्ट रूट से:
      </p>
      <CodeBlock html={blocks.bundlerInstall} />
      <p>
        <code>Gemfile</code> और <code>Gemfile.lock</code> को कमिट करें। अपनी <code>.gitignore</code> फ़ाइल में <code>vendor/bundle</code> जोड़ें। अब प्रोजेक्ट में फ़ास्टलेन को इनिशियलाइज़ करें:
      </p>
      <CodeBlock html={blocks.fastlaneInit} />
      <p>
        यह <code>Fastfile</code> और <code>Appfile</code> के साथ एक <code>fastlane/</code> निर्देशिका बनाता है। <code>Appfile</code> में अपना बंडल पहचानकर्ता (bundle identifier) और टीम आईडी भरें:
      </p>
      <CodeBlock html={blocks.appfile} />

      <h2>3. ऐप स्टोर कनेक्ट एपीआई कुंजी (API Key)</h2>
      <p>
        उपयोगकर्ता नाम/पासवर्ड प्रमाणीकरण नए खातों के लिए अप्रचलित है और अन्य सभी के लिए टू-फैक्टर सुरक्षित है, जिससे यह CI पर अनुपयोगी हो जाता है। इसके बजाय{" "}
        <a
          href="https://appstoreconnect.apple.com/access/integrations/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          ऐप स्टोर कनेक्ट एपीआई कुंजी
        </a>{" "}
        का उपयोग करें। ऐप स्टोर कनेक्ट में → <strong>Users and Access</strong> → <strong>Integrations</strong> → <strong>App Store Connect API</strong>:
      </p>
      <ol>
        <li>
          <strong>Generate API Key</strong> पर क्लिक करें (आप इसे टीम के लिए केवल एक बार करते हैं; खोई हुई <code>.p8</code> फ़ाइलों को दोबारा डाउनलोड नहीं किया जा सकता)।
        </li>
        <li>
          इसे <strong>App Manager</strong> की भूमिका दें। स्क्रीनशॉट अपलोड करने के लिए <strong>Developer</strong> की भूमिका पर्याप्त नहीं है; <strong>Admin</strong> की भूमिका आपकी आवश्यकता से अधिक है।
        </li>
        <li>
          <strong>Key ID</strong> (10 वर्ण, उदा. <code>ABCD1234EF</code>) और टीम का <strong>Issuer ID</strong> (उसी पृष्ठ के शीर्ष पर स्थित UUID) नोट करें।
        </li>
        <li>descargar el archivo <code>AuthKey_ABCD1234EF.p8</code>.</li>
      </ol>
      <p>
        फ़ास्टलेन एक JSON फ़ाइल से कुंजी पढ़ता है। इसे <code>fastlane/asc_api_key.json</code> के रूप में सहेजें (और उस पथ को <code>.gitignore</code> में रखें):
      </p>
      <CodeBlock html={blocks.ascKey} />
      <p>
        <code>duration</code> सेकंड में प्रत्येक उत्पन्न JWT का जीवनकाल है; Apple द्वारा स्वीकार किया जाने वाला अधिकतम मान <code>1200</code> (20 मिनट) है। <code>key</code> फ़ील्ड <code>.p8</code> फ़ाइल की पूरी सामग्री है, जिसमें <code>BEGIN/END PRIVATE KEY</code> लाइनें शामिल हैं, जिसमें लाइन ब्रेक के लिए शाब्दिक <code>\n</code> है।
      </p>
      <p>
        CI पर, कभी भी JSON को चेक-इन न करें। JSON सामग्री को एक सिंगल सीक्रेट (उदा. <code>ASC_API_KEY_JSON</code>) के रूप में स्टोर करें और रन टाइम पर फ़ाइल लिखें — नीचे गिटहब एक्शन्स सेक्शन में एक उदाहरण है।
      </p>

      <h2>4. snapshot — XCUITest में स्क्रीनशॉट कैप्चर करना</h2>
      <p>
        <code>snapshot</code> आपके UI परीक्षण लक्ष्य में एक छोटा स्विफ्ट हेल्पर इंजेक्ट करके काम करता है। हेल्पर परीक्षण रनटाइम में हुक करता है ताकि आपके परीक्षण से <code>snapshot(&quot;name&quot;)</code> का प्रत्येक कॉल सिम्युलेटर स्क्रीन का एक स्क्रीनशॉट लेता है, उसका नाम रखता है, और उसे डिस्क स्थान पर लिखता है जिसे फ़ास्टलेन पहले से ही खोजना जानता है।
      </p>

      <h3>हेल्पर जेनरेट करें</h3>
      <CodeBlock html={blocks.snapshotInit} />
      <p>
        यह <code>fastlane/Snapfile</code> और{" "}
        <code>fastlane/SnapshotHelper.swift</code> बनाता है। Xcode में अपने <strong>UI testing target</strong> में <code>SnapshotHelper.swift</code> जोड़ें (इसे खींचें, सुनिश्चित करें कि &quot;MyAppUITests&quot; एकमात्र जाँचा गया लक्ष्य है — इसे ऐप बाइनरी में कभी शामिल न करें)।
      </p>

      <h3>Snapfile</h3>
      <p>
        <code>Snapfile</code> <code>snapshot</code> को बताता है कि कौन से डिवाइस को चालू करना है, प्रत्येक टेस्ट को किस लोकेल में चलाना है, और किस यूआई टेस्ट स्कीम को कॉल करना है:
      </p>
      <CodeBlock html={blocks.snapfile} />
      <p>मुख्य बातें:</p>
      <ul>
        <li>
          <strong><code>devices</code></strong> — नाम ठीक उसी तरह मेल खाने चाहिए जो <code>xcrun simctl list devices</code> प्रिंट करता है। Apple हर साल नाम बदलता है (उदा. &quot;iPhone 17 Pro Max&quot; ने &quot;iPhone 16 Pro Max&quot; को बदल दिया)। यदि कोई डिवाइस नाम गलत है, तो स्नैपशॉट चुपचाप इसे छोड़ देगा।
        </li>
        <li>
          <strong><code>languages</code></strong> — या तो एक क्षेत्र कोड जैसे <code>&quot;en-US&quot;</code> या एक सामान्य भाषा कोड जैसे <code>&quot;ja&quot;</code> पास करें। प्रत्येक प्रविष्टि <code>output_directory</code> के अंतर्गत एक फ़ोल्डर बनाती है।
        </li>
        <li>
          <strong><code>override_status_bar(true)</code></strong> — प्रत्येक स्क्रीनशॉट में 9:41, पूर्ण बैटरी, और पूर्ण वाई-फाई/सेल सिग्नल दिखाने के लिए <code>simctl status_bar override</code> का उपयोग करता है। Apple तकनीकी रूप से इसकी आवश्यकता नहीं रखता है, लेकिन अधिकांश समीक्षक इसकी अपेक्षा करते हैं।
        </li>
        <li>
          <strong><code>concurrent_simulators</code></strong> — समानांतर में कई सिम्युलेटर चलाता है। डिवाइसों की संख्या के आधार पर समय को कम करता है, लेकिन प्रत्येक सिम्युलेटर की लागत ~3 जीबी रैम होती है, इसलिए यह कम संसाधन वाले सीआई रनर्स के लिए बहुत भारी हो सकता है।
        </li>
        <li>
          <strong><code>clear_previous_screenshots</code></strong> — प्रत्येक रन की शुरुआत में <code>fastlane/screenshots/&lt;locale&gt;/</code> को हटा देता है। इसके बिना, हटाए गए परीक्षण मामलों के पुराने शॉट्स हमेशा के लिए जमा होते रहते हैं।
        </li>
      </ul>

      <h3>अपने XCUITest में स्नैपशॉट कनेक्ट करें</h3>
      <p>
        <code>SnapshotHelper</code> दो स्वतंत्र फ़ंक्शंस को उजागर करता है: <code>setupSnapshot(_:)</code> (प्रति परीक्षण एक बार कॉल करें) और <code>snapshot(_:)</code> (जहां भी आप एक फ्रेम रिकॉर्ड करना चाहते हैं वहां कॉल करें)।
      </p>
      <CodeBlock html={blocks.snapshotHelper} />
      <p>कुछ व्यावहारिक नोट्स:</p>
      <ul>
        <li>
          एनालिटिक्स को अक्षम करने, डिटरमिनिस्टिक सीड डेटा स्वैप करने, ऑनबोर्डिंग छोड़ने या नेटवर्क कॉल को स्टब करने के लिए अपने ऐप में लॉन्च तर्क के रूप में <code>-UITests</code> पास करें और इसके लिए जांचें। समीक्षक (और आपका भविष्य का स्व) आपको धन्यवाद देंगे।
        </li>
        <li>
          <code>snapshot</code> स्क्रीन कैप्चर पूरा होने तक ब्लॉक करता है, इसलिए आप उसके तुरंत बाद अगले इंटरेक्शन को चला सकते हैं।
        </li>
        <li>
          यदि यूआई एनिमेट करता है, तो लॉन्च तर्क के पीछे <code>UIView.setAnimationsEnabled(false)</code> जोड़ें। मिड-कैप्चर एनीमेशन धुंधले शॉट्स पैदा करता है।
        </li>
        <li>
          एक संख्यात्मक उपसर्ग (<code>01-</code>, <code>02-</code>) के साथ स्क्रीनशॉट नाम दें ताकि फ़ाइल नाम का क्रम ऐप स्टोर कनेक्ट डिस्प्ले ऑर्डर से मेल खाए। <code>deliver</code> उन्हें लैक्सिकल क्रम में अपलोड करता है।
        </li>
      </ul>

      <h3>स्नैपशॉट चलाएं</h3>
      <CodeBlock html={blocks.snapshotRun} />
      <p>
        आउटपुट <code>fastlane/screenshots/&lt;locale&gt;/iPhone 17 Pro Max-01-Home.png</code> और अन्य में आता है। स्नैपशॉट भी <code>screenshots.html</code> उत्पन्न करता है — एक ही पृष्ठ में सभी लोकेल और उपकरणों के माध्यम से फ़्लिप करने के लिए इसे खोलें।
      </p>

      <h2>5. frameit — डिवाइस फ़्रेम और शीर्षक जोड़ना</h2>
      <p>
        कच्चे स्क्रीनशॉट केवल नंगे डिवाइस व्यूपोर्ट हैं। <code>frameit</code> उन्हें भौतिक डिवाइस फ़्रेम में लपेटता है, वैकल्पिक रूप से एक पृष्ठभूमि, एक मार्केटिंग शीर्षक और उसके ऊपर एक छोटा &quot;कीवर्ड&quot; लाइन जोड़ता है।
      </p>
      <CodeBlock html={blocks.frameitDownload} />
      <p>
        स्क्रीनशॉट ट्री में प्रत्येक <code>foo.png</code> के लिए, <code>frameit</code> इसके बगल में <code>foo_framed.png</code> लिखता है। मूल को वहीं छोड़ दिया जाता है; प्रस्तुत होने पर <code>deliver</code> स्वचालित रूप से फ़्रेमयुक्त संस्करण को उठा लेता है (और यदि नहीं तो कच्चे संस्करण पर वापस आ जाता है)।
      </p>

      <h3>Framefile.json</h3>
      <p>
        डिफ़ॉल्ट फ़्रेम एक देव परीक्षण की तरह दिखते हैं — ब्लैक फ़्रेम, कोई बैकग्राउंड नहीं, कोई टेक्स्ट नहीं। उन्हें <code>fastlane/screenshots/Framefile.json</code> के साथ कॉन्फ़िगर करें:
      </p>
      <CodeBlock html={blocks.framefile} />
      <p>महत्वपूर्ण फ़ील्ड:</p>
      <ul>
        <li>
          <strong><code>background</code></strong> — एक पीएनजी जिस पर फ़्रेमयुक्त डिवाइस को कंपोजिट किया गया है। आपके सबसे बड़े स्क्रीनशॉट आउटपुट से चौड़ा होना चाहिए। <code>frameit</code> डिफ़ॉल्ट रूप से डिवाइस को लंबवत रूप से केंद्रित करता है; <code>title_below_image</code> और <code>show_complete_frame</code> नियंत्रण करते हैं कि टेक्स्ट और फ़्रेम कैसे इंटरैक्ट करते हैं।
        </li>
        <li>
          <strong><code>data[]</code></strong> — स्क्रीनशॉट फ़ाइल नाम के विरुद्ध एक सबस्ट्रिंग फ़िल्टर द्वारा की गई प्रति-स्क्रीनशॉट ओवरराइड्स। ऊपर दी गई दूसरी प्रविष्टि केवल उन फ़ाइलों पर लागू होती है जिनके नाम में &quot;Settings&quot; है। प्रति पंक्ति रंग थीमिंग के लिए इसका उपयोग करें।
        </li>
        <li>
          <strong><code>frame</code></strong> — मिलान करने वाली फ़ाइलों के लिए डिवाइस फ़्रेम रंग को ओवरराइड करता है। <code>frameit</code> जो मान <code>Framefile.json</code> में पहचानता है वे हैं <code>BLACK</code>, <code>WHITE</code>, <code>GOLD</code>, और <code>ROSE_GOLD</code>। फ्रेम आर्टवर्क स्वयं एप्पल के मार्केटिंग-संसाधन स्केच फ़ाइलों से <code>fastlane frameit download_frames</code> के माध्यम से डाउनलोड किया जाता है।
        </li>
      </ul>

      <h3>प्रति-लोकेल title.strings और keyword.strings</h3>
      <p>
        मार्केटिंग कॉपी दो समानांतर प्रति-लोकेल स्ट्रिंग्स फ़ाइलों से आती है — शीर्षक के लिए <code>title.strings</code> और उसके ऊपर छोटे लेबल के लिए <code>keyword.strings</code>। कुंजियाँ बिना एक्सटेंशन या डिवाइस उपसर्ग के स्क्रीनशॉट फ़ाइल नाम हैं:
      </p>
      <CodeBlock html={blocks.titleStrings} />
      <CodeBlock html={blocks.keywordStrings} />
      <p>
        अनुवाद <code>fastlane/screenshots/de-DE/title.strings</code> और <code>fastlane/screenshots/de-DE/keyword.strings</code>, <code>fastlane/screenshots/ja/title.strings</code> आदि में जाते हैं। लाइन ब्रेक के लिए <code>\n</code> का उपयोग करें। अनुपलब्ध लोकेल बिना अनुवादित स्क्रीनशॉट (कोई शीर्षक प्रस्तुत नहीं) पर वापस आ जाते हैं — कोई स्वचालित अंग्रेजी फ़ॉलबैक नहीं है।
      </p>

      <h3>फ़ॉन्ट्स</h3>
      <p>
        TTF या OTF फ़ाइलों को <code>fastlane/screenshots/fonts/</code> में छोड़ें और <code>Framefile.json</code> में सापेक्ष पथ के साथ उनका संदर्भ लें। वेरिएबल फोंट समर्थित हैं। यदि आप किसी ऐसे फ़ॉन्ट का संदर्भ देते हैं जो मौजूद नहीं है, तो frameit चुपचाप एक डिफ़ॉल्ट सेन्स-सेरिफ़ पर वापस आ जाता है और परिणाम बिना किसी चेतावनी के गलत दिखाई देगा।
      </p>

      <h2>6. deliver — ऐप स्टोर कनेक्ट पर अपलोड करना</h2>
      <p>
        <code>deliver</code> स्क्रीनशॉट फ़ोल्डर में जाता है, प्रत्येक PNG को एक ऐप स्टोर कनेक्ट डिस्प्ले फ़ैमिली से मिलाता है, फिर वर्तमान में संपादन योग्य संस्करण पर स्क्रीनशॉट सेट को बदलने के लिए ऐप स्टोर कनेक्ट एपीआई से बात करता है। एपीआई कुंजी प्रमाणीकरण और एक केंद्रित <code>Deliverfile</code> के साथ, अपलोड चरण एक कमांड है।
      </p>

      <h3>फ़ोल्डर लेआउट</h3>
      <p>
        <code>deliver</code> एक सपाट प्रति-लोकेल लेआउट की अपेक्षा करता है — कोई डिवाइस सबफ़ोल्डर नहीं। छवि रिज़ॉल्यूशन से डिस्प्ले फ़ैमिली का पता लगाया जाता है (और, जब संदिग्ध हो, तो फ़ाइल नाम में डिवाइस उपसर्ग से जो <code>snapshot</code> पहले से ही जोड़ता है):
      </p>
      <CodeBlock html={blocks.folderLayout} />

      <h3>Deliverfile</h3>
      <CodeBlock html={blocks.deliverfile} />
      <p>वे फ़्लैग जो सबसे अधिक मायने रखते हैं:</p>
      <ul>
        <li>
          <strong><code>skip_binary_upload</code></strong> — इसके बिना, <code>deliver</code> एक IPA की तलाश करता है और यदि कोई मौजूद नहीं है तो चलने से इनकार कर देता है।
        </li>
        <li>
          <strong><code>skip_metadata</code></strong> — यदि आप केवल स्क्रीनशॉट चाहते हैं और आपके पास कोई <code>fastlane/metadata/</code> निर्देशिका नहीं है, तो इसे <code>true</code> पर सेट करें। एक ही कॉल में स्थानीयकृत शीर्षक, विवरण, कीवर्ड और प्रचार टेक्स्ट भेजने के लिए <code>false</code> पर सेट करें।
        </li>
        <li>
          <strong><code>force(true)</code></strong> — उस &quot;क्या आप आश्वस्त हैं?&quot; प्रॉम्प्ट को छोड़ देता है जो <code>deliver</code> धकेलने से पहले दिखाता है। CI पर आवश्यक।
        </li>
        <li>
          <strong><code>overwrite_screenshots(true)</code></strong> — नए शॉट्स अपलोड करने से पहले प्रत्येक डिस्प्ले फ़ैमिली में मौजूदा स्क्रीनशॉट सेट को मिटा देता है। इसके बिना, नए अपलोड 10-स्क्रीनशॉट सीमा तक पुराने में जुड़ जाते हैं, फिर विफल हो जाते हैं।
        </li>
        <li>
          <strong><code>run_precheck_before_submit(false)</code></strong> — <code>precheck</code> जोखिम भरे शब्दों (&quot;Beta&quot;, प्रतियोगी नाम, सेंसर किए गए शब्द) के लिए मेटाडेटा को स्कैन करता है। यह सबमिट करने से पहले बहुत अच्छा है लेकिन केवल स्क्रीनशॉट अपडेट के लिए गलत है।
        </li>
      </ul>

      <h3>ड्राई-रन, फिर शिप</h3>
      <CodeBlock html={blocks.dryRun} />
      <p>
        पहले वास्तविक अपलोड पर, <code>deliver</code> <code>fastlane/preview.html</code> पर एक HTML पूर्वावलोकन प्रिंट करता है और तब तक पुष्टि की प्रतीक्षा करता है जब तक कि <code>force(true)</code> सेट न हो। नए डिवाइस परिवार पर पहली बार पूर्वावलोकन हमेशा खोलें — डिस्प्ले-फ़ैमिली बेमेल वहीं दिखाई देते हैं।
      </p>

      <h2>7. पूर्ण Fastfile</h2>
      <p>
        एक फ़ाइल जिसमें चार लेन शामिल हैं जो कैप्चर, फ़्रेम, कैप्चर+फ़्रेम और फुल शिप को कवर करती हैं। स्थानीय विकास एक लेन का उपयोग करता है; CI दूसरे का उपयोग करता है।
      </p>
      <CodeBlock html={blocks.fastfile} />
      <p>
        <code>capture_ios_screenshots</code>, <code>frame_screenshots</code>, और <code>upload_to_app_store</code>, <code>snapshot</code>, <code>frameit</code>, और <code>deliver</code> के कैनोनिकल नाम हैं। संक्षिप्त नाम अभी भी काम करते हैं लेकिन लंबे नाम स्पष्ट हैं और रूबी कीवर्ड्स को प्रभावित नहीं करते हैं।
      </p>

      <h2>8. गिटहब एक्शन्स (GitHub Actions) पर CI</h2>
      <p>
        स्क्रीनशॉट धीमे होते हैं (5 लोकेल × 3 डिवाइस के लिए 15 मिनट सामान्य है) लेकिन वे सिमुलेटरों में अच्छी तरह से समानांतर चलते हैं। सिम्युलेटरों के समानांतर चलाने वाला एक सिंगल <code>macos-26</code> रनर आमतौर पर पर्याप्त होता है।
      </p>
      <CodeBlock html={blocks.ghaWorkflow} />
      <p>चीजें जो सीआई रन को विश्वसनीय बनाती हैं:</p>
      <ul>
        <li>
          <strong>Xcode को पिन करें।</strong> एक स्पष्ट पथ के साथ <code>sudo xcode-select -s</code> चलाएं। गिटहब-होस्टेड रनर कई Xcode संस्करण शिप करते हैं और डिफ़ॉल्ट वह होता है जो उन्होंने इस महीने तय किया था।
        </li>
        <li>
          <strong>रनर इमेज को पिन करें।</strong> <code>macos-latest</code> के बजाय <code>macos-26</code> या <code>macos-15</code> जैसी संस्करणित इमेज का उपयोग करें। रिलीज से तीन सप्ताह पहले रनर अपग्रेड उस तरह का सरप्राइज है जो आप नहीं चाहते।
        </li>
        <li>
          <strong>बंडलर इंस्टॉल को कैश करें।</strong> <code>setup-ruby</code> में <code>bundler-cache: true</code> हर रन से एक या दो मिनट बचा लेता है।
        </li>
        <li>
          <strong>एक ही सीक्रेट से एपीआई की लिखें।</strong> <code>key_id</code>, <code>issuer_id</code>, और <code>key</code> को अलग-अलग सीक्रेट के रूप में स्टोर करना अधिक रोटेशन-अनुकूल है लेकिन अधिक त्रुटि-प्रवण है। छोटे समूहों के लिए एक JSON-आकार का सीक्रेट ठीक है।
        </li>
        <li>
          <strong>फ़्रेमयुक्त स्क्रीनशॉट को एक आर्टिफ़ैक्ट के रूप में अपलोड करें</strong> भले ही अपलोड चरण विफल हो जाए। दोबारा चलाने से पहले आप हमेशा यह जांचना चाहते हैं कि क्या उत्पन्न हुआ था।
        </li>
      </ul>

      <h2>9. सामान्य त्रुटियां और सुधार</h2>
      <h3>&quot;Could not find a device matching...&quot;</h3>
      <p>
        स्नैपशॉट के डिवाइस नाम ठीक <code>xcrun simctl list devicetypes</code> से मेल खाने चाहिए। Apple हर साल एक नया टॉप-ऑफ-लाइन डिवाइस भेजता है और Apple का कैलेंडर-आधारित संस्करण का मतलब है कि टूलचेन तेजी से आगे बढ़ता है। <code>&quot;iPhone 17 Pro Max&quot;</code> <strong>Xcode 26</strong> (रिलीज़ फॉल 2025) के साथ शिप होता है; Xcode 16 पर 6.9&quot; डिवाइस <code>&quot;iPhone 16 Pro Max&quot;</code> था। हर Xcode अपग्रेड के बाद, <code>xcrun simctl list devicetypes | grep iPhone</code> को फिर से चलाएँ और <code>Snapfile</code> को अपडेट करें।
      </p>

      <h3>&quot;Unable to verify upload&quot; / 401 Unauthorized</h3>
      <p>
        आपका JWT अपलोड के बीच में समाप्त हो गया, API कुंजी निरस्त कर दी गई है, या इसकी भूमिका डाउनग्रेड कर दी गई थी। जांचें कि <code>asc_api_key.json</code> में <code>duration</code> अधिकतम <code>1200</code> है, फिर कुंजी को फिर से जारी करें।
      </p>

      <h3>&quot;App Store Connect is locked&quot;</h3>
      <p>
        जिस संस्करण को आप अपलोड कर रहे हैं वह <em>In Review</em> या <em>Pending Developer Release</em> में है। उन राज्यों में स्क्रीनशॉट केवल-पढ़ने के लिए होते हैं। एक नया संस्करण बनाएं (&quot;सबमिशन के लिए तैयार करें&quot; स्लॉट) और फिर से चलाएं।
      </p>

      <h3>स्क्रीनशॉट गलत डिस्प्ले फ़ैमिली में समाप्त हो जाते हैं</h3>
      <p>
        <code>deliver</code> छवि रिज़ॉल्यूशन द्वारा मेल खाता है। यदि आपने 1320 × 2868 पर 6.9&quot; iPhone स्क्रीनशॉट निर्यात किया है तो यह 6.9&quot; स्लॉट में उतरेगा; यदि आपने इसे 1284 × 2778 पर स्केल किया है तो यह लीगेसी 6.5&quot; स्लॉट में उतरेगा। यदि दोनों डिस्प्ले परिवार आपके संस्करण पर मौजूद हैं, तो फ़ाइल नाम में डिवाइस परिवार की आपूर्ति करें — यह वही उपसर्ग है जो <code>snapshot</code> पहले से ही उत्पन्न करता है। मैनुअल निर्यात अक्सर इसे छोड़ देते हैं।
      </p>

      <h3>&quot;Screenshot has alpha channel&quot; / अप्रत्याशित पारदर्शिता</h3>
      <p>
        ऐप स्टोर कनेक्ट ने ऐतिहासिक रूप से पारदर्शिता वाले पीएनजी को अस्वीकार कर दिया है, और <code>deliver</code> अभी भी चेतावनी देता है जब वह अल्फा चैनल देखता है। Apple का वर्तमान स्क्रीनशॉट विनिर्देश पृष्ठ अब स्पष्ट रूप से नियम नहीं बताता है, लेकिन अल्फा को समतल करना सुरक्षित कदम है। पीएनजी रंग प्रोफ़ाइल के साथ <code>sips -s format png</code> के माध्यम से फ़ाइल चलाएं, या अल्फा चैनल के बिना फिर से निर्यात करें। <code>frameit</code> का संयुक्त आउटपुट हमेशा अपारदर्शी होता है; कच्चा <code>simctl io ... screenshot</code> आउटपुट अल्फा शामिल कर सकता है यदि आपका रूट व्यू अपारदर्शी नहीं है।
      </p>

      <h3>&quot;Locale ru-RU does not exist for this app&quot;</h3>
      <p>
        <code>deliver</code> केवल ऐप स्टोर कनेक्ट लोकेल्स पर अपलोड करता है जो पहले से ही संस्करण पर मौजूद हैं। पहले ऐप स्टोर कनेक्ट में लोकेल जोड़ें (या <code>deliver</code> में <code>force_create_app(true)</code> + मेटाडेटा सेट करें), फिर से चलाएं।
      </p>

      <h3>समानांतर सिमुलेटर सभी रैम खा जाते हैं</h3>
      <p>
        कीबोर्ड अप के साथ बूट किया गया प्रत्येक iPhone 17 Pro Max सिम्युलेटर ~2.5 जीबी खर्च करता है। 16 जीबी मैकबुक पर एक साथ तीन चलाने से स्वैप होगा और टेस्ट के बीच में क्रैश हो जाएगा। स्थानीय रूप से <code>concurrent_simulators(false)</code> सेट करें; सीआई को उन्हें अधिक शक्तिशाली रनर पर समानांतर में चलाने दें।
      </p>

      <h2>10. जब फ़ास्टलेन अत्यधिक हो</h2>
      <p>
        फ़ास्टलेन की स्क्रीनशॉट पाइपलाइन तब बहुत अच्छी होती है जब:
      </p>
      <ul>
        <li>
          आपके पास पहले से ही एक यूआई परीक्षण लक्ष्य है और आपकी टीम XCUITest फिक्स्चर को बनाए रखने में सहज है।
        </li>
        <li>
          आप चाहते हैं कि स्क्रीनशॉट एक सीआई आर्टिफ़ैक्ट हो, जो हर रिलीज़ पर फिर से उत्पन्न हो।
        </li>
        <li>
          आप स्थानीयकृत करते हैं और चाहते हैं कि लेआउट कोड में एक बार परिभाषित किया जाए, प्रति भाषा फिर से नहीं खींचा जाए।
        </li>
      </ul>
      <p>यह तब गलत विकल्प है जब:</p>
      <ul>
        <li>
          आप प्रत्येक स्क्रीनशॉट पर पूर्ण कला निर्देश चाहते हैं — टाइपोग्राफी, रचना, सजावटी तत्व। <code>frameit</code> एक टेम्प्लेटिंग इंजन है, डिज़ाइन टूल नहीं।
        </li>
        <li>
          आपको किसी ऐसी सुविधा के <a href="/blog/screenshots-that-convert">मार्केटिंग-गुणवत्ता वाले स्क्रीनशॉट</a> को भेजने की आवश्यकता है जो अभी तक ऐप में मौजूद नहीं है, या जो केवल एक फीचर ध्वज के पीछे मौजूद है जिसे आपका परीक्षण लक्ष्य नहीं छू सकता है।
        </li>
        <li>
          आप एक एकल डेवलपर हैं जो मैक ऐप में एक बार डिज़ाइन करना और <strong>Upload</strong> पर क्लिक करना पसंद करेंगे। रूबी टूलचेन प्लस XCUITest प्लस एक्सकोड-वर्जन पिनिंग वास्तविक रखरखाव ओवरहेड है।
        </li>
      </ul>
      <p>
        डिज़ाइन-प्रथम वर्कफ़्लो के लिए, <a href="/">Screenshot Bro</a> समान आधार को कवर करता है — <a href="/blog/localize-app-store-screenshots">स्थानीयकृत लेआउट</a>, डिवाइस फ़्रेम, उसी एपीआई कुंजी के साथ <a href="/blog/upload-screenshots-to-app-store-connect">वन-क्लिक ऐप स्टोर कनेक्ट अपलोड</a> — बिना XCUITest प्लंबिंग के।
      </p>

      <h2>त्वरित संदर्भ सूची (TL;DR)</h2>
      <CodeBlock html={blocks.cheatSheet} />
      <p>
        वही पूरी पाइपलाइन है। स्थापना के समय दो कमांड, प्रति रिलीज एक कमांड। जटिलता ऊपर दी गई कॉन्फ़िगरेशन फ़ाइलों में छिपती है — और एक बार लिखे जाने के बाद, वे मुश्किल से बदलते हैं।
      </p>
      <p>
        सोच रहे हैं कि क्या इसे बिल्कुल सेटअप किया जाए, या उसी काम के लिए मैक ऐप का उपयोग किया जाए? साथ-साथ तुलना और &quot;दोनों का उपयोग करें&quot; वर्कफ़्लो के लिए <a href="/vs/fastlane-snapshot">फ़ास्टलेन स्नैपशॉट बनाम स्क्रीनशॉट ब्रो</a> देखें।
      </p>
    </>
  );
}

function ContentFr({ blocks }: { blocks: any }) {
  return (
    <>
      <p>
        <a
          href="https://fastlane.tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          fastlane
        </a>{" "}
        est une chaîne d&apos;outils Ruby destinée à automatiser les tâches fastidieuses de publication d&apos;applications iOS et Android. Ses trois actions dédiées aux captures d&apos;écran — <code>snapshot</code>, <code>frameit</code> et <code>deliver</code> — couvrent l&apos;intégralité du pipeline : pilotez votre application au sein d&apos;un test XCUITest pour capturer les images brutes, intégrez-les dans des cadres d&apos;appareils avec des textes marketing, et envoyez le résultat sur App Store Connect. Ce guide détaille ce pipeline de bout en bout avec les fichiers de configuration, les définitions de lanes (chemins) et le workflow de CI dont vous avez besoin.
      </p>

      <p>
        À la fin, vous disposerez de : une configuration Ruby verrouillée avec Bundler, une clé d&apos;API App Store Connect, un fichier <code>Snapfile</code> et un script <code>SnapshotHelper.swift</code> fonctionnels, un fichier <code>Framefile.json</code> contenant les mots-clés et titres par capture d&apos;écran, un fichier <code>Deliverfile</code> optimisé pour les envois exclusifs de captures d&apos;écran, un fichier <code>Fastfile</code> à quatre lanes et un workflow GitHub Actions pour exécuter l&apos;ensemble sur un runner <code>macos-26</code>.
      </p>

      <h2>1. Prérequis et modèle mental</h2>
      <p>
        Avant d&apos;installer Ruby, clarifions le schéma conceptuel. Le pipeline de captures d&apos;écran se compose de trois étapes indépendantes, chacune gérée par une action fastlane distincte :
      </p>
      <ol>
        <li>
          <strong>Capture</strong> — un test XCUITest s&apos;exécute sur un simulateur et appelle <code>snapshot(&quot;01-Home&quot;)</code> aux moments clés que vous souhaitez enregistrer. L&apos;action <code>snapshot</code> de fastlane démarre les simulateurs requis, bascule chacun d&apos;eux sur la bonne locale, lance le test et place les PNG générés dans le dossier <code>fastlane/screenshots/&lt;locale&gt;/</code>.
        </li>
        <li>
          <strong>Habillage</strong> — <code>frameit</code> lit chaque fichier PNG, choisit un cadre d&apos;appareil en fonction de la résolution de l&apos;image, ajoute éventuellement un fond d&apos;écran et un titre marketing, puis génère un fichier <code>_framed.png</code> à côté de l&apos;original.
        </li>
        <li>
          <strong>Envoi</strong> — <code>deliver</code> parcourt le dossier de captures d&apos;écran, associe chaque image à une <em>famille d&apos;affichage</em> App Store Connect (par exemple,{" "}
          <a href="/blog/app-store-screenshot-sizes">iPhone 6,9&quot;, iPad 13&quot;</a>) et remplace le jeu de captures d&apos;écran sur la version éditable de l&apos;App Store via l&apos;API App Store Connect.
        </li>
      </ol>
      <p>
        Chaque étape peut être exécutée indépendamment. Vous pouvez réaliser des captures d&apos;écran sans les envoyer, habiller des captures produites par un autre outil ou envoyer des captures pré-générées sans jamais faire appel au simulateur.
      </p>

      <h2>2. Installer fastlane proprement : Bundler</h2>
      <p>
        N&apos;utilisez pas <code>brew install fastlane</code>. Verrouillez la version de fastlane par projet avec{" "}
        <a
          href="https://bundler.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bundler
        </a>{" "}
        afin que chaque machine qui construit votre projet (votre ordinateur, celui d&apos;un collègue, la CI) exécute la même version. Depuis la racine du projet :
      </p>
      <CodeBlock html={blocks.bundlerInstall} />
      <p>
        Validez <code>Gemfile</code> et <code>Gemfile.lock</code> dans Git. Ajoutez <code>vendor/bundle</code> à votre fichier <code>.gitignore</code>. Initialisez ensuite fastlane dans le projet :
      </p>
      <CodeBlock html={blocks.fastlaneInit} />
      <p>
        Cela crée un dossier <code>fastlane/</code> contenant <code>Fastfile</code> and <code>Appfile</code>. Renseignez votre identifiant de bundle et votre identifiant d&apos;équipe dans le fichier <code>Appfile</code> :
      </p>
      <CodeBlock html={blocks.appfile} />

      <h2>3. La clé d&apos;API App Store Connect</h2>
      <p>
        L&apos;authentification par identifiant/mot de passe est obsolète pour les nouveaux comptes et protégée par la double authentification pour les autres, ce qui la rend inutilisable en CI. Utilisez plutôt une{" "}
        <a
          href="https://appstoreconnect.apple.com/access/integrations/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          clé d&apos;API App Store Connect
        </a>{" "}
        . Dans App Store Connect → <strong>Utilisateurs et accès</strong> → <strong>Intégrations</strong> → <strong>Clé d&apos;API App Store Connect</strong> :
      </p>
      <ol>
        <li>
          <strong>Générer une clé d&apos;API</strong> (cette opération ne s&apos;effectue qu&apos;une seule fois par équipe ; les fichiers <code>.p8</code> perdus ne peuvent pas être téléchargés de nouveau).
        </li>
        <li>
          Attribuez-lui le rôle de <strong>Gestionnaire d&apos;apps</strong>. Le rôle de <strong>Développeur</strong> est insuffisant pour envoyer des captures d&apos;écran ; le rôle d&apos;<strong>Administrateur</strong> est supérieur à vos besoins.
        </li>
        <li>
          Notez l&apos;<strong>Identifiant de clé</strong> (10 caractères, par exemple <code>ABCD1234EF</code>) et l&apos;<strong>Identifiant de l&apos;émetteur</strong> de l&apos;équipe (l&apos;UUID situé en haut de la même page).
        </li>
        <li>Téléchargez le fichier <code>AuthKey_ABCD1234EF.p8</code>.</li>
      </ol>
      <p>
        fastlane lit la clé à partir d&apos;un fichier JSON. Enregistrez-le sous le nom <code>fastlane/asc_api_key.json</code> (et ajoutez ce chemin à votre <code>.gitignore</code>) :
      </p>
      <CodeBlock html={blocks.ascKey} />
      <p>
        <code>duration</code> correspond à la durée de validité de chaque jeton JWT généré (en secondes) ; le maximum accepté par Apple est <code>1200</code> (20 minutes). Le champ <code>key</code> contient l&apos;intégralité du fichier <code>.p8</code>, y compris les lignes <code>BEGIN/END PRIVATE KEY</code>, avec des <code>\n</code> littéraux pour les sauts de ligne.
      </p>
      <p>
        En CI, n&apos;ajoutez jamais ce fichier JSON au dépôt. Enregistrez le contenu du JSON sous forme de secret unique (par exemple <code>ASC_API_KEY_JSON</code>) et générez le fichier à la volée lors de l&apos;exécution — vous trouverez un exemple dans la section GitHub Actions ci-dessous.
      </p>

      <h2>4. snapshot — Capturer des captures d&apos;écran avec XCUITest</h2>
      <p>
        <code>snapshot</code> fonctionne en injectant un petit utilitaire Swift dans votre cible de test d&apos;interface utilisateur (UI). Cet utilitaire s&apos;intègre au moteur de test de sorte que chaque appel à <code>snapshot(&quot;nom&quot;)</code> depuis votre test réalise une capture d&apos;écran du simulateur, la nomme et l&apos;enregistre dans un dossier que fastlane sait localiser.
      </p>

      <h3>Générer l&apos;utilitaire de capture</h3>
      <CodeBlock html={blocks.snapshotInit} />
      <p>
        Cela crée les fichiers <code>fastlane/Snapfile</code> et <code>fastlane/SnapshotHelper.swift</code>. Ajoutez le fichier <code>SnapshotHelper.swift</code> à votre <strong>cible de test d&apos;interface utilisateur</strong> dans Xcode (glissez-déposez le fichier et assurez-vous que seul &quot;MyAppUITests&quot; est coché comme cible — ne l&apos;incluez jamais dans le binaire final de l&apos;application).
      </p>

      <h3>Snapfile</h3>
      <p>
        Le fichier <code>Snapfile</code> indique à <code>snapshot</code> quels appareils démarrer, dans quelles locales exécuter chaque test et quel schéma de test d&apos;interface utilisateur appeler :
      </p>
      <CodeBlock html={blocks.snapfile} />
      <p>Points clés :</p>
      <ul>
        <li>
          <strong><code>devices</code></strong> — les noms doivent correspondre exactement à ce que renvoie la commande <code>xcrun simctl list devices</code>. Apple modifie ces noms chaque année (par exemple, &quot;iPhone 17 Pro Max&quot; a remplacé &quot;iPhone 16 Pro Max&quot;). Si le nom d&apos;un appareil est incorrect, snapshot l&apos;ignorera sans message d&apos;erreur.
        </li>
        <li>
          <strong><code>languages</code></strong> — transmettez soit un code de région complet comme <code>&quot;en-US&quot;</code>, soit un code de langue simple comme <code>&quot;ja&quot;</code>. Chaque entrée génère un sous-dossier dans <code>output_directory</code>.
        </li>
        <li>
          <strong><code>override_status_bar(true)</code></strong> — utilise la commande <code>simctl status_bar override</code> pour afficher 9:41, une batterie pleine et un signal réseau/Wi-Fi maximal sur chaque capture d&apos;écran. Apple ne l&apos;exige pas formellement, mais la plupart des validateurs s&apos;y attendent.
        </li>
        <li>
          <strong><code>concurrent_simulators</code></strong> — lance plusieurs simulateurs en parallèle. Cela réduit le temps d&apos;exécution global proportionnellement au nombre d&apos;appareils, mais chaque simulateur consomme environ 3 Go de RAM, ce qui s&apos;avère lourd pour les serveurs de CI limités.
        </li>
        <li>
          <strong><code>clear_previous_screenshots</code></strong> — supprime le dossier <code>fastlane/screenshots/&lt;locale&gt;/</code> avant chaque exécution. Sans cette option, les captures d&apos;écran obsolètes issues de tests supprimés s&apos;accumuleraient indéfiniment.
        </li>
      </ul>

      <h3>Intégrer snapshot dans votre test XCUITest</h3>
      <p>
        <code>SnapshotHelper</code> expose deux fonctions globales : <code>setupSnapshot(_:)</code> (à appeler une fois par test) et <code>snapshot(_:)</code> (à appeler dès que vous souhaitez enregistrer un écran).
      </p>
      <CodeBlock html={blocks.snapshotHelper} />
      <p>Quelques conseils pratiques :</p>
      <ul>
        <li>
          Transmettez l&apos;argument de lancement <code>-UITests</code> et détectez-le dans votre application pour désactiver les outils d&apos;analyse, injecter des données déterministes, ignorer les écrans d&apos;accueil ou simuler les appels réseau. Les validateurs (et vous-même plus tard) vous en remercieront.
        </li>
        <li>
          L&apos;appel à <code>snapshot</code> est bloquant jusqu&apos;à la fin de la capture d&apos;écran, vous pouvez donc enchaîner immédiatement sur l&apos;interaction suivante.
        </li>
        <li>
          Si l&apos;interface contient des animations, ajoutez <code>UIView.setAnimationsEnabled(false)</code> via un argument de lancement. Capturer une image en pleine animation produit des visuels flous.
        </li>
        <li>
          Nommez vos captures avec un préfixe numérique (<code>01-</code>, <code>02-</code>) pour que l&apos;ordre des fichiers corresponde à l&apos;ordre d&apos;affichage dans App Store Connect. L&apos;outil <code>deliver</code> les envoie dans l&apos;ordre alphabétique.
        </li>
      </ul>

      <h3>Lancer snapshot</h3>
      <CodeBlock html={blocks.snapshotRun} />
      <p>
        Les captures sont générées dans <code>fastlane/screenshots/&lt;locale&gt;/iPhone 17 Pro Max-01-Home.png</code> et consorts. Snapshot produit également un fichier <code>screenshots.html</code> — ouvrez-le pour visualiser toutes les locales et tous les appareils sur une seule page.
      </p>

      <h2>5. frameit — Ajouter des cadres d&apos;appareils et des titres</h2>
      <p>
        Les captures d&apos;écran brutes ne montrent que l&apos;écran de l&apos;appareil. <code>frameit</code> les intègre dans des cadres d&apos;appareils physiques, ajoute éventuellement un fond d&apos;écran, un titre promotionnel et un libellé de « mot-clé » plus petit juste au-dessus.
      </p>
      <CodeBlock html={blocks.frameitDownload} />
      <p>
        Pour chaque fichier <code>foo.png</code> de l&apos;arborescence, <code>frameit</code> génère un fichier <code>foo_framed.png</code> à côté. Les originaux sont conservés ; <code>deliver</code> sélectionne automatiquement la version habillée lorsqu&apos;elle existe (et se rabat sur la version brute sinon).
      </p>

      <h3>Framefile.json</h3>
      <p>
        Les cadres par défaut ressemblent à des captures de test de développement — cadre noir, sans fond ni texte. Personnalisez-les avec le fichier <code>fastlane/screenshots/Framefile.json</code> :
      </p>
      <CodeBlock html={blocks.framefile} />
      <p>Champs principaux :</p>
      <ul>
        <li>
          <strong><code>background</code></strong> — un fichier PNG sur lequel est superposé l&apos;appareil encadré. Il doit être plus large que votre capture d&apos;écran la plus grande. Par défaut, <code>frameit</code> centre verticalement l&apos;appareil ; les options <code>title_below_image</code> et <code>show_complete_frame</code> contrôlent la disposition du texte et du cadre.
        </li>
        <li>
          <strong><code>data[]</code></strong> — surcharges de configuration spécifiques par capture, basées sur un filtre de texte appliqué au nom de fichier. La deuxième entrée ci-dessus ne s&apos;applique qu&apos;aux fichiers dont le nom contient « Settings ». Utile pour faire varier les thèmes de couleurs d&apos;un écran à l&apos;autre.
        </li>
        <li>
          <strong><code>frame</code></strong> — surcharge la couleur du cadre de l&apos;appareil pour les fichiers correspondants. Les valeurs reconnues par <code>frameit</code> dans le fichier <code>Framefile.json</code> sont <code>BLACK</code>, <code>WHITE</code>, <code>GOLD</code> et <code>ROSE_GOLD</code>. Les visuels des cadres sont téléchargés depuis les fichiers Sketch de ressources marketing d&apos;Apple via la commande <code>fastlane frameit download_frames</code>.
        </li>
      </ul>

      <h3>Fichiers title.strings et keyword.strings par locale</h3>
      <p>
        Les textes marketing proviennent de deux fichiers de chaînes parallèles par langue — <code>title.strings</code> pour le titre principal et <code>keyword.strings</code> pour le libellé plus petit situé au-dessus. Les clés correspondent aux noms de fichiers des captures, sans extension ni préfixe d&apos;appareil :
      </p>
      <CodeBlock html={blocks.titleStrings} />
      <CodeBlock html={blocks.keywordStrings} />
      <p>
        Les traductions se placent dans <code>fastlane/screenshots/de-DE/title.strings</code> et <code>fastlane/screenshots/de-DE/keyword.strings</code>, <code>fastlane/screenshots/ja/title.strings</code>, etc. Utilisez <code>\n</code> pour insérer des retours à la ligne. Les langues manquantes afficheront la capture d&apos;écran sans texte (aucun titre affiché) — il n&apos;y a pas de repli automatique vers l&apos;anglais.
      </p>

      <h3>Polices de caractères</h3>
      <p>
        Déposez les fichiers TTF ou OTF dans <code>fastlane/screenshots/fonts/</code> et référencez-les par leur chemin relatif dans le fichier <code>Framefile.json</code>. Les polices variables sont supportées. Si vous référencez une police inexistante, frameit utilisera silencieusement une police sans empattement par défaut, et le résultat visuel sera incorrect sans avertissement préalable.
      </p>

      <h2>6. deliver — Envoyer vers App Store Connect</h2>
      <p>
        <code>deliver</code> parcourt le dossier de captures d&apos;écran, associe chaque PNG à une famille d&apos;affichage App Store Connect, puis communique avec l&apos;API App Store Connect pour remplacer le jeu de captures de la version en cours d&apos;édition. Avec l&apos;authentification par clé d&apos;API et un fichier <code>Deliverfile</code> bien paramétré, l&apos;étape d&apos;envoi se résume à une seule commande.
      </p>

      <h3>Structure des dossiers</h3>
      <p>
        <code>deliver</code> s&apos;attend à une structure plate par langue — pas de sous-dossier par appareil. La famille d&apos;affichage est détectée à partir de la résolution de l&apos;image (et, en cas d&apos;ambiguïté, d&apos;après le préfixe d&apos;appareil présent dans le nom de fichier généré par <code>snapshot</code>) :
      </p>
      <CodeBlock html={blocks.folderLayout} />

      <h3>Deliverfile</h3>
      <CodeBlock html={blocks.deliverfile} />
      <p>Les drapeaux (flags) les plus importants :</p>
      <ul>
        <li>
          <strong><code>skip_binary_upload</code></strong> — sans cette option, <code>deliver</code> cherchera un fichier IPA et refusera de s&apos;exécuter s&apos;il est absent.
        </li>
        <li>
          <strong><code>skip_metadata</code></strong> — réglez sur <code>true</code> si vous souhaitez uniquement envoyer des captures et ne disposez pas de dossier <code>fastlane/metadata/</code>. Réglez sur <code>false</code> pour publier vos titres localisés, descriptions, mots-clés et textes promotionnels dans le même appel.
        </li>
        <li>
          <strong><code>force(true)</code></strong> — évite la demande de confirmation « Êtes-vous sûr ? » que <code>deliver</code> affiche avant d&apos;envoyer les fichiers. Requis en CI.
        </li>
        <li>
          <strong><code>overwrite_screenshots(true)</code></strong> — supprime le jeu de captures d&apos;écran existant dans chaque famille d&apos;affichage avant d&apos;envoyer les nouvelles images. Sans cette option, les nouveaux fichiers s&apos;ajoutent aux anciens jusqu&apos;à la limite de 10 captures, puis l&apos;envoi échoue.
        </li>
        <li>
          <strong><code>run_precheck_before_submit(false)</code></strong> — <code>precheck</code> recherche les termes à risque dans les métadonnées (« Bêta », noms de concurrents, mots censurés). C&apos;est idéal avant de soumettre une application, mais inutile pour une simple mise à jour de captures.
        </li>
      </ul>

      <h3>Simulation, puis envoi</h3>
      <CodeBlock html={blocks.dryRun} />
      <p>
        Lors du premier envoi réel, <code>deliver</code> génère un aperçu HTML sous <code>fastlane/preview.html</code> et attend votre confirmation (sauf si <code>force(true)</code> est activé). Ouvrez systématiquement cet aperçu la première fois que vous ajoutez une famille d&apos;appareils — c&apos;est là que se révèlent les éventuelles erreurs d&apos;association.
      </p>

      <h2>7. Le fichier Fastfile complet</h2>
      <p>
        Un fichier unique contenant quatre lanes couvrant la capture, l&apos;habillage, la capture combinée à l&apos;habillage, et l&apos;envoi complet. Le développement local utilise une lane dédiée ; la CI en utilise une autre.
      </p>
      <CodeBlock html={blocks.fastfile} />
      <p>
        <code>capture_ios_screenshots</code>, <code>frame_screenshots</code> et <code>upload_to_app_store</code> sont les noms officiels des actions <code>snapshot</code>, <code>frameit</code> et <code>deliver</code>. Les noms courts fonctionnent toujours, mais les noms longs sont plus explicites et n&apos;entrent pas en conflit avec des mots-clés Ruby.
      </p>

      <h2>8. Intégration continue (CI) sur GitHub Actions</h2>
      <p>
        La génération de captures d&apos;écran est lente (comptez environ 15 minutes pour 5 langues × 3 appareils) mais se prête bien à la parallélisation sur simulateurs. Un unique runner <code>macos-26</code> avec simulateurs simultanés est généralement suffisant.
      </p>
      <CodeBlock html={blocks.ghaWorkflow} />
      <p>Éléments garantissant la fiabilité de votre CI :</p>
      <ul>
        <li>
          <strong>Verrouillez la version de Xcode.</strong> Utilisez <code>sudo xcode-select -s</code> avec un chemin explicite. Les runners hébergés par GitHub intègrent plusieurs versions de Xcode, et la version par défaut est celle choisie arbitrairement pour le mois en cours.
        </li>
        <li>
          <strong>Verrouillez l&apos;image du runner.</strong> Utilisez une image spécifique telle que <code>macos-26</code> ou <code>macos-15</code>, et non pas <code>macos-latest</code>. Une mise à jour du runner trois semaines avant une livraison est le genre de surprise à éviter.
        </li>
        <li>
          <strong>Mettez en cache l&apos;installation de Bundler.</strong> L&apos;option <code>bundler-cache: true</code> dans l&apos;action <code>setup-ruby</code> fait gagner une minute ou deux à chaque exécution.
        </li>
        <li>
          <strong>Générez la clé d&apos;API depuis un secret unique.</strong> Enregistrer séparément <code>key_id</code>, <code>issuer_id</code> et <code>key</code> simplifie la rotation des clés mais augmente le risque d&apos;erreurs. Un secret unique structuré en JSON convient parfaitement pour les petites équipes.
        </li>
        <li>
          <strong>Publiez les captures habillées sous forme d&apos;artéfact</strong> même si l&apos;étape d&apos;envoi échoue. Vous voudrez presque toujours inspecter les visuels générés avant de relancer le workflow.
        </li>
      </ul>

      <h2>9. Erreurs courantes et solutions</h2>
      <h3>« Could not find a device matching... »</h3>
      <p>
        Les noms des appareils pour Snapshot doivent correspondre exactement à ceux renvoyés par la commande <code>xcrun simctl list devicetypes</code>. Apple sort un nouvel appareil haut de gamme chaque année, et sa nomenclature basée sur l&apos;année civile fait évoluer rapidement les outils. L&apos;appareil <code>&quot;iPhone 17 Pro Max&quot;</code> requiert <strong>Xcode 26</strong> (sorti à l&apos;automne 2025) ; sous Xcode 16, l&apos;appareil de 6,9 pouces s&apos;appelait <code>&quot;iPhone 16 Pro Max&quot;</code>. Après chaque mise à jour de Xcode, relancez la commande <code>xcrun simctl list devicetypes | grep iPhone</code> et mettez à jour votre fichier <code>Snapfile</code>.
      </p>

      <h3>« Unable to verify upload » / 401 Unauthorized</h3>
      <p>
        Votre jeton JWT a expiré pendant l&apos;envoi, la clé d&apos;API a été révoquée ou son rôle a été rétrogradé. Vérifiez que la valeur <code>duration</code> dans le fichier <code>asc_api_key.json</code> ne dépasse pas <code>1200</code>, puis générez une nouvelle clé.
      </p>

      <h3>« App Store Connect is locked »</h3>
      <p>
        La version vers laquelle vous effectuez l&apos;envoi est dans l&apos;état <em>En cours d&apos;examen</em> ou <em>En attente de publication par le développeur</em>. Les captures d&apos;écran sont en lecture seule dans ces états. Créez une nouvelle version (statut « Préparation à la soumission ») et relancez le processus.
      </p>

      <h3>Les captures d&apos;écran sont associées à la mauvaise famille d&apos;affichage</h3>
      <p>
        <code>deliver</code> effectue l&apos;association selon la résolution de l&apos;image. Si vous exportez une capture d&apos;iPhone 6,9 pouces à 1320 × 2868, elle sera placée dans l&apos;emplacement 6,9 pouces ; si vous la redimensionnez à 1284 × 2778, elle finira dans l&apos;emplacement hérité de 6,5 pouces. Si les deux familles d&apos;affichage coexistent sur votre version d&apos;application, indiquez la famille d&apos;appareils dans le nom de fichier — c&apos;est le préfixe que <code>snapshot</code> ajoute automatiquement. Les exports manuels l&apos;oublient souvent.
      </p>

      <h3>« Screenshot has alpha channel » / transparence inattendue</h3>
      <p>
        App Store Connect rejette historiquement les fichiers PNG contenant de la transparence, et <code>deliver</code> émet toujours une alerte lorsqu&apos;il détecte un canal alpha. Bien que la page des spécifications de captures d&apos;écran d&apos;Apple ne mentionne plus explicitement cette règle, aplatir le canal alpha reste la solution la plus sûre. Traisez le fichier avec <code>sips -s format png</code> en utilisant un profil de couleur PNG, ou réexportez l&apos;image sans canal alpha. Le rendu composite de <code>frameit</code> est toujours opaque ; la sortie brute de <code>simctl io ... screenshot</code> peut contenir de la transparence si votre vue racine n&apos;est pas opaque.
      </p>

      <h3>« Locale ru-RU does not exist for this app »</h3>
      <p>
        <code>deliver</code> effectue les envois uniquement vers les locales d&apos;App Store Connect déjà configurées sur la version. Ajoutez d&apos;abord la langue dans App Store Connect (ou utilisez l&apos;option <code>force_create_app(true)</code> + les métadonnées dans <code>deliver</code>), puis relancez.
      </p>

      <h3>Les simulateurs simultanés saturent la mémoire RAM</h3>
      <p>
        Chaque simulateur d&apos;iPhone 17 Pro Max démarré avec le clavier affiché consomme environ 2,5 Go de RAM. Sur un MacBook équipé de 16 Go de RAM, exécuter trois simulateurs en même temps provoquera une saturation de la mémoire swap et un plantage des tests. Configurez l&apos;option <code>concurrent_simulators(false)</code> localement et laissez la CI exécuter les simulateurs en parallèle sur un runner plus puissant.
      </p>

      <h2>10. Quand fastlane s&apos;avère superflu</h2>
      <p>
        Le pipeline de captures d&apos;écran de fastlane est idéal si :
      </p>
      <ul>
        <li>
          Vous disposez déjà d&apos;une cible de test d&apos;interface utilisateur et votre équipe est à l&apos;aise avec la maintenance des environnements XCUITest.
        </li>
        <li>
          Vous souhaitez que les captures d&apos;écran soient un artéfact de votre CI, régénéré à chaque livraison.
        </li>
        <li>
          Vous localisez votre application et souhaitez définir la mise en page une fois pour toutes dans le code, sans avoir à la redessiner pour chaque langue.
        </li>
      </ul>
      <p>Ce n&apos;est pas la bonne solution si :</p>
      <ul>
        <li>
          Vous souhaitez contrôler finement la direction artistique de chaque capture (typographie, composition, éléments décoratifs). <code>frameit</code> est un moteur de gabarits (templates), pas un outil de conception graphique.
        </li>
        <li>
          Vous devez publier une <a href="/blog/screenshots-that-convert">capture d&apos;écran de qualité marketing</a> pour une fonctionnalité qui n&apos;existe pas encore dans l&apos;application, ou qui est protégée par un feature flag inaccessible par vos tests.
        </li>
        <li>
          Vous êtes un développeur solo qui préfère concevoir ses visuels une fois pour toutes dans une application Mac puis cliquer sur <strong>Envoyer</strong>. La maintenance de la chaîne d&apos;outils Ruby, associée à XCUITest et au verrouillage des versions Xcode représente une charge réelle.
        </li>
      </ul>
      <p>
        Pour un flux de travail centré sur le design, <a href="/">Screenshot Bro</a> répond aux mêmes besoins — <a href="/blog/localize-app-store-screenshots">mises en page localisées</a>, cadres d&apos;appareils, <a href="/blog/upload-screenshots-to-app-store-connect">envoi en un clic vers App Store Connect</a> avec la même clé d&apos;API — le tout sans la complexité de configuration d&apos;XCUITest.
      </p>

      <h2>Fiche récapitulative (TL;DR)</h2>
      <CodeBlock html={blocks.cheatSheet} />
      <p>
        Voilà pour le pipeline complet. Deux commandes lors de l&apos;installation, une commande par publication. La complexité est masquée dans les fichiers de configuration présentés ci-dessus — et une fois créés, ils ne changent presque plus.
      </p>
      <p>
        Vous hésitez à mettre en place cette solution ou préférez utiliser une application Mac dédiée ? Consultez l&apos;article <a href="/vs/fastlane-snapshot">Fastlane snapshot comparé à Screenshot Bro</a> pour un comparatif détaillé et découvrir comment combiner les deux approches.
      </p>
    </>
  );
}

function ContentAr({ blocks }: { blocks: any }) {
  return (
    <>
      <p>
        أداة{" "}
        <a
          href="https://fastlane.tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          fastlane
        </a>{" "}
        هي عبارة عن سلسلة أدوات بلغة Ruby لأتمتة الأجزاء المملة من عملية شحن تطبيقات iOS وAndroid. وتغطي إجراءاتها الثلاثة المتعلقة بلقطات الشاشة — <code>snapshot</code> و<code>frameit</code> و<code>deliver</code> — خط الأنابيب بالكامل: قم بتشغيل تطبيقك داخل اختبار XCUITest لالتقاط صور أولية، ثم لفها في إطارات الأجهزة بنصوص تسويقية، وادفع النتيجة إلى App Store Connect. يستعرض هذا الدليل خط الأنابيب بالكامل من البداية إلى النهاية مع ملفات التكوين، وتعاريف المسارات (lanes)، وسير عمل التكامل المستمر (CI) الذي تحتاجه لتشغيله.
      </p>

      <p>
        في النهاية سيكون لديك: إعداد مثبت بواسطة Ruby Bundler، ومفتاح واجهة برمجة تطبيقات App Store Connect، وملف <code>Snapfile</code> وملف <code>SnapshotHelper.swift</code> يعملان بشكل صحيح، وملف <code>Framefile.json</code> يحتوي على كلمات مفتاحية وعناوين لكل لقطة شاشة، وملف <code>Deliverfile</code> تم ضبطه لعمليات رفع لقطات الشاشة فقط، و<code>Fastfile</code> بأربعة مسارات، وسير عمل لـ GitHub Actions يقوم بتشغيل العملية بالكامل على بيئة تشغيل <code>macos-26</code>.
      </p>

      <h2>1. المتطلبات الأساسية والنموذج الفكري</h2>
      <p>
        قبل تثبيت أي شيء يخص Ruby، تأكد من وضوح الصورة المفاهيمية. يتكون خط أنابيب لقطات الشاشة من ثلاث مراحل مستقلة، كل منها يتبع لإجراء fastlane منفصل:
      </p>
      <ol>
        <li>
          <strong>الالتقاط</strong> — يتم تشغيل اختبار XCUITest مقابل محاكي ويقوم باستدعاء <code>snapshot(&quot;01-Home&quot;)</code> في اللحظات التي تريد تسجيلها. يقوم إجراء <code>snapshot</code> من fastlane بتشغيل المحاكيات الصحيحة، وتبديل كل منها إلى اللغة والمنطقة الصحيحة، وتشغيل الاختبار، وسحب صور PNG الناتجة إلى{" "}
          <code>fastlane/screenshots/&lt;locale&gt;/</code>.
        </li>
        <li>
          <strong>تأطير</strong> — يقرأ <code>frameit</code> كل ملف PNG، ويختار إطار جهاز بناءً على دقة الصورة، وبشكل اختياري يقوم بتركيب خلفية وعنوان تسويقي، ويكتب ملف <code>_framed.png</code> بجانب الملف الأصلي.
        </li>
        <li>
          <strong>الرفع</strong> — يتنقل <code>deliver</code> في مجلد لقطات الشاشة، ويطابق كل صورة مع <em>عائلة عرض</em> في App Store Connect (على سبيل المثال،{" "}
          <a href="/blog/app-store-screenshot-sizes">iPhone مقاس 6.9 بوصة، وiPad مقاس 13 بوصة</a>)، ويستبدل مجموعة لقطات الشاشة على إصدار App Store القابل للتعديل عبر واجهة برمجة تطبيقات App Store Connect.
        </li>
      </ol>
      <p>
        كل مرحلة قابلة للتشغيل بشكل مستقل. يمكنك أخذ لقطات شاشة دون رفعها، أو تأطير لقطات شاشة تم إنتاجها بواسطة أداة أخرى، أو رفع لقطات شاشة تم إنشاؤها مسبقًا دون استدعاء المحاكي على الإطلاق.
      </p>

      <h2>2. تثبيت fastlane بالطريقة العقلانية: Bundler</h2>
      <p>
        لا تستخدم الأمر <code>brew install fastlane</code>. قم بتثبيت إصدار fastlane لكل مشروع باستخدام{" "}
        <a
          href="https://bundler.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bundler
        </a>{" "}
        بحيث تشغل كل بيئة عمل تبني مشروعك — سواء كان جهاز الكمبيوتر المحمول الخاص بك، أو الخاص بزميلك، أو بيئة التطوير المستمر (CI) — نفس الإصدار. من جذر المشروع:
      </p>
      <CodeBlock html={blocks.bundlerInstall} />
      <p>
        قم بعمل commit لملفي <code>Gemfile</code> و<code>Gemfile.lock</code>. أضف <code>vendor/bundle</code> إلى ملف <code>.gitignore</code>. الآن قم بتهيئة fastlane في المشروع:
      </p>
      <CodeBlock html={blocks.fastlaneInit} />
      <p>
        يؤدي هذا إلى إنشاء مجلد <code>fastlane/</code> يحتوي على <code>Fastfile</code> و<code>Appfile</code>. املأ معرف الحزمة (bundle identifier) ومعرف الفريق (team ID) في <code>Appfile</code>:
      </p>
      <CodeBlock html={blocks.appfile} />

      <h2>3. مفتاح واجهة برمجة تطبيقات App Store Connect</h2>
      <p>
        تم إيقاف مصادقة اسم المستخدم/كلمة المرور للحسابات الجديدة وتمت حمايتها بالتحقق بخطوتين للجميع، مما يجعلها غير صالحة للاستخدام في بيئات التكامل المستمر (CI). استخدم{" "}
        <a
          href="https://appstoreconnect.apple.com/access/integrations/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          مفتاح واجهة برمجة تطبيقات App Store Connect
        </a>{" "}
        بدلاً من ذلك. في App Store Connect ← <strong>المستخدمون والوصول</strong> ← <strong>عمليات التكامل</strong> ← <strong>واجهة برمجة تطبيقات App Store Connect</strong>:
      </p>
      <ol>
        <li>
          <strong>إنشاء مفتاح API</strong> (تقوم بذلك مرة واحدة فقط لكل فريق؛ لا يمكن إعادة تنزيل ملفات <code>.p8</code> المفقودة).
        </li>
        <li>
          امنحه دور <strong>مدير التطبيق</strong>. دور <strong>المطور</strong> لا يكفي لرفع لقطات الشاشة؛ ودور <strong>المسؤول</strong> هو أكثر مما تحتاج إليه.
        </li>
        <li>
          دون <strong>معرف المفتاح</strong> (10 أحرف، على سبيل المثال <code>ABCD1234EF</code>) و<strong>معرف الجهة المصدرة</strong> للفريق (UUID في الجزء العلوي من الصفحة نفسها).
        </li>
        <li>قم بتنزيل ملف <code>AuthKey_ABCD1234EF.p8</code>.</li>
      </ol>
      <p>
        يقرأ fastlane المفتاح من ملف JSON. احفظه باسم <code>fastlane/asc_api_key.json</code> (وضع هذا المسار in <code>.gitignore</code>):
      </p>
      <CodeBlock html={blocks.ascKey} />
      <p>
        <code>duration</code> هي مدة صلاحية كل رمز JWT يتم إنشاؤه بالثواني؛ والحد الأقصى الذي تقبله Apple هو <code>1200</code> (20 دقيقة). حقل <code>key</code> هو المحتوى الكامل لملف <code>.p8</code>، بما في ذلك سطور <code>BEGIN/END PRIVATE KEY</code>، مع استخدام <code>\n</code> حرفية لفواصل السطور.
      </p>
      <p>
        في بيئة CI، لا ترفع ملف JSON إلى المستودع مطلقًا. احفظ محتويات JSON كسر واحد (مثل <code>ASC_API_KEY_JSON</code>) واكتب الملف في وقت التشغيل — هناك مثال في قسم GitHub Actions أدناه.
      </p>

      <h2>4. snapshot — التقاط لقطات الشاشة في XCUITest</h2>
      <p>
        <code>snapshot</code> يعمل عن طريق حقن مساعد Swift صغير في هدف اختبار واجهة المستخدم (UI Test target) الخاص بك. يقوم المساعد بالارتباط ببيئة تشغيل الاختبار بحيث تأخذ كل مكالمة إلى <code>snapshot(&quot;name&quot;)</code> من اختبارك لقطة شاشة لمحاكي التشغيل، وتسميها، وتكتبها في موقع على القرص يعرف fastlane بالفعل كيفية العثور عليه.
      </p>

      <h3>إنشاء المساعد</h3>
      <CodeBlock html={blocks.snapshotInit} />
      <p>
        يؤدي هذا إلى إنشاء <code>fastlane/Snapfile</code> و{" "}
        <code>fastlane/SnapshotHelper.swift</code>. أضف{" "}
        <code>SnapshotHelper.swift</code> إلى <strong>هدف اختبار واجهة المستخدم</strong> في Xcode (اسحبه إلى الداخل، وتأكد من أن &quot;MyAppUITests&quot; هو الهدف الوحيد المحدد — ولا تقم بدمجه أبدًا في ملف التطبيق الثنائي).
      </p>

      <h3>Snapfile</h3>
      <p>
        يخبر <code>Snapfile</code> إجراء <code>snapshot</code> بالأجهزة التي يجب تشغيلها، واللغات التي يجب تشغيل كل اختبار بها، ومخطط اختبار واجهة المستخدم الذي يجب استدعاؤه:
      </p>
      <CodeBlock html={blocks.snapfile} />
      <p>أبرز النقاط:</p>
      <ul>
        <li>
          <strong><code>devices</code></strong> — يجب أن تطابق الأسماء تمامًا ما يطبعه الأمر <code>xcrun simctl list devices</code>. تغير Apple الأسماء كل عام (على سبيل المثال، حل &quot;iPhone 17 Pro Max&quot; محل &quot;iPhone 16 Pro Max&quot;). إذا كان اسم الجهاز خاطئًا، فسيقوم snapshot بتخطيه بصمت.
        </li>
        <li>
          <strong><code>languages</code></strong> — مرر إما رمز المنطقة مثل <code>&quot;en-US&quot;</code> أو رمز لغة مجرد مثل <code>&quot;ja&quot;</code>. ينشئ كل إدخال مجلدًا تحت <code>output_directory</code>.
        </li>
        <li>
          <strong><code>override_status_bar(true)</code></strong> — يستخدم الأمر <code>simctl status_bar override</code> لإظهار الوقت 9:41، وبطارية كاملة، وإشارة شبكة/Wi-Fi كاملة في كل لقطة شاشة. لا تطلب Apple هذا تقنيًا، ولكن معظم المراجعين يتوقعونه.
        </li>
        <li>
          <strong><code>concurrent_simulators</code></strong> — يقوم بتشغيل محاكيات متعددة بالتوازي. يقلل الوقت الإجمالي تقريبًا بمقدار عدد الأجهزة، ولكن كل محاكي يستهلك حوالي 3 جيجابايت من ذاكرة الوصول العشوائي (RAM)، لذا فهو مكلف للغاية على خوادم CI ذات الموارد المحدودة.
        </li>
        <li>
          <strong><code>clear_previous_screenshots</code></strong> — يمسح المجلد <code>fastlane/screenshots/&lt;locale&gt;/</code> في بداية كل عملية تشغيل. بدون هذا, تتراكم اللقطات القديمة من حالات الاختبار المحذوفة إلى الأبد.
        </li>
      </ul>

      <h3>ربط snapshot باختبار XCUITest الخاص بك</h3>
      <p>
        يكشف <code>SnapshotHelper</code> عن وظيفتين مستقلتين: <code>setupSnapshot(_:)</code> (تستدعى مرة واحدة لكل اختبار) و<code>snapshot(_:)</code> (تستدعى أينما تريد تسجيل إطار).
      </p>
      <CodeBlock html={blocks.snapshotHelper} />
      <p>بعض الملاحظات العملية:</p>
      <ul>
        <li>
          مرر <code>-UITests</code> كمعامل تشغيل وتحقق منه في تطبيقك لتعطيل التحليلات، أو تبديل بيانات عشوائية محددة مسبقًا، أو تخطي شاشات الترحيب، أو محاكاة مكالمات الشبكة. سيشكرك المراجعون (ونفسك المستقبلية) على ذلك.
        </li>
        <li>
          يتوقف <code>snapshot</code> مؤقتًا حتى تكتمل عملية التقاط الشاشة، بحيث يمكنك المضي قدمًا فورًا في التفاعل التالي بعد ذلك.
        </li>
        <li>
          إذا كانت واجهة المستخدم متحركة، فأضف <code>UIView.setAnimationsEnabled(false)</code> خلف معامل التشغيل. تؤدي الحركة أثناء الالتقاط إلى إنتاج لقطات ضبابية.
        </li>
        <li>
          قم بتسمية لقطات الشاشة ببادئة رقمية (<code>01-</code>، <code>02-</code>) بحيث يتطابق ترتيب أسماء الملفات مع ترتيب العرض في App Store Connect. يقوم <code>deliver</code> برفعها بالترتيب الأبجدي.
        </li>
      </ul>

      <h3>تشغيل snapshot</h3>
      <CodeBlock html={blocks.snapshotRun} />
      <p>
        تهبط المخرجات في <code>fastlane/screenshots/&lt;locale&gt;/iPhone 17 Pro Max-01-Home.png</code> وما شابهها. ينشئ Snapshot أيضًا ملف <code>screenshots.html</code> — افتحه للتنقل بين جميع اللغات والأجهزة في صفحة واحدة.
      </p>

      <h2>5. frameit — إضافة إطارات الأجهزة والعناوين</h2>
      <p>
        لقطات الشاشة الخام هي مجرد نوافذ عرض الأجهزة العارية. يقوم <code>frameit</code> بلفها في إطارات أجهزة مادية، ويضيف اختياريًا خلفية، وعنوانًا تسويقيًا، وسطراً أصغر لـ &quot;الكلمة المفتاحية&quot; فوقه.
      </p>
      <CodeBlock html={blocks.frameitDownload} />
      <p>
        لكل ملف <code>foo.png</code> في شجرة لقطات الشاشة، يكتب <code>frameit</code> ملف <code>foo_framed.png</code> بجانبه. تترك الملفات الأصلية في مكانها؛ ويلتقط <code>deliver</code> النسخة المؤطرة تلقائيًا عندما تكون موجودة (ويعود إلى النسخة الخام إذا لم تكن موجودة).
      </p>

      <h3>Framefile.json</h3>
      <p>
        تبدو الإطارات الافتراضية مثل اختبار التطوير — إطار أسود، بدون خلفية، وبدون نص. قم بتكوينها باستخدام <code>fastlane/screenshots/Framefile.json</code>:
      </p>
      <CodeBlock html={blocks.framefile} />
      <p>الحقول الرئيسية:</p>
      <ul>
        <li>
          <strong><code>background</code></strong> — ملف PNG الذي يتم تركيب الجهاز المؤطر عليه. يجب أن يكون أعرض من أكبر لقطة شاشة مخرجة لديك. يقوم <code>frameit</code> بتوسيط الجهاز رأسيًا بشكل افتراضي؛ ويتحكم <code>title_below_image</code> و<code>show_complete_frame</code> في كيفية تفاعل النص والإطار.
        </li>
        <li>
          <strong><code>data[]</code></strong> — تجاوزات لكل لقطة شاشة يتم تحديدها بواسطة فلتر جزء من النص مقابل اسم ملف لقطة الشاشة. ينطبق الإدخال الثاني أعلاه فقط على الملفات التي تحتوي على &quot;Settings&quot; في الاسم. استخدم هذا لتخصيص الألوان لكل صف.
        </li>
        <li>
          <strong><code>frame</code></strong> — يتجاوز لون إطار الجهاز للملفات المطابقة. القيم التي يتعرف عليها <code>frameit</code> في <code>Framefile.json</code> هي <code>BLACK</code> و<code>WHITE</code> و<code>GOLD</code> و<code>ROSE_GOLD</code>. يتم تنزيل رسومات الإطار نفسها من ملفات Sketch الخاصة بموارد التسويق لـ Apple عبر الأمر <code>fastlane frameit download_frames</code>.
        </li>
      </ul>

      <h3>ملفات title.strings و keyword.strings لكل لغة</h3>
      <p>
        تأتي النصوص التسويقية من ملفي نصوص متوازيين لكل لغة — <code>title.strings</code> للعنوان الرئيسي و<code>keyword.strings</code> للتسمية الأصغر فوقه. المفاتيح هي أسماء ملفات لقطات الشاشة بدون الامتداد أو بادئة الجهاز:
      </p>
      <CodeBlock html={blocks.titleStrings} />
      <CodeBlock html={blocks.keywordStrings} />
      <p>
        تذهب الترجمات إلى <code>fastlane/screenshots/de-DE/title.strings</code> و<code>fastlane/screenshots/de-DE/keyword.strings</code>، و<code>fastlane/screenshots/ja/title.strings</code>، وما إلى ذلك. استخدم <code>\n</code> لفواصل السطور. تعود اللغات المفقودة إلى لقطة الشاشة غير المترجمة (لا يتم عرض عنوان) — لا يوجد تراجع تلقائي إلى اللغة الإنجليزية.
      </p>

      <h3>الخطوط</h3>
      <p>
        ضع ملفات TTF أو OTF في <code>fastlane/screenshots/fonts/</code> وأشر إليها بمسار نسبي في <code>Framefile.json</code>. الخطوط المتغيرة مدعومة. إذا أشرت إلى خط غير موجود، فسيعود frameit بصمت إلى خط sans-serif افتراضي وستظهر النتيجة خاطئة دون أي تحذير.
      </p>

      <h2>6. deliver — الرفع إلى App Store Connect</h2>
      <p>
        يمر <code>deliver</code> عبر مجلد لقطات الشاشة، ويطابق كل ملف PNG مع عائلة عرض في App Store Connect، ثم يتحدث مع واجهة برمجة تطبيقات App Store Connect لاستبدال مجموعة لقطات الشاشة في الإصدار القابل للتعديل حاليًا. مع استخدام مصادقة مفتاح واجهة برمجة التطبيقات وملف <code>Deliverfile</code> المحدد، تكون خطوة الرفع عبارة عن أمر واحد فقط.
      </p>

      <h3>تخطيط المجلد</h3>
      <p>
        يتوقع <code>deliver</code> تخطيطًا مسطحًا لكل لغة — بدون مجلدات فرعية للأجهزة. يتم اكتشاف عائلة العرض من دقة الصورة (وعند وجود غموض، من بادئة الجهاز في اسم الملف الذي يضيفه <code>snapshot</code> بالفعل):
      </p>
      <CodeBlock html={blocks.folderLayout} />

      <h3>Deliverfile</h3>
      <CodeBlock html={blocks.deliverfile} />
      <p>العلامات الأكثر أهمية:</p>
      <ul>
        <li>
          <strong><code>skip_binary_upload</code></strong> — بدون هذا، يبحث <code>deliver</code> عن ملف IPA ويرفض التشغيل إذا لم يكن موجودًا.
        </li>
        <li>
          <strong><code>skip_metadata</code></strong> — اضبطه على <code>true</code> إذا كنت تريد فقط لقطات الشاشة ولا تملك مجلد <code>fastlane/metadata/</code>. اضبطه على <code>false</code> لشحن العناوين المترجمة والأوصاف والكلمات المفتاحية والنصوص الترويجية في نفس الاستدعاء.
        </li>
        <li>
          <strong><code>force(true)</code></strong> — يتخطى موجه التأكيد &quot;هل أنت متأكد؟&quot; الذي يعرضه <code>deliver</code> قبل الدفع. مطلوب في CI.
        </li>
        <li>
          <strong><code>overwrite_screenshots(true)</code></strong> — يمسح مجموعة لقطات الشاشة الحالية في كل عائلة عرض قبل رفع اللقطات الجديدة. بدون ذلك، يتم إلحاق عمليات الرفع الجديدة باللقطات القديمة حتى حد 10 لقطات شاشة، ثم تفشل العملية.
        </li>
        <li>
          <strong><code>run_precheck_before_submit(false)</code></strong> — يفحص إجراء <code>precheck</code> البيانات الوصفية بحثًا عن مصطلحات محفوفة بالمخاطر (&quot;Beta&quot;، أسماء المنافسين، الكلمات الخاضعة للرقابة). وهو رائع قبل التقديم النهائي ولكنه غير مناسب لعمليات تحديث لقطات الشاشة فقط.
        </li>
      </ul>

      <h3>التشغيل التجريبي، ثم الشحن</h3>
      <CodeBlock html={blocks.dryRun} />
      <p>
        في أول عملية رفع حقيقية، يطبع <code>deliver</code> معاينة HTML في <code>fastlane/preview.html</code> وينتظر التأكيد ما لم يتم تعيين <code>force(true)</code>. افتح المعاينة دائمًا في المرة الأولى لعائلة أجهزة جديدة — فهناك تظهر حالات عدم تطابق عائلة العرض.
      </p>

      <h2>7. ملف Fastfile الكامل</h2>
      <p>
        ملف واحد بأربعة مسارات تغطي الالتقاط، والتأطير، والالتقاط والتأطير معًا، والشحن الكامل. يستخدم التطوير المحلي مسارًا واحدًا؛ ويستخدم CI مسارًا آخر.
      </p>
      <CodeBlock html={blocks.fastfile} />
      <p>
        تعد أسماء <code>capture_ios_screenshots</code> و<code>frame_screenshots</code> و<code>upload_to_app_store</code> هي الأسماء المعتمدة لـ <code>snapshot</code> و<code>frameit</code> و<code>deliver</code>. الأسماء القصيرة لا تزال تعمل ولكن الأسماء الطويلة أوضح ولا تتداخل مع الكلمات المفتاحية في Ruby.
      </p>

      <h2>8. التكامل المستمر (CI) على GitHub Actions</h2>
      <p>
        عمليات التقاط الشاشة بطيئة (15 دقيقة هو الوقت المعتاد لـ 5 لغات × 3 أجهزة) ولكنها تتوازى بشكل جيد عبر المحاكيات. عادةً ما تكون بيئة تشغيل <code>macos-26</code> واحدة مع محاكيات متزامنة كافية.
      </p>
      <CodeBlock html={blocks.ghaWorkflow} />
      <p>أشياء تجعل تشغيل CI موثوقًا به:</p>
      <ul>
        <li>
          <strong>تثبيت إصدار Xcode.</strong> استخدم الأمر <code>sudo xcode-select -s</code> بمسار صريح. تشحن بيئات التشغيل المستضافة من GitHub إصدارات متعددة من Xcode والإصدار الافتراضي هو ما قرروه لهذا الشهر.
        </li>
        <li>
          <strong>تثبيت صورة بيئة التشغيل.</strong> استخدم صورة ذات إصدار محدد مثل <code>macos-26</code> أو <code>macos-15</code>، وليس <code>macos-latest</code>. تحديث بيئة التشغيل قبل ثلاثة أسابيع من الإصدار هو نوع المفاجآت التي لا تريدها.
        </li>
        <li>
          <strong>تخزين تثبيت Bundler مؤقتًا.</strong> يؤدي تعيين <code>bundler-cache: true</code> في <code>setup-ruby</code> إلى توفير دقيقة أو دقيقتين في كل تشغيل.
        </li>
        <li>
          <strong>كتابة مفتاح API من سر واحد.</strong> يعد تخزين <code>key_id</code> و<code>issuer_id</code> و<code>key</code> كأسرار منفصلة أكثر ملاءمة للتناوب ولكنه أكثر عرضة للأخطاء. سر واحد بتنسيق JSON مناسب للفرق الصغيرة.
        </li>
        <li>
          <strong>رفع لقطات الشاشة المؤطرة كأرشيف (artifact)</strong> حتى عند فشل خطوة الرفع. ستحتاج دائمًا تقريبًا إلى فحص ما تم إنشاؤه قبل إعادة التشغيل.
        </li>
      </ul>

      <h2>9. الأخطاء الشائعة وحلولها</h2>
      <h3>&quot;Could not find a device matching...&quot;</h3>
      <p>
        يجب أن تطابق أسماء أجهزة Snapshot الأمر <code>xcrun simctl list devicetypes</code> تمامًا. تشحن Apple جهازًا جديدًا متصدرًا كل عام، ويعني نظام التسمية المستند إلى التقويم السنوي من Apple أن سلسلة الأدوات تتقدم بسرعة. يشحن <code>&quot;iPhone 17 Pro Max&quot;</code> مع <strong>Xcode 26</strong> (تم إصداره في خريف 2025)؛ وعلى Xcode 16 كان الجهاز مقاس 6.9 بوصة هو <code>&quot;iPhone 16 Pro Max&quot;</code>. بعد كل ترقية لـ Xcode، أعد تشغيل <code>xcrun simctl list devicetypes | grep iPhone</code> وقم بتحديث <code>Snapfile</code>.
      </p>

      <h3>&quot;Unable to verify upload&quot; / 401 Unauthorized</h3>
      <p>
        انتهت صلاحية رمز JWT الخاص بك في منتصف عملية الرفع، أو تم إلغاء مفتاح API، أو تم خفض دوره. تحقق من أن <code>duration</code> في <code>asc_api_key.json</code> لا يتجاوز <code>1200</code>، ثم أعد إصدار المفتاح.
      </p>

      <h3>&quot;App Store Connect is locked&quot;</h3>
      <p>
        الإصدار الذي تقوم بالرفع إليه قيد <em>المراجعة (In Review)</em> أو <em>في انتظار إصدار المطور (Pending Developer Release)</em>. لقطات الشاشة تكون للقراءة فقط في هذه الحالات. أنشئ إصدارًا جديدًا (خانة &quot;التحضير لتقديم الطلب&quot;) وأعد التشغيل.
      </p>

      <h3>تنتهي لقطات الشاشة في عائلة عرض خاطئة</h3>
      <p>
        يطابق <code>deliver</code> حسب دقة الصورة. إذا قمت بتصدير لقطة شاشة iPhone مقاس 6.9&quot; بدقة 1320 × 2868 فستهبط في خانة 6.9&quot;؛ وإذا قمت بتغيير حجمها إلى 1284 × 2778 فستهبط في خانة 6.5&quot; القديمة. إذا كانت كلا عائلتي العرض موجودتين في إصدارك، فقدم عائلة الجهاز في اسم الملف — وهو البادئة التي ينتجها <code>snapshot</code> بالفعل. غالبًا ما تتجاهلها عمليات التصدير اليدوية.
      </p>

      <h3>&quot;Screenshot has alpha channel&quot; / شفافية غير متوقعة</h3>
      <p>
        رفض متجر App Store Connect تاريخيًا ملفات PNG ذات الشفافية، ولا يزال <code>deliver</code> يحذر عندما يرى قناة ألفا (alpha channel). لا تنص صفحة مواصفات لقطات الشاشة الحالية من Apple على هذه القاعدة صراحةً، ولكن تسطيح القناة الشفافة (alpha) هو الخطوة الآمنة. قم بتمرير الملف عبر <code>sips -s format png</code> مع ملف تعريف ألوان PNG، أو أعد التصدير بدون قناة ألفا. تكون المخرجات المركبة من <code>frameit</code> معتمة دائمًا؛ ويمكن أن تتضمن مخرجات <code>simctl io ... screenshot</code> الخام قناة ألفا إذا لم تكن طريقة العرض الجذرية معتمة.
      </p>

      <h3>&quot;Locale ru-RU does not exist for this app&quot;</h3>
      <p>
        يقوم <code>deliver</code> بالرفع فقط إلى لغات App Store Connect الموجودة بالفعل في الإصدار. أضف اللغة في App Store Connect أولاً (أو اضبط <code>force_create_app(true)</code> + البيانات الوصفية في <code>deliver</code>)، ثم أعد التشغيل.
      </p>

      <h3>المحاكيات المتزامنة تلتهم كل ذاكرة الوصول العشوائي (RAM)</h3>
      <p>
        يكلف كل محاكي iPhone 17 Pro Max تم تشغيله مع ظهور لوحة المفاتيح حوالي 2.5 جيجابايت. على جهاز MacBook بسعة 16 جيجابايت، سيؤدي تشغيل ثلاثة محاكيات في وقت واحد إلى استخدام الذاكرة الافتراضية والانهيار في منتصف الاختبار. اضبط <code>concurrent_simulators(false)</code> محليًا؛ ودع CI يقوم بتشغيلها بالتوازي على بيئة تشغيل أقوى.
      </p>

      <h2>10. عندما تكون أداة fastlane أكثر من اللازم</h2>
      <p>
        يكون خط أنابيب لقطات الشاشة لـ fastlane رائعًا عندما:
      </p>
      <ul>
        <li>
          يكون لديك بالفعل هدف اختبار واجهة مستعمل ويكون فريقك مرتاحًا في الحفاظ على ثوابت XCUITest.
        </li>
        <li>
          تريد أن تكون لقطات الشاشة أرشيفًا للتكامل المستمر (CI artifact)، يتم تجديده في كل إصدار.
        </li>
        <li>
          تقوم بالتوطين وتريد تحديد التخطيط مرة واحدة في الكود، وليس إعادة رسمه لكل لغة.
        </li>
      </ul>
      <p>وهو الاختيار الخاطئ عندما:</p>
      <ul>
        <li>
          تريد توجيهًا فنيًا كاملاً لكل لقطة شاشة — الطباعة، التكوين، العناصر الزخرفية. يعد <code>frameit</code> محرك قوالب، وليس أداة تصميم.
        </li>
        <li>
          تحتاج إلى شحن <a href="/blog/screenshots-that-convert">لقطة شاشة بجودة تسويقية</a> لميزة غير موجودة بعد في التطبيق، أو موجودة فقط خلف ميزة معطلة (feature flag) لا يمكن لهدف الاختبار الوصول إليها.
        </li>
        <li>
          تكون مطورًا مستقلاً تفضل التصميم مرة واحدة في تطبيق Mac والنقر على <strong>رفع</strong>. تعد سلسلة أدوات Ruby بالإضافة إلى XCUITest بالإضافة إلى تثبيت إصدار Xcode عبئًا حقيقيًا في الصيانة.
        </li>
      </ul>
      <p>
        بالنسبة لسير العمل القائم على التصميم أولاً، تغطي أداة <a href="/">Screenshot Bro</a> نفس المجال — <a href="/blog/localize-app-store-screenshots">التخطيطات الموطنة</a>، وإطارات الأجهزة، و<a href="/blog/upload-screenshots-to-app-store-connect">الرفع بنقرة واحدة إلى App Store Connect</a> باستخدام نفس مفتاح واجهة برمجة التطبيقات — دون تعقيدات XCUITest.
      </p>

      <h2>ورقة مرجعية سريعة (TL;DR)</h2>
      <CodeBlock html={blocks.cheatSheet} />
      <p>
        هذا هو خط الأنابيب بالكامل. أمران عند التثبيت، وأمر واحد لكل إصدار. يكمن التعقيد في ملفات التكوين أعلاه — وبمجرد كتابتها، نادرًا ما تتغير.
      </p>
      <p>
        هل تتساءل عما إذا كان يجب إعداد هذا على الإطلاق، أو استخدام تطبيق Mac لنفس المهمة؟ انظر <a href="/vs/fastlane-snapshot">Fastlane snapshot مقابل Screenshot Bro</a> للمقارنة جنبًا إلى جنب وسير عمل &quot;استخدام الاثنين معًا&quot;.
      </p>
    </>
  );
}
