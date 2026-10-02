import { useState } from "react";
import { buttonClass } from "~/components/ui/Button";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/download";
import { ContentLayout } from "~/components/ContentLayout";
import { AppleLogo } from "~/components/home/icons";
import { DownloadIcon } from "~/components/home/small-icons";
import { loadLatestRelease } from "~/lib/latest-release.server";
import { mergeMeta } from "~/config/meta";
import { LOCALES } from "~/config/localization";
import {
  appStoreProductUrl,
  DIRECT_DOWNLOAD_URL,
  MINIMUM_IPADOS_VERSION,
  MINIMUM_MACOS_VERSION,
  SITE_NAME,
  SITE_URL,
  WEB_PURCHASE_EMAIL,
} from "~/config/site";

// Home and blog CTAs pass the visitor's storefront as ?store=, so the App Store
// button opens their own country's listing. Anything unknown falls back to us.
const STOREFRONTS = new Set(LOCALES.map((locale) => locale.storefront));

export async function loader({ request }: Route.LoaderArgs) {
  const store = new URL(request.url).searchParams.get("store") ?? "";
  return {
    release: await loadLatestRelease(),
    appStoreUrl: appStoreProductUrl(STOREFRONTS.has(store) ? store : undefined),
  };
}

export const meta: Route.MetaFunction = ({ matches }) => {
  const title = `Download ${SITE_NAME} for Mac`;
  const description = `Download ${SITE_NAME} directly, or get it from the Mac App Store. Free to start; unlock Pro with a one-time purchase.`;
  return mergeMeta(matches, [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: `${SITE_URL}/download` },
  ]);
};

const formatSize = (bytes: number) => `${Math.round(bytes / 1_000_000)} MB`;
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

const INSTALL_STEPS = [
  { title: "Open the download", body: "Double-click ScreenshotBro.dmg in your Downloads folder." },
  { title: "Drag to Applications", body: `Drag ${SITE_NAME} onto the Applications folder in the window that opens.` },
  { title: "Launch it", body: `Open ${SITE_NAME} from Applications. Updates arrive automatically from then on.` },
];

const FAQ = [
  {
    question: "Which one should I pick?",
    answer:
      "Pick the App Store if you also want it on iPad or iPhone, or prefer Apple to handle billing. Pick the direct download if you'd rather buy Pro on the web. The app itself is identical.",
  },
  {
    question: "Can I switch between the two?",
    answer: `Yes. Projects sync through iCloud, so either version opens them. Keep just one copy in Applications — macOS treats them as the same app. A Pro purchase stays with the version it was bought in; write to ${WEB_PURCHASE_EMAIL} if you need to move a web purchase.`,
  },
  {
    question: "How do updates work in the direct version?",
    answer: `${SITE_NAME} checks for new versions itself and installs them in one click. You can also choose Check for Updates… from the app menu at any time.`,
  },
  {
    question: "I bought Pro on the website. How do I activate it?",
    answer: `Click Open ${SITE_NAME} on the page you land on after checkout. Or paste the activation link from your receipt email into ${SITE_NAME} ▸ Settings ▸ Activate Web Purchase.`,
  },
  {
    question: "Is the download safe?",
    answer:
      "It's signed with our Apple Developer ID and notarized by Apple, so macOS checks it before the first launch — no security warnings to click through.",
  },
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-mint" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

const primaryButton = buttonClass("primary", "lg", "w-full");

function OptionCard({
  icon,
  title,
  platforms,
  rows,
  children,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  platforms: string;
  rows: string[];
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="soft-panel rounded-3xl p-7 sm:p-8 flex flex-col text-left">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent-light">
          {icon}
        </span>
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink">{title}</h2>
          <p className="text-sm text-ink/60">{platforms}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-3 flex-1">
        {rows.map((row) => (
          <li key={row} className="flex gap-2.5 text-sm text-ink/70 leading-relaxed">
            <Check /> {row}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col">{children}</div>
      <div className="mt-4 min-h-10 text-center text-xs text-ink/55 leading-relaxed">{footer}</div>
    </div>
  );
}

export default function Download() {
  const { release, appStoreUrl } = useLoaderData<typeof loader>();
  const [started, setStarted] = useState(false);
  const markStarted = () => setStarted(true);

  return (
    <ContentLayout>
      <div className="max-w-4xl mx-auto">
        <section className="text-center">
          <img
            src="/web-app-manifest-512x512.png"
            alt=""
            width={112}
            height={112}
            className="mx-auto h-28 w-28 rounded-[26px] shadow-[0_20px_60px_-20px_var(--color-accent-glow)]"
          />
          <h1 className="mt-8 font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight">
            Get {SITE_NAME}
          </h1>
          <p className="mt-4 text-lg text-ink/60 leading-relaxed max-w-2xl mx-auto text-balance">
            Same app, same features, same free tier and iCloud sync either way. Only updates and
            billing differ — pick whichever suits you.
          </p>
        </section>

        <section aria-label="Ways to get it" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          <OptionCard
            icon={<AppleLogo />}
            title="App Store"
            platforms="Mac, iPad and iPhone"
            rows={[
              "Updates through the App Store",
              "Buy Pro in the app with your Apple Account",
              "Install it on iPad and iPhone too",
            ]}
            footer={<>macOS {MINIMUM_MACOS_VERSION}+ · iOS and iPadOS {MINIMUM_IPADOS_VERSION}+</>}
          >
            <a href={appStoreUrl} className={primaryButton}>
              <AppleLogo /> Download on the App Store
            </a>
          </OptionCard>

          <OptionCard
            icon={<DownloadIcon />}
            title="Direct download"
            platforms="Mac"
            rows={[
              "Updates itself, right inside the app",
              "Buy Pro on our site — card, Apple Pay or Google Pay, no account",
              "Signed with our Developer ID and notarized by Apple",
            ]}
            footer={
              <div aria-live="polite">
                {started ? (
                  <p className="text-ink/80">
                    Your download is starting…{" "}
                    <a href={DIRECT_DOWNLOAD_URL} className="underline text-ink/60 hover:text-ink">
                      Didn't start? Try again
                    </a>
                  </p>
                ) : (
                  <p>
                    {release
                      ? `Version ${release.version} · ${formatSize(release.sizeBytes)} · ${formatDate(release.publishedAt)}`
                      : null}
                    {release ? <br /> : null}
                    macOS {MINIMUM_MACOS_VERSION}+ · Apple silicon &amp; Intel
                  </p>
                )}
              </div>
            }
          >
            <a href={DIRECT_DOWNLOAD_URL} onClick={markStarted} className={primaryButton}>
              <DownloadIcon /> Download for Mac
            </a>
          </OptionCard>
        </section>

        <p className="mt-6 text-center text-xs text-ink/55">
          A Pro purchase belongs to the version you bought it in: App Store purchases unlock the App
          Store version, web purchases unlock the direct download.{" "}
          <a href="/buy" className="underline hover:text-ink">
            Buy Pro for the direct version
          </a>
        </p>

        <section
          aria-labelledby="install-heading"
          className={`soft-panel mt-16 rounded-3xl p-6 sm:p-8 transition-shadow ${started ? "ring-2 ring-accent/40" : ""}`}
        >
          <h2 id="install-heading" className="text-lg font-semibold text-ink">
            {started ? "While it downloads" : "Installing the direct download takes a few seconds"}
          </h2>
          <ol className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {INSTALL_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent-light">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-ink">{step.title}</p>
                  <p className="mt-1 text-sm text-ink/60 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="faq-heading" className="mt-20 max-w-2xl mx-auto">
          <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight text-ink">
            Questions
          </h2>
          <div className="mt-6 divide-y divide-border">
            {FAQ.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
                  {item.question}
                  <span className="text-xl leading-none text-ink/40 transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </ContentLayout>
  );
}
