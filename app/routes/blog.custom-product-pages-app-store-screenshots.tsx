import type { Route } from "./+types/blog.custom-product-pages-app-store-screenshots";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "custom-product-pages-app-store-screenshots";

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
            Your default App Store product page has to explain the whole app.
            Custom product pages let you build more focused versions for
            specific campaigns, features, audiences, or seasonal moments. For
            many indie apps, that means creating multiple screenshot sets that
            all come from the same product but tell different stories.
          </p>
          <p>
            Apple says you can publish up to 70 additional custom product pages
            for iPhone and iPad apps. Each page can vary screenshots,
            promotional text, and app previews, and each page gets a unique URL
            you can use in campaigns.
          </p>

          <h2>What Custom Product Pages Are For</h2>
          <p>
            A custom product page is not a replacement for your default listing.
            It is a targeted landing page inside the App Store. Use one when a
            visitor is arriving with a specific intent:
          </p>
          <ul>
            <li>A paid Apple Ads campaign for one feature.</li>
            <li>A seasonal promotion or launch moment.</li>
            <li>A specific audience segment, such as students, freelancers, or teams.</li>
            <li>A local market where one use case matters more than another.</li>
            <li>A deep link into a specific part of your app.</li>
          </ul>

          <h2>What You Can Customize</h2>
          <p>
            According to Apple&apos;s{" "}
            <a
              href="https://developer.apple.com/app-store/custom-product-pages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              custom product pages documentation
            </a>
            , custom product pages can vary screenshots, promotional text, and
            app previews. In App Store Connect, you can start from a blank page
            or copy your default product page, then customize assets for the
            page&apos;s localizations.
          </p>
          <p>
            Apple also says custom product pages can be used with Apple Ads and
            can appear in relevant search results. You can assign keywords to a
            custom product page, but the keywords should match the intent of
            that page and each keyword combination should be unique to one
            custom product page.
          </p>

          <h2>Screenshot Strategy</h2>
          <p>
            The mistake is copying your default screenshots and changing only
            the first headline. A custom product page should feel intentionally
            built for the audience that clicked the link.
          </p>
          <p>
            Build each screenshot set around one angle:
          </p>
          <ul>
            <li>
              <strong>Feature page:</strong> lead with the feature, then show
              the workflow and proof.
            </li>
            <li>
              <strong>Audience page:</strong> use language and examples that
              match the target group.
            </li>
            <li>
              <strong>Seasonal page:</strong> make the campaign relevant, but
              keep the app experience clear.
            </li>
            <li>
              <strong>Localization page:</strong> lead with the use case that
              matters most in that locale.
            </li>
          </ul>

          <h2>Example: One App, Three Pages</h2>
          <p>
            Imagine a habit tracker. The default product page explains the
            whole app. Custom product pages could focus on:
          </p>
          <ul>
            <li>
              <strong>Fitness habits:</strong> workout streaks, progress
              charts, reminders, and Apple Health context.
            </li>
            <li>
              <strong>Study habits:</strong> reading goals, focus sessions, and
              exam prep routines.
            </li>
            <li>
              <strong>New Year campaign:</strong> fresh-start goals, simple
              setup, and week-one progress.
            </li>
          </ul>
          <p>
            The app is the same. The screenshots are different because the
            visitor&apos;s motivation is different.
          </p>

          <h2>How to Build the Screenshot Set</h2>
          <ol>
            <li>Define the campaign intent before opening a design tool.</li>
            <li>Choose the first screenshot headline for that intent.</li>
            <li>Reuse your base screenshot system so frames, fonts, and export sizes stay consistent.</li>
            <li>Replace app screenshots with screens that support the campaign angle.</li>
            <li>Localize the screenshot copy if the page targets a specific market.</li>
            <li>Export the same required device sizes as your default product page.</li>
          </ol>
          <p>
            For valid dimensions, use Apple&apos;s{" "}
            <a
              href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
              target="_blank"
              rel="noopener noreferrer"
            >
              screenshot specifications
            </a>{" "}
            or this site&apos;s{" "}
            <a href="/blog/app-store-screenshot-sizes">
              App Store screenshot sizes guide
            </a>
            .
          </p>

          <h2>Review and Measurement</h2>
          <p>
            Apple says metadata in custom product pages must be submitted for
            review, independent of an app update. Once pages are live, you can
            measure performance in App Analytics, including product page
            impressions, downloads, redownloads, and conversion rates.
          </p>
          <p>
            Do not judge a custom product page only by conversion rate. If a
            page is tied to paid acquisition, also watch retention, proceeds,
            and whether the campaign message attracts the right users.
          </p>

          <h2>Custom Product Pages vs A/B Tests</h2>
          <p>
            Use Product Page Optimization when you want to test variants against
            your default listing. Use custom product pages when you already know
            the audience or campaign and need a targeted App Store landing page.
            They are related, but they solve different problems.
          </p>
          <p>
            For testing strategy, read{" "}
            <a href="/blog/ab-test-app-store-screenshots">
              How to A/B Test App Store and Google Play Screenshots
            </a>
            .
          </p>

          <h2>How Screenshot Bro Helps</h2>
          <p>
            Custom product pages multiply your screenshot workload. One app can
            quickly become a default page, three campaign pages, five locales,
            and multiple device sizes. <a href="/">Screenshot Bro</a> helps by
            keeping your screenshots in reusable local projects with device
            rows, localization, batch export, and App Store Connect upload.
          </p>
        </article>

        <BlogCTA
          message="Build campaign-specific App Store screenshot sets without rebuilding every file by hand."
          buttonLabel="Download Screenshot Bro"
        />
        <RelatedPosts currentSlug={SLUG} />
      </div>
    </ContentLayout>
  );
}
