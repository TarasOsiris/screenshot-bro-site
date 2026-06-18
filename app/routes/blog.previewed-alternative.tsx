import type { Route } from "./+types/blog.previewed-alternative";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "previewed-alternative";

const COMPARISON = [
  {
    factor: "Platform",
    previewed: "Browser-based",
    screenshotBro: "Native Mac and iPad app",
  },
  {
    factor: "Signature strength",
    previewed: "3D mockups, panoramic sets, animated promo videos",
    screenshotBro: "Store-ready screenshots, device frames, localization",
  },
  {
    factor: "Export formats",
    previewed: "JPEG, PNG, MP4",
    screenshotBro: "PNG, JPEG at 1x–3x",
  },
  {
    factor: "Localization",
    previewed: "Template-based",
    screenshotBro: "30 language presets, auto-translate, per-shape overrides",
  },
  {
    factor: "Direct store upload",
    previewed: "Export files, upload manually",
    screenshotBro: "Direct App Store Connect upload",
  },
  {
    factor: "Free tier",
    previewed: "Free Lite for a single project; paid for commercial",
    screenshotBro: "Watermark-free free tier",
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
      ctaMessage="Need store-ready screenshots in every size and language, with direct upload? Try Screenshot Bro free."
      seoLinks={[
        {
          href: "/blog/device-mockup-generator-app-screenshots",
          label: "Device mockup generator",
          description: "how framed mockups work across tools.",
        },
        {
          href: "/blog/best-free-app-store-screenshot-generators",
          label: "Best free screenshot generators",
          description: "where Previewed and others fit on price.",
        },
        {
          href: "/blog/app-store-app-preview-video-specs",
          label: "App preview video specs",
          description: "if you mainly want animated previews.",
        },
      ]}
      faqs={[
        {
          question: "Is Previewed free?",
          answer:
            "Previewed offers a free Lite tier for showcasing a single app or project, with paid options for commercial use and ongoing mockup creation. Pricing changes, so confirm the current tiers on their site.",
        },
        {
          question: "What is a good Previewed alternative?",
          answer:
            "If you want store-ready App Store and Google Play screenshots at exact sizes — with device frames, deep localization, and direct App Store Connect upload — Screenshot Bro is a strong native alternative with a watermark-free free tier. Previewed remains excellent if your main need is 3D mockups and animated promo videos.",
        },
        {
          question: "Does Previewed make animated mockups?",
          answer:
            "Yes — that is one of its signature features. Previewed is well known for 3D device mockups and animated promo videos exported as MP4. If animation is your priority, it is a great fit; if you mainly need static store screenshots in every size and locale, a dedicated screenshot app may be faster.",
        },
      ]}
    >
      <p>
        Previewed is a polished browser-based mockup generator best known for 3D
        device mockups, panoramic screenshot sets, and animated promo videos. If
        flashy, animated marketing visuals are your priority, it is excellent.
        This page is for people searching for a <strong>Previewed alternative</strong>{" "}
        — usually because they want a native app, exact store-size output, or
        direct upload.
      </p>
      <p>
        Competitor details below were checked in mid-2026; pricing and features
        change, so verify on each tool&apos;s own site before deciding.
      </p>

      <h2>What Previewed Does Well</h2>
      <p>
        Previewed&apos;s strengths are visual: 3D mockups, panoramic multi-screen
        layouts, and animated promo videos exported as MP4, alongside JPEG and
        PNG. It has a drag-and-drop editor, cloud-saved templates, and team
        collaboration. The free Lite tier covers a single project, with paid
        tiers for commercial and ongoing use.
      </p>

      <h2>Why People Look for an Alternative</h2>
      <ul>
        <li>
          They want a <strong>native Mac or iPad app</strong>, not a browser
          tool.
        </li>
        <li>
          They primarily need <strong>static store screenshots</strong> at exact
          App Store and Google Play sizes, not animated marketing pieces.
        </li>
        <li>
          They want <strong>deep localization</strong> and{" "}
          <strong>direct App Store Connect upload</strong> built in.
        </li>
      </ul>

      <h2>Previewed vs Screenshot Bro</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Previewed</th>
            <th>Screenshot Bro</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((row) => (
            <tr key={row.factor}>
              <td>{row.factor}</td>
              <td>{row.previewed}</td>
              <td>{row.screenshotBro}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Who Should Pick Which</h2>
      <p>
        Choose <strong>Previewed</strong> if your main goal is 3D mockups and
        animated promo videos for marketing pages. Choose{" "}
        <strong>Screenshot Bro</strong> if you want store-ready screenshots in
        every device size and language, device frames, and direct App Store
        Connect upload from a native Mac and iPad app. Many teams use both — an
        animation tool for the website hero and a screenshot app for the store
        gallery. See the{" "}
        <a href="/blog/device-mockup-generator-app-screenshots">
          device mockup guide
        </a>{" "}
        for how the two contexts differ.
      </p>
    </BlogArticleShell>
  );
}
