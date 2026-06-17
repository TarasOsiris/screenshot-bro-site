import type { Route } from "./+types/blog.google-play-screenshot-rejected-fix";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "google-play-screenshot-rejected-fix";

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
      ctaMessage="Keep Google Play and App Store screenshots organized by device, locale, and export target in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/google-play-store-listing-graphics-checklist",
          label: "Google Play graphics checklist",
          description: "audit screenshots, feature graphics, app icons, and preview videos together.",
        },
        {
          href: "/blog/google-play-feature-graphic-size-template-examples",
          label: "Google Play feature graphic size",
          description: "fix feature graphic dimensions, file type, and layout problems.",
        },
        {
          href: "/blog/google-play-screenshot-sizes-requirements",
          label: "Google Play screenshot requirements",
          description: "confirm file format, dimensions, and device-specific rules.",
        },
      ]}
      faqs={[
        {
          question: "Why were my Google Play screenshots rejected?",
          answer:
            "Common causes include wrong file format, invalid dimensions, screenshots that do not show the actual app experience, misleading text overlays, ranking claims, price claims, or device-specific rule violations.",
        },
        {
          question: "Do Google Play screenshots need to show the app?",
          answer:
            "Yes. Google says screenshots must demonstrate the actual in-app or in-game experience and focus on core features and content.",
        },
        {
          question: "Can repeated Google Play screenshot issues hurt my account?",
          answer:
            "A single rejection does not affect developer account standing, but Google warns that repeated or serious policy violations can lead to stronger enforcement.",
        },
      ]}
    >
      <p>
        Google Play screenshot rejection usually comes down to one of three
        problems: the file does not meet Google&apos;s asset requirements, the
        screenshot does not accurately represent the app experience, or the
        store listing violates metadata and promotion policies.
      </p>
      <p>
        This guide was fact-checked on June 17, 2026 against Google&apos;s{" "}
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
        ,{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/13393723"
          target="_blank"
          rel="noopener noreferrer"
        >
          store listing best practices
        </a>
        , and{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/2477981"
          target="_blank"
          rel="noopener noreferrer"
        >
          policy violation resubmission guidance
        </a>
        .
      </p>

      <h2>Start With the Exact Enforcement Message</h2>
      <p>
        Do not guess. Google says to read the policy named in the enforcement
        message, check Notifications and email, then make the required changes.
        If the issue is a screenshot or metadata violation, the fix may be only
        a store listing asset update. If the issue is tied to the app itself,
        you may need a compliant app bundle as well.
      </p>

      <h2>Common Google Play Screenshot Rejection Reasons</h2>
      <h3>1. The screenshots are the wrong format or dimensions</h3>
      <p>
        Google Play requires at least two screenshots across device types to
        publish a store listing. General screenshot files must be JPEG or
        24-bit PNG with no alpha channel, have a minimum dimension of 320 px,
        have a maximum dimension of 3840 px, and the longest side cannot be
        more than twice the shortest side.
      </p>

      <h3>2. The image is blurry, stretched, compressed, or rotated wrong</h3>
      <p>
        Google&apos;s guidance says screenshots should be high-quality images with
        the proper aspect ratio and should not be blurry, distorted,
        pixelated, stretched, compressed, upside down, sideways, or skewed.
      </p>

      <h3>3. The screenshots do not show the actual in-app experience</h3>
      <p>
        Google recommends that screenshots demonstrate the actual in-app or
        in-game experience, focusing on core features and content. Avoid using
        generic marketing art as a substitute for the app UI.
      </p>

      <h3>4. Text overlays violate metadata rules</h3>
      <p>
        Google warns against screenshots and store graphics that include store
        performance claims, ranking claims, accolades, price or promotional
        information, or calls to action like &quot;download now&quot; or &quot;install now.&quot;
        Keep screenshot taglines factual and tied to app functionality.
      </p>

      <h3>5. The screenshot text is too small or takes over the image</h3>
      <p>
        Google says taglines should be used only if necessary and should not
        take up more than 20% of the image. It also warns against small text
        and backgrounds that compete with the text because they may not be
        visible on many phone screens.
      </p>

      <h3>6. The screenshots are not localized with the listing</h3>
      <p>
        Google recommends localizing graphic and branding text for different
        markets. Its store listing best practices also say that for screenshots
        containing text, you should provide separate screenshots and
        promotional videos for each language you support.
      </p>

      <h3>7. Device-specific screenshots do not follow device-specific rules</h3>
      <p>
        Some Google Play surfaces have extra requirements. For example, Wear OS
        screenshots should show only the app interface, avoid device frames and
        additional text or backgrounds, use a 1:1 aspect ratio, and be at least
        384 x 384 px. Android TV requires at least one TV screenshot before
        publishing a TV app, and Android XR requires 4 to 8 screenshots with an
        8:5 aspect ratio.
      </p>

      <h3>8. The listing uses restricted or misleading content</h3>
      <p>
        Google&apos;s metadata policy covers screenshots and promotional images. It
        prohibits misleading, irrelevant, excessive, improperly formatted, or
        inappropriate metadata. It also warns against unrelated keyword blocks,
        unattributed testimonials, misleading symbols, and unsuitable public
        listing imagery.
      </p>

      <h2>How to Fix the Rejection</h2>
      <ol>
        <li>Open the enforcement message and identify the exact violated policy.</li>
        <li>Remove non-compliant screenshots from every affected store listing and locale.</li>
        <li>Export compliant JPEG or 24-bit PNG files with no alpha channel.</li>
        <li>Check dimensions, aspect ratio, rotation, and visual quality.</li>
        <li>Replace marketing-only images with actual in-app or in-game screens.</li>
        <li>Remove ranking, award, price, discount, and install-call-to-action claims.</li>
        <li>Localize screenshot text for each translated listing.</li>
        <li>Update any affected release tracks if the policy issue is tied to an app bundle.</li>
      </ol>

      <h2>Do Rejections Hurt Your Developer Account?</h2>
      <p>
        Google says rejections do not impact the standing of your Google Play
        Developer account, and if an update to an existing app is rejected, the
        previously published version remains available on Google Play. However,
        Google also warns not to republish a rejected app until the policy
        violation has been fixed. Repeated app rejections or removals can
        contribute to more serious enforcement.
      </p>

      <h2>Pre-Upload Checklist</h2>
      <ul>
        <li>At least two screenshots across device types are present.</li>
        <li>Files are JPEG or 24-bit PNG with no alpha channel.</li>
        <li>Dimensions are within 320 px and 3840 px, with a valid aspect ratio.</li>
        <li>Screenshots show actual app or game experience.</li>
        <li>No ranking, award, install, discount, or price claims appear in graphics.</li>
        <li>Text overlays are short, large, and localized.</li>
        <li>Special device surfaces follow their own rules.</li>
        <li>All tracks and listings are updated before resubmission.</li>
      </ul>
    </BlogArticleShell>
  );
}
