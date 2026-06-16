import { redirect } from "react-router";

import type { Route } from "./+types/docs._index";
import { isLocaleCode, localizedPath, type LocaleCode } from "~/config/localization";

function getRouteLocale(locale?: string): LocaleCode {
  return isLocaleCode(locale) ? locale : "en";
}

export function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw new Response("Not Found", { status: 404 });
  }

  return redirect(localizedPath(getRouteLocale(locale), "/docs/help"));
}

export default function DocsIndex() {
  return null;
}
