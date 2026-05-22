import type { Route } from "./+types/blog.ab-test-app-store-screenshots";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { data, useLoaderData } from "react-router";
import { isLocaleCode, type LocaleCode } from "~/config/localization";

const SLUG = "ab-test-app-store-screenshots";

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

        <BlogCTA
          message={getCTAMessage(locale)}
          buttonLabel={getCTAButtonLabel(locale)}
        />
        <RelatedPosts currentSlug={SLUG} locale={locale} />
      </div>
    </ContentLayout>
  );
}

function getCTAMessage(locale: LocaleCode): string {
  switch (locale) {
    case "es":
      return "Crea variantes de capturas de pantalla sin duplicar todo tu flujo de trabajo.";
    case "zh":
      return "无需复制整个工作流即可创建屏幕截图变体。";
    case "hi":
      return "अपने संपूर्ण वर्कफ़्लो को डुप्लिकेट किए बिना स्क्रीनशॉट वेरिएंट बनाएं।";
    case "fr":
      return "Créez des variantes de captures d'écran sans dupliquer l'intégralité de votre flux de travail.";
    case "ar":
      return "أنشئ بدائل للقطات الشاشة دون تكرار سير العمل بأكمله.";
    default:
      return "Create screenshot variants without duplicating your whole workflow.";
  }
}

function getCTAButtonLabel(locale: LocaleCode): string {
  switch (locale) {
    case "es":
      return "Descargar Screenshot Bro";
    case "zh":
      return "下载 Screenshot Bro";
    case "hi":
      return "डाउनलोड करें Screenshot Bro";
    case "fr":
      return "Télécharger Screenshot Bro";
    case "ar":
      return "تنزيل Screenshot Bro";
    default:
      return "Download Screenshot Bro";
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
        Screenshots are one of the easiest App Store assets to change, but
        one of the hardest to judge by opinion. A/B testing gives you a way
        to compare screenshot ideas against real store traffic instead of
        arguing about which version looks better in a design file.
      </p>
      <p>
        Apple and Google both support store listing experiments. Apple calls
        its system{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Product Page Optimization
        </a>
        . Google calls its system{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          Store Listing Experiments
        </a>
        . The mechanics are different, but the screenshot strategy is the
        same: test one clear hypothesis at a time.
      </p>

      <h2>What You Can Test</h2>
      <p>
        On the App Store, Product Page Optimization lets you test up to
        three alternate product page versions against your original. Apple
        says you can test app icons, screenshots, and app preview videos,
        then view results in App Analytics and apply the best-performing
        version.
      </p>
      <p>
        On Google Play, Store Listing Experiments can test graphic assets
        such as icons, feature graphics, screenshots, and promo videos.
        Localized experiments can also test text fields such as short and
        full descriptions. Google says each app can run one default graphics
        experiment or up to five localized experiments at the same time.
      </p>

      <h2>Good Screenshot Test Ideas</h2>
      <ul>
        <li>
          <strong>Outcome-first vs feature-first:</strong> lead with the
          user benefit, or lead with the product UI.
        </li>
        <li>
          <strong>Different first screenshot:</strong> test the opening
          screenshot because it carries the most first-impression weight.
        </li>
        <li>
          <strong>Plain UI vs framed UI:</strong> test raw interface
          screenshots against device-framed marketing screenshots.
        </li>
        <li>
          <strong>Short headline vs specific headline:</strong> compare
          emotional clarity against concrete feature detail.
        </li>
        <li>
          <strong>Localized concept:</strong> test whether a market-specific
          feature or phrase performs better for one locale.
        </li>
      </ul>

      <h2>What Not to Test First</h2>
      <p>
        Do not change every screenshot, headline, background, and feature
        order at once unless you only care which complete set wins. If the
        variant performs better, you will not know why. For indie apps with
        limited traffic, that wastes useful signal.
      </p>
      <p>
        Start with one high-impact change: the first screenshot, the first
        headline, the main visual style, or the feature order. Once you have
        a winner, use it as the new baseline.
      </p>

      <h2>How to Run the Test on the App Store</h2>
      <ol>
        <li>Create a clean screenshot variant with the same store sizes as your current listing.</li>
        <li>Open App Store Connect and create a Product Page Optimization test.</li>
        <li>Choose up to three treatments and decide how much traffic enters the test.</li>
        <li>Keep the test name descriptive so you can understand it later in App Analytics.</li>
        <li>Wait for enough data before applying a winner.</li>
      </ol>
      <p>
        Apple notes that people selected for a treatment see the same
        treatment for the duration of the test. Alternate screenshots and
        app previews may appear in search results and other App Store
        surfaces, just like your original assets.
      </p>

      <h2>How to Run the Test on Google Play</h2>
      <ol>
        <li>Open Play Console and go to Store presence, then Store listing experiments.</li>
        <li>Create a default graphics experiment or a localized experiment.</li>
        <li>Select the target metric, audience, variants, and minimum detectable effect.</li>
        <li>Test one attribute at a time when possible.</li>
        <li>Review the result and apply the winning variant or keep the current listing.</li>
      </ol>
      <p>
        Google recommends retained first-time installers as a target metric.
        It also warns that users who are not logged in to Google Play will
        not see experimental variants.
      </p>

      <h2>How Much Traffic Do You Need?</h2>
      <p>
        There is no universal number. Low-traffic apps need more time, and
        tiny visual differences need more traffic to detect. If your app
        gets limited store visits, test bigger differences: a clearer first
        screenshot, a new value proposition, or a localized angle.
      </p>
      <p>
        Treat inconclusive results as information. They may mean the change
        was too small, the audience was too small, or both versions were
        roughly equivalent.
      </p>

      <h2>A Practical Screenshot Testing Checklist</h2>
      <ul>
        <li>Write one hypothesis before designing the variant.</li>
        <li>Change one major idea per test.</li>
        <li>Use valid App Store and Google Play screenshot dimensions.</li>
        <li>Keep localization consistent between control and variant.</li>
        <li>Do not stop a test just because early numbers look exciting.</li>
        <li>Document what changed so the next test starts from real learning.</li>
      </ul>

      <h2>Where Screenshot Bro Fits</h2>
      <p>
        A/B testing creates screenshot variants. That is exactly where
        manual workflows get messy: duplicate Figma files, renamed PNGs,
        locale folders, and repeated exports. <a href="/">Screenshot Bro</a>{" "}
        helps you keep screenshot sets structured so you can create
        variants, localize them, and export the right files without losing
        the baseline.
      </p>
      <p>
        If you are still designing variants by hand, read{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          How to Design App Store Screenshots in Figma
        </a>{" "}
        and then compare that workflow with a dedicated{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          app store screenshot tool
        </a>
        .
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Las capturas de pantalla son uno de los elementos de la App Store más fáciles de cambiar, pero uno de los más difíciles de juzgar basándose en opiniones. Las pruebas A/B te ofrecen una forma de comparar ideas de capturas de pantalla con el tráfico real de la tienda, en lugar de discutir sobre qué versión se ve mejor en un archivo de diseño.
      </p>
      <p>
        Tanto Apple como Google admiten experimentos con fichas de la tienda. Apple llama a su sistema{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Optimización de la página del producto
        </a>
        . Google llama a su sistema{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          Experimentos con fichas de tienda
        </a>
        . La mecánica es diferente, pero la estrategia de capturas de pantalla es la misma: probar una hipótesis clara a la vez.
      </p>

      <h2>Qué puedes probar</h2>
      <p>
        En la App Store, la Optimización de la página del producto te permite probar hasta tres versiones alternativas de la página del producto frente a la original. Apple indica que puedes probar iconos de aplicaciones, capturas de pantalla y videos de vista previa de la aplicación, para luego ver los resultados en App Analytics y aplicar la versión con mejor rendimiento.
      </p>
      <p>
        En Google Play, los experimentos con fichas de tienda pueden probar recursos gráficos como iconos, gráficos de funciones, capturas de pantalla y videos promocionales. Los experimentos localizados también pueden probar campos de texto como descripciones cortas y completas. Google señala que cada aplicación puede ejecutar un experimento gráfico predeterminado o hasta cinco experimentos localizados al mismo tiempo.
      </p>

      <h2>Buenas ideas para pruebas de capturas de pantalla</h2>
      <ul>
        <li>
          <strong>Basado en resultados frente a basado en funciones:</strong> liderar con el beneficio para el usuario o liderar con la interfaz de usuario del producto.
        </li>
        <li>
          <strong>Primera captura de pantalla diferente:</strong> probar la captura inicial porque es la que tiene mayor peso en la primera impresión.
        </li>
        <li>
          <strong>Interfaz simple frente a interfaz enmarcada:</strong> probar capturas de pantalla de la interfaz sin adornos frente a capturas de marketing con marcos de dispositivos.
        </li>
        <li>
          <strong>Titular corto frente a titular específico:</strong> comparar la claridad emocional con los detalles concretos de las funciones.
        </li>
        <li>
          <strong>Concepto localizado:</strong> probar si una función o frase específica de un mercado funciona mejor para una localidad determinada.
        </li>
      </ul>

      <h2>Qué no probar primero</h2>
      <p>
        No cambies todas las capturas de pantalla, titulares, fondos y el orden de las funciones a la vez, a menos que solo te interese saber qué conjunto completo resulta ganador. Si la variante funciona mejor, no sabrás por qué. Para las aplicaciones independientes con tráfico limitado, esto supone desperdiciar una señal muy útil.
      </p>
      <p>
        Comienza con un único cambio de gran impacto: la primera captura de pantalla, el primer titular, el estilo visual principal o el orden de las funciones. Una vez que tengas un ganador, utilízalo como la nueva base de referencia.
      </p>

      <h2>Cómo ejecutar la prueba en la App Store</h2>
      <ol>
        <li>Crea una variante de captura de pantalla limpia con los mismos tamaños de tienda que tu ficha actual.</li>
        <li>Abre App Store Connect y crea una prueba de Optimización de la página del producto.</li>
        <li>Elige hasta tres tratamientos y decide qué cantidad de tráfico entra en la prueba.</li>
        <li>Usa un nombre descriptivo para la prueba para poder entenderla más tarde en App Analytics.</li>
        <li>Espera a tener suficientes datos antes de aplicar la versión ganadora.</li>
      </ol>
      <p>
        Apple señala que las personas seleccionadas para un tratamiento verán ese mismo tratamiento durante toda la duración de la prueba. Las capturas de pantalla alternativas y los videos de vista previa pueden aparecer en los resultados de búsqueda y otras secciones de la App Store, de la misma forma que tus recursos originales.
      </p>

      <h2>Cómo ejecutar la prueba en Google Play</h2>
      <ol>
        <li>Abre Play Console y ve a Presencia en Play Store y, a continuación, a Experimentos con fichas de tienda.</li>
        <li>Crea un experimento gráfico predeterminado o un experimento localizado.</li>
        <li>Selecciona la métrica objetivo, el público, las variantes y el efecto mínimo detectable.</li>
        <li>Prueba un atributo a la vez siempre que sea posible.</li>
        <li>Revisa el resultado y aplica la variante ganadora o mantén la ficha actual.</li>
      </ol>
      <p>
        Google recomienda usar los instaladores nuevos retenidos como métrica objetivo. También advierte que los usuarios que no hayan iniciado sesión en Google Play no verán las variantes experimentales.
      </p>

      <h2>¿Cuánto tráfico necesitas?</h2>
      <p>
        No existe un número universal. Las aplicaciones con poco tráfico necesitan más tiempo, y las pequeñas diferencias visuales requieren más tráfico para ser detectadas. Si tu aplicación recibe visitas limitadas en la tienda, prueba diferencias más grandes: una primera captura de pantalla más clara, una nueva propuesta de valor o un enfoque localizado.
      </p>
      <p>
        Considera los resultados no concluyentes como información útil. Pueden significar que el cambio era demasiado pequeño, que la audiencia era demasiado reducida o que ambas versiones eran prácticamente equivalentes.
      </p>

      <h2>Lista de verificación práctica para pruebas de capturas</h2>
      <ul>
        <li>Escribe una hipótesis antes de diseñar la variante.</li>
        <li>Cambia una sola idea principal por prueba.</li>
        <li>Utiliza dimensiones de captura de pantalla válidas para la App Store y Google Play.</li>
        <li>Mantén la localización consistente entre el control y la variante.</li>
        <li>No detengas una prueba solo porque los primeros números parezcan prometedores.</li>
        <li>Documenta qué ha cambiado para que la siguiente prueba parta de un aprendizaje real.</li>
      </ul>

      <h2>Dónde encaja Screenshot Bro</h2>
      <p>
        Las pruebas A/B requieren la creación de variantes de capturas de pantalla. Ahí es exactamente donde los flujos de trabajo manuales se vuelven caóticos: archivos de Figma duplicados, archivos PNG renombrados, carpetas de idiomas y exportaciones repetidas. <a href="/">Screenshot Bro</a> te ayuda a mantener estructurados tus conjuntos de capturas de pantalla para que puedas crear variantes, localizarlas y exportar los archivos correctos sin perder la referencia inicial.
      </p>
      <p>
        Si todavía diseñas las variantes a mano, lee{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          Cómo diseñar capturas de la App Store en Figma
        </a>{" "}
        y luego compara ese flujo de trabajo con una{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          herramienta dedicada para capturas de la app store
        </a>
        .
      </p>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        屏幕截图是应用商店中最容易更改的资产之一，但也是最难仅凭主观意见做出评判的资产之一。A/B 测试为您提供了一种将截图创意与真实商店流量进行对比的方法，而不是争论设计文件中哪个版本看起来更好。
      </p>
      <p>
        Apple 和 Google 都支持应用商店详情实验。Apple 将其系统称为{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          产品页面优化 (Product Page Optimization)
        </a>
        。Google 将其系统称为{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          商品详情实验 (Store Listing Experiments)
        </a>
        。两者的运行机制有所不同，但截图策略是相同的：一次只测试一个明确的假设。
      </p>

      <h2>您可以测试什么</h2>
      <p>
        在 App Store 上，产品页面优化允许您测试最多三个替代版本的商品页与原始页面的对比。Apple 表示，您可以测试应用图标、屏幕截图和 App 预览视频，然后在 App 分析中查看结果并应用表现最佳的版本。
      </p>
      <p>
        在 Google Play 上，商品详情实验可以测试图形资产，例如图标、置顶大图、屏幕截图和推广视频。本地化实验还可以测试文本字段，例如简短描述和完整描述。Google 表示，每个应用可以同时运行一个默认图形实验或最多五个本地化实验。
      </p>

      <h2>好的屏幕截图测试创意</h2>
      <ul>
        <li>
          <strong>结果导向 vs 功能导向：</strong> 以用户获益为主导，还是以产品 UI 为主导。
        </li>
        <li>
          <strong>首张截图差异化：</strong> 测试第一张截图，因为它承载了最多的第一印象权重。
        </li>
        <li>
          <strong>纯 UI 界面 vs 带框 UI 界面：</strong> 测试无修饰的原始界面截图与带设备外框的营销截图的对比效果。
        </li>
        <li>
          <strong>短标题 vs 具体标题：</strong> 比较情感上的清晰表达与具体功能的详细描述之间的效果。
        </li>
        <li>
          <strong>本地化概念：</strong> 测试针对特定市场的特定功能或用词是否在某一地区表现更好。
        </li>
      </ul>

      <h2>不要首先测试什么</h2>
      <p>
        不要一次性更改所有的屏幕截图、标题、背景和功能顺序，除非您只关心哪个完整套件胜出。如果变体表现更好，您将无法得知原因。对于流量有限的独立应用来说，这会浪费有用的分析信号。
      </p>
      <p>
        从一个高影响力的更改开始：第一张截图、第一个标题、主视觉风格或功能顺序。一旦有了胜出者，就将其作为新的基准线。
      </p>

      <h2>如何在 App Store 上运行测试</h2>
      <ol>
        <li>创建一个干净的屏幕截图变体，其尺寸与您当前应用商店详情页的尺寸相同。</li>
        <li>打开 App Store Connect 并创建一个产品页面优化测试。</li>
        <li>选择最多三个处理方案，并决定有多少流量参与测试。</li>
        <li>保持测试名称具有描述性，以便日后在 App 分析中轻松理解。</li>
        <li>在应用胜出者之前，等待收集到足够的数据。</li>
      </ol>
      <p>
        Apple 指出，被分配到某个处理方案的用户在测试期间会一直看到该方案。备用的屏幕截图和 App 预览可能会像您的原始资产一样，出现在搜索结果和其他 App Store 界面中。
      </p>

      <h2>如何在 Google Play 上运行测试</h2>
      <ol>
        <li>打开 Play Console，前往“应用展示”，然后选择“商品详情实验”。</li>
        <li>创建一个默认图形实验或本地化实验。</li>
        <li>选择目标指标、受众群体、变体以及最小可检测效果。</li>
        <li>尽可能一次只测试一个属性。</li>
        <li>评估测试结果，应用胜出的变体或保留当前的详情页。</li>
      </ol>
      <p>
        Google 推荐将“留存的新安装用户数”作为目标指标。它同时警告称，未登录 Google Play 的用户将无法看到实验变体。
      </p>

      <h2>您需要多少流量？</h2>
      <p>
        这没有一个通用的数字。流量较低的应用需要更多时间，而微小的视觉差异则需要更多的流量才能检测出来。如果您的应用商店访问量有限，请测试更显著的差异：更清晰的第一张截图、全新的价值主张或本地化切入点。
      </p>
      <p>
        将无结论的测试结果也视为有用的信息。它们可能意味着更改幅度太小、受众规模太小，或者两个版本实际上效果相当。
      </p>

      <h2>实用的屏幕截图测试清单</h2>
      <ul>
        <li>在设计变体之前写下一个假设。</li>
        <li>每次测试只更改一个主要想法。</li>
        <li>使用符合 App Store 和 Google Play 要求的屏幕截图尺寸。</li>
        <li>保持对照组和变体之间的本地化内容一致。</li>
        <li>不要仅仅因为早期数据看起来令人兴奋就停止测试。</li>
        <li>记录更改的内容，以便下一次测试能从真正的经验中开始。</li>
      </ul>

      <h2>Screenshot Bro 的作用</h2>
      <p>
        A/B 测试需要创建屏幕截图变体。这正是手动工作流变得混乱的地方：重复的 Figma 文件、重新命名的 PNG、本地化文件夹以及重复的导出操作。<a href="/">Screenshot Bro</a> 帮助您保持屏幕截图集的结构化，以便您可以创建变体、进行本地化并导出正确的文件，而不会丢失原始基准。
      </p>
      <p>
        如果您仍在手动设计变体，请阅读{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          如何在 Figma 中设计 App Store 截图
        </a>{" "}
        然后将该工作流与专用的{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          应用商店截图工具
        </a>{" "}
        进行对比。
      </p>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        स्क्रीनशॉट ऐप स्टोर की उन संपत्तियों में से हैं जिन्हें बदलना सबसे आसान है, लेकिन राय के आधार पर उनका मूल्यांकन करना सबसे कठिन है। ए/बी परीक्षण आपको डिजाइन फ़ाइल में कौन सा संस्करण बेहतर दिखता है, इस पर बहस करने के बजाय वास्तविक स्टोर ट्रैफ़िक के विरुद्ध स्क्रीनशॉट विचारों की तुलना करने का एक तरीका देता है।
      </p>
      <p>
        Apple और Google दोनों स्टोर लिस्टिंग प्रयोगों का समर्थन करते हैं। Apple अपने सिस्टम को{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          उत्पाद पृष्ठ अनुकूलन (Product Page Optimization)
        </a>{" "}
        कहता है। Google अपने सिस्टम को{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          स्टोर लिस्टिंग प्रयोग (Store Listing Experiments)
        </a>{" "}
        कहता है। कार्यप्रणाली अलग है, लेकिन स्क्रीनशॉट रणनीति वही है: एक समय में एक स्पष्ट परिकल्पना का परीक्षण करें।
      </p>

      <h2>आप क्या परीक्षण कर सकते हैं</h2>
      <p>
        ऐप स्टोर पर, उत्पाद पृष्ठ अनुकूलन (Product Page Optimization) आपको अपने मूल पृष्ठ के विरुद्ध अधिकतम तीन वैकल्पिक उत्पाद पृष्ठ संस्करणों का परीक्षण करने देता है। Apple का कहना है कि आप ऐप आइकन, स्क्रीनशॉट और ऐप पूर्वावलोकन वीडियो का परीक्षण कर सकते हैं, फिर ऐप एनालिटिक्स में परिणाम देख सकते हैं और सर्वोत्तम प्रदर्शन करने वाले संस्करण को लागू कर सकते हैं।
      </p>
      <p>
        Google Play पर, स्टोर लिस्टिंग प्रयोग आइकन, फीचर ग्राफ़िक्स, स्क्रीनशॉट और प्रोमो वीडियो जैसी ग्राफ़िक संपत्तियों का परीक्षण कर सकते हैं। स्थानीयकृत प्रयोग लघु और पूर्ण विवरण जैसे टेक्स्ट फ़ील्ड का भी परीक्षण कर सकते हैं। Google का कहना है कि प्रत्येक ऐप एक ही समय में एक डिफ़ॉल्ट ग्राफ़िक्स प्रयोग या पांच तक स्थानीयकृत प्रयोग चला सकता है।
      </p>

      <h2>स्क्रीनशॉट परीक्षण के लिए अच्छे विचार</h2>
      <ul>
        <li>
          <strong>परिणाम-प्रथम बनाम विशेषता-प्रथम:</strong> उपयोगकर्ता के लाभ को आगे रखें, या उत्पाद यूआई को आगे रखें।
        </li>
        <li>
          <strong>अलग पहला स्क्रीनशॉट:</strong> पहले स्क्रीनशॉट का परीक्षण करें क्योंकि यह पहली छाप का सबसे अधिक भार वहन करता है।
        </li>
        <li>
          <strong>सादा यूआई बनाम फ़्रेमयुक्त यूआई:</strong> डिवाइस-फ़्रेमयुक्त मार्केटिंग स्क्रीनशॉट के विरुद्ध कच्चे इंटरफ़ेस स्क्रीनशॉट का परीक्षण करें।
        </li>
        <li>
          <strong>लघु हेडलाइन बनाम विशिष्ट हेडलाइन:</strong> ठोस विशेषता विवरण के विरुद्ध भावनात्मक स्पष्टता की तुलना करें।
        </li>
        <li>
          <strong>स्थानीयकृत अवधारणा:</strong> परीक्षण करें कि क्या बाजार-विशिष्ट सुविधा या वाक्यांश किसी एक स्थान (locale) के लिए बेहतर प्रदर्शन करता है।
        </li>
      </ul>

      <h2>पहले किसका परीक्षण न करें</h2>
      <p>
        एक साथ हर स्क्रीनशॉट, हेडलाइन, बैकग्राउंड और फ़ीचर ऑर्डर को न बदलें जब तक कि आपको केवल यह परवाह न हो कि कौन सा पूरा सेट जीतता है। यदि वेरिएंट बेहतर प्रदर्शन करता है, तो आपको पता नहीं चलेगा कि क्यों। सीमित ट्रैफ़िक वाले इंडी ऐप्स के लिए, यह उपयोगी संकेतों को बर्बाद करता है।
      </p>
      <p>
        एक उच्च-प्रभाव वाले बदलाव से शुरुआत करें: पहला स्क्रीनशॉट, पहली हेडलाइन, मुख्य विज़ुअल शैली, या सुविधाओं का क्रम। एक बार जब आपके पास विजेता आ जाए, तो इसे नए आधार रेखा (baseline) के रूप में उपयोग करें।
      </p>

      <h2>App Store पर परीक्षण कैसे चलाएं</h2>
      <ol>
        <li>अपनी वर्तमान लिस्टिंग के समान स्टोर आकारों के साथ एक साफ़ स्क्रीनशॉट वेरिएंट बनाएं।</li>
        <li>App Store Connect खोलें और उत्पाद पृष्ठ अनुकूलन (Product Page Optimization) परीक्षण बनाएं।</li>
        <li>अधिकतम तीन उपचार (treatments) चुनें और तय करें कि परीक्षण में कितना ट्रैफ़िक प्रवेश करेगा।</li>
        <li>परीक्षण का नाम विवरणात्मक रखें ताकि आप इसे बाद में ऐप एनालिटिक्स में समझ सकें।</li>
        <li>विजेता को लागू करने से पहले पर्याप्त डेटा की प्रतीक्षा करें।</li>
      </ol>
      <p>
        Apple नोट करता है कि किसी उपचार (treatment) के लिए चुने गए लोग परीक्षण की अवधि के लिए वही उपचार देखते हैं। वैकल्पिक स्क्रीनशॉट और ऐप पूर्वावलोकन खोज परिणामों और अन्य ऐप स्टोर सतहों पर दिखाई दे सकते हैं, ठीक आपकी मूल संपत्तियों की तरह।
      </p>

      <h2>Google Play पर परीक्षण कैसे चलाएं</h2>
      <ol>
        <li>Play Console खोलें और Store presence पर जाएं, फिर Store listing experiments पर जाएं।</li>
        <li>एक डिफ़ॉल्ट ग्राफ़िक्स प्रयोग या एक स्थानीयकृत प्रयोग बनाएं।</li>
        <li>लक्षित मीट्रिक, ऑडियंस, वेरिएंट और न्यूनतम पहचान योग्य प्रभाव का चयन करें।</li>
        <li>जब संभव हो तो एक समय में एक विशेषता का परीक्षण करें।</li>
        <li>परिणाम की समीक्षा करें और विजेता वेरिएंट लागू करें या वर्तमान लिस्टिंग रखें।</li>
      </ol>
      <p>
        Google लक्षित मीट्रिक के रूप में रिटेन किए गए पहली बार के इंस्टॉलरों (retained first-time installers) की सिफारिश करता है। यह यह भी चेतावनी देता है कि जो उपयोगकर्ता Google Play में लॉग इन नहीं हैं वे प्रयोगात्मक वेरिएंट नहीं देखेंगे।
      </p>

      <h2>आपको कितने ट्रैफ़िक की आवश्यकता है?</h2>
      <p>
        कोई सार्वभौमिक संख्या नहीं है। कम ट्रैफ़िक वाले ऐप्स को अधिक समय की आवश्यकता होती है, और छोटे दृश्य अंतरों का पता लगाने के लिए अधिक ट्रैफ़िक की आवश्यकता होती है। यदि आपके ऐप को सीमित स्टोर विज़िट मिलती हैं, तो बड़े अंतरों का परीक्षण करें: एक स्पष्ट पहला स्क्रीनशॉट, एक नया मूल्य प्रस्ताव, या एक स्थानीयकृत दृष्टिकोण।
      </p>
      <p>
        अनिर्णीत परिणामों को जानकारी के रूप में मानें। उनका मतलब यह हो सकता है कि बदलाव बहुत छोटा था, दर्शक बहुत कम थे, या दोनों संस्करण लगभग समान थे।
      </p>

      <h2>एक व्यावहारिक स्क्रीनशॉट परीक्षण चेकलिस्ट</h2>
      <ul>
        <li>वेरिएंट डिजाइन करने से पहले एक परिकल्पना लिखें।</li>
        <li>प्रति परीक्षण एक प्रमुख विचार बदलें।</li>
        <li>वैध ऐप स्टोर और Google Play स्क्रीनशॉट आयामों का उपयोग करें।</li>
        <li>नियंत्रण (control) और वेरिएंट के बीच स्थानीयकरण को सुसंगत रखें।</li>
        <li>केवल इसलिए परीक्षण न रोकें क्योंकि शुरुआती आंकड़े रोमांचक लग रहे हैं।</li>
        <li>दस्तावेज़ करें कि क्या बदला है ताकि अगला परीक्षण वास्तविक सीख से शुरू हो।</li>
      </ul>

      <h2>Screenshot Bro कहाँ उपयुक्त बैठता है</h2>
      <p>
        ए/बी परीक्षण स्क्रीनशॉट वेरिएंट बनाता है। यहीं पर मैन्युअल वर्कफ़्लो गड़बड़ा जाता है: डुप्लिकेट फिग्मा फाइलें, रीनेम की गई PNGs, लोकेल फ़ोल्डर, और बार-बार निर्यात करना। <a href="/">Screenshot Bro</a> आपको स्क्रीनशॉट सेट को संरचित रखने में मदद करता है ताकि आप बेसलाइन को खोए बिना वेरिएंट बना सकें, उन्हें स्थानीयकृत कर सकें और सही फ़ाइलें निर्यात कर सकें।
      </p>
      <p>
        यदि आप अभी भी हाथ से वेरिएंट डिज़ाइन कर रहे हैं, तो पढ़ें{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          Figma में App Store स्क्रीनशॉट कैसे डिज़ाइन करें
        </a>{" "}
        और फिर उस वर्कफ़्लो की तुलना एक समर्पित{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          ऐप स्टोर स्क्रीनशॉट टूल
        </a>{" "}
        से करें।
      </p>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        Les captures d&apos;écran sont l&apos;un des éléments de l&apos;App Store les plus faciles à modifier, mais aussi l&apos;un des plus difficiles à évaluer de manière subjective. Les tests A/B vous permettent de comparer vos idées de captures d&apos;écran à un trafic réel sur la boutique, plutôt que de débattre pour savoir quelle version est la plus réussie sur un fichier de conception.
      </p>
      <p>
        Apple et Google prennent tous deux en charge les expériences de fiche produit. Apple appelle son système{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Optimisation de la page produit
        </a>
        . Google appelle le sien{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          Expériences de fiche produit
        </a>
        . Les mécanismes sont différents, mais la stratégie en matière de captures d&apos;écran reste la même : tester une seule hypothèse claire à la fois.
      </p>

      <h2>Ce que vous pouvez tester</h2>
      <p>
        Sur l&apos;App Store, l&apos;Optimisation de la page produit vous permet de tester jusqu&apos;à trois versions alternatives de votre page produit par rapport à l&apos;originale. Apple indique que vous pouvez tester des icônes d&apos;applications, des captures d&apos;écran et des vidéos d&apos;aperçu, puis consulter les résultats dans App Analytics et appliquer la version la plus performante.
      </p>
      <p>
        Sur Google Play, les Expériences de fiche produit peuvent tester des éléments graphiques tels que les icônes, les graphismes de présentation, les captures d&apos;écran et les vidéos promotionnelles. Les expériences localisées peuvent également tester des champs de texte comme les descriptions courtes et complètes. Google précise que chaque application peut exécuter une expérience graphique par défaut ou jusqu&apos;à cinq expériences localisées en même temps.
      </p>

      <h2>Bonnes idées de tests de captures d&apos;écran</h2>
      <ul>
        <li>
          <strong>Priorité au résultat vs priorité à la fonctionnalité :</strong> mettre en avant le bénéfice utilisateur ou privilégier l&apos;interface utilisateur du produit.
        </li>
        <li>
          <strong>Première capture d&apos;écran différente :</strong> tester la première capture d&apos;écran, car elle porte la majeure partie de la première impression.
        </li>
        <li>
          <strong>Interface brute vs interface avec cadre :</strong> comparer des captures de l&apos;interface brute à des captures marketing intégrées dans un cadre d&apos;appareil.
        </li>
        <li>
          <strong>Titre court vs titre précis :</strong> comparer la clarté émotionnelle aux détails concrets d&apos;une fonctionnalité.
        </li>
        <li>
          <strong>Concept localisé :</strong> tester si une fonctionnalité ou une expression spécifique à un marché donne de meilleurs résultats pour une locale donnée.
        </li>
      </ul>

      <h2>Ce qu&apos;il ne faut pas tester en premier</h2>
      <p>
        Ne modifiez pas toutes les captures d&apos;écran, tous les titres, tous les arrière-plans et l&apos;ordre des fonctionnalités en même temps, à moins que vous ne souhaitiez simplement savoir quel ensemble complet l&apos;emporte. Si la variante est plus performante, vous ne saurez pas pourquoi. Pour les applications indépendantes au trafic limité, c&apos;est une perte de données précieuses.
      </p>
      <p>
        Commencez par une modification à fort impact : la première capture d&apos;écran, le premier titre, le style visuel principal ou l&apos;ordre des fonctionnalités. Une fois que vous avez identifié un vainqueur, utilisez-le comme nouvelle référence.
      </p>

      <h2>Comment exécuter le test sur l&apos;App Store</h2>
      <ol>
        <li>Créez une variante de capture d&apos;écran propre aux dimensions requises par la boutique, identiques à celles de votre fiche actuelle.</li>
        <li>Ouvrez App Store Connect et créez un test d&apos;Optimisation de la page produit.</li>
        <li>Choisissez jusqu&apos;à trois traitements et déterminez la part de trafic à allouer au test.</li>
        <li>Donnez un nom descriptif au test pour l&apos;identifier facilement par la suite dans App Analytics.</li>
        <li>Attendez d&apos;avoir collecté suffisamment de données avant d&apos;appliquer la version gagnante.</li>
      </ol>
      <p>
        Apple précise que les utilisateurs affectés à un traitement verront ce même traitement pendant toute la durée du test. Les captures d&apos;écran alternatives et les aperçus d&apos;applications peuvent apparaître dans les résultats de recherche et d&apos;autres sections de l&apos;App Store, tout comme vos éléments d&apos;origine.
      </p>

      <h2>Comment exécuter le test sur Google Play</h2>
      <ol>
        <li>Ouvrez la Play Console et accédez à Présence sur le Store, puis à Expériences de fiche produit.</li>
        <li>Créez une expérience graphique par défaut ou une expérience localisée.</li>
        <li>Sélectionnez la métrique cible, l&apos;audience, les variantes et l&apos;effet minimum détectable.</li>
        <li>Testez un seul attribut à la fois dans la mesure du possible.</li>
        <li>Analysez le résultat et appliquez la variante gagnante ou conservez la fiche actuelle.</li>
      </ol>
      <p>
        Google recommande d&apos;utiliser les nouveaux installateurs fidélisés comme métrique cible. Il avertit également que les utilisateurs qui ne sont pas connectés à Google Play ne verront pas les variantes expérimentales.
      </p>

      <h2>De quel volume de trafic avez-vous besoin ?</h2>
      <p>
        Il n&apos;existe pas de chiffre universel. Les applications à faible trafic ont besoin de plus de temps, et les variations visuelles minimes requièrent plus de trafic pour être détectées. Si votre application reçoit un nombre limité de visites sur la boutique, testez des différences plus marquées : une première capture d&apos;écran plus percutante, une nouvelle proposition de valeur ou un angle localisé.
      </p>
      <p>
        Considérez les résultats non concluants comme des informations utiles. Ils peuvent signifier que le changement était trop minime, que l&apos;audience était trop restreinte, ou que les deux versions étaient à peu près équivalentes.
      </p>

      <h2>Une check-list pratique pour tester vos captures</h2>
      <ul>
        <li>Rédigez une hypothèse avant de concevoir la variante.</li>
        <li>Ne modifiez qu&apos;une seule idée majeure par test.</li>
        <li>Utilisez des dimensions de captures d&apos;écran valides pour l&apos;App Store et Google Play.</li>
        <li>Conservez une localisation cohérente entre le groupe de contrôle et la variante.</li>
        <li>N&apos;arrêtez pas un test simplement parce que les premiers chiffres semblent encourageants.</li>
        <li>Documentez les modifications apportées pour que le test suivant s&apos;appuie sur des apprentissages réels.</li>
      </ul>

      <h2>Où intervient Screenshot Bro</h2>
      <p>
        Les tests A/B impliquent la création de variantes de captures d&apos;écran. C&apos;est précisément là que les flux de travail manuels deviennent complexes : fichiers Figma dupliqués, fichiers PNG renommés, dossiers de locales et exports répétitifs. <a href="/">Screenshot Bro</a> vous aide à structurer vos séries de captures d&apos;écran pour créer des variantes, les localiser et exporter les bons fichiers sans jamais perdre votre base de référence.
      </p>
      <p>
        Si vous concevez encore vos variantes à la main, lisez{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          Comment concevoir des captures d&apos;écran App Store dans Figma
        </a>{" "}
        puis comparez ce flux de travail avec celui d&apos;un{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          outil dédié aux captures d&apos;écran d&apos;app store
        </a>
        .
      </p>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        تعد لقطات الشاشة واحدة من أسهل أصول متجر التطبيقات تغييرًا، ولكنها واحدة من أصعبها من حيث الحكم عليها بناءً على الرأي الشخصي. يمنحك اختبار A/B طريقة لمقارنة أفكار لقطات الشاشة مع حركة مرور المتجر الفعلية بدلاً من الجدال حول أي إصدار يبدو أفضل في ملف التصميم.
      </p>
      <p>
        تدعم كل من Apple وGoogle إجراء تجارب على بيانات المتجر. تطلق Apple على نظامها اسم{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          تحسين صفحة المنتج
        </a>
        . بينما تطلق Google على نظامها اسم{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          تجارب بيانات المتجر
        </a>
        . تختلف الآليات، ولكن إستراتيجية لقطات الشاشة واحدة: اختبر فرضية واضحة واحدة في كل مرة.
      </p>

      <h2>ما يمكنك اختباره</h2>
      <p>
        في متجر التطبيقات، يتيح لك تحسين صفحة المنتج اختبار ما يصل إلى ثلاثة إصدارات بديلة لصفحة المنتج مقارنة بالإصدار الأصلي. تقول Apple إنه يمكنك اختبار أيقونات التطبيقات، ولقطات الشاشة، وفيديوهات معاينة التطبيق، ثم عرض النتائج في تحليلات التطبيق وتطبيق الإصدار الأفضل أداءً.
      </p>
      <p>
        على Google Play، يمكن أن تختبر تجارب بيانات المتجر الأصول الرسومية مثل الأيقونات، والرسومات المميزة، ولقطات الشاشة، والفيديوهات الترويجية. كما يمكن للتجارب الموطنة أيضًا اختبار حقول النصوص مثل الأوصاف القصيرة والكاملة. تقول Google إن كل تطبيق يمكنه تشغيل تجربة رسومات افتراضية واحدة أو ما يصل إلى خمس تجارب موطنة في نفس الوقت.
      </p>

      <h2>أفكار جيدة لاختبار لقطات الشاشة</h2>
      <ul>
        <li>
          <strong>النتيجة أولاً مقابل الميزة أولاً:</strong> البدء بالفائدة التي تعود على المستخدم، أو التركيز على واجهة مستخدم المنتج.
        </li>
        <li>
          <strong>تغيير لقطة الشاشة الأولى:</strong> اختبر لقطة الشاشة الافتتاحية لأنها تحمل الوزن الأكبر للانطباع الأول.
        </li>
        <li>
          <strong>واجهة المستخدم البسيطة مقابل الواجهة المؤطرة:</strong> اختبر لقطات شاشة الواجهة الخام مقارنة بلقطات الشاشة التسويقية المؤطرة داخل أجهزة.
        </li>
        <li>
          <strong>العنوان القصير مقابل العنوان المحدد:</strong> قارن بين الوضوح العاطفي وتفاصيل الميزات الملموسة.
        </li>
        <li>
          <strong>المفهوم الموطن:</strong> اختبر ما إذا كانت ميزة أو عبارة معينة مخصصة لسوق ما تؤدي أداءً أفضل في بلد أو لغة معينة.
        </li>
      </ul>

      <h2>ما لا يجب اختباره أولاً</h2>
      <p>
        لا تغير كل لقطة شاشة وعنوان وخلفية وترتيب للميزات دفعة واحدة إلا إذا كان كل ما يهمك هو معرفة أي مجموعة كاملة ستفوز. فإذا كان البديل يؤدي أداءً أفضل، فلن تعرف السبب. بالنسبة للتطبيقات المستقلة ذات حركة المرور المحدودة، فإن هذا يهدر إشارات مفيدة.
      </p>
      <p>
        ابدأ بتغيير واحد عالي التأثير: لقطة الشاشة الأولى، أو العنوان الأول، أو النمط البصري الرئيسي، أو ترتيب الميزات. بمجرد حصولك على خيار فائز، استخدمه كنقطة أساسية جديدة.
      </p>

      <h2>كيفية تشغيل الاختبار على App Store</h2>
      <ol>
        <li>أنشئ بديلًا نظيفًا للقطات الشاشة بنفس المقاسات الحالية لبيانات متجرك.</li>
        <li>افتح App Store Connect وأنشئ اختبارًا لتحسين صفحة المنتج.</li>
        <li>اختر ما يصل إلى ثلاثة بدائل (معالجات) وحدد نسبة حركة المرور التي ستدخل الاختبار.</li>
        <li>اجعل اسم الاختبار وصفيًا حتى تتمكن من فهمه لاحقًا في تحليلات التطبيق.</li>
        <li>انتظر الحصول على بيانات كافية قبل تطبيق الخيار الفائز.</li>
      </ol>
      <p>
        تشير Apple إلى أن الأشخاص الذين يتم اختيارهم لبديل معين يرون نفس البديل طوال مدة الاختبار. قد تظهر لقطات الشاشة البديلة ومعاينات التطبيق في نتائج البحث وأجزاء متجر التطبيقات الأخرى، تمامًا مثل أصولك الأصلية.
      </p>

      <h2>كيفية تشغيل الاختبار على Google Play</h2>
      <ol>
        <li>افتح Play Console وانتقل إلى حضور المتجر، ثم تجارب بيانات المتجر.</li>
        <li>أنشئ تجربة رسومات افتراضية أو تجربة موطنة.</li>
        <li>حدد المقياس المستهدف والجمهور والمتغيرات والحد الأدنى للتأثير القابل للكشف.</li>
        <li>اختبر سمة واحدة في كل مرة عندما يكون ذلك ممكنًا.</li>
        <li>راجع النتيجة وقم بتطبيق المتغير الفائز أو احتفظ ببيانات المتجر الحالية.</li>
      </ol>
      <p>
        توصي Google باستخدام مقياس تثبيتات المستخدمين الجدد المحتفظ بهم كمقياس مستهدف. كما تحذر من أن المستخدمين غير المسجلين الدخول إلى Google Play لن يروا المتغيرات التجريبية.
      </p>

      <h2>ما مقدار حركة المرور التي تحتاجها؟</h2>
      <p>
        لا يوجد رقم عالمي. تحتاج التطبيقات ذات حركة المرور المنخفضة إلى مزيد من الوقت، وتتطلب الاختلافات البصرية الدقيقة مزيدًا من حركة المرور لاكتشافها. إذا كان تطبيقك يتلقى زيارات محدودة للمتجر، فاختبر اختلافات أكبر: لقطة شاشة أولى أكثر وضوحًا، أو عرض قيمة جديد، أو زاوية موطنة.
      </p>
      <p>
        تعامل مع النتائج غير الحاسمة كمعلومات مفيدة. قد تعني أن التغيير كان صغيرًا جدًا، أو أن الجمهور كان صغيرًا جدًا، أو أن كلا الإصدارين كانا متكافئين تقريبًا.
      </p>

      <h2>قائمة تحقق عملية لاختبار لقطات الشاشة</h2>
      <ul>
        <li>اكتب فرضية واحدة قبل تصميم البديل.</li>
        <li>غير فكرة رئيسية واحدة في كل اختبار.</li>
        <li>استخدم أبعاد لقطات الشاشة الصالحة لـ App Store و Google Play.</li>
        <li>حافظ على اتساق التوطين بين المجموعة الضابطة والبديل.</li>
        <li>لا توقف الاختبار لمجرد أن الأرقام المبكرة تبدو واعدة.</li>
        <li>وثق ما تم تغييره حتى يبدأ الاختبار التالي من تعلم حقيقي.</li>
      </ul>

      <h2>أين يأتي دور Screenshot Bro</h2>
      <p>
        يؤدي اختبار A/B إلى إنشاء بدائل للقطات الشاشة. هذا هو المكان الذي تصبح فيه سير العمل اليدوية فوضوية: ملفات Figma المكررة، وإعادة تسمية ملفات PNG، ومجلدات اللغات، والتصدير المتكرر. يساعدك <a href="/">Screenshot Bro</a> في الحفاظ على تنظيم مجموعات لقطات الشاشة الخاصة بك حتى تتمكن من إنشاء بدائل، وتوطينها، وتصدير الملفات الصحيحة دون فقدان النسخة الأساسية.
      </p>
      <p>
        إذا كنت لا تزال تصمم البدائل يدويًا، فاقرأ{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          كيفية تصميم لقطات شاشة App Store في Figma
        </a>{" "}
        ثم قارن سير العمل هذا مع{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          أداة لقطات شاشة مخصصة لمتجر التطبيقات
        </a>
        .
      </p>
    </>
  );
}
