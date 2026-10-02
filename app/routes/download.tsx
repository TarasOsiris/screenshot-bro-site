import { useState } from "react";
import { buttonClass } from "~/components/ui/Button";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/download";
import { ContentLayout } from "~/components/ContentLayout";
import { AppleLogo } from "~/components/home/icons";
import { loadLatestRelease } from "~/lib/latest-release.server";
import { mergeMeta } from "~/config/meta";
import {
  APP_STORE_URL,
  DIRECT_DOWNLOAD_URL,
  MINIMUM_MACOS_VERSION,
  SITE_NAME,
  SITE_URL,
  WEB_PURCHASE_EMAIL,
} from "~/config/site";

export async function loader() {
  return { release: await loadLatestRelease() };
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

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-mint" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

const primaryButton = buttonClass("primary", "lg");
const secondaryButton = buttonClass("secondary", "md", "text-base");

function OptionCard({ title, rows, children }: { title: string; rows: string[]; children: React.ReactNode }) {
  return (
    <div className="soft-panel rounded-2xl p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <ul className="mt-4 space-y-3 flex-1">
        {rows.map((row) => (
          <li key={row} className="flex gap-2.5 text-sm text-ink/70 leading-relaxed">
            <Check /> {row}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col">{children}</div>
    </div>
  );
}

export default function Download() {
  const { release } = useLoaderData<typeof loader>();
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
            {SITE_NAME} for Mac
          </h1>
          <p className="mt-4 text-lg text-ink/60 leading-relaxed max-w-2xl mx-auto text-balance">
            Design, localize and upload App Store and Google Play screenshots. Free to start.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a href={DIRECT_DOWNLOAD_URL} onClick={markStarted} className={primaryButton}>
              <DownloadIcon /> Download for Mac
            </a>
            <div aria-live="polite" className="min-h-5 text-sm">
              {started ? (
                <p className="text-ink/80">
                  Your download is starting…{" "}
                  <a href={DIRECT_DOWNLOAD_URL} className="underline text-ink/60 hover:text-ink">
                    Didn't start? Try again
                  </a>
                </p>
              ) : release ? (
                <p className="text-ink/60">
                  Version {release.version} · {formatSize(release.sizeBytes)} · {formatDate(release.publishedAt)}
                </p>
              ) : null}
            </div>
            <p className="text-xs text-ink/50">
              macOS {MINIMUM_MACOS_VERSION} or later · Apple silicon &amp; Intel · Notarized by Apple
            </p>
            <a href={APP_STORE_URL} className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink/70 underline hover:text-ink">
              <AppleLogo /> Or get it on the Mac App Store
            </a>
          </div>
        </section>

        <section
          aria-labelledby="install-heading"
          className={`soft-panel mt-16 rounded-3xl p-6 sm:p-8 transition-shadow ${started ? "ring-2 ring-accent/40" : ""}`}
        >
          <h2 id="install-heading" className="text-lg font-semibold text-ink">
            {started ? "While it downloads" : "Installing takes a few seconds"}
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

        <section aria-labelledby="compare-heading" className="mt-20">
          <h2 id="compare-heading" className="text-center text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
            Two ways to get it
          </h2>
          <p className="mt-3 text-center text-ink/60">
            Same app, same features, same free tier and iCloud sync. Only updates and billing differ.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <OptionCard
              title="Mac App Store"
              rows={["Updates through the App Store", "Buy Pro in the app with your Apple Account", "Also on iPad and iPhone"]}
            >
              <a href={APP_STORE_URL} className={secondaryButton}>
                <AppleLogo /> View on the App Store
              </a>
            </OptionCard>
            <OptionCard
              title="Direct download"
              rows={[
                "Updates itself, right inside the app",
                "Buy Pro on our site — card, Apple Pay or Google Pay, no account",
                "Mac only",
              ]}
            >
              <a href={DIRECT_DOWNLOAD_URL} onClick={markStarted} className={secondaryButton}>
                <DownloadIcon /> Download .dmg
              </a>
              <a href="/buy" className="mt-3 text-center text-sm text-ink/70 underline hover:text-ink">
                Buy Pro for the direct version
              </a>
            </OptionCard>
          </div>
          <p className="mt-6 text-center text-xs text-ink/50">
            A Pro purchase belongs to the version you bought it in: App Store purchases unlock the App
            Store version, web purchases unlock the direct download.
          </p>
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
