import { redirect } from "react-router";
import type { Route } from "./+types/buy";
import { ContentLayout } from "~/components/ContentLayout";
import { ButtonLink } from "~/components/ui/Button";
import { Panel } from "~/components/ui/Panel";
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
      <div className="max-w-2xl mx-auto text-center">
        <img
          src="/web-app-manifest-512x512.png"
          alt=""
          width={96}
          height={96}
          className="mx-auto h-24 w-24 rounded-[22px] shadow-[0_20px_60px_-20px_var(--color-accent-glow)]"
        />
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-accent-light font-mono">
          {SITE_NAME} Pro
        </p>
        <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight text-balance">
          Checkout is temporarily unavailable
        </h1>
        <p className="mt-5 text-lg text-ink/60 leading-relaxed text-balance">
          We couldn't open the {SITE_NAME} Pro checkout just now. Please try again in a few minutes —
          nothing has been charged.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <ButtonLink href="/buy" size="lg">
            Try again
          </ButtonLink>
          <ButtonLink href="/download" variant="secondary" size="lg">
            Back to download
          </ButtonLink>
        </div>
        <Panel padding="md" className="mt-14 text-sm text-ink/60 leading-relaxed">
          Still stuck? Email{" "}
          <a href={`mailto:${WEB_PURCHASE_EMAIL}`} className="text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink/60">
            {WEB_PURCHASE_EMAIL}
          </a>{" "}
          or ask on{" "}
          <a href={DISCORD_INVITE_URL} className="text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink/60">
            Discord
          </a>
          .
        </Panel>
      </div>
    </ContentLayout>
  );
}
