// Deploy hook: tells IndexNow about the URLs this deployment changed, once the
// server is up. Wired into the container start command in nixpacks.toml, so
// every Coolify deployment notifies search engines without a manual
// `npm run indexnow`.
//
// "Changed" means new in the sitemap or with a different <lastmod> than the
// sitemap the *previous* deployment is still serving publicly. That sitemap is
// read first thing, before the proxy switches over to this container, so no
// state has to survive between deploys. If it can't be read (first deploy,
// site down) every URL is submitted, as before. Resubmitting all ~190 URLs on
// every deploy told search engines nothing and risked being rate-limited.
//
// Only runs when Coolify's injected env is present (COOLIFY_FQDN) or when
// forced with INDEXNOW_ON_BOOT=1, so a local `npm run start` stays silent.
// Reads the sitemap from the local server rather than the public URL to avoid
// racing the proxy switchover to the new container. Never exits non-zero:
// a failed ping must not affect the running app.

import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

if (!process.env.COOLIFY_FQDN && process.env.INDEXNOW_ON_BOOT !== "1") {
  process.exit(0);
}

const port = process.env.PORT ?? "3000";
const sitemapUrl = `http://127.0.0.1:${port}/sitemap.xml`;
const PUBLIC_SITEMAP_URL = "https://screenshotbro.app/sitemap.xml";
const DEADLINE_MS = 3 * 60 * 1000;

// loc -> lastmod
function parseSitemap(xml) {
  const entries = new Map();
  for (const [, body] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = body.match(/<loc>([^<]+)<\/loc>/)?.[1].trim();
    if (loc) entries.set(loc, body.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1].trim() ?? "");
  }
  return entries;
}

async function fetchSitemap(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return parseSitemap(await res.text());
}

let previous = null;
try {
  previous = await fetchSitemap(PUBLIC_SITEMAP_URL);
} catch (error) {
  console.warn(`indexnow-on-boot: no previous sitemap (${error.message}); will submit every URL`);
}

const started = Date.now();
let up = false;
while (Date.now() - started < DEADLINE_MS) {
  try {
    const res = await fetch(sitemapUrl, { signal: AbortSignal.timeout(5_000) });
    if (res.ok) {
      up = true;
      break;
    }
  } catch {
    // server not listening yet
  }
  await sleep(3_000);
}

if (!up) {
  console.warn(`indexnow-on-boot: gave up waiting for ${sitemapUrl}`);
  process.exit(0);
}

let args = [];
if (previous && previous.size > 0) {
  let current;
  try {
    current = await fetchSitemap(sitemapUrl);
  } catch (error) {
    console.warn(`indexnow-on-boot: could not read ${sitemapUrl} (${error.message})`);
    process.exit(0);
  }
  args = [...current].filter(([loc, lastmod]) => previous.get(loc) !== lastmod).map(([loc]) => loc);
  if (args.length === 0) {
    console.log("indexnow-on-boot: sitemap unchanged since the previous deploy; nothing to submit");
    process.exit(0);
  }
  console.log(`indexnow-on-boot: ${args.length} new or updated URL(s) of ${current.size}`);
}

// No args = indexnow-submit.mjs submits the whole sitemap at SITEMAP_URL.
const child = spawn(process.execPath, ["scripts/indexnow-submit.mjs", ...args], {
  env: { ...process.env, SITEMAP_URL: sitemapUrl },
  stdio: "inherit",
});
child.on("exit", (code) => {
  if (code !== 0) {
    console.warn(`indexnow-on-boot: submission exited with code ${code}`);
  }
  process.exit(0);
});
