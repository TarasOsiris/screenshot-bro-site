import type { Route } from "./+types/download";
import { ContentLayout } from "~/components/ContentLayout";
import { AppleLogo } from "~/components/home/icons";
import { mergeMeta } from "~/config/meta";
import {
  APP_STORE_URL,
  DIRECT_DOWNLOAD_URL,
  MINIMUM_MACOS_VERSION,
  SITE_NAME,
  SITE_URL,
} from "~/config/site";

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

export default function Download() {
  return (
    <ContentLayout>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
          Download {SITE_NAME}
        </h1>
        <p className="mt-4 text-lg text-ink/60 leading-relaxed">
          Free to start. Requires macOS {MINIMUM_MACOS_VERSION} or later.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div className="soft-panel rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-ink">Mac App Store</h2>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed flex-1">
              Updates through the App Store. Buy Pro in the app with your Apple Account, and use it
              on iPad too.
            </p>
            <a
              href={APP_STORE_URL}
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold"
            >
              <AppleLogo /> App Store
            </a>
          </div>

          <div className="soft-panel rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-ink">Direct download</h2>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed flex-1">
              Notarized by Apple, updates itself in the app. Buy Pro on our site with a card, Apple
              Pay or Google Pay — no account needed.
            </p>
            <a
              href={DIRECT_DOWNLOAD_URL}
              className="mt-6 inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-6 py-3 font-semibold text-ink hover:bg-ink/10"
            >
              Download .dmg
            </a>
            <a href="/buy" className="mt-3 text-center text-sm text-ink/70 underline">
              Buy Pro for the direct version
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink/50">
          A Pro purchase belongs to the version you bought it in: App Store purchases unlock the App
          Store version, web purchases unlock the direct download.
        </p>
      </div>
    </ContentLayout>
  );
}
