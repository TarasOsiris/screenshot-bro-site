import type { Route } from "./+types/blog.screenshot-sizes-app-store-google-play";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "screenshot-sizes-app-store-google-play";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches);
export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  return (
    <ContentLayout
      footerLinks={[
        { label: "\u2190 All posts", href: "/blog" },
        { label: "Screenshot Bro", href: "/" },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={SLUG} />

        <p>
          Apple App Store Connect and Google Play Console both reject uploads
          that do not match their accepted dimensions, aspect ratios, and file
          formats. The two stores use completely different rules — Apple pins
          screenshots to specific pixel sizes per device class, while Google
          accepts a range of sizes constrained by aspect ratio. This is the
          full reference for both, current as of April 2026.
        </p>

        <h2>Apple App Store</h2>
        <p>
          Apple groups screenshots by <strong>device family</strong> (iPhone,
          iPad, Mac, Apple Watch, Apple TV, Apple Vision Pro). Each family
          requires screenshots when your app supports that platform. For
          iPhone and iPad, App Store Connect can scale higher-resolution
          screenshots down for older displays when you do not provide custom
          assets for every size.
        </p>
        <p>
          Screenshots must be JPEG, JPG, or PNG. You can upload{" "}
          <strong>1 to 10</strong> screenshots per device family per
          localization.
        </p>

        <h3>iPhone</h3>
        <table>
          <thead>
            <tr>
              <th>Display</th>
              <th>Pixels (Portrait)</th>
              <th>Devices</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                6.9" <em>(required)</em>
              </td>
              <td>1260 x 2736, 1290 x 2796, or 1320 x 2868</td>
              <td>
                iPhone Air, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
                Plus, 14 Pro Max
              </td>
            </tr>
            <tr>
              <td>6.5"</td>
              <td>1284 x 2778 or 1242 x 2688</td>
              <td>
                iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
                XR
              </td>
            </tr>
            <tr>
              <td>6.3"</td>
              <td>1206 x 2622 or 1179 x 2556</td>
              <td>iPhone 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
            </tr>
            <tr>
              <td>6.1"</td>
              <td>1170 x 2532, 1125 x 2436, or 1080 x 2340</td>
              <td>
                iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
                11 Pro, XS, X
              </td>
            </tr>
            <tr>
              <td>5.5" (legacy)</td>
              <td>1242 x 2208</td>
              <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
            </tr>
          </tbody>
        </table>
        <p>
          For current iPhone apps, the 6.9" set is the primary required set.
          The 6.5" set is required only if your app runs on iPhone and you do
          not provide 6.9" screenshots. Landscape variants use the same
          dimensions rotated 90 degrees.
        </p>

        <h3>iPad</h3>
        <table>
          <thead>
            <tr>
              <th>Display</th>
              <th>Pixels (Portrait)</th>
              <th>Devices</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                13" <em>(required)</em>
              </td>
              <td>2064 x 2752 or 2048 x 2732</td>
              <td>
                iPad Pro 13" (M5/M4), iPad Pro 12.9" (3rd-6th gen), iPad Air
                13" (M4/M3/M2)
              </td>
            </tr>
            <tr>
              <td>11"</td>
              <td>
                1488 x 2266, 1668 x 2420, 1668 x 2388, or 1640 x 2360
              </td>
              <td>
                iPad Pro 11" (M5/M4 and 1st-4th gen), iPad Air 11"
                (M4/M3/M2), iPad Air (4th-5th gen), iPad (A16/10th gen), iPad
                mini (A17 Pro/6th gen)
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Mac</h3>
        <p>
          The Mac App Store accepts four resolutions, each at a 16:10 aspect
          ratio. Pick one and stay consistent across the whole set.
        </p>
        <ul>
          <li>
            <strong>1280 x 800</strong> (minimum)
          </li>
          <li>
            <strong>1440 x 900</strong>
          </li>
          <li>
            <strong>2560 x 1600</strong>
          </li>
          <li>
            <strong>2880 x 1800</strong> (largest accepted size)
          </li>
        </ul>

        <h3>Apple Watch</h3>
        <table>
          <thead>
            <tr>
              <th>Case</th>
              <th>Pixels</th>
              <th>Devices</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>49mm Ultra 3</td>
              <td>422 x 514</td>
              <td>Apple Watch Ultra 3</td>
            </tr>
            <tr>
              <td>49mm Ultra</td>
              <td>410 x 502</td>
              <td>Apple Watch Ultra 2, Ultra</td>
            </tr>
            <tr>
              <td>46mm</td>
              <td>416 x 496</td>
              <td>Series 11, Series 10</td>
            </tr>
            <tr>
              <td>45mm / 41mm</td>
              <td>396 x 484</td>
              <td>Series 9, 8, 7</td>
            </tr>
            <tr>
              <td>44mm / 40mm</td>
              <td>368 x 448</td>
              <td>Series 6, 5, 4, SE 3, SE</td>
            </tr>
            <tr>
              <td>42mm / 38mm</td>
              <td>312 x 390</td>
              <td>Series 3</td>
            </tr>
          </tbody>
        </table>

        <h3>Apple TV and Vision Pro</h3>
        <ul>
          <li>
            <strong>Apple TV:</strong> 3840 x 2160 (4K) or 1920 x 1080 (HD).
          </li>
          <li>
            <strong>Apple Vision Pro:</strong> 3840 x 2160.
          </li>
        </ul>

        <h3>App Previews (video)</h3>
        <p>
          Optional, up to 3 per device family, 15 - 30 seconds, M4V / MP4 /
          MOV. App previews have their own accepted video resolutions, so do
          not assume the screenshot pixel dimensions are valid for preview
          videos.
        </p>

        <h2>Google Play</h2>
        <p>
          Google Play takes a different approach: instead of rigid pixel
          dimensions, it accepts any size that satisfies its{" "}
          <strong>aspect ratio and side-length rules</strong>. Files must be
          JPEG or 24-bit PNG with no alpha channel.
        </p>

        <h3>Phone screenshots</h3>
        <ul>
          <li>
            Google requires at least <strong>2 screenshots overall</strong> to
            publish a store listing, and you can add up to{" "}
            <strong>8 screenshots per supported device type</strong>.
          </li>
          <li>
            Each side must be between <strong>320 px and 3840 px</strong>.
          </li>
          <li>
            The longest side cannot be more than{" "}
            <strong>twice the length</strong> of the shortest side (so the
            aspect ratio sits between 1:2 and 2:1).
          </li>
          <li>
            Recommended: <strong>1080 x 1920</strong> (portrait) or{" "}
            <strong>1920 x 1080</strong> (landscape).
          </li>
        </ul>

        <h3>Tablet screenshots</h3>
        <p>
          Google has a separate large-screen screenshot section for tablets
          and Chromebooks. Add at least 4 screenshots for these surfaces, use
          sides between <strong>1080 px and 7680 px</strong>, and keep them at
          16:9 landscape or 9:16 portrait.
        </p>
        <ul>
          <li>
            <strong>7-inch tablet:</strong> recommended{" "}
            <strong>1200 x 1920</strong>.
          </li>
          <li>
            <strong>10-inch tablet:</strong> recommended{" "}
            <strong>1600 x 2560</strong>.
          </li>
        </ul>

        <h3>Wear OS, Android TV, Chromebook, Auto, XR</h3>
        <ul>
          <li>
            <strong>Wear OS:</strong> 384 x 384 px (square, 1:1).
          </li>
          <li>
            <strong>Android TV:</strong> 1920 x 1080 px (16:9 landscape only).
          </li>
          <li>
            <strong>Chromebook:</strong> aspect ratio of 16:9 or 9:16, sides
            between 1080 px and 7680 px.
          </li>
          <li>
            <strong>Android Automotive OS:</strong> 800 x 1280 portrait or
            1024 x 768 landscape; provide at least 2 of each if you provide
            Automotive screenshots.
          </li>
          <li>
            <strong>Android XR:</strong> 4 to 8 screenshots, 8:5 aspect ratio,
            recommended 3840 x 2400 and minimum 1920 x 1200.
          </li>
        </ul>

        <h3>Other Google Play assets</h3>
        <ul>
          <li>
            <strong>App icon:</strong> 512 x 512 px, 32-bit PNG with alpha.
          </li>
          <li>
            <strong>Feature graphic:</strong> 1024 x 500 px, PNG or JPEG, no
            alpha. Required.
          </li>
          <li>
            <strong>Promo video:</strong> public YouTube URL (no upload).
          </li>
        </ul>

        <h2>Side-by-side cheat sheet</h2>
        <table>
          <thead>
            <tr>
              <th>Surface</th>
              <th>App Store</th>
              <th>Google Play</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phone</td>
              <td>1320 x 2868 (6.9")</td>
              <td>1080 x 1920 recommended</td>
            </tr>
            <tr>
              <td>Tablet (small)</td>
              <td>1668 x 2388 (11" iPad)</td>
              <td>1200 x 1920 (7-inch)</td>
            </tr>
            <tr>
              <td>Tablet (large)</td>
              <td>2064 x 2752 (13" iPad)</td>
              <td>1600 x 2560 (10-inch)</td>
            </tr>
            <tr>
              <td>Desktop</td>
              <td>2880 x 1800 (Mac)</td>
              <td>1920 x 1080 or 1080 x 1920 minimum (Chromebook)</td>
            </tr>
            <tr>
              <td>Wearable</td>
              <td>422 x 514 (Watch Ultra 3)</td>
              <td>384 x 384 (Wear OS)</td>
            </tr>
            <tr>
              <td>TV</td>
              <td>3840 x 2160</td>
              <td>1920 x 1080</td>
            </tr>
            <tr>
              <td>Min / max count</td>
              <td>1 - 10 per family</td>
              <td>2 total minimum; up to 8 per device type</td>
            </tr>
            <tr>
              <td>Format</td>
              <td>JPEG, JPG, or PNG</td>
              <td>JPEG or 24-bit PNG, no alpha</td>
            </tr>
          </tbody>
        </table>

        <h2>Working tips</h2>
        <ul>
          <li>
            <strong>Design at the largest required size.</strong> 1320 x 2868
            for iPhone, 2064 x 2752 for iPad, 2880 x 1800 for Mac. Downscaling
            preserves quality better than upscaling.
          </li>
          <li>
            <strong>Pick one Mac resolution and lock it.</strong> Mixing 2880
            x 1800 and 1440 x 900 in the same set looks visibly inconsistent
            in App Store Connect previews.
          </li>
          <li>
            <strong>Watch the safe area.</strong> Store surfaces crop and
            arrange screenshots differently, so keep critical text away from
            the edges.
          </li>
          <li>
            <strong>Strip alpha for Google Play.</strong> Google rejects PNGs
            with an alpha channel. Export flat 24-bit PNGs.
          </li>
          <li>
            <strong>Reuse layouts across stores.</strong> A 9:19.5 iPhone
            screenshot is close enough to a 9:16 Android phone screenshot
            that the same composition usually works — just re-export at the
            target dimensions.
          </li>
        </ul>

        <h2>Where Screenshot Bro fits</h2>
        <p>
          Screenshot Bro keeps every device size in one project. Pick the
          rows you need (iPhone 6.9", iPad 13", MacBook, Android phone,
          tablet), design once, localize per locale, and batch export. The
          export folder is grouped by locale and row, so the App Store
          Connect upload and the Google Play Console upload pull from the
          same source of truth.
        </p>

        </article>
        <BlogCTA message="One Mac app for App Store and Google Play screenshots." />
        <RelatedPosts currentSlug={SLUG} />
      </div>
    </ContentLayout>
  );
}
