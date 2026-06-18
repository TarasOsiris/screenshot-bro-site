import type { Route } from "./+types/blog.submit-app-to-app-store";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "submit-app-to-app-store";

const STEPS = [
  {
    step: "1. Enroll and set up",
    detail:
      "Join the Apple Developer Program ($99/year), accept agreements, and set up banking and tax info in App Store Connect if your app earns money.",
  },
  {
    step: "2. Create the App Store Connect record",
    detail:
      "Add a new app with its name, primary language, bundle ID, and SKU. Reserve the name early — names must be unique.",
  },
  {
    step: "3. Archive and upload the build",
    detail:
      "In Xcode, set your version and build number, archive (Product → Archive), and upload to App Store Connect, or use a CI pipeline.",
  },
  {
    step: "4. Fill in metadata and assets",
    detail:
      "Add description, keywords, subtitle, support URL, age rating, category, screenshots, and (optionally) an app preview for each device and localization.",
  },
  {
    step: "5. Submit for review",
    detail:
      "Attach the build, set pricing and availability, answer the export-compliance and content questions, and submit. Review typically takes about 24–48 hours.",
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
      ctaMessage="The screenshots step is where most submissions stall. Design and upload them for every device in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/upload-screenshots-to-app-store-connect",
          label: "Upload screenshots to App Store Connect",
          description: "the detailed how-to for the assets step of submission.",
        },
        {
          href: "/blog/app-store-screenshots-rejected-fix",
          label: "Why screenshots get rejected",
          description: "avoid the metadata problems that delay review.",
        },
        {
          href: "/blog/app-store-optimization-aso-guide",
          label: "ASO guide",
          description: "optimize the listing you are about to submit.",
        },
      ]}
      faqs={[
        {
          question: "How long does App Store review take?",
          answer:
            "Apple reviews most submissions within about 24 to 48 hours, though it can be faster or slower depending on the app and time of year. You can request expedited review for time-critical fixes.",
        },
        {
          question: "What do I need before I can submit an app?",
          answer:
            "An Apple Developer Program membership, a finished build uploaded from Xcode, a unique app name, complete metadata, an icon, at least one screenshot for the largest iPhone and iPad you support, and your pricing and availability settings.",
        },
        {
          question: "Why do apps get rejected?",
          answer:
            "Common reasons include crashes and bugs, incomplete metadata or screenshots, broken sign-in or demo accounts, privacy or data-collection issues, and screenshots that do not match the actual app. Most are fixable on resubmission.",
        },
        {
          question: "Can I release the app immediately after approval?",
          answer:
            "You can choose to release automatically on approval, release manually, or schedule a date. Manual release is useful when you want to coordinate a launch with marketing.",
        },
      ]}
    >
      <p>
        Submitting an app to the App Store is a checklist, not a mystery — but
        the first time through, it is easy to get blocked on a missing
        agreement, an incomplete build, or screenshots that do not meet spec.
        This 2026 step-by-step covers the full path from developer account to a
        submitted build.
      </p>

      <h2>The Submission Steps</h2>
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

      <h2>Before You Start</h2>
      <p>
        You need an active Apple Developer Program membership and a build that
        runs cleanly on current devices. Decide your bundle ID and app name
        early, since both must be unique across the store. If your app makes
        money, complete the banking, tax, and paid-apps agreements first —
        unsigned agreements silently block submission.
      </p>

      <h2>Where Submissions Get Stuck</h2>
      <p>
        Two steps cause most delays. First, the <strong>build</strong>: an
        archive that fails export compliance questions or has a mismatched
        version/build number will not attach. Second, the{" "}
        <strong>assets</strong>: you must provide an icon and at least one
        screenshot for the largest iPhone and iPad you support, at exact pixel
        sizes, with no alpha channel. Getting the screenshots right ahead of
        time turns the longest step into a quick upload — see the{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          upload guide
        </a>{" "}
        and{" "}
        <a href="/blog/app-store-screenshots-rejected-fix">
          rejection fixes
        </a>
        .
      </p>

      <h2>After You Submit</h2>
      <p>
        Review usually completes in about a day or two. If approved, your app
        releases automatically, manually, or on a date you schedule. If
        rejected, Apple cites the specific guideline in Resolution Center; fix
        the issue and resubmit — most rejections are quick to resolve. Once
        live, your icon and screenshots do the work of turning store visitors
        into installs, so it is worth optimizing them with the{" "}
        <a href="/blog/app-store-optimization-aso-guide">ASO guide</a> before
        and after launch.
      </p>

      <p>
        Source check: Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-for-review/"
          target="_blank"
          rel="noopener noreferrer"
        >
          submit-for-review documentation
        </a>{" "}
        and the{" "}
        <a
          href="https://developer.apple.com/app-store/review/guidelines/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Review Guidelines
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
