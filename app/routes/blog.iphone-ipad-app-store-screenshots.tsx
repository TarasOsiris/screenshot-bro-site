import type { Route } from "./+types/blog.iphone-ipad-app-store-screenshots";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "iphone-ipad-app-store-screenshots";

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
      ctaMessage="Create one iPhone and iPad screenshot system, then export the required sizes from Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-sizes",
          label: "App Store screenshot sizes",
          description: "check every Apple display class before final export.",
        },
        {
          href: "/blog/upload-screenshots-to-app-store-connect",
          label: "upload screenshots to App Store Connect",
          description: "prepare iPhone and iPad assets for App Store Connect.",
        },
        {
          href: "/blog/app-store-screenshot-localization-guide",
          label: "App Store screenshot localization",
          description: "adapt device screenshots and captions for more markets.",
        },
      ]}
      faqs={[
        {
          question: "Do I need separate iPhone and iPad App Store screenshots?",
          answer:
            "If your app runs on both iPhone and iPad, plan screenshots for both experiences. Apple lists separate iPhone and iPad display classes, and iPad screenshots should show the real iPad layout when it differs from iPhone.",
        },
        {
          question: "How many iPhone screenshots can I upload?",
          answer:
            "Apple allows one to ten screenshots per supported display size and localization.",
        },
        {
          question: "Can App Store Connect scale screenshots for smaller devices?",
          answer:
            "Yes. Apple says you can provide only the highest resolution screenshots required if the UI is the same across device sizes and localizations, and those screenshots can scale down for other sizes.",
        },
      ]}
    >
      <p>
        iPhone and iPad screenshots are not just the same image in two frames.
        App Store Connect uses device display classes, scaling behavior, and
        localization rules that affect what you need to upload and how much work
        you can safely reuse.
      </p>
      <p>
        This guide was fact-checked on June 17, 2026 against Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/"
          target="_blank"
          rel="noopener noreferrer"
        >
          screenshot specifications
        </a>{" "}
        and{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/manage-app-information/upload-app-previews-and-screenshots/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect upload guidance
        </a>
        .
      </p>

      <h2>The Short Version</h2>
      <ul>
        <li>Apple accepts one to ten screenshots in JPEG, JPG, or PNG formats.</li>
        <li>If your app runs on iPhone, plan for the current largest iPhone display class first.</li>
        <li>If your app runs on iPad, Apple lists 13-inch iPad screenshots as required.</li>
        <li>If your UI is the same across device sizes and localizations, Apple says you can provide only the highest resolution screenshots required and let them scale down.</li>
        <li>If you want different assets by display size or localization, use Media Manager.</li>
      </ul>

      <h2>Current iPhone Display Classes</h2>
      <table>
        <thead>
          <tr>
            <th>Display class</th>
            <th>Portrait sizes Apple lists</th>
            <th>Practical note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6.9 inch</td>
            <td>1260 x 2736, 1290 x 2796, or 1320 x 2868</td>
            <td>Start here for modern iPhone exports.</td>
          </tr>
          <tr>
            <td>6.5 inch</td>
            <td>1284 x 2778 or 1242 x 2688</td>
            <td>Required if the app runs on iPhone and 6.9-inch screenshots are not provided.</td>
          </tr>
          <tr>
            <td>6.3 inch</td>
            <td>1179 x 2556 or 1206 x 2622</td>
            <td>Apple can scale from 6.5-inch screenshots if accepted sizes are not provided.</td>
          </tr>
          <tr>
            <td>6.1 inch</td>
            <td>1170 x 2532, 1125 x 2436, or 1080 x 2340</td>
            <td>Apple can scale from 6.5-inch screenshots if accepted sizes are not provided.</td>
          </tr>
          <tr>
            <td>5.5 inch</td>
            <td>1242 x 2208</td>
            <td>Apple can scale from 6.1-inch screenshots if accepted sizes are not provided.</td>
          </tr>
        </tbody>
      </table>

      <h2>Current iPad Display Classes</h2>
      <table>
        <thead>
          <tr>
            <th>Display class</th>
            <th>Portrait sizes Apple lists</th>
            <th>Practical note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13 inch</td>
            <td>2064 x 2752 or 2048 x 2732</td>
            <td>Apple lists this as required if the app runs on iPad.</td>
          </tr>
          <tr>
            <td>12.9 inch</td>
            <td>2048 x 2732</td>
            <td>Still part of the iPad screenshot specification.</td>
          </tr>
          <tr>
            <td>11 inch</td>
            <td>1488 x 2266, 1668 x 2420, 1668 x 2388, or 1640 x 2360</td>
            <td>Useful when the iPad layout materially changes at this size.</td>
          </tr>
          <tr>
            <td>10.5 inch</td>
            <td>1668 x 2224</td>
            <td>Often covered by scaling unless you need a custom layout.</td>
          </tr>
          <tr>
            <td>9.7 inch</td>
            <td>1536 x 2008 or 1536 x 2048</td>
            <td>Legacy iPad class, still listed in Apple&apos;s specification.</td>
          </tr>
        </tbody>
      </table>

      <h2>When to Reuse the Same Screenshots</h2>
      <p>
        Reuse the same message and sequence when the iPhone and iPad app offer
        the same primary workflow. Keep the caption, feature order, and visual
        style aligned so users understand they are looking at the same product
        on different screens.
      </p>
      <p>
        Do not reuse blindly when the iPad app has different navigation,
        split-view layouts, keyboard workflows, Apple Pencil support, or
        dashboard density. In those cases, the iPad screenshots should prove
        the iPad-specific value.
      </p>

      <h2>Recommended Upload Plan</h2>
      <ol>
        <li>Design the screenshot story once: outcome, workflow, differentiator, trust, power feature.</li>
        <li>Create the largest required iPhone and iPad exports first.</li>
        <li>Preview scaled-down sizes before deciding whether custom assets are needed.</li>
        <li>Use iPad screenshots to show layout advantages instead of stretching phone screenshots.</li>
        <li>Check every localization because caption length changes layout quickly.</li>
      </ol>

      <h2>Common iPad Mistakes</h2>
      <ul>
        <li>Using phone screenshots in an iPad frame.</li>
        <li>Showing empty sidebars or blank split-view space.</li>
        <li>Using captions that cover the part of the wider layout users need to inspect.</li>
        <li>Forgetting landscape if the app is strongest in landscape.</li>
        <li>Making iPad screenshots feel like an afterthought when the app supports iPad.</li>
      </ul>
    </BlogArticleShell>
  );
}
