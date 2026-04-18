import { SITE_NAME, SITE_URL, APP_STORE_URL } from "~/config/site";
import { AppleLogo } from "~/components/home/icons";
import type { Route } from "./+types/$";
import { mergeMeta } from "~/config/meta";

const NOT_FOUND_TITLE = `Page Not Found — ${SITE_NAME}`;
const NOT_FOUND_DESCRIPTION = `The page you're looking for doesn't exist.`;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: NOT_FOUND_TITLE },
    { name: "description", content: NOT_FOUND_DESCRIPTION },
    { name: "robots", content: "noindex" },
  ]);

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: SITE_URL },
];

export function loader() {
  throw new Response("Not Found", { status: 404 });
}

export default function CatchAll() {
  return null;
}
