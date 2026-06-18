import type { Route } from "./+types/blog.shotbot-alternative";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "shotbot-alternative";

const COMPARISON = [
  {
    factor: "Core focus",
    shotbot: "Fast framing of individual screenshots",
    screenshotBro: "Designing full localized store screenshot sets",
  },
  {
    factor: "Platform",
    shotbot: "Native iOS, macOS, visionOS",
    screenshotBro: "Native Mac and iPad",
  },
  {
    factor: "Workflow extras",
    shotbot: "Widgets, Shortcuts, share-sheet framing, iCloud sync",
    screenshotBro: "Multi-row editor, backgrounds, captions, device frames",
  },
  {
    factor: "Localization",
    shotbot: "Not the focus",
    screenshotBro: "30 language presets, auto-translate, per-shape overrides",
  },
  {
    factor: "Direct store upload",
    shotbot: "Export/share images",
    screenshotBro: "Direct App Store Connect upload",
  },
  {
    factor: "Free tier",
    shotbot: "Limited frames per day; paid unlimited",
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
      ctaMessage="Designing a full localized screenshot set, not just framing one shot? Try Screenshot Bro free."
      seoLinks={[
        {
          href: "/blog/best-app-store-screenshot-tools",
          label: "Best screenshot tools",
          description: "the broader roundup of screenshot apps.",
        },
        {
          href: "/blog/device-mockup-generator-app-screenshots",
          label: "Device mockup generator",
          description: "how framing fits into a full screenshot workflow.",
        },
        {
          href: "/blog/app-store-screenshot-localization-guide",
          label: "Screenshot localization guide",
          description: "the localization step framing tools usually skip.",
        },
      ]}
      faqs={[
        {
          question: "Is Shotbot free?",
          answer:
            "Shotbot offers a free tier with a limited number of frames per day and a paid unlimited plan, plus referral credits. Pricing changes, so check the app for current details.",
        },
        {
          question: "What is a good Shotbot alternative?",
          answer:
            "If you need more than fast framing — full screenshot design with backgrounds, captions, a multi-row editor, deep localization, and direct App Store Connect upload — Screenshot Bro is a strong native alternative with a watermark-free free tier. Shotbot remains great for quickly framing individual screenshots from the share sheet.",
        },
        {
          question: "How is Screenshot Bro different from Shotbot?",
          answer:
            "Both are native apps, but they solve different problems. Shotbot is optimized for quickly wrapping a single screenshot in a device frame, with widgets and Shortcuts. Screenshot Bro is a full store-screenshot designer: multi-row layouts, backgrounds and gradients, captions, 30-language localization, and direct upload to App Store Connect.",
        },
      ]}
    >
      <p>
        Shotbot is a native iOS, macOS, and visionOS app built for one thing
        very well: quickly framing screenshots. With widgets, Shortcuts
        integration, a share-sheet extension, and iCloud sync, it turns a raw
        screenshot into a framed image in seconds. This page is for people
        searching for a <strong>Shotbot alternative</strong> — usually because
        they need to design a full, localized store screenshot set rather than
        frame one shot at a time.
      </p>
      <p>
        Competitor details below were checked in mid-2026; pricing and features
        change, so verify in the app before deciding.
      </p>

      <h2>What Shotbot Does Well</h2>
      <p>
        Shotbot&apos;s strength is speed and convenience for individual screenshots.
        It frames your most recent screenshot via a widget, automates framing
        with Shortcuts, works from the share sheet without opening the app, and
        syncs preferences across devices with iCloud. For a developer who just
        wants tidy framed screenshots fast, it is excellent.
      </p>

      <h2>Why People Look for an Alternative</h2>
      <ul>
        <li>
          They need to design a <strong>full screenshot set</strong> with
          backgrounds, captions, and a multi-row layout — not just a frame.
        </li>
        <li>
          They need <strong>localization</strong> across many languages.
        </li>
        <li>
          They want to <strong>upload directly to App Store Connect</strong>{" "}
          rather than export and drag files.
        </li>
      </ul>

      <h2>Shotbot vs Screenshot Bro</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Shotbot</th>
            <th>Screenshot Bro</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((row) => (
            <tr key={row.factor}>
              <td>{row.factor}</td>
              <td>{row.shotbot}</td>
              <td>{row.screenshotBro}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Who Should Pick Which</h2>
      <p>
        Choose <strong>Shotbot</strong> if you want the fastest way to frame
        individual screenshots, with widgets and Shortcuts. Choose{" "}
        <strong>Screenshot Bro</strong> if you are building a complete, localized
        App Store and Google Play screenshot set — backgrounds, captions,
        multi-row layouts, device frames, and direct App Store Connect upload —
        from a native Mac and iPad app with a watermark-free free tier. For more
        options, see the{" "}
        <a href="/blog/best-app-store-screenshot-tools">full tools roundup</a>.
      </p>
    </BlogArticleShell>
  );
}
