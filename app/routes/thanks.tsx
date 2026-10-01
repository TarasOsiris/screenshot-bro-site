import { useState } from "react";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/thanks";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";
import { DIRECT_DOWNLOAD_URL, REDEMPTION_URL_SCHEME, SITE_NAME } from "~/config/site";

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

export default function Thanks() {
  const { redeemUrl } = useLoaderData<typeof loader>();
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    if (!redeemUrl) return;
    await navigator.clipboard.writeText(redeemUrl);
    setCopied(true);
  };

  return (
    <ContentLayout>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
          Thanks for buying {SITE_NAME} Pro
        </h1>

        {redeemUrl ? (
          <>
            <p className="mt-4 text-lg text-ink/60 leading-relaxed">
              One last step: open the app to activate Pro on this Mac.
            </p>
            <a
              href={redeemUrl}
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-base transition-all hover:shadow-[0_0_48px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Open {SITE_NAME} to activate
            </a>

            <div className="mt-12 soft-panel rounded-2xl p-6 text-left space-y-4 text-sm text-ink/70 leading-relaxed">
              <p>
                <strong className="text-ink">Don't have the app yet?</strong>{" "}
                <a href={DIRECT_DOWNLOAD_URL} className="underline">Download it</a>, move it to
                Applications, open it once, then come back and click the button above.
              </p>
              <p>
                <strong className="text-ink">Button doesn't work?</strong> Copy the activation link
                and paste it in {SITE_NAME} ▸ Settings ▸ Activate Web Purchase.
              </p>
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex items-center rounded-xl border border-ink/10 bg-ink/5 px-4 py-2 font-medium text-ink/80 hover:bg-ink/10"
              >
                {copied ? "Copied" : "Copy activation link"}
              </button>
              <p className="text-xs text-ink/50">
                The link works once and expires after 60 minutes. We've also emailed it to you; if
                it expires, opening it sends a fresh one to the same address.
              </p>
            </div>
          </>
        ) : (
          <p className="mt-4 text-lg text-ink/60 leading-relaxed">
            Your activation link is in your receipt email. Open it on the Mac where{" "}
            {SITE_NAME} is installed.
          </p>
        )}
      </div>
    </ContentLayout>
  );
}
