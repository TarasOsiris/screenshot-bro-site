import type { Route } from "./+types/vs.screenshots-pro";
import {
  ComparisonShell,
  ComparisonTable,
  type ComparisonRow,
  type RelatedLink,
} from "~/components/ComparisonShell";
import type { BlogFaqItem } from "~/config/blog-seo";
import { buildComparisonMeta } from "~/config/comparison-seo";
import { SCREENSHOT_BRO_FACTS } from "~/config/comparisons";
import {
  MINIMUM_IPADOS_VERSION,
  MINIMUM_MACOS_VERSION,
  SITE_NAME,
} from "~/config/site";

const SLUG = "screenshots-pro";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildComparisonMeta(SLUG, matches);

const ROWS: ComparisonRow[] = [
  {
    factor: "Platform & install",
    them: "Web app in the browser; nothing to install, any OS",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "Not to start editing (“no account needed”); an account holds cloud auto-saves, paid plans and the API token",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Basic $0 forever; Standard $19/month; Extended $49/month; “save 35%” billed annually",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "All devices, all pre-made templates, all editor features, auto-save, smart-export; no 3D angles, template storage, custom fonts or localization",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "Watermark not stated on its site; the Basic licence requires an attribution link wherever the screenshots are used",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "“23 pixel-perfect devices”, clay and real styles; newest named on its site are iPhone 16 / 16 Pro Max, iPad Pro M4, Pixel 8 Pro",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "Smart-export renders one design at every App Store and Google Play size",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "Drag-and-drop template with named text and device objects per screenshot; spanning across screenshots not stated on its site",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "Pre-made App Store and Google Play library (count not stated), all on Basic; saving your own needs Standard",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "Automatic translation “to any language supported by App Store and Google Play Store”; count not stated; Standard and up",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "Not stated on its site; you download the export (the API returns a zip)",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "Not stated on its site; same download-and-upload-yourself flow",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "PNG at “4K+” in all store sizes from one design; API renders arrive as a zip download URL",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "Seven 3D perspective angles on its 3D-enabled devices (Standard and up); video not mentioned on its site",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "REST API on Extended: POST a template id with text and screenshot-URL modifications, get a zip URL within 60 seconds; built for CI/CD",
    us: "No hosted API or CLI, so nothing for CI to call; a local, opt-in MCP server on Mac lets AI agents drive edits",
  },
  {
    factor: "Offline & file ownership",
    them: "Browser only; projects auto-save to its cloud; exports are yours under the plan’s licence",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Not stated on its site; one account with cloud-saved templates",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Teams regenerating screenshot sets from CI, and anyone who wants a browser editor with nothing to install",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is Screenshots Pro free?",
    answer:
      "Its Basic plan is $0 forever and, per its pricing page, includes all devices, all pre-made templates, all editor features, auto-save and smart-export for all sizes. The licence page adds that Basic output must carry an attribution link wherever it is used. 3D angles, template storage, custom fonts and localization start at Standard ($19/month); API access starts at Extended ($49/month).",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with no signup and no expiry. The free tier gives you 1 project, 3 rows and 5 templates per row with every device frame, shape and locale, watermark-free exports, and App Store Connect upload, Google Play upload and iCloud sync included. Pro removes the project, row and template limits and is sold as a lifetime purchase or a subscription, priced in the app.",
  },
  {
    question: "Can Screenshot Bro open Screenshots Pro projects?",
    answer:
      "No. Screenshots Pro templates live in its cloud account and Screenshot Bro reads only its own plain-JSON project files, so there is no import in either direction. Bring the raw screenshots, the headline copy, your font files and brand colours, and rebuild the layouts; a typical set is an afternoon of work.",
  },
  {
    question: "Can Screenshot Bro regenerate screenshots from CI like Screenshots Pro's API does?",
    answer:
      "No. Screenshot Bro has no hosted API and no CLI, so a build server cannot call it. The only automation surface is a local, opt-in MCP server on Mac that lets an AI agent drive edits in the open app. If your pipeline must re-render screenshots on every release without a person in the loop, Screenshots Pro's Extended plan is the right tool.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/screenshots-pro-alternative",
    label: "Screenshots Pro Alternative: A Native Screenshot App",
    description:
      "the longer version of the switch, for people who have already decided to leave the browser editor.",
  },
  {
    href: "/blog/best-app-screenshot-localization-tools",
    label: "Best App Screenshot Localization Tools (2026)",
    description:
      "language coverage, built-in translation and per-locale overrides across the tools that do localization.",
  },
  {
    href: "/blog/screenshot-bro-alternatives",
    label: "Screenshot Bro Alternatives: When to Use Another Tool",
    description:
      "when this app is the wrong choice, including CI automation, Windows and video.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function ScreenshotsProComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          Screenshots Pro is the one to keep if your screenshot sets are
          regenerated from a CI pipeline through its REST API, or if you want
          a browser editor with nothing to install. {SITE_NAME} fits when one
          person designs on a Mac, wants the project as a local file that
          works offline, and uploads straight to App Store Connect and Google
          Play without a subscription. Both free tiers are real, not trials.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="If one person on a Mac designs the set and uploads it by hand, you do not need a cloud account or a zip download in the middle. Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>Screenshots Pro</h3>
      <p>
        Screenshots Pro is a browser-based screenshot generator for iOS and
        Android store listings, first released in May 2022 according to its
        changelog. You pick a template, drop screenshots into the device slots,
        edit the text in a drag-and-drop editor, and its &quot;smart-export&quot;
        renders the design at every App Store and Google Play size in one go.
        The homepage counts &quot;23 pixel-perfect devices&quot; in clay and
        real-device styles, portrait and landscape. The newest devices named on
        the site are the iPhone 16 / 16 Pro Max, iPad Pro M4 and Google Pixel
        8 Pro; the last changelog entry, dated 25 October 2024, added the
        iPhone 16 and the iPad Pro M4.
      </p>
      <p>
        The{" "}
        <a
          href="https://screenshots.pro/pricing"
          target="_blank"
          rel="noopener noreferrer"
        >
          pricing page
        </a>{" "}
        lists three plans. Basic is &quot;$0 forever&quot; with all devices,
        all pre-made templates, all editor features, auto-save and smart-export
        for all sizes. Standard is $19/month and adds 3D angles (seven
        perspective variations per 3D-enabled device), template storage, custom
        fonts, localization and a standard licence. Extended is $49/month and
        adds API access, the right to charge end clients and an extended
        licence. Annual billing is marked &quot;save 35%&quot;. The licence
        page adds a detail the pricing page leaves out: Basic output must carry
        an attribution link wherever it is used. Localization is automatic
        translation &quot;to any language supported by App Store and Google
        Play Store&quot;; no language count is published.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+) sold
        only through the App Store. There is no account and no server: a project
        is a plain-JSON file on your disk with a published schema, the editor
        works offline, and iCloud sync is opt-in. The free tier has no expiry
        and gives you one project with 3 rows and 5 templates per row, every
        device frame, shape and locale, watermark-free exports, and direct
        upload to App Store Connect and Google Play; Pro only removes the
        project, row and template limits. Localization is 81 built-in language
        presets plus custom codes, with on-device auto-translate through
        Apple&apos;s Translation framework for the languages it supports. What
        it does not have is a hosted API or CLI; the only automation surface
        is a local, opt-in MCP server on Mac, and that gap is the axis this
        page turns on.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="Screenshots Pro" rows={ROWS} />

      <h2>What Screenshots Pro does well</h2>
      <p>
        Screenshots Pro is built around a workflow most screenshot tools,
        including {SITE_NAME}, do not offer: design a template once in the
        browser, then render it from code. Its developer docs call this a
        &quot;cookie-cutter template&quot; that CI can modify and render
        through a programming interface, and it is documented and live, not a
        roadmap item.
      </p>
      <ul>
        <li>
          <strong>A working REST API.</strong> You authenticate with a Bearer
          token from the account dashboard and POST to{" "}
          <code>renderer.screenshots.pro/renders/create/&#123;template_id&#125;</code>{" "}
          with a list of modifications: text objects take <code>text</code>,
          position, <code>fontSize</code> and <code>align</code>; device
          objects take position, <code>rotation</code> and a{" "}
          <code>screenshot</code> URL. The call runs up to 60 seconds and
          returns a <code>download_url</code> for a zip. Point it at fresh
          simulator captures and the store set rebuilds without anyone opening
          an editor.
        </li>
        <li>
          <strong>A free plan that is the full editor.</strong> Basic includes
          every device, every pre-made template and every editor feature, and
          its terms describe the free tier as &quot;access to the full
          product&quot;. You can evaluate everything without an account or a
          card.
        </li>
        <li>
          <strong>3D perspective angles.</strong> Its 3D-enabled devices
          (iPhone 15 Pro Max, Pixel 8 Pro, iPhone 16 and iPad Pro M4 per the
          changelog) come with seven angle variations each, plus dynamic device
          colours across the catalogue.
        </li>
        <li>
          <strong>Nothing to install, anywhere.</strong> It runs in the browser
          on Windows, Linux and Chromebooks as well as Mac, and cloud auto-save
          on Basic means the design follows your login rather than one
          machine.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>Native and offline, with files you own.</strong> Screenshots
          Pro keeps templates in its cloud account. {SITE_NAME} keeps them as
          plain-JSON files with a public schema at{" "}
          <a href="/docs/project-schema">/docs/project-schema</a>, which you can
          commit to git next to the app, diff, back up and open without the
          vendor existing. The editor never needs a network connection.
        </li>
        <li>
          <strong>Upload is built in and free.</strong> Screenshots Pro&apos;s
          site describes exporting and downloading; the store upload is your
          job. {SITE_NAME} talks to App Store Connect with an API key and to
          Google Play with a service-account JSON, syncs only what changed by
          checksum, and does that on the free tier.
        </li>
        <li>
          <strong>Localization is not gated.</strong> Screenshots Pro puts
          localization and custom fonts on the $19/month Standard plan.{" "}
          {SITE_NAME} includes all 81 language presets, on-device
          auto-translate and bundled custom fonts in the free tier; Pro only
          changes how many projects, rows and templates you can have.
        </li>
        <li>
          <strong>No API at all.</strong> This is the genuine gap, and it is
          structural: {SITE_NAME} is an app, not a service, so there is no
          endpoint for a build server to call. The local MCP server on Mac is
          for agent-assisted editing on your own machine, not headless
          rendering.
        </li>
      </ul>

      <h2>When to pick Screenshots Pro</h2>
      <ul>
        <li>
          Your screenshots are regenerated every release from CI, with new
          simulator captures swapped into a fixed design. The API is the reason
          the product exists, and {SITE_NAME} cannot do this.
        </li>
        <li>
          You or your designer work on Windows or Linux, or you simply do not
          want to install anything.
        </li>
        <li>
          You want 3D perspective angles on your device frames and $19/month is
          fine for them.
        </li>
        <li>
          You run an agency producing screenshots for paying clients and want a
          licence tier that explicitly covers charging end clients.
        </li>
        <li>
          Several people touch the same template and you want it in a cloud
          account rather than in a file on one person&apos;s Mac.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          One person on a Mac designs the set, and uploading from the app is
          faster than wiring up a pipeline.
        </li>
        <li>
          You want to localize without a subscription: 81 language presets,
          on-device auto-translate and per-locale overrides are in the free
          tier.
        </li>
        <li>
          You need iPhone 17 / 17 Pro / iPhone Air, iPad Pro 13&quot;, MacBook
          Pro 14&quot;/16&quot; or Apple Watch Ultra 3 frames today; the newest
          iPhone on Screenshots Pro&apos;s site is the iPhone 16.
        </li>
        <li>
          You want direct App Store Connect and Google Play upload with
          only-what-changed sync, instead of downloading a zip and uploading
          folders in the browser.
        </li>
        <li>
          You would rather pay once: Pro is available as a lifetime purchase as
          well as a subscription.
        </li>
      </ul>

      <h2>Switching from Screenshots Pro to {SITE_NAME}</h2>
      <p>
        Neither tool opens the other&apos;s projects. Screenshots Pro templates
        live in its cloud account; {SITE_NAME} reads only its own JSON files.
        What carries over is everything that was never specific to the editor:
        the raw screenshots, the headline copy per locale, your .ttf/.otf font
        files, brand colours and gradient stops, and the list of locales you
        ship. What is rebuilt is the layouts.
      </p>
      <p>
        For a typical 6-template by 3-locale set, budget an afternoon. Six
        templates from a starter (background, frame, headline, a shape or two)
        take one to two hours the first time. The two extra locales are 20 to
        30 minutes when auto-translate covers the languages: duplicate the
        locale, let it translate, fix line breaks and the terms you keep in
        English. For languages the Translation framework does not support,
        paste the strings you already have. Batch-import routes screenshots to
        the right row by pixel size, so dropping the folder is the fast part.
        Download the last render of every locale from Screenshots Pro first so
        you have a reference to match.
      </p>
      <p>
        Going the other way is the same work in reverse: Screenshots Pro cannot
        read {SITE_NAME}&apos;s JSON, so you would rebuild the template in its
        web editor from the same raw assets, then point the API at it.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Isn&apos;t Screenshots Pro&apos;s free plan just a teaser?&quot;</h3>
      <p>
        No, and this is a point in its favour. Basic is &quot;$0 forever&quot;
        with every device, every pre-made template, every editor feature,
        auto-save and smart-export for all store sizes, and its terms describe
        the free tier as the full product. What Basic leaves out is 3D angles,
        saving your own templates, custom fonts and localization, and the
        licence page requires an attribution link on Basic output. If you ship
        in one language with a system font, Basic may be all you ever need.
      </p>

      <h3>&quot;Does the API capture screenshots from my app?&quot;</h3>
      <p>
        No. The API renders a template you already designed, swapping in new
        text values and new screenshot URLs, and returns a zip. Something else
        (XCUITest, fastlane snapshot, a device farm) has to produce the raw
        screenshots and host them at a URL first. That is the right division
        of labour for CI, but it means the API is a rendering step you add to
        an existing pipeline, not a pipeline on its own.
      </p>

      <h3>&quot;Doesn&apos;t {SITE_NAME} have an API too?&quot;</h3>
      <p>
        Not a hosted one, and no CLI either. What it has is a local MCP server
        on Mac, off by default, that lets an AI agent on your machine open the
        project and drive edits: change a headline, swap a screenshot, export.
        That is useful interactively. It is not something a GitHub Actions
        runner can call, and it does not run without the app open. If
        &quot;automation&quot; means a build server to you, read that as
        &quot;no&quot;.
      </p>

      <h3>&quot;Does either tool upload to the stores?&quot;</h3>
      <p>
        Screenshots Pro&apos;s site describes downloading exports and, through
        the API, a zip download URL; it does not describe any App Store Connect
        or Google Play upload, so treat that as your step. {SITE_NAME} uploads
        directly to both stores, reordering or removing only what changed, on
        the free tier. If you already upload from fastlane deliver or supply in
        CI, Screenshots Pro&apos;s zip slots into that flow and {SITE_NAME}
        &apos;s built-in upload is redundant.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Which is better&quot; is the wrong question, because the two tools
        disagree about where the work should happen. Screenshots Pro assumes
        the design is a shared cloud template and rendering is something a
        machine does on demand; that is why it has an API, cloud auto-save and
        a plan ladder that ends at $49/month. {SITE_NAME} assumes a person on a
        Mac owns the project as a file, renders it locally and uploads it
        themselves; that is why it has offline files, free store upload and no
        API. Pick the assumption that matches how your team actually ships.
      </p>
      <p>
        Do not buy {SITE_NAME} if your screenshots must rebuild from CI without
        a person in the loop, if anyone who edits them is on Windows or Linux,
        or if you need 3D perspective angles or a client-charging licence tier.
        Screenshots Pro covers all of those, and its free plan lets you confirm
        it before paying. Buy {SITE_NAME} if the set is made by one person on a
        Mac, localized into languages you would otherwise pay a monthly fee to
        reach, and uploaded by hand, because that is the case it was built for.
      </p>
    </ComparisonShell>
  );
}
