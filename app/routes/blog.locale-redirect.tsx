import { redirect } from "react-router";

import type { Route } from "./+types/blog.locale-redirect";
import { BLOG_POSTS } from "~/config/blog";
import { isLocaleCode } from "~/config/localization";

const SLUGS = new Set(BLOG_POSTS.map((post) => post.slug));

// Blog posts are written once, in English. Their /{locale}/blog/<slug> URLs
// used to render that same English body under a self-canonical and a 25-way
// hreflang cluster — ~1,500 near-duplicates. They now 301 to the one English
// URL so links and old index entries keep working. The translated /{locale}/blog
// index still lists every post (under its translated title) and links here
// directly. See config/localized-routes.ts.
export function loader({ params, request }: Route.LoaderArgs) {
  if (!isLocaleCode(params.locale) || !SLUGS.has(params.slug)) {
    throw new Response("Not Found", { status: 404 });
  }
  const { search } = new URL(request.url);
  throw redirect(`/blog/${params.slug}${search}`, 301);
}

export default function BlogLocaleRedirect() {
  return null;
}
