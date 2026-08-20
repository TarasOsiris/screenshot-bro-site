import type { Route } from "./+types/vs.rotato";
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

const SLUG = "rotato";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildComparisonMeta(SLUG, matches);

const ROWS: ComparisonRow[] = [
  {
    factor: "Platform & install",
    them: "Native Mac app (macOS 11 or newer), downloaded from rotato.app and activated with a license code; a leaner web beta at app.rotato.app; no Windows app",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "Mac app: a license code, no account; web beta: account login (a Mac license does not carry over)",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Three one-time Mac tiers — Basic, Standard, Premium — with 6 or 12 months of updates and an optional one-time renewal; no amounts are printed on the pricing page; 30-day money-back guarantee; student plan",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "Unlimited-length trial, no credit card; exports carry a watermark until you buy a license",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "Watermark on trial exports; a Mac license also covers only devices released within 12 months of purchase, so newer frames show the watermark until you renew",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "30+ 3D devices: iPhone 17 Pro / Pro Max back to iPhone 8, iPad Pro and iPad mini, MacBooks and monitors, Apple Watch, Galaxy S25 and other Android phones, generic and clay devices; custom 3D models in private beta",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "A 'Snapshot all iPhone sizes' option renders one scene at every App Store iPhone size; those sizes are fixed to Apple's rules; iPad and Mac store sizes are not described in its help pages",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "One 3D scene per file: device(s), background, 3D labels, camera and lighting; multi-device scenes; no multi-screenshot canvas",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "100+ templates in its gallery; Standard includes 18 premium video templates, Premium 100 plus 2 website templates; free templates export with the watermark",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "Not a built-in workflow — labels are typed per scene and you re-render each language by hand",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "No — its help pages end with 'drag them directly into App Store Connect'",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "No — export files",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "PNG stills and PNG sequences, transparent backgrounds; H.264 at 4K 60 fps, ProRes 4444 and HEVC with alpha, scroll-driven web animations; 8K on Premium, 4K on Standard; batch render from a folder of screenshots",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "The core feature — keyframe timeline, 30+ animation presets, camera lens and depth of field, cinematic layer explosion, soundtrack, iPhone screen mirroring over USB",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "Batch rendering with file name as label; a Figma plugin that hands frames to the Mac app; no API or CLI stated on its site",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Offline-first Mac app; the version you bought keeps working after the update window ends; keyframes can be saved and shared as files",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Per-seat licenses; 10+ seats through sales with purchase orders; no shared workspace",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Designers and marketers who need a 3D hero render or a product video in minutes, without learning After Effects or Cinema 4D",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is Rotato free?",
    answer:
      "There is a free trial with no time limit and no credit card, but exports carry a watermark until you buy a license. Licenses are one-time payments in three tiers (Basic, Standard, Premium) with 6 or 12 months of updates; the pricing page does not print the amounts, so check it directly. Rotato advertises a 30-day money-back guarantee and a student plan.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with limits on quantity rather than features. The free tier has no signup and no expiry: 1 project, 3 rows and 5 templates per row, with every device frame, shape and locale, watermark-free exports, and App Store Connect, Google Play upload and iCloud sync included. Pro removes the project, row and template limits and is sold as a lifetime purchase or a subscription, priced in the app.",
  },
  {
    question: "Can Screenshot Bro open Rotato projects?",
    answer:
      "No. Neither app reads the other's files. What carries over is the output: export a PNG from Rotato, ideally with a transparent background, and drop it into a Screenshot Bro template as an image shape. Your raw screenshots, headline copy, fonts and brand colours move across as they are.",
  },
  {
    question: "Can Screenshot Bro make the App Preview video?",
    answer:
      "No. Screenshot Bro exports PNG and JPEG only and has no video or App Preview export. Rotato renders H.264, ProRes and HEVC video and lets you set a custom resolution, so it is the right tool for the preview; you then upload the video in App Store Connect by hand, while Screenshot Bro uploads the screenshot sets.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/rotato-alternative",
    label: "Rotato Alternative for App Store Screenshot Sets",
    description:
      "the long-form version of this page, for people searching for a replacement rather than a comparison.",
  },
  {
    href: "/blog/best-app-store-screenshot-tools-for-mac",
    label: "Best App Store Screenshot Tools for Mac (2026)",
    description:
      "every native Mac option in one list, Rotato and Screenshot Bro included.",
  },
  {
    href: "/blog/screenshot-bro-alternatives",
    label: "Screenshot Bro Alternatives: When to Use Another Tool",
    description:
      "the cases where this app is the wrong choice, written by its maker.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function RotatoComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          Rotato is the tool when you need a 3D render or a video of your app
          in a few minutes — a hero image for the landing page, a launch clip,
          an App Preview. {SITE_NAME} is the tool when you need the flat set of
          up to ten screenshots in every App Store and Google Play size and
          language, uploaded. Many Mac developers use both: render the hero in
          Rotato, build and ship the set in {SITE_NAME}.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Once the hero render is done, you still need the flat set in every size and language. Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>Rotato</h3>
      <p>
        Rotato is a native Mac app for 3D device mockups and animations —
        &quot;3D mockup images and movies in minutes&quot;, as its homepage
        puts it. You drop a screenshot or a screen recording onto one of 30+
        3D devices (iPhone 17 Pro and Pro Max back to iPhone 8, iPads,
        MacBooks, Apple Watch, Galaxy S25 and other Android phones), rotate
        it, set the camera, lighting, shadows and reflections, and either
        snapshot a still or keyframe an animation on a timeline. Video renders go out as H.264 at
        4K 60 fps, ProRes 4444 or HEVC with alpha, and as PNG sequences or
        scroll-driven web animations. It runs on macOS 11 or newer and is
        offline-first; a leaner web beta at app.rotato.app drops screen
        mirroring, presentation mode and the professional video formats.
      </p>
      <p>
        Pricing is a one-time payment in three tiers. According to its{" "}
        <a
          href="https://rotato.app/pricing"
          target="_blank"
          rel="noopener noreferrer"
        >
          pricing page
        </a>
        , Basic covers phone mockups only with 6 months of updates; Standard
        covers all 30+ devices, 18 premium video templates and 4K rendering
        with 12 months of updates; Premium adds 100 premium video templates,
        two website templates, 8K rendering, the animation timeline, the Figma
        plugin and clay mode, also with 12 months of updates. The page prints
        no amounts, so check there for today&apos;s numbers. After the update
        window ends the app keeps working as bought and a renewal buys another
        year of new devices and features. The trial has no time limit and
        needs no credit card, but exports are watermarked until you license,
        and there is a 30-day money-back guarantee. Custom 3D model import is
        in private beta, and a Figma plugin (free to install) sends frames to the Mac app
        for rendering.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+) from
        the App Store that builds the flat store listing rather than a 3D
        scene. A project is one continuous canvas of rows — each row a store
        size such as iPhone 6.9&quot;, iPad 13&quot; or Android phone — and
        each row holds the individual screenshot templates, with headlines and
        backgrounds allowed to span across several of them. It has 81
        language presets with on-device auto-translation through Apple&apos;s
        Translation framework, per-locale overrides for text, style, image
        and position, and direct upload to App Store Connect and Google Play
        that syncs only what changed. Frames are flat renders (plus two 3D
        USDZ iPhones you can angle); there is no timeline and no video or App
        Preview export. The free tier has no expiry and no watermark, and
        includes the store uploads.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="Rotato" rows={ROWS} />

      <h2>What Rotato does well</h2>
      <p>
        Rotato&apos;s pitch is that it makes a design look expensive in about
        a minute, and it delivers on that. The scenes are photoreal out of the
        box, the render times are seconds rather than minutes, and the
        alternative it replaces — After Effects or Cinema 4D with a purchased
        device model — costs far more in both money and learning time.
      </p>
      <ul>
        <li>
          <strong>Video without a video editor.</strong> The timeline is
          &quot;rotate, make keyframe, rotate, make keyframe&quot;, with 30+
          animation presets, easing, depth of field and a soundtrack drop-in.
          ProRes 4444 and HEVC with alpha mean the render composites cleanly
          onto a website or into a longer edit.
        </li>
        <li>
          <strong>One purchase, not a subscription.</strong> &quot;No monthly
          fees. No yearly fees.&quot; The version you buy keeps working after
          the update window; you only pay again if you want the newer devices
          and features.
        </li>
        <li>
          <strong>Fast, offline, Mac-native.</strong> Renders happen on your
          GPU, nothing is uploaded, and iPhone screen mirroring over USB puts a
          live device on the 3D model for recording.
        </li>
        <li>
          <strong>Designer-friendly extras.</strong> The Figma plugin frames a
          selected frame in 3D in one click or explodes its layers into a
          cinematic stack; transparent PNG and video renders slot into any
          other tool.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>The unit of work is the set, not the scene.</strong> Rotato
          produces one image or clip per scene. {SITE_NAME} lays out all ten
          screenshots per size on one canvas, so the headline on screenshot
          two lines up with the headline on screenshot three and a background
          can flow across both.
        </li>
        <li>
          <strong>Languages are a dimension of the project.</strong> Add a
          locale and every template in every row gets a copy of its text to
          translate — on-device for the languages Apple&apos;s framework
          supports, typed or pasted for the rest — with per-locale overrides
          for style, image and position. In Rotato each language is a
          separate re-render.
        </li>
        <li>
          <strong>Export ends in the store.</strong> {SITE_NAME} exports one
          folder per locale and row at the exact pixel size and then uploads
          to App Store Connect or Google Play itself, re-sending only what
          changed. Rotato&apos;s App Store flow ends with files in Finder for
          you to drag in.
        </li>
        <li>
          <strong>Flat by design.</strong> There is no camera, no lighting and
          no timeline. Frames are front-on renders meant to sit on a gradient
          with a headline, which is what most listings on the store look like.
        </li>
      </ul>

      <h2>When to pick Rotato</h2>
      <ul>
        <li>
          You need an App Preview or a launch video, not only still images —
          this is the common case, and {SITE_NAME} cannot help with it.
        </li>
        <li>
          You want a 3D hero render for the landing page, Product Hunt, a
          pitch deck or a press kit, and you want it in the next ten minutes.
        </li>
        <li>
          You prefer to pay once and keep a tool, and you can live without new
          device frames after the first year.
        </li>
        <li>
          You design in Figma and want to frame a selection in 3D without
          leaving it.
        </li>
        <li>
          Your store listing is a single iPhone size with one short label per
          screenshot — Rotato&apos;s &quot;Snapshot all iPhone sizes&quot;
          covers that in one render.
        </li>
        <li>
          You want clay renders, tilted perspectives or exploded layers as
          part of the brand look.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          You ship in several languages and want translation, per-locale
          tweaks and progress tracking inside the screenshot project.
        </li>
        <li>
          You ship to both the App Store and Google Play and want the iPhone,
          iPad, Mac, Android phone and tablet sets in one file.
        </li>
        <li>
          You want the upload step handled — App Store Connect API key or Play
          service account, checksum sync, no dragging into a browser.
        </li>
        <li>
          You update screenshots every release and want to re-drop the new
          captures while the layout, fonts and translations stay put.
        </li>
        <li>
          You want a free tier with no watermark to ship a real listing before
          paying anything.
        </li>
        <li>
          You want layouts that span screenshots — a headline flowing over two
          panels, a shared background across five.
        </li>
      </ul>

      <h2>Using Rotato and {SITE_NAME} together</h2>
      <p>
        These two rarely compete for the same job, so the practical question
        is the hand-off. A pipeline that works:
      </p>
      <ol>
        <li>
          <strong>Render the hero in Rotato.</strong> Pick the scene, drop in
          your best screen, set the angle, shadows and reflection, or switch to
          clay mode if you want the device to recede.
        </li>
        <li>
          <strong>Export a still.</strong> Use Rotato&apos;s transparent PNG
          export (or a single frame of the animation) at 4K so it stays crisp
          on the largest store size.
        </li>
        <li>
          <strong>Build the set in {SITE_NAME}.</strong> Create rows for the
          sizes you ship — iPhone 6.9&quot; and 6.5&quot;, iPad 13&quot;,
          Android phone — and drop the Rotato render into the first template
          as an image shape. Add the headline, a gradient or brand background,
          and let the remaining templates use {SITE_NAME}&apos;s flat frames
          with your raw screenshots.
        </li>
        <li>
          <strong>Localize once.</strong> Add your locales, auto-translate the
          headlines on-device, paste in the rest, and use per-locale image
          overrides if the hero shows localized UI.
        </li>
        <li>
          <strong>Upload from {SITE_NAME}.</strong> Export one folder per
          locale and row and push it to App Store Connect and Google Play from
          the app.
        </li>
        <li>
          <strong>Render the App Preview in Rotato.</strong> Set a custom
          resolution in Rotato&apos;s advanced render options to match
          Apple&apos;s preview size, export H.264, and upload the video in
          App Store Connect by hand — {SITE_NAME} does not handle video.
        </li>
      </ol>
      <p>
        The reverse hand-off also works for social posts: export a {SITE_NAME}{" "}
        screenshot, drop it onto a Rotato device and animate it for a
        ten-second clip.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Isn&apos;t Rotato a subscription now?&quot;</h3>
      <p>
        No. The Mac app is still a one-time payment per tier, and its pricing
        page says so in plain words: &quot;No monthly fees. No yearly
        fees.&quot; What expires is the update window — 6 months on Basic, 12
        on the other tiers — after which you keep the version you bought and
        can optionally pay a one-time renewal for another year of devices and
        features. The web beta is the exception: it uses an account login
        rather than a license code, a Mac license does not transfer to it, and
        its pricing is not on the pricing page.
      </p>

      <h3>&quot;Doesn&apos;t Rotato already make App Store screenshots?&quot;</h3>
      <p>
        It does, and for a simple listing it is enough. Its{" "}
        <a
          href="https://rotato.app/help/automate-app-store-screenshots"
          target="_blank"
          rel="noopener noreferrer"
        >
          help pages
        </a>{" "}
        describe dragging in all your screenshots, ticking &quot;Use file name
        as label&quot; and choosing &quot;Snapshot all iPhone sizes&quot; to
        render every iPhone size at once, at the predefined resolutions
        Apple requires. Where it stops is the set: one label per scene (and
        some scenes, such as laptops and multi-device, have no labels at all),
        no locale dimension, no iPad or Mac store sizes described, and no
        upload. If you need ten consistent panels in five languages, that is
        where {SITE_NAME} starts.
      </p>

      <h3>&quot;Can {SITE_NAME} do the 3D angle?&quot;</h3>
      <p>
        Only a little. It ships two 3D USDZ iPhone frames you can tilt, which
        covers a slight perspective on the first panel. There is no camera
        lens, no lighting, no clay mode, no custom model import and no
        timeline. If the brand look depends on a dramatic angle or a spinning
        device, render it in Rotato and bring the PNG over.
      </p>

      <h3>&quot;Is the free trial of either app enough to ship?&quot;</h3>
      <p>
        Rotato&apos;s trial has no time limit but watermarks exports, so it is
        for evaluating, not shipping. {SITE_NAME}&apos;s free tier exports
        without a watermark and includes the store uploads, limited to one
        project of three rows with five templates each — enough for a real
        first listing on iPhone, iPad and Android phone, just not for a
        ten-panel set across every size.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Rotato or {SITE_NAME}&quot; is mostly the wrong question; the
        two solve different halves of the same launch. Rotato is the better
        buy for anyone whose output is a render or a video, and nothing on
        this site changes that — a one-time purchase, fast offline renders and
        a Figma plugin are real advantages. {SITE_NAME} is the better buy for
        anyone whose output is a store listing in several sizes and languages
        that has to reach App Store Connect and Google Play every release.
      </p>
      <p>
        Do not buy {SITE_NAME} if you need an App Preview or product video, a
        Windows or web tool, Apple TV or Vision Pro frames, or a photoreal 3D
        hero as the main deliverable — Rotato does those and {SITE_NAME} does
        not. Do not buy Rotato for localization, store upload or a consistent
        ten-panel layout. If your launch needs both, the pipeline above costs
        one image export and no lock-in either way.
      </p>
    </ComparisonShell>
  );
}
