import type { Route } from "./+types/blog.app-store-creative-assets";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { type LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-creative-assets";

const PLACEMENTS = [
  {
    placement: "Product page header",
    where: "The top of your product page, above everything else",
    format: "Image or video",
    fallback:
      "No header, and your page opens on the icon, name and screenshots as it does today",
  },
  {
    placement: "Search results",
    where: "The Search tab of the App Store and the Apple Games app",
    format: "Image or video",
    fallback:
      "Your In-App Events, app previews and screenshots appear instead",
  },
  {
    placement: "In-App Events",
    where: "The event card and the event details page",
    format: "16:9 landscape plus 9:16 portrait",
    fallback: "The event uses the media you already supply for it",
  },
  {
    placement: "Featuring and Apple Ads",
    where: "When your app is featured, and in Apple Ads placements",
    format: "Image or video",
    fallback: "Apple uses your existing assets",
  },
] as const;

const CONTENT_RULES = [
  "No specific pricing, discounts, website URLs or copyright symbols — Apple wants assets that stay relevant globally and do not go stale.",
  "No claims you cannot verify, such as awards or recognition the app has not actually received.",
  "No logos or references to other platforms or marketplaces.",
  "No Apple-designated recognitions — Editor's Choice, App of the Day, Game of the Day, Apple Design Award winner. Apple already shows those next to your app itself.",
  "Every asset must meet a 4+ age rating, even when the app's own rating is higher.",
  "Games may use action imagery but must avoid gore, graphic imagery, and weapons pointed directly at a person or at the viewer.",
] as const;

// Posts are written in English only. /{locale}/blog/<slug> 301s to this URL
// (routes/blog.locale-redirect.tsx), so the page always renders as "en".
export async function loader() {
  return { locale: "en" as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches);

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <BlogArticleShell
      slug={SLUG}
      locale={locale}
      tldr="Apple is adding creative assets to the App Store: a product page header above your screenshots, a dedicated asset for search results, and an Asset Library in App Store Connect that accepts assets separately from an app version. They appear on iOS 27 and iPadOS 27 and later, and Apple's October 5, 2026 announcement moved them from &ldquo;coming this fall&rdquo; to documented, with a published spec table and upload steps in App Store Connect. Two things matter now. If you skip the search result asset, your screenshots keep doing that job — up to three of them can show in search. And Apple's asset rules are explicit: no pricing, no discounts, no URLs, no copyright symbols, no other-platform logos, no Apple accolades, and a 4+ age rating on every asset regardless of your app's rating."
      ctaMessage="Redesigning your screenshots for the new App Store layout? Screenshot Bro exports every size at its exact pixel dimensions — free to try."
      ctaHomeLinkLabel="a native App Store screenshot app for Mac"
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-sizes",
          label: "App Store screenshot sizes",
          description:
            "the pixel dimensions Apple still requires for screenshots, device by device.",
        },
        {
          href: "/blog/app-store-screenshots-rejected-fix",
          label: "Why App Store screenshots get rejected",
          description:
            "the metadata rules the new asset guidance restates, and how rejections actually read.",
        },
        {
          href: "/blog/custom-product-pages-app-store-screenshots",
          label: "Custom product pages",
          description:
            "where creative assets can also be used, one variant per campaign.",
        },
        {
          href: "/blog/ab-test-app-store-screenshots",
          label: "A/B testing store screenshots",
          description:
            "product page optimization, which will also test alternative header visuals.",
        },
        {
          href: "/blog/app-store-app-preview-video-specs",
          label: "App preview video specs",
          description:
            "the video rules you already have to meet, and which carry over to video assets.",
        },
      ]}
      faqs={[
        {
          question: "What are App Store creative assets?",
          answer:
            "Creative assets are images or videos Apple shows in places that previously only held your screenshots and app previews: a header at the top of your product page, a dedicated asset in search results, In-App Event media, featuring placements and Apple Ads. Unlike a screenshot, a creative asset does not have to show your UI — Apple's stated purpose is brand, seasonal offers and new content. They appear on iOS 27 and iPadOS 27 and later.",
        },
        {
          question: "Are product page headers required?",
          answer:
            "No. Apple describes creative assets as an opportunity rather than a requirement, and every placement has a documented fallback. If you supply no header, your product page opens the way it does today. If you supply no search result asset, your In-App Events, app previews and screenshots appear in search instead.",
        },
        {
          question: "Do I still need screenshots?",
          answer:
            "Yes, and they are still the asset that does the most work. Screenshots remain required, you can still have up to ten on your product page, and depending on orientation up to three can appear in search results. Skipping the search result creative asset does not remove your app from search — it means your screenshots fill that slot, which is one more reason the first three need to stand alone.",
        },
        {
          question: "What is the Asset Library in App Store Connect?",
          answer:
            "A central place in App Store Connect that holds every approved asset — images, videos, app previews and screenshots — and shows where each one can be used across the App Store. The useful part is timing: you can submit assets for approval on their own rather than only alongside a new app version, so artwork can be cleared in advance. It is also reachable through the App Store Connect API.",
        },
        {
          question: "What are the exact pixel dimensions for a product page header?",
          answer:
            "Yes — Apple published a creative assets specifications page with the October 5, 2026 announcement. Product page header images: 21:9 at 3840 × 1646 px (JPEG or PNG) or 16:9 at 5244 × 2950 px (PNG). Search results images: 3:2 from 1920 × 1280 to 3840 × 2560 px (JPEG or PNG) or 16:9 at 5244 × 2950 px (PNG). No alpha channel or transparency. Header and search results videos run 5–30 seconds at 30 or 60 fps (.mov, .m4v, .mp4); the header video is 21:9 at 3840 × 1646 px and the search results video is 3:2 from 1920 × 1280 to 3840 × 2560 px. Always confirm against Apple's page before exporting.",
        },
        {
          question: "When do creative assets go live?",
          answer:
            "Apple's October 5, 2026 announcement describes the Asset Library and the preview tool as part of App Store Connect, and its help pages give upload steps: add a header or search results asset on the version page under Product Page Information, or upload standalone through Asset Library and submit it for review. The assets show on iOS 27 and iPadOS 27 or later. Apple's pages give no separate rollout date, so check that the Asset Library appears in your own App Store Connect account.",
        },
      ]}
    >
      <p>
        Apple is changing what sits at the top of an App Store product page. On{" "}
        <a href="https://developer.apple.com/news/?id=kug6m2ea">August 5, 2026</a>{" "}
        it told developers to get ready for <strong>creative assets</strong> — images
        or videos that appear in places screenshots used to own — and when{" "}
        <a href="https://developer.apple.com/news/?id=k1mtkt1k">
          submissions opened for iOS 27
        </a>{" "}
        on September 9 it put &ldquo;new product page headers and search result
        assets&rdquo; on the list of things to prepare before you publish.
      </p>
      <p>
        This is the first structural change to the App Store product page in years
        that is not about screenshot dimensions. It is worth understanding before you
        design your next set, because one of its details quietly raises the stakes on
        the screenshots you already have.
      </p>

      <h2>The Four Placements</h2>
      <p>
        Apple&apos;s{" "}
        <a href="https://developer.apple.com/app-store/asset-best-practices/">
          asset best practices page
        </a>{" "}
        is the primary reference. It states that creative assets &ldquo;appear across
        the App Store in iOS 27 and iPadOS 27 and later including your product page,
        in search results, and when your app is featured.&rdquo; Each placement has a
        documented fallback, which is the clearest signal that none of this is
        mandatory yet.
      </p>
      <table>
        <thead>
          <tr>
            <th>Placement</th>
            <th>Where it appears</th>
            <th>Format</th>
            <th>If you skip it</th>
          </tr>
        </thead>
        <tbody>
          {PLACEMENTS.map((row) => (
            <tr key={row.placement}>
              <td>{row.placement}</td>
              <td>{row.where}</td>
              <td>{row.format}</td>
              <td>{row.fallback}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The difference between a creative asset and a screenshot is what it is allowed
        to be. A screenshot has to show your app in use. A creative asset does not —
        Apple frames it as a place for brand, seasonal offerings and new content. For
        a game, that is a key art slot. For a utility, it is the first chance to say
        something other than &ldquo;here is the interface.&rdquo;
      </p>

      <h2>The Detail That Affects Screenshots You Already Shipped</h2>
      <p>
        Buried in the search results section of Apple&apos;s guidance:{" "}
        <em>
          &ldquo;If you choose to not use a search result creative asset, your In-App
          Events, app previews, and screenshots will appear.&rdquo;
        </em>{" "}
        And in the screenshots section: &ldquo;Depending on orientation, up to three
        screenshots can appear in search results.&rdquo;
      </p>
      <p>
        So search results are not a new place your app might show up — they are a place
        your screenshots are already showing up, and Apple is now offering a purpose-built
        alternative. If you do nothing, nothing breaks. But it does mean your first three
        screenshots are doing two jobs with different audiences: a searcher comparing
        several results at thumbnail size, and a visitor who already chose to open your
        page. Those want different compositions. A dedicated search asset is how Apple is
        proposing to separate them.
      </p>
      <p>
        The practical read: if your first three screenshots only make sense in sequence —
        a three-panel spanning background, or a story that needs all three to land — they
        are weak in search whether or not you ever add a creative asset. That is worth
        fixing now. See{" "}
        <a href="/blog/app-store-screenshot-order">screenshot order</a> for what belongs
        first.
      </p>

      <h2>The Content Rules Are Stricter Than Most Listings</h2>
      <p>
        The most immediately useful part of Apple&apos;s new page is not about headers at
        all. It is an explicit list of what cannot appear in any asset shown on the App
        Store — screenshots included. Several of these are rules developers routinely
        break:
      </p>
      <ul>
        {CONTENT_RULES.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
      <p>
        The pricing one catches people. A screenshot reading &ldquo;Only $2.99&rdquo; or
        &ldquo;50% off this week&rdquo; is squarely against this guidance, and so is a
        caption carrying a website URL or a &copy; symbol. The 4+ rule catches games: a
        17+ title still needs assets a child could see. Apple points at{" "}
        <a href="https://developer.apple.com/app-store/review/guidelines/#accurate-metadata">
          App Review Guideline 2.3, Accurate Metadata
        </a>{" "}
        and the Apple Advertising Policies as the enforcement backing.
      </p>
      <p>
        If you have a listing live right now, re-reading your screenshots against that
        list is a ten-minute job with a real chance of catching something. Our guide to{" "}
        <a href="/blog/app-store-screenshots-rejected-fix">
          why screenshots get rejected
        </a>{" "}
        covers how these come back in practice.
      </p>

      <h2>The Asset Library Changes When You Upload</h2>
      <p>
        Today, artwork ships with a version. Apple&apos;s stated model for the Asset
        Library is different: you can submit assets for approval &ldquo;either alongside
        a new app version, or in your Asset Library,&rdquo; and every approved asset
        lives there with an indication of where it can be used. The App Store Connect
        API can upload them too.
      </p>
      <p>
        Decoupling asset approval from app review is the genuinely useful change here. A
        seasonal header that needs to go live on a fixed date no longer has to ride a
        binary through review. Alongside it, a <strong>product page preview tool</strong>{" "}
        in App Store Connect will render your header, app name, description, screenshots
        and search result asset the way customers will see them — which is the first
        time Apple has offered a preview of the assembled page rather than a list of
        uploaded files.
      </p>
      <p>
        Apple&apos;s{" "}
        <a href="https://developer.apple.com/help/app-store-connect/manage-app-information/manage-your-app-store-assets">
          help page on managing App Store assets
        </a>{" "}
        now documents both routes: add a header or search results asset on the version
        page (it goes live when the version is approved and released), or upload
        standalone through Asset Library and submit it for review, where it is reviewed
        against your app&apos;s latest version. Only a universal asset can serve both
        header and search results. Apple gives no rollout date, so confirm the Asset
        Library appears in your own account.
      </p>

      <h2>The Dimensions Apple Published</h2>
      <p>
        Apple&apos;s original guidance shipped only templates, but the October 5, 2026
        announcement added a{" "}
        <a href="https://developer.apple.com/help/app-store-connect/reference/app-information/creative-assets-specifications">
          creative assets specifications
        </a>{" "}
        page. Images cannot include alpha channels or transparency.
      </p>
      <table>
        <thead>
          <tr>
            <th>Placement</th>
            <th>Aspect ratio</th>
            <th>Resolution</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Product page header</td><td>21:9</td><td>3840 × 1646 px</td><td>JPEG, JPG or PNG</td></tr>
          <tr><td>Product page header</td><td>16:9</td><td>5244 × 2950 px</td><td>PNG</td></tr>
          <tr><td>Search results</td><td>3:2</td><td>1920 × 1280 to 3840 × 2560 px</td><td>JPEG, JPG or PNG</td></tr>
          <tr><td>Search results</td><td>16:9</td><td>5244 × 2950 px</td><td>PNG</td></tr>
        </tbody>
      </table>
      <p>
        Video for the header (21:9, 3840 × 1646 px) and search results (3:2, 1920 × 1280
        to 3840 × 2560 px) must be 5–30 seconds at 30 or 60 fps, as .mov, .m4v or .mp4.
        Safe areas still matter more than the outer dimensions: Apple warns that assets
        &ldquo;appear differently across the App Store&rdquo; and tells you to keep the
        focal point centred. The Figma, Photoshop, Pixelmator and Sketch templates on
        Apple&apos;s{" "}
        <a href="https://developer.apple.com/app-store/asset-best-practices/">
          best practices page
        </a>{" "}
        give you those safe areas.
      </p>
      <p>
        For video, the existing rules carry over and one is easy to miss. Assets autoplay
        muted and repeat, so Apple asks for a video that loops without a visible jump and
        works silently first. Pick the poster frame deliberately — it is what people see
        before anything plays.
      </p>

      <h2>You Can Test Headers</h2>
      <p>
        Creative assets are usable on{" "}
        <a href="/blog/custom-product-pages-app-store-screenshots">
          custom product pages
        </a>
        , and Apple explicitly says product page optimization can test alternative header
        visuals. That is a more interesting experiment than most screenshot tests, because
        a header is a single image carrying a single idea — a cleaner variable than a
        five-panel screenshot set. If you already run{" "}
        <a href="/blog/ab-test-app-store-screenshots">PPO tests</a>, the header is likely
        to be the highest-signal thing you can put in one.
      </p>

      <h2>What to Do Now</h2>
      <ul>
        <li>
          <strong>Audit your live screenshots</strong> against the content list above —
          pricing, discounts, URLs, copyright symbols, other-platform logos, borrowed
          accolades, and the 4+ bar. This is the only item here with a downside if you
          ignore it.
        </li>
        <li>
          <strong>Check your first three screenshots in isolation.</strong> They are
          already your search results asset. If they only work as a set, fix that.
        </li>
        <li>
          <strong>Download the templates</strong> and decide whether you want one
          universal asset or separate header and search compositions. A single idea,
          clearly stated, is what Apple asks for in both.
        </li>
        <li>
          <strong>Export to the published sizes and upload.</strong> Use the table above,
          then check the result in the App Store Connect preview tool before you submit.
        </li>
      </ul>

      <h2>The Short Version</h2>
      <p>
        Creative assets are additive, not a migration. Nothing you have breaks, no
        dimension you rely on changed, and every new placement degrades gracefully to the
        assets you already supply. What is worth acting on this month is smaller than the
        announcement: Apple wrote down the content rules for store artwork more plainly
        than it ever has, and it confirmed that up to three of your screenshots are
        carrying your search results whether you designed them for that or not.
      </p>
      <p>
        The screenshot work itself does not change. You still need every size at exact
        pixel dimensions, still need them localized, and now have one more composition to
        keep visually consistent with the rest —{" "}
        <a href="/blog/app-store-screenshot-sizes">the sizes reference</a> is unchanged
        apart from Apple&apos;s newest devices.
      </p>
    </BlogArticleShell>
  );
}
