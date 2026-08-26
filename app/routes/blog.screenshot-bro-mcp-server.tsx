import type { Route } from "./+types/blog.screenshot-bro-mcp-server";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { CodeBlock } from "~/components/CodeBlock";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { highlight } from "~/lib/highlight";
import { isLocaleCode, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

const SLUG = "screenshot-bro-mcp-server";

const CONNECTION_FACTS = [
  { property: "Transport", value: "Streamable HTTP (not stdio)" },
  { property: "Address", value: "http://127.0.0.1:8722/mcp — loopback only" },
  { property: "Authentication", value: "Authorization: Bearer <access token>, stored in your Keychain" },
  { property: "Default state", value: "Off. Opt in at Settings ▸ Automation" },
  { property: "Platform", value: "macOS only — the iPad and iPhone builds have no MCP server" },
  { property: "Availability", value: "Screenshot Bro 3.6+ (App Store Connect sync tools need 3.9+)" },
  { property: "Lifecycle", value: "Starts with the app once enabled; the app must be running" },
] as const;

const TOOL_GROUPS = [
  {
    area: "Projects",
    tools: "list_templates, list_projects, get_project, create_project, rename_project, delete_project, switch_project",
    what: "Discover bundled templates, create a project from one (or blank), switch the active project, and pull a full structured snapshot with every id other tools need.",
  },
  {
    area: "Rows & columns",
    tools: "add_row, update_row, move_row, delete_row, add_template, remove_template",
    what: "Add screenshot rows at a given pixel size, set labels, solid or gradient backgrounds, spanning backgrounds, device visibility and default frames, and add or remove screenshot columns.",
  },
  {
    area: "Shapes",
    tools: "add_shape, update_shape, delete_shape",
    what: "Place and patch rectangles, circles, stars, text, device frames, bundled SVG presets and images — position, size, rotation, opacity, corner radius, fill, outline, font, alignment, lock and z-order.",
  },
  {
    area: "Screenshots",
    tools: "import_screenshots",
    what: "Load PNG or JPEG files from disk into a row's device frames, in order, creating columns as needed.",
  },
  {
    area: "Languages",
    tools: "add_locale, remove_locale, set_translation",
    what: "Add locales such as de-DE or ja to the project and write per-locale text for any text shape.",
  },
  {
    area: "Seeing & exporting",
    tools: "render_preview, export_project",
    what: "Render a row (or one column) as a downscaled PNG the model can actually look at, and export the finished set as PNG or JPEG files.",
  },
  {
    area: "App Store Connect",
    tools: "get_app_store_metadata, update_app_store_description, preview_app_store_screenshot_sync, apply_app_store_screenshot_sync",
    what: "Read every version's per-locale description, write new descriptions back, and preview then apply a checksum-matched screenshot sync to a version.",
  },
] as const;

const TROUBLESHOOTING = [
  {
    symptom: "The client connects but lists no tools",
    cause: "It connected to something else, or loaded before the server started",
    fix: "Check Settings ▸ Automation shows “Running on port 8722”, then reconnect or restart the client so it re-runs the handshake.",
  },
  {
    symptom: "Every call returns 401 / unauthorized",
    cause: "Missing or stale bearer token",
    fix: "Copy the token again from Settings ▸ Automation and update the client's header. Regenerating the token invalidates the old one immediately.",
  },
  {
    symptom: "The server won't start",
    cause: "Another process is holding port 8722",
    fix: "Quit whatever owns the port, then toggle the server off and on again.",
  },
  {
    symptom: "“No active project”",
    cause: "Tools that edit rows and shapes act on the active project only",
    fix: "Have the agent call list_projects and switch_project (or create_project) first.",
  },
  {
    symptom: "“Could not load /path/to/shot.png”",
    cause: "The app is sandboxed and cannot read arbitrary paths",
    fix: "Copy the images into the folder named in the error — the app's own temp directory — and retry with those paths.",
  },
  {
    symptom: "Export fails with a sandbox message",
    cause: "folder_path points somewhere the app can't write",
    fix: "Call export_project without folder_path and copy the returned files out of the temp folder yourself.",
  },
  {
    symptom: "“Plan not found” when applying a sync",
    cause: "Sync plans are cached for 15 minutes",
    fix: "Run preview_app_store_screenshot_sync again and apply the fresh plan_id.",
  },
] as const;

const MCP_CONFIG = `{
  "mcpServers": {
    "screenshot-bro": {
      "type": "http",
      "url": "http://127.0.0.1:8722/mcp",
      "headers": {
        "Authorization": "Bearer PASTE_YOUR_ACCESS_TOKEN"
      }
    }
  }
}`;

const CLAUDE_CODE_ADD = `# Add the server (run it from the folder you want the tools in)
claude mcp add --transport http screenshot-bro http://127.0.0.1:8722/mcp \\
  --header "Authorization: Bearer PASTE_YOUR_ACCESS_TOKEN"

# Confirm it connected
claude mcp list`;

const AGENT_PROMPT = `Add an MCP server named "screenshot-bro" to your configuration so you can
control the Screenshot Bro app.

It uses streamable HTTP transport:
- URL: http://127.0.0.1:8722/mcp
- HTTP header: Authorization: Bearer <your access token>

Use whatever method your MCP client supports (a config-file entry or an
"mcp add" command). After adding it, reconnect so the screenshot-bro tools
load, then list them to confirm.`;

const FIRST_PROMPT = `Using the screenshot-bro tools:

1. Create a project called "Habit Tracker Launch" from a bundled template.
2. Make the first row 1290x2796 with three screenshot columns.
3. Give the row a dark navy background with a subtle vertical gradient.
4. Put one headline near the top of each column: "Build the habit",
   "See the streak", "Never lose a day" — white, centred, large.
5. Render a preview of the row and show it to me before doing anything else.`;

const TOOL_TRACE = `list_templates       -> pick a starter template
create_project       -> name + template_id, becomes the active project
get_project          -> row ids, template ids, sizes, locales, shape ids
update_row           -> size 1290x2796 + background_gradient
add_template         -> third column
add_shape (text) x3  -> one headline per column
update_shape         -> font_size, color, text_align, y position
render_preview       -> returns a PNG the model can look at`;

const STAGING = `# The app is sandboxed: it reads its own container and folders you granted it,
# not arbitrary paths. Stage the shots where it can definitely read them.
# The exact folder is printed in the tool's error message — use that one if
# yours differs.
STAGE=~/Library/Containers/xyz.tleskiv.screenshot/Data/tmp/inbox
mkdir -p "$STAGE"
cp ~/Desktop/raw-shots/*.png "$STAGE"/`;

const SYNC_TRACE = `preview_app_store_screenshot_sync
  -> plan_id, expiresAt (15 minutes), one set per version/display type/locale,
     a contact sheet image, and a list of what would be added, reordered,
     kept or removed — nothing has touched App Store Connect yet

apply_app_store_screenshot_sync
  -> plan_id + the set_ids you approved + confirm: true
     (leave confirm out and the call is rejected)`;

const LOCALIZE_PROMPT = `Add de-DE, fr-FR and ja to the project. For every text shape in row 1,
translate the English copy and write it back with set_translation — keep each
headline under 30 characters so it doesn't wrap, and render a preview of the
German row when you're done so I can check the line breaks.`;

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return {
    locale: (locale || "en") as LocaleCode,
    code: {
      config: highlight("json", MCP_CONFIG),
      claudeCode: highlight("bash", CLAUDE_CODE_ADD),
      agentPrompt: highlight("plaintext", AGENT_PROMPT),
      firstPrompt: highlight("plaintext", FIRST_PROMPT),
      toolTrace: highlight("plaintext", TOOL_TRACE),
      staging: highlight("bash", STAGING),
      syncTrace: highlight("plaintext", SYNC_TRACE),
      localizePrompt: highlight("plaintext", LOCALIZE_PROMPT),
    },
  };
}

export const meta: Route.MetaFunction = ({ matches, params }) =>
  buildBlogPostMeta(SLUG, matches, (params.locale || "en") as LocaleCode);

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  const { locale, code } = useLoaderData<typeof loader>();

  return (
    <BlogArticleShell
      slug={SLUG}
      locale={locale}
      tldr="Open Screenshot Bro on your Mac, switch on Settings ▸ Automation ▸ Enable MCP server, then paste the Copy Agent Prompt into Claude Code, Claude Desktop or Cursor. The client connects to a local server at http://127.0.0.1:8722/mcp with a bearer token, and your agent gets 26 tools that create projects, lay out rows and shapes, import screenshots, translate text, render previews it can actually see, export PNGs, and sync a finished set to App Store Connect — all through the same undoable actions you use by hand."
      ctaMessage="Want an AI agent to build your App Store screenshots while you watch? Turn on the MCP server in Screenshot Bro — it's free to try."
      ctaHomeLinkLabel="a native App Store screenshot app for Mac with a built-in MCP server"
      seoLinks={[
        {
          href: "/docs/help#automation",
          label: "Automation & MCP in the Screenshot Bro manual",
          description: "the reference version of this page, kept in sync with the app.",
        },
        {
          href: "/tutorials/how-to-use-screenshot-bro",
          label: "How to use Screenshot Bro",
          description: "the same job done by hand, in ten steps — useful context for what the agent is driving.",
        },
        {
          href: "/blog/localize-app-store-screenshots",
          label: "Localize App Store screenshots",
          description: "what to translate and what to leave alone before you point an agent at it.",
        },
        {
          href: "/blog/upload-screenshots-to-app-store-connect",
          label: "Upload screenshots to App Store Connect",
          description: "the upload the sync tools automate, explained end to end.",
        },
        {
          href: "/blog/make-and-ship-screenshots-with-fastlane",
          label: "Make and ship screenshots with fastlane",
          description: "the CI-shaped alternative, for when you want no human in the loop at all.",
        },
      ]}
      faqs={[
        {
          question: "What is the Screenshot Bro MCP server?",
          answer:
            "It is a local Model Context Protocol server built into the Screenshot Bro Mac app. When you enable it at Settings ▸ Automation, the app listens on http://127.0.0.1:8722/mcp and exposes 26 tools that let an AI assistant create and edit screenshot projects, import screenshots, translate text, render previews, export images, and sync sets to App Store Connect. It runs on your Mac only, requires an access token, and is off by default.",
        },
        {
          question: "Which AI clients can connect to it?",
          answer:
            "Any MCP client that speaks streamable HTTP and can send an Authorization header — Claude Code, Claude Desktop and Cursor are the common ones. The transport is HTTP rather than stdio, so you configure it with a URL and a bearer token instead of a command to launch.",
        },
        {
          question: "Is the MCP server a Pro feature?",
          answer:
            "No. The Automation tab and the MCP server are not behind the Pro unlock, so you can enable the server and connect a client on the free tier. Pro lifts the project, row and template limits; store uploads and iCloud sync are on the free tier too.",
        },
        {
          question: "Is it safe to let an AI agent edit my screenshots?",
          answer:
            "The server binds to 127.0.0.1, so nothing outside your Mac can reach it, and every request must carry an access token that only you can copy from Settings. Agent edits go through the same actions as the UI, so ⌘Z undoes them and autosave keeps them. App Store Connect mutations are two-step: the agent must first build a sync plan, then apply it with an explicit confirm flag and an explicit list of sets.",
        },
        {
          question: "Can I run it on iPad, or in CI?",
          answer:
            "No. The MCP server is macOS-only and the Screenshot Bro app has to be running for a client to connect, so it suits an agent working alongside you rather than a headless build. For unattended CI screenshot generation, fastlane snapshot and frameit remain the right tool.",
        },
        {
          question: "Which port does the Screenshot Bro MCP server use?",
          answer:
            "Port 8722 on 127.0.0.1, with the MCP endpoint at /mcp — so the full URL is http://127.0.0.1:8722/mcp. If another process already holds that port the server will not start; quit that process and toggle the server off and on again.",
        },
      ]}
    >
      <p>
        Screenshot Bro ships an <strong>MCP server</strong> inside the Mac app.
        Turn it on and an AI assistant — Claude Code, Claude Desktop, Cursor, or
        anything else that speaks the Model Context Protocol — can drive the
        editor directly: create the project, size the rows, place the headlines,
        pull in your screenshots, translate them, look at what it made, and push
        the finished set to App Store Connect. You watch it happen on the canvas,
        and every change it makes is undoable with <strong>⌘Z</strong>.
      </p>
      <p>
        This guide covers the whole thing: what the server is, how to turn it on,
        how to connect each client, what all 26 tools do, the prompts that get
        good results, the sandbox rule that trips up screenshot imports, and what
        the server deliberately cannot do. Everything below was checked against
        Screenshot Bro 4.2 in August 2026.
      </p>

      <h2>What the Screenshot Bro MCP Server Actually Is</h2>
      <p>
        MCP — the <strong>Model Context Protocol</strong> — is a standard way for
        an AI client to discover and call tools that some other program provides.
        Screenshot Bro implements the server half. It is not a cloud service and
        not a separate binary you install: it is the running Mac app, listening on
        a loopback port, exposing its own editing actions as tools.
      </p>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {CONNECTION_FACTS.map((fact) => (
            <tr key={fact.property}>
              <td>{fact.property}</td>
              <td>{fact.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Two consequences of that design are worth internalising before you start.
        First, <strong>the app has to be open</strong> — the agent is not talking
        to a headless service, it is remote-controlling a window on your screen.
        Second, <strong>agent edits are ordinary edits</strong>: they go through
        the same undo transactions and the same autosave as your own clicks, so a
        bad instruction is one ⌘Z away from being reversed, not a corrupted file.
      </p>

      <h2>What You Need Before You Start</h2>
      <ul>
        <li>
          <strong>Screenshot Bro 3.6 or later</strong> on macOS 15 or later. The
          server shipped in 3.6, the App Store description tools in 3.7, and the
          screenshot-sync tools in 3.9.
        </li>
        <li>
          <strong>An MCP client</strong> that supports streamable HTTP servers
          with custom headers — Claude Code, Claude Desktop and Cursor all do.
        </li>
        <li>
          <strong>Raw screenshots</strong> if you want the agent to work with real
          content rather than a template mockup. PNG or JPEG, at the pixel size of
          the device you are targeting.
        </li>
        <li>
          <strong>Optional: an App Store Connect API key</strong> configured in
          Settings ▸ App Store Connect. Without it the four App Store tools return
          an error; everything else works fine.
        </li>
      </ul>

      <h2>Step 1: Turn the Server On</h2>
      <p>
        Open <strong>Settings ▸ Automation</strong> and switch on{" "}
        <strong>Enable MCP server</strong>. It is off by default and nothing
        listens until you flip it. Once enabled it stays enabled and starts
        automatically the next time you launch the app.
      </p>
      <p>
        The <strong>Status</strong> row underneath tells you where you stand:{" "}
        <em>Not running</em>, <em>Starting…</em>, or running on a port. When it
        reports a port, a <strong>Connection</strong> section appears with the
        Server URL, a masked Access Token, and three buttons —{" "}
        <strong>Copy Agent Prompt</strong>,{" "}
        <strong>Copy Configuration (JSON)</strong>, and{" "}
        <strong>Regenerate Access Token</strong>.
      </p>

      <h2>Step 2: Connect Your AI Client</h2>

      <h3>The one-minute way: Copy Agent Prompt</h3>
      <p>
        Click <strong>Copy Agent Prompt</strong> and paste it into your assistant.
        It is a plain-English instruction that already contains your URL and
        token, and it tells the agent to register the server itself and then
        reconnect. Most clients can do that without you editing a file:
      </p>
      <CodeBlock html={code.agentPrompt} />
      <p>
        The token in the real prompt is filled in for you. Treat that pasted text
        as a secret — it is a working key to your app.
      </p>

      <h3>Claude Code</h3>
      <p>
        If you would rather run the command yourself, Claude Code registers HTTP
        servers from the CLI:
      </p>
      <CodeBlock html={code.claudeCode} />
      <p>
        Add <code>-s user</code> if you want the server available in every project
        rather than just the current folder.
      </p>

      <h3>Claude Desktop, Cursor, and other MCP clients</h3>
      <p>
        Click <strong>Copy Configuration (JSON)</strong> and paste the entry into
        your client's MCP configuration file. It is a standard{" "}
        <code>mcpServers</code> block, so it works anywhere the format is
        supported:
      </p>
      <CodeBlock html={code.config} />
      <p>
        Restart the client afterwards. Clients read MCP configuration at launch,
        so an edit made while the app is open usually does nothing until it
        reconnects.
      </p>

      <h3>Check that it worked</h3>
      <p>
        Ask the assistant to <em>list your screenshot-bro tools</em>. You should
        get 26 of them, starting with <code>list_templates</code> and{" "}
        <code>list_projects</code>. If the list is empty, the client connected to
        nothing — see the troubleshooting table at the end.
      </p>

      <h2>The 26 Tools, Grouped</h2>
      <p>
        You never call these by hand; the agent picks them. But knowing what
        exists is what lets you write a prompt that maps cleanly onto them
        instead of asking for something that has no tool behind it.
      </p>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Tools</th>
            <th>What they do</th>
          </tr>
        </thead>
        <tbody>
          {TOOL_GROUPS.map((group) => (
            <tr key={group.area}>
              <td>{group.area}</td>
              <td>
                <code>{group.tools}</code>
              </td>
              <td>{group.what}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Two conventions run through all of them. Every object has a{" "}
        <strong>UUID</strong> — projects, rows, template columns, shapes — and{" "}
        <code>get_project</code> is how the agent learns them, so a well-behaved
        agent calls it early and again after structural changes. And every
        coordinate is in <strong>model space</strong>: pixels of the target
        screenshot, not points on your screen. On a 1290×2796 row,{" "}
        <code>y: 180</code> means 180 px from the top of the exported image.
      </p>

      <h2>Step 3: Build Your First Set From a Prompt</h2>
      <p>
        Open Screenshot Bro so you can watch, then give the assistant something
        concrete. Vague prompts produce vague layouts; the tools are precise, so
        the prompt may as well be:
      </p>
      <CodeBlock html={code.firstPrompt} />
      <p>A competent agent will run roughly this sequence:</p>
      <CodeBlock html={code.toolTrace} />
      <p>
        The last line is the one that changes everything.{" "}
        <code>render_preview</code> returns an actual downscaled PNG of the row —
        up to 1200 px on the long side, 700 by default — as an image the model can
        look at. That closes the loop: the agent can see that a headline is
        colliding with the device frame, and fix it, instead of writing
        coordinates blind. If your prompt does not ask for a preview, ask for one
        anyway before you accept the result.
      </p>
      <p>
        <strong>Prompting tip:</strong> tell it to preview after each visual
        change, not once at the end. The cost is a couple of seconds and it is the
        difference between a layout that is roughly right and one that is
        actually right.
      </p>

      <h2>Importing Your Real Screenshots (and the Sandbox Rule)</h2>
      <p>
        <code>import_screenshots</code> takes a row id and a list of absolute file
        paths, and fills that row's device-holding columns in order, creating
        extra columns if you pass more images than there are slots. It replaces
        whatever was there — you cannot target a single column, so re-import the
        whole row's images in the order you want.
      </p>
      <p>
        The catch: <strong>Screenshot Bro is sandboxed.</strong> It can read its
        own container and folders you have granted it through a file dialog, but
        it cannot read arbitrary paths — including <code>/tmp</code> and the
        scratch directories coding agents like to use. A path that is perfectly
        readable for your agent may be invisible to the app. When that happens the
        tool returns an error naming the folder it <em>can</em> read; stage the
        files there and retry:
      </p>
      <CodeBlock html={code.staging} />
      <p>
        The same rule applies in reverse to exports, which is why{" "}
        <code>export_project</code> defaults to a folder it knows it can write.
      </p>

      <h2>Localizing Screenshots With an Agent</h2>
      <p>
        This is where an agent earns its keep, because translation is exactly the
        kind of tedium worth handing over. Two tools do the work:{" "}
        <code>add_locale</code> registers a language on the project (any code —{" "}
        <code>de-DE</code>, <code>fr-FR</code>, <code>ja</code>, <code>pt-BR</code>),
        and <code>set_translation</code> writes one text shape's copy for one
        locale.
      </p>
      <CodeBlock html={code.localizePrompt} />
      <p>Three rules to know before you point a model at your copy:</p>
      <ul>
        <li>
          <strong>The model does the translating, not the tool.</strong>{" "}
          <code>set_translation</code> stores exactly the string it is handed. The
          app&apos;s own on-device auto-translate is a UI feature; over MCP, the
          quality of the German is the quality of the model.
        </li>
        <li>
          <strong>The base locale is edited differently.</strong>{" "}
          <code>set_translation</code> refuses the base locale — that text lives on
          the shape itself, so it is <code>update_shape</code>&apos;s{" "}
          <code>text</code> field. The base locale also cannot be removed.
        </li>
        <li>
          <strong>Length is the real risk.</strong> German and French run 20–35%
          longer than English and will wrap or overflow a headline box that fits
          in English. Give the agent a character budget in the prompt and make it
          render a preview of the longest language.
        </li>
      </ul>

      <h2>Exporting</h2>
      <p>
        <code>export_project</code> writes the active project&apos;s screenshots as
        PNG or JPEG and returns the exact file paths it wrote. Pass{" "}
        <code>locale</code> to export a single language, or leave it off for all of
        them. Pass <code>folder_path</code> only if you know the app can write
        there; otherwise omit it, let the app export to its own temp folder, and
        have the agent copy the files wherever you actually want them — it is not
        sandboxed, so it can.
      </p>

      <h2>Driving App Store Connect From the Agent</h2>
      <p>
        With an App Store Connect API key configured, four more tools open up. The
        two metadata tools are straightforward:{" "}
        <code>get_app_store_metadata</code> returns every App Store version — one
        per platform — with its per-locale descriptions, which is also how the
        agent discovers the exact locale codes your listing uses. Then{" "}
        <code>update_app_store_description</code> writes new descriptions back.
        That tool applies what you give it and does not translate anything itself,
        so the agent must supply one already-written description per locale;
        locales that do not exist on a version are reported as skipped rather than
        created.
      </p>
      <p>
        Screenshots are deliberately harder, because they overwrite a live
        listing. The flow is two-step and cannot be short-circuited:
      </p>
      <CodeBlock html={code.syncTrace} />
      <p>
        The preview renders your project, compares checksums and ordering against
        what is already on App Store Connect, and reports what would change —
        including a contact sheet image so the agent can look at the screenshots it
        is about to upload. Rows or locales it cannot match confidently are
        reported and skipped rather than guessed at. Apply then re-validates
        everything, preserves assets that already match, and verifies the final
        order. Plans expire after 15 minutes; if you deliberate longer than that,
        preview again.
      </p>
      <p>
        Worth saying plainly: this step publishes to a real listing. Read the
        preview before you approve it, the same way you would read a diff.
      </p>

      <h2>Prompt Patterns That Work</h2>
      <ul>
        <li>
          <strong>Give it the snapshot first.</strong> &quot;Call get_project and
          tell me what rows and locales exist before changing anything.&quot; It
          stops the agent inventing ids.
        </li>
        <li>
          <strong>Anchor to pixels.</strong> &quot;Headline at y=160, 96 pt, 88%
          white, centred&quot; beats &quot;put a nice title at the top&quot;.
        </li>
        <li>
          <strong>Demand previews.</strong> &quot;Render a preview after each row
          you finish.&quot;
        </li>
        <li>
          <strong>Batch the boring parts.</strong> &quot;Add these six locales and
          translate every text shape in rows 1 and 2.&quot;
        </li>
        <li>
          <strong>Ask for a plan on anything destructive.</strong> &quot;Preview
          the App Store sync and list what would change — do not apply it.&quot;
        </li>
        <li>
          <strong>Let it iterate on one thing.</strong> &quot;This headline wraps
          in German — shorten it and re-render until it fits on one line.&quot;
        </li>
      </ul>

      <h2>Security: What the Token Protects, and What It Doesn&apos;t</h2>
      <ul>
        <li>
          The listener binds to <strong>127.0.0.1</strong>. Other machines on your
          network cannot reach it, and neither can the internet.
        </li>
        <li>
          Every request must present the <strong>access token</strong>, which is
          generated on first enable and kept in your Keychain. Without it another
          local process cannot quietly drive the app.
        </li>
        <li>
          <strong>Anyone holding the token can control the app</strong> while the
          server runs. Do not paste it into a shared config file, a screenshot, or
          a repository. <strong>Regenerate Access Token</strong> issues a new one
          and restarts the server; every client using the old token must be
          updated.
        </li>
        <li>
          Turning the server off is instant and total — no listener, no tools, no
          connections.
        </li>
        <li>
          Enabling the server has an analytics footprint: the app records that MCP
          sessions happened and which tool names were called, as counts. Your
          project text and images are not part of that. The exact event list is in
          the <a href="/privacy">privacy policy</a>.
        </li>
      </ul>

      <h2>Troubleshooting</h2>
      <table>
        <thead>
          <tr>
            <th>Symptom</th>
            <th>Likely cause</th>
            <th>Fix</th>
          </tr>
        </thead>
        <tbody>
          {TROUBLESHOOTING.map((row) => (
            <tr key={row.symptom}>
              <td>{row.symptom}</td>
              <td>{row.cause}</td>
              <td>{row.fix}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>What the MCP Server Can&apos;t Do</h2>
      <p>
        Being clear about the edges saves you a wasted afternoon:
      </p>
      <ul>
        <li>
          <strong>It is not a CLI or a hosted API.</strong> There is no{" "}
          <code>screenshotbro</code> command and no endpoint on the internet — the
          server is local to a running Mac app.
        </li>
        <li>
          <strong>It does not run headless or in CI.</strong> The app must be
          open. For unattended pipelines, see{" "}
          <a href="/vs/fastlane-snapshot">how this compares with fastlane</a>.
        </li>
        <li>
          <strong>macOS only.</strong> The iPad and iPhone builds do not host a
          server.
        </li>
        <li>
          <strong>It cannot capture screenshots for you.</strong> There is no
          Simulator capture tool in the shipping app; you bring images you already
          took.
        </li>
        <li>
          <strong>It cannot target a single screenshot column on import.</strong>{" "}
          Re-import the whole row&apos;s images in order instead.
        </li>
        <li>
          <strong>Google Play uploads are not exposed over MCP.</strong> The App
          Store Connect tools have no Play equivalent yet — that upload stays in
          the UI.
        </li>
      </ul>

      <h2>Is It Worth Using?</h2>
      <p>
        For a first draft of a listing, yes — an agent that can create rows, place
        text, translate six languages and look at its own output does in a few
        minutes what is otherwise an hour of nudging boxes. For a listing you have
        already tuned by hand, it is better as an assistant for the repetitive
        parts: adding a locale, restating a headline across ten columns, checking
        which screenshots actually differ from what is live.
      </p>
      <p>
        The honest framing is that MCP does not replace judgement about what your
        screenshots should say — see{" "}
        <a href="/blog/app-store-screenshot-copywriting-examples">
          screenshot copywriting
        </a>{" "}
        for that part. It removes the mechanical distance between deciding and
        seeing.
      </p>
    </BlogArticleShell>
  );
}
