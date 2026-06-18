import type { Route } from "./+types/blog.app-store-app-preview-video-specs";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-app-preview-video-specs";

const VIDEO_SPECS = [
  {
    device: "iPhone 6.9\" (iPhone 17 Pro Max, 16 Pro Max)",
    resolution: "886 × 1920 or 1290 × 2796 (portrait)",
    note: "Accepted for the 6.9-inch display family.",
  },
  {
    device: "iPhone 6.5\" (older Plus / Pro Max)",
    resolution: "886 × 1920 or 1242 × 2688 (portrait)",
    note: "Still accepted for older 6.5-inch listings.",
  },
  {
    device: "iPhone 6.1\"–6.3\" (standard / Pro)",
    resolution: "886 × 1920 or 1170 × 2532 (portrait)",
    note: "Matches the standard iPhone display size.",
  },
  {
    device: "iPad 13\" / 12.9\"",
    resolution: "1200 × 1600 or 2048 × 2732 (portrait)",
    note: "Use the largest iPad size you support.",
  },
  {
    device: "iPad 11\"",
    resolution: "1200 × 1600 or 1668 × 2388 (portrait)",
    note: "Landscape variants are also accepted.",
  },
  {
    device: "Mac",
    resolution: "1920 × 1080 or 3840 × 2160 (16:9)",
    note: "Mac previews are widescreen, not device-shaped.",
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
      ctaMessage="Design the screenshots that sit beside your app preview — every device size, every locale — in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/upload-screenshots-to-app-store-connect",
          label: "Upload to App Store Connect",
          description: "the same upload flow handles your preview poster screenshots.",
        },
        {
          href: "/blog/app-store-screenshot-sizes",
          label: "App Store screenshot sizes",
          description: "match your preview to the screenshot set for each device.",
        },
        {
          href: "/blog/app-store-screenshots-rejected-fix",
          label: "Why screenshots get rejected",
          description: "many preview rejections share the same metadata causes.",
        },
      ]}
      faqs={[
        {
          question: "How long can an App Store app preview be?",
          answer:
            "Apple requires app previews to be between 15 and 30 seconds. Anything shorter or longer is rejected, so plan the edit to land inside that window.",
        },
        {
          question: "Do I need a separate app preview for every device size?",
          answer:
            "You can reuse a preview across display sizes that share the same aspect ratio, but Apple keeps preview slots per display family. At minimum, provide a 6.9-inch iPhone preview; iPad and Mac listings need their own previews if you support those platforms.",
        },
        {
          question: "What is the poster frame?",
          answer:
            "The poster frame is the still image shown before the video plays. You pick it in App Store Connect. Choose a frame that reads clearly on its own, because many users see only the poster, not the playing video.",
        },
        {
          question: "Can I capture an app preview in the iOS Simulator?",
          answer:
            "Apple's guidance is that previews should be captured from a real device for the most authentic result, but a clean Simulator recording at the correct resolution is widely used. Either way the footage must come from your actual app UI, not animated marketing mockups.",
        },
      ]}
    >
      <p>
        Screenshots and app preview videos are the two visual assets that decide
        whether a visitor to your App Store listing taps Get. Screenshots get
        most of the attention, but the app preview is the only asset that shows
        your app actually moving — and it autoplays on the product page. This
        guide covers the 2026 App Store app preview specs and how to make one
        that passes review.
      </p>
      <p>
        Spec numbers below reflect Apple&apos;s published requirements at the time
        of writing (checked June 18, 2026). Always confirm against Apple&apos;s
        current{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-preview-specifications/"
          target="_blank"
          rel="noopener noreferrer"
        >
          app preview specifications
        </a>{" "}
        before you export, because Apple updates accepted resolutions as new
        devices ship.
      </p>

      <h2>App Preview vs Screenshots</h2>
      <p>
        A screenshot is a still image; an app preview is a 15–30 second video.
        Apple shows up to three app previews per localization, and they appear
        before your screenshots in the gallery. When a preview exists, it can
        autoplay (muted) in search results and on the product page, which means
        the first few seconds carry the same weight as your first screenshot.
      </p>
      <p>
        Like screenshots, previews must be captured from your app&apos;s real UI.
        Apple rejects previews that are mostly marketing animation, narration
        over stock footage, or content that does not represent the actual app
        experience.
      </p>

      <h2>2026 App Preview Specs</h2>
      <p>
        Previews use H.264 or Apple ProRes in a <code>.mov</code>,{" "}
        <code>.m4v</code>, or <code>.mp4</code> container, at 30 fps, with a
        length of 15–30 seconds. The accepted frame resolutions depend on the
        target display:
      </p>
      <table>
        <thead>
          <tr>
            <th>Display</th>
            <th>Accepted resolution</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {VIDEO_SPECS.map((spec) => (
            <tr key={spec.device}>
              <td>{spec.device}</td>
              <td>{spec.resolution}</td>
              <td>{spec.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The lower resolutions in each row (for example 886 × 1920 for iPhone)
        are the historical preview targets; the higher numbers match the
        device&apos;s native screenshot resolution. When in doubt, capture at the
        device&apos;s native resolution and let App Store Connect validate it.
      </p>

      <h2>Where the Preview Appears and Why the Poster Frame Matters</h2>
      <p>
        On the product page, the preview sits in the first gallery slot and can
        autoplay without sound. In search results, an autoplaying preview can
        replace your leading screenshots. But many impressions never reach the
        play state — users scroll past, or autoplay is disabled by connection or
        settings — so the still <strong>poster frame</strong> you select in App
        Store Connect is effectively your first screenshot. Pick a frame that
        communicates the core benefit on its own.
      </p>

      <h2>How to Record an App Preview</h2>
      <ol>
        <li>
          <strong>Script the 15–30 seconds.</strong> Open on the core job, show
          two or three key actions, end on the payoff. Treat it like your
          screenshot sequence in motion.
        </li>
        <li>
          <strong>Capture clean footage.</strong> Record from a real device via
          QuickTime screen recording, or from the iOS Simulator at the correct
          resolution. Keep the status bar tidy and avoid personal data.
        </li>
        <li>
          <strong>Edit to spec.</strong> Trim to length, keep 30 fps, and export
          H.264 at the target resolution. You can add brief text overlays, but
          the underlying footage must be your real app.
        </li>
        <li>
          <strong>Choose the poster frame.</strong> In App Store Connect, set a
          poster frame that reads well as a still.
        </li>
      </ol>

      <h2>Upload and Common Rejection Reasons</h2>
      <p>
        App previews upload through the same App Store Connect media flow as
        screenshots. The most common review problems are: the video is shorter
        than 15s or longer than 30s; the resolution does not match an accepted
        size; the content is mostly non-app marketing animation; or it shows
        device frames, hands, or hardware that Apple disallows in the preview
        frame itself. Fix the spec mismatch first, then re-check that every
        second comes from your real UI.
      </p>
      <p>
        Source check: Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/app-store/app-previews/"
          target="_blank"
          rel="noopener noreferrer"
        >
          app previews overview
        </a>{" "}
        and{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-preview-specifications/"
          target="_blank"
          rel="noopener noreferrer"
        >
          preview specifications
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
