import type { Route } from "./+types/blog.best-app-screenshot-localization-tools";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

const SLUG = "best-app-screenshot-localization-tools";

const TOOLS = [
  {
    tool: "AppScreens",
    languages: "80+ languages on paid plans",
    translation: "Built-in caption translation",
    perLocaleEdits: "Yes",
    upload: "Automatic store upload on paid plans",
  },
  {
    tool: "Screenshot Studio",
    languages: "Any language via AI translation",
    translation: "Built in, no API key",
    perLocaleEdits: "Review and edit per locale",
    upload: "Direct App Store Connect upload",
  },
  {
    tool: "Screenshot Bro",
    languages: "81 presets plus custom locale codes",
    translation: "On-device auto-translate",
    perLocaleEdits: "Per-shape text, position, and image overrides",
    upload: "Direct App Store Connect and Google Play upload, free tier included",
  },
  {
    tool: "Screenshots Pro",
    languages: "Store-supported languages",
    translation: "Auto-translate on paid plans",
    perLocaleEdits: "Yes",
    upload: "Export files, upload yourself",
  },
  {
    tool: "Fastlane frameit",
    languages: "Whatever you write",
    translation: "None — you supply the strings",
    perLocaleEdits: "Per-locale .strings files",
    upload: "Yes, via fastlane deliver",
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
      tldr="For the widest language coverage, AppScreens (80+ languages) and Screenshot Studio (AI translation into any language) lead. Screenshot Bro covers 81 presets plus custom codes, with on-device translation for the languages Apple supports and per-shape overrides. Fastlane frameit localizes from .strings files if you already have translations."
      ctaMessage="Design once, ship in every language — 81 locales with on-device auto-translate. Try Screenshot Bro free."
      ctaHomeLinkLabel="App Store screenshot tool with built-in localization"
      seoLinks={[
        {
          href: "/blog/localize-app-store-screenshots",
          label: "Localize App Store screenshots",
          description: "the workflow itself, tool-agnostic.",
        },
        {
          href: "/blog/localize-screenshots-japan-china-germany",
          label: "Japan, China, Germany",
          description: "what breaks in CJK and long-word languages.",
        },
        {
          href: "/blog/app-store-screenshot-localization-guide",
          label: "Localization guide",
          description: "planning copy that survives translation.",
        },
      ]}
      faqs={[
        {
          question: "What is the best tool for localizing App Store screenshots?",
          answer:
            "It depends on how many markets you ship to. AppScreens advertises 80+ languages on paid plans and Screenshot Studio translates into any language with built-in AI, so both suit very wide rollouts. Screenshot Bro covers 81 language presets plus custom locale codes, with on-device auto-translate for the languages Apple's Translation framework supports and per-shape overrides, which fits most listings. If you already have translated strings, Fastlane frameit renders them for free.",
        },
        {
          question: "Do I need to translate App Store screenshots at all?",
          answer:
            "Not for every market, but screenshot text is the first thing a browsing user reads, and Apple shows localized listings by device language. Translating the three or four headline phrases for your biggest non-English markets is usually the highest-return localization work you can do — far cheaper than translating the app itself.",
        },
        {
          question: "What does per-locale override mean?",
          answer:
            "It means changing one element for one language without duplicating the whole design: a shorter German headline, a repositioned label for Japanese, or a different in-app screenshot for a market with different content. Layout, colours, and images stay shared, so a design fix applies everywhere at once.",
        },
      ]}
    >
      <p>
        Localizing screenshots is where a store listing gets expensive: the same
        design, ten times, with copy nobody on the team can proofread. This
        roundup compares{" "}
        <strong>the best app screenshot localization tools</strong> on the parts
        that actually matter — language coverage, whether translation is built
        in, how per-locale edits work, and whether the tool uploads the result.
      </p>
      <p>
        Details were checked in August 2026 against each tool&apos;s own site and
        documentation; pricing and features change, so verify before deciding.
      </p>

      <h2>What To Look For</h2>
      <ul>
        <li>
          <strong>Coverage:</strong> how many locales are preset, and can you add
          your own codes?
        </li>
        <li>
          <strong>Translation:</strong> built in, or do you paste in strings from
          elsewhere?
        </li>
        <li>
          <strong>Overrides:</strong> can one locale differ without duplicating
          the design?
        </li>
        <li>
          <strong>Export shape:</strong> are files organized per locale in a form
          App Store Connect accepts?
        </li>
      </ul>

      <h2>The Options</h2>

      <h3>AppScreens — widest language list</h3>
      <p>
        A browser tool advertising localization and caption translation into 80+
        languages on paid plans, along with automatic store upload and support
        for several storefronts. Its free plan is limited (5 screenshots, 1 saved
        project) and shows a watermark in the designer once Pro features are
        used. The most sensible pick if you ship into more markets than any
        preset list covers. See the{" "}
        <a href="/blog/appscreens-alternative">AppScreens comparison</a>.
      </p>

      <h3>Screenshot Studio — AI translation, any language</h3>
      <p>
        A native Mac and iOS app with built-in AI translation that needs no API
        key, per-locale review and editing, and direct App Store Connect upload
        in the right order for every platform and locale. All features are free
        to try, with payment required to export. See the{" "}
        <a href="/blog/screenshot-studio-alternative">Screenshot Studio comparison</a>.
      </p>

      <h3>Screenshot Bro — 81 presets, on-device, override anything</h3>
      <p>
        A native Mac, iPad and iPhone app with 81 language presets plus custom locale
        codes. Auto-translate fills missing copy on-device, translation progress
        is tracked per locale, and any shape can carry a per-locale override for
        text, position, size, or image — so a long German headline moves without
        forking the design. Exports land in locale folders App Store Connect
        picks up directly, and Pro uploads them for you. Localization is
        available on the free tier too.
      </p>

      <h3>Screenshots Pro — auto-translate plus an API</h3>
      <p>
        A browser tool that auto-translates into store-supported languages on its
        paid plans, with a REST API on the top tier for regenerating localized
        sets from CI. See the{" "}
        <a href="/blog/screenshots-pro-alternative">Screenshots Pro comparison</a>.
      </p>

      <h3>Fastlane frameit — free, if you already have the strings</h3>
      <p>
        Open source and free: put a title per locale in .strings files and
        frameit renders framed, localized screenshots, which fastlane deliver
        then uploads. No translation is included — you supply it — and design
        control is limited. Details in{" "}
        <a href="/vs/fastlane-snapshot">Fastlane snapshot vs Screenshot Bro</a>.
      </p>

      <h2>Comparison Table</h2>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Languages</th>
            <th>Translation</th>
            <th>Per-locale edits</th>
            <th>Store upload</th>
          </tr>
        </thead>
        <tbody>
          {TOOLS.map((row) => (
            <tr key={row.tool}>
              <td>{row.tool}</td>
              <td>{row.languages}</td>
              <td>{row.translation}</td>
              <td>{row.perLocaleEdits}</td>
              <td>{row.upload}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>The Short Version</h2>
      <p>
        Machine translation into every market: <strong>AppScreens</strong> or{" "}
        <strong>Screenshot Studio</strong>. A normal multi-market listing on a
        Mac, with overrides and no watermark: <strong>Screenshot Bro</strong>.
        Screenshots generated by a pipeline: <strong>Screenshots Pro</strong> or{" "}
        <strong>Fastlane</strong>. Whichever you pick, read{" "}
        <a href="/blog/localize-screenshots-japan-china-germany">
          what breaks in Japanese, Chinese, and German
        </a>{" "}
        before you translate — layout, not vocabulary, is what usually fails.
      </p>
    </BlogArticleShell>
  );
}
