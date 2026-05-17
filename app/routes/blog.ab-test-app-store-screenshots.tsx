import type { Route } from "./+types/blog.ab-test-app-store-screenshots";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "ab-test-app-store-screenshots";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches);
export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  return (
    <ContentLayout>
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={SLUG} />

          <p>
            Screenshots are one of the easiest App Store assets to change, but
            one of the hardest to judge by opinion. A/B testing gives you a way
            to compare screenshot ideas against real store traffic instead of
            arguing about which version looks better in a design file.
          </p>
          <p>
            Apple and Google both support store listing experiments. Apple calls
            its system{" "}
            <a
              href="https://developer.apple.com/app-store/product-page-optimization/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Product Page Optimization
            </a>
            . Google calls its system{" "}
            <a
              href="https://support.google.com/googleplay/android-developer/answer/12053285"
              target="_blank"
              rel="noopener noreferrer"
            >
              Store Listing Experiments
            </a>
            . The mechanics are different, but the screenshot strategy is the
            same: test one clear hypothesis at a time.
          </p>

          <h2>What You Can Test</h2>
          <p>
            On the App Store, Product Page Optimization lets you test up to
            three alternate product page versions against your original. Apple
            says you can test app icons, screenshots, and app preview videos,
            then view results in App Analytics and apply the best-performing
            version.
          </p>
          <p>
            On Google Play, Store Listing Experiments can test graphic assets
            such as icons, feature graphics, screenshots, and promo videos.
            Localized experiments can also test text fields such as short and
            full descriptions. Google says each app can run one default graphics
            experiment or up to five localized experiments at the same time.
          </p>

          <h2>Good Screenshot Test Ideas</h2>
          <ul>
            <li>
              <strong>Outcome-first vs feature-first:</strong> lead with the
              user benefit, or lead with the product UI.
            </li>
            <li>
              <strong>Different first screenshot:</strong> test the opening
              screenshot because it carries the most first-impression weight.
            </li>
            <li>
              <strong>Plain UI vs framed UI:</strong> test raw interface
              screenshots against device-framed marketing screenshots.
            </li>
            <li>
              <strong>Short headline vs specific headline:</strong> compare
              emotional clarity against concrete feature detail.
            </li>
            <li>
              <strong>Localized concept:</strong> test whether a market-specific
              feature or phrase performs better for one locale.
            </li>
          </ul>

          <h2>What Not to Test First</h2>
          <p>
            Do not change every screenshot, headline, background, and feature
            order at once unless you only care which complete set wins. If the
            variant performs better, you will not know why. For indie apps with
            limited traffic, that wastes useful signal.
          </p>
          <p>
            Start with one high-impact change: the first screenshot, the first
            headline, the main visual style, or the feature order. Once you have
            a winner, use it as the new baseline.
          </p>

          <h2>How to Run the Test on the App Store</h2>
          <ol>
            <li>Create a clean screenshot variant with the same store sizes as your current listing.</li>
            <li>Open App Store Connect and create a Product Page Optimization test.</li>
            <li>Choose up to three treatments and decide how much traffic enters the test.</li>
            <li>Keep the test name descriptive so you can understand it later in App Analytics.</li>
            <li>Wait for enough data before applying a winner.</li>
          </ol>
          <p>
            Apple notes that people selected for a treatment see the same
            treatment for the duration of the test. Alternate screenshots and
            app previews may appear in search results and other App Store
            surfaces, just like your original assets.
          </p>

          <h2>How to Run the Test on Google Play</h2>
          <ol>
            <li>Open Play Console and go to Store presence, then Store listing experiments.</li>
            <li>Create a default graphics experiment or a localized experiment.</li>
            <li>Select the target metric, audience, variants, and minimum detectable effect.</li>
            <li>Test one attribute at a time when possible.</li>
            <li>Review the result and apply the winning variant or keep the current listing.</li>
          </ol>
          <p>
            Google recommends retained first-time installers as a target metric.
            It also warns that users who are not logged in to Google Play will
            not see experimental variants.
          </p>

          <h2>How Much Traffic Do You Need?</h2>
          <p>
            There is no universal number. Low-traffic apps need more time, and
            tiny visual differences need more traffic to detect. If your app
            gets limited store visits, test bigger differences: a clearer first
            screenshot, a new value proposition, or a localized angle.
          </p>
          <p>
            Treat inconclusive results as information. They may mean the change
            was too small, the audience was too small, or both versions were
            roughly equivalent.
          </p>

          <h2>A Practical Screenshot Testing Checklist</h2>
          <ul>
            <li>Write one hypothesis before designing the variant.</li>
            <li>Change one major idea per test.</li>
            <li>Use valid App Store and Google Play screenshot dimensions.</li>
            <li>Keep localization consistent between control and variant.</li>
            <li>Do not stop a test just because early numbers look exciting.</li>
            <li>Document what changed so the next test starts from real learning.</li>
          </ul>

          <h2>Where Screenshot Bro Fits</h2>
          <p>
            A/B testing creates screenshot variants. That is exactly where
            manual workflows get messy: duplicate Figma files, renamed PNGs,
            locale folders, and repeated exports. <a href="/">Screenshot Bro</a>{" "}
            helps you keep screenshot sets structured so you can create
            variants, localize them, and export the right files without losing
            the baseline.
          </p>
          <p>
            If you are still designing variants by hand, read{" "}
            <a href="/blog/design-app-store-screenshots-in-figma">
              How to Design App Store Screenshots in Figma
            </a>{" "}
            and then compare that workflow with a dedicated{" "}
            <a href="/blog/best-app-store-screenshot-tools">
              app store screenshot tool
            </a>
            .
          </p>
        </article>

        <BlogCTA
          message="Create screenshot variants without duplicating your whole workflow."
          buttonLabel="Download Screenshot Bro"
        />
        <RelatedPosts currentSlug={SLUG} />
      </div>
    </ContentLayout>
  );
}
