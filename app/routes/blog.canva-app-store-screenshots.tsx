import type { Route } from "./+types/blog.canva-app-store-screenshots";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "canva-app-store-screenshots";

const COMPARISON = [
  {
    factor: "Canvas sizes",
    canva: "Set a custom pixel size per design, one at a time",
    screenshotBro: "Store sizes built in — one canvas covers every device",
  },
  {
    factor: "Device frames",
    canva: "Mockup elements and the Mockups app, chosen manually",
    screenshotBro: "Current iPhone, iPad, Mac, and Android frames built in",
  },
  {
    factor: "Resizing a set",
    canva: "One-click resize is part of the paid plan",
    screenshotBro: "Included — the same design renders at every size",
  },
  {
    factor: "Localization",
    canva: "Duplicate the design per language and retype the copy",
    screenshotBro: "81 language presets, on-device auto-translate, per-shape overrides",
  },
  {
    factor: "Export",
    canva: "Download per design or per page",
    screenshotBro: "Batch export PNG or JPEG organized by locale and row",
  },
  {
    factor: "Store upload",
    canva: "Download files, upload yourself",
    screenshotBro: "Direct App Store Connect and Google Play upload, free tier included",
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
      tldr="You can absolutely make App Store screenshots in Canva: create a custom-size design at the exact pixel dimensions Apple requires, drop your screenshot into a device mockup, add a headline, and download PNGs. It stops being a good fit once you need every device size in several languages."
      ctaMessage="Outgrown copying Canva designs per size and language? Try Screenshot Bro free."
      ctaHomeLinkLabel="a dedicated App Store screenshot tool"
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-sizes",
          label: "App Store screenshot sizes",
          description: "the exact pixel dimensions to set your canvas to.",
        },
        {
          href: "/blog/screenshot-generator-vs-figma-vs-photoshop",
          label: "Generator vs Figma vs Photoshop",
          description: "when a general design tool is the right call.",
        },
        {
          href: "/blog/app-store-screenshot-copywriting-examples",
          label: "Screenshot copywriting",
          description: "headlines worth putting on those designs.",
        },
      ]}
      faqs={[
        {
          question: "Can you make App Store screenshots in Canva?",
          answer:
            "Yes. Create a design with a custom size matching Apple's required pixel dimensions, place your app screenshot inside a device mockup element, add a headline and background, then download as PNG. The result is perfectly acceptable to App Store Connect as long as the dimensions and format are right.",
        },
        {
          question: "What size should a Canva App Store screenshot be?",
          answer:
            "Match the size Apple asks for on the device class you are uploading, and upload PNG or JPEG with no transparency. Apple periodically changes which display sizes are required, so check the current list rather than an old template — our App Store screenshot sizes reference is kept up to date.",
        },
        {
          question: "When should you stop using Canva for App Store screenshots?",
          answer:
            "When the work becomes repetitive rather than creative: several device sizes, several languages, and a set that changes every release. In Canva each of those is another duplicated design to keep in sync by hand. A dedicated tool like Screenshot Bro keeps one design and renders every size and locale from it, then uploads the result.",
        },
      ]}
    >
      <p>
        Canva is the tool most people already have open, so it is a reasonable
        place to make App Store screenshots — and for a first launch with one
        device size and one language, it is genuinely fine. This page covers{" "}
        <strong>how to make App Store screenshots in Canva</strong>, and the
        point at which the approach starts costing more time than it saves.
      </p>
      <p>
        Canva details below were checked in August 2026; plans and features
        change, so verify on canva.com before deciding.
      </p>

      <h2>How To Do It In Canva</h2>
      <ul>
        <li>
          Create a design with a <strong>custom size</strong> set to the exact
          pixel dimensions Apple requires for the device class you are uploading
          — see our{" "}
          <a href="/blog/app-store-screenshot-sizes">screenshot sizes reference</a>.
        </li>
        <li>
          Add a <strong>device mockup</strong> element and drop your captured
          screenshot into its screen area.
        </li>
        <li>
          Add a <strong>headline</strong> above or below the device, plus a
          background colour or gradient. Keep the text large — it is read at
          thumbnail size.
        </li>
        <li>
          Duplicate the page for each screenshot in the set, then{" "}
          <strong>download as PNG</strong> and upload to App Store Connect.
        </li>
      </ul>

      <h2>What Canva Does Well</h2>
      <p>
        Canva&apos;s template library, fonts, and stock assets are far bigger
        than anything a niche tool ships, the editor is familiar to non-designers,
        and it runs in the browser as well as on desktop and mobile. Its free
        plan is genuinely usable, and brand kits keep colours and fonts
        consistent with the rest of your marketing. If you are making one hero
        image or a set for a single device size, that is the whole job done.
      </p>

      <h2>Where It Gets Painful</h2>
      <ul>
        <li>
          <strong>Every device size is another design.</strong> iPhone, iPad, and
          Mac listings need different dimensions, and keeping duplicates in sync
          is manual work.
        </li>
        <li>
          <strong>Every language multiplies that again.</strong> Ten locales
          means ten copies of every page, retyped and re-checked.
        </li>
        <li>
          <strong>Nothing knows it is a store listing.</strong> No locale
          folders, no ordered export, no upload — just a downloads folder you
          sort out by hand.
        </li>
      </ul>

      <h2>Canva vs Screenshot Bro</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Canva</th>
            <th>Screenshot Bro</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((row) => (
            <tr key={row.factor}>
              <td>{row.factor}</td>
              <td>{row.canva}</td>
              <td>{row.screenshotBro}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Who Should Pick Which</h2>
      <p>
        Stay in <strong>Canva</strong> if screenshots are occasional, one device
        size, one language, and you already pay for it. Move to{" "}
        <strong>Screenshot Bro</strong> when the set repeats across sizes,
        languages, and releases — one design, every size, 81 locales, and upload
        straight to App Store Connect. For the broader question of dedicated tool
        versus design tool, read{" "}
        <a href="/blog/screenshot-generator-vs-figma-vs-photoshop">
          generator vs Figma vs Photoshop
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
