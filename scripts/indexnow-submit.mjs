// Submits site URLs to IndexNow (https://www.indexnow.org) so participating
// search engines (Bing, Naver, Seznam, Yandex, ...) pick up changes quickly.
//
// Usage:
//   npm run indexnow                         # submit every URL from the live sitemap
//   npm run indexnow -- /blog/foo /privacy   # submit specific paths (or full URLs) only
//
// The key file is served from public/<key>.txt at the site root, which is how
// IndexNow verifies domain ownership. Run this after deploying content changes.

const SITE_URL = "https://screenshotbro.app";
const HOST = new URL(SITE_URL).host;
const KEY = "3f70c760038f5d45b5964388c866c4fb";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS_PER_REQUEST = 10_000;

async function urlsFromSitemap() {
  // SITEMAP_URL lets the deploy hook read the sitemap from the local server
  // (the <loc> entries are production URLs either way).
  const res = await fetch(process.env.SITEMAP_URL ?? `${SITE_URL}/sitemap.xml`);
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: HTTP ${res.status}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (urls.length === 0) {
    throw new Error("Sitemap contained no <loc> entries");
  }
  return urls;
}

function urlsFromArgs(args) {
  return args.map((arg) =>
    arg.startsWith("http") ? arg : `${SITE_URL}${arg.startsWith("/") ? "" : "/"}${arg}`,
  );
}

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  // 200 = submitted; 202 = accepted, key verification pending (normal on first use)
  if (res.status !== 200 && res.status !== 202) {
    const body = await res.text();
    throw new Error(`IndexNow rejected submission: HTTP ${res.status} ${body}`.trim());
  }
  return res.status;
}

const args = process.argv.slice(2);
const urls = args.length > 0 ? urlsFromArgs(args) : await urlsFromSitemap();

for (let i = 0; i < urls.length; i += MAX_URLS_PER_REQUEST) {
  const batch = urls.slice(i, i + MAX_URLS_PER_REQUEST);
  const status = await submit(batch);
  console.log(`Submitted ${batch.length} URL(s) to IndexNow (HTTP ${status})`);
}
