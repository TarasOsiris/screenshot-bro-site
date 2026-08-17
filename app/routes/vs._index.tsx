import type { Route } from "./+types/vs._index";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { SITE_NAME, SITE_URL } from "~/config/site";

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([
  { name: "Comparisons", path: "/vs" },
]);

const PAGE_TITLE = `${SITE_NAME} vs other App Store screenshot tools`;
const PAGE_DESCRIPTION =
  "Every App Store and Google Play screenshot tool compared against Screenshot Bro: platform, free tier, localization and store upload, with a page for each.";
const PAGE_URL = `${SITE_URL}/vs`;

type Comparison = {
  tool: string;
  href: string;
  type: string;
  free: string;
  localization: string;
  upload: string;
  group: "native" | "browser" | "automation" | "design";
};

// Single source of truth for the table, the group lists and the ItemList schema.
const COMPARISONS: Comparison[] = [
  {
    tool: "Screenshot Studio",
    href: "/blog/screenshot-studio-alternative",
    type: "Native Mac and iOS app",
    free: "Free to try; pay to export",
    localization: "AI translation, any language",
    upload: "Direct upload",
    group: "native",
  },
  {
    tool: "Shotbot",
    href: "/blog/shotbot-alternative",
    type: "Native iOS, macOS, visionOS",
    free: "Limited frames per day",
    localization: "Not the focus",
    upload: "Export or share images",
    group: "native",
  },
  {
    tool: "Rotato",
    href: "/blog/rotato-alternative",
    type: "Native Mac app (web beta)",
    free: "Unlimited free trial",
    localization: "Not a built-in workflow",
    upload: "Export files",
    group: "native",
  },
  {
    tool: "AppLaunchpad",
    href: "/blog/applaunchpad-alternative",
    type: "Browser",
    free: "Limited fonts and assets",
    localization: "Yes",
    upload: "Export files",
    group: "browser",
  },
  {
    tool: "Previewed",
    href: "/blog/previewed-alternative",
    type: "Browser",
    free: "Free Lite for one project",
    localization: "Template-based",
    upload: "Export files",
    group: "browser",
  },
  {
    tool: "AppScreens",
    href: "/blog/appscreens-alternative",
    type: "Browser",
    free: "5 screenshots, 1 project",
    localization: "80+ languages (paid)",
    upload: "Automatic upload (paid)",
    group: "browser",
  },
  {
    tool: "AppMockUp Studio",
    href: "/blog/appmockup-alternative",
    type: "Browser, no account",
    free: "Free",
    localization: "Not a built-in workflow",
    upload: "Export files",
    group: "browser",
  },
  {
    tool: "Screenshots Pro",
    href: "/blog/screenshots-pro-alternative",
    type: "Browser",
    free: "Free Basic plan",
    localization: "Auto-translate (paid)",
    upload: "Export files",
    group: "automation",
  },
  {
    tool: "Fastlane snapshot",
    href: "/vs/fastlane-snapshot",
    type: "Command line",
    free: "Free and open source",
    localization: "Titles from .strings files",
    upload: "Yes, via deliver",
    group: "automation",
  },
  {
    tool: "Mockuuups Studio",
    href: "/blog/mockuuups-studio-alternative",
    type: "Desktop, web and plugins",
    free: "Free tier",
    localization: "Not a built-in workflow",
    upload: "Export files",
    group: "design",
  },
  {
    tool: "Placeit",
    href: "/blog/placeit-alternative",
    type: "Browser design library",
    free: "Watermarked downloads",
    localization: "Manual per language",
    upload: "Download files",
    group: "design",
  },
  {
    tool: "Canva",
    href: "/blog/canva-app-store-screenshots",
    type: "Browser and desktop",
    free: "Free plan",
    localization: "Manual per language",
    upload: "Download files",
    group: "design",
  },
  {
    tool: "Figma and Photoshop",
    href: "/blog/screenshot-generator-vs-figma-vs-photoshop",
    type: "Design tools",
    free: "Figma free tier",
    localization: "Manual, or via plugins",
    upload: "Export files",
    group: "design",
  },
];

const SCREENSHOT_BRO_ROW = {
  type: "Native Mac and iPad app",
  free: "Watermark-free exports",
  localization: "30 presets, on-device auto-translate",
  upload: "Direct upload (Pro)",
};

const ITEM_LIST_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  numberOfItems: COMPARISONS.length,
  itemListElement: COMPARISONS.map((comparison, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `${comparison.tool} vs ${SITE_NAME}`,
    url: `${SITE_URL}${comparison.href}`,
  })),
});

const FAQ_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best App Store screenshot generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There isn't one winner — the right tool depends on your platform and how repetitive your listing is. On a Mac, Screenshot Bro and Screenshot Studio handle the whole listing natively. In the browser, AppLaunchpad has the largest template library and AppMockUp Studio is free with no account. For 80+ languages, AppScreens goes furthest. For screenshots generated by CI, Fastlane snapshot or the Screenshots Pro API fit better.",
      },
    },
    {
      "@type": "Question",
      name: "Which App Store screenshot tools are free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AppMockUp Studio is free in the browser with no account, and Fastlane snapshot and frameit are free and open source. Screenshot Bro's free tier exports without a watermark (1 project, 3 rows, 5 templates per row). Most other tools either watermark free exports, cap the number of screenshots, or require payment before you can export at all.",
      },
    },
    {
      "@type": "Question",
      name: "Which screenshot tools upload directly to App Store Connect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Screenshot Bro uploads directly on its Pro tier, Screenshot Studio uploads directly, AppScreens offers automatic store upload on paid plans, and Fastlane can upload via the deliver action. Most browser generators export a folder of files that you upload by hand.",
      },
    },
  ],
});

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: PAGE_TITLE },
    { name: "description", content: PAGE_DESCRIPTION },
    { property: "og:type", content: "website" },
    { property: "og:title", content: PAGE_TITLE },
    { property: "og:description", content: PAGE_DESCRIPTION },
    { property: "og:url", content: PAGE_URL },
    { property: "og:image", content: `${SITE_URL}/og-image.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: PAGE_TITLE },
    { name: "twitter:description", content: PAGE_DESCRIPTION },
    { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
  ]);

function GroupList({ group }: { group: Comparison["group"] }) {
  return (
    <ul>
      {COMPARISONS.filter((comparison) => comparison.group === group).map(
        (comparison) => (
          <li key={comparison.href}>
            <a href={comparison.href}>
              {comparison.tool} vs {SITE_NAME}
            </a>{" "}
            — {comparison.type.toLowerCase()}, {comparison.free.toLowerCase()}.
          </li>
        ),
      )}
    </ul>
  );
}

export default function ComparisonsIndex() {
  return (
    <ContentLayout>
      <article className="max-w-3xl mx-auto prose-policy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ITEM_LIST_JSON_LD }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: FAQ_JSON_LD }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }}
        />

        <p className="meta">Comparisons · updated August 2026</p>
        <h1>{SITE_NAME} vs other App Store screenshot tools</h1>
        <p>
          <strong>Short answer:</strong> if you work on a Mac or iPad and your
          listing repeats across sizes and languages, {SITE_NAME} is built for
          exactly that. If you are on Windows, need Apple Watch or Vision Pro
          sizes, localize into more than 30 markets, or want screenshots
          generated by CI, one of the tools below fits better — and each row
          links to a page that says why.
        </p>
        <p>
          Every comparison was checked against the other tool&apos;s own site in
          August 2026. Pricing and features change, so verify current details
          there before deciding. If you think something here is wrong or out of
          date, <a href="/support">tell us</a> and we will fix it.
        </p>

        <h2>The full matrix</h2>
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Type</th>
              <th>Free tier</th>
              <th>Localization</th>
              <th>Store upload</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{SITE_NAME}</strong>
              </td>
              <td>{SCREENSHOT_BRO_ROW.type}</td>
              <td>{SCREENSHOT_BRO_ROW.free}</td>
              <td>{SCREENSHOT_BRO_ROW.localization}</td>
              <td>{SCREENSHOT_BRO_ROW.upload}</td>
            </tr>
            {COMPARISONS.map((comparison) => (
              <tr key={comparison.href}>
                <td>
                  <a href={comparison.href}>{comparison.tool}</a>
                </td>
                <td>{comparison.type}</td>
                <td>{comparison.free}</td>
                <td>{comparison.localization}</td>
                <td>{comparison.upload}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Native apps</h2>
        <p>
          Tools that run locally, work offline, and keep project files on your
          own disk.
        </p>
        <GroupList group="native" />

        <h2>Browser generators</h2>
        <p>
          Nothing to install and they run on any operating system — the right
          answer if you are not on a Mac.
        </p>
        <GroupList group="browser" />

        <h2>Automation</h2>
        <p>
          For screenshots that should be produced by a pipeline rather than a
          person.
        </p>
        <GroupList group="automation" />

        <h2>Design tools and mockup libraries</h2>
        <p>
          General-purpose tools that can make store screenshots, with more
          freedom and more manual repetition.
        </p>
        <GroupList group="design" />

        <h2>Roundups</h2>
        <ul>
          <li>
            <a href="/blog/best-app-store-screenshot-tools-for-mac">
              Best App Store screenshot tools for Mac
            </a>{" "}
            — the native options in detail.
          </li>
          <li>
            <a href="/blog/best-app-screenshot-localization-tools">
              Best app screenshot localization tools
            </a>{" "}
            — language coverage compared.
          </li>
          <li>
            <a href="/blog/best-google-play-screenshot-tools">
              Best Google Play screenshot tools
            </a>{" "}
            — including the feature graphic.
          </li>
          <li>
            <a href="/blog/best-free-app-store-screenshot-generators">
              Best free App Store screenshot generators
            </a>{" "}
            — what you can ship without paying.
          </li>
          <li>
            <a href="/blog/screenshot-bro-alternatives">
              {SITE_NAME} alternatives
            </a>{" "}
            — when this app is the wrong choice.
          </li>
        </ul>

        <BlogCTA message="Try Screenshot Bro on one real listing — the free tier exports watermark-free, so you can judge it against any tool here." />
      </article>
    </ContentLayout>
  );
}
