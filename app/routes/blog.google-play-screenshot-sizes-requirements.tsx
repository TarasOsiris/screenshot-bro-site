import type { Route } from "./+types/blog.google-play-screenshot-sizes-requirements";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "google-play-screenshot-sizes-requirements";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches);
export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  return (
    <ContentLayout>
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={SLUG} />

          <p>
            Google Play screenshot requirements are more flexible than the App
            Store, but they are not optional. Your listing needs screenshots
            that match Google&apos;s format rules, and larger surfaces such as
            tablets, Chromebooks, Wear OS, TV, Automotive, and Android XR each
            have their own expectations.
          </p>
          <p>
            This guide focuses on the practical version: what to export, what
            Google Play Console accepts, and how to organize screenshots so
            updating your listing does not become a manual file chase.
          </p>

          <h2>Quick Requirements</h2>
          <table>
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Google Play rule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Screenshot count</td>
                <td>At least 2 screenshots across device types; up to 8 per supported device type</td>
              </tr>
              <tr>
                <td>Format</td>
                <td>JPEG or 24-bit PNG with no alpha channel</td>
              </tr>
              <tr>
                <td>General dimensions</td>
                <td>Minimum 320 px, maximum 3840 px</td>
              </tr>
              <tr>
                <td>General aspect ratio</td>
                <td>The longest side cannot be more than twice the shortest side</td>
              </tr>
              <tr>
                <td>Large screens</td>
                <td>For Chromebook and tablets, add at least 4 screenshots; use 1080-7680 px and 16:9 or 9:16</td>
              </tr>
            </tbody>
          </table>
          <p>
            Sources: Google&apos;s{" "}
            <a
              href="https://support.google.com/googleplay/android-developer/answer/9866151"
              target="_blank"
              rel="noopener noreferrer"
            >
              preview asset requirements
            </a>{" "}
            and Google Play Console help.
          </p>

          <h2>Phone Screenshots</h2>
          <p>
            Phone screenshots are the default Play Store screenshot type for
            most Android apps. Google accepts flexible dimensions, but a
            practical export size is <strong>1080 x 1920</strong> for portrait
            screenshots or <strong>1920 x 1080</strong> for landscape
            screenshots. Stay within the 320-3840 px bounds and keep the
            longest side no more than twice the shortest side.
          </p>
          <p>
            For marketing screenshots, avoid tiny captions. Play surfaces can
            crop, resize, or show screenshots in different contexts, so the app
            UI and headline need to survive downscaling.
          </p>

          <h2>Tablet and Chromebook Screenshots</h2>
          <p>
            Google treats large screens as their own store surface. For
            Chromebooks and tablets, Google says you can add a minimum of four
            screenshots to demonstrate the in-app experience. The recommended
            large-screen constraints are 1080-7680 px with 16:9 landscape or
            9:16 portrait.
          </p>
          <p>
            If your app supports tablets or ChromeOS, do not just stretch phone
            screenshots. Show the actual large-screen layout: split views,
            sidebars, wider charts, keyboard workflows, or whatever makes the
            larger surface useful.
          </p>

          <h2>Wear OS, TV, Automotive, and XR</h2>
          <p>
            These surfaces have stricter content expectations than phone
            screenshots:
          </p>
          <ul>
            <li>
              <strong>Wear OS:</strong> at least one screenshot that accurately
              depicts the current Wear OS app; screenshots should show only the
              app interface, use a 1:1 aspect ratio, be at least 384 x 384 px,
              and avoid device frames, extra text, masks, and transparent
              backgrounds.
            </li>
            <li>
              <strong>Android TV:</strong> if you distribute on Android TV, you
              need at least one TV screenshot before publishing, and TV
              screenshots only display on Android TV devices.
            </li>
            <li>
              <strong>Android Automotive OS:</strong> requirements vary by app
              category; when provided, screenshots must accurately show the car
              app experience.
            </li>
            <li>
              <strong>Android XR:</strong> Google lists 4 to 8 screenshots,
              PNG or JPEG up to 8 MB each, with an 8:5 aspect ratio.
            </li>
          </ul>

          <h2>Do You Need a Feature Graphic?</h2>
          <p>
            Yes, for most serious listings you should treat the feature graphic
            as part of the same screenshot production workflow. Google uses it
            in multiple places, including as a preview-video cover image when a
            video is present and in large-format app or game placements.
          </p>
          <p>
            The feature graphic is not a screenshot, so design it separately.
            Use it for brand, promise, and visual identity; use screenshots for
            proof that the app experience matches the promise.
          </p>

          <h2>Recommended Export Workflow</h2>
          <ol>
            <li>Create separate rows or folders for phone, tablet, Chromebook, and any specialty surfaces.</li>
            <li>Export flat JPEG or 24-bit PNG files with no alpha channel.</li>
            <li>Keep file names ordered: <code>01_main.png</code>, <code>02_feature.png</code>, and so on.</li>
            <li>Review screenshots at small sizes before uploading.</li>
            <li>Keep localized screenshots in separate locale folders.</li>
          </ol>

          <h2>App Store vs Google Play</h2>
          <p>
            The App Store is more pixel-specific: Apple lists exact screenshot
            sizes for each display family. Google Play is more constraint-based:
            it accepts a range of dimensions and aspect ratios. If you ship on
            both stores, design from a shared visual system but export separate
            files for each store&apos;s rules.
          </p>
          <p>
            For the combined reference, see{" "}
            <a href="/blog/screenshot-sizes-app-store-google-play">
              Screenshot Sizes for App Store and Google Play
            </a>
            .
          </p>

          <h2>How Screenshot Bro Helps</h2>
          <p>
            <a href="/">Screenshot Bro</a> keeps App Store and Google Play rows
            in one native Mac project. You can design phone, tablet, and Android
            rows together, localize text, batch export organized folders, and
            avoid rebuilding screenshot files by hand every release.
          </p>
        </article>

        <BlogCTA
          message="Create Google Play and App Store screenshots from one native Mac workflow."
          buttonLabel="Download Screenshot Bro"
        />
        <RelatedPosts currentSlug={SLUG} />
      </div>
    </ContentLayout>
  );
}
