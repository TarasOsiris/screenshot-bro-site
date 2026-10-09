import { BLOG_POSTS, type BlogPost } from "~/config/blog";
import { LOCALIZED_BLOG_POSTS } from "~/config/blog-translations";
import type { LocaleCode } from "~/config/localization";

// Translated post titles and descriptions for the /{locale}/blog index and the
// home page's blog preview. Server-only so the browser receives one locale's
// list as loader data instead of all 24 translation sets. Post bodies are
// English-only (see config/localized-routes.ts), so post pages use BLOG_POSTS.
export function getLocalizedBlogPosts(locale: LocaleCode): BlogPost[] {
  if (locale === "en") return BLOG_POSTS;
  return LOCALIZED_BLOG_POSTS[locale as Exclude<LocaleCode, "en">] || BLOG_POSTS;
}
