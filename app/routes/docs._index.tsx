import { redirect } from "react-router";

import type { Route } from "./+types/docs._index";
import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { localeHref } from "~/config/localized-routes";

function getRouteLocale(locale?: string): LocaleCode {
  return isLocaleCode(locale) ? locale : "en";
}

export function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw new Response("Not Found", { status: 404 });
  }

  return redirect(localeHref(getRouteLocale(locale), "/docs/help"));
}

export default function DocsIndex() {
  return null;
}
