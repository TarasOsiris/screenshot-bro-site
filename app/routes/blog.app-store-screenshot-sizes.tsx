import type { Route } from "./+types/blog.app-store-screenshot-sizes";
import { SITE_NAME, SITE_URL, APP_STORE_URL } from "~/config/site";
import { AppleLogo } from "~/components/home/icons";
import { ContentLayout } from "~/components/ContentLayout";

export const meta: Route.MetaFunction = () => [
  {
    title: `App Store Screenshot Sizes for Every Apple Device in 2026 — ${SITE_NAME}`,
  },
  {
    name: "description",
    content:
      "A complete reference of required screenshot dimensions for iPhone, iPad, Mac, and Apple Watch — plus tips for managing multiple sizes efficiently.",
  },
];

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: `${SITE_URL}/blog/app-store-screenshot-sizes` },
];

export default function BlogPost() {
  return (
    <ContentLayout
      footerLinks={[
        { label: "\u2190 All posts", href: "/blog" },
        { label: "Screenshot Bro", href: "/" },
      ]}
    >
      <article className="max-w-3xl mx-auto prose-policy">
        <p className="meta">April 8, 2026 &middot; 5 min read</p>
        <h1>App Store Screenshot Sizes for Every Apple Device in 2026</h1>

        <p>
          Apple requires specific screenshot dimensions for each device class.
          Miss a size and App Store Connect will reject your build — or worse,
          your listing will show nothing for that device. Here is every
          required dimension, current as of 2026.
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
              <td>5.5"</td>
              <td>1242 x 2208</td>
              <td>iPhone 8 Plus, 7 Plus, 6s Plus</td>
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
              <td>13" Liquid Retina XDR</td>
              <td>2064 x 2752</td>
              <td>iPad Pro 13" (M4)</td>
            </tr>
            <tr>
              <td>12.9" Liquid Retina XDR</td>
              <td>2048 x 2732</td>
              <td>iPad Pro 12.9" (3rd–6th gen)</td>
            </tr>
            <tr>
              <td>11" Liquid Retina</td>
              <td>1668 x 2388</td>
              <td>iPad Pro 11", iPad Air (M2)</td>
            </tr>
            <tr>
              <td>10.9"</td>
              <td>1640 x 2360</td>
              <td>iPad Air (4th–5th gen), iPad 10th gen</td>
            </tr>
          </tbody>
        </table>

        <h2>Mac Screenshots</h2>
        <p>
          Mac App Store screenshots should be <strong>2880 x 1800</strong>{" "}
          pixels (matching the 16-inch MacBook Pro Retina display) or{" "}
          <strong>1280 x 800</strong> at minimum. Apple accepts up to 10
          screenshots per localization.
        </p>

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

        <div className="mt-10 p-6 rounded-2xl bg-surface-raised border border-border text-center">
          <p className="text-sm text-white/60 mb-4">
            Stop managing screenshot sizes manually.
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm"
          >
            <AppleLogo className="opacity-80" />
            Get Screenshot Bro on the Mac App Store
          </a>
        </div>
      </article>
    </ContentLayout>
  );
}
