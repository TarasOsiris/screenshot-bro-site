import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data } from "react-router";
import type { Route } from "./+types/vs.figma";
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

const SLUG = "figma";

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
    them: "Browser, plus desktop apps for macOS, Windows and Windows Arm; mobile apps for iOS, iPad and Android",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "Yes — a Figma account; viewers are free and can view, comment, inspect or export",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Free Starter; Professional Full seat $16/month billed annually (Dev seat $12, Collab seat $3); Organization $55 and Enterprise $90 per Full seat a month, billed annually (when we checked)",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "Starter: unlimited drafts, but a team gets one folder and 3 files; 30-day version history; no team libraries or extra variable modes; 150 AI credits a day, up to 500 a month",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "None mentioned on its pricing or export help pages",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "None built in — Community files and UI kits made by others, or Apple's own product bezels imported by hand",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "Any frame size you type; no App Store or Google Play screenshot presets stated; each extra store size is another set of frames",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "Free-form canvas of frames, with components, variants, Auto Layout, styles and variables",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "Community templates and UI kits on every plan, including App Store screenshot files made by other users",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "Not store-aware; string variables with a mode per language (multiple modes need a paid plan — up to 10 per collection on Professional), AI “Translate to…” on a selected text layer, or community plugins",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "Not built in — export, then upload yourself",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "Not built in — export, then upload yourself",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "PNG, JPG, SVG or PDF per frame or layer, at a scale, width or height you set; bulk export of everything with export settings; slash-separated names become folders",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "Video in prototypes; Figma Motion exports animations as MP4, GIF, WebM or SVG; no 3D device rendering stated",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "REST API, community plugins and widgets (private plugins on Organization and up), and an MCP server listed with Dev Mode on Professional",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Files live in Figma's cloud; a local .fig copy can be saved",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Its core strength: multiplayer editing, comments, unlimited free viewers, shared libraries on Professional and up",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Teams with a designer who want a bespoke, art-directed set built on their own design system",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is Figma free for App Store screenshots?",
    answer:
      "It can be. The Starter plan is free, includes unlimited drafts and lets you export PNG or JPG at any size, which is enough to produce valid store screenshots. Its limits show up in team work and localization: a team gets one folder and 3 files, version history goes back 30 days, and switching copy per language with variable modes needs a paid plan. Professional was $16 per Full seat a month, billed annually, when we checked.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with limits on quantity rather than features. The free tier has no signup and no expiry, and it gives you 1 project, 3 rows and 5 templates per row with every device frame, shape and locale, watermark-free exports, and App Store Connect and Google Play upload. Pro removes the project, row and template limits; the price is shown in the app.",
  },
  {
    question: "Can Screenshot Bro import Figma files?",
    answer:
      "No — it does not open .fig files. Its canvas takes images and SVGs, so export the pieces you designed in Figma — a background, an illustration, a badge — as PNG or SVG and place them in a Screenshot Bro template; headline copy, colours and your own font files carry over by hand.",
  },
  {
    question: "How do you localize App Store screenshots in Figma?",
    answer:
      "Figma's own docs suggest string variables with one mode per language, so the same frames can switch copy; multiple modes need a paid plan (up to 10 per collection on Professional). Figma AI can also translate a selected text layer. Either way, each language still has to be exported separately, sorted into folders and uploaded to App Store Connect one locale at a time.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/screenshot-generator-vs-figma-vs-photoshop",
    label: "Screenshot Generator vs Figma vs Photoshop",
    description:
      "where a dedicated generator, Figma and Photoshop each win.",
  },
  {
    href: "/blog/design-app-store-screenshots-in-figma",
    label: "How to Design App Store Screenshots in Figma",
    description:
      "the detailed Figma workflow if you stay with it: pages, components, export presets.",
  },
  {
    href: "/blog/popular-figma-templates-app-store-screenshots-device-mockups",
    label: "Popular Figma Templates for App Store Screenshots",
    description: "Community templates and device mockup kits worth a look.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function FigmaComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          Figma is the better choice when a designer is building a bespoke,
          art-directed set on your own design system, especially with several
          people in the file — nothing purpose-built matches its control or its
          collaboration. {SITE_NAME} is for the listing as a repeatable job:
          exact App Store and Google Play sizes from one canvas, current device
          frames built in, 81 locales with on-device translation, and direct
          upload to both stores, on a free tier with no watermark. Many teams
          use both — Figma for the art, {SITE_NAME} to assemble, localize and
          ship it.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Tired of rebuilding Figma frames for every size and language? Try Screenshot Bro free — one canvas, every store size, uploaded for you."
    >
      <h2>What each tool actually does</h2>

      <h3>Figma</h3>
      <p>
        Figma is a collaborative interface design tool. It runs in the
        browser, with desktop apps for macOS, Windows and Windows Arm and
        mobile apps for iOS, iPad and Android, and files live in Figma&apos;s
        cloud. Pricing is per seat. On the day we checked, the{" "}
        <a
          href="https://www.figma.com/pricing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pricing page
        </a>{" "}
        listed a free Starter plan; Professional at $16 a month per Full seat
        billed annually, with Dev seats at $12 and Collab seats at $3;
        Organization at $55 and Enterprise at $90 per Full seat a month, both
        billed annually. Viewers are free. Starter includes unlimited drafts,
        but its{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040328273-Figma-plans-and-features"
          target="_blank"
          rel="noopener noreferrer"
        >
          plans and features
        </a>{" "}
        page limits a team to one folder and 3 files, with 30 days of version
        history; shared libraries and multiple variable modes start on
        Professional.
      </p>
      <p>
        For App Store screenshots, Figma gives you a blank canvas and
        excellent building blocks — components, variants, Auto Layout, styles
        and variables — and leaves the production system to you. Our{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          Figma screenshot guide
        </a>{" "}
        walks through it: a page per store surface, a frame per screenshot at
        the exact store pixel size, a reusable device-frame component, and a
        PNG export setting on every final frame. Device frames come from
        Community files or Apple&apos;s own product bezels. For languages,
        Figma&apos;s help center describes string variables as &quot;great for
        switching languages between different localized designs&quot;, with
        one mode per language; Professional allows up to 10 modes per
        collection and Organization 20. Figma AI can also translate a selected
        text layer, which its help center frames as a way to &quot;preview
        what your UX copy will look like in another language&quot;. Export
        covers PNG, JPG, SVG and PDF; File &gt; Export bulk-exports everything
        that has an export setting, and slash-separated layer names become
        nested folders. There is no App Store Connect or Google Play upload
        built in.
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
        removes the project, row and template limits and nothing else. It is
        a store-screenshot tool rather than a general design tool, and it is
        single-user.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="Figma" rows={ROWS} />

      <h2>What Figma does well</h2>
      <p>
        If a designer is already involved, Figma is often the right place for
        the creative half of the work, and some of what it does has no
        equivalent in {SITE_NAME}.
      </p>
      <ul>
        <li>
          <strong>Total creative control.</strong> Custom illustrations, vector
          work, any composition you can imagine. {SITE_NAME} builds layouts
          from templates, device frames, shapes, text, images and SVGs —
          flexible for store screenshots, but not an illustration tool.
        </li>
        <li>
          <strong>Collaboration.</strong> Several people editing the same file
          live, comments on the canvas, and free viewers who can inspect and
          export. {SITE_NAME} is single-user; you share a project folder or use
          iCloud.
        </li>
        <li>
          <strong>Your design system, reused.</strong> Components, styles and
          shared libraries mean the screenshots use the exact type, colour and
          UI pieces as the product and the website.
        </li>
        <li>
          <strong>A localization model, if you set it up.</strong> String
          variables with a mode per language are a real system, documented by
          Figma, and they keep a single set of frames switching copy — far
          better than duplicating artboards per language.
        </li>
        <li>
          <strong>Runs anywhere, with an ecosystem.</strong> Browser, Windows
          and Mac, a REST API and a large library of community plugins and
          templates. {SITE_NAME} runs only on Mac, iPad and iPhone.
        </li>
        <li>
          <strong>More than screenshots.</strong> The same file can hold the
          website hero, social graphics and a prototype of the next feature.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>The production system is already built.</strong> Store sizes,
          current device frames, per-locale overrides, ordered export and
          upload exist on day one. In Figma each of those is a convention you
          create and keep up — page structure, frame naming, export settings,
          a checklist per release.
        </li>
        <li>
          <strong>Sizes are rows of one design.</strong> Each extra store size
          in Figma is another set of frames to keep in step; in {SITE_NAME} it
          is another row of the same project, exported at its exact pixels.
        </li>
        <li>
          <strong>Languages scale past ten.</strong> 81 presets plus custom
          codes, with per-locale overrides for text, style, image and position
          — not a mode count tied to your plan.
        </li>
        <li>
          <strong>It ships the set.</strong> App Store Connect and Google Play
          upload are built in and included in the free tier, and later syncs
          send only what changed. Figma ends at the export folder.
        </li>
        <li>
          <strong>No account, files on disk.</strong> Plain-JSON projects with
          a public schema, fully offline, with opt-in iCloud sync. Figma files
          live in its cloud.
        </li>
      </ul>

      <h2>When to pick Figma</h2>
      <ul>
        <li>
          A designer is producing a bespoke, illustration-heavy set and needs
          full control over every pixel.
        </li>
        <li>
          Several people — designer, PM, marketer — review and edit the set,
          and live collaboration and comments matter.
        </li>
        <li>
          Your team already pays for Figma and keeps the product&apos;s design
          system there, so screenshots built from the same components cost
          nothing extra.
        </li>
        <li>
          You ship one or two languages and a single device size, and the set
          rarely changes between releases.
        </li>
        <li>
          You work on Windows or Linux. {SITE_NAME} runs only on Mac, iPad and
          iPhone.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          You are a developer without a designer, and you want a finished,
          store-sized set without building a Figma production system first.
        </li>
        <li>
          You localize into more languages than a mode count comfortably
          covers, or want per-locale tweaks to layout and images, not just
          text.
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
          You want no seat subscription for a single app: the free tier&apos;s
          3 rows × 5 templates covers a full iPhone 6.9&quot;, 6.5&quot; and
          iPad set for one project, with no watermark.
        </li>
        <li>
          You want the work offline and on your machine: no account, no
          server, and project files you can diff and back up.
        </li>
      </ul>

      <h2>Switching from Figma to {SITE_NAME}</h2>
      <p>
        Neither tool opens the other&apos;s files: {SITE_NAME} does not read
        .fig files. So a switch is a rebuild of the layouts,
        not a migration — but you do not have to throw away the design work.
      </p>
      <p>
        What carries over: the raw app screenshots, headline copy (if you used
        string variables, every language&apos;s strings are already in one
        place to paste into per-locale overrides), colours and gradient values
        from your styles, font files you own (bundle the .ttf or .otf with the
        project), and your list of target locales. Anything bespoke —
        illustrations, backgrounds, badges — can be exported from Figma as PNG
        or SVG and placed in a {SITE_NAME} template as an image or SVG shape,
        so the art stays
        Figma&apos;s and the assembly, localization and upload move over.
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
        and translations persist and only the images change.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Isn&apos;t Figma free?&quot;</h3>
      <p>
        Starter is, and for one person making one set it can be enough:
        drafts are unlimited, and nothing on its pricing or export pages
        mentions a watermark. The limits land on
        teams and on localization — one folder and 3 files in a team, 30 days
        of version history, and no extra variable modes, so switching copy per
        language the documented way needs Professional or above.
      </p>

      <h3>
        &quot;Doesn&apos;t Figma&apos;s AI translate solve localization?&quot;
      </h3>
      <p>
        It helps with the words. Figma AI translates the selected text layer
        into a language you pick, and its help center positions it as a way to
        preview how copy will look in another language. It does not create
        locale variants, export them into per-locale folders or upload them —
        that bookkeeping is still yours, and machine output still needs a
        check before it ships.
      </p>

      <h3>&quot;Can&apos;t a Figma template do what {SITE_NAME} does?&quot;</h3>
      <p>
        A good Community template gives you the layout pattern — headline,
        device, background, slide order — and is worth studying either way.
        What it does not add is the workflow around it: current frames for
        every size, language variants, ordered export and upload. Our{" "}
        <a href="/blog/popular-figma-templates-app-store-screenshots-device-mockups">
          Figma templates roundup
        </a>{" "}
        covers which ones are worth starting from.
      </p>

      <h3>&quot;Is {SITE_NAME} a Figma replacement?&quot;</h3>
      <p>
        No. It is a store-screenshot tool rather than a general design tool,
        and it is single-user, so it does not replace Figma for product
        design and is not trying to. It replaces the part of a Figma
        screenshot file that is production rather than design: the duplicated
        frames per size and language, the export naming, and the upload.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Figma or {SITE_NAME}&quot; is mostly a question of who is doing
        the work. With a designer, a design system and several reviewers,
        Figma is the natural home for the creative work, and its variables can
        carry a few languages well. For a developer shipping alone, or for any
        listing that repeats across sizes, many languages and every release,
        building and maintaining that production system in Figma is the
        expensive part — and it is exactly the part {SITE_NAME} already has.
      </p>
      <p>
        Do not move to {SITE_NAME} if you work on Windows or Linux, need
        several people editing at once, or are making one bespoke set that
        rarely changes — Figma does those better. Do pick it if your Figma
        file has turned into rows of duplicated frames per size and language,
        and the part you would rather not do every release is re-exporting,
        sorting and uploading them. Keeping Figma for the art and {SITE_NAME}{" "}
        for the listing is a perfectly good answer.
      </p>
    </ComparisonShell>
  );
}
