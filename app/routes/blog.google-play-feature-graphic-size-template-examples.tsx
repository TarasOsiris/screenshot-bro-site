import type { Route } from "./+types/blog.google-play-feature-graphic-size-template-examples";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "google-play-feature-graphic-size-template-examples";

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
      ctaMessage="Create Google Play screenshots and App Store screenshot sets from the same reusable project."
      seoLinks={[
        {
          href: "/blog/google-play-store-listing-graphics-checklist",
          label: "Google Play store listing graphics checklist",
          description: "check app icons, screenshots, feature graphics, and preview videos together.",
        },
        {
          href: "/blog/google-play-screenshot-rejected-fix",
          label: "Google Play screenshot rejection fixes",
          description: "remove policy risks from screenshots and preview assets before resubmission.",
        },
        {
          href: "/blog/google-play-screenshot-sizes-requirements",
          label: "Google Play screenshot sizes",
          description: "confirm screenshot dimensions and device-specific requirements.",
        },
      ]}
      faqs={[
        {
          question: "What size is the Google Play feature graphic?",
          answer:
            "Google Play requires a 1024 x 500 px feature graphic. The file must be JPEG or 24-bit PNG with no alpha channel.",
        },
        {
          question: "Is the Google Play feature graphic required?",
          answer:
            "Yes. Google says you must provide a feature graphic to publish your store listing.",
        },
        {
          question: "Is a feature graphic the same as a screenshot?",
          answer:
            "No. The feature graphic is a separate promotional listing asset, while screenshots should demonstrate the actual app or game experience.",
        },
      ]}
    >
      <p>
        The Google Play feature graphic is a required store listing asset, not
        a decorative extra. It is separate from screenshots, but it often shows
        up beside them, above them, or as the cover image for your preview
        video. If the feature graphic is weak, the rest of the listing has to
        work harder.
      </p>
      <p>
        This guide was fact-checked on June 17, 2026 against Google&apos;s current{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9866151"
          target="_blank"
          rel="noopener noreferrer"
        >
          preview asset requirements
        </a>
        .
      </p>

      <h2>Current Feature Graphic Requirements</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Google Play requirement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Required?</td>
            <td>Yes. Google says you must provide a feature graphic to publish your store listing.</td>
          </tr>
          <tr>
            <td>Dimensions</td>
            <td>1024 x 500 px</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>JPEG or 24-bit PNG</td>
          </tr>
          <tr>
            <td>Alpha channel</td>
            <td>No alpha</td>
          </tr>
          <tr>
            <td>Localization</td>
            <td>Google recommends localizing graphic and branding text for different markets and languages.</td>
          </tr>
        </tbody>
      </table>

      <h2>Where Google Uses It</h2>
      <p>
        Google says the feature graphic can appear in several places on Google
        Play. It can become the cover image for your preview video when a
        preview video is present. For apps, it can appear in large-format app
        collections, including ads. For games, it can appear in recommended
        game groups that feature videos and screenshots.
      </p>
      <p>
        The practical takeaway: design it as a flexible store asset, not as a
        one-off banner that only looks good on your main listing.
      </p>

      <h2>A Practical 1024 x 500 Template</h2>
      <p>
        Google does not publish one universal pixel-safe zone in the text of
        the requirements. Instead, it warns that some formats may crop or place
        overlays on the graphic. Use this conservative layout:
      </p>
      <ul>
        <li>
          <strong>Canvas:</strong> 1024 x 500 px.
        </li>
        <li>
          <strong>Center area:</strong> keep the app name, main UI, and primary
          message near the middle of the canvas.
        </li>
        <li>
          <strong>Edges:</strong> treat the outer bands as risky space for
          texture, background, or secondary imagery.
        </li>
        <li>
          <strong>Text:</strong> use one short phrase or none. Fine details will
          disappear on smaller phone surfaces.
        </li>
        <li>
          <strong>Export:</strong> flatten to JPEG or 24-bit PNG with no
          transparency.
        </li>
      </ul>

      <h2>What to Put in the Feature Graphic</h2>
      <h3>1. A product promise</h3>
      <p>
        Good for utility, productivity, education, and finance apps. Use one
        plain-language outcome such as &quot;Plan every trip in one place&quot;
        or &quot;Track spending before payday.&quot; Keep it honest and tied to
        the actual app experience.
      </p>

      <h3>2. A hero UI moment</h3>
      <p>
        Good for apps where the interface is the proof. Show one clear product
        surface, not a pile of tiny screens. Google specifically recommends
        avoiding overloaded graphics with fine details.
      </p>

      <h3>3. A game scene or character moment</h3>
      <p>
        Good for games, where the feature graphic may appear in large-format
        recommendation placements. The graphic should convey the game
        experience rather than just repeat the app icon.
      </p>

      <h3>4. A preview video poster</h3>
      <p>
        If you have a preview video, the feature graphic can become the video
        cover image. Design it so the image still makes sense with a play
        button overlay and without audio.
      </p>

      <h2>What to Avoid</h2>
      <p>
        Google&apos;s requirements and recommendations are strict about misleading
        store graphics. Avoid:
      </p>
      <ul>
        <li>Text or imagery that implies Google Play ranking, awards, or performance.</li>
        <li>Price and promotional claims such as discounts or limited-time offers.</li>
        <li>Calls to action like &quot;download now&quot; or &quot;install now.&quot;</li>
        <li>Fine detail that cannot be read on phone screens.</li>
        <li>Pure white, black, or dark gray backgrounds that can blend into Play Store surfaces.</li>
        <li>Third-party characters, logos, or other assets you do not have permission to use.</li>
        <li>Google Play badges, store icons, or device imagery that may become obsolete.</li>
      </ul>

      <h2>Feature Graphic vs Screenshots</h2>
      <p>
        The feature graphic sells the broad promise. Screenshots prove the
        actual experience. Do not use the feature graphic as a replacement for
        screenshots, and do not stuff the same tagline into every asset. Google
        specifically warns against duplicating and overloading messaging across
        store listing assets.
      </p>

      <h2>Pre-Upload Checklist</h2>
      <ol>
        <li>Canvas is exactly 1024 x 500 px.</li>
        <li>File is JPEG or 24-bit PNG with no alpha channel.</li>
        <li>Main content is centered enough to survive cropping and overlays.</li>
        <li>No ranking, award, pricing, discount, or install-call-to-action claims.</li>
        <li>Text is large, short, and localized if your listing is localized.</li>
        <li>Visual style matches the screenshots and app icon.</li>
      </ol>
    </BlogArticleShell>
  );
}
