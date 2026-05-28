import type { Route } from "./+types/blog.popular-figma-templates-app-store-screenshots-device-mockups";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "popular-figma-templates-app-store-screenshots-device-mockups";

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

        <BlogCTA message="Use Figma templates for visual direction, then build the repeatable screenshot workflow in Screenshot Bro: frames, captions, localization, batch export, and App Store Connect upload." />
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
        Figma has hundreds of screenshot and device mockup templates. Some are
        great for finding a visual direction. Some are old iPhone frames with
        nice shadows. Some look polished in the preview but become painful the
        moment you need 10 screenshots, 4 device sizes, and 12 languages.
      </p>
      <p>
        This shortlist is based on the template categories that are currently
        easiest to find in Figma&apos;s own template pages and Figma Community
        files, including popular App Store screenshot templates, iPhone
        mockup kits, and broader device mockup collections. It is not a
        permanent download ranking, because Figma Community search order
        changes over time. Treat it as a practical guide to the template
        types worth checking before you build your actual screenshot workflow
        in <a href="/">Screenshot Bro</a>.
      </p>

      <ArticleImage
        src="/docs/help/templates.webp"
        alt="Screenshot Bro templates row showing multiple App Store screenshot designs in one project"
        width={1600}
        height={453}
        caption="The strongest Figma template ideas are the ones you can turn into a repeatable screenshot system."
      />

      <h2>Quick Shortlist</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[820px]">
          <thead>
            <tr>
              <th>Template type</th>
              <th>Good for</th>
              <th>Watch out for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>App Store screenshot templates</td>
              <td>Fast headline plus device-frame layouts</td>
              <td>Often manual to resize, localize, and export</td>
            </tr>
            <tr>
              <td>App Store plus Google Play templates</td>
              <td>Cross-platform launch sets</td>
              <td>Android tablet and Play Console details vary by template</td>
            </tr>
            <tr>
              <td>Screenshot builder kits</td>
              <td>Reusable caption, frame, and background components</td>
              <td>Can become complex Figma systems to maintain</td>
            </tr>
            <tr>
              <td>iPhone mockup packs</td>
              <td>Marketing visuals, launch pages, social posts</td>
              <td>May not match current App Store screenshot dimensions</td>
            </tr>
            <tr>
              <td>Full device mockup collections</td>
              <td>iPhone, iPad, Mac, Android, tablet, and laptop visuals</td>
              <td>Usually made for presentation, not store upload</td>
            </tr>
            <tr>
              <td>Official Apple product bezels</td>
              <td>Accurate Apple-device marketing mockups</td>
              <td>Need Apple marketing guideline compliance and manual setup</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>1. App Store Screenshot Templates</h2>
      <p>
        Start with the direct category: Figma files built for App Store
        screenshots. One strong example is Median.co&apos;s{" "}
        <a href="https://www.figma.com/community/file/1471925742378558731/500-app-store-screenshot-templates-for-android-and-ios-apps">
          500+ App Store Screenshot Templates for Android and iOS Apps
        </a>
        . Other Figma Community files in this category include{" "}
        <a href="https://www.figma.com/community/file/891325178364097650">
          Template for App Store Screenshots
        </a>{" "}
        and{" "}
        <a href="https://www.figma.com/community/file/1198162612398400646">
          App Store Screenshot Template
        </a>
        . These are useful when you want the basic pattern: headline, device
        frame, background, and a sequence of feature slides.
      </p>
      <p>
        The best ones are not just pretty. They already think in screenshot
        order. Look for a first slide that sells the app outcome, middle
        slides that explain features, and later slides for social proof,
        privacy, pricing, or platform support. If every slide is the same
        phone mockup with a different caption, the template will look polished
        but read flat.
      </p>

      <h2>2. App Store and Google Play Templates</h2>
      <p>
        If you ship both iOS and Android, look for cross-store files such as{" "}
        <a href="https://www.figma.com/community/file/919892723902077463">
          App Store and Google Play template
        </a>{" "}
        or broader App Store screenshot files that include both iOS and
        Android examples. These are helpful because they remind you to design
        for more than one storefront: iPhone, iPad, Android phone, Android
        tablet, and sometimes feature graphics.
      </p>
      <p>
        The limitation is maintenance. In Figma, every extra store size
        usually means more frames, more duplicate text, and more export naming
        discipline. Screenshot Bro is more appropriate once the design
        direction is set, because you can keep iPhone, iPad, Mac, Android
        phone, and Android tablet rows in one project and export organized
        store-ready folders.
      </p>

      <ArticleImage
        src="/docs/help/rows.webp"
        alt="Screenshot Bro rows view showing screenshot rows for different devices"
        width={1600}
        height={1284}
        caption="Cross-platform screenshot work is easier when device rows are part of the project model, not just duplicated artboards."
      />

      <h2>3. Screenshot Builder Kits</h2>
      <p>
        Builder-style files, including{" "}
        <a href="https://www.figma.com/community/file/900812557422655005">
          AppStore - Screenshot Builder (iOS &amp; iPad)
        </a>{" "}
        and kits like FIGMA TO STORE, are the most useful if you already like
        working in Figma. They tend to provide reusable components for
        captions, devices, backgrounds, callouts, and slide variants.
      </p>
      <p>
        These kits are worth studying even if you do not plan to use Figma for
        production. Notice how they structure repeated elements: consistent
        headline position, safe margins around the device, reusable background
        styles, and predictable slide order. Those ideas translate directly to
        Screenshot Bro templates.
      </p>

      <h2>4. Figma&apos;s iPhone Mockup Templates</h2>
      <p>
        Figma&apos;s own{" "}
        <a href="https://www.figma.com/templates/iphone-mockups/">
          iPhone Mockups
        </a>{" "}
        page is useful for broad device-frame inspiration. It lists categories
        such as iPhone 14 Pro and Pro Max mockups, iPhone 13 Pro mockups,
        minimal iPhone 14 mockups, Apple device mockups, 3D iPhone 12
        mockups, vector-editable iPhone mockups, clay mockups, and hand-held
        iPhone mockups.
      </p>
      <p>
        These are best for marketing pages, launch posts, pitch decks, and
        social media. They are not always the right foundation for App Store
        screenshots because many mockup files are optimized for presentation
        composition, not accepted App Store export sizes. Before you build a
        full screenshot set around one, check the actual canvas dimensions and
        whether the device frame matches the current devices you want to show.
      </p>

      <h2>5. Full Device Mockup Collections</h2>
      <p>
        Large collections like{" "}
        <a href="https://www.figma.com/community/file/1209371598104774338">
          Device Mockups Ultimate Collection
        </a>{" "}
        are popular because they cover many contexts: iPhone, iPad, MacBook,
        iMac, watch, Android phones, tablets, and sometimes laptop scenes.
        Search Figma Community for terms like &quot;device mockup&quot; and
        &quot;iPhone mockup&quot; and you will see how broad this category is.
      </p>
      <p>
        Use these when the goal is a brand or launch asset, not a strict store
        screenshot. A realistic laptop on a desk can look great on a website,
        but it is usually the wrong asset for App Store Connect. For store
        screenshots, the device frame should support the message instead of
        becoming the message.
      </p>

      <ArticleImage
        src="/docs/help/devices.webp"
        alt="Screenshot Bro device picker showing Apple and Android device frames"
        width={510}
        height={230}
        caption="Device mockups are useful, but store screenshots need current, predictable frames and dimensions."
      />

      <h2>6. Official Apple Product Bezels</h2>
      <p>
        For Apple devices, the safest source of truth is still{" "}
        <a href="https://developer.apple.com/design/resources/">
          Apple Design Resources
        </a>
        . Apple provides product bezels and other design resources, and the
        page specifically points developers to review marketing resources and
        identity guidelines when using product bezels in marketing materials.
      </p>
      <p>
        The tradeoff is that official resources are not an App Store
        screenshot workflow. They give you accurate assets, but you still need
        to compose layouts, replace screenshots, manage localizations, export
        files, name them correctly, and upload them. Screenshot Bro is built
        around that production layer.
      </p>

      <h2>How to Judge a Figma Template</h2>
      <p>
        Before duplicating a Figma template, check the parts that will matter
        after the first nice preview:
      </p>
      <ul>
        <li>Does it include current App Store sizes, especially 6.9-inch iPhone?</li>
        <li>Does it cover iPad, Mac, or Android if your app needs them?</li>
        <li>Are text layers easy to edit and consistently placed?</li>
        <li>Can you swap screenshots without breaking masks or shadows?</li>
        <li>Does it use reusable components instead of one-off copied frames?</li>
        <li>Can it support longer translated text without redesigning every slide?</li>
        <li>Does export naming match the order you need in App Store Connect?</li>
      </ul>

      <h2>When to Stop Using Figma</h2>
      <p>
        Figma is excellent for exploration. It is less pleasant when the
        screenshot set becomes an operational asset. The pain usually appears
        after the first release: you need to swap every screen, update every
        headline, export every device size, repeat the work for every locale,
        and upload everything without mixing up order or dimensions.
      </p>
      <p>
        That is the point where Screenshot Bro is more relevant. Use Figma
        templates to learn what good screenshot structure looks like. Then
        rebuild the final system in Screenshot Bro so the next update is a
        project edit, not a design cleanup sprint.
      </p>

      <ArticleImage
        src="/docs/help/locales.webp"
        alt="Screenshot Bro localization panel showing per-locale screenshot text overrides"
        width={1100}
        height={1300}
        caption="The template that looks good in English still has to survive localization. That is where a dedicated screenshot workflow pays off."
      />

      <h2>Recommended Workflow</h2>
      <ol>
        <li>
          Browse Figma templates for visual direction, especially screenshot
          order, caption placement, and device treatment.
        </li>
        <li>
          Pick one structure: outcome first, then proof, workflow, key
          features, and trust signals.
        </li>
        <li>
          Rebuild the structure in Screenshot Bro with the device rows your
          app actually needs.
        </li>
        <li>
          Add real screenshots, short benefit-led headlines, and consistent
          backgrounds.
        </li>
        <li>
          Localize captions after the English version works, then adjust text
          positions for languages that need more space.
        </li>
        <li>
          Batch export or upload directly to App Store Connect when the full
          set is ready.
        </li>
      </ol>

      <p>
        The best Figma template is not the one with the fanciest preview. It
        is the one that helps you make a clear decision about your screenshot
        system. After that, the production workflow matters more than the
        template file.
      </p>
    </>
  );
}
