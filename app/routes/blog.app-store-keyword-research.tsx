import type { Route } from "./+types/blog.app-store-keyword-research";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-keyword-research";

const RULES = [
  {
    rule: "No spaces after commas",
    why: "Spaces waste characters. Use word,word,word to fit more terms in 100 characters.",
  },
  {
    rule: "Don't repeat words",
    why: "Apple combines your keyword field with the name and subtitle, so repeats are wasted.",
  },
  {
    rule: "Use singulars, skip plurals",
    why: "Apple stems words, so 'timer' generally covers 'timers'. Spend characters on new terms.",
  },
  {
    rule: "Skip your app name and category",
    why: "Apple already indexes these. Don't spend the keyword field on words you already rank for.",
  },
  {
    rule: "No competitor or trademarked names",
    why: "Using another brand's name risks rejection and rarely helps ranking.",
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
      ctaMessage="Keywords get users to your listing; screenshots convert them. Design both to tell one story in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/app-store-optimization-aso-guide",
          label: "ASO guide",
          description: "the full picture keyword research is one part of.",
        },
        {
          href: "/blog/app-store-description-that-converts",
          label: "Write a description that converts",
          description: "where keywords matter on Google Play but not iOS.",
        },
        {
          href: "/blog/app-store-screenshot-localization-guide",
          label: "Screenshot localization guide",
          description: "localize the keyword field per storefront to rank in more markets.",
        },
      ]}
      faqs={[
        {
          question: "How does the App Store keyword field work?",
          answer:
            "iOS gives you a hidden 100-character keyword field, separate from the visible description. You enter single words separated by commas with no spaces. Apple combines these with your app name and subtitle to decide which searches you appear for.",
        },
        {
          question: "Should I use plurals in the keyword field?",
          answer:
            "Usually not. Apple stems words, so the singular form generally covers the plural. Spend the limited 100 characters on additional distinct terms instead of both singular and plural versions of the same word.",
        },
        {
          question: "Does Google Play have a keyword field?",
          answer:
            "No. Google Play has no hidden keyword field — it indexes your title, short description, and full description. So on Play, keyword research feeds your visible copy; on iOS, it feeds the hidden keyword field.",
        },
        {
          question: "Can I use competitor names as keywords?",
          answer:
            "Avoid it. Apple's guidelines prohibit using trademarked terms and other brands' names, and doing so can get your app rejected. Focus on the words real users type to describe the problem your app solves.",
        },
      ]}
    >
      <p>
        Keyword research is how your app gets found in search — the discovery
        half of ASO. On iOS it feeds a hidden 100-character keyword field; on
        Google Play it feeds your visible, indexed description. This guide covers
        how to find the right terms and the rules for using the iOS keyword field
        efficiently.
      </p>

      <h2>How the iOS Keyword Field Works</h2>
      <p>
        Apple gives you a private 100-character keyword field that users never
        see. You enter single words separated by commas, and Apple combines them
        with your app name and subtitle to build the set of searches you can rank
        for. Because the field is small, every character counts — the rules below
        are about not wasting any.
      </p>
      <table>
        <thead>
          <tr>
            <th>Rule</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          {RULES.map((row) => (
            <tr key={row.rule}>
              <td>{row.rule}</td>
              <td>{row.why}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Finding the Right Keywords</h2>
      <ol>
        <li>
          <strong>Start from the job:</strong> list the words a user types when
          they have the problem your app solves, not your internal feature names.
        </li>
        <li>
          <strong>Study competitors:</strong> read the names and subtitles of
          the top apps for those searches to see which terms they target.
        </li>
        <li>
          <strong>Check volume vs difficulty:</strong> a mid-volume term you can
          actually rank for beats a head term dominated by giants.
        </li>
        <li>
          <strong>Mine your own data:</strong> App Store Connect search terms and
          user reviews reveal the language people actually use.
        </li>
      </ol>

      <h2>Where to Put Them</h2>
      <p>
        Your strongest terms belong in the app name and subtitle, which carry the
        most ranking weight; secondary terms go in the keyword field. On Google
        Play there is no keyword field, so the same research goes into your{" "}
        <a href="/blog/app-store-description-that-converts">
          short and full description
        </a>{" "}
        in natural language.
      </p>

      <h2>Localize to Rank in More Markets</h2>
      <p>
        The keyword field is per-localization. Translating it (and your subtitle)
        opens each storefront as a separate ranking surface and can surface your
        app for searches you never ranked for in English. Combined with{" "}
        <a href="/blog/app-store-screenshot-localization-guide">
          localized screenshots
        </a>
        , it is one of the highest-leverage organic-growth moves an indie can
        make.
      </p>

      <p>
        Source check: Apple&apos;s{" "}
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
