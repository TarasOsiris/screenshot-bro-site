import type { Block, SectionImage } from "~/components/DocBlocks";

// The written walkthrough at /tutorials/how-to-use-screenshot-bro. This is the
// task-shaped counterpart to /docs/help: ten steps in the order a new user meets
// them, each linking into the reference manual rather than restating it.
//
// Screenshots are the ones already captured for the help docs in
// public/docs-help/ — width/height are the true intrinsic pixel sizes, so keep
// them in sync with docs.help.tsx if either is ever recaptured.

export type GuideLink = { label: string; href: string };

export type GuideStep = {
  /** Anchor id and sidebar key. */
  id: string;
  /** Short label for the "On this page" sidebar. */
  navTitle: string;
  title: string;
  /** One-line lead — also becomes the HowToStep text in structured data. */
  summary: string;
  images?: SectionImage[];
  blocks: Block[];
  learnMore?: GuideLink[];
};

/** Drives the sitemap lastmod and the "Updated" stamp on the page. */
export const GUIDE_UPDATED = "2026-08-21";

/** Rough end-to-end time, as an ISO 8601 duration for the HowTo schema. */
export const GUIDE_TOTAL_TIME = "PT20M";

export const GUIDE_INTRO: Block[] = [
  {
    kind: "p",
    text: "This guide walks the whole job end to end: from opening Screenshot Bro for the first time to a finished set of App Store and Google Play screenshots, in every language you ship, uploaded to the store. It takes about twenty minutes the first time and a good deal less after that.",
  },
  { kind: "h", text: "What you need" },
  {
    kind: "li",
    text: "**Screenshot Bro**, on a Mac running macOS 15 or later, or an iPad or iPhone running iOS/iPadOS 18 or later. The free tier is enough to follow every step here.",
  },
  {
    kind: "li",
    text: "**A handful of raw screenshots** of your app — from the Simulator, from a real device, it doesn't matter. Three to five is plenty to start.",
  },
  {
    kind: "li",
    text: "**A rough idea of what each screenshot should say.** One short line per screenshot. You can write them as you go, but it's faster if you don't have to.",
  },
  {
    kind: "p",
    text: "Every step links to the matching section of the [help docs](/docs/help), which go deeper on any control mentioned here.",
  },
];

export const GUIDE_STEPS: GuideStep[] = [
  {
    id: "install",
    navTitle: "Install and open",
    title: "Install and open Screenshot Bro",
    summary: "Get the app, open it, and get your bearings in the editor.",
    images: [
      {
        src: "/docs-help/editor-overview.webp",
        alt: "The Screenshot Bro editor: a toolbar with the project name and an Export button, a bar of language tabs, two rows of screenshots on the canvas, and the inspector open on the right",
        width: 1600,
        height: 1046,
        caption: "The editor — canvas in the middle, inspector on the right, **Export** in the toolbar.",
      },
    ],
    blocks: [
      {
        kind: "p",
        text: "Screenshot Bro is a native app, not a website — it runs on macOS 15 and later, and on iPad and iPhone running iOS/iPadOS 18 and later. There is no signup and no trial clock. The free tier gives you one project with up to 3 rows and 5 screenshots per row, every device frame, every language, and exports with no watermark.",
      },
      {
        kind: "p",
        text: "The first time a project opens, a short coach tour points out five things in order: where to drop a screenshot, the row editor, the language menu, the export button, and what Pro unlocks. It maps almost exactly onto the steps below.",
      },
      { kind: "h", text: "What you're looking at" },
      {
        kind: "li",
        text: "**The canvas** fills most of the window. It is one continuous, zoomable surface — every device size and every screenshot in your listing sits on it side by side, rather than in separate documents.",
      },
      {
        kind: "li",
        text: "**Rows** are the horizontal bands on the canvas. One row per device size.",
      },
      {
        kind: "li",
        text: "**The inspector** on the right holds the settings for whatever is selected — a whole row, or a single shape.",
      },
      {
        kind: "li",
        text: "**The toolbar** has the project switcher on the left, **Export** in the middle, and zoom, undo, the inspector toggle and the language menu on the right.",
      },
      {
        kind: "tip",
        text: "**⌘⌥I** hides the inspector when you want the canvas to yourself, and **⌘0** snaps the zoom back to its default.",
      },
    ],
    learnMore: [{ label: "Welcome & workflow", href: "/docs/help#welcome" }],
  },
  {
    id: "create-project",
    navTitle: "Create a project",
    title: "Create your first project",
    summary: "One project holds one app's entire screenshot set. Start from a template, or from blank.",
    images: [
      {
        src: "/docs-help/projects.webp",
        alt: "The New Project window with a Name field, a Template and a Blank option, and three configured rows each with a size preset, a screenshot count, and a device picker",
        width: 1600,
        height: 1272,
        caption: "**File ▸ New Project…** — name it, choose Template or Blank, and pre-configure the rows.",
      },
    ],
    blocks: [
      {
        kind: "p",
        text: "**File ▸ New Project…** (**⌘N**) opens the New Project window. Name it after your app, or after the app plus the release it's for — a project is normally one app, or one major version of one app.",
      },
      { kind: "h", text: "Template or blank" },
      {
        kind: "li",
        text: "**Template** starts you on one of the 50+ bundled layouts; the button then reads **Create from Template**. Pick this if you want something that already looks finished — the copy, screenshots and colours are all yours to change afterwards.",
      },
      {
        kind: "li",
        text: "**Blank** gives you an empty canvas and the button reads **Create Blank Project**. Pick this if you already know the layout you want, or you're rebuilding an existing listing.",
      },
      { kind: "h", text: "Set the rows up front" },
      {
        kind: "li",
        text: "The **Rows** list in the window configures the project before it opens: a screenshot size, how many screenshots, and a device frame for each row.",
      },
      {
        kind: "li",
        text: "Nothing here is locked in — every one of those can be changed later from the inspector.",
      },
      {
        kind: "tip",
        text: "There is no Save command to forget: projects autosave 0.3 seconds after your last change. For a one-off copy, use **Settings ▸ General ▸ Storage ▸ Create Backup…**.",
      },
    ],
    learnMore: [{ label: "Projects", href: "/docs/help#projects" }],
  },
  {
    id: "rows-and-templates",
    navTitle: "Rows and screenshots",
    title: "Set up rows and screenshots",
    summary: "A row for each device size, and a column for each screenshot you'll submit.",
    images: [
      {
        src: "/docs-help/rows.webp",
        alt: "Two rows on the canvas — an iPhone 6.7-inch row at 1290 by 2796 above an iPad Pro 13-inch row at 2048 by 2732",
        width: 1600,
        height: 1165,
        caption: "Two rows, two device sizes, one canvas.",
      },
      {
        src: "/docs-help/templates.webp",
        alt: "A single row of screenshots side by side, each with its own headline and device frame",
        width: 1600,
        height: 710,
        caption: "Inside a row, each column is one image you'll upload.",
      },
    ],
    blocks: [
      { kind: "p", text: "Two words carry most of the weight in Screenshot Bro:" },
      {
        kind: "li",
        text: "A **row** is one device size. The App Store wants separate uploads for iPhone and iPad, so those are two rows.",
      },
      {
        kind: "li",
        text: "A **screenshot** is one column inside a row — one final image you submit. The App Store accepts up to 10 per size and Google Play up to 8; most apps use somewhere between three and ten.",
      },
      { kind: "h", text: "Adding a row" },
      {
        kind: "li",
        text: "The dashed **+** tile at the bottom of the canvas adds one — its tooltip reads \"Add new row\".",
      },
      {
        kind: "li",
        text: "With the row selected, the inspector's **Screenshot Size** section sets its pixel size. **Presets** covers the sizes the stores accept — `iPhone 6.9\"` at 1290×2796, `iPad 13\"` at 2048×2732, `Mac Desktop` at 2880×1800, `Android Phone` at 1080×1920, and so on — or switch to **Custom** and type your own.",
      },
      {
        kind: "li",
        text: "Exports come out at exactly these dimensions, so this is the setting that decides whether the store accepts your upload.",
      },
      { kind: "h", text: "Adding screenshots to a row" },
      {
        kind: "li",
        text: "The dashed **+** at the right-hand end of a row adds a column — its tooltip reads \"Add screenshot\".",
      },
      {
        kind: "li",
        text: "Drag columns left and right to reorder them. That order becomes the export numbering, and the order shoppers swipe through in the store.",
      },
      {
        kind: "li",
        text: "The **⋯** menu in the row header has **Duplicate Row**, **Move Row Up / Down**, and export for that row on its own.",
      },
      {
        kind: "tip",
        text: "Not sure which sizes to start with? Design the largest first — a 6.9\" iPhone row, plus a 13\" iPad row if your app runs on iPad — then adapt downwards. [App Store screenshot sizes](/blog/app-store-screenshot-sizes) has the full table.",
      },
    ],
    learnMore: [
      { label: "Rows", href: "/docs/help#rows" },
      { label: "Templates", href: "/docs/help#templates" },
    ],
  },
  {
    id: "import",
    navTitle: "Import screenshots",
    title: "Drop in your raw screenshots",
    summary: "Drag captures from the Simulator or a real device straight onto the canvas.",
    images: [
      {
        src: "/docs-help/importing.webp",
        alt: "The control bar beneath each screenshot on the canvas, with visibility, download, reorder, background colour, delete and more-actions buttons",
        width: 1600,
        height: 394,
        caption: "Drop a file on one screenshot, or a whole batch on the row.",
      },
    ],
    blocks: [
      {
        kind: "p",
        text: "Capture your raw screenshots first — Simulator, a real device, whatever you already have — then drag them in.",
      },
      {
        kind: "li",
        text: "Drop **one file onto one screenshot** to attach it. If that column has no device frame yet, one is created for you.",
      },
      {
        kind: "li",
        text: "Drop **a group of files onto a row** and they fill the columns in order, adding columns if the row runs out.",
      },
      {
        kind: "li",
        text: "Screenshot Bro reads the pixel dimensions of what you dropped and picks a matching device category and model where it can.",
      },
      { kind: "h", text: "Other things worth dropping in" },
      {
        kind: "li",
        text: "Background images — PNG, JPEG or SVG — onto the image well in the inspector's Background section.",
      },
      {
        kind: "li",
        text: "Custom fonts: choose **Pick custom font** in any text shape's font picker to import `.otf` / `.ttf` files. Imported fonts are bundled with the project, so they survive iCloud sync and backups.",
      },
      {
        kind: "li",
        text: "SVG markup, pasted into the dialog behind the inspector's **SVG** button. It is sanitised — scripts and event handlers are stripped — before it renders.",
      },
      {
        kind: "tip",
        text: "Select the whole batch in Finder and drop it on the row in one go. File order becomes screenshot order, which saves reordering later.",
      },
    ],
    learnMore: [{ label: "Importing", href: "/docs/help#importing" }],
  },
  {
    id: "frames",
    navTitle: "Device frames",
    title: "Frame them in a device",
    summary: "Wrap each screenshot in an accurate device bezel — or in none at all.",
    images: [
      {
        src: "/docs-help/devices.webp",
        alt: "The Device section of the inspector with a Default device frame picker set to iPhone 17 Pro Max, three frame colour swatches, and portrait and landscape orientation buttons",
        width: 510,
        height: 304,
        caption: "The **Device** section sets the frame every new screenshot in the row starts with.",
      },
    ],
    blocks: [
      {
        kind: "p",
        text: "A device shape draws your screenshot inside a real bezel with the correct screen inset. Select one and the properties bar along the bottom of the window lets you change its model, colour and orientation.",
      },
      { kind: "h", text: "What's available" },
      {
        kind: "li",
        text: "**iPhone** — iPhone 17, iPhone Air, iPhone 17 Pro and iPhone 17 Pro Max, in the current colours.",
      },
      { kind: "li", text: "**iPad Pro 11\"** and **iPad Pro 13\"**, portrait and landscape." },
      { kind: "li", text: "**Mac** — MacBook Air 13\", MacBook Pro 14\" and 16\", and iMac 24\"." },
      { kind: "li", text: "**Watch** — Apple Watch Ultra 3, with its band variants." },
      {
        kind: "li",
        text: "**Android Phone**, **Abstract Pixel 9** and **Android Tablet** — abstract frames that flex to match whatever aspect ratio you drop into them.",
      },
      {
        kind: "li",
        text: "**Invisible** — no bezel at all, just the screenshot. Use it when you want the image to bleed off the edge of the canvas.",
      },
      { kind: "h", text: "Changing frames you've already placed" },
      {
        kind: "li",
        text: "The inspector's **Device** section sets the row's **Default device frame**, its colour and its orientation, so new screenshots in that row all start the same way.",
      },
      {
        kind: "li",
        text: "Row menu ▸ **Devices ▸ Change All To** swaps every frame in the row to another model in one step.",
      },
      {
        kind: "li",
        text: "Right-click a device ▸ **Match Size to Other Devices** resizes every other frame in the row to match the one you clicked.",
      },
      {
        kind: "tip",
        text: "The models marked **(3D)** — iPhone 17 and iPhone 17 Pro Max — are rendered from real geometry, so their **Appearance** popover adds pitch and yaw, a matte or glossy finish, and lighting. They're in beta.",
      },
    ],
    learnMore: [{ label: "Devices & frames", href: "/docs/help#devices" }],
  },
  {
    id: "headline",
    navTitle: "Headlines and shapes",
    title: "Add your headline",
    summary: "One short line per screenshot, plus whatever shapes it needs.",
    images: [
      {
        src: "/docs-help/shapes.webp",
        alt: "The Shapes section of the inspector with Shapes, Text, Image, Device and SVG buttons",
        width: 510,
        height: 215,
        caption: "Everything on the canvas comes from the inspector's **Shapes** section.",
      },
    ],
    blocks: [
      {
        kind: "p",
        text: "The inspector's **Shapes** section is where everything on the canvas comes from: a **Shapes** popover holding Rectangle, Circle and Star, then buttons for **Text**, **Image**, **Device** and **SVG**. New shapes land in the middle of the current screenshot, already selected.",
      },
      { kind: "h", text: "Writing text" },
      {
        kind: "li",
        text: "Double-click a text shape to edit it in place. **Esc**, or a click outside, commits the edit.",
      },
      {
        kind: "li",
        text: "The properties bar carries font, weight, size, colour, horizontal and vertical alignment, line height and letter spacing.",
      },
      {
        kind: "li",
        text: "Select part of a line while editing and the format bar gives that run its own bold, italic, underline, strikethrough, size or colour. **Clear formatting** puts it back to the shape's base style.",
      },
      {
        kind: "li",
        text: "**Text background** turns a headline into a badge — **Solid**, **Pill**, **Outline** or **Highlight**, with colour, padding, corner radius and opacity.",
      },
      {
        kind: "li",
        text: "Right-click ▸ **Copy Text Style**, then **Paste Text Style** on another headline, carries the whole look across.",
      },
      { kind: "h", text: "Repeating something across the row" },
      {
        kind: "li",
        text: "Right-click a shape ▸ **Duplicate ▸ To All Screenshots** drops a copy into every other column at the same relative spot. That's the quick way to put a logo or a footer on all of them.",
      },
      {
        kind: "li",
        text: "SVG is worth using for logos and icons — it stays crisp at any export resolution, and it takes a colour override.",
      },
      {
        kind: "tip",
        text: "Headlines are read at thumbnail size in the store carousel, so five or six words is usually the ceiling. [Screenshots that convert](/blog/screenshots-that-convert) goes into what to actually say.",
      },
    ],
    learnMore: [{ label: "Shapes & text", href: "/docs/help#shapes" }],
  },
  {
    id: "background",
    navTitle: "Backgrounds",
    title: "Style the background",
    summary: "Colour, gradient or image — for a whole row, or for one screenshot.",
    images: [
      {
        src: "/docs-help/backgrounds.webp",
        alt: "The Background editor in Gradient mode, with a colour stop bar, sixteen gradient presets, an angle wheel set to 35 degrees, a blur slider, and a Stretch across all screenshots toggle",
        width: 510,
        height: 843,
        caption: "Gradient mode — stops, presets, angle, blur, and the row-spanning toggle.",
      },
    ],
    blocks: [
      {
        kind: "p",
        text: "Select a row — click empty canvas space inside it — and the inspector's **Background** section offers three styles: **Color**, **Gradient** and **Image**.",
      },
      { kind: "h", text: "Gradients" },
      {
        kind: "li",
        text: "**Linear**, **Radial** or **Angular**. Add as many colour stops as you want, and set the direction with the angle wheel.",
      },
      {
        kind: "li",
        text: "There are 16 gradient presets under the stop editor if you'd rather not mix your own.",
      },
      {
        kind: "li",
        text: "**Blur** softens whatever is behind it — useful when a photographic background is competing with your headline.",
      },
      { kind: "h", text: "One background across several screenshots" },
      {
        kind: "li",
        text: "The **Stretch across all screenshots** toggle renders the background once across the full width of the row, instead of repeating it in every column.",
      },
      {
        kind: "li",
        text: "That is how one gradient or a single panoramic image flows through a three-screenshot carousel as one continuous scene.",
      },
      {
        kind: "li",
        text: "It needs at least two screenshots in the row before it does anything.",
      },
      { kind: "h", text: "Overriding one screenshot" },
      {
        kind: "li",
        text: "The control bar under a screenshot sets a background for that column alone, replacing the row's.",
      },
      {
        kind: "tip",
        text: "Image backgrounds take the same fill modes as image shapes — **Fill**, **Fit**, **Stretch** and **Tile** — and Tile adds spacing, offset and scale per axis.",
      },
    ],
    learnMore: [{ label: "Backgrounds", href: "/docs/help#backgrounds" }],
  },
  {
    id: "arrange",
    navTitle: "Arrange and preview",
    title: "Arrange, align, and preview",
    summary: "Move things around, line them up, then look at the row with the editing chrome gone.",
    images: [
      {
        src: "/docs-help/editing.webp",
        alt: "A device frame selected and rotated on the canvas, with resize handles at its corners and edges and a rotation handle above it",
        width: 1600,
        height: 751,
        caption: "Drag, resize, rotate, snap — shapes live on the row canvas, not inside one column.",
      },
    ],
    blocks: [
      { kind: "h", text: "Moving things" },
      {
        kind: "li",
        text: "Drag the body of a shape to move it, a corner or edge handle to resize, and the handle above it to rotate. The rotation field takes a typed number if you want exactly 45°.",
      },
      {
        kind: "li",
        text: "Hold **⇧** while resizing to keep the aspect ratio. Hold **⌥** while dragging to leave a duplicate behind.",
      },
      {
        kind: "li",
        text: "Arrow keys nudge the selection by 1px, **⇧ + arrow** by 10px.",
      },
      { kind: "h", text: "Lining things up" },
      {
        kind: "li",
        text: "Shapes snap to each other's edges and centres and to screenshot boundaries; blue guides show you what's aligned while you drag.",
      },
      {
        kind: "li",
        text: "Select several, then right-click ▸ **Align Selected** for the six alignments plus **Distribute Horizontally** and **Distribute Vertically**.",
      },
      {
        kind: "li",
        text: "**Match to This** copies the position, the size, or both, from the shape you right-clicked onto the rest of the selection.",
      },
      { kind: "h", text: "Shapes that cross screenshots" },
      {
        kind: "li",
        text: "Shapes sit on the row canvas rather than inside one column, so a headline can begin on one screenshot and finish on the next. On export each column clips to its own bounds.",
      },
      {
        kind: "li",
        text: "If you can only see part of a shape, that's why. Press **F** to focus the view on the whole thing.",
      },
      { kind: "h", text: "Checking your work" },
      {
        kind: "li",
        text: "The pencil / eye switch in a row header flips that row into preview — no handles, no guides, no dividers, exactly what will export.",
      },
      {
        kind: "li",
        text: "**Quick Look**, in a screenshot's **⋯** menu, renders that single screenshot fully without going near the export flow.",
      },
      {
        kind: "tip",
        text: "**⌘L** locks a shape so clicks pass straight through it. Lock your full-bleed background art and you'll stop grabbing it by accident every time you click near the edge.",
      },
    ],
    learnMore: [{ label: "Editing on the canvas", href: "/docs/help#editing" }],
  },
  {
    id: "languages",
    navTitle: "Languages",
    title: "Add languages and translate",
    summary: "Design once, then produce the same set in every language you ship.",
    images: [
      {
        src: "/docs-help/locales.webp",
        alt: "The Add Language sheet with a search field and a list of language presets — French, German, Spanish, Italian, Portuguese, Dutch, Russian, Korean, Chinese — each with an Add button",
        width: 1000,
        height: 956,
        caption: "**Language ▸ Manage Languages…** — 81 built-in presets, plus custom codes.",
      },
    ],
    blocks: [
      {
        kind: "p",
        text: "Adding a language doesn't duplicate your project. Every language shares one set of shapes; what varies is the text — and anything else you choose to override for that language, such as styling, an image, or a position when a translation needs more room.",
      },
      { kind: "h", text: "Adding them" },
      {
        kind: "li",
        text: "**Language ▸ Manage Languages…**, or the language menu in the toolbar, opens the **Add Language** sheet. Search it, hit **Add**, then **Done**.",
      },
      {
        kind: "li",
        text: "There are **81 built-in language presets**, and you can define a custom code if the one you need isn't among them.",
      },
      {
        kind: "li",
        text: "The first language you add is the **base language** — the source text everything else translates from. It carries a **Base** badge in the list, and you can hand that role to another language later.",
      },
      { kind: "h", text: "Translating" },
      {
        kind: "li",
        text: "**Auto-Translate Missing Text** fills in whatever hasn't been translated yet for the language you're in. It runs on your Mac using Apple's Translation framework, so it covers the language pairs that framework supports; the rest you type or paste.",
      },
      {
        kind: "li",
        text: "**Re-Translate All Text…** replaces every existing translation — that's the one to run after you reword the base language.",
      },
      {
        kind: "li",
        text: "**Edit Translation Table…** opens a side-by-side view of every string with all its translations, which is the fastest way to review a language in one pass.",
      },
      {
        kind: "li",
        text: "Right-click a text shape ▸ **Reuse Translation** links it to another string, so a headline repeated across screenshots only gets translated once.",
      },
      { kind: "h", text: "Working inside a language" },
      {
        kind: "li",
        text: "**⌘]** and **⌘[** move through your languages; **⌘⌥0** jumps back to base.",
      },
      {
        kind: "li",
        text: "A banner across the top of the canvas tells you when you are not in the base language, so you don't edit the wrong one by accident.",
      },
      {
        kind: "tip",
        text: "Anything a language has no override for falls back to the base language, so an untranslated headline shows the base text rather than an empty box. Nothing breaks if you only get halfway.",
      },
    ],
    learnMore: [{ label: "Languages & translations", href: "/docs/help#locales" }],
  },
  {
    id: "export",
    navTitle: "Export and upload",
    title: "Export — and upload to the stores",
    summary: "Render the whole set at store resolutions, then send it to App Store Connect or Google Play.",
    images: [
      {
        src: "/docs-help/exporting.webp",
        alt: "An Exporting Screenshots progress sheet over the canvas, showing 108 of 738 images rendered with a Cancel button",
        width: 1600,
        height: 452,
        caption: "Every row, every language, in one run.",
      },
    ],
    blocks: [
      { kind: "h", text: "Exporting to a folder" },
      {
        kind: "li",
        text: "**Export** in the toolbar, or **⌘E**, renders the project into your export folder. If you haven't set one, it asks for it.",
      },
      {
        kind: "li",
        text: "**Export All Screenshots to Folder…** picks a destination for a single run; **Settings ▸ Export ▸ Export folder** sets the one **⌘E** reuses from then on.",
      },
      {
        kind: "li",
        text: "Filenames are zero-padded — `01_`, `02_` — so they sort correctly when you upload them. Format is PNG or JPEG in **Settings ▸ Export**; PNG for store screenshots.",
      },
      {
        kind: "li",
        text: "Images come out at the row's exact pixel size — there is no scale factor to choose.",
      },
      { kind: "h", text: "What you get" },
      { kind: "li", text: "One row, one language: a flat folder of images." },
      {
        kind: "li",
        text: "Several languages: a folder per language — the shape App Store Connect's localized uploads expect.",
      },
      { kind: "li", text: "Several rows: a sub-folder per row label inside each language folder." },
      {
        kind: "li",
        text: "Anything switched off in the inspector's **Visibility** section is left out of the exported image too, not just hidden in the editor. Template borders and alignment guides are editor-only and never export.",
      },
      { kind: "h", text: "Uploading without leaving the app" },
      {
        kind: "li",
        text: "**Upload to App Store Connect…** in the export menu renders straight from the project. Pick the app and a version, map rows to display types and languages, and **Review Changes** lists exactly what will be added, replaced or left alone before anything is sent to Apple.",
      },
      {
        kind: "li",
        text: "**Upload to Google Play…** does the same against a store listing — enter your package name, review the mapping, confirm. The upload is staged as a Play edit and committed when you confirm.",
      },
      {
        kind: "li",
        text: "Each needs credentials set up once: an App Store Connect API key (Issuer ID, Key ID and the `.p8` file) or a Google Play service account JSON. Both are stored in your Mac's Keychain.",
      },
      {
        kind: "li",
        text: "Both uploads work on the free tier — Pro only lifts the project, row and screenshot limits.",
      },
      { kind: "h", text: "One more export mode" },
      {
        kind: "li",
        text: "Row menu ▸ **Export Row ▸ Showcase** arranges a whole row on a styled background as a single marketing image, in social, square, portrait, story, YouTube or Pinterest proportions. That one is for posting *about* your screenshots, not for the store.",
      },
      {
        kind: "tip",
        text: "Not ready to connect a real account? Both integrations have a **Demo mode** in Settings that walks the entire flow against sample data and sends nothing anywhere.",
      },
    ],
    learnMore: [
      { label: "Exporting", href: "/docs/help#exporting" },
      { label: "App Store Connect", href: "/docs/help#app-store-connect" },
      { label: "Google Play", href: "/docs/help#google-play" },
    ],
  },
];

export const GUIDE_NEXT_STEPS: GuideLink[] = [
  {
    label: "Help & documentation — every control, in detail",
    href: "/docs/help",
  },
  {
    label: "Project file schema — the plain JSON projects are stored in",
    href: "/docs/project-schema",
  },
  {
    label: "Screenshots that convert — what to put on them",
    href: "/blog/screenshots-that-convert",
  },
  {
    label: "Uploading screenshots to App Store Connect",
    href: "/blog/upload-screenshots-to-app-store-connect",
  },
];
