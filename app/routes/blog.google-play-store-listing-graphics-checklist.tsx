import type { Route } from "./+types/blog.google-play-store-listing-graphics-checklist";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "google-play-store-listing-graphics-checklist";

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
      ctaMessage="Prepare Google Play screenshots and App Store screenshots from one structured Screenshot Bro project."
      seoLinks={[
        {
          href: "/blog/google-play-feature-graphic-size-template-examples",
          label: "Google Play feature graphic size",
          description: "design the required 1024 x 500 px store listing asset.",
        },
        {
          href: "/blog/google-play-screenshot-rejected-fix",
          label: "Google Play screenshot rejection fixes",
          description: "resolve preview asset and metadata problems before resubmission.",
        },
        {
          href: "/blog/google-play-screenshot-sizes-requirements",
          label: "Google Play screenshot sizes",
          description: "confirm phone, tablet, Chromebook, Wear OS, TV, and XR requirements.",
        },
      ]}
      faqs={[
        {
          question: "What graphics do I need for a Google Play listing?",
          answer:
            "At minimum, prepare the app icon, feature graphic, and screenshots. A preview video is optional for many listings but can be added with a YouTube URL.",
        },
        {
          question: "What is the Google Play feature graphic size?",
          answer:
            "The Google Play feature graphic must be 1024 x 500 px, exported as JPEG or 24-bit PNG with no alpha channel.",
        },
        {
          question: "Do Google Play screenshots need alt text?",
          answer:
            "Google recommends alt text for graphic assets and screenshots. Keep it concise and describe the important content in the image.",
        },
      ]}
    >
      <p>
        Google Play listing graphics include more than screenshots. Your app
        icon, feature graphic, screenshots, preview video, and localized graphic
        text all work together across the Play Store. A weak or non-compliant
        asset can reduce eligibility for promotional surfaces or create policy
        risk.
      </p>
      <p>
        This checklist was fact-checked on June 17, 2026 against Google&apos;s{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9866151"
          target="_blank"
          rel="noopener noreferrer"
        >
          preview asset requirements
        </a>
        ,{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9898842"
          target="_blank"
          rel="noopener noreferrer"
        >
          metadata policy
        </a>
        , and{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/13393723"
          target="_blank"
          rel="noopener noreferrer"
        >
          store listing best practices
        </a>
        .
      </p>

      <h2>Required Asset Checklist</h2>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Google Play requirement</th>
            <th>Before upload</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>App icon</td>
            <td>512 x 512 px, 32-bit PNG with alpha, maximum 1024 KB.</td>
            <td>Do not include badges or misleading ranking, price, or category text.</td>
          </tr>
          <tr>
            <td>Feature graphic</td>
            <td>1024 x 500 px, JPEG or 24-bit PNG, no alpha.</td>
            <td>Keep the focal point centered and avoid cutoff zones.</td>
          </tr>
          <tr>
            <td>Screenshots</td>
            <td>Minimum two screenshots across device types; JPEG or 24-bit PNG, no alpha; 320 px minimum, 3840 px maximum.</td>
            <td>Show the actual app or game experience.</td>
          </tr>
          <tr>
            <td>Preview video</td>
            <td>Optional for most apps, added through a YouTube URL.</td>
            <td>Use a video URL, not a playlist or channel URL.</td>
          </tr>
        </tbody>
      </table>

      <h2>Screenshot Checklist</h2>
      <ul>
        <li>Add screenshots for every supported device type that matters to your distribution.</li>
        <li>For large-screen recommendations, Google says apps need at least four screenshots with minimum 1080 px resolution.</li>
        <li>Use 16:9 for landscape and 9:16 for portrait screenshots when targeting those large-format recommendation requirements.</li>
        <li>Make screenshots demonstrate actual in-app or in-game experience.</li>
        <li>Prioritize UI in the first three screenshots, even when using stylized multi-image layouts.</li>
        <li>Keep screenshot taglines under 20% of the image when taglines are needed.</li>
        <li>Localize text overlays for each market and language you support.</li>
      </ul>

      <h2>Device-Specific Notes</h2>
      <p>
        Google Play supports screenshots for phones, tablets, Chromebooks,
        Android TV, Wear OS, Android Automotive OS, and Android XR. The rules
        are not identical across devices. For example, Wear OS screenshots must
        show only the app interface, use a 1:1 aspect ratio, and have a minimum
        size of 384 x 384 px. Android TV requires at least one Android TV
        screenshot before publishing when you distribute to Android TV devices,
        and also requires a TV banner image.
      </p>

      <h2>Feature Graphic Checklist</h2>
      <ul>
        <li>Canvas is exactly 1024 x 500 px.</li>
        <li>File is JPEG or 24-bit PNG with no alpha channel.</li>
        <li>The graphic conveys the app or game experience, not only the icon.</li>
        <li>Main UI, slogan, logo, and focal point sit near the center.</li>
        <li>Edges are used for background or supporting visuals.</li>
        <li>The design does not rely on fine details that disappear on phones.</li>
        <li>The graphic avoids pure white, black, or dark gray backgrounds that can blend into Play Store surfaces.</li>
      </ul>

      <h2>Policy Checklist</h2>
      <p>
        Google warns against misleading metadata, inappropriate listing
        imagery, duplicated or irrelevant keywords, ranking claims, price or
        promotional claims, and store-performance language. Before publishing,
        remove:
      </p>
      <ul>
        <li>&quot;Best&quot;, &quot;number one&quot;, &quot;top&quot;, award, or ranking claims you cannot use.</li>
        <li>Price, discount, sale, or limited-time promotion text inside graphics.</li>
        <li>Calls to action such as &quot;install now&quot; or &quot;download now&quot;.</li>
        <li>Profane, vulgar, sexually suggestive, or graphic violent content.</li>
        <li>Third-party logos, characters, or copyrighted assets without permission.</li>
        <li>Device imagery or store badges that can become obsolete or misleading.</li>
      </ul>

      <h2>Alt Text Checklist</h2>
      <p>
        Google recommends alt text for graphic assets and screenshots. Keep it
        concise, identify the important part of the image, and avoid starting
        with phrases like &quot;photo of&quot; or &quot;image of.&quot;
      </p>
      <table>
        <thead>
          <tr>
            <th>Weak alt text</th>
            <th>Better alt text</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Image of screenshot</td>
            <td>Budget dashboard showing weekly spending categories</td>
          </tr>
          <tr>
            <td>Feature graphic</td>
            <td>Meal planner app showing a weekly recipe calendar</td>
          </tr>
          <tr>
            <td>Phone mockup</td>
            <td>Project board with tasks grouped by deadline</td>
          </tr>
        </tbody>
      </table>
    </BlogArticleShell>
  );
}
