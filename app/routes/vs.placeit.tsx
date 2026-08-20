import type { Route } from "./+types/vs.placeit";
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

const SLUG = "placeit";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildComparisonMeta(SLUG, matches);

const ROWS: ComparisonRow[] = [
  {
    factor: "Platform & install",
    them: "Browser-based editor, nothing to install; a free companion mobile app for browsing and downloading the library; a Placeit app inside Canva",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "Yes — sign-in runs through an Envato account, and downloads are tied to it",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "One Unlimited subscription, monthly or annual; its pricing page advertises the annual plan \u201cFrom $7.47/mo\u201d (billed $89.69 up front when we checked), while its Unlimited Subscription page advertises \u201cfrom $6.35/mo\u201d; one-off single downloads also sold; one-month minimum once you have downloaded anything",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "Open and edit any template for free; watermark-free downloads need the subscription or a paid single download; a small Free Templates set (1 of the 97 App Store Screenshot templates is tagged Free)",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: (
      <>
        Subscribers download &quot;without watermarks or limits&quot; (its help
        center); free downloads carry a watermark
      </>
    ),
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "App Store Screenshot category filters: iPhone 6, iPhone 11 / 11 Pro / 11 Pro Max, iPad, Samsung Galaxy, Google Nexus; the wider iPhone mockup library reaches the iPhone 15 Pro Max",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "Fixed-size PNG templates at 72 dpi; no App Store or Google Play size presets stated; a separate Image Resizer tool",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "One template, one image: swap the screenshot, edit the text and colours inside a fixed composition; 4 of the 97 accept more than one upload",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "97 App Store Screenshot templates; the whole catalog is quoted at 29,000+ assets in its FAQ and 150K+ templates on its homepage",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: (
      <>
        None built in — retype the text per language and download again; its
        help center says it supports &quot;only alphabetic writing&quot;, so
        Arabic, Greek and Chinese captions are out
      </>
    ),
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "No — download PNGs and upload them yourself",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "No — download and upload yourself",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: (
      <>
        PNG for mockups, designs and logos; MP4 for videos; sRGB at 72 dpi; no
        editable PSD — re-edit on the site via &quot;Make More&quot;
      </>
    ),
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "Yes — 3D mockups, video mockups and app demo videos (phones, iMac, MacBook) exported as MP4",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: (
      <>
        None — its help center: &quot;we don&apos;t have a Placeit API
        available&quot;
      </>
    ),
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Online only; drafts and downloads live in your account; downloads stay accessible after you cancel",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Not stated on its site",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Solo founders and merch sellers who want logos, social posts, videos and mockups from one subscription",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is Placeit free?",
    answer:
      "You can open and edit any Placeit template without paying, but watermark-free downloads require the Unlimited subscription (monthly or annual; the annual plan was billed at $89.69 a year when we checked) or a paid single download. A small set of templates is tagged Free. There is a one-month minimum commitment once you have downloaded anything.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with count limits: the free tier gives you 1 project, 3 rows and 5 templates per row, with every device frame, shape and locale, watermark-free export, and App Store Connect and Google Play upload included. There is no signup and it does not expire. Pro removes the project, row and template limits; the price is shown in the app.",
  },
  {
    question: "Can Screenshot Bro open Placeit projects?",
    answer:
      "No. Placeit does not produce editable project files — downloads are flat PNGs, and its help center confirms there are no PSDs — so there is nothing to import. Bring the raw screenshots you uploaded, your headline copy, brand colours, your own font files and your locale list, and rebuild the layout on a starter template.",
  },
  {
    question: "Do I still need Placeit if I use Screenshot Bro?",
    answer:
      "For the store listing, no — Screenshot Bro handles sizes, frames, locales and upload on its own. For a logo, social posts, a promo video or merch mockups, yes, or another design tool: Screenshot Bro does not make any of those. Many solo founders keep a general design subscription and use Screenshot Bro only for the store.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/placeit-alternative",
    label: "Placeit Alternative for App Store Screenshots",
    description:
      "the long-form version of this page: what you give up and what you gain when you switch for the screenshot job.",
  },
  {
    href: "/blog/best-google-play-screenshot-tools",
    label: "Best Google Play Screenshot Tools (2026)",
    description:
      "tools that cover phone and tablet sizes, the feature graphic and Play upload.",
  },
  {
    href: "/blog/screenshot-bro-alternatives",
    label: "Screenshot Bro Alternatives: When to Use Another Tool",
    description: "the cases where our own app is the wrong pick.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function PlaceitComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          Placeit wins when one subscription has to cover a logo, social posts,
          a promo video and a set of phone mockups — it does all of that in the
          browser, and its pricing page advertised the annual plan from $7.47 a
          month when we checked. {SITE_NAME} is the tool for the store listing itself: exact
          App Store and Google Play sizes, 81 locales with on-device
          translation, direct upload, and a free tier that exports without a
          watermark. If screenshots are the only design job you have, Placeit
          is paying for breadth you will not use; if they are one job among
          five, its consolidation is real value.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Need one set of store screenshots at exact sizes, in every language, with no watermark and no subscription? Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>Placeit</h3>
      <p>
        Placeit is a browser-based template service owned by Envato. You pick a
        template — a mockup, a design, a logo or a video — upload your own
        image, edit the text and colours on the page, and download the result.
        There is nothing to install; its help center describes the pitch as
        making &quot;all your branding and marketing digital assets right from
        your browser&quot;. Everything is sold as one Unlimited subscription,
        billed monthly or annually. On the day we checked, the{" "}
        <a
          href="https://placeit.net/pricing"
          target="_blank"
          rel="noopener noreferrer"
        >
          pricing page
        </a>{" "}
        advertised the Unlimited subscription &quot;From $7.47/mo&quot; on the
        annual plan, billed $89.69 for the year; the monthly plan costs more
        per month, and its figure is loaded into that page rather than printed
        in the markup we could read, so check it there. Placeit quotes
        different entry prices in different places — its Unlimited Subscription
        landing page advertises &quot;from $6.35/mo&quot; — so treat any figure,
        including ours, as a starting point and read the current one on its
        pricing page. A single one-off download can
        also be bought without subscribing. There is a one-month minimum
        commitment once you have downloaded anything, the monthly plan can be
        paused, and your downloads stay accessible after you cancel. You can
        open and edit any template without paying; what the subscription buys
        is downloading, in the help center&apos;s words, &quot;without
        watermarks or limits&quot;, plus a commercial licence on every file.
      </p>
      <p>
        For app screenshots specifically, Placeit has an App Store Screenshot
        category of 97 templates. The device filters on that page are iPhone 6
        (16 templates), iPhone 11, 11 Pro and 11 Pro Max (3 each), iPad (9),
        Samsung Galaxy (9), Google Nexus (1) and generic Android (11); 77 are
        tagged Transparent, 4 accept more than one upload and 1 is tagged Free.
        The wider iPhone mockup library is much larger — around 1,800
        Apple-device templates — and the newest model we found in it was the
        iPhone 15 Pro Max, but those are marketing mockups rather than
        store-sized screenshots. Downloads are PNG at 72 dpi in sRGB (MP4 for
        video), there are no editable PSDs, and the help center is plain about
        two limits that matter here: there is no API, and text supports
        &quot;only alphabetic writing&quot;, so Arabic, Greek or Chinese
        captions are not an option.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+) that
        does one job: turn raw app screenshots into finished App Store and
        Google Play listings. Rows are store sizes — iPhone 6.9&quot;,
        6.5&quot;, iPad 13&quot;, Android phone and tablet, or a custom size
        you type in — and export lands at the row&apos;s exact pixel
        dimensions, so there is no resizing step. Frames cover the current
        line-up: the iPhone 17 family and iPhone Air, iPad Pro, MacBook Air and
        Pro, iMac, Apple Watch Ultra 3, and Android frames that flex to any
        aspect ratio. Localization is built in — 81 language presets plus
        custom codes, on-device auto-translate for the languages Apple&apos;s
        Translation framework supports, and per-locale overrides for text,
        style, image and position. Finished sets upload straight to App Store
        Connect or Google Play. The free tier (1 project, 3 rows, 5 templates
        per row, every frame and locale, upload included) has no signup, no
        expiry and no watermark; Pro removes the project, row and template
        limits and nothing else. It does not make logos, social posts or
        videos.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="Placeit" rows={ROWS} />

      <h2>What Placeit does well</h2>
      <p>
        Placeit is easy to underrate if you arrive looking only for a
        screenshot tool. Its actual product is a subscription that replaces
        four or five separate purchases for a person building a small brand
        alone, and it is good at that.
      </p>
      <ul>
        <li>
          <strong>Breadth for one fee.</strong> A logo, a YouTube intro,
          Instagram posts, a T-shirt mockup and a set of phone mockups all come
          from the same account under the same licence. For a founder who
          would otherwise buy a logo maker, a Canva plan and a screenshot tool,
          the consolidation is the feature.
        </li>
        <li>
          <strong>No learning curve.</strong> Every template is a form: upload,
          type, pick a colour, download. There is no canvas to learn, which is
          exactly right for someone who will make one set of assets and not
          come back for months.
        </li>
        <li>
          <strong>Commercial licence, including client work.</strong> The
          licence (Envato&apos;s) grants commercial use and lets you sublicense
          a finished product to a client, which matters for freelancers and
          small agencies.
        </li>
        <li>
          <strong>Video and 3D.</strong> App demo videos of a phone, iMac or
          MacBook, 3D mockups and animated logos export as MP4. {SITE_NAME} has
          two 3D iPhone frames and no video export at all.
        </li>
        <li>
          <strong>Low-risk billing.</strong> A one-month minimum that is waived
          if you have not downloaded anything, a pause option on the monthly
          plan, and downloads that remain available after you cancel.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>It outputs the store asset, not a mockup of it.</strong> A
          row is a store size, export is exactly that many pixels, and App
          Store Connect accepts the file as-is. Placeit gives you a 72-dpi PNG
          in the template&apos;s own dimensions and leaves the sizing to you.
        </li>
        <li>
          <strong>Layout is a canvas, not a form.</strong> Rows, templates and
          shapes that span across screenshots (a headline flowing over two
          panels) let you design a set rather than six unrelated images.
          Placeit&apos;s App Store templates are single compositions; only 4 of
          97 take more than one upload.
        </li>
        <li>
          <strong>Languages are a first-class axis.</strong> 81 presets,
          on-device translation, per-locale overrides and progress tracking, in
          any script the fonts you bundle can render — where Placeit&apos;s
          help center says alphabetic writing only.
        </li>
        <li>
          <strong>It ships the set.</strong> App Store Connect and Google Play
          upload are built in and included in the free tier; Placeit ends at
          the Download button.
        </li>
        <li>
          <strong>Files are yours, offline.</strong> Plain-JSON projects on
          disk with a public schema, nothing running on a server. Placeit&apos;s
          drafts live in your account.
        </li>
      </ul>

      <h2>When to pick Placeit</h2>
      <ul>
        <li>
          You need a logo, social templates and a short promo video as well as
          screenshots, and one subscription covering all of it beats paying for
          three tools.
        </li>
        <li>
          You sell merch or run a print-on-demand shop and the app is a side
          project — Placeit&apos;s catalogue is built around exactly that.
        </li>
        <li>
          You want a marketing mockup of your app for a landing page, a tweet
          or a pitch deck, where store sizes do not apply.
        </li>
        <li>
          You want an app demo video or an animated logo and do not want to
          learn a motion tool.
        </li>
        <li>
          You work on Windows, Linux or a Chromebook. {SITE_NAME} runs only on
          Mac, iPad and iPhone.
        </li>
        <li>
          You already live in Canva and want Placeit&apos;s mockups inside it.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          The deliverable is the App Store or Google Play listing and you want
          every required size produced at exact pixels in one export.
        </li>
        <li>
          You localize — two languages or thirty — and especially into any
          non-Latin script.
        </li>
        <li>
          You need current frames: iPhone 17 / 17 Pro / iPhone Air, iPad Pro
          13&quot;, Apple Watch Ultra 3.
        </li>
        <li>
          You update screenshots every release and want to re-drop images while
          layouts and translations stay, then sync only what changed to App
          Store Connect.
        </li>
        <li>
          You want no recurring fee for a single app: the free tier&apos;s 3
          rows × 5 templates covers a full iPhone 6.9&quot;, 6.5&quot; and iPad
          set for one project, with no watermark.
        </li>
        <li>
          You want the work to stay on your machine: no account, no server, and
          project files you can diff and back up.
        </li>
      </ul>

      <h2>Switching from Placeit to {SITE_NAME}</h2>
      <p>
        Neither tool opens the other&apos;s files, and in Placeit&apos;s case
        there is not much of a file to open: downloads are flat PNGs, and its
        help center confirms there are no editable PSDs — re-editing happens on
        the site. So a switch is a rebuild, not a migration.
      </p>
      <p>
        What carries over: the raw screenshots you uploaded to Placeit (keep
        the originals, not the mockup output), your headline copy, brand
        colours and gradient values, any font files you own (Placeit&apos;s
        template fonts are licensed to Placeit, not to you, so pick or buy your
        own .ttf/.otf to bundle in the project), and your list of target
        locales.
      </p>
      <p>
        What is rebuilt: the layouts. A realistic estimate for a 6-template,
        3-locale set: pick a starter template and set the frame, background and
        type styles for the first row (20–30 minutes); drop six screenshots and
        write six headlines (20 minutes); add two locales — auto-translate
        where Apple&apos;s framework supports the language, paste your own
        strings where it does not — and check the longest one for overflow
        (30–45 minutes). Call it about an hour and a half the first time, and
        well under half that for each later app or release, because the layout
        and translations persist and only the images change. Going the other
        way is simpler but lossier: export PNGs from {SITE_NAME} and upload
        them into a Placeit mockup as the screen image — you keep the picture,
        not the editable layers.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Isn&apos;t Placeit just watermarked stock images?&quot;</h3>
      <p>
        No, and this one is in Placeit&apos;s favour. The watermark applies to
        free downloads; a subscriber&apos;s files are clean, high-resolution
        and carry a commercial licence. And it is an editor, not a stock site:
        text, colours and the uploaded image are all editable inside the
        template, and you can reopen past downloads with Make More. The honest
        criticism is narrower — the templates are fixed compositions, and the
        screenshot ones are dated — not that the output is unusable.
      </p>

      <h3>&quot;Can I make App Store-ready screenshots in Placeit?&quot;</h3>
      <p>
        You can make attractive images of your app in Placeit. Whether they are
        store-ready comes down to pixel dimensions, which its pages do not
        state for these templates; App Store Connect rejects anything that is
        not an exact accepted size, and Placeit&apos;s help center says all
        images download at 72 dpi with a resize option. The dpi figure does not
        matter to the store — pixels do — so check the downloaded file&apos;s
        dimensions before uploading and expect to resize or recrop. Note also
        that the device filters in that category stop at the iPhone 11 family.
      </p>

      <h3>
        &quot;Does the subscription really cover everything, including the
        screenshots?&quot;
      </h3>
      <p>
        Yes. The Unlimited plan covers mockups, designs, logos and videos alike
        — there is no separate tier for app screenshots, which is the whole
        appeal. Two details to know: the annual plan is billed up front ($89.69
        a year when we checked), and once you have downloaded anything you are
        committed to at least one month.
      </p>

      <h3>
        &quot;Is {SITE_NAME}&apos;s free tier watermarked, like
        Placeit&apos;s?&quot;
      </h3>
      <p>
        No. Every export, free tier included, is clean, and App Store Connect
        and Google Play upload are included free as well. The free tier is
        limited by count — 1 project, 3 rows, 5 templates per row — not by
        quality or by a stamp on the image.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Placeit or {SITE_NAME}&quot; is mostly the wrong question,
        because the two are priced for different shapes of need. Placeit sells
        breadth: for one subscription a solo founder gets a logo, social
        assets, videos, merch mockups and a passable set of phone screenshots,
        and if that list describes you, buying a specialist screenshot tool on
        top is the expensive option. {SITE_NAME} sells depth on exactly one
        task — store listings at exact sizes, in many languages, uploaded from
        the same window — and charges nothing until you outgrow one project.
      </p>
      <p>
        Do not buy {SITE_NAME} if you need a logo maker, social templates or
        video, if you work on Windows or Linux, if you want a team account, or
        if your screenshots are marketing mockups for a website rather than
        uploads for a store — Placeit (or Canva) covers those and {SITE_NAME}
        never will. Do pick it if the thing you are actually blocked on is a
        localized, correctly sized, watermark-free set in App Store Connect or
        the Play Console today; and keep Placeit for everything else a
        one-person company needs.
      </p>
    </ComparisonShell>
  );
}
