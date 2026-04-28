import type { Route } from "./+types/blog.app-store-screenshot-sizes";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "app-store-screenshot-sizes";

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
          Apple requires specific screenshot dimensions for each platform and
          display class. Miss a required size and App Store Connect can reject
          the asset or fall back to a scaled screenshot. Here are the current
          accepted dimensions for 2026.
        </p>

        <h2>iPhone Screenshots</h2>
        <table>
          <thead>
            <tr>
              <th>Display Size</th>
              <th>Pixels (Portrait)</th>
              <th>Devices</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6.9"</td>
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
              <td>1179 x 2556 or 1206 x 2622</td>
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
              <td>5.5"</td>
              <td>1242 x 2208</td>
              <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
            </tr>
          </tbody>
        </table>

        <h2>iPad Screenshots</h2>
        <table>
          <thead>
            <tr>
              <th>Display Size</th>
              <th>Pixels (Portrait)</th>
              <th>Devices</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>13"</td>
              <td>2064 x 2752 or 2048 x 2732</td>
              <td>
                iPad Pro 13" (M5/M4), iPad Pro 12.9" (3rd–6th gen), iPad Air
                13" (M4/M3/M2)
              </td>
            </tr>
            <tr>
              <td>11"</td>
              <td>
                1488 x 2266, 1668 x 2420, 1668 x 2388, or 1640 x 2360
              </td>
              <td>
                iPad Pro 11" (M5/M4 and 1st–4th gen), iPad Air 11"
                (M4/M3/M2), iPad Air (4th–5th gen), iPad (A16/10th gen), iPad
                mini (A17 Pro/6th gen)
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Mac Screenshots</h2>
        <p>
          Mac App Store screenshots must use one of Apple's accepted 16:10
          sizes: <strong>1280 x 800</strong>, <strong>1440 x 900</strong>,{" "}
          <strong>2560 x 1600</strong>, or <strong>2880 x 1800</strong>.
          Apple accepts one to ten screenshots per localization.
        </p>

        <h2>Apple Watch Screenshots</h2>
        <table>
          <thead>
            <tr>
              <th>Watch</th>
              <th>Pixels</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple Watch Ultra 3</td>
              <td>422 x 514</td>
            </tr>
            <tr>
              <td>Apple Watch Ultra 2 / Ultra</td>
              <td>410 x 502</td>
            </tr>
            <tr>
              <td>Series 11 / Series 10</td>
              <td>416 x 496</td>
            </tr>
            <tr>
              <td>Series 9 / 8 / 7</td>
              <td>396 x 484</td>
            </tr>
            <tr>
              <td>Series 6 / 5 / 4, SE 3 / SE</td>
              <td>368 x 448</td>
            </tr>
            <tr>
              <td>Series 3</td>
              <td>312 x 390</td>
            </tr>
          </tbody>
        </table>

        <h2>Apple TV and Vision Pro Screenshots</h2>
        <ul>
          <li>
            <strong>Apple TV:</strong> 1920 x 1080 or 3840 x 2160.
          </li>
          <li>
            <strong>Apple Vision Pro:</strong> 3840 x 2160.
          </li>
        </ul>

        <h2>Tips for Managing Multiple Sizes</h2>
        <ul>
          <li>
            <strong>Design at the largest size first.</strong> It is easier to
            scale down than up. Start with the 6.9" iPhone and 13" iPad, then
            adapt.
          </li>
          <li>
            <strong>Use templates with device frames.</strong> Instead of
            managing raw pixel files, use a tool that wraps your app
            screenshots in the correct device bezel automatically.
          </li>
          <li>
            <strong>Export all sizes in one step.</strong> Manual resizing for
            each device is the main time sink. A batch export workflow
            eliminates it.
          </li>
          <li>
            <strong>Screenshot Bro handles all of this.</strong> Set up your
            rows with the device sizes you need, design once, and export every
            size at 1x, 2x, or 3x with one click.
          </li>
        </ul>

        </article>
        <BlogCTA message="Stop managing screenshot sizes manually." />
        <RelatedPosts currentSlug={SLUG} />
      </div>
    </ContentLayout>
  );
}
