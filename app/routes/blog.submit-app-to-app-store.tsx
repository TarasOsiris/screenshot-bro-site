import type { Route } from "./+types/blog.submit-app-to-app-store";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { isLocaleCode, localizedPath, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

const SLUG = "submit-app-to-app-store";

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return { locale: (locale || "en") as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches, params }) =>
  buildBlogPostMeta(SLUG, matches, (params.locale || "en") as LocaleCode);

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <BlogArticleShell
      slug={SLUG}
      locale={locale}
      ctaMessage={getCTAMessage(locale)}
      seoLinks={getSeoLinks(locale)}
      faqs={getFaqs(locale)}
    >
      {renderContent(locale)}
    </BlogArticleShell>
  );
}

function getCTAMessage(locale: LocaleCode): string {
  switch (locale) {
    case "es":
      return "El paso de las capturas es donde más se retrasan los envíos. Diséñalas y súbelas para cada dispositivo con Screenshot Bro.";
    case "zh":
      return "截图准备往往是应用提交中最耗时的环节。使用 Screenshot Bro 一键设计并上传适配各机型的截图。";
    case "hi":
      return "स्क्रीनशॉट का चरण वह जगह है जहाँ अधिकांश सबमिशन रुक जाते हैं। Screenshot Bro में हर डिवाइस के लिए उन्हें डिज़ाइन और अपलोड करें।";
    case "fr":
      return "L'étape des captures d'écran retarde souvent la soumission. Concevez et uploadez vos captures pour chaque appareil avec Screenshot Bro.";
    case "ar":
      return "خطوة لقطات الشاشة هي أكثر مرحلة تؤخر تقديم التطبيق. صممها وارفعها لجميع الأجهزة بسهولة عبر Screenshot Bro.";
    case "de":
      return "Der Screenshot-Schritt verzögert oft die Einreichung. Erstellen und laden Sie Screenshots für alle Geräte mit Screenshot Bro hoch.";
    case "ja":
      return "スクリーンショットの準備は申請時につまずきやすいポイントです。Screenshot Broを使えば全デバイス用の画像を素早くデザイン・アップロードできます。";
    case "pt":
      return "A etapa de capturas de tela é onde a maioria das submissões trava. Crie e envie imagens para todos os dispositivos no Screenshot Bro.";
    case "it":
      return "La preparazione degli screenshot è la fase in cui si verificano più ritardi. Progettali e caricali per ogni dispositivo con Screenshot Bro.";
    case "ko":
      return "스크린샷 준비는 앱 출시 과정에서 가장 시간이 많이 소요되는 단계입니다. Screenshot Bro로 모든 디바이스용 스크린샷을 손쉽게 디자인하고 업로드하세요.";
    default:
      return "The screenshots step is where most submissions stall. Design and upload them for every device in Screenshot Bro.";
  }
}

function getSeoLinks(locale: LocaleCode) {
  return [
    {
      href: localizedPath(locale, "/blog/upload-screenshots-to-app-store-connect"),
      label: locale === "es" ? "Subir capturas a App Store Connect" : locale === "zh" ? "上传截图至 App Store Connect" : locale === "ja" ? "App Store Connectへのスクリーンショットアップロード" : "Upload screenshots to App Store Connect",
      description: locale === "es" ? "guía detallada para el paso de recursos visuales." : locale === "zh" ? "素材准备与上传的详细步骤指南。" : "the detailed how-to for the assets step of submission.",
    },
    {
      href: localizedPath(locale, "/blog/app-store-screenshots-rejected-fix"),
      label: locale === "es" ? "Por qué se rechazan las capturas" : locale === "zh" ? "截图被拒原因与修复" : locale === "ja" ? "スクリーンショットのリジェクト理由と修正" : "Why screenshots get rejected",
      description: locale === "es" ? "evita problemas de metadatos que retrasen la revisión." : locale === "zh" ? "避免因元数据合规问题耽误审核进度。" : "avoid the metadata problems that delay review.",
    },
    {
      href: localizedPath(locale, "/blog/app-store-optimization-aso-guide"),
      label: locale === "es" ? "Guía de ASO" : locale === "zh" ? "ASO 实战指南" : locale === "ja" ? "ASO完全ガイド" : "ASO guide",
      description: locale === "es" ? "optimiza la ficha de tu app antes de publicarla." : locale === "zh" ? "在提交前优化你的应用商店页面。" : "optimize the listing you are about to submit.",
    },
  ];
}

function getFaqs(locale: LocaleCode) {
  switch (locale) {
    case "es":
      return [
        {
          question: "¿Cuánto tarda la revisión de la App Store?",
          answer: "Apple suele revisar las aplicaciones en un plazo de 24 a 48 horas, aunque puede variar según la época y la complejidad de la app.",
        },
        {
          question: "¿Qué necesito antes de enviar una app?",
          answer: "Una cuenta activa en Apple Developer Program, la build compilada desde Xcode, metadatos completos, icono y al menos una captura de pantalla para los tamaños principales de iPhone e iPad.",
        },
        {
          question: "¿Por qué rechazan aplicaciones?",
          answer: "Las causas más comunes incluyen errores o bugs, metadatos incompletos, capturas que no reflejan la app en uso o problemas con cuentas demo e inicio de sesión.",
        },
      ];
    case "zh":
      return [
        {
          question: "App Store 审核通常需要多长时间？",
          answer: "Apple 通常会在 24 至 48 小时内完成大多数审核，特殊情况或假期可能会有所延长。",
        },
        {
          question: "提交 App Store 前需要准备什么？",
          answer: "活跃的 Apple 开发者账号、从 Xcode 打包上传的构建版本、唯一的应用名称、完整的元数据、应用图标以及适配主力 iPhone/iPad 尺寸的屏幕截图。",
        },
        {
          question: "应用被拒的常见原因有哪些？",
          answer: "常见原因包括崩溃和 Bug、元数据或截图不合规、未提供有效的测试账号、隐私政策缺失或截图未真实反映应用使用体验。",
        },
      ];
    case "ja":
      return [
        {
          question: "App Storeの審査にはどのくらい時間がかかりますか？",
          answer: "通常、申請後24〜48時間以内に審査結果が出ることが一般的です。",
        },
        {
          question: "申請前に準備しておくべきものは何ですか？",
          answer: "Apple Developer Programへの登録、Xcodeからのビルドのアップロード、アプリ名とメタデータ、アプリアイコン、サポートする最大サイズのiPhone/iPad用スクリーンショットです。",
        },
        {
          question: "アプリがリジェクトされる主な理由は？",
          answer: "クラッシュや不具合、不完全なメタデータ、テスト用ログイン情報の不備、実際のアプリ画面と異なるスクリーンショットなどが挙げられます。",
        },
      ];
    default:
      return [
        {
          question: "How long does App Store review take?",
          answer:
            "Apple reviews most submissions within about 24 to 48 hours, though it can be faster or slower depending on the app and time of year. You can request expedited review for time-critical fixes.",
        },
        {
          question: "What do I need before I can submit an app?",
          answer:
            "An Apple Developer Program membership, a finished build uploaded from Xcode, a unique app name, complete metadata, an icon, at least one screenshot for the largest iPhone and iPad you support, and your pricing and availability settings.",
        },
        {
          question: "Why do apps get rejected?",
          answer:
            "Common reasons include crashes and bugs, incomplete metadata or screenshots, broken sign-in or demo accounts, privacy or data-collection issues, and screenshots that do not match the actual app. Most are fixable on resubmission.",
        },
      ];
  }
}

function renderContent(locale: LocaleCode) {
  switch (locale) {
    case "es":
      return <ContentEs />;
    case "zh":
      return <ContentZh />;
    case "ja":
      return <ContentJa />;
    case "de":
      return <ContentDe />;
    case "fr":
      return <ContentFr />;
    case "pt":
      return <ContentPt />;
    case "it":
      return <ContentIt />;
    case "ko":
      return <ContentKo />;
    case "ar":
      return <ContentAr />;
    case "hi":
      return <ContentHi />;
    default:
      return <ContentEn />;
  }
}

function ContentEn() {
  return (
    <>
      <p>
        Submitting an app to the App Store is a checklist, not a mystery — but the first time through, it is easy to get blocked on a missing agreement, an incomplete build, or screenshots that do not meet spec. This 2026 step-by-step covers the full path from developer account to a submitted build.
      </p>
      <h2>The 5 Key Submission Steps</h2>
      <ol>
        <li><strong>Enroll and set up:</strong> Join the Apple Developer Program ($99/year), accept agreements, and configure tax and banking info in App Store Connect.</li>
        <li><strong>Create App Store Connect record:</strong> Add your app with name, primary language, bundle ID, and SKU.</li>
        <li><strong>Archive and upload build:</strong> In Xcode, increment your build number, create an archive (Product → Archive), and upload to App Store Connect.</li>
        <li><strong>Fill in metadata and assets:</strong> Add description, keywords, support URL, category, icon, and screenshots for supported device sizes.</li>
        <li><strong>Submit for review:</strong> Attach the build, configure pricing and availability, answer compliance questions, and submit.</li>
      </ol>
      <h2>Where Submissions Get Stuck</h2>
      <p>
        Two steps cause most delays: build issues (missing export compliance or version conflicts) and visual assets (missing required device screenshot sizes or alpha channel in icons). Preparing screenshot sets in advance turns hours of manual work into a seamless upload.
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Publicar una app en la App Store es un proceso metódico. Siguiendo los pasos adecuados, evitarás bloqueos por acuerdos pendientes, compilaciones incompletas o capturas de pantalla fuera de especificación.
      </p>
      <h2>Los 5 pasos principales de publicación</h2>
      <ol>
        <li><strong>Inscripción y configuración:</strong> Únete al Apple Developer Program (99 $/año), acepta los acuerdos y configura los datos bancarios y fiscales en App Store Connect.</li>
        <li><strong>Crear la ficha en App Store Connect:</strong> Registra la nueva app con su nombre, idioma principal, Bundle ID y SKU.</li>
        <li><strong>Compilar y subir la build:</strong> En Xcode, incrementa el número de build, genera el archivo (Product → Archive) y súbelo a App Store Connect.</li>
        <li><strong>Completar metadatos y capturas:</strong> Añade descripción, palabras clave, URL de soporte, categoría, icono y capturas para iPhone e iPad.</li>
        <li><strong>Enviar a revisión:</strong> Asocia la versión compilada, define precios y disponibilidad, responde a las preguntas de exportación y envía a revisión.</li>
      </ol>
      <h2>Puntos críticos donde suelen producirse retrasos</h2>
      <p>
        Los problemas más habituales radican en el cumplimiento de exportación criptográfica y en las especificaciones exactas de las capturas de pantalla para cada familia de dispositivos.
      </p>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        将应用发布到 App Store 是一项清晰的标准流程。理清关键步骤能够帮助你避开未签署开发者协议、构建版本不合规或截图尺寸错误等常见陷阱。
      </p>
      <h2>App Store 提交五步法</h2>
      <ol>
        <li><strong>注册与配置：</strong> 加入 Apple 开发者计划（99 美元/年），在 App Store Connect 中签署最新协议并配置税务和银行信息。</li>
        <li><strong>创建应用记录：</strong> 在 App Store Connect 中新建应用，设定名称、主要语言、Bundle ID 和 SKU。</li>
        <li><strong>打包并上传构建版本：</strong> 在 Xcode 中更新版本号和 Build 号，执行 Archive（Product → Archive）并上传至 App Store Connect。</li>
        <li><strong>填写元数据与视觉素材：</strong> 完善描述、关键词、技术支持网址、应用分级、图标以及适配各机型的屏幕截图。</li>
        <li><strong>提交审核：</strong> 关联上传的构建版本，配置价格与供应情况，完成出口合规问卷后正式提交审核。</li>
      </ol>
      <h2>最容易卡审与延迟的环节</h2>
      <p>
        多数提交卡点主要出现在构建版本出口合规问卷未填，或截图尺寸未严格符合 Apple 像素规格与透明通道要求。
      </p>
    </>
  );
}

function ContentJa() {
  return (
    <>
      <p>
        App Storeへのアプリ申請は、手順さえ押さえれば迷うことはありません。2026年最新の登録・申請ワークフローをわかりやすく整理しました。
      </p>
      <h2>申請までの5つのステップ</h2>
      <ol>
        <li><strong>デベロッパー登録と基本設定：</strong> Apple Developer Program（年間99ドル）に登録し、規約への同意および税務・銀行情報を設定します。</li>
        <li><strong>App Store Connectでのアプリ作成：</strong> アプリ名、プライマリ言語、Bundle ID、SKUを指定して新規レコードを作成します。</li>
        <li><strong>Xcodeからのビルド作成とアップロード：</strong> ビルド番号を更新し、Xcodeの「Product → Archive」からバイナリをアップロードします。</li>
        <li><strong>メタデータとアセットの登録：</strong> 説明文、キーワード、サポートURL、カテゴリ、アイコン、各端末サイズのスクリーンショットを配置します。</li>
        <li><strong>審査への提出：</strong> アップロードしたビルドを選択し、価格と配信地域を設定して審査へ提出します。</li>
      </ol>
    </>
  );
}

function ContentDe() {
  return (
    <>
      <p>
        Die Veröffentlichung einer App im App Store folgt einem klaren Ablauf. Mit der richtigen Vorbereitung vermeiden Sie Verzögerungen bei der Prüfung.
      </p>
      <h2>Die 5 Schritte zur Veröffentlichung</h2>
      <ol>
        <li><strong>Account einrichten:</strong> Apple Developer Program beitreten und Steuer-/Bankinformationen in App Store Connect hinterlegen.</li>
        <li><strong>App-Eintrag anlegen:</strong> Neuen App-Datensatz mit Name, Bundle-ID und primärer Sprache erstellen.</li>
        <li><strong>Build hochladen:</strong> In Xcode archivieren und den Build an App Store Connect übertragen.</li>
        <li><strong>Metadaten & Screenshots hinterlegen:</strong> Beschreibung, Keywords, Icon und passende Screenshots für iPhone und iPad hochladen.</li>
        <li><strong>Zur Prüfung einreichen:</strong> Build zuweisen, Preise festlegen und die Einreichung abschließen.</li>
      </ol>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        Publier une application sur l&apos;App Store est un processus structuré. Suivez ces étapes pour une validation rapide et sans encombre.
      </p>
      <h2>Les 5 étapes de la soumission</h2>
      <ol>
        <li><strong>Inscription :</strong> Rejoignez le programme Apple Developer et complétez les accords bancaires et fiscaux.</li>
        <li><strong>Création de la fiche :</strong> Déclarez votre application dans App Store Connect (Nom, Bundle ID, SKU).</li>
        <li><strong>Upload du build :</strong> Archivez votre projet dans Xcode et téléversez-le vers App Store Connect.</li>
        <li><strong>Métadonnées et captures :</strong> Renseignez descriptions, mots-clés, icône et captures d&apos;écran adaptées.</li>
        <li><strong>Soumission pour examen :</strong> Associez la version, fixez les prix et lancez la demande de révision.</li>
      </ol>
    </>
  );
}

function ContentPt() {
  return (
    <>
      <p>
        Publicar seu app na App Store é simples quando você segue uma lista de verificação organizada.
      </p>
      <h2>Os 5 passos para a publicação</h2>
      <ol>
        <li><strong>Inscrição no programa:</strong> Apple Developer Program e configuração bancária no App Store Connect.</li>
        <li><strong>Criar o app no portal:</strong> Defina o nome, idioma principal, Bundle ID e SKU.</li>
        <li><strong>Gerar e enviar o build:</strong> No Xcode, faça o Archive e envie o pacote para a Apple.</li>
        <li><strong>Metadados e capturas:</strong> Preencha descrições, palavras-chave, ícone e capturas de tela obrigatórias.</li>
        <li><strong>Enviar para revisão:</strong> Selecione o build, configure preços e envie para aprovação.</li>
      </ol>
    </>
  );
}

function ContentIt() {
  return (
    <>
      <p>
        La pubblicazione di un&apos;app sull&apos;App Store è un processo collaudato che richiede attenzione ai dettagli tecnici e visivi.
      </p>
      <h2>I 5 passaggi chiave</h2>
      <ol>
        <li><strong>Iscrizione:</strong> Iscriviti all&apos;Apple Developer Program e compila i moduli fiscali e bancari.</li>
        <li><strong>Creazione scheda:</strong> Inserisci nome, Bundle ID e SKU su App Store Connect.</li>
        <li><strong>Caricamento build:</strong> Crea un Archive in Xcode e caricalo sui server Apple.</li>
        <li><strong>Metadati e screenshot:</strong> Aggiungi testo, parole chiave, icona e screenshot per i dispositivi supportati.</li>
        <li><strong>Invia per la revisione:</strong> Assegna la build, imposta prezzi e disponibilità e invia per la convalida.</li>
      </ol>
    </>
  );
}

function ContentKo() {
  return (
    <>
      <p>
        App Store 앱 등록 및 심사 제출은 체계적인 체크리스트를 따라 진행하면 빠르고 확실하게 승인받을 수 있습니다.
      </p>
      <h2>App Store 출시를 위한 5단계</h2>
      <ol>
        <li><strong>개발자 계정 등록:</strong> Apple Developer Program에 가입하고 App Store Connect에서 계약 및 세금 정보를 설정합니다.</li>
        <li><strong>앱 정보 생성:</strong> App Store Connect에서 새 앱을 생성하고 이름, 번들 ID, SKU를 지정합니다.</li>
        <li><strong>빌드 아카이브 및 업로드:</strong> Xcode에서 버전 번호를 지정하고 Archive를 통해 빌드를 업로드합니다.</li>
        <li><strong>메타데이터 및 스크린샷 등록:</strong> 설명, 키워드, 카테고리, 아이콘 및 기기별 스크린샷을 등록합니다.</li>
        <li><strong>심사 제출:</strong> 업로드한 빌드를 선택하고 가격 및 출시 일정을 설정한 뒤 심사를 요청합니다.</li>
      </ol>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        يعد نشر تطبيق على App Store عملية قياسية واضحة عند اتباع الخطوات الصحيحة لتجنب أي رفض من فريق المراجعة.
      </p>
      <h2>الخطوات الخمس الأساسية للنشر</h2>
      <ol>
        <li><strong>التسجيل والإعداد:</strong> الانضمام لبرنامج Apple Developer وضبط البيانات الضريبية والبنكية.</li>
        <li><strong>إنشاء سجل التطبيق:</strong> إضافة تطبيق جديد في App Store Connect مع الاسم والمعرف.</li>
        <li><strong>رفع البناء البرمجي:</strong> إنشاء Archive في Xcode ورفعه مباشرة إلى App Store Connect.</li>
        <li><strong>ملء البيانات ولقطات الشاشة:</strong> كتابة الوصف والكلمات المفتاحية وإرفاق الأيقونة ولقطات الشاشة المطلوبة.</li>
        <li><strong>الإرسال للمراجعة:</strong> ربط البناء وتحديد الأسعار والتوزيع ثم تقديم التطبيق للمراجعة.</li>
      </ol>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        App Store पर ऐप सबमिट करना एक संरचित प्रक्रिया है। इन प्रमुख चरणों का पालन करके आप बिना किसी देरी के ऐप प्रकाशित कर सकते हैं।
      </p>
      <h2>ऐप सबमिशन के 5 मुख्य चरण</h2>
      <ol>
        <li><strong>डेवलपर खाता और सेटअप:</strong> Apple Developer Program में नामांकन करें और बैंक व कर विवरण भरें।</li>
        <li><strong>App Store Connect रिकॉर्ड बनाएं:</strong> नाम, भाषा और बंडल आईडी के साथ ऐप जोड़ें।</li>
        <li><strong>बिल्ड अपलोड करें:</strong> Xcode से ऐप का Archive बनाएं और App Store Connect पर अपलोड करें।</li>
        <li><strong>मेटाडेटा और स्क्रीनशॉट:</strong> विवरण, कीवर्ड, आइकन और आवश्यक स्क्रीनशॉट जोड़ें।</li>
        <li><strong>समीक्षा के लिए सबमिट करें:</strong> बिल्ड जोड़ें, मूल्य निर्धारित करें और रिव्यू के लिए भेजें।</li>
      </ol>
    </>
  );
}

