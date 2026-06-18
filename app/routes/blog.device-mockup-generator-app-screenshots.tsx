import type { Route } from "./+types/blog.device-mockup-generator-app-screenshots";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "device-mockup-generator-app-screenshots";

const FRAME_CATALOG = [
  {
    device: "iPhone",
    models: "iPhone 17, iPhone Air, 17 Pro, 17 Pro Max",
    use: "Primary App Store screenshots and marketing-site hero shots.",
  },
  {
    device: "iPad",
    models: "iPad Pro 11\", iPad Pro 13\"",
    use: "iPad App Store screenshots and landscape product pages.",
  },
  {
    device: "Mac",
    models: "MacBook Air 13\", MacBook Pro 14\"/16\", iMac 24\"",
    use: "Mac App Store listings and desktop-app landing pages.",
  },
  {
    device: "Android",
    models: "Generic Android phone, Pixel 9, Android tablet",
    use: "Google Play screenshots and feature graphics.",
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
      ctaMessage="Drop a screenshot, pick a device model and color, and export framed mockups for every store size in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/popular-figma-templates-app-store-screenshots-device-mockups",
          label: "Figma device mockup templates",
          description: "if you prefer editing frames inside Figma instead of a generator.",
        },
        {
          href: "/blog/screenshots-that-convert",
          label: "Screenshots that convert",
          description: "decide when a framed mockup helps and when a full-bleed shot wins.",
        },
        {
          href: "/blog/best-app-store-screenshot-tools",
          label: "Best screenshot tools",
          description: "compare full screenshot generators, not just frame overlays.",
        },
      ]}
      faqs={[
        {
          question: "What is a device mockup generator?",
          answer:
            "A device mockup generator wraps a flat screenshot inside a realistic device frame — an iPhone, iPad, MacBook, or Android phone — so the image looks like it was shot on a real device. The better tools also let you set the model, color, angle, shadow, and background in one place.",
        },
        {
          question: "Are device frames free to use?",
          answer:
            "Many frames are free, including Apple's official Design Resources and several open mockup libraries. Watch the license: some free PSD and PNG frames are for personal use only, and Apple frames must follow Apple's marketing guidelines. Generating frames inside an app you have a license to use avoids the per-asset license question entirely.",
        },
        {
          question: "Should App Store screenshots use device frames?",
          answer:
            "It depends on the category. Framed mockups add context and look premium, but Apple shows real UI well without frames, and a frame shrinks the usable screen area. Test both: framed mockups often win on marketing sites, while full-bleed screenshots can convert better in the App Store gallery.",
        },
        {
          question: "What resolution should a framed mockup be?",
          answer:
            "Export at the store's required screenshot resolution for the target device, then place the frame so the screen area fills the device cutout exactly. Exporting at 2x or 3x keeps the frame edges crisp on Retina displays.",
        },
      ]}
    >
      <p>
        A device mockup generator takes a flat screenshot and wraps it in a
        realistic phone, tablet, or laptop frame. It is one of the fastest ways
        to make app screenshots look professional, and it is the same step
        behind most of the polished images you see on App Store listings and
        startup landing pages.
      </p>
      <p>
        This guide covers what a device mockup generator does, where to find
        free frames, which device frames matter for app marketing in 2026, and
        how to generate framed mockups without breaking store resolution
        requirements.
      </p>

      <h2>Why Framed Mockups Convert</h2>
      <p>
        A bare screenshot can read as abstract — a rectangle of UI with no
        sense of scale. A device frame gives the eye a familiar object, signals
        the platform instantly (this is an iPhone app, this is a Mac app), and
        makes the image feel like a product photo rather than an export. On
        marketing sites in particular, framed mockups consistently look more
        finished than raw screenshots.
      </p>
      <p>
        The trade-off is screen area: a frame adds margins, so less of your
        actual UI is visible. That is why many App Store galleries use
        full-bleed screenshots while the marketing site uses framed mockups of
        the same shots.
      </p>

      <h2>Free vs Paid Frame Sources</h2>
      <ul>
        <li>
          <strong>Apple Design Resources</strong> — official, high-fidelity
          device art for current iPhone, iPad, and Mac hardware, subject to
          Apple&apos;s marketing guidelines.
        </li>
        <li>
          <strong>Open mockup libraries</strong> — free PNG and SVG frames from
          community design sites; check each license before commercial use.
        </li>
        <li>
          <strong>Paid mockup packs</strong> — Photoshop PSD smart-object packs
          with angled and lifestyle shots; the most flexible, but slowest to
          update for new devices.
        </li>
        <li>
          <strong>Built-in generators</strong> — apps that ship the frames and
          handle the screen-cutout math for you, so a new screenshot becomes a
          framed mockup in one step.
        </li>
      </ul>

      <h2>Device Frames That Matter for App Marketing</h2>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Models to keep on hand</th>
            <th>Where you use them</th>
          </tr>
        </thead>
        <tbody>
          {FRAME_CATALOG.map((frame) => (
            <tr key={frame.device}>
              <td>{frame.device}</td>
              <td>{frame.models}</td>
              <td>{frame.use}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>How to Generate a Framed Mockup</h2>
      <ol>
        <li>
          <strong>Start from a clean screenshot</strong> at the device&apos;s
          native resolution, with a tidy status bar and no personal data.
        </li>
        <li>
          <strong>Pick the device model and color</strong> that matches your
          target audience and store listing.
        </li>
        <li>
          <strong>Fit the screen to the cutout</strong> so the screenshot fills
          the device&apos;s screen area exactly, with no gap or overlap at the
          rounded corners.
        </li>
        <li>
          <strong>Add background, shadow, and caption</strong> if the mockup is
          for a marketing site or a framed App Store screenshot.
        </li>
        <li>
          <strong>Export at store resolution</strong> (2x or 3x for crisp
          edges), once per device size you support.
        </li>
      </ol>

      <h2>Resolution and Transparency Gotchas</h2>
      <p>
        Two issues break most framed mockups. First, <strong>resolution</strong>
        : if you frame a low-resolution screenshot, the device art stays sharp
        but the screen looks soft — always start from a full-resolution capture.
        Second, <strong>transparency</strong>: PNG frames usually have a
        transparent background, which is what you want for compositing, but App
        Store and Google Play screenshot slots expect a fully opaque image at an
        exact size, so flatten the final export onto a solid or gradient
        background before uploading.
      </p>

      <h2>App Store Mockups vs Marketing-Site Mockups</h2>
      <p>
        Keep the two contexts separate. App Store and Google Play screenshots
        must hit exact pixel dimensions and are best tested both framed and
        full-bleed. Marketing-site mockups can use angled, floating, or
        multi-device compositions that would never fit a store slot. Generating
        both from the same source screenshot keeps your visuals consistent
        across the store and your website.
      </p>
    </BlogArticleShell>
  );
}
