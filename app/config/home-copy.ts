import { useMemo } from "react";
import { useRouteLoaderData } from "react-router";

import { EN_HOME_COPY, type HomeCopy } from "~/config/localization";

// The home and site-chrome copy travels from root.tsx's loader to the browser
// as loader data, one locale at a time (the full set lives in
// config/home-copy.server.ts). Loader data has to be plain JSON, so the three
// copy strings that take arguments are flattened to templates with `{name}`
// placeholders on the server and turned back into functions here.
type TemplateKeys = "templateAlt" | "templateMeta" | "showAllTemplates";

export type SerializedHomeCopy = Omit<HomeCopy, "ui"> & {
  ui: Omit<HomeCopy["ui"], TemplateKeys> & Record<TemplateKeys, string>;
};

// The translations only interpolate their arguments, so calling them with
// placeholder strings yields a faithful template.
export function serializeHomeCopy(copy: HomeCopy): SerializedHomeCopy {
  const asNumber = (placeholder: string) => placeholder as unknown as number;
  return {
    ...copy,
    ui: {
      ...copy.ui,
      templateAlt: copy.ui.templateAlt("{name}"),
      templateMeta: copy.ui.templateMeta(
        asNumber("{columns}"),
        asNumber("{width}"),
        asNumber("{height}"),
      ),
      showAllTemplates: copy.ui.showAllTemplates(asNumber("{count}")),
    },
  };
}

// Fills `{name}` placeholders in a copy string.
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export function hydrateHomeCopy(copy: SerializedHomeCopy): HomeCopy {
  const { templateAlt, templateMeta, showAllTemplates } = copy.ui;
  return {
    ...copy,
    ui: {
      ...copy.ui,
      templateAlt: (name) => fill(templateAlt, { name }),
      templateMeta: (columns, width, height) =>
        fill(templateMeta, { columns, width, height }),
      showAllTemplates: (count) => fill(showAllTemplates, { count }),
    },
  };
}

export type RootLoaderData = { homeCopy: SerializedHomeCopy | null } | undefined;

// The copy for the locale in the current URL. English needs no loader data —
// it ships in the bundle as the fallback, which also covers error pages
// rendered before the root loader has run.
export function useHomeCopy(): HomeCopy {
  const data = useRouteLoaderData("root") as RootLoaderData;
  const serialized = data?.homeCopy ?? null;
  return useMemo(
    () => (serialized ? hydrateHomeCopy(serialized) : EN_HOME_COPY),
    [serialized],
  );
}
