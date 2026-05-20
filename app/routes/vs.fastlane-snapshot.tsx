import type { Route } from "./+types/vs.fastlane-snapshot";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { mergeMeta } from "~/config/meta";
import { SITE_NAME, SITE_URL, MINIMUM_MACOS_VERSION } from "~/config/site";

const PAGE_TITLE = `Fastlane snapshot vs ${SITE_NAME} — which to use?`;
const PAGE_DESCRIPTION =
  "Fastlane snapshot captures UI screenshots from XCUITest; Screenshot Bro designs marketing screenshots. They solve different problems.";
const PAGE_URL = `${SITE_URL}/vs/fastlane-snapshot`;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: PAGE_TITLE },
    { name: "description", content: PAGE_DESCRIPTION },
    { property: "og:type", content: "article" },
    { property: "og:title", content: PAGE_TITLE },
    { property: "og:description", content: PAGE_DESCRIPTION },
    { property: "og:url", content: PAGE_URL },
    { property: "og:image", content: `${SITE_URL}/og-image.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: PAGE_TITLE },
    { name: "twitter:description", content: PAGE_DESCRIPTION },
    { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
  ]);

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: PAGE_URL },
];

const FAQ_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Fastlane snapshot free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fastlane is MIT-licensed open source. snapshot, frameit, and deliver are bundled in the same fastlane gem and have no usage fees. You pay in setup time and CI runner minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Can Screenshot Bro replace Fastlane snapshot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not directly. snapshot drives your app via XCUITest to capture raw UI screenshots; Screenshot Bro takes raw screenshots (from anywhere — simulator, real device, snapshot, or designer mocks) and turns them into marketing assets with frames, headlines, gradients, and locales. The two tools sit on different sides of the same pipeline.",
      },
    },
    {
      "@type": "Question",
      name: "Can Fastlane snapshot replace Screenshot Bro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not for App Store marketing screenshots. snapshot captures clean app UI; frameit can wrap that UI in a device frame and add a localized title from .strings files. Screenshot Bro adds the design layer above that — multi-row layouts, spanning gradients, text shapes, custom fonts, on-device auto-translation, and direct App Store Connect upload.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need Xcode and UI tests to use Screenshot Bro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Screenshot Bro accepts any PNG or JPEG — drop screenshots from the iOS Simulator, a real device, snapshot output, designer mocks, or anything else. You only need UI tests if you want fully automated re-capture, which is what snapshot is for.",
      },
    },
  ],
});

export default function FastlaneSnapshotComparison() {
  return (
    <ContentLayout>
      <article className="max-w-3xl mx-auto prose-policy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: FAQ_JSON_LD }}
        />

        <p className="meta">Comparison · 8 min read</p>
        <h1>Fastlane snapshot vs Screenshot Bro</h1>
        <p>
          <strong>TL;DR:</strong> these tools solve different problems.
          Fastlane <em>snapshot</em> is a UI-test-driven screenshot{" "}
          <em>capture</em> tool. {SITE_NAME} is a screenshot{" "}
          <em>design</em> tool. Most teams shipping to the App Store and
          Google Play end up using both — snapshot (or simulator captures)
          for the raw UI, then a designer-tool to add device frames,
          headlines, gradients, and locales.
        </p>

        <h2>What each tool actually does</h2>

        <h3>Fastlane snapshot</h3>
        <p>
          <strong>snapshot</strong> is part of{" "}
          <a
            href="https://fastlane.tools/"
            target="_blank"
            rel="noopener noreferrer"
          >
            fastlane
          </a>{" "}
          (MIT-licensed). You write XCUITest cases that drive your real app
          and call <code>snapshot("01-Home")</code> at each frame you want
          to capture. fastlane runs the test suite across the device sizes
          and locales you list in <code>Snapfile</code> and saves a folder
          of clean PNGs. It supports iOS, tvOS, and watchOS, and tests can
          be written in Swift or Objective-C.
        </p>
        <p>
          Two adjacent fastlane tools usually come along:
        </p>
        <ul>
          <li>
            <strong>frameit</strong> — wraps each captured screenshot in a
            device frame and optionally overlays a localized title from a{" "}
            <code>.strings</code> file. Requires ImageMagick. Frame catalog
            covers iPhone, iPad, Mac, and Android, and at the time of
            writing the latest iPhone frame in{" "}
            <a
              href="https://github.com/fastlane/frameit-frames/tree/gh-pages/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              frameit-frames
            </a>{" "}
            is iPhone 16 — iPhone 17 frames are not yet shipped.
          </li>
          <li>
            <strong>deliver</strong> — uploads framed screenshots (and
            optionally metadata) to App Store Connect. Pairs with{" "}
            <code>supply</code> for Google Play.
          </li>
        </ul>
        <p>
          The fastlane project is actively maintained and has 41k+ stars on
          GitHub.
        </p>

        <h3>{SITE_NAME}</h3>
        <p>
          {SITE_NAME} is a native macOS app (Swift + SwiftUI, macOS{" "}
          {MINIMUM_MACOS_VERSION}+). It does not capture screenshots from a
          running app — you bring your own raw images, by drag-and-drop or
          one-click capture from the iOS Simulator, and the app handles
          the design and ship side: device frames, multi-shape layouts,
          gradients, custom fonts, on-device auto-translation across 30
          languages, and direct upload to App Store Connect via the API.
          Free tier is unlimited in time (1 project, 3 rows, 5 templates
          per row); Pro lifts those limits and adds App Store Connect
          upload and iCloud sync.
        </p>

        <h2>Side-by-side</h2>

        <table>
          <thead>
            <tr>
              <th></th>
              <th>Fastlane snapshot</th>
              <th>{SITE_NAME}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>License / cost</td>
              <td>MIT, free, open source</td>
              <td>Free tier + paid Pro (in-app purchase)</td>
            </tr>
            <tr>
              <td>Distribution</td>
              <td>Ruby gem via bundler</td>
              <td>Mac App Store</td>
            </tr>
            <tr>
              <td>Primary job</td>
              <td>Capture app UI screenshots from XCUITest</td>
              <td>Design marketing screenshots from raw images</td>
            </tr>
            <tr>
              <td>Source of screenshots</td>
              <td>Generated by running your test suite</td>
              <td>You provide them (any PNG/JPEG)</td>
            </tr>
            <tr>
              <td>Device frames</td>
              <td>
                Via separate <code>frameit</code> tool — iPhone (up to 16),
                iPad, Mac, Android; ImageMagick required
              </td>
              <td>
                Built in — iPhone 17, 17 Pro, 17 Pro Max, iPhone Air, iPad
                Pro 11"/13", MacBook Air 13", MacBook Pro 14"/16", iMac
                24", Apple Watch Ultra 3, plus generic Android phone /
                tablet
              </td>
            </tr>
            <tr>
              <td>Headline / overlay text</td>
              <td>
                <code>frameit</code> overlays a single title from{" "}
                <code>.strings</code>
              </td>
              <td>
                Multi-shape canvas: text, images, gradients, SVGs, custom
                fonts, alignment guides
              </td>
            </tr>
            <tr>
              <td>Localization</td>
              <td>
                Languages listed in <code>Snapfile</code> drive a full
                test-suite re-run; titles localized via{" "}
                <code>.strings</code>
              </td>
              <td>
                30 language presets; auto-translate runs on-device via
                Apple's Translation framework; per-locale text overrides
              </td>
            </tr>
            <tr>
              <td>App Store Connect upload</td>
              <td>
                Via separate <code>deliver</code> tool (App Store Connect
                API)
              </td>
              <td>
                Built in — paste API key once, upload replaces existing
                screenshots in one pass
              </td>
            </tr>
            <tr>
              <td>Google Play upload</td>
              <td>
                Via <code>supply</code>
              </td>
              <td>
                Export only — Android phone and tablet rows render
                alongside iOS in the same project; upload to Play Console
                still manual
              </td>
            </tr>
            <tr>
              <td>tvOS / watchOS / visionOS</td>
              <td>
                snapshot officially supports iOS, tvOS, and watchOS
                screenshot capture. visionOS isn't called out in the
                snapshot docs.
              </td>
              <td>
                Apple Watch Ultra 3 frame included; no tvOS or visionOS
                device frames at this time
              </td>
            </tr>
            <tr>
              <td>CI integration</td>
              <td>
                First-class — designed for headless CI runs
              </td>
              <td>
                Not a CI tool. Designed for interactive use on a Mac
              </td>
            </tr>
            <tr>
              <td>Setup time</td>
              <td>
                Hours: write UI tests, configure Snapfile, install
                ImageMagick, configure frameit, set up API key
              </td>
              <td>Minutes: drop screenshots in, pick frames, export</td>
            </tr>
            <tr>
              <td>Ongoing maintenance</td>
              <td>
                UI tests must keep up with app changes; flaky-test risk
              </td>
              <td>
                Re-drop the new screenshots; layout and locale overrides
                stay
              </td>
            </tr>
            <tr>
              <td>macOS requirement</td>
              <td>
                Mac with Xcode for capture; deliver runs anywhere Ruby does
              </td>
              <td>
                Native macOS {MINIMUM_MACOS_VERSION}+ app (Apple Silicon or
                Intel)
              </td>
            </tr>
          </tbody>
        </table>

        <h2>When to pick Fastlane snapshot</h2>
        <ul>
          <li>
            Your app changes frequently and you want screenshots that
            always reflect the current build, regenerated by CI.
          </li>
          <li>
            You ship dozens of locales and the alternative is manually
            re-shooting each one every release.
          </li>
          <li>
            You already have UI tests (or can justify writing them) and
            your team is comfortable with Ruby/fastlane configuration.
          </li>
          <li>
            You have a deterministic CI pipeline (GitHub Actions, Bitrise,
            Xcode Cloud) where adding a 15-minute screenshot lane is
            acceptable.
          </li>
          <li>
            Your marketing screenshots are simple — device frame plus a
            single localized title is enough — so frameit covers the
            design layer.
          </li>
        </ul>

        <h2>When to pick {SITE_NAME}</h2>
        <ul>
          <li>
            You want a polished marketing layout — headlines, gradients,
            spanning backgrounds, multi-shape compositions, branded fonts
            — that frameit's title-overlay model can't express.
          </li>
          <li>
            You ship to both App Store and Google Play and want to manage
            both sets in one project.
          </li>
          <li>
            You don't have UI tests and would rather drop simulator
            screenshots in than write XCUITest scaffolding.
          </li>
          <li>
            You need iPhone 17 / iPhone Air / iPad Pro / MacBook Pro
            14"/16" / Apple Watch Ultra 3 frames today.
          </li>
          <li>
            You prefer a GUI to a YAML/Ruby config, and a one-click
            export-then-upload over a CI pipeline.
          </li>
          <li>
            You want auto-translation that runs on-device — no API keys,
            no third-party servers, no usage tracking.
          </li>
        </ul>

        <h2>Use both: the typical pipeline</h2>
        <p>
          The two tools fit together cleanly. A common shipping flow:
        </p>
        <ol>
          <li>
            <strong>Capture</strong> raw UI screenshots with{" "}
            <code>fastlane snapshot</code>, or by hand from the iOS
            Simulator. The output is a folder of clean PNGs.
          </li>
          <li>
            <strong>Design</strong> in {SITE_NAME}: drop the folder onto
            the canvas (it routes shots to the right device row by pixel
            size), add device frames, headlines, gradients, and locales.
          </li>
          <li>
            <strong>Export</strong> a tree of locale × row × template
            PNGs.
          </li>
          <li>
            <strong>Upload</strong> directly from {SITE_NAME} via your App
            Store Connect API key, or hand the export folder to{" "}
            <code>fastlane deliver</code> if you've already wired it up.
          </li>
        </ol>
        <p>
          Teams that want fully automated capture-to-upload usually keep
          fastlane in the loop for the capture step and use {SITE_NAME}{" "}
          for the design + upload. Teams that don't have UI tests skip
          fastlane entirely and use {SITE_NAME} end-to-end.
        </p>

        <h2>Frequently confused points</h2>

        <h3>"Doesn't frameit handle the design?"</h3>
        <p>
          frameit overlays a device frame and one localized title from a{" "}
          <code>.strings</code> file. It does not produce multi-shape
          layouts, spanning gradients, custom typography, or branded
          backgrounds. If your final asset is "device + one line of text,"
          frameit is enough. If it's "two devices on a gradient with a
          headline that flows across them, plus a logo and a feature
          callout," you need a design tool.
        </p>

        <h3>"Doesn't snapshot already do everything?"</h3>
        <p>
          snapshot is a capture tool — it drives your app via XCUITest and
          saves the result. It does not add device frames, headlines, or
          marketing design. The full fastlane store-screenshot pipeline is
          three tools: <code>snapshot</code> + <code>frameit</code> +{" "}
          <code>deliver</code>.
        </p>

        <h3>"Can {SITE_NAME} capture screenshots from my app?"</h3>
        <p>
          Not by running tests. {SITE_NAME} accepts raw images you provide
          — drag and drop from anywhere. There is a one-click button on
          each template that pulls the most recent iOS Simulator
          screenshot directly into the canvas, which covers the manual
          flow, but there is no XCUITest integration.
        </p>

        <h3>"Is fastlane abandoned?"</h3>
        <p>
          No. The repository is actively maintained — version 2.233.1 was
          released in April 2026 — with 41k+ stars and continuous commit
          activity. The project is a stable, production-grade tool used
          across the Apple developer ecosystem.
        </p>

        <h2>The honest bottom line</h2>
        <p>
          If you read this page hoping for "X is better than Y" — that's
          the wrong frame. snapshot solves <em>capture</em> and{" "}
          {SITE_NAME} solves <em>design + upload</em>. The right question
          is which side of the pipeline matters more to your release
          cycle, and whether you want a CI-native or interactive workflow
          for each side.
        </p>
        <p>
          If your screenshots are already good enough as raw UI plus a
          single localized title, fastlane is enough. If you want the
          marketing-design layer (or you don't want to write UI tests),
          drop {SITE_NAME} into the pipeline.
        </p>

        <h2>Related reading</h2>
        <ul>
          <li>
            <a href="/blog/make-and-ship-screenshots-with-fastlane">
              Fastlane: Make and Ship App Store Screenshots (2026 Guide)
            </a>{" "}
            — full <code>Snapfile</code>, <code>Framefile.json</code>,{" "}
            <code>Deliverfile</code>, and a GitHub Actions workflow.
          </li>
          <li>
            <a href="/blog/upload-screenshots-to-app-store-connect">
              How to Upload Screenshots to App Store Connect
            </a>{" "}
            — the four ways to upload, and when to pick each.
          </li>
          <li>
            <a href="/blog/localize-app-store-screenshots">
              Localizing App Store Screenshots Without Losing Your Mind
            </a>{" "}
            — patterns for managing many languages without exploding your
            workload.
          </li>
          <li>
            <a href="/docs/help">{SITE_NAME} help & documentation</a> —
            full reference for projects, rows, templates, locales, and the
            App Store Connect upload flow.
          </li>
        </ul>

        <BlogCTA message="Drop simulator or device screenshots straight into Screenshot Bro and ship the marketing layer in minutes." />
      </article>
    </ContentLayout>
  );
}
