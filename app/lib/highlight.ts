import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import plaintext from "highlight.js/lib/languages/plaintext";
import ruby from "highlight.js/lib/languages/ruby";
import swift from "highlight.js/lib/languages/swift";
import yaml from "highlight.js/lib/languages/yaml";

const LANGUAGES = { bash, json, plaintext, ruby, swift, yaml } as const;
for (const [name, lang] of Object.entries(LANGUAGES)) {
  hljs.registerLanguage(name, lang);
}

export type CodeLanguage = keyof typeof LANGUAGES;

export function highlight(language: CodeLanguage, code: string): string {
  return hljs.highlight(code.replace(/\n+$/, ""), {
    language,
    ignoreIllegals: true,
  }).value;
}
