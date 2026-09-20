import type { LocaleCode } from "~/config/localization";

export function formatBlogDate(iso: string, locale: LocaleCode): string {
  const [year, month, day] = iso.split("-").map(Number);
  const localesMap: Record<LocaleCode, string> = {
    en: "en-US",
    es: "es-ES",
    zh: "zh-CN",
    hi: "hi-IN",
    fr: "fr-FR",
    ar: "ar-EG",
    de: "de-DE",
    ja: "ja-JP",
    pt: "pt-BR",
    it: "it-IT",
    ko: "ko-KR",
    uk: "uk-UA",
    pl: "pl-PL",
    tr: "tr-TR",
    nl: "nl-NL",
    id: "id-ID",
    vi: "vi-VN",
    th: "th-TH",
    sv: "sv-SE",
    da: "da-DK",
    fi: "fi-FI",
    no: "nb-NO",
    cs: "cs-CZ",
    ro: "ro-RO",
    ms: "ms-MY",
  };
  return new Date(year, month - 1, day).toLocaleDateString(localesMap[locale] || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
