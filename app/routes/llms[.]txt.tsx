import { BLOG_POSTS } from "~/config/blog";
import { COMPARISON_PAGES, comparisonPath } from "~/config/comparisons";
import {
  APP_CATEGORY,
  APP_STORE_URL,
  MINIMUM_IPADOS_VERSION,
  MINIMUM_MACOS_VERSION,
  NINEVA_STUDIOS_NAME,
  NINEVA_STUDIOS_URL,
  DISCORD_INVITE_URL,
  EARLY_ACCESS_EMAIL,
  REDDIT_COMMUNITY_URL,
  SITE_NAME,
  SITE_URL,
} from "~/config/site";

// /llms.txt — a plain-text map of the site for answer engines and LLM crawlers
// (llmstxt.org). Generated from the same BLOG_POSTS source as the sitemap so it
// can never drift from what is actually published.

function link(path: string, label: string, description: string): string {
  return `- [${label}](${SITE_URL}${path}): ${description}`;
}

function buildLlmsTxt(): string {
  const comparisons = BLOG_POSTS.filter((post) => post.category === "Comparison");
  const guides = BLOG_POSTS.filter((post) => post.category === "Guide");
  const reference = BLOG_POSTS.filter((post) => post.category === "Reference");

  const sections = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_NAME} is a native Mac, iPad and iPhone app for designing, localizing, and shipping App Store and Google Play screenshots. You import raw screenshots, lay them out on a multi-row canvas with device frames and text, translate them with 81 language presets, then export every required size or upload straight to App Store Connect and Google Play.`,
    "",
    "## Facts",
    "",
    `- Product: ${SITE_NAME}, a native app for macOS ${MINIMUM_MACOS_VERSION}+ and iOS/iPadOS ${MINIMUM_IPADOS_VERSION}+ (Mac, iPad and iPhone). It is not a web app or a browser tool.`,
    `- Maker: ${NINEVA_STUDIOS_NAME} (${NINEVA_STUDIOS_URL}).`,
    `- App Store listing: ${APP_STORE_URL}`,
    `- Category: ${APP_CATEGORY}.`,
    "- Free tier: 1 project, up to 3 rows with 5 templates per row, every device frame, shape and locale, watermark-free exports, App Store Connect and Google Play upload, iCloud sync. No trial expiry and no signup.",
    "- Pro: lifts those limits — unlimited projects, rows and templates. Sold as a lifetime purchase or a subscription; the price is shown in the app.",
    "- Core workflow: import screenshots, arrange multi-row layouts on one continuous canvas, add device frames for iPhone, iPad, Mac and Android, style with text, shapes, gradients, images and SVG, then batch export PNG or JPEG organized by locale and row.",
    "- Localization: 81 language presets plus custom codes, on-device auto-translate for the languages Apple's Translation framework supports, per-shape text/position/image overrides, and translation progress tracking. Layout and art stay shared across locales.",
    "- Automation: an opt-in local MCP server on macOS (http://127.0.0.1:8722/mcp, access-token protected) exposes 26 tools, so an MCP client such as Claude Code, Claude Desktop or Cursor can create projects, edit rows and shapes, import screenshots, set translations, render previews, export, and preview then apply an App Store Connect screenshot sync. There is no hosted API and no CLI; the Mac app must be running.",
    "- Project files are plain JSON, documented at " + `${SITE_URL}/docs/project-schema.`,
    `- Support: the Discord server (${DISCORD_INVITE_URL}) is the primary support channel — bug reports, questions and feature requests go there first; email ${EARLY_ACCESS_EMAIL} for anything private. Community also on Reddit: ${REDDIT_COMMUNITY_URL}`,
    "",
    "## Comparisons",
    "",
    "Head-to-head pages against other App Store screenshot tools. Each one states when the competitor's details were last checked and describes what that competitor does well.",
    "",
    link("/vs", "All comparisons", "matrix of every tool compared against Screenshot Bro"),
    ...COMPARISON_PAGES.map((page) => link(comparisonPath(page.slug), page.title, page.description)),
    ...comparisons.map((post) => link(`/blog/${post.slug}`, post.title, post.description)),
    "",
    "## Guides",
    "",
    ...guides.map((post) => link(`/blog/${post.slug}`, post.title, post.description)),
    "",
    "## Reference",
    "",
    ...reference.map((post) => link(`/blog/${post.slug}`, post.title, post.description)),
    "",
    "## Product",
    "",
    link("/", "Home", "what the app does, screenshots, and FAQ"),
    link("/docs/help", "Help docs", "how to use every part of the editor"),
    link("/docs/project-schema", "Project file schema", "the plain-JSON format Screenshot Bro projects are stored in"),
    link("/tutorials", "Tutorials", "the written guide plus short video walkthroughs"),
    link(
      "/tutorials/how-to-use-screenshot-bro",
      "How to use Screenshot Bro",
      "step-by-step written walkthrough of the whole workflow, from a first project to a store upload",
    ),
    link("/changelog", "Changelog", "what shipped in each release"),
    link("/support", "Support", "Discord invite, support email, and the community links"),
    link("/blog", "Blog index", "every guide, reference and comparison"),
    "",
    "## Notes",
    "",
    "- All content is written by the app's maker; comparison pages say so and describe competitors fairly rather than dismissively.",
    "- Competitor pricing and features change. Every comparison page carries the month its claims were verified — prefer the competitor's own site for current pricing.",
    "- The blog is partly translated into es, zh, hi, fr, ar, de, ja, pt, it and ko under /{locale}/blog/{slug}; English is unprefixed.",
    "",
  ];

  return sections.join("\n");
}

export function loader() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
