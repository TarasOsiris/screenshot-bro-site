import type { Route } from "./+types/blog.screenshots-that-convert";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "screenshots-that-convert";

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
          Most people spend less than 7 seconds on your App Store listing
          before deciding. Your screenshots are doing more selling than your
          description ever will. Here is what separates high-converting
          screenshot sets from forgettable ones.
        </p>

        <h2>1. Lead With the Outcome, Not the Feature</h2>
        <p>
          Your first screenshot should answer "what does this app do for me?"
          — not "what does the UI look like." Show the end result: a completed
          task, a beautiful output, a solved problem. The feature details come
          later.
        </p>
        <p>
          <strong>Bad:</strong> "Dashboard view with sidebar navigation"
          <br />
          <strong>Good:</strong> "Track every fuel stop in one tap"
        </p>

        <h2>2. Use Short, Benefit-Driven Copy</h2>
        <p>
          Each screenshot gets one headline — 4 to 8 words max. Write in the
          second person ("Export your screenshots in one click") and focus on
          what the user gains, not what the app contains.
        </p>
        <ul>
          <li>Keep text above the device frame so it reads first</li>
          <li>Use a consistent font size and position across all screenshots</li>
          <li>One idea per screenshot — do not overload</li>
        </ul>

        <h2>3. The First Two Screenshots Are Everything</h2>
        <p>
          On the App Store, only the first 2–3 screenshots are visible without
          scrolling. These must communicate your app's core value. Save the
          secondary features (settings, integrations, edge cases) for
          positions 4–10.
        </p>

        <h2>4. Use Real Device Frames</h2>
        <p>
          Device frames add credibility and visual structure. A raw screenshot
          floating in space looks unfinished. Wrap it in the actual device
          bezel your users will see it on — iPhone, iPad, or Mac.
        </p>
        <p>
          Screenshot Bro includes an up-to-date library of Apple and Android
          device frames with configurable body colors, so your frames always
          match your brand.
        </p>

        <h2>5. Design a Consistent Visual System</h2>
        <p>
          Pick one background style and stick with it across all screenshots.
          Gradient backgrounds work well because they add depth without
          competing with the device frame. Use your brand's color palette and
          maintain consistent spacing.
        </p>
        <ul>
          <li>Same gradient direction and color family across the set</li>
          <li>Consistent text placement and hierarchy</li>
          <li>Optional: span one background across multiple screenshots for a panoramic effect</li>
        </ul>

        <h2>6. Localize — the ROI Is Massive</h2>
        <p>
          Localized screenshots convert 25-40% better in non-English markets.
          If you support multiple languages, your screenshots should too.
          Translate the headline copy, not just the app UI. Users notice when
          the marketing text is in their language.
        </p>

        <h2>7. Test and Iterate</h2>
        <p>
          Apple supports up to 10 screenshots and 3 app previews per
          localization. Use all the slots. Try different lead screenshots and
          measure the impact on conversion rate through App Store Connect
          analytics.
        </p>

        </article>
        <BlogCTA message="Design screenshot sets that convert — without the Figma busywork." />
      </div>
    </ContentLayout>
  );
}
