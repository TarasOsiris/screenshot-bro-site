import type { Route } from "./+types/privacy";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";

const PRIVACY_TITLE = `Privacy Policy — ${SITE_NAME}`;
const PRIVACY_DESCRIPTION = `Privacy policy for ${SITE_NAME}. Learn how we handle your data — no analytics, no tracking, and your projects stay on your device.`;
const PRIVACY_URL = `${SITE_URL}/privacy`;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: PRIVACY_TITLE },
    { name: "description", content: PRIVACY_DESCRIPTION },
    { property: "og:title", content: PRIVACY_TITLE },
    { property: "og:description", content: PRIVACY_DESCRIPTION },
    { property: "og:url", content: PRIVACY_URL },
    { name: "twitter:title", content: PRIVACY_TITLE },
    { name: "twitter:description", content: PRIVACY_DESCRIPTION },
  ]);

export const EFFECTIVE_DATE = "August 21, 2026";
const DEVELOPER_NAME = "Nineva Studios";
const DEVELOPER_EMAIL = "tleskiv@ninevastudios.com";

export default function Privacy() {
  return (
    <ContentLayout>
      <article className="max-w-3xl mx-auto prose-policy">
          <h1>Privacy Policy</h1>
          <p className="meta">
            Effective date: {EFFECTIVE_DATE}
          </p>
          <p>
            This Privacy Policy describes how {DEVELOPER_NAME} ("we", "us", or
            "our") handles information in connection with the{" "}
            <strong>{SITE_NAME}</strong> application for macOS and iPadOS (the
            "App"). We are committed to protecting your privacy and being
            transparent about our practices.
          </p>

          <h2>1. Information We Do Not Collect</h2>
          <p>
            {SITE_NAME} is designed to work entirely on your device. We do{" "}
            <strong>not</strong> collect, transmit, or store:
          </p>
          <ul>
            <li>Personal information (name, email address, phone number)</li>
            <li>
              Usage analytics or behavioral data — we do not track which
              features you use, what you click, or what you create
            </li>
            <li>Device identifiers for tracking purposes</li>
            <li>Location data</li>
            <li>Advertising identifiers</li>
            <li>
              The contents of your projects — screenshots, imported images,
              fonts, or the text you write
            </li>
          </ul>
          <p>
            The App contains <strong>no analytics SDKs</strong>, no advertising
            frameworks, and no cross-app or cross-site tracking. It does include
            a crash and error reporting service, which sends technical
            diagnostics when something goes wrong and a minimal record of each
            app run. Both are described in <strong>Section 5</strong>.
          </p>

          <h2>2. Data Stored on Your Device</h2>
          <p>
            All projects, images, custom fonts, and settings you create in{" "}
            {SITE_NAME} are stored locally on your device in the application's
            sandboxed container. On Mac, project files are stored under:
          </p>
          <ul>
            <li>
              <strong>Project data</strong> — screenshot layouts, shapes, text,
              backgrounds, and locale configurations (stored as JSON files in{" "}
              <code>~/Library/Application&nbsp;Support/screenshot/</code>)
            </li>
            <li>
              <strong>Imported images and fonts</strong> — copies of files you
              import into your projects
            </li>
            <li>
              <strong>Preferences</strong> — appearance mode, default export
              format, zoom level, and similar settings (stored in UserDefaults)
            </li>
          </ul>
          <p>
            This data never leaves your device unless you explicitly enable
            iCloud sync (see Section 3) or export files to a location of your
            choice.
          </p>

          <h2>3. iCloud Sync (Optional)</h2>
          <p>
            {SITE_NAME} offers an optional iCloud Drive sync feature that you
            can enable in the App's settings. When enabled:
          </p>
          <ul>
            <li>
              Your project files and imported images are synchronized to your
              personal iCloud Drive account so they are available across your
              Macs and iPads.
            </li>
            <li>
              Data is transmitted and stored using Apple's iCloud infrastructure.
              We do not operate any intermediate servers and have no access to
              your iCloud data.
            </li>
            <li>
              iCloud sync is governed by{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple's Privacy Policy
              </a>
              .
            </li>
            <li>
              You can disable iCloud sync at any time in the App's settings.
              Disabling sync does not delete data already stored in iCloud; you
              can remove it via macOS System Settings &gt; Apple&nbsp;Account
              &gt; iCloud &gt; Manage Storage, or iPadOS Settings &gt;
              Apple&nbsp;Account &gt; iCloud.
            </li>
          </ul>

          <h2>4. In-App Purchases &amp; Subscriptions (RevenueCat)</h2>
          <p>
            {SITE_NAME} uses{" "}
            <a
              href="https://www.revenuecat.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RevenueCat
            </a>{" "}
            to manage in-app purchase validation for the Pro entitlement,
            which can be unlocked via a one-time lifetime purchase or an
            auto-renewing subscription. When you start, renew, or restore a
            purchase:
          </p>
          <ul>
            <li>
              RevenueCat receives the transaction receipt from Apple's App
              Store to verify your entitlement. This is standard for all App
              Store purchases, including auto-renewing subscriptions.
            </li>
            <li>
              RevenueCat may process an anonymous app-specific identifier and
              purchase details (product ID, transaction and renewal dates,
              entitlement status, and subscription state such as expiration
              and renewal). No personal information such as your name or
              email is shared.
            </li>
            <li>
              For subscriptions, RevenueCat is also notified by Apple when a
              renewal succeeds, fails, is paused, or is cancelled, so the App
              can keep your entitlement state accurate. We do not see your
              billing details — Apple handles all payment processing.
            </li>
            <li>
              RevenueCat's handling of data is governed by their{" "}
              <a
                href="https://www.revenuecat.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </li>
          </ul>
          <p>
            If you do not make a purchase, no data is sent to RevenueCat
            beyond an initial anonymous entitlement check. Subscription terms,
            including auto-renewal and cancellation, are described in our{" "}
            <a href={`${SITE_URL}/terms`}>Terms of Use</a>.
          </p>

          <h2>5. Crash and Error Reporting (Sentry)</h2>
          <p>
            To find and fix bugs, {SITE_NAME} uses{" "}
            <a
              href="https://sentry.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sentry
            </a>{" "}
            to report crashes, unhandled errors, and cases where the App stops
            responding (freezes of roughly three seconds or more). An error
            report is sent only when something actually goes wrong — the App
            does not record what you click, type, select, or scroll through, and
            does not send a stream of usage events. Separately, the App sends a
            minimal record of each app run, described under{" "}
            <em>App run records</em> below.
          </p>
          <p>An error report contains technical diagnostics:</p>
          <ul>
            <li>
              The error or crash itself — the exception type, message, and stack
              trace showing which code was running
            </li>
            <li>
              A short trail of recent in-app events leading up to the error —
              for example that the App launched, a project was opened, an export
              started and finished, or which editing action was performed
              (&ldquo;Move Shape&rdquo;, &ldquo;Undo&rdquo;). Each entry carries
              only counts, settings values, and durations — the number of rows,
              templates or locales involved, the export format, elapsed
              milliseconds — never the names or contents of your projects, rows,
              locales, or files. Repeated identical actions are collapsed into a
              single entry with a count.
            </li>
            <li>
              If you use the App Store Connect or Google Play upload features,
              entries for the network requests the App made to Apple's and
              Google's publishing APIs — the address and outcome only. Query
              strings and URL fragments, which is where those APIs carry
              identifiers and access tokens, are stripped before the report
              leaves your device.
            </li>
            <li>
              Device and app context — device model, operating system version,
              App version and build number, language and region settings, and
              memory and storage state at the time of the error, plus the free
              space on your disk when a save, copy, or export fails
            </li>
            <li>
              Labels describing how the App was configured — whether projects are
              stored locally or in iCloud, whether Pro is unlocked, whether the
              local MCP server is running, which App version this installation
              first ran, and whether the previous run crashed — together with a
              summary of the open document expressed purely as counts (how many
              rows, templates, shapes, locales, and images it contains, and which
              device categories it targets)
            </li>
            <li>
              A random installation identifier, and the anonymous RevenueCat
              identifier if you have made a purchase (see below)
            </li>
          </ul>
          <p>
            <strong>Identifiers.</strong> Reports are tagged with a random
            identifier that the App generates the first time it runs and stores
            on your device. It is not derived from your device, your Apple
            Account, or anything about you, and we do not join it to any other
            data — it exists so that repeated crashes from one installation can
            be recognised as related, and so that a problem you email us about
            can be matched to the reports we already received. If you have made
            a purchase, the anonymous app user ID used by RevenueCat (see Section
            4) is attached to reports as well, so that a purchase-related bug can
            be traced to the transaction that triggered it. Both values are shown
            in the App under Settings ▸ General ▸ Copy Diagnostics, alongside
            your App version, storage mode, language, and project counts; that
            information is placed on your clipboard and is sent to us only if you
            choose to paste it into a support email.
          </p>
          <p>
            <strong>App run records.</strong> In addition to error reports,
            Sentry's SDK sends a small record when the App starts and when it
            stops, so we can tell whether a crash affects one user in ten or one
            in a thousand. Such a record says only that a copy of the App ran: the
            App version, whether it was a release or debug build, how long the run
            lasted, whether it ended normally or in a crash, and an anonymous
            per-installation identifier generated by the Sentry SDK. It contains
            no in-app events, no document information, and none of the labels
            listed above.
          </p>
          <p>
            <strong>What reports never contain.</strong> Reports do{" "}
            <strong>not</strong> include your projects, screenshots, imported
            images, fonts, or any text you write in the App. The App does not
            attach screenshots of its own window, view hierarchies, or its log
            output to reports, and performance tracing is switched off, so no
            timing data is collected about normal use. We have configured Sentry
            not to send personally identifiable information such as your IP
            address or device name. File paths that appear in technical error
            messages are rewritten before sending to remove your operating system
            user name — <code>/Users/yourname/…</code> becomes{" "}
            <code>/Users/~/…</code>.
          </p>
          <p>
            <strong>Reports from the operating system.</strong> On macOS and
            iPadOS, the App also receives crash, hang, and disk-write diagnostics
            from Apple's MetricKit — a system service that captures problems the
            App cannot observe from the inside, such as a freeze while it is
            quitting — and forwards them to Sentry. On iPadOS, a report is also
            sent when the system itself terminates the App in the background, for
            example to reclaim memory.
          </p>
          <p>
            Crash reporting is enabled by default and is currently not
            configurable in the App's settings. Reports are transmitted over an
            encrypted connection to Sentry, which processes them on our behalf
            under their{" "}
            <a
              href="https://sentry.io/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            . We use this data only to diagnose and fix problems in the App.
          </p>

          <h2>6. Third-Party Services Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Purpose</th>
                <th>Data shared</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apple iCloud Drive</td>
                <td>Optional project sync</td>
                <td>Project files (only if user enables sync)</td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Purchase validation</td>
                <td>Anonymous ID, transaction receipt</td>
              </tr>
              <tr>
                <td>Sentry</td>
                <td>Crash and error reporting</td>
                <td>
                  Random installation ID, crash and error diagnostics, recent
                  in-app events, app configuration labels and document counts,
                  device and app version info (when an error occurs); a minimal
                  app run record on launch and exit
                </td>
              </tr>
              <tr>
                <td>Apple App Store</td>
                <td>In-app purchases</td>
                <td>Standard App Store transaction data</td>
              </tr>
            </tbody>
          </table>
          <p>
            No other third-party services, SDKs, or frameworks receive data from
            the App.
          </p>

          <h2>7. Data Retention and Deletion</h2>
          <ul>
            <li>
              <strong>Local data</strong> — all project data and preferences are
              removed when you delete the App, or you can manually delete them
              from{" "}
              <code>~/Library/Application&nbsp;Support/screenshot/</code>.
            </li>
            <li>
              <strong>iCloud data</strong> — disable sync in the App's settings,
              then remove files via System Settings on Mac, Settings on iPad,
              or iCloud Drive.
            </li>
            <li>
              <strong>Purchase records</strong> — managed by Apple and
              RevenueCat. You can contact RevenueCat to request deletion of any
              anonymous records associated with your transactions.
            </li>
            <li>
              <strong>Crash and error reports</strong> — reports and app run
              records are retained by Sentry for a limited period (90 days by
              default) and then deleted automatically. You can also email us to
              request deletion of reports associated with your installation
              identifier, which you can find under Settings ▸ General ▸ Copy
              Diagnostics.
            </li>
          </ul>

          <h2>8. Children's Privacy</h2>
          <p>
            {SITE_NAME} is not directed at children under the age of 13 and does
            not knowingly collect personal information from children. Since we do
            not collect personal information from any user, no special
            provisions are necessary.
          </p>

          <h2>9. Security</h2>
          <p>
            The App runs inside Apple's app sandbox on macOS and iPadOS, which
            restricts file system access and network capabilities. All data at
            rest is protected by platform storage encryption and iCloud
            encryption when applicable. The limited data the App does send —
            purchase validation and crash reports — is transmitted over
            encrypted HTTPS connections.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated
            version will be posted at{" "}
            <a href={`${SITE_URL}/privacy`}>{SITE_URL}/privacy</a> with a
            revised effective date. We encourage you to review this page
            periodically.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or the
            App's data practices, please contact us:
          </p>
          <p>
            <strong>{DEVELOPER_NAME}</strong>
            <br />
            <a href={`mailto:${DEVELOPER_EMAIL}`}>{DEVELOPER_EMAIL}</a>
          </p>
      </article>
    </ContentLayout>
  );
}
