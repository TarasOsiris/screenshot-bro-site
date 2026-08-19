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
    ko: "ko-KR"
  };
  return new Date(year, month - 1, day).toLocaleDateString(localesMap[locale] || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
