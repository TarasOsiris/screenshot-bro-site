// The starter templates bundled with the app (`Templates.bundle`), as the
// home page's Templates section shows them. Each image in
// public/template-gallery/ is an export of the real template, rendered through
// the app's MCP server with TT Tracker screenshots in the device frames: the
// stage image joins the first phone row's first four columns, and the thumb
// joins its first three. `columns`, `width` and `height` describe that row as
// the template ships it.
//
// Duo Showcase is left out: its folded/unfolded iPhone Duo frames only take a
// screenshot in the first device of a column, so an export shows empty frames.
export type StarterTemplate = {
  id: string;
  name: string;
  columns: number;
  width: number;
  height: number;
  imageWidth: number;
  imageHeight: number;
  thumbWidth: number;
  thumbHeight: number;
};

export const STARTER_TEMPLATES: StarterTemplate[] = [
  { id: "amethyst", name: "Amethyst", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "aqua-motion", name: "Aqua Motion", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "arctic-glass", name: "Arctic Glass", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "atelier", name: "Atelier", columns: 3, width: 1242, height: 2688, imageWidth: 1386, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "aurora", name: "Aurora", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "bauhaus-studio", name: "Bauhaus Studio", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "blueprint", name: "Blueprint", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "candy-pop", name: "Candy Pop", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "citrus-pop", name: "Citrus Pop", columns: 5, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "clean", name: "Clean", columns: 5, width: 1206, height: 2622, imageWidth: 1840, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "clean-2", name: "Clean 2", columns: 5, width: 1206, height: 2622, imageWidth: 1840, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "copper-luxe", name: "Copper Luxe", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "cosmic-bloom", name: "Cosmic Bloom", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "crimson", name: "Crimson", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "cyber-grid", name: "Cyber Grid", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "dark-teal", name: "Dark Teal", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "deep-purple", name: "Deep Purple", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "dusk", name: "Dusk", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "editorial-red", name: "Editorial Red", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "emerald", name: "Emerald", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "emerald-navy", name: "Emerald Navy", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "forest", name: "Forest", columns: 6, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "forma", name: "Forma", columns: 3, width: 1242, height: 2688, imageWidth: 1386, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "golden", name: "Golden", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "google-play", name: "Google Play", columns: 3, width: 1080, height: 1920, imageWidth: 1686, imageHeight: 1000, thumbWidth: 336, thumbHeight: 200 },
  { id: "graphite", name: "Graphite", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "green-pink", name: "Green Pink", columns: 6, width: 1206, height: 2622, imageWidth: 1840, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "ice-blue", name: "Ice Blue", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "indigo", name: "Indigo", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "indigo-noir", name: "Indigo Noir", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "iris", name: "Iris", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "lavender", name: "Lavender", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "lilac-haze", name: "Lilac Haze", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "midnight", name: "Midnight", columns: 6, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "mint-fresh", name: "Mint Fresh", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "monochrome", name: "Monochrome", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "navy", name: "Navy", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "navy-plum", name: "Navy Plum", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "neon-nights", name: "Neon Nights", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "nightfall", name: "Nightfall", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "noir", name: "Noir", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "noir-cobalt", name: "Noir Cobalt", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "obsidian", name: "Obsidian", columns: 9, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "ocean-blue", name: "Ocean Blue", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "onyx", name: "Onyx", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "paper", name: "Paper", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "peach-sorbet", name: "Peach Sorbet", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "purple-gold", name: "Purple Gold", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "rainbow", name: "Rainbow", columns: 10, width: 1206, height: 2622, imageWidth: 1840, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "royal-blue", name: "Royal Blue", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "sapphire", name: "Sapphire", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "solar-flare", name: "Solar Flare", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "sorbet-split", name: "Sorbet Split", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "sports", name: "Sports", columns: 5, width: 1320, height: 2868, imageWidth: 1840, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "steel-blue", name: "Steel Blue", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "still", name: "Still", columns: 3, width: 1242, height: 2688, imageWidth: 1386, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "sunset", name: "Sunset", columns: 6, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "teal-amber", name: "Teal Amber", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "teal-noir", name: "Teal Noir", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "verdant-calm", name: "Verdant Calm", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "violet", name: "Violet", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "volt", name: "Volt", columns: 4, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
  { id: "white-indigo", name: "White Indigo", columns: 10, width: 1290, height: 2796, imageWidth: 1848, imageHeight: 1000, thumbWidth: 276, thumbHeight: 200 },
];

export const DEFAULT_STARTER_TEMPLATE_ID = "aurora";

export function starterTemplateImage(id: string): string {
  return `/template-gallery/${id}.webp`;
}

export function starterTemplateThumb(id: string): string {
  return `/template-gallery/thumbs/${id}.webp`;
}
