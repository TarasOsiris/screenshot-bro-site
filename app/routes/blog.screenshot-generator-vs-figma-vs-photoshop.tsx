import type { Route } from "./+types/blog.screenshot-generator-vs-figma-vs-photoshop";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "screenshot-generator-vs-figma-vs-photoshop";

const COMPARISON = [
  {
    factor: "Setup time",
    generator: "Minutes — frames and sizes built in",
    figma: "Hours — build or import a template kit",
    photoshop: "Hours — set up smart objects per size",
  },
  {
    factor: "Resizing to every device",
    generator: "Automatic — one design, all sizes",
    figma: "Manual frames or a plugin",
    photoshop: "Manual artboards per size",
  },
  {
    factor: "Localization",
    generator: "Built-in per-locale text",
    figma: "Plugins or duplicated frames",
    photoshop: "Duplicated files per language",
  },
  {
    factor: "Device frames",
    generator: "Bundled, current models",
    figma: "Community kits (varies)",
    photoshop: "Mockup PSD packs",
  },
  {
    factor: "Creative control",
    generator: "Focused on store assets",
    figma: "Very high",
    photoshop: "Highest (pixel-level)",
  },
  {
    factor: "Upload to the store",
    generator: "Often direct (App Store Connect)",
    figma: "Export, then upload manually",
    photoshop: "Export, then upload manually",
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
      ctaMessage="Skip the per-size, per-locale busywork — design once and export every variant in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/best-app-store-screenshot-tools",
          label: "Best screenshot tools",
          description: "a wider roundup of dedicated screenshot apps.",
        },
        {
          href: "/blog/design-app-store-screenshots-in-figma",
          label: "Design screenshots in Figma",
          description: "the detailed Figma workflow if you go that route.",
        },
        {
          href: "/blog/device-mockup-generator-app-screenshots",
          label: "Device mockup generator",
          description: "how the frame step works in a generator.",
        },
      ]}
      faqs={[
        {
          question: "Is Figma or a screenshot generator better for App Store screenshots?",
          answer:
            "Figma gives you maximum creative freedom and is great for a single bespoke set. A dedicated generator wins when you need the same design across many device sizes and languages, because it handles resizing, frames, and localization automatically instead of by hand.",
        },
        {
          question: "Should I use Photoshop for app screenshots?",
          answer:
            "Photoshop offers the finest pixel control and the richest mockup packs, which matters for highly art-directed marketing shots. For routine store screenshots across sizes and locales, it is the slowest option because every size and language is a manual file.",
        },
        {
          question: "What is the fastest way to make App Store screenshots?",
          answer:
            "A purpose-built generator is fastest for store assets: device frames and exact sizes are built in, localization is a setting, and many tools upload straight to App Store Connect. Figma and Photoshop are faster only when you need one highly custom set.",
        },
      ]}
    >
      <p>
        There are three common ways to make App Store and Google Play
        screenshots: a dedicated screenshot generator, Figma, or Photoshop. They
        are not really competitors so much as tools for different jobs. This
        comparison shows where each one wins so you can pick the right workflow.
      </p>

      <h2>Side-by-Side Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Screenshot generator</th>
            <th>Figma</th>
            <th>Photoshop</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((row) => (
            <tr key={row.factor}>
              <td>{row.factor}</td>
              <td>{row.generator}</td>
              <td>{row.figma}</td>
              <td>{row.photoshop}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>When a Generator Wins</h2>
      <p>
        A dedicated generator is built around the store&apos;s constraints: device
        frames, exact pixel sizes, multi-locale text, and often direct upload to
        App Store Connect. If you ship to several device sizes and languages, the
        generator does the multiplication for you — design once, export every
        variant. This is the lowest-effort path for routine releases and
        updates.
      </p>

      <h2>When Figma Wins</h2>
      <p>
        Figma shines when the design is bespoke and you want full layout
        freedom: custom illustrations, brand systems, and tight collaboration
        with a designer. It is excellent for one carefully art-directed set. The
        cost shows up at scale — resizing to every device and duplicating frames
        per language is manual unless you lean on plugins. See the{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          Figma workflow guide
        </a>
        .
      </p>

      <h2>When Photoshop Wins</h2>
      <p>
        Photoshop gives the finest pixel control and the deepest library of
        photorealistic mockup PSDs, which is ideal for hero marketing shots and
        angled, lifestyle compositions. For store screenshots specifically it is
        the slowest, because every size and locale becomes another manual file
        to maintain.
      </p>

      <h2>A Practical Recommendation</h2>
      <p>
        Use a generator for the repeatable store assets you update every
        release, and reach for Figma or Photoshop when you need a one-off, highly
        custom marketing image. Many teams do exactly this: a generator for the
        App Store and Play galleries, and a design tool for the website hero. For
        a broader list of dedicated tools, see{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          best App Store screenshot tools
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
