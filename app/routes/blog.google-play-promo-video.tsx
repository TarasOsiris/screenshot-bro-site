import type { Route } from "./+types/blog.google-play-promo-video";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "google-play-promo-video";

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
      ctaMessage="Design the feature graphic and screenshots that sit beside your promo video in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/google-play-feature-graphic-size-template-examples",
          label: "Google Play feature graphic",
          description: "the graphic your promo video plays over.",
        },
        {
          href: "/blog/app-store-app-preview-video-specs",
          label: "App Store app preview specs",
          description: "the iOS equivalent, which works very differently.",
        },
        {
          href: "/blog/google-play-store-listing-graphics-checklist",
          label: "Play graphics checklist",
          description: "where the promo video fits in the full listing.",
        },
      ]}
      faqs={[
        {
          question: "How do I add a promo video to Google Play?",
          answer:
            "Google Play does not host the video file. You add a single YouTube URL in the Play Console store listing, and Play embeds it. The video must be a public or unlisted YouTube video, not an uploaded MP4.",
        },
        {
          question: "Where does the Google Play promo video appear?",
          answer:
            "When you add a video URL, it plays over your feature graphic at the top of the store listing. Users tap the play button on the feature graphic to watch it, so the feature graphic doubles as the video's poster.",
        },
        {
          question: "How long should a Play promo video be?",
          answer:
            "There is no hard limit because it is a YouTube video, but keep it short — roughly 30 seconds to two minutes. Lead with the core experience in the first few seconds, since most viewers do not finish.",
        },
        {
          question: "Can the promo video contain ads?",
          answer:
            "No. Google requires the linked YouTube video to have monetization and ads turned off, and it must not be age-restricted, so it can play inside the store listing.",
        },
      ]}
    >
      <p>
        A Google Play promo video works nothing like an App Store app preview.
        On Play, you do not upload a video file — you paste a single YouTube URL,
        and the store plays it over your feature graphic. This guide covers the
        specs and the rules that keep it from being rejected.
      </p>

      <h2>It Is a YouTube URL, Not an Uploaded File</h2>
      <p>
        The single most important fact: Google Play&apos;s promo video field takes a
        YouTube link. You host the video on YouTube and add its URL in the Play
        Console store listing. That means the video follows YouTube&apos;s
        specifications, not a fixed Play resolution, and you can update it any
        time by swapping the link.
      </p>

      <h2>The Rules</h2>
      <ul>
        <li>
          <strong>Public or unlisted</strong> YouTube video — not private.
        </li>
        <li>
          <strong>No ads or monetization</strong> on the video.
        </li>
        <li>
          <strong>Not age-restricted</strong>, so it can embed in the listing.
        </li>
        <li>
          <strong>Landscape</strong> is recommended; it plays over the feature
          graphic.
        </li>
        <li>
          <strong>Link the watch URL</strong> (the full youtube.com/watch?v=…
          form), not a Shorts or channel link.
        </li>
      </ul>

      <h2>Where It Appears</h2>
      <p>
        When a video URL is present, Play overlays a play button on your{" "}
        <a href="/blog/google-play-feature-graphic-size-template-examples">
          feature graphic
        </a>
        . The feature graphic is effectively the video&apos;s poster frame, so design
        it to stand on its own — many users see only the graphic and never press
        play.
      </p>

      <h2>How It Differs from an App Store App Preview</h2>
      <p>
        On iOS, an{" "}
        <a href="/blog/app-store-app-preview-video-specs">app preview</a> is an
        uploaded 15–30 second file at exact device resolutions that autoplays
        muted in the gallery. On Play, the promo video is a hosted YouTube link
        of flexible length that plays on tap. If you produce one video for both
        stores, you will still need to export a short, spec-exact cut for the App
        Store and simply link the YouTube version on Play.
      </p>

      <h2>Make a Promo Video Worth Linking</h2>
      <ol>
        <li>Open on the core experience in the first 3–5 seconds.</li>
        <li>Show real app footage, not just marketing animation.</li>
        <li>Keep it short; aim for 30 seconds to two minutes.</li>
        <li>Design a feature graphic that works as a still poster.</li>
      </ol>

      <p>
        Source check: Google&apos;s{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9866151"
          target="_blank"
          rel="noopener noreferrer"
        >
          store listing requirements
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
