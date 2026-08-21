import type { Route } from "./+types/blog.publish-app-on-google-play";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { isLocaleCode, localizedPath, type LocaleCode } from "~/config/localization";
import { data, useLoaderData } from "react-router";

const SLUG = "publish-app-on-google-play";

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
      return "Prepara los gráficos de Google Play a la primera — icono, gráfico de funciones y capturas — con Screenshot Bro.";
    case "zh":
      return "一次搞定 Google Play 所需的全部视觉素材——图标、置顶大图与多机型屏幕截图，尽在 Screenshot Bro。";
    case "hi":
      return "Google Play लिस्टिंग ग्राफिक्स को पहली बार में ही सही बनाएं — आइकन, फीचर ग्राफिक और स्क्रीनशॉट — Screenshot Bro में।";
    case "fr":
      return "Préparez vos visuels Google Play dès le premier essai — icône, graphique de fonctionnalité et captures — avec Screenshot Bro.";
    case "ar":
      return "جهّز رسومات متجر Google Play بدقة من المرة الأولى — الأيقونة، الرسم المميز، ولقطات الشاشة — عبر Screenshot Bro.";
    case "de":
      return "Erstellen Sie alle Google Play-Grafiken auf Anhieb richtig — Icon, Feature-Grafik und Screenshots — mit Screenshot Bro.";
    case "ja":
      return "アイコン、フィーチャーグラフィック、スクリーンショットなど、Google Playに必要な画像アセットをScreenshot Broで一括作成。";
    case "pt":
      return "Crie os recursos visuais do Google Play de primeira — ícone, gráfico de recursos e capturas de tela — no Screenshot Bro.";
    case "it":
      return "Prepara la grafica di Google Play al primo colpo — icona, elemento grafico delle funzioni e screenshot — con Screenshot Bro.";
    case "ko":
      return "아이콘, 그래픽 이미지, 기기별 스크린샷 등 Google Play 등록에 필요한 모든 비주얼을 Screenshot Bro에서 한 번에 완성하세요.";
    default:
      return "Get the Play listing graphics right the first time — icon, feature graphic, and screenshots — in Screenshot Bro.";
  }
}

function getSeoLinks(locale: LocaleCode) {
  return [
    {
      href: localizedPath(locale, "/blog/google-play-screenshot-sizes-requirements"),
      label: locale === "es" ? "Requisitos de capturas de Google Play" : locale === "zh" ? "Google Play 截图尺寸与要求" : locale === "ja" ? "Google Playスクリーンショット要件" : "Google Play screenshot requirements",
      description: locale === "es" ? "tamaños exactos para subir a la ficha de la tienda." : locale === "zh" ? "上传所需截图的精确像素规格与设备尺寸。" : "exact sizes for the screenshots you upload.",
    },
    {
      href: localizedPath(locale, "/blog/ab-test-app-store-screenshots"),
      label: locale === "es" ? "Tests A/B de capturas" : locale === "zh" ? "A/B 测试应用截图" : locale === "ja" ? "スクリーンショットのA/Bテスト" : "A/B test your screenshots",
      description: locale === "es" ? "aprende a optimizar la ficha con experimentos de Google Play." : locale === "zh" ? "利用 Google Play 商店商品详情实验提升转化。" : "learn how to test and optimize with store listing experiments.",
    },
  ];
}

function getFaqs(locale: LocaleCode) {
  switch (locale) {
    case "es":
      return [
        {
          question: "¿Cuánto cuesta publicar en Google Play?",
          answer: "Google cobra una tarifa única de registro de 25 $ por la cuenta de desarrollador, sin cuotas anuales.",
        },
        {
          question: "¿Cuánto tarda la revisión de Google Play?",
          answer: "La revisión suele tardar entre 1 y 3 días hábiles, pudiendo extenderse algo más en cuentas de desarrollador de reciente creación.",
        },
        {
          question: "¿APK o Android App Bundle (.aab)?",
          answer: "Google Play exige el formato Android App Bundle (.aab) para todas las aplicaciones nuevas.",
        },
      ];
    case "zh":
      return [
        {
          question: "在 Google Play 上发布应用需要多少费用？",
          answer: "Google Play 开发者账号仅需一次性缴纳 25 美元注册费，无需支付年费。",
        },
        {
          question: "Google Play 审核通常需要多长时间？",
          answer: "审核通常需要数天时间，全新创建的个人开发者账号审核周期可能稍长。",
        },
        {
          question: "必须使用 APK 还是 Android App Bundle (.aab)？",
          answer: "Google Play 要求所有新提交的应用必须采用 Android App Bundle (.aab) 格式，而非传统的独立 APK。",
        },
      ];
    case "ja":
      return [
        {
          question: "Google Playでアプリを公開する費用はいくらですか？",
          answer: "Google Playデベロッパーアカウントの登録時に、1回限りの25ドルの登録手数料がかかります（年会費は不要です）。",
        },
        {
          question: "Google Playの審査期間はどれくらいですか？",
          answer: "通常は数日程度で完了しますが、新規アカウントの場合は確認のため少し日数がかかることがあります。",
        },
        {
          question: "APKとAABのどちらを使用すべきですか？",
          answer: "現在Google Playでは、新規アプリの提出形式としてAndroid App Bundle（.aab）が必須となっています。",
        },
      ];
    default:
      return [
        {
          question: "How much does it cost to publish on Google Play?",
          answer:
            "Google charges a one-time $25 registration fee for a Play Developer account — unlike Apple's $99 annual fee. After that, publishing apps is free; Google takes a service fee only on paid apps and in-app purchases.",
        },
        {
          question: "How long does Google Play review take?",
          answer:
            "Review commonly takes a few days, and longer for brand-new developer accounts. Plan for several days on a first submission rather than the same-day turnaround you might expect.",
        },
        {
          question: "APK or AAB?",
          answer:
            "Google Play requires the Android App Bundle (.aab) format for new apps, not a raw APK. Play generates optimized APKs per device from your bundle.",
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
        Publishing on Google Play follows a different path from the App Store — a one-time fee instead of an annual one, an App Bundle instead of an archive, and a heavier set of policy declarations. This 2026 step-by-step walks the full path from a Play Console account to a production release.
      </p>
      <h2>The 5 Publishing Steps</h2>
      <ol>
        <li><strong>Create a Play Console account:</strong> Register with a one-time $25 fee and complete identity verification.</li>
        <li><strong>Create the app:</strong> Specify default language, app title (≤30 chars), category, and pricing.</li>
        <li><strong>Complete store listing:</strong> Provide short description (80 chars), full description (4000 chars), app icon (512×512), feature graphic (1024×500), and screenshots (2–8).</li>
        <li><strong>Fill policy declarations:</strong> Content rating, target audience, Data safety form, and ads declaration.</li>
        <li><strong>Upload build and roll out:</strong> Upload your Android App Bundle (.aab) and submit to production.</li>
      </ol>
      <h2>Key Differences from the App Store</h2>
      <p>
        Google indexes your full long description for search rankings. In addition, you can update your store listing assets (like screenshots and text) independently of submitting a new binary build.
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Publicar en Google Play tiene particularidades respecto a la App Store: una tarifa única de 25 $, el formato obligatorio Android App Bundle (.aab) y formularios de declaración de seguridad de datos.
      </p>
      <h2>Los 5 pasos para publicar en Google Play</h2>
      <ol>
        <li><strong>Crear la cuenta en Play Console:</strong> Registro con pago único de 25 $ y verificación de identidad.</li>
        <li><strong>Crear la aplicación:</strong> Configura el idioma por defecto, título (hasta 30 caracteres), tipo de app y precio.</li>
        <li><strong>Completar la ficha de la tienda:</strong> Añade descripción corta, descripción completa, icono (512×512), gráfico de funciones (1024×500) y de 2 a 8 capturas de pantalla.</li>
        <li><strong>Completar declaraciones de políticas:</strong> Cuestionario de clasificación de contenido, seguridad de datos (Data Safety) y políticas de anuncios.</li>
        <li><strong>Subir la build y lanzar:</strong> Sube el archivo .aab a producción y envía para revisión.</li>
      </ol>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        在 Google Play 上发布应用与 App Store 有所不同：只需一次性支付 25 美元注册费，必须采用 Android App Bundle (.aab) 格式，且需完成详尽的数据安全与政策声明。
      </p>
      <h2>Google Play 发布五步法</h2>
      <ol>
        <li><strong>注册 Play Console 账号：</strong> 支付一次性 25 美元注册费用并完成身份认证。</li>
        <li><strong>创建应用：</strong> 设置默认语言、应用标题（30 字符以内）、分类以及免费/付费模式。</li>
        <li><strong>完善商店商品详情：</strong> 填写简短说明（80 字符）、完整说明（4000 字符）、应用图标（512×512）、置顶大图（1024×500）以及 2 至 8 张手机屏幕截图。</li>
        <li><strong>完成政策声明：</strong> 填写内容分级问卷、目标受众、数据安全表单以及广告声明。</li>
        <li><strong>上传构建版本并发布：</strong> 上传 .aab 文件，设置分发国家/地区并正式提交至正式版发布轨道。</li>
      </ol>
    </>
  );
}

function ContentJa() {
  return (
    <>
      <p>
        Google Playでのアプリ公開手順をわかりやすく解説します。1回限りの登録手数料、Android App Bundle（.aab）の作成、データセーフティなどのポリシー宣言を順を追って進めましょう。
      </p>
      <h2>Google Play公開の5ステップ</h2>
      <ol>
        <li><strong>Play Consoleアカウントの作成：</strong> 25ドルの登録手数料を支払い、本人確認を完了します。</li>
        <li><strong>アプリの作成：</strong> デフォルト言語、アプリ名（30文字以内）、カテゴリ、価格設定を行います。</li>
        <li><strong>ストア掲載情報の入力：</strong> 簡単な説明、詳細説明、アプリアイコン（512×512）、フィーチャーグラフィック（1024×500）、スクリーンショット（2〜8枚）を登録します。</li>
        <li><strong>ポリシー設定の完了：</strong> コンテンツのレーティング、ターゲット層、データセーフティフォームを提出します。</li>
        <li><strong>ビルドのアップロードとリリース：</strong> .aabファイルをアップロードし、製品版として審査へ提出します。</li>
      </ol>
    </>
  );
}

function ContentDe() {
  return (
    <>
      <p>
        Die Veröffentlichung im Google Play Store unterscheidet sich vom App Store: Einmalige 25 $ Gebühr, Android App Bundle (.aab) und Datensicherheitserklärungen.
      </p>
      <h2>Die 5 Schritte zur Google Play Veröffentlichung</h2>
      <ol>
        <li><strong>Play Console Konto anlegen:</strong> Einmalige Registrierung (25 $) und Identitätsprüfung durchführen.</li>
        <li><strong>App erstellen:</strong> Standard-Sprache, App-Titel, Kategorie und Preismodell festlegen.</li>
        <li><strong>Store-Eintrag ausfüllen:</strong> Kurzbeschreibung, vollständige Beschreibung, 512×512 Icon, 1024×500 Feature-Grafik und Screenshots bereitstellen.</li>
        <li><strong>Richtlinien ausfüllen:</strong> Alterseinstufung, Zielgruppe und Datensicherheitsformular abschließen.</li>
        <li><strong>Release veröffentlichen:</strong> .aab Bundle hochladen und für den Produktions-Rollout einreichen.</li>
      </ol>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        Publier sur Google Play requiert un compte Play Console (frais unique de 25 $), la génération d&apos;un Android App Bundle (.aab) et la complétion des déclarations de sécurité des données.
      </p>
      <h2>Les 5 étapes de publication</h2>
      <ol>
        <li><strong>Compte Play Console :</strong> Inscription et vérification d&apos;identité.</li>
        <li><strong>Création de l&apos;application :</strong> Titre, langue par défaut et tarification.</li>
        <li><strong>Fiche du Play Store :</strong> Description courte et longue, icône 512×512, graphique 1024×500 et captures d&apos;écran.</li>
        <li><strong>Déclarations de conformité :</strong> Sécurité des données, classification et public cible.</li>
        <li><strong>Déploiement :</strong> Téléversement du bundle .aab et soumission en production.</li>
      </ol>
    </>
  );
}

function ContentPt() {
  return (
    <>
      <p>
        Publicar no Google Play exige o formato Android App Bundle (.aab), taxa única de registro de 25 $ e preenchimento dos formulários de segurança de dados.
      </p>
      <h2>5 passos para publicar no Google Play</h2>
      <ol>
        <li><strong>Conta no Play Console:</strong> Taxa única de 25 $ e verificação de identidade.</li>
        <li><strong>Criar o aplicativo:</strong> Nome do app, idioma padrão e categoria.</li>
        <li><strong>Ficha da loja:</strong> Descrições, ícone (512×512), banner gráfico (1024×500) e capturas.</li>
        <li><strong>Políticas e segurança:</strong> Formulário de segurança de dados e classificação etária.</li>
        <li><strong>Upload e lançamento:</strong> Envie o arquivo .aab e publique na faixa de produção.</li>
      </ol>
    </>
  );
}

function ContentIt() {
  return (
    <>
      <p>
        La pubblicazione su Google Play include una tariffa di registrazione una tantum di 25 $, il formato Android App Bundle (.aab) e la compilazione delle sezioni relative alla sicurezza dei dati.
      </p>
      <h2>I 5 passaggi per la pubblicazione</h2>
      <ol>
        <li><strong>Account Play Console:</strong> Registrazione e verifica dell&apos;identità.</li>
        <li><strong>Crea applicazione:</strong> Imposta titolo, lingua principale e categoria.</li>
        <li><strong>Scheda dello store:</strong> Inserisci descrizioni, icona (512×512), grafica promozionale (1024×500) e screenshot.</li>
        <li><strong>Norme e sicurezza:</strong> Modulo Sicurezza dei dati e classificazione dei contenuti.</li>
        <li><strong>Rilascio:</strong> Carica il pacchetto .aab e invia per il rilascio in produzione.</li>
      </ol>
    </>
  );
}

function ContentKo() {
  return (
    <>
      <p>
        Google Play 앱 출시는 1회성 25달러 등록비, Android App Bundle(.aab) 빌드, 그리고 데이터 보안 양식 작성을 거쳐 진행됩니다.
      </p>
      <h2>Google Play 출시 5단계</h2>
      <ol>
        <li><strong>Play Console 계정 생성:</strong> 25달러 등록비 결제 및 본인 확인을 완료합니다.</li>
        <li><strong>앱 생성:</strong> 기본 언어, 앱 이름(30자 이내), 카테고리 및 가격을 설정합니다.</li>
        <li><strong>스토어 등록정보 작성:</strong> 간단한 설명, 자세한 설명, 아이콘(512×512), 그래픽 이미지(1024×500), 스크린샷을 등록합니다.</li>
        <li><strong>정책 선언 작성:</strong> 콘텐츠 등급, 타겟층, 데이터 보안 양식을 작성합니다.</li>
        <li><strong>빌드 업로드 및 출시:</strong> .aab 번들을 업로드하고 프로덕션 트랙으로 심사를 요청합니다.</li>
      </ol>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        يتطلب نشر التطبيقات على Google Play رسوماً لمرة واحدة قدرها 25 دولاراً، واستخدام حزمة Android App Bundle (.aab)، وإكمال استبيانات أمان البيانات.
      </p>
      <h2>خطوات النشر الخمس على Google Play</h2>
      <ol>
        <li><strong>إنشاء حساب Play Console:</strong> دفع رسوم التسجيل وإثبات الهوية.</li>
        <li><strong>إنشاء التطبيق:</strong> تحديد الاسم واللغة الافتراضية والتصنيف.</li>
        <li><strong>إكمال بيانات المتجر:</strong> كتابة الوصف وإرفاق الأيقونة والبانر المميز ولقطات الشاشة.</li>
        <li><strong>سياسات الأمان والمحتوى:</strong> ملء استبيان أمان البيانات وتصنيف الفئة العمرية.</li>
        <li><strong>رفع البناء والإطلاق:</strong> رفع ملف .aab وتقديم الإصدار للإنتاج.</li>
      </ol>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        Google Play पर ऐप पब्लिश करने में $25 का एकमुश्त शुल्क, Android App Bundle (.aab) फॉर्मेट और डेटा सुरक्षा फॉर्म भरना शामिल है।
      </p>
      <h2>Google Play पब्लिशिंग के 5 चरण</h2>
      <ol>
        <li><strong>Play Console खाता बनाएं:</strong> $25 का एकमुश्त शुल्क भरें और पहचान सत्यापन पूरा करें।</li>
        <li><strong>ऐप बनाएं:</strong> शीर्षक, भाषा और श्रेणी निर्धारित करें।</li>
        <li><strong>स्टोर लिस्टिंग भरें:</strong> विवरण, 512×512 आइकन, 1024×500 फीचर ग्राफिक और स्क्रीनशॉट जोड़ें।</li>
        <li><strong>नीतियों की घोषणा:</strong> डेटा सुरक्षा और सामग्री रेटिंग फॉर्म पूरा करें।</li>
        <li><strong>बिल्ड अपलोड करें और रोलआउट करें:</strong> .aab फ़ाइल अपलोड करें और प्रोडक्शन में रिलीज़ करें।</li>
      </ol>
    </>
  );
}

