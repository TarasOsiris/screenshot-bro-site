// A still of an agent session driving the app over MCP. The tool names are the
// server's real ones; the project and counts are illustrative. It stays dark in
// both themes, like a terminal would.
const PROMPT =
  "Make App Store screenshots for my app in English, German and Japanese, then upload them.";

const CALLS: { tool: string; args: string; result: string }[] = [
  { tool: "create_project", args: '"Habit Garden"', result: "project ready" },
  { tool: "import_screenshots", args: "12 files", result: "routed to iPhone, iPad rows" },
  { tool: "add_locale", args: "de, ja", result: "2 locales added" },
  { tool: "set_translation", args: "× 24", result: "headlines translated" },
  { tool: "render_preview", args: "row: iPhone", result: "checked the layout" },
  { tool: "apply_app_store_screenshot_sync", args: "3 locales", result: "uploaded to App Store Connect" },
];

export function McpSessionVisual({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="h-full min-h-[320px] bg-[#0b0c11] text-[#e6e7ee] font-mono text-[12.5px] sm:text-[13.5px] leading-relaxed p-6 sm:p-8 flex flex-col gap-5"
    >
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-white/40">agent · screenshot-bro MCP · 127.0.0.1</span>
      </div>

      <p className="text-white/90">
        <span className="text-[#7cb7ff]">&gt;</span> {PROMPT}
      </p>

      <ol className="flex flex-col gap-2.5">
        {CALLS.map((call) => (
          <li key={call.tool} className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-[#34d399]">●</span>
            <span className="text-[#c4b5fd]">{call.tool}</span>
            <span className="text-white/45">({call.args})</span>
            <span className="text-white/35">→</span>
            <span className="text-white/70">{call.result}</span>
          </li>
        ))}
      </ol>

      <p className="mt-auto text-white/45">
        <span className="text-[#34d399]">✓</span> Done. Every change is undoable with ⌘Z.
      </p>
    </div>
  );
}
