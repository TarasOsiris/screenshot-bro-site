import type { Route } from "./+types/blog.iphone-simulator-screenshots";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "iphone-simulator-screenshots";

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
      ctaMessage="Capture clean simulator screenshots, then frame, caption, localize, and upload them in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/make-and-ship-screenshots-with-fastlane",
          label: "Fastlane screenshots",
          description: "automate the full capture-and-upload pipeline end to end.",
        },
        {
          href: "/blog/app-store-screenshot-sizes",
          label: "App Store screenshot sizes",
          description: "which simulator devices produce App Store-accepted sizes.",
        },
        {
          href: "/blog/upload-screenshots-to-app-store-connect",
          label: "Upload to App Store Connect",
          description: "where your captured screenshots go next.",
        },
      ]}
      faqs={[
        {
          question: "How do I take a screenshot in the iOS Simulator?",
          answer:
            "From the command line, run `xcrun simctl io booted screenshot screenshot.png`. This captures the currently booted simulator at the device's native resolution — which is exactly what the App Store expects. You can also press Cmd+S in the Simulator app, but the command-line version is scriptable.",
        },
        {
          question: "Are simulator screenshots good enough for the App Store?",
          answer:
            "Yes. The iOS Simulator renders at the device's real resolution, so a clean simulator capture meets App Store size requirements. The main caveat is content that only renders on a real device (camera, some sensors); for those, capture on hardware.",
        },
        {
          question: "How do I get a clean status bar?",
          answer:
            "Use `xcrun simctl status_bar booted override` to set the time to 9:41, full battery, and full signal before capturing, so every screenshot has a consistent, marketing-clean status bar.",
        },
        {
          question: "Can I automate screenshots across devices and languages?",
          answer:
            "Yes. Loop over device types and locales with simctl, or use Fastlane's snapshot tool, which boots each simulator, runs a UI test that navigates your app, and saves screenshots per device and language automatically.",
        },
      ]}
    >
      <p>
        The iOS Simulator is the fastest way to capture App Store screenshots at
        exact device resolutions without touching hardware. With a few{" "}
        <code>xcrun simctl</code> commands you can boot any device, clean up the
        status bar, capture at native size, and script the whole thing across
        every device and language. This guide covers the commands and how to
        automate them.
      </p>

      <h2>Capture a Single Screenshot</h2>
      <p>
        Boot a simulator (from Xcode or the command line), open your app, then
        capture the booted device:
      </p>
      <pre>
        <code>xcrun simctl io booted screenshot screenshot.png</code>
      </pre>
      <p>
        The image is saved at the device&apos;s native resolution — for example
        1290 × 2796 on an iPhone 6.9-inch class device — which matches App Store
        screenshot requirements directly.
      </p>

      <h2>Clean Up the Status Bar First</h2>
      <p>
        Apple&apos;s marketing screenshots famously show 9:41, full battery, and
        full signal. Override the simulator status bar before capturing so every
        screenshot is consistent:
      </p>
      <pre>
        <code>{`xcrun simctl status_bar booted override \\
  --time "9:41" \\
  --batteryState charged --batteryLevel 100 \\
  --cellularBars 4 --wifiBars 3`}</code>
      </pre>
      <p>
        Clear it again with <code>xcrun simctl status_bar booted clear</code>{" "}
        when you are done.
      </p>

      <h2>Boot a Specific Device</h2>
      <p>
        List available simulators, then boot the exact device whose resolution
        you need:
      </p>
      <pre>
        <code>{`xcrun simctl list devices
xcrun simctl boot "iPhone 17 Pro Max"`}</code>
      </pre>
      <p>
        Capture from each device you support so you have native-resolution
        assets for every required App Store size.
      </p>

      <h2>Automate Across Devices and Locales</h2>
      <p>
        The real win is scripting. A simple loop can boot each device, set the
        status bar, launch your app, and capture — and you can launch the app
        with a specific language and region to capture localized screenshots:
      </p>
      <pre>
        <code>{`xcrun simctl launch booted com.yourcompany.app \\
  -AppleLanguages "(de)" -AppleLocale "de_DE"`}</code>
      </pre>
      <p>
        For a full pipeline, Fastlane&apos;s <code>snapshot</code> tool runs a UI
        test that navigates your app and saves screenshots for every device and
        language combination automatically — see the{" "}
        <a href="/blog/make-and-ship-screenshots-with-fastlane">
          Fastlane screenshots guide
        </a>
        .
      </p>

      <h2>From Raw Capture to Finished Screenshot</h2>
      <p>
        A raw simulator capture is the starting point, not the final asset. Most
        App Store screenshots add a device frame, a background, and a caption on
        top of the bare capture. Keep your captures clean and at native
        resolution so the design step has the pixels it needs.
      </p>

      <p>
        Source check: Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/documentation/xcode/capturing-screenshots-and-videos-from-your-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xcode capture documentation
        </a>{" "}
        and the <code>simctl</code> command-line tool.
      </p>
    </BlogArticleShell>
  );
}
