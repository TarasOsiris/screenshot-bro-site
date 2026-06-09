import type { Route } from "./+types/support";
import { ContentLayout } from "~/components/ContentLayout";
import { RedditGlyph, ThreadsGlyph, XGlyph } from "~/components/home/icons";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import {
  EARLY_ACCESS_EMAIL,
  REDDIT_COMMUNITY_URL,
  SITE_NAME,
  SITE_URL,
  THREADS_URL,
  X_PROFILE_URL,
} from "~/config/site";

const TITLE = `Support — ${SITE_NAME}`;
const DESCRIPTION = `Get help with ${SITE_NAME}. Contact us by email for any issues or feedback, or reach out on Reddit, X, and Threads.`;
const PAGE_URL = `${SITE_URL}/support`;

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([
  { name: "Support", path: "/support" },
]);

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: PAGE_URL },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ]);

const SOCIALS = [
  {
    label: "Reddit community",
    handle: "r/ScreenshotBro",
    href: REDDIT_COMMUNITY_URL,
    icon: <RedditGlyph />,
  },
  {
    label: "X",
    handle: "@soycastic",
    href: X_PROFILE_URL,
    icon: <XGlyph />,
  },
  {
    label: "Threads",
    handle: "@soycastic",
    href: THREADS_URL,
    icon: <ThreadsGlyph />,
  },
];

export default function Support() {
  return (
    <ContentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }}
      />
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Support
          </h1>
          <p className="mt-4 text-lg text-white/60 leading-relaxed">
            Hit a bug, have a question, or want to share feedback? We'd love to
            hear from you — and we read every message.
          </p>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono">
            Email us
          </p>
          <a
            href={`mailto:${EARLY_ACCESS_EMAIL}?subject=${encodeURIComponent(
              `${SITE_NAME} support`
            )}`}
            className="mt-4 inline-block text-2xl sm:text-3xl font-semibold text-white hover:text-accent transition-colors break-all"
          >
            {EARLY_ACCESS_EMAIL}
          </a>
          <p className="mt-4 text-sm text-white/55 leading-relaxed max-w-md mx-auto">
            For any issues or feedback, email us directly. To help us resolve
            things faster, include your macOS version and a screenshot or steps
            to reproduce when reporting a bug.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm uppercase tracking-[0.25em] text-white/40 font-mono text-center">
            Or find us online
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6 text-center hover:border-white/20 hover:bg-white/[0.07] transition-all"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.06] text-white/75">
                  {social.icon}
                </span>
                <span className="text-sm font-medium text-white/85">
                  {social.label}
                </span>
                <span className="text-xs text-white/50">{social.handle}</span>
              </a>
            ))}
          </div>
        </section>

        <p className="mt-12 text-center text-sm text-white/45">
          Looking for how-to guides? Check the{" "}
          <a
            href="/docs/help"
            className="text-white/70 hover:text-white/95 transition-colors underline underline-offset-4"
          >
            Help &amp; Documentation
          </a>
          .
        </p>
      </div>
    </ContentLayout>
  );
}
