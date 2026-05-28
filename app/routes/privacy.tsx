import type { Route } from "./+types/privacy";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";

const PRIVACY_TITLE = `Privacy Policy — ${SITE_NAME}`;
const PRIVACY_DESCRIPTION = `Privacy policy for ${SITE_NAME}. Learn how we handle your data — no analytics, no tracking, all data stays on your Mac.`;
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

export const EFFECTIVE_DATE = "March 25, 2026";
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
            <strong>{SITE_NAME}</strong> application for macOS (the "App"). We
            are committed to protecting your privacy and being transparent about
            our practices.
          </p>

          <h2>1. Information We Do Not Collect</h2>
          <p>
            {SITE_NAME} is designed to work entirely on your device. We do{" "}
            <strong>not</strong> collect, transmit, or store:
          </p>
          <ul>
            <li>Personal information (name, email address, phone number)</li>
            <li>Usage analytics or behavioral data</li>
            <li>Device identifiers for tracking purposes</li>
            <li>Location data</li>
            <li>Crash reports or diagnostics sent to our servers</li>
            <li>Advertising identifiers</li>
          </ul>
          <p>
            The App contains <strong>no analytics SDKs</strong>, no advertising
            frameworks, and no telemetry or crash-reporting services.
          </p>

          <h2>2. Data Stored on Your Device</h2>
          <p>
            All projects, images, custom fonts, and settings you create in{" "}
            {SITE_NAME} are stored locally on your Mac in the application's
            sandboxed container:
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
              Macs.
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
              &gt; iCloud &gt; Manage Storage.
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

          <h2>5. Third-Party Services Summary</h2>
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

          <h2>6. Data Retention and Deletion</h2>
          <ul>
            <li>
              <strong>Local data</strong> — all project data and preferences are
              removed when you delete the App, or you can manually delete them
              from{" "}
              <code>~/Library/Application&nbsp;Support/screenshot/</code>.
            </li>
            <li>
              <strong>iCloud data</strong> — disable sync in the App's settings,
              then remove files via macOS System Settings or iCloud Drive.
            </li>
            <li>
              <strong>Purchase records</strong> — managed by Apple and
              RevenueCat. You can contact RevenueCat to request deletion of any
              anonymous records associated with your transactions.
            </li>
          </ul>

          <h2>7. Children's Privacy</h2>
          <p>
            {SITE_NAME} is not directed at children under the age of 13 and does
            not knowingly collect personal information from children. Since we do
            not collect personal information from any user, no special
            provisions are necessary.
          </p>

          <h2>8. Security</h2>
          <p>
            The App runs inside macOS App Sandbox, which restricts file system
            access and network capabilities. All data at rest is protected by
            macOS file-level encryption (FileVault) and iCloud encryption when
            applicable.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated
            version will be posted at{" "}
            <a href={`${SITE_URL}/privacy`}>{SITE_URL}/privacy</a> with a
            revised effective date. We encourage you to review this page
            periodically.
          </p>

          <h2>10. Contact Us</h2>
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
