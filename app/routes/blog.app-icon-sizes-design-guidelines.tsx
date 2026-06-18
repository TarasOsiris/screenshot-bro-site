import type { Route } from "./+types/blog.app-icon-sizes-design-guidelines";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-icon-sizes-design-guidelines";

const ICON_SIZES = [
  {
    store: "App Store (iOS / iPadOS)",
    size: "1024 × 1024 px",
    format: "PNG or JPEG, sRGB, flattened, no alpha/transparency",
    note: "Apple generates the smaller sizes from this single asset.",
  },
  {
    store: "App Store (macOS)",
    size: "1024 × 1024 px",
    format: "PNG, may include transparency and rounded corners",
    note: "Mac icons keep their shape; iOS/iPadOS icons are masked by the system.",
  },
  {
    store: "Google Play",
    size: "512 × 512 px",
    format: "32-bit PNG with alpha",
    note: "Play applies its own mask; keep key content inside the safe zone.",
  },
  {
    store: "Android adaptive icon (in-app)",
    size: "108 × 108 dp (foreground + background layers)",
    format: "Vector or PNG layers",
    note: "Only the central 66 dp is guaranteed visible after masking.",
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
      ctaMessage="Once your icon is set, your screenshots are next. Design and upload them for every store size in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-sizes",
          label: "App Store screenshot sizes",
          description: "the matching screenshot dimensions for every Apple device.",
        },
        {
          href: "/blog/google-play-store-listing-graphics-checklist",
          label: "Google Play graphics checklist",
          description: "icon, feature graphic, and screenshots in one Play checklist.",
        },
        {
          href: "/blog/app-store-screenshots-rejected-fix",
          label: "Why listings get rejected",
          description: "icon and screenshot rejections often share the same causes.",
        },
      ]}
      faqs={[
        {
          question: "What size is an App Store icon?",
          answer:
            "The App Store icon is 1024 × 1024 pixels. For iOS and iPadOS it must be a flattened PNG or JPEG with no alpha channel and no transparency; Apple generates all the smaller home-screen sizes from this single asset.",
        },
        {
          question: "Why does my App Store icon get rejected for transparency?",
          answer:
            "iOS and iPadOS App Store icons cannot contain an alpha channel. If your 1024px export has transparency — even a fully opaque image saved with an alpha channel — App Store Connect rejects it. Flatten the icon onto a solid background and re-export without alpha.",
        },
        {
          question: "What size is a Google Play icon?",
          answer:
            "The Google Play Store listing icon is 512 × 512 pixels, a 32-bit PNG with alpha. Play applies its own mask, so keep logos and text inside the safe zone rather than at the very edges.",
        },
        {
          question: "Should I add rounded corners to my icon?",
          answer:
            "No, for iOS, iPadOS, and Google Play — the system rounds the corners for you, so submit a full square. Add your own corner radius only for macOS icons, which keep the shape you provide.",
        },
      ]}
    >
      <p>
        Your app icon is the smallest, most-repeated piece of your store
        listing — it appears in search results, on the product page, and on
        every home screen. Getting the size and format wrong is also one of the
        most common reasons an otherwise-finished build bounces at upload. This
        2026 reference covers the required icon sizes and design rules for the
        App Store and Google Play.
      </p>
      <p>
        Sizes below were checked against Apple and Google developer
        documentation on June 18, 2026. Always confirm against the live{" "}
        <a
          href="https://developer.apple.com/design/human-interface-guidelines/app-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Human Interface Guidelines
        </a>{" "}
        and{" "}
        <a
          href="https://developer.android.com/distribute/google-play/resources/icon-design-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play icon specifications
        </a>{" "}
        before you submit.
      </p>

      <h2>Why the Icon Matters for Discovery</h2>
      <p>
        In a list of search results, users judge your app by its icon before
        they read a single word. A legible, distinct icon raises tap-through;
        a muddy or text-heavy one loses installs even when the app ranks well.
        Treat the icon as the first conversion lever, not an afterthought.
      </p>

      <h2>Icon Sizes by Store</h2>
      <table>
        <thead>
          <tr>
            <th>Store / context</th>
            <th>Size</th>
            <th>Format</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {ICON_SIZES.map((row) => (
            <tr key={row.store}>
              <td>{row.store}</td>
              <td>{row.size}</td>
              <td>{row.format}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>The No-Alpha Rule (iOS / iPadOS)</h2>
      <p>
        The single most common icon rejection on Apple platforms is a
        transparent or alpha-containing icon. iOS and iPadOS App Store icons
        must be <strong>fully opaque, with no alpha channel</strong>. This trips
        up teams whose design export always carries an alpha channel even when
        nothing is transparent. Flatten the 1024px icon onto a solid background
        and re-export as PNG or JPEG without alpha. (macOS icons are the
        exception — they may use transparency and their own rounded shape.)
      </p>

      <h2>The Safe Zone (Google Play and Adaptive Icons)</h2>
      <p>
        Google Play applies a mask to your 512px icon, and Android&apos;s adaptive
        icons can be masked into circles, squircles, or rounded squares
        depending on the device. Keep your logo and any critical detail within
        the central safe area — for a 108 dp adaptive icon, only the inner 66 dp
        is guaranteed to stay visible. Anything near the edges may be clipped.
      </p>

      <h2>Design Do and Don&apos;t</h2>
      <ul>
        <li>
          <strong>Do</strong> design at full 1024px and check legibility scaled
          down to ~40px — the size users actually see in search.
        </li>
        <li>
          <strong>Do</strong> use a simple, single focal mark with strong
          contrast against both light and dark backgrounds.
        </li>
        <li>
          <strong>Don&apos;t</strong> put words or a tagline in the icon; text
          becomes unreadable at small sizes.
        </li>
        <li>
          <strong>Don&apos;t</strong> add your own rounded corners or drop shadow
          for iOS/iPadOS/Play — the system handles masking.
        </li>
        <li>
          <strong>Don&apos;t</strong> reuse a screenshot or photo as the icon;
          icons need a flat, iconographic mark.
        </li>
      </ul>

      <h2>Exporting Every Size</h2>
      <p>
        For modern submissions you usually provide one master asset per store —
        1024px for the App Store, 512px for Google Play — and the platform
        generates the rest. Keep a layered source file so you can re-export
        cleanly when a store changes its requirements, and verify the final
        files meet the format rules (no alpha for iOS, 32-bit PNG for Play)
        before upload.
      </p>

      <h2>Common Rejection Reasons</h2>
      <ul>
        <li>iOS icon contains an alpha channel or transparency.</li>
        <li>Icon dimensions are not exactly 1024 × 1024 (Apple) or 512 × 512 (Play).</li>
        <li>Hand-added rounded corners leave visible gaps after system masking.</li>
        <li>Critical content sits outside the Play/adaptive safe zone and gets clipped.</li>
        <li>Icon includes Apple/Google trademarks, pricing, or "free" badges.</li>
      </ul>
    </BlogArticleShell>
  );
}
