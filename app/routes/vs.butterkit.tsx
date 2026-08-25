import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data } from "react-router";
import type { Route } from "./+types/vs.butterkit";
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

const SLUG = "butterkit";

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return { locale: (locale || "en") as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches, params }) =>
  buildComparisonMeta(SLUG, matches, (params.locale || "en") as LocaleCode);

const ROWS: ComparisonRow[] = [
  {
    factor: "Platform & install",
    them: "Native Mac app only, macOS 26 (Tahoe) or later; Apple silicon recommended, Intel supported. Direct .dmg, Mac App Store or Homebrew cask. No iPad, iPhone, Windows or web version",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "None — no accounts, no signup, no ads; documents are .butterkit files saved wherever you like",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Published: Pro is $99 one-time (down from $149), good for 5 Macs, with a 14-day refund; an optional Supporter plan is $10/month or $39/year. The Mac App Store build sells its own unlocks (August 2026)",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "Unlimited projects and artboards, on-device translation, templates and Simulator capture. Its pricing page and its Pro docs disagree on whether all 50 languages and App Store Connect upload are included",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "A “Made with ButterKit” watermark on every export until Pro is activated",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "Real-time 3D rendered in Metal, freely rotatable, with show/hide notch: iPhone 17 Pro Max, iPhone 15 Pro Max “and more”, iPad Pro 11\" and 12.9\", Apple Watch Series 11 and Ultra, MacBook Pro 16\", Pixel 10 Pro",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "Presets for iOS, iPadOS, macOS, tvOS, watchOS and the Google Play Store, plus custom sizes; exports each artboard at the exact pixel dimensions the store slot requires",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "Infinite canvas of artboards; panoramic backgrounds span artboards and Device Overflow lets one 3D device run across several. Markdown text, strokes, shadows, per-side padding, and 3D-rendered Callouts for annotating UI",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "13 templates and 3 add-ons in the public gallery, all free and MIT-licensed, with a note that more are being migrated. The number bundled inside the app is not published. Community submissions can earn a free Pro licence",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "About 19 languages free on-device; all 50 App Store languages need a cloud model and your own API key (OpenAI, Gemini, Claude, OpenRouter or a local endpoint), with custom translation instructions and delta re-translation",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "Built in through the official API, with a Team Key in the Keychain; uploads each artboard into the right display-size and locale slot, and sends the listing metadata fields you filled in",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "No. Google Play size presets and a Pixel 10 Pro model exist, so Play assets can be designed and exported, but its roadmap lists “Google Play Store support” under Exploring",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "PNG or JPG, with a per-export scale (1x recommended), optional anti-aliasing, and a choice of background plane or transparent. Batch export, or upload straight to App Store Connect",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "Real-time Metal 3D throughout, but no video or App Preview export in the main app. ButterKit Motion, a separate screen-recording app under the same brand, is in free public beta and also needs macOS 26+",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "MCP server with 42 tools across five namespaces, for Cursor, Claude Code and Codex, with the app running and a document open. Plus Xcode Simulator capture and fastlane folder linking. No CLI",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Offline apart from cloud translation and uploads; .butterkit packages anywhere on disk, format not publicly documented; sandboxed, keys in the Keychain",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Single-user; one licence covers up to 5 Macs. Volume and enterprise licensing is offered on request, with no published price",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Mac developers on macOS 26 who want screenshots captured straight from the Simulator, rotatable 3D device renders, and their own AI key translating both screenshots and listing metadata into all 50 languages",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is ButterKit free?",
    answer:
      "There is a permanent free tier with unlimited projects and artboards, but every export carries a “Made with ButterKit” watermark until you buy Pro. Pro is $99 one-time on ButterKit's site (listed down from $149), covers 5 Macs and comes with a 14-day money-back guarantee; the Mac App Store build sells its own unlocks. One thing to check yourself: the pricing page lists all 50 languages and App Store Connect upload under Free, while the Pro documentation scopes cloud translation and App Store Connect management to Pro.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with count limits rather than a time limit. The free tier gives you one project, three rows and five templates per row, with every device frame, shape and locale, no watermark, and App Store Connect and Google Play upload included. Pro removes the count limits and is sold as a lifetime purchase or a subscription; the price is shown in the app.",
  },
  {
    question: "Can Screenshot Bro capture screenshots from the Xcode Simulator?",
    answer:
      "No, and this is a real advantage for ButterKit. ButterKit ships a floating capture tool that follows the Simulator window and reads the available localizations out of your Xcode String Catalog so you can switch language and re-capture. Screenshot Bro has no shipping equivalent — you take the screenshots yourself, or generate them with fastlane, then drop the folder onto the canvas and it routes each image to the right row by pixel size.",
  },
  {
    question: "Can Screenshot Bro open ButterKit projects?",
    answer:
      "No. ButterKit saves .butterkit packages whose format is not publicly documented, and Screenshot Bro saves plain JSON against a published schema; neither imports the other. Move the raw, unframed screenshots across instead, because both tools apply their own device frames and a pre-framed image would end up framed twice. Headlines, fonts and brand colours are quick to retype; the layout is the part you rebuild.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/butterkit-alternative",
    label: "ButterKit Alternative: Two Native Mac Screenshot Apps",
    description: "the long-form version of this page, for readers deciding between the two.",
  },
  {
    href: "/blog/best-app-store-screenshot-tools-for-mac",
    label: "Best App Store Screenshot Tools for Mac (2026)",
    description: "the native Mac options side by side, in the wider field.",
  },
  {
    href: "/blog/screenshot-bro-alternatives",
    label: "Screenshot Bro Alternatives: When to Use Another Tool",
    description: "the cases where this app is the wrong choice, and what to use instead.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function ButterKitComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          ButterKit and {SITE_NAME} are the two closest tools in this category —
          both native, both account-free, both uploading to App Store Connect,
          both with an MCP server — so the decision comes down to three things.
          ButterKit requires macOS 26 and is Mac-only; {SITE_NAME} runs on macOS{" "}
          {MINIMUM_MACOS_VERSION} and on iPad and iPhone. ButterKit reaches all
          50 App Store languages only with your own AI provider key, and
          translates listing metadata as well as screenshots; {SITE_NAME} ships
          81 locale presets that translate on-device with no key. And{" "}
          {SITE_NAME} uploads to Google Play, which ButterKit does not.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="On macOS 15, shipping to Google Play too, or want watermark-free exports before you pay anyone? Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>ButterKit</h3>
      <p>
        <strong>ButterKit</strong> is a native macOS app by Zach Spitulski
        (Spitulski Ventures LLC) for designing App Store screenshots and
        metadata, sold from{" "}
        <a
          href="https://butterkit.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          butterkit.app
        </a>{" "}
        and also available on the Mac App Store and as a Homebrew cask. Its own
        headline is &quot;You built it. ButterKit sells it.&quot; The workflow it
        describes runs end to end: capture from the Xcode Simulator, design on an
        infinite canvas with real-time 3D device frames rendered in Metal,
        translate into App Store languages, and push straight to App Store
        Connect.
      </p>
      <p>
        It requires <strong>macOS 26 (Tahoe) or later</strong> — stated in its
        system requirements and enforced by its Homebrew cask — with Apple
        silicon recommended and Intel supported. Pricing is published and
        one-time: $99 for Pro, listed down from $149, good for 5 Macs, with a
        14-day money-back guarantee and an optional $10/month or $39/year
        Supporter plan; the Mac App Store build sells its own unlocks separately.
        The free tier is unlimited in projects and artboards but watermarks every
        export. The app first shipped in September 2025 and has released roughly
        two or three times a month since, reaching version 2.2.05 in August 2026.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+) for
        building a whole store listing rather than one image at a time. A project
        holds rows — one per device size, such as iPhone 6.9&quot;, iPad
        13&quot;, Mac, Android phone and 10&quot; tablet — and each row holds the
        individual screenshots; headlines, images, gradients and backgrounds can
        span across them. It ships 50+ starter templates, 81 language presets
        with on-device auto-translate and per-locale overrides, custom fonts, and
        exports PNG or JPEG at the exact pixel size each store expects, one
        folder per locale and row. From the same window it uploads to App Store
        Connect and Google Play. The free tier — 1 project, 3 rows, 5 templates
        per row — has no expiry and no watermark and includes both uploads; Pro
        removes the count limits and nothing else.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="ButterKit" rows={ROWS} />

      <h2>What ButterKit does well</h2>
      <p>
        This is the closest competitor {SITE_NAME} has, and several items here
        are things {SITE_NAME} does not do at all.
      </p>
      <ul>
        <li>
          <strong>It captures from the Xcode Simulator.</strong> A floating
          capture tool follows the active Simulator window, and it reads the
          available localizations from your Xcode String Catalog so you can
          switch language and re-capture without touching the scheme.{" "}
          {SITE_NAME} has nothing shipping that does this — it expects
          screenshots you already have.
        </li>
        <li>
          <strong>The 3D is live, not pre-rendered.</strong> Devices are drawn in
          Metal and can be rotated and angled freely, with the notch shown or
          hidden and custom bezels, and Device Overflow runs one device across
          several artboards. {SITE_NAME}&apos;s frames are flat images apart from
          two fixed 3D iPhone models, so anything at an angle is out of reach.
        </li>
        <li>
          <strong>It covers Apple Watch and Apple TV sizes.</strong> watchOS and
          tvOS are listed among its supported platforms. {SITE_NAME} has an Apple
          Watch Ultra 3 frame but no Watch, TV or Vision Pro size preset, so a
          listing that needs those cannot be finished in it.
        </li>
        <li>
          <strong>It translates the listing, not just the pictures.</strong>{" "}
          Description, keywords, subtitle, what&apos;s new and promotional text
          go through the same translation step as the screenshot copy, steered by
          custom instructions for brand voice and do-not-translate terms, with
          delta re-translation so unchanged strings are not re-sent.{" "}
          {SITE_NAME} edits App Store metadata but does not translate it for you.
        </li>
        <li>
          <strong>Automation is broader.</strong> Its MCP server exposes 42 tools
          across five namespaces, and folder linking keeps an artboard in sync
          with a fastlane <code>screenshots</code> directory, which is the
          cleanest bridge between generated captures and a designed layout that
          either tool offers.
        </li>
        <li>
          <strong>The price is on the page.</strong> $99 one-time, five Macs,
          14-day refund, discounts for students, teachers, veterans and first
          responders. {SITE_NAME} deliberately publishes no price and shows it in
          the app instead, which is less convenient if you are comparing before
          downloading.
        </li>
        <li>
          <strong>You can install it three ways.</strong> Direct{" "}
          <code>.dmg</code>, Mac App Store, or{" "}
          <code>brew install --cask butterkit</code>. {SITE_NAME} is App Store
          only.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>It runs on macOS {MINIMUM_MACOS_VERSION}.</strong> ButterKit
          needs macOS 26. If you keep a machine a version or two back for build
          stability — a normal thing for a developer to do — ButterKit is simply
          not installable, and this single line decides the comparison more often
          than any feature.
        </li>
        <li>
          <strong>It is also an iPad and iPhone app.</strong> Same purchase, same
          projects, synced through iCloud if you turn it on. ButterKit is Mac-only
          and its roadmap explicitly rules out other platforms.
        </li>
        <li>
          <strong>The free tier exports something you can ship.</strong>{" "}
          ButterKit&apos;s free exports carry a &quot;Made with ButterKit&quot;
          watermark. {SITE_NAME}&apos;s free tier is smaller — one project, three
          rows, five templates per row — but nothing it exports is marked, and
          both store uploads are included, so a small listing can go out without
          paying anyone.
        </li>
        <li>
          <strong>Google Play is a real destination, not just a size.</strong>{" "}
          {SITE_NAME} uploads through the Play Developer API with a service
          account, staged as an edit you confirm. ButterKit gives you Play sizes
          and a Pixel model to design against, then hands you files.
        </li>
        <li>
          <strong>Translation costs nothing per word.</strong> 81 locale presets
          plus custom BCP-47 codes, translated on-device where Apple&apos;s
          framework supports the language, with per-locale overrides for text,
          styling, images and position when a German headline runs long. No API
          key to buy, no metered bill. The trade is honest: for languages Apple
          does not cover you type or paste the text yourself, where ButterKit
          would have a cloud model write it.
        </li>
        <li>
          <strong>The project file is plain, documented JSON.</strong> It diffs
          in git and is described in a{" "}
          <a href="/docs/project-schema">public schema</a>.
          ButterKit&apos;s <code>.butterkit</code> package sits on your disk too,
          which is already better than a cloud tool, but its structure is not
          documented.
        </li>
      </ul>

      <h2>When to pick ButterKit</h2>
      <ul>
        <li>
          You are on macOS 26 and intend to stay current. Everything below
          assumes this; without it nothing else matters.
        </li>
        <li>
          You want screenshots captured out of the Simulator, per language, from
          the tool that will lay them out.
        </li>
        <li>
          Your design calls for devices at an angle, in perspective, or running
          across several panels — live 3D rather than a flat frame.
        </li>
        <li>
          Your listing needs Apple Watch or Apple TV screenshots. {SITE_NAME} has
          no size preset for either.
        </li>
        <li>
          You want the description, keywords and subtitle translated along with
          the screenshot copy, and you already pay for an AI API key.
        </li>
        <li>
          You want to know the price before you download, and you would rather
          pay $99 once than judge a price inside an app.
        </li>
        <li>
          You want App Preview-style video eventually and like that ButterKit
          Motion is being built alongside it.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          You are not on macOS 26, or you do not control which macOS the machine
          runs.
        </li>
        <li>
          You want to work on an iPad or iPhone as well as a Mac — on the couch,
          on a plane, on the device the screenshots came from.
        </li>
        <li>
          You ship to Google Play as well as the App Store and would rather
          upload from the same window than manage a second tool for Android.
        </li>
        <li>
          You want to ship a small listing without paying anything, and a
          watermark makes that impossible.
        </li>
        <li>
          You localize widely and do not want to buy, hold and meter an AI
          provider key to do it — 81 presets, on-device, no per-word cost.
        </li>
        <li>
          You want your work in a plain-text format you can diff, script against
          and read in ten years.
        </li>
      </ul>

      <h2>Frequently confused points</h2>

      <h3>&quot;ButterKit&apos;s free tier is the stingier one, right?&quot;</h3>
      <p>
        No — in the dimension most people check first, it is the more generous of
        the two. ButterKit gives you <strong>unlimited projects and artboards</strong>
        ; {SITE_NAME} gives you one project, three rows and five templates per
        row. What ButterKit takes in exchange is the watermark on every export,
        and what {SITE_NAME} takes is room to work. So the real question is which
        limit you hit first: if you want to sprawl across a large design before
        committing, ButterKit&apos;s shape is friendlier; if you have one small
        app and want to ship its listing today for nothing, {SITE_NAME}&apos;s
        shape gets you there.
      </p>

      <h3>&quot;Both translate on-device, so the language coverage must be the same?&quot;</h3>
      <p>
        Both use Apple&apos;s Translation framework and both are limited by what
        it supports, but the products around it differ. ButterKit&apos;s docs put
        its on-device coverage at about 19 languages and route everything beyond
        that through a cloud model you supply a key for, which is how it reaches
        all 50 App Store languages — genuinely more coverage than {SITE_NAME}
        offers automatically, at a metered cost you control. {SITE_NAME} ships 81
        locale presets plus custom codes and translates automatically only where
        Apple&apos;s framework reaches; the rest are slots you fill by typing or
        pasting. More seats, less automatic filling. Neither is the better answer
        in the abstract — it depends on whether you would rather pay a model or
        write the copy.
      </p>

      <h3>&quot;$99 once versus an unpublished price — isn&apos;t that the whole story?&quot;</h3>
      <p>
        It is a fair criticism of {SITE_NAME} that you have to open the app to
        see the price, and ButterKit deserves credit for putting $99 on the page
        along with the refund window and the five-Mac allowance. But the numbers
        are not comparing the same thing: {SITE_NAME}&apos;s free tier is a
        permanent, watermark-free way to ship a one-project listing including both
        store uploads, so for a small app the comparison is $99 against nothing.
        For a developer with several apps it is $99 against {SITE_NAME}&apos;s Pro
        unlock, and at that point you should look at both prices properly rather
        than at this page.
      </p>

      <h3>&quot;Two MCP servers — so the automation is equivalent?&quot;</h3>
      <p>
        Not quite. Both expose a local MCP server that an agent drives while the
        app runs, and neither is a headless CLI or a hosted API, so neither
        belongs in CI. ButterKit&apos;s is the bigger surface — 42 tools across
        five namespaces, documented for Cursor, Claude Code and Codex —
        and it pairs with Simulator capture and fastlane folder linking, so more
        of the pipeline can be scripted. {SITE_NAME}&apos;s MCP server is opt-in,
        macOS-only, loopback-only, and its edits go through the same undo stack as
        manual ones. If agent-driven work is central to how you build, ButterKit
        currently offers more of it.
      </p>

      <h3>&quot;Does either one make App Preview videos?&quot;</h3>
      <p>
        Neither, in the app you would be comparing. {SITE_NAME} has no video
        export at all. ButterKit&apos;s main app has none either; video lives in{" "}
        <strong>ButterKit Motion</strong>, a separate screen-recording app in free
        public beta that also requires macOS 26. If App Previews are part of the
        job, budget for a third tool regardless of which of these you pick.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        These two apps agree about more than they disagree about: native over
        browser, files over accounts, a one-time unlock over a rented seat, and an
        MCP server for whoever wants one. That makes the remaining differences
        unusually easy to act on. Ask three questions in order — which macOS am I
        on, do I ship to Google Play, and am I willing to run an AI provider key —
        and the answer falls out without weighing feature counts.
      </p>
      <p>
        Do not buy {SITE_NAME} if you are on macOS 26 and what you want is
        Simulator capture, rotatable 3D renders, Apple Watch or TV sizes, or
        machine-translated listing metadata. ButterKit does all of that and{" "}
        {SITE_NAME} does none of it, and it is a well-made, actively developed app
        by someone doing it full time. Choose {SITE_NAME} when the OS requirement
        rules ButterKit out, when the iPad matters, when Google Play is a real
        destination rather than a size preset, or when you need what you export
        today to be unmarked and free. Both have a free tier that costs nothing to
        try on your own screenshots, which is a better test than either page.
      </p>
    </ComparisonShell>
  );
}
