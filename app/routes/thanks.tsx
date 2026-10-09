import { useState } from "react";
import { buttonClass } from "~/components/ui/Button";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/thanks";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";
import { DIRECT_DOWNLOAD_URL, REDEMPTION_URL_SCHEME, SITE_NAME, WEB_PURCHASE_EMAIL } from "~/config/site";

export function loader({ request }: Route.LoaderArgs) {
  const redeemUrl = new URL(request.url).searchParams.get("redeem_url") ?? "";
  // Only ever render our own app's deep link — never reflect an arbitrary URL into an href.
  const isValid = redeemUrl.startsWith(`${REDEMPTION_URL_SCHEME}://`);
  return { redeemUrl: isValid ? redeemUrl : null };
}

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: `Thank you — ${SITE_NAME} Pro` },
    { name: "robots", content: "noindex, nofollow" },
  ]);

const ACTIVATE_LOCATION = `${SITE_NAME} ▸ Settings ▸ Activate Web Purchase`;

function SuccessBadge() {
  return (
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint/15 text-mint">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </div>
  );
}

function HelpCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="soft-panel rounded-2xl p-5 text-left">
      <p className="font-medium text-ink">{title}</p>
      <div className="mt-2 text-sm text-ink/60 leading-relaxed">{children}</div>
    </div>
  );
}

function CopyLink({ link }: { link: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center rounded-xl border border-ink/10 bg-ink/5 px-4 py-2 text-sm font-medium text-ink/80 hover:bg-ink/10"
      >
        {state === "copied" ? "Copied ✓" : "Copy activation link"}
      </button>
      <span aria-live="polite" className="sr-only">
        {state === "copied" ? "Activation link copied" : ""}
      </span>
      {state === "failed" ? (
        <input
          readOnly
          value={link}
          onFocus={(event) => event.currentTarget.select()}
          aria-label="Activation link"
          className="mt-3 w-full rounded-lg border border-border bg-surface px-3 py-2 font-mono text-xs text-ink"
        />
      ) : null}
    </div>
  );
}

export default function Thanks() {
  const { redeemUrl } = useLoaderData<typeof loader>();

  return (
    <ContentLayout>
      <div className="max-w-3xl mx-auto text-center">
        <SuccessBadge />
        <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-ink">
          Thanks for buying Pro
        </h1>

        {redeemUrl ? (
          <>
            <p className="mt-4 text-lg text-ink/60 leading-relaxed">
              One last step: activate Pro on this Mac.
            </p>
            <a
              href={redeemUrl}
              className={buttonClass("primary", "lg", "mt-10")}
            >
              Open {SITE_NAME}
            </a>
            <p className="mt-3 text-xs text-ink/60">
              The link works once and expires after 60 minutes.
            </p>

            <h2 className="mt-16 text-sm font-semibold uppercase tracking-wider text-ink/60">
              Didn't open?
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <HelpCard title="No app yet">
                <a href={DIRECT_DOWNLOAD_URL} className="underline hover:text-ink">Download it</a>,
                move it to Applications and open it once. Then come back and click{" "}
                <span className="text-ink/80">Open {SITE_NAME}</span> again.
              </HelpCard>
              <HelpCard title="Button does nothing">
                Copy the link and paste it into {ACTIVATE_LOCATION}.
                <CopyLink link={redeemUrl} />
              </HelpCard>
              <HelpCard title="Later, or another Mac">
                The link is also in your receipt email. If it has expired, opening it emails you a
                fresh one.
              </HelpCard>
            </div>
          </>
        ) : (
          <>
            <p className="mt-4 text-lg text-ink/60 leading-relaxed">
              Your activation link is in your receipt email. Open it on the Mac where {SITE_NAME} is
              installed, or paste it into {ACTIVATE_LOCATION}.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={DIRECT_DOWNLOAD_URL}
                className="inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-6 py-3 font-semibold text-ink hover:bg-ink/10"
              >
                Download {SITE_NAME}
              </a>
            </div>
            <p className="mt-8 text-sm text-ink/60">
              Can't find the email? Write to{" "}
              <a href={`mailto:${WEB_PURCHASE_EMAIL}`} className="underline hover:text-ink">
                {WEB_PURCHASE_EMAIL}
              </a>
              .
            </p>
          </>
        )}
      </div>
    </ContentLayout>
  );
}
