import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import ruby from "highlight.js/lib/languages/ruby";
import swift from "highlight.js/lib/languages/swift";
import yaml from "highlight.js/lib/languages/yaml";
import plaintext from "highlight.js/lib/languages/plaintext";

let registered = false;
function registerLanguages() {
  if (registered) return;
  hljs.registerLanguage("bash", bash);
  hljs.registerLanguage("json", json);
  hljs.registerLanguage("ruby", ruby);
  hljs.registerLanguage("swift", swift);
  hljs.registerLanguage("yaml", yaml);
  hljs.registerLanguage("plaintext", plaintext);
  hljs.registerLanguage("text", plaintext);
  registered = true;
}

export type CodeLanguage =
  | "bash"
  | "json"
  | "ruby"
  | "swift"
  | "yaml"
  | "plaintext"
  | "text";

export function CodeBlock({
  language,
  code,
}: {
  language: CodeLanguage;
  code: string;
}) {
  registerLanguages();
  const html = hljs.highlight(code.replace(/\n$/, ""), {
    language,
    ignoreIllegals: true,
  }).value;
  return (
    <pre className={`hljs language-${language}`}>
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </pre>
  );
}
