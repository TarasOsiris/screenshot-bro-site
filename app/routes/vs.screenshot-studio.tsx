import type { Route } from "./+types/vs.screenshot-studio";
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

const SLUG = "screenshot-studio";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildComparisonMeta(SLUG, matches);

const STUDIO_SITE = "https://appstorescreenshotstudio.com/";
const STUDIO_LISTING =
  "https://apps.apple.com/us/app/screenshot-studio-app-mockup/id6473832582";

const ROWS: ComparisonRow[] = [
  {
    factor: "Platform & install",
    them: "Native app for Mac (macOS 14+), iPhone (iOS 17+) and Apple Vision (visionOS 1.0+), from the App Store; the site calls it a native Mac and iOS app",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "None mentioned on its site; purchases go through the App Store",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Free to try every feature; payment required to export. In-app purchases on the App Store listing: Pro Weekly $4.99, Pro Monthly $9.99, Pro Yearly $54.90, Lifetime $89.99. No prices on its own site",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "Everything can be tried; nothing can be exported until you pay",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "Not applicable — unpaid use does not export files at all",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "iPhone (“current iPhone models, updated as Apple releases new devices”), iPad, Mac, Apple Watch, Apple TV, Apple Vision Pro, Android phone; specific models and colours are not listed on its site",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "Every required App Store size for iPhone, iPad, Mac, Apple Watch, Apple TV and Vision Pro, plus Google Play phone sizes, all derived from one master design",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "One master design per project drives every export; four text styles; portrait and landscape; side-by-side text-beside-device layouts on landscape shots since 1.27.0. Shapes spanning several screenshots are not mentioned",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "“Professionally designed templates”; the count is not stated on its site",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "Built-in AI translation into “any language” with no API key; review and edit per locale; layouts adapt when text expands or changes direction. Where the translation runs is not stated on its site",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "Built in — uploads every platform and locale in your slide order to the matching slots. Authentication method, change-only sync and metadata editing are not stated on its site",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "No — exports Google Play sizes from the same templates; no Play Console upload is claimed",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "Every required store size from one project; file formats and any panoramic or social modes are not stated on its site",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "Neither is mentioned on its site or App Store listing",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "None mentioned",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Projects can be saved for later editing; the file format is not documented. Privacy policy says settings stay local and no personal data is collected; the App Store label lists purchases and usage data, not linked to you, for analytics",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Not mentioned",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Indie Apple developers who also ship Apple Watch, Apple TV or Vision Pro apps, or who want machine translation into any language inside the app",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is Screenshot Studio free?",
    answer:
      "It is free to download and you can use every feature without paying, but exporting files requires a purchase. Its own site does not list prices; the App Store listing (checked 20 August 2026) shows Pro Weekly at $4.99, Pro Monthly at $9.99, Pro Yearly at $54.90 and a Lifetime unlock at $89.99. Check the listing before buying, since in-app prices change.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with no signup and no expiry. The free tier allows 1 project, 3 rows and 5 templates per row, includes every device frame, shape and locale, exports without a watermark, and includes App Store Connect upload, Google Play upload and iCloud sync. Pro removes the project, row and template limits and nothing else; the price is shown in the app.",
  },
  {
    question: "Can Screenshot Bro open Screenshot Studio projects?",
    answer:
      "No. Screenshot Studio's project format is not documented and Screenshot Bro does not import other tools' projects. Bring your raw screenshots, your captions for each locale, your fonts and brand colours, and your locale list; the layouts are rebuilt, which for a typical six-template set takes under an hour for the first locale.",
  },
  {
    question: "Which app should I use for an Apple Watch, Apple TV or Vision Pro app?",
    answer:
      "Screenshot Studio. It produces store-ready sizes for watchOS, tvOS and visionOS listings and uploads them to App Store Connect. Screenshot Bro ships an Apple Watch Ultra 3 frame for decorating iPhone, iPad and Mac screenshots, but it has no Watch, TV or Vision Pro size presets and does not target those stores.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/screenshot-studio-alternative",
    label: "Screenshot Studio Alternative: Two Native Mac Apps",
    description:
      "the long-form version of this page, written for people already using Screenshot Studio.",
  },
  {
    href: "/blog/best-app-store-screenshot-tools-for-mac",
    label: "Best App Store Screenshot Tools for Mac (2026)",
    description:
      "every native Mac option side by side, including both apps on this page.",
  },
  {
    href: "/blog/screenshot-bro-alternatives",
    label: "Screenshot Bro Alternatives: When to Use Another Tool",
    description:
      "the cases where Screenshot Bro is the wrong choice and what to use instead.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function ScreenshotStudioComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          pick Screenshot Studio if your app ships on Apple Watch, Apple TV or
          Vision Pro, or you need captions machine-translated into languages
          that Apple&apos;s on-device Translation framework does not cover — it
          exports those store sizes and translates into any language with
          built-in AI. Pick {SITE_NAME} if you ship iPhone, iPad, Mac or Android
          apps and want to export a finished, watermark-free set and upload it
          before paying anything, design on one continuous canvas, and push to
          Google Play as well as App Store Connect. Both are native indie Apple
          apps, and neither opens the other&apos;s projects.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Shipping an iPhone, iPad, Mac or Android app and want to see the exported set and the store upload work before you pay? Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>Screenshot Studio</h3>
      <p>
        <a href={STUDIO_SITE} target="_blank" rel="noopener noreferrer">
          Screenshot Studio
        </a>{" "}
        (listed on the App Store as &quot;Screenshot Studio - App Mockup&quot;,
        by Sarun Wongpatcharapakorn) is a native app for Mac (macOS 14 or
        later), iPhone (iOS 17 or later) and Apple Vision (visionOS 1.0 or
        later). Its site describes it as a native Mac and iOS App Store
        screenshot generator covering iPhone, iPad, Mac, Apple Watch, Apple TV,
        Apple Vision Pro and Android phones. The working model is one master
        design per project: the app &quot;derives every export from a single
        master design&quot; into every required App Store size, plus Google
        Play phone sizes. Pricing follows a try-then-pay model: &quot;You can
        try all features for free and experience how easy it is. If you like
        it, we require payment for export.&quot; The site itself shows no
        prices. The App Store listing, checked on 20 August 2026, lists four
        in-app purchases: Pro Weekly $4.99, Pro Monthly $9.99, Pro Yearly
        $54.90 and Lifetime $89.99.
      </p>
      <p>
        Specifics read today: built-in AI translation of captions into
        &quot;any language&quot; with no API key, reviewed and edited per
        locale, with layouts that &quot;stay on-brand when text expands,
        contracts, or changes direction&quot;; direct App Store Connect upload
        that &quot;preserves your slide order and sends each generated file to
        its matching App Store Connect slot&quot; for every platform and
        locale; four text styles; portrait and landscape; projects saved for
        later editing. Version 1.27.0 (27 July) added side-by-side layouts for
        landscape shots, one-tap macOS wallpaper presets and a &quot;Side by
        Side&quot; Mac template. The site also hosts a free browser-based
        validator that checks dimensions, format and PNG transparency locally
        in the tab without uploading anything. Things the site does not state:
        how many templates ship, which iPhone models and colours are included,
        the export file formats, and where the AI translation runs.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+) for the
        same job on a narrower set of platforms: iPhone, iPad, Mac and Android
        phone and tablet, with no Apple Watch, Apple TV or Vision Pro size
        presets. Instead of one master design, it gives you one continuous
        multi-row canvas — rows are device sizes, templates are the individual
        screenshots, and shapes or backgrounds can span across several
        screenshots. Localization covers 81 built-in language presets plus
        custom codes, with auto-translation that runs on-device through
        Apple&apos;s Translation framework for the languages that framework
        supports; other presets are filled by typing or pasting. The free tier
        has no signup and no expiry: 1 project, 3 rows, 5 templates per row,
        every frame, shape and locale, watermark-free export, and App Store
        Connect upload, Google Play upload and iCloud sync included. Pro lifts
        the project, row and template limits and nothing else. Projects are
        plain-JSON files with a{" "}
        <a href="/docs/project-schema">public schema</a>, and on Mac an opt-in
        local MCP server lets AI agents drive edits.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="Screenshot Studio" rows={ROWS} />

      <h2>What Screenshot Studio does well</h2>
      <p>
        Of the two apps, Screenshot Studio is the one with the wider reach
        across Apple&apos;s stores, and that is not a small thing. If your
        listing needs a watchOS, tvOS or visionOS set, it is the only app on
        this page that produces it.
      </p>
      <ul>
        <li>
          <strong>Seven platforms from one project.</strong> iPhone, iPad, Mac,
          Apple Watch, Apple TV, Apple Vision Pro and Android phone, each at
          the required store sizes, with upload to App Store Connect for every
          platform and locale in one pass. {SITE_NAME} stops at iPhone, iPad,
          Mac and Android.
        </li>
        <li>
          <strong>Translation into any language, in the app.</strong> Built-in
          AI translation with no API key, per-locale review, and layouts that
          handle text that grows, shrinks or runs right-to-left. That is wider
          coverage than the on-device language set {SITE_NAME} relies on.
        </li>
        <li>
          <strong>Runs where you are.</strong> macOS 14 support reaches one
          more major release of Macs than {SITE_NAME}&apos;s floor, and there is
          a visionOS build, so you can work on Vision Pro itself.
        </li>
        <li>
          <strong>A listed one-time price.</strong> The App Store listing shows
          a Lifetime unlock next to the weekly, monthly and yearly plans, so a
          buyer who dislikes subscriptions has a published number to decide
          on. The free browser validator is a handy extra whichever app you
          use.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>The free tier finishes the job.</strong> Screenshot Studio
          lets you try everything and pay to export; {SITE_NAME} lets you
          export and upload a real, watermark-free set within the free limits
          (1 project, 3 rows, 5 templates per row). Payment buys more projects,
          rows and templates, not access to the output.
        </li>
        <li>
          <strong>Canvas, not master design.</strong> Screenshot Studio derives
          every size from a single master design. {SITE_NAME} shows every row
          and every template of every locale on one continuous canvas, so a
          headline or gradient can run across two or three screenshots and
          each locale can override text, style, image and position per
          template.
        </li>
        <li>
          <strong>Translation that never leaves the device.</strong>{" "}
          {SITE_NAME}&apos;s auto-translate uses Apple&apos;s Translation
          framework on the Mac, iPad or iPhone itself, with no keys and no
          servers; the trade-off is that it only covers the languages that
          framework supports, and the remaining presets are filled by typing or
          pasting. &quot;Reuse Translation&quot; links two shapes to one
          string, and a progress view shows what is still untranslated.
        </li>
        <li>
          <strong>Both stores, open files, agent access.</strong> Google Play
          upload via a service-account key, staged as a Play edit you confirm;
          App Store Connect sync that uploads, reorders or removes only what
          changed, with metadata editing; plain-JSON project files you can
          diff, commit and script against; and a local MCP server on Mac.
          Screenshot Studio exports Google Play sizes but does not claim Play
          upload, and its project format is not documented.
        </li>
      </ul>

      <h2>When to pick Screenshot Studio</h2>
      <ul>
        <li>
          You ship an iPhone app with a companion Apple Watch app and want both
          screenshot sets, at store sizes, from one project. This is the most
          common reason to choose it.
        </li>
        <li>
          Your app targets Apple TV or Vision Pro and you need those listings
          filled without a second tool.
        </li>
        <li>
          You localize into languages outside Apple&apos;s on-device
          translation set and want machine translation inside the app rather
          than pasting from a translation service.
        </li>
        <li>
          Your Mac is on macOS 14 and you are not upgrading, or you want to do
          this work on a Vision Pro.
        </li>
        <li>
          You want one design to drive every size, and &quot;headline plus
          device&quot; per screenshot is the look you are after.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          You ship iPhone, iPad, Mac or Android apps only, and you want to see
          the exported files and the store upload succeed before spending
          anything.
        </li>
        <li>
          Your design uses panoramic backgrounds or a headline that flows
          across two screenshots, which needs a continuous canvas rather than
          per-screenshot designs.
        </li>
        <li>
          You publish on Google Play as well as the App Store and want both
          uploads from the same project, with Android phone and tablet rows
          next to the iOS rows.
        </li>
        <li>
          You want auto-translation that stays on-device, and your target
          languages are within Apple&apos;s Translation framework; or you
          manage many locales and need per-locale position and image
          overrides.
        </li>
        <li>
          You re-ship often: batch-import a folder and let pixel size route
          shots to the right row, capture the latest Simulator screenshot with
          one click, and let the checksum sync upload only what changed.
        </li>
        <li>
          You want project files you can read, version and automate — plain
          JSON with a public schema, plus the local MCP server on Mac.
        </li>
      </ul>

      <h2>Switching from Screenshot Studio to {SITE_NAME}</h2>
      <p>
        Neither app imports the other&apos;s project files. Screenshot
        Studio&apos;s format is not documented, and {SITE_NAME} does not
        import projects from any other tool, so a switch is a rebuild, not a
        conversion. What carries over is everything that is not layout:
      </p>
      <ul>
        <li>
          <strong>Raw screenshots</strong> — the original Simulator or device
          captures you dropped into Screenshot Studio. Put them in one folder
          and {SITE_NAME} routes each to the right row by pixel size.
        </li>
        <li>
          <strong>Copy</strong> — open each locale in Screenshot Studio and
          copy the captions out; paste them into the matching locale in{" "}
          {SITE_NAME}, or let on-device auto-translate regenerate the ones its
          framework covers.
        </li>
        <li>
          <strong>Fonts and brand colours</strong> — .ttf/.otf/.ttc files are
          bundled into the {SITE_NAME} project; colours and gradients are
          re-entered once and reused across the canvas.
        </li>
        <li>
          <strong>Locale list</strong> — pick the same languages from the 81
          presets or add custom codes.
        </li>
      </ul>
      <p>
        What is rebuilt is the layout. For a typical set of 6 templates in 3
        locales, expect about 45 minutes for the first locale — choose a
        starter template, drop the shots, type the headlines, adjust frames
        and backgrounds — then 5 to 15 minutes per additional locale depending
        on whether auto-translate covers it or you paste. Budget an hour to
        ninety minutes end to end, plus the one-time App Store Connect API key
        setup for upload. Switching the other way, for an app that adds a
        Watch, TV or Vision Pro target, is the same rebuild in Screenshot
        Studio; your {SITE_NAME} project is plain JSON, so the captions and
        locale list can be pulled out with a text editor or a short script.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Isn&apos;t Screenshot Studio subscription-only?&quot;</h3>
      <p>
        No. Its{" "}
        <a href={STUDIO_LISTING} target="_blank" rel="noopener noreferrer">
          App Store listing
        </a>{" "}
        shows a Lifetime unlock at $89.99 alongside the weekly, monthly and
        yearly Pro plans, and the site answers &quot;Yes&quot; to whether a
        one-time purchase exists. The confusion comes from the site itself not
        printing prices; you have to open the listing to see them. If a
        one-time payment is your requirement, Screenshot Studio meets it.
      </p>

      <h3>
        &quot;{SITE_NAME} has an Apple Watch frame, so it does Watch
        screenshots?&quot;
      </h3>
      <p>
        Not for the Watch App Store. The Apple Watch Ultra 3 frame (with 13
        bands) is a decoration you place on iPhone, iPad or Mac screenshots,
        for example to show a companion app. There is no watchOS, tvOS or
        visionOS size preset, and {SITE_NAME} does not target those stores. For
        Watch, TV or Vision Pro listings, Screenshot Studio is the one of the
        two that produces the right sizes and uploads them.
      </p>

      <h3>&quot;Both say no API key, so they translate the same way?&quot;</h3>
      <p>
        They reach the same convenience by different routes. Screenshot Studio
        uses built-in AI translation into &quot;any language&quot;; its site
        does not say where that translation runs. {SITE_NAME} uses Apple&apos;s
        Translation framework on the device, which means nothing is sent
        anywhere, but also means coverage is limited to the languages Apple
        ships; presets outside that set are filled by typing or pasting. If
        breadth of languages matters most, Screenshot Studio&apos;s approach
        wins; if keeping unreleased copy off any network matters most,{" "}
        {SITE_NAME}&apos;s does.
      </p>

      <h3>&quot;Free to try means the same thing in both apps?&quot;</h3>
      <p>
        It does not. In Screenshot Studio every feature is open and the export
        is what you pay for, so you can judge the design but not the output
        file until you buy. In {SITE_NAME} the export, the uploads and the
        sync are open, and the limits are on quantity: one project, three
        rows, five templates per row. A single-language iPhone listing with
        five screenshots fits entirely within the free tier and can be
        uploaded from it. Which model suits you depends on whether you need to
        see the finished file before paying.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        These are two indie native Apple apps doing the same job with
        different boundaries, and &quot;which is better&quot; depends on what
        you ship. Screenshot Studio covers more of Apple&apos;s platforms and
        translates into more languages; {SITE_NAME} exports and uploads from
        its free tier, designs across screenshots on one canvas, uploads to
        Google Play, and keeps translation and project files local and
        readable. Neither point cancels the other.
      </p>
      <p>
        Do not buy {SITE_NAME} if your listing includes an Apple Watch, Apple
        TV or Vision Pro set, if you need machine translation into languages
        Apple&apos;s Translation framework does not support, if your Mac is on
        macOS 14, or if you want video or App Preview export — it has none of
        those. For an iPhone, iPad, Mac
        or Android listing in the languages Apple supports on-device, install
        both, build the same three screenshots in each, and notice which one
        you can actually export without paying.
      </p>
    </ComparisonShell>
  );
}
