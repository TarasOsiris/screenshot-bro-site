import { SITE_NAME, SITE_URL, APP_STORE_URL } from "~/config/site";
import { AppleLogo } from "~/components/home/icons";
import type { Route } from "./+types/$";

export const meta: Route.MetaFunction = () => [
  { title: `Page Not Found — ${SITE_NAME}` },
  { name: "description", content: `The page you're looking for doesn't exist.` },
];

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: SITE_URL },
];

export function loader() {
  throw new Response("Not Found", { status: 404 });
}

export default function CatchAll() {
  return null;
}
