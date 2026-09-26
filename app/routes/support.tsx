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
import { localeHref } from "~/config/localized-routes";
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
    uk: `Підтримка — ${SITE_NAME}`,
    pl: `Wsparcie — ${SITE_NAME}`,
    tr: `Destek — ${SITE_NAME}`,
    nl: `Ondersteuning — ${SITE_NAME}`,
    id: `Dukungan — ${SITE_NAME}`,
    vi: `Hỗ trợ — ${SITE_NAME}`,
    th: `ฝ่ายสนับสนุน — ${SITE_NAME}`,
    sv: `Support — ${SITE_NAME}`,
    da: `Support — ${SITE_NAME}`,
    fi: `Tuki — ${SITE_NAME}`,
    no: `Support — ${SITE_NAME}`,
    cs: `Podpora — ${SITE_NAME}`,
    ro: `Suport — ${SITE_NAME}`,
    ms: `Sokongan — ${SITE_NAME}`,
  };

  const descriptions: Record<LocaleCode, string> = {
    en: `Get help with ${SITE_NAME}. Join the Discord for the fastest answers on bugs and feature requests — or email us, or find us on Reddit, X, and Threads.`,
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
    uk: `Отримайте допомогу зі ${SITE_NAME}. Приєднуйтесь до Discord, щоб найшвидше отримати відповіді про помилки, запитання та побажання — або напишіть нам на пошту чи знайдіть нас у Reddit, X і Threads.`,
    pl: `Uzyskaj pomoc dotyczącą ${SITE_NAME}. Dołącz do Discorda, aby najszybciej uzyskać odpowiedzi na pytania o błędy i propozycje funkcji — lub napisz do nas e-mail.`,
    tr: `${SITE_NAME} ile ilgili yardım alın. Hatalar, sorular ve özellik istekleri hakkında en hızlı yanıtlar için Discord'a katılın veya bize e-posta gönderin.`,
    nl: `Krijg hulp bij ${SITE_NAME}. Word lid van Discord voor de snelste antwoorden op vragen, bugs en functieverzoeken — of stuur ons een e-mail.`,
    id: `Dapatkan bantuan dengan ${SITE_NAME}. Bergabunglah dengan Discord untuk jawaban tercepat seputar bug, pertanyaan, dan saran fitur — atau kirim email kepada kami.`,
    vi: `Nhận trợ giúp về ${SITE_NAME}. Tham gia Discord để nhận câu trả lời nhanh nhất về lỗi, câu hỏi và yêu cầu tính năng — hoặc gửi email cho chúng tôi.`,
    th: `รับความช่วยเหลือเกี่ยวกับ ${SITE_NAME} เข้าร่วม Discord เพื่อรับคำตอบที่เร็วที่สุดเกี่ยวกับข้อผิดพลาด คำถาม และคำขอคุณสมบัติ หรือส่งอีเมลถึงเรา`,
    sv: `Få hjälp med ${SITE_NAME}. Gå med i Discord för de snabbaste svaren på buggar, frågor och funktionsförfrågningar — eller mejla oss.`,
    da: `Få hjælp til ${SITE_NAME}. Deltag i Discord for hurtigst svar på spørgsmål og fejl — eller send os en e-mail.`,
    fi: `Hanki apua ${SITE_NAME}n käyttöön. Liity Discordiin saadaksesi nopeimmat vastaukset virheisiin ja kysymyksiin — tai lähetä sähköpostia.`,
    no: `Få hjelp med ${SITE_NAME}. Bli med i Discord for raskeste svar på feil og spørsmål — eller send oss en e-post.`,
    cs: `Získejte pomoc s ${SITE_NAME}. Připojte se k Discordu pro nejrychlejší odpovědi na chyby a dotazy — nebo nám napište e-mail.`,
    ro: `Primește ajutor pentru ${SITE_NAME}. Alătură-te pe Discord pentru cele mai rapide răspunsuri la erori și întrebări — sau trimite-ne un e-mail.`,
    ms: `Dapatkan bantuan untuk ${SITE_NAME}. Sertai Discord untuk respons terpantas mengenai pepijat dan pertanyaan — atau emel kepada kami.`,
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
  const copy = getSupportCopy(locale);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: copy.heading, path: localizedPath(locale, "/support") },
  ]);

  return (
    <ContentLayout locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
            {copy.heading}
          </h1>
          <p className="mt-4 text-lg text-ink/60 leading-relaxed">
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
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-ink">
              {copy.discordHeading}
            </h2>
            <p className="mt-3 text-sm text-ink/60 leading-relaxed max-w-md mx-auto">
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

        <section className="mt-6 rounded-2xl border border-ink/10 bg-ink/[0.04] p-8 sm:p-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-ink/55 font-mono">
            {copy.emailUs}
          </p>
          <a
            href={`mailto:${EARLY_ACCESS_EMAIL}?subject=${encodeURIComponent(
              `${SITE_NAME} support`
            )}`}
            className="mt-4 inline-block text-xl sm:text-2xl font-semibold text-ink hover:text-accent transition-colors break-all"
          >
            {EARLY_ACCESS_EMAIL}
          </a>
          <p className="mt-4 text-sm text-ink/55 leading-relaxed max-w-md mx-auto">
            {copy.emailNote}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm uppercase tracking-[0.25em] text-ink/55 font-mono text-center">
            {copy.findOnline}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-ink/[0.04] px-4 py-6 text-center hover:border-ink/20 hover:bg-ink/[0.07] transition-all"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl border border-ink/10 bg-ink/[0.06] text-ink/75">
                  {social.icon}
                </span>
                <span className="text-sm font-medium text-ink/85">
                  {social.label}
                </span>
                <span className="text-xs text-ink/60">{social.handle}</span>
              </a>
            ))}
          </div>
        </section>

        <p className="mt-12 text-center text-sm text-ink/58">
          {copy.docsPrompt}{" "}
          <a
            href={localeHref(locale, "/docs/help")}
            className="text-ink/70 hover:text-ink/95 transition-colors underline underline-offset-4"
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
    case "uk":
      return {
        heading: "Підтримка",
        intro: "Знайшли помилку, маєте запитання або хочете поділитися відгуком? Discord — найшвидший спосіб зв'язатися з нами, і ми читаємо кожне повідомлення.",
        discordLabel: "Найшвидший спосіб отримати допомогу",
        discordHeading: "Приєднуйтесь до Discord Screenshot Bro",
        discordPitch: "Задавайте питання, повідомляйте про помилки, пропонуйте функції та дізнавайтеся про новинки — напряму від розробника.",
        discordCta: "Приєднатися до Discord",
        emailUs: "Віддаєте перевагу пошті?",
        emailNote: "З будь-яких приватних питань або щодо облікового запису пишіть нам безпосередньо. Щоб допомогти швидше, вкажіть вашу версію macOS та додайте скриншот.",
        findOnline: "Або знайдіть нас в інтернеті",
        docsPrompt: "Шукаєте покрокові посібники? Перегляньте нашу",
        docsLink: "Довідку та документацію",
      };
    case "pl":
      return {
        heading: "Wsparcie",
        intro: "Znalazłeś błąd, masz pytanie lub chcesz podzielić się opinią? Discord to najszybszy sposób na kontakt z nami — czytamy każdą wiadomość.",
        discordLabel: "Najszybszy sposób na uzyskanie pomocy",
        discordHeading: "Dołącz do Discorda Screenshot Bro",
        discordPitch: "Zadawaj pytania, zgłaszaj błędy, sugeruj funkcje i sprawdzaj, co nowego się pojawi — bezpośrednio od twórcy.",
        discordCta: "Dołącz do Discorda",
        emailUs: "Wolisz e-mail?",
        emailNote: "W sprawach prywatnych lub związanych z kontem napisz do nas bezpośrednio. Aby pomóc nam szybciej rozwiązać problem, podaj wersję systemu macOS oraz zrzut ekranu.",
        findOnline: "Lub znajdź nas w sieci",
        docsPrompt: "Szukasz poradników krok po kroku? Sprawdź naszą",
        docsLink: "Pomoc i dokumentację",
      };
    case "tr":
      return {
        heading: "Destek",
        intro: "Bir hatayla mı karşılaştınız, sorunuz mu var veya geri bildirimde bulunmak mı istiyorsunuz? Discord bize ulaşmanın en hızlı yoludur ve her mesajı okuyoruz.",
        discordLabel: "Yardım almanın en hızlı yolu",
        discordHeading: "Screenshot Bro Discord Sunucusuna Katılın",
        discordPitch: "Sorular sorun, hataları bildirin, yeni özellikler önerin ve nelerin geleceğini doğrudan geliştiriciden öğrenin.",
        discordCta: "Discord'a Katıl",
        emailUs: "E-posta mı tercih edersiniz?",
        emailNote: "Özel veya hesabınızla ilgili her konuda doğrudan bize e-posta gönderin. Daha hızlı çözüm için lütfen macOS sürümünüzü ve ekran görüntüsünü ekleyin.",
        findOnline: "Veya bizi internette bulun",
        docsPrompt: "Rehberleri mi arıyorsunuz? Göz atın:",
        docsLink: "Yardım ve Belgeler",
      };
    case "nl":
      return {
        heading: "Ondersteuning",
        intro: "Een bug gevonden, een vraag of feedback? Discord is de snelste manier om ons te bereiken — en we lezen elk bericht.",
        discordLabel: "Snelste manier om hulp te krijgen",
        discordHeading: "Word lid van de Screenshot Bro Discord",
        discordPitch: "Stel vragen, meld bugs, vraag functies aan en bekijk wat er binnenkort verschijnt — rechtstreeks van de maker.",
        discordCta: "Word lid van Discord",
        emailUs: "Liever e-mail?",
        emailNote: "Voor privé- of accountzaken kunt u ons rechtstreeks e-mailen. Vermeld uw macOS-versie en een screenshot om ons sneller te helpen.",
        findOnline: "Of vind ons online",
        docsPrompt: "Op zoek naar handleidingen? Bekijk de",
        docsLink: "Hulp en documentatie",
      };
    case "id":
      return {
        heading: "Dukungan",
        intro: "Menemukan bug, punya pertanyaan, atau ingin memberi masukan? Discord adalah cara tercepat untuk menghubungi kami — dan kami membaca setiap pesan.",
        discordLabel: "Cara tercepat untuk mendapatkan bantuan",
        discordHeading: "Bergabunglah dengan Discord Screenshot Bro",
        discordPitch: "Ajukan pertanyaan, laporkan bug, minta fitur baru, dan ketahui perkembangan terbaru — langsung dari pembuatnya.",
        discordCta: "Gabung ke Discord",
        emailUs: "Lebih suka email?",
        emailNote: "Untuk hal yang bersifat pribadi atau akun, kirim email langsung kepada kami. Untuk membantu kami menyelesaikan lebih cepat, sertakan versi macOS Anda.",
        findOnline: "Atau temukan kami di web",
        docsPrompt: "Mencari panduan lengkap? Kunjungi",
        docsLink: "Bantuan & Dokumentasi",
      };
    case "vi":
      return {
        heading: "Hỗ trợ",
        intro: "Gặp lỗi, có câu hỏi hoặc muốn đóng góp ý kiến? Discord là cách nhanh nhất để liên hệ với chúng tôi — chúng tôi đọc mọi tin nhắn.",
        discordLabel: "Cách nhanh nhất để nhận trợ giúp",
        discordHeading: "Tham gia Discord của Screenshot Bro",
        discordPitch: "Đặt câu hỏi, báo lỗi, yêu cầu tính năng và đón xem các cập nhật sắp tới — trực tiếp từ nhà phát triển.",
        discordCta: "Tham gia Discord",
        emailUs: "Thích gửi email hơn?",
        emailNote: "Đối với vấn đề riêng tư hoặc tài khoản, hãy gửi email trực tiếp cho chúng tôi. Đính kèm phiên bản macOS và ảnh chụp màn hình để được hỗ trợ nhanh hơn.",
        findOnline: "Hoặc tìm chúng tôi trên mạng",
        docsPrompt: "Bạn đang tìm hướng dẫn sử dụng? Xem",
        docsLink: "Trợ giúp & Tài liệu",
      };
    case "th":
      return {
        heading: "ฝ่ายสนับสนุน",
        intro: "พบข้อผิดพลาด มีคำถาม หรือต้องการแสดงความคิดเห็น? Discord เป็นช่องทางที่เร็วที่สุดในการติดต่อเรา — และเราอ่านทุกข้อความ",
        discordLabel: "วิธีที่เร็วที่สุดในการรับความช่วยเหลือ",
        discordHeading: "เข้าร่วม Discord ของ Screenshot Bro",
        discordPitch: "ถามคำถาม รายงานข้อผิดพลาด ขอคุณสมบัติใหม่ และดูสิ่งที่จะอัปเดตถัดไป — โดยตรงจากผู้พัฒนา",
        discordCta: "เข้าร่วม Discord",
        emailUs: "ต้องการส่งอีเมลมากกว่า?",
        emailNote: "สำหรับเรื่องส่วนตัวหรือเกี่ยวกับบัญชี โปรดส่งอีเมลหาเราโดยตรง เพื่อช่วยให้เราแก้ไขได้เร็วขึ้น โปรดระบุเวอร์ชัน macOS และภาพหน้าจอ",
        findOnline: "หรือพบกับเราทางออนไลน์",
        docsPrompt: "กำลังมองหาคู่มือการใช้งานใช่ไหม? ดูได้ที่",
        docsLink: "ความช่วยเหลือและเอกสาร",
      };
    case "sv":
      return {
        heading: "Support",
        intro: "Hittat en bugg, har en fråga eller vill dela feedback? Discord är det snabbaste sättet att nå oss — och vi läser varje meddelande.",
        discordLabel: "Snabbaste sättet att få hjälp",
        discordHeading: "Gå med i Screenshot Bro Discord",
        discordPitch: "Ställ frågor, rapportera buggar, föreslå funktioner och se vad som är på gång — direkt från utvecklaren.",
        discordCta: "Gå med i Discord",
        emailUs: "Föredrar du e-post?",
        emailNote: "För privata frågor eller kontoärenden, mejla oss direkt. Inkludera gärna din macOS-version och en skärmdump vid felrapportering.",
        findOnline: "Eller hitta oss online",
        docsPrompt: "Letar du efter guider? Kolla in",
        docsLink: "Hjälp & Dokumentation",
      };
    case "da":
      return {
        heading: "Support",
        intro: "Fundet en fejl, har et spørgsmål eller vil dele feedback? Discord er den hurtigste måde at kontakte os på — og vi læser alle beskeder.",
        discordLabel: "Hurtigste måde at få hjælp på",
        discordHeading: "Deltag i Screenshot Bro Discord",
        discordPitch: "Stil spørgsmål, rapporter fejl, anmod om funktioner og se hvad der kommer næste gang — direkte fra udvikleren.",
        discordCta: "Deltag i Discord",
        emailUs: "Foretrækker du e-mail?",
        emailNote: "For private eller kontospecifikke henvendelser, send os en e-mail direkte. Angiv gerne din macOS-version og et skærmbillede ved fejlrapportering.",
        findOnline: "Eller find os online",
        docsPrompt: "Leder du efter vejledninger? Se",
        docsLink: "Hjælp & Dokumentation",
      };
    case "fi":
      return {
        heading: "Tuki",
        intro: "Löysitkö virheen, onko kysyttävää tai haluatko antaa palautetta? Discord on nopein tapa tavoittaa meidät — ja luemme jokaisen viestin.",
        discordLabel: "Nopein tapa saada apua",
        discordHeading: "Liity Screenshot Bro Discordiin",
        discordPitch: "Kysy kysymyksiä, ilmoita virheistä, pyydä ominaisuuksia ja näe tulevat päivitykset — suoraan kehittäjältä.",
        discordCta: "Liity Discordiin",
        emailUs: "Suositko sähköpostia?",
        emailNote: "Yksityisasioissa tai tiliasioissa lähetä meille sähköpostia suoraan. Liitä mukaan macOS-versiosi ja kuvakaappaus nopeuttaaksesi selvitystä.",
        findOnline: "Tai löydä meidät verkosta",
        docsPrompt: "Etsitkö oppaita? Tutustu",
        docsLink: "Ohje & Dokumentaatio",
      };
    case "no":
      return {
        heading: "Support",
        intro: "Funnet en feil, har et spørsmål eller vil dele tilbakemelding? Discord er den raskeste måten å nå oss på — og vi leser hver melding.",
        discordLabel: "Raskeste måte å få hjelp på",
        discordHeading: "Bli med i Screenshot Bro Discord",
        discordPitch: "Still spørsmål, meld fra om feil, be om funksjoner og se hva som kommer — direkte fra utvikleren.",
        discordCta: "Bli med i Discord",
        emailUs: "Foretrekker du e-post?",
        emailNote: "For private eller kontospesifikke henvendelser, send oss en e-post direkte. Oppgi gjerne macOS-versjonen din og et skjermbilde ved feilrapportering.",
        findOnline: "Eller finn oss på nett",
        docsPrompt: "Leter du etter veiledninger? Sjekk",
        docsLink: "Hjelp & Dokumentasjon",
      };
    case "cs":
      return {
        heading: "Podpora",
        intro: "Našli jste chybu, máte dotaz nebo chcete sdílet zpětnou vazbu? Discord je nejrychlejší způsob, jak nás kontaktovat — a čteme každou zprávu.",
        discordLabel: "Nejrychlejší způsob, jak získat pomoc",
        discordHeading: "Připojte se k Discordu Screenshot Bro",
        discordPitch: "Ptejte se, hlašte chyby, žádejte funkce a sledujte, co se chystá — přímo od vývojáře.",
        discordCta: "Připojit se k Discordu",
        emailUs: "Preferujete e-mail?",
        emailNote: "Pro soukromé nebo účetní záležitosti nám napište přímo. Pro rychlejší vyřešení uveďte verzi macOS a snímek obrazovky.",
        findOnline: "Nebo nás najděte online",
        docsPrompt: "Hledáte návody? Podívejte se na",
        docsLink: "Nápověda a dokumentace",
      };
    case "ro":
      return {
        heading: "Suport",
        intro: "Ai găsit o eroare, ai o întrebare sau vrei să trimiți feedback? Discord este cel mai rapid mod de a ne contacta — și citim fiecare mesaj.",
        discordLabel: "Cea mai rapidă cale de a primi ajutor",
        discordHeading: "Alătură-te pe Discord Screenshot Bro",
        discordPitch: "Pune întrebări, raportează erori, propune funcționalități și află noutățile — direct de la creator.",
        discordCta: "Alătură-te pe Discord",
        emailUs: "Preferi e-mailul?",
        emailNote: "Pentru chestiuni private sau legate de cont, trimite-ne un e-mail direct. Pentru a ne ajuta să rezolvăm mai repede, include versiunea de macOS și o captură.",
        findOnline: "Sau găsește-ne online",
        docsPrompt: "Cauți ghiduri practice? Vezi",
        docsLink: "Ajutor și documentație",
      };
    case "ms":
      return {
        heading: "Sokongan",
        intro: "Menjumpai pepijat, ada soalan atau ingin berkongsi maklum balas? Discord ialah saluran terpantas untuk menghubungi kami — dan kami membaca setiap mesej.",
        discordLabel: "Cara terpantas untuk mendapatkan bantuan",
        discordHeading: "Sertai Discord Screenshot Bro",
        discordPitch: "Tanya soalan, lapor pepijat, cadang ciri baharu dan lihat apa yang bakal dilancarkan — terus daripada pembangun.",
        discordCta: "Sertai Discord",
        emailUs: "Lebih suka e-mel?",
        emailNote: "Untuk urusan peribadi atau akaun, emel kepada kami secara terus. Untuk membantu kami menyelesaikannya lebih cepat, sertakan versi macOS dan tangkapan skrin.",
        findOnline: "Atau cari kami dalam talian",
        docsPrompt: "Mencari panduan penggunaan? Lihat",
        docsLink: "Bantuan & Dokumentasi",
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
