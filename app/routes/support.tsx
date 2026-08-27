import type { Route } from "./+types/support";
import { ContentLayout } from "~/components/ContentLayout";
import { DiscordGlyph, RedditGlyph, ThreadsGlyph, XGlyph } from "~/components/home/icons";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import {
  DISCORD_INVITE_URL,
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
    en: `Get help with ${SITE_NAME}. Join the Discord for the fastest answers on bugs, questions, and feature requests — or email us, or find us on Reddit, X, and Threads.`,
    es: `Obtén ayuda con ${SITE_NAME}. Únete al Discord para respuestas rápidas, o escríbenos por correo o en Reddit, X y Threads.`,
    zh: `获取 ${SITE_NAME} 的技术支持与帮助。加入 Discord 可最快获得答复，也可以发邮件或在 Reddit、X 等社区与我们互动。`,
    ja: `${SITE_NAME}のサポート情報。Discord が最速の窓口です。メールや公式コミュニティからもお気軽にどうぞ。`,
    de: `Erhalten Sie Hilfe zu ${SITE_NAME}. Am schnellsten geht es über Discord — oder per E-Mail und auf Reddit, X und Threads.`,
    fr: `Obtenez de l'aide sur ${SITE_NAME}. Le Discord est le canal le plus rapide — sinon par e-mail ou sur nos réseaux sociaux.`,
    pt: `Obtenha suporte para o ${SITE_NAME}. O Discord é o canal mais rápido — também por e-mail, Reddit e X.`,
    it: `Ricevi assistenza per ${SITE_NAME}. Discord è il canale più rapido — oppure via email o su Reddit, X e Threads.`,
    ko: `${SITE_NAME} 고객 지원. Discord가 가장 빠른 창구이며, 이메일이나 커뮤니티로도 문의할 수 있습니다.`,
    ar: `احصل على المساعدة بخصوص ${SITE_NAME}. خادم Discord هو أسرع قناة للدعم، ويمكنك أيضًا مراسلتنا عبر البريد الإلكتروني أو وسائل التواصل.`,
    hi: `${SITE_NAME} के लिए सहायता प्राप्त करें। सबसे तेज़ जवाब के लिए Discord से जुड़ें, या हमें ईमेल करें।`,
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

        <section className="relative overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.07] p-8 sm:p-10 text-center">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/20 blur-[100px]"
          />
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent-light font-mono">
              {copy.discordLabel}
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
              {copy.discordHeading}
            </h2>
            <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-md mx-auto">
              {copy.discordPitch}
            </p>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light"
            >
              <DiscordGlyph />
              {copy.discordCta}
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono">
            {copy.emailUs}
          </p>
          <a
            href={`mailto:${EARLY_ACCESS_EMAIL}?subject=${encodeURIComponent(
              `${SITE_NAME} support`
            )}`}
            className="mt-4 inline-block text-xl sm:text-2xl font-semibold text-white hover:text-accent transition-colors break-all"
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
        intro: "¿Has encontrado un error, tienes alguna pregunta o quieres compartir tu opinión? Discord es la vía más rápida para hablar con nosotros, y leemos cada mensaje.",
        discordLabel: "La forma más rápida de obtener ayuda",
        discordHeading: "Únete al Discord de Screenshot Bro",
        discordPitch: "Pregunta lo que quieras, reporta fallos, propón funciones y descubre qué está por llegar, directamente con el desarrollador.",
        discordCta: "Únete al Discord",
        emailUs: "¿Prefieres el correo?",
        emailNote: "Para cualquier asunto privado o relacionado con tu cuenta, escríbenos directamente. Para ayudarnos a resolverlo más rápido, incluye tu versión de macOS y capturas de pantalla.",
        findOnline: "O encuéntranos en internet",
        docsPrompt: "¿Buscas guías paso a paso? Consulta nuestra",
        docsLink: "Ayuda y Documentación",
      };
    case "zh":
      return {
        heading: "技术支持与帮助",
        intro: "遇到问题、有疑问或想分享建议？Discord 是联系我们最快的方式，每一条留言我们都会认真阅读。",
        discordLabel: "最快的求助方式",
        discordHeading: "加入 Screenshot Bro 的 Discord",
        discordPitch: "提问、反馈 Bug、提出新功能建议，并第一时间了解后续更新——直接与开发者交流。",
        discordCta: "加入 Discord",
        emailUs: "更习惯用邮件？",
        emailNote: "涉及隐私或账号的问题，请直接发邮件给我们。反馈 Bug 时，建议附上你的 macOS 版本及复现截图，以便我们快速排查。",
        findOnline: "或在社交平台找到我们",
        docsPrompt: "需要操作指南？请查看我们的",
        docsLink: "帮助中心与开发文档",
      };
    case "ja":
      return {
        heading: "サポート",
        intro: "不具合の報告、ご質問、ご意見など、Discord が最も早くご連絡いただける窓口です。すべてのメッセージに目を通しています。",
        discordLabel: "いちばん早い問い合わせ先",
        discordHeading: "Screenshot Bro の Discord に参加",
        discordPitch: "質問、不具合の報告、機能のご要望、そして次に来る機能の情報まで、開発者と直接やり取りできます。",
        discordCta: "Discord に参加",
        emailUs: "メールがよろしいですか？",
        emailNote: "プライバシーやアカウントに関わる内容は、メールで直接お送りください。不具合の場合はmacOSのバージョンやスクリーンショットを添付いただくとスムーズに対応できます。",
        findOnline: "公式ソーシャルメディア",
        docsPrompt: "使い方ガイドをお探しですか？",
        docsLink: "ヘルプ＆ドキュメント",
      };
    case "de":
      return {
        heading: "Support",
        intro: "Haben Sie einen Fehler gefunden, eine Frage oder Feedback? Über Discord erreichen Sie uns am schnellsten – und wir lesen jede Nachricht.",
        discordLabel: "Der schnellste Weg zur Hilfe",
        discordHeading: "Treten Sie dem Screenshot-Bro-Discord bei",
        discordPitch: "Fragen stellen, Fehler melden, Funktionen vorschlagen und sehen, was als Nächstes kommt – direkt vom Entwickler.",
        discordCta: "Discord beitreten",
        emailUs: "Lieber per E-Mail?",
        emailNote: "Für Privates oder Kontofragen schreiben Sie uns direkt. Bei Fehlern hilft uns die Angabe Ihrer macOS-Version sowie ein Screenshot.",
        findOnline: "Oder online finden",
        docsPrompt: "Suchen Sie Anleitungen? Besuchen Sie unsere",
        docsLink: "Hilfe & Dokumentation",
      };
    case "fr":
      return {
        heading: "Support & Contact",
        intro: "Une question, un problème ou un retour ? Discord est le moyen le plus rapide de nous joindre, et nous lisons chaque message.",
        discordLabel: "Le moyen le plus rapide d'obtenir de l'aide",
        discordHeading: "Rejoignez le Discord de Screenshot Bro",
        discordPitch: "Posez vos questions, signalez un bug, proposez des fonctionnalités et découvrez ce qui arrive ensuite — directement avec le développeur.",
        discordCta: "Rejoindre le Discord",
        emailUs: "Vous préférez l'e-mail ?",
        emailNote: "Pour tout sujet privé ou lié à votre compte, écrivez-nous directement. Pour un bug, précisez votre version de macOS et joignez une capture d'écran.",
        findOnline: "Retrouvez-nous en ligne",
        docsPrompt: "Vous cherchez un tutoriel ? Consultez notre",
        docsLink: "Aide & Documentation",
      };
    case "pt":
      return {
        heading: "Suporte",
        intro: "Encontrou um bug, tem dúvidas ou sugestões? O Discord é o jeito mais rápido de falar conosco — e lemos cada mensagem.",
        discordLabel: "O jeito mais rápido de conseguir ajuda",
        discordHeading: "Entre no Discord do Screenshot Bro",
        discordPitch: "Tire dúvidas, relate bugs, sugira recursos e veja o que vem por aí — direto com quem faz o app.",
        discordCta: "Entrar no Discord",
        emailUs: "Prefere e-mail?",
        emailNote: "Para assuntos privados ou de conta, fale diretamente conosco. Ao relatar problemas, inclua sua versão do macOS e capturas de tela para agilizar.",
        findOnline: "Ou encontre-nos online",
        docsPrompt: "Procurando tutoriais? Acesse nossa",
        docsLink: "Ajuda & Documentação",
      };
    case "it":
      return {
        heading: "Supporto",
        intro: "Hai riscontrato un problema, hai una domanda o vuoi darci un feedback? Discord è il modo più rapido per raggiungerci, e leggiamo ogni messaggio.",
        discordLabel: "Il modo più rapido per ricevere aiuto",
        discordHeading: "Unisciti al Discord di Screenshot Bro",
        discordPitch: "Fai domande, segnala bug, proponi funzionalità e scopri cosa sta per arrivare — direttamente con lo sviluppatore.",
        discordCta: "Unisciti al Discord",
        emailUs: "Preferisci l'email?",
        emailNote: "Per questioni private o legate all'account, scrivici direttamente. Se segnali un bug, specifica la tua versione di macOS.",
        findOnline: "Oppure seguici online",
        docsPrompt: "Cerchi guide pratiche? Consulta la",
        docsLink: "Guida & Documentazione",
      };
    case "ko":
      return {
        heading: "고객 지원",
        intro: "버그 제보, 질문 또는 피드백이 있으신가요? Discord가 가장 빠르게 연락할 수 있는 창구이며, 모든 메시지를 읽고 있습니다.",
        discordLabel: "가장 빠른 문의 방법",
        discordHeading: "Screenshot Bro Discord에 참여하세요",
        discordPitch: "질문하고, 버그를 제보하고, 기능을 제안하고, 다음에 무엇이 나올지 개발자에게 직접 확인해 보세요.",
        discordCta: "Discord 참여하기",
        emailUs: "이메일이 편하신가요?",
        emailNote: "개인적이거나 계정 관련 문의는 직접 이메일로 보내주세요. 버그 보고 시 macOS 버전과 스크린샷을 첨부해 주시면 더 빠르게 해결할 수 있습니다.",
        findOnline: "소셜 미디어",
        docsPrompt: "사용법 가이드가 필요하신가요?",
        docsLink: "도움말 및 문서",
      };
    case "ar":
      return {
        heading: "الدعم الفني",
        intro: "هل واجهت مشكلة، لديك سؤال، أو ترغب في مشاركة رأيك؟ Discord هو أسرع وسيلة للوصول إلينا، ونقرأ كل رسالة بعناية.",
        discordLabel: "أسرع طريقة للحصول على المساعدة",
        discordHeading: "انضم إلى خادم Discord الخاص بـ Screenshot Bro",
        discordPitch: "اطرح أسئلتك، وأبلغ عن الأخطاء، واقترح ميزات جديدة، واطّلع على ما هو قادم — بتواصل مباشر مع المطوّر.",
        discordCta: "انضم إلى Discord",
        emailUs: "تفضّل البريد الإلكتروني؟",
        emailNote: "لأي أمر خاص أو متعلق بحسابك، راسلنا مباشرة. لمساعدتنا في الحل السريع، اذكر إصدار macOS وصورة للمشكلة.",
        findOnline: "أو تواصل معنا عبر الإنترنت",
        docsPrompt: "هل تبحث عن أدلة الاستخدام؟ تفضل بزيارة",
        docsLink: "المساعدة والتوثيق",
      };
    case "hi":
      return {
        heading: "सहायता",
        intro: "क्या आपको कोई बग मिला, कोई प्रश्न है या सुझाव साझा करना चाहते हैं? Discord हम तक पहुँचने का सबसे तेज़ रास्ता है, और हम हर संदेश पढ़ते हैं।",
        discordLabel: "मदद पाने का सबसे तेज़ तरीका",
        discordHeading: "Screenshot Bro के Discord से जुड़ें",
        discordPitch: "सवाल पूछें, बग रिपोर्ट करें, नए फ़ीचर सुझाएँ और जानें कि आगे क्या आ रहा है — सीधे डेवलपर से।",
        discordCta: "Discord से जुड़ें",
        emailUs: "ईमेल पसंद है?",
        emailNote: "निजी या खाते से जुड़ी किसी भी बात के लिए सीधे ईमेल करें। बग रिपोर्ट करते समय अपने macOS वर्ज़न का उल्लेख करें।",
        findOnline: "या हमसे ऑनलाइन जुड़ें",
        docsPrompt: "क्या आप उपयोग मार्गदर्शिकाएँ खोज रहे हैं?",
        docsLink: "सहायता और दस्तावेज़ीकरण",
      };
    default:
      return {
        heading: "Support",
        intro: "Hit a bug, have a question, or want to share feedback? Discord is the quickest way to reach us — and we read every message.",
        discordLabel: "Fastest way to get help",
        discordHeading: "Join the Screenshot Bro Discord",
        discordPitch: "Ask questions, report bugs, request features, and see what is shipping next — straight from the maker.",
        discordCta: "Join the Discord",
        emailUs: "Prefer email?",
        emailNote: "For anything private or account-specific, email us directly. To help us resolve things faster, include your macOS version and a screenshot or steps to reproduce when reporting a bug.",
        findOnline: "Or find us online",
        docsPrompt: "Looking for how-to guides? Check the",
        docsLink: "Help & Documentation",
      };
  }
}
