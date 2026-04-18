import type { Route } from "./+types/blog.localize-app-store-screenshots";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "localize-app-store-screenshots";

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
      <article className="max-w-3xl mx-auto prose-policy">
        <BlogPostHeader slug={SLUG} />

        <p>
          You support 6 languages. Each language needs 10 screenshots. Each
          screenshot exists in 3 device sizes. That is 180 files — and you
          rebuild them every time you update the app. It does not have to be
          this painful.
        </p>

        <h2>The Multiplication Problem</h2>
        <p>
          Localization turns a manageable screenshot task into a combinatorial
          explosion. The math is simple:{" "}
          <code>screenshots x languages x devices = files</code>. At 5
          languages and 2 device sizes, a 10-screenshot set becomes 100 files.
          Most teams either skip localization entirely or burn a full day on
          it.
        </p>

        <h2>Strategy 1: Separate Design From Content</h2>
        <p>
          The layout, device frame, background, and positioning should be
          defined once. Only the text changes between languages. If you are
          copying an entire Figma artboard for each locale, you are doing
          redundant work — and every design tweak means updating every copy.
        </p>
        <p>
          Use a template-based workflow where the visual design is shared and
          text is overridden per locale. This is the approach Screenshot Bro
          uses: add locales, set per-shape text overrides, and the layout
          stays identical.
        </p>

        <h2>Strategy 2: Handle Right-to-Left Early</h2>
        <p>
          Arabic, Hebrew, and Persian are RTL languages. Text alignment,
          reading order, and sometimes layout direction need to flip. If your
          screenshot tool does not support per-locale positioning, RTL
          languages require manual adjustments for every screenshot.
        </p>
        <p>
          Screenshot Bro supports per-shape position overrides per locale, so
          you can mirror text placement for RTL languages without duplicating
          the entire template.
        </p>

        <h2>Strategy 3: Export Everything at Once</h2>
        <p>
          The export step is where most manual workflows fall apart. Exporting
          locale by locale, renaming files, organizing into folders — it adds
          up fast. The ideal workflow exports every language, every device
          size, in one action with predictable folder structure.
        </p>
        <p>
          Screenshot Bro's batch export creates organized folders by locale
          and row automatically:{" "}
          <code>en/iPhone 6.9/01_screenshot.png</code>,{" "}
          <code>de/iPhone 6.9/01_screenshot.png</code>, and so on.
        </p>

        <h2>Strategy 4: Track Translation Progress</h2>
        <p>
          With 30 possible languages, it is easy to miss a translation. Use a
          tool that shows completion status per locale so you can see at a
          glance which languages are fully translated and which are still
          missing overrides.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          Localization is one of the highest-ROI things you can do for your
          App Store listing. Localized screenshots convert 25-40% better in
          non-English markets. The barrier is not the translation itself — it
          is the repetitive design and export work. Eliminate that, and
          localization becomes a reasonable task instead of a dreaded one.
        </p>

        <BlogCTA message="Localize your screenshots in minutes, not hours." />
      </article>
    </ContentLayout>
  );
}
