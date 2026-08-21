import type { Route } from "./+types/privacy";
import { SITE_NAME, SITE_URL } from "~/config/site";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";
import { isLocaleCode, localizedPath, type LocaleCode } from "~/config/localization";
import { data } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return { locale: (locale || "en") as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches, params }) => {
  const locale = (params.locale || "en") as LocaleCode;
  const titles: Record<LocaleCode, string> = {
    en: `Privacy Policy — ${SITE_NAME}`,
    es: `Política de privacidad — ${SITE_NAME}`,
    zh: `隐私政策 — ${SITE_NAME}`,
    ja: `プライバシーポリシー — ${SITE_NAME}`,
    de: `Datenschutzerklärung — ${SITE_NAME}`,
    fr: `Politique de confidentialité — ${SITE_NAME}`,
    pt: `Política de privacidade — ${SITE_NAME}`,
    it: `Informativa sulla privacy — ${SITE_NAME}`,
    ko: `개인정보 처리방침 — ${SITE_NAME}`,
    ar: `سياسة الخصوصية — ${SITE_NAME}`,
    hi: `गोपनीयता नीति — ${SITE_NAME}`,
  };

  const descriptions: Record<LocaleCode, string> = {
    en: `Privacy policy for ${SITE_NAME}. Learn how we handle your data — no advertising, no cross-app tracking, and your projects stay on your device.`,
    es: `Política de privacidad de ${SITE_NAME}. Descubre cómo protegemos tus datos: sin publicidad ni rastreo entre apps, tus archivos permanecen en tu dispositivo.`,
    zh: `${SITE_NAME} 隐私政策。了解我们如何保护你的数据安全——无广告、无跨应用追踪，所有项目文件完全保存在你的本地设备中。`,
    ja: `${SITE_NAME}のプライバシーポリシー。広告やアプリ間トラッキングは行わず、プロジェクトはすべてデバイス内に安全に保存されます。`,
    de: `Datenschutzerklärung für ${SITE_NAME}. Keine Werbung, kein app-übergreifendes Tracking — Ihre Projekte bleiben sicher auf Ihrem Gerät.`,
    fr: `Politique de confidentialité de ${SITE_NAME}. Aucune publicité, aucun suivi inter-applications : vos projets restent sur votre appareil.`,
    pt: `Política de privacidade do ${SITE_NAME}. Seus projetos permanecem seguros no seu dispositivo, sem publicidade nem rastreamento entre aplicativos.`,
    it: `Informativa sulla privacy di ${SITE_NAME}. Nessuna pubblicità né tracciamento tra app: i tuoi progetti rimangono al sicuro sul tuo dispositivo.`,
    ko: `${SITE_NAME} 개인정보 처리방침. 광고나 앱 간 추적 없이 모든 프로젝트는 기기 내에 안전하게 보관됩니다.`,
    ar: `سياسة الخصوصية لتطبيق ${SITE_NAME}. لا إعلانات ولا تتبع بين التطبيقات، وتبقى جميع مشاريعك مخزنة محلياً على جهازك.`,
    hi: `${SITE_NAME} की गोपनीयता नीति। कोई विज्ञापन या क्रॉस-ऐप ट्रैकिंग नहीं — आपके प्रोजेक्ट आपके डिवाइस पर सुरक्षित रहते हैं।`,
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const url = `${SITE_URL}${localizedPath(locale, "/privacy")}`;

  return mergeMeta(matches, [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ]);
};

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
              What you click, type, select, or scroll through — the App records
              no keystrokes, no pointer activity, and no session replay
            </li>
            <li>
              Device identifiers for tracking purposes — nothing the App sends
              is linked to your Apple Account, your device's identifier for
              advertisers, or any profile held elsewhere
            </li>
            <li>Location data</li>
            <li>Advertising identifiers</li>
            <li>
              The contents of your projects — screenshots, imported images,
              fonts, or the text you write
            </li>
          </ul>
          <p>
            The App contains <strong>no advertising frameworks</strong> and does
            no cross-app or cross-site tracking. It does include two services
            that send data off your device: a crash and error reporting service,
            which sends technical diagnostics when something goes wrong
            (<strong>Section 5</strong>), and a product analytics service, which
            counts a short, fixed list of milestones such as &ldquo;an export
            finished&rdquo; so we can tell which parts of the App people
            actually reach (<strong>Section 6</strong>). Neither carries the
            contents of your work.
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
            does not record what you click, type, select, or scroll through.
            Separately, the App sends a minimal record of each app run,
            described under <em>App run records</em> below, and a short list of
            product milestones described in <strong>Section 6</strong>.
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
            Account, or anything about you — it exists so that repeated crashes
            from one installation can be recognised as related, and so that a
            problem you email us about can be matched to the reports we already
            received. If you have made a purchase, the anonymous app user ID used
            by RevenueCat (see Section 4) is attached to reports as well, so that
            a purchase-related bug can be traced to the transaction that
            triggered it, and the two anonymous identifiers are associated with
            one another in our analytics tool (Section 6) so that a purchase can
            be attributed to the installation that made it. Neither identifier is
            joined to anything that identifies you personally, because we hold no
            such data. Both values are shown
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

          <h2>6. Product Analytics (PostHog)</h2>
          <p>
            To understand which parts of {SITE_NAME} people actually reach — how
            many installations finish the introduction, create a project, get as
            far as an export — the App sends a short, fixed list of milestone
            events to{" "}
            <a
              href="https://posthog.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PostHog
            </a>
            , hosted in the United States. This is the only feature of the App
            whose purpose is to observe use rather than to serve you directly, so
            it is described here in full.
          </p>
          <p>
            <strong>What is sent.</strong> The complete list of events, as named
            in the App's source code:
          </p>
          <ul>
            <li>
              <code>app_launched</code>, and the standard install / update / open
              / background lifecycle records
            </li>
            <li>
              <code>onboarding_started</code>, <code>onboarding_completed</code>,{" "}
              <code>onboarding_skipped</code>
            </li>
            <li>
              <code>project_created</code> (whether from a blank project, a
              bundled template, or a duplicate), <code>project_deleted</code>,{" "}
              <code>template_applied</code>
            </li>
            <li>
              <code>screenshots_imported</code>, <code>locale_added</code>,{" "}
              <code>translation_run</code>
            </li>
            <li>
              <code>export_started</code>, <code>export_finished</code>,{" "}
              <code>export_failed</code>, <code>export_routed</code>,{" "}
              <code>export_abandoned</code>
            </li>
            <li>
              <code>store_upload_finished</code>,{" "}
              <code>store_upload_failed</code>
            </li>
            <li>
              <code>paywall_shown</code>, <code>paywall_dismissed</code>,{" "}
              <code>purchase_completed</code>, <code>purchase_failed</code>,{" "}
              <code>purchase_restored</code>
            </li>
            <li>
              <code>mcp_server_toggled</code>, <code>mcp_tool_called</code> —
              only if you turn on the optional local automation server
            </li>
          </ul>
          <p>
            Each event may carry <strong>counts, settings values, durations and
            outcomes</strong>: how many rows, templates, languages or images were
            involved, the export format, which destination was chosen, whether an
            upload succeeded or was cancelled, the identifier of one of{" "}
            {SITE_NAME}&apos;s own bundled templates. Alongside them, the
            analytics service records the App version and build, the platform,
            your device model, operating system version, language, time zone and
            screen size — the same class of technical context as a crash report.
          </p>
          <p>
            <strong>What is never sent.</strong> No project, row, or language
            names. No screenshots, imported images, custom fonts, or any text you
            write. No file names or file paths. No record of what you click,
            type, select, scroll, or hover over. No screen recordings or session
            replay. The App enforces this in code rather than by convention: an
            event property must be one of a fixed list of names, and any free
            text on a property outside a small allow-list of {SITE_NAME}&apos;s
            own vocabulary is discarded before the event leaves your device.
          </p>
          <p>
            <strong>Identifiers and location.</strong> Events are labelled with
            the same random installation identifier described in Section 5, and —
            if you have made a purchase — the anonymous RevenueCat identifier, so
            that a purchase can be attributed to the installation that made it.
            The App sets the reported IP address to zero, so PostHog does not
            derive your city, region, or country from it. Nothing sent is linked
            to your name, email address, or Apple Account, none of which we hold.
          </p>
          <p>
            Product analytics is enabled by default and is currently not
            configurable in the App&apos;s settings. It is switched off entirely
            in development and test builds. Data is transmitted over an encrypted
            connection to PostHog, which processes it on our behalf under their{" "}
            <a
              href="https://posthog.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            . We use it only to decide what to build and fix next.
          </p>

          <h2>7. Third-Party Services Summary</h2>
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
                <td>PostHog</td>
                <td>Product analytics</td>
                <td>
                  Random installation ID and anonymous RevenueCat ID, a fixed
                  list of milestone events (Section 6) with counts, settings
                  values and outcomes, device and app version info
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

          <h2>8. Data Retention and Deletion</h2>
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
            <li>
              <strong>Product analytics</strong> — milestone events are retained
              by PostHog under their standard retention period. Email us with the
              installation identifier from Settings ▸ General ▸ Copy Diagnostics
              and we will delete the events associated with it.
            </li>
          </ul>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            {SITE_NAME} is not directed at children under the age of 13 and does
            not knowingly collect personal information from children. Since we do
            not collect personal information from any user, no special
            provisions are necessary.
          </p>

          <h2>10. Security</h2>
          <p>
            The App runs inside Apple's app sandbox on macOS and iPadOS, which
            restricts file system access and network capabilities. All data at
            rest is protected by platform storage encryption and iCloud
            encryption when applicable. The limited data the App does send —
            purchase validation and crash reports — is transmitted over
            encrypted HTTPS connections.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated
            version will be posted at{" "}
            <a href={`${SITE_URL}/privacy`}>{SITE_URL}/privacy</a> with a
            revised effective date. We encourage you to review this page
            periodically.
          </p>

          <h2>12. Contact Us</h2>
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
