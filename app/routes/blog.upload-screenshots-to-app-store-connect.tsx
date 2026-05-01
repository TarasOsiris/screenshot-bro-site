import type { Route } from "./+types/blog.upload-screenshots-to-app-store-connect";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";

const SLUG = "upload-screenshots-to-app-store-connect";

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
            Uploading App Store screenshots is still one of the clunkiest parts
            of shipping an iOS, iPadOS, or macOS app. Apple supports{" "}
            <a href="/blog/screenshot-sizes-app-store-google-play">
              multiple display types per platform
            </a>{" "}
            and every locale has its own slot, so even a small app can end up
            with 80–200 files to push per release. This guide covers four
            practical ways to get screenshots into App Store Connect in 2026,
            when to pick each, and the gotchas that waste an afternoon if you
            do not know about them in advance.
          </p>

          <h2>Option 1: The App Store Connect Web Uploader</h2>
          <p>
            The default path. Open your app in{" "}
            <a
              href="https://appstoreconnect.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store Connect
            </a>
            , pick the version you want to edit, scroll to{" "}
            <strong>Screenshots</strong>, and drag your PNG or JPEG files into
            the correct display-type bucket (6.9", 6.5", 13" iPad, Mac, etc.).
            Repeat for every locale.
          </p>
          <ul>
            <li>
              <strong>Good for:</strong> a first submission, a small app with
              one or two locales, or when you need to preview exactly what the
              reviewer will see.
            </li>
            <li>
              <strong>Bad for:</strong> anything multilingual, anything with
              more than a couple of display types, or any workflow you need to
              repeat every release. 30 minutes of drag-and-drop per locale adds
              up fast.
            </li>
          </ul>
          <p>
            <strong>Common gotchas:</strong>
          </p>
          <ul>
            <li>
              Wrong display type. If your exported file is 1320 × 2868 (iPhone
              16/17 Pro Max, 6.9") and you drop it into the 6.5" bucket, App
              Store Connect rejects the upload.
            </li>
            <li>
              Locked versions. Once a version is "In Review" or "Pending
              Developer Release", screenshots are read-only. Create a new
              version first.
            </li>
            <li>
              Partial uploads. If a replacement workflow fails midway, verify
              the full display-type set before submitting instead of assuming
              the old set is still intact.
            </li>
          </ul>

          <h2>Option 2: Transporter or Fastlane Deliver</h2>
          <p>
            Both tools automate App Store Connect delivery, but with different
            packaging and setup tradeoffs.
          </p>
          <p>
            <strong>Transporter</strong> is a free Apple utility for shipping
            builds and metadata packages. It is scriptable but assumes you
            already have an iTMSTransporter-compatible folder structure with
            metadata XML. Great if you already build IPA packages with
            xcodebuild; clunky if you only want to push screenshots.
          </p>
          <p>
            <strong>
              <a
                href="https://docs.fastlane.tools/actions/deliver/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fastlane deliver
              </a>
            </strong>{" "}
            is the community standard. You keep your screenshots in a folder
            structure like{" "}
            <code>fastlane/screenshots/en-US/iPhone 6.9 - 01.png</code> and run{" "}
            <code>fastlane deliver</code>. It uploads screenshots, metadata,
            and keywords in one pass.
          </p>
          <ul>
            <li>
              <strong>Good for:</strong> teams that already have a CI pipeline,
              want screenshot uploads in git, and do not mind Ruby.
            </li>
            <li>
              <strong>Bad for:</strong> designers who do not want to maintain a
              Ruby toolchain, and anyone who wants a GUI that shows what will
              be uploaded before it happens.
            </li>
          </ul>
          <p>
            <strong>Common gotchas:</strong>
          </p>
          <ul>
            <li>
              Resolution and naming matter. fastlane can infer display targets
              from image resolution, and ambiguous iPad families may need
              Apple's display-family name in the filename to land in the right
              screenshot slot.
            </li>
            <li>
              App Store Connect API keys must be generated once and stored
              securely (Key ID, Issuer ID, and .p8 file). Losing the .p8 means
              regenerating.
            </li>
            <li>
              Replacement is all-or-nothing. Every existing screenshot in the
              target display type is deleted before the new ones upload.
            </li>
          </ul>

          <h2>Option 3: The App Store Connect API Directly</h2>
          <p>
            If you are building a tool yourself, the{" "}
            <a
              href="https://developer.apple.com/documentation/appstoreconnectapi"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store Connect API
            </a>{" "}
            exposes screenshot upload via three endpoints:
          </p>
          <ol>
            <li>
              <code>POST /v1/appScreenshotSets</code> — create a screenshot set
              for a specific display type and localization.
            </li>
            <li>
              <code>POST /v1/appScreenshots</code> — create a screenshot
              reservation, returning upload operation metadata (chunked PUT
              URLs).
            </li>
            <li>
              <code>PATCH /v1/appScreenshots/&#123;id&#125;</code> with{" "}
              <code>uploaded: true</code> — commit the upload after all chunks
              are pushed.
            </li>
          </ol>
          <p>
            You authenticate with a JWT signed by your .p8 key. The auth JWT is
            short-lived (20 minutes max) and scoped to the App Store Connect
            API audience. Apple also rate-limits aggressive uploads, so chunked
            concurrent uploads need a retry/backoff strategy.
          </p>
          <p>
            <strong>Good for:</strong> building custom automation or tools. You
            get full control, typed responses, and can build UX around the
            upload flow.
          </p>
          <p>
            <strong>Bad for:</strong> anyone who just wants to ship, not
            maintain. Expect to spend a weekend on auth, chunked uploads, and
            error handling before it is reliable.
          </p>

          <h2>Option 4: A Design Tool That Uploads For You</h2>
          <p>
            This is the workflow we built into{" "}
            <a href="/">Screenshot Bro</a>. You design your screenshots, add
            locales, auto-translate the copy, and then click{" "}
            <strong>Upload to App Store Connect</strong>. The app:
          </p>
          <ul>
            <li>
              Auto-detects the right display type from your row size
              (1320 × 2868 → iPhone 6.9", 2064 × 2752 → iPad 13", etc.).
            </li>
            <li>
              Matches your project locales against the App Store Connect
              localizations on the selected version. Mismatches are flagged up
              front.
            </li>
            <li>
              Runs a preflight — oversized files, missing locales, locked
              versions, or platform conflicts surface before Apple sees
              anything.
            </li>
            <li>
              Replaces each matching set atomically. No half-replaced state,
              no rename-the-folder dance.
            </li>
          </ul>
          <p>
            The API key (Issuer ID, Key ID, .p8) is stored once in the macOS
            Keychain. After setup, every release is one click.
          </p>

          <h2>Which Option Should You Pick?</h2>
          <p>
            A rough decision tree:
          </p>
          <ul>
            <li>
              <strong>One locale, one app, rarely update.</strong> The web
              uploader is fine.
            </li>
            <li>
              <strong>CI pipeline, git-tracked screenshots, Ruby team.</strong>{" "}
              fastlane deliver.
            </li>
            <li>
              <strong>Custom tool / in-house automation.</strong> The API
              directly.
            </li>
            <li>
              <strong>
                Indie dev or small team, designing + shipping screenshots
                yourself.
              </strong>{" "}
              Use a Mac app that collapses design and upload into one flow.
            </li>
          </ul>

          <h2>Before You Upload: A Checklist</h2>
          <p>
            Whichever route you pick, these are the mistakes that cost the most
            time:
          </p>
          <ul>
            <li>
              Your screenshots are exactly the{" "}
              <a href="/blog/app-store-screenshot-sizes">
                supported dimensions
              </a>{" "}
              — not one pixel off. Apple can reject mismatches during upload or
              processing.
            </li>
            <li>
              The selected App Store version is editable (not "In Review" or
              "Pending Developer Release").
            </li>
            <li>
              Every locale you plan to upload has a matching App Store Connect
              localization enabled on that version.
            </li>
            <li>
              PNG or JPEG only. No HEIC, no WebP, no progressive JPEGs.
            </li>
            <li>
              RGB color, with no alpha channel for screenshots.
            </li>
          </ul>

          <h2>TL;DR</h2>
          <p>
            The web uploader is the least fun option for anything repeated.
            fastlane is the default for teams that ship often. The API is
            powerful but a weekend of work. If you want one-click upload
            straight from a design app, that is exactly what Screenshot Bro's{" "}
            <strong>Upload to App Store Connect</strong> feature was built for
            — auto-detected display types, locale matching, preflight, and one
            Keychain-stored API key.
          </p>
        </article>

        <BlogCTA message="Design and upload your App Store screenshots in one tool — no drag-and-drop, no fastlane maintenance." />
        <RelatedPosts currentSlug={SLUG} />
      </div>
    </ContentLayout>
  );
}
