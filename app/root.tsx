import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "~/config/site";
import "./app.css";

const SITE_TITLE = `${SITE_NAME} — App Store Screenshot Generator for macOS`;
const SOCIAL_IMAGE = `${SITE_URL}/og-image.png`;
const GA_ID =
  import.meta.env.PROD && import.meta.env.VITE_GA_ID
    ? (import.meta.env.VITE_GA_ID as string)
    : undefined;

const SOFTWARE_APP_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  operatingSystem: "macOS",
  applicationCategory: "DesignApplication",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: SOCIAL_IMAGE,
  screenshot: SOCIAL_IMAGE,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "USD",
  },
  applicationSubCategory: "Screenshot Generator",
  featureList:
    "Device Frames, Gradient Backgrounds, Multi-Template Editing, Batch Export, Localization (30+ languages), SVG Support",
});

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
  { rel: "canonical", href: SITE_URL },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#08080c" />
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Screenshot Bro — native macOS app for designing App Store screenshots with device frames, gradients, and localization"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: SOFTWARE_APP_SCHEMA_JSON,
          }}
        />
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
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto font-body">
      <h1 className="font-display text-4xl font-bold">{message}</h1>
      <p className="mt-4 text-white/60">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto mt-4 bg-surface-raised rounded-lg">
          <code className="font-mono text-sm">{stack}</code>
        </pre>
      )}
    </main>
  );
}
