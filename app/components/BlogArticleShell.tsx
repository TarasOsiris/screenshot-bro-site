import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildFaqJsonLd, type BlogFaqItem } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { localeHref } from "~/config/localized-routes";
import type { ReactNode } from "react";

type SeoGuideLink = {
  href: string;
  label: string;
  description: string;
};

const SHORT_ANSWER_LABELS: Record<LocaleCode, string> = {
  en: "Short answer:",
  es: "Respuesta corta:",
  zh: "简短回答：",
  hi: "संक्षिप्त उत्तर:",
  fr: "En bref :",
  ar: "إجابة سريعة:",
  de: "Kurze Antwort:",
  ja: "要約：",
  pt: "Resposta curta:",
  it: "Risposta breve:",
  ko: "요약:",
  uk: "Коротка відповідь:",
  pl: "Krótka odpowiedź:",
  tr: "Kısa cevap:",
  nl: "Kort antwoord:",
  id: "Jawaban singkat:",
  vi: "Câu trả lời ngắn:",
  th: "คำตอบสั้นๆ:",
  sv: "Kort svar:",
  da: "Kort svar:",
  fi: "Lyhyt vastaus:",
  no: "Kort svar:",
  cs: "Stručná odpověď:",
  ro: "Răspuns scurt:",
  ms: "Jawapan ringkas:",
};

const RELATED_GUIDES_LABELS: Record<LocaleCode, string> = {
  en: "Related ASO Guides",
  es: "Guías de ASO relacionadas",
  zh: "相关 ASO 指南",
  hi: "संबंधित ASO गाइड",
  fr: "Guides ASO associés",
  ar: "أدلة ASO ذات صلة",
  de: "Verwandte ASO-Leitfäden",
  ja: "関連するASOガイド",
  pt: "Guias de ASO relacionados",
  it: "Guide ASO correlate",
  ko: "관련 ASO 가이드",
  uk: "Схожі ASO посібники",
  pl: "Powiązane poradniki ASO",
  tr: "İlgili ASO Rehberleri",
  nl: "Gerelateerde ASO-gidsen",
  id: "Panduan ASO Terkait",
  vi: "Hướng dẫn ASO liên quan",
  th: "คู่มือ ASO ที่เกี่ยวข้อง",
  sv: "Relaterade ASO-guider",
  da: "Relaterede ASO-guides",
  fi: "Aiheeseen liittyvät ASO-oppaat",
  no: "Relaterte ASO-guider",
  cs: "Související ASO průvodce",
  ro: "Ghiduri ASO similare",
  ms: "Panduan ASO Berkaitan",
};

const FAQ_LABELS: Record<LocaleCode, string> = {
  en: "FAQ",
  es: "Preguntas frecuentes",
  zh: "常见问题",
  hi: "अक्सर पूछे जाने वाले प्रश्न",
  fr: "FAQ",
  ar: "الأسئلة الشائعة",
  de: "Häufig gestellte Fragen",
  ja: "よくある質問",
  pt: "Perguntas frequentes",
  it: "Domande frequenti",
  ko: "자주 묻는 질문",
  uk: "Часті запитання",
  pl: "Często zadawane pytania",
  tr: "SSS",
  nl: "Veelgestelde vragen",
  id: "FAQ",
  vi: "Câu hỏi thường gặp",
  th: "คำถามที่พบบ่อย",
  sv: "Vanliga frågor",
  da: "Ofte stillede spørgsmål",
  fi: "UKK",
  no: "Ofte stilte spørsmål",
  cs: "Často kladené otázky",
  ro: "Întrebări frecvente",
  ms: "Soalan Lazim",
};

export function BlogArticleShell({
  slug,
  locale,
  children,
  tldr,
  ctaMessage = "Design, localize, export, and update App Store screenshots faster in Screenshot Bro.",
  ctaButtonLabel,
  ctaHomeLinkLabel,
  seoLinks = [],
  faqs = [],
}: {
  slug: string;
  locale: LocaleCode;
  children: ReactNode;
  // One-sentence direct answer rendered before the body. Answer engines quote
  // the first extractable sentence, so comparison pages should always set it.
  tldr?: string;
  ctaMessage?: string;
  ctaButtonLabel?: string;
  // Anchor text for the CTA's homepage link. Topically relevant posts (tool
  // round-ups, alternative pages) set a descriptive one; the rest fall back to
  // the branded default in BlogCTA.
  ctaHomeLinkLabel?: string;
  seoLinks?: SeoGuideLink[];
  faqs?: BlogFaqItem[];
}) {
  return (
    <ContentLayout locale={locale}>
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={slug} locale={locale} />
          {tldr ? (
            <p>
              <strong>{SHORT_ANSWER_LABELS[locale] || SHORT_ANSWER_LABELS.en}</strong> {tldr}
            </p>
          ) : null}
          {children}
          {seoLinks.length > 0 ? (
            <section>
              <h2>{RELATED_GUIDES_LABELS[locale] || RELATED_GUIDES_LABELS.en}</h2>
              <ul>
                {seoLinks.map((link) => (
                  <li key={link.href}>
                    <a href={localeHref(locale, link.href)}>{link.label}</a>: {link.description}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {faqs.length > 0 ? (
            <section>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: buildFaqJsonLd(faqs) }}
              />
              <h2>{FAQ_LABELS[locale] || FAQ_LABELS.en}</h2>
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>
          ) : null}
        </article>
        <BlogCTA
          message={ctaMessage}
          buttonLabel={ctaButtonLabel}
          homeLinkLabel={ctaHomeLinkLabel}
          locale={locale}
        />
        <RelatedPosts currentSlug={slug} locale={locale} />
      </div>
    </ContentLayout>
  );
}
