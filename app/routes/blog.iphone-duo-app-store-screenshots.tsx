import type { Route } from "./+types/blog.iphone-duo-app-store-screenshots";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { type LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "iphone-duo-app-store-screenshots";

const SIZES = [
  {
    display: "Inner display (7.6-inch, unfolded)",
    portrait: "2007 × 2853",
    landscape: "2853 × 2007",
    ratio: "≈ 1.42 : 1",
  },
  {
    display: "Outer display (5.4-inch, closed)",
    portrait: "1398 × 2034",
    landscape: "2034 × 1398",
    ratio: "≈ 1.45 : 1",
  },
  {
    display: "For comparison: 6.9-inch iPhone",
    portrait: "1320 × 2868",
    landscape: "2868 × 1320",
    ratio: "≈ 2.17 : 1",
  },
  {
    display: "For comparison: 13-inch iPad",
    portrait: "2064 × 2752",
    landscape: "2752 × 2064",
    ratio: "≈ 1.33 : 1",
  },
] as const;

const FRAMES = [
  {
    frame: "iPhone Duo",
    shows: "The open phone, inner display facing you",
    use: "Your hero shots — the layouts that only exist unfolded",
  },
  {
    frame: "iPhone Duo (Closed)",
    shows: "The folded phone and its cover screen",
    use: "Quick, one-handed flows people do without opening the phone",
  },
  {
    frame: "iPhone Duo (Open, Back)",
    shows: "The unfolded phone from behind, cover screen lit",
    use: "Hardware-forward marketing images; landscape only",
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
      tldr="iPhone Duo is the first iPhone with two App Store screenshot sizes, one per screen: 2007 × 2853 px for the 7.6-inch inner display and 1398 × 2034 px for the 5.4-inch outer display (or the same pairs in landscape). App Store Connect has an iPhone Duo slot that takes either size. Duo screenshots are optional for now, but Apple's specifications say they will be required starting in April 2027 for any app using the iOS 27.1 SDK or later, and your 6.9-inch iPhone set is still the one that is required. Both Duo canvases are close to square (about 1.42 : 1 and 1.45 : 1), so a normal phone screenshot does not fit them: capture the real unfolded layout from the iPhone Duo simulator in Xcode 27.1, build the set, and upload it now."
      ctaMessage="Screenshot Bro ships iPhone Duo frames for the inner screen, the closed phone and the open phone from the back, size presets for both Duo displays, uploads to App Store Connect's iPhone Duo slot, and a Duo Showcase template. Free to try."
      ctaHomeLinkLabel="a native App Store screenshot app for Mac"
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-sizes",
          label: "App Store screenshot sizes",
          description:
            "every display class Apple lists, including the 6.9-inch set Duo does not replace.",
        },
        {
          href: "/blog/iphone-ipad-app-store-screenshots",
          label: "iPhone and iPad screenshots: what to upload",
          description:
            "which display classes are required and how App Store Connect scales the rest.",
        },
        {
          href: "/blog/device-mockup-generator-app-screenshots",
          label: "Device mockup generator",
          description:
            "framing screenshots for every Apple device, with the three Duo views in context.",
        },
        {
          href: "/blog/iphone-simulator-screenshots",
          label: "Taking screenshots in the iOS Simulator",
          description:
            "clean status bars and repeatable captures, which the Duo simulator needs too.",
        },
        {
          href: "/blog/upload-screenshots-to-app-store-connect",
          label: "Uploading screenshots to App Store Connect",
          description:
            "how Media Manager slots work, now that Duo has one.",
        },
      ]}
      faqs={[
        {
          question: "What size are iPhone Duo App Store screenshots?",
          answer:
            "Apple lists two sizes, one per screen. The inner display takes 2007 × 2853 pixels in portrait or 2853 × 2007 in landscape. The outer display takes 1398 × 2034 pixels in portrait or 2034 × 1398 in landscape. As with every App Store screenshot, use JPEG or PNG without an alpha channel, and supply one to ten images per set.",
        },
        {
          question: "Are iPhone Duo screenshots required?",
          answer:
            "Not yet. Apple's screenshot specifications say that starting in April 2027, iPhone Duo screenshots will be required for any app using the iOS 27.1 SDK or later. Until then they are optional. What stays required is your 6.9-inch iPhone set (1260 × 2736, 1290 × 2796 or 1320 × 2868), or the 6.5-inch set if you do not provide 6.9-inch screenshots. Duo screenshots are an addition to that, not a replacement.",
        },
        {
          question: "Can I upload iPhone Duo screenshots to App Store Connect now?",
          answer:
            "Yes. App Store Connect has an iPhone Duo display type, so each language gets one iPhone Duo set, and it takes either Duo size — 2007 × 2853 or 1398 × 2034, in portrait or landscape. The \"available later this year\" note that Apple's specifications page carried when we first published this guide is gone (checked October 9, 2026).",
        },
        {
          question: "Can I reuse my normal iPhone screenshots for iPhone Duo?",
          answer:
            "Not well. A 6.9-inch iPhone screenshot is about 2.17 : 1, while the Duo inner display is about 1.42 : 1 — closer to an iPad than a phone. Scaling one into the other either letterboxes it or crops it badly, and stretched phone UI inside a foldable frame looks wrong. The inner display also reports regular width and height size classes, so your app likely shows a different layout there. Capture that layout instead.",
        },
        {
          question: "How do I take iPhone Duo screenshots without the device?",
          answer:
            "Use the iPhone Duo simulator in Xcode 27.1. Apple's guidance says to build with the iOS 27.1 SDK to get the full edge-to-edge layout, and the simulator has controls to open, close, rotate and fold the device, so you can capture the inner and outer screens from one session. Clean up the status bar first, the same way you would for any simulator screenshot.",
        },
        {
          question: "Does Screenshot Bro support iPhone Duo?",
          answer:
            "Yes. Screenshot Bro has three iPhone Duo frames — the open phone, the closed phone and the open phone seen from the back — in Night Sky and Star White, plus a Duo Showcase template. Since version 4.21 it also has a size preset for each screen, iPhone Duo Inner Display (2007 × 2853) and iPhone Duo Outer Display (1398 × 2034); screenshots at either size drop into the matching Duo frame. The App Store Connect upload detects the iPhone Duo display type from the row's size and uploads the row to it, and it warns when an iOS version would have no Duo screenshots.",
        },
      ]}
    >
      <p>
        iPhone Duo is Apple&apos;s first foldable. Apple{" "}
        <a href="https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/">
          announced it on September 9, 2026
        </a>
        , pre-orders open October 16, and it ships on October 23 running iOS
        27.1. For anyone who makes App Store screenshots, it is also the first
        iPhone that brings <strong>two new screenshot sizes at once</strong> —
        one for the 7.6-inch inner display and one for the 5.4-inch cover
        screen — and neither of them is shaped like a phone.
      </p>
      <p>
        This guide covers what Apple has actually published, what is still
        missing, why your existing screenshots will not carry over, and how to
        build both Duo sets in Screenshot Bro and upload them to App Store
        Connect.
      </p>

      <h2>iPhone Duo Screenshot Sizes</h2>
      <p>
        Apple&apos;s{" "}
        <a href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications">
          screenshot specifications
        </a>{" "}
        list iPhone Duo as its own entry with two sizes. Each accepts portrait
        or landscape:
      </p>
      <table>
        <thead>
          <tr>
            <th>Display</th>
            <th>Portrait</th>
            <th>Landscape</th>
            <th>Aspect ratio</th>
          </tr>
        </thead>
        <tbody>
          {SIZES.map((row) => (
            <tr key={row.display}>
              <td>{row.display}</td>
              <td>{row.portrait}</td>
              <td>{row.landscape}</td>
              <td>{row.ratio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The general rules do not change: JPEG, JPG or PNG, no alpha channel or
        transparency, and one to ten screenshots per set. What changes is the
        shape. Every iPhone since the X has had a tall canvas of roughly 2.17
        : 1. The Duo inner display is about 1.42 : 1 and the cover screen
        about 1.45 : 1. On paper, the inner screen is much closer to a 13-inch
        iPad than to any phone.
      </p>

      <h2>Optional Today, Required From April 2027</h2>
      <p>
        Two facts from that same page shape everything else:
      </p>
      <ul>
        <li>
          <strong>Duo screenshots are optional, for now.</strong> Apple does
          not require them today. The 6.9-inch set is still the one you must
          provide if your app runs on iPhone — or the 6.5-inch set if you skip
          6.9-inch. But Apple notes that &ldquo;starting in April 2027,
          screenshots will be required for any app using the iOS 27.1 SDK or
          later.&rdquo;
        </li>
        <li>
          <strong>App Store Connect accepts them.</strong> When we first
          published this guide, Apple said upload support would be
          &ldquo;available later this year.&rdquo; That line is gone (we checked on October 9, 2026), and App Store Connect
          now has an iPhone Duo display type: one set per language, which
          takes screenshots at either Duo size.
        </li>
      </ul>
      <p>
        Apple has also not documented what someone browsing on an iPhone Duo
        sees in place of Duo screenshots before you supply any. Do not plan
        around a guess. Plan around the two things that are certain: your
        6.9-inch set has to be good regardless, and the Duo sizes are fixed
        and published, so the work can be done now.
      </p>
      <p>
        That makes this a real window. The upload slot is open before the
        phone ships on October 23. Developers who have a Duo set uploaded and
        localized by launch day will be among the first listings with native
        Duo screenshots, on a device whose buyers are, by definition, early
        adopters looking for apps that use the fold.
      </p>

      <h2>Why Your Phone Screenshots Won&apos;t Carry Over</h2>
      <p>
        The temptation is to take the 6.9-inch set and resize it. That fails
        for two separate reasons.
      </p>
      <p>
        <strong>The geometry.</strong> Fitting a 2.17 : 1 image into a 1.42 :
        1 canvas leaves a third of the width empty, or crops a third of the
        height off. Neither looks intentional, and both waste the one thing
        Duo screenshots exist to show: more room.
      </p>
      <p>
        <strong>The layout.</strong> Apple&apos;s{" "}
        <a href="https://developer.apple.com/documentation/technologyoverviews/preparing-your-app-for-iphone-duo">
          preparing your app for iPhone Duo
        </a>{" "}
        guidance says the outer display behaves like a normal iPhone — compact
        width, regular height in portrait — but the inner display reports{" "}
        <strong>regular size classes in both dimensions</strong>. That is the
        iPad trait combination. If your app adapts to size classes, it will
        show sidebars, split views and multi-column layouts on the inner
        screen that never appear on a regular phone. Those are exactly the
        screens worth putting in a Duo screenshot, and you cannot get them by
        resizing an iPhone capture.
      </p>
      <p>
        Your iPad screenshots are not the answer either. They are close in
        ratio (1.33 : 1 against 1.42 : 1), but they show iPad UI at iPad
        density, and Duo&apos;s inner display has its own proportions. Capture
        the screens your app really renders on the device.
      </p>

      <h2>Capturing Duo Screenshots Without the Device</h2>
      <p>
        You do not need the hardware. Xcode 27.1 includes an iPhone Duo
        simulator, and Apple&apos;s guidance lays out three tiers depending on
        which SDK your build uses:
      </p>
      <ul>
        <li>
          <strong>Built before the iOS 27 SDK:</strong> on the inner screen
          your app runs at &ldquo;a familiar size and aspect ratio&rdquo; —
          not full screen.
        </li>
        <li>
          <strong>iOS 27 SDK:</strong> the app extends into the area beside the
          status bar on the inner display.
        </li>
        <li>
          <strong>iOS 27.1 SDK:</strong> the app extends to the edge of the
          screen, and standard navigation and toolbar buttons lay out
          vertically under the status bar.
        </li>
      </ul>
      <p>
        For store screenshots, only the last one is worth capturing. A
        screenshot of your app sitting at a compatibility size inside the
        bigger screen advertises the opposite of what a Duo buyer is looking
        for. Build with the 27.1 SDK, run the iPhone Duo simulator, and use its
        open, close and rotate controls to capture both screens from the same
        session.
      </p>
      <p>
        Prepare the simulator the way you would for any store capture: set a
        clean status bar with <code>xcrun simctl status_bar</code>, load
        realistic demo content, and capture with{" "}
        <code>xcrun simctl io booted screenshot</code> or ⌘S. Our{" "}
        <a href="/blog/iphone-simulator-screenshots">simulator screenshot guide</a>{" "}
        has the full commands. Then check the pixel size of what the simulator
        saved — when your capture goes inside a device frame, the exported
        image takes the row&apos;s size, not the capture&apos;s.
      </p>

      <h2>Which Screen Should Lead?</h2>
      <p>
        You will design two sets, but they do different jobs — and App Store
        Connect gives iPhone Duo a single set per language, so decide which one
        it gets.
      </p>
      <p>
        <strong>The inner display set is the one that sells.</strong> Someone
        who bought a $1,999 foldable wants proof that your app uses the space.
        Lead with the view that only exists unfolded: a sidebar with content, a
        document beside its outline, a map beside a list, two panes of an
        editor. If your inner-screen layout is just your phone layout made
        wider, fix the app before you fix the screenshots.
      </p>
      <p>
        <strong>The outer display set is about speed.</strong> The cover
        screen is what people use without opening the phone — checking,
        replying, starting a timer, glancing at a widget-like view. Lead with
        the action someone can finish in a few seconds with one hand.
      </p>
      <p>
        Consider landscape for the inner set. At 2853 × 2007 the inner screen
        in landscape is a natural fit for split views and media apps, and
        Apple accepts either orientation per set. Split View — two apps side
        by side on iPhone for the first time — is one of the features Apple
        leads with, so a landscape shot of your app holding its own beside
        another is on-message.
      </p>

      <h2>Design Notes for a Near-Square Canvas</h2>
      <ul>
        <li>
          <strong>Less vertical room for a headline.</strong> On a 2.17 : 1
          phone canvas you can stack a two-line caption above a full device. At
          1.42 : 1 that stack crowds fast. Keep captions to one short line, or
          put the caption beside the device instead of above it.
        </li>
        <li>
          <strong>Show the fold, once.</strong> One image of the phone half
          open or seen from the back tells shoppers immediately that this
          listing was made for their device. More than one is decoration.
        </li>
        <li>
          <strong>Mind the cover screen&apos;s corners.</strong> The outer
          display is not a symmetric rounded rectangle: its corners are almost
          square on the hinge edge and well rounded on the free edge. A
          generic rounded mask leaves gaps or clips UI. Use a frame built for
          it.
        </li>
        <li>
          <strong>Keep the sets consistent.</strong> Same palette, same type,
          same order of ideas as your 6.9-inch set. A shopper can see both on
          different days; they should read as one product.
        </li>
        <li>
          <strong>Follow the usual content rules.</strong> No prices, no
          &ldquo;new on iPhone Duo&rdquo; claims you cannot back up, no other
          platforms&apos; logos. Our{" "}
          <a href="/blog/app-store-screenshots-rejected-fix">
            rejection guide
          </a>{" "}
          lists what App Review flags.
        </li>
      </ul>

      <h2>Building iPhone Duo Screenshots in Screenshot Bro</h2>
      <p>
        Screenshot Bro has native iPhone Duo frames from version 4.15 onward.
        Version 4.21 added a <strong>size preset for each Duo screen</strong>{" "}
        and uploads to App Store Connect&apos;s iPhone Duo slot.
      </p>
      <h3>1. Add a row per Duo screen</h3>
      <p>
        Add a new row with the dashed <strong>+</strong> tile under your
        existing rows. In the inspector, under <strong>Screenshot Size</strong>,
        open <strong>Presets</strong> and pick{" "}
        <strong>iPhone Duo Inner Display</strong> (2007 × 2853). Add a second
        row with <strong>iPhone Duo Outer Display</strong> (1398 × 2034) for
        the cover screen. <strong>Orientation</strong> flips either one to
        landscape (2853 × 2007 or 2034 × 1398), and every template in the row
        exports at exactly that pixel size.
      </p>
      <h3>2. Pick the right Duo frame</h3>
      <p>
        Drop your simulator captures onto the row. Captures at either Duo
        size drop into the matching iPhone Duo frame; use{" "}
        <strong>Change Device</strong> to pick another view. There are three
        frames, each in Night Sky and Star White:
      </p>
      <table>
        <thead>
          <tr>
            <th>Frame</th>
            <th>What it shows</th>
            <th>Best for</th>
          </tr>
        </thead>
        <tbody>
          {FRAMES.map((row) => (
            <tr key={row.frame}>
              <td>{row.frame}</td>
              <td>{row.shows}</td>
              <td>{row.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The inner frame&apos;s screen area is exactly 2007 × 2853 and the
        cover screen&apos;s is exactly 1398 × 2034 — the sizes Apple lists —
        and the closed frame carries the cover screen&apos;s asymmetric
        corners, so captures sit in them without stretching or gaps.
      </p>
      <h3>3. Start from the Duo Showcase template</h3>
      <p>
        If you want to announce Duo support in your regular listing, the{" "}
        <strong>Duo Showcase</strong> template lays out all three views —
        open, closed and open from the back — across a six-screenshot 6.9-inch
        row (1320 × 2868), with a night-sky gradient behind them. Several
        screenshots hold more than one phone, so drop a capture onto each
        frame rather than relying on a batch import. The 6.9-inch row uploads
        to the regular iPhone slot, so Duo owners and everyone else see it.
        Since 4.21 the template also has an iPhone Duo Inner Display row and
        an iPhone Duo Outer Display row, with the outer row excluded from App
        Store Connect uploads so the inner one fills the Duo set.
      </p>
      <h3>4. Upload one Duo row per language</h3>
      <p>
        Screenshot Bro uploads to App Store Connect directly, free tier
        included, and it detects each row&apos;s display type from its size:
        a 2007 × 2853 or 1398 × 2034 row goes to <strong>iPhone Duo</strong>.
        Because Duo has one set per language, only one row can fill it. Turn
        on <strong>Exclude when uploading to App Store Connect</strong> in the
        row inspector for the Duo row you are not uploading — usually the
        outer one. It stays in the project and in folder exports. If an iOS
        version would go out with no Duo screenshots at all, the upload wizard
        warns you.
      </p>
      <h3>5. Localize once</h3>
      <p>
        Duo rows are ordinary rows, so the same translations cover them. Add
        your languages once and every row — 6.9-inch, iPad, Duo inner, Duo
        outer — renders in each one. Text that no longer fits the narrower
        caption space is flagged with an orange outline, which matters more on
        a near-square canvas. See the{" "}
        <a href="/blog/app-store-screenshot-localization-guide">
          localization guide
        </a>{" "}
        for the workflow.
      </p>

      <h2>iPhone Duo Screenshot Checklist</h2>
      <ul>
        <li>Your 6.9-inch iPhone set is finished and live — it is still the required one.</li>
        <li>Your app builds with the iOS 27.1 SDK and runs edge to edge on the Duo inner display.</li>
        <li>Captures come from the iPhone Duo simulator, with a clean status bar and demo data.</li>
        <li>An inner-display set at 2007 × 2853 (or 2853 × 2007) leads with a layout that only exists unfolded.</li>
        <li>An outer-display set at 1398 × 2034 (or 2034 × 1398) leads with a one-handed action.</li>
        <li>Captions fit a near-square canvas in every language you ship.</li>
        <li>PNG or JPEG, no alpha channel, one to ten images per set.</li>
        <li>One Duo row per language goes to App Store Connect&apos;s iPhone Duo set; the other is excluded from uploads.</li>
        <li>If you build with the iOS 27.1 SDK, you have Duo screenshots in place before the April 2027 requirement.</li>
      </ul>

      <h2>The Short Version</h2>
      <p>
        iPhone Duo adds two screenshot sizes, 2007 × 2853 for the inner display
        and 1398 × 2034 for the cover screen. Both are optional for now —
        from April 2027 Apple requires them for any app using the iOS 27.1 SDK
        or later — and App Store Connect already takes them in one iPhone Duo
        set per language. Neither is phone-shaped, so your current screenshots
        will not convert — capture the real unfolded layout in the Xcode 27.1
        simulator instead. The slot is open before the October 23 launch, so
        build the set now and have it live when the first Duo owners open the
        App Store.
      </p>
      <p>
        For the full list of display classes Duo sits alongside, see{" "}
        <a href="/blog/app-store-screenshot-sizes">App Store screenshot sizes</a>
        .
      </p>
    </BlogArticleShell>
  );
}
