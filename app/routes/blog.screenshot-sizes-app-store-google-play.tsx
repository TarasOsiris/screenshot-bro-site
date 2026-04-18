import type { Route } from "./+types/blog.screenshot-sizes-app-store-google-play";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
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
          requires at least one set of screenshots, and within iPhone and iPad
          you only need to upload the largest required size — App Store
          Connect downscales it for older displays automatically.
        </p>
        <p>
          Screenshots must be PNG or JPEG, RGB color space (P3 supported), and
          flat — no alpha channel. You can upload <strong>3 to 10</strong>{" "}
          screenshots per device family per localization.
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
              <td>1320 x 2868</td>
              <td>iPhone 17 Pro Max, 16 Pro Max</td>
            </tr>
            <tr>
              <td>6.7"</td>
              <td>1290 x 2796</td>
              <td>iPhone 16 Plus, 15 Plus, 14 Pro Max</td>
            </tr>
            <tr>
              <td>6.5"</td>
              <td>1242 x 2688</td>
              <td>iPhone 11 Pro Max, XS Max</td>
            </tr>
            <tr>
              <td>6.1"</td>
              <td>1179 x 2556</td>
              <td>iPhone 17, 16, 15, 14 Pro</td>
            </tr>
            <tr>
              <td>5.5" (legacy)</td>
              <td>1242 x 2208</td>
              <td>iPhone 8 Plus, 7 Plus, 6s Plus</td>
            </tr>
          </tbody>
        </table>
        <p>
          As of 2024 Apple only requires the 6.9" set for new submissions. If
          you also upload the 6.5" set, those will be shown on the older
          devices that need them. Landscape variants use the same dimensions
          rotated 90 degrees.
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
                13" Liquid Retina XDR <em>(required)</em>
              </td>
              <td>2064 x 2752</td>
              <td>iPad Pro 13" (M4)</td>
            </tr>
            <tr>
              <td>12.9" Liquid Retina XDR</td>
              <td>2048 x 2732</td>
              <td>iPad Pro 12.9" (3rd-6th gen)</td>
            </tr>
            <tr>
              <td>11" Liquid Retina</td>
              <td>1668 x 2388</td>
              <td>iPad Pro 11", iPad Air (M2)</td>
            </tr>
            <tr>
              <td>10.9"</td>
              <td>1640 x 2360</td>
              <td>iPad Air (4th-5th gen), iPad 10th gen</td>
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
            <strong>2880 x 1800</strong> (recommended — matches the 16-inch
            MacBook Pro Retina)
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
              <td>49mm Ultra / Series 10</td>
              <td>410 x 502</td>
              <td>Apple Watch Ultra 2, Series 10</td>
            </tr>
            <tr>
              <td>45mm</td>
              <td>396 x 484</td>
              <td>Series 7 - 9</td>
            </tr>
            <tr>
              <td>41mm</td>
              <td>352 x 430</td>
              <td>Series 7 - 9</td>
            </tr>
            <tr>
              <td>44mm</td>
              <td>368 x 448</td>
              <td>Series 4 - 6, SE</td>
            </tr>
            <tr>
              <td>40mm</td>
              <td>324 x 394</td>
              <td>Series 4 - 6, SE</td>
            </tr>
          </tbody>
        </table>

        <h3>Apple TV and Vision Pro</h3>
        <ul>
          <li>
            <strong>Apple TV:</strong> 3840 x 2160 (4K) or 1920 x 1080 (HD).
          </li>
          <li>
            <strong>Apple Vision Pro:</strong> 3840 x 2160 PNG with full,
            opaque alpha — Apple recommends rendering against a transparent
            background and then flattening for upload.
          </li>
        </ul>

        <h3>App Previews (video)</h3>
        <p>
          Optional, up to 3 per device family, 15 - 30 seconds, M4V / MP4 /
          MOV. Each preview uses the same pixel dimensions as the screenshot
          set for its device family.
        </p>

        <h2>Google Play</h2>
        <p>
          Google Play takes a different approach: instead of rigid pixel
          dimensions, it accepts any size that satisfies its{" "}
          <strong>aspect ratio and side-length rules</strong>. Files must be
          PNG or 24-bit JPEG (no alpha), up to 8 MB each.
        </p>

        <h3>Phone screenshots</h3>
        <ul>
          <li>
            <strong>Minimum 2, maximum 8</strong> screenshots.
          </li>
          <li>
            Each side must be between <strong>320 px and 3840 px</strong>.
          </li>
          <li>
            The longest side cannot be more than{" "}
            <strong>twice the length</strong> of the shortest side (so the
            aspect ratio sits between 16:9 and 9:16).
          </li>
          <li>
            Recommended: <strong>1080 x 1920</strong> (portrait) or{" "}
            <strong>1920 x 1080</strong> (landscape).
          </li>
        </ul>

        <h3>Tablet screenshots</h3>
        <p>
          Google now treats tablet (large-screen) screenshots as required for
          apps that target tablets, foldables, or Chromebooks. Two slots:
        </p>
        <ul>
          <li>
            <strong>7-inch tablet:</strong> same 320 - 3840 px / 16:9 - 9:16
            rules. Recommended <strong>1200 x 1920</strong>.
          </li>
          <li>
            <strong>10-inch tablet:</strong> same rules. Recommended{" "}
            <strong>1600 x 2560</strong>.
          </li>
        </ul>

        <h3>Wear OS, Android TV, Chromebook, Auto</h3>
        <ul>
          <li>
            <strong>Wear OS:</strong> 384 x 384 px (square, 1:1).
          </li>
          <li>
            <strong>Android TV:</strong> 1920 x 1080 px (16:9 landscape only).
          </li>
          <li>
            <strong>Chromebook:</strong> aspect ratio of 16:10 or 10:16, sides
            between 1080 px and 7680 px.
          </li>
          <li>
            <strong>Android Auto:</strong> 1280 x 720 px (16:9 landscape).
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
              <td>1280 x 800 (Chromebook)</td>
            </tr>
            <tr>
              <td>Wearable</td>
              <td>410 x 502 (Watch Ultra)</td>
              <td>384 x 384 (Wear OS)</td>
            </tr>
            <tr>
              <td>TV</td>
              <td>3840 x 2160</td>
              <td>1920 x 1080</td>
            </tr>
            <tr>
              <td>Min / max count</td>
              <td>3 - 10 per family</td>
              <td>2 - 8 per surface</td>
            </tr>
            <tr>
              <td>Format</td>
              <td>PNG or JPEG, no alpha</td>
              <td>PNG or JPEG, no alpha</td>
            </tr>
          </tbody>
        </table>

        <h2>Working tips</h2>
        <ul>
          <li>
            <strong>Design at the largest required size.</strong> 1320 x 2868
            for iPhone, 2064 x 2752 for iPad, 2880 x 1800 for Mac. Downscaling
            is lossless; upscaling is not.
          </li>
          <li>
            <strong>Pick one Mac resolution and lock it.</strong> Mixing 2880
            x 1800 and 1440 x 900 in the same set looks visibly inconsistent
            in App Store Connect previews.
          </li>
          <li>
            <strong>Watch the safe area.</strong> Apple now overlays the
            top-left and bottom-right corners with the title and CTA on
            search results — keep critical text in the center 60%.
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
      </div>
    </ContentLayout>
  );
}
