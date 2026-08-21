import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";
import type { Route } from "./+types/vs.mockuuups-studio";
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

const SLUG = "mockuuups-studio";

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
    them: "Web editor; desktop app for macOS, Windows and Linux; plugins for Figma, Sketch, Adobe Express, Penpot and Frontify",
    us: SCREENSHOT_BRO_FACTS.platform,
  },
  {
    factor: "Account required",
    them: "Not for the Figma plugin's free collection; sign-in (magic link, Google, Apple or GitHub) for paid plans and share links",
    us: SCREENSHOT_BRO_FACTS.account,
  },
  {
    factor: "Price model",
    them: "Professional $15/month or $120/year; Team $20 per user/month or $120 per user/year; one-time single-mockup export from the desktop app; separate credit-based API",
    us: SCREENSHOT_BRO_FACTS.priceModel,
  },
  {
    factor: "Free tier limits",
    them: "Preview the whole library; a limited free collection exports for personal use with attribution; other mockups export only as low-resolution watermarked previews",
    us: SCREENSHOT_BRO_FACTS.freeTier,
  },
  {
    factor: "Watermark / attribution",
    them: "Free: attribution line required and watermarked previews outside the free collection; paid plans: none",
    us: SCREENSHOT_BRO_FACTS.watermark,
  },
  {
    factor: "Device frames",
    them: "5,300+ photoreal scenes: iPhone 17 / 17 Pro / Air / 17e back to iPhone 6s, Pixel 10 Pro, Galaxy S26, iPad, MacBook, iMac, Apple Watch, TV, plus print items",
    us: SCREENSHOT_BRO_FACTS.frames,
  },
  {
    factor: "Store sizes & auto-resize",
    them: "No App Store or Google Play presets; export at a predefined size or a custom width, one image at a time",
    us: SCREENSHOT_BRO_FACTS.sizes,
  },
  {
    factor: "Layout model",
    them: "One design placed into one scene; the editor combines a device, hands and a background (colour, gradient, transparent or Unsplash photo)",
    us: SCREENSHOT_BRO_FACTS.layout,
  },
  {
    factor: "Templates",
    them: "5,300+ ready scenes with regular additions (792 for the iPhone 17 Pro alone)",
    us: SCREENSHOT_BRO_FACTS.templates,
  },
  {
    factor: "Localization",
    them: "Nothing on its site about languages or locales; you swap the screen image and export again per language",
    us: SCREENSHOT_BRO_FACTS.localization,
  },
  {
    factor: "App Store Connect upload",
    them: "None — you export an image",
    us: SCREENSHOT_BRO_FACTS.ascUpload,
  },
  {
    factor: "Google Play upload",
    them: "None — you export an image",
    us: SCREENSHOT_BRO_FACTS.playUpload,
  },
  {
    factor: "Export formats & modes",
    them: "PNG or JPEG up to 4K on paid plans; predefined sizes or a custom width; transparent backgrounds; shareable preview links; screenshot capture from a live URL",
    us: SCREENSHOT_BRO_FACTS.export,
  },
  {
    factor: "3D / video",
    them: "Static photoreal renders; no video or GIF import, per its help center",
    us: SCREENSHOT_BRO_FACTS.threeDVideo,
  },
  {
    factor: "Automation / API",
    them: "Separate Mockup Generator API, credit-based (50 free credits, then $50/month for 500 credits and up), billed apart from the app",
    us: SCREENSHOT_BRO_FACTS.automation,
  },
  {
    factor: "Offline & file ownership",
    them: "Imported designs are processed on your device and not uploaded (share links excepted); the mockup gallery streams from its servers",
    us: SCREENSHOT_BRO_FACTS.offlineFiles,
  },
  {
    factor: "Team / collaboration",
    them: "Team plan: centralised seats and billing, SAML SSO, invoice payment, priority support",
    us: SCREENSHOT_BRO_FACTS.collaboration,
  },
  {
    factor: "Best for",
    them: "Photoreal device shots for websites, social posts, decks and client work, inside the design tool you already use",
    us: SCREENSHOT_BRO_FACTS.bestFor,
  },
];

const FAQS: BlogFaqItem[] = [
  {
    question: "Is Mockuuups Studio free?",
    answer:
      "Partly. You can browse and preview the whole library for free, and a limited free collection exports for personal use as long as you add the attribution line. Everything else exports as a low-resolution watermarked preview until you pay: Professional is $15 a month or $120 a year, Team is $20 per user a month or $120 per user a year, and the desktop app also sells a one-time export of a single mockup.",
  },
  {
    question: "Is Screenshot Bro free?",
    answer:
      "Yes, with limits on quantity rather than features. The free tier has no signup and no expiry, and it gives you 1 project, 3 rows and 5 templates per row with every device frame, shape and locale, watermark-free exports, and App Store Connect and Google Play upload. Pro removes the project, row and template limits and nothing else is gated; the price is shown in the app.",
  },
  {
    question: "Can Screenshot Bro open Mockuuups Studio projects?",
    answer:
      "No. Mockuuups Studio does not have a project file you could hand over, and Screenshot Bro imports only PNG and JPEG images. What carries over is the raw app screenshots, your copy and your brand colours and fonts; a Mockuuups export can also be dropped into a Screenshot Bro template as a background or image shape.",
  },
  {
    question: "Can I make App Store screenshots with Mockuuups Studio?",
    answer:
      "You can export a device scene at a custom width and crop it to a store size in another tool, and for a single English listing that can be enough. What it lacks is the store-specific part: iPhone and iPad size presets, a multi-screenshot layout, language variants and upload. If you ship several sizes and languages, doing that by hand in Mockuuups is the slow path.",
  },
];

const RELATED: RelatedLink[] = [
  {
    href: "/blog/mockuuups-studio-alternative",
    label: "Mockuuups Studio Alternative for Store Screenshots",
    description:
      "the longer-form version of this page, aimed at people searching for a replacement.",
  },
  {
    href: "/blog/best-app-store-screenshot-tools-for-mac",
    label: "Best App Store Screenshot Tools for Mac (2026)",
    description:
      "Mockuuups Studio alongside Screenshot Studio, Rotato, frameit, Figma and Sketch.",
  },
  {
    href: "/blog/screenshot-bro-alternatives",
    label: "Screenshot Bro Alternatives: When to Use Another Tool",
    description:
      "the cases where Screenshot Bro is the wrong choice, written by its maker.",
  },
  {
    href: "/vs",
    label: "All comparisons",
    description: "every tool compared against Screenshot Bro on one page.",
  },
];

export default function MockuuupsStudioComparison() {
  return (
    <ComparisonShell
      slug={SLUG}
      tldr={
        <>
          Mockuuups Studio is the better choice when you need a photoreal
          device scene — a hand holding an iPhone, a MacBook on a desk — for a
          website, a social post or a pitch deck, especially if you want it
          inside Figma or Sketch. {SITE_NAME} is for the store listing itself:
          App Store and Google Play size presets, 81 locales and direct upload.
          They overlap less than the word &quot;mockup&quot; suggests, and many
          people use both.
        </>
      }
      faqs={FAQS}
      related={RELATED}
      ctaMessage="Need store-size screenshots in several languages, uploaded straight to App Store Connect? Try Screenshot Bro free."
    >
      <h2>What each tool actually does</h2>

      <h3>Mockuuups Studio</h3>
      <p>
        <a
          href="https://mockuuups.studio/pricing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mockuuups Studio
        </a>{" "}
        is a mockup generator: you paste one design or screenshot and it
        appears on thousands of pre-rendered device and print scenes at once.
        It runs as a web editor, as a desktop app for macOS, Windows and
        Linux, and as plugins for Figma, Sketch, Adobe Express, Penpot and
        Frontify (Framer and Webflow are listed as coming soon). The library
        stands at 5,300+ scenes — the phone section alone lists 792 for the
        iPhone 17 Pro, and the model list runs from iPhone 17 / 17 Pro / Air /
        17e back to the iPhone 6s, plus Pixel 10 Pro, Galaxy S26, iPad,
        MacBook, iMac, Apple Watch and TV, and print items such as business
        cards and posters.
      </p>
      <p>
        Pricing is a subscription. Professional is $15 a month or $120 a year
        (the yearly tab is labelled &quot;Save 40%&quot;); Team is $20 per
        user a month or $120 per user a year. Both include the full library,
        unlimited exports &quot;in high-quality (4K)&quot;, a commercial
        licence, the advanced editor, the Figma plugin and Adobe Express
        add-on, shareable preview links and screenshot capture from a live
        website URL. Team adds centralised seat management, SAML single
        sign-on, unified billing, payment by invoice or bank transfer and
        priority support. The free tier lets you preview everything; a limited
        free collection exports for personal use with an attribution line, and
        the rest exports as a low-resolution watermarked preview. The desktop
        app also sells a one-time export of a single mockup, there is a 50%
        education discount, and refunds are offered within 7 days. A separate
        Mockup Generator API is sold on credits, billed apart from the app.
      </p>

      <h3>{SITE_NAME}</h3>
      <p>
        {SITE_NAME} is a native Mac, iPad and iPhone app (macOS{" "}
        {MINIMUM_MACOS_VERSION}+, iOS/iPadOS {MINIMUM_IPADOS_VERSION}+, App
        Store only) built around one job: the screenshot set you upload to App
        Store Connect and Google Play. A project is a multi-row canvas where
        each row is a store size — iPhone 6.9&quot;, 6.5&quot;, iPad 13&quot;,
        Mac, Android phone and tablet — and each template is one screenshot
        at that exact pixel size. You place device frames, text, gradients and
        SVGs, let a headline flow across two screenshots, switch between 81
        language presets with on-device auto-translation, and export one
        folder per locale and row or upload straight to both stores. Its frame
        library is deliberately small — current iPhones, iPads, Macs, an
        Apple Watch Ultra 3 and abstract Android frames — because the frames
        are a layer on a store layout, not the product. The free tier has no
        signup and no expiry (1 project, 3 rows, 5 templates per row) and
        includes store upload; Pro lifts those limits and nothing else is
        gated.
      </p>

      <h2>Side-by-side</h2>
      <ComparisonTable competitor="Mockuuups Studio" rows={ROWS} />

      <h2>What Mockuuups Studio does well</h2>
      <p>
        Mockuuups Studio has spent years on one thing — making a design look
        real on a device — and it shows. The scenes are photographic, the
        hands and desks and lighting are varied enough that you can find one
        that matches a brand, and the instant-preview model means you see
        your screen on hundreds of scenes before you pick one. It is the right
        kind of tool for the jobs around an app launch rather than the listing
        itself.
      </p>
      <ul>
        <li>
          <strong>The library is enormous and current.</strong> 5,300+
          scenes, 792 for the iPhone 17 Pro alone, with iPhone Air, Pixel 10
          Pro and Galaxy S26 already in the catalogue and regular additions.
          No single-developer screenshot tool comes close.
        </li>
        <li>
          <strong>It lives inside your design tool.</strong> The Figma plugin
          installs without an account, works on free Figma plans, and lets
          you pick a frame and see it on every mockup without leaving the
          file. Sketch, Adobe Express, Penpot and Frontify are covered too.
        </li>
        <li>
          <strong>Your files stay on your machine.</strong> Its help center
          states that imported designs are processed on your device and not
          uploaded for ordinary mockup creation; only the gallery is served
          from its servers, and it says it does not train AI on your designs.
        </li>
        <li>
          <strong>The licence is simple.</strong> One paid plan covers client
          work, marketing pages and decks with no attribution, exports remain
          yours after you cancel, and a single mockup can be bought outright
          if you only need one.
        </li>
      </ul>

      <h2>Where {SITE_NAME} is different</h2>
      <ul>
        <li>
          <strong>It starts from the store&apos;s requirements.</strong> Rows
          are store sizes, exports are exact pixel dimensions, and the App
          Store Connect and Google Play uploaders are built in. Mockuuups
          exports a picture at a width you choose and stops there.
        </li>
        <li>
          <strong>A set, not a single image.</strong> One canvas holds six or
          ten screenshots per size, and a headline or gradient can span
          across them. Mockuuups places one design into one scene at a time.
        </li>
        <li>
          <strong>Languages are a first-class axis.</strong> 81 presets,
          on-device auto-translation for the languages Apple&apos;s
          Translation framework supports, and per-locale overrides for text,
          style, image and position. Mockuuups has no locale concept.
        </li>
        <li>
          <strong>Free means free exports.</strong> No watermark, no
          attribution line and no signup on the free tier; the limits are on
          how many projects and templates you can have, not on what comes out.
        </li>
      </ul>

      <h2>When to pick Mockuuups Studio</h2>
      <ul>
        <li>
          You need a hero image for a website or landing page — a phone in a
          hand, a laptop on a desk — and it has to look photographic.
        </li>
        <li>
          You post app visuals to social media, Product Hunt or a newsletter
          and want a fresh scene each time without opening Photoshop.
        </li>
        <li>
          You work in Figma or Sketch all day and want mockups generated
          inside the file, not in a separate app.
        </li>
        <li>
          You present to clients or investors and need device shots in a deck,
          including Android phones, TVs or print pieces.
        </li>
        <li>
          You are on Windows or Linux, or your team needs SSO and centralised
          billing.
        </li>
        <li>
          You want mockups generated programmatically — its credit-based API
          renders a scene from an image or a URL.
        </li>
      </ul>

      <h2>When to pick {SITE_NAME}</h2>
      <ul>
        <li>
          The deliverable is the App Store or Google Play listing: a set of
          screenshots at each required size, in order, ready to upload.
        </li>
        <li>
          You localise — even to two or three languages — and do not want to
          rebuild the set by hand per language.
        </li>
        <li>
          You ship to both stores and want the iPhone, iPad, Mac and Android
          rows in one project with one export.
        </li>
        <li>
          You want to upload from the same window, with only the changed
          screenshots re-sent on the next release.
        </li>
        <li>
          You need the project to be a plain file you own, with no account,
          working offline on a plane.
        </li>
        <li>
          Your designs are bleed-style or use abstract frames, and a
          photoreal hand would be the wrong look.
        </li>
      </ul>

      <h2>Using Mockuuups Studio and {SITE_NAME} together</h2>
      <p>
        Because they target different assets, the sensible setup for a small
        team is often both, with the same raw screenshots feeding each. A
        typical flow:
      </p>
      <ol>
        <li>
          <strong>Capture</strong> the raw screens once — from the iOS
          Simulator, a device or your test suite — at the sizes the stores
          require.
        </li>
        <li>
          <strong>Build the store set</strong> in {SITE_NAME}: drop the folder
          onto the canvas so shots route to the right size row, pick frames,
          write the headlines, add locales, export or upload.
        </li>
        <li>
          <strong>Make the marketing shots</strong> in Mockuuups Studio: paste
          the same screen into a photoreal scene for the website hero, the
          launch tweet, the press kit and the deck. Export with a transparent
          background where you want to composite.
        </li>
        <li>
          <strong>Optionally bring a scene back.</strong> A Mockuuups export —
          a hand holding the phone, say — can be dropped into a {SITE_NAME}{" "}
          template as a background or image shape, with your headline and
          locale overrides layered on top. Check the Mockuuups licence terms
          for your plan before publishing it in a store listing; the free
          collection is personal-use only.
        </li>
      </ol>
      <p>
        Going the other way is less useful: a {SITE_NAME} export is already a
        finished store screenshot, and Mockuuups would put it on a device a
        second time.
      </p>

      <h2>Frequently confused points</h2>

      <h3>&quot;Isn&apos;t Mockuuups just a free mockup site with watermarks?&quot;</h3>
      <p>
        No, and this one is often held against it unfairly. The free tier is a
        preview with a small no-watermark collection; the paid product is a
        proper editor with custom scenes, backgrounds and 4K export, a
        commercial licence, and plugins that run inside Figma, Sketch, Adobe
        Express and Penpot. Its help center also states that your imported
        designs are processed locally rather than uploaded, which is more than
        most browser mockup tools can say. Judge it by the paid tier.
      </p>

      <h3>&quot;Can&apos;t I make my App Store screenshots in Mockuuups and skip the extra app?&quot;</h3>
      <p>
        For one English listing on one device size, you can: export a scene at
        a custom width, crop it to the store&apos;s pixel size elsewhere, add
        a headline in your design tool, repeat per screenshot. The cost is
        that every size and language multiplies that by hand, there is no
        notion of a set or of order, and nothing uploads. Mockuuups does not
        describe itself as a store-listing tool anywhere on its site, and it
        is not trying to be one.
      </p>

      <h3>&quot;{SITE_NAME} has device frames too, so why would I pay for Mockuuups?&quot;</h3>
      <p>
        Because {SITE_NAME}&apos;s frame library is a fraction of 5,300 — a
        handful of current iPhones, iPads, Macs, an Apple Watch and abstract
        Android frames, all flat, front-on renders plus two 3D iPhones. There
        are no hands, desks, lighting setups, older models, Galaxy or Pixel
        hardware, TVs or print. If the asset is a website hero or a social
        post, that library is what you are paying for, and {SITE_NAME} does
        not have it.
      </p>

      <h3>&quot;Mockuuups exports 4K; {SITE_NAME} only exports store sizes. Isn&apos;t that worse?&quot;</h3>
      <p>
        They are measuring different things. A store screenshot must be an
        exact pixel size — 1320×2868 for the 6.9&quot; iPhone, for example —
        and App Store Connect rejects anything else, so {SITE_NAME} exports
        the row&apos;s pixel size and nothing more. 4K matters for a website
        image or a print piece where bigger is safer. Neither number is a
        quality score.
      </p>

      <h2>The honest bottom line</h2>
      <p>
        &quot;Which is better&quot; is the wrong question for these two. Ask
        what the finished file is for. If it goes on a website, in a post, a
        press kit or a slide, Mockuuups Studio has a library and a set of
        plugins that {SITE_NAME} does not have and will not build. If it goes
        into App Store Connect or the Play Console, {SITE_NAME} has the size
        presets, the locale system and the uploader that Mockuuups does not
        have and is not trying to build.
      </p>
      <p>
        Do not buy {SITE_NAME} if your need is photoreal marketing imagery,
        if you are on Windows or Linux, if you want mockups inside Figma, or
        if your team needs SSO and shared billing — Mockuuups or something
        like it is the right purchase. Do not try to run a localised,
        multi-size store listing through Mockuuups alone; the time you save on
        the first screenshot is lost on the twentieth. Most indie teams that
        ship an app and a website end up using each tool for the half it was
        built for.
      </p>
    </ComparisonShell>
  );
}
