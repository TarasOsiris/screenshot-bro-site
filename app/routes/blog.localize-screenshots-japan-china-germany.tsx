import type { Route } from "./+types/blog.localize-screenshots-japan-china-germany";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "localize-screenshots-japan-china-germany";

const MARKETS = [
  {
    market: "Japan (ja)",
    language: "Japanese",
    watch:
      "Dense information is expected and trusted; sparse Western-style layouts can read as lightweight. Mixed kanji/kana/Latin needs careful font and line-break handling.",
  },
  {
    market: "China (zh-Hans)",
    language: "Simplified Chinese",
    watch:
      "The China App Store is a separate storefront with its own rules. Short, high-contrast captions work well; avoid imagery or claims that could fail local review.",
  },
  {
    market: "Germany (de)",
    language: "German",
    watch:
      "German words run 30–40% longer than English. Captions that fit in English overflow or shrink; design with room to expand and test the longest strings.",
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
      ctaMessage="Localize captions per market with per-shape text overrides and export every language at once in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-localization-guide",
          label: "Screenshot localization guide",
          description: "the end-to-end localization workflow this builds on.",
        },
        {
          href: "/blog/localize-app-store-screenshots",
          label: "Localizing without losing your mind",
          description: "keep a multi-language set maintainable as it grows.",
        },
        {
          href: "/blog/app-store-optimization-aso-guide",
          label: "ASO guide",
          description: "localization is one of the biggest organic-growth levers.",
        },
      ]}
      faqs={[
        {
          question: "Is it worth localizing screenshots for specific markets?",
          answer:
            "Yes. Localized screenshots convert better in-market and open each storefront as its own ranking surface. Japan, China, and Germany are among the highest-value non-English App Store and Google Play markets, so they are usually first on the list after English.",
        },
        {
          question: "Why do German screenshots break my layout?",
          answer:
            "German text is typically 30–40% longer than the English equivalent, so captions that fit perfectly in English overflow, wrap, or auto-shrink in German. Design captions with extra horizontal room and test the longest translated strings before exporting.",
        },
        {
          question: "Is the China App Store different?",
          answer:
            "Yes. The mainland China App Store is a separate storefront with its own review standards and content expectations. Use Simplified Chinese, keep captions clear and concise, and avoid imagery or claims that could trigger local rejection.",
        },
        {
          question: "Should I translate the text inside the app screen too?",
          answer:
            "Ideally yes. Screenshots that show a translated UI feel native; screenshots with localized captions over an English UI feel half-done. Capture localized app screens where you can, then localize the caption layer on top.",
        },
      ]}
    >
      <p>
        Localizing screenshots is more than translating captions — each market
        has design conventions, text-length realities, and store rules that
        change what a converting screenshot looks like. This guide covers three
        of the highest-value markets to localize after English: Japan, China,
        and Germany. For the general workflow, start with the{" "}
        <a href="/blog/app-store-screenshot-localization-guide">
          screenshot localization guide
        </a>
        .
      </p>

      <h2>Market-Specific Notes</h2>
      <table>
        <thead>
          <tr>
            <th>Market</th>
            <th>Language</th>
            <th>What to watch</th>
          </tr>
        </thead>
        <tbody>
          {MARKETS.map((row) => (
            <tr key={row.market}>
              <td>{row.market}</td>
              <td>{row.language}</td>
              <td>{row.watch}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Japan: Density Is Trust</h2>
      <p>
        Japanese users are comfortable with — and often expect — information-rich
        layouts. A screenshot that feels almost too sparse by Western standards
        can read as lacking substance. Use clear typography that handles mixed
        kanji, kana, and Latin characters, mind line breaks (Japanese does not
        break on spaces), and choose a font that renders Japanese glyphs cleanly
        at small sizes.
      </p>

      <h2>China: A Separate Store with Its Own Rules</h2>
      <p>
        The mainland China App Store is its own storefront with distinct review
        standards. Use Simplified Chinese, keep captions short and high-contrast,
        and steer clear of imagery, maps, or claims that could fail local review.
        Because the market is large and competitive, native-feeling, concise
        screenshots matter a lot for conversion.
      </p>

      <h2>Germany: Plan for Text Expansion</h2>
      <p>
        German is the classic text-expansion case: translations typically run 30
        to 40 percent longer than English. Captions sized for English will
        overflow, wrap awkwardly, or shrink to stay on one line. Design German
        captions with extra horizontal space, prefer shorter source phrasing, and
        always preview the longest translated strings before exporting.
      </p>

      <h2>Make It Maintainable</h2>
      <p>
        The practical risk with per-market screenshots is maintenance: every new
        feature multiplies across languages and devices. Keep one base design and
        apply per-locale text overrides rather than maintaining separate files
        per language, so a layout change propagates everywhere at once. The{" "}
        <a href="/blog/localize-app-store-screenshots">
          maintainable-localization guide
        </a>{" "}
        covers this in depth, and localization remains one of the strongest
        organic-growth levers in the{" "}
        <a href="/blog/app-store-optimization-aso-guide">ASO guide</a>.
      </p>
    </BlogArticleShell>
  );
}
