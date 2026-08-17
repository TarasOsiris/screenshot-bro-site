import type { Route } from "./+types/blog.best-google-play-screenshot-tools";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "best-google-play-screenshot-tools";

const TOOLS = [
  {
    tool: "Screenshot Bro",
    type: "Native Mac and iPad app",
    playSizes: "Play screenshot sizes and Android device frames",
    featureGraphic: "Yes — custom canvas at 1024×500",
    free: "Watermark-free exports on the free tier",
  },
  {
    tool: "AppMockUp Studio",
    type: "Browser, no account",
    playSizes: "Play preview and export",
    featureGraphic: "Not its focus",
    free: "Free",
  },
  {
    tool: "AppLaunchpad",
    type: "Browser",
    playSizes: "Play sizes with auto-resize",
    featureGraphic: "Template available",
    free: "Limited free tier, paid Pro",
  },
  {
    tool: "Screenshots Pro",
    type: "Browser",
    playSizes: "Smart export to Play sizes",
    featureGraphic: "Not stated",
    free: "Free Basic plan, paid tiers above",
  },
  {
    tool: "AppScreens",
    type: "Browser",
    playSizes: "Android sizes on paid plans",
    featureGraphic: "Not stated",
    free: "Limited free plan",
  },
  {
    tool: "Canva or Placeit",
    type: "Browser design library",
    playSizes: "Manual custom sizes",
    featureGraphic: "Yes, by hand",
    free: "Free tier (Placeit downloads watermarked)",
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
      tldr="Google Play needs phone screenshots plus a 1024×500 feature graphic, and most tools are built App-Store-first. Screenshot Bro, AppLaunchpad, Screenshots Pro, and AppScreens all export Play sizes; AppMockUp is the free browser option; Canva or Placeit cover the feature graphic if your tool doesn't."
      ctaMessage="Design App Store and Google Play assets from one project. Try Screenshot Bro free."
      seoLinks={[
        {
          href: "/blog/google-play-screenshot-sizes-requirements",
          label: "Play screenshot requirements",
          description: "sizes, counts, and what Google rejects.",
        },
        {
          href: "/blog/google-play-feature-graphic-size-template-examples",
          label: "Feature graphic examples",
          description: "the 1024×500 asset every listing needs.",
        },
        {
          href: "/blog/google-play-store-listing-graphics-checklist",
          label: "Listing graphics checklist",
          description: "everything Play asks for, in one list.",
        },
      ]}
      faqs={[
        {
          question: "What tool should I use for Google Play screenshots?",
          answer:
            "Any tool that exports at Play's required dimensions will do; the difference is how much of the listing it handles. Screenshot Bro covers Play sizes, Android device frames, and localization from a native Mac and iPad app. AppLaunchpad, Screenshots Pro, and AppScreens do the same in the browser, and AppMockUp Studio is free with no account.",
        },
        {
          question: "What size is a Google Play feature graphic?",
          answer:
            "1024 × 500 pixels, in PNG or JPEG, with no transparency. It appears at the top of your listing and in promotional placements, and Play requires it before you can publish — so it is worth designing properly rather than cropping a screenshot. Our feature graphic guide has examples and templates.",
        },
        {
          question: "Can I reuse my App Store screenshots on Google Play?",
          answer:
            "The designs, yes; the files, not exactly. Play uses different dimensions and aspect ratios and requires the feature graphic, and Android device frames look wrong on an iPhone-framed image. A tool that renders one design at multiple sizes saves you rebuilding the set — that is the main reason to use a store-aware editor rather than a general design tool.",
        },
      ]}
    >
      <p>
        Most screenshot tools are built App-Store-first, and Google Play gets
        treated as an afterthought — which is awkward, because Play asks for a
        different set of assets, including the{" "}
        <a href="/blog/google-play-feature-graphic-size-template-examples">
          1024×500 feature graphic
        </a>
        . This roundup covers{" "}
        <strong>the best Google Play screenshot tools</strong> and what each one
        actually handles.
      </p>
      <p>
        Details were checked in August 2026 against each tool&apos;s own site;
        pricing and features change, so verify before deciding.
      </p>

      <h2>What A Play Listing Needs</h2>
      <ul>
        <li>
          <strong>Phone screenshots</strong> at Play&apos;s required dimensions —
          see the{" "}
          <a href="/blog/google-play-screenshot-sizes-requirements">
            requirements reference
          </a>
          .
        </li>
        <li>
          <strong>Tablet screenshots</strong> if you want to be featured on
          tablet surfaces.
        </li>
        <li>
          <strong>A feature graphic</strong> at 1024×500 — mandatory before
          publishing.
        </li>
        <li>
          <strong>An app icon</strong> at 512×512, and optionally a promo video.
        </li>
      </ul>

      <h2>The Options</h2>

      <h3>Screenshot Bro — one project for both stores</h3>
      <p>
        A native Mac and iPad app with Android device frames alongside iPhone,
        iPad, and Mac ones, Play export sizes, custom canvas sizes for the
        feature graphic, 30 language presets with auto-translate, and batch
        export organized by locale and row. Exports are watermark-free on the
        free tier. The advantage over an App-Store-only tool is that both
        listings come out of the same project.
      </p>

      <h3>AppMockUp Studio — free, browser, no account</h3>
      <p>
        Free and instant: drop screenshots in, pick clay or realistic Android
        frames, preview against Google Play, export. No signup and no payment,
        which makes it the obvious starting point for a first Play listing. No
        localization workflow or saved projects. See the{" "}
        <a href="/blog/appmockup-alternative">AppMockUp comparison</a>.
      </p>

      <h3>AppLaunchpad — biggest template library</h3>
      <p>
        A browser tool with a very large template and asset library, automatic
        resizing across App Store and Play sizes, and built-in localization on
        paid plans. Its free tier restricts fonts, devices, and assets. See the{" "}
        <a href="/blog/applaunchpad-alternative">AppLaunchpad comparison</a>.
      </p>

      <h3>Screenshots Pro and AppScreens — automation and reach</h3>
      <p>
        Screenshots Pro smart-exports to every App Store and Play size and offers
        a REST API on its top plan for CI-driven regeneration. AppScreens covers
        Android sizes on paid plans and reaches beyond the two main stores, with
        80+ language localization. Both are browser tools; see the{" "}
        <a href="/blog/screenshots-pro-alternative">Screenshots Pro</a> and{" "}
        <a href="/blog/appscreens-alternative">AppScreens</a> comparisons.
      </p>

      <h3>Canva or Placeit — for the feature graphic</h3>
      <p>
        If your screenshot tool has no feature-graphic template, a general design
        tool fills the gap: set a 1024×500 custom canvas and design it directly.
        Placeit&apos;s free downloads are watermarked; Canva&apos;s free plan is
        not. See{" "}
        <a href="/blog/canva-app-store-screenshots">
          App Store screenshots in Canva
        </a>{" "}
        for the same approach applied to store images.
      </p>

      <h2>Comparison Table</h2>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Type</th>
            <th>Play sizes</th>
            <th>Feature graphic</th>
            <th>Free tier</th>
          </tr>
        </thead>
        <tbody>
          {TOOLS.map((row) => (
            <tr key={row.tool}>
              <td>{row.tool}</td>
              <td>{row.type}</td>
              <td>{row.playSizes}</td>
              <td>{row.featureGraphic}</td>
              <td>{row.free}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>The Short Version</h2>
      <p>
        Shipping to both stores from a Mac: <strong>Screenshot Bro</strong>.
        Play-only and free: <strong>AppMockUp Studio</strong>. Want the largest
        template library: <strong>AppLaunchpad</strong>. Regenerating from CI:{" "}
        <strong>Screenshots Pro</strong>. Before you upload, run through the{" "}
        <a href="/blog/google-play-store-listing-graphics-checklist">
          listing graphics checklist
        </a>{" "}
        — most rejections are a missing or wrongly sized asset, not a design
        problem. See also{" "}
        <a href="/blog/google-play-screenshot-rejected-fix">
          why Play rejects screenshots
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
