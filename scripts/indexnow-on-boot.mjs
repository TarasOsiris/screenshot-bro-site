// Deploy hook: submits the whole sitemap to IndexNow once the server is up.
// Wired into the container start command in nixpacks.toml, so every Coolify
// deployment notifies search engines without a manual `npm run indexnow`.
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
const DEADLINE_MS = 3 * 60 * 1000;

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

const child = spawn(process.execPath, ["scripts/indexnow-submit.mjs"], {
  env: { ...process.env, SITEMAP_URL: sitemapUrl },
  stdio: "inherit",
});
child.on("exit", (code) => {
  if (code !== 0) {
    console.warn(`indexnow-on-boot: submission exited with code ${code}`);
  }
  process.exit(0);
});
