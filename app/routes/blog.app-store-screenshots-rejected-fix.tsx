import type { Route } from "./+types/blog.app-store-screenshots-rejected-fix";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { isLocaleCode, localizedPath, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

const SLUG = "app-store-screenshots-rejected-fix";

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
      return "Evita tareas repetitivas tras un rechazo: actualiza tamaños, textos, dispositivos y localizaciones desde un único proyecto en Screenshot Bro.";
    case "zh":
      return "遭遇审核被拒后无需繁琐重做：在 Screenshot Bro 中一站式修改尺寸、文案、机型框架与多语言本地化。";
    case "hi":
      return "रिजेक्शन के बाद के झंझट से बचें: Screenshot Bro प्रोजेक्ट से साइज़, कॉपी, डिवाइस और लोकलाइजेशन को तेज़ी से अपडेट करें।";
    case "fr":
      return "Évitez les corvées après un refus : mettez à jour tailles, textes, appareils et traductions depuis un projet Screenshot Bro unique.";
    case "ar":
      return "تجنب التعقيدات بعد رفض التطبيق: عدّل المقاسات والنصوص وإطارات الأجهزة والتوطين من مشروع واحد في Screenshot Bro.";
    case "de":
      return "Vermeiden Sie Nacharbeit nach einer Ablehnung: Aktualisieren Sie Maße, Texte, Geräte und Übersetzungen zentral in Screenshot Bro.";
    case "ja":
      return "リジェクト時の再作業を最小限に：サイズ、文案、端末フレーム、多言語テキストを一括修正できるScreenshot Bro。";
    case "pt":
      return "Evite retrabalho após rejeições: atualize dimensões, textos, molduras e traduções em um único projeto no Screenshot Bro.";
    case "it":
      return "Evita complicazioni dopo un rifiuto: aggiorna dimensioni, testi, cornici e localizzazioni da un unico progetto su Screenshot Bro.";
    case "ko":
      return "리젝트 후 번거로운 수정 작업을 최소화하세요: Screenshot Bro에서 규격, 문구, 디바이스 프레임, 다국어 번역을 한 번에 업데이트할 수 있습니다.";
    default:
      return "Avoid screenshot busywork after rejection: update sizes, copy, devices, and localizations from one Screenshot Bro project.";
  }
}

function getSeoLinks(locale: LocaleCode) {
  return [
    {
      href: localizedPath(locale, "/blog/upload-screenshots-to-app-store-connect"),
      label: locale === "es" ? "Subir capturas a App Store Connect" : locale === "zh" ? "上传截图至 App Store Connect" : locale === "ja" ? "App Store Connectへのアップロード" : "Upload screenshots to App Store Connect",
      description: locale === "es" ? "sustituye los recursos rechazados y prepara el nuevo envío." : locale === "zh" ? "替换被拒素材并准备干净的重新提交。" : "replace rejected assets and prepare a clean resubmission.",
    },
    {
      href: localizedPath(locale, "/blog/app-store-screenshot-localization-guide"),
      label: locale === "es" ? "Guía de localización de capturas" : locale === "zh" ? "截图多语言本地化指南" : locale === "ja" ? "スクリーンショット多言語化ガイド" : "Screenshot localization guide",
      description: locale === "es" ? "asegura la coherencia de textos en todos los idiomas." : locale === "zh" ? "确保所有支持语言的文案合规且准确。" : "ensure text accuracy across every supported language.",
    },
  ];
}

function getFaqs(locale: LocaleCode) {
  switch (locale) {
    case "es":
      return [
        {
          question: "¿Pueden rechazar una app por las capturas de pantalla?",
          answer: "Sí. Las capturas son parte de los metadatos y pueden motivar un rechazo bajo la Directriz 2.3 si son engañosas, no muestran la app en uso o violan las especificaciones técnicas de Apple.",
        },
        {
          question: "¿Necesito compilar una nueva versión si solo me rechazan las capturas?",
          answer: "No siempre. Si el rechazo es exclusivamente por metadatos o capturas, Apple permite corregir las imágenes en App Store Connect y reenviar la misma compilación.",
        },
        {
          question: "¿Cuál es la forma más segura de evitar rechazos?",
          answer: "Muestra la interfaz real del producto en uso, elimina afirmaciones no verificables, usa datos ficticios y genera capturas en los tamaños exactos requeridos por Apple.",
        },
      ];
    case "zh":
      return [
        {
          question: "App Store 会因为屏幕截图原因被拒吗？",
          answer: "是的。根据 Apple 审核指南 2.3 条款，如果截图存在误导、未展示实际运行画面或尺寸不合规，均会导致元数据被拒。",
        },
        {
          question: "因截图被拒必须上传新的代码包吗？",
          answer: "不一定。如果仅属于元数据审核问题，可以在 App Store Connect 中直接替换修正后的截图并重新提交同一个构建版本。",
        },
        {
          question: "避免截图被拒的最稳妥做法是什么？",
          answer: "展示真实运行中的应用界面、确保宣传文案功能均已在包内实现、使用虚拟账户数据，并严格按 Apple 像素规格导出文件。",
        },
      ];
    case "ja":
      return [
        {
          question: "スクリーンショットが原因でリジェクトされることはありますか？",
          answer: "はい。ガイドライン2.3（メタデータの正確性）に基づき、誤解を招く表現や実際のアプリ画面と異なるデザインはリジェクト対象になります。",
        },
        {
          question: "スクリーンショット修正のために再ビルドが必要ですか？",
          answer: "メタデータの指摘のみであれば、App Store Connect上で画像を差し替えるだけで同じビルドを再提出できます。",
        },
      ];
    default:
      return [
        {
          question: "Can App Store screenshots be rejected?",
          answer:
            "Yes. Screenshot problems can trigger App Review issues when they are misleading, inaccurate, unsuitable for metadata, incorrectly sized, or fail to show the app in use.",
        },
        {
          question: "Do I need a new build for rejected screenshots?",
          answer:
            "Not always. If the rejection is only a metadata issue, Apple allows you to resolve the metadata issue and resubmit the same build.",
        },
        {
          question: "What is the safest App Store screenshot fix?",
          answer:
            "Show the current app in use, remove unsupported claims, use fictional data, disclose paid content clearly, and export files that match Apple's screenshot specifications.",
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
        App Store screenshot rejections usually fall under metadata accuracy: the screenshots do not accurately represent the app, do not show the app in use, use the wrong device experience, contain unsuitable content, or fail Apple&apos;s technical asset requirements.
      </p>

      <h2>The Core Rule: Guideline 2.3</h2>
      <p>
        Guideline 2.3 states that metadata must accurately reflect the app&apos;s core experience. Guideline 2.3.3 requires that screenshots show the app in use, rather than mere title art, marketing mockups, or splash screens.
      </p>

      <h2>Common Rejection Triggers</h2>
      <ol>
        <li><strong>Not showing the app in use:</strong> Replace pure promotional graphics with screenshots of actual app features.</li>
        <li><strong>Advertising unreleased features:</strong> Ensure all claimed functionality exists in the submitted binary.</li>
        <li><strong>Unclear paid content disclosure:</strong> Clearly indicate if featured tools require in-app purchases or subscriptions.</li>
        <li><strong>Wrong device frame or scaling:</strong> Use authentic device frames matching the screen aspect ratio.</li>
        <li><strong>Real personal data:</strong> Always use fictional placeholder names, emails, and phone numbers.</li>
        <li><strong>Competitor or alternative platform references:</strong> Remove Android or third-party store logos from screenshots.</li>
      </ol>

      <h2>How to Resolve a Rejection Fast</h2>
      <p>
        Identify the specific guideline cited by Apple in Resolution Center. Replace non-compliant screenshots in App Store Connect, ensure pixel dimensions are exact, and reply directly with a concise summary of the corrections made.
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Los rechazos de capturas de pantalla en la App Store suelen encuadrarse en la Directriz 2.3 sobre precisión de metadatos: las imágenes no reflejan fielmente la app, no la muestran en uso o no cumplen los requisitos técnicos de Apple.
      </p>

      <h2>La regla fundamental: Directriz 2.3 de Apple</h2>
      <p>
        La Directriz 2.3 exige que los metadatos representen con precisión la experiencia real. La Directriz 2.3.3 especifica que las capturas deben mostrar la aplicación en uso, y no meros carteles de marketing o pantallas de inicio.
      </p>

      <h2>Motivos frecuentes de rechazo</h2>
      <ol>
        <li><strong>No mostrar la app en uso:</strong> Sustituye gráficos publicitarios abstractos por pantallas reales de funcionamiento.</li>
        <li><strong>Prometer funciones inexistentes:</strong> Asegúrate de que cada función mencionada esté operativa en la build enviada.</li>
        <li><strong>Falta de claridad en compras dentro de la app:</strong> Si una función destacada es de pago o requiere suscripción, indícalo claramente.</li>
        <li><strong>Marcos de dispositivo incorrectos:</strong> Emplea marcos auténticos que coincidan con la resolución y formato del dispositivo.</li>
        <li><strong>Datos personales reales:</strong> Utiliza siempre nombres, correos y teléfonos ficticios.</li>
        <li><strong>Mención a plataformas de la competencia:</strong> Elimina logotipos de Android u otras tiendas de aplicaciones.</li>
      </ol>

      <h2>Cómo solucionar un rechazo rápidamente</h2>
      <p>
        Identifica la directriz citada en el Centro de Resoluciones de App Store Connect, sustituye las capturas afectadas y responde detallando brevemente los cambios realizados.
      </p>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        App Store 屏幕截图被拒通常归因于元数据准确性问题：截图未能真实反映应用、未展示实际运行界面、机型框架不合规或包含未授权的素材内容。
      </p>

      <h2>核心准则：Apple 审核指南 2.3</h2>
      <p>
        指南 2.3 条款明确规定，元数据必须准确反映应用的核心体验。指南 2.3.3 进一步要求屏幕截图必须展示“正在运行中的应用”，而非纯品牌宣传海报或仅有登录按钮的欢迎页。
      </p>

      <h2>最常见的六大被拒诱因</h2>
      <ol>
        <li><strong>未展示应用真实使用场景：</strong> 用包含核心功能界面的截图替换纯概念图或广告背景。</li>
        <li><strong>宣传未包含的功能：</strong> 确保截图中展示的所有功能在当前送审的构建版本中均可完整使用。</li>
        <li><strong>付费与订阅内容提示不明：</strong> 若展示的是高级或内购功能，需清晰说明需要额外付费。</li>
        <li><strong>设备机型框架或比例错误：</strong> 使用符合对应苹果硬件规格的机型外框与像素分辨率。</li>
        <li><strong>包含真实个人隐私数据：</strong> 必须使用虚构的姓名、邮箱、电话和头像。</li>
        <li><strong>出现竞品平台标识：</strong> 截图中严禁包含 Android 或其他第三方应用商店图标。</li>
      </ol>

      <h2>快速通过重新审核的步骤</h2>
      <p>
        仔细阅读 App Store Connect 解决中心（Resolution Center）中引用的具体条款，针对性替换不合规截图，确认像素无误后，在解决中心简明扼要地回复修改说明即可。
      </p>
    </>
  );
}

function ContentJa() {
  return (
    <>
      <p>
        App Storeでのスクリーンショットリジェクトは、多くの場合ガイドライン2.3（メタデータの正確性）に関連しています。実際のアプリ動作が伝わっていない、機能の誇大広告、デバイス規格の不一致などが主な原因です。
      </p>

      <h2>審査基準：ガイドライン2.3</h2>
      <p>
        ガイドライン2.3.3では、スクリーンショットは宣伝用グラフィックだけでなく「実際に使用中のアプリ画面」を示す必要があると明確に規定されています。
      </p>

      <h2>主なリジェクト要因と対策</h2>
      <ol>
        <li><strong>アプリの使用画面が示されていない：</strong> タイトル文字だけの画像やログイン画面のみの画像を排除し、主要機能の操作画面を掲載する。</li>
        <li><strong>未実装機能の掲載：</strong> 申請中のビルドで実際に使える機能のみを訴求する。</li>
        <li><strong>有料・課金コンテンツの明示：</strong> 課金が必要な機能にはその旨をわかりやすく記載する。</li>
        <li><strong>適切なデバイスフレームの使用：</strong> 実機と異なるアスペクト比や他社製端末風のフレームを使用しない。</li>
        <li><strong>架空データの使用：</strong> 実在の個人情報（氏名、メールアドレス、電話番号等）はすべてダミーデータに差し替える。</li>
      </ol>
    </>
  );
}

function ContentDe() {
  return (
    <>
      <p>
        Screenshot-Ablehnungen im App Store betreffen meist Richtlinie 2.3: Screenshots müssen die App in Benutzung zeigen und den tatsächlichen Funktionsumfang abbilden.
      </p>
      <h2>Wichtige Richtlinien im Überblick</h2>
      <ol>
        <li><strong>App in Benutzung zeigen:</strong> Echte Benutzeroberflächen statt reiner Marketingfolien präsentieren.</li>
        <li><strong>Keine unvollständigen Features:</strong> Nur Funktionen bewerben, die in der aktuellen Version verfügbar sind.</li>
        <li><strong>Kostenpflichtige Inhalte kennzeichnen:</strong> In-App-Käufe transparent kommunizieren.</li>
        <li><strong>Fiktive Daten verwenden:</strong> Keine echten personenbezogenen Daten in Screenshots nutzen.</li>
      </ol>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        Les refus de captures d&apos;écran sur l&apos;App Store relèvent généralement de la Directive 2.3 : les images doivent fidèlement représenter l&apos;application en cours d&apos;utilisation.
      </p>
      <h2>Points clés pour éviter le rejet</h2>
      <ol>
        <li><strong>Montrer l&apos;app en action :</strong> Privilégiez des écrans réels plutôt que de simples bannières publicitaires.</li>
        <li><strong>Fonctionnalités réelles :</strong> Ne présentez que des options présentes dans le build soumis.</li>
        <li><strong>Transparence sur les achats :</strong> Indiquez clairement les fonctionnalités soumises à abonnement.</li>
        <li><strong>Données anonymisées :</strong> Utilisez des noms et adresses fictifs dans vos démonstrations.</li>
      </ol>
    </>
  );
}

function ContentPt() {
  return (
    <>
      <p>
        Rejeições de capturas de tela na App Store geralmente ocorrem com base na Diretriz 2.3 sobre precisão de metadados.
      </p>
      <h2>Como garantir aprovação rápida</h2>
      <ol>
        <li><strong>Mostre o app em uso:</strong> Substitua artes conceituais por telas com funcionalidades reais.</li>
        <li><strong>Recursos disponíveis:</strong> Certifique-se de que cada recurso mostrado existe na versão enviada.</li>
        <li><strong>Transparência em compras:</strong> Deixe claro se o recurso exige assinatura ou compra interna.</li>
        <li><strong>Dados fictícios:</strong> Remova qualquer dado pessoal real das capturas de tela.</li>
      </ol>
    </>
  );
}

function ContentIt() {
  return (
    <>
      <p>
        I rifiuti relativi agli screenshot dell&apos;App Store riguardano quasi sempre la Linea guida 2.3: le schermate devono mostrare l&apos;applicazione reale in uso.
      </p>
      <h2>Consigli per evitare rifiuti</h2>
      <ol>
        <li><strong>Mostra l&apos;interfaccia reale:</strong> Evita grafiche puramente promozionali senza schermate dell&apos;app.</li>
        <li><strong>Funzioni coerenti:</strong> Presenta solo funzionalità incluse nella build attuale.</li>
        <li><strong>Acquisti in-app chiari:</strong> Specifica chiaramente gli elementi a pagamento o in abbonamento.</li>
        <li><strong>Dati di esempio:</strong> Usa sempre dati di contatto e account fittizi.</li>
      </ol>
    </>
  );
}

function ContentKo() {
  return (
    <>
      <p>
        App Store 스크린샷 리젝트는 대부분 가이드라인 2.3(메타데이터 정확성)과 관련이 있습니다. 실제 사용 화면이 드러나지 않거나 과장된 기능 안내가 주된 원인입니다.
      </p>
      <h2>리젝트 방지를 위한 핵심 체크포인트</h2>
      <ol>
        <li><strong>실제 사용 화면 노출:</strong> 단순 홍보 포스터 대신 앱의 실제 UI와 기능이 동작하는 화면을 포함하세요.</li>
        <li><strong>현재 빌드 기능과 일치:</strong> 제출된 빌드에서 실제로 작동하는 기능만 스크린샷에 담으세요.</li>
        <li><strong>인앱 결제 및 구독 명시:</strong> 유료 결제가 필요한 프리미엄 기능은 명확하게 안내하세요.</li>
        <li><strong>가명 데이터 사용:</strong> 실제 개인정보 대신 가상의 텍스트와 이미지를 사용하세요.</li>
      </ol>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        غالباً ما تنجم حالات رفض لقطات الشاشة في App Store عن المبدأ التوجيهي 2.3 المتعلق بدقة البيانات الوصفية وضرورة إظهار التطبيق قيد الاستخدام.
      </p>
      <h2>أهم معايير القبول السريع</h2>
      <ol>
        <li><strong>إظهار التطبيق قيد الاستخدام:</strong> استبدال الرسوم الدعائية المجردة بشاشات توضح واجهة التطبيق الحقيقية.</li>
        <li><strong>تطابق الميزات:</strong> التأكد من توفر جميع الميزات المصورة داخل البناء البرمجي المرسل.</li>
        <li><strong>توضيح الميزات المدفوعة:</strong> الإشارة بوضوح للميزات التي تتطلب اشتراكاً أو شراءً داخلياً.</li>
        <li><strong>بيانات وهمية:</strong> استخدام أسماء وبيانات افتراضية وتجنب البيانات الشخصية الحقيقية.</li>
      </ol>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        App Store स्क्रीनशॉट रिजेक्शन आमतौर पर दिशानिर्देश 2.3 (मेटाडेटा सटीकता) के तहत आते हैं: स्क्रीनशॉट में ऐप का वास्तविक उपयोग दिखना आवश्यक है।
      </p>
      <h2>रिजेक्शन से बचने के प्रमुख उपाय</h2>
      <ol>
        <li><strong>ऐप का वास्तविक उपयोग दिखाएं:</strong> केवल प्रचार पोस्टर के बजाय ऐप के कार्यशील UI स्क्रीनशॉट जोड़ें।</li>
        <li><strong>सत्यापित फीचर्स:</strong> केवल उन्हीं सुविधाओं को हाइलाइट करें जो सबमिट किए गए बिल्ड में मौजूद हैं।</li>
        <li><strong>सशुल्क सामग्री का खुलासा:</strong> यदि कोई सुविधा सशुल्क है, तो उसे स्पष्ट रूप से इंगित करें।</li>
        <li><strong>काल्पनिक डेटा का उपयोग:</strong> व्यक्तिगत डेटा के स्थान पर हमेशा काल्पनिक नामों का उपयोग करें।</li>
      </ol>
    </>
  );
}

