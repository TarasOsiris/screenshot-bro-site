import type { Route } from "./+types/blog.app-store-description-that-converts";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-description-that-converts";

const FIELDS = [
  {
    field: "App Store promotional text",
    limit: "170 characters",
    role: "Editable any time without review. Use it for timely hooks, offers, and what's new.",
  },
  {
    field: "App Store description",
    limit: "4000 characters",
    role: "First ~3 lines show before 'more'. Does not affect iOS search ranking; it sells once the user is reading.",
  },
  {
    field: "Google Play short description",
    limit: "80 characters",
    role: "Shown near the top of the listing and indexed for search. Make it a clear, keyword-aware hook.",
  },
  {
    field: "Google Play full description",
    limit: "4000 characters",
    role: "Indexed for ranking. Use natural keyword language; it influences both discovery and conversion.",
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
      ctaMessage="Your description sets the promise; your screenshots prove it. Design screenshots that match your copy in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/app-store-optimization-aso-guide",
          label: "ASO guide",
          description: "where the description fits in the full optimization picture.",
        },
        {
          href: "/blog/app-store-keyword-research",
          label: "Keyword research",
          description: "find the terms your description and keyword field should target.",
        },
        {
          href: "/blog/app-store-screenshot-copywriting-examples",
          label: "Screenshot caption examples",
          description: "carry the same promise into your screenshot text.",
        },
      ]}
      faqs={[
        {
          question: "Does the App Store description affect ranking?",
          answer:
            "No. Apple's iOS search ranking comes from the app name, subtitle, and the hidden keyword field — not the description. The description's job is conversion: it persuades users who are already reading. On Google Play, the opposite is true: the full description is indexed and does affect ranking.",
        },
        {
          question: "How long should an app description be?",
          answer:
            "Both stores allow 4000 characters, but length is not the goal. The first three lines (before the 'more' link) do most of the work, so front-load the core benefit and let the rest support it for readers who keep going.",
        },
        {
          question: "What is promotional text on the App Store?",
          answer:
            "Promotional text is a 170-character field that sits above the description and can be updated any time without submitting a new app version. Use it for limited-time offers, seasonal hooks, or recent highlights you want to change frequently.",
        },
        {
          question: "Should the description repeat my keywords?",
          answer:
            "On Google Play, yes — naturally, since the text is indexed. On iOS, repeating keywords in the description does not help ranking, so write it purely for the human reader and put your keyword work in the dedicated keyword field.",
        },
      ]}
    >
      <p>
        Your store description is the one place a curious user reads in their own
        words why your app is worth installing. The catch: it works differently
        on each store. On iOS it is pure persuasion and does not affect ranking;
        on Google Play it is indexed and influences both discovery and
        conversion. This guide covers how to write one that converts on both.
      </p>

      <h2>Know What Each Field Does</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Limit</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {FIELDS.map((row) => (
            <tr key={row.field}>
              <td>{row.field}</td>
              <td>{row.limit}</td>
              <td>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Front-Load the First Three Lines</h2>
      <p>
        Both stores collapse the description after about three lines behind a
        &quot;more&quot; link. Most users never expand it. Treat those first lines as your
        elevator pitch: state the core benefit and who it is for in plain
        language, before any feature list. If the opening does not earn the tap,
        the remaining 3900 characters never get read.
      </p>

      <h2>Structure for Scanners</h2>
      <ol>
        <li>
          <strong>Hook</strong> — one or two lines on the core outcome.
        </li>
        <li>
          <strong>Proof</strong> — a short paragraph on how it works.
        </li>
        <li>
          <strong>Feature bullets</strong> — scannable, benefit-led lines.
        </li>
        <li>
          <strong>Social proof / credibility</strong> — awards, press, user
          counts.
        </li>
        <li>
          <strong>Close</strong> — a clear next step and any subscription terms.
        </li>
      </ol>

      <h2>iOS vs Google Play Copy Strategy</h2>
      <p>
        On iOS, write the description for humans only and put your keyword work
        in the{" "}
        <a href="/blog/app-store-keyword-research">100-character keyword field</a>
        . Use promotional text for anything you want to change often. On Google
        Play, weave your target terms into the short and full description
        naturally, because Google indexes both — but never keyword-stuff, which
        reads badly and risks policy issues.
      </p>

      <h2>Make Copy and Screenshots Agree</h2>
      <p>
        The description sets a promise; the screenshots have to prove it. If your
        copy leads with speed but your screenshots show a cluttered settings
        screen, the listing contradicts itself. Decide the one benefit the
        listing is selling, then make sure the opening line, the first
        screenshots, and the{" "}
        <a href="/blog/app-store-screenshot-copywriting-examples">
          screenshot captions
        </a>{" "}
        all reinforce it.
      </p>

      <p>
        Source check: Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/"
          target="_blank"
          rel="noopener noreferrer"
        >
          app information reference
        </a>{" "}
        and Google&apos;s store listing guidance.
      </p>
    </BlogArticleShell>
  );
}
