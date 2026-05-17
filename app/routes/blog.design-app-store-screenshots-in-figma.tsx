import type { Route } from "./+types/blog.design-app-store-screenshots-in-figma";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "design-app-store-screenshots-in-figma";

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches);
export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  return (
    <ContentLayout>
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={SLUG} />

          <p>
            Figma is a solid way to design App Store screenshots if you want
            total layout control. You can build your own device frames,
            typography, gradients, components, export presets, and localized
            variants. The tradeoff is that Figma does not know much about App
            Store Connect or Google Play. You have to create the production
            system yourself.
          </p>
          <p>
            This tutorial walks through how to design app store screenshots in
            Figma without letting the file turn into a pile of duplicated
            frames. It works for iOS, iPadOS, macOS, and Android screenshots,
            and it is especially useful if you are still deciding whether Figma
            is enough or whether you need a dedicated{" "}
            <a href="/blog/best-app-store-screenshot-tools">
              app store screenshot tool
            </a>
            .
          </p>

          <h2>1. Start With the Store Sizes</h2>
          <p>
            Do not start with a random presentation frame. Start with the pixel
            sizes the stores actually accept. Apple and Google can reject
            screenshots that do not match their dimension, format, or aspect
            ratio rules.
          </p>
          <p>
            For current iPhone screenshots, a safe primary App Store size is
            <strong> 1320 x 2868</strong> for 6.9" devices. For iPad, common
            sizes include <strong>2064 x 2752</strong> for 13" iPad and{" "}
            <strong>1668 x 2388</strong> for 11" iPad. Google Play is more
            flexible, but screenshots still need to fit Google&apos;s side
            length and aspect ratio rules.
          </p>
          <p>
            Useful references:
          </p>
          <ul>
            <li>
              <a href="/blog/screenshot-sizes-app-store-google-play">
                Screenshot sizes for App Store and Google Play
              </a>
            </li>
            <li>
              <a
                href="https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple screenshot specifications
              </a>
            </li>
            <li>
              <a
                href="https://support.google.com/googleplay/android-developer/answer/9866151"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play preview asset requirements
              </a>
            </li>
          </ul>

          <h2>2. Create One Figma Page per Store Surface</h2>
          <p>
            Keep the file boring and predictable. A clean structure is more
            valuable than a clever one:
          </p>
          <ul>
            <li>
              <strong>01 - iPhone 6.9</strong> for primary App Store phone
              screenshots.
            </li>
            <li>
              <strong>02 - iPad 13</strong> for iPad screenshots.
            </li>
            <li>
              <strong>03 - Google Play Phone</strong> for Android phone
              screenshots.
            </li>
            <li>
              <strong>04 - Components</strong> for shared styles, device
              frames, badges, and copy blocks.
            </li>
            <li>
              <strong>05 - Archive</strong> for old screenshots you may need
              later.
            </li>
          </ul>
          <p>
            Inside each page, create one frame for each screenshot slot:
            <code>01 - Main Benefit</code>, <code>02 - Feature Detail</code>,
            <code>03 - Social Proof</code>, and so on. Keep the number prefix
            in the frame name because Figma exports will be easier to sort.
          </p>

          <h2>3. Build a Reusable Screenshot Component</h2>
          <p>
            The biggest mistake is designing every screenshot as a unique
            artboard. That works for one release, then breaks as soon as you
            update the app, add a language, or change the background style.
          </p>
          <p>
            Instead, build a reusable screenshot structure:
          </p>
          <ul>
            <li>
              A background layer with your color, gradient, or image treatment.
            </li>
            <li>A headline text block with shared typography styles.</li>
            <li>An optional subheadline block.</li>
            <li>A device frame component.</li>
            <li>A masked screenshot layer inside the device frame.</li>
            <li>Optional badges, arrows, callouts, or feature labels.</li>
          </ul>
          <p>
            Use Figma components for repeated parts such as device frames,
            badges, and callout labels. Use Auto Layout where the content should
            reflow, especially for text groups that may change length during
            localization.
          </p>
          <p>
            Figma references:{" "}
            <a
              href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-component-properties"
              target="_blank"
              rel="noopener noreferrer"
            >
              component properties
            </a>
            ,{" "}
            <a
              href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants"
              target="_blank"
              rel="noopener noreferrer"
            >
              variants
            </a>
            , and{" "}
            <a
              href="https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Auto Layout
            </a>
            .
          </p>

          <h2>4. Design the First Screenshot Like a Store Visitor</h2>
          <p>
            Your first screenshot should answer one question: why should a
            person care about this app? Avoid using the first slot for a
            settings screen, onboarding screen, or vague feature list.
          </p>
          <p>
            A practical formula:
          </p>
          <ul>
            <li>
              <strong>Headline:</strong> 4 to 8 words that state the outcome.
            </li>
            <li>
              <strong>Device screenshot:</strong> show the app doing the thing,
              not an empty state.
            </li>
            <li>
              <strong>Support visual:</strong> one badge, chart, or callout if
              it clarifies the value.
            </li>
            <li>
              <strong>Background:</strong> branded, simple, and consistent
              across the set.
            </li>
          </ul>
          <p>
            Keep text large enough to read in App Store search results and
            product-page previews. If the text only works when the Figma canvas
            is zoomed in, it is probably too small.
          </p>

          <h2>5. Turn One Layout Into a Set</h2>
          <p>
            Once the first screenshot works, duplicate the frame for each store
            slot and change one message at a time. A common seven-screenshot
            sequence:
          </p>
          <ol>
            <li>Main outcome.</li>
            <li>Core workflow.</li>
            <li>Feature that differentiates the app.</li>
            <li>Personalization or settings.</li>
            <li>Trust, privacy, sync, or integrations.</li>
            <li>Secondary use case.</li>
            <li>Final reason to download.</li>
          </ol>
          <p>
            Keep device position, headline position, and background treatment
            consistent unless you have a deliberate reason to change them. The
            set should feel like one product story, not seven separate ads.
          </p>

          <h2>6. Prepare for Localization Before You Translate</h2>
          <p>
            Localization is where many Figma screenshot files become painful.
            If you duplicate every artboard for every language, a small design
            change turns into dozens of manual edits.
          </p>
          <p>
            To make localization less fragile:
          </p>
          <ul>
            <li>
              Keep text in predictable layers: <code>Headline</code>,{" "}
              <code>Subheadline</code>, <code>Badge</code>.
            </li>
            <li>
              Use Auto Layout for text containers that need to grow.
            </li>
            <li>
              Avoid hard line breaks unless the phrase is final.
            </li>
            <li>
              Leave extra width for German, French, Spanish, and other longer
              translations.
            </li>
            <li>
              Create a separate page or section per locale only after the base
              English layout is stable.
            </li>
          </ul>
          <p>
            If you support many languages, this is the point where Figma often
            becomes a production bottleneck. You can still do it, but you need
            discipline: naming, components, export presets, and a checklist for
            every release. If localization is a recurring job, compare that
            manual setup with a dedicated{" "}
            <a href="/docs/help#localization">screenshot localization workflow</a>.
          </p>

          <h2>7. Set Up Export Presets</h2>
          <p>
            Figma lets you export selected layers and frames in common image
            formats. For store screenshots, export the final top-level frames,
            not nested groups.
          </p>
          <p>
            Recommended export setup:
          </p>
          <ul>
            <li>
              Set each screenshot frame to the exact store pixel dimensions.
            </li>
            <li>
              Add a PNG export setting for each final frame.
            </li>
            <li>
              Name frames with a zero-padded prefix: <code>01</code>,{" "}
              <code>02</code>, <code>03</code>.
            </li>
            <li>
              Export one device family at a time so files do not get mixed.
            </li>
            <li>
              Review the exported PNGs in Finder before uploading.
            </li>
          </ul>
          <p>
            Figma&apos;s export behavior is documented in its{" "}
            <a
              href="https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design"
              target="_blank"
              rel="noopener noreferrer"
            >
              export guide
            </a>
            . The important production rule is simple: App Store Connect and
            Google Play care about the final file, not how clean your Figma file
            looks.
          </p>

          <h2>8. Upload Carefully</h2>
          <p>
            Before uploading, check four things:
          </p>
          <ul>
            <li>The file dimensions match the target store slot.</li>
            <li>The files are ordered correctly.</li>
            <li>The screenshots are in the correct locale.</li>
            <li>No transparent backgrounds or accidental crop issues slipped in.</li>
          </ul>
          <p>
            For App Store Connect specifically, every locale has its own
            screenshot set. If you export English, German, Spanish, and French
            from Figma, keep those folders separate and upload them one locale
            at a time. For a deeper walkthrough, read{" "}
            <a href="/blog/upload-screenshots-to-app-store-connect">
              How to Upload Screenshots to App Store Connect
            </a>
            .
          </p>

          <h2>Where Figma Works Well</h2>
          <p>
            Figma is a good choice when you need custom layouts, a designer is
            already involved, and your screenshot set is not changing every
            week. It gives you full control over composition, typography, brand
            systems, and visual polish.
          </p>

          <h2>Where Figma Gets Painful</h2>
          <p>
            Figma becomes harder when screenshots are part of your regular
            release process. Common pain points:
          </p>
          <ul>
            <li>Duplicated frames for every device size.</li>
            <li>Duplicated frames for every locale.</li>
            <li>Manual replacement of simulator screenshots.</li>
            <li>Manual export and folder organization.</li>
            <li>Easy-to-break layouts when translated text gets longer.</li>
            <li>No native App Store Connect upload workflow.</li>
          </ul>
          <p>
            None of these make Figma a bad tool. They just mean Figma is a
            general design tool, not a purpose-built App Store screenshot
            workflow.
          </p>

          <h2>A Faster Alternative for Indie Developers</h2>
          <p>
            If you only make screenshots once or twice a year, Figma may be
            enough. If you ship often, support multiple languages, or maintain
            App Store and Google Play screenshots together, try{" "}
            <a href="/">Screenshot Bro</a>.
          </p>
          <p>
            Screenshot Bro is a native macOS app for designing, localizing,
            exporting, and uploading store screenshots. It gives you device
            rows, reusable templates, built-in localization, batch export, and
            <a href="/blog/upload-screenshots-to-app-store-connect">
              {" "}
              App Store Connect upload
            </a>{" "}
            without rebuilding a production system in Figma. You can also skim
            the <a href="/#features">feature overview</a> to see how the
            workflow differs from a general design file.
          </p>
        </article>

        <BlogCTA
          message="Tired of rebuilding Figma screenshot files every release? Try a native Mac workflow built for App Store and Google Play screenshots."
          buttonLabel="Download Screenshot Bro"
        />
        <RelatedPosts currentSlug={SLUG} />
      </div>
    </ContentLayout>
  );
}
