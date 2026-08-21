import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";
import type { Route } from "./+types/vs.shotbot";
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

const SLUG = "shotbot";

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
    them: "Native iPhone, iPad, Mac and Apple Vision Pro app (iOS/iPadOS 17+, macOS 14+ on Apple silicon, visionOS 2.5+), from the App Store; source published on GitHub under Apache-2.0",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "No signup mentioned on the listing; iCloud sync and Family Sharing use your Apple account",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Free with a daily cap on frames; one in-app purchase listed, an Annual Subscription at $4.99 (US store, August 2026); referral credits for inviting friends",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "“Limited frames per day to try the app”; the daily number is not stated on the listing",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "Not stated on its App Store listing",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "iPhone, iPad, Mac and Apple Watch mockups, “the latest device models”; exact models not listed; no Android frames mentioned",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "No store size presets; output follows the chosen frame. Five quality levels (Original, High, Medium, Low, Poor) trade file size against quality; a frame picker handles Display Zoom shots",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "One screenshot in one frame (Individual Mode), or several framed shots stitched horizontally into one image (Combined Mode); no text, background or shape layer mentioned",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "None — frames, not templates",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "None mentioned; there is no text layer to translate",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "No — framed images are saved to Photos or Files, copied to the clipboard, or handed on through the share sheet",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "No",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "Individual or Combined images; auto-save to Photos, auto-save to Files (iCloud Documents), auto-copy to clipboard, optional auto-delete of the original; file format not stated on the listing",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "Not mentioned on its App Store listing",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "Shortcuts actions, a share-sheet extension and a Latest Screenshot widget; no API mentioned",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Outputs are ordinary image files in Photos or Files; preferences sync via iCloud; open source (Apache-2.0); privacy label lists purchases and usage data not linked to you",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Single-user; Family Sharing is supported for the purchase",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Framing the screenshot you just took, on the device you took it on, in seconds",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is Shotbot free?",
    answer:
      "Partly. Shotbot's App Store listing describes a free tier with a limited number of frames per day, an Unlimited plan, and referral credits you earn by inviting friends. The only in-app purchase shown on the US listing in August 2026 is an Annual Subscription at $4.99. The daily free limit is not printed on the listing, so check inside the app.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with count limits rather than a time limit. The free tier gives you one project, three rows and five templates per row, with every device frame, shape and locale, no watermark, and App Store Connect and Google Play upload included. Pro removes the count limits and is sold as a lifetime purchase or a subscription; the price is shown in the app.",
  },
  {
    question: "Can Screenshot Bro open Shotbot projects?",
    answer:
      "No, and there is nothing to open: Shotbot does not keep project files, it writes framed images to Photos, Files or the clipboard. Bring the raw, unframed screenshots instead, because Screenshot Bro applies its own device frames and a pre-framed image would end up framed twice. Your copy, fonts and brand colours carry over as they are.",
  },
  {
    question: "Can Screenshot Bro frame a screenshot from the share sheet on iPhone?",
    answer:
      "No. Screenshot Bro has no share-sheet extension and no widget; you open a project and add images to a row. That is the right shape for building a listing and the wrong shape for framing one screenshot you took ten seconds ago. For that job Shotbot is faster, and the two do not get in each other's way.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/shotbot-alternative",
    label: "Shotbot Alternative: From Framing to Full Screenshot Design",
    description:
      "the long-form version of this page, for readers who have outgrown framing single shots.",
  },
  {
    href: "/blog/best-app-store-screenshot-tools-for-mac",
    label: "Best App Store Screenshot Tools for Mac (2026)",
    description: "the native Mac options side by side, Shotbot included.",
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

export default function ShotbotComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          Shotbot is the faster tool when you have one screenshot on your
          iPhone, iPad, Mac or Vision Pro and want it inside a device frame in
          the next ten seconds — share it, get the framed image back, done.{" "}
          {SITE_NAME} is for the other job: laying out a full App Store or
          Google Play listing across device sizes and languages, then
          uploading it. The two overlap on exactly one feature, the device
          frame, and almost nowhere else.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Have the raw screenshots already? Build the whole localized listing from them and upload it from the same window. Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>Shotbot</h3>
      <p>
        <strong>Shotbot</strong> (&quot;Shotbot - Framed Screenshots&quot;) is
        a native app by Richard Witherspoon for iPhone, iPad, Mac and Apple
        Vision Pro — iOS and iPadOS 17 or later, macOS 14 or later on an Apple
        silicon Mac, visionOS 2.5 or later — sold through{" "}
        <a
          href="https://apps.apple.com/us/app/shotbot-framed-screenshots/id6450552843"
          target="_blank"
          rel="noopener noreferrer"
        >
          the App Store
        </a>
        . It does one thing: take a screenshot and hand it back inside a device
        mockup for iPhone, iPad, Mac or Apple Watch. The listing describes two
        modes — Individual, which frames a single shot, and Combined, which
        stitches several framed shots side by side into one wide image — plus
        drag-and-drop on every platform and import from Photos, Files or the
        share sheet. The source is published on GitHub under the Apache-2.0
        license, which is unusual for a paid App Store utility.
      </p>
      <p>
        Pricing is free with a daily cap. The listing says &quot;Limited frames
        per day to try the app&quot;, names an Unlimited plan, and offers
        referral credits for inviting friends. The only in-app purchase shown
        on the US listing is an Annual Subscription at $4.99; the number of
        free frames per day is not printed anywhere on the listing, so check
        inside the app. The current release is version 1.15, dated 30 March
        2026, which added a frame picker for devices that use Display Zoom.
        Shotbot&apos;s own website did not resolve when we checked, so nothing
        on this page comes from it — every detail was read on the App Store
        listing and in the repository the listing links to.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+) for
        building the whole set of store screenshots rather than one image. A
        project holds rows — one per device size, such as iPhone 6.9&quot;,
        iPad 13&quot;, Mac, Android phone and 10&quot; tablet — and each row
        holds the individual templates; headlines, images, gradients and
        backgrounds can span across templates. It ships 50+ starter templates,
        81 language presets with on-device auto-translate, custom fonts, and
        exports PNG or JPEG at the exact pixel size each store expects, one
        folder per locale and row. From the same window it uploads to App
        Store Connect and Google Play. The free tier (1 project, 3 rows, 5
        templates per row) has no expiry and no watermark and includes both
        uploads; Pro removes the count limits and nothing else.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="Shotbot" rows={ROWS} />

      <h2>What Shotbot does well</h2>
      <p>
        Shotbot is built around a reflex: screenshot, share, framed. Everything
        on its listing serves that loop, and it is a loop {SITE_NAME} does not
        try to run. Specifically:
      </p>
      <ul>
        <li>
          <strong>It lives where the screenshot is.</strong> The share-sheet
          extension means you never open the app; the Latest Screenshot widget
          frames the most recent capture straight from the home screen; and on
          visionOS it runs as a native app rather than an iPad app in
          compatibility mode.
        </li>
        <li>
          <strong>Auto-actions finish the job for you.</strong> For each
          output you decide whether it is saved to Photos, saved to Files
          (iCloud Documents), copied to the clipboard, and whether the original
          screenshot is deleted — individual, combined, all or none. Set it
          once and iCloud syncs the preference to your other devices.
        </li>
        <li>
          <strong>Shortcuts makes it scriptable on the device itself.</strong>{" "}
          A shortcut can take today&apos;s screenshots, frame them and drop
          them in a folder without a tap, which is more automation than most
          store-screenshot tools offer on iPhone.
        </li>
        <li>
          <strong>It is open source.</strong> The listing links to{" "}
          <a
            href="https://github.com/Rspoon3/Shotbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            the Shotbot repository
          </a>{" "}
          (Apache-2.0), so you can read exactly what it does with your images.
          That matches the short privacy label — purchases and usage data, not
          linked to your identity — and five quality levels from Original down
          to Poor mean a framed shot for a chat or a bug report stays small.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>The unit of work is the listing, not the image.</strong> You
          open one project and see every device size as a row and every
          screenshot as a template; a change to a shared headline or background
          shows up across the set at once.
        </li>
        <li>
          <strong>There is a text and background layer.</strong> Shotbot&apos;s
          listing describes frames and nothing on top of them. {SITE_NAME}
          &apos;s whole model is headline plus device plus background, with rich
          text, bundled custom fonts, 16 gradient presets and SVG shapes, and
          that copy is what gets translated per locale.
        </li>
        <li>
          <strong>Output is shaped for the stores.</strong> Every row exports
          at its exact App Store or Google Play pixel size, one folder per
          locale and row with zero-padded filenames, and the same project
          uploads to App Store Connect (checksum sync of only what changed) and
          Google Play (staged as an edit you confirm).
        </li>
        <li>
          <strong>Android is a first-class row.</strong> Shotbot&apos;s frames
          are iPhone, iPad, Mac and Apple Watch. {SITE_NAME} adds an abstract
          Android phone, a Pixel 9 and an Android tablet that flex to any
          aspect ratio, so one project covers both stores. It has an Apple
          Watch Ultra 3 frame too, but no Watch size preset and no visionOS
          app.
        </li>
      </ul>

      <h2>When to pick Shotbot</h2>
      <ul>
        <li>
          You just took a screenshot on your iPhone and want it framed for a
          post on X, Threads or Mastodon, or a Slack message, in the next
          minute. This is the common case and Shotbot wins it outright.
        </li>
        <li>
          Bug reports and support replies: a framed shot at Low or Poor
          quality, copied to the clipboard, pasted into the ticket.
        </li>
        <li>
          Documentation, release notes and changelogs that need dozens of small
          framed shots and no headlines.
        </li>
        <li>
          A quick before-and-after or a three-screen flow for a teammate —
          Combined Mode stitches the framed shots into one image.
        </li>
        <li>
          You want every screenshot you take to be framed automatically through
          a Shortcut, on the device, with no Mac involved.
        </li>
        <li>
          You work on a Vision Pro. Shotbot runs there; {SITE_NAME} does not.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          You are shipping an App Store or Google Play listing: five to ten
          screenshots per size, with headlines, at 6.9&quot;, 6.5&quot;, iPad
          13&quot; and whatever else the store asks for.
        </li>
        <li>
          The listing exists in more than one language — 81 presets, on-device
          auto-translate where Apple&apos;s Translation framework supports the
          language, and per-locale overrides when a German headline runs long.
        </li>
        <li>
          You ship to both stores and would rather keep iOS and Android rows in
          one project than maintain two sets.
        </li>
        <li>
          You want to upload from the tool instead of dragging 60 files into
          App Store Connect by hand.
        </li>
        <li>
          The design needs a background, a headline and a device together —
          possibly a headline flowing across two screenshots — which framing
          alone cannot express.
        </li>
        <li>
          You re-ship every few weeks and want to re-drop new screenshots onto
          a layout that already exists, rather than re-frame and re-caption
          from scratch.
        </li>
      </ul>

      <h2>Using Shotbot and {SITE_NAME} together</h2>
      <p>
        These two are complementary rather than rivals, and a solo developer
        can reasonably run both. A workable pipeline:
      </p>
      <ol>
        <li>
          <strong>Capture</strong> raw screenshots on the device or in the iOS
          Simulator and keep the unframed originals. {SITE_NAME} applies its
          own frames, so it needs the raw image, not Shotbot&apos;s output.
        </li>
        <li>
          <strong>Share the quick ones with Shotbot.</strong> Anything going to
          social, Slack, a bug tracker or your docs: share sheet, framed, done.
          Let its auto-actions file them in Photos or Files so you can find
          them later.
        </li>
        <li>
          <strong>Build the listing in {SITE_NAME}.</strong> Drop the same raw
          folder onto the canvas — shots are routed to the right row by pixel
          size — then add headlines, backgrounds and locales, and export one
          folder per locale and row.
        </li>
        <li>
          <strong>Upload</strong> from {SITE_NAME} with your App Store Connect
          API key or Google Play service-account key. Only the screenshots that
          changed are re-sent on the next release.
        </li>
        <li>
          <strong>Promote after launch.</strong> {SITE_NAME}&apos;s Showcase
          export gives you the branded square, 4:5, story and 16:9 versions of
          a template for announcement posts; Shotbot stays the tool for the
          unbranded single shot in a reply.
        </li>
      </ol>
      <p>
        The rule of thumb is short: if the image needs a headline, it is a{" "}
        {SITE_NAME} job; if it does not, Shotbot is faster.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;At $4.99 a year it must be a toy?&quot;</h3>
      <p>
        No. The price reflects scope, not effort. Shotbot is native on four
        platforms, ships a share extension, widgets and Shortcuts actions, and
        is published as open source with a privacy label most paid utilities
        cannot match. It is cheap because framing one screenshot is a small,
        well-defined problem, and it solves that problem more conveniently
        than {SITE_NAME} does. If that is the whole job, paying more for a
        listing designer would be the mistake.
      </p>

      <h3>&quot;Can&apos;t I build a store listing by framing six shots in Shotbot?&quot;</h3>
      <p>
        You can frame six shots, but what you get is six framed images at the
        frame&apos;s own output size, with no headline, no background and no
        guarantee of matching the 1320 × 2868 pixels the store wants for a
        6.9&quot; iPhone. Combined Mode produces one wide image, not a set of
        separate screenshots. To turn those into a listing you would still need
        a canvas to set the size, add copy and export per locale — at which
        point the framing step was wasted, because that tool frames too.
      </p>

      <h3>&quot;Does {SITE_NAME} have a share extension on iPhone?&quot;</h3>
      <p>
        No. {SITE_NAME} on iPhone and iPad opens a project and adds images to a
        row; there is no share-sheet extension and no widget. That is the right
        shape for building a listing and the wrong shape for &quot;frame this
        one screenshot right now&quot;. If that second sentence describes your
        week, Shotbot is the better tool and this page should not talk you out
        of it.
      </p>

      <h3>&quot;Shotbot is open source, so isn&apos;t the whole thing free?&quot;</h3>
      <p>
        The source is Apache-2.0 licensed, and you are free to read it or build
        it yourself. The App Store build is what most people will use, and that
        build has the daily cap and the Unlimited plan described on the
        listing. Treat the repository as transparency about what the app does,
        not as a way around the subscription — building and signing your own
        copy for four platforms costs more of your time than $4.99 a year.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Which is better&quot; is the wrong question, because the two
        tools measure their work in different units. Shotbot measures it in
        seconds per image and wins every time the job is one screenshot on the
        device you are holding. {SITE_NAME} measures it in hours per listing
        and earns that time back on every re-release, because the layout,
        locales and upload sync already exist. Neither replaces the other, and
        the free tier of each is enough to prove that on your own screenshots.
      </p>
      <p>
        Do not buy {SITE_NAME} if you never ship a store listing, if framed
        shots for social posts, docs and bug reports are the whole need, if you
        work on a Vision Pro, or if on-device Shortcuts automation is the point
        — Shotbot covers all of that and {SITE_NAME} covers none of it. Buy it
        when you have a real listing to ship in more than one size or more than
        one language, and ideally try the free tier on that listing first,
        because it already includes the upload.
      </p>
    </ComparisonShell>
  );
}
