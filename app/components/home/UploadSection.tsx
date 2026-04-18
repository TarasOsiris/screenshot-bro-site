import { APP_STORE_URL, PRIMARY_CTA_LABEL } from "~/config/site";
import { AppleLogo } from "~/components/home/icons";
import { SectionIntro } from "~/components/home/SectionIntro";

type Pillar = {
  title: string;
  description: string;
};

const PILLARS: Pillar[] = [
  {
    title: "Auto-detected display types",
    description:
      "Screenshot Bro reads each row's size (e.g. 1290×2796, 2064×2752) and maps it to the correct App Store Connect display type automatically.",
  },
  {
    title: "Locale matching, not guessing",
    description:
      "Your project locales are matched against the version's App Store localizations. Missing ones are flagged; matches are preselected.",
  },
  {
    title: "Preflight before Apple sees it",
    description:
      "An in-app preflight surfaces oversized images, missing locales, platform-incompatible display types, and version lock states before anything is uploaded.",
  },
  {
    title: "Replace in one pass",
    description:
      "Confirmed uploads delete the existing screenshots in each target set and refill them — no half-replaced sets, no manual cleanup.",
  },
];

const UPLOAD_ROWS = [
  {
    label: "iPhone 6.9\"",
    size: "1320×2868",
    locales: "8 locales",
    status: "done" as const,
  },
  {
    label: "iPhone 6.5\"",
    size: "1284×2778",
    locales: "8 locales",
    status: "uploading" as const,
    progress: 62,
  },
  {
    label: "iPad 13\"",
    size: "2064×2752",
    locales: "6 locales",
    status: "queued" as const,
  },
];

export function UploadSection({ href = APP_STORE_URL }: { href?: string }) {
  return (
    <section
      id="upload"
      className="relative py-28 px-6 border-t border-border-subtle scroll-mt-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] bg-accent/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -right-24 w-[360px] h-[360px] bg-mint/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <SectionIntro
          eyebrow="New · Upload"
          title="Ship screenshots straight to App Store Connect."
          description="Connect your App Store Connect API key once. After that, Screenshot Bro uploads rendered screenshots to the right app, version, display type, and locale — no more drag-and-drop in a browser tab."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="space-y-5">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="soft-panel rounded-2xl p-6"
                >
                  <h3 className="font-display text-base font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/[0.58]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={href}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm transition-all hover:shadow-[0_0_32px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
                {PRIMARY_CTA_LABEL}
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] border border-border text-white/[0.72] hover:text-white/[0.92] hover:border-white/20 text-sm transition-all"
              >
                See how it fits in the workflow
              </a>
            </div>
          </div>

          <UploadMock />
        </div>
      </div>
    </section>
  );
}

function UploadMock() {
  return (
    <div
      aria-hidden="true"
      className="relative rounded-2xl border border-border bg-surface-raised/80 backdrop-blur-xl shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] overflow-hidden"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-subtle bg-black/30">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 font-mono text-[11px] text-white/40 tracking-wide">
          Upload to App Store Connect
        </span>
      </div>

      <div className="p-5 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-mint shadow-inner shadow-black/30 flex items-center justify-center">
            <span className="font-display text-white font-bold">SB</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display text-sm font-semibold text-white truncate">
              Your App
            </p>
            <p className="font-mono text-[11px] text-white/45 truncate">
              com.yourco.yourapp · iOS 1.4.0 · Prepare for Submission
            </p>
          </div>
          <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-mint bg-mint/10 border border-mint/20 rounded-md px-2 py-1">
            Editable
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <MockMetric value="3" label="sets" />
          <MockMetric value="72" label="screenshots" />
          <MockMetric value="8" label="locales" />
        </div>

        <div className="space-y-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
            Upload plan
          </p>
          {UPLOAD_ROWS.map((row) => (
            <UploadRow key={row.label} row={row} />
          ))}
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/25">
          <CheckCircleIcon />
          <p className="text-[11px] text-white/70 leading-snug">
            Preflight passed · replacing existing screenshots across 8 locales
          </p>
        </div>
      </div>
    </div>
  );
}

function MockMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-white/[0.03] border border-border-subtle px-3 py-2">
      <p className="font-display text-lg font-semibold text-white tabular-nums">
        {value}
      </p>
      <p className="font-mono text-[10px] text-white/40 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

function UploadRow({
  row,
}: {
  row: (typeof UPLOAD_ROWS)[number];
}) {
  const isDone = row.status === "done";
  const isUploading = row.status === "uploading";
  return (
    <div className="rounded-lg bg-white/[0.02] border border-border-subtle px-3 py-2.5">
      <div className="flex items-center gap-2">
        <span
          className={`shrink-0 w-1.5 h-1.5 rounded-full ${
            isDone
              ? "bg-mint"
              : isUploading
                ? "bg-accent-light animate-pulse"
                : "bg-white/20"
          }`}
        />
        <p className="flex-1 text-xs font-medium text-white truncate">
          {row.label}
        </p>
        <span className="font-mono text-[10px] text-white/40 shrink-0">
          {row.size}
        </span>
      </div>
      <div className="mt-1.5 flex items-center gap-2">
        <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
          <div
            className={`h-full ${
              isDone
                ? "bg-mint"
                : isUploading
                  ? "bg-gradient-to-r from-accent to-accent-light"
                  : "bg-white/10"
            }`}
            style={{
              width: isDone
                ? "100%"
                : isUploading
                  ? `${row.progress}%`
                  : "0%",
            }}
          />
        </div>
        <span className="font-mono text-[10px] text-white/35 shrink-0 tabular-nums">
          {isDone
            ? "done"
            : isUploading
              ? `${row.progress}%`
              : row.locales}
        </span>
      </div>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent-light shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
