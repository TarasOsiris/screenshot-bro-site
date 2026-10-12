import type { Route } from "./+types/blog.app-store-screenshot-majority-rule";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { type LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-screenshot-majority-rule";

const ISSUES = [
  {
    issue: "Only title art, a login page or a splash screen",
    fix: "Replace with captures of the main features and functionality.",
  },
  {
    issue: "Half or fewer of the set shows the app in use",
    fix: "Make more than half of each device set show the live interface.",
  },
  {
    issue: "An outdated interface",
    fix: "Update screenshots with each new version.",
  },
  {
    issue: "Misleading marketing or promotional material",
    fix: "Remove misleading claims and keep promotional elements accurate.",
  },
  {
    issue: "Overlays or marketing visuals crowd out the app",
    fix: "Keep primary functionality visible; use overlays as a secondary element.",
  },
  {
    issue: "Only hardware, or an overlay with no app interface",
    fix: "Put the app interface behind any overlay or hardware image.",
  },
] as const;

// Posts are written in English only. /{locale}/blog/<slug> 301s to this URL
// (routes/blog.locale-redirect.tsx), so the page always renders as "en".
export async function loader() {
  return { locale: "en" as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches);

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <BlogArticleShell
      slug={SLUG}
      locale={locale}
      tldr="Apple's App Review team now publishes a dedicated page for guideline 2.3.3 that spells out a numeric test: it approves a submission only when more than half of the screenshots for each device type show the app in use. With 3 screenshots, at least 2 must; with 4, at least 3. The rest can be marketing panels. The test runs per device type and per localization, so a set that passes in English can fail in German. Count your frames before you submit."
      ctaMessage="Building a set that mixes marketing panels with real app screens? Screenshot Bro lays out every size and language from one design — free to try."
      ctaHomeLinkLabel="a native App Store screenshot app for Mac"
      seoLinks={[
        {
          href: "/blog/app-store-screenshots-rejected-fix",
          label: "Why App Store screenshots get rejected",
          description: "the rejection messages this rule produces, and how to answer them.",
        },
        {
          href: "/blog/app-store-screenshot-mistakes",
          label: "App Store screenshot mistakes",
          description: "the design errors that make a set look like marketing instead of product.",
        },
        {
          href: "/blog/app-store-creative-assets",
          label: "App Store creative assets",
          description: "the new header and search results assets, which are exempt from showing UI.",
        },
        {
          href: "/blog/app-store-screenshot-sizes",
          label: "App Store screenshot sizes",
          description: "the device sets the majority rule is counted against.",
        },
      ]}
      faqs={[
        {
          question: "What is the App Store screenshot majority rule?",
          answer:
            "Apple's App Review guidance for guideline 2.3.3 says it approves only submissions where more than half of the screenshots for each supported device type show the app in use. The remaining screenshots may use marketing materials to show benefits and features.",
        },
        {
          question: "How many screenshots must show the app in use?",
          answer:
            "More than half. Apple's examples: with 3 screenshots per device, at least 2 must show the app in use; with 4, at least 3. By the same arithmetic, 5 screenshots need 3 and 10 need 6.",
        },
        {
          question: "Is the rule counted per language?",
          answer:
            "Yes. Apple says each localization is assessed separately on whether the majority show the app in use. Device counts can also differ, and one screenshot per device is enough if it shows the app in use.",
        },
        {
          question: "Does a panel with a small phone mockup count as the app in use?",
          answer:
            "Apple's page does not give a pixel threshold. Its rejected example is a small mockup behind large promotional text, and it lists overlays that crowd out the app as an issue. Treat a panel as in use only if the real interface is clearly legible; otherwise count it as marketing.",
        },
        {
          question: "Can one image span several screenshots?",
          answer:
            "Yes. Apple says an image of the app in use can be spread across two or more screenshots.",
        },
      ]}
    >
      <p>
        Guideline 2.3.3 has said the same thing for years: screenshots{" "}
        <a href="https://developer.apple.com/app-store/review/guidelines/#2.3.3">
          should show the app in use, and not merely the title art, login page, or splash
          screen
        </a>
        . What it never said is how many. Apple&apos;s{" "}
        <a href="https://developer.apple.com/news/">October 5, 2026 announcement</a> of new
        creative assets linked to a new App Review page,{" "}
        <a href="https://developer.apple.com/help/app-review/guideline-reference/2-3-3-screenshots">
          Guideline 2.3.3: Show your app in use with screenshots
        </a>
        , and it states a number.
      </p>

      <h2>The Majority Rule</h2>
      <p>
        App Review evaluates the set of screenshots you submit for each supported device
        type. It approves only submissions where <strong>more than half</strong> show the
        app in use. The rest can be marketing material. Apple&apos;s own arithmetic:
      </p>
      <ul>
        <li>3 screenshots for a device: at least 2 show the app in use.</li>
        <li>4 screenshots for a device: at least 3 show the app in use.</li>
      </ul>
      <p>
        Extending that, 5 screenshots need 3, 6 need 4, and 10 need 6. Apple&apos;s
        illustration is a surf forecasting app. The approved set has a dashboard, an
        hourly forecast with one small promotional badge, and a feature summary. The
        rejected set has a small mockup behind large promotional text, a sign-in screen
        and a splash screen.
      </p>

      <h2>What Counts as Not In Use</h2>
      <p>
        The page lists the common failures and Apple&apos;s fix for each:
      </p>
      <table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Apple&apos;s fix</th>
          </tr>
        </thead>
        <tbody>
          {ISSUES.map((row) => (
            <tr key={row.issue}>
              <td>{row.issue}</td>
              <td>{row.fix}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        A seventh case, third-party platform elements such as a status bar, is assessed
        under guideline 2.3.10 and is not detailed on this page.
      </p>

      <h2>What You Are Still Allowed to Do</h2>
      <p>
        None of this bans the bold-headline style. Apple says these are fine as long as
        the majority still shows the app in use:
      </p>
      <ul>
        <li>Splash screens or marketing text in the minority of frames.</li>
        <li>
          Overlays that demonstrate input, such as an animated touch point or Apple
          Pencil.
        </li>
        <li>Extended on-device functionality, such as Touch Bar.</li>
        <li>Your app running on another Apple platform, when that is part of the experience.</li>
        <li>Different configurations, such as Dark Mode.</li>
      </ul>
      <p>
        Three rules about scope matter in practice. The count is per{" "}
        <strong>device type</strong>, and counts may differ between devices; one
        screenshot per device is enough if it shows the app in use. It is also per{" "}
        <strong>localization</strong>: each language is assessed separately. And one
        image of the app in use can be spread across two or more screenshots, so a
        panoramic layout that runs a single real screen across frames helps your count.
      </p>

      <h2>How to Audit Your Set</h2>
      <ol>
        <li>
          <strong>Count per device and per language.</strong> Open the set for each
          display size and each locale, and mark every frame as in use or not. Apple does
          not publish a pixel threshold, so be strict: if a reviewer would need the
          caption to know what the app does, mark it not in use.
        </li>
        <li>
          <strong>Check localized sets.</strong> A German set that swaps real UI for a
          text-only panel because the translation was long is easy to miss. The count has
          to hold in every language you ship.
        </li>
        <li>
          <strong>Look at the order.</strong> The rule is about the whole set, but the
          first frames are what customers see in search. Lead with the app in use.
        </li>
        <li>
          <strong>Refresh stale frames.</strong> A screenshot of an old interface fails
          the same page, regardless of the count.
        </li>
        <li>
          <strong>Mind new sizes.</strong> If you add a device set, such as the{" "}
          <a href="/blog/iphone-duo-app-store-screenshots">iPhone Duo</a> set Apple will
          require from April 2027, it needs its own majority.
        </li>
      </ol>

      <h2>Creative Assets Are Exempt</h2>
      <p>
        The new <a href="/blog/app-store-creative-assets">product page header and search
        results assets</a> do not need to show your UI; Apple positions them for brand,
        seasonal offers and new content. The majority rule applies to screenshots, so
        put the abstract, brand-led message in a header and keep the screenshots honest.
      </p>

      <h2>The Short Version</h2>
      <p>
        If more than half of each device and language set shows real app screens, you
        are inside the rule. If you run four marketing panels and a single screen, you
        are not. The fix is cheap: swap marketing panels for real screens until the
        count clears, and keep marketing text as a headline above the interface rather
        than instead of it.
      </p>
    </BlogArticleShell>
  );
}
