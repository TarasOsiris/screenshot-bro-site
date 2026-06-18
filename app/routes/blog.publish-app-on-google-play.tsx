import type { Route } from "./+types/blog.publish-app-on-google-play";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "publish-app-on-google-play";

const STEPS = [
  {
    step: "1. Create a Play Console account",
    detail:
      "Register a Google Play Developer account with a one-time $25 fee. Personal accounts created recently must also complete identity verification.",
  },
  {
    step: "2. Create the app",
    detail:
      "Add a new app in Play Console: default language, app name (30 chars), app vs game, free vs paid.",
  },
  {
    step: "3. Complete the store listing",
    detail:
      "Add the short description (80 chars), full description (4000 chars), app icon (512×512), feature graphic (1024×500), and phone screenshots (2–8).",
  },
  {
    step: "4. Fill the policy declarations",
    detail:
      "Complete the content rating questionnaire, target audience, Data safety form, ads declaration, and privacy policy URL.",
  },
  {
    step: "5. Upload the build and roll out",
    detail:
      "Upload an Android App Bundle (.aab), set countries and pricing, then submit a production (or testing) release for review.",
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
      ctaMessage="Get the Play listing graphics right the first time — icon, feature graphic, and screenshots — in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/google-play-store-listing-graphics-checklist",
          label: "Google Play graphics checklist",
          description: "every visual asset the store listing step requires.",
        },
        {
          href: "/blog/google-play-screenshot-sizes-requirements",
          label: "Google Play screenshot requirements",
          description: "exact sizes for the screenshots you upload.",
        },
        {
          href: "/blog/google-play-screenshot-rejected-fix",
          label: "Why Play screenshots get rejected",
          description: "avoid the listing problems that delay review.",
        },
      ]}
      faqs={[
        {
          question: "How much does it cost to publish on Google Play?",
          answer:
            "Google charges a one-time $25 registration fee for a Play Developer account — unlike Apple's $99 annual fee. After that, publishing apps is free; Google takes a service fee only on paid apps and in-app purchases.",
        },
        {
          question: "How long does Google Play review take?",
          answer:
            "Review commonly takes a few days, and longer for brand-new developer accounts. Plan for several days on a first submission rather than the same-day turnaround you might expect.",
        },
        {
          question: "Do new Play developer accounts need to run a test first?",
          answer:
            "Recent Google Play policy requires many new personal developer accounts to run a closed test with a minimum number of testers for a set period before they can apply for production access. Check the current Play Console requirements, because this policy changes.",
        },
        {
          question: "APK or AAB?",
          answer:
            "Google Play requires the Android App Bundle (.aab) format for new apps, not a raw APK. Play generates optimized APKs per device from your bundle.",
        },
      ]}
    >
      <p>
        Publishing on Google Play follows a different path from the App Store —
        a one-time fee instead of an annual one, an App Bundle instead of an
        archive, and a heavier set of policy declarations. This 2026
        step-by-step walks the full path from a Play Console account to a
        production release.
      </p>

      <h2>The Publishing Steps</h2>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>What you do</th>
          </tr>
        </thead>
        <tbody>
          {STEPS.map((row) => (
            <tr key={row.step}>
              <td>{row.step}</td>
              <td>{row.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Where Play Differs from the App Store</h2>
      <ul>
        <li>
          <strong>Fee:</strong> a one-time $25 vs Apple&apos;s $99/year.
        </li>
        <li>
          <strong>Build format:</strong> Android App Bundle (.aab), not an
          archive or APK.
        </li>
        <li>
          <strong>Policy forms:</strong> Play requires a Data safety form,
          content rating questionnaire, target-audience declaration, and ads
          declaration before you can publish.
        </li>
        <li>
          <strong>Indexed description:</strong> unlike iOS, Google indexes your
          full description, so keywords in the listing copy matter for ranking.
        </li>
        <li>
          <strong>Testing gate:</strong> new personal accounts may need to run a
          closed test before production access.
        </li>
      </ul>

      <h2>The Listing Assets You Must Prepare</h2>
      <p>
        Google Play blocks publishing until the store listing is complete. You
        need a 512×512 icon, a 1024×500 feature graphic, and at least two phone
        screenshots (up to eight). Get these right before you start the release
        flow so the listing step is a quick upload — see the{" "}
        <a href="/blog/google-play-store-listing-graphics-checklist">
          Play graphics checklist
        </a>{" "}
        and{" "}
        <a href="/blog/google-play-screenshot-sizes-requirements">
          screenshot requirements
        </a>
        .
      </p>

      <h2>After You Submit</h2>
      <p>
        Once your production release is submitted, Google reviews it — usually a
        few days, longer for new accounts. Unlike the App Store, you can edit the
        Play store listing (including screenshots) independently of app releases
        later. If the app is rejected, Play cites the specific policy; fix it and
        resubmit.
      </p>

      <p>
        Source check: Google&apos;s{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9859152"
          target="_blank"
          rel="noopener noreferrer"
        >
          prepare and roll out a release
        </a>{" "}
        and{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9866151"
          target="_blank"
          rel="noopener noreferrer"
        >
          store listing requirements
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
