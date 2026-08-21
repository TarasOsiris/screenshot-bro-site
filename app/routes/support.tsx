import type { Route } from "./+types/support";
import { ContentLayout } from "~/components/ContentLayout";
import { RedditGlyph, ThreadsGlyph, XGlyph } from "~/components/home/icons";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import {
  EARLY_ACCESS_EMAIL,
  REDDIT_COMMUNITY_URL,
  SITE_NAME,
  SITE_URL,
  THREADS_URL,
  X_PROFILE_URL,
} from "~/config/site";
import { isLocaleCode, localizedPath, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return { locale: (locale || "en") as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches, params }) => {
  const locale = (params.locale || "en") as LocaleCode;
  const titles: Record<LocaleCode, string> = {
    en: `Support — ${SITE_NAME}`,
    es: `Soporte — ${SITE_NAME}`,
    zh: `技术支持与帮助 — ${SITE_NAME}`,
    ja: `サポート＆お問い合わせ — ${SITE_NAME}`,
    de: `Support & Hilfe — ${SITE_NAME}`,
    fr: `Support & Contact — ${SITE_NAME}`,
    pt: `Suporte & Ajuda — ${SITE_NAME}`,
    it: `Supporto e Assistenza — ${SITE_NAME}`,
    ko: `고객 지원 및 문의 — ${SITE_NAME}`,
    ar: `الدعم الفني والمساعدة — ${SITE_NAME}`,
    hi: `सहायता और संपर्क — ${SITE_NAME}`,
  };

  const descriptions: Record<LocaleCode, string> = {
    en: `Get help with ${SITE_NAME}. Contact us by email for any issues or feedback, or reach out on Reddit, X, and Threads.`,
    es: `Obtén ayuda con ${SITE_NAME}. Contáctanos por correo o en Reddit, X y Threads.`,
    zh: `获取 ${SITE_NAME} 的技术支持与帮助。通过邮件直接与开发者沟通，或在 Reddit、X 等社区与我们互动。`,
    ja: `${SITE_NAME}のサポート情報。ご質問や不具合の報告はメールまたは公式コミュニティまでお気軽にどうぞ。`,
    de: `Erhalten Sie Hilfe zu ${SITE_NAME}. Kontaktieren Sie uns per E-Mail oder auf Reddit, X und Threads.`,
    fr: `Obtenez de l'aide sur ${SITE_NAME}. Contactez-nous par e-mail ou sur nos réseaux sociaux.`,
    pt: `Obtenha suporte para o ${SITE_NAME}. Fale conosco por e-mail ou através do Reddit e X.`,
    it: `Ricevi assistenza per ${SITE_NAME}. Contattaci via email o su Reddit, X e Threads.`,
    ko: `${SITE_NAME} 고객 지원. 버그 제보, 문의 사항 또는 피드백은 이메일이나 커뮤니티로 보내주세요.`,
    ar: `احصل على المساعدة بخصوص ${SITE_NAME}. تواصل معنا عبر البريد الإلكتروني أو وسائل التواصل.`,
    hi: `${SITE_NAME} के लिए सहायता प्राप्त करें। किसी भी समस्या या प्रतिक्रिया के लिए हमें ईमेल करें।`,
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const pageUrl = `${SITE_URL}${localizedPath(locale, "/support")}`;

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

const SOCIALS = [
  {
    label: "Reddit community",
    handle: "r/ScreenshotBro",
    href: REDDIT_COMMUNITY_URL,
    icon: <RedditGlyph />,
  },
  {
    label: "X",
    handle: "@soycastic",
    href: X_PROFILE_URL,
    icon: <XGlyph />,
  },
  {
    label: "Threads",
    handle: "@soycastic",
    href: THREADS_URL,
    icon: <ThreadsGlyph />,
  },
];

export default function Support() {
  const { locale } = useLoaderData<typeof loader>();

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: locale === "es" ? "Soporte" : locale === "zh" ? "支持" : locale === "ja" ? "サポート" : "Support", path: localizedPath(locale, "/support") },
  ]);

  const copy = getSupportCopy(locale);

  return (
    <ContentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            {copy.heading}
          </h1>
          <p className="mt-4 text-lg text-white/60 leading-relaxed">
            {copy.intro}
          </p>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono">
            {copy.emailUs}
          </p>
          <a
            href={`mailto:${EARLY_ACCESS_EMAIL}?subject=${encodeURIComponent(
              `${SITE_NAME} support`
            )}`}
            className="mt-4 inline-block text-2xl sm:text-3xl font-semibold text-white hover:text-accent transition-colors break-all"
          >
            {EARLY_ACCESS_EMAIL}
          </a>
          <p className="mt-4 text-sm text-white/55 leading-relaxed max-w-md mx-auto">
            {copy.emailNote}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm uppercase tracking-[0.25em] text-white/40 font-mono text-center">
            {copy.findOnline}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6 text-center hover:border-white/20 hover:bg-white/[0.07] transition-all"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.06] text-white/75">
                  {social.icon}
                </span>
                <span className="text-sm font-medium text-white/85">
                  {social.label}
                </span>
                <span className="text-xs text-white/50">{social.handle}</span>
              </a>
            ))}
          </div>
        </section>

        <p className="mt-12 text-center text-sm text-white/45">
          {copy.docsPrompt}{" "}
          <a
            href={localizedPath(locale, "/docs/help")}
            className="text-white/70 hover:text-white/95 transition-colors underline underline-offset-4"
          >
            {copy.docsLink}
          </a>
          .
        </p>
      </div>
    </ContentLayout>
  );
}

function getSupportCopy(locale: LocaleCode) {
  switch (locale) {
    case "es":
      return {
        heading: "Soporte",
        intro: "¿Has encontrado un error, tienes alguna pregunta o quieres compartir tu opinión? Nos encantará ayudarte: leemos cada mensaje.",
        emailUs: "Escríbenos por correo",
        emailNote: "Para cualquier duda o sugerencia, envíanos un correo directo. Para ayudarnos a resolverlo más rápido, incluye tu versión de macOS y capturas de pantalla.",
        findOnline: "O encuéntranos en internet",
        docsPrompt: "¿Buscas guías paso a paso? Consulta nuestra",
        docsLink: "Ayuda y Documentación",
      };
    case "zh":
      return {
        heading: "技术支持与帮助",
        intro: "遇到问题、有疑问或想分享建议？我们非常期待倾听你的声音，并会认真阅读每一条来信。",
        emailUs: "发送电子邮件",
        emailNote: "有任何疑问或反馈请直接发邮件给我们。反馈 Bug 时，建议附上你的 macOS 版本及复现截图，以便我们快速排查。",
        findOnline: "或在社交平台找到我们",
        docsPrompt: "需要操作指南？请查看我们的",
        docsLink: "帮助中心与开发文档",
      };
    case "ja":
      return {
        heading: "サポート",
        intro: "不具合の報告、ご質問、ご意見など、いつでもお気軽にお送りください。すべてのメッセージに目を通しています。",
        emailUs: "メールでお問い合わせ",
        emailNote: "ご質問やフィードバックはメールでお送りください。不具合の場合はmacOSのバージョンやスクリーンショットを添付いただくとスムーズに対応できます。",
        findOnline: "公式ソーシャルメディア",
        docsPrompt: "使い方ガイドをお探しですか？",
        docsLink: "ヘルプ＆ドキュメント",
      };
    case "de":
      return {
        heading: "Support",
        intro: "Haben Sie einen Fehler gefunden, eine Frage oder Feedback? Wir freuen uns auf Ihre Nachricht und lesen jede E-Mail persönlich.",
        emailUs: "E-Mail senden",
        emailNote: "Schreiben Sie uns direkt. Bei Fehlern hilft uns die Angabe Ihrer macOS-Version sowie ein Screenshot.",
        findOnline: "Oder online finden",
        docsPrompt: "Suchen Sie Anleitungen? Besuchen Sie unsere",
        docsLink: "Hilfe & Dokumentation",
      };
    case "fr":
      return {
        heading: "Support & Contact",
        intro: "Une question, un problème ou un retour ? N'hésitez pas à nous écrire, nous lisons chaque message avec attention.",
        emailUs: "Nous écrire par e-mail",
        emailNote: "Pour toute demande, écrivez-nous directement. Pour un bug, précisez votre version de macOS et joignez une capture d'écran.",
        findOnline: "Retrouvez-nous en ligne",
        docsPrompt: "Vous cherchez un tutoriel ? Consultez notre",
        docsLink: "Aide & Documentation",
      };
    case "pt":
      return {
        heading: "Suporte",
        intro: "Encontrou um bug, tem dúvidas ou sugestões? Adoramos ouvir sua opinião e respondemos a cada mensagem.",
        emailUs: "Envie um e-mail",
        emailNote: "Fale diretamente conosco. Ao relatar problemas, inclua sua versão do macOS e capturas de tela para agilizar.",
        findOnline: "Ou encontre-nos online",
        docsPrompt: "Procurando tutoriais? Acesse nossa",
        docsLink: "Ajuda & Documentação",
      };
    case "it":
      return {
        heading: "Supporto",
        intro: "Hai riscontrato un problema, hai una domanda o vuoi darci un feedback? Leggiamo ogni singola email.",
        emailUs: "Scrivici via email",
        emailNote: "Scrivici direttamente per qualsiasi esigenza. Se segnali un bug, specifica la tua versione di macOS.",
        findOnline: "Oppure seguici online",
        docsPrompt: "Cerchi guide pratiche? Consulta la",
        docsLink: "Guida & Documentazione",
      };
    case "ko":
      return {
        heading: "고객 지원",
        intro: "버그 제보, 질문 또는 피드백이 있으신가요? 모든 메시지를 소중히 읽고 답변해 드립니다.",
        emailUs: "이메일 문의",
        emailNote: "직접 이메일로 연락해 주세요. 버그 보고 시 macOS 버전과 스크린샷을 첨부해 주시면 더 빠르게 해결할 수 있습니다.",
        findOnline: "소셜 미디어",
        docsPrompt: "사용법 가이드가 필요하신가요?",
        docsLink: "도움말 및 문서",
      };
    case "ar":
      return {
        heading: "الدعم الفني",
        intro: "هل واجهت مشكلة، لديك سؤال، أو ترغب في مشاركة رأيك؟ يسعدنا التواصل معك ونقرأ كل رسالة بعناية.",
        emailUs: "راسلنا عبر البريد",
        emailNote: "لأية أسئلة أو ملاحظات، راسلنا مباشرة. لمساعدتنا في الحل السريع، اذكر إصدار macOS وصورة للمشكلة.",
        findOnline: "أو تواصل معنا عبر الإنترنت",
        docsPrompt: "هل تبحث عن أدلة الاستخدام؟ تفضل بزيارة",
        docsLink: "المساعدة والتوثيق",
      };
    case "hi":
      return {
        heading: "सहायता",
        intro: "क्या आपको कोई बग मिला, कोई प्रश्न है या सुझाव साझा करना चाहते हैं? हम आपकी हर प्रतिक्रिया का स्वागत करते हैं।",
        emailUs: "हमें ईमेल करें",
        emailNote: "किसी भी समस्या या प्रतिक्रिया के लिए सीधे ईमेल करें। बग रिपोर्ट करते समय अपने macOS वर्ज़न का उल्लेख करें।",
        findOnline: "या हमसे ऑनलाइन जुड़ें",
        docsPrompt: "क्या आप उपयोग मार्गदर्शिकाएँ खोज रहे हैं?",
        docsLink: "सहायता और दस्तावेज़ीकरण",
      };
    default:
      return {
        heading: "Support",
        intro: "Hit a bug, have a question, or want to share feedback? We'd love to hear from you — and we read every message.",
        emailUs: "Email us",
        emailNote: "For any issues or feedback, email us directly. To help us resolve things faster, include your macOS version and a screenshot or steps to reproduce when reporting a bug.",
        findOnline: "Or find us online",
        docsPrompt: "Looking for how-to guides? Check the",
        docsLink: "Help & Documentation",
      };
  }
}

