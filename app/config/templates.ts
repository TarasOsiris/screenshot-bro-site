// The starter templates bundled with the app (`Templates.bundle`), as the
// home page's Templates section shows them. Each image in
// public/template-gallery/ is an export of the real template, rendered through
// the app's MCP server with TT Tracker screenshots in the device frames.
// `<id>/<n>.webp` are the first phone row's first `shots` columns, one image
// per App Store screenshot; the thumb joins its first three. `columns`, `width`
// and `height` describe that row as the template ships it.
//
// `android` is the template's "Android Phone" row: `<id>/android-<n>.webp` and
// `thumbs/<id>-android.webp`, exported through the Windows port's MCP server
// with TT Tracker's Play Store screenshots (captured on a 1080×2160 emulator).
// Google Play's own phone row is its first row, so its plain images are the
// same Android export.
//
// Duo Showcase is left out: its folded/unfolded iPhone Duo frames only take a
// screenshot in the first device of a column, so an export shows empty frames.
// Sports has no Android preview: its Android row wraps the headline into the
// pills below it.
export type TemplateStore = "appStore" | "googlePlay";

export type TemplateRowPreview = {
  columns: number;
  width: number;
  height: number;
  shots: number;
  shotWidth: number;
  shotHeight: number;
  thumbWidth: number;
  thumbHeight: number;
};

export type StarterTemplate = TemplateRowPreview & {
  id: string;
  name: string;
  android?: { columns: number; height: number };
};

export type TemplatePreview = TemplateRowPreview & {
  shotUrls: string[];
  thumbUrl: string;
};

const MAX_SHOTS = 6;
const ANDROID_WIDTH = 1080;

export const STARTER_TEMPLATES: StarterTemplate[] = [
  { id: "amethyst", name: "Amethyst", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 10, height: 2160 } },
  { id: "aqua-motion", name: "Aqua Motion", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "arctic-glass", name: "Arctic Glass", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "atelier", name: "Atelier", columns: 3, width: 1242, height: 2688, shots: 3, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 3, height: 1920 } },
  { id: "aurora", name: "Aurora", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "bauhaus-studio", name: "Bauhaus Studio", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "blueprint", name: "Blueprint", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "candy-pop", name: "Candy Pop", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "citrus-pop", name: "Citrus Pop", columns: 5, width: 1290, height: 2796, shots: 5, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 5, height: 2160 } },
  { id: "clean", name: "Clean", columns: 5, width: 1206, height: 2622, shots: 5, shotWidth: 460, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 5, height: 2160 } },
  { id: "clean-2", name: "Clean 2", columns: 5, width: 1206, height: 2622, shots: 5, shotWidth: 460, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 5, height: 2160 } },
  { id: "copper-luxe", name: "Copper Luxe", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "cosmic-bloom", name: "Cosmic Bloom", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "crimson", name: "Crimson", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "cyber-grid", name: "Cyber Grid", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "dark-teal", name: "Dark Teal", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "deep-purple", name: "Deep Purple", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "dusk", name: "Dusk", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "editorial-red", name: "Editorial Red", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "emerald", name: "Emerald", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "emerald-navy", name: "Emerald Navy", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "forest", name: "Forest", columns: 6, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 6, height: 2160 } },
  { id: "forma", name: "Forma", columns: 3, width: 1242, height: 2688, shots: 3, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 3, height: 1920 } },
  { id: "golden", name: "Golden", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 10, height: 2160 } },
  { id: "google-play", name: "Google Play", columns: 3, width: 1080, height: 1920, shots: 3, shotWidth: 562, shotHeight: 1000, thumbWidth: 336, thumbHeight: 200, android: { columns: 3, height: 1920 } },
  { id: "graphite", name: "Graphite", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "green-pink", name: "Green Pink", columns: 6, width: 1206, height: 2622, shots: 6, shotWidth: 460, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 6, height: 2160 } },
  { id: "ice-blue", name: "Ice Blue", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 10, height: 2160 } },
  { id: "indigo", name: "Indigo", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 10, height: 2160 } },
  { id: "indigo-noir", name: "Indigo Noir", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "iris", name: "Iris", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "lavender", name: "Lavender", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "lilac-haze", name: "Lilac Haze", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "midnight", name: "Midnight", columns: 6, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 6, height: 2160 } },
  { id: "mint-fresh", name: "Mint Fresh", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "monochrome", name: "Monochrome", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "navy", name: "Navy", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "navy-plum", name: "Navy Plum", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "neon-nights", name: "Neon Nights", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "nightfall", name: "Nightfall", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "noir", name: "Noir", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "noir-cobalt", name: "Noir Cobalt", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "obsidian", name: "Obsidian", columns: 9, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "ocean-blue", name: "Ocean Blue", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "onyx", name: "Onyx", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "paper", name: "Paper", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "peach-sorbet", name: "Peach Sorbet", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "purple-gold", name: "Purple Gold", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "rainbow", name: "Rainbow", columns: 10, width: 1206, height: 2622, shots: 6, shotWidth: 460, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 10, height: 2160 } },
  { id: "royal-blue", name: "Royal Blue", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "sapphire", name: "Sapphire", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "solar-flare", name: "Solar Flare", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "sorbet-split", name: "Sorbet Split", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "sports", name: "Sports", columns: 5, width: 1320, height: 2868, shots: 5, shotWidth: 460, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "steel-blue", name: "Steel Blue", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "still", name: "Still", columns: 3, width: 1242, height: 2688, shots: 3, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 3, height: 1920 } },
  { id: "sunset", name: "Sunset", columns: 6, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 6, height: 2160 } },
  { id: "teal-amber", name: "Teal Amber", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "teal-noir", name: "Teal Noir", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "verdant-calm", name: "Verdant Calm", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "violet", name: "Violet", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
  { id: "volt", name: "Volt", columns: 4, width: 1290, height: 2796, shots: 4, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 4, height: 2160 } },
  { id: "white-indigo", name: "White Indigo", columns: 10, width: 1290, height: 2796, shots: 6, shotWidth: 462, shotHeight: 1000, thumbWidth: 276, thumbHeight: 200, android: { columns: 8, height: 2160 } },
];

export const DEFAULT_STARTER_TEMPLATE_ID = "aurora";

export function hasTemplatePreview(template: StarterTemplate, store: TemplateStore): boolean {
  return store === "appStore" || template.android !== undefined;
}

// The row a store shows for a template, or undefined when that template has no
// export for it.
export function templatePreview(
  template: StarterTemplate,
  store: TemplateStore,
): TemplatePreview | undefined {
  if (store === "appStore") {
    return {
      ...template,
      shotUrls: shotUrls(template.id, "", template.shots),
      thumbUrl: `/template-gallery/thumbs/${template.id}.webp`,
    };
  }
  if (!template.android) return undefined;
  const { columns, height } = template.android;
  const shots = Math.min(columns, MAX_SHOTS);
  const shotWidth = Math.floor((ANDROID_WIDTH * 1000) / height);
  return {
    columns,
    width: ANDROID_WIDTH,
    height,
    shots,
    shotWidth,
    shotHeight: 1000,
    thumbWidth: Math.floor(shotWidth / 5) * 3,
    thumbHeight: 200,
    shotUrls: shotUrls(template.id, "android-", shots),
    thumbUrl: `/template-gallery/thumbs/${template.id}-android.webp`,
  };
}

function shotUrls(id: string, prefix: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, index) => `/template-gallery/${id}/${prefix}${index + 1}.webp`,
  );
}
