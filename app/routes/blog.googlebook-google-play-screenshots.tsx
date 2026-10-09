import type { Route } from "./+types/blog.googlebook-google-play-screenshots";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { type LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "googlebook-google-play-screenshots";

const LARGE_SCREEN_RULES = [
  {
    rule: "Count",
    value: "Minimum 4",
    note: "Google's wording: you can add a minimum of 4 screenshots to demonstrate your in-app experience. The overall cap is 8 per device type.",
  },
  {
    rule: "Dimensions",
    value: "1,080–7,680 px",
    note: "Stated in the large screens section. The page's general requirements separately cap screenshots at 3,840 px, so stay under that to satisfy both.",
  },
  {
    rule: "Aspect ratio",
    value: "16:9 landscape, 9:16 portrait",
    note: "Exact ratios, not approximations. 16:9 is also inside the general rule that the long side cannot exceed twice the short side.",
  },
  {
    rule: "Format",
    value: "JPEG or 24-bit PNG, no alpha",
    note: "Same as every other Play screenshot slot. Transparency is rejected.",
  },
  {
    rule: "Overlay text",
    value: "Keep it minimal",
    note: "Google asks you to exclude text that is not part of your core app experience, because it gets cut off on Play homepages at some screen sizes.",
  },
] as const;

const DEVICE_TARGETS = [
  { device: "Googlebook", spec: "160 ppi" },
  { device: "Foldable", spec: "841 x 701 dp" },
  { device: "8-inch tablet", spec: "1024 x 640 dp" },
  { device: "10.5-inch tablet", spec: "1280 x 800 dp" },
  { device: "13-inch Chromebook", spec: "1600 x 900 dp" },
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
      tldr="Googlebook, a new category of Android laptops from Acer, ASUS, Dell, HP and Lenovo, went on sale October 4 in the US and October 5 in six more countries. No new screenshot size was introduced and there is no Googlebook slot in Play Console — the existing Large screens section, shared by Chromebook and tablets, is what serves these machines. That slot has rules most listings ignore: a minimum of 4 screenshots, exact 16:9 or 9:16 ratios, and an explicit instruction from Google to leave out overlay text that is not part of your app, because it gets cut off on Play homepages. The incentive is new even though the spec is not: Google says Play gives optimized titles dedicated badging, enhanced search and featured spots, and highlights them during phone-to-laptop setup."
      ctaMessage="Need a 16:9 landscape set to sit alongside your phone screenshots? Screenshot Bro exports every Play size at exact pixel dimensions — free to try."
      ctaHomeLinkLabel="a native App Store and Google Play screenshot app for Mac"
      seoLinks={[
        {
          href: "/blog/google-play-screenshot-sizes-requirements",
          label: "Google Play screenshot sizes",
          description:
            "every Play form factor and its dimensions, including the large screens slot this post is about.",
        },
        {
          href: "/blog/google-play-store-listing-graphics-checklist",
          label: "Play store listing graphics checklist",
          description:
            "the full asset list to work through before you publish a listing.",
        },
        {
          href: "/blog/google-play-screenshot-rejected-fix",
          label: "Why Play screenshots get rejected",
          description:
            "how Google's asset rules come back in practice, and what to change.",
        },
        {
          href: "/blog/screenshot-sizes-app-store-google-play",
          label: "App Store and Play sizes side by side",
          description:
            "one reference for both stores when you ship to each from the same design.",
        },
        {
          href: "/blog/google-play-feature-graphic-size-template-examples",
          label: "Feature graphic size and templates",
          description:
            "the 1024x500 asset that is still required to publish, whatever device you target.",
        },
      ]}
      faqs={[
        {
          question: "Do I need new screenshots for Googlebook?",
          answer:
            "Not a new size, no. Google has not added a Googlebook device type to Play Console's store listing, and the graphic asset requirements page does not mention one. Googlebook is served by the existing Large screens section, which Google describes as covering Chromebook and tablets. If your listing already has four or more 16:9 screenshots in that slot, you are covered. If that slot is empty — which is the common case — Googlebook users see a listing with no evidence your app works on a large screen.",
        },
        {
          question: "What are the Large screens screenshot requirements on Google Play?",
          answer:
            "Google asks for a minimum of 4 screenshots, uploaded between 1,080 and 7,680 px, at a 16:9 aspect ratio for landscape or 9:16 for portrait. It also tells you to exclude text that is not part of your core app experience, because that text can get cut off on Play homepages at certain screen sizes. Note that the same page's general requirements cap any screenshot at 3,840 px, so a safe landscape choice is 1920x1080 or 2560x1440.",
        },
        {
          question: "When did Googlebook ship?",
          answer:
            "Google opened pre-orders on September 21, 2026 and said devices arrive on shelves starting October 4 in the US, and October 5 in Canada, the UK, Ireland, France, Germany and Australia. The first models come from Acer, ASUS, Dell, HP and Lenovo, starting at $899.",
        },
        {
          question: "Does optimizing for large screens actually get me anything on Play?",
          answer:
            "Google states that Play highlights optimized titles with dedicated badging, enhanced search and featured spots across curated store homepages, and that when someone sets up a new Googlebook using their Android phone, optimized apps are prominently highlighted for easy transfer. It also ties this quality bar to enrolment in the Apps Experience Program. Google does not publish the exact criteria that make a listing count as optimized, so treat the screenshots as necessary rather than sufficient.",
        },
        {
          question: "Is the Googlebook screenshot slot the same as Android XR?",
          answer:
            "No. Android XR is a separate device type with its own rules — 4 to 8 screenshots, PNG or JPEG up to 8 MB each, an 8:5 aspect ratio, recommended 3840x2400 and minimum 1920x1200. Googlebook has no dedicated slot at all; it falls under Large screens with Chromebook and tablets at 16:9 or 9:16.",
        },
      ]}
    >
      <p>
        On{" "}
        <a href="https://blog.google/products-and-platforms/devices/googlebook/pre-order-googlebook/">
          September 21
        </a>{" "}
        Google opened pre-orders for <strong>Googlebook</strong>, and said devices
        &ldquo;arrive on shelves starting October 4 in the U.S., and October 5 in
        Canada, the U.K., Ireland, France, Germany, and Australia.&rdquo; They are
        laptops built on an Android foundation, made by Acer, ASUS, Dell, HP and
        Lenovo, starting at $899. As of this week they are a real device your Play
        listing has to speak to.
      </p>
      <p>
        The useful news for anyone making store screenshots is what{" "}
        <em>did not</em> change. There is no new required size, no new aspect ratio,
        and no Googlebook tab in Play Console. Google&apos;s{" "}
        <a href="https://support.google.com/googleplay/android-developer/answer/9866151">
          graphic asset requirements
        </a>{" "}
        page does not mention Googlebook anywhere. What it has instead is a section
        called <strong>Large screens</strong>, which Google describes as covering
        &ldquo;Chromebook and tablets&rdquo; — and that is the slot these machines
        read from.
      </p>
      <p>
        So this is not a migration. It is a reason to finally fill in a slot that most
        listings leave empty, under rules that are stricter than the phone slot and
        less widely known.
      </p>

      <h2>The Large Screens Rules, From Google&apos;s Page</h2>
      <p>
        Google&apos;s own wording for this section: &ldquo;For Chromebook and tablets,
        you can add a minimum of 4 screenshots to demonstrate your in-app
        experience.&rdquo; The rest of the section is short enough to quote in full,
        and every line of it differs from what you get away with on the phone slot.
      </p>
      <table>
        <thead>
          <tr>
            <th>Rule</th>
            <th>Value</th>
            <th>What it actually means</th>
          </tr>
        </thead>
        <tbody>
          {LARGE_SCREEN_RULES.map((row) => (
            <tr key={row.rule}>
              <td>{row.rule}</td>
              <td>{row.value}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Two of these are worth dwelling on. The first is the dimension range. The
        large screens section says 1,080 to 7,680 px, but the same page&apos;s general
        requirements say &ldquo;Maximum dimension: 3840px&rdquo; and that the long side
        &ldquo;can&apos;t be more than twice as long as the minimum dimension.&rdquo;
        Google&apos;s page carries both numbers without reconciling them. Rather than
        guess which one the uploader enforces, pick a size that satisfies both:{" "}
        <strong>1920x1080</strong> or <strong>2560x1440</strong> landscape are inside
        every stated limit and hit 16:9 exactly.
      </p>
      <p>
        The second is the overlay text instruction, which is the most actionable
        sentence on the page and almost never quoted: exclude &ldquo;additional text
        that is not part of your core app experience, as this can get cut off on Play
        homepages on certain screen sizes.&rdquo; That is Google telling you that the
        caption-above-a-device-frame style which works on the phone slot is a liability
        here. Play reuses large-screen screenshots in its own recommendation surfaces
        at sizes you do not control, and your caption is the part that gets clipped.
        Design the large-screen set to read without the words.
      </p>

      <h2>Why the Empty Slot Costs Something Now</h2>
      <p>
        An empty large screens slot has always been a soft problem. Googlebook makes it
        a harder one, because Google has attached distribution to it. From the{" "}
        <a href="https://android-developers.googleblog.com/2026/09/adaptive-development-scale-app-googlebook.html">
          developer announcement
        </a>{" "}
        on September 22:
      </p>
      <blockquote>
        <p>
          &ldquo;Google Play highlights optimized titles with dedicated badging,
          enhanced search, and featured spots across curated store homepages.&rdquo;
        </p>
      </blockquote>
      <p>
        And on setup: &ldquo;When users set up their new Googlebook using their Android
        phone, optimized apps are prominently highlighted for easy transfer, giving
        your app day-one presence on their new device.&rdquo; Google also ties the same
        quality bar to enrolment in its Apps Experience Program.
      </p>
      <p>
        Be careful about how much to read into that. Google does not publish the
        criteria that make a listing count as &ldquo;optimized,&rdquo; and the badging
        it describes is about the app&apos;s adaptive behaviour, not its artwork. Your
        screenshots will not earn a badge on their own. But the{" "}
        <a href="https://developer.android.com/docs/quality-guidelines/adaptive-app-quality">
          adaptive app quality guidelines
        </a>{" "}
        do name the listing explicitly: &ldquo;As you enhance your app with adaptive
        capabilities, help users better understand your app&apos;s multi-form-factor
        experience by updating your app listing on Google Play. Upload screenshots that
        show off the app on tablets and foldables.&rdquo; Treat the screenshots as the
        part you can finish this week, not as the whole job.
      </p>

      <h2>What to Capture, and On What</h2>
      <p>
        The same adaptive quality guidelines list the device configurations Google wants
        you testing against, which doubles as a sensible capture list:
      </p>
      <table>
        <thead>
          <tr>
            <th>Target</th>
            <th>Google&apos;s stated spec</th>
          </tr>
        </thead>
        <tbody>
          {DEVICE_TARGETS.map((row) => (
            <tr key={row.device}>
              <td>{row.device}</td>
              <td>{row.spec}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Googlebook is listed only as &ldquo;160 ppi&rdquo; — Google has not published a
        reference resolution for it the way it has dp figures for the tablets and the
        Chromebook. For capture, the guidelines point at an emulator: &ldquo;Desktop
        &gt; Desktop (Preview),&rdquo; which currently requires the Android Studio
        Canary build. The 13-inch Chromebook target at 1600x900 dp is the closest
        stable stand-in, and it is already 16:9, which is what the listing slot wants.
      </p>
      <p>
        One thing not to do: upscale your phone screenshots to 1920x1080 and call it a
        large-screen set. Google asks for screenshots that &ldquo;demonstrate your
        in-app experience&rdquo; on these devices, and a stretched phone layout
        demonstrates the opposite. If your app genuinely has no large-screen layout
        yet, the screenshots are not the thing to fix first.
      </p>

      <h2>Nothing Else Moved This Week</h2>
      <p>
        For completeness, because a new device category usually drags specs with it:
        no Play screenshot dimension changed, the{" "}
        <a href="/blog/google-play-feature-graphic-size-template-examples">
          feature graphic
        </a>{" "}
        is still 1024x500, the Android TV banner is still 1280x720, Wear OS still wants
        at least one 1:1 screenshot at a minimum of 384x384, and Android XR is still 4
        to 8 screenshots at 8:5. Apple&apos;s{" "}
        <a href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications">
          screenshot specifications
        </a>{" "}
        are unchanged too. See{" "}
        <a href="/blog/google-play-screenshot-sizes-requirements">
          Google Play screenshot sizes
        </a>{" "}
        for the full table.
      </p>

      <h2>What to Do Now</h2>
      <ul>
        <li>
          <strong>Check whether your large screens slot is empty.</strong> Play Console,
          store listing, Graphics, the device-specific section. This is a thirty-second
          check and for most listings the answer is yes.
        </li>
        <li>
          <strong>Capture four landscape screenshots at 1920x1080 or 2560x1440.</strong>{" "}
          Exact 16:9, inside every dimension limit Google states, from a real
          large-screen layout rather than a scaled phone one.
        </li>
        <li>
          <strong>Strip the captions down.</strong> Google says non-core text gets cut
          off on Play homepages. Whatever text survives should be short and well inside
          the frame.
        </li>
        <li>
          <strong>Do not wait for a Googlebook spec.</strong> There is no Googlebook
          device type in Play Console and no published reference resolution. The large
          screens slot is the whole mechanism.
        </li>
      </ul>

      <h2>The Short Version</h2>
      <p>
        A new Android laptop category went on sale this week and your Play listing needs
        no new asset size for it. What it needs is the one slot almost nobody fills:
        four or more true 16:9 large-screen screenshots, captions trimmed because Google
        warns they get clipped, captured from a layout that actually uses the width. The
        spec did not change. The cost of leaving it blank did.
      </p>
      <p>
        If you are producing that set alongside your phone screenshots,{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          the combined sizes reference
        </a>{" "}
        covers both stores, and{" "}
        <a href="/blog/google-play-store-listing-graphics-checklist">
          the listing graphics checklist
        </a>{" "}
        covers everything else Play still asks for before you can publish.
      </p>
    </BlogArticleShell>
  );
}
