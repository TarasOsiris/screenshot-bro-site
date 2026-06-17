import type { Route } from "./+types/blog.app-store-screenshot-order";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-screenshot-order";

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
      ctaMessage="Plan one screenshot sequence, then export every required device size from the same Screenshot Bro project."
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-examples",
          label: "App Store screenshot examples",
          description: "compare real listing patterns before choosing your own sequence.",
        },
        {
          href: "/blog/app-store-screenshot-copywriting-examples",
          label: "ASO screenshot caption examples",
          description: "match each screenshot position with a clear headline.",
        },
        {
          href: "/blog/ab-test-app-store-screenshots",
          label: "A/B test App Store screenshots",
          description: "validate your screenshot order with Product Page Optimization.",
        },
      ]}
      faqs={[
        {
          question: "What should the first App Store screenshot show?",
          answer:
            "The first screenshot should show the main user outcome or clearest product promise, because Apple says the first one to three images can appear in search results when no app preview is available.",
        },
        {
          question: "How many App Store screenshots can I upload?",
          answer:
            "Apple lets you upload one to ten screenshots for App Store and Mac App Store product pages.",
        },
        {
          question: "Do app previews change screenshot order?",
          answer:
            "Yes. Apple says app previews precede screenshots on supported platforms, so the preview poster frame becomes part of the first impression.",
        },
      ]}
    >
      <p>
        App Store screenshot order matters because users do not give every
        image equal attention. The first screenshots carry the search-result
        impression, the product-page impression, and the promise that decides
        whether the user keeps scrolling.
      </p>
      <p>
        This guide was fact-checked on June 17, 2026 against Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/app-store/product-page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          product page guidance
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

      <h2>The Official Apple Constraint</h2>
      <p>
        Apple says you can feature up to 10 screenshots on App Store and Mac
        App Store product pages. It also says that, depending on screenshot
        orientation, the first one to three images can appear in search results
        when no app preview is available. Apple recommends making these images
        highlight the essence of the app and using subsequent screenshots to
        focus on main benefits or features.
      </p>
      <p>
        There is one important exception: app previews come before screenshots
        on iPhone, iPad, Mac, and Apple TV, even if you rearrange the assets in
        App Store Connect. If you use an app preview, the preview and poster
        frame become part of the first impression.
      </p>

      <h2>What to Put in the First 3 Screenshots</h2>
      <h3>Screenshot 1: the main outcome</h3>
      <p>
        The first screenshot should answer the user&apos;s fastest question:
        &quot;Why would I install this?&quot; Show the outcome, not the settings screen.
        For a habit app, show a completed routine. For a finance app, show a
        clear money view. For a photo editor, show the before-and-after or final
        result.
      </p>

      <h3>Screenshot 2: the workflow that proves it</h3>
      <p>
        The second screenshot should make the promise credible. Show the screen
        where the user creates, books, tracks, edits, saves, or shares
        something. This is where many apps should show the core interaction.
      </p>

      <h3>Screenshot 3: the differentiator</h3>
      <p>
        Use the third screenshot for the reason your app is different:
        automation, privacy, collaboration, personalization, speed, content
        depth, offline access, Apple Watch support, widgets, or another feature
        that changes the buying decision.
      </p>

      <h2>What to Put After the First 3</h2>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Best use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4</td>
            <td>Secondary workflow or strongest supporting feature.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Trust builder: privacy, backup, sync, review-worthy workflow, or integrations.</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Power-user feature, advanced mode, or customization.</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Cross-platform support: iPad, Mac, Apple Watch, widgets, or companion surfaces.</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Dark Mode, accessibility, or alternate layout if it matters to the audience.</td>
          </tr>
          <tr>
            <td>9-10</td>
            <td>Localized market-specific proof, niche use cases, or final objection handling.</td>
          </tr>
        </tbody>
      </table>

      <h2>Ordering Templates by App Type</h2>
      <h3>Productivity app</h3>
      <ol>
        <li>Finish the task faster.</li>
        <li>Create or organize the thing.</li>
        <li>Sync, automation, collaboration, or widgets.</li>
      </ol>

      <h3>Health or fitness app</h3>
      <ol>
        <li>Track the core activity or outcome.</li>
        <li>Show progress, coaching, or plans.</li>
        <li>Show motivation, history, or personalization.</li>
      </ol>

      <h3>Finance app</h3>
      <ol>
        <li>Show the clearest account, budget, or portfolio view.</li>
        <li>Show the key action with context.</li>
        <li>Show security, insights, alerts, or recurring workflows.</li>
      </ol>

      <h3>Creative app</h3>
      <ol>
        <li>Show the output first.</li>
        <li>Show the editor or creation workflow.</li>
        <li>Show templates, effects, export, or sharing.</li>
      </ol>

      <h3>Travel, delivery, or marketplace app</h3>
      <ol>
        <li>Show search or discovery.</li>
        <li>Show comparison, details, or availability.</li>
        <li>Show booking, checkout, tracking, or confidence cues.</li>
      </ol>

      <h2>App Preview Changes the First Impression</h2>
      <p>
        Apple allows up to three app previews per supported device size and
        language, and app previews appear before screenshots on supported
        platforms. If you add a preview, do not treat screenshot one as the
        only first impression. Your preview poster frame and first seconds of
        video need to carry the same main outcome as your screenshot sequence.
      </p>

      <h2>Common Ordering Mistakes</h2>
      <ul>
        <li>Starting with a login screen, splash screen, or brand-only image.</li>
        <li>Putting a minor feature before the main use case.</li>
        <li>Using the same headline structure on every screenshot without changing the idea.</li>
        <li>Saving the most valuable workflow for screenshot 6 or later.</li>
        <li>Showing an advanced screen before users understand the basic promise.</li>
        <li>Forgetting that the search-result crop may expose only the first few assets.</li>
      </ul>

      <h2>A Quick Rewrite Exercise</h2>
      <p>
        Write a one-sentence promise for your app. Then write three proof
        points underneath it. Your first three screenshots should map to those
        four lines:
      </p>
      <ol>
        <li>The promise becomes screenshot 1.</li>
        <li>The strongest proof point becomes screenshot 2.</li>
        <li>The most differentiated proof point becomes screenshot 3.</li>
      </ol>
      <p>
        If you cannot decide what belongs in the first three screenshots, the
        problem is usually not visual design. It is positioning. Clarify the
        promise first, then design the sequence.
      </p>
    </BlogArticleShell>
  );
}
