import type { ReactElement } from "react";
import type { Route } from "./+types/docs.help";
import { ContentLayout } from "~/components/ContentLayout";
import {
  IconCloud,
  IconDevice,
  IconExport,
  IconGradient,
  IconKeyboard,
  IconProject,
  IconShapes,
  IconTemplates,
  IconUpload,
} from "~/components/home/icons";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { SITE_NAME, SITE_URL } from "~/config/site";

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([
  { name: "Docs", path: "/docs/help" },
  { name: "Help", path: "/docs/help" },
]);

const TITLE = `Help & Documentation — ${SITE_NAME}`;
const DESCRIPTION =
  "Complete guide to Screenshot Bro for macOS — projects, rows, templates, device frames, backgrounds, locales, exporting, and keyboard shortcuts.";
const PAGE_URL = `${SITE_URL}/docs/help`;

export const meta: Route.MetaFunction = ({ matches }) =>
  mergeMeta(matches, [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: PAGE_URL },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ]);

const SUPPORT_EMAIL = "leskiv.taras@gmail.com";

type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "li"; text: string }
  | { kind: "oli"; text: string }
  | { kind: "tip"; text: string }
  | {
      kind: "table";
      title: string;
      rows: { keys: string; description: string }[];
    };

type SectionImage = {
  src?: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

type SectionId =
  | "welcome"
  | "projects"
  | "rows"
  | "templates"
  | "shapes"
  | "devices"
  | "backgrounds"
  | "editing"
  | "locales"
  | "importing"
  | "exporting"
  | "app-store-connect"
  | "icloud"
  | "settings"
  | "pro-features"
  | "tips"
  | "shortcuts"
  | "support";

type Section = {
  id: SectionId;
  navTitle: string;
  title: string;
  subtitle?: string;
  image?: SectionImage;
  blocks: Block[];
};

const SECTIONS: Section[] = [
  {
    id: "welcome",
    navTitle: "Welcome",
    title: "Welcome to Screenshot Bro",
    subtitle: "Beautiful App Store and Google Play screenshots, made on your Mac.",
    image: {
      src: "/docs/help/editor-overview.webp",
      alt: "Screenshot Bro editor with two rows of templates and the right-side inspector",
      width: 1600,
      height: 1004,
      caption: "The Screenshot Bro editor — rows of templates with a shared row canvas, plus the inspector on the right.",
    },
    blocks: [
      { kind: "p", text: "Screenshot Bro turns raw device screenshots into polished, store-ready marketing images. Drop in a screenshot, pick a device frame, add a headline, and export at exactly the resolution the App Store and Google Play expect." },
      { kind: "h", text: "Three things to know first" },
      { kind: "li", text: "**Projects** hold one screenshot set per app — usually one project per app, or one per major release." },
      { kind: "li", text: "**Rows** inside a project group screenshots by device type (iPhone, iPad, Android phone, etc.). Each device size gets its own row because the App Store requires different resolutions." },
      { kind: "li", text: "**Templates** are the columns inside a row — the individual screenshots you'll submit. Most apps need 3–10 templates per row." },
      { kind: "h", text: "A typical workflow" },
      { kind: "oli", text: "Create a new project from a template, or start blank." },
      { kind: "oli", text: "Drop your raw device screenshots onto the templates — Screenshot Bro detects iPhone vs iPad vs Android from the image dimensions and routes them to the right row." },
      { kind: "oli", text: "Pick a device frame, add a headline, choose a background, and arrange shapes." },
      { kind: "oli", text: "Add locales for languages you support — translate text once and let the layout follow." },
      { kind: "oli", text: "Export. You'll get a folder organized by locale and device, ready to upload." },
      { kind: "tip", text: "If this is your first time, the **Onboarding** sheet will walk you through picking a default screenshot size and device. Pick a new project from a template any time via **File ▸ New Project**." },
    ],
  },
  {
    id: "projects",
    navTitle: "Projects",
    title: "Projects",
    subtitle: "One project per app — or per major release.",
    image: {
      alt: "New Project window with name field, Blank/Template choice, and configurable rows",
      width: 1600,
      height: 1033,
      caption: "**File ▸ New Project** — set a name, choose Blank or Template, and pre-configure rows with their device categories.",
    },
    blocks: [
      { kind: "p", text: "A project is a self-contained collection of rows, templates, shapes, locales, and image resources. Projects are stored on disk under your user Application Support folder and can be optionally synced via iCloud Drive." },
      { kind: "h", text: "Creating a project" },
      { kind: "li", text: "**File ▸ New Project…** (⌘N) opens the New Project window." },
      { kind: "li", text: "Choose **Blank** to set up rows and screenshot sizes manually, or **From Template** to start with a pre-designed layout." },
      { kind: "li", text: "In Blank mode, pick the device categories you want — each one becomes a row with the right default screenshot size for the App Store / Play Store." },
      { kind: "h", text: "Switching between projects" },
      { kind: "li", text: "Use the project picker in the toolbar to jump between projects." },
      { kind: "li", text: "Pinned and recent projects appear at the top." },
      { kind: "li", text: "Project order can be set to **Creation date** or **Manual** in Settings ▸ General." },
      { kind: "h", text: "Renaming, duplicating, deleting" },
      { kind: "li", text: "Right-click a project in the picker for rename, duplicate, and delete actions." },
      { kind: "li", text: "Deleted projects are kept as **tombstones** for 30 days so iCloud sync can resolve conflicts cleanly. After 30 days the tombstone (and all images) are purged." },
      { kind: "h", text: "Where projects live on disk" },
      { kind: "li", text: "`~/Library/Application Support/screenshot/projects.json` — index of all projects." },
      { kind: "li", text: "`~/Library/Application Support/screenshot/projects/<uuid>/project.json` — project data." },
      { kind: "li", text: "`~/Library/Application Support/screenshot/projects/<uuid>/resources/` — imported images, screenshots, and SVGs." },
      { kind: "li", text: "The `project.json` format is fully documented as a JSON Schema — see the [Project File Schema](/docs/project-schema) reference for generating, validating, or transforming projects with scripts and AI." },
      { kind: "tip", text: "Projects autosave 0.3 seconds after the last change. You don't need to manually save. To make a one-off backup, use **Settings ▸ Export ▸ Back Up Projects**." },
    ],
  },
  {
    id: "rows",
    navTitle: "Rows",
    title: "Rows",
    subtitle: "One row per device type.",
    image: {
      alt: "Two rows of templates in the editor, each with its own screenshot size",
      width: 1600,
      height: 1284,
      caption: "Each row groups templates of one device size — the App Store requires separate uploads per size.",
    },
    blocks: [
      { kind: "p", text: "Rows are horizontal groups of screenshots inside a project. Each row has its own screenshot size (in pixels), device category, and a row-level background. The App Store requires separate uploads per device size — that's why rows exist." },
      { kind: "h", text: "Adding rows" },
      { kind: "li", text: "Click **Add Row** at the bottom of the canvas, or use the inspector when no row is selected." },
      { kind: "li", text: "Choose a device category: **iPhone**, **iPad Pro 11\"**, **iPad Pro 13\"**, **MacBook**, **Android Phone**, **Android Tablet**, or **Invisible** (an abstract layout with no visible frame)." },
      { kind: "li", text: "Each category sets the row's default screenshot pixel size to a value the relevant store accepts." },
      { kind: "h", text: "Row inspector" },
      { kind: "li", text: "Select a row (click empty canvas space inside it) to reveal row-level controls in the inspector." },
      { kind: "li", text: "**Row label** — names the folder this row exports into." },
      { kind: "li", text: "**Screenshot size presets** — quickly switch between supported store resolutions." },
      { kind: "li", text: "**Background editor** — color, gradient, or image. See the **Backgrounds** topic." },
      { kind: "li", text: "**Spanning background** — when on, the background spans the entire row width across all templates. When off, every template paints the same background independently." },
      { kind: "h", text: "Reordering and deleting" },
      { kind: "li", text: "Drag a row's header to reorder. Use **⌘D** to duplicate a selected row." },
      { kind: "li", text: "**Delete** removes the row. Settings ▸ General has a confirmation toggle." },
      { kind: "tip", text: "If you only see one row, you may be on the **Free** tier (limit: 3 rows per project). Upgrading to Pro removes this limit. See **Free vs Pro**." },
    ],
  },
  {
    id: "templates",
    navTitle: "Templates",
    title: "Templates",
    subtitle: "The individual screenshots inside a row.",
    image: {
      alt: "A row with three templates side by side, each rendering a different design",
      width: 1600,
      height: 453,
      caption: "A row of three templates. Each is one final exported image at the row's pixel size.",
    },
    blocks: [
      { kind: "p", text: "Each column inside a row is a template. A template is one final exported image — its dimensions match the row's screenshot size. The App Store accepts up to 10 templates per row; Google Play up to 8." },
      { kind: "h", text: "Adding templates" },
      { kind: "li", text: "Click **Add Template** (the **+** button at the right end of the row)." },
      { kind: "li", text: "New templates inherit the row's background and dimensions." },
      { kind: "li", text: "Drag templates left/right to reorder. Reordering also reorders the exported file numbering." },
      { kind: "h", text: "Per-template controls" },
      { kind: "li", text: "The **Template Control Bar** below each template lets you override the row background just for that template." },
      { kind: "li", text: "Drop a screenshot directly onto a template to attach it as the device screenshot." },
      { kind: "li", text: "The **⋯ menu** offers per-template actions like duplicate, delete, and export preview." },
      { kind: "h", text: "How shapes relate to templates" },
      { kind: "li", text: "Shapes (text, images, devices, etc.) live on the **row canvas** — the unified area behind all templates in a row. A shape can be positioned to land entirely inside one template, or to span across templates." },
      { kind: "li", text: "On export, each template is clipped to its own bounds, so a shape that spans templates will appear on each of them at the right horizontal offset." },
      { kind: "li", text: "This is what makes layouts like a single headline that flows across two screenshots possible." },
      { kind: "tip", text: "Free tier limit: 5 templates per row. Pro removes this limit. See **Free vs Pro**." },
    ],
  },
  {
    id: "shapes",
    navTitle: "Shapes & Text",
    title: "Shapes & Text",
    subtitle: "Build the layout with rectangles, circles, stars, text, images, devices, and SVGs.",
    image: {
      alt: "Inspector Shapes section with Shapes, Text, Image, Device, and SVG buttons",
      width: 510,
      height: 380,
      caption: "The **Shapes** section in the inspector — every shape type one click away.",
    },
    blocks: [
      { kind: "h", text: "Adding shapes" },
      { kind: "li", text: "Use the **Shapes** dropdown in the inspector to add a Rectangle, Circle, or Star." },
      { kind: "li", text: "Buttons next to it add Text, Image, Device, or SVG elements." },
      { kind: "li", text: "New shapes are placed at the center of the active template and immediately selected." },
      { kind: "h", text: "Text" },
      { kind: "li", text: "Double-click a text shape to edit inline. Press **Esc** or click outside to commit." },
      { kind: "li", text: "The properties bar shows font, weight, size, color, alignment, line height, and letter spacing." },
      { kind: "li", text: "Text auto-grows vertically by default. Drag a side handle to fix the width and let it wrap." },
      { kind: "li", text: "Custom fonts: import via **Settings ▸ General ▸ Custom Fonts**." },
      { kind: "h", text: "Image" },
      { kind: "li", text: "Click the image well in the properties bar to pick a file, or drag and drop directly onto the shape." },
      { kind: "li", text: "Fill modes: **Fill** (crop to fit), **Fit** (letterbox), **Stretch** (distort), **Tile** (repeat). Tile mode unlocks spacing, offset, and scale controls." },
      { kind: "li", text: "Add an outline, corner radius, or rotation from the properties bar." },
      { kind: "h", text: "Device" },
      { kind: "li", text: "Device shapes render the screenshot inside a real device frame. Pick a category and model in the properties bar." },
      { kind: "li", text: "**Drop a screenshot onto the device** to attach it. The image is automatically clipped to the screen area." },
      { kind: "li", text: "Each model has color variants and (where applicable) a landscape variant." },
      { kind: "li", text: "**Invisible** category shows the screenshot with no bezel — useful for clipped or abstract designs." },
      { kind: "h", text: "SVG" },
      { kind: "li", text: "Click **SVG** to import a vector file. Or paste raw SVG via the SVG paste dialog." },
      { kind: "li", text: "SVGs render with a configurable color override and scale crisply at any export resolution." },
      { kind: "li", text: "During resize, rendering is debounced for performance — release the mouse to see the final crisp output." },
      { kind: "h", text: "Common properties" },
      { kind: "li", text: "Color, opacity, rotation (in degrees, editable as text), border radius, outline (color + width), and a clip toggle (clips overflow to the shape)." },
      { kind: "li", text: "Z-order: **⌘⇧]** brings forward, **⌘⇧[** sends back." },
    ],
  },
  {
    id: "devices",
    navTitle: "Devices & Frames",
    title: "Devices & Frames",
    subtitle: "Real device frames with accurate screen insets.",
    image: {
      alt: "Inspector Device section showing the default device frame picker",
      width: 510,
      height: 230,
      caption: "The **Device** section in the inspector — pick a category and model with accurate screen insets.",
    },
    blocks: [
      { kind: "p", text: "Device frames wrap your screenshot in an authentic phone or tablet bezel. Screenshot Bro ships pixel-accurate frames for the latest iPhones, iPads, MacBooks, and a generic Android catalog." },
      { kind: "h", text: "Categories" },
      { kind: "li", text: "**iPhone** — iPhone 17, Air, Pro, Pro Max with the latest color variants." },
      { kind: "li", text: "**iPad Pro 11\"** and **iPad Pro 13\"** — current generation with portrait and landscape." },
      { kind: "li", text: "**MacBook** — MacBook Air 13\", MacBook Pro 14\", MacBook Pro 16\", iMac 24\"." },
      { kind: "li", text: "**Android Phone** and **Android Tablet** — generic frames that flex to match the aspect ratio of any dropped screenshot." },
      { kind: "li", text: "**Invisible** — no visible bezel, just the screenshot. Useful for clipped layouts or abstract designs." },
      { kind: "h", text: "Picking a model and color" },
      { kind: "li", text: "With a device shape selected, click the device thumbnail in the properties bar to open the picker." },
      { kind: "li", text: "Models are grouped by category. Each shows available colors as small swatches." },
      { kind: "li", text: "Switching color preserves the screenshot and any rotation." },
      { kind: "h", text: "Landscape mode" },
      { kind: "li", text: "Devices that support landscape (iPad, MacBook) auto-rotate the frame to match the dropped screenshot's aspect ratio." },
      { kind: "li", text: "Manual rotation via the rotation control on the properties bar rotates the entire shape including frame and screen content." },
      { kind: "h", text: "Image-based vs programmatic frames" },
      { kind: "li", text: "Most modern devices use **image-based frames** — high-res PNG bezels with precise screen insets defined per model." },
      { kind: "li", text: "Some abstract categories use **programmatic frames** rendered as SwiftUI shapes. They scale flawlessly to any resolution." },
      { kind: "li", text: "Both render identically in the editor preview and in the exported PNG." },
      { kind: "tip", text: "If you drop a screenshot onto an empty template (not a device shape), Screenshot Bro creates a device shape automatically using the row's category and the right model based on the screenshot's pixel size." },
    ],
  },
  {
    id: "backgrounds",
    navTitle: "Backgrounds",
    title: "Backgrounds",
    subtitle: "Color, gradient, or image — at row or template level.",
    image: {
      alt: "Background editor with Color, Gradient, and Image style tabs",
      width: 510,
      height: 260,
      caption: "The **Background** editor — three styles, switchable per row or per template.",
    },
    blocks: [
      { kind: "h", text: "Three styles" },
      { kind: "li", text: "**Color** — a solid fill picked from the inline color picker." },
      { kind: "li", text: "**Gradient** — Linear, Radial, or Angular. Edit color stops, angle, and (for Radial / Angular) the center point." },
      { kind: "li", text: "**Image** — bring in any PNG / JPEG / SVG. Pick a fill mode and tweak opacity." },
      { kind: "h", text: "Gradients" },
      { kind: "li", text: "**Linear**: choose start/end via the angle wheel. Add as many stops as you want." },
      { kind: "li", text: "**Radial**: a circular gradient with an editable center point and end radius derived from the canvas size." },
      { kind: "li", text: "**Angular**: a sweep gradient rotating around the center." },
      { kind: "li", text: "**Gradient presets**: pick from the preset gallery to apply tested stop combinations." },
      { kind: "h", text: "Image fill modes" },
      { kind: "li", text: "**Fill** — scales to cover; crops anything that doesn't fit." },
      { kind: "li", text: "**Fit** — scales so the whole image is visible; leaves transparent letterbox bars." },
      { kind: "li", text: "**Stretch** — fills exactly, distorting aspect if needed." },
      { kind: "li", text: "**Tile** — repeats the image with adjustable spacing, offset, and scale per axis." },
      { kind: "h", text: "Row vs template backgrounds" },
      { kind: "li", text: "By default a row's background applies to every template in the row." },
      { kind: "li", text: "**Spanning background** (row toggle): when on, gradients and images render once across the entire row, so a single horizon or gradient flows across all templates." },
      { kind: "li", text: "**Override per template**: from the template control bar, set a unique background that replaces the row's default just for that template." },
      { kind: "tip", text: "Spanning is great for storytelling: a sunset gradient or a single panoramic image can stretch across three templates and tell a continuous visual story in the App Store carousel." },
    ],
  },
  {
    id: "editing",
    navTitle: "Editing on the Canvas",
    title: "Editing on the Canvas",
    subtitle: "Drag, resize, rotate, snap.",
    image: {
      alt: "Canvas zoomed in on a template with shapes, headlines, and a device frame",
      width: 1050,
      height: 640,
      caption: "The row canvas — drag, resize, rotate, snap. Shapes can span across templates.",
    },
    blocks: [
      { kind: "h", text: "Selection" },
      { kind: "li", text: "Click a shape to select it. **Shift-click** to add to or remove from the selection." },
      { kind: "li", text: "**⌘A** selects every shape in the active row." },
      { kind: "li", text: "**Esc** deselects shapes; press again to deselect the row." },
      { kind: "li", text: "Click empty canvas inside a row to select the row itself and reveal row-level inspector controls." },
      { kind: "h", text: "Move, resize, rotate" },
      { kind: "li", text: "Drag the shape body to move. Drag a corner or edge handle to resize." },
      { kind: "li", text: "Drag the rotation handle (above the shape) to rotate freely. Type a degree value into the rotation field for exact control." },
      { kind: "li", text: "Hold **⇧** while resizing to lock aspect ratio." },
      { kind: "li", text: "Hold **⌥** while dragging to duplicate the shape as you move." },
      { kind: "h", text: "Snapping & alignment guides" },
      { kind: "li", text: "Shapes snap to other shapes' edges and centers, and to template boundaries, within a 4px threshold." },
      { kind: "li", text: "Blue **alignment guides** appear while dragging to show which edges are aligned." },
      { kind: "h", text: "Nudge" },
      { kind: "li", text: "Arrow keys nudge the selection by 1px." },
      { kind: "li", text: "**⇧ + Arrow** nudges by 10px." },
      { kind: "h", text: "Pan & zoom" },
      { kind: "li", text: "Scroll vertically to navigate rows." },
      { kind: "li", text: "Hold the **middle mouse button** and drag to pan." },
      { kind: "li", text: "**⌘+** / **⌘−** zoom in/out, **⌘0** resets to 100%, **F** focuses on the current selection." },
      { kind: "li", text: "The zoom slider in the toolbar ranges from 50% to 200% in 25% steps." },
      { kind: "tip", text: "If a shape spans across templates and you only see part of it, that's expected — each template clips shapes to its own bounds. Switch to a different template view or use **F** to focus on the whole shape." },
    ],
  },
  {
    id: "locales",
    navTitle: "Locales & Translations",
    title: "Locales & Translations",
    subtitle: "Translate text once, lay it out once, ship every language.",
    image: {
      alt: "Locale menu open in the menu bar showing 30 language presets",
      width: 1100,
      height: 1300,
      caption: "The **Locale** menu — pick from 30 built-in language presets, or define a custom code.",
    },
    blocks: [
      { kind: "p", text: "Locales let you generate localized screenshot sets without duplicating your project. Each locale shares the same layout and shapes; only text properties (content, font, size, alignment) are overridden per locale." },
      { kind: "h", text: "Adding locales" },
      { kind: "li", text: "Open the **Locale** menu in the toolbar, or use **Locale ▸ Manage Locales…** in the menu bar." },
      { kind: "li", text: "Pick from 30 built-in language presets, or define a custom code." },
      { kind: "li", text: "The first locale you add is the **base locale** — the one whose text is the source of truth." },
      { kind: "h", text: "Switching the active locale" },
      { kind: "li", text: "**⌘]** / **⌘[** cycle forward / backward through locales." },
      { kind: "li", text: "**⌘⌥0** jumps back to the base locale." },
      { kind: "li", text: "When editing a non-base locale, a banner appears at the top of the canvas reminding you which locale you're in." },
      { kind: "h", text: "How translations work" },
      { kind: "li", text: "In a non-base locale, edits to text shapes are saved as **per-locale overrides** — they don't change the base." },
      { kind: "li", text: "Other shape properties (position, size, color, image) are shared across all locales. Edit them once and every locale picks up the change." },
      { kind: "li", text: "If a locale has no override for a text shape, it falls back to the base locale's text." },
      { kind: "h", text: "Translation helpers" },
      { kind: "li", text: "**Auto-Translate Missing Text** — fills in text shapes that don't yet have an override for the current locale." },
      { kind: "li", text: "**Re-Translate All Text…** — replaces every existing override with a fresh translation. Use after editing the base locale's text." },
      { kind: "li", text: "**Revert to Base Language…** — drops all overrides for the current locale, falling back to base text everywhere." },
      { kind: "li", text: "**Edit Translations…** — open a side-by-side editor showing every text shape with its base content and locale overrides." },
      { kind: "h", text: "Exporting with locales" },
      { kind: "li", text: "On export, Screenshot Bro creates one folder per locale, then sub-folders per row. The structure matches what App Store Connect's localized screenshot uploads expect." },
    ],
  },
  {
    id: "importing",
    navTitle: "Importing",
    title: "Importing",
    subtitle: "Drop screenshots, images, fonts, and SVGs.",
    image: {
      alt: "Editor templates and the row dropzone at the bottom — drop targets for screenshots and images",
      width: 1600,
      height: 486,
      caption: "Drop screenshots onto templates, or onto the row dropzone — Screenshot Bro routes them by pixel size.",
    },
    blocks: [
      { kind: "h", text: "Screenshots" },
      { kind: "li", text: "Drag and drop a PNG / JPEG onto a template to attach it as a device screenshot. A device shape is auto-created if needed." },
      { kind: "li", text: "**Batch import**: drop multiple screenshots at once. Screenshot Bro inspects each image's pixel dimensions and routes it to the matching device row (iPhone vs iPad vs Android)." },
      { kind: "li", text: "If a screenshot doesn't match any existing row, a new row is offered." },
      { kind: "h", text: "Background images" },
      { kind: "li", text: "Drop directly into the background image well in the inspector, or pick via the file dialog." },
      { kind: "li", text: "Both raster and SVG images are supported as backgrounds." },
      { kind: "h", text: "SVG paste" },
      { kind: "li", text: "Use the **SVG** button in the shape toolbar to open the paste dialog." },
      { kind: "li", text: "Paste SVG markup directly. Width and height are auto-detected; you can override them." },
      { kind: "li", text: "SVGs are sanitized — script and event handlers are stripped before rendering." },
      { kind: "h", text: "Custom fonts" },
      { kind: "li", text: "**Settings ▸ General ▸ Custom Fonts** — pick `.otf` / `.ttf` files to register them with the app." },
      { kind: "li", text: "Imported fonts are bundled with the project so they survive iCloud sync and project transfer." },
      { kind: "li", text: "Fonts appear in the text shape font picker once registered." },
      { kind: "tip", text: "To capture screenshots from a connected simulator quickly, use the screenshot capture button in the template control bar — it pulls the most recent simulator screenshot directly into the template." },
    ],
  },
  {
    id: "exporting",
    navTitle: "Exporting",
    title: "Exporting",
    subtitle: "Produce store-ready PNGs and JPEGs.",
    image: {
      alt: "Export progress dialog overlaid on the editor showing batch render progress",
      width: 1600,
      height: 452,
      caption: "Export renders every locale × row × template at the configured scale, with a progress overlay.",
    },
    blocks: [
      { kind: "h", text: "Quick export" },
      { kind: "li", text: "Click **Export** in the toolbar to render the current project to PNG." },
      { kind: "li", text: "By default, Screenshot Bro exports every locale, every row, and every template at 1× scale." },
      { kind: "li", text: "File names are zero-padded (`01_…`, `02_…`) so they sort correctly when uploaded." },
      { kind: "h", text: "Format and scale" },
      { kind: "li", text: "**Settings ▸ Export ▸ Format**: PNG or JPEG. PNG is recommended for marketing screenshots." },
      { kind: "li", text: "**Scale**: 1×, 2×, or 3×. The App Store and Google Play require exact pixel dimensions, so keep this at 1× unless you specifically need oversized assets." },
      { kind: "h", text: "Folder structure" },
      { kind: "li", text: "With one locale and one row: a flat folder of templates." },
      { kind: "li", text: "With multiple locales: a top-level folder per locale." },
      { kind: "li", text: "With multiple rows: a sub-folder per row label (e.g. `iPhone 6.9\"`, `iPad 13\"`)." },
      { kind: "li", text: "This mirrors the upload flow expected by App Store Connect's localized screenshot uploader." },
      { kind: "h", text: "Export folder memory" },
      { kind: "li", text: "Screenshot Bro remembers the last folder you exported to (security-scoped bookmark)." },
      { kind: "li", text: "Toggle **Open export folder on success** in Settings to auto-reveal the result in Finder." },
      { kind: "h", text: "Preview vs export" },
      { kind: "li", text: "Use the **Export Preview** button in the template control bar to render a single template to a preview window — handy for spot-checking without going through the full export flow." },
      { kind: "li", text: "Editor and export must always match exactly. If they don't, please report it as a bug." },
    ],
  },
  {
    id: "app-store-connect",
    navTitle: "App Store Connect",
    title: "App Store Connect",
    subtitle: "Upload screenshots straight from Screenshot Bro.",
    blocks: [
      { kind: "p", text: "Connect your App Store Connect API key once and Screenshot Bro can upload exported screenshots to a specific app version without leaving the app." },
      { kind: "h", text: "Set up an API key" },
      { kind: "li", text: "Go to **App Store Connect ▸ Users and Access ▸ Integrations ▸ App Store Connect API**." },
      { kind: "li", text: "Create a key with **App Manager** access. Download the `.p8` private key file (you can only download it once)." },
      { kind: "li", text: "Note the **Issuer ID** and **Key ID**." },
      { kind: "li", text: "In Screenshot Bro: **Settings ▸ App Store Connect**, paste the Issuer ID and Key ID, and import the `.p8` file." },
      { kind: "h", text: "Uploading" },
      { kind: "li", text: "Run an export first, then click **Upload to App Store Connect** in the toolbar." },
      { kind: "li", text: "Pick the app and version. Screenshot Bro maps each row to the right device family automatically." },
      { kind: "li", text: "You can preview which screenshots will be uploaded for which locale before confirming." },
      { kind: "tip", text: "App Store Connect allows up to 10 screenshots per device family per locale. Screenshot Bro respects template ordering so the first 10 templates in each row will be uploaded in order." },
    ],
  },
  {
    id: "icloud",
    navTitle: "iCloud Sync",
    title: "iCloud Sync",
    subtitle: "Edit on one Mac, continue on another.",
    blocks: [
      { kind: "p", text: "iCloud sync keeps your project library in iCloud Drive (`iCloud.xyz.tleskiv.screenshot`). Changes made on one Mac propagate to others signed into the same iCloud account." },
      { kind: "h", text: "Enabling" },
      { kind: "li", text: "**Settings ▸ General ▸ iCloud Sync** — toggle on." },
      { kind: "li", text: "First-time enable migrates your local project library into iCloud. A progress indicator shows the migration." },
      { kind: "li", text: "Disabling does **not** delete your iCloud data — your projects remain in the iCloud container until you delete them manually." },
      { kind: "h", text: "How conflicts are resolved" },
      { kind: "li", text: "Each project is merged using a **last-writer-wins** strategy at the field level. The most recently edited shape, row, or background wins." },
      { kind: "li", text: "Deletions are tracked as **tombstones** for 30 days, so a delete on Mac A correctly propagates to Mac B even if the device is offline at the moment of deletion." },
      { kind: "li", text: "File coordination (`NSFileCoordinator`) prevents corruption from concurrent reads/writes." },
      { kind: "h", text: "Knowing what's syncing" },
      { kind: "li", text: "The toolbar shows an iCloud status icon when an upload or download is in progress." },
      { kind: "li", text: "Behind the scenes, an `NSMetadataQuery` watches each project for upload/download progress." },
      { kind: "tip", text: "If sync seems stuck, open Finder ▸ iCloud Drive ▸ Screenshot Bro and check whether files are still uploading. Toggling iCloud off and on again forces a re-scan." },
    ],
  },
  {
    id: "settings",
    navTitle: "Settings & Defaults",
    title: "Settings & Defaults",
    subtitle: "Tune the app to match your workflow.",
    blocks: [
      { kind: "h", text: "General" },
      { kind: "li", text: "**Appearance** — Auto / Light / Dark." },
      { kind: "li", text: "**Language** — override the app interface language. Requires a relaunch." },
      { kind: "li", text: "**Default screenshot size** — used when creating new rows." },
      { kind: "li", text: "**Default device** — pre-selects a device category and model for new rows." },
      { kind: "li", text: "**Default templates per row** — number of empty templates a new row starts with." },
      { kind: "li", text: "**Default zoom** — initial zoom level when opening the app." },
      { kind: "li", text: "**Confirm before deleting** — show a confirmation prompt for destructive actions on rows and screenshots." },
      { kind: "li", text: "**Project order** — Creation date or Manual." },
      { kind: "li", text: "**Custom fonts** — manage imported `.otf`/`.ttf` files." },
      { kind: "li", text: "**iCloud sync** — toggle and check status." },
      { kind: "li", text: "**Back up projects** — write a one-off zip of your project library to a folder you choose." },
      { kind: "h", text: "Export" },
      { kind: "li", text: "**Format** — PNG or JPEG." },
      { kind: "li", text: "**Scale** — 1×, 2×, 3×." },
      { kind: "li", text: "**Open export folder on success** — auto-reveal results in Finder." },
      { kind: "li", text: "**Last export folder** — Screenshot Bro remembers and reuses your folder choice." },
      { kind: "h", text: "App Store Connect" },
      { kind: "li", text: "API key, Issuer ID, Key ID. See the App Store Connect topic." },
      { kind: "h", text: "Purchase" },
      { kind: "li", text: "Current plan, restore purchases, manage subscription." },
      { kind: "h", text: "Attributions" },
      { kind: "li", text: "Credits and licenses for fonts, icons, and bundled assets." },
    ],
  },
  {
    id: "pro-features",
    navTitle: "Free vs Pro",
    title: "Free vs Pro",
    subtitle: "What's included and where Pro unlocks more.",
    blocks: [
      { kind: "h", text: "Free tier" },
      { kind: "li", text: "**1 project** — you can keep editing it forever." },
      { kind: "li", text: "**3 rows** per project." },
      { kind: "li", text: "**5 templates** per row." },
      { kind: "li", text: "Full access to all device frames, shapes, locales, and export resolutions." },
      { kind: "li", text: "Watermark-free exports." },
      { kind: "h", text: "Pro" },
      { kind: "li", text: "Unlimited projects, rows, and templates." },
      { kind: "li", text: "App Store Connect upload." },
      { kind: "li", text: "iCloud sync." },
      { kind: "li", text: "Future Pro-only features as they ship." },
      { kind: "h", text: "Buying or restoring" },
      { kind: "li", text: "**Settings ▸ Purchase** lists the available plans. RevenueCat handles the transaction." },
      { kind: "li", text: "**Restore Purchases** brings back an existing subscription on a new Mac." },
      { kind: "li", text: "Subscriptions are managed through your Apple ID; cancellations happen via System Settings ▸ Apple ID ▸ Subscriptions." },
      { kind: "tip", text: "Pro paywall messages adapt to context — the prompt you see when adding a 4th row is different from the one you see when adding a 6th template, so you always know exactly which limit you're hitting." },
    ],
  },
  {
    id: "tips",
    navTitle: "Tips & Tricks",
    title: "Tips & Tricks",
    subtitle: "Small things that save time.",
    blocks: [
      { kind: "li", text: "**Drop folders, not files.** Drag a folder of screenshots onto the canvas — Screenshot Bro will batch-import and route by device size." },
      { kind: "li", text: "**Span backgrounds for storytelling.** Turn on row spanning and use a wide gradient or panoramic image to make a 3-template carousel feel like one continuous scene." },
      { kind: "li", text: "**Lock aspect when resizing icons** by holding **⇧** while dragging a corner handle." },
      { kind: "li", text: "**Duplicate while dragging** with **⌥**. Combined with snap, this is the fastest way to lay out a row of equal-sized cards." },
      { kind: "li", text: "**Type rotation degrees directly.** The rotation field accepts text input — type `45` for an exact 45° rotation instead of dragging." },
      { kind: "li", text: "**Use the SVG button for icons.** SVG scales infinitely, so your hero icon stays crisp at 1×, 2×, or 3× export." },
      { kind: "li", text: "**Re-translate after editing base text.** If you change the base headline, run **Locale ▸ Re-Translate All Text…** so every locale picks up the new wording." },
      { kind: "li", text: "**Use Invisible category for clipped designs.** When you want the screenshot to bleed off the canvas with no bezel, pick the Invisible device category." },
      { kind: "li", text: "**Pin frequently used projects.** Right-click in the project picker to pin and keep them at the top." },
      { kind: "li", text: "**Preview before exporting.** The export preview button on each template renders just that one template — handy for spot-checks." },
      { kind: "li", text: "**Custom fonts persist.** Imported fonts are bundled per project, so a project shared via iCloud or zip backup keeps its typography." },
    ],
  },
  {
    id: "shortcuts",
    navTitle: "Keyboard Shortcuts",
    title: "Keyboard Shortcuts",
    subtitle: "Everything you can do without the mouse.",
    blocks: [
      {
        kind: "table",
        title: "File",
        rows: [{ keys: "⌘N", description: "New project" }],
      },
      {
        kind: "table",
        title: "Edit",
        rows: [
          { keys: "⌘C", description: "Copy selected shapes (or text in fields)" },
          { keys: "⌘X", description: "Cut selected shapes" },
          { keys: "⌘V", description: "Paste shapes" },
          { keys: "⌘A", description: "Select all shapes in the active row" },
          { keys: "⌘D", description: "Duplicate selected shapes / row" },
          { keys: "Delete", description: "Delete selected shapes" },
          { keys: "Esc", description: "Deselect" },
          { keys: "⌘⇧]", description: "Bring shape to front" },
          { keys: "⌘⇧[", description: "Send shape to back" },
          { keys: "← → ↑ ↓", description: "Nudge selection by 1px" },
          { keys: "⇧ + Arrow", description: "Nudge selection by 10px" },
          { keys: "⌥ + Drag", description: "Duplicate while dragging" },
        ],
      },
      {
        kind: "table",
        title: "View",
        rows: [
          { keys: "⌘+", description: "Zoom in" },
          { keys: "⌘−", description: "Zoom out" },
          { keys: "⌘0", description: "Actual size (100%)" },
          { keys: "F", description: "Focus on selection" },
          { keys: "Middle-click + drag", description: "Pan canvas" },
        ],
      },
      {
        kind: "table",
        title: "Locale",
        rows: [
          { keys: "⌘]", description: "Next locale" },
          { keys: "⌘[", description: "Previous locale" },
          { keys: "⌘⌥0", description: "Switch to base locale" },
        ],
      },
      {
        kind: "table",
        title: "Text editing",
        rows: [
          { keys: "Double-click text", description: "Enter inline edit mode" },
          { keys: "Esc / click outside", description: "Commit text edit" },
        ],
      },
    ],
  },
  {
    id: "support",
    navTitle: "Support & Feedback",
    title: "Support & Feedback",
    subtitle: "We read every message.",
    blocks: [
      { kind: "h", text: "Get in touch" },
      { kind: "li", text: `Email: [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})` },
      { kind: "h", text: "When reporting a bug" },
      { kind: "p", text: "To help us reproduce, please include:" },
      { kind: "li", text: "macOS version (Apple menu ▸ About This Mac)." },
      { kind: "li", text: "Screenshot Bro version (Apple menu ▸ About Screenshot Bro)." },
      { kind: "li", text: "Steps to reproduce, ideally with a screen recording." },
      { kind: "li", text: "If the issue affects a project, **Settings ▸ Export ▸ Back Up Projects** and attach the resulting backup so we can reproduce on the exact data." },
      { kind: "h", text: "Legal" },
      { kind: "li", text: "[Privacy Policy](/privacy)" },
      { kind: "tip", text: "Loved the app? An App Store review helps tremendously and keeps Screenshot Bro independent." },
    ],
  },
];

const ICON_SIZE = 16;
const SVG_PROPS = {
  "aria-hidden": true,
  width: ICON_SIZE,
  height: ICON_SIZE,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const ICON_MAP: Record<SectionId | "project-schema", ReactElement> = {
  welcome: (
    <svg {...SVG_PROPS}>
      <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7z" />
      <path d="M19 14l.7 1.8L21.5 16.5 19.7 17.2 19 19l-.7-1.8L16.5 16.5l1.8-.7z" />
      <path d="M5 4l.5 1.3L7 5.8l-1.5.5L5 7.8l-.5-1.5L3 5.8l1.5-.5z" />
    </svg>
  ),
  projects: <IconProject size={ICON_SIZE} />,
  rows: (
    <svg {...SVG_PROPS}>
      <rect x="3" y="4" width="18" height="5" rx="1" />
      <rect x="3" y="13" width="18" height="5" rx="1" />
    </svg>
  ),
  templates: <IconTemplates size={ICON_SIZE} />,
  shapes: <IconShapes size={ICON_SIZE} />,
  devices: <IconDevice size={ICON_SIZE} />,
  backgrounds: <IconGradient size={ICON_SIZE} />,
  editing: (
    <svg {...SVG_PROPS}>
      <path d="M16.5 3.5l4 4L8 20H4v-4z" />
      <line x1="13" y1="7" x2="17" y2="11" />
    </svg>
  ),
  locales: (
    <svg {...SVG_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  importing: (
    <svg {...SVG_PROPS}>
      <line x1="12" y1="3" x2="12" y2="15" />
      <polyline points="7,10 12,15 17,10" />
      <path d="M4 19h16" />
    </svg>
  ),
  exporting: <IconExport size={ICON_SIZE} />,
  "app-store-connect": (
    <svg {...SVG_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8.5,12 12,8.5 15.5,12" />
      <line x1="12" y1="8.5" x2="12" y2="16" />
    </svg>
  ),
  icloud: <IconCloud size={ICON_SIZE} />,
  settings: (
    <svg {...SVG_PROPS}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.6-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z" />
    </svg>
  ),
  "pro-features": (
    <svg {...SVG_PROPS}>
      <polygon points="12,2 15.1,8.6 22,9.4 17,14.3 18.3,21 12,17.8 5.7,21 7,14.3 2,9.4 8.9,8.6" />
    </svg>
  ),
  tips: (
    <svg {...SVG_PROPS}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.6.5 1 1.2 1 2V16h6v-.5c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
    </svg>
  ),
  shortcuts: <IconKeyboard size={ICON_SIZE} />,
  support: (
    <svg {...SVG_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5" />
      <line x1="12" y1="17" x2="12" y2="17.01" />
    </svg>
  ),
  "project-schema": (
    <svg {...SVG_PROPS}>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="14,3 14,9 20,9" />
      <polyline points="10,13 8,15 10,17" />
      <polyline points="14,13 16,15 14,17" />
    </svg>
  ),
};

const NAV_ENTRIES: { id: SectionId | "project-schema"; navTitle: string; href?: string }[] = [
  ...SECTIONS.map((s) => ({ id: s.id, navTitle: s.navTitle })),
  { id: "project-schema", navTitle: "Project File Schema", href: "/docs/project-schema" },
];

const MD_REGEX = /\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;

function MD({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIdx = 0;
  let key = 0;
  for (const match of text.matchAll(MD_REGEX)) {
    const idx = match.index ?? 0;
    if (idx > lastIdx) {
      parts.push(text.slice(lastIdx, idx));
    }
    if (match[1] !== undefined) {
      parts.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      parts.push(<code key={key++}>{match[2]}</code>);
    } else if (match[3] !== undefined && match[4] !== undefined) {
      const href = match[4];
      const external = /^https?:\/\//.test(href);
      parts.push(
        <a
          key={key++}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {match[3]}
        </a>,
      );
    }
    lastIdx = idx + match[0].length;
  }
  if (lastIdx < text.length) {
    parts.push(text.slice(lastIdx));
  }
  return <>{parts}</>;
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-5 rounded-lg border border-yellow-300/25 bg-yellow-300/[0.06] px-4 py-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-yellow-300/80">
        Tip
      </span>
      <p className="mt-1 mb-0 text-white/75">{children}</p>
    </div>
  );
}

function renderBlocks(blocks: Block[]): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.kind === "li" || b.kind === "oli") {
      const start = b.kind;
      const items: Extract<Block, { kind: "li" | "oli" }>[] = [];
      while (i < blocks.length) {
        const next = blocks[i];
        if (next.kind !== start) break;
        items.push(next);
        i++;
      }
      const ListTag = start === "oli" ? "ol" : "ul";
      out.push(
        <ListTag key={key++}>
          {items.map((item, j) => (
            <li key={j}>
              <MD text={item.text} />
            </li>
          ))}
        </ListTag>,
      );
    } else if (b.kind === "p") {
      out.push(
        <p key={key++}>
          <MD text={b.text} />
        </p>,
      );
      i++;
    } else if (b.kind === "h") {
      out.push(
        <h3 key={key++}>
          <MD text={b.text} />
        </h3>,
      );
      i++;
    } else if (b.kind === "tip") {
      out.push(
        <Tip key={key++}>
          <MD text={b.text} />
        </Tip>,
      );
      i++;
    } else if (b.kind === "table") {
      out.push(
        <div key={key++}>
          <h3>{b.title}</h3>
          <table>
            <tbody>
              {b.rows.map((row) => (
                <tr key={row.keys}>
                  <td className="whitespace-nowrap align-top w-1">
                    <code>{row.keys}</code>
                  </td>
                  <td>{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      i++;
    }
  }
  return out;
}

function SectionView({ section }: { section: Section }) {
  const image = section.image;
  const imageSrc = image && (image.src ?? `/docs/help/${section.id}.webp`);
  return (
    <section>
      <h2 id={section.id}>{section.title}</h2>
      {section.subtitle && (
        <p className="-mt-2 mb-4 text-white/55 italic">{section.subtitle}</p>
      )}
      {image && imageSrc && (
        <figure className="not-prose my-6">
          <img
            src={imageSrc}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-lg border border-border-subtle bg-surface-raised"
          />
          {image.caption && (
            <figcaption className="mt-2 text-center text-xs text-white/55 italic">
              <MD text={image.caption} />
            </figcaption>
          )}
        </figure>
      )}
      {renderBlocks(section.blocks)}
    </section>
  );
}

export default function Help() {
  return (
    <ContentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }}
      />
      <div className="max-w-6xl mx-auto">
        <header className="prose-policy mb-12">
          <h1>Screenshot Bro Help</h1>
          <p className="meta">
            Complete guide to designing App Store and Google Play screenshots
            on macOS.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[200px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono mb-4">
              On this page
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_ENTRIES.map((entry) => (
                <a
                  key={entry.id}
                  href={entry.href ?? `#${entry.id}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white/95 transition-colors"
                >
                  <span className="text-white/40 shrink-0">
                    {ICON_MAP[entry.id]}
                  </span>
                  <span>{entry.navTitle}</span>
                </a>
              ))}
            </nav>
          </aside>

          <article className="prose-policy max-w-3xl">
            {SECTIONS.map((section) => (
              <SectionView key={section.id} section={section} />
            ))}
          </article>
        </div>
      </div>
    </ContentLayout>
  );
}
