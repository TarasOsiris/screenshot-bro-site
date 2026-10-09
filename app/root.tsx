import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useLocation,
  useRouteError,
} from "react-router";

import type { Route } from "./+types/root";
import { SiteNav } from "~/components/home/SiteNav";
import { SiteFooter } from "~/components/home/SiteFooter";
import { ButtonLink } from "~/components/ui/Button";
import {
  APP_SCREENSHOTS,
  APP_STORE_APP_ID,
  APP_STORE_URL,
  FEATURES,
  FAQS,
  MINIMUM_IPADOS_VERSION,
  MINIMUM_MACOS_VERSION,
  NINEVA_STUDIOS_NAME,
  NINEVA_STUDIOS_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  DISCORD_INVITE_URL,
  REDDIT_COMMUNITY_URL,
  THREADS_URL,
  TWITTER_HANDLE,
  WORKFLOW_STEPS,
  X_PROFILE_URL,
} from "~/config/site";
import {
  LOCALES,
  buildOgLocaleMeta,
  getLocaleFromPath,
  getLocaleInfo,
  isLocaleCode,
  localizedPath,
  stripLocale,
} from "~/config/localization";
import { hasTranslations } from "~/config/localized-routes";
import { ConsentBanner } from "~/components/ConsentBanner";
import { GA_ID, gtagBootstrapScript } from "~/lib/consent";
import { useOutboundClickTracking } from "~/lib/analytics";
// Self-hosted fonts, bundled into the stylesheet (Google Fonts was a render-
// blocking third-party request). Familjen Grotesk ships upright only — the
// handful of italic runs use the browser's synthetic oblique.
import "@fontsource-variable/familjen-grotesk/wght.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import familjenLatinUrl from "@fontsource-variable/familjen-grotesk/files/familjen-grotesk-latin-wght-normal.woff2?url";
import { serializeHomeCopy, type RootLoaderData } from "~/config/home-copy";
import { getHomeCopy } from "~/config/home-copy.server";
import "./app.css";

export const SITE_TITLE = `${SITE_NAME} — App Store & Google Play Screenshots`;
// Kept in step with --color-surface in app.css; ThemeToggle carries the same pair.
const THEME_COLORS = { light: "#fbfaf8", dark: "#08080c" } as const;
export const SOCIAL_IMAGE = `${SITE_URL}/og-image.png`;

const SOFTWARE_APP_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: SITE_NAME,
  alternateName: "ScreenshotBro",
  operatingSystem: [
    `macOS ${MINIMUM_MACOS_VERSION} or later`,
    `iPadOS ${MINIMUM_IPADOS_VERSION} or later`,
    `iOS ${MINIMUM_IPADOS_VERSION} or later`,
  ],
  applicationCategory: "DesignApplication",
  applicationSubCategory: "App Store screenshot generator",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  image: SOCIAL_IMAGE,
  screenshot: APP_SCREENSHOTS.map((screenshot) => ({
    "@type": "ImageObject",
    url: `${SITE_URL}${screenshot.src}`,
    caption: screenshot.caption,
    description: screenshot.alt,
  })),
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Apple App Store ID",
    value: APP_STORE_APP_ID,
  },
  author: {
    "@type": "Person",
    name: "Taras Leskiv",
    url: X_PROFILE_URL,
  },
  publisher: {
    "@type": "Person",
    name: "Taras Leskiv",
    url: X_PROFILE_URL,
  },
  // The download is free; Pro is an optional in-app or web purchase whose
  // price varies by storefront, so no Pro price is asserted here.
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: "0.00",
    priceCurrency: "USD",
    description: "Free download with a free tier; Pro is an optional in-app purchase.",
    url: `${SITE_URL}/pricing`,
  },
  isAccessibleForFree: true,
  softwareRequirements: `macOS ${MINIMUM_MACOS_VERSION} or later, iPadOS ${MINIMUM_IPADOS_VERSION} or later, or iOS ${MINIMUM_IPADOS_VERSION} or later`,
  keywords: SITE_KEYWORDS,
  sameAs: [APP_STORE_URL, X_PROFILE_URL, THREADS_URL, REDDIT_COMMUNITY_URL, DISCORD_INVITE_URL],
  featureList: FEATURES.map((feature) => feature.title),
});

const WEB_SITE_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
});

const ORGANIZATION_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: NINEVA_STUDIOS_NAME,
  url: NINEVA_STUDIOS_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-dark.svg`,
  },
  founder: {
    "@type": "Person",
    name: "Taras Leskiv",
    url: X_PROFILE_URL,
  },
  sameAs: [
    NINEVA_STUDIOS_URL,
    X_PROFILE_URL,
    THREADS_URL,
    REDDIT_COMMUNITY_URL,
    DISCORD_INVITE_URL,
  ],
});

const FAQ_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const HOW_TO_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to create App Store and Google Play screenshots with Screenshot Bro",
  description:
    "A four-step workflow for designing, localizing, exporting, and uploading App Store and Google Play screenshots from a native Mac, iPad and iPhone app.",
  totalTime: "PT20M",
  tool: [{ "@type": "HowToTool", name: SITE_NAME }],
  supply: [
    { "@type": "HowToSupply", name: "Raw app screenshots (PNG or JPEG)" },
    { "@type": "HowToSupply", name: "App Store Connect API key (optional, for direct upload)" },
  ],
  step: WORKFLOW_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
    url: `${SITE_URL}/#workflow`,
  })),
});

const SOCIAL_IMAGE_ALT =
  "Screenshot Bro — native Mac, iPad and iPhone app for designing App Store and Google Play screenshots with device frames, gradients, and localization";

export const meta: Route.MetaFunction = ({ error }) => {
  // Error pages render the root ErrorBoundary, so only root meta applies. They
  // must not inherit the home page's title and description, nor be indexed.
  if (error) {
    const notFound = isRouteErrorResponse(error) && error.status === 404;
    return [
      { title: notFound ? `Page not found — ${SITE_NAME}` : `Something went wrong — ${SITE_NAME}` },
      {
        name: "description",
        content: notFound
          ? `This page doesn't exist on ${SITE_NAME}'s site. Head to the home page, the blog or the docs to find App Store screenshot guides and help.`
          : `${SITE_NAME} hit an unexpected error. Please try again in a moment.`,
      },
      { name: "robots", content: "noindex" },
    ];
  }
  return DEFAULT_META;
};

const DEFAULT_META: Route.MetaDescriptors = [
  { title: SITE_TITLE },
  { name: "description", content: SITE_DESCRIPTION },
  ...buildOgLocaleMeta(),
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: SITE_NAME },
  { property: "og:title", content: SITE_TITLE },
  { property: "og:description", content: SITE_DESCRIPTION },
  { property: "og:url", content: SITE_URL },
  { property: "og:image", content: SOCIAL_IMAGE },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:alt", content: SOCIAL_IMAGE_ALT },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:site", content: TWITTER_HANDLE },
  { name: "twitter:creator", content: TWITTER_HANDLE },
  { name: "twitter:title", content: SITE_TITLE },
  { name: "twitter:description", content: SITE_DESCRIPTION },
  { name: "twitter:image", content: SOCIAL_IMAGE },
  { name: "twitter:image:alt", content: SOCIAL_IMAGE_ALT },
];

const CANONICAL_HOST = "screenshotbro.app";

// Top-level directories shipped from public/. react-router-serve's static handler
// 301s a bare directory request to its trailing-slash form (/assets -> /assets/),
// so stripping the trailing slash back off would ping-pong forever. Every other
// path is a route, where the no-slash form is the canonical one.
const STATIC_DIR_SEGMENTS = new Set([
  "assets",
  "docs-help",
  "screenshot",
  "screenshots",
  "showcase",
  "showcases",
]);

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  // Forwarded host can carry the original public host behind a proxy.
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = (forwardedHost ?? url.host).toLowerCase();
  if (host !== CANONICAL_HOST && host.endsWith("." + CANONICAL_HOST)) {
    const proto =
      request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
    const target = `${proto}://${CANONICAL_HOST}${url.pathname}${url.search}`;
    throw redirect(target, 301);
  }
  // /docs/help/ and /docs/help render the same page; send crawlers to the one
  // the canonical tag points at instead of letting both stay live.
  const segments = url.pathname.split("/").filter(Boolean);
  if (
    url.pathname !== "/" &&
    url.pathname.endsWith("/") &&
    !STATIC_DIR_SEGMENTS.has(segments[0])
  ) {
    throw redirect(`/${segments.join("/")}${url.search}`, 301);
  }
  // Only the requested locale's nav, footer and home copy goes to the client
  // (read back with useHomeCopy); English already ships as the fallback.
  const locale = getLocaleFromPath(url.pathname);
  return {
    homeCopy: locale === "en" ? null : serializeHomeCopy(getHomeCopy(locale)),
  } satisfies RootLoaderData;
}

export const links: Route.LinksFunction = () => [
  // The Latin subset of the variable body/display face covers every page's
  // first paint; other subsets load on demand through unicode-range.
  {
    rel: "preload",
    href: familjenLatinUrl,
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  { rel: "preconnect", href: "https://apps.apple.com" },
  { rel: "dns-prefetch", href: "https://apps.apple.com" },
  { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "icon", href: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

const isLocalizedHome = (pathname: string): boolean => {
  const segments = pathname.split("/").filter(Boolean);
  return segments.length === 0 || (segments.length === 1 && isLocaleCode(segments[0]));
};

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  // Set when the root ErrorBoundary is rendering (a 404 or a crash): such a
  // page gets no canonical or hreflang, only the noindex from root meta.
  const routeError = useRouteError();
  const locale = getLocaleInfo(getLocaleFromPath(location.pathname));
  const cleanPath = stripLocale(location.pathname);

  return (
    // The boot script below sets data-theme on <html>, which the server never
    // renders — React would otherwise flag the mismatch on hydration.
    <html lang={locale.htmlLang} dir={locale.dir} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={THEME_COLORS.light} />
        {/* Light is the default, so the server markup already is the light theme
            and costs zero JS. Only a stored "dark" needs applying, and it has to
            happen before first paint. Runs after the theme-color meta above so
            its querySelector finds the tag. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.dataset.theme="dark";var m=document.querySelector('meta[name="theme-color"]');if(m)m.content="${THEME_COLORS.dark}";}}catch(e){}`,
          }}
        />
        <meta name="application-name" content={SITE_NAME} />
        <meta name="apple-itunes-app" content={`app-id=${APP_STORE_APP_ID}`} />
        <Meta />
        <Links />
        {routeError ? null : hasTranslations(cleanPath) ? (
          <>
            <link
              rel="canonical"
              href={`${SITE_URL}${localizedPath(locale.code, cleanPath)}`}
            />
            {LOCALES.map((alternateLocale) => (
              <link
                key={alternateLocale.code}
                rel="alternate"
                hrefLang={alternateLocale.htmlLang}
                href={`${SITE_URL}${localizedPath(alternateLocale.code, cleanPath)}`}
              />
            ))}
            <link
              rel="alternate"
              hrefLang="x-default"
              href={`${SITE_URL}${cleanPath}`}
            />
          </>
        ) : (
          // Routes that render an English body under a locale prefix (docs,
          // terms, changelog, the /vs comparisons) point at the one English URL
          // rather than declaring themselves canonical, so the same content is
          // not indexed once per locale. They emit no hreflang cluster and
          // sitemap.xml lists only their English URL — see config/localized-routes.
          <link
            rel="canonical"
            href={`${SITE_URL}${cleanPath}`}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: SOFTWARE_APP_SCHEMA_JSON,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: WEB_SITE_SCHEMA_JSON,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ORGANIZATION_SCHEMA_JSON,
          }}
        />
        {isLocalizedHome(location.pathname) ? (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: FAQ_SCHEMA_JSON,
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: HOW_TO_SCHEMA_JSON,
              }}
            />
          </>
        ) : null}
        {GA_ID ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: gtagBootstrapScript(GA_ID),
              }}
            />
          </>
        ) : null}
      </head>
      <body className="noise">
        {children}
        <ConsentBanner />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useOutboundClickTracking();
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let status = 500;
  let message = "Something went wrong";
  let details = "An unexpected error occurred. Please try again later.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    if (error.status === 404) {
      message = "Page not found";
      details =
        "The page you're looking for doesn't exist or has been moved.";
    } else {
      message = `Error ${error.status}`;
      details = error.statusText || details;
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav showSectionAnchors={false} />

      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-24">
        <div className="text-center max-w-lg">
          <p className="font-mono text-8xl font-bold text-accent/40 mb-6">
            {status}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
            {message}
          </h1>
          <p className="text-base text-ink/55 mb-10 leading-relaxed">
            {details}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/">Go to homepage</ButtonLink>
            <ButtonLink href="/blog" variant="secondary">
              Read the blog
            </ButtonLink>
          </div>
          {stack && (
            <pre className="w-full p-4 overflow-x-auto mt-10 bg-surface-raised rounded-lg text-left">
              <code className="font-mono text-sm text-ink/60">{stack}</code>
            </pre>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
