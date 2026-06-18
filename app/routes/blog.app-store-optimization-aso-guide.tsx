import type { Route } from "./+types/blog.app-store-optimization-aso-guide";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-optimization-aso-guide";

const ASO_LEVERS = [
  {
    lever: "App name",
    affects: "Discoverability",
    detail:
      "Your strongest ranking signal. Combine your brand with one or two high-intent keywords, within the 30-character limit.",
  },
  {
    lever: "Subtitle",
    affects: "Discoverability + conversion",
    detail:
      "30 characters that both rank and persuade. State the core benefit using words real users search.",
  },
  {
    lever: "Keyword field (iOS)",
    affects: "Discoverability",
    detail:
      "100 hidden characters. No spaces, no repeats, no competitor names. Use single keywords; Apple combines them.",
  },
  {
    lever: "Icon",
    affects: "Conversion",
    detail:
      "The first thing users judge in search results. Simple, legible at small sizes, distinct from competitors.",
  },
  {
    lever: "Screenshots",
    affects: "Conversion",
    detail:
      "The biggest conversion lever after the icon. The first one to three carry most of the weight.",
  },
  {
    lever: "App preview",
    affects: "Conversion",
    detail:
      "A 15–30s video that autoplays. Strong poster frame, core job in the first seconds.",
  },
  {
    lever: "Ratings & reviews",
    affects: "Discoverability + conversion",
    detail:
      "Volume and average both influence ranking and trust. Prompt at moments of success.",
  },
] as const;

export async function loader() {
  return { locale: "en" as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches, "en");

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <BlogArticleShell
      slug={SLUG}
      locale={locale}
      ctaMessage="Most ASO wins live in your screenshots. Design, localize, and A/B-test them faster in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/screenshots-that-convert",
          label: "Screenshots that convert",
          description: "turn the conversion half of ASO into a concrete screenshot sequence.",
        },
        {
          href: "/blog/app-store-screenshot-copywriting-examples",
          label: "Screenshot caption examples",
          description: "write captions that reinforce your keyword promise.",
        },
        {
          href: "/blog/app-store-screenshot-localization-guide",
          label: "Screenshot localization guide",
          description: "extend ASO into every market you ship to.",
        },
        {
          href: "/blog/ab-test-app-store-screenshots",
          label: "A/B test your screenshots",
          description: "measure conversion changes instead of guessing.",
        },
        {
          href: "/blog/custom-product-pages-app-store-screenshots",
          label: "Custom product pages",
          description: "tailor screenshots per campaign and audience.",
        },
      ]}
      faqs={[
        {
          question: "What is ASO?",
          answer:
            "App Store Optimization (ASO) is the practice of improving how an app ranks and converts on the App Store and Google Play. It has two halves: discoverability (getting found in search and browse) and conversion (turning a listing visit into an install).",
        },
        {
          question: "Do screenshots affect App Store ranking?",
          answer:
            "Not directly. Apple's search ranking comes from text fields like app name, subtitle, keyword field, and ratings. Screenshots affect conversion after a user reaches your listing — but higher conversion can indirectly help ranking because the App Store rewards listings that convert.",
        },
        {
          question: "How is ASO different on Google Play?",
          answer:
            "Google Play indexes your full long description, so natural keyword usage in the description matters more than on iOS, which uses a hidden keyword field. Google Play also weighs install and retention signals. Visual assets and ratings matter on both stores.",
        },
        {
          question: "What should an indie developer do first?",
          answer:
            "Fix the cheapest high-impact levers first: a clear app name and subtitle with real search terms, a legible icon, and a screenshot set whose first three images sell the core benefit. Then localize and A/B test once the basics convert.",
        },
      ]}
    >
      <p>
        App Store Optimization (ASO) is how indie developers get found and chosen
        without an ad budget. It is the organic-discovery equivalent of SEO: the
        right text fields help your app rank, and the right visuals turn that
        traffic into installs. This 2026 guide walks the levers in priority
        order and links to deeper guides for each one.
      </p>

      <h2>ASO Has Two Halves: Discoverability and Conversion</h2>
      <p>
        Keep these separate in your head, because they use different levers.
        <strong> Discoverability</strong> decides whether your app appears when
        someone searches or browses — driven mostly by your app name, subtitle,
        keyword field, ratings, and (on Google Play) your description.
        <strong> Conversion</strong> decides whether a visitor installs — driven
        by your icon, screenshots, app preview, ratings, and description. Apple
        is explicit that searchability comes from the text fields, not the
        screenshots, so spend your text budget on discoverability and your
        design budget on conversion.
      </p>

      <h2>The ASO Levers, in Priority Order</h2>
      <table>
        <thead>
          <tr>
            <th>Lever</th>
            <th>Mostly affects</th>
            <th>How to use it</th>
          </tr>
        </thead>
        <tbody>
          {ASO_LEVERS.map((row) => (
            <tr key={row.lever}>
              <td>{row.lever}</td>
              <td>{row.affects}</td>
              <td>{row.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Text Factors (Discoverability)</h2>
      <p>
        On iOS, the app name (30 chars) and subtitle (30 chars) are your highest-
        value keyword real estate, backed by a hidden 100-character keyword
        field. Use single keywords in that field — no spaces, no duplication, no
        competitor brand names — and let Apple combine them. On Google Play,
        there is no hidden keyword field: your title, short description, and full
        long description are indexed, so write the description in natural
        language that repeats your core terms without stuffing.
      </p>

      <h2>Visual Factors (Conversion)</h2>
      <p>
        After someone finds your listing, the icon and the first screenshots do
        the selling. The icon must be legible at search-result size; the first
        one to three screenshots should make your core benefit obvious before
        the user scrolls. An app preview video, when present, autoplays and can
        replace your leading screenshots — so its poster frame matters as much
        as a screenshot. This is where most indie ASO gains actually come from,
        because the text fields plateau quickly while screenshot quality has a
        wide range.
      </p>
      <p>
        Deeper dives:{" "}
        <a href="/blog/screenshots-that-convert">screenshots that convert</a>,{" "}
        <a href="/blog/app-store-screenshot-order">screenshot order</a>, and{" "}
        <a href="/blog/app-store-screenshot-copywriting-examples">
          caption examples
        </a>
        .
      </p>

      <h2>Localization</h2>
      <p>
        Localizing your metadata and screenshots opens each App Store and Google
        Play storefront as its own ranking surface. Translating the keyword
        field and subtitle can surface your app for searches you never ranked
        for in English, and localized screenshots convert better in-market. Even
        a few high-value locales can meaningfully grow organic installs. See the{" "}
        <a href="/blog/app-store-screenshot-localization-guide">
          screenshot localization guide
        </a>
        .
      </p>

      <h2>Ratings, Reviews, and Testing</h2>
      <p>
        Ratings influence both ranking and trust. Prompt for a rating at a
        moment of success in the app, respond to reviews, and never buy fake
        ones. Once the basics convert, stop guessing: run A/B tests on your
        screenshots and use custom product pages to tailor the listing to
        specific campaigns and audiences. Measure conversion changes rather than
        assuming a redesign helped.
      </p>

      <h2>A 2026 ASO Checklist</h2>
      <ol>
        <li>App name combines brand + one or two real search terms (≤30 chars).</li>
        <li>Subtitle states the core benefit and adds keywords (≤30 chars).</li>
        <li>iOS keyword field uses single, non-duplicated, comma-separated terms.</li>
        <li>Google Play description uses natural keyword language, no stuffing.</li>
        <li>Icon is legible and distinct at small sizes.</li>
        <li>First three screenshots sell the core benefit before scrolling.</li>
        <li>App preview (if used) has a strong, self-explanatory poster frame.</li>
        <li>Top markets are localized (metadata + screenshots).</li>
        <li>Ratings prompts fire at success moments; reviews get responses.</li>
        <li>Screenshots are A/B tested; custom product pages match campaigns.</li>
      </ol>
      <p>
        Source check: Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/app-store/product-page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          product page guidance
        </a>{" "}
        and{" "}
        <a
          href="https://developer.apple.com/app-store/search/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store search documentation
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
