import type { Route } from "./+types/blog.app-store-screenshots-rejected-fix";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-screenshots-rejected-fix";

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
      ctaMessage="Avoid screenshot busywork after rejection: update sizes, copy, devices, and localizations from one Screenshot Bro project."
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-mistakes",
          label: "App Store screenshot mistakes",
          description: "find conversion and review issues before App Review finds them.",
        },
        {
          href: "/blog/app-store-screenshot-copywriting-examples",
          label: "App Store screenshot text examples",
          description: "rewrite captions so claims stay specific and policy-safe.",
        },
        {
          href: "/blog/upload-screenshots-to-app-store-connect",
          label: "upload screenshots to App Store Connect",
          description: "replace rejected assets and prepare a clean resubmission.",
        },
      ]}
      faqs={[
        {
          question: "Can App Store screenshots be rejected?",
          answer:
            "Yes. Screenshot problems can trigger App Review issues when they are misleading, inaccurate, unsuitable for metadata, incorrectly sized, or fail to show the app in use.",
        },
        {
          question: "Do I need a new build for rejected screenshots?",
          answer:
            "Not always. If the rejection is only a metadata issue, Apple allows you to resolve the metadata issue and resubmit the same build.",
        },
        {
          question: "What is the safest App Store screenshot fix?",
          answer:
            "Show the current app in use, remove unsupported claims, use fictional data, disclose paid content clearly, and export files that match Apple's screenshot specifications.",
        },
      ]}
    >
      <p>
        App Store screenshot rejections usually fall under metadata accuracy:
        the screenshots do not accurately represent the app, do not show the
        app in use, use the wrong device experience, contain unsuitable content,
        or fail Apple&apos;s technical asset requirements.
      </p>
      <p>
        This guide was fact-checked on June 17, 2026 against the{" "}
        <a
          href="https://developer.apple.com/app-store/review/guidelines/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Review Guidelines
        </a>
        ,{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/"
          target="_blank"
          rel="noopener noreferrer"
        >
          screenshot specifications
        </a>
        , and{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/reply-to-app-review-messages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Review message guidance
        </a>
        .
      </p>

      <h2>The Apple Rule Behind Most Screenshot Rejections</h2>
      <p>
        Guideline 2.3 says your metadata, including descriptions, screenshots,
        and previews, must accurately reflect the app&apos;s core experience and
        stay up to date with new versions. Guideline 2.3.3 is even more direct:
        screenshots should show the app in use, not merely title art, a login
        page, or a splash screen.
      </p>
      <p>
        That means a screenshot can be beautiful and still fail review if it
        sells a feature the app does not provide, shows a different platform, or
        hides the actual product behind marketing art.
      </p>

      <h2>Common Reasons App Store Screenshots Get Rejected</h2>
      <h3>1. The screenshots do not show the app in use</h3>
      <p>
        Apple explicitly allows text and image overlays, but the screenshot
        still needs to show the app experience. Replace abstract splash art,
        pure brand slides, and login-only screens with real product states.
      </p>

      <h3>2. The screenshots advertise features that are missing or different</h3>
      <p>
        If the screenshot says &quot;AI meal plans&quot; but the submitted build only
        has manual notes, App Review can treat the asset as inaccurate
        metadata. Match every claim to functionality that exists in the build
        being reviewed.
      </p>

      <h3>3. Paid content is not clearly disclosed</h3>
      <p>
        Guideline 2.3.2 says screenshots and previews should clearly indicate
        whether featured items, subscriptions, levels, or other content require
        additional purchases. If a screenshot highlights a premium feature, make
        sure the app listing does not imply it is included for every user.
      </p>

      <h3>4. The device experience is wrong</h3>
      <p>
        Do not stretch an iPhone screenshot into an iPad frame or use a generic
        mockup that does not reflect the platform. Apple&apos;s screenshot
        specification page lists accepted sizes per device class, and App Store
        Connect can scale from required high-resolution screenshots when the UI
        is the same across smaller sizes.
      </p>

      <h3>5. The content is not suitable for App Store metadata</h3>
      <p>
        Guideline 2.3.8 says metadata screenshots and previews should be
        appropriate for a 4+ age rating even if the app itself has a higher
        rating. Avoid graphic violence, explicit imagery, or other promotional
        content that is unsuitable for the public listing.
      </p>

      <h3>6. You used real private data or assets you do not control</h3>
      <p>
        Guideline 2.3.9 says you are responsible for rights to materials in
        screenshots and previews, and should use fictional account information
        instead of data from a real person. Replace real names, emails, phone
        numbers, medical records, addresses, photos, and documents before
        uploading.
      </p>

      <h3>7. The screenshot includes other mobile platforms or stores</h3>
      <p>
        Guideline 2.3.10 says app metadata should focus on Apple platform
        experiences and should not include names, icons, or imagery of other
        mobile platforms or alternative app marketplaces unless there is
        specific approved interactive functionality.
      </p>

      <h3>8. The file does not meet screenshot requirements</h3>
      <p>
        App Store Connect currently requires one to ten screenshots in JPEG,
        JPG, or PNG format. The accepted pixel dimensions vary by platform and
        display class, so check Apple&apos;s current screenshot specification table
        before export.
      </p>

      <h2>How to Fix a Metadata Rejection</h2>
      <ol>
        <li>
          Read the exact App Review message and identify whether the issue is
          about accuracy, content, device class, size, or rights.
        </li>
        <li>
          Replace title art, splash screens, and login-only screenshots with
          screens that show actual app functionality.
        </li>
        <li>
          Remove or rewrite any claim that is not available in the submitted
          build.
        </li>
        <li>
          Export correct screenshots for the required display classes, or rely
          on App Store Connect scaling only when the UI is genuinely the same.
        </li>
        <li>
          Redact personal data and remove any third-party material you do not
          have rights to use.
        </li>
        <li>
          Reply to App Review with a concise explanation of what changed.
        </li>
      </ol>

      <h2>Do You Need a New Build?</h2>
      <p>
        Not always. Apple says that if your app was rejected for a metadata
        issue, you can resubmit the same build after resolving the issue. If
        the screenshot problem reveals that the app itself is incomplete or the
        feature is not in the binary, then you need to fix the app and submit a
        new build.
      </p>

      <h2>Pre-Submission Screenshot Checklist</h2>
      <ul>
        <li>Every screenshot shows the app in use.</li>
        <li>Every claim is true for the submitted build.</li>
        <li>Premium or subscription-gated features are not misleading.</li>
        <li>Device frames and pixel dimensions match the platform.</li>
        <li>Metadata is appropriate for a public App Store listing.</li>
        <li>All names, data, and account content are fictional or cleared for use.</li>
        <li>No other mobile platform or store imagery appears in the App Store screenshots.</li>
      </ul>
    </BlogArticleShell>
  );
}
