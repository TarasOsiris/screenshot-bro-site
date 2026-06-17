import type { Route } from "./+types/blog.app-store-screenshot-mistakes";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-screenshot-mistakes";

export async function loader() {
  return { locale: "en" as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches, "en");

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

const MISTAKES = [
  "Starting with a splash screen or logo-only image",
  "Showing a login screen before the core product",
  "Making the first screenshot too abstract",
  "Using tiny UI that cannot be read on phones",
  "Adding captions that do not match the visible screen",
  "Saving the main benefit for screenshot 5 or later",
  "Using one generic headline on every image",
  "Showing paid content without making the purchase requirement clear",
  "Using real personal data instead of fictional account details",
  "Including imagery from another mobile platform or store",
  "Making metadata unsuitable for a 4+ audience",
  "Cropping important UI under device frames or captions",
  "Uploading only one orientation without checking search-result presentation",
  "Letting seasonal or launch copy stay live after it expires",
  "Copying a competitor&apos;s visual structure too closely",
];

export default function BlogPost() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <BlogArticleShell
      slug={SLUG}
      locale={locale}
      ctaMessage="Use Screenshot Bro to keep screenshot structure consistent while you fix weak copy, crops, and device-size variants."
      seoLinks={[
        {
          href: "/blog/app-store-screenshots-rejected-fix",
          label: "fix rejected App Store screenshots",
          description: "turn review feedback into a clean metadata resubmission.",
        },
        {
          href: "/blog/app-store-screenshot-order",
          label: "App Store screenshot order",
          description: "put the strongest ASO message where users see it first.",
        },
        {
          href: "/blog/app-store-screenshot-copywriting-examples",
          label: "App Store screenshot text examples",
          description: "replace vague captions with specific, visible outcomes.",
        },
      ]}
      faqs={[
        {
          question: "What is the biggest App Store screenshot mistake?",
          answer:
            "The biggest mistake is not showing the app in use. Apple's guidelines say screenshots should show the app experience, and users need to see the product before they trust the promise.",
        },
        {
          question: "Can bad screenshots hurt ASO?",
          answer:
            "Bad screenshots can hurt conversion, which is a major part of practical ASO. They are not a replacement for App Store keyword metadata, but they strongly affect whether product page visitors install.",
        },
        {
          question: "Should I use real user data in screenshots?",
          answer:
            "No. Use fictional or cleared data. Apple says developers are responsible for rights to materials used in screenshots and should use fictional account information rather than a real person's data.",
        },
      ]}
    >
      <p>
        Bad App Store screenshots usually fail in one of two ways: they make
        the app harder to understand, or they create review risk by showing
        something inaccurate, irrelevant, or not allowed in metadata. Both
        problems are avoidable.
      </p>
      <p>
        This article was fact-checked on June 17, 2026 against Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/app-store/product-page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          product page guidance
        </a>
        ,{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/"
          target="_blank"
          rel="noopener noreferrer"
        >
          screenshot specifications
        </a>
        , and{" "}
        <a
          href="https://developer.apple.com/app-store/review/guidelines/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Review Guidelines
        </a>
        .
      </p>

      <h2>15 Mistakes to Avoid</h2>
      <ol>
        {MISTAKES.map((mistake) => (
          <li key={mistake} dangerouslySetInnerHTML={{ __html: mistake }} />
        ))}
      </ol>

      <h2>The Apple Rules Behind These Mistakes</h2>
      <p>
        Apple says screenshots should visually communicate the app&apos;s user
        experience. It also says the first one to three images may appear in
        search results when no app preview is available. That makes the first
        screenshots the wrong place for a logo-only image, a login wall, or a
        vague brand message.
      </p>
      <p>
        Apple&apos;s Guideline 2.3 says metadata, including screenshots and
        previews, must accurately reflect the app&apos;s core experience and stay
        up to date with new versions. Guideline 2.3.3 is even more direct:
        screenshots should show the app in use, not merely title art, a login
        page, or a splash screen. Text and image overlays are allowed, but the
        screenshot still needs to show the product.
      </p>

      <h2>Conversion Mistakes</h2>
      <h3>1. Hiding the main outcome</h3>
      <p>
        If users need to reach screenshot 4 to understand the app, the sequence
        is upside down. Put the main outcome first, then prove it with the next
        workflow screen.
      </p>

      <h3>2. Writing captions that could fit any app</h3>
      <p>
        &quot;Simple and powerful&quot; does not tell users what changed in their
        life. Strong copy is specific: &quot;Track invoices by client&quot;,
        &quot;Compare routes before you book&quot;, or &quot;Learn vocabulary
        in context.&quot;
      </p>

      <h3>3. Designing for your monitor instead of search results</h3>
      <p>
        If you design on a large desktop canvas, you may overestimate how much
        text and UI detail users can see. Export a preview, view it at phone
        size, and make sure the first three screenshots remain understandable.
      </p>

      <h2>Review-Risk Mistakes</h2>
      <h3>1. Unsupported claims</h3>
      <p>
        Avoid claims your app cannot prove, especially around rankings,
        savings, health results, security, or financial performance. If a claim
        depends on context, put that context in the app or avoid the claim.
      </p>

      <h3>2. Wrong platform signals</h3>
      <p>
        Apple says app metadata should focus on the Apple platforms the app
        supports and should not include names, icons, or imagery of other
        mobile platforms or alternative app marketplaces unless there is
        specific approved interactive functionality.
      </p>

      <h3>3. Real user data</h3>
      <p>
        Apple says developers are responsible for securing rights to all
        materials in app icons, screenshots, and previews, and should display
        fictional account information instead of data from a real person.
      </p>

      <h2>Fix Checklist</h2>
      <ul>
        <li>Make screenshot 1 the clearest product outcome.</li>
        <li>Make screenshots 2 and 3 prove the workflow or differentiator.</li>
        <li>Remove unsupported ranking, price, award, and performance claims.</li>
        <li>Use screenshots of the current app, not outdated UI.</li>
        <li>Replace real names, messages, addresses, and account data with fictional examples.</li>
        <li>Check every required device size after export.</li>
        <li>Read every caption at phone size before upload.</li>
      </ul>
    </BlogArticleShell>
  );
}
