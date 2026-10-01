import { redirect } from "react-router";
import type { Route } from "./+types/buy";
import { ContentLayout } from "~/components/ContentLayout";
import { mergeMeta } from "~/config/meta";
import { DISCORD_INVITE_URL, SITE_NAME, WEB_PURCHASE_EMAIL } from "~/config/site";

// The app's "Buy Pro" button lands here, so the RevenueCat Web Purchase Link can change
// without an app release. Set WEB_CHECKOUT_URL in Coolify.
export function loader() {
  const checkoutUrl = process.env.WEB_CHECKOUT_URL;
  if (checkoutUrl) throw redirect(checkoutUrl, 302);
  return null;
}

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: `Checkout — ${SITE_NAME} Pro` },
    { name: "robots", content: "noindex, nofollow" },
  ]);

// Only rendered when checkout isn't configured: bouncing to /download, as before, left
// someone who had just clicked Buy Pro in the app with no idea what went wrong.
export default function Buy() {
  return (
    <ContentLayout>
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
          Checkout is temporarily unavailable
        </h1>
        <p className="mt-4 text-ink/60 leading-relaxed">
          We couldn't open the {SITE_NAME} Pro checkout just now. Please try again in a few minutes —
          nothing has been charged.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/buy"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent-light px-6 py-3 font-semibold text-white"
          >
            Try again
          </a>
          <a
            href="/download"
            className="inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-6 py-3 font-semibold text-ink hover:bg-ink/10"
          >
            Back to download
          </a>
        </div>
        <p className="mt-8 text-sm text-ink/50">
          Still stuck? Email{" "}
          <a href={`mailto:${WEB_PURCHASE_EMAIL}`} className="underline hover:text-ink">
            {WEB_PURCHASE_EMAIL}
          </a>{" "}
          or ask on{" "}
          <a href={DISCORD_INVITE_URL} className="underline hover:text-ink">
            Discord
          </a>
          .
        </p>
      </div>
    </ContentLayout>
  );
}
