import type { Route } from "./+types/pricing";
import { ContentLayout } from "~/components/ContentLayout";
import { AppleLogo, WindowsLogo } from "~/components/home/icons";
import { DownloadIcon } from "~/components/home/small-icons";
import { ButtonLink } from "~/components/ui/Button";
import { Panel } from "~/components/ui/Panel";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import {
  APP_STORE_PRO,
  APP_STORE_PRO_PLANS,
  appStoreProductUrl,
  SITE_NAME,
  SITE_URL,
  WEB_PRO_LIFETIME_PRICE,
  WEB_PURCHASE_EMAIL,
} from "~/config/site";

// Facts from the app source (screenshot-mac v4.22): the free-tier caps in
// PurchaseService (1 project, 3 rows, 5 templates per row) are the only gates;
// the App Store build sells Pro through the in-app paywall (monthly, yearly and
// lifetime), the direct Mac build and the Windows beta sell a one-time web
// purchase that activates one copy. Prices shown are US prices.

const { monthly: MONTHLY, yearly: YEARLY, lifetime: LIFETIME } = APP_STORE_PRO;

const TITLE = `Pricing — ${SITE_NAME}`;
const DESCRIPTION = `${SITE_NAME} is free with no trial expiry. Pro is ${WEB_PRO_LIFETIME_PRICE} once on the web, or ${MONTHLY.price}/month, ${YEARLY.price}/year or ${LIFETIME.price} lifetime on the App Store (US prices).`;

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
      `In the US, the App Store version offers Pro Monthly at ${MONTHLY.price} a month, Pro Yearly at ${YEARLY.price} a year and Pro Lifetime at ${LIFETIME.price}. The direct Mac download and the Windows beta sell Pro Lifetime on our website for ${WEB_PRO_LIFETIME_PRICE}, one time, with tax calculated at checkout. Other countries pay their local price: the App Store shows it before you buy, and so does the checkout.`,
  },
  {
    question: "Does one purchase cover both versions?",
    answer: `No. A Pro purchase stays with the version it was bought in: App Store purchases unlock the App Store version on your Apple Account, and a web purchase activates one copy of the direct Mac download or the Windows beta. Write to ${WEB_PURCHASE_EMAIL} if you need to move a web purchase.`,
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

function PriceTag({ price, period }: { price: string; period: string }) {
  return (
    <span className="whitespace-nowrap">
      <span className="font-display text-2xl font-bold text-ink tabular-nums">{price}</span>
      <span className="ml-1 text-sm text-ink/60">{period === "one-time" ? "one-time" : `/ ${period}`}</span>
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
            project, row and template limits, from {WEB_PRO_LIFETIME_PRICE} once.
          </p>
        </section>

        <section aria-labelledby="buy-heading" className="mt-14">
          <h2 id="buy-heading" className="font-display text-2xl font-bold tracking-tight text-ink text-center text-balance">
            How you buy Pro depends on where you got the app
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Panel className="flex flex-col">
              <div className="flex items-center gap-3 text-ink">
                <AppleLogo />
                <h3 className="font-display text-xl font-bold">App Store version</h3>
              </div>
              <p className="mt-1 text-sm text-ink/60">Mac, iPad and iPhone · in-app purchase</p>
              <ul className="mt-5 divide-y divide-border-subtle border-y border-border-subtle">
                {APP_STORE_PRO_PLANS.map((plan) => (
                  <li key={plan.name} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-sm font-medium text-ink/80">{plan.name}</span>
                    <PriceTag price={plan.price} period={plan.period} />
                  </li>
                ))}
              </ul>
              <ul className="mt-5 space-y-2.5 text-sm text-ink/70 leading-relaxed flex-1 list-disc pl-5">
                <li>Billed to your Apple Account. Restore it on another device signed in to the same account.</li>
                <li>Manage or cancel a subscription in your Apple Account settings.</li>
              </ul>
              <ButtonLink href={appStoreProductUrl()} className="mt-6" data-placement="pricing">
                <AppleLogo /> View on the App Store
              </ButtonLink>
            </Panel>
            <Panel className="flex flex-col">
              <div className="flex items-center gap-3 text-ink">
                <DownloadIcon />
                <h3 className="font-display text-xl font-bold">Web purchase</h3>
              </div>
              <p className="mt-1 text-sm text-ink/60">Direct Mac download and the Windows beta</p>
              <div className="mt-5 flex items-baseline justify-between gap-4 border-y border-border-subtle py-3">
                <span className="text-sm font-medium text-ink/80">Pro Lifetime</span>
                <PriceTag price={WEB_PRO_LIFETIME_PRICE} period="one-time" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/70">
                <span className="soft-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1">
                  <AppleLogo className="h-3.5 w-3.5" /> Mac direct download
                </span>
                <span className="soft-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1">
                  <WindowsLogo className="h-3 w-3" /> Windows beta
                </span>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm text-ink/70 leading-relaxed flex-1 list-disc pl-5">
                <li>Pay once on our website: no subscription, no account. Card, Apple Pay or Google Pay; tax is calculated at checkout.</li>
                <li>A purchase activates one copy, on a Mac or a Windows PC. To move it, email {WEB_PURCHASE_EMAIL}.</li>
                <li>Activate it from the page you land on after checkout, or with the link in your receipt email.</li>
              </ul>
              <ButtonLink href="/buy" variant="secondary" className="mt-6" data-placement="pricing">
                Buy Pro for {WEB_PRO_LIFETIME_PRICE}
              </ButtonLink>
            </Panel>
          </div>
          <p className="mt-6 text-center text-sm text-ink/60 text-balance">
            Prices are in US dollars for the US. Elsewhere, the App Store and the checkout show your
            local price before you pay. Not sure which version to get?{" "}
            <a href="/download" className="text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink/60">
              Compare them on the download page
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="compare-heading" className="mt-16">
          <h2 id="compare-heading" className="font-display text-2xl font-bold tracking-tight text-ink text-center">
            Free and Pro compared
          </h2>
          <Panel padding="sm" className="mt-8 overflow-x-auto">
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
