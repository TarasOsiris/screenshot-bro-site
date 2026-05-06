import type { Route } from "./+types/terms";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";

const TERMS_TITLE = `Terms of Use — ${SITE_NAME}`;
const TERMS_DESCRIPTION = `Terms of Use, EULA, and subscription terms for ${SITE_NAME} — auto-renewing subscriptions, lifetime purchase, cancellation, and refunds.`;
const TERMS_URL = `${SITE_URL}/terms`;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: TERMS_TITLE },
    { name: "description", content: TERMS_DESCRIPTION },
    { property: "og:title", content: TERMS_TITLE },
    { property: "og:description", content: TERMS_DESCRIPTION },
    { property: "og:url", content: TERMS_URL },
    { name: "twitter:title", content: TERMS_TITLE },
    { name: "twitter:description", content: TERMS_DESCRIPTION },
  ]);

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: `${SITE_URL}/terms` },
];

const EFFECTIVE_DATE = "May 6, 2026";
const DEVELOPER_NAME = "Nineva Studios";
const DEVELOPER_EMAIL = "tleskiv@ninevastudios.com";

export default function Terms() {
  return (
    <ContentLayout>
      <article className="max-w-3xl mx-auto prose-policy">
        <h1>Terms of Use</h1>
        <p className="meta">Effective date: {EFFECTIVE_DATE}</p>
        <p>
          These Terms of Use ("Terms") govern your use of the{" "}
          <strong>{SITE_NAME}</strong> macOS application (the "App") provided by{" "}
          {DEVELOPER_NAME} ("we", "us", or "our"). By downloading, installing,
          or using the App, you agree to these Terms. If you do not agree, do
          not use the App.
        </p>

        <h2>1. License (EULA)</h2>
        <p>
          The App is licensed, not sold, to you. Subject to your compliance
          with these Terms, we grant you a limited, non-exclusive,
          non-transferable, revocable license to install and use the App on
          Apple-branded devices that you own or control, as permitted by the
          Mac App Store{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Standard EULA
          </a>
          . Where these Terms conflict with the Standard EULA, these Terms
          apply to the extent permitted by Apple.
        </p>

        <h2>2. In-App Purchases</h2>
        <p>
          {SITE_NAME} is free to download and includes a free tier with
          limited features. Additional capabilities ("Pro") can be unlocked by
          purchasing one of the offerings made available inside the App. We
          may offer Pro access as a one-time lifetime purchase, an
          auto-renewing subscription, or both. The exact offerings and prices
          shown inside the App at the time of purchase are the binding ones.
        </p>

        <h3>2.1 Lifetime Purchase</h3>
        <ul>
          <li>
            The lifetime purchase is a one-time, non-recurring payment that
            unlocks the Pro entitlement for the Apple Account that bought it.
          </li>
          <li>
            It does not auto-renew and is not a subscription. Future major
            versions or new features may be sold separately.
          </li>
        </ul>

        <h3>2.2 Auto-Renewing Subscriptions</h3>
        <p>
          Subscriptions to {SITE_NAME} Pro are{" "}
          <strong>auto-renewing</strong>. The following terms apply, in
          accordance with Apple's App Store guidelines:
        </p>
        <ul>
          <li>
            <strong>Title and length:</strong> "{SITE_NAME} Pro" subscriptions
            are offered in monthly and yearly periods. The exact period and
            price are displayed in the App before you confirm the purchase.
          </li>
          <li>
            <strong>Billing:</strong> Payment is charged to your Apple Account
            at confirmation of purchase.
          </li>
          <li>
            <strong>Auto-renewal:</strong> Your subscription automatically
            renews at the same price and period unless auto-renew is turned
            off at least 24 hours before the end of the current period. Your
            Apple Account is charged for renewal within 24 hours prior to the
            end of the current period.
          </li>
          <li>
            <strong>Free trial or introductory offer:</strong> If a free trial
            or introductory offer is provided, any unused portion is forfeited
            when you purchase a subscription, where applicable.
          </li>
          <li>
            <strong>Manage and cancel:</strong> You can manage and cancel your
            subscription by going to your Apple Account settings on your Mac
            (System Settings &gt; Apple Account &gt; Media &amp; Purchases
            &gt; Manage) or at{" "}
            <a
              href="https://apps.apple.com/account/subscriptions"
              target="_blank"
              rel="noopener noreferrer"
            >
              apps.apple.com/account/subscriptions
            </a>
            . Cancellation takes effect at the end of the current paid period.
          </li>
          <li>
            <strong>Price changes:</strong> If we change the price of a
            subscription, Apple will notify you and ask for your consent
            before continuing the subscription, as required by the App Store.
          </li>
        </ul>

        <h3>2.3 Refunds</h3>
        <p>
          All purchases are processed by Apple. Refunds are handled by Apple
          and governed by the App Store policies. To request a refund, visit{" "}
          <a
            href="https://reportaproblem.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            reportaproblem.apple.com
          </a>
          .
        </p>

        <h3>2.4 Restoring Purchases</h3>
        <p>
          You can restore previous purchases on a new Mac signed in to the
          same Apple Account by using the "Restore Purchases" action inside
          the App. Restored entitlements are validated against the App Store
          and our purchase processor (RevenueCat).
        </p>

        <h2>3. Acceptable Use</h2>
        <ul>
          <li>
            You agree not to reverse engineer, decompile, or attempt to
            extract the source code of the App, except as permitted by law.
          </li>
          <li>
            You are responsible for the screenshots, images, fonts, and other
            content you import into the App and for ensuring you have the
            rights to use them. You retain ownership of your content.
          </li>
          <li>
            Do not use the App to create or distribute content that is
            unlawful, infringing, or that violates third-party rights.
          </li>
        </ul>

        <h2>4. Your Content</h2>
        <p>
          {SITE_NAME} stores your projects locally on your Mac and, if you
          enable iCloud sync, in your personal iCloud Drive. We do not collect
          or have access to your projects, screenshots, or fonts. See our{" "}
          <a href={`${SITE_URL}/privacy`}>Privacy Policy</a> for details.
        </p>

        <h2>5. Updates</h2>
        <p>
          We may release updates to the App through the Mac App Store. Some
          updates may add, change, or remove features. Pro entitlements remain
          tied to your Apple Account.
        </p>

        <h2>6. Disclaimers</h2>
        <p>
          The App is provided "as is" and "as available" without warranties
          of any kind, express or implied, including merchantability, fitness
          for a particular purpose, and non-infringement. We do not warrant
          that the App will be error-free or uninterrupted, or that exports
          will always be accepted by App Store Connect, Google Play, or any
          other third-party service.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, {DEVELOPER_NAME} shall not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits, data, or goodwill arising
          from or related to your use of the App. Our total liability for any
          claim shall not exceed the amount you paid for the App in the
          twelve months preceding the event giving rise to the claim.
        </p>

        <h2>8. Termination</h2>
        <p>
          You may stop using the App and delete it at any time. We may
          suspend or terminate your access to the App if you materially
          breach these Terms. Sections that by their nature should survive
          termination (including disclaimers, limitation of liability, and
          governing law) will survive.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of Ukraine, without regard to
          conflict-of-law principles. To the extent the Mac App Store
          Standard EULA applies, that document's governing-law and
          jurisdiction terms control where they conflict with this section.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. The updated version
          will be posted at <a href={`${SITE_URL}/terms`}>{SITE_URL}/terms</a>{" "}
          with a revised effective date. Continued use of the App after the
          new Terms take effect constitutes acceptance.
        </p>

        <h2>11. Contact</h2>
        <p>
          For questions about these Terms, contact us:
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
