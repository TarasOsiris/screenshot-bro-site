import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";
import type { Route } from "./+types/vs.applaunchpad";
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

const SLUG = "applaunchpad";

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
    them: "Browser-based; its site lists Windows, macOS, Linux and Chromebook. Nothing to install",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "Yes — name, email and password, or a Google account",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Free plan; Pro subscription at $29/month or $180/year (help center, February 2026); a 30%-off monthly promo code is advertised on the home page",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "10 templates and 100+ graphics; the rest of the 1000+ library needs Pro, which is itself capped at 100 projects per user",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "Its own blog says free-plan exports are watermark-free; the help center does not address it",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "iPhone 17 line, Android phones (Samsung Galaxy S25/S26 named), iPads and tablets, browser, iMac and Watch; 2D, 3D and hand-held variants; brand-coloured “Custom” devices",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "Auto-formats to App Store and Google Play dimensions; “Clone” copies a finished design to another device size and auto-scales it",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "One design per device size, edited screenshot by screenshot; a clone for another size is a separate saved design",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "1000+ pre-built templates (10 on the free plan), 2K+ icons and SVGs, a background image library",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "Pick a language, click Translate, and every screenshot is rewritten; its blog cites 80+ languages, the help center states no count or plan tier",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "None mentioned on its site or help center — you download a ZIP and upload it yourself",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "None mentioned — download the ZIP and upload it through the Play Console",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "JPEG or PNG in a ZIP, “in the correct resolution” for both stores; no social or continuous modes mentioned",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "3D and hand-held 3D device frames (added during 2025); no video or App Preview output mentioned",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "Not stated on its site",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Cloud-hosted; designs live under “My saved designs” in your account. No offline mode or project-file download mentioned",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Not stated on its site; Pro is priced and capped per user",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Anyone on any OS who wants to start from a finished template and ship a listing in an afternoon",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is AppLaunchpad free?",
    answer:
      "There is a free plan. Its help center says it includes 10 professionally designed templates and 100+ graphics, and AppLaunchpad's own blog says free exports carry no watermark. The rest of the 1000+ template library needs the Pro plan, listed at $29 per month or $180 per year with a limit of 100 projects per user.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with no signup and no expiry. The free tier is capped at 1 project, 3 rows and 5 templates per row, but every device frame, shape and locale is included, exports are watermark-free, and direct upload to App Store Connect and Google Play is included. Pro removes the project, row and template caps and gates nothing else; the price is shown in the app.",
  },
  {
    question: "Can Screenshot Bro open AppLaunchpad projects?",
    answer:
      "No. AppLaunchpad designs live in its cloud account and there is no project-file format either tool can exchange. Bring your raw screenshots, your headline copy per language, your font files and your brand colours; the layouts are rebuilt on Screenshot Bro's canvas, which for a typical six-screenshot set takes an afternoon.",
  },
  {
    question: "Which has more templates, AppLaunchpad or Screenshot Bro?",
    answer:
      "AppLaunchpad, by a wide margin: it advertises 1000+ pre-built templates plus 2K+ icons and SVGs, against 50+ starters in Screenshot Bro. Screenshot Bro's starters are a first draft for its multi-row canvas rather than a catalogue to browse; if picking a finished look from a large library is how you work, AppLaunchpad is the better fit.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/applaunchpad-alternative",
    label: "AppLaunchpad Alternative: A Native App Store Screenshot App",
    description:
      "the long-form version of this page, written for people already on AppLaunchpad.",
  },
  {
    href: "/blog/best-google-play-screenshot-tools",
    label: "Best Google Play Screenshot Tools (2026)",
    description:
      "the roundup where AppLaunchpad is our pick for the biggest template library.",
  },
  {
    href: "/blog/screenshot-bro-alternatives",
    label: "Screenshot Bro Alternatives: When to Use Another Tool",
    description:
      "the cases where Screenshot Bro is the wrong choice, from its own maker.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function AppLaunchpadComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          AppLaunchpad is the pick when you want the largest template library
          in a browser that runs on any operating system — 1000+ templates, 10
          of them free, and a Pro plan at $29/month or $180/year. {SITE_NAME}{" "}
          is a native Mac, iPad and iPhone app whose free tier already includes
          direct upload to App Store Connect and Google Play, 81 language
          presets with on-device translation and one continuous multi-row
          canvas; Pro only lifts the project, row and template caps.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Need to ship the same six screenshots in three languages to both stores, without a subscription and without leaving your Mac? Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>AppLaunchpad</h3>
      <p>
        <a
          href="https://theapplaunchpad.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AppLaunchpad
        </a>{" "}
        is a browser-based App Store and Google Play screenshot generator. You
        create an account with an email address or a Google login, pick a
        device, pick one of its templates, swap in your screenshots and text,
        and download the result. Its own site lists Windows, macOS, Linux and
        Chromebook; there is nothing to install. The free plan, according to
        its help center (last updated February 2026), includes 100+ graphics
        and 10 professionally designed templates; its blog adds that free
        exports are watermark-free. The Pro plan is listed at $29 per month or
        $180 per year with a limit of 100 projects per user, and the home page
        advertises a one-time 30% discount code for monthly plans.
      </p>
      <p>
        The pitch is breadth. The home page claims 1000+ pre-built templates,
        2K+ icons and SVGs and a background image library, and the changelog
        shows it still growing — 50 new templates in December 2025, hand-held
        3D devices in November 2025, custom font upload in October 2024.
        Device coverage includes the iPhone 17 line, iPads and tablets, and
        Android phones; its own comparison post names the Samsung Galaxy S25
        and S26. Exports are JPEG or PNG in a ZIP at store resolution, and a
        &quot;Clone&quot; action copies a finished design to another device
        size and auto-scales it. Localization is a dropdown plus a Translate
        button that applies the chosen language to every screenshot in the
        design. Nothing on the site or in the help center mentions store
        upload: you download and upload yourself.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+) sold
        only through the App Store. It has far fewer templates — 50+ starters —
        because the design happens on one continuous canvas where each row is
        a device size and each template is a screenshot, and a headline or
        gradient can span across several screenshots. The free tier needs no
        signup and never expires: 1 project, 3 rows and 5 templates per row,
        with every device frame, shape and locale, watermark-free exports, and
        direct upload to App Store Connect and Google Play all included. Pro is
        a lifetime purchase or a subscription that removes the project, row
        and template caps and gates nothing else. Localization is 81 built-in
        language presets plus custom codes, with on-device auto-translation
        through Apple&apos;s Translation framework and per-locale overrides for
        text, style, image and position.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="AppLaunchpad" rows={ROWS} />

      <h2>What AppLaunchpad does well</h2>
      <p>
        In our own roundup of Google Play tools AppLaunchpad is the pick for
        the biggest template library, and that holds here. If your question is
        &quot;which tool lets me pick a finished look and be done by
        lunch?&quot;, AppLaunchpad answers it better than {SITE_NAME} does.
      </p>
      <ul>
        <li>
          <strong>The library.</strong> 1000+ templates, 2K+ icons and SVGs
          and a background library mean you can usually find a style close to
          the one in your head instead of building it. Its changelog shows
          template batches landing in December 2024, August 2025 and December
          2025, so the catalogue is maintained, not frozen.
        </li>
        <li>
          <strong>Zero install, any OS.</strong> A Windows developer, a
          designer on a Chromebook and a founder on a Mac all open the same
          editor.
        </li>
        <li>
          <strong>Clone to another device size.</strong> Finish the iPhone
          design, pick iPad from the Clone dropdown, and a scaled copy appears
          under your saved designs. For a tool that edits one device size at a
          time, that is a genuinely quick way to cover a second size.
        </li>
        <li>
          <strong>One-click translation and side tools.</strong> One Translate
          click rewrites every screenshot in the chosen language, and the same
          account includes an app icon generator and a device mockup generator.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>Native and local, not hosted.</strong> Projects are
          plain-JSON files on disk with a{" "}
          <a href="/docs/project-schema">public schema</a>, the app works
          offline, and iCloud sync is opt-in. AppLaunchpad keeps designs under
          &quot;My saved designs&quot; in its cloud.
        </li>
        <li>
          <strong>Upload is part of the free tier.</strong> App Store Connect
          sync uses an API key and only uploads, reorders or removes what
          changed; Google Play upload is staged as a Play edit you confirm.
          AppLaunchpad ends at a ZIP.
        </li>
        <li>
          <strong>Localization with overrides.</strong> 81 presets plus custom
          codes, translation that runs on the device with no API keys, and
          per-locale control over text, style, image and position — so a
          German headline that runs long can be resized for German only.
          AppLaunchpad&apos;s translate step is a single pass over the whole
          design.
        </li>
        <li>
          <strong>One canvas for every size.</strong> iPhone 6.9&quot;, iPad
          13&quot;, Mac and Android rows sit in one project, and a shape can
          span across screenshots. AppLaunchpad treats each device size as a
          separate design and clones between them.
        </li>
      </ul>

      <h2>When to pick AppLaunchpad</h2>
      <ul>
        <li>
          You work on Windows, Linux or a Chromebook, or your team is split
          across operating systems. {SITE_NAME} does not run there.
        </li>
        <li>
          You want to browse a large catalogue, pick a template that already
          looks right and only change the text and screenshots — the most
          common case, and the thing it is best at.
        </li>
        <li>
          You are launching one app once, the free plan&apos;s 10 templates
          cover it, and you have no reason to install anything.
        </li>
        <li>
          You want hand-held or 3D device renders, or a frame labelled with a
          specific Samsung model, inside the same editor as your flat
          screenshots.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          You ship updates repeatedly to both stores and want the upload step
          inside the same tool, on the free tier, rather than downloading a ZIP
          and dragging files into two consoles.
        </li>
        <li>
          You localize into many languages and need per-locale control —
          a different screenshot for the Japanese market, a smaller font for
          German — not one global translate pass.
        </li>
        <li>
          You want your project in a plain file you can put in git, open
          offline on a plane, or sync to an iPad through iCloud.
        </li>
        <li>
          Your design spans screenshots — a headline that flows over two
          panels, a background that runs across the whole row — which a
          one-screenshot-at-a-time editor cannot express.
        </li>
        <li>
          You would rather pay once than keep a monthly subscription alive for
          a tool you open four times a year.
        </li>
      </ul>

      <h2>Switching from AppLaunchpad to {SITE_NAME}</h2>
      <p>
        Neither tool imports the other&apos;s projects. AppLaunchpad designs
        live in its cloud account, {SITE_NAME} projects are local JSON, and
        there is no converter in either direction. What carries over is
        everything that was never really AppLaunchpad&apos;s: the raw
        screenshots you uploaded, the headline copy for every language, your
        font files (.ttf, .otf or .ttc are bundled into a {SITE_NAME}{" "}
        project), your brand colours as hex values, and the list of locales
        you publish in.
      </p>
      <p>
        What is rebuilt is the layout. For a typical 6-template set in 3
        locales, budget two to three hours: 60–90 minutes to lay out six
        templates on one iPhone row with your colours and fonts, a few minutes
        per extra row because the frames rescale, then 20–30 minutes to add
        two locales, run the on-device translation, paste in any copy the
        framework does not cover and fix the headlines that run long. The App
        Store Connect upload is a button at the end rather than a second
        session.
      </p>
      <p>
        Going the other way is the same exercise in reverse: AppLaunchpad
        cannot read a {SITE_NAME} project either, so you bring the same raw
        screenshots and text and pick a template to pour them into.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Doesn&apos;t AppLaunchpad watermark free exports?&quot;</h3>
      <p>
        Not according to AppLaunchpad itself. Its own comparison post describes
        the free plan as &quot;10 pre-designed templates&quot; with
        &quot;usable, watermark-free exports&quot;, and nothing in the help
        center contradicts that. Some third-party roundups say otherwise; we
        went with the vendor&apos;s own statement. The free plan&apos;s real
        limit is the 10-template, 100-graphic selection, not a stamp on the
        output. Current plan details are in{" "}
        <a
          href="https://intercom.help/theapplaunchpad/en/articles/13747884-how-to-upgrade-my-pricing-plan"
          target="_blank"
          rel="noopener noreferrer"
        >
          its help center
        </a>
        .
      </p>

      <h3>&quot;Can AppLaunchpad upload to the App Store for me?&quot;</h3>
      <p>
        We could not find direct upload on its site, in its FAQ or in its help
        center, and its own comparison posts do not claim it. The workflow
        ends with a ZIP of JPEG or PNG files you drag into App Store Connect
        and the Play Console — fine for one launch, tedious by the fourth
        release, which is why {SITE_NAME} puts API-key upload in the free
        tier.
      </p>

      <h3>&quot;Does {SITE_NAME} have 1000 templates too?&quot;</h3>
      <p>
        No — 50+ starters. The two tools are built around opposite bets.
        AppLaunchpad bets that most people want to choose a finished look;{" "}
        {SITE_NAME} bets that most people want to design a row once and then
        reuse it across sizes and languages. If you expect a catalogue to
        scroll through, {SITE_NAME} will feel thin.
      </p>

      <h3>&quot;Isn&apos;t a browser editor slower than a native app?&quot;</h3>
      <p>
        Not in any way that matters here. Nothing about a browser editor makes
        it slow for this job, and the time saved by starting from a finished
        template dwarfs any difference in rendering speed. The honest
        differences are file ownership, offline work, the upload step and
        per-locale control — not how fast a rectangle moves.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Which is better&quot; is the wrong question; the two tools
        optimise for different people. AppLaunchpad optimises for the first
        hour: open a browser on any machine, pick from a thousand templates,
        download a ZIP. {SITE_NAME} optimises for the tenth release: a local
        project with every size and language in it, and an upload button that
        syncs only what changed.
      </p>
      <p>
        Do not buy {SITE_NAME} if you work on Windows, Linux or a Chromebook,
        if several people need to edit one design from a shared account, if
        you want to browse a large template library rather than lay out a row
        yourself, or if you need hand-held 3D renders. AppLaunchpad covers all
        of those today. If you ship to both stores from a Mac, localize into
        more than a couple of languages and would rather own a file than rent
        a seat, try the free tier on one real listing.
      </p>
    </ComparisonShell>
  );
}
