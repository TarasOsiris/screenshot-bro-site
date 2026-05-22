import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import {
  APP_CATEGORY,
  APP_SCREENSHOTS,
  APP_STORE_APP_ID,
  APP_STORE_URL,
  FEATURES,
  FAQS,
  MINIMUM_MACOS_VERSION,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  REDDIT_COMMUNITY_URL,
  THREADS_URL,
  TWITTER_HANDLE,
  WORKFLOW_STEPS,
  X_PROFILE_URL,
} from "~/config/site";
import {
  LOCALES,
  getLocaleFromPath,
  getLocaleInfo,
  isLocaleCode,
  localizedPath,
} from "~/config/localization";
import "./app.css";

export const SITE_TITLE = `${SITE_NAME} — App Store & Google Play Screenshots`;
export const SOCIAL_IMAGE = `${SITE_URL}/og-image.png`;
const GA_ID = import.meta.env.PROD ? "G-N0BL1983JF" : undefined;

const SOFTWARE_APP_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: SITE_NAME,
  alternateName: "ScreenshotBro",
  operatingSystem: `macOS ${MINIMUM_MACOS_VERSION} or later`,
  applicationCategory: "DesignApplication",
  applicationSubCategory: "App Store screenshot generator",
  category: APP_CATEGORY,
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
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: "0.00",
    priceCurrency: "USD",
  },
  isAccessibleForFree: true,
  softwareRequirements: `macOS ${MINIMUM_MACOS_VERSION} or later`,
  keywords: SITE_KEYWORDS,
  sameAs: [APP_STORE_URL, X_PROFILE_URL, THREADS_URL, REDDIT_COMMUNITY_URL],
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
  publisher: {
    "@type": "Person",
    name: "Taras Leskiv",
    url: X_PROFILE_URL,
  },
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
    "A four-step workflow for designing, localizing, exporting, and uploading App Store and Google Play screenshots from a native Mac app.",
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
  "Screenshot Bro — native macOS app for designing App Store and Google Play screenshots with device frames, gradients, and localization";

export const meta: Route.MetaFunction = () => [
  { title: SITE_TITLE },
  { name: "description", content: SITE_DESCRIPTION },
  { name: "keywords", content: SITE_KEYWORDS },
  { property: "og:locale", content: "en_US" },
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
  return null;
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400..700;1,400..700&family=JetBrains+Mono:wght@400;500&display=swap",
  },
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

const isLocalizedPath = (pathname: string): boolean => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0 || (segments.length === 1 && isLocaleCode(segments[0]))) {
    return true;
  }
  if (
    (segments.length === 1 && segments[0] === "blog") ||
    (segments.length === 2 && isLocaleCode(segments[0]) && segments[1] === "blog")
  ) {
    return true;
  }
  if (
    (segments.length === 2 && segments[0] === "blog") ||
    (segments.length === 3 && isLocaleCode(segments[0]) && segments[1] === "blog")
  ) {
    return true;
  }
  return false;
};

const getCleanPath = (pathname: string): string => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocaleCode(segments[0])) {
    segments.shift();
  }
  return "/" + segments.join("/");
};

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const locale = getLocaleInfo(getLocaleFromPath(location.pathname));

  return (
    <html lang={locale.htmlLang} dir={locale.dir}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#08080c" />
        <meta name="application-name" content={SITE_NAME} />
        <meta name="apple-itunes-app" content={`app-id=${APP_STORE_APP_ID}`} />
        <Meta />
        <Links />
        {isLocalizedPath(location.pathname) ? (
          <>
            <link
              rel="canonical"
              href={`${SITE_URL}${localizedPath(locale.code, getCleanPath(location.pathname))}`}
            />
            {LOCALES.map((alternateLocale) => (
              <link
                key={alternateLocale.code}
                rel="alternate"
                hrefLang={alternateLocale.htmlLang}
                href={`${SITE_URL}${localizedPath(alternateLocale.code, getCleanPath(location.pathname))}`}
              />
            ))}
            <link
              rel="alternate"
              hrefLang="x-default"
              href={`${SITE_URL}${getCleanPath(location.pathname)}`}
            />
          </>
        ) : (
          <link
            rel="canonical"
            href={`${SITE_URL}${location.pathname}`}
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
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`,
              }}
            />
          </>
        ) : null}
      </head>
      <body className="noise">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
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
      <nav className="border-b border-border-subtle bg-surface/78 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo-light.svg"
              alt={SITE_NAME}
              width="150"
              height="24"
              className="h-6 w-auto"
            />
          </a>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <p className="font-mono text-8xl font-bold text-accent/40 mb-6">
            {status}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {message}
          </h1>
          <p className="text-base text-white/55 mb-10 leading-relaxed">
            {details}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm transition-all hover:shadow-[0_0_32px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Go to homepage
            </a>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.03] border border-border text-white/[0.72] hover:text-white/[0.92] hover:border-white/20 text-sm transition-all"
            >
              Read the blog
            </a>
          </div>
          {stack && (
            <pre className="w-full p-4 overflow-x-auto mt-10 bg-surface-raised rounded-lg text-left">
              <code className="font-mono text-sm text-white/60">{stack}</code>
            </pre>
          )}
        </div>
      </main>
    </div>
  );
}
