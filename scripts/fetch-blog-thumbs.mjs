// Downloads the curated Unsplash thumbnail for every blog post into
// public/blog-thumbs/<slug>.webp. Unsplash's CDN does the resize/crop/webp/
// quality work server-side via query params, so no local image tooling is
// needed. The directory is deliberately NOT public/blog/: a public dir whose
// name matches the /blog route triggers a redirect loop in production
// (static-server directory redirect vs router trailing-slash redirect).
//
// Usage:
//   npm run blog:thumbs              # download missing thumbnails
//   npm run blog:thumbs -- --force   # re-download everything
//   npm run blog:thumbs -- --check   # report map/file drift, no downloads
//
// When adding a post: pick a photo on unsplash.com, add its
// images.unsplash.com/photo-... base URL here and an alt text entry in
// app/config/blog-images.ts, then run this script.

import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OUT_DIR = fileURLToPath(new URL("../public/blog-thumbs/", import.meta.url));
const BLOG_TS = fileURLToPath(new URL("../app/config/blog.ts", import.meta.url));
const PARAMS = "?w=800&h=450&fit=crop&fm=webp&q=75";
const MIN_BYTES = 5_000; // anything smaller is an error page or dead photo ID

// slug -> Unsplash photo base URL (query string is appended from PARAMS)
const THUMBS = {
  "screenshot-bro-mcp-server": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
  "best-app-store-screenshot-tools-for-mac": "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
  "butterkit-alternative": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  "best-app-screenshot-localization-tools": "https://images.unsplash.com/photo-1524661135-423995f22d0b",
  "best-google-play-screenshot-tools": "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  "screenshot-bro-alternatives": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  "appscreens-alternative": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
  "screenshots-pro-alternative": "https://images.unsplash.com/photo-1523206489230-c012c64b2b48",
  "rotato-alternative": "https://images.unsplash.com/photo-1533022139390-e31c488d69e2",
  "placeit-alternative": "https://images.unsplash.com/photo-1596558450268-9c27524ba856",
  "mockuuups-studio-alternative": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  "canva-app-store-screenshots": "https://images.unsplash.com/photo-1572044162444-ad60f128bdea",
  "appmockup-alternative": "https://images.unsplash.com/photo-1605236453806-6ff36851218e",
  "screenshot-studio-alternative": "https://images.unsplash.com/photo-1606161290889-77950cfb67d3",
  "applaunchpad-alternative": "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce",
  "previewed-alternative": "https://images.unsplash.com/photo-1535303311164-664fc9ec6532",
  "shotbot-alternative": "https://images.unsplash.com/photo-1603515161074-3206aaeb03f2",
  "publish-app-on-google-play": "https://images.unsplash.com/photo-1592890288564-76628a30a657",
  "google-play-promo-video": "https://images.unsplash.com/photo-1485846234645-a62644f84728",
  "app-store-description-that-converts": "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd",
  "app-store-keyword-research": "https://images.unsplash.com/photo-1516382799247-87df95d790b7",
  "app-store-screenshots-for-games": "https://images.unsplash.com/photo-1564049489314-60d154ff107d",
  "app-store-screenshots-for-fitness-apps": "https://images.unsplash.com/photo-1769893841740-fc98ce39a3cc",
  "change-app-store-screenshots-without-updating-app": "https://images.unsplash.com/photo-1601972599720-36938d4ecd31",
  "best-free-app-store-screenshot-generators": "https://images.unsplash.com/photo-1587573578335-9672da4d0292",
  "mac-app-store-screenshot-sizes": "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c",
  "iphone-simulator-screenshots": "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa",
  "submit-app-to-app-store": "https://images.unsplash.com/photo-1457364887197-9150188c107b",
  "how-many-app-store-screenshots": "https://images.unsplash.com/photo-1672413514634-4781b15fd89e",
  "screenshot-generator-vs-figma-vs-photoshop": "https://images.unsplash.com/photo-1648854006531-361649aa182c",
  "localize-screenshots-japan-china-germany": "https://images.unsplash.com/photo-1549693578-d683be217e58",
  "app-store-app-preview-video-specs": "https://images.unsplash.com/photo-1612548403247-aa2873e9422d",
  "device-mockup-generator-app-screenshots": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
  "app-store-optimization-aso-guide": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  "app-icon-sizes-design-guidelines": "https://images.unsplash.com/photo-1661160094555-a798a7df499f",
  "app-store-screenshot-examples": "https://images.unsplash.com/photo-1587831991059-40958cea9ca5",
  "google-play-feature-graphic-size-template-examples": "https://images.unsplash.com/photo-1684569547016-d0bdc13d2c50",
  "app-store-screenshots-rejected-fix": "https://images.unsplash.com/photo-1650041467952-21f49af7704e",
  "google-play-screenshot-rejected-fix": "https://images.unsplash.com/photo-1592285733872-b70552ecf665",
  "app-store-screenshot-order": "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
  "app-store-screenshot-copywriting-examples": "https://images.unsplash.com/photo-1462642109801-4ac2971a3a51",
  "app-store-screenshot-mistakes": "https://images.unsplash.com/photo-1691415780200-76eb077e1ea7",
  "iphone-ipad-app-store-screenshots": "https://images.unsplash.com/photo-1618788372246-79faff0c3742",
  "google-play-store-listing-graphics-checklist": "https://images.unsplash.com/photo-1754548930574-6a995e5eb5a7",
  "seasonal-app-store-screenshots": "https://images.unsplash.com/photo-1765805912172-433bd2549391",
  "app-store-screenshot-localization-guide": "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
  "popular-figma-templates-app-store-screenshots-device-mockups": "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
  "app-store-screenshot-designers-creators-to-follow": "https://images.unsplash.com/photo-1613909207039-6b173b755cc1",
  "google-play-screenshot-sizes-requirements": "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
  "ab-test-app-store-screenshots": "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  "custom-product-pages-app-store-screenshots": "https://images.unsplash.com/photo-1545235617-9465d2a55698",
  "design-app-store-screenshots-in-figma": "https://images.unsplash.com/photo-1558655146-d09347e92766",
  "best-app-store-screenshot-tools": "https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59",
  "make-and-ship-screenshots-with-fastlane": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  "upload-screenshots-to-app-store-connect": "https://images.unsplash.com/photo-1602576666092-bf6447a729fc",
  "screenshot-sizes-app-store-google-play": "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
  "app-store-screenshot-sizes": "https://images.unsplash.com/photo-1523901839036-a3030662f220",
  "screenshots-that-convert": "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
  "localize-app-store-screenshots": "https://images.unsplash.com/photo-1650526087824-163941841b52",
};

const force = process.argv.includes("--force");
const checkOnly = process.argv.includes("--check");

// The script can't import TS, so cross-check map keys against slugs in blog.ts.
const blogSource = await readFile(BLOG_TS, "utf8");
const slugs = [...blogSource.matchAll(/^\s+slug: "([^"]+)",$/gm)].map((m) => m[1]);
const missingFromMap = slugs.filter((slug) => !(slug in THUMBS));
const unknownInMap = Object.keys(THUMBS).filter((key) => !slugs.includes(key));

if (missingFromMap.length > 0) {
  console.warn(`Posts without a thumbnail entry (${missingFromMap.length}): ${missingFromMap.join(", ")}`);
}
if (unknownInMap.length > 0) {
  console.warn(`Map entries with no matching post (${unknownInMap.length}): ${unknownInMap.join(", ")}`);
}

async function fileExists(filePath) {
  try {
    const info = await stat(filePath);
    return info.size >= MIN_BYTES;
  } catch {
    return false;
  }
}

if (checkOnly) {
  let missingFiles = 0;
  for (const slug of Object.keys(THUMBS)) {
    if (!(await fileExists(path.join(OUT_DIR, `${slug}.webp`)))) {
      console.warn(`Missing file: public/blog-thumbs/${slug}.webp`);
      missingFiles += 1;
    }
  }
  console.log(
    `Checked ${slugs.length} posts: ${slugs.length - missingFromMap.length} mapped, ${missingFiles} file(s) missing`,
  );
  process.exitCode = missingFromMap.length + unknownInMap.length + missingFiles > 0 ? 1 : 0;
} else {
  await mkdir(OUT_DIR, { recursive: true });
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const [slug, baseUrl] of Object.entries(THUMBS)) {
    const outPath = path.join(OUT_DIR, `${slug}.webp`);
    if (!force && (await fileExists(outPath))) {
      skipped += 1;
      continue;
    }
    try {
      const res = await fetch(baseUrl + PARAMS);
      const type = res.headers.get("content-type") ?? "";
      if (!res.ok || !type.startsWith("image/")) {
        throw new Error(`HTTP ${res.status} ${type}`);
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      if (buffer.byteLength < MIN_BYTES) {
        throw new Error(`suspiciously small response (${buffer.byteLength} bytes)`);
      }
      await writeFile(outPath, buffer);
      downloaded += 1;
    } catch (error) {
      console.error(`Failed ${slug}: ${error.message}`);
      failed += 1;
    }
  }

  console.log(`Thumbnails: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`);
  process.exitCode = failed > 0 ? 1 : 0;
}
