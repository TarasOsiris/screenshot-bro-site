import type { Route } from "./+types/vs.appscreens";
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

const SLUG = "appscreens";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildComparisonMeta(SLUG, matches);

const ROWS: ComparisonRow[] = [
  {
    factor: "Platform & install",
    them: "Browser app at appscreens.com on any OS; nothing to install",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "Yes — projects are saved to your AppScreens account; no card for the free plan",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Free plan; Pro $25.00/month or $99.00/year; Scale $180.00/year (shown as $15.00/month). Subscriptions via Stripe, non-refundable; no one-time purchase",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "5 screenshots in 1 saved project; essential sizes only; 1 layer, 1 device and 1 title per screenshot; starter templates; no localization; manual export only",
    us: `${SCREENSHOT_BRO_FACTS.freeTier}; no expiry`,
  },
  {
    factor: "Watermark / attribution",
    them: "A watermark appears in the designer only while a Pro feature is in use, and export is blocked until it is removed; exports that stay within free limits are clean",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: 'Real, clay and 3D frames (clay and 3D are paid); iPhone frames by display class 5.5"–6.9" with or without Dynamic Island; iPad, Apple Watch, MacBook Air, Studio Display, Apple TV; 14 Android phone models, 7" and 10" tablets, Surface Pro',
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: 'One responsive master design renders every selected output size. Free: iPhone 6.7" and 6.1", iPad 12.9", 16:9 and tall Android phones, one tablet. Paid adds 6.9"/6.5"/5.5", iPad 11"/10.5"/9.7", Watch, Vision Pro, Wear OS, Chromebook and custom sizes',
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "One shared design per project and one orientation per project (portrait iPhone plus landscape iPad needs two projects); Continue on Screen and panoramic backgrounds (paid) let elements cross screens",
    us: "One continuous multi-row canvas; each row is a device size with its own layout; shapes and backgrounds span across screenshots on every tier",
  },
  {
    factor: "Templates",
    them: "150+ template sets and 500+ layouts on paid plans; a starter set on the free plan",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "80+ languages including RTL; AI Translator with brand guidance, Google Translate or manual; CSV round-trip; per-locale caption, font, screenshot and spacing overrides. Pro: 10 languages per project. Scale: all 80+. Free: none",
    us: "81 built-in language presets plus custom codes; on-device auto-translate via Apple's Translation framework for the languages it covers, the rest typed or pasted; per-locale text, style, image and position overrides; Reuse Translation; progress tracking; all tiers",
  },
  {
    factor: "App Store Connect upload",
    them: "1-click upload with an ASC API key, including Custom Product Page and Product Page Optimization variants; “Remove all” or “Keep existing” modes. Paid plans only",
    us: `${SCREENSHOT_BRO_FACTS.ascUpload}; included in the free tier`,
  },
  {
    factor: "Google Play upload",
    them: "1-click upload via a service-account JSON into a Play draft, feature graphic included. Paid plans only",
    us: `${SCREENSHOT_BRO_FACTS.playUpload}; included in the free tier`,
  },
  {
    factor: "Export formats & modes",
    them: "PNG or JPEG with optional alpha-channel removal; zip or browser-folder download; fastlane-format folders; Apple Creative Asset targets",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "3D, clay and dynamic frames on paid plans; video or App Preview output not stated on its site",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "None today — the pricing page lists “API & MCP integrations: coming soon”; fastlane-format export for hand-off",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Online only; projects live in your account; store credentials are encrypted server-side (Google Cloud KMS) and cannot be retrieved once submitted",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Single account; Scale adds an Extended Licence for client work; seat sharing not stated on its site",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Teams localizing into many markets from any OS, agencies doing client work, and anyone shipping beyond Apple and Google (Huawei, Amazon, Microsoft, Chrome)",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is AppScreens free?",
    answer:
      "There is a free plan with no card required: up to 5 screenshots in 1 saved project, the essential iOS and Android sizes, one layer, one device and one title per screenshot, and no localization or direct upload. Exports within those limits carry no watermark. Pro is $99.00 a year or $25.00 a month and Scale is $180.00 a year, both as subscriptions; there is no one-time purchase.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, without signup or expiry. The free tier gives you 1 project, 3 rows and 5 templates per row with every device frame, shape and language preset, watermark-free exports, and App Store Connect, Google Play and iCloud sync included. Pro removes the project, row and template limits and nothing else is gated; the price is shown in the app.",
  },
  {
    question: "Can Screenshot Bro open AppScreens projects?",
    answer:
      "No. AppScreens projects live in its cloud account and there is no export format Screenshot Bro can read. Bring your raw screenshots, your captions (AppScreens exports them as CSV), your fonts and brand colours, and your locale list; the layouts are rebuilt on the canvas.",
  },
  {
    question: "Which tool localizes into more languages?",
    answer:
      "AppScreens on its Scale plan, if you count machine translation: it translates captions into all 80+ of its locales through an AI translator or Google Translate. Screenshot Bro ships 81 language presets plus custom codes and translates on-device through Apple's Translation framework, which covers a smaller set of languages; presets outside that set are filled by typing or pasting your own translations.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/appscreens-alternative",
    label: "AppScreens Alternative: Native Mac Screenshot Editor",
    description:
      "the same comparison from the other direction, for people already looking to move.",
  },
  {
    href: "/blog/best-app-screenshot-localization-tools",
    label: "Best App Screenshot Localization Tools (2026)",
    description:
      "language coverage, built-in translation and per-locale overrides across the field.",
  },
  {
    href: "/blog/screenshot-bro-alternatives",
    label: "Screenshot Bro Alternatives: When to Use Another Tool",
    description: "the cases where this app is the wrong choice, from its maker.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function AppScreensComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          AppScreens is the better pick if you need captions machine-translated
          into dozens of markets from any browser, or you ship to storefronts
          beyond Apple and Google. {SITE_NAME} is a native Mac, iPad and iPhone
          app that works offline, exports without a watermark on the free tier,
          and includes App Store Connect and Google Play upload at no cost. For
          an Apple developer shipping a handful of languages the free tier
          covers the job; for an agency pushing 80 locales, AppScreens Scale
          goes further.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Need watermark-free store screenshots with direct upload, without an account or a subscription? Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>AppScreens</h3>
      <p>
        AppScreens is a browser-based screenshot generator that runs on any
        operating system behind an account. You build one responsive master
        design per project, drop in raw app screens, and it renders that design
        into every output size you selected — iPhone, iPad, Android phones and
        tablets, and on paid plans Apple Watch, Vision Pro, Wear OS, Chromebook
        and custom sizes for the Huawei, Amazon and Microsoft stores. Its{" "}
        <a
          href="https://appscreens.com/pricing"
          target="_blank"
          rel="noopener noreferrer"
        >
          pricing page
        </a>{" "}
        lists three plans. Free is $0 with no card: 5 screenshots, 1 saved
        project, the essential sizes, and one layer, one device and one title
        per screenshot. Pro is $8.25 a month billed annually at $99.00 (or
        $25.00 month to month) and adds all device sizes, 10 projects, 10
        languages per project, 150+ template sets, custom fonts, 3D and clay
        frames, AI captions and one-click upload to App Store Connect and
        Google Play including Custom Product Page and Product Page Optimization
        variants. Scale is $15.00 a month billed annually at $180.00 and adds
        all 80+ locales, unlimited projects, up to 25 screenshots per project
        and an Extended Licence for client work. Both are subscriptions through
        Stripe; the FAQ says there is no one-time export pack, and the refund
        policy says payments are non-refundable.
      </p>
      <p>
        Localization is where it invests most. Its knowledge base lists 80+
        languages, three translation modes (an AI translator with brand
        guidance, Google Translate, or manual), a CSV export-and-import loop for
        translators, and per-locale overrides for captions, fonts, screenshots
        and spacing, with RTL handled in the same project. An August 2026
        release added context-aware AI translation and Apple Creative Asset
        export targets; a June 2026 release added drag-and-drop editing, SVG
        uploads, listing previews and &quot;Continue on Screen&quot; for
        elements that run across neighbouring screenshots. The site reports
        150k+ users and 12.5 million screenshots exported.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+) sold
        only on the App Store. It works fully offline on plain-JSON project
        files, needs no account, and its free tier never expires: 1 project, 3
        rows and 5 templates per row, with every device frame, every language
        preset, watermark-free exports, and App Store Connect, Google Play and
        iCloud sync all included. Pro removes the project, row and template
        limits and gates nothing else. On this page&apos;s axis — localization
        — it ships 81 built-in language presets plus custom codes, translates
        on-device through Apple&apos;s Translation framework with no API keys or
        servers for the languages that framework covers, and lets you override
        text, style, image and position per locale, link two shapes to one
        string with Reuse Translation, and watch translation progress per
        language.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="AppScreens" rows={ROWS} />

      <h2>What AppScreens does well</h2>
      <p>
        AppScreens has been built for the whole release loop rather than just
        the canvas, and it shows most when the number of markets climbs. A
        single master design that re-flows into every size, then into every
        language, then into Custom Product Page and Product Page Optimization
        variants, is a real workflow advantage for teams that test and localize
        continuously.
      </p>
      <ul>
        <li>
          <strong>Localization at scale.</strong> All 80+ locales on Scale, an
          AI translator that takes brand-voice guidance, Google Translate as a
          fallback, CSV round-trips for human translators, automatic RTL flow
          and text-expansion handling. For a team shipping 30 or 60 languages
          this is the most complete pipeline among the tools we compare.
        </li>
        <li>
          <strong>Any computer, nothing to install.</strong> It runs in a
          browser, so a Windows or Linux developer, or a marketer without a Mac,
          gets the same editor as everyone else and projects follow the account.
        </li>
        <li>
          <strong>Storefront breadth.</strong> Beyond the App Store and Google
          Play it has output sizes for Apple Watch, Apple TV, Vision Pro, Wear
          OS, Chromebook, Huawei AppGallery, Amazon Appstore and the Microsoft
          Store, plus a Google Play feature-graphic generator.
        </li>
        <li>
          <strong>Release tooling around the screenshots.</strong> One-click
          upload of CPP and PPO variants, store-listing preview modes, a free
          ASO review tool, Apple Creative Asset export targets and a
          fastlane-format export for teams that already automate.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>Native and offline.</strong> Projects are plain-JSON files on
          your disk (the schema is public at{" "}
          <a href="/docs/project-schema">/docs/project-schema</a>), there is no
          account, and nothing — screenshots, captions, or store credentials —
          leaves the machine except the upload you trigger.
        </li>
        <li>
          <strong>The free tier is the product, smaller.</strong> Every device
          frame, every shape, every language preset, watermark-free export and
          both store uploads are in the free tier; the only limits are 1
          project, 3 rows and 5 templates per row.
        </li>
        <li>
          <strong>Rows instead of one master.</strong> Each row is a device size
          with its own layout and orientation — a portrait iPhone row above a
          landscape iPad row in the same project — and shapes and backgrounds
          span across screenshots by default rather than as a paid option.
        </li>
        <li>
          <strong>Translation without a service.</strong> Auto-translate runs on
          Apple&apos;s Translation framework on the device, so there are no API
          keys, no usage tiers and no locale cap; what you give up is coverage
          outside the languages that framework supports.
        </li>
      </ul>

      <h2>When to pick AppScreens</h2>
      <ul>
        <li>
          You or your team work on Windows, Linux or a Chromebook. {SITE_NAME}{" "}
          has no web, Windows or Linux version.
        </li>
        <li>
          You need more than roughly a dozen markets machine-translated,
          especially in languages Apple&apos;s Translation framework does not
          cover — AppScreens Scale translates all 80+ of its locales.
        </li>
        <li>
          You ship to Huawei AppGallery, Amazon Appstore, the Microsoft Store,
          Chrome Web Store, or need Apple Watch, Apple TV, Vision Pro or Wear
          OS screenshot sizes.
        </li>
        <li>
          You run Custom Product Pages and Product Page Optimization tests and
          want variants uploaded in one click from the same project.
        </li>
        <li>
          You are an agency producing screenshots for clients and need the
          Extended Licence and unlimited projects that Scale provides.
        </li>
        <li>
          You want AI-generated captions from your listing metadata as a
          starting point.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          You are an Apple-platform developer who wants watermark-free exports
          and App Store Connect or Google Play upload without a subscription —
          the free tier includes both.
        </li>
        <li>
          You ship one to ten languages and most of them are covered by
          Apple&apos;s on-device translation, or you already have translations
          to paste.
        </li>
        <li>
          You want a continuous canvas: a headline or gradient that flows over
          two or three screenshots, mixed orientations per row, custom
          .ttf/.otf fonts bundled into the project.
        </li>
        <li>
          You need project files you own — plain JSON, versionable in git,
          synced through iCloud if you choose — and an editor that works on a
          plane.
        </li>
        <li>
          You capture from the iOS Simulator and want one click to pull the
          latest screenshot straight into a template on the Mac.
        </li>
        <li>
          You want App Store Connect sync that uploads, reorders or removes
          only what changed, by checksum, instead of re-sending the set.
        </li>
      </ul>

      <h2>Switching from AppScreens to {SITE_NAME}</h2>
      <p>
        Neither tool imports the other&apos;s projects. AppScreens keeps yours
        in its cloud account and {SITE_NAME} reads only its own JSON, so the
        layouts are rebuilt. Everything around the layouts carries over:
      </p>
      <ul>
        <li>
          <strong>Raw screenshots</strong> — the per-locale app screens you
          uploaded to AppScreens are the same files you drop onto a{" "}
          {SITE_NAME} row; a batch-import of a folder routes them to rows by
          pixel size.
        </li>
        <li>
          <strong>Captions</strong> — export them from AppScreens as CSV and
          paste each language into the matching locale, or let on-device
          auto-translate fill the ones Apple&apos;s framework covers.
        </li>
        <li>
          <strong>Fonts and brand colours</strong> — bundle the same
          .ttf/.otf files into the project and type the same hex values into
          the gradient editor.
        </li>
        <li>
          <strong>Locale list</strong> — all 80+ AppScreens locales have a
          matching preset among {SITE_NAME}&apos;s 81, and anything exotic is a
          custom code.
        </li>
        <li>
          <strong>Store credentials</strong> — AppScreens states it cannot
          return a submitted ASC key or service-account file, so use your own
          backup or issue a fresh key in App Store Connect and Google Cloud.
        </li>
      </ul>
      <p>
        A realistic estimate for a 6-template, 3-locale iPhone set is two to
        three hours the first time: about an hour to lay out the six templates
        and pick frames, half an hour to add the two extra locales and paste or
        auto-translate copy, and the rest for a 6.5&quot; row, export and a
        first upload. Going the other way is similar work with one extra step:
        AppScreens imposes one orientation per project, so a mixed-orientation
        canvas becomes two projects there.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Does AppScreens watermark free exports?&quot;</h3>
      <p>
        No, and this is often stated wrongly. Its knowledge base says the
        watermark appears in the designer only while a Pro feature is in use,
        and that export is blocked until the feature is removed. If you stay
        inside the free limits — 5 screenshots, one layer and one device per
        screenshot, essential sizes, default language only — the files you
        download are clean. The free plan is limited by count and features, not
        by a stamp on the output.
      </p>

      <h3>
        &quot;Isn&apos;t one master design the same as {SITE_NAME}&apos;s
        rows?&quot;
      </h3>
      <p>
        They solve the same problem from opposite ends. AppScreens keeps one
        responsive layout and re-flows it into every output size, which is less
        work when the design is simple and the sizes are many. {SITE_NAME}{" "}
        gives each size its own row with its own layout, which is more work per
        size but lets the iPad row be landscape, the Mac row use a different
        composition, and the Android row drop the Dynamic Island frame. If you
        want the 6.9&quot; design copied to 6.5&quot;, you duplicate the row
        and adjust; there is no automatic re-flow.
      </p>

      <h3>&quot;Is {SITE_NAME}&apos;s auto-translate as broad?&quot;</h3>
      <p>
        No. AppScreens translates through a hosted AI translator or Google
        Translate into all 80+ of its locales. {SITE_NAME} translates on the
        device through Apple&apos;s Translation framework, which covers a
        narrower set of languages — the trade for no API keys and no servers.
        The other presets are still there, and you fill them by typing or
        pasting; for a team with a translation vendor that is the normal path
        anyway.
      </p>

      <h3>&quot;Can either tool run a headline across two screenshots?&quot;</h3>
      <p>
        Both can now. {SITE_NAME}&apos;s canvas is continuous by design, on the
        free tier included, so any shape or background can sit across template
        boundaries. AppScreens added &quot;Continue on Screen&quot; in June 2026
        and has panoramic backgrounds, both as paid features. The difference is
        default versus option, not presence versus absence.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Which is better&quot; is the wrong question; the two tools have
        drawn the line in different places. AppScreens bets that the expensive
        part of store screenshots is the number of markets, storefronts and
        variants, and it charges a subscription to make that number cheap.{" "}
        {SITE_NAME} bets that most Apple developers ship to two stores and a
        handful of languages, and that what they want is a native editor with
        no account, no watermark and no upload paywall — then charges once, or
        monthly, only for volume.
      </p>
      <p>
        Do not buy {SITE_NAME} if you work on Windows or Linux, if you need
        more than a dozen markets machine-translated in languages outside
        Apple&apos;s framework, if you publish to Huawei, Amazon or Microsoft
        stores, or if you need Apple Watch, TV or Vision Pro output sizes; the
        AppScreens free plan will show you its editor in ten minutes and the
        Scale plan is priced for exactly that job. If you are an Apple-platform
        developer with one to three apps and a manageable locale list, install
        the free tier, rebuild one set, and decide with your own listing.
      </p>
    </ComparisonShell>
  );
}
