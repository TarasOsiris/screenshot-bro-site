import type { Route } from "./+types/blog.best-free-app-store-screenshot-generators";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "best-free-app-store-screenshot-generators";

const TOOLS = [
  {
    name: "Screenshot Bro",
    known: "Native Mac and iPad app: device frames, multi-row editor, 30-language localization, direct App Store Connect upload.",
    free: "Free tier with no watermark — one project, a few rows per project, and a handful of templates per row.",
  },
  {
    name: "AppLaunchpad",
    known: "Long-running browser-based generator with many templates and batch device sizes.",
    free: "Has a free option; check current export and watermark limits.",
  },
  {
    name: "Previewed",
    known: "Browser tool known for 3D device mockups and animated previews.",
    free: "Free assets exist alongside paid plans; verify current limits.",
  },
  {
    name: "AppMockUp",
    known: "Free-leaning browser editor with device frames and templates.",
    free: "Free tier available; confirm export resolution caps.",
  },
  {
    name: "Hotpot / Shotbot-style tools",
    known: "Template-driven browser generators for quick store screenshots.",
    free: "Mix of free and paid; check watermark and download limits.",
  },
  {
    name: "Mockuphone / Mockup tools",
    known: "Free device-frame wrappers — drop a screenshot, get a framed image.",
    free: "Free framing, but limited layout, caption, and localization control.",
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
      ctaMessage="Try a native generator with a watermark-free free tier, device frames, localization, and direct upload — Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/best-app-store-screenshot-tools",
          label: "Best screenshot tools",
          description: "the broader roundup including paid and pro tools.",
        },
        {
          href: "/blog/screenshot-generator-vs-figma-vs-photoshop",
          label: "Generator vs Figma vs Photoshop",
          description: "decide whether a generator is the right approach at all.",
        },
        {
          href: "/blog/device-mockup-generator-app-screenshots",
          label: "Device mockup generator",
          description: "how the device-frame step works across these tools.",
        },
      ]}
      faqs={[
        {
          question: "What is the best free App Store screenshot generator?",
          answer:
            "The best free option is the one whose free tier covers your real needs without a watermark and at the exact store sizes. Native apps tend to be faster and handle device frames, localization, and upload, while browser tools are convenient for a quick one-off set. Always verify the current free limits before committing, since tiers change often.",
        },
        {
          question: "Do free screenshot generators add a watermark?",
          answer:
            "Some do and some do not. A watermark on the free tier is the single biggest thing to check — a watermarked screenshot is not usable on the App Store or Google Play. Confirm whether the free plan exports clean images at full resolution.",
        },
        {
          question: "Are free generators good enough for the App Store?",
          answer:
            "Yes, if they export at the exact required sizes without a watermark. The limiting factors are usually batch export across device sizes, localization, and direct upload — features that separate quick free tools from full screenshot apps.",
        },
      ]}
    >
      <p>
        You do not need an expensive design suite to make App Store and Google
        Play screenshots. Several free generators get you device frames,
        templates, and correct sizes. The catch is that free tiers vary a lot —
        especially on watermarks and batch export — so this guide compares the
        common options and what to check before you rely on one.
      </p>
      <p>
        Free tiers and limits change frequently. The notes below describe what
        each tool is generally known for; always confirm current pricing,
        watermark policy, and export caps on the tool&apos;s own site before you
        commit.
      </p>

      <h2>Free Screenshot Generators at a Glance</h2>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Known for</th>
            <th>Free tier (verify current limits)</th>
          </tr>
        </thead>
        <tbody>
          {TOOLS.map((tool) => (
            <tr key={tool.name}>
              <td>{tool.name}</td>
              <td>{tool.known}</td>
              <td>{tool.free}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>What to Check Before You Pick a Free Tool</h2>
      <ol>
        <li>
          <strong>Watermark:</strong> does the free tier export clean images? A
          watermark makes the screenshot unusable on the stores.
        </li>
        <li>
          <strong>Exact sizes:</strong> can it export every required device size
          for the App Store and Google Play?
        </li>
        <li>
          <strong>Batch + locales:</strong> does it generate all sizes and
          languages at once, or one image at a time?
        </li>
        <li>
          <strong>Device frames:</strong> are current iPhone, iPad, Mac, and
          Android frames available?
        </li>
        <li>
          <strong>Upload:</strong> can it send screenshots to App Store Connect
          directly, or only export files?
        </li>
      </ol>

      <h2>Free Tool vs Full Screenshot App</h2>
      <p>
        A quick browser generator is perfect for a one-off set. The moment you
        ship to several device sizes and languages — and update them every
        release — the manual, one-image-at-a-time workflow becomes the
        bottleneck. That is where a full screenshot app pays off, by generating
        every size and locale from one design. For the trade-offs, see{" "}
        <a href="/blog/screenshot-generator-vs-figma-vs-photoshop">
          generator vs Figma vs Photoshop
        </a>{" "}
        and the wider{" "}
        <a href="/blog/best-app-store-screenshot-tools">tools roundup</a>.
      </p>

      <h2>Where Screenshot Bro Fits</h2>
      <p>
        Screenshot Bro is a native Mac and iPad app with a watermark-free free
        tier, current device frames, a multi-row editor, 30-language
        localization, and direct App Store Connect upload. It is built for the
        repeatable, multi-size, multi-language case that free browser tools
        struggle with — while still being free to start.
      </p>
    </BlogArticleShell>
  );
}
