// Renders 1200×630 social images into public/og/ — one per blog post and one
// per /vs comparison — with headless Chrome, then writes app/config/og-images.ts
// listing what exists so meta tags never point at a missing file.
//
// Run locally after adding or retitling a post or comparison, and commit the
// images: the deploy image has no browser.
//
//   npm run og                    # every image
//   npm run og -- blog-foo vs-    # only names starting with these prefixes
//
// CHROME_PATH overrides the browser binary (defaults to macOS Google Chrome);
// CHROME_NO_SANDBOX=1 adds --no-sandbox for Linux containers that need it.
// Images are JPEG at quality 85, about 40–120 KB each.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { registerHooks } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

// Let Node load the site's TypeScript config directly: map the `~/` alias to
// app/ and give modules an empty `import.meta.env` (Vite fills it at build).
registerHooks({
  resolve(specifier, context, next) {
    if (specifier.startsWith("~/")) {
      return next(pathToFileURL(join(root, "app", `${specifier.slice(2)}.ts`)).href, context);
    }
    return next(specifier, context);
  },
  load(url, context, next) {
    const result = next(url, context);
    if (url.startsWith(pathToFileURL(join(root, "app")).href) && result.source) {
      const source = String(result.source).replaceAll("import.meta.env", "({})");
      return { ...result, source };
    }
    return result;
  },
});

const { BLOG_POSTS } = await import("../app/config/blog.ts");
const { COMPARISON_PAGES } = await import("../app/config/comparisons.ts");

const chrome =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const outDir = join(root, "public", "og");
const prefixes = process.argv.slice(2);

const dataUri = (file, type) =>
  `data:${type};base64,${readFileSync(join(root, "public", file)).toString("base64")}`;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const icon = dataUri("web-app-manifest-512x512.png", "image/png");
const fontFile = (subset) =>
  join(root, "node_modules/@fontsource-variable/familjen-grotesk/files", `familjen-grotesk-${subset}-wght-normal.woff2`);
const fonts = ["latin", "latin-ext"]
  .map(
    (subset) =>
      `@font-face { font-family: 'Familjen'; font-weight: 400 700; src: url("file://${fontFile(subset)}") format("woff2"); }`,
  )
  .join("\n");

// Colors from app/app.css (light theme).
const shell = (left, right) => `<!doctype html><html lang="en"><head><meta charset="utf-8">
<style>
  ${fonts}
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; overflow: hidden; font-family: Familjen, system-ui, sans-serif;
    color: #050507; background: #fbfaf8; position: relative; }
  .grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(5,5,7,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(5,5,7,.045) 1px, transparent 1px); background-size: 48px 48px; }
  .glow { position: absolute; width: 820px; height: 820px; border-radius: 50%; right: -260px; top: -120px;
    background: radial-gradient(circle, rgba(4,102,214,.16) 0%, rgba(4,102,214,0) 65%); }
  .left { position: absolute; left: 72px; top: 64px; bottom: 64px; width: 600px; display: flex; flex-direction: column; }
  .brand { display: flex; align-items: center; gap: 14px; font-weight: 700; font-size: 28px; letter-spacing: -.01em; }
  .brand img { width: 52px; height: 52px; border-radius: 13px; }
  .eyebrow { margin-top: auto; color: #0356b5; font-weight: 600; font-size: 19px; letter-spacing: .16em; text-transform: uppercase; }
  h1 { margin-top: 14px; font-weight: 700; font-size: 56px; line-height: 1.04; letter-spacing: -.025em; }
  h1.long { font-size: 48px; }
  .meta { margin-top: 22px; font-size: 22px; color: #55555c; }
  .right { position: absolute; right: 64px; top: 0; bottom: 0; display: flex; align-items: center; }
  .photo { width: 440px; height: 440px; object-fit: cover; border-radius: 32px;
    box-shadow: 0 30px 60px -30px rgba(5,5,7,.5); transform: rotate(2deg); }
  .versus { width: 420px; display: flex; flex-direction: column; align-items: center; gap: 22px; }
  .versus img { width: 190px; height: 190px; border-radius: 44px; box-shadow: 0 30px 60px -30px rgba(5,5,7,.5); }
  .vs { font-weight: 700; font-size: 34px; color: #0356b5; letter-spacing: .1em; }
  .rival { padding: 26px 34px; border-radius: 28px; background: #fff; border: 1.5px solid rgba(26,26,32,.13);
    font-weight: 700; font-size: 42px; letter-spacing: -.02em; text-align: center; max-width: 420px; }
</style></head><body><div class="grid"></div><div class="glow"></div>
<div class="left">${left}</div><div class="right">${right}</div></body></html>`;

const brand = `<div class="brand"><img src="${icon}">Screenshot Bro</div>`;
const heading = (title) => `<h1 class="${title.length > 52 ? "long" : ""}">${esc(title)}</h1>`;

const pages = [
  ...BLOG_POSTS.map((post) => {
    const thumb = `blog-thumbs/${post.slug}.webp`;
    const right = existsSync(join(root, "public", thumb))
      ? `<img class="photo" src="${dataUri(thumb, "image/webp")}">`
      : `<div class="versus"><img src="${icon}"></div>`;
    return {
      name: `blog-${post.slug}`,
      html: shell(
        `${brand}<div class="eyebrow">${esc(post.category)} · Blog</div>${heading(post.title)}
         <div class="meta">${esc(post.readTime)}</div>`,
        right,
      ),
    };
  }),
  ...COMPARISON_PAGES.map((page) => ({
    name: `vs-${page.slug}`,
    html: shell(
      `${brand}<div class="eyebrow">Comparison</div>${heading(page.heading)}
       <div class="meta">${esc(page.type)}</div>`,
      `<div class="versus"><img src="${icon}"><div class="vs">VS</div><div class="rival">${esc(page.competitor)}</div></div>`,
    ),
  })),
];

// Drives Chrome over the DevTools protocol (Node's built-in WebSocket, no
// dependencies) so the viewport is exactly 1200×630: `--screenshot` with
// `--window-size` loses ~90px to window chrome in the new headless mode.
async function startChrome(profileDir) {
  const proc = spawn(
    chrome,
    [
      "--headless=new",
      ...(process.env.CHROME_NO_SANDBOX === "1" ? ["--no-sandbox"] : []),
      "--disable-gpu",
      "--hide-scrollbars",
      "--remote-debugging-port=0",
      `--user-data-dir=${profileDir}`,
      "about:blank",
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );
  const wsUrl = await new Promise((resolve, reject) => {
    let buffer = "";
    proc.stderr.on("data", (chunk) => {
      buffer += chunk;
      const match = buffer.match(/DevTools listening on (ws:\/\/\S+)/);
      if (match) resolve(match[1]);
    });
    proc.on("exit", (code) => reject(new Error(`Chrome exited (${code}) before DevTools was ready`)));
  });
  const socket = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = reject;
  });
  let nextId = 0;
  const pending = new Map();
  const listeners = new Set();
  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
    } else {
      for (const listener of listeners) listener(message);
    }
  };
  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const id = ++nextId;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params, sessionId }));
    });
  const waitFor = (method, sessionId) =>
    new Promise((resolve) => {
      const listener = (message) => {
        if (message.method === method && message.sessionId === sessionId) {
          listeners.delete(listener);
          resolve(message.params);
        }
      };
      listeners.add(listener);
    });
  return { proc, socket, send, waitFor };
}

mkdirSync(outDir, { recursive: true });
const work = mkdtempSync(join(tmpdir(), "og-"));
const browser = await startChrome(join(work, "profile"));
try {
  const { targetId } = await browser.send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await browser.send("Target.attachToTarget", { targetId, flatten: true });
  await browser.send("Page.enable", {}, sessionId);
  await browser.send(
    "Emulation.setDeviceMetricsOverride",
    { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false },
    sessionId,
  );
  for (const page of pages) {
    if (prefixes.length > 0 && !prefixes.some((prefix) => page.name.startsWith(prefix))) continue;
    const htmlPath = join(work, `${page.name}.html`);
    writeFileSync(htmlPath, page.html);
    const loaded = browser.waitFor("Page.loadEventFired", sessionId);
    await browser.send("Page.navigate", { url: pathToFileURL(htmlPath).href }, sessionId);
    await loaded;
    await browser.send(
      "Runtime.evaluate",
      { expression: "document.fonts.ready.then(() => true)", awaitPromise: true },
      sessionId,
    );
    const { data } = await browser.send(
      "Page.captureScreenshot",
      { format: "jpeg", quality: 85, clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } },
      sessionId,
    );
    writeFileSync(join(outDir, `${page.name}.jpg`), Buffer.from(data, "base64"));
    console.log(`og/${page.name}.jpg`);
  }
} finally {
  browser.socket.close();
  browser.proc.kill();
  rmSync(work, { recursive: true, force: true });
}

// The list meta tags read (config/blog-seo.ts, config/comparison-seo.ts).
const names = readdirSync(outDir)
  .filter((file) => file.endsWith(".jpg"))
  .map((file) => file.replace(/\.jpg$/, ""))
  .sort();
writeFileSync(
  join(root, "app/config/og-images.ts"),
  `// Generated by scripts/generate-og-images.mjs — do not edit by hand.
// Names of the 1200×630 images in public/og/ (served as /og/<name>.jpg).
export const OG_IMAGE_NAMES: ReadonlySet<string> = new Set(${JSON.stringify(names, null, 2)});
`,
);
console.log(`${names.length} images listed in app/config/og-images.ts`);
