import { useEffect, useState } from "react";
import { buttonClass } from "~/components/ui/Button";
import { Panel } from "~/components/ui/Panel";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/download";
import { ContentLayout } from "~/components/ContentLayout";
import { AppleLogo, WindowsLogo } from "~/components/home/icons";
import { ArrowUpRightIcon, DownloadIcon } from "~/components/home/small-icons";
import { loadLatestRelease, loadLatestWindowsRelease } from "~/lib/latest-release.server";
import { mergeMeta } from "~/config/meta";
import { LOCALES } from "~/config/localization";
import {
  appStoreProductUrl,
  DIRECT_DOWNLOAD_URL,
  HOMEBREW_INSTALL_COMMAND,
  HOMEBREW_TAP_URL,
  MINIMUM_IPADOS_VERSION,
  MINIMUM_MACOS_VERSION,
  SITE_NAME,
  SITE_URL,
  WEB_DEMO_URL,
  WEB_PURCHASE_EMAIL,
  WINDOWS_DOWNLOAD_URL,
  WINDOWS_REQUIREMENT,
} from "~/config/site";

// Home and blog CTAs pass the visitor's storefront as ?store=, so the App Store
// button opens their own country's listing. Anything unknown falls back to us.
const STOREFRONTS = new Set(LOCALES.map((locale) => locale.storefront));

export async function loader({ request }: Route.LoaderArgs) {
  const store = new URL(request.url).searchParams.get("store") ?? "";
  const [release, windows] = await Promise.all([loadLatestRelease(), loadLatestWindowsRelease()]);
  return {
    release,
    windows,
    appStoreUrl: appStoreProductUrl(STOREFRONTS.has(store) ? store : undefined),
  };
}

export const meta: Route.MetaFunction = ({ matches }) => {
  const title = `Download ${SITE_NAME} for Mac, iPad, iPhone and Windows`;
  const description = `Download ${SITE_NAME} for App Store and Google Play screenshots on Mac, iPad, iPhone or Windows. Free to start, with Pro in the app or once on the web.`;
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

// The visitor's device, read in the browser after hydration: the page is cached
// for everyone, so the server can't tailor it. iPadOS reports itself as a Mac;
// touch points tell the two apart.
type Platform = "mac" | "iphone" | "ipad" | "windows" | "other";

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/iPhone|iPod/.test(ua)) return "iphone";
  if (/iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return "ipad";
  if (/Windows/.test(ua)) return "windows";
  if (/Macintosh|Mac OS X/.test(ua)) return "mac";
  return "other";
}

type Installer = "mac" | "windows";
type Option = Installer | "appStore";
type InstallTab = "mac" | "homebrew" | "windows";

// Devices none of the apps run on have no entry, so every option stays primary.
const RECOMMENDED: Partial<Record<Platform, { options: Option[]; label: string }>> = {
  mac: { options: ["appStore", "mac"], label: "For this Mac" },
  iphone: { options: ["appStore"], label: "For this iPhone" },
  ipad: { options: ["appStore"], label: "For this iPad" },
  windows: { options: ["windows"], label: "For this PC" },
};

const INSTALLERS: Record<InstallTab, { label: string; command?: string; steps: { title: string; body: string }[] }> = {
  mac: {
    label: "Mac direct download",
    steps: [
      { title: "Open the download", body: "Double-click ScreenshotBro.dmg in your Downloads folder." },
      { title: "Drag to Applications", body: `Drag ${SITE_NAME} onto the Applications folder in the window that opens.` },
      { title: "Launch it", body: `Open ${SITE_NAME} from Applications. Updates arrive automatically from then on.` },
    ],
  },
  homebrew: {
    label: "Homebrew",
    command: HOMEBREW_INSTALL_COMMAND,
    steps: [
      {
        title: "Run the command",
        body: "Paste it into Terminal. It installs the same notarized app as the direct download.",
      },
      { title: "Launch it", body: `Open ${SITE_NAME} from Applications.` },
      {
        title: "Stay up to date",
        body: "The app updates itself, so Homebrew leaves it alone. To update through Homebrew anyway, run brew upgrade --cask --greedy screenshot-bro.",
      },
    ],
  },
  windows: {
    label: "Windows beta",
    steps: [
      { title: "Run the installer", body: "Double-click ScreenshotBro-Setup.exe in your Downloads folder." },
      { title: "Get past SmartScreen", body: "The beta isn't code-signed yet, so Windows may stop it. Choose More info, then Run anyway." },
      { title: "Launch it", body: `Finish the installer, then open ${SITE_NAME} from the Start menu. It updates itself from then on.` },
    ],
  },
};

const HIGHLIGHTS = [
  "App Store and Google Play sizes",
  "Upload to App Store Connect and Google Play",
  "Free tier with no time limit",
];

const FAQ = [
  {
    question: "Which one should I pick?",
    answer:
      "On a Mac, either: the app is identical. Pick the App Store if you also want it on iPad or iPhone, or prefer Apple to handle billing. Pick the direct download if you'd rather buy Pro once on the web. On a Windows PC, get the Windows beta.",
  },
  {
    question: "Does it make Google Play screenshots too?",
    answer:
      "Yes, in every version. Android phone and tablet rows sit next to your iPhone, iPad and Mac rows in the same project, sized for what Google Play accepts, and a bundled template covers the Play feature graphic. Upload the finished set straight to App Store Connect and Google Play from inside the app, or export it to folders.",
  },
  {
    question: "Can I switch between the App Store and direct versions?",
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
    question: "What's in the Windows beta?",
    answer: `The same editor and project format as the Mac app, for ${WINDOWS_REQUIREMENT}. It updates itself and sells Pro once on our site like the direct Mac download; a web purchase activates one copy, Mac or Windows. iCloud sync and a few Mac features aren't there yet. Tell us what's missing or broken at ${WEB_PURCHASE_EMAIL}.`,
  },
  {
    question: "I'm on Linux, a Chromebook or Android. Can I use it?",
    answer:
      "There's no app for those yet, but the free web demo runs in any modern browser: the same editor as the Windows beta, with one project.",
  },
  {
    question: "Can I install it with Homebrew?",
    answer: `Yes. Run ${HOMEBREW_INSTALL_COMMAND} in Terminal. It installs the direct-download version from our own tap, and the app keeps itself up to date after that. Remove it with brew uninstall --cask screenshot-bro.`,
  },
  {
    question: "Is the download safe?",
    answer:
      "The Mac download is signed with our Apple Developer ID and notarized by Apple, so macOS checks it before the first launch — no security warnings to click through. The Windows beta isn't code-signed yet, so Windows SmartScreen asks before the first run: choose More info, then Run anyway.",
  },
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-mint" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

function CommandLine({ command }: { command: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  return (
    <div className="flex items-stretch overflow-hidden rounded-xl border border-ink/10 bg-ink/[0.04]">
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap px-3 py-2 font-mono text-xs text-ink/80">
        <span className="select-none text-ink/40">$ </span>
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 border-l border-ink/10 px-3 text-xs font-semibold text-ink/70 hover:bg-ink/[0.06] hover:text-ink"
        aria-label={`Copy ${command}`}
        data-placement="download-page-homebrew-copy"
      >
        <span aria-live="polite">{state === "copied" ? "Copied ✓" : state === "failed" ? "Select & copy" : "Copy"}</span>
      </button>
    </div>
  );
}

function OptionCard({
  icon,
  title,
  platforms,
  rows,
  recommended,
  children,
  footer,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  platforms: string;
  rows: string[];
  recommended?: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <Panel className={`relative flex flex-col text-left ${recommended ? "ring-2 ring-accent/60" : ""}`}>
      {recommended ? (
        <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-[0_6px_20px_-6px_var(--color-accent-glow)]">
          {recommended}
        </span>
      ) : null}
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
      <div className="mt-7 flex flex-col">{children}</div>
      <div className="mt-4 min-h-10 text-center text-xs text-ink/55 leading-relaxed" aria-live="polite">
        {footer}
      </div>
    </Panel>
  );
}

// A direct download's footer: its details, until the visitor starts it.
function DownloadFooter({
  started,
  retryUrl,
  placement,
  children,
}: {
  started: boolean;
  retryUrl: string;
  placement: string;
  children: React.ReactNode;
}) {
  if (!started) return <p>{children}</p>;
  return (
    <p className="text-ink/80">
      Your download is starting…
      <br />
      <a href={retryUrl} className="underline text-ink/60 hover:text-ink" data-placement={placement}>
        Didn't start? Try again
      </a>
    </p>
  );
}

export default function Download() {
  const { release, windows, appStoreUrl } = useLoaderData<typeof loader>();
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [started, setStarted] = useState<Installer | null>(null);
  const [installer, setInstaller] = useState<InstallTab>("mac");

  useEffect(() => {
    const detected = detectPlatform();
    setPlatform(detected);
    if (detected === "windows") setInstaller("windows");
  }, []);

  const start = (which: Installer) => {
    setStarted(which);
    setInstaller(which);
  };

  const showHomebrew = () => {
    setInstaller("homebrew");
    document.getElementById("install-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Until the platform is known every option keeps a primary button; once it
  // is, the ones for this device lead.
  const recommendation = platform ? RECOMMENDED[platform] : undefined;
  const leads = (option: Option) => recommendation?.options.includes(option) ?? false;
  const buttonFor = (option: Option) =>
    buttonClass(!recommendation || leads(option) ? "primary" : "secondary", "lg", "w-full");
  const badgeFor = (option: Option) => (leads(option) ? recommendation?.label : undefined);

  return (
    <ContentLayout>
      <div className="max-w-6xl mx-auto">
        <section className="text-center max-w-3xl mx-auto">
          <img
            src="/web-app-manifest-512x512.png"
            alt=""
            width={112}
            height={112}
            className="mx-auto h-24 w-24 sm:h-28 sm:w-28 rounded-[26px] shadow-[0_20px_60px_-20px_var(--color-accent-glow)]"
          />
          <h1 className="mt-8 font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight">
            Get {SITE_NAME}
          </h1>
          <p className="mt-4 text-lg text-ink/60 leading-relaxed text-balance">
            Design, localize and upload App Store and Google Play screenshots on Mac, iPad, iPhone or
            Windows. Every version is free to start — pick the one for your device.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="In every version">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="soft-pill flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-ink/70"
              >
                <Check /> {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Ways to get it" className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <OptionCard
            icon={<AppleLogo />}
            title="App Store"
            platforms="Mac, iPad and iPhone"
            recommended={badgeFor("appStore")}
            rows={[
              "Updates through the App Store",
              "Buy Pro in the app with your Apple Account — lifetime or subscription",
              "iCloud sync between your Mac, iPad and iPhone",
            ]}
            footer={<>macOS {MINIMUM_MACOS_VERSION}+ · iOS and iPadOS {MINIMUM_IPADOS_VERSION}+</>}
          >
            <a href={appStoreUrl} className={buttonFor("appStore")} data-placement="download-page">
              <AppleLogo /> Download on the App Store
            </a>
          </OptionCard>

          <OptionCard
            icon={<DownloadIcon />}
            title="Direct download"
            platforms="Mac"
            recommended={badgeFor("mac")}
            rows={[
              "Updates itself, right inside the app",
              "Buy Pro once on our site — card, Apple Pay or Google Pay, no account",
              "Signed with our Developer ID and notarized by Apple",
            ]}
            footer={
              <DownloadFooter started={started === "mac"} retryUrl={DIRECT_DOWNLOAD_URL} placement="download-page-retry">
                {release && (
                  <>
                    Version {release.version} · {formatSize(release.sizeBytes)} · {formatDate(release.publishedAt)}
                    <br />
                  </>
                )}
                macOS {MINIMUM_MACOS_VERSION}+ · Apple silicon &amp; Intel
              </DownloadFooter>
            }
          >
            <a
              href={DIRECT_DOWNLOAD_URL}
              onClick={() => start("mac")}
              className={buttonFor("mac")}
              data-placement="download-page"
            >
              <DownloadIcon /> Download for Mac
            </a>
            <button
              type="button"
              onClick={showHomebrew}
              className="mt-3 self-center text-xs font-medium text-ink/60 underline hover:text-ink"
              data-placement="download-page-homebrew"
            >
              Or install with Homebrew
            </button>
          </OptionCard>

          <OptionCard
            icon={<WindowsLogo className="h-5 w-5" />}
            title={
              <>
                Windows
                <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 align-middle text-xs font-semibold uppercase tracking-wider text-accent-light">
                  Beta
                </span>
              </>
            }
            platforms={WINDOWS_REQUIREMENT}
            recommended={badgeFor("windows")}
            rows={[
              "The same editor and project format as the Mac app",
              "Updates itself; Pro is a one-time purchase on our site",
              "In beta: no iCloud sync yet, and a few Mac features are still to come",
            ]}
            footer={
              <DownloadFooter
                started={started === "windows"}
                retryUrl={WINDOWS_DOWNLOAD_URL}
                placement="download-page-windows-retry"
              >
                {windows
                  ? `Beta ${windows.version} · ${formatSize(windows.sizeBytes)} · ${formatDate(windows.publishedAt)}`
                  : "Beta"}
                <br />
                SmartScreen: More info ▸ Run anyway
              </DownloadFooter>
            }
          >
            <a
              href={WINDOWS_DOWNLOAD_URL}
              onClick={() => start("windows")}
              className={buttonFor("windows")}
              data-placement="download-page-windows"
            >
              <WindowsLogo /> Download for Windows
            </a>
          </OptionCard>
        </section>

        {/* Below the cards, so its arrival after hydration doesn't push them down. */}
        {platform === "other" ? (
          <Panel as="section" padding="sm" className="mt-6 rounded-2xl! sm:px-6 flex flex-col sm:flex-row sm:items-center gap-4 text-left">
            <p className="flex-1 text-sm text-ink/70 leading-relaxed">
              <span className="font-semibold text-ink">No app for this device yet.</span> {SITE_NAME} runs on
              Mac, iPad, iPhone and Windows. Try the free web demo in your browser meanwhile, or get it on one
              of those above.
            </p>
            <a
              href={WEB_DEMO_URL}
              target="_blank"
              rel="noopener"
              className={buttonClass("secondary", "sm", "shrink-0")}
              data-placement="download-page-web-demo"
            >
              Open the web demo <ArrowUpRightIcon />
            </a>
          </Panel>
        ) : null}

        <div className="mt-6 space-y-2 text-center text-xs text-ink/55 leading-relaxed text-balance">
          <p>
            A Pro purchase belongs to where you bought it: App Store purchases unlock the App Store version,
            web purchases unlock the direct Mac download or the Windows beta.{" "}
            <a href="/pricing" className="underline hover:text-ink">
              Compare Free and Pro
            </a>
            {" · "}
            <a href="/buy" className="underline hover:text-ink" data-placement="download-page">
              Buy Pro on the web
            </a>
          </p>
          {platform !== "other" ? (
            <p>
              On Linux, a Chromebook or Android?{" "}
              <a
                href={WEB_DEMO_URL}
                target="_blank"
                rel="noopener"
                className="underline hover:text-ink"
                data-placement="download-page-web-demo"
              >
                Try the free web demo
              </a>
            </p>
          ) : null}
        </div>

        <section
          aria-labelledby="install-heading"
          className={`soft-panel mt-14 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto transition-shadow ${
            started ? "ring-2 ring-accent/40" : ""
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 id="install-heading" className="text-lg font-semibold text-ink">
              {started ? "While it downloads" : "Installing takes a few seconds"}
            </h2>
            <div role="tablist" aria-label="Installer" className="inline-flex flex-wrap self-start rounded-xl bg-ink/[0.05] p-1">
              {(Object.keys(INSTALLERS) as InstallTab[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`install-tab-${id}`}
                  aria-selected={installer === id}
                  aria-controls="install-steps"
                  onClick={() => setInstaller(id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                    installer === id ? "bg-surface-raised text-ink shadow-sm" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {INSTALLERS[id].label}
                </button>
              ))}
            </div>
          </div>
          <div id="install-steps" role="tabpanel" aria-labelledby={`install-tab-${installer}`} className="mt-6">
            {INSTALLERS[installer].command ? (
              <div className="mb-6">
                <CommandLine command={INSTALLERS[installer].command} />
              </div>
            ) : null}
            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {INSTALLERS[installer].steps.map((step, index) => (
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
          </div>
          <p className="mt-6 text-xs text-ink/55">
            The App Store version installs like any other app — nothing to do here.
            {installer === "homebrew" ? (
              <>
                {" "}
                The cask lives in{" "}
                <a href={HOMEBREW_TAP_URL} target="_blank" rel="noopener" className="underline hover:text-ink">
                  our Homebrew tap
                </a>
                .
              </>
            ) : null}
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
