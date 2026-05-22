import type { Route } from "./+types/blog.custom-product-pages-app-store-screenshots";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { data, useLoaderData } from "react-router";
import { isLocaleCode, type LocaleCode } from "~/config/localization";

const SLUG = "custom-product-pages-app-store-screenshots";

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
      return "Crea conjuntos de capturas de la App Store específicos para tus campañas sin tener que rediseñar cada archivo a mano.";
    case "zh":
      return "轻松构建特定营销活动的 App Store 截图集，无需手动重新制作每一个文件。";
    case "hi":
      return "हर फ़ाइल को हाथ से दोबारा बनाए बिना अभियान-विशिष्ट ऐप स्टोर स्क्रीनशॉट सेट बनाएं।";
    case "fr":
      return "Générez des ensembles de captures d'écran App Store dédiés à vos campagnes sans avoir à recréer chaque fichier manuellement.";
    case "ar":
      return "صمّم مجموعات لقطات شاشة لمتجر التطبيقات مخصصة لحملاتك دون الحاجة لإعادة بناء كل ملف يدويًا.";
    default:
      return "Build campaign-specific App Store screenshot sets without rebuilding every file by hand.";
  }
}

function getCTAButtonLabel(locale: LocaleCode): string {
  switch (locale) {
    case "es":
      return "Descargar Screenshot Bro";
    case "zh":
      return "下载 Screenshot Bro";
    case "hi":
      return "Screenshot Bro डाउनलोड करें";
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
        Your default App Store product page has to explain the whole app.
        Custom product pages let you build more focused versions for
        specific campaigns, features, audiences, or seasonal moments. For
        many indie apps, that means creating multiple screenshot sets that
        all come from the same product but tell different stories.
      </p>
      <p>
        Apple says you can publish up to 70 additional custom product pages
        for iPhone and iPad apps. Each page can vary screenshots,
        promotional text, and app previews, and each page gets a unique URL
        you can use in campaigns.
      </p>

      <h2>What Custom Product Pages Are For</h2>
      <p>
        A custom product page is not a replacement for your default listing.
        It is a targeted landing page inside the App Store. Use one when a
        visitor is arriving with a specific intent:
      </p>
      <ul>
        <li>A paid Apple Ads campaign for one feature.</li>
        <li>A seasonal promotion or launch moment.</li>
        <li>A specific audience segment, such as students, freelancers, or teams.</li>
        <li>A local market where one use case matters more than another.</li>
        <li>A deep link into a specific part of your app.</li>
      </ul>

      <h2>What You Can Customize</h2>
      <p>
        According to Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          custom product pages documentation
        </a>
        , custom product pages can vary screenshots, promotional text, and
        app previews. In App Store Connect, you can start from a blank page
        or copy your default product page, then customize assets for the
        page&apos;s localizations.
      </p>
      <p>
        Apple also says custom product pages can be used with Apple Ads and
        can appear in relevant search results. You can assign keywords to a
        custom product page, but the keywords should match the intent of
        that page and each keyword combination should be unique to one
        custom product page.
      </p>

      <h2>Screenshot Strategy</h2>
      <p>
        The mistake is copying your default screenshots and changing only
        the first headline. A custom product page should feel intentionally
        built for the audience that clicked the link.
      </p>
      <p>
        Build each screenshot set around one angle:
      </p>
      <ul>
        <li>
          <strong>Feature page:</strong> lead with the feature, then show
          the workflow and proof.
        </li>
        <li>
          <strong>Audience page:</strong> use language and examples that
          match the target group.
        </li>
        <li>
          <strong>Seasonal page:</strong> make the campaign relevant, but
          keep the app experience clear.
        </li>
        <li>
          <strong>Localization page:</strong> lead with the use case that
          matters most in that locale.
        </li>
      </ul>

      <h2>Example: One App, Three Pages</h2>
      <p>
        Imagine a habit tracker. The default product page explains the
        whole app. Custom product pages could focus on:
      </p>
      <ul>
        <li>
          <strong>Fitness habits:</strong> workout streaks, progress
          charts, reminders, and Apple Health context.
        </li>
        <li>
          <strong>Study habits:</strong> reading goals, focus sessions, and
          exam prep routines.
        </li>
        <li>
          <strong>New Year campaign:</strong> fresh-start goals, simple
          setup, and week-one progress.
        </li>
      </ul>
      <p>
        The app is the same. The screenshots are different because the
        visitor&apos;s motivation is different.
      </p>

      <h2>How to Build the Screenshot Set</h2>
      <ol>
        <li>Define the campaign intent before opening a design tool.</li>
        <li>Choose the first screenshot headline for that intent.</li>
        <li>Reuse your base screenshot system so frames, fonts, and export sizes stay consistent.</li>
        <li>Replace app screenshots with screens that support the campaign angle.</li>
        <li>Localize the screenshot copy if the page targets a specific market.</li>
        <li>Export the same required device sizes as your default product page.</li>
      </ol>
      <p>
        For valid dimensions, use Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          screenshot specifications
        </a>{" "}
        or this site&apos;s{" "}
        <a href="/blog/app-store-screenshot-sizes">
          App Store screenshot sizes guide
        </a>
        .
      </p>

      <h2>Review and Measurement</h2>
      <p>
        Apple says metadata in custom product pages must be submitted for
        review, independent of an app update. Once pages are live, you can
        measure performance in App Analytics, including product page
        impressions, downloads, redownloads, and conversion rates.
      </p>
      <p>
        Do not judge a custom product page only by conversion rate. If a
        page is tied to paid acquisition, also watch retention, proceeds,
        and whether the campaign message attracts the right users.
      </p>

      <h2>Custom Product Pages vs A/B Tests</h2>
      <p>
        Use Product Page Optimization when you want to test variants against
        your default listing. Use custom product pages when you already know
        the audience or campaign and need a targeted App Store landing page.
        They are related, but they solve different problems.
      </p>
      <p>
        For testing strategy, read{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          How to A/B Test App Store and Google Play Screenshots
        </a>
        .
      </p>

      <h2>How Screenshot Bro Helps</h2>
      <p>
        Custom product pages multiply your screenshot workload. One app can
        quickly become a default page, three campaign pages, five locales,
        and multiple device sizes. <a href="/">Screenshot Bro</a> helps by
        keeping your screenshots in reusable local projects with device
        rows, localization, batch export, and App Store Connect upload.
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        La página de producto predeterminada en la App Store debe explicar toda la aplicación.
        Las páginas de producto personalizadas te permiten crear versiones más enfocadas para
        campañas, funciones, audiencias o momentos estacionales específicos. Para
        muchas aplicaciones indie, esto significa crear múltiples conjuntos de capturas de pantalla que
        provienen del mismo producto pero cuentan historias diferentes.
      </p>
      <p>
        Apple indica que puedes publicar hasta 70 páginas de producto personalizadas
        adicionales para aplicaciones de iPhone e iPad. Cada página puede variar las capturas de pantalla, el
        texto promocional y las vistas previas de la aplicación, y cada página recibe una URL única
        que puedes usar en tus campañas.
      </p>

      <h2>Para qué sirven las páginas de producto personalizadas</h2>
      <p>
        Una página de producto personalizada no reemplaza a tu ficha de producto predeterminada.
        Es una página de destino específica dentro de la App Store. Utiliza una cuando un
        visitante llegue con una intención específica:
      </p>
      <ul>
        <li>Una campaña de pago de Apple Ads para una función concreta.</li>
        <li>Una promoción estacional o el momento de un lanzamiento.</li>
        <li>Un segmento de audiencia específico, como estudiantes, autónomos o equipos.</li>
        <li>Un mercado local donde un caso de uso sea más importante que otro.</li>
        <li>Un enlace profundo (deep link) a una sección específica de tu aplicación.</li>
      </ul>

      <h2>¿Qué se puede personalizar?</h2>
      <p>
        De acuerdo con la{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentación de páginas de producto personalizadas
        </a>{" "}
        de Apple, las páginas de producto personalizadas pueden variar las capturas de pantalla, el
        texto promocional y las vistas previas de la aplicación. En App Store Connect, puedes empezar
        desde una página en blanco o copiar tu página de producto predeterminada, y luego
        personalizar los elementos para las localizaciones de la página.
      </p>
      <p>
        Apple también señala que las páginas de producto personalizadas se pueden usar con Apple Ads y
        pueden aparecer en los resultados de búsqueda relevantes. Puedes asignar palabras clave a una
        página de producto personalizada, pero estas deben coincidir con la intención de esa página y
        cada combinación de palabras clave debe ser única para una sola página de producto personalizada.
      </p>

      <h2>Estrategia de capturas de pantalla</h2>
      <p>
        El error común es copiar tus capturas predeterminadas y cambiar únicamente el
        primer titular. Una página de producto personalizada debe sentirse diseñada intencionadamente
        para la audiencia que hizo clic en el enlace.
      </p>
      <p>
        Diseña cada conjunto de capturas en torno a un enfoque único:
      </p>
      <ul>
        <li>
          <strong>Página de función:</strong> empieza con la función principal, luego muestra
          el flujo de trabajo y la prueba de su valor.
        </li>
        <li>
          <strong>Página de audiencia:</strong> utiliza un lenguaje y ejemplos que
          se adapten al grupo objetivo.
        </li>
        <li>
          <strong>Página estacional:</strong> haz que la campaña sea relevante, pero
          mantén la claridad sobre la experiencia de la aplicación.
        </li>
        <li>
          <strong>Página de localización:</strong> empieza con el caso de uso que
          sea más relevante para esa región geográfica.
        </li>
      </ul>

      <h2>Ejemplo: Una aplicación, tres páginas</h2>
      <p>
        Imagina una aplicación de seguimiento de hábitos. La página de producto predeterminada explica toda la
        aplicación. Las páginas de producto personalizadas podrían enfocarse en:
      </p>
      <ul>
        <li>
          <strong>Hábitos de fitness:</strong> rachas de entrenamiento, gráficos de progreso,
          recordatorios y conexión con Apple Health.
        </li>
        <li>
          <strong>Hábitos de estudio:</strong> objetivos de lectura, sesiones de concentración y
          rutinas de preparación para exámenes.
        </li>
        <li>
          <strong>Campaña de Año Nuevo:</strong> propósitos de nuevo año, configuración sencilla
          y el progreso de la primera semana.
        </li>
      </ul>
      <p>
        La aplicación es la misma. Las capturas de pantalla son diferentes porque la
        motivación del visitante es diferente.
      </p>

      <h2>Cómo crear el conjunto de capturas de pantalla</h2>
      <ol>
        <li>Define la intención de la campaña antes de abrir una herramienta de diseño.</li>
        <li>Elige el titular de la primera captura de pantalla de acuerdo con esa intención.</li>
        <li>Reutiliza tu sistema base de capturas de pantalla para que los marcos, las fuentes y los tamaños de exportación se mantengan consistentes.</li>
        <li>Reemplaza las capturas de la aplicación con pantallas que respalden el enfoque de la campaña.</li>
        <li>Localiza los textos de las capturas si la página se dirige a un mercado específico.</li>
        <li>Exporta los mismos tamaños de dispositivo requeridos que en tu página de producto predeterminada.</li>
      </ol>
      <p>
        Para conocer las dimensiones válidas, consulta las{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          especificaciones de capturas de pantalla
        </a>{" "}
        de Apple o la{" "}
        <a href="/blog/app-store-screenshot-sizes">
          guía de tamaños de capturas de la App Store
        </a>{" "}
        de este sitio.
      </p>

      <h2>Revisión y medición</h2>
      <p>
        Apple indica que los metadatos de las páginas de producto personalizadas se deben enviar para
        revisión de forma independiente a la actualización de la aplicación. Una vez que las páginas estén
        publicadas, puedes medir su rendimiento en App Analytics, incluyendo las impresiones de la
        página de producto, descargas, redescargas y tasas de conversión.
      </p>
      <p>
        No juzgues una página de producto personalizada únicamente por su tasa de conversión. Si una
        página está vinculada a una campaña de adquisición de pago, monitorea también la retención, los
        ingresos y si el mensaje de la campaña está atrayendo a los usuarios adecuados.
      </p>

      <h2>Páginas de producto personalizadas frente a pruebas A/B</h2>
      <p>
        Utiliza la optimización de la página de producto cuando quieras probar variantes frente a tu ficha
        predeterminada. Utiliza las páginas de producto personalizadas cuando ya conozcas a la audiencia o
        la campaña y necesites una página de destino específica en la App Store. Están relacionadas, pero
        resuelven problemas diferentes.
      </p>
      <p>
        Para conocer la estrategia de pruebas, lee{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          Cómo realizar pruebas A/B en capturas de pantalla de la App Store y Google Play
        </a>
        .
      </p>

      <h2>Cómo te ayuda Screenshot Bro</h2>
      <p>
        Las páginas de producto personalizadas multiplican tu carga de trabajo de capturas de pantalla. Una sola
        aplicación puede requerir rápidamente una página predeterminada, tres páginas de campaña, cinco configuraciones
        regionales y múltiples tamaños de dispositivo. <a href="/">Screenshot Bro</a> te ayuda manteniendo tus
        capturas de pantalla en proyectos locales reutilizables con filas de dispositivos, localización, exportación por
        lotes y subida a App Store Connect.
      </p>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        您的默认 App Store 产品页面需要解释整个应用。
        自定义产品页面则允许您针对特定活动、功能、受众或季节性节点构建更有针对性的版本。对于
        许多独立开发者而言，这意味着需要针对同一个产品创建多套不同的截图，分别讲述不同的故事。
      </p>
      <p>
        Apple 表示，您可以为 iPhone 和 iPad 应用额外发布多达 70 个自定义产品页面。每个
        页面可以包含不同的截图、宣传文本和应用预览，并且每个页面都会获得一个可用于营销活动的唯一
        URL。
      </p>

      <h2>自定义产品页面的用途</h2>
      <p>
        自定义产品页面页面并不是要替换您的默认页面，而是 App Store 内部的专属着陆页。当
        访问者带着特定目的到来时，可以使用自定义产品页面：
      </p>
      <ul>
        <li>针对单一功能的付费 Apple Search Ads 投放。</li>
        <li>季节性促销或新品发布节点。</li>
        <li>特定的细分受众群体，例如学生、自由职业者或团队。</li>
        <li>某个使用场景比其他场景更重要的本地市场。</li>
        <li>指向应用内特定功能的深度链接。</li>
      </ul>

      <h2>您可以自定义哪些内容</h2>
      <p>
        根据 Apple 的{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          自定义产品页面文档
        </a>
        ，自定义产品页面可以包含不同的截图、宣传文本和应用预览。在 App Store Connect 中，
        您可以从空白页面开始，或者复制默认的产品页面，然后针对该页面的本地化版本自定义素材。
      </p>
      <p>
        Apple 还提到，自定义产品页面可与 Apple Ads 结合使用，并能在相关的搜索结果中显示。
        您可以为自定义产品页面分配关键字，但关键字应与该页面的意图相匹配，且每个关键字组合应仅
        对应一个自定义产品页面。
      </p>

      <h2>屏幕截图策略</h2>
      <p>
        常见的错误是直接复制您的默认截图，仅修改第一张的标题。自定义产品页面应当让人感觉是
        专门为点击该链接的受众群体量身定制的。
      </p>
      <p>
        围绕一个特定角度构建每套截图：
      </p>
      <ul>
        <li>
          <strong>功能导向页：</strong>以该功能开篇，随后展示工作流和实际成效证明。
        </li>
        <li>
          <strong>受众导向页：</strong>使用与目标人群相契合的语言风格和应用示例。
        </li>
        <li>
          <strong>季节性活动页：</strong>让活动文案高度相关，但同时保持应用核心体验清晰明了。
        </li>
        <li>
          <strong>本地化专用页：</strong>将该国家或地区最受关注的用例放在首位。
        </li>
      </ul>

      <h2>案例：一个应用，三个页面</h2>
      <p>
        假设有一款习惯追踪应用。默认产品页面解释了应用的所有功能。自定义产品页面可以分别专注于：
      </p>
      <ul>
        <li>
          <strong>健身习惯：</strong>健身打卡、进度图表、饮水提醒以及 Apple 健康联动。
        </li>
        <li>
          <strong>学习习惯：</strong>阅读目标、专注番茄钟以及备考例程。
        </li>
        <li>
          <strong>新年活动：</strong>立下新年 Flag、简单上手的设定以及第一周的进步反馈。
        </li>
      </ul>
      <p>
        虽然应用完全相同，但由于访问者页面的动机各异，所展示的截图也应有所不同。
      </p>

      <h2>如何制作这套屏幕截图</h2>
      <ol>
        <li>在打开设计工具之前，先明确活动意图。</li>
        <li>根据这一意图，确定第一张截图的标题。</li>
        <li>复用您的基础截图模版系统，使设备框、字体和导出尺寸保持一致。</li>
        <li>将原截图中的应用画面替换为能支撑活动主题的界面。</li>
        <li>如果页面针对特定的国家或地区，请进行截图文案的本地化翻译。</li>
        <li>导出与默认产品页面相同的所需设备尺寸。</li>
      </ol>
      <p>
        有关适用的尺寸，请参考 Apple 的{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          屏幕截图规格
        </a>{" "}
        或本站的{" "}
        <a href="/blog/app-store-screenshot-sizes">
          App Store 屏幕截图尺寸指南
        </a>
        。
      </p>

      <h2>审核与数据衡量</h2>
      <p>
        Apple 表示，自定义产品页面中的元数据必须提交审核，且独立于应用的版本更新。一旦页面上线，
        您可以在 App Analytics 中衡量表现，包括产品页面曝光次数、下载量、重新下载量和转化率。
      </p>
      <p>
        不要仅仅根据转化率来评判自定义产品页面。如果页面与付费获客挂钩，还应关注留存率、收入以及
        活动信息是否吸引了合适的目标用户。
      </p>

      <h2>自定义产品页面 vs A/B 测试</h2>
      <p>
        当您想针对默认页面测试不同版本的效果时，请使用产品页面优化。当您已经明确目标受众或营销活动，
        并需要一个专属的 App Store 着陆页时，请使用自定义产品页面。两者相辅相成，但解决的是不同
        的问题。
      </p>
      <p>
        有关测试策略的更多信息，请阅读{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          如何对 App Store 和 Google Play 屏幕截图进行 A/B 测试
        </a>
        。
      </p>

      <h2>Screenshot Bro 如何提供帮助</h2>
      <p>
        自定义产品页面使您的截图工作量成倍增加。一款应用可能很快就需要一个默认页面、三个活动页面、
        五个语言版本和多种设备尺寸。 <a href="/">Screenshot Bro</a> 允许您在可复用的本地项目中管理
        截图，支持多设备管理、本地化翻译、批量导出以及直接上传至 App Store Connect，从而减轻您的工作负担。
      </p>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        आपके डिफ़ॉल्ट ऐप स्टोर उत्पाद पृष्ठ को पूरे ऐप को समझाना होता है।
        कस्टम उत्पाद पृष्ठ आपको विशिष्ट अभियानों, सुविधाओं, दर्शकों या मौसमी पलों के लिए
        अधिक केंद्रित संस्करण बनाने की सुविधा देते हैं। कई इंडी ऐप्स के लिए, इसका मतलब
        कई स्क्रीनशॉट सेट बनाना है जो एक ही उत्पाद से आते हैं लेकिन अलग-अलग कहानियां बताते हैं।
      </p>
      <p>
        Apple का कहना है कि आप iPhone और iPad ऐप्स के लिए 70 तक अतिरिक्त कस्टम उत्पाद पृष्ठ
        प्रकाशित कर सकते हैं। प्रत्येक पृष्ठ स्क्रीनशॉट, प्रचार पाठ और ऐप पूर्वावलोकन को
        बदल सकता है, और प्रत्येक पृष्ठ को एक अद्वितीय URL मिलता है जिसका उपयोग आप अभियानों में कर सकते हैं।
      </p>

      <h2>कस्टम उत्पाद पृष्ठ किस लिए हैं</h2>
      <p>
        एक कस्टम उत्पाद पृष्ठ आपके डिफ़ॉल्ट लिस्टिंग का प्रतिस्थापन नहीं है।
        यह ऐप स्टोर के अंदर एक लक्षित लैंडिंग पृष्ठ है। इसका उपयोग तब करें जब कोई
        विज़िटर किसी विशिष्ट उद्देश्य के साथ आ रहा हो:
      </p>
      <ul>
        <li>एक सुविधा के लिए एक सशुल्क Apple Ads अभियान।</li>
        <li>एक मौसमी प्रचार या लॉन्च का क्षण।</li>
        <li>एक विशिष्ट दर्शक वर्ग, जैसे कि छात्र, फ्रीलांसर या टीमें।</li>
        <li>एक स्थानीय बाज़ार जहाँ एक उपयोग का मामला दूसरे की तुलना में अधिक मायने रखता है।</li>
        <li>आपके ऐप के किसी विशिष्ट भाग में एक डीप लिंक।</li>
      </ul>

      <h2>आप क्या कस्टमाइज़ कर सकते हैं</h2>
      <p>
        Apple के{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          कस्टम उत्पाद पृष्ठ दस्तावेज़
        </a>{" "}
        के अनुसार, कस्टम उत्पाद पृष्ठ स्क्रीनशॉट, प्रचार पाठ और ऐप पूर्वावलोकन को बदल सकते हैं।
        App Store Connect में, आप एक खाली पृष्ठ से शुरू कर सकते हैं या अपने डिफ़ॉल्ट उत्पाद पृष्ठ की
        प्रतिलिपि बना सकते हैं, फिर पृष्ठ के स्थानीयकरणों के लिए संपत्तियों को कस्टमाइज़ कर सकते हैं।
      </p>
      <p>
        Apple यह भी कहता है कि कस्टम उत्पाद पृष्ठों का उपयोग Apple Ads के साथ किया जा सकता है और
        वे प्रासंगिक खोज परिणामों में दिखाई दे सकते हैं। आप एक कस्टम उत्पाद पृष्ठ पर कीवर्ड असाइन कर सकते हैं,
        लेकिन कीवर्ड उस पृष्ठ के उद्देश्य से मेल खाने चाहिए और प्रत्येक कीवर्ड संयोजन एक कस्टम उत्पाद
        पृष्ठ के लिए अद्वितीय होना चाहिए।
      </p>

      <h2>स्क्रीनशॉट रणनीति</h2>
      <p>
        गलती अपने डिफ़ॉल्ट स्क्रीनशॉट को कॉपी करने और केवल पहली हेडलाइन बदलने की है।
        एक कस्टम उत्पाद पृष्ठ उस दर्शक के लिए जानबूझकर बनाया गया महसूस होना चाहिए जिसने लिंक पर क्लिक किया है।
      </p>
      <p>
        प्रत्येक स्क्रीनशॉट सेट को एक दृष्टिकोण के इर्द-गिर्द बनाएं:
      </p>
      <ul>
        <li>
          <strong>सुविधा पृष्ठ:</strong> पहले मुख्य सुविधा दिखाएं, फिर उसका कार्यप्रवाह
          और प्रभाव दिखाएं।
        </li>
        <li>
          <strong>दर्शक पृष्ठ:</strong> उस भाषा और उदाहरणों का उपयोग करें जो
          लक्षित समूह से मेल खाते हों।
        </li>
        <li>
          <strong>मौसमी पृष्ठ:</strong> अभियान को प्रासंगिक बनाएं, लेकिन ऐप
          अनुभव को स्पष्ट रखें।
        </li>
        <li>
          <strong>स्थानीयकरण पृष्ठ:</strong> उस उपयोग के मामले को आगे रखें जो
          उस क्षेत्र में सबसे अधिक मायने रखता है।
        </li>
      </ul>

      <h2>उदाहरण: एक ऐप, तीन पृष्ठ</h2>
      <p>
        एक आदत ट्रैकर की कल्पना करें। डिफ़ॉल्ट उत्पाद पृष्ठ पूरे ऐप को समझाता है।
        कस्टम उत्पाद पृष्ठ इन पर ध्यान केंद्रित कर सकते हैं:
      </p>
      <ul>
        <li>
          <strong>फिटनेस आदतें:</strong> वर्कआउट स्ट्रीक्स, प्रगति चार्ट,
          रिमाइंडर और Apple Health संदर्भ।
        </li>
        <li>
          <strong>अध्ययन की आदतें:</strong> पढ़ने के लक्ष्य, फोकस सत्र और
          परीक्षा की तैयारी की दिनचर्या।
        </li>
        <li>
          <strong>नए साल का अभियान:</strong> नए साल की शुरुआत के लक्ष्य, सरल सेटअप,
          और पहले सप्ताह की प्रगति।
        </li>
      </ul>
      <p>
        ऐप वही है। स्क्रीनशॉट अलग हैं क्योंकि विज़िटर की प्रेरणा अलग है।
      </p>

      <h2>स्क्रीनशॉट सेट कैसे बनाएं</h2>
      <ol>
        <li>डिज़ाइन टूल खोलने से पहले अभियान के उद्देश्य को परिभाषित करें।</li>
        <li>उस उद्देश्य के लिए पहली स्क्रीनशॉट हेडलाइन चुनें।</li>
        <li>अपने बेस स्क्रीनशॉट सिस्टम का पुनः उपयोग करें ताकि फ़्रेम, फ़ॉन्ट और निर्यात आकार सुसंगत रहें।</li>
        <li>ऐप स्क्रीनशॉट को उन स्क्रीन से बदलें जो अभियान के दृष्टिकोण का समर्थन करती हैं।</li>
        <li>यदि पृष्ठ किसी विशिष्ट बाज़ार को लक्षित करता है तो स्क्रीनशॉट कॉपी को स्थानीयकृत करें।</li>
        <li>वही आवश्यक डिवाइस आकार निर्यात करें जो आपके डिफ़ॉल्ट उत्पाद पृष्ठ के लिए आवश्यक हैं।</li>
      </ol>
      <p>
        मान्य आयामों के लिए, Apple के{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          स्क्रीनशॉट विनिर्देशों
        </a>{" "}
        या इस साइट के{" "}
        <a href="/blog/app-store-screenshot-sizes">
          ऐप स्टोर स्क्रीनशॉट आकार गाइड
        </a>{" "}
        का उपयोग करें।
      </p>

      <h2>समीक्षा और मापन</h2>
      <p>
        Apple का कहना है कि कस्टम उत्पाद पृष्ठों में मेटाडेटा को ऐप अपडेट से स्वतंत्र, समीक्षा के लिए
        प्रस्तुत किया जाना चाहिए। एक बार पृष्ठ लाइव हो जाने के बाद, आप ऐप एनालिटिक्स में प्रदर्शन को माप
        सकते हैं, जिसमें उत्पाद पृष्ठ के इंप्रेशन, डाउनलोड, पुन: डाउनलोड और रूपांतरण दरें शामिल हैं।
      </p>
      <p>
        केवल रूपांतरण दर के आधार पर कस्टम उत्पाद पृष्ठ का मूल्यांकन न करें। यदि कोई पृष्ठ सशुल्क अधिग्रहण
        से जुड़ा है, तो प्रतिधारण (retention), आय और क्या अभियान संदेश सही उपयोगकर्ताओं को आकर्षित करता है,
        इस पर भी नज़र रखें।
      </p>

      <h2>कस्टम उत्पाद पृष्ठ बनाम A/B परीक्षण</h2>
      <p>
        उत्पाद पृष्ठ अनुकूलन (Product Page Optimization) का उपयोग तब करें जब आप अपने डिफ़ॉल्ट लिस्टिंग
        के विरुद्ध वेरिएंट का परीक्षण करना चाहते हैं। कस्टम उत्पाद पृष्ठों का उपयोग तब करें जब आप पहले से
        ही दर्शकों या अभियान को जानते हों और आपको एक लक्षित ऐप स्टोर लैंडिंग पृष्ठ की आवश्यकता हो। वे
        संबंधित हैं, लेकिन वे विभिन्न समस्याओं का समाधान करते हैं।
      </p>
      <p>
        परीक्षण रणनीति के लिए, पढ़ें{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          ऐप स्टोर और गूगल प्ले स्क्रीनशॉट का A/B परीक्षण कैसे करें
        </a>
        .
      </p>

      <h2>Screenshot Bro कैसे मदद करता है</h2>
      <p>
        कस्टम उत्पाद पृष्ठ आपके स्क्रीनशॉट के कार्यभार को बढ़ा देते हैं। एक ऐप जल्दी से एक डिफ़ॉल्ट पृष्ठ,
        तीन अभियान पृष्ठ, पांच स्थानीय भाषाएं और कई डिवाइस आकार बन सकता है। <a href="/">Screenshot Bro</a>{" "}
        डिवाइस पंक्तियों, स्थानीयकरण, बैच निर्यात और ऐप स्टोर कनेक्ट अपलोड के साथ आपके स्क्रीनशॉट को पुन: प्रयोज्य
        स्थानीय परियोजनाओं में रखकर मदद करता है।
      </p>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        Votre page produit par défaut sur l&apos;App Store doit expliquer l&apos;intégralité de l&apos;application.
        Les pages produit personnalisées vous permettent de créer des versions plus ciblées pour des
        campagnes, des fonctionnalités, des publics ou des événements saisonniers spécifiques. Pour de
        nombreuses applications indépendantes, cela signifie concevoir plusieurs ensembles de captures d&apos;écran
        issus du même produit mais racontant des histoires différentes.
      </p>
      <p>
        Apple précise que vous pouvez publier jusqu&apos;à 70 pages produit personnalisées
        supplémentaires pour les applications iPhone et iPad. Chaque page peut proposer des captures d&apos;écran,
        un texte promotionnel et des aperçus d&apos;application différents, et dispose d&apos;une URL unique
        à utiliser dans vos campagnes.
      </p>

      <h2>À quoi servent les pages produit personnalisées</h2>
      <p>
        Une page produit personnalisée ne remplace pas votre fiche produit par défaut.
        Il s&apos;agit d&apos;une page de destination (landing page) ciblée au sein de l&apos;App Store.
        Utilisez-la lorsqu&apos;un visiteur arrive avec une intention précise :
      </p>
      <ul>
        <li>Une campagne payante Apple Ads pour une fonctionnalité en particulier.</li>
        <li>Une promotion saisonnière ou un lancement de produit.</li>
        <li>Un segment d&apos;audience ciblé, comme les étudiants, les indépendants ou les équipes.</li>
        <li>Un marché local où un cas d&apos;usage est plus important qu&apos;un autre.</li>
        <li>Un lien profond (deep link) redirigeant vers une section spécifique de votre application.</li>
      </ul>

      <h2>Ce que vous pouvez personnaliser</h2>
      <p>
        Selon la{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation d&apos;Apple sur les pages produit personnalisées
        </a>
        , celles-ci peuvent faire varier les captures d&apos;écran, le texte promotionnel et les
        aperçus d&apos;application. Dans App Store Connect, vous pouvez démarrer à partir d&apos;une page
        vierge ou copier votre page produit par défaut, puis adapter les ressources pour les
        différentes langues de la page.
      </p>
      <p>
        Apple indique également que les pages produit personnalisées peuvent être associées à Apple Ads et
        apparaître dans les résultats de recherche pertinents. Vous pouvez attribuer des mots-clés à une
        page produit personnalisée, mais ces mots-clés doivent correspondre à l&apos;intention de la page
        et chaque combinaison de mots-clés doit être unique à une seule page produit personnalisée.
      </p>

      <h2>Stratégie pour vos captures d&apos;écran</h2>
      <p>
        L&apos;erreur classique consiste à copier vos captures d&apos;écran par défaut et à modifier
        uniquement le premier titre. Une page produit personnalisée doit sembler spécifiquement conçue
        pour le public qui a cliqué sur le lien.
      </p>
      <p>
        Construisez chaque ensemble de captures d&apos;écran autour d&apos;un angle précis :
      </p>
      <ul>
        <li>
          <strong>Page fonctionnalité :</strong> mettez en avant la fonctionnalité, puis présentez
          le flux de travail et les preuves d&apos;efficacité.
        </li>
        <li>
          <strong>Page audience :</strong> adoptez un ton et des exemples qui
          correspondent au groupe cible.
        </li>
        <li>
          <strong>Page saisonnière :</strong> rendez la campagne pertinente, tout en
          gardant l&apos;expérience de l&apos;application claire.
        </li>
        <li>
          <strong>Page de localisation :</strong> mettez en avant le cas d&apos;usage le plus
          important pour ce marché spécifique.
        </li>
      </ul>

      <h2>Exemple : une application, trois pages</h2>
      <p>
        Imaginons un outil de suivi des habitudes. La page produit par défaut explique l&apos;ensemble de
        l&apos;application. Les pages produit personnalisées pourraient se concentrer sur :
      </p>
      <ul>
        <li>
          <strong>Habitudes de fitness :</strong> séries d&apos;entraînements, graphiques de progression,
          rappels et intégration avec Apple Santé.
        </li>
        <li>
          <strong>Habitudes d&apos;étude :</strong> objectifs de lecture, sessions de concentration et
          routines de préparation aux examens.
        </li>
        <li>
          <strong>Campagne du Nouvel An :</strong> résolutions de rentrée, configuration simple
          et progression de la première semaine.
        </li>
      </ul>
      <p>
        L&apos;application reste la même. Les captures d&apos;écran diffèrent car les motivations
        du visiteur sont différentes.
      </p>

      <h2>Comment concevoir votre ensemble de captures d&apos;écran</h2>
      <ol>
        <li>Définissez l&apos;objectif de la campagne avant d&apos;ouvrir votre outil de conception.</li>
        <li>Choisissez le titre de la première capture d&apos;écran en fonction de cet objectif.</li>
        <li>Réutilisez votre structure de base pour que les cadres, les polices et les dimensions d&apos;exportation restent cohérents.</li>
        <li>Remplacez les captures d&apos;écran de l&apos;application par des visuels qui appuient l&apos;angle de la campagne.</li>
        <li>Traduisez les textes des captures d&apos;écran si la page cible un marché linguistique particulier.</li>
        <li>Exportez les mêmes tailles d&apos;appareils requises que pour votre page produit par défaut.</li>
      </ol>
      <p>
        Pour connaître les dimensions requises, consultez les{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          spécifications des captures d&apos;écran
        </a>{" "}
        d&apos;Apple ou notre{" "}
        <a href="/blog/app-store-screenshot-sizes">
          guide des tailles de captures d&apos;écran de l&apos;App Store
        </a>
        .
      </p>

      <h2>Examen et mesure des performances</h2>
      <p>
        Apple précise que les métadonnées des pages produit personnalisées doivent être soumises à
        validation de manière indépendante des mises à jour de l&apos;application. Une fois les pages en
        ligne, vous pouvez mesurer leurs performances dans App Analytics, notamment les impressions de
        la page produit, les téléchargements, les retéléchargements et les taux de conversion.
      </p>
      <p>
        Ne jugez pas une page produit personnalisée uniquement à son taux de conversion. Si une page
        est liée à des campagnes d&apos;acquisition payantes, surveillez également la rétention, les
        revenus générés et la pertinence des profils d&apos;utilisateurs recrutés.
      </p>

      <h2>Pages produit personnalisées vs tests A/B</h2>
      <p>
        Utilisez l&apos;optimisation de la page produit (Product Page Optimization) lorsque vous souhaitez
        tester des variantes par rapport à votre fiche par défaut. Utilisez les pages produit personnalisées
        lorsque vous connaissez déjà l&apos;audience ou la campagne et que vous avez besoin d&apos;une page
        de destination dédiée sur l&apos;App Store. Ces solutions sont complémentaires mais répondent à des
        besoins distincts.
      </p>
      <p>
        Pour définir votre stratégie de test, lisez{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          Comment tester en A/B vos captures d&apos;écran sur l&apos;App Store et Google Play
        </a>
        .
      </p>

      <h2>Comment Screenshot Bro vous aide</h2>
      <p>
        Les pages produit personnalisées multiplient votre charge de travail. Une seule application peut
        rapidement nécessiter une page par défaut, trois pages de campagne, cinq langues et plusieurs formats
        d&apos;appareils. <a href="/">Screenshot Bro</a> vous aide en gérant vos captures d&apos;écran au sein de
        projets locaux réutilisables, avec gestion des formats, localisation, export en lot et téléversement
        sur App Store Connect.
      </p>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        يجب أن تشرح صفحة المنتج الافتراضية في متجر التطبيقات التطبيق بالكامل.
        تتيح لك صفحات المنتج المخصصة إنشاء إصدارات أكثر تركيزًا لحملات أو ميزات أو جماهير
        معينة أو مواسم معينة. بالنسبة للعديد من التطبيقات المستقلة، يعني ذلك إنشاء
        مجموعات لقطات شاشة متعددة تأتي جميعها من نفس المنتج ولكنها تروي قصصًا مختلفة.
      </p>
      <p>
        تقول Apple إنه يمكنك نشر ما يصل إلى 70 صفحة منتج مخصصة إضافية لتطبيقات
        iPhone و iPad. يمكن لكل صفحة تغيير لقطات الشاشة والنصوص الترويجية ومعاينات التطبيقات،
        وتحصل كل صفحة على عنوان URL فريد يمكنك استخدامه في الحملات.
      </p>

      <h2>ما الهدف من صفحات المنتج المخصصة</h2>
      <p>
        صفحة المنتج المخصصة ليست بديلاً عن صفحتك الافتراضية. إنها صفحة هبوط مستهدفة
        داخل متجر التطبيقات. استخدم واحدة عندما يصل الزائر بنية محددة:
      </p>
      <ul>
        <li>حملة إعلانية مدفوعة على Apple Ads لميزة واحدة.</li>
        <li>عرض ترويجي موسمي أو لحظة إطلاق المنتج.</li>
        <li>شريحة جمهور محددة، مثل الطلاب أو المستقلين أو فرق العمل.</li>
        <li>سوق محلي حيث تهم حالة استخدام معينة أكثر من غيرها.</li>
        <li>رابط عميق يؤدي إلى جزء معين داخل تطبيقك.</li>
      </ul>

      <h2>ما الذي يمكنك تخصيصه</h2>
      <p>
        وفقًا لـ{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          وثائق صفحات المنتج المخصصة
        </a>{" "}
        من Apple، يمكن لصفحات المنتج المخصصة تغيير لقطات الشاشة والنصوص الترويجية ومعاينات التطبيقات.
        في App Store Connect، يمكنك البدء بصفحة فارغة أو نسخ صفحة المنتج الافتراضية الخاصة بك، ثم
        تخصيص الأصول للترجمات المحلية للموقع.
      </p>
      <p>
        تقول Apple أيضًا إنه يمكن استخدام صفحات المنتج المخصصة مع إعلانات Apple وتظهر في نتائج البحث ذات
        الصلة. يمكنك تخصيص كلمات رئيسية لصفحة منتج مخصصة، ولكن يجب أن تتطابق الكلمات الرئيسية مع نية تلك
        الصفحة ويجب أن تكون كل تركيبة كلمات رئيسية فريدة لصفحة منتج مخصصة واحدة.
      </p>

      <h2>استراتيجية لقطات الشاشة</h2>
      <p>
        الخطأ الشائع هو نسخ لقطات الشاشة الافتراضية وتغيير العنوان الرئيسي الأول فقط.
        يجب أن تشعر صفحة المنتج المخصصة بأنها صممت خصيصًا للجمهور الذي نقر فوق الرابط.
      </p>
      <p>
        صمم كل مجموعة لقطات شاشة حول زاوية واحدة:
      </p>
      <ul>
        <li>
          <strong>صفحة الميزة:</strong> ابدأ بالميزة، ثم اعرض سير العمل والنتائج المثبتة.
        </li>
        <li>
          <strong>صفحة الجمهور:</strong> استخدم لغة وأمثلة تطابق الفئة المستهدفة.
        </li>
        <li>
          <strong>الصفحة الموسمية:</strong> اجمل الحملة ملائمة للموسم، مع الحفاظ على وضوح
          تجربة التطبيق.
        </li>
        <li>
          <strong>صفحة التوطين:</strong> ابدأ بحالة الاستخدام الأكثر أهمية في هذا السوق المحلي.
        </li>
      </ul>

      <h2>مثال: تطبيق واحد، ثلاث صفحات</h2>
      <p>
        تخيل تطبيقًا لتتبع العادات. تشرح صفحة المنتج الافتراضية التطبيق بالكامل. يمكن لصفحات
        المنتج المخصصة التركيز على:
      </p>
      <ul>
        <li>
          <strong>عادات اللياقة البدنية:</strong> سلاسل التدريبات، ومخططات التقدم، والتذكيرات،
          والربط مع Apple Health.
        </li>
        <li>
          <strong>عادات الدراسة:</strong> أهداف القراءة، وجلسات التركيز، وروتين التحضير للاختبارات.
        </li>
        <li>
          <strong>حملة رأس السنة:</strong> أهداف البداية الجديدة، والإعداد السهل، ومتابعة
          تقدم الأسبوع الأول.
        </li>
      </ul>
      <p>
        التطبيق هو نفسه. تختلف لقطات الشاشة لأن دوافع الزائر مختلفة.
      </p>

      <h2>كيفية تصميم مجموعة لقطات الشاشة</h2>
      <ol>
        <li>حدد هدف الحملة قبل فتح أداة التصميم.</li>
        <li>اختر عنوان لقطة الشاشة الأولى بما يتوافق مع هذا الهدف.</li>
        <li>أعد استخدام نظام لقطات الشاشة الأساسي الخاص بك لكي تظل الإطارات والخطوط وأحجام التصدير متسقة.</li>
        <li>استبدل لقطات شاشة التطبيق بلقطات تدعم زاوية الحملة.</li>
        <li>ترجم نصوص لقطات الشاشة إذا كانت الصفحة تستهدف سوقًا معينًا.</li>
        <li>صدر نفس أحجام الأجهزة المطلوبة لصفحة المنتج الافتراضية.</li>
      </ol>
      <p>
        للاطلاع على الأبعاد الصحيحة، استخدم{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          مواصفات لقطات الشاشة
        </a>{" "}
        من Apple أو{" "}
        <a href="/blog/app-store-screenshot-sizes">
          دليل أحجام لقطات شاشة متجر التطبيقات
        </a>{" "}
        الخاص بهذا الموقع.
      </p>

      <h2>المراجعة والقياس</h2>
      <p>
        تقول Apple إن البيانات الوصفية في صفحات المنتج المخصصة يجب تقديمها للمراجعة بشكل مستقل عن
        تحديث التطبيق. بمجرد أن تصبح الصفحات مباشرة، يمكنك قياس الأداء في App Analytics، بما في
        ذلك مرات ظهور صفحة المنتج والتنزيلات وإعادة التنزيل ومعدلات التحويل.
      </p>
      <p>
        لا تحكم على صفحة منتج مخصصة من خلال معدل التحويل فقط. إذا كانت الصفحة مرتبطة بحملة جذب
        مدفوعة، فراقب أيضًا معدل الاحتفاظ والمكاسب، وما إذا كانت رسالة الحملة تجذب المستخدمين المناسبين.
      </p>

      <h2>صفحات المنتج المخصصة مقابل اختبارات A/B</h2>
      <p>
        استخدم تحسين صفحة المنتج (Product Page Optimization) عندما تريد اختبار متغيرات مقابل
        صفحتك الافتراضية. استخدم صفحات المنتج المخصصة عندما تكون على دراية بالجمهور أو الحملة مسبقًا
        وتحتاج إلى صفحة هبوط مستهدفة في متجر التطبيقات. هما مرتبطان، ولكنهما يحلان مشكلتين مختلفتين.
      </p>
      <p>
        لمعرفة استراتيجية الاختبار، اقرأ{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          كيفية إجراء اختبار A/B للقطات شاشة متجر التطبيقات وجوجل بلاي
        </a>
        .
      </p>

      <h2>كيف يساعد تطبيق Screenshot Bro</h2>
      <p>
        تضاعف صفحات المنتج المخصصة عبء عمل لقطات الشاشة. فالتطبيق الواحد قد يحتاج سريعًا إلى صفحة
        افتراضية، وثلاث صفحات حملات، وخمس لغات، وأحجام أجهزة متعددة. يساعدك <a href="/">Screenshot Bro</a>{" "}
        من خلال الاحتفاظ بلقطات الشاشة الخاصة بك في مشاريع محلية قابلة لإعادة الاستخدام مع إطارات
        الأجهزة والتوطين والتصدير الجماعي والرفع إلى App Store Connect.
      </p>
    </>
  );
}
