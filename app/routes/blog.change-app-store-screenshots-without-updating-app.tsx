import type { Route } from "./+types/blog.change-app-store-screenshots-without-updating-app";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "change-app-store-screenshots-without-updating-app";

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
      ctaMessage="Refreshing your screenshots? Redesign the whole set and re-export every size in minutes with Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/upload-screenshots-to-app-store-connect",
          label: "Upload to App Store Connect",
          description: "the upload step for your refreshed screenshots.",
        },
        {
          href: "/blog/custom-product-pages-app-store-screenshots",
          label: "Custom product pages",
          description: "add alternate screenshot sets without touching the default.",
        },
        {
          href: "/blog/ab-test-app-store-screenshots",
          label: "A/B test screenshots",
          description: "test a new set before rolling it out everywhere.",
        },
      ]}
      faqs={[
        {
          question: "Can I change App Store screenshots without submitting an app update?",
          answer:
            "It depends on the version's state. While a version is in 'Prepare for Submission,' you can edit its screenshots freely. For a version already approved and live, screenshots are tied to that version — to change them you create a new version and submit it for review, even if the binary is unchanged. Custom product pages are the exception: their screenshots are reviewed separately from the default listing.",
        },
        {
          question: "Can I change Google Play screenshots without a new app release?",
          answer:
            "Yes. On Google Play, the store listing (including screenshots) is managed independently of your app binary. You can update screenshots any time, and the listing change goes through its own review without publishing a new app version.",
        },
        {
          question: "Do screenshot changes go through review?",
          answer:
            "On iOS, screenshots attached to a version are reviewed with that version, and custom product pages are reviewed on their own. On Google Play, store-listing changes are reviewed independently of app releases. Either way, expect a review step before changes go live.",
        },
        {
          question: "Will changing screenshots reset my reviews or ranking?",
          answer:
            "No. Updating screenshots does not reset your ratings, reviews, or search ranking. It is one of the safest listing changes you can make, which is why screenshot iteration is a core ASO tactic.",
        },
      ]}
    >
      <p>
        &quot;Can I change my screenshots without shipping an app update?&quot; is one of
        the most common store-listing questions — and the answer is different on
        each store. This guide explains exactly when you can swap screenshots
        without a new binary, and how to do it cleanly.
      </p>

      <h2>The Short Answer</h2>
      <ul>
        <li>
          <strong>Google Play:</strong> Yes. The store listing is independent of
          the app binary — change screenshots any time; the listing change is
          reviewed on its own.
        </li>
        <li>
          <strong>App Store:</strong> Partly. Screenshots are tied to an app
          version. You can edit them freely before that version is submitted, but
          changing a live app&apos;s screenshots means creating a new version and
          submitting it for review — even if the build does not change. Custom
          product pages are the workaround for alternate sets.
        </li>
      </ul>

      <h2>App Store: How Screenshots Tie to a Version</h2>
      <p>
        On iOS, each app version carries its own metadata, including screenshots.
        While a version sits in &quot;Prepare for Submission,&quot; you can change its
        screenshots as often as you like at no cost. Once that version is live,
        its screenshots are locked to it; to replace them you start a new version
        in App Store Connect and submit it for review. The binary can be
        identical — you are submitting a metadata change — but it still goes
        through review.
      </p>
      <p>
        If you need alternate screenshot sets without touching the default
        listing, use{" "}
        <a href="/blog/custom-product-pages-app-store-screenshots">
          custom product pages
        </a>
        , which let you publish up to many variants that are reviewed separately
        and targeted by link.
      </p>

      <h2>Google Play: Listing Is Independent of the Binary</h2>
      <p>
        Google Play separates the store listing from app releases. Open your
        listing, replace the screenshots, and save — the change is reviewed as a
        listing update, not an app release, so you do not ship a new bundle. This
        makes Play screenshots especially easy to iterate.
      </p>

      <h2>How to Refresh Screenshots Cleanly</h2>
      <ol>
        <li>
          <strong>Redesign the full set</strong> at the correct sizes for each
          device, keeping them consistent.
        </li>
        <li>
          <strong>Export every required size</strong> (and locale) so no slot is
          left mismatched.
        </li>
        <li>
          <strong>Upload</strong> via App Store Connect (new version or custom
          product page) or the Play store listing — see the{" "}
          <a href="/blog/upload-screenshots-to-app-store-connect">upload guide</a>
          .
        </li>
        <li>
          <strong>Consider testing first</strong> with an{" "}
          <a href="/blog/ab-test-app-store-screenshots">A/B test</a> before rolling
          a new set everywhere.
        </li>
      </ol>

      <p>
        Source check: Apple&apos;s App Store Connect help on managing versions and
        custom product pages, and Google Play&apos;s store-listing documentation.
      </p>
    </BlogArticleShell>
  );
}
