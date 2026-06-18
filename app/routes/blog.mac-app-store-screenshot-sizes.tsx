import type { Route } from "./+types/blog.mac-app-store-screenshot-sizes";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "mac-app-store-screenshot-sizes";

const MAC_SIZES = [
  { size: "1280 × 800 px", ratio: "16:10", note: "Smallest accepted Mac screenshot size." },
  { size: "1440 × 900 px", ratio: "16:10", note: "Common MacBook Air-class size." },
  { size: "2560 × 1600 px", ratio: "16:10", note: "Retina equivalent of 1280 × 800." },
  { size: "2880 × 1800 px", ratio: "16:10", note: "Retina equivalent of 1440 × 900; the safest high-res choice." },
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
      ctaMessage="Design Mac App Store screenshots at the exact accepted sizes — with MacBook and iMac frames — in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-sizes",
          label: "App Store screenshot sizes",
          description: "the full size table for iPhone and iPad alongside Mac.",
        },
        {
          href: "/blog/iphone-ipad-app-store-screenshots",
          label: "iPhone and iPad screenshots",
          description: "what to upload for the mobile side of your listing.",
        },
        {
          href: "/blog/upload-screenshots-to-app-store-connect",
          label: "Upload to App Store Connect",
          description: "the same upload flow handles Mac screenshots.",
        },
      ]}
      faqs={[
        {
          question: "What size are Mac App Store screenshots?",
          answer:
            "Mac App Store screenshots use a 16:10 aspect ratio at one of four accepted sizes: 1280 × 800, 1440 × 900, 2560 × 1600, or 2880 × 1800 pixels. Most developers upload 2880 × 1800 for the sharpest result on Retina displays.",
        },
        {
          question: "How many Mac screenshots can I upload?",
          answer:
            "You can upload up to 10 screenshots for a Mac app, and you need at least one. As with iOS, the first few do most of the conversion work.",
        },
        {
          question: "Do Mac screenshots need to be the actual app window?",
          answer:
            "Apple expects Mac screenshots to show your app's real interface. You can place the window on a background and add captions, but the screenshot must represent the actual macOS app, not an iOS build or a marketing illustration.",
        },
        {
          question: "Can Mac screenshots have transparency?",
          answer:
            "No. Like other App Store screenshots, Mac screenshots should be flattened RGB images (PNG or JPEG) with no alpha channel. Flatten any framed composition onto a solid or gradient background before uploading.",
        },
      ]}
    >
      <p>
        If you ship a Mac app, the App Store needs a separate set of screenshots
        from your iPhone and iPad assets — at Mac-specific sizes and a wider
        16:10 aspect ratio. This reference lists the accepted Mac App Store
        screenshot sizes for 2026 and the rules that trip people up.
      </p>
      <p>
        Sizes were checked against Apple&apos;s documentation on June 18, 2026.
        Confirm against the current{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications/"
          target="_blank"
          rel="noopener noreferrer"
        >
          screenshot specifications
        </a>{" "}
        before uploading.
      </p>

      <h2>Mac App Store Screenshot Sizes</h2>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Aspect ratio</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {MAC_SIZES.map((row) => (
            <tr key={row.size}>
              <td>{row.size}</td>
              <td>{row.ratio}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        All four sizes share the same 16:10 shape, so you can design once and
        export the largest size. Upload 2880 × 1800 unless you have a specific
        reason to use a smaller asset.
      </p>

      <h2>How Mac Screenshots Differ from iPhone and iPad</h2>
      <ul>
        <li>
          <strong>Aspect ratio:</strong> Mac is landscape 16:10, not the tall
          portrait shape of iPhone screenshots.
        </li>
        <li>
          <strong>Separate asset set:</strong> Mac screenshots live in their own
          slots in App Store Connect; they are not generated from iOS assets.
        </li>
        <li>
          <strong>Window-based:</strong> Mac apps are windows, so screenshots
          usually show the app window — optionally on a backdrop — rather than a
          full-bleed device screen.
        </li>
      </ul>

      <h2>Design and Upload Tips</h2>
      <ol>
        <li>
          Capture the real macOS window at full Retina resolution, then place it
          on a clean background sized to 2880 × 1800.
        </li>
        <li>
          Keep captions short and high-contrast; landscape gives you horizontal
          room iPhone screenshots do not have.
        </li>
        <li>
          Flatten to RGB PNG or JPEG with no alpha before uploading.
        </li>
        <li>
          Lead with the core workflow in the first one or two screenshots, just
          like iOS.
        </li>
      </ol>
    </BlogArticleShell>
  );
}
