import type { Route } from "./+types/blog.localize-app-store-screenshots";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { data, useLoaderData } from "react-router";
import { isLocaleCode, type LocaleCode } from "~/config/localization";

const SLUG = "localize-app-store-screenshots";

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
  const loaderData = useLoaderData<typeof loader>();
  const locale = loaderData.locale;

  return (
    <ContentLayout locale={locale}>
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={SLUG} locale={locale} />
          {renderContent(locale)}
        </article>
        <BlogCTA message={getCTAMessage(locale)} />
        <RelatedPosts currentSlug={SLUG} locale={locale} />
      </div>
    </ContentLayout>
  );
}

function getCTAMessage(locale: LocaleCode): string {
  switch (locale) {
    case "es":
      return "Localiza tus capturas en minutos, no en horas.";
    case "zh":
      return "在数分钟而非数小时内完成截图本地化。";
    case "hi":
      return "अपने स्क्रीनशॉट को घंटों में नहीं, बल्कि मिनटों में स्थानीयकृत करें।";
    case "fr":
      return "Localisez vos captures d'écran en quelques minutes, pas en quelques heures.";
    case "ar":
      return "وطّن لقطات شاشتك في دقائق وليس ساعات.";
    default:
      return "Localize your screenshots in minutes, not hours.";
  }
}

function renderContent(locale: LocaleCode) {
  switch (locale) {
    case "es":
      return <ContentEs />;
    case "zh":
      return <ContentZh />;
    case "hi":
      return <ContentHi />;
    case "fr":
      return <ContentFr />;
    case "ar":
      return <ContentAr />;
    default:
      return <ContentEn />;
  }
}

function ContentEn() {
  return (
    <>
      <p>
        You support 6 languages. Each language needs 10 screenshots. Each
        screenshot exists in 3 device sizes. That is 180 files — and you
        rebuild them every time you update the app. It does not have to be
        this painful.
      </p>

      <h2>The Multiplication Problem</h2>
      <p>
        Localization turns a manageable screenshot task into a combinatorial
        explosion. The math is simple:{" "}
        <code>screenshots x languages x devices = files</code>. At 5
        languages and 2 device sizes, a 10-screenshot set becomes 100 files.
        Most teams either skip localization entirely or burn a full day on
        it.
      </p>

      <h2>Strategy 1: Separate Design From Content</h2>
      <p>
        The layout, device frame, background, and positioning should be
        defined once. Only the text changes between languages. If you are
        copying an entire Figma artboard for each locale, you are doing
        redundant work — and every design tweak means updating every copy.
      </p>
      <p>
        Use a template-based workflow where the visual design is shared and
        text is overridden per locale. This is the approach Screenshot Bro
        uses: add locales, set per-shape text overrides, and the layout
        stays identical.
      </p>

      <h2>Strategy 2: Handle Right-to-Left Early</h2>
      <p>
        Arabic, Hebrew, and Persian are RTL languages. Text alignment,
        reading order, and sometimes layout direction need to flip. If your
        screenshot tool does not support per-locale positioning, RTL
        languages require manual adjustments for every screenshot.
      </p>
      <p>
        Screenshot Bro supports per-shape position overrides per locale, so
        you can mirror text placement for RTL languages without duplicating
        the entire template.
      </p>

      <h2>Strategy 3: Export Everything at Once</h2>
      <p>
        The export step is where most manual workflows fall apart. Exporting
        locale by locale, renaming files, organizing into folders — it adds
        up fast. The ideal workflow exports every language, every device
        size, in one action with predictable folder structure.
      </p>
      <p>
        Screenshot Bro&apos;s batch export creates organized folders by locale
        and row automatically:{" "}
        <code>en/iPhone 6.9/01_screenshot.png</code>,{" "}
        <code>de/iPhone 6.9/01_screenshot.png</code>, and so on.
      </p>

      <h2>Strategy 4: Track Translation Progress</h2>
      <p>
        App Store Connect supports 50 localizations, so it is easy to miss
        a translation. Use a tool that shows completion status per locale so
        you can see at a glance which languages are fully translated and
        which are still missing overrides.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        Localization is one of the highest-ROI things you can do for your
        App Store listing, especially when your product has meaningful demand
        outside its primary language. The exact conversion lift depends on
        the app, category, market, and quality of the translation. The
        barrier is not the translation itself — it is the repetitive design
        and export work. Eliminate that, and localization becomes a
        reasonable task instead of a dreaded one.
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Soportas 6 idiomas. Cada idioma necesita 10 capturas de pantalla. Cada captura existe en 3 tamaños de dispositivo.
        Eso son 180 archivos, y tienes que volver a crearlos cada vez que actualizas la aplicación. No tiene por qué ser tan doloroso.
      </p>

      <h2>El problema de la multiplicación</h2>
      <p>
        La localización convierte una tarea manejable de capturas de pantalla en una explosión combinatoria.
        La matemática es simple: <code>capturas x idiomas x dispositivos = archivos</code>. Con 5 idiomas y 2 tamaños de dispositivo,
        un conjunto de 10 capturas se convierte en 100 archivos. La mayoría de los equipos omiten la localización por completo o pierden un día entero en ella.
      </p>

      <h2>Estrategia 1: Separa el diseño del contenido</h2>
      <p>
        La distribución, el marco del dispositivo, el fondo y el posicionamiento deben definirse una sola vez. Solo cambia el texto entre idiomas.
        Si estás copiando una mesa de trabajo de Figma entera para cada locale, estás haciendo un trabajo redundante, y cada retoque de diseño significa actualizar cada copia.
      </p>
      <p>
        Usa un flujo de trabajo basado en plantillas donde el diseño visual se comparta y el texto se sobrescriba por locale. Este es el enfoque que usa Screenshot Bro: añade locales, establece sobrescrituras de texto por forma y el diseño se mantiene idéntico.
      </p>

      <h2>Estrategia 2: Maneja el texto de derecha a izquierda (RTL) desde el principio</h2>
      <p>
        El árabe, el hebreo y el persa son idiomas RTL. La alineación del texto, el orden de lectura y, a veces, la dirección del diseño deben invertirse.
        Si tu herramienta de capturas no admite posicionamiento por locale, los idiomas RTL requerirán ajustes manuales para cada captura.
      </p>
      <p>
        Screenshot Bro admite sobrescrituras de posición por forma por locale, de modo que puedes reflejar la ubicación del texto para idiomas RTL sin duplicar toda la plantilla.
      </p>

      <h2>Estrategia 3: Exporta todo de una vez</h2>
      <p>
        El paso de exportación es donde fallan la mayoría de los flujos de trabajo manuales. Exportar locale por locale, renombrar archivos, organizar en carpetas... todo se acumula rápido.
        El flujo de trabajo ideal exporta cada idioma, cada tamaño de dispositivo, en una sola acción con una estructura de carpetas predecible.
      </p>
      <p>
        La exportación por lotes de Screenshot Bro crea carpetas organizadas por locale y fila de forma automática: <code>en/iPhone 6.9/01_screenshot.png</code>, <code>de/iPhone 6.9/01_screenshot.png</code>, etc.
      </p>

      <h2>Estrategia 4: Haz un seguimiento del progreso de traducción</h2>
      <p>
        App Store Connect admite 50 localizaciones, por lo que es fácil pasar por alto una traducción. Usa una herramienta que muestre el estado de finalización por locale para que puedas ver de un vistazo qué idiomas están completamente traducidos y cuáles aún carecen de sobrescrituras.
      </p>

      <h2>En resumen</h2>
      <p>
        La localización es una de las acciones con mayor retorno de la inversión (ROI) que puedes realizar para tu ficha de la App Store, especialmente cuando tu producto tiene una demanda significativa fuera de su idioma principal.
        El aumento exacto de la conversión depende de la app, la categoría, el mercado y la calidad de la traducción. La barrera no es la traducción en sí, sino el trabajo repetitivo de diseño y exportación. Elimina eso y la localización se convertirá en una tarea razonable en lugar de una temida.
      </p>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        您支持 6 种语言。每种语言需要 10 张截图。每张截图有 3 种设备尺寸。这就是 180 个文件 —— 并且您每次更新应用时都需要重新制作它们。它不应该如此痛苦。
      </p>

      <h2>乘法效应带来的难题</h2>
      <p>
        本地化会将一个原本可控的截图任务转变为组合数量的暴增。计算公式很简单：
        <code>截图数 x 语言数 x 设备数 = 文件数</code>。在 5 种语言和 2 种设备尺寸下，一个包含 10 张截图的截图集就会变成 100 个文件。
        大多数团队要么完全跳过本地化，要么为此耗费整整一天的时间。
      </p>

      <h2>策略 1：将设计与内容分离</h2>
      <p>
        布局、设备框架、背景和位置应该只定义一次。不同语言之间只有文本发生变化。
        如果您为每个语言版本复制整个 Figma 画板，那么您就在做重复的工作 —— 并且每次设计微调都意味着要更新每一个副本。
      </p>
      <p>
        使用基于模板的工作流，共享视觉设计，并按语言覆盖文本。这就是 Screenshot Bro 的工作方式：添加语言、设置按形状的文本覆盖，布局将保持完全一致。
      </p>

      <h2>策略 2：尽早处理从右至左（RTL）书写格式</h2>
      <p>
        阿拉伯语、希伯来语和波斯语是自右向左（RTL）书写的语言。文本对齐、阅读顺序以及有时布局方向都需要翻转。
        如果您的截图工具不支持按语言的定位，那么 RTL 语言的每张截图都需要手动调整。
      </p>
      <p>
        Screenshot Bro 支持按语言的每个形状位置覆盖，因此您可以为 RTL 语言镜像文本放置，而无需复制整个模板。
      </p>

      <h2>策略 3：一次性导出所有内容</h2>
      <p>
        导出步骤是大多数手动工作流崩溃的地方。按语言导出、重命名文件、整理到文件夹中 —— 这些工作会快速累积。
        理想的工作流是在一次操作中导出每种语言、每种设备尺寸，并生成可预测的文件夹结构。
      </p>
      <p>
        Screenshot Bro 的批量导出功能会自动按语言和排创建整齐的文件夹：
        <code>en/iPhone 6.9/01_screenshot.png</code>、<code>de/iPhone 6.9/01_screenshot.png</code>，依此类推。
      </p>

      <h2>策略 4：跟踪翻译进度</h2>
      <p>
        App Store Connect 支持 50 种语言，因此很容易遗漏翻译。
        使用可以显示每个语言完成状态的工具，以便您可以一目了然地看到哪些语言已完全翻译，哪些仍缺少覆盖。
      </p>

      <h2>总结</h2>
      <p>
        对于您的 App Store 详情页，本地化是投资回报率（ROI）最高的操作之一，尤其是当您的产品在主要语言之外有显著需求时。
        确切的转化率提升取决于应用、类别、市场和翻译质量。阻碍本地化的并不是翻译本身，而是重复的设计和导出工作。
        消除这些繁琐工作，本地化就会变成一项合理的工作，而不是令人望而生畏的苦差事。
      </p>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        आप 6 भाषाओं का समर्थन करते हैं। प्रत्येक भाषा के लिए 10 स्क्रीनशॉट की आवश्यकता होती है। प्रत्येक स्क्रीनशॉट 3 डिवाइस आकारों में मौजूद है। वह 180 फ़ाइलें हैं — और जब भी आप ऐप को अपडेट करते हैं, तो आप उन्हें फिर से बनाते हैं। इसे इतना दर्दनाक होने की आवश्यकता नहीं है।
      </p>

      <h2>गुणा की समस्या</h2>
      <p>
        स्थानीयकरण एक प्रबंधनीय स्क्रीनशॉट कार्य को एक गणितीय विस्फोट में बदल देता है। गणित सरल है:
        <code>स्क्रीनशॉट x भाषाएँ x डिवाइस = फ़ाइलें</code>। 5 भाषाओं और 2 डिवाइस आकारों पर, एक 10-स्क्रीनशॉट सेट 100 फ़ाइलें बन जाता है।
        अधिकांश टीमें या तो स्थानीयकरण को पूरी तरह से छोड़ देती हैं या इस पर एक पूरा दिन बर्बाद कर देती हैं।
      </p>

      <h2>रणनीति 1: डिज़ाइन को कंटेंट से अलग करें</h2>
      <p>
        लेआउट, डिवाइस फ्रेम, बैकग्राउंड और पोजीशनिंग को एक बार परिभाषित किया जाना चाहिए। केवल पाठ भाषाओं के बीच बदलता है।
        यदि आप प्रत्येक लोकेल के लिए एक संपूर्ण फिग्मा आर्टबोर्ड कॉपी कर रहे हैं, तो आप निरर्थक काम कर रहे हैं — और प्रत्येक डिज़ाइन बदलाव का अर्थ प्रत्येक प्रति को अपडेट करना है।
      </p>
      <p>
        टेम्पलेट-आधारित वर्कफ़्लो का उपयोग करें जहाँ विज़ुअल डिज़ाइन साझा किया जाता है और पाठ लोकेल के अनुसार ओवरराइड किया जाता है। यही दृष्टिकोण Screenshot Bro उपयोग करता है: लोकेल जोड़ें, प्रति-आकार पाठ ओवरराइड सेट करें, और लेआउट समान रहता है।
      </p>

      <h2>रणनीति 2: राइट-टू-लेफ्ट (RTL) को जल्दी संभालें</h2>
      <p>
        अरबी, हिब्रू और फ़ारसी आरटीएल भाषाएँ हैं। टेक्स्ट एलाइनमेंट, पढ़ने का क्रम, और कभी-कभी लेआउट दिशा को पलटने की आवश्यकता होती है।
        यदि आपका स्क्रीनशॉट टूल प्रति-लोकेल पोजीशनिंग का समर्थन नहीं करता है, तो RTL भाषाओं को प्रत्येक स्क्रीनशॉट के लिए मैन्युअल समायोजन की आवश्यकता होती है।
      </p>
      <p>
        Screenshot Bro प्रति लोकेल प्रति-आकार स्थिति ओवरराइड का समर्थन करता है, जिससे आप पूरे टेम्पलेट को डुप्लिकेट किए बिना आरटीएल भाषाओं के लिए टेक्स्ट प्लेसमेंट को मिरर कर सकते हैं।
      </p>

      <h2>रणनीति 3: एक साथ सब कुछ निर्यात करें</h2>
      <p>
        निर्यात कदम वह जगह है जहाँ अधिकांश मैन्युअल वर्कफ़्लो बिखर जाते हैं। लोकेल द्वारा लोकेल निर्यात करना, फ़ाइलों का नाम बदलना, फ़ोल्डरों में व्यवस्थित करना — यह सब तेज़ी से जुड़ता है।
        आदर्शन वर्कफ़्लो एक ही क्रिया में प्रत्येक भाषा, प्रत्येक डिवाइस आकार को अनुमानित फ़ोल्डर संरचना के साथ निर्यात करता है।
      </p>
      <p>
        Screenshot Bro का बैच एक्सपोर्ट स्वचालित रूप से लोकेल और पंक्ति द्वारा व्यवस्थित फ़ोल्डर बनाता है:
        <code>en/iPhone 6.9/01_screenshot.png</code>, <code>de/iPhone 6.9/01_screenshot.png</code>, इत्यादि।
      </p>

      <h2>रणनीति 4: अनुवाद प्रगति को ट्रैक करें</h2>
      <p>
        ऐप स्टोर कनेक्ट 50 स्थानीयकरणों का समर्थन करता है, इसलिए अनुवाद छूट जाना आसान है।
        एक ऐसे टूल का उपयोग करें जो प्रति लोकेल पूर्णता स्थिति दिखाता है ताकि आप एक नज़र में देख सकें कि कौन सी भाषाएं पूरी तरह से अनुवादित हैं और किन में अभी भी ओवरराइड गायब हैं।
      </p>

      <h2>निष्कर्ष</h2>
      <p>
        स्थानीयकरण आपके ऐप स्टोर लिस्टिंग के लिए सबसे अधिक आरओआई (ROI) देने वाली चीज़ों में से एक है, खासकर तब जब आपके उत्पाद की अपनी प्राथमिक भाषा के बाहर सार्थक मांग हो।
        सटीक रूपांतरण लिफ्ट ऐप, श्रेणी, बाजार और अनुवाद की गुणवत्ता पर निर्भर करती है। बाधा अनुवाद स्वयं नहीं है — यह बार-बार होने वाला डिज़ाइन और निर्यात कार्य है।
        इसे समाप्त करें, और स्थानीयकरण एक भयानक कार्य के बजाय एक उचित कार्य बन जाता है।
      </p>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        Vous gérez 6 langues. Chaque langue requiert 10 captures d&apos;écran. Chaque capture se décline en 3 tailles d&apos;appareils.
        Cela représente 180 fichiers — et vous devez tous les recréer à chaque mise à jour. Ce processus n&apos;a pas à être si fastidieux.
      </p>

      <h2>Le problème de la multiplication</h2>
      <p>
        La localisation transforme une tâche simple en une explosion combinatoire.
        Le calcul est simple : <code>captures x langues x appareils = fichiers</code>. Avec 5 langues et 2 tailles d&apos;appareils,
        une série de 10 captures d&apos;écran devient un ensemble de 100 fichiers. La plupart des équipes choisissent soit d&apos;ignorer la localisation, soit d&apos;y consacrer une journée entière.
      </p>

      <h2>Stratégie 1 : Séparer le design du contenu</h2>
      <p>
        La mise en page, le cadre de l&apos;appareil, l&apos;arrière-plan et le positionnement doivent être définis une seule fois. Seul le texte change selon les langues.
        Si vous dupliquez un plan de travail Figma entier pour chaque langue, vous effectuez un travail redondant — et la moindre modification visuelle vous oblige à mettre à jour toutes les copies.
      </p>
      <p>
        Utilisez un flux de travail basé sur des modèles où le design visuel est partagé et le texte surchargé par langue. C&apos;est l&apos;approche de Screenshot Bro : ajoutez des langues, configurez des surcharges de texte par forme, et la mise en page reste strictement identique.
      </p>

      <h2>Stratégie 2 : Gérer le sens de lecture droite-gauche (RTL) très tôt</h2>
      <p>
        L&apos;arabe, l&apos;hébreu et le persan s&apos;écrivent de droite à gauche. L&apos;alignement du texte, le sens de lecture et parfois la direction de la mise en page doivent être inversés.
        Si votre outil de capture d&apos;écran ne permet pas de personnaliser la position par langue, les langues RTL nécessiteront des ajustements manuels fastidieux sur chaque capture.
      </p>
      <p>
        Screenshot Bro gère les surcharges de position par forme et par langue, ce qui vous permet de déplacer le texte pour les langues RTL sans dupliquer tout le modèle.
      </p>

      <h2>Stratégie 3 : Tout exporter en une seule fois</h2>
      <p>
        L&apos;étape d&apos;exportation est le point de rupture de la plupart des flux manuels. Exporter langue par langue, renommer les fichiers, les organiser dans des dossiers... c&apos;est une perte de temps.
        Le flux idéal exporte chaque langue et chaque taille d&apos;appareil en une seule action, selon une structure de dossiers prévisible.
      </p>
      <p>
        L&apos;exportation groupée de Screenshot Bro crée automatiquement des dossiers organisés par langue et par rangée : <code>en/iPhone 6.9/01_screenshot.png</code>, <code>de/iPhone 6.9/01_screenshot.png</code>, etc.
      </p>

      <h2>Stratégie 4 : Suivre l&apos;avancement des traductions</h2>
      <p>
        App Store Connect prend en charge 50 langues, il est donc facile d&apos;oublier une traduction. Utilisez un outil qui indique l&apos;état d&apos;avancement pour chaque langue afin de repérer en un coup d&apos;œil les traductions manquantes.
      </p>

      <h2>L&apos;essentiel</h2>
      <p>
        La localisation offre l&apos;un des meilleurs retours sur investissement (ROI) pour votre fiche App Store, surtout si votre produit rencontre une forte demande en dehors de votre marché d&apos;origine.
        Le gain de conversion exact varie selon l&apos;application, sa catégorie, le marché et la qualité de la traduction. La barrière n&apos;est pas la traduction elle-même — c&apos;est le travail répétitif de design et d&apos;exportation. Supprimez cet obstacle, et la localisation redevient une tâche simple et naturelle.
      </p>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        أنت تدعم 6 لغات. وتطلب كل لغة 10 لقطات شاشة. وتتوفر كل لقطة شاشة بـ 3 أحجام أجهزة مختلفة. هذا يعني 180 ملفًا — ويتعين عليك إعادة إنشائها في كل مرة تقوم فيها بتحديث التطبيق. لا يجب أن يكون الأمر بهذه الصعوبة.
      </p>

      <h2>مشكلة التضاعف</h2>
      <p>
        يحول التوطين مهمة لقطات الشاشة السهلة إلى تضاعف كبير في عدد الملفات. الحساب بسيط: 
        <code>لقطات الشاشة × اللغات × الأجهزة = الملفات</code>. فبوجود 5 لغات وحجمي أجهزة، تتحول مجموعة مكونة من 10 لقطات شاشة إلى 100 ملف.
        تتخلى معظم فرق العمل عن التوطين تمامًا أو تستهلك يومًا كاملًا للقيام بذلك.
      </p>

      <h2>الاستراتيجية الأولى: فصل التصميم عن المحتوى</h2>
      <p>
        يجب تحديد التخطيط وإطار الجهاز والخلفية والموضع مرة واحدة فقط. النص فقط هو الذي يتغير بين اللغات.
        إذا كنت تقوم بنسخ لوحة تصميم Figma كاملة لكل لغة، فأنت تقوم بعمل مكرر — وأي تعديل في التصميم يعني تحديث كل نسخة.
      </p>
      <p>
        استخدم سير عمل يعتمد على القوالب حيث يتم مشاركة التصميم البصري واستبدال النصوص حسب كل لغة. هذا هو الأسلوب الذي يتبعه Screenshot Bro: أضف اللغات، وقم بتعيين استبدال النصوص لكل شكل، ويظل التخطيط متطابقًا تمامًا.
      </p>

      <h2>الاستراتيجية الثانية: التعامل مع اللغات التي تُكتب من اليمين إلى اليسار (RTL) مبكرًا</h2>
      <p>
        العربية والعبرية والفارسية هي لغات تكتب من اليمين إلى اليسار. يجب قلب محاذاة النص وترتيب القراءة وأحيانًا اتجاه التخطيط.
        إذا كانت أداة لقطات الشاشة الخاصة بك لا تدعم ضبط الموضع حسب اللغة، فإن اللغات التي تُكتب من اليمين إلى اليسار ستتطلب تعديلات يدوية لكل لقطة شاشة.
      </p>
      <p>
        يدعم Screenshot Bro استبدال مواضع الأشكال حسب كل لغة، بحيث يمكنك عكس موضع النص للغات التي تُكتب من اليمين إلى اليسار دون تكرار القالب بالكامل.
      </p>

      <h2>الاستراتيجية الثالثة: تصدير كل شيء مرة واحدة</h2>
      <p>
        خطوة التصدير هي المكان الذي تفشل فيه معظم خطوات سير العمل اليدوي. التصدير لغة تلو الأخرى، وإعادة تسمية الملفات، وتنظيمها في مجلدات — كل هذا يتراكم بسرعة.
        يتيح سير العمل المثالي تصدير كل لغة وكل حجم جهاز في عملية واحدة وببنية مجلدات متوقعة.
      </p>
      <p>
        يقوم التصدير الجماعي في Screenshot Bro بإنشاء مجلدات منظمة حسب اللغة والصف تلقائيًا:
        <code>en/iPhone 6.9/01_screenshot.png</code>، و <code>de/iPhone 6.9/01_screenshot.png</code>، وهكذا.
      </p>

      <h2>الاستراتيجية الرابعة: تتبع تقدم الترجمة</h2>
      <p>
        يدعم App Store Connect ما يصل إلى 50 لغة، لذا من السهل إغفال ترجمة ما.
        استخدم أداة تعرض حالة اكتمال الترجمة لكل لغة حتى تتمكن من معرفة اللغات التي تم ترجمتها بالكامل وتلك التي لا تزال تفتقر إلى نصوص مستبدلة بلمحة واحدة.
      </p>

      <h2>الخلاصة</h2>
      <p>
        يعد التوطين أحد أكثر الأمور ذات العائد الاستثماري (ROI) المرتفع التي يمكنك القيام بها لصفحة تطبيقك في متجر التطبيقات، خاصةً عندما يكون لمنتجك طلب كبير خارج لغته الأساسية.
        تعتمد زيادة معدل التحويل الدقيقة على التطبيق والفئة والسوق وجودة الترجمة. العائق ليس الترجمة نفسها — بل هو عمل التصميم والتصدير المتكرر.
        تخلص من ذلك، وسيجعل هذا التوطين مهمة مقبولة بدلاً من كونها مهمة مرهقة تخشاها.
      </p>
    </>
  );
}
