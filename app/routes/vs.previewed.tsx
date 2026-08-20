import type { Route } from "./+types/vs.previewed";
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

const SLUG = "previewed";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildComparisonMeta(SLUG, matches);

const ROWS: ComparisonRow[] = [
  {
    factor: "Platform & install",
    them: "Web app in the browser; nothing to install, any operating system",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "Login / Register for saved templates, purchased exports and team groups; its site does not say whether a one-off export works without one",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Lite free forever; Plus $9.99 one-time for 10 exports; Pro $19/month on the annual plan, billed $228 a year (its page says annual saves 35% over monthly)",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "Unlimited 2D exports capped at 720p; no 3D or video; personal use only, with credit to Previewed",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "No watermark mentioned; Lite exports carry a CC Attribution licence (credit required); Plus and Pro include a commercial licence with no attribution",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "iPhone, iPad, MacBook, iMac, Android phone and tablet, browser windows; flat, isometric, 3D and clay variants; the iPhone page lists iPhone 8 through 14 Pro Max",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "App Store and Google Play template categories (iPhone portrait, landscape and panorama, iPad Pro, Mac, Android); output pixel sizes not stated; 720p on Lite, 1080p+ on paid plans",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "One mockup per template; panorama templates spread a scene across an adjustable number of shots; drag-and-drop elements",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "Pre-made 2D, 3D, animation, App Store, Google Play and social templates; no total count on its site; saved templates are grouped and backed up in the cloud",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "Not stated on its site — one saved template per language, edited by hand",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "None — download the files and upload them yourself",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "None — download the files and upload them yourself",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "PNG, JPEG, MP4 (WEBM on the template pages); each download is one export on Plus, and a panorama counts as one",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "3D mockups with camera and environment controls, 3D animations, and a promo-video maker; MP4 at 30fps on Plus, 60fps on its Pro plan",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "Not stated on its site",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Online only; templates live in Previewed's cloud; downloaded files are yours under the plan's licence",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Template groups can be shared with team members",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "3D renders, panoramic banners and short promo videos for websites, social posts and press kits",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is Previewed free?",
    answer:
      "Partly. The Lite plan is free forever and gives unlimited 2D exports at 720p, but no 3D or video, and the output is for personal use with credit to Previewed. Plus is a $9.99 one-time purchase for ten exports at 1080p and above with a commercial licence, and Pro is $19 a month on the annual plan (billed $228 a year) for unlimited exports. Those figures were read on its pricing page in August 2026.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with limits on quantity rather than features. The free tier has no signup and no expiry: one project, three rows, five templates per row, every device frame, shape and locale, watermark-free exports, and App Store Connect and Google Play upload included. Pro removes the project, row and template limits and is sold as a lifetime purchase or a subscription, priced in the app.",
  },
  {
    question: "Can Screenshot Bro open Previewed projects?",
    answer:
      "No. Previewed templates live in its cloud and there is no import path in either direction. What carries over is everything outside the layout: your raw screenshots, the headline copy, your fonts and brand colours, and the list of languages you ship. The layout itself is rebuilt on Screenshot Bro's canvas, and a Previewed 3D render can be dropped onto a template as an image shape.",
  },
  {
    question: "Can Screenshot Bro make an App Preview video?",
    answer:
      "No. Screenshot Bro has no video export of any kind, so an App Preview or a promo clip has to come from another tool. Previewed's promo-video maker and 3D animations export MP4 at 30fps on Plus or 60fps on the Pro plan; check Apple's App Preview resolution and length rules before uploading, because Previewed's pages do not state App Preview compliance.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/previewed-alternative",
    label: "Previewed Alternative: Store-Ready App Screenshots in Every Size",
    description:
      "the longer write-up on moving a store listing from Previewed's templates to a multi-row project.",
  },
  {
    href: "/blog/best-free-app-store-screenshot-generators",
    label: "Best Free App Store Screenshot Generators (2026)",
    description:
      "what each free tier actually gives you — watermarks, sizes, batch export — and when to upgrade.",
  },
  {
    href: "/blog/screenshot-bro-alternatives",
    label: "Screenshot Bro Alternatives: When to Use Another Tool",
    description:
      "the cases where this app is the wrong choice, video and Windows among them.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function PreviewedComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          pick Previewed when the deliverable is a 3D device render, a
          panoramic banner or an animated promo video and you want to make it
          in the browser — {SITE_NAME} has no video export at all. Pick{" "}
          {SITE_NAME} when the deliverable is the store listing itself: every
          App Store and Google Play size, localized, exported at exact pixel
          dimensions and uploaded from the same project on a Mac. The two are
          used together more often than swapped.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Keep Previewed for the 3D hero and the promo clip, and ship the localized store listing from your Mac. Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>Previewed</h3>
      <p>
        Previewed is a mockup generator that runs entirely in the browser.
        Its{" "}
        <a
          href="https://previewed.app/plans"
          target="_blank"
          rel="noopener noreferrer"
        >
          pricing page
        </a>{" "}
        describes three tiers as Free, Pay-as-you-Download and Subscription.
        Lite is free forever with unlimited 2D exports at 720p under a CC
        Attribution licence — the FAQ says free-plan assets are for personal
        use and must credit Previewed wherever they appear. Plus is $9.99 one
        time for ten exports at 1080p and above, and adds 3D exports, video at
        30fps and a commercial licence; each download subtracts one export, a
        panorama counts as one, and purchased exports do not expire. Pro is
        shown at $19 a month on the annual plan, billed $228 a year, for
        unlimited exports, 60fps video and priority support. The page says
        annual billing saves 35% over monthly, but the month-to-month figure
        sits behind a toggle, so read it there before you decide.
      </p>
      <p>
        The product covers 2D and 3D device mockups, 3D animations, panorama
        sets for App Store and Google Play, social-media templates, browser
        windows and a promo-video maker that the navigation marks as new and
        its own landing page calls alpha. Devices include iPhone, iPad,
        MacBook, iMac, Android phones and tablets, with flat, isometric and
        clay variants and &quot;100s of fonts&quot;. The iPhone mockup page
        names iPhone 8, 11, 12, 13 and 14 Pro Max; I did not find iPhone 15,
        16, 17 or Air on the pages I read. Exports are JPEG, PNG and MP4 (the
        template pages also list WEBM), saved templates are backed up in
        Previewed&apos;s cloud, and templates can be organised into groups
        that are shared with team members.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+) from
        the App Store, and it is only for store listings. A project is one
        continuous canvas of rows — one row per device size — with the
        individual screenshots as templates, so a headline or gradient can
        flow across two screenshots. It ships 81 language presets plus custom
        codes, on-device auto-translate through Apple&apos;s Translation
        framework for the languages that framework supports, per-locale
        overrides for text, style, image and position, and exports PNG or
        JPEG at each row&apos;s exact pixel size into one folder per locale
        and row. From the same project it uploads to App Store Connect with an
        API key and to Google Play with a service-account key. It has two 3D
        iPhone frames you can rotate, no other 3D, and no video export of any
        kind. The free tier (1 project, 3 rows, 5 templates per row) includes
        every frame, every locale, watermark-free export and both uploads.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="Previewed" rows={ROWS} />

      <h2>What Previewed does well</h2>
      <p>
        Previewed&apos;s strength is the range of marketing assets it makes
        without leaving a browser tab. A 3D render of an app on an angled
        phone, a panorama that spreads one scene across five store slots, or a
        ten-second animated clip are each a template pick and a few edits
        away, on any operating system, with no download.
      </p>
      <ul>
        <li>
          <strong>3D and animation in the browser.</strong> Custom camera and
          environment controls, clay variants, text animations and MP4 export
          at up to 60fps, with no desktop 3D app to install or learn.
        </li>
        <li>
          <strong>A promo-video maker.</strong> Add media, arrange slides with
          transitions, text and backgrounds, export MP4. It is labelled alpha
          on its landing page, but it exists, and {SITE_NAME} has nothing
          comparable.
        </li>
        <li>
          <strong>A cheap commercial on-ramp.</strong> $9.99 one time buys ten
          exports at 1080p and above with a commercial licence, and they never
          expire. For a single landing-page hero and a couple of social posts,
          that is the whole bill.
        </li>
        <li>
          <strong>Cloud templates and team groups.</strong> Saved templates
          are backed up and can be grouped and shared, so a designer and a
          developer can edit the same mockup set from different machines.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>Exact store sizes are the unit of work.</strong> A row is a
          store size — iPhone 6.9&quot;, iPad 13&quot;, Android 7&quot;
          tablet — and export writes each template at that row&apos;s pixel
          dimensions with zero-padded filenames, one folder per locale and
          row. There is no resolution tier and no scale multiplier.
        </li>
        <li>
          <strong>Localization is built into the project.</strong> 81 language
          presets, on-device auto-translate with no API keys, per-locale
          overrides and progress tracking replace the one-template-per-language
          routine.
        </li>
        <li>
          <strong>Upload is part of the app.</strong> App Store Connect sync
          compares checksums and only uploads, reorders or removes what
          changed; Google Play uploads land as a staged edit you confirm. Both
          are in the free tier.
        </li>
        <li>
          <strong>Local files, no account.</strong> Projects are plain JSON
          with a public schema, the app works offline, and iCloud sync is
          opt-in — the trade-off being no browser version and no team
          accounts.
        </li>
      </ul>

      <h2>When to pick Previewed</h2>
      <ul>
        <li>
          You need a hero image of your app on a 3D-angled iPhone or MacBook
          for the landing page, a press kit or a Product Hunt launch. This is
          the common case, and {SITE_NAME} is the wrong tool for it.
        </li>
        <li>
          You need an App Preview, a short promo clip or an animated device
          for social media. {SITE_NAME} does not export video.
        </li>
        <li>
          You work on Windows, Linux or a Chromebook, or you want something
          that runs on any machine without an install.
        </li>
        <li>
          You want a panoramic banner or a five-slot panorama from one scene
          and you are happy to download and upload the files by hand.
        </li>
        <li>
          Several people edit the same mockups and you want them in a shared
          cloud group rather than a project folder.
        </li>
        <li>
          You need one or two mockups once, and $9.99 for ten commercial
          exports is the right amount of commitment.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          Your deliverable is the full store listing — five to ten screenshots
          per device size, for iPhone, iPad and possibly Mac and Android — and
          you will redo it at every major release.
        </li>
        <li>
          You ship in more than two or three languages and want translation,
          per-locale overrides and locale folders handled in one project
          rather than in duplicated templates.
        </li>
        <li>
          You want to upload straight to App Store Connect and Google Play
          from the tool that made the files, and have re-uploads touch only
          what changed.
        </li>
        <li>
          You need current frames — iPhone 17, iPhone Air, iPad Pro 13&quot;,
          Apple Watch Ultra 3 — today.
        </li>
        <li>
          You want exports at the exact pixel sizes the stores require,
          without checking what &quot;720p&quot; or &quot;1080p+&quot; turns
          out to be for a portrait phone.
        </li>
        <li>
          You want to work offline with project files you own, and no account
          anywhere.
        </li>
      </ul>

      <h2>Using Previewed and {SITE_NAME} together</h2>
      <p>
        Because the two tools make different assets from the same raw
        screenshots, the practical setup is to use both and let each do the
        part it is built for:
      </p>
      <ol>
        <li>
          <strong>Capture</strong> clean screenshots from the iOS Simulator or
          a device — one set per device size you ship. On Mac, {SITE_NAME} can
          pull the latest Simulator screenshot straight onto a template after a
          one-time helper install.
        </li>
        <li>
          <strong>Build the store listing in {SITE_NAME}.</strong> Drop the
          folder on the canvas (shots route to the right row by pixel size),
          lay out the templates, add locales with auto-translate where the
          Translation framework supports them, and export one folder per
          locale and row.
        </li>
        <li>
          <strong>Upload from {SITE_NAME}</strong> with an App Store Connect
          API key and a Google Play service-account key. Later releases only
          push the templates whose checksums changed.
        </li>
        <li>
          <strong>Make the marketing assets in Previewed.</strong> Drop the
          same raw screenshots into a 3D template for the website hero, an
          animation for social posts, or the promo-video maker for an App
          Preview, and export MP4 or PNG on a Plus or Pro plan.
        </li>
        <li>
          <strong>Optionally, bring a render back.</strong> A Previewed 3D PNG
          can be placed on a {SITE_NAME} template as an image shape, on a
          bleed row from the Invisible frame category, so a 3D hero also
          appears as screenshot one in the store.
        </li>
      </ol>
      <p>
        Two cautions on step 5. A 720p Lite export is far smaller than a
        6.9&quot; store slot, so the render needs to come from a 1080p+ paid
        export and may still need to be cropped rather than filled. And the
        Lite licence requires attribution, which you cannot sensibly put on a
        store screenshot — use a Plus or Pro export for anything that goes to
        App Store Connect.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Can&apos;t I just make the store screenshots in Previewed?&quot;</h3>
      <p>
        Yes, and for a small listing it is a reasonable choice. Previewed has
        App Store and Google Play template categories, portrait and panorama
        layouts, and the App Store Screenshot Generator page lists two
        pre-made templates to start from. If you ship one app, in one or two
        languages, and are fine uploading the files yourself, nothing here
        says you need a Mac app. The things to check are the output size — the
        Lite plan caps exports at 720p, which is below what App Store Connect
        accepts for a 6.9&quot; iPhone (1320 × 2868 or 1290 × 2796 pixels),
        so a store-ready set needs paid 1080p+ exports — and the export count,
        since ten Plus exports cover one device size in one language before
        the subscription starts to make more sense.
      </p>

      <h3>&quot;Is Previewed&apos;s free plan watermarked?&quot;</h3>
      <p>
        Its pricing page does not mention a watermark at all. What the Lite
        plan carries instead is a CC Attribution licence: the FAQ says
        free-plan assets are for personal use and you must credit Previewed
        wherever they appear. For a personal project, a blog post or a
        portfolio that is often acceptable, and it is a more honest free tier
        than a stamped image. For a commercial listing you need the Plus or
        Pro commercial licence, which removes the attribution requirement.
      </p>

      <h3>&quot;Does {SITE_NAME} do 3D like Previewed?&quot;</h3>
      <p>
        Only narrowly. {SITE_NAME} ships two 3D USDZ iPhone frames that you
        can rotate on a template; there is no 3D iPad or Mac, no camera or
        environment controls, no clay variants and no animation. If your
        screenshot set wants one angled phone on slide one, that covers it. If
        you want Previewed&apos;s range of 3D scenes, use Previewed and bring
        the render over as an image.
      </p>

      <h3>&quot;Can {SITE_NAME} export an App Preview?&quot;</h3>
      <p>
        No. There is no video export in {SITE_NAME} — not MP4, not GIF, not an
        animated row — and none is planned as part of the screenshot workflow.
        An App Preview has to come from Previewed&apos;s promo-video maker or
        animations, from a screen recording, or from a video editor. Note that
        Previewed&apos;s pages describe its video as promo output and do not
        state App Preview compliance, so check Apple&apos;s resolution and
        duration rules for the device size before you upload.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Which is better&quot; is the wrong frame, because the overlap is
        thin. Previewed makes the assets that surround an app — a 3D render
        for the site, an animated device for a post, a promo video — and makes
        them in a browser for a one-time $9.99 or a subscription. {SITE_NAME}
        makes the store listing itself — every size, every language, exact
        pixels, uploaded — and does nothing outside that. Most apps need both
        kinds of asset, and the realistic outcome is using both tools, not
        choosing one.
      </p>
      <p>
        Do not buy {SITE_NAME} if your deliverable is a video, a 3D hero for a
        landing page, or anything that needs to run on Windows or in a
        browser; Previewed or a similar tool is the right answer there, and
        nothing in {SITE_NAME} will close that gap. Do not buy it either if you
        need one mockup once — the free tier already covers a single small
        listing. Pay for it when you are shipping repeated, localized sets to
        both stores and the row-per-size canvas, the locale overrides and the
        checksum-based upload are the parts you would otherwise redo by hand
        each release.
      </p>
    </ComparisonShell>
  );
}
