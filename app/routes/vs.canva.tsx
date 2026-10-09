import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data } from "react-router";
import type { Route } from "./+types/vs.canva";
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

const SLUG = "canva";

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
    them: "Browser, plus desktop apps for Mac and Windows and apps for iOS, Android and Chromebook; Canva Offline is included on the Free plan",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "Yes — a Canva account; Pro is for one person only, and inviting team members needs Business",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Free; Pro US$144 a year for one person; Business US$250 a year per person; Enterprise by quote (yearly prices before tax on its pricing page when we checked; monthly billing costs more)",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "1.6M+ templates and 4.7M+ stock items, custom dimensions, PNG/JPG/PDF download, 5GB storage, 1 Brand Kit (3 colours), up to 20 AI uses; no Magic Resize, design in bulk, transparent downloads or mockup templates",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "Not stated on its pricing page; premium templates and stock (3.6M+ templates, 141M+ items) are what Pro unlocks",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "Mockups tool and device graphics from the stock library, placed by hand; the Free plan excludes mockup templates; no current-model list stated",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "Any custom pixel size on every plan; Magic Resize (paid plans) copies a design into up to 5 new sizes, up to 50 designs at once; no App Store or Google Play screenshot presets stated",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "A multi-page design, one page per screenshot; pages of different formats can share one design",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "1.6M+ on Free, 3.6M+ on Pro, across every design type; no count for App Store screenshots stated",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "Translate (Pro; one free try): 100+ languages, one language at a time, 2,000-character limit; duplicates the page by default, can shrink text to fit and mirror for right-to-left",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "No — download files and upload them yourself",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "No — download files and upload them yourself",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "PNG, JPG and PDF on every plan (PPTX for presentations); SVG, transparent backgrounds and quality or scale options are paid-plan features per its help center",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "Video editing on every plan, 3D elements in the stock library, AI image-to-video",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "Apps Marketplace and Apps SDK on every plan; design in bulk on Pro; no store upload stated",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Designs live in your Canva account (5GB Free, 100GB Pro); Canva Offline on every plan",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Real-time collaboration on every plan; inviting team members, brand controls and design approvals are not on Free or Pro — Business adds team tools and approvals",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Founders and marketers who make many kinds of graphics and already do that work in Canva",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is Canva free for App Store screenshots?",
    answer:
      "Mostly, yes. The Free plan lets you set a custom pixel size, design a page per screenshot and download PNG or JPG, which is all App Store Connect needs. What Free leaves out is the part that saves time on a set: Magic Resize, Translate (one free try), design in bulk, transparent downloads and mockup templates. Pro was US$144 a year for one person when we checked.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with limits on quantity rather than features. The free tier has no signup and no expiry, and it gives you 1 project, 3 rows and 5 templates per row with every device frame, shape and locale, watermark-free exports, and App Store Connect and Google Play upload. Pro removes the project, row and template limits; the price is shown in the app.",
  },
  {
    question: "Can Canva translate App Store screenshots?",
    answer:
      "On Pro, yes: Translate covers 100+ languages, one language at a time, within a 2,000-character limit, and by default it duplicates the page so the original stays intact. Free users get one try. Each translated page is then another page to keep in step with the original when the design changes, and every language still has to be downloaded and uploaded by hand.",
  },
  {
    question: "Can Screenshot Bro open Canva designs?",
    answer:
      "No — it does not open Canva designs. What carries over is your raw app screenshots, headline copy, colours and your own font files; a background or illustration downloaded from Canva as PNG (or SVG on a paid plan) can also be placed in a Screenshot Bro template, whose canvas takes images and SVGs.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/canva-app-store-screenshots",
    label: "How to Make App Store Screenshots in Canva",
    description:
      "the step-by-step Canva workflow, and the point where it stops paying off.",
  },
  {
    href: "/blog/screenshot-generator-vs-figma-vs-photoshop",
    label: "Screenshot Generator vs Figma vs Photoshop",
    description: "when a general design tool is the right call.",
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

export default function CanvaComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          Canva is the better choice when screenshots are one job among many —
          social posts, a pitch deck, a launch video — and you want them all in
          the editor you already use; for one device size in one language, its
          Free plan does the whole job. {SITE_NAME} is built for the listing
          itself: exact App Store and Google Play sizes from one canvas, 81
          locales with on-device translation, and direct upload to both stores,
          on a free tier with no watermark. Canva&apos;s paid Magic Resize and
          Translate narrow the gap, but each size and language still becomes
          another design to keep in sync and download by hand.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Outgrown copying Canva designs per size and language? Try Screenshot Bro free — one canvas, every store size, uploaded for you."
    >
      <h2>What each tool actually does</h2>

      <h3>Canva</h3>
      <p>
        Canva is a general-purpose design editor for almost anything visual:
        social posts, presentations, video, print, websites, docs and
        whiteboards. It runs in the browser, with desktop apps for Mac and
        Windows and apps for iOS, Android and Chromebook, and its
        pricing page lists Canva Offline on every plan. On the day we checked,
        the{" "}
        <a
          href="https://www.canva.com/pricing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pricing page
        </a>{" "}
        listed four tiers: Free; Pro at US$144 a year for one person; Business
        at US$250 a year per person, for teams; and Enterprise by quote. Those
        are yearly prices before tax — the monthly option costs more — and the
        older Teams plan is closed to new sign-ups. Free includes 1.6M+
        templates, 4.7M+ photos and graphics, 5GB of storage, one Brand Kit
        limited to three colours and up to 20 AI uses; Pro raises that to
        3.6M+ templates, 141M+ stock items, 100GB and five Brand Kits, and adds
        the AI tools its pricing page groups as &quot;resize, translate, remove
        background, and more&quot;.
      </p>
      <p>
        For App Store screenshots specifically, the Canva workflow is the one
        in our{" "}
        <a href="/blog/canva-app-store-screenshots">Canva screenshot guide</a>:
        create a design at the exact pixel size Apple asks for, place your
        screenshot in a device mockup, add a headline and background, add a
        page per screenshot, and download PNGs. Custom dimensions and PNG/JPG
        download are free. Two paid features matter for a full listing. Magic
        Resize copies a design into other sizes — up to 5 new sizes per design
        and 50 designs at once, according to its help center — and is
        available on Pro, Business, Enterprise, Education and Nonprofit plans.
        Translate converts a page into one of 100+ languages, one language at
        a time within a 2,000-character limit; by default it duplicates the
        page, shrinks text that no longer fits and can mirror the layout for
        right-to-left scripts. Free accounts can try Translate once. Nothing in
        Canva knows about App Store Connect or Google Play: there are no store
        screenshot presets that we could find stated, no locale folders, and
        no upload.
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
        line-up, from the iPhone 18 Pro and iPhone 17 families to iPad Pro,
        MacBook, iMac and Apple Watch Ultra 3, plus Android frames. Localization
        is built in — 81 language presets plus custom codes, on-device
        auto-translate for the languages Apple&apos;s Translation framework
        supports, and per-locale overrides for text, style, image and position.
        Finished sets upload straight to App Store Connect or Google Play. The
        free tier (1 project, 3 rows, 5 templates per row, every frame and
        locale, upload included) has no signup, no expiry and no watermark; Pro
        removes the project, row and template limits and nothing else. It does
        not make social posts, presentations or video.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="Canva" rows={ROWS} />

      <h2>What Canva does well</h2>
      <p>
        It is easy to dismiss Canva as &quot;not a screenshot tool&quot;, and
        for a listing in ten languages that is fair. But for a lot of first
        launches it is the right tool, and it is good at things {SITE_NAME}{" "}
        does not attempt.
      </p>
      <ul>
        <li>
          <strong>You probably already know it.</strong> The editor is familiar
          to non-designers, and there is no new app to learn for one set of
          images.
        </li>
        <li>
          <strong>Breadth.</strong> The same account makes the launch tweet,
          the landing-page hero, the pitch deck and a promo video, from a
          library of millions of templates and stock items. {SITE_NAME} makes
          store screenshots and nothing else.
        </li>
        <li>
          <strong>A Free plan that genuinely works for one size.</strong>{" "}
          Custom pixel dimensions and PNG download are free, which is enough
          for a single-language, single-device listing.
        </li>
        <li>
          <strong>Machine translation breadth.</strong> Translate covers 100+
          languages, can shrink overflowing text and can mirror layouts for
          right-to-left scripts. {SITE_NAME}&apos;s on-device translation
          covers the narrower set Apple&apos;s Translation framework supports;
          the other presets are filled by typing or pasting.
        </li>
        <li>
          <strong>Runs everywhere, with real-time collaboration.</strong>{" "}
          Browser, Windows, Mac, mobile and Chromebook, with live co-editing on
          every plan. {SITE_NAME} is single-user and Apple-only.
        </li>
        <li>
          <strong>Brand consistency across everything.</strong> Brand Kits keep
          colours and fonts aligned between your screenshots and the rest of
          your marketing.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>Sizes are rows, not copies.</strong> In Canva a second device
          size is a resized copy of the design, and later edits have to be
          repeated in each copy. In {SITE_NAME} each size is a row in the same
          project, and export produces every row at its exact store pixels.
        </li>
        <li>
          <strong>Languages are a first-class axis.</strong> A locale is a
          setting on the same layout, with per-locale overrides where a
          translation needs a different line break, font size or image —
          rather than a duplicated page per language that drifts from the
          original.
        </li>
        <li>
          <strong>It ships the set.</strong> App Store Connect and Google Play
          upload are built in and included in the free tier, and later syncs
          send only what changed. Canva ends at the Download button, and the
          files are sorted into locales by hand.
        </li>
        <li>
          <strong>Frames are current and built in.</strong> Every device frame
          is available on the free tier and sized to the row; in Canva you
          place a mockup per page, and mockup templates are a paid-plan
          feature.
        </li>
        <li>
          <strong>No account, files on disk.</strong> Plain-JSON projects with
          a public schema, fully offline, with opt-in iCloud sync. Canva
          designs live in your Canva account.
        </li>
      </ul>

      <h2>When to pick Canva</h2>
      <ul>
        <li>
          You ship one language and one device size, and you already have
          Canva open for everything else.
        </li>
        <li>
          Screenshots are one of many assets you make — social posts, a deck,
          a promo video — and one tool for all of them matters more than speed
          on any single one.
        </li>
        <li>
          You need machine translation into languages Apple&apos;s on-device
          Translation framework does not cover, and you are happy to manage a
          page per language.
        </li>
        <li>
          Several people edit the same designs at once, or you work on Windows,
          Linux or a Chromebook. {SITE_NAME} runs only on Mac, iPad and iPhone.
        </li>
        <li>
          You already pay for Pro or Business, so Magic Resize and Translate
          cost you nothing extra.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          The deliverable is the App Store or Google Play listing, and you want
          every required size produced at exact pixels in one export.
        </li>
        <li>
          You localize — two languages or thirty — and want one layout with
          per-locale overrides rather than a copy per language.
        </li>
        <li>
          You update screenshots every release and want to re-drop images while
          layouts and translations stay, then sync only what changed to App
          Store Connect.
        </li>
        <li>
          You publish to both stores and want Google Play upload in the same
          window.
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

      <h2>Switching from Canva to {SITE_NAME}</h2>
      <p>
        Neither tool opens the other&apos;s files: {SITE_NAME} does not read
        Canva designs. So a switch is a rebuild of the
        layouts, not a migration — but most of what took time in Canva carries
        over.
      </p>
      <p>
        What carries over: the raw app screenshots you placed in Canva (keep
        the originals, not the downloaded composites), your headline copy and
        any translations you already have, brand colours and gradient values
        from your Brand Kit, and your list of target locales. Fonts carry over
        only as files you own: {SITE_NAME} bundles .ttf or .otf files with the
        project, so pick or supply your own if the Canva design used a font
        from its library. A background, illustration or badge made in Canva
        can be downloaded as PNG (or SVG on a paid plan) and placed in a{" "}
        {SITE_NAME} template as an image or SVG shape.
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
        and translations persist and only the images change. Many people keep
        Canva for everything around the listing and use {SITE_NAME} only for
        the store.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Doesn&apos;t Magic Resize solve the multiple-sizes problem?&quot;</h3>
      <p>
        It solves the first pass. Magic Resize turns one design into up to five
        new sizes in one action, which is genuinely quicker than rebuilding
        each by hand. What it produces, though, are copies: change a headline
        or swap a screenshot next release and the change has to be made in
        each size. It is also a paid-plan feature. In {SITE_NAME} the sizes
        are rows of one project, so the edit is made once.
      </p>

      <h3>&quot;Is Canva&apos;s Translate enough for store localization?&quot;</h3>
      <p>
        For the translating itself it is strong — 100+ languages, more than
        Apple&apos;s on-device framework covers. The work it leaves is the
        bookkeeping: one language per run, pages duplicated per language, and
        a downloads folder to split into locales and upload one language at a
        time in App Store Connect. If you localize into two or three
        languages, that is manageable; at ten it becomes most of the job.
      </p>

      <h3>&quot;Can I make App Store-ready screenshots on Canva&apos;s Free plan?&quot;</h3>
      <p>
        Yes. Create a design at the exact pixel size of the device class
        you are uploading, and download PNG or JPEG. App Store Connect cares
        about the file&apos;s dimensions and format, not which tool made it.
        What Free lacks is speed across sizes and languages, not the ability
        to produce an acceptable file.
      </p>

      <h3>
        &quot;Is {SITE_NAME}&apos;s free tier limited the way Canva Free
        is?&quot;
      </h3>
      <p>
        It is limited differently. Canva Free limits features — resizing,
        translation, mockup templates, premium content — but not how many
        designs you make. {SITE_NAME}&apos;s free tier includes every feature,
        frame and locale, plus store upload and watermark-free export, and
        limits quantity instead: 1 project, 3 rows, 5 templates per row.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Canva or {SITE_NAME}&quot; usually comes down to how repetitive
        your listing is. Canva is a broad design tool that can make good App
        Store screenshots, and for one size in one language its Free plan is
        hard to beat — especially if you already use it for everything else.
        {" "}{SITE_NAME} is narrow on purpose: it treats sizes, languages and
        upload as the core of the job, so the second size, the tenth language
        and the next release cost almost nothing.
      </p>
      <p>
        Do not switch to {SITE_NAME} if you work on Windows or Linux, need
        several people editing at once, want one tool for social, video and
        print, or ship a single-language, single-size listing you rarely
        change — Canva covers those well. Do pick it if you are maintaining
        resized and translated copies of the same Canva design every release,
        and the part you would rather not do is sorting downloads into locale
        folders and uploading them by hand.
      </p>
    </ComparisonShell>
  );
}
