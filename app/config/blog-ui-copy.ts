import type { LocaleCode } from "./localization";

// Chrome added around blog post bodies: the table of contents and the
// copy-to-clipboard buttons on pixel sizes in reference tables.
export type BlogUiCopy = {
  onThisPage: string;
  sections: (count: number) => string;
  copy: (value: string) => string;
  copied: string;
};

const RAW: Record<LocaleCode, [string, string, string, string]> = {
  // [on this page, "{n} sections", "Copy {value}", "Copied"]
  en: ["On this page", "{n} sections", "Copy {value}", "Copied"],
  es: ["En esta página", "{n} secciones", "Copiar {value}", "Copiado"],
  zh: ["本页内容", "{n} 个部分", "复制 {value}", "已复制"],
  hi: ["इस पेज पर", "{n} भाग", "{value} कॉपी करें", "कॉपी हो गया"],
  fr: ["Sur cette page", "{n} sections", "Copier {value}", "Copié"],
  ar: ["في هذه الصفحة", "{n} أقسام", "نسخ {value}", "تم النسخ"],
  de: ["Auf dieser Seite", "{n} Abschnitte", "{value} kopieren", "Kopiert"],
  ja: ["このページの内容", "{n} セクション", "{value} をコピー", "コピーしました"],
  pt: ["Nesta página", "{n} seções", "Copiar {value}", "Copiado"],
  it: ["In questa pagina", "{n} sezioni", "Copia {value}", "Copiato"],
  ko: ["이 페이지에서", "{n}개 섹션", "{value} 복사", "복사됨"],
  uk: ["На цій сторінці", "Розділів: {n}", "Копіювати {value}", "Скопійовано"],
  pl: ["Na tej stronie", "Sekcje: {n}", "Kopiuj {value}", "Skopiowano"],
  tr: ["Bu sayfada", "{n} bölüm", "{value} kopyala", "Kopyalandı"],
  nl: ["Op deze pagina", "{n} secties", "{value} kopiëren", "Gekopieerd"],
  id: ["Di halaman ini", "{n} bagian", "Salin {value}", "Tersalin"],
  vi: ["Trên trang này", "{n} phần", "Sao chép {value}", "Đã sao chép"],
  th: ["ในหน้านี้", "{n} หัวข้อ", "คัดลอก {value}", "คัดลอกแล้ว"],
  sv: ["På den här sidan", "{n} avsnitt", "Kopiera {value}", "Kopierat"],
  da: ["På denne side", "{n} afsnit", "Kopiér {value}", "Kopieret"],
  fi: ["Tällä sivulla", "{n} osiota", "Kopioi {value}", "Kopioitu"],
  no: ["På denne siden", "{n} seksjoner", "Kopier {value}", "Kopiert"],
  cs: ["Na této stránce", "Oddíly: {n}", "Kopírovat {value}", "Zkopírováno"],
  ro: ["Pe această pagină", "{n} secțiuni", "Copiază {value}", "Copiat"],
  ms: ["Dalam halaman ini", "{n} bahagian", "Salin {value}", "Disalin"],
};

export function getBlogUiCopy(locale: LocaleCode): BlogUiCopy {
  const [onThisPage, sections, copy, copied] = RAW[locale] || RAW.en;
  return {
    onThisPage,
    sections: (count) => sections.replace("{n}", String(count)),
    copy: (value) => copy.replace("{value}", value),
    copied,
  };
}
