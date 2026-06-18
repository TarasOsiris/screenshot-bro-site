import type { Route } from "./+types/blog.app-store-screenshots-for-games";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-screenshots-for-games";

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
      ctaMessage="Build a game screenshot set with bold captions and device frames, then export every size in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-order",
          label: "Screenshot order",
          description: "sequence gameplay, progression, and modes effectively.",
        },
        {
          href: "/blog/screenshots-that-convert",
          label: "Screenshots that convert",
          description: "the conversion principles behind every category.",
        },
        {
          href: "/blog/google-play-feature-graphic-size-template-examples",
          label: "Google Play feature graphic",
          description: "games lean heavily on the feature graphic on Play.",
        },
      ]}
      faqs={[
        {
          question: "Should game screenshots show gameplay or marketing art?",
          answer:
            "Lead with real gameplay. Apple and Google both expect screenshots to represent the actual app, and players want to see what they will actually play. You can stylize with captions and backgrounds, but the screen should show the game running, not only key art.",
        },
        {
          question: "Do landscape games need landscape screenshots?",
          answer:
            "Yes. Match your screenshots to how the game is played. A landscape game should use landscape screenshots so the store preview reflects the real orientation and aspect ratio of the experience.",
        },
        {
          question: "How important is the first game screenshot?",
          answer:
            "Critical. The first one to three screenshots can appear in search results and decide the install. Lead with your most exciting, instantly readable gameplay moment, not a title screen or a tutorial.",
        },
      ]}
    >
      <p>
        Games are the most competitive category on both stores, and screenshots
        carry more weight than in most utility apps — players decide largely on
        what the game looks like in motion. This guide covers what makes a game
        screenshot set convert.
      </p>

      <h2>Lead with Gameplay, Not the Title Screen</h2>
      <p>
        The fastest way to lose a player is to open on a logo, a loading screen,
        or a menu. Your first screenshot should show the most exciting, instantly
        readable moment of actual gameplay. Apple can surface the first one to
        three screenshots in search, so the opening has to sell the fantasy of
        playing in a single glance.
      </p>

      <h2>Match Orientation and Aspect Ratio</h2>
      <p>
        If the game is played in landscape, use landscape screenshots; if
        portrait, use portrait. A mismatch makes the preview feel wrong and wastes
        the frame. Capture at the device&apos;s native resolution so the art stays
        crisp.
      </p>

      <h2>A Game Screenshot Sequence</h2>
      <ol>
        <li>
          <strong>1:</strong> the signature gameplay moment — your hook.
        </li>
        <li>
          <strong>2–3:</strong> core mechanics and variety (modes, levels,
          characters).
        </li>
        <li>
          <strong>4–5:</strong> progression, customization, or competition.
        </li>
        <li>
          <strong>6–8:</strong> social proof, events, awards, or multiplayer.
        </li>
      </ol>

      <h2>Captions That Sell the Fantasy</h2>
      <p>
        Game captions should reinforce the emotion and the goal — &quot;Build your
        empire,&quot; &quot;Race 50 tracks,&quot; &quot;Outsmart real players&quot; — not list technical
        features. Keep them short and high-contrast so they read over busy
        artwork. For more on caption craft, see{" "}
        <a href="/blog/app-store-screenshot-copywriting-examples">
          screenshot caption examples
        </a>
        .
      </p>

      <h2>Don&apos;t Forget the Feature Graphic on Play</h2>
      <p>
        On Google Play, games rely heavily on the{" "}
        <a href="/blog/google-play-feature-graphic-size-template-examples">
          feature graphic
        </a>{" "}
        and the promo video, which sit above the screenshots. Treat the feature
        graphic as your hero key art and let the screenshots prove the gameplay
        behind it.
      </p>

      <h2>Localize for Top Gaming Markets</h2>
      <p>
        Games travel, and localized screenshots convert noticeably better in
        major gaming markets. Translate captions and, where possible, show a
        localized UI so the set feels native — see the{" "}
        <a href="/blog/app-store-screenshot-localization-guide">
          localization guide
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
