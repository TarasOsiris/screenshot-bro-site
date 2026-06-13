import type { Route } from "./+types/blog.app-store-screenshot-localization-guide";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "app-store-screenshot-localization-guide";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches);

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  return (
    <ContentLayout>
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={SLUG} />
          <ContentEn />
        </article>

        <BlogCTA message="Localize App Store screenshots without duplicating every design file: manage locales, captions, device rows, batch exports, and upload-ready folders in Screenshot Bro." />
        <RelatedPosts currentSlug={SLUG} />
      </div>
    </ContentLayout>
  );
}

function ArticleImage({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-lg border border-border-subtle bg-surface-raised"
      />
      <figcaption className="mt-2 text-center text-xs leading-relaxed text-white/45">
        {caption}
      </figcaption>
    </figure>
  );
}

function ContentEn() {
  return (
    <>
      <p>
        <strong>App Store screenshot localization</strong> is the process of
        adapting your screenshot set for each language, region, and storefront
        expectation. It is not just translation. A localized screenshot should
        use the customer&apos;s language, show relevant UI, respect text
        direction, keep the same store-approved dimensions, and still sell the
        same product promise.
      </p>
      <p>
        That is why localizing App Store screenshots becomes messy so quickly.
        A simple set of 8 screenshots across 4 languages and 3 device sizes is
        already 96 exported images. Add custom product pages, Google Play
        screenshots, or seasonal campaigns and the workload multiplies again.
        The only sustainable answer is a repeatable localization system.
      </p>

      <ArticleImage
        src="/docs/help/locales.webp"
        alt="Screenshot Bro locale settings for translating App Store screenshot captions"
        width={1600}
        height={983}
        caption="Treat locales as part of the screenshot project, not as copies of finished image files."
      />

      <h2>Why Localized Screenshots Matter</h2>
      <p>
        Apple explains that App Store metadata can appear in different
        languages depending on the user&apos;s App Store country or region,
        device language settings, localizations you added, and your primary
        language in App Store Connect. Apple also notes that users can search
        with localized keywords in supported countries or regions. In practice,
        your screenshots are part of that same first impression.
      </p>
      <p>
        If the app name, subtitle, keywords, and description are localized but
        the first screenshot is still in English, the listing feels unfinished.
        For paid apps, subscriptions, finance, productivity, health, education,
        travel, and utility apps, that trust gap can be expensive. A localized
        screenshot set tells the visitor that the product was built for them,
        not merely made available in their country.
      </p>

      <h2>What App Store Screenshot Localization Includes</h2>
      <p>
        A good localization pass touches more than the headline text. Review
        these parts before exporting:
      </p>
      <ul>
        <li>
          <strong>Screenshot captions:</strong> translate the promise, feature
          names, proof points, and calls to action.
        </li>
        <li>
          <strong>In-app UI:</strong> capture the app in the same language when
          possible, especially when text-heavy screens are visible.
        </li>
        <li>
          <strong>Device sizes:</strong> keep every localized image in the same
          accepted dimensions as the primary language set.
        </li>
        <li>
          <strong>Layout:</strong> adjust line breaks, text boxes, and visual
          hierarchy for languages that expand or contract.
        </li>
        <li>
          <strong>Right-to-left languages:</strong> check alignment, reading
          order, punctuation, and mirrored composition for Arabic and Hebrew.
        </li>
        <li>
          <strong>Regional examples:</strong> localize currency, dates, names,
          maps, units, and screenshots that show culturally specific content.
        </li>
      </ul>

      <h2>Quick Workflow</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[760px]">
          <thead>
            <tr>
              <th>Step</th>
              <th>Goal</th>
              <th>Common mistake</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Choose markets</td>
              <td>Prioritize languages with real traffic or strategic value</td>
              <td>Translating every language before proving demand</td>
            </tr>
            <tr>
              <td>Write source copy</td>
              <td>Create short, translatable captions</td>
              <td>Using idioms that break in translation</td>
            </tr>
            <tr>
              <td>Translate and adapt</td>
              <td>Make each caption sound native and store-safe</td>
              <td>Relying on literal machine translation only</td>
            </tr>
            <tr>
              <td>Adjust layout</td>
              <td>Preserve hierarchy after text expansion</td>
              <td>Shrinking all text until it technically fits</td>
            </tr>
            <tr>
              <td>Export by locale</td>
              <td>Generate organized, upload-ready folders</td>
              <td>Manual renaming and mixed device folders</td>
            </tr>
            <tr>
              <td>Upload and QA</td>
              <td>Confirm each locale and display family in App Store Connect</td>
              <td>Checking only the primary language</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Start With the Right Markets</h2>
      <p>
        You do not need to localize every App Store language on day one. Start
        with languages that match a business reason: existing downloads,
        high-value countries, paid acquisition campaigns, support requests,
        competitor strength, or a product category that is already global.
      </p>
      <p>
        For many indie apps, a practical first set is Spanish, French, German,
        Japanese, Korean, Portuguese, Chinese, or Arabic. The exact list
        depends on your analytics. A habit tracker and a fintech app will not
        have the same priority markets. Your goal is not language coverage for
        its own sake. Your goal is better conversion in markets that can move
        the business.
      </p>

      <h2>Write Screenshot Copy for Translation</h2>
      <p>
        The easiest localization problems are solved before anything is
        translated. Short source captions travel better. Clear feature names
        travel better. Concrete user outcomes travel better than jokes,
        slang, puns, and culture-specific references.
      </p>
      <p>
        Write the English source copy as if another person will need to adapt
        it without reading your mind. For example, &quot;Plan every week in
        minutes&quot; is easier to localize than &quot;Your weekly chaos,
        solved.&quot; The second line may sound punchier in English, but it
        gives translators less context and more room to miss the product value.
      </p>

      <h2>Plan for Text Expansion</h2>
      <p>
        Localized App Store screenshots fail when the design assumes every
        language has the same word length. German, French, Spanish, Portuguese,
        and many Indic languages often need more space than English. Japanese,
        Chinese, and Korean may be shorter but need different line-breaking
        decisions. Arabic and Hebrew introduce right-to-left layout questions.
      </p>
      <p>
        Do not solve expansion by blindly shrinking fonts. Instead, design
        with flexible text zones, generous margins, and captions that can wrap
        to two lines without colliding with the device frame. Keep the visual
        hierarchy stable: the first idea should still be readable first, and
        secondary text should still look secondary.
      </p>

      <ArticleImage
        src="/docs/help/editing.webp"
        alt="Screenshot Bro editor showing editable text and screenshot layout controls"
        width={1600}
        height={1038}
        caption="A repeatable layout gives every locale room to breathe without rebuilding the design."
      />

      <h2>Handle RTL Screenshots Early</h2>
      <p>
        Right-to-left localization should not be the final QA surprise. If you
        plan to support Arabic or Hebrew, check it while the layout system is
        still flexible. Captions may need right alignment, device placement may
        need to move, and arrows or directional UI callouts may need different
        treatment.
      </p>
      <p>
        The key is to separate the reusable design from locale-specific
        overrides. You should be able to keep the same screenshot concept while
        changing text alignment, position, and line breaks for RTL languages.
        Duplicating the entire screenshot set for every RTL adjustment creates
        a maintenance problem on the next release.
      </p>

      <h2>Keep App Store Connect Requirements in View</h2>
      <p>
        Apple&apos;s current screenshot specification says you must upload one
        to ten screenshots in <code>.jpeg</code>, <code>.jpg</code>, or{" "}
        <code>.png</code> format. Apple also lists accepted screenshot sizes
        by display family, including 6.9-inch iPhone, 6.5-inch iPhone,
        6.3-inch iPhone, iPad, Mac, Apple Watch, Apple TV, and Apple Vision
        Pro. Check Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          screenshot specifications
        </a>{" "}
        before changing your export targets.
      </p>
      <p>
        Apple&apos;s localization help also says new languages inherit
        screenshots and many properties from the primary language, while
        descriptions and keywords are exceptions. That inheritance is useful,
        but it is not a localization strategy. You still need to upload
        screenshots that match the target language and the same display
        requirements. Apple documents this in its{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/manage-app-information/localize-app-information/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect localization guide
        </a>
        .
      </p>

      <h2>Use a Locale Folder Structure</h2>
      <p>
        The export structure matters because it is what you hand to App Store
        Connect, fastlane, Transporter, or a teammate. A predictable structure
        prevents accidental uploads to the wrong language.
      </p>
      <pre>
        <code>{`screenshots/
  en-US/
    iphone-6-9/
      01_overview.png
      02_tracking.png
      03_reports.png
    ipad-13/
      01_overview.png
  de-DE/
    iphone-6-9/
      01_overview.png
      02_tracking.png
      03_reports.png
    ipad-13/
      01_overview.png`}</code>
      </pre>
      <p>
        Keep numbering consistent across locales. If screenshot 03 explains
        collaboration in English, screenshot 03 should explain collaboration in
        German, Japanese, and Spanish too. That makes QA faster and keeps
        experiments cleaner.
      </p>

      <h2>Do Not Translate Screenshots in Isolation</h2>
      <p>
        Screenshot localization should match the rest of the App Store listing:
        app name, subtitle, promotional text, description, keywords, app
        preview video, custom product pages, and in-app purchase names. If the
        first screenshot says one thing and the localized subtitle says
        another, the listing feels inconsistent even when every phrase is
        technically correct.
      </p>
      <p>
        Build a small message map before translating. For each screenshot,
        define the goal, feature, source headline, visible UI screen, and any
        legal or category-specific terms. That gives translators context and
        gives reviewers a checklist.
      </p>

      <h2>QA Checklist for Localized Screenshots</h2>
      <ul>
        <li>Every locale has the same screenshot count and order.</li>
        <li>Every exported file uses an accepted App Store screenshot size.</li>
        <li>Captions fit without awkward shrinking or clipped words.</li>
        <li>In-app UI language matches the screenshot caption where possible.</li>
        <li>Dates, currency, units, names, and maps make sense for the market.</li>
        <li>RTL locales have correct alignment, punctuation, and reading flow.</li>
        <li>Folder names and file names match the upload workflow.</li>
        <li>Custom product pages and campaign-specific variants are checked too.</li>
      </ul>

      <h2>How Screenshot Bro Helps</h2>
      <p>
        <a href="/">Screenshot Bro</a> is built for the part of localization
        that usually slows teams down: repeated design edits, duplicated
        frames, file naming, device-specific rows, and batch export. Instead of
        copying a Figma frame for every locale, you can keep one screenshot
        system, add localized text overrides, adjust placement where needed,
        and export organized folders.
      </p>
      <p>
        This matters most after the first release. The first localized export
        is work. The second, third, and tenth exports are where a system pays
        for itself. When the product UI changes or a caption gets rewritten,
        you update the source project and export the full localized set again.
      </p>

      <h2>Related Guides</h2>
      <p>
        For a shorter version of the workflow, read{" "}
        <a href="/blog/localize-app-store-screenshots">
          Localizing App Store Screenshots Without Losing Your Mind
        </a>
        . For export dimensions, use the{" "}
        <a href="/blog/app-store-screenshot-sizes">
          App Store screenshot size reference
        </a>
        . If you are still building screenshots manually in design tools, read{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          How to Design App Store Screenshots in Figma
        </a>{" "}
        and compare that workflow with a dedicated screenshot localization
        workflow.
      </p>

      <h2>FAQ</h2>
      <h3>What is App Store screenshot localization?</h3>
      <p>
        App Store screenshot localization means adapting your screenshot images
        for each language or locale. It includes translated captions,
        localized in-app UI, regional examples, right-to-left layout support,
        and store-ready exports for each required device size.
      </p>

      <h3>Do App Store screenshots need to be localized?</h3>
      <p>
        They are not required for every app, but they are strongly recommended
        when you sell in markets where users expect another language.
        Localized metadata can bring users to the listing; localized
        screenshots help the listing feel relevant once they arrive.
      </p>

      <h3>Can I use the same screenshots for every language?</h3>
      <p>
        You can, but it is usually weaker for conversion. App Store Connect may
        inherit screenshots from the primary language when you add a language,
        but inherited screenshots are still primary-language screenshots. A
        better workflow replaces the visible caption and, where possible, the
        app UI.
      </p>

      <h3>What is the best way to export localized screenshots?</h3>
      <p>
        Use one source project with per-locale text overrides and export by
        locale, device, and screenshot order. Avoid manually duplicating every
        design frame because it makes later product updates and translation
        fixes much slower.
      </p>
    </>
  );
}
