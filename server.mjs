// Production server: react-router-serve's setup (compression, static files,
// the React Router request handler) plus the response headers it has no option
// for — security headers on every response and per-type cache lifetimes for
// the files copied from public/. `npm start` runs this.
import path from "node:path";
import url from "node:url";

// Has to be set before React loads, so everything that pulls React in is
// imported dynamically below rather than hoisted as a static import.
process.env.NODE_ENV = process.env.NODE_ENV ?? "production";

const { createRequestHandler } = await import("@react-router/express");
const { default: compression } = await import("compression");
const { default: express } = await import("express");
const { default: morgan } = await import("morgan");

const BUILD_PATH = path.resolve("build/server/index.js");
const CLIENT_DIR = path.resolve("build/client");
const PORT = Number(process.env.PORT) || 3000;

const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
  // Framing only. A script/style policy would have to allow-list Google
  // Analytics and Ads and every inline bootstrap script, so it is left out.
  "Content-Security-Policy": "frame-ancestors 'self'",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
};

const WEEK = 60 * 60 * 24 * 7;
const MEDIA = /\.(?:png|jpe?g|webp|avif|gif|svg|ico|mp4|webm|woff2?)$/i;
// Files whose content changes in place and must reach clients quickly: the
// direct build's update feed, crawler files, the manifest, the schema.
const SHORT_LIVED = /\.(?:xml|txt|json|webmanifest)$/i;

function setStaticCacheHeaders(res, filePath) {
  if (MEDIA.test(filePath)) {
    res.setHeader("Cache-Control", `public, max-age=${WEEK}, stale-while-revalidate=${WEEK}`);
  } else if (SHORT_LIVED.test(filePath)) {
    res.setHeader("Cache-Control", "public, max-age=300");
  } else {
    res.setHeader("Cache-Control", "public, max-age=3600");
  }
}

const build = await import(url.pathToFileURL(BUILD_PATH).href);

const app = express();
app.disable("x-powered-by");
app.use(compression());
app.use((_req, res, next) => {
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) res.setHeader(name, value);
  next();
});

// Fingerprinted Vite output: safe to cache for a year.
app.use(
  "/assets",
  express.static(path.join(CLIENT_DIR, "assets"), { immutable: true, maxAge: "1y" }),
);
app.use(express.static(CLIENT_DIR, { cacheControl: false, setHeaders: setStaticCacheHeaders }));

app.use(morgan("tiny"));
app.all("*", createRequestHandler({ build, mode: process.env.NODE_ENV }));

const server = process.env.HOST
  ? app.listen(PORT, process.env.HOST, () => console.log(`[server] http://${process.env.HOST}:${PORT}`))
  : app.listen(PORT, () => console.log(`[server] http://localhost:${PORT}`));

for (const signal of ["SIGTERM", "SIGINT"]) {
  process.once(signal, () => server.close(console.error));
}
