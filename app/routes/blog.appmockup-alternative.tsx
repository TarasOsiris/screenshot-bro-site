import type { Route } from "./+types/blog.appmockup-alternative";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

const SLUG = "appmockup-alternative";

const COMPARISON = [
  {
    factor: "Platform",
    appmockup: "Browser-based, no account required",
    screenshotBro: "Native Mac, iPad and iPhone app",
  },
  {
    factor: "Price",
    appmockup: "Free to use",
    screenshotBro: "Free tier with watermark-free exports, paid Pro unlock",
  },
  {
    factor: "Device frames",
    appmockup: "Current devices in clay or realistic frames",
    screenshotBro: "iPhone, iPad, Mac, and Android frames with colour options",
  },
  {
    factor: "Project files",
    appmockup: "Lives in the browser session",
    screenshotBro: "Plain-JSON project files on your Mac, with opt-in iCloud sync",
  },
  {
    factor: "Localization",
    appmockup: "Not a built-in workflow",
    screenshotBro: "81 language presets, on-device auto-translate, per-shape overrides",
  },
  {
    factor: "Store upload",
    appmockup: "Export files, upload yourself",
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
      tldr="AppMockUp Studio is a free browser tool with no signup — hard to beat for a quick set of framed screenshots. Screenshot Bro is a native Mac, iPad and iPhone app for when the listing repeats: saved projects, 81 locales, batch export, and direct App Store Connect upload."
      ctaMessage="Need saved projects, locales, and upload on top of framing? Try Screenshot Bro free."
      ctaHomeLinkLabel="a native App Store screenshot tool for Mac, iPad and iPhone"
      seoLinks={[
        {
          href: "/vs/appmockup-studio",
          label: "Full head-to-head: Screenshot Bro vs AppMockUp Studio",
          description: "every factor side by side, with a switching guide.",
        },
        {
          href: "/blog/best-free-app-store-screenshot-generators",
          label: "Best free generators",
          description: "where AppMockUp sits among the free options.",
        },
        {
          href: "/blog/best-app-store-screenshot-tools-for-mac",
          label: "Best tools for Mac",
          description: "native options if you want files on disk.",
        },
        {
          href: "/blog/how-many-app-store-screenshots",
          label: "How many screenshots",
          description: "how big a set you actually need to make.",
        },
      ]}
      faqs={[
        {
          question: "Is AppMockUp free?",
          answer:
            "Yes. AppMockUp Studio runs in the browser and its site states it is free with no account required. That makes it one of the lowest-friction ways to frame App Store and Google Play screenshots — you can be exporting within a minute.",
        },
        {
          question: "What is a good AppMockUp alternative?",
          answer:
            "If you want saved project files, localization into many languages, batch export organized per locale, and direct App Store Connect upload, Screenshot Bro is a native Mac, iPad and iPhone alternative with a watermark-free free tier. AppLaunchpad and Previewed are browser alternatives if you prefer to stay in a tab.",
        },
        {
          question: "Why use a paid app when AppMockUp is free?",
          answer:
            "For a one-off launch, you probably shouldn't. The case for a paid app appears when the listing repeats — several device sizes, several languages, and a set that gets revised every release. Then saved projects, translation tracking, ordered batch export, and upload save more time than the licence costs.",
        },
      ]}
    >
      <p>
        AppMockUp Studio is a free, no-signup browser tool for framing App Store
        and Google Play screenshots, and it has generated millions of them. For a
        quick set it is genuinely excellent. This page is for people searching
        for an <strong>AppMockUp alternative</strong> — usually because they want
        saved projects, localization, or upload built into the same tool.
      </p>
      <p>
        Competitor details below were checked in August 2026 on AppMockUp&apos;s
        own site; features change, so verify there before deciding.
      </p>

      <h2>What AppMockUp Does Well</h2>
      <p>
        Zero friction. No account, no payment, no install — open the page, drop
        in screenshots, pick a device in clay or realistic frame, add a title and
        background, preview against App Store and Google Play, export. It covers
        current devices, lets you tint, resize, and rotate frames, and includes
        backgrounds, patterns, and gradients. For a first launch or a side
        project, that is often the entire requirement met for free.
      </p>

      <h2>Why People Look for an Alternative</h2>
      <ul>
        <li>
          They want <strong>projects saved as files</strong> they can reopen,
          version, and sync — not work that lives in a browser session.
        </li>
        <li>
          They need <strong>localization</strong>: the same layout in ten
          languages with translated copy tracked per locale.
        </li>
        <li>
          They want <strong>upload to App Store Connect</strong> and exports
          already organized by locale and row.
        </li>
      </ul>

      <h2>AppMockUp vs Screenshot Bro</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>AppMockUp Studio</th>
            <th>Screenshot Bro</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((row) => (
            <tr key={row.factor}>
              <td>{row.factor}</td>
              <td>{row.appmockup}</td>
              <td>{row.screenshotBro}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Who Should Pick Which</h2>
      <p>
        Choose <strong>AppMockUp Studio</strong> for a fast, free, one-off set —
        it is hard to argue with free and no signup. Choose{" "}
        <strong>Screenshot Bro</strong> when the listing is ongoing work: saved
        projects, 81 locales with auto-translate, batch export per locale, and
        upload straight to App Store Connect. Both appear in our{" "}
        <a href="/blog/best-free-app-store-screenshot-generators">
          free generators roundup
        </a>
        .
      </p>
    </BlogArticleShell>
  );
}
