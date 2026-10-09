import type { Route } from "./+types/pricing";
import { ContentLayout } from "~/components/ContentLayout";
import { AppleLogo } from "~/components/home/icons";
import { DownloadIcon } from "~/components/home/small-icons";
import { ButtonLink } from "~/components/ui/Button";
import { Panel } from "~/components/ui/Panel";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import {
  appStoreProductUrl,
  SITE_NAME,
  SITE_URL,
  WEB_PURCHASE_EMAIL,
} from "~/config/site";

// Facts from the app source (screenshot-mac v4.22): the free-tier caps in
// PurchaseService (1 project, 3 rows, 5 templates per row) are the only gates;
// the App Store build sells Pro through the in-app paywall (lifetime and
// subscription plans), the direct build sells a one-time web purchase that
// activates on one Mac. Prices are deliberately not published here — they
// differ by storefront and are shown at checkout (see docs/growth/entity-facts.md).

const TITLE = `Pricing — ${SITE_NAME}`;
const DESCRIPTION = `${SITE_NAME} is free to download with no trial expiry. Pro unlocks unlimited projects, rows and templates — in the App Store or as a one-time web purchase for the direct Mac download.`;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: `${SITE_URL}/pricing` },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ]);

type Cell = boolean | string;

const COMPARISON: { feature: string; free: Cell; pro: Cell }[] = [
  { feature: "Projects", free: "1", pro: "Unlimited" },
  { feature: "Rows per project", free: "3", pro: "Unlimited" },
  { feature: "Templates (screenshots) per row", free: "5", pro: "Unlimited" },
  { feature: "Every device frame, shape and language", free: true, pro: true },
  { feature: "On-device auto-translate", free: true, pro: true },
  { feature: "Export at every store size, watermark-free", free: true, pro: true },
  { feature: "Upload to App Store Connect and Google Play", free: true, pro: true },
  { feature: "iCloud sync across Mac, iPad and iPhone", free: true, pro: true },
  { feature: "Local MCP server for AI agents (Mac)", free: true, pro: true },
  { feature: "Future Pro-only features", free: false, pro: true },
];

const FAQ = [
  {
    question: "Is the free tier a trial?",
    answer:
      "No. It never expires and needs no signup. You keep one project with up to three rows and five templates per row, and every feature works inside those limits.",
  },
  {
    question: "How much does Pro cost?",
    answer:
      "The App Store shows the current plans and prices for your country before you buy, and the web checkout shows the price for the direct download. Prices vary by storefront and currency, so we don't repeat them here.",
  },
  {
    question: "Does one purchase cover both versions?",
    answer: `No. A Pro purchase stays with the version it was bought in: App Store purchases unlock the App Store version on your Apple Account, web purchases unlock the direct download. Write to ${WEB_PURCHASE_EMAIL} if you need to move a web purchase.`,
  },
  {
    question: "What happens to my projects if I don't upgrade?",
    answer:
      "Nothing. Pro only lifts the limits on adding projects, rows and templates; exports have no watermark on either tier.",
  },
];

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([{ name: "Pricing", path: "/pricing" }]);

const FAQ_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

function CellValue({ value, label }: { value: Cell; label: string }) {
  if (typeof value === "string") return <span className="font-medium text-ink">{value}</span>;
  return value ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline text-mint" role="img" aria-label={`Included in ${label}`}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  ) : (
    <span className="text-ink/55" aria-label={`Not in ${label}`}>
      —
    </span>
  );
}

export default function Pricing() {
  return (
    <ContentLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_JSON_LD }} />
      <div className="max-w-4xl mx-auto">
        <section className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono">Pricing</p>
          <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight text-balance">
            Free to start. Pro when your project outgrows it.
          </h1>
          <p className="mt-5 text-lg text-ink/60 leading-relaxed max-w-2xl mx-auto text-balance">
            {SITE_NAME} is free to download, with no trial expiry and no signup. Pro lifts the
            project, row and template limits — nothing else is held back.
          </p>
        </section>

        <section aria-labelledby="compare-heading" className="mt-14">
          <h2 id="compare-heading" className="sr-only">
            Free and Pro compared
          </h2>
          <Panel padding="sm" className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="py-3 pr-4 text-left font-medium text-ink/60">
                    Feature
                  </th>
                  <th scope="col" className="py-3 px-4 text-center font-display text-base font-bold text-ink">
                    Free
                  </th>
                  <th scope="col" className="py-3 pl-4 text-center font-display text-base font-bold text-accent-light">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-border-subtle last:border-0">
                    <th scope="row" className="py-3 pr-4 text-left font-normal text-ink/75">
                      {row.feature}
                    </th>
                    <td className="py-3 px-4 text-center">
                      <CellValue value={row.free} label="Free" />
                    </td>
                    <td className="py-3 pl-4 text-center">
                      <CellValue value={row.pro} label="Pro" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
        </section>

        <section aria-labelledby="buy-heading" className="mt-16">
          <h2 id="buy-heading" className="font-display text-2xl font-bold tracking-tight text-ink text-center">
            How you buy Pro depends on where you got the app
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Panel className="flex flex-col">
              <div className="flex items-center gap-3 text-ink">
                <AppleLogo />
                <h3 className="font-display text-xl font-bold">App Store version</h3>
              </div>
              <p className="mt-1 text-sm text-ink/60">Mac, iPad and iPhone</p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink/70 leading-relaxed flex-1 list-disc pl-5">
                <li>Pro is an in-app purchase, billed to your Apple Account.</li>
                <li>Choose a lifetime unlock or a subscription — the plans and prices for your country appear in the app and on the App Store page.</li>
                <li>Restore it on another device with the same Apple Account; manage subscriptions in your Apple Account settings.</li>
              </ul>
              <ButtonLink href={appStoreProductUrl()} className="mt-6" data-placement="pricing">
                <AppleLogo /> View on the App Store
              </ButtonLink>
            </Panel>
            <Panel className="flex flex-col">
              <div className="flex items-center gap-3 text-ink">
                <DownloadIcon />
                <h3 className="font-display text-xl font-bold">Direct download</h3>
              </div>
              <p className="mt-1 text-sm text-ink/60">Mac</p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink/70 leading-relaxed flex-1 list-disc pl-5">
                <li>Pro is a one-time purchase on our website — no subscription, no account.</li>
                <li>Pay by card, Apple Pay or Google Pay; the price is shown at checkout.</li>
                <li>A purchase activates on one Mac. To move it, email {WEB_PURCHASE_EMAIL}.</li>
              </ul>
              <ButtonLink href="/buy" variant="secondary" className="mt-6">
                Buy Pro for the direct download
              </ButtonLink>
            </Panel>
          </div>
          <p className="mt-6 text-center text-sm text-ink/60">
            Not sure which version to get?{" "}
            <a href="/download" className="text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink/60">
              Compare them on the download page
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="pricing-faq-heading" className="mt-20 max-w-2xl mx-auto">
          <h2 id="pricing-faq-heading" className="text-2xl font-semibold tracking-tight text-ink">
            Questions
          </h2>
          <div className="mt-6 divide-y divide-border">
            {FAQ.map((item) => (
              <div key={item.question} className="py-4">
                <h3 className="font-medium text-ink">{item.question}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink/55 leading-relaxed">
            Full purchase terms, including renewal and refunds, are in the{" "}
            <a href="/terms" className="underline hover:text-ink">
              Terms of Use
            </a>
            .
          </p>
        </section>
      </div>
    </ContentLayout>
  );
}
