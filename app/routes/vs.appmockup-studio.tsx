import type { Route } from "./+types/vs.appmockup-studio";
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

const SLUG = "appmockup-studio";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildComparisonMeta(SLUG, matches);

const ROWS: ComparisonRow[] = [
  {
    factor: "Platform & install",
    them: "Browser app (studio.app-mockup.com); nothing to install, any OS with a modern browser",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "None — \"No account required\" on its homepage",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Free editor funded by Buy Me a Coffee and PayPal donations; optional ready-made templates sold in its Buy Me a Coffee store (no pricing page on its own site)",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "The whole editor is free; its help center caps a project at 10 Main Screenshots; store templates are the only paid items",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "Not stated on its site; nothing on its pages or in the studio mentions one",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "Clay or real frames with tint, resize and rotate: iPhone 4s through iPhone 16 Pro Max, iPad (Pro 11\"/12.9\", Air, Mini), Pixel up to 4 XL, Galaxy up to S21 Ultra, two Android tablets; no iPhone 17, Mac or Apple Watch frames at our check",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "Each device you add renders at its native screen size (1320×2868 for iPhone 16 Pro Max, 2048×2732 for iPad Pro 12.9\"); Instance Screenshots inherit the master design per device",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "Up to 10 Main Screenshots (masters) × Device Components (rows) → one Instance Screenshot per device; panoramic backgrounds span screenshots and re-flow when you add or remove one",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "Free templates in the studio for every app type, plus ready-made templates sold in its Buy Me a Coffee store (no count published on its own site)",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "Any language or script, including right-to-left, per its FAQ; no per-locale variants — a second language is a second project or a duplicated set",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "None — download the files and upload them in App Store Connect",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "None — download the files and upload them in Play Console",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "PNG or JPG per Instance Screenshot (right-click) or everything at once from the Export tab; App Store / Google Play preview before export",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "Not offered — 2D clay and real frames; nothing about 3D or video on its site",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "Not stated on its site",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Runs in the browser; the project lives in browser memory until you save a .mockup file to your computer; refreshing clears unsaved work; Google Analytics and OneSignal listed in its privacy policy",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "No accounts or sharing features; pass the .mockup file around",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "A free, no-signup set of framed iPhone, iPad or Android screenshots made in one sitting",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is AppMockUp Studio free?",
    answer:
      "Yes. The editor is free with no account, and its site says so on every page we checked; its January 2025 relaunch post says it is sustained by Buy Me a Coffee and PayPal donations, alongside a store of ready-made templates. Those templates add designs, not features — every device frame, background tool and export option is available without paying. There is no pricing page on its own site; template prices appear in its Buy Me a Coffee store.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "The free tier has no expiry and no signup: one project, three rows, five templates per row, every device frame, shape and locale, watermark-free exports, and App Store Connect and Google Play upload included. Pro removes the project, row and template limits and is sold as a lifetime purchase or a subscription, with the price shown in the app. Nothing else is gated.",
  },
  {
    question: "Can Screenshot Bro open AppMockUp Studio projects?",
    answer:
      "No. Screenshot Bro cannot read .mockup files, and AppMockUp Studio cannot read Screenshot Bro's JSON projects. Bring the raw screenshots, your headline copy, any font files and your brand colours; the layout itself is rebuilt, which for a typical six-screenshot set takes well under an hour before localization.",
  },
  {
    question: "Can AppMockUp Studio make screenshots in several languages?",
    answer:
      "It can render any language or script, including right-to-left text, so a single-language set in German or Arabic works fine. What it does not have is a per-locale dimension: its Instance Screenshots vary by device, not by language, so each extra language means duplicating the set or keeping a separate project. Screenshot Bro keeps the locales inside one project with per-locale overrides and exports a folder per locale.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/appmockup-alternative",
    label: "AppMockUp Alternative With Projects and Locales",
    description:
      "the long-form case for switching, written for people already searching for an alternative.",
  },
  {
    href: "/blog/best-free-app-store-screenshot-generators",
    label: "Best Free App Store Screenshot Generators (2026)",
    description: "where AppMockUp Studio sits among the free options.",
  },
  {
    href: "/blog/screenshot-bro-alternatives",
    label: "Screenshot Bro Alternatives: When to Use Another Tool",
    description:
      "the cases where our own app is the wrong choice, from its maker.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function AppMockUpStudioComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          AppMockUp Studio is the right pick for a free, one-off set — it runs
          in the browser, needs no account, and exports PNG or JPG at native
          device sizes. {SITE_NAME} is a native Mac, iPad and iPhone app that
          starts to pay off when the same listing comes back: a second
          release, a second language or a second device size, because the
          project, its locales and the store upload live in one file. Both are
          free to start; neither imports the other&apos;s projects.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Shipping the same listing again in another size or language? Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>AppMockUp Studio</h3>
      <p>
        <a
          href="https://app-mockup.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AppMockUp Studio
        </a>{" "}
        is a browser-based screenshot editor for the App Store and Google Play.
        It is free, and its homepage repeats &quot;No account required&quot;
        under every call to action; the same page counts &quot;7+ million
        screenshots generated&quot; and &quot;400+ reviews&quot;. The company
        behind it is a two-person team. The editor has no paid tier: its
        January 2025 relaunch post says AppMockUp &quot;has been sustained
        through the generous individual contributions via Buy me a coffee and
        PayPal donations&quot; and announces a template store on Buy Me a
        Coffee selling ready-made screenshot templates. Those templates add
        designs; they do not unlock features. There is no pricing page, so
        template prices are only visible in that store.
      </p>
      <p>
        The editing model is closer to a design tool&apos;s components than
        to a slideshow. A project holds up to 10 <em>Main Screenshots</em>,
        which are master templates. Each <em>Device Component</em> you add is
        a row, and the app generates one <em>Instance Screenshot</em> per
        master for that device, inheriting the design and overridable for
        that size. The device list in the studio today runs from the iPhone
        4s to the iPhone 16 Pro Max, plus iPad (Pro 11&quot; and 12.9&quot;,
        Air, Mini), Pixel phones up to the 4 XL, Galaxy phones up to the S21
        Ultra and two Android tablets; frames come in clay or real styles with
        tint, resize and rotate. Around them sit colour, gradient, image and
        panoramic backgrounds that re-flow when you add or remove a
        screenshot, a mesh-gradient generator, a pattern generator, icons,
        titles and subtitles with decorations, highlights, and an App Store /
        Google Play preview. Export is PNG or JPG per screenshot or all at
        once. The project lives in browser memory; you save it as a{" "}
        <code>.mockup</code> file on your computer and load it later, and a
        refresh clears anything unsaved. We found no iPhone 17, Mac or Apple
        Watch frames, and its FAQ says the tool is designed for all app types
        except games.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+, App
        Store only) built around the assumption that you will make this
        listing more than once. A project is a plain-JSON file with a public
        schema; it holds one continuous canvas of rows (device sizes) and
        templates (screenshots), 81 language presets with per-locale
        overrides and on-device auto-translation, and exports a folder per
        locale and row at exact store pixel sizes. App Store Connect and
        Google Play upload are built in and included in the free tier, which
        never expires: 1 project, 3 rows, 5 templates per row, every frame,
        shape and locale, no watermark. Pro lifts the project, row and
        template limits and nothing else.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="AppMockUp Studio" rows={ROWS} />

      <h2>What AppMockUp Studio does well</h2>
      <p>
        It is easy to underrate a free tool, so the credit here is specific.
        AppMockUp Studio is not a crippled trial of something bigger — the
        whole editor is the product, and several of its ideas are better than
        what many paid tools offer.
      </p>
      <ul>
        <li>
          <strong>Zero friction.</strong> Open the page and start. No account,
          no payment, no install, no licence to keep track of. For a single
          set that is a real advantage, not a marketing line.
        </li>
        <li>
          <strong>The master/instance model.</strong> Designing once on a
          Main Screenshot and getting a per-device Instance Screenshot that
          inherits the design but can be overridden is a genuinely good answer
          to the multi-size problem, and it is the same concept designers
          already know from Figma components.
        </li>
        <li>
          <strong>Panoramic backgrounds and generators.</strong> Backgrounds
          that span the set and re-flow when you add or remove a screenshot,
          plus mesh-gradient and pattern generators, are polish features most
          free tools skip.
        </li>
        <li>
          <strong>iOS and Android together, with a store preview.</strong>{" "}
          Named Galaxy and Pixel frames sit alongside iPhones in the same
          project, and you can preview how the set looks on the App Store and
          Google Play before exporting.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>The project is a file from the first minute.</strong> Not a
          tab&apos;s memory you must remember to save — a JSON file on disk
          with a public schema, optionally synced through iCloud to the same
          app on iPad and iPhone.
        </li>
        <li>
          <strong>Language is a first-class dimension.</strong> AppMockUp
          Studio&apos;s instances vary by device; {SITE_NAME}&apos;s locales
          vary by language inside the same project, with per-locale text,
          style, image and position overrides, on-device auto-translation
          and progress tracking across 81 presets.
        </li>
        <li>
          <strong>Export and upload are the last mile, not your job.</strong>{" "}
          Exports land as one folder per locale and row with zero-padded
          filenames, and the app uploads them to App Store Connect or Google
          Play itself, syncing only what changed.
        </li>
        <li>
          <strong>A different frame catalogue.</strong> {SITE_NAME} has the
          iPhone 17 family, iPhone Air, MacBook, iMac and Apple Watch Ultra 3
          frames and abstract Android frames that flex to any aspect ratio;
          it does not have named Galaxy models or iPhones older than the 17.
        </li>
      </ul>

      <h2>When to pick AppMockUp Studio</h2>
      <ul>
        <li>
          You are launching one app in one language and want the screenshots
          done today without installing anything — the common case, and the
          one it is built for.
        </li>
        <li>You work on Windows, Linux or ChromeOS.</li>
        <li>
          You want no account, no licence and no in-app purchase, now or
          later.
        </li>
        <li>
          You need a specific Samsung Galaxy or Pixel frame, or an older
          iPhone model, rather than an abstract Android phone.
        </li>
        <li>
          Your set is small and you are content to rebuild it by hand at the
          next major redesign.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          The same listing comes back every release: you re-drop the new
          screenshots and the layout, copy, locales and upload settings are
          already there.
        </li>
        <li>
          You ship in two or more languages and want the translations, their
          progress and their exports managed in one place.
        </li>
        <li>
          You ship several sizes <em>and</em> several languages — 6.9&quot;,
          6.5&quot; and iPad times five locales is 90 files that should come
          out as a folder tree, not as downloads.
        </li>
        <li>
          You would rather upload to App Store Connect and Google Play from
          the app than download, sort and drag files into each console.
        </li>
        <li>
          You need current frames today: iPhone 17 / 17 Pro / Air, MacBook,
          iMac or Apple Watch Ultra 3.
        </li>
        <li>
          You want the project on disk or in iCloud, and the option to edit
          it on an iPad or iPhone.
        </li>
      </ul>

      <h2>Switching from AppMockUp Studio to {SITE_NAME}</h2>
      <p>
        Neither tool imports the other&apos;s project files. {SITE_NAME}{" "}
        cannot open a <code>.mockup</code> file, and AppMockUp Studio cannot
        open {SITE_NAME}&apos;s JSON. A switch is a rebuild, but most of the
        work is not the layout.
      </p>
      <p>
        What carries over directly: the raw screenshots you dropped into
        AppMockUp Studio (keep the originals rather than the framed exports),
        your headline and subtitle copy, any font files you own, brand colours
        as hex values, and the list of devices you were targeting. What is
        rebuilt: the layout itself — frame position, background, text
        placement.
      </p>
      <p>
        A realistic estimate for a 6-template × 3-locale set: 30–45 minutes to
        lay out the first row from a starter template, a few minutes per extra
        row because screenshots batch-import by pixel size and the layout
        scales, then roughly 10–15 minutes per language to run auto-translate
        or paste existing translations and check line breaks. Budget 1.5 to 2
        hours including the one-time App Store Connect key setup, and less if
        you already have the translations.
      </p>
      <p>
        Going the other way is the same job in reverse: take the raw
        screenshots and copy into AppMockUp Studio and rebuild the masters,
        one language per project.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Isn&apos;t AppMockUp Studio limited because it&apos;s free?&quot;</h3>
      <p>
        No, and this is the misconception worth correcting. The free editor is
        the whole editor: every device frame, background tool, generator and
        export option is available without paying, exports are at native
        device resolution, and nothing on its site mentions a watermark. The
        only paid items are the ready-made templates in its Buy Me a Coffee
        store, which are designs rather than features. If a free one-off set is what you need,
        you are not settling.
      </p>

      <h3>&quot;Does AppMockUp Studio handle multiple device sizes?&quot;</h3>
      <p>
        Yes — that is exactly what its Main Screenshot / Instance Screenshot
        model is for. Add a device and every master gets an instance at that
        device&apos;s native size, inheriting the design with per-instance
        overrides. What it does not model is language: the instances vary by
        device, so each extra language means a duplicated set or a second
        project, and the exports are not grouped by locale.
      </p>

      <h3>&quot;Will my AppMockUp Studio project disappear?&quot;</h3>
      <p>
        Only if you do not save it. Its FAQ says project data lives in
        browser memory and that a refresh clears unsaved work, but you can
        save a <code>.mockup</code> file to your computer at any time and load
        it back later. Treat it like any unsaved document: save before you
        close the tab, and keep the file with your repo.
      </p>

      <h3>&quot;Is there a web version of {SITE_NAME}?&quot;</h3>
      <p>
        No. {SITE_NAME} is a native app for Mac, iPad and iPhone from the App
        Store, with no web, Windows or Linux build. If your machine is not a
        Mac or an iPad, AppMockUp Studio or another browser tool is the
        answer, not this one.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Which is better&quot; is the wrong question here, because the
        two tools optimise for different moments. For a free one-off set —
        one app, one language, screenshots needed today — use AppMockUp
        Studio. It is free, it needs no account, it exports at store sizes,
        and nothing in {SITE_NAME} would make that first set meaningfully
        better. {SITE_NAME} starts to pay off at the second release, the
        second language or the second device size: the point where a project
        file you re-open, locales inside the project and a built-in upload
        save more time than they cost to set up.
      </p>
      <p>
        Do not buy {SITE_NAME} if you work on Windows or Linux, if your app
        ships in one language and one size and rarely changes, if you need
        specific Samsung frames or older iPhone models, or if you need video
        or App Preview output — none of those is something this app does. If
        you are on a Mac and the listing keeps coming back across sizes and
        languages, the free tier is enough to find out whether the workflow
        fits before paying anything.
      </p>
    </ComparisonShell>
  );
}
