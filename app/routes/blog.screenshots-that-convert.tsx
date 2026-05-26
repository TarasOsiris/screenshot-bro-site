import type { Route } from "./+types/blog.screenshots-that-convert";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { data, useLoaderData } from "react-router";
import { isLocaleCode, type LocaleCode } from "~/config/localization";

const SLUG = "screenshots-that-convert";

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
    case "de":
      return "Gestalte Screenshot-Sets, die konvertieren – ganz ohne die lästige Arbeit in Figma.";
    case "es":
      return "Diseña conjuntos de capturas que conviertan, sin el trabajo pesado de Figma.";
    case "zh":
      return "设计高转化率的截图集 —— 无需 Figma 的繁琐操作。";
    case "hi":
      return "कन्वर्ट होने वाले स्क्रीनशॉट सेट डिज़ाइन करें — बिना फिग्मा के झंझट के।";
    case "fr":
      return "Concevez des ensembles de captures qui convertissent, sans le travail fastidieux sur Figma.";
    case "ar":
      return "صمم مجموعات لقطات شاشة تؤدي إلى زيادة التحويل - دون عناء العمل على Figma.";
    case "ja":
      return "Figmaの面倒な作業なしで、コンバージョンにつながるスクリーンショットセットをデザイン。";
    case "pt":
      return "Crie conjuntos de capturas de tela que convertem — sem o trabalho repetitivo no Figma.";
    case "it":
      return "Progetta set di screenshot che convertono, senza il lavoro noioso su Figma.";
    case "ko":
      return "Figma의 번거로운 작업 없이 전환을 유도하는 스크린샷 세트를 디자인하세요.";
    default:
      return "Design screenshot sets that convert — without the Figma busywork.";
  }
}

function renderContent(locale: LocaleCode) {
  switch (locale) {
    case "de":
      return <ContentDe />;
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
    case "ja":
      return <ContentJa />;
    case "pt":
      return <ContentPt />;
    case "it":
      return <ContentIt />;
    case "ko":
      return <ContentKo />;
    default:
      return <ContentEn />;
  }
}

function ContentEn() {
  return (
    <>
      <p>
        Many people decide quickly whether an App Store listing is relevant.
        Screenshots are often the first detailed look they get at the app, so
        they need to explain the value faster than the description can. Here
        is what separates high-converting screenshot sets from forgettable
        ones.
      </p>

      <h2>1. Lead With the Outcome, Not the Feature</h2>
      <p>
        Your first screenshot should answer &quot;what does this app do for me?&quot;
        — not &quot;what does the UI look like.&quot; Show the end result: a completed
        task, a beautiful output, a solved problem. The feature details come
        later.
      </p>
      <p>
        <strong>Bad:</strong> &quot;Dashboard view with sidebar navigation&quot;
        <br />
        <strong>Good:</strong> &quot;Track every fuel stop in one tap&quot;
      </p>

      <h2>2. Use Short, Benefit-Driven Copy</h2>
      <p>
        Each screenshot gets one headline — 4 to 8 words max. Write in the
        second person (&quot;Export your screenshots in one click&quot;) and focus on
        what the user gains, not what the app contains.
      </p>
      <ul>
        <li>Keep text above the device frame so it reads first</li>
        <li>Use a consistent font size and position across all screenshots</li>
        <li>One idea per screenshot — do not overload</li>
      </ul>

      <h2>3. The First Two Screenshots Are Everything</h2>
      <p>
        On the App Store, only the first 2–3 screenshots are visible without
        scrolling. These must communicate your app&apos;s core value. Save the
        secondary features (settings, integrations, edge cases) for
        positions 4–10.
      </p>

      <h2>4. Use Real Device Frames</h2>
      <p>
        Device frames add credibility and visual structure. A raw screenshot
        floating in space looks unfinished. Wrap it in the actual device
        bezel your users will see it on — iPhone, iPad, or Mac.
      </p>
      <p>
        Screenshot Bro includes an up-to-date library of Apple and Android
        device frames with configurable body colors, so your frames always
        match your brand.
      </p>

      <h2>5. Design a Consistent Visual System</h2>
      <p>
        Pick one background style and stick with it across all screenshots.
        Gradient backgrounds work well because they add depth without
        competing with the device frame. Use your brand&apos;s color palette and
        maintain consistent spacing.
      </p>
      <ul>
        <li>Same gradient direction and color family across the set</li>
        <li>Consistent text placement and hierarchy</li>
        <li>Optional: span one background across multiple screenshots for a panoramic effect</li>
      </ul>

      <h2>6. Localize — the ROI Is Massive</h2>
      <p>
        If you support multiple languages, your screenshots should too.
        Translate the headline copy, not just the app UI. Users notice when
        the marketing text is in their language, and the impact will vary by
        market, category, and translation quality.
      </p>

      <h2>7. Test and Iterate</h2>
      <p>
        Apple supports up to 10 screenshots and 3 app previews per
        localization. Use all the slots. Try different lead screenshots and
        measure the impact on conversion rate through App Store Connect
        analytics.
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Muchos usuarios deciden rápidamente si una ficha de la App Store les resulta relevante.
        Las capturas de pantalla suelen ser el primer vistazo detallado que reciben de la aplicación, por lo que
        deben explicar el valor más rápido de lo que lo hace la descripción. Esto es lo que separa a los conjuntos
        de capturas de alta conversión de los que pasan desapercibidos.
      </p>

      <h2>1. Empieza con el resultado, no con la función</h2>
      <p>
        Tu primera captura de pantalla debería responder a &quot;¿qué hace esta aplicación por mí?&quot;
        — no a &quot;¿cómo es la interfaz de usuario?&quot;. Muestra el resultado final: una tarea completada, un
        resultado atractivo, un problema resuelto. Los detalles de las funciones vienen después.
      </p>
      <p>
        <strong>Mal:</strong> &quot;Vista de panel con navegación lateral&quot;
        <br />
        <strong>Bien:</strong> &quot;Registra cada parada de combustible con un toque&quot;
      </p>

      <h2>2. Usa textos cortos y enfocados en los beneficios</h2>
      <p>
        Cada captura de pantalla debe tener un único titular: de 4 a 8 palabras como máximo. Escribe en segunda
        persona (&quot;Exporta tus capturas en un clic&quot;) y concéntrate en lo que gana el usuario, no en lo que contiene
        la aplicación.
      </p>
      <ul>
        <li>Mantén el texto por encima del marco del dispositivo para que se lea primero</li>
        <li>Usa un tamaño de fuente y una posición consistentes en todas las capturas de pantalla</li>
        <li>Una idea por captura: no la sobrecargues</li>
      </ul>

      <h2>3. Las dos primeras capturas lo son todo</h2>
      <p>
        En la App Store, solo las primeras 2 o 3 capturas de pantalla son visibles sin tener que hacer scroll.
        Estas deben comunicar el valor principal de tu aplicación. Guarda las funciones secundarias (ajustes,
        integraciones, casos límite) para las posiciones 4 a 10.
      </p>

      <h2>4. Usa marcos de dispositivos reales</h2>
      <p>
        Los marcos de dispositivos aportan credibilidad y estructura visual. Una captura de pantalla cruda
        flotando en el espacio parece inacabada. Envuélvela en el bisel del dispositivo real en el que tus usuarios
        la verán: iPhone, iPad o Mac.
      </p>
      <p>
        Screenshot Bro incluye una biblioteca actualizada de marcos de dispositivos Apple y Android con colores de
        cuerpo configurables, para que tus marcos siempre coincidan con tu marca.
      </p>

      <h2>5. Diseña un sistema visual consistente</h2>
      <p>
        Elige un estilo de fondo y manténlo en todas las capturas de pantalla. Los fondos degradados funcionan bien
        porque añaden profundidad sin competir con el marco del dispositivo. Usa la paleta de colores de tu marca
        y mantén un espaciado consistente.
      </p>
      <ul>
        <li>Misma dirección de degradado y familia de colores en todo el conjunto</li>
        <li>Ubicación y jerarquía de texto consistentes</li>
        <li>Opcional: extiende un fondo a lo largo de varias capturas de pantalla para un efecto panorámico</li>
      </ul>

      <h2>6. Localiza: el retorno de la inversión es enorme</h2>
      <p>
        Si tu app admite varios idiomas, tus capturas de pantalla también deberían hacerlo. Traduce los textos de
        los titulares, no solo la interfaz de usuario de la aplicación. Los usuarios notan cuando el texto de marketing
        está en su idioma, y el impacto variará según el mercado, la categoría y la calidad de la traducción.
      </p>

      <h2>7. Prueba e itera</h2>
      <p>
        Apple admite hasta 10 capturas de pantalla y 3 vistas previas de la aplicación por localización. Usa todas
        las ranuras disponibles. Prueba diferentes capturas de portada y mide el impacto en la tasa de conversión a
        través de las estadísticas de App Store Connect.
      </p>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        许多人会快速决定 App Store 中的应用详情页是否与自己相关。
        屏幕截图通常是他们对应用的第一次详细了解，因此它们需要比描述更快地解释应用的价值。
        以下是区分高转化率截图集与平庸截图集的关键所在。
      </p>

      <h2>1. 以结果为导向，而非功能</h2>
      <p>
        您的第一张截图应该回答“这个应用能为我做什么？”——而不是“界面长什么样”。
        展示最终结果：一个已完成的任务、一个精美的输出，或是一个已解决的问题。具体的功能细节留到后面介绍。
      </p>
      <p>
        <strong>较差：</strong> “带有侧边导航栏的仪表盘视图”
        <br />
        <strong>较好：</strong> “一键记录每次加油”
      </p>

      <h2>2. 使用简短、以利益为导向的文案</h2>
      <p>
        每张截图只需一个标题 —— 最多 4 到 8 个字。用第二人称写作（“一键导出截图”），
        并将注意力集中在用户的收获上，而不是应用所包含的内容。
      </p>
      <ul>
        <li>将文字保持在设备框架上方，以便首先被阅读</li>
        <li>在所有截图中使用一致的字体大小和位置</li>
        <li>每张截图表达一个核心想法 —— 切勿信息过载</li>
      </ul>

      <h2>3. 前两张截图决定一切</h2>
      <p>
        在 App Store 上，无需滚动即可看到的前 2–3 张截图至关重要。
        这些截图必须传达您应用的核心价值。将次要功能（设置、集成、边缘情况）留到第 4–10 张截图的位置。
      </p>

      <h2>4. 使用真实的设备框架</h2>
      <p>
        设备外框可增加可信度并提供视觉结构。一张悬浮在空中的原始截图看起来不够专业。
        用用户将要使用的真实设备边框将其包裹起来 —— iPhone、iPad 或 Mac。
      </p>
      <p>
        Screenshot Bro 包含一个最新的 Apple 和 Android 设备框架库，并配有可配置的机身颜色，
        让您的外框始终与您的品牌相匹配。
      </p>

      <h2>5. 设计一致的视觉系统</h2>
      <p>
        选择一种背景样式，并在所有截图中保持一致。渐变背景非常适用，因为它们在增加深度的同时，
        不会与设备框架抢夺视线。使用您品牌的配色方案，并保持一致的间距。
      </p>
      <ul>
        <li>整个截图中保持相同的渐变方向和色系</li>
        <li>一致的文本放置和层级结构</li>
        <li>可选：将一个背景延伸到多张截图中以获得全景效果</li>
      </ul>

      <h2>6. 本地化 —— 投资回报率巨大</h2>
      <p>
        如果您的应用支持多种语言，您的截图也应该支持。翻译标题文案，而不只是应用界面。
        用户会注意到营销文案是否是他们自己的语言，其影响会因市场、类别和翻译质量而异。
      </p>

      <h2>7. 测试与迭代</h2>
      <p>
        苹果为每个本地化版本支持最多 10 张截图和 3 个应用预览视频。充分利用所有的展示位。
        尝试不同的主打截图，并通过 App Store Connect 分析数据来衡量对转化率的影响。
      </p>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        कई लोग जल्दी ही तय कर लेते हैं कि कोई ऐप स्टोर लिस्टिंग उनके काम की है या नहीं।
        स्क्रीनशॉट अक्सर ऐप पर मिलने वाली पहली विस्तृत नज़र होते हैं, इसलिए उन्हें विवरण की तुलना में अधिक तेज़ी से मूल्य समझाने की आवश्यकता होती है।
        यहाँ बताया गया है कि क्या चीज़ उच्च-कन्वर्टिंग स्क्रीनशॉट सेट को दूसरों से अलग बनाती है।
      </p>

      <h2>1. परिणाम को आगे रखें, सुविधा को नहीं</h2>
      <p>
        आपके पहले स्क्रीनशॉट को उत्तर देना चाहिए कि &quot;यह ऐप मेरे लिए क्या करता है?&quot; — न कि &quot;यूआई कैसा दिखता है।&quot;
        अंतिम परिणाम दिखाएं: एक पूरा किया गया कार्य, एक सुंदर आउटपुट, एक हल की गई समस्या। सुविधा विवरण बाद में आते हैं।
      </p>
      <p>
        <strong>खराब:</strong> &quot;साइडबार नेविगेशन के साथ डैशबोर्ड व्यू&quot;
        <br />
        <strong>अच्छा:</strong> &quot;एक टैप में हर फ्यूल स्टॉप ट्रैक करें&quot;
      </p>

      <h2>2. छोटी, लाभ-संचालित कॉपी का उपयोग करें</h2>
      <p>
        प्रत्येक स्क्रीनशॉट को एक हेडलाइन मिलती है — अधिकतम 4 से 8 शब्द। दूसरे व्यक्ति में लिखें (&quot;एक क्लिक में अपने स्क्रीनशॉट निर्यात करें&quot;) और इस बात पर ध्यान केंद्रित करें कि उपयोगकर्ता को क्या मिलता है, न कि ऐप में क्या शामिल है।
      </p>
      <ul>
        <li>टेक्स्ट को डिवाइस फ्रेम से ऊपर रखें ताकि इसे पहले पढ़ा जा सके</li>
        <li>सभी स्क्रीनशॉट में एक समान फ़ॉन्ट आकार और स्थिति का उपयोग करें</li>
        <li>प्रति स्क्रीनशॉट एक विचार — ओवरलोड न करें</li>
      </ul>

      <h2>3. पहले दो स्क्रीनशॉट ही सब कुछ हैं</h2>
      <p>
        ऐप स्टोर पर, बिना स्क्रॉल किए केवल पहले 2-3 स्क्रीनशॉट दिखाई देते हैं।
        इन्हें आपके ऐप के मुख्य मूल्य को संप्रेषित करना चाहिए। माध्यमिक सुविधाओं (सेटिंग्स, इंटीग्रेशन, एज केस) को 4-10 स्थानों के लिए सहेजें।
      </p>

      <h2>4. वास्तविक डिवाइस फ़्रेम का उपयोग करें</h2>
      <p>
        डिवाइस फ़्रेम विश्वसनीयता और दृश्य संरचना जोड़ते हैं। अंतरिक्ष में तैरता हुआ एक कच्चा स्क्रीनशॉट अधूरा लगता है। इसे वास्तविक डिवाइस बेज़ेल में लपेटें जिस पर आपके उपयोगकर्ता इसे देखेंगे — iPhone, iPad, या Mac।
      </p>
      <p>
        Screenshot Bro में कॉन्फ़िगर करने योग्य बॉडी रंगों के साथ Apple और Android डिवाइस फ़्रेम की एक अद्यतित लाइब्रेरी शामिल है, ताकि आपके फ़्रेम हमेशा आपके ब्रांड से मेल खाएं।
      </p>

      <h2>5. एक सुसंगत दृश्य प्रणाली डिजाइन करें</h2>
      <p>
        एक बैकग्राउंड स्टाइल चुनें और सभी स्क्रीनशॉट में उसी पर टिके रहें।
        ग्रेडिएंट बैकग्राउंड अच्छी तरह से काम करते हैं क्योंकि वे डिवाइस फ्रेम के साथ प्रतिस्पर्धा किए बिना गहराई जोड़ते हैं। अपने ब्रांड के रंग पैलेट का उपयोग करें और सुसंगत दूरी बनाए रखें।
      </p>
      <ul>
        <li>पूरे सेट में एक ही ग्रेडिएंट दिशा और रंग परिवार</li>
        <li>सुसंगत टेक्स्ट प्लेसमेंट और पदानुक्रम</li>
        <li>वैकल्पिक: पैनोरमिक प्रभाव के लिए कई स्क्रीनशॉट में एक बैकग्राउंड फैलाएं</li>
      </ul>

      <h2>6. स्थानीयकृत करें — रिटर्न ऑन इन्वेस्टमेंट (ROI) बहुत बड़ा है</h2>
      <p>
        यदि आप कई भाषाओं का समर्थन करते हैं, तो आपके स्क्रीनशॉट को भी करना चाहिए।
        केवल ऐप यूआई को नहीं, बल्कि हेडलाइन कॉपी का अनुवाद करें। उपयोगकर्ता ध्यान देते हैं कि कब मार्केटिंग टेक्स्ट उनकी भाषा में है, और इसका प्रभाव बाजार, श्रेणी और अनुवाद की गुणवत्ता के आधार पर अलग-अलग होगा।
      </p>

      <h2>7. परीक्षण और पुनरावृत्ति करें</h2>
      <p>
        एप्पल प्रति स्थानीयकरण के लिए 10 स्क्रीनशॉट और 3 ऐप पूर्वावलोकन तक का समर्थन करता है। सभी स्लॉट का उपयोग करें। अलग-अलग लीड स्क्रीनशॉट आज़माएं और ऐप स्टोर कनेक्ट एनालिटिक्स के माध्यम से रूपांतरण दर पर प्रभाव को मापें।
      </p>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        La plupart des utilisateurs décident rapidement si une fiche de l&apos;App Store est pertinente pour eux.
        Les captures d&apos;écran sont souvent le premier aperçu détaillé qu&apos;ils ont de l&apos;application. Elles doivent
        donc expliquer sa valeur plus rapidement que la description. Voici ce qui distingue les ensembles de
        captures à fort taux de conversion des créations ordinaires.
      </p>

      <h2>1. Mettez en avant le résultat, pas la fonctionnalité</h2>
      <p>
        Votre première capture d&apos;écran doit répondre à la question : « Qu&apos;est-ce que cette application m&apos;apporte ? »
        — et non : « À quoi ressemble l&apos;interface utilisateur ? ». Montrez le résultat final : une tâche accomplie, un
        rendu esthétique, un problème résolu. Les détails techniques viendront plus tard.
      </p>
      <p>
        <strong>À éviter :</strong> « Vue tableau de bord avec navigation latérale »
        <br />
        <strong>Recommandé :</strong> « Enregistrez chaque plein d&apos;essence en un clic »
      </p>

      <h2>2. Rédigez des textes courts et axés sur les bénéfices</h2>
      <p>
        Chaque capture d&apos;écran doit comporter un seul titre — entre 4 et 8 mots maximum. Adressez-vous directement
        à l&apos;utilisateur (« Exportez vos captures en un clic ») et concentrez-vous sur ce qu&apos;il gagne, plutôt que sur
        le contenu technique de l&apos;application.
      </p>
      <ul>
        <li>Placez le texte au-dessus du cadre de l&apos;appareil pour qu&apos;il soit lu en premier</li>
        <li>Conservez une taille de police et une position identiques sur toutes les captures d&apos;écran</li>
        <li>Une seule idée par capture — ne surchargez pas</li>
      </ul>

      <h2>3. Les deux premières captures d&apos;écran sont décisives</h2>
      <p>
        Sur l&apos;App Store, seules les 2 ou 3 premières captures d&apos;écran sont visibles sans défilement.
        Elles doivent impérativement communiquer la valeur fondamentale de votre application. Gardez les fonctions
        secondaires (paramètres, intégrations, cas particuliers) pour les positions 4 à 10.
      </p>

      <h2>4. Utilisez de vrais cadres d&apos;appareils</h2>
      <p>
        Les cadres d&apos;appareils apportent de la crédibilité et une structure visuelle. Une capture d&apos;écran brute
        qui flotte dans le vide semble inachevée. Habillez-la avec le boîtier de l&apos;appareil réel que vos utilisateurs
        utiliseront : iPhone, iPad ou Mac.
      </p>
      <p>
        Screenshot Bro comprend une bibliothèque à jour de cadres d&apos;appareils Apple et Android avec des coloris
        de boîtier personnalisables, afin que vos visuels s&apos;harmonisent toujours avec votre marque.
      </p>

      <h2>5. Concevez un système visuel cohérent</h2>
      <p>
        Choisissez un style de fond et conservez-le sur toutes les captures d&apos;écran. Les fonds en dégradé fonctionnent
        particulièrement bien, car ils apportent de la profondeur sans détourner l&apos;attention du cadre de l&apos;appareil.
        Utilisez la palette de couleurs de votre marque et conservez des espacements uniformes.
      </p>
      <ul>
        <li>Même sens de dégradé et même famille de couleurs sur l&apos;ensemble de la série</li>
        <li>Positionnement et hiérarchisation cohérents du texte</li>
        <li>Optionnel : étalez un même fond sur plusieurs captures d&apos;écran pour créer un effet panoramique</li>
      </ul>

      <h2>6. Localisez vos captures : le retour sur investissement est énorme</h2>
      <p>
        Si vous proposez votre application dans plusieurs langues, vos captures d&apos;écran doivent suivre.
        Traduisez le texte des titres, et pas seulement l&apos;interface de l&apos;application. Les utilisateurs remarquent
        immédiatement quand le texte marketing est dans leur langue, et l&apos;impact variera selon le marché, la catégorie
        et la qualité de la traduction.
      </p>

      <h2>7. Testez et améliorez</h2>
      <p>
        Apple permet d&apos;ajouter jusqu&apos;à 10 captures d&apos;écran et 3 aperçus vidéo par langue. Utilisez tous les emplacements.
        Testez différentes captures principales et mesurez l&apos;impact sur votre taux de conversion grâce aux analyses
        d&apos;App Store Connect.
      </p>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        يقرر العديد من الأشخاص بسرعة ما إذا كانت بيانات تطبيقك في متجر التطبيقات تهمهم أم لا.
        غالبًا ما تكون لقطات الشاشة هي أول نظرة تفصيلية يحصلون عليها للتطبيق، لذا
        فهي بحاجة إلى توضيح قيمة التطبيق بشكل أسرع مما يمكن أن يفعله الوصف. إليك
        ما يميز مجموعات لقطات الشاشة ذات معدل التحويل المرتفع عن تلك التي تُنسى بسهولة.
      </p>

      <h2>1. ابدأ بالنتيجة، وليس بالميزة</h2>
      <p>
        يجب أن تجيب لقطة الشاشة الأولى عن سؤال &quot;ماذا يقدم لي هذا التطبيق؟&quot;
        — وليس &quot;كيف تبدو واجهة المستخدم&quot;. اعرض النتيجة النهائية: مهمة مكتملة، أو مخرج جميل، أو مشكلة تم حلها. تفاصيل الميزات تأتي لاحقًا.
      </p>
      <p>
        <strong>سيئ:</strong> &quot;عرض لوحة القيادة مع شريط تنقل جانبي&quot;
        <br />
        <strong>جيد:</strong> &quot;تتبع كل محطة وقود بنقرة واحدة&quot;
      </p>

      <h2>2. استخدم نصوصًا قصيرة تركز على الفوائد</h2>
      <p>
        تحصل كل لقطة شاشة على عنوان رئيسي واحد - من 4 إلى 8 كلمات كحد أقصى. اكتب بصيغة المخاطب (&quot;صوّر لقطات شاشتك بنقرة واحدة&quot;) وركز على ما يستفيده المستخدم، وليس على ما يحتويه التطبيق.
      </p>
      <ul>
        <li>اجعل النص أعلى إطار الجهاز حتى يقرأ أولاً</li>
        <li>استخدم حجم خط وموضعًا متسقين عبر جميع لقطات الشاشة</li>
        <li>فكرة واحدة لكل لقطة شاشة — لا تفرط في تحميلها بالمعلومات</li>
      </ul>

      <h2>3. أول لقطتي شاشة هما كل شيء</h2>
      <p>
        في متجر التطبيقات، لا تظهر سوى أول قطتي أو ثلاث لقطات شاشة دون التمرير للأسفل.
        يجب أن تنقل هذه اللقطات القيمة الأساسية لتطبيقك. وفر الميزات الثانوية (الإعدادات، والتكاملات، والحالات الخاصة) للمواضع من 4 إلى 10.
      </p>

      <h2>4. استخدم إطارات أجهزة حقيقية</h2>
      <p>
        تضيف إطارات الأجهزة مصداقية وهيكلاً بصريًا. تبدو لقطة الشاشة الخام العائمة في المساحة غير مكتملة. ضعها داخل إطار الجهاز الفعلي الذي سيراها المستخدمون عليه — iPhone أو iPad أو Mac.
      </p>
      <p>
        يتضمن تطبيق Screenshot Bro مكتبة محدثة من إطارات أجهزة Apple وAndroid مع ألوان هيكل قابلة للتكوين، بحيث تتطابق إطاراتك دائمًا مع علامتك التجارية.
      </p>

      <h2>5. صمم نظامًا بصريًا متسقًا</h2>
      <p>
        اختر نمط خلفية واحدًا والتزم به عبر جميع لقطات الشاشة.
        تعمل الخلفيات المتدرجة بشكل جيد لأنها تضيف عمقًا دون التنافس مع إطار الجهاز. استخدم لوحة ألوان علامتك التجارية وحافظ على تباعد متسق.
      </p>
      <ul>
        <li>نفس اتجاه التدرج وعائلة الألوان عبر المجموعة بأكملها</li>
        <li>وضع نص وتسلسل هرمي متسقين</li>
        <li>اختياري: امتداد خلفية واحدة عبر لقطات شاشة متعددة للحصول على تأثير بانورامي</li>
      </ul>

      <h2>6. التوطين (الترجمة) — العائد على الاستثمار ضخم</h2>
      <p>
        إذا كان تطبيقك يدعم لغات متعددة، فيجب أن تدعمها لقطات الشاشة أيضًا.
        ترجم نص العنوان الرئيسي، وليس فقط واجهة مستخدم التطبيق. يلاحظ المستخدمون عندما يكون النص التسويقي بلغتهم، وسيختلف التأثير حسب السوق والفئة وجودة الترجمة.
      </p>

      <h2>7. الاختبار والتكرار</h2>
      <p>
        تدعم Apple ما يصل إلى 10 لقطات شاشة و3 معاينات للتطبيق لكل لغة. استخدم جميع الخانات المتاحة. جرب لقطات شاشة رئيسية مختلفة وقس التأثير على معدل التحويل من خلال تحليلات App Store Connect.
      </p>
    </>
  );
}

function ContentDe() {
  return (
    <>
      <p>
        Viele Menschen entscheiden schnell, ob ein App-Store-Eintrag für sie relevant ist.
        Screenshots sind oft der erste detaillierte Blick auf die App. Sie müssen den Nutzen
        daher schneller erklären, als es die Beschreibung kann. Hier erfahren Sie, was
        konvertierungsstarke Screenshot-Sets von leicht zu vergessenden unterscheidet.
      </p>

      <h2>1. Beginnen Sie mit dem Ergebnis, nicht mit der Funktion</h2>
      <p>
        Ihr erster Screenshot sollte die Frage beantworten: &quot;Was bringt mir diese App?&quot;
        – und nicht &quot;Wie sieht die Benutzeroberfläche aus?&quot;. Zeigen Sie das Endergebnis: eine erledigte
        Aufgabe, ein schönes Ergebnis, ein gelöstes Problem. Die Details zu den Funktionen
        folgen später.
      </p>
      <p>
        <strong>Schlecht:</strong> &quot;Dashboard-Ansicht mit Seitenleisten-Navigation&quot;
        <br />
        <strong>Gut:</strong> &quot;Jeden Tankstopp mit nur einem Fingertipp erfassen&quot;
      </p>

      <h2>2. Verwenden Sie kurze, nutzenorientierte Texte</h2>
      <p>
        Jeder Screenshot erhält eine Überschrift – maximal 4 bis 8 Wörter. Schreiben Sie in der
        zweiten Person (&quot;Exportieren Sie Ihre Screenshots mit einem Klick&quot;) und konzentrieren Sie sich
        darauf, was der Benutzer gewinnt, nicht darauf, was die App enthält.
      </p>
      <ul>
        <li>Platzieren Sie den Text über dem Geräterahmen, damit er zuerst gelesen wird</li>
        <li>Verwenden Sie für alle Screenshots eine einheitliche Schriftgröße und Position</li>
        <li>Eine Idee pro Screenshot – überladen Sie ihn nicht</li>
      </ul>

      <h2>3. Die ersten beiden Screenshots entscheiden alles</h2>
      <p>
        Im App Store sind ohne Scrollen nur die ersten 2–3 Screenshots sichtbar.
        Diese müssen den Kernwert Ihrer App vermitteln. Heben Sie sich sekundäre
        Funktionen (Einstellungen, Integrationen, Sonderfälle) für die
        Positionen 4–10 auf.
      </p>

      <h2>4. Verwenden Sie echte Geräterahmen</h2>
      <p>
        Geräterahmen verleihen Glaubwürdigkeit und visuelle Struktur. Ein nackter Screenshot,
        der frei im Raum schwebt, wirkt unfertig. Verpacken Sie ihn in den tatsächlichen
        Geräterahmen, auf dem Ihre Benutzer ihn sehen werden – iPhone, iPad oder Mac.
      </p>
      <p>
        Screenshot Bro enthält eine aktuelle Bibliothek von Apple- und Android-Geräterahmen
        mit konfigurierbaren Gehäusefarben, damit Ihre Rahmen immer zu Ihrer Marke passen.
      </p>

      <h2>5. Entwerfen Sie ein einheitliches visuelles System</h2>
      <p>
        Wählen Sie einen Hintergrundstil und behalten Sie diesen für alle Screenshots bei.
        Verlaufshintergründe eignen sich hervorragend, da sie Tiefe verleihen, ohne mit dem
        Geräterahmen zu konkurrieren. Verwenden Sie die Farbpalette Ihrer Marke und
        achten Sie auf einheitliche Abstände.
      </p>
      <ul>
        <li>Gleiche Verlaufsrichtung und Farbfamilie im gesamten Set</li>
        <li>Konsistente Textplatzierung und Hierarchie</li>
        <li>Optional: Erstrecken Sie einen Hintergrund über mehrere Screenshots für einen Panorama-Effekt</li>
      </ul>

      <h2>6. Lokalisieren Sie – der ROI ist enorm</h2>
      <p>
        Wenn Sie mehrere Sprachen unterstützen, sollten Ihre Screenshots das auch tun.
        Übersetzen Sie die Überschriften, nicht nur die Benutzeroberfläche der App.
        Benutzer merken es, wenn der Marketingtext in ihrer Sprache verfasst ist, und
        die Auswirkung variiert je nach Markt, Kategorie und Übersetzungsqualität.
      </p>

      <h2>7. Testen und optimieren</h2>
      <p>
        Apple unterstützt bis zu 10 Screenshots und 3 App-Vorschauen pro
        Lokalisierung. Nutzen Sie alle Plätze. Probieren Sie verschiedene Einstiegs-Screenshots
        aus und messen Sie die Auswirkung auf die Konversionsrate über die App Store Connect
        Analytics.
      </p>
    </>
  );
}

function ContentJa() {
  return (
    <>
      <p>
        多くの人は、App Storeの製品ページが自分に関連があるかどうかを瞬時に判断します。
        多くの場合、スクリーンショットはユーザーがアプリを詳しく見る最初の機会となるため、
        説明文よりも早く価値を伝える必要があります。ここでは、コンバージョン率の高いスクリーンショットセットと、
        印象に残らないセットを分けるポイントを紹介します。
      </p>

      <h2>1. 機能ではなく、結果を前面に出す</h2>
      <p>
        最初のスクリーンショットは、「UIがどうなっているか」ではなく、「このアプリが自分に何をもたらしてくれるか」
        という疑問に答えるものであるべきです。タスクの完了、美しい成果물、問題の解決など、
        最終的な結果を示しましょう。機能の詳細な説明は後回しで構いません。
      </p>
      <p>
        <strong>悪い例：</strong> &quot;サイドバーナビゲーション付きのダッシュボード表示&quot;
        <br />
        <strong>良い例：</strong> &quot;1タップですべての給油記録を追跡&quot;
      </p>

      <h2>2. メリットを伝える短いコピーを使う</h2>
      <p>
        各スクリーンショットに設定する見出しは、1つあたり最大で4〜8語にします。
        ユーザーに語りかける形で書き（&quot;1クリックでスクリーンショットを書き出し&quot;）、
        アプリに含まれる機能ではなく、ユーザーが得られるメリットに焦点を当てます。
      </p>
      <ul>
        <li>最初に読まれるよう、テキストはデバイスフレームの上に配置する</li>
        <li>すべてのスクリーンショットでフォントサイズと配置を統一する</li>
        <li>スクリーンショット1枚につきアイデアは1つに絞り、情報を詰め込みすぎない</li>
      </ul>

      <h2>3. 最初の2枚のスクリーンショットがすべて</h2>
      <p>
        App Storeでは、スクロールせずに表示されるのは最初の2〜3枚のスクリーンショットだけです。
        これらでアプリの核心的な価値を伝えなければなりません。サブ機能（設定、連携、特殊なユースケースなど）は
        4〜10枚目に残しておきましょう。
      </p>

      <h2>4. 実際のデバイスフレームを使用する</h2>
      <p>
        デバイスフレームを使用することで、信頼性と視覚的なまとまりが生まれます。
        背景のない生のスクリーンショットが浮いている状態では、未完成に見えてしまいます。
        ユーザーが実際に使用するデバイス（iPhone, iPad, Macなど）のベゼルにはめ込みましょう。
      </p>
      <p>
        Screenshot Broには、本体カラーを設定できるAppleおよびAndroidデバイスフレームの最新ライブラリが
        用意されているため、フレームを常にブランドにマッチさせることができます。
      </p>

      <h2>5. 一貫したビジュアルシステムをデザインする</h2>
      <p>
        背景のスタイルを1つ決め、所有的なスクリーンショットで統一します。
        グラデーション背景は、デバイスフレームの邪魔をせずに奥行きを表現できるため効果的です。
        ブランドのカラーパレットを使用し、一貫した余白を維持しましょう。
      </p>
      <ul>
        <li>セット全体で同じグラデーションの方向と色系統を使用する</li>
        <li>一貫したテキストの配置と階層</li>
        <li>オプション：複数のスクリーンショットにまたがる1つの背景を使用して、パノラマ効果を演出する</li>
      </ul>

      <h2>6. ローカライズする — 投資対効果（ROI）は絶大</h2>
      <p>
        アプリが複数の言語に対応しているなら、スクリーンショットも対応させるべきです。
        アプリのUIだけでなく、見出しのコピーも翻訳しましょう。
        ユーザーはマーケティングテキストが自分の言語で書かれているかどうかに気づきます。その効果は、
        市場、カテゴリ、および翻訳の品質によって異なります。
      </p>

      <h2>7. テストと改善を繰り返す</h2>
      <p>
        Appleは、ローカライズごとに最大10枚のスクリーンショットと3つのアプリプレビューをサポートしています。
        すべてのスロットを活用しましょう。さまざまなメインのスクリーンショットを試して、
        App Store Connectの分析ツールでコンバージョン率への影響を測定します。
      </p>
    </>
  );
}

function ContentPt() {
  return (
    <>
      <p>
        Muitas pessoas decidem rapidamente se uma página na App Store é relevante.
        As capturas de tela geralmente são o primeiro olhar detalhado que elas têm do aplicativo, por isso
        precisam explicar o valor mais rápido do que a descrição. Aqui está o que separa conjuntos de
        capturas de tela de alta conversão daqueles que são esquecíveis.
      </p>

      <h2>1. Comece com o Resultado, Não com a Funcionalidade</h2>
      <p>
        Sua primeira captura de tela deve responder a &quot;o que este aplicativo faz por mim?&quot;
        — não &quot;como é a interface do usuário&quot;. Mostre o resultado final: uma tarefa concluída, um
        resultado bonito, um problema resolvido. Os detalhes dos recursos vêm depois.
      </p>
      <p>
        <strong>Ruim:</strong> &quot;Visualização do painel com navegação na barra lateral&quot;
        <br />
        <strong>Bom:</strong> &quot;Acompanhe cada abastecimento de combustível com um toque&quot;
      </p>

      <h2>2. Use Textos Curtos e Focados em Benefícios</h2>
      <p>
        Cada captura de tela ganha um título — no máximo 4 a 8 palavras. Escreva na
        segunda pessoa (&quot;Exporte suas capturas de tela em um clique&quot;) e concentre-se no
        que o usuário ganha, não no que o aplicativo contém.
      </p>
      <ul>
        <li>Mantenha o texto acima do frame do dispositivo para que seja lido primeiro</li>
        <li>Use um tamanho de fonte e posição consistentes em todas as capturas de tela</li>
        <li>Uma ideia por captura de tela — não sobrecarregue</li>
      </ul>

      <h2>3. As Duas Primeiras Capturas de Tela São Tudo</h2>
      <p>
        Na App Store, apenas as primeiras 2 a 3 capturas de tela são visíveis sem rolar.
        Elas devem comunicar o valor principal do seu aplicativo. Guarde os
        recursos secundários (configurações, integrações, casos extremos) para as
        posições de 4 a 10.
      </p>

      <h2>4. Use Frames de Dispositivos Reais</h2>
      <p>
        Frames de dispositivos adicionam credibilidade e estrutura visual. Uma captura de tela pura
        flutuando no espaço parece inacabada. Envolva-a na moldura do dispositivo real em que
        os usuários a verão — iPhone, iPad ou Mac.
      </p>
      <p>
        O Screenshot Bro inclui uma biblioteca atualizada de frames de dispositivos Apple e Android
        com cores de corpo configuráveis, para que seus frames sempre combinem com a sua marca.
      </p>

      <h2>5. Desenhe um Sistema Visual Consistente</h2>
      <p>
        Escolha um estilo de fundo e use-o em todas as capturas de tela.
        Fundos com gradiente funcionam bem porque adicionam profundidade sem competir com o
        frame do dispositivo. Use a paleta de cores da sua marca e mantenha um espaçamento
        consistente.
      </p>
      <ul>
        <li>Mesma direção de gradiente e família de cores em todo o conjunto</li>
        <li>Posicionamento e hierarquia de texto consistentes</li>
        <li>Opcional: estenda um fundo por várias capturas de tela para obter um efeito panorâmico</li>
      </ul>

      <h2>6. Localize — o Retorno Sobre o Investimento é Enorme</h2>
      <p>
        Se você oferece suporte a vários idiomas, suas capturas de tela também devem oferecer.
        Traduza o texto do título, não apenas a interface do aplicativo. Os usuários percebem
        quando o texto de marketing está no idioma deles, e o impacto variará de acordo com o
        mercado, categoria e qualidade da tradução.
      </p>

      <h2>7. Teste e Itere</h2>
      <p>
        A Apple suporta até 10 capturas de tela e 3 prévias de aplicativos por localização.
        Use todos os espaços disponíveis. Experimente diferentes capturas de tela principais e
        meça o impacto na taxa de conversão por meio das análises do App Store Connect.
      </p>
    </>
  );
}

function ContentIt() {
  return (
    <>
      <p>
        Molte persone decidono rapidamente se una scheda dell&apos;App Store è rilevante.
        Gli screenshot sono spesso il primo sguardo dettagliato che danno all&apos;app, quindi
        devono spiegare il valore più velocemente di quanto possa fare la descrizione. Ecco
        cosa distingue i set di screenshot ad alta conversione da quelli facilmente dimenticabili.
      </p>

      <h2>1. Inizia con il risultato, non con la funzionalità</h2>
      <p>
        Il tuo primo screenshot dovrebbe rispondere alla domanda &quot;cosa fa questa app per me?&quot;
        — e non &quot;com&apos;è l&apos;interfaccia utente&quot;. Mostra il risultato finale: un&apos;attività completata, un
        output straordinario, un problema risolto. I dettagli della funzionalità verranno dopo.
      </p>
      <p>
        <strong>Negativo:</strong> &quot;Vista dashboard con navigazione laterale&quot;
        <br />
        <strong>Positivo:</strong> &quot;Traccia ogni rifornimento con un solo tocco&quot;
      </p>

      <h2>2. Usa testi brevi e focalizzati sui vantaggi</h2>
      <p>
        Ogni screenshot ha un solo titolo — al massimo da 4 a 8 parole. Scrivi in seconda
        persona (&quot;Esporta i tuoi screenshot in un clic&quot;) e concentrati su ciò che
        l&apos;utente ottiene, non su ciò che l&apos;app contiene.
      </p>
      <ul>
        <li>Mantieni il testo sopra il frame del dispositivo in modo che venga letto per primo</li>
        <li>Usa dimensioni del carattere e posizione coerenti in tutti gli screenshot</li>
        <li>Un&apos;idea per screenshot: non sovraccaricare</li>
      </ul>

      <h2>3. I primi due screenshot sono tutto</h2>
      <p>
        Sull&apos;App Store, solo i primi 2-3 screenshot sono visibili senza scorrere.
        Questi devono comunicare il valore principale della tua app. Salva le
        funzionalità secondarie (impostazioni, integrazioni, casi limite) per le
        posizioni da 4 a 10.
      </p>

      <h2>4. Usa frame di dispositivi reali</h2>
      <p>
        I frame del dispositivo aggiungono credibilità e struttura visiva. Uno screenshot grezzo
        fluttuante nello spazio sembra incompleto. Inseriscilo nella cornice del dispositivo
        reale su cui i tuoi utenti lo vedranno: iPhone, iPad o Mac.
      </p>
      <p>
        Screenshot Bro include una libreria aggiornata di frame di dispositivi Apple and Android
        con colori della scocca configurabili, in modo che i tuoi frame si abbinino sempre al tuo brand.
      </p>

      <h2>5. Progetta un sistema visivo coerente</h2>
      <p>
        Scegli uno stile di sfondo e mantienilo in tutti gli screenshot.
        Gli sfondi sfumati funzionano bene perché aggiungono profondità senza competere con il
        frame del dispositivo. Usa la tavolozza dei colori del tuo brand e mantieni una spaziatura
        coerente.
      </p>
      <ul>
        <li>Stessa direzione della sfumatura e famiglia di colori in tutto il set</li>
        <li>Posizionamento e gerarchia del testo coerenti</li>
        <li>Opzionale: estendi un singolo sfondo su più screenshot per un effetto panoramico</li>
      </ul>

      <h2>6. Localizza: il ROI è enorme</h2>
      <p>
        Se supporti più lingue, anche i tuoi screenshot dovrebbero farlo.
        Traduci i testi dei titoli, non solo l&apos;interfaccia utente dell&apos;app. Gli utenti notano
        quando il testo di marketing è nella loro lingua, e l&apos;impatto varierà in base al
        mercato, alla categoria e alla qualità della traduzione.
      </p>

      <h2>7. Testa e migliora</h2>
      <p>
        Apple supporta fino a 10 screenshot e 3 anteprime dell&apos;app per localizzazione.
        Usa tutti gli slot a disposizione. Prova diversi screenshot principali e misura l&apos;impatto
        sul tasso di conversione tramite le statistiche di App Store Connect.
      </p>
    </>
  );
}

function ContentKo() {
  return (
    <>
      <p>
        많은 사용자가 App Store의 제품 페이지가 자신에게 유용한지 빠르게 결정합니다.
        스크린샷은 대개 앱을 자세히 들여다보는 첫 번째 기회이므로, 텍스트 설명보다 빠르게 핵심 가치를
        전달해야 합니다. 높은 전환율을 기록하는 스크린샷 세트와 쉽게 잊혀지는 세트를 구분하는
        차이점은 다음과 같습니다.
      </p>

      <h2>1. 기능이 아닌 결과를 먼저 제시하세요</h2>
      <p>
        첫 번째 스크린샷은 &quot;UI가 어떻게 생겼는지&quot;가 아니라 &quot;이 앱이 나에게 어떤 가치를 제공하는지&quot;에
        대한 답을 보여주어야 합니다. 완료된 작업, 아름다운 결과물, 해결된 문제 등 최종 결과물을
        보여주세요. 기능의 세부 정보는 나중에 나와도 늦지 않습니다.
      </p>
      <p>
        <strong>나쁨:</strong> &quot;사이드바 탐색 기능이 있는 대시보드 뷰&quot;
        <br />
        <strong>좋음:</strong> &quot;원터치로 모든 주유 기록 추적&quot;
      </p>

      <h2>2. 혜택 중심의 짧은 문구를 사용하세요</h2>
      <p>
        각 스크린샷에는 하나의 헤드라인(최대 4~8단어)만 사용하세요. 사용자 입장에서 작성하고
        (&quot;원클릭으로 스크린샷 내보내기&quot;) 앱에 어떤 기능이 포함되어 있는지보다 사용자가 무엇을
        얻을 수 있는지에 집중하세요.
      </p>
      <ul>
        <li>사용자가 가장 먼저 읽을 수 있도록 텍스트를 기기 프레임 위에 배치하세요</li>
        <li>모든 스크린샷에 걸쳐 일관된 글꼴 크기와 위치를 유지하세요</li>
        <li>스크린샷 한 장당 하나의 핵심 아이디어만 담고 정보 과부하를 피하세요</li>
      </ul>

      <h2>3. 처음 두 장의 스크린샷이 승패를 가릅니다</h2>
      <p>
        App Store에서는 화면을 스크롤하지 않고도 보이는 스크린샷은 처음 2~3장에 불과합니다.
        이 스크린샷들이 앱의 핵심 가치를 반드시 전달해야 합니다. 부차적인 기능(설정,
        연동, 특수 사례 등)은 4~10번째 자리로 배치하세요.
      </p>

      <h2>4. 실제 기기 프레임을 사용하세요</h2>
      <p>
        기기 프레임은 시각적 구조와 신뢰도를 높여줍니다. 공중에 떠 있는 듯한 가공되지 않은
        스크린샷은 미완성된 것처럼 보입니다. 사용자가 실제로 앱을 사용하게 될 기기(iPhone, iPad,
        Mac)의 베젤로 감싸세요.
      </p>
      <p>
        Screenshot Bro는 기기 본체 색상을 자유롭게 구성할 수 있는 최신 Apple 및 Android 기기
        프레임 라이브러리를 제공하므로, 프레임을 항상 브랜드 이미지에 맞게 일치시킬 수 있습니다.
      </p>

      <h2>5. 일관성 있는 시각 시스템을 디자인하세요</h2>
      <p>
        하나의 배경 스타일을 선택하고 모든 스크린샷에 동일하게 적용하세요.
        그라디언트 배경은 기기 프레임과 충돌하지 않으면서 깊이감을 더해주므로 효과적입니다.
        브랜드의 컬러 팔레트를 사용하고 일관된 간격을 유지하세요.
      </p>
      <ul>
        <li>전체 세트에서 동일한 그라디언트 방향과 색상 계열 적용</li>
        <li>일관된 텍스트 위치 및 계층 구조</li>
        <li>선택 사항: 여러 스크린샷에 걸쳐 하나의 배경을 연결하여 파노라마 효과 연출</li>
      </ul>

      <h2>6. 로컬라이즈하세요 — ROI가 엄청납니다</h2>
      <p>
        앱이 여러 언어를 지원한다면 스크린샷도 동일하게 지원해야 합니다.
        앱 UI뿐만 아니라 헤드라인 문구도 번역하세요. 사용자는 마케팅 문구가 자신들의
        언어로 작성되어 있는지 쉽게 알아채며, 그 효과는 시장, 카테고리, 그리고 번역
        품질에 따라 크게 달라집니다.
      </p>

      <h2>7. 테스트하고 반복 개선하세요</h2>
      <p>
        Apple은 언어별로 최대 10장의 스크린샷과 3개의 앱 미리보기를 지원합니다. 모든
        슬롯을 활용해 보세요. 다양한 대표 스크린샷을 시도하고 App Store Connect 분석
        데이터를 통해 전환율에 미치는 영향을 측정하세요.
      </p>
    </>
  );
}
