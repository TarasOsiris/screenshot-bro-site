import { redirect } from "react-router";

import { SITE_NAME } from "~/config/site";
import type { Route } from "./+types/$";
import { mergeMeta } from "~/config/meta";
import { canonicalGlobalPath, dedupedLocalePath } from "~/config/localization";

const NOT_FOUND_TITLE = `Page Not Found — ${SITE_NAME}`;
const NOT_FOUND_DESCRIPTION = `The page you're looking for doesn't exist.`;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: NOT_FOUND_TITLE },
    { name: "description", content: NOT_FOUND_DESCRIPTION },
    { name: "robots", content: "noindex" },
  ]);

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  // Both rules resolve into one 301: /es/es/friends lands on /friends directly
  // rather than chaining through /es/friends.
  const deduped = dedupedLocalePath(url.pathname);
  const path = deduped ?? url.pathname;
  const target = canonicalGlobalPath(path) ?? deduped;
  if (target) throw redirect(`${target}${url.search}`, 301);
  throw new Response("Not Found", { status: 404 });
}

export default function CatchAll() {
  return null;
}
