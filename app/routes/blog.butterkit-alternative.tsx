import type { Route } from "./+types/blog.butterkit-alternative";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

const SLUG = "butterkit-alternative";

const COMPARISON = [
  {
    factor: "Platform",
    butterkit: "Native Mac only, macOS 26 (Tahoe) or later",
    screenshotBro: "Native Mac, iPad and iPhone (macOS 15+, iOS/iPadOS 18+)",
  },
  {
    factor: "Getting screenshots in",
    butterkit: "Built-in Xcode Simulator capture tool; link a Fastlane folder; drag in PNG or JPG",
    screenshotBro: "Drag in a folder of raw shots, auto-routed to the right row by pixel size",
  },
  {
    factor: "Device frames",
    butterkit: "Real-time Metal 3D, freely rotatable and angled",
    screenshotBro: "Flat frames for iPhone, iPad, Mac and Android, plus two 3D iPhone models",
  },
  {
    factor: "Size presets",
    butterkit: "iOS, iPadOS, macOS, tvOS, watchOS, Google Play, custom",
    screenshotBro: "App Store iPhone, iPad and Mac plus Google Play phone and tablet; no Watch or TV presets",
  },
  {
    factor: "Localization",
    butterkit: "19 languages free on-device; all 50 App Store languages need your own AI provider key",
    screenshotBro: "81 language presets plus custom codes, on-device auto-translate, no API keys",
  },
  {
    factor: "Store upload",
    butterkit: "App Store Connect — screenshots and listing metadata",
    screenshotBro: "App Store Connect and Google Play, both included on the free tier",
  },
  {
    factor: "Free tier",
    butterkit: "Unlimited projects and artboards, but every export is watermarked",
    screenshotBro: "1 project, 3 rows, 5 templates per row — exports have no watermark",
  },
  {
    factor: "Price",
    butterkit: "$99 one-time (listed down from $149), or a $10/month, $39/year Supporter plan",
    screenshotBro: "Free tier plus a Pro unlock, lifetime or subscription; price shown in the app",
  },
  {
    factor: "Project files",
    butterkit: ".butterkit package on disk; the format is not publicly documented",
    screenshotBro: "Plain JSON with a published schema",
  },
  {
    factor: "Automation",
    butterkit: "MCP server with 42 tools; Fastlane folder sync; no CLI",
    screenshotBro: "MCP server on Mac; no CLI and no hosted API",
  },
] as const;

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return { locale: (locale || "en") as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches, params }) =>
  buildBlogPostMeta(SLUG, matches, (params.locale || "en") as LocaleCode);

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <BlogArticleShell
      slug={SLUG}
      locale={locale}
      tldr="ButterKit and Screenshot Bro are both native Mac apps for App Store screenshots, and the choice usually comes down to three things: ButterKit needs macOS 26 or later and Screenshot Bro runs on macOS 15 and on iPad and iPhone; ButterKit reaches all 50 App Store languages only with your own AI provider key, while Screenshot Bro ships 81 language presets that translate on-device; and Screenshot Bro uploads to Google Play, which ButterKit does not."
      ctaMessage="On an older macOS, shipping to Google Play too, or want exports without a watermark before you pay? Try Screenshot Bro free."
      ctaHomeLinkLabel="a native App Store screenshot tool for Mac"
      seoLinks={[
        {
          href: "/vs/butterkit",
          label: "Full head-to-head: Screenshot Bro vs ButterKit",
          description: "all eighteen factors side by side, with a switching guide.",
        },
        {
          href: "/blog/best-app-store-screenshot-tools-for-mac",
          label: "Best App Store Screenshot Tools for Mac (2026)",
          description: "the wider set of native Mac options.",
        },
        {
          href: "/blog/best-app-screenshot-localization-tools",
          label: "Best App Screenshot Localization Tools",
          description: "how translation coverage differs between tools.",
        },
        {
          href: "/blog/screenshot-bro-alternatives",
          label: "Screenshot Bro Alternatives",
          description: "the cases where this app is the wrong choice.",
        },
      ]}
      faqs={[
        {
          question: "What is ButterKit?",
          answer:
            "ButterKit is a native macOS app by Zach Spitulski for designing App Store screenshots and metadata, with real-time 3D device frames rendered in Metal, an Xcode Simulator capture tool, translation into App Store languages, and direct upload to App Store Connect. It requires macOS 26 (Tahoe) or later and is sold as a $99 one-time purchase, with a free tier that watermarks exports.",
        },
        {
          question: "Is ButterKit free?",
          answer:
            "There is a free tier with unlimited projects and artboards, but every export carries a “Made with ButterKit” watermark until you buy Pro. ButterKit's pricing page lists App Store Connect upload and all 50 languages under Free, while its Pro documentation scopes cloud translation and App Store Connect management to Pro — so check inside the app which applies to your case.",
        },
        {
          question: "What is a good ButterKit alternative?",
          answer:
            "Screenshot Bro is the closest native alternative: it runs on macOS 15 rather than requiring macOS 26, works on iPad and iPhone as well as Mac, exports without a watermark on the free tier, translates across 81 language presets on-device without an AI provider key, and uploads to Google Play as well as App Store Connect.",
        },
        {
          question: "Does ButterKit upload to Google Play?",
          answer:
            "No. ButterKit has Google Play size presets and a Pixel 10 Pro device model, so you can design Play assets in it and export them, but there is no Google Play upload — its own roadmap lists Google Play Store support under “Exploring”. Screenshot Bro uploads to Google Play through the Play Developer API, on the free tier.",
        },
      ]}
    >
      <p>
        ButterKit is a native macOS app for App Store screenshots and metadata,
        built by a solo developer in California and shipped roughly two or three
        times a month since September 2025. Of everything in this category it is
        the closest to Screenshot Bro: both are native Mac apps rather than
        browser tools, both keep project files on your disk with no account,
        both upload to App Store Connect, and both expose an MCP server so an AI
        agent can drive them. This page is for people searching for a{" "}
        <strong>ButterKit alternative</strong> — and the honest answer is that
        the two overlap a great deal, so the differences that remain are the
        whole decision.
      </p>
      <p>
        Competitor details below were checked against ButterKit&apos;s own site,
        documentation and pricing page in August 2026; pricing and features
        change, so verify there before deciding.
      </p>

      <h2>What ButterKit Does Well</h2>
      <p>
        Several of these are things Screenshot Bro does not do at all, so they
        are worth stating plainly rather than glossing over.
      </p>
      <ul>
        <li>
          <strong>It captures from the Xcode Simulator itself.</strong> A
          floating capture tool follows the active Simulator window, and it
          reads the available localizations out of your Xcode String Catalog so
          you can switch language and re-capture. Screenshot Bro has no shipping
          equivalent — you bring it screenshots you have already taken.
        </li>
        <li>
          <strong>The 3D is real 3D.</strong> Devices are rendered live in Metal
          and can be rotated and angled freely, and a single device can overflow
          across several artboards. Screenshot Bro&apos;s frames are flat images
          apart from two fixed 3D iPhone models.
        </li>
        <li>
          <strong>It covers Apple Watch and Apple TV sizes.</strong> ButterKit
          lists watchOS and tvOS among its supported platforms. Screenshot Bro
          has an Apple Watch Ultra 3 frame but no Watch, TV or Vision Pro size
          preset, so if your listing needs those, this is a real gap on our side.
        </li>
        <li>
          <strong>It translates the listing metadata, not just the images.</strong>{" "}
          Description, keywords, subtitle and what&apos;s-new text go through the
          same translation step as the screenshot copy, with custom instructions
          for brand voice and do-not-translate terms, and delta translation so
          only changed strings get re-sent.
        </li>
        <li>
          <strong>It publishes its price.</strong> $99 one-time, listed down from
          $149, good for five Macs, with a 14-day money-back guarantee and a
          discount for students, teachers, veterans and first responders. There
          is an optional Supporter subscription, but you are not required to rent
          the app.
        </li>
        <li>
          <strong>You can install it however you like.</strong> Direct{" "}
          <code>.dmg</code>, the Mac App Store, or{" "}
          <code>brew install --cask butterkit</code>.
        </li>
      </ul>

      <h2>Why People Look for an Alternative</h2>
      <ul>
        <li>
          They are not on <strong>macOS 26</strong>. This is the most common
          reason and the hardest to work around.
        </li>
        <li>
          They ship to <strong>Google Play</strong> and want to upload there too.
        </li>
        <li>
          They do not want to <strong>buy and manage an AI provider key</strong>{" "}
          to get past 19 languages.
        </li>
        <li>
          They want to <strong>ship a small listing without paying</strong>, and
          a watermark rules that out.
        </li>
        <li>
          They want to work on an <strong>iPad or iPhone</strong>, not only a Mac.
        </li>
      </ul>

      <h2>ButterKit vs Screenshot Bro</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>ButterKit</th>
            <th>Screenshot Bro</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((row) => (
            <tr key={row.factor}>
              <td>{row.factor}</td>
              <td>{row.butterkit}</td>
              <td>{row.screenshotBro}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>The Three Differences That Actually Decide It</h2>

      <h3>1. Which macOS you are on</h3>
      <p>
        ButterKit requires <strong>macOS 26 (Tahoe) or later</strong> — stated in
        its own system requirements, and enforced by its Homebrew cask. That is a
        recent OS, and a developer who keeps a machine one or two versions back
        for build stability simply cannot run it. Screenshot Bro runs on{" "}
        <strong>macOS 15 or later</strong>, and also runs on iPad and iPhone from
        the same purchase. If you are on Tahoe, this difference is irrelevant. If
        you are not, it ends the comparison.
      </p>

      <h3>2. What translation costs you</h3>
      <p>
        Both apps translate on-device using Apple&apos;s Translation framework,
        and both are honest that this covers a limited set of languages.
        ButterKit&apos;s documentation puts its on-device coverage at{" "}
        <strong>19 languages</strong>; to reach all 50 App Store languages you
        connect a cloud model with <strong>your own API key</strong> — OpenAI,
        Gemini, Claude, OpenRouter, or a local model through an
        OpenAI-compatible endpoint. Screenshot Bro ships{" "}
        <strong>81 language presets plus custom locale codes</strong>, with no
        key to buy and no per-token cost, but the automatic translation only
        covers what Apple&apos;s framework supports; the rest you type or paste.
      </p>
      <p>
        These are genuinely different trades, not one being better. ButterKit
        gives you machine translation everywhere at your own metered expense and
        lets you steer it with custom instructions. Screenshot Bro gives you more
        locale slots for free and leaves the long tail to you or your translator.
        If you already pay for an AI API and want the machine to write all 50, the
        ButterKit model is the better fit — and this page should not talk you out
        of it.
      </p>

      <h3>3. Whether Android is in scope</h3>
      <p>
        ButterKit has Google Play size presets and a Pixel 10 Pro device model,
        so you can design Play assets in it and export them as files. What it
        does not have is a Google Play upload — its own roadmap lists
        &quot;Google Play Store support&quot; under <em>Exploring</em>. Screenshot
        Bro uploads to Google Play through the Play Developer API with a service
        account, staged as a Play edit you confirm, and that is on the free tier
        along with App Store Connect upload. If you ship to one store, this does
        not matter. If you ship to both, it is the difference between one tool and
        two.
      </p>

      <h2>About the Free Tiers</h2>
      <p>
        It is worth being precise here, because ButterKit&apos;s free tier is more
        generous than ours in the dimension most people check first.{" "}
        <strong>ButterKit gives you unlimited projects and artboards</strong> and
        watermarks every export. <strong>Screenshot Bro gives you one project,
        three rows and five templates per row</strong>, and what comes out is
        watermark-free and shippable, with both store uploads included.
      </p>
      <p>
        So the question is not which free tier is bigger — it is which limit you
        hit first. If you want to explore a large design across many artboards
        before committing, ButterKit&apos;s shape is friendlier. If you have one
        small app and want to ship its listing today without paying anyone,
        Screenshot Bro&apos;s shape is the one that gets you there. One more
        wrinkle worth checking yourself: ButterKit&apos;s pricing page lists
        &quot;All 50 App Store languages&quot; and &quot;Upload to App Store
        Connect&quot; under Free, while its Pro documentation scopes cloud
        translation and App Store Connect management to Pro. Those two pages do
        not quite agree, so confirm in the app which applies to you.
      </p>

      <h2>Who Should Pick Which</h2>
      <p>
        Choose <strong>ButterKit</strong> if you are on macOS 26, you want
        screenshots captured straight out of the Xcode Simulator, you want
        rotatable 3D device renders, you need Apple Watch or Apple TV sizes, you
        want your listing metadata translated alongside the images, or you would
        rather bring your own AI key and translate everything by machine. It is a
        well-built, actively developed app and the one-time price is clearly
        stated.
      </p>
      <p>
        Choose <strong>Screenshot Bro</strong> if you are not yet on macOS 26, if
        you want to work on iPad or iPhone as well as Mac, if you ship to Google
        Play and want to upload there from the same window, if you want 81 locale
        presets without buying an AI API key, if you need watermark-free exports
        before you pay anything, or if you want your project files as plain,
        publicly documented JSON. For the full factor-by-factor version, see{" "}
        <a href="/vs/butterkit">Screenshot Bro vs ButterKit</a>, and for the wider
        field see the{" "}
        <a href="/blog/best-app-store-screenshot-tools-for-mac">
          native Mac tools roundup
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
