import type { Route } from "./+types/blog.placeit-alternative";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

const SLUG = "placeit-alternative";

const COMPARISON = [
  {
    factor: "Scope",
    placeit: "Mockups, logos, videos, social and print templates",
    screenshotBro: "App Store and Google Play screenshots only",
  },
  {
    factor: "Platform",
    placeit: "Browser-based, subscription account",
    screenshotBro: "Native Mac, iPad and iPhone app",
  },
  {
    factor: "Free downloads",
    placeit: "Watermarked on the free tier",
    screenshotBro: "Watermark-free on the free tier",
  },
  {
    factor: "Store sizes",
    placeit: "Template-by-template, no store-wide fan-out",
    screenshotBro: "One design exported to every required size",
  },
  {
    factor: "Localization",
    placeit: "Edit each template by hand per language",
    screenshotBro: "81 language presets, on-device auto-translate, per-shape overrides",
  },
  {
    factor: "Store upload",
    placeit: "Download files, upload yourself",
    screenshotBro: "Direct App Store Connect and Google Play upload, free tier included",
  },
] as const;

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return { locale: (locale || "en") as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches, params }) =>
  buildBlogPostMeta(SLUG, matches, (params.locale || "en") as LocaleCode);

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <BlogArticleShell
      slug={SLUG}
      locale={locale}
      tldr="Placeit is a broad browser design library — mockups, logos, video, social — where free downloads carry a watermark. Screenshot Bro does one job instead: App Store and Google Play screenshot sets on Mac, iPad and iPhone, exported watermark-free in every size and locale."
      ctaMessage="Only need store screenshots, not a whole design library? Try Screenshot Bro free."
      ctaHomeLinkLabel="App Store screenshot tool for Mac"
      seoLinks={[
        {
          href: "/vs/placeit",
          label: "Full head-to-head: Screenshot Bro vs Placeit",
          description: "every factor side by side, with a switching guide.",
        },
        {
          href: "/blog/screenshot-generator-vs-figma-vs-photoshop",
          label: "Generator vs Figma vs Photoshop",
          description: "when a general design tool is the right call.",
        },
        {
          href: "/blog/best-free-app-store-screenshot-generators",
          label: "Best free generators",
          description: "which tools actually export without a watermark.",
        },
        {
          href: "/blog/app-store-screenshot-examples",
          label: "Screenshot examples",
          description: "layouts worth copying before you pick a tool.",
        },
      ]}
      faqs={[
        {
          question: "Is Placeit free?",
          answer:
            "Placeit has a free tier you can design in, but downloads from it are watermarked; an unlimited, watermark-free download requires a subscription, sold monthly or annually. Check placeit.net for current pricing, since the plans change.",
        },
        {
          question: "Is Placeit good for App Store screenshots?",
          answer:
            "It can produce good-looking individual images, and its template library is enormous. What it does not do is the listing-shaped part of the work: taking one design and fanning it out across every required device size and every language, then uploading the result. For a single hero image Placeit is fine; for a full localized set it is a lot of manual repetition.",
        },
        {
          question: "What is a good Placeit alternative for app screenshots?",
          answer:
            "Screenshot Bro is a native Mac, iPad and iPhone app focused only on store screenshots: device frames for iPhone, iPad, Mac, and Android, multi-row layouts, 81 language presets with auto-translate, watermark-free export on the free tier, and direct App Store Connect and Google Play upload. AppLaunchpad and Previewed are browser-based alternatives in the same niche.",
        },
      ]}
    >
      <p>
        Placeit (part of Envato) is a huge browser design library — tens of
        thousands of mockups, logos, videos, and social templates behind one
        subscription. If you need a bit of everything, it is good value. This
        page is for people searching for a <strong>Placeit alternative</strong>{" "}
        for one specific job: App Store and Google Play screenshots, in every
        size and language, without a watermark.
      </p>
      <p>
        Competitor details below were checked in August 2026; pricing and
        features change, so verify on Placeit&apos;s own site before deciding.
      </p>

      <h2>What Placeit Does Well</h2>
      <p>
        Breadth. One Placeit subscription covers device mockups, logo design,
        video intros, social posts, and print assets, with commercial-use rights
        included — for a solo founder who also needs a logo, a launch video, and
        an Instagram post, that consolidation is real value. The editor is
        genuinely easy, requires no install, and the template library is far
        larger than any screenshot-specific tool can maintain.
      </p>

      <h2>Why People Look for an Alternative</h2>
      <ul>
        <li>
          They only need store screenshots and don&apos;t want to{" "}
          <strong>pay for a whole design library</strong>.
        </li>
        <li>
          They ran into the <strong>watermark on free downloads</strong>.
        </li>
        <li>
          They need <strong>every device size and language from one design</strong>{" "}
          instead of editing each template by hand.
        </li>
      </ul>

      <h2>Placeit vs Screenshot Bro</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Placeit</th>
            <th>Screenshot Bro</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((row) => (
            <tr key={row.factor}>
              <td>{row.factor}</td>
              <td>{row.placeit}</td>
              <td>{row.screenshotBro}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Who Should Pick Which</h2>
      <p>
        Choose <strong>Placeit</strong> if you need a broad design library and
        screenshots are only one item on the list. Choose{" "}
        <strong>Screenshot Bro</strong> if the listing is the job: multi-row
        layouts, every store size from one canvas, 81 locales, watermark-free
        exports, and upload to App Store Connect. If you are still deciding
        between a dedicated tool and a general one, read{" "}
        <a href="/blog/screenshot-generator-vs-figma-vs-photoshop">
          generator vs Figma vs Photoshop
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
