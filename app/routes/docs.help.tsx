import type { ReactElement } from "react";
import type { Route } from "./+types/docs.help";
import { data, useLoaderData } from "react-router";
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
import {
  DocFigure,
  renderBlocks,
  type Block,
  type SectionImage,
} from "~/components/DocBlocks";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { localeHref } from "~/config/localized-routes";
import { DISCORD_INVITE_URL, SITE_NAME, SITE_URL } from "~/config/site";

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([
  { name: "Docs", path: "/docs/help" },
  { name: "Help", path: "/docs/help" },
]);

const TITLE = `Help & Documentation — ${SITE_NAME}`;
const DESCRIPTION =
  "Complete guide to Screenshot Bro for Mac, iPad, and iPhone: projects, rows, templates, device frames, backgrounds, languages, exporting, and store uploads.";

function getRouteLocale(locale?: string): LocaleCode {
  return isLocaleCode(locale) ? locale : "en";
}

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return { locale: getRouteLocale(locale) };
}

export const meta: Route.MetaFunction = ({ matches, params }) => {
  const locale = getRouteLocale(params.locale);
  const titles: Record<LocaleCode, string> = {
    en: `Help & Documentation — ${SITE_NAME}`,
    es: `Ayuda y Documentación — ${SITE_NAME}`,
    zh: `帮助中心与使用文档 — ${SITE_NAME}`,
    ja: `ヘルプ＆ドキュメント — ${SITE_NAME}`,
    de: `Hilfe & Dokumentation — ${SITE_NAME}`,
    fr: `Aide & Documentation — ${SITE_NAME}`,
    pt: `Ajuda & Documentação — ${SITE_NAME}`,
    it: `Guida e Documentazione — ${SITE_NAME}`,
    ko: `도움말 및 공식 문서 — ${SITE_NAME}`,
    ar: `المساعدة والتوثيق الرسمي — ${SITE_NAME}`,
    hi: `सहायता और दस्तावेज़ीकरण — ${SITE_NAME}`,
    uk: `Довідка та документація — ${SITE_NAME}`,
    pl: `Pomoc i dokumentacja — ${SITE_NAME}`,
  };

  const descriptions: Record<LocaleCode, string> = {
    en: "Complete guide to Screenshot Bro for Mac, iPad, and iPhone: projects, rows, templates, device frames, backgrounds, languages, exporting, and store uploads.",
    es: "Guía completa de Screenshot Bro para Mac e iPad: proyectos, plantillas, marcos de dispositivos, fondos, idiomas y exportación.",
    zh: "Screenshot Bro 官方使用指南：项目创建、尺寸排版、模版套用、机型框架、背景特效、多语言本地化及应用商店一键导出。",
    ja: "Screenshot Bro（Mac/iPad）の総合ガイド。プロジェクト管理、端末フレーム、テンプレート、多言語展開、書き出し設定を解説。",
    de: "Ausführliche Dokumentation zu Screenshot Bro: Projekte, Vorlagen, Geräterahmen, Hintergründe, Sprachen und Store-Uploads.",
    fr: "Guide complet de Screenshot Bro : gestion de projets, gabarits d'appareils, modèles, fonds, traduction et export.",
    pt: "Guia completo do Screenshot Bro: projetos, templates, molduras de dispositivos, planos de fundo e exportação para lojas.",
    it: "Guida completa a Screenshot Bro: progetti, modelli, cornici per dispositivi, sfondi, localizzazione ed esportazione per gli store.",
    ko: "Screenshot Bro 종합 가이드: 프로젝트, 템플릿, 디바이스 프레임, 배경, 다국어 지원 및 스토어 내보내기.",
    ar: "دليل شامل لتطبيق Screenshot Bro: المشاريع، القوالب، إطارات الأجهزة، الخلفيات، اللغات، والتصدير للمتاجر.",
    hi: "Screenshot Bro की पूरी गाइड: प्रोजेक्ट, टेम्प्लेट, डिवाइस फ़्रेम, बैकग्राउंड, भाषाएँ और स्टोर अपलोड।",
    uk: "Повний посібник зі Screenshot Bro для Mac, iPad та iPhone: проекти, рядки, шаблони, рамки пристроїв, фони, мови, експорт і завантаження в магазини.",
    pl: "Kompletny przewodnik po Screenshot Bro dla systemów Mac, iPad i iPhone: projekty, wiersze, szablony, ramki urządzeń, tła, języki, eksport i przesyłanie do sklepów.",
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const pageUrl = `${SITE_URL}${localeHref(locale, "/docs/help")}`;

  return mergeMeta(matches, [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: pageUrl },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ]);
};

const SUPPORT_EMAIL = "leskiv.taras@gmail.com";

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
  | "showcase"
  | "app-store-connect"
  | "google-play"
  | "icloud"
  | "automation"
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
    subtitle: "Beautiful App Store and Google Play screenshots, made on Mac, iPad, and iPhone.",
    image: {
      src: "/docs-help/editor-overview.webp",
      alt: "Screenshot Bro editor with two rows of templates and the right-side inspector",
      width: 1600,
      height: 1046,
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
      { kind: "oli", text: "Drop your raw device screenshots onto templates or rows — Screenshot Bro fills them in order and detects the device category and frame where possible." },
      { kind: "oli", text: "Pick a device frame, add a headline, choose a background, and arrange shapes." },
      { kind: "oli", text: "Add the languages you support — translate text once and let the layout follow." },
      { kind: "oli", text: "Export. You'll get a folder organized by language and device, ready to upload — or upload straight to App Store Connect or Google Play from inside the app." },
      { kind: "p", text: "New here? [How to use Screenshot Bro](/tutorials/how-to-use-screenshot-bro) walks that workflow step by step, with a screenshot of the app at each stage. This page is the reference behind it." },
      { kind: "tip", text: "If this is your first time, an interactive tour walks you through the editor when your first project opens. To run it again later, use **Settings ▸ General ▸ Editor tour ▸ Replay Tour**." },
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
      height: 1272,
      caption: "**File ▸ New Project** — set a name, choose Blank or From Template, and pre-configure rows with their device categories.",
    },
    blocks: [
      { kind: "p", text: "A project is a self-contained collection of rows, templates, shapes, languages, and image resources. Projects are stored on disk under your user Application Support folder and can be optionally synced via iCloud Drive." },
      { kind: "h", text: "Creating a project" },
      { kind: "li", text: "**File ▸ New Project…** (**⌘N**) opens the New Project window." },
      { kind: "li", text: "Choose **Blank** to set up rows and screenshot sizes manually, or **From Template** to start with a pre-designed layout." },
      { kind: "li", text: "In Blank mode, pick the device categories you want — each one becomes a row with the right default screenshot size for the App Store / Play Store." },
      { kind: "h", text: "Switching between projects" },
      { kind: "li", text: "Use the project picker in the toolbar to jump between projects." },
      { kind: "li", text: "Starred projects float to the top of the picker. The rest follow the order set in Settings ▸ General." },
      { kind: "li", text: "Project order can be set to **By creation date** or **Alphabetically** in Settings ▸ General." },
      { kind: "h", text: "Renaming, duplicating, deleting" },
      { kind: "li", text: "Right-click a project card on the Projects screen for **Rename…**, **Star Project**, **Duplicate…**, and **Delete…**." },
      { kind: "li", text: "The toolbar's **⋯** menu carries the same actions for the project you have open, plus **Reset Project…** (empties it) and **Reset Project from Template ▸ …** (replaces its contents with a starter theme)." },
      { kind: "li", text: "**App Store ▸ Update Metadata…** opens the App Store Connect wizard in metadata-only mode, so you can edit a version's store text without uploading a single screenshot." },
      { kind: "li", text: "Deleted projects are kept as **tombstones** for 30 days so iCloud sync can resolve conflicts cleanly. After 30 days the tombstone (and all images) are purged." },
      { kind: "h", text: "Project File" },
      { kind: "li", text: "**Show in Finder** reveals the project's folder." },
      { kind: "li", text: "**Copy Project File Path** copies the path of its `project.json` — handy in a bug report." },
      { kind: "li", text: "**Copy AI Localization Prompt** copies a ready-made prompt describing every text shape in the project, to hand to an AI assistant when you would rather translate outside the app." },
      { kind: "h", text: "Where projects live on Mac" },
      { kind: "li", text: "`~/Library/Application Support/screenshot/projects.json` — index of all projects." },
      { kind: "li", text: "`~/Library/Application Support/screenshot/projects/<uuid>/project.json` — project data. See the [Project File Schema](/docs/project-schema) for the full format." },
      { kind: "li", text: "`~/Library/Application Support/screenshot/projects/<uuid>/resources/` — imported images, screenshots, and SVGs." },
      { kind: "h", text: "If your projects look like they vanished" },
      { kind: "li", text: "Project names live in the `projects.json` index. If it goes missing, Screenshot Bro rebuilds it by scanning the project folders, so your work comes back rather than appearing deleted." },
      { kind: "li", text: "A project last saved by an older version (before 4.9 on Mac, 4.10 on iPad and iPhone) has no copy of its name outside that index, so a rebuilt entry appears as **Recovered Project**. Rename it and the name sticks from then on." },
      { kind: "li", text: "An index that exists but can't be read is moved aside to `projects.json.corrupt` rather than deleted, so nothing is lost." },
      { kind: "li", text: "With **iCloud sync on, the rebuild is deliberately skipped** — an iCloud index can read as missing while the container is still downloading, and rebuilding then would rename every project on every device. Screenshot Bro waits and picks up the real index instead, usually within a launch or two." },
      { kind: "tip", text: "Projects autosave 0.3 seconds after the last change — you never need to save manually. To make a one-off backup, use **Settings ▸ General ▸ Storage ▸ Create Backup…**." },
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
      height: 1165,
      caption: "Each row groups templates of one device size — the App Store requires separate uploads per size.",
    },
    blocks: [
      { kind: "p", text: "Rows are horizontal groups of screenshots inside a project. Each row has its own screenshot size (in pixels), device category, and a row-level background. The App Store requires separate uploads per device size — that's why rows exist." },
      { kind: "h", text: "Adding rows" },
      { kind: "li", text: "Click the dashed **+** tile at the bottom of the canvas (**Add new row**), or use the inspector when no row is selected." },
      { kind: "li", text: "Choose a device category: **iPhone**, **iPad Pro 11\"**, **iPad Pro 13\"**, **MacBook**, **Android Phone**, **Abstract Pixel 9**, **Android Tablet**, or **Invisible** (an abstract layout with no visible frame)." },
      { kind: "li", text: "Each category sets the row's default screenshot pixel size to a value the relevant store accepts." },
      { kind: "h", text: "Row inspector" },
      { kind: "li", text: "Select a row (click empty canvas space inside it) to reveal row-level controls in the inspector." },
      { kind: "li", text: "**Row label** — names the folder this row exports into. **Double-click the label in the row header** to rename it in place." },
      { kind: "li", text: "**Screenshot size** — **Presets** lists the resolutions each store accepts, grouped by device. Switch to **Custom** to type any size from 100 to 5000 px." },
      { kind: "li", text: "**Orientation** flips the row between portrait and landscape by swapping width and height." },
      { kind: "li", text: "**Background editor** — color, gradient, or image, plus a **Blur** slider. See the **Backgrounds** section." },
      { kind: "li", text: "**Stretch across all screenshots** — when on, the background spans the entire row width across all templates. When off, every template paints the same background independently. It needs at least two templates." },
      { kind: "li", text: "**Visibility** — hide a whole shape type (all text, all devices, all SVGs…) in this row, with **Show All** / **Hide All** to flip every type at once. Hidden types are left out of the **export** too, not just the editor. **Borders** draws the divider lines between templates and is editor-only." },
      { kind: "li", text: "**Exclude when uploading to App Store Connect** — keeps the row in your project and in folder exports, but leaves it out of an App Store Connect upload. Useful for an Android row, or a row you are still working on." },
      { kind: "h", text: "Collapse, edit, preview" },
      { kind: "li", text: "The **chevron** at the left of the row header collapses the row down to its header and expands it again. Collapsing is purely a view state — it changes nothing about the row and nothing about the export." },
      { kind: "li", text: "The **pencil / eye** switch in the row header flips the row between editing and preview." },
      { kind: "li", text: "Preview drops every handle, guide, and divider and lays the templates out as separate rounded tiles with a gap — the way a store listing shows them." },
      { kind: "h", text: "The row menu" },
      { kind: "li", text: "**Add Screenshot** and **Add Element** — add a template column or a shape without leaving the header." },
      { kind: "li", text: "**Duplicate Row**, **Add New Row Above / Below**, **Move Row Up / Down**." },
      { kind: "li", text: "**Export Row** — Screenshots, Continuous, or Showcase, for this row alone." },
      { kind: "li", text: "**Devices** — show or hide all frames, **Center All** of them, **Change All To** another model in one step, or **Reset All Images** to clear their screenshots." },
      { kind: "li", text: "**Delete all** removes every shape of one type. **Reset Row** empties the row; **Delete Row** removes it." },
      { kind: "h", text: "Reordering and deleting" },
      { kind: "li", text: "Reorder rows with **Move up** / **Move down** — the chevrons that appear when you hover a row header, or **Move Row Up** / **Move Row Down** in the row menu." },
      { kind: "li", text: "**⌘D** duplicates the selected row. **Duplicate Row** is in the row menu too." },
      { kind: "li", text: "Delete rows from the row header or row menu. Settings ▸ General has a confirmation toggle." },
      { kind: "tip", text: "On the **Free** tier a project holds up to 3 rows. Upgrading to Pro removes this limit — see **Free vs Pro**." },
    ],
  },
  {
    id: "templates",
    navTitle: "Templates",
    title: "Templates",
    subtitle: "The individual screenshots inside a row.",
    image: {
      alt: "A row of templates side by side, each rendering a different design",
      width: 1600,
      height: 710,
      caption: "A row of three templates. Each is one final exported image at the row's pixel size.",
    },
    blocks: [
      { kind: "p", text: "Each column inside a row is a template. A template is one final exported image — its dimensions match the row's screenshot size. The App Store accepts up to 10 templates per row; Google Play up to 8." },
      { kind: "h", text: "Adding templates" },
      { kind: "li", text: "Click the dashed **+** at the right end of the row (**Add screenshot**)." },
      { kind: "li", text: "New templates inherit the row's background and dimensions." },
      { kind: "li", text: "Reorder with **Move Left** / **Move Right** in the template control bar (also in its **⋯** menu). The order decides the exported file numbering." },
      { kind: "h", text: "Per-template controls" },
      { kind: "li", text: "The **Template Control Bar** below each template lets you override the row background just for that template — including a **Blur** slider for gradient and image overrides." },
      { kind: "li", text: "The bar shows as many buttons as fit. Zoom out or narrow the window and it drops the lower-priority ones, so a control can seem to disappear — the **⋯** menu is never dropped and always holds the full set." },
      { kind: "li", text: "Drop a screenshot directly onto a template to attach it as the device screenshot." },
      { kind: "li", text: "The **⋯** menu (**More actions**) offers per-template actions: **Quick Look**, **Save as PNG…**, **Move Left / Move Right**, **Add Screenshot Before / After**, **Duplicate Screenshot ▸ Place After This One / Place at End**, and **Delete Screenshot**." },
      { kind: "h", text: "How shapes relate to templates" },
      { kind: "li", text: "Shapes (text, images, devices, etc.) live on the **row canvas** — the unified area behind all templates in a row. A shape can be positioned to land entirely inside one template, or to span across templates." },
      { kind: "li", text: "On export, each template is clipped to its own bounds, so a shape that spans templates will appear on each of them at the right horizontal offset." },
      { kind: "li", text: "This is what makes layouts like a single headline that flows across two screenshots possible." },
      { kind: "tip", text: "Free tier limit: 5 templates per row. Pro removes this limit — see **Free vs Pro**." },
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
      height: 215,
      caption: "The **Shapes** section in the inspector — every shape type one click away.",
    },
    blocks: [
      { kind: "p", text: "Most shape settings live in the properties bar along the bottom of the window. It appears only when at least one shape is selected on the canvas — selecting a row is not enough — and its controls change to match the kind of shape you picked." },
      { kind: "h", text: "Adding shapes" },
      { kind: "li", text: "Use the **Shapes** dropdown in the inspector to add a Rectangle, Circle, or Star." },
      { kind: "li", text: "Buttons next to it add Text, Image, Device, or SVG elements." },
      { kind: "li", text: "New shapes are placed at the center of the active template and immediately selected." },
      { kind: "h", text: "Text" },
      { kind: "li", text: "Double-click a text shape to edit inline. Press **Esc** or click outside to commit." },
      { kind: "li", text: "With a text shape selected, the properties bar shows font, **weight**, size, color, horizontal and vertical alignment, line height, and letter spacing. An imported family offers only the weights and italics it actually ships." },
      { kind: "li", text: "**Italic** and **Uppercase** toggle the whole shape. Uppercase is display-only — the text you typed is unchanged, so translations still read normally." },
      { kind: "li", text: "**Double-click the letter-spacing value** to snap it back to the default." },
      { kind: "li", text: "**Rich text**: while editing, select part of the text and use the format bar for bold, italic, underline, strikethrough, a different size, or a different color — per run, inside one shape. **Clear formatting** returns the selection to the shape's base style." },
      { kind: "li", text: "**Text background** turns a headline into a badge: pick **Solid**, **Pill**, **Outline**, or **Highlight**, then tune color, padding, corner radius, opacity, and an outline." },
      { kind: "li", text: "**Copy Text Style** / **Paste Text Style** (right-click) carry a text shape's whole look onto another one, or onto every selected text shape at once." },
      { kind: "li", text: "Text auto-grows vertically by default. Drag a side handle to fix the width and let it wrap." },
      { kind: "li", text: "Custom fonts: choose **Pick custom font** from the text font picker to import `.otf` / `.ttf` files." },
      { kind: "h", text: "Image" },
      { kind: "li", text: "Select the shape, then click the image well in the properties bar to pick a file, or drag and drop directly onto the shape." },
      { kind: "li", text: "Fill modes: **Fill** (crop to fit), **Fit** (letterbox), **Stretch** (distort), **Tile** (repeat). Tile mode unlocks spacing, offset, and scale controls." },
      { kind: "li", text: "**Remove Background** (right-click) cuts the subject out of the image, entirely on your Mac — nothing is uploaded anywhere." },
      { kind: "li", text: "**Restore Original Aspect Ratio** (right-click) undoes stretching by fitting the height to the current width." },
      { kind: "li", text: "**Show in Finder** (right-click an image, or a device that has a screenshot in it) reveals the picture file the project is using." },
      { kind: "h", text: "Device" },
      { kind: "li", text: "Device shapes render the screenshot inside a real device frame. Select one, then pick a category and model in the properties bar." },
      { kind: "li", text: "**Drop a screenshot onto the device** to attach it. The image is automatically clipped to the screen area." },
      { kind: "li", text: "Each model has color variants and (where applicable) a landscape variant." },
      { kind: "li", text: "**Match Size to Other Devices** (right-click a single device) resizes the row's other devices of the same category to match this one. With several devices selected, the command becomes **Match Size to Selected Devices** and resizes just those." },
      { kind: "li", text: "**Invisible** category shows the screenshot with no bezel — useful for clipped or abstract designs." },
      { kind: "li", text: "On the abstract Android frames, a **Camera** toggle shows or hides the camera cutout." },
      { kind: "h", text: "SVG" },
      { kind: "li", text: "Click **SVG** to import a vector file, pick one of the bundled presets, or paste raw markup via the SVG paste dialog." },
      { kind: "li", text: "SVGs render with a configurable color override and scale crisply at any export resolution." },
      { kind: "li", text: "**Replace SVG…** (right-click, or in the properties bar) swaps in new artwork and keeps the shape's position, rotation, color, and effects. The frame narrows to fit the new artwork's proportions." },
      { kind: "li", text: "During resize, rendering is debounced for performance — release the mouse to see the final crisp output." },
      { kind: "h", text: "Common properties" },
      { kind: "li", text: "**X**, **Y**, **W**, and **H** at the head of the properties bar set position and size by hand. X is measured from the left edge of the template the shape sits in. Every device except an invisible frame keeps its proportions, so typing a width adjusts the height to match." },
      { kind: "li", text: "The **Fill** swatch opens the same editor a background uses, so a rectangle, circle, star, or text badge can take a **gradient or an image**, not just a flat color." },
      { kind: "li", text: "Opacity, rotation (in degrees, editable as text), border radius, outline (color + width), and **Clip to Frame** (clips anything that overflows the template)." },
      { kind: "li", text: "**Drop shadow** — select a shape, then click **Shadow** in the properties bar and pick **Soft**, **Medium**, or **Strong**, or set color, **blur**, **offset X**, **offset Y**, and opacity by hand. **Reset** restores the defaults. It works on a multi-shape selection too." },
      { kind: "li", text: "**Lock** — select a shape and choose **Edit ▸ Lock** (**⌘L**), or right-click it ▸ **Lock**. Clicks and drags then pass straight through it; a locked shape's only right-click item is **Unlock**." },
      { kind: "li", text: "Z-order: **⌘⇧]** brings forward, **⌘⇧[** sends back." },
      { kind: "h", text: "Editing several shapes at once" },
      { kind: "li", text: "Select more than one shape and the properties bar switches to a multi-selection bar showing how many are selected." },
      { kind: "li", text: "When they are all the same kind it offers that kind's controls too, and applies each change to every shape: **Change Device** for devices, font / weight / alignment / Italic / Uppercase for text, corner radius, star points, SVG custom color, outline, shadow, opacity, rotation, and **Clip to Frame**." },
      { kind: "li", text: "Z-order, duplicate, and delete act on the whole selection." },
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
      height: 304,
      caption: "The **Device** section in the inspector — pick a category and model with accurate screen insets.",
    },
    blocks: [
      { kind: "p", text: "Device frames wrap your screenshot in an authentic device bezel. Screenshot Bro ships pixel-accurate frames for iPhone, iPad, Mac, Apple Watch, and Android-style layouts." },
      { kind: "h", text: "Frame families" },
      { kind: "p", text: "The model picker groups frames into **families**, which are not the same list as the **device categories** you pick when adding a row. A Watch frame, for example, lives in the Watch family but sits in a row whose category is something else — so don't go looking for Watch in the Add Row list." },
      { kind: "li", text: "**iPhone** — iPhone 18 Pro, iPhone 18 Pro Max, iPhone Duo, iPhone 17, iPhone Air, iPhone 17 Pro, and iPhone 17 Pro Max with their color variants, plus 3D iPhone options." },
      { kind: "li", text: "**iPad Pro 11\"** and **iPad Pro 13\"** — current generation with portrait and landscape." },
      { kind: "li", text: "**Mac** — MacBook Air 13\", MacBook Pro 14\", MacBook Pro 16\", and iMac 24\"." },
      { kind: "li", text: "**Android Phone**, **Abstract Pixel 9**, and **Android Tablet** — abstract frames that flex to match the aspect ratio of any dropped screenshot." },
      { kind: "li", text: "**Watch** — Apple Watch Ultra 3 frame variants." },
      { kind: "li", text: "**Invisible** — no visible bezel, just the screenshot. Useful for clipped layouts or abstract designs." },
      { kind: "h", text: "Picking a model and color" },
      { kind: "li", text: "With a device shape selected, click the device thumbnail in the properties bar to open the picker." },
      { kind: "li", text: "Models are grouped by category. Each shows available colors as small swatches." },
      { kind: "li", text: "Switching color preserves the screenshot and any rotation." },
      { kind: "h", text: "Landscape mode" },
      { kind: "li", text: "Concrete frames with portrait and landscape variants switch to the matching orientation when Screenshot Bro can infer it from a dropped screenshot." },
      { kind: "li", text: "Use the orientation control for supported frames, or the rotation control to rotate the entire shape including frame and screen content." },
      { kind: "h", text: "3D device models (Beta)" },
      { kind: "li", text: "Models marked **(3D)** — iPhone 17 and iPhone 17 Pro Max — are rendered from real geometry rather than a flat bezel image." },
      { kind: "li", text: "Their **Appearance** popover in the properties bar adds **Pitch** and **Yaw** rotation, a **Matte** or **Glossy** finish, and **Ambient** / **Key** / **Rim** lighting." },
      { kind: "li", text: "**Reset all** returns rotation, material, and lighting to their defaults." },
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
      alt: "Background editor in Gradient mode with color stops, preset gallery, angle wheel, and blur",
      width: 510,
      height: 843,
      caption: "The **Background** editor — three styles, gradient presets, angle, blur, and the row-spanning toggle.",
    },
    blocks: [
      { kind: "h", text: "Three styles" },
      { kind: "li", text: "**Color** — a solid fill picked from the inline color picker." },
      { kind: "li", text: "**Gradient** — Linear, Radial, or Angular. Edit color stops, angle, and (for Radial / Angular) the center point." },
      { kind: "li", text: "**Image** — bring in any PNG / JPEG / SVG. Pick a fill mode and tweak opacity." },
      { kind: "h", text: "Gradients" },
      { kind: "li", text: "**Linear**: set the direction with the angle wheel, or with the eight one-click angle presets next to it." },
      { kind: "li", text: "**Editing stops**: click anywhere on the gradient bar to insert a stop in the color it already shows there, drag stops to move them, click one to change its color, and remove it with the **−** button or the **Delete** key. Two stops is the minimum." },
      { kind: "li", text: "**Reverse gradient** flips the stop order in one click." },
      { kind: "li", text: "**Radial**: a circular gradient with an editable center point and an end radius derived from the canvas size." },
      { kind: "li", text: "**Angular**: a sweep gradient rotating around the center." },
      { kind: "li", text: "**Gradient presets**: pick from the gallery of 16 presets to apply tested stop combinations." },
      { kind: "h", text: "Image fill modes" },
      { kind: "li", text: "**Fill** — scales to cover; crops anything that doesn't fit." },
      { kind: "li", text: "**Fit** — scales so the whole image is visible; leaves transparent letterbox bars." },
      { kind: "li", text: "**Stretch** — fills exactly, distorting aspect if needed." },
      { kind: "li", text: "**Tile** — repeats the image, with spacing, offset, and scale adjustable independently for the horizontal and vertical axes." },
      { kind: "h", text: "Row vs template backgrounds" },
      { kind: "li", text: "By default a row's background applies to every template in the row." },
      { kind: "li", text: "**Stretch across all screenshots** (row toggle): when on, gradients and images render once across the entire row, so a single horizon or gradient flows across all templates." },
      { kind: "li", text: "**Override per template**: from the template control bar, set a unique background that replaces the row's default just for that template." },
      { kind: "tip", text: "Spanning is great for storytelling: a sunset gradient or a single panoramic image can stretch across three templates and tell a continuous visual story in the App Store carousel." },
    ],
  },
  {
    id: "editing",
    navTitle: "Canvas Editing",
    title: "Editing on the Canvas",
    subtitle: "Drag, resize, rotate, snap.",
    image: {
      alt: "Row canvas with a selected, rotated device frame showing resize handles",
      width: 1600,
      height: 751,
      caption: "The row canvas — drag, resize, rotate, snap. Shapes can span across templates.",
    },
    blocks: [
      { kind: "h", text: "Selection" },
      { kind: "li", text: "Click a shape to select it. **Shift-click** to add to or remove from the selection." },
      { kind: "li", text: "**Drag from empty canvas** to sweep a selection box over several shapes at once. Hold **⇧** as you start the drag to add them to the current selection. Locked shapes are skipped." },
      { kind: "li", text: "**⌘A** selects every shape in the active row." },
      { kind: "li", text: "**Esc** deselects shapes; press again to deselect the row." },
      { kind: "li", text: "Click empty canvas inside a row to select the row itself and reveal row-level inspector controls." },
      { kind: "li", text: "While a non-base language is active, an amber border frames the whole editor so an override is never made by accident." },
      { kind: "h", text: "Move, resize, rotate" },
      { kind: "li", text: "Drag the shape body to move. Drag a corner or edge handle to resize." },
      { kind: "li", text: "Drag the rotation handle (above the shape) to rotate freely, or hold **⇧** while dragging it to snap to 15° steps. Type a degree value into the rotation field for exact control." },
      { kind: "li", text: "Hold **⇧** while resizing to lock aspect ratio. Device frames other than **Invisible** always keep their proportions, with or without **⇧**." },
      { kind: "li", text: "Hold **⌥** while dragging to duplicate the shape as you move." },
      { kind: "h", text: "Snapping & alignment guides" },
      { kind: "li", text: "Shapes snap to other shapes' edges and centers, and to template boundaries, within a 4px threshold." },
      { kind: "li", text: "Blue **alignment guides** appear while dragging to show which edges are aligned." },
      { kind: "h", text: "Align, distribute, match" },
      { kind: "li", text: "Right-click a multi-shape selection ▸ **Align Selected** for left / center / right, top / middle / bottom, plus **Distribute Horizontally** and **Distribute Vertically**." },
      { kind: "li", text: "**Match to This** copies the shape you right-clicked — its **Position**, its **Size**, or both — onto the rest of the selection." },
      { kind: "li", text: "**Center** places a shape vertically, horizontally, or at the exact center of its screenshot." },
      { kind: "li", text: "**Duplicate ▸ To All Screenshots on the Left / Right / All** copies a shape into the other templates in the row at the same relative spot — the quickest way to repeat a logo or a footer." },
      { kind: "h", text: "Locking" },
      { kind: "li", text: "**Edit ▸ Lock** (**⌘L**) locks or unlocks the selection; **Lock** is on the right-click menu too. Locked shapes can't be dragged, resized, or deleted, and clicks fall through to whatever is behind them." },
      { kind: "li", text: "Right-click a locked shape and choose **Unlock** to get it back." },
      { kind: "h", text: "Double-click" },
      { kind: "li", text: "Double-click a **text** shape to edit it in place." },
      { kind: "li", text: "Double-click a **device** or **image** shape to open the picker and swap its picture." },
      { kind: "h", text: "Copy and paste" },
      { kind: "li", text: "**⌘V** pastes at the pointer — an image from the system clipboard becomes a new image shape where the mouse is, and shapes copied inside the app land there too, carrying their translations and images with them." },
      { kind: "h", text: "Nudge" },
      { kind: "li", text: "Arrow keys nudge the selection by 1px." },
      { kind: "li", text: "**⇧ + Arrow** nudges by 10px." },
      { kind: "h", text: "Pan & zoom" },
      { kind: "li", text: "Scroll vertically to navigate rows. Hold the **middle mouse button** and drag to pan." },
      { kind: "li", text: "**⌘+** / **⌘−** zoom in/out, **⌘0** resets to the default zoom, **F** focuses on the current selection. Trackpad pinch and **⌘ + Scroll** also zoom." },
      { kind: "li", text: "The toolbar zoom control ranges from 25% to 300% in 25% steps, with **Fit to Editor** and **Actual Size** actions in its popover." },
      { kind: "tip", text: "If a shape spans across templates and you only see part of it, that's expected — each template clips shapes to its own bounds. Use **F** to focus on the whole shape." },
    ],
  },
  {
    id: "locales",
    navTitle: "Languages",
    title: "Languages & Translations",
    subtitle: "Translate text once, lay it out once, ship every language.",
    image: {
      alt: "Add Language sheet with search field and the built-in language preset list",
      width: 1000,
      height: 956,
      caption: "**Language ▸ Manage Languages…** — pick from 81 built-in language presets, or define a custom code.",
    },
    blocks: [
      { kind: "p", text: "Languages let you generate localized screenshot sets without duplicating your project. Each language shares the same shape set and can keep its own text, text styling, image assignments, and layout adjustments where a translation needs more space." },
      { kind: "h", text: "Adding languages" },
      { kind: "li", text: "Open the **Language** menu in the toolbar, or the top-level **Language** menu in the menu bar — which also lists every language you've added, so you can jump straight to one." },
      { kind: "li", text: "**Manage Languages…** opens the full list, with a translated/total badge per language: green when complete, orange when something is still missing." },
      { kind: "li", text: "Pick from the **81 built-in language presets**, or define a custom code." },
      { kind: "li", text: "The first language you add is the **base language** — the one whose text is the source of truth." },
      { kind: "li", text: "**You can change which language is the base.** In Manage Languages, drag a language to the top of the list, or right-click it and choose **Set as Base**. Every other language is re-anchored to it." },
      { kind: "h", text: "Switching the active language" },
      { kind: "li", text: "**⌘]** / **⌘[** cycle forward / backward through languages." },
      { kind: "li", text: "**⌘⌥0** jumps back to the base language." },
      { kind: "li", text: "When editing a non-base language, a banner appears at the top of the canvas reminding you which language you're in." },
      { kind: "h", text: "How translations work" },
      { kind: "li", text: "In a non-base language, edits are saved as **per-language overrides** — they don't change the base language." },
      { kind: "li", text: "Text content and styling, image replacements, and position/size adjustments can all differ by language. Shared properties such as colors and device choices are edited in the base language." },
      { kind: "li", text: "If a language has no override for a shape, it falls back to the base language's content." },
      { kind: "h", text: "Translation helpers" },
      { kind: "li", text: "**Auto-Translate Missing Text** — fills in text shapes that don't yet have an override for the current language." },
      { kind: "li", text: "**Re-Translate All Text…** — replaces every existing override with a fresh translation. Use after editing the base language's text." },
      { kind: "li", text: "**Translate Selected to All Languages** — appears in the language bar when editing the base language with text shapes selected. Translates the selection into every other language at once." },
      { kind: "li", text: "**Revert to Base Language…** — drops all overrides for the current language, falling back to base text everywhere." },
      { kind: "li", text: "**Edit Translation Table…** — a side-by-side editor showing every text shape with its base content and per-language overrides. Hover a cell for per-cell **Translate** and **Reset** actions." },
      { kind: "li", text: "A translation that carries **rich formatting** shows in that table as read-only, marked *Formatted — edit on the canvas*. Mixed bold, colors, or sizes can't survive a plain text field, so edit those on the canvas instead." },
      { kind: "li", text: "With a text shape selected, the **globe** button in the properties bar shows the base text and one editable row per language, plus **Translate into All Languages**, a per-language reset, and **Reset All Translations**." },
      { kind: "li", text: "**Reuse Translation** (right-click a text shape) links it to another string, so both share one base text and one set of translations. A headline repeated across templates is then translated once." },
      { kind: "li", text: "Right-click ▸ **Localization** translates just that shape into the current language or into all of them, or resets its translations." },
      { kind: "h", text: "Exporting with languages" },
      { kind: "li", text: "On export, Screenshot Bro creates one folder per language, then sub-folders per row. The structure matches what App Store Connect's localized screenshot uploads expect." },
    ],
  },
  {
    id: "importing",
    navTitle: "Importing",
    title: "Importing",
    subtitle: "Drop screenshots, images, fonts, and SVGs.",
    image: {
      alt: "Editor templates with their control bars — the drop targets for screenshots and images",
      width: 1600,
      height: 394,
      caption: "Drop screenshots onto templates, or a whole batch onto the row — Screenshot Bro routes them by pixel size.",
    },
    blocks: [
      { kind: "h", text: "Screenshots" },
      { kind: "li", text: "Drag and drop a PNG / JPEG onto a template to attach it as a device screenshot. A device shape is auto-created if needed." },
      { kind: "li", text: "If a drop can't be read — a corrupt image, or SVG markup Screenshot Bro can't parse — it says so instead of silently doing nothing." },
      { kind: "li", text: "**Batch import**: drop multiple screenshots onto a row. Screenshot Bro fills existing device shapes in template order, then appends templates as needed." },
      { kind: "li", text: "Recognized screenshot dimensions are used to pick an appropriate device category or frame when possible." },
      { kind: "h", text: "Background images" },
      { kind: "li", text: "Drop directly into the background image well in the inspector, or pick via the file dialog." },
      { kind: "li", text: "Both raster and SVG images are supported as backgrounds." },
      { kind: "h", text: "SVG paste" },
      { kind: "li", text: "Use the **SVG** button in the shape toolbar to open the paste dialog." },
      { kind: "li", text: "Paste SVG markup directly. Width and height are auto-detected; you can override them." },
      { kind: "li", text: "SVGs are sanitized — script and event handlers are stripped before rendering." },
      { kind: "li", text: "Drop several SVGs at once and they cascade slightly apart instead of stacking on one spot." },
      { kind: "h", text: "Custom fonts" },
      { kind: "li", text: "Open a text shape's font picker and choose **Pick custom font** to import `.otf` / `.ttf` files or a folder of font variants." },
      { kind: "li", text: "Imported fonts are bundled with the project so they survive iCloud sync and project transfer." },
      { kind: "tip", text: "Dropping a folder or a group of image files onto a row is the fastest way to fill a screenshot set in order." },
    ],
  },
  {
    id: "exporting",
    navTitle: "Exporting",
    title: "Exporting",
    subtitle: "Produce store-ready PNGs and JPEGs.",
    image: {
      alt: "Export menu open in the toolbar showing folder, row, and upload options",
      width: 1600,
      height: 452,
      caption: "The export menu — folder export, row exports, per-language exports, and direct store uploads.",
    },
    blocks: [
      { kind: "h", text: "Quick export" },
      { kind: "li", text: "Click **Export** in the toolbar, or press **⌘E**, to render the current project to the remembered export folder. If no folder is set, Screenshot Bro asks you to choose one." },
      { kind: "li", text: "Use the export menu for **Export All Screenshots to Folder…**, row exports, **Export Locale** for a single language, **Open Export Folder**, and direct upload to **App Store Connect** or **Google Play**." },
      { kind: "li", text: "A long export shows a progress overlay you can **cancel** — nothing half-written is left behind." },
      { kind: "li", text: "File names are zero-padded (`01_…`, `02_…`) so they sort correctly when uploaded." },
      { kind: "h", text: "Three ways to render a row" },
      { kind: "li", text: "**Screenshots** — one image per template. This is what the stores want." },
      { kind: "li", text: "**Continuous** — the whole row as one wide image, templates side by side." },
      { kind: "li", text: "**Showcase** — a marketing composition of the row on a styled background. See **Showcase Export**." },
      { kind: "li", text: "All three are in the export menu (for every row) and in a row's **Export Row** menu (for that row alone)." },
      { kind: "h", text: "What actually gets exported" },
      { kind: "li", text: "Only what you see. Shape types switched off in the inspector's **Visibility** section are left out of the exported image too." },
      { kind: "li", text: "Template borders, alignment guides, and selection handles are editor-only and never exported." },
      { kind: "li", text: "If an image file a screenshot needs can't be read, the frame renders empty and the export ends with **Some Images Are Missing** rather than a plain success — a blank device frame otherwise passes every check right up to the store." },
      { kind: "h", text: "Format and naming" },
      { kind: "li", text: "**Settings ▸ Export ▸ Format**: PNG or JPEG. PNG is recommended for marketing screenshots." },
      { kind: "li", text: "**Custom filename suffix**: add a suffix to every exported screenshot filename." },
      { kind: "li", text: "Exports use the row's exact pixel dimensions so App Store and Google Play sizes stay correct." },
      { kind: "h", text: "Folder structure" },
      { kind: "li", text: "With one language and one row: a flat folder of templates." },
      { kind: "li", text: "With multiple languages: a top-level folder per language." },
      { kind: "li", text: "With multiple rows: a sub-folder per row label (e.g. `iPhone 6.9\"`, `iPad 13\"`)." },
      { kind: "h", text: "Export folder memory" },
      { kind: "li", text: "Set **Settings ▸ Export ▸ Export folder** to make **⌘E** export directly without prompting." },
      { kind: "li", text: "Toggle **Reveal in Finder after export** in Settings to auto-reveal the result." },
      { kind: "h", text: "Preview vs export" },
      { kind: "li", text: "The **pencil / eye** switch in a row header lays the row out as a store-style carousel with no editing chrome — the fastest check that a set reads well together." },
      { kind: "li", text: "Use the **Quick Look** button in the template control bar to preview fully rendered screenshots without going through the export flow." },
    ],
  },
  {
    id: "showcase",
    navTitle: "Showcase Export",
    title: "Showcase Export",
    subtitle: "Turn a row of screenshots into one marketing image.",
    image: {
      alt: "Showcase export sheet with live previews of two rows beside the Rows, Format, Output Size, and Background settings",
      width: 1404,
      height: 1062,
      caption: "The **Showcase** sheet — pick rows and individual screenshots, an aspect ratio, an output size, and a background, with a live preview of every row.",
    },
    blocks: [
      { kind: "p", text: "A showcase arranges a row's screenshots side by side on a styled background and renders them as a single image — for a product page, a launch post, a README, or an ad. It doesn't replace store screenshots; it's the picture you post *about* them." },
      { kind: "h", text: "Opening it" },
      { kind: "li", text: "Export menu ▸ **Export Rows ▸ Showcase** for the whole project, or a row menu ▸ **Export Row ▸ Showcase** for one row." },
      { kind: "li", text: "The sheet previews the result live as you change settings." },
      { kind: "li", text: "Pick which rows to include (with **All** / **None**), then use the numbered chips to drop individual screenshots from the composition — the counter shows how many of the row's screenshots are in." },
      { kind: "li", text: "**Reset to defaults** restores the layout settings and leaves your row selection alone." },
      { kind: "h", text: "Shape and size" },
      { kind: "li", text: "**Aspect ratio** presets: **Social** (1.91:1), **Square**, **Portrait** (4:5), **Story** (9:16), **YouTube** (16:9), and **Pinterest** (2:3)." },
      { kind: "li", text: "**Output size**: Original, X-Large (4000 px), Large (2400 px), Medium (1600 px), or Small (1200 px) on the longest edge." },
      { kind: "li", text: "**Spacing**, **Padding**, and **Corner radius** are percentages of the canvas, so a layout keeps its proportions at every output size." },
      { kind: "h", text: "Background" },
      { kind: "li", text: "The same editor as a row background: color, gradient, or image, with every fill mode. See **Backgrounds**." },
      { kind: "tip", text: "Export the same row twice — once as **Story** for a 9:16 post and once as **Social** for the link preview. The layout adapts to each aspect ratio instead of being cropped." },
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
      { kind: "li", text: "Create a key with permission to edit app metadata — Account Holder, Admin, or App Manager roles are typical. Download the `.p8` private key file (you can only download it once)." },
      { kind: "li", text: "Note the **Issuer ID** and **Key ID**." },
      { kind: "li", text: "In Screenshot Bro: **Settings ▸ App Store Connect**, paste the Issuer ID and Key ID, import the `.p8` file, then run **Test Connection**. The key is stored in your Mac's Keychain." },
      { kind: "h", text: "Uploading screenshots" },
      { kind: "li", text: "Click **Upload to App Store Connect…** in the export menu. Screenshot Bro renders the selected screenshots directly from the project." },
      { kind: "li", text: "If every version of the app is live or locked for review, the version step offers **Create Version** — it prefills the next number for each platform the app ships on, and you can edit it before creating." },
      { kind: "li", text: "Pick the app and a version, then choose which rows go to which display type and locale. The display type is **auto-detected** from the row's pixel size — **Use detected** accepts the suggestion, and a warning appears if a row looks like an Android size." },
      { kind: "li", text: "Each row has an include toggle, so you can leave one out for this upload only. To exclude a row from *every* upload, use the inspector's **Exclude when uploading to App Store Connect** instead." },
      { kind: "li", text: "If a language has no matching App Store locale, the wizard says so and offers **Create de-DE in App Store Connect** — naming the App Store locale code it would add — right on the row. One click adds it to that version and the row switches to it. Languages the App Store doesn't offer, and versions Apple has locked for editing, still have to be handled on the website; **Refresh App Store data** picks up anything added there." },
      { kind: "li", text: "**Review Changes** lists, per locale and display type, exactly what will be added, what will be replaced, and what stays untouched. Nothing is sent to Apple until you confirm there." },
      { kind: "li", text: "Sets are grouped by version and device — open a locale to compare the current App Store screenshots with the proposed ones. Locales that already match are hidden behind **Show unchanged**, and **Select All Changed** / **Deselect All** set what gets synced." },
      { kind: "li", text: "**Upload** skips that screen and compares against the store as it goes, uploading only what differs and keeping the App Store asset IDs of exact matches. The progress bar counts the screenshots as they render, then compares each set." },
      { kind: "li", text: "**Replace All Screenshots**, offered next to Upload when you confirm, skips the comparison entirely: everything currently in the selected sets is deleted and every screenshot is uploaded again with new asset IDs. It prepares faster and uploads slower, so it pays off when most screenshots changed and costs you when only one did." },
      { kind: "li", text: "If an upload stops partway — a dropped connection, or App Store Connect rate limiting a large sync — just run it again. Locales that finished are remembered and skipped, and screenshots already delivered are matched by checksum rather than uploaded twice." },
      { kind: "h", text: "Editing store metadata" },
      { kind: "li", text: "The same wizard edits the version's text, locale by locale, with a live character counter against Apple's limits." },
      { kind: "li", text: "**App Info** (shared across versions): **App Name**, **Subtitle**, **Privacy Policy URL**." },
      { kind: "li", text: "**This Version**: **What's New**, **Promotional Text**, **Description**, **Keywords**, **Support URL**, and the **Copyright** line (which applies to every locale at once)." },
      { kind: "li", text: "**Copy to all locales** fills every other language's *What's New* from the one you just wrote — useful before you translate it properly." },
      { kind: "h", text: "Demo mode" },
      { kind: "li", text: "**Settings ▸ App Store Connect ▸ Demo mode** walks the whole flow against sample data — no API key needed, and nothing is ever sent to Apple." },
      { kind: "li", text: "While demo mode is on, the real API key above it is ignored." },
      { kind: "tip", text: "App Store Connect accepts 1–10 screenshots per display type and locale — one is enough to submit, though most apps use three or more. Screenshot Bro respects template ordering when uploading." },
    ],
  },
  {
    id: "google-play",
    navTitle: "Google Play",
    title: "Google Play",
    subtitle: "Upload store listing screenshots to Google Play.",
    blocks: [
      { kind: "p", text: "Connect a Google Play service account once and Screenshot Bro can upload exported screenshots to your app's store listing without leaving the app." },
      { kind: "h", text: "Set up a service account" },
      { kind: "li", text: "In the **Google Cloud console**, create a service account and enable the **Google Play Android Developer API**." },
      { kind: "li", text: "Create a **JSON key** for that service account and download it — this is the file Screenshot Bro imports." },
      { kind: "li", text: "In the **Play Console ▸ Users and permissions**, invite the service account's email and grant it access to edit your app's store listing." },
      { kind: "li", text: "In Screenshot Bro: **Settings ▸ Google Play**, click **Import .json File…**, then run **Test Connection**. The key is stored in your Mac's Keychain." },
      { kind: "h", text: "Uploading" },
      { kind: "li", text: "Choose **Upload to Google Play…** from the export menu. Screenshot Bro renders the selected screenshots directly from the project." },
      { kind: "li", text: "Enter your app's **package name** (for example `com.example.myapp`), then review which screenshots go to which language before confirming." },
      { kind: "li", text: "The upload is staged as a Play **edit** and committed when you confirm. Google Play accepts at most 8 screenshots per type." },
      { kind: "li", text: "**Send changes to review** decides what happens on commit: leave it off and the changes wait as a draft in the Play Console; turn it on and they go straight into review. If you expect to check the listing before it ships, leave it off." },
      { kind: "h", text: "Demo mode" },
      { kind: "li", text: "**Settings ▸ Google Play ▸ Demo mode** runs a simulated upload — no service account required and nothing is ever sent to Google Play." },
      { kind: "li", text: "Use it to walk through the whole upload flow before you have credentials set up. While demo mode is on, the imported service account is ignored." },
      { kind: "tip", text: "Google Play enforces stricter screenshot aspect-ratio and dimension limits than the App Store. The default 1242×2688 iPhone size is too tall for Play — if an upload is rejected, switch the row to a screenshot-size preset Play accepts." },
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
      { kind: "li", text: "File coordination prevents corruption from concurrent reads/writes." },
      { kind: "h", text: "Knowing what's syncing" },
      { kind: "li", text: "The Projects screen shows sync progress while iCloud is uploading or downloading." },
      { kind: "h", text: "Screenshots that aren't there yet" },
      { kind: "li", text: "A project's text and layout sync in one small file, so a project can open before its screenshots have finished downloading." },
      { kind: "li", text: "A device frame with a **download badge** is waiting for iCloud. Screenshot Bro asks for those files first and fills them in as they land — no need to reopen the project." },
      { kind: "li", text: "A device frame with an **orange warning triangle** means the image file itself is gone. Add the image again to restore it; the layout, text and translations around it are untouched." },
      { kind: "tip", text: "If sync seems stuck, open Finder ▸ iCloud Drive ▸ Screenshot Bro and check whether files are still uploading. Toggling iCloud off and on again forces a re-scan." },
    ],
  },
  {
    id: "automation",
    navTitle: "Automation & MCP",
    title: "Automation & MCP",
    subtitle: "Let an AI assistant build screenshots for you.",
    blocks: [
      { kind: "p", text: "Screenshot Bro can host a local **MCP server** — a small server running only on your Mac that AI assistants and MCP clients (such as Claude Code, Claude Desktop, or Cursor) connect to. Once connected, the assistant can create and edit projects, arrange shapes, translate text, and export screenshots on your behalf, driving the app while you watch." },
      { kind: "h", text: "Turning it on" },
      { kind: "li", text: "**Settings ▸ Automation ▸ Enable MCP server.** It's off by default." },
      { kind: "li", text: "The server runs on `127.0.0.1` (loopback only) — it is not reachable from other computers or the internet." },
      { kind: "li", text: "Once enabled it stays on and starts automatically the next time you launch. The app has to be running for a client to connect." },
      { kind: "h", text: "Connecting an assistant" },
      { kind: "li", text: "The easiest way: click **Copy Agent Prompt** and paste it into your AI assistant. It contains everything the assistant needs to add the server itself, then reconnect." },
      { kind: "li", text: "Prefer to configure by hand? Use **Copy Configuration (JSON)** for a standard `mcpServers` entry, or copy the **Server URL** and **Access Token** individually and add them in your client." },
      { kind: "li", text: "The **Status** row shows whether the server is running and on which port." },
      { kind: "h", text: "What the assistant can do" },
      { kind: "li", text: "Create projects (including from bundled templates), rename, delete, and switch between them." },
      { kind: "li", text: "Add, edit, move, and remove rows, template columns, and shapes." },
      { kind: "li", text: "Import screenshots into device frames, add and translate languages, and set per-language text." },
      { kind: "li", text: "**Render a preview** so it can actually see the current canvas, and **export** the finished screenshots." },
      { kind: "li", text: "Read and rewrite your **App Store Connect descriptions**, and preview then apply a **screenshot sync** to a version." },
      { kind: "li", text: "Everything goes through the same actions you use by hand — so the assistant's changes are undoable with **⌘Z** and autosaved like any other edit." },
      { kind: "h", text: "Security & the access token" },
      { kind: "li", text: "The server requires an **access token**: every request must present it, so another app on your Mac can't quietly drive Screenshot Bro." },
      { kind: "li", text: "Keep the token private — anyone who has it can control the app while the server is running." },
      { kind: "li", text: "**Regenerate Access Token** issues a fresh token and restarts the server; any client using the old token must be updated." },
      { kind: "p", text: "For a full walkthrough — connecting Claude Code, Claude Desktop or Cursor, what each of the 26 tools does, the prompts that work, and how to feed it your own screenshots — see the [Screenshot Bro MCP guide](/blog/screenshot-bro-mcp-server)." },
      { kind: "tip", text: "If the server won't start, something else is usually holding its port — quit that program, then switch the server off and on again. Turning it off releases the port immediately." },
    ],
  },
  {
    id: "settings",
    navTitle: "Settings",
    title: "Settings & Defaults",
    subtitle: "Tune the app to match your workflow.",
    blocks: [
      { kind: "h", text: "General" },
      { kind: "li", text: "**Appearance** — Auto / Light / Dark." },
      { kind: "li", text: "**Language** — override the app interface language. Requires a relaunch." },
      { kind: "li", text: "Picking a right-to-left language such as **Persian** mirrors the toolbars, menus, and inspector, as it should. The **canvas is never mirrored** — shape positions are stored in model space and must render identically for everyone, so your screenshots look the same whatever language you edit in." },
      { kind: "li", text: "**Default screenshot size** — used when creating new rows." },
      { kind: "li", text: "**Default device frame** — pre-selects a device category and model for new rows." },
      { kind: "li", text: "**Screenshots per new row** — number of empty templates a new row starts with." },
      { kind: "li", text: "**Default zoom** — initial zoom level when opening the app." },
      { kind: "li", text: "**Ask before deleting rows and screenshots** — show a confirmation prompt for destructive row and screenshot actions." },
      { kind: "li", text: "**Project order** — By creation date or Alphabetically." },
      { kind: "li", text: "**iCloud sync** — toggle and check status." },
      { kind: "li", text: "**Editor tour** — **Replay Tour** runs the first-run coach marks again over your open project." },
      { kind: "li", text: "**Storage** — open the project library in Finder or create a one-off backup zip." },
      { kind: "li", text: "**Copy Diagnostics** — copies your version, setup, and support ID as a block to paste into a bug report. No project content." },
      { kind: "li", text: "**Version** — the build you're running. Worth quoting in a bug report." },
      { kind: "h", text: "Export" },
      { kind: "li", text: "**Format** — PNG or JPEG." },
      { kind: "li", text: "**Custom filename suffix** — append a suffix to exported screenshot filenames." },
      { kind: "li", text: "**Reveal in Finder after export** — auto-reveal results in Finder." },
      { kind: "li", text: "**Export folder** — choose or clear the folder Screenshot Bro reuses for **⌘E**." },
      { kind: "h", text: "App Store Connect" },
      { kind: "li", text: "API key (Issuer ID, Key ID, `.p8` file), **Test Connection**, and **Demo mode**. See the **App Store Connect** section." },
      { kind: "h", text: "Google Play" },
      { kind: "li", text: "Import a service account JSON key, test the connection, and toggle demo mode. See the **Google Play** section." },
      { kind: "h", text: "Automation" },
      { kind: "li", text: "Enable the local MCP server and copy the agent prompt, connection JSON, or access token. See the **Automation & MCP** section." },
      { kind: "h", text: "Purchase" },
      { kind: "li", text: "Current plan, restore purchases, manage subscription, and a copyable purchase ID to quote if you ever need help with a transaction." },
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
      { kind: "li", text: "Full access to all device frames, shapes, languages, export resolutions, and store uploads." },
      { kind: "li", text: "Watermark-free exports." },
      { kind: "h", text: "Pro" },
      { kind: "li", text: "Unlimited projects, rows, and templates." },
      { kind: "li", text: "No row or screenshot-column limits when building larger launch sets." },
      { kind: "li", text: "Future Pro-only features as they ship." },
      { kind: "h", text: "Buying or restoring" },
      { kind: "li", text: "**Settings ▸ Purchase** lists the available plans. RevenueCat handles the transaction." },
      { kind: "li", text: "**Restore Purchases** brings back an existing purchase on a new Mac." },
      { kind: "li", text: "Subscriptions are managed through your Apple Account; cancellations happen via System Settings ▸ Apple Account ▸ Subscriptions." },
      { kind: "tip", text: "Pro paywall messages adapt to context — the prompt you see when adding a 4th row is different from the one you see when adding a 6th template, so you always know exactly which limit you're hitting." },
    ],
  },
  {
    id: "tips",
    navTitle: "Tips & Tricks",
    title: "Tips & Tricks",
    subtitle: "Small things that save time.",
    blocks: [
      { kind: "li", text: "**Drop groups of screenshots together.** Select several image files and drop them onto a row — Screenshot Bro fills templates in order and detects device category/frame where possible." },
      { kind: "li", text: "**Span backgrounds for storytelling.** Turn on **Stretch across all screenshots** and use a wide gradient or panoramic image to make a 3-template carousel feel like one continuous scene." },
      { kind: "li", text: "**Lock aspect when resizing icons** by holding **⇧** while dragging a corner handle." },
      { kind: "li", text: "**Duplicate while dragging** with **⌥**. Combined with snap, this is the fastest way to lay out a row of equal-sized cards." },
      { kind: "li", text: "**Type rotation degrees directly.** The rotation field accepts text input — type `45` for an exact 45° rotation instead of dragging." },
      { kind: "li", text: "**Use the SVG button for icons.** SVG scales infinitely, so your hero icon stays crisp at export size." },
      { kind: "li", text: "**Re-translate after editing base text.** If you change the base headline, run **Language ▸ Re-Translate All Text…** (or use **Translate Selected to All Languages** in the language bar with the edited text selected) so every language picks up the new wording." },
      { kind: "li", text: "**Use Invisible category for clipped designs.** When you want the screenshot to bleed off the canvas with no bezel, pick the Invisible device category." },
      { kind: "li", text: "**Star frequently used projects.** **Star Project** — on the toolbar ⋯ menu, or by right-clicking a card on the Projects screen — floats it to the top of the picker." },
      { kind: "li", text: "**Preview before exporting.** The Quick Look button on each template renders the row's screenshots and opens the preview at that template — handy for spot-checks." },
      { kind: "li", text: "**Repeat a shape across the row.** Right-click ▸ **Duplicate ▸ To All Screenshots** drops a logo or footer onto every template at the same spot." },
      { kind: "li", text: "**Translate a repeated headline once.** Right-click a text shape ▸ **Reuse Translation** links it to another string so they share one translation." },
      { kind: "li", text: "**Lock the background art.** **⌘L** on a full-bleed image stops you grabbing it every time you click near the canvas edge." },
      { kind: "li", text: "**Check the set, not just the screenshot.** The pencil/eye switch in a row header shows the templates as a store-style carousel, which is how buyers will actually see them." },
      { kind: "li", text: "**Custom fonts persist.** Imported fonts are bundled per project, so a project shared via iCloud or zip backup keeps its typography." },
    ],
  },
  {
    id: "shortcuts",
    navTitle: "Shortcuts",
    title: "Keyboard Shortcuts",
    subtitle: "Mac keyboard shortcuts and canvas gestures.",
    blocks: [
      {
        kind: "table",
        title: "File",
        rows: [
          { keys: "⌘N", description: "New project" },
          { keys: "⌘E", description: "Export screenshots" },
        ],
      },
      {
        kind: "table",
        title: "Edit",
        rows: [
          { keys: "⌘Z", description: "Undo" },
          { keys: "⌘⇧Z", description: "Redo" },
          { keys: "⌘C", description: "Copy selected shapes, or focused text" },
          { keys: "⌘X", description: "Cut focused text" },
          { keys: "⌘V", description: "Paste shapes, images, SVGs, or focused text" },
          { keys: "⌘A", description: "Select all shapes in the active row, or focused text" },
          { keys: "⌘D", description: "Duplicate selected shapes / row" },
          { keys: "⌘L", description: "Lock or unlock selected shapes" },
          { keys: "Delete", description: "Delete selected shapes" },
          { keys: "Esc", description: "Deselect" },
          { keys: "⌘⇧]", description: "Bring shape to front" },
          { keys: "⌘⇧[", description: "Send shape to back" },
          { keys: "← → ↑ ↓", description: "Nudge selection by 1px" },
          { keys: "⇧ + Arrow", description: "Nudge selection by 10px" },
          { keys: "⌥ + Drag", description: "Duplicate while dragging" },
          { keys: "⇧ + Drag rotation handle", description: "Snap rotation to 15° steps" },
          { keys: "⇧ + Drag resize handle", description: "Lock aspect ratio" },
        ],
      },
      {
        kind: "table",
        title: "View",
        rows: [
          { keys: "⌘+", description: "Zoom in" },
          { keys: "⌘−", description: "Zoom out" },
          { keys: "⌘0", description: "Reset to default zoom" },
          { keys: "⌘⌥I", description: "Show or hide the inspector" },
          { keys: "F", description: "Focus on selection" },
          { keys: "Pinch / ⌘ + Scroll", description: "Zoom canvas" },
          { keys: "Middle-click + drag", description: "Pan canvas" },
        ],
      },
      {
        kind: "table",
        title: "Language",
        rows: [
          { keys: "Language menu", description: "Lists every language you've added, plus every translation action" },
          { keys: "⌘]", description: "Next language" },
          { keys: "⌘[", description: "Previous language" },
          { keys: "⌘⌥0", description: "Switch to base language" },
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
      {
        kind: "table",
        title: "Window",
        rows: [
          { keys: "Window ▸ Show Main Window", description: "Bring the editor back when its window is closed" },
        ],
      },
      {
        kind: "table",
        title: "App",
        rows: [
          { keys: "⌘,", description: "Open Settings" },
          { keys: "⌘?", description: "Open Screenshot Bro Help" },
        ],
      },
    ],
  },
  {
    id: "support",
    navTitle: "Support",
    title: "Support & Feedback",
    subtitle: "We read every message.",
    blocks: [
      { kind: "p", text: `The fastest way to get help is the [Screenshot Bro Discord](${DISCORD_INVITE_URL}) — questions, bug reports, and feature requests all land in front of the maker there, and you can see what is shipping next. Prefer email? Write to [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}).` },
      { kind: "h", text: "Reporting a bug" },
      { kind: "li", text: "Paste **Settings ▸ General ▸ Copy Diagnostics** into your message — it carries your version, setup, and the ID that lets us find your crash reports. No project content." },
      { kind: "li", text: "Describe the steps that reproduce the problem, ideally with a screen recording." },
      { kind: "li", text: "If the issue involves a specific project, attach a backup zip (**Settings ▸ General ▸ Storage ▸ Create Backup…**) — it makes fixes dramatically faster." },
      { kind: "h", text: "Privacy" },
      { kind: "li", text: "Your projects and screenshots stay on your Mac (and your iCloud, if you enable sync). See the [privacy policy](/privacy) for details." },
      { kind: "tip", text: "Enjoying Screenshot Bro? An App Store review genuinely helps a small app get discovered." },
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
  showcase: (
    <svg {...SVG_PROPS}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <rect x="6.5" y="8.5" width="3.4" height="7" rx="0.8" />
      <rect x="10.9" y="8.5" width="3.4" height="7" rx="0.8" />
      <rect x="15.3" y="8.5" width="3.4" height="7" rx="0.8" />
    </svg>
  ),
  "app-store-connect": (
    <svg {...SVG_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8.5,12 12,8.5 15.5,12" />
      <line x1="12" y1="8.5" x2="12" y2="16" />
    </svg>
  ),
  "google-play": (
    <svg {...SVG_PROPS}>
      <path d="M5 3.5v17l13.5-8.5z" />
      <line x1="5" y1="3.5" x2="14.5" y2="15.5" />
      <line x1="5" y1="20.5" x2="14.5" y2="8.5" />
    </svg>
  ),
  icloud: <IconCloud size={ICON_SIZE} />,
  automation: (
    <svg {...SVG_PROPS}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <polyline points="7,9 10,12 7,15" />
      <line x1="12" y1="15" x2="17" y2="15" />
    </svg>
  ),
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

function SectionView({ section, locale }: { section: Section; locale: LocaleCode }) {
  const image = section.image;
  const imageSrc = image && (image.src ?? `/docs-help/${section.id}.webp`);
  return (
    <section>
      <h2 id={section.id}>{section.title}</h2>
      {section.subtitle && (
        <p className="-mt-2 mb-4 text-ink/55 italic">{section.subtitle}</p>
      )}
      {image && imageSrc && (
        <DocFigure image={image} src={imageSrc} locale={locale} />
      )}
      {renderBlocks(section.blocks, locale)}
    </section>
  );
}

export default function Help() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <ContentLayout locale={locale}>
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
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/55 font-mono mb-4">
              On this page
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_ENTRIES.map((entry) => (
                <a
                  key={entry.id}
                  href={entry.href ? localeHref(locale, entry.href) : `#${entry.id}`}
                  className="flex items-center gap-2.5 text-sm text-ink/60 hover:text-ink/95 transition-colors"
                >
                  <span className="text-ink/55 shrink-0">
                    {ICON_MAP[entry.id]}
                  </span>
                  <span>{entry.navTitle}</span>
                </a>
              ))}
            </nav>
          </aside>

          <article className="prose-policy max-w-3xl">
            {SECTIONS.map((section) => (
              <SectionView key={section.id} section={section} locale={locale} />
            ))}
          </article>
        </div>
      </div>
    </ContentLayout>
  );
}
