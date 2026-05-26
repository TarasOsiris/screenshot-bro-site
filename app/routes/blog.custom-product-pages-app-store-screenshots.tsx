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
    case "de":
      return "Erstellen Sie kampagnenspezifische App Store-Screenshot-Sets, ohne jede Datei manuell neu erstellen zu müssen.";
    case "ja":
      return "すべてのファイルを手作業で作り直すことなく、キャンペーン専用のApp Storeスクリーンショットセットを作成できます。";
    case "pt":
      return "Crie conjuntos de capturas de tela da App Store específicos para campanhas sem precisar refazer cada arquivo manualmente.";
    case "it":
      return "Crea set di screenshot dell'App Store specifici per le campagne senza dover ricostruire manualmente ogni singolo file.";
    case "ko":
      return "모든 파일을 수작업으로 다시 만들 필요 없이 캠페인 맞춤형 App Store 스크린샷 세트를 제작하세요.";
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
    case "de":
      return "Screenshot Bro herunterladen";
    case "ja":
      return "Screenshot Broをダウンロード";
    case "pt":
      return "Baixar Screenshot Bro";
    case "it":
      return "Scarica Screenshot Bro";
    case "ko":
      return "Screenshot Bro 다운로드";
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
    case "de":
      return <ContentDe />;
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
        Apple का कहना है कि आप iPhone &amp; iPad ऐप्स के लिए 70 तक अतिरिक्त कस्टम उत्पाद पृष्ठ
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
          अनुभव को स्पष्ट रखें。
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
        앱은 동일합니다. 단지 방문자의 동기가 다르기 때문에 스크린샷이 다르게 보일 뿐입니다.
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
        page produit personnalisée, mas ces mots-clés doivent correspondre à l&apos;intention de la page
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

function ContentDe() {
  return (
    <>
      <p>
        Ihre Standard-App-Store-Produktseite muss die gesamte App erklären.
        Eigene Produktseiten ermöglichen es Ihnen, fokussiertere Versionen für
        bestimmte Kampagnen, Funktionen, Zielgruppen oder saisonale Momente zu erstellen. Für
        viele Indie-Apps bedeutet das die Erstellung mehrerer Screenshot-Sets, die
        alle vom selben Produkt stammen, aber unterschiedliche Geschichten erzählen.
      </p>
      <p>
        Laut Apple können Sie bis zu 70 zusätzliche eigene Produktseiten
        für iPhone- und iPad-Apps veröffentlichen. Jede Seite kann unterschiedliche Screenshots,
        Werbetexte und App-Vorschauen enthalten, und jede Seite erhält eine eindeutige URL,
        die Sie in Kampagnen verwenden können.
      </p>

      <h2>Wofür eigene Produktseiten da sind</h2>
      <p>
        Eine eigene Produktseite ist kein Ersatz für Ihren Standard-Eintrag.
        Sie ist eine zielgerichtete Landingpage innerhalb des App Stores. Verwenden Sie eine, wenn ein
        Besucher mit einer bestimmten Absicht ankommt:
      </p>
      <ul>
        <li>Eine bezahlte Apple Ads-Kampagne für eine bestimmte Funktion.</li>
        <li>Eine saisonale Werbeaktion oder ein Launch-Event.</li>
        <li>Ein bestimmtes Zielgruppensegment wie Studenten, Freiberufler oder Teams.</li>
        <li>Ein lokaler Markt, auf dem ein Anwendungsfall wichtiger ist als ein anderer.</li>
        <li>Ein Deep-Link in einen bestimmten Teil Ihrer App.</li>
      </ul>

      <h2>Was Sie anpassen können</h2>
      <p>
        Laut Apples{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dokumentation zu eigenen Produktseiten
        </a>
        , können eigene Produktseiten unterschiedliche Screenshots, Werbetexte und
        App-Vorschauen enthalten. In App Store Connect können Sie mit einer leeren Seite beginnen
        oder Ihre Standard-Produktseite kopieren und dann die Assets für die
        Lokalisierungen der Seite anpassen.
      </p>
      <p>
        Apple gibt auch an, dass eigene Produktseiten mit Apple Ads verwendet werden können und
        in relevanten Suchergebnissen erscheinen können. Sie können einer eigenen Produktseite
        Keywords zuweisen, aber die Keywords sollten der Absicht dieser Seite entsprechen und
        jede Keyword-Kombination sollte für eine einzelne eigene Produktseite einzigartig sein.
      </p>

      <h2>Screenshot-Strategie</h2>
      <p>
        Der Fehler besteht darin, die Standard-Screenshots zu kopieren und nur
        die erste Überschrift zu ändern. Eine eigene Produktseite sollte sich so anfühlen, als wäre sie
        bewusst für die Zielgruppe erstellt worden, die auf den Link geklickt hat.
      </p>
      <p>
        Bauen Sie jedes Screenshot-Set um einen bestimmten Aspekt herum auf:
      </p>
      <ul>
        <li>
          <strong>Funktionsseite:</strong> Beginnen Sie mit der Funktion, zeigen Sie dann
          den Workflow und den Nutzen.
        </li>
        <li>
          <strong>Zielgruppenseite:</strong> Verwenden Sie eine Sprache und Beispiele, die
          zur Zielgruppe passen.
        </li>
        <li>
          <strong>Saisonale Seite:</strong> Machen Sie die Kampagne relevant, aber
          halten Sie das App-Erlebnis klar verständlich.
        </li>
        <li>
          <strong>Lokalisierungsseite:</strong> Beginnen Sie mit dem Anwendungsfall, der
          in dieser Region am wichtigsten ist.
        </li>
      </ul>

      <h2>Beispiel: Eine App, drei Seiten</h2>
      <p>
        Stellen Sie sich einen Habit Tracker vor. Die Standard-Produktseite erklärt die
        gesamte App. Eigene Produktseiten könnten sich konzentrieren auf:
      </p>
      <ul>
        <li>
          <strong>Fitness-Gewohnheiten:</strong> Trainings-Streaks, Fortschrittsdiagramme,
          Erinnerungen und Apple Health-Kontext.
        </li>
        <li>
          <strong>Lerngewohnheiten:</strong> Leseziele, Fokussitzungen und
          Prüfungsvorbereitungsroutinen.
        </li>
        <li>
          <strong>Neujahrskampagne:</strong> Neuanfang-Ziele, einfaches
          Setup und Fortschritt in der ersten Woche.
        </li>
      </ul>
      <p>
        Die App ist dieselbe. Die Screenshots sind unterschiedlich, weil die
        Motivation des Besuchers eine andere ist.
      </p>

      <h2>So erstellen Sie das Screenshot-Set</h2>
      <ol>
        <li>Definieren Sie die Kampagnenabsicht, bevor Sie ein Design-Tool öffnen.</li>
        <li>Wählen Sie die erste Screenshot-Überschrift passend zu dieser Absicht.</li>
        <li>Verwenden Sie Ihr Basis-Screenshot-System wieder, damit Rahmen, Schriftarten und Exportgrößen konsistent bleiben.</li>
        <li>Ersetzen Sie die App-Screenshots durch Ansichten, die den Kampagnenansatz unterstützen.</li>
        <li>Lokalisieren Sie die Texte der Screenshots, wenn die Seite auf einen bestimmten Markt abzielt.</li>
        <li>Exportieren Sie dieselben erforderlichen Gerätegrößen wie für Ihre Standard-Produktseite.</li>
      </ol>
      <p>
        Für gültige Abmessungen verwenden Sie Apples{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          Screenshot-Spezifikationen
        </a>{" "}
        oder das{" "}
        <a href="/blog/app-store-screenshot-sizes">
          Handbuch für App Store-Screenshot-Größen
        </a>{" "}
        dieser Website.
      </p>

      <h2>Prüfung und Messung</h2>
      <p>
        Apple gibt an, dass Metadaten für eigene Produktseiten unabhängig von einem App-Update zur
        Überprüfung eingereicht werden müssen. Sobald die Seiten online sind, können Sie die Leistung
        in den App-Analysen messen, einschließlich Impressionen der Produktseite, Downloads,
        erneuten Downloads und Konversionsraten.
      </p>
      <p>
        Beurteilen Sie eine eigene Produktseite nicht nur nach der Konversionsrate. Wenn eine
        Seite mit bezahlter Akquisition verknüpft ist, sollten Sie auch die Bindung (Retention), die
        Einnahmen und die Frage im Auge behalten, ob die Kampagnenbotschaft die richtigen Nutzer anzieht.
      </p>

      <h2>Eigene Produktseiten vs. A/B-Tests</h2>
      <p>
        Verwenden Sie die Produktseiten-Optimierung, wenn Sie Varianten mit
        Ihrem Standard-Eintrag vergleichen möchten. Verwenden Sie eigene Produktseiten, wenn Sie
        die Zielgruppe oder Kampagne bereits kennen und eine zielgerichtete App-Store-Landingpage benötigen.
        Sie sind miteinander verwandt, lösen aber unterschiedliche Probleme.
      </p>
      <p>
        Informationen zur Teststrategie finden Sie unter{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          A/B-Testing von App Store- und Google Play-Screenshots
        </a>
        .
      </p>

      <h2>Wie Screenshot Bro hilft</h2>
      <p>
        Eigene Produktseiten vervielfachen Ihren Screenshot-Arbeitsaufwand. Eine App kann
        schnell eine Standardseite, drei Kampagnenseiten, fünf Regionen
        und mehrere Gerätegrößen umfassen. <a href="/">Screenshot Bro</a> hilft Ihnen,
        indem es Ihre Screenshots in wiederverwendbaren lokalen Projekten mit Gerätereihen,
        Lokalisierung, Batch-Export und Upload zu App Store Connect verwaltet.
      </p>
    </>
  );
}

function ContentJa() {
  return (
    <>
      <p>
        デフォルトのApp Store製品ページでは、アプリ全体を説明する必要があります。
        カスタム製品ページを使用すると、特定のキャンペーン、機能、ターゲット層、または季節ごとのイベントに焦点を当てたバージョンを作成できます。
        多くの個人開発アプリにとって、それは同じ製品から作成されながらも異なるストーリーを伝える、複数のスクリーンショットセットを作成することを意味します。
      </p>
      <p>
        Appleによると、iPhoneおよびiPadアプリ向けに最大70個의カスタム製品ページを追加で公開できます。
        各ページでスクリーンショット、プロモーション用テキスト、アプリプレビューを変更することができ、各ページにはキャンペーンで使用できる独自のURLが割り当てられます。
      </p>

      <h2>カスタム製品ページの用途</h2>
      <p>
        カスタム製品ページは、デフォルトのストア掲載情報に代わるものではありません。
        App Store内のターゲットを絞ったランディングページです。訪問者が特定の意図を持って訪れる場合に作成します：
      </p>
      <ul>
        <li>1つの機能に特化したApple Search Adsの有料キャンペーン。</li>
        <li>季節ごとのプロモーションやリリースの瞬間。</li>
        <li>学生、フリーランサー、チームなど、特定のターゲット層のセグメント。</li>
        <li>特定のユースケースが他よりも重視されるローカル市場。</li>
        <li>アプリの特定のセクションへのディープリンク。</li>
      </ul>

      <h2>カスタマイズできる要素</h2>
      <p>
        Appleの{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          カスタム製品ページのドキュメント
        </a>
        によると、カスタム製品ページではスクリーンショット、プロモーション用テキスト、アプリプレビューを変更できます。App Store Connectでは、白紙のページから作成することも、デフォルトの製品ページをコピーして、ページの各ローカライズ版のアセットをカスタマイズすることもできます。
      </p>
      <p>
        また、Appleはカスタム製品ページがApple Search Adsで使用可能であり、関連する検索結果に表示される場合があるとしています。カスタム製品ページにキーワードを割り当てることができますが、キーワードはそのページの意図と一致している必要があり、各キーワードの組み合わせは1つのカスタム製品ページに対して一意である必要があります。
      </p>

      <h2>スクリーンショットの戦略</h2>
      <p>
        よくある間違いは、デフォルトのスクリーンショットをコピーして、最初の見出しだけを変更することです。
        カスタム製品ページは、リンクをクリックしたユーザーに合わせて意図的に作られていると感じられるものであるべきです。
      </p>
      <p>
        それぞれのスクリーンショットセットを、1つの側面に絞って構築します：
      </p>
      <ul>
        <li>
          <strong>機能紹介ページ：</strong>まず機能を紹介し、次にワークフローと実績を示します。
        </li>
        <li>
          <strong>ターゲット層向けページ：</strong>ターゲット層に響く言葉や具体例を使用します。
        </li>
        <li>
          <strong>季節イベントページ：</strong>キャンペーンに関連性を持たせつつ、アプリの体験を明確に伝えます。
        </li>
        <li>
          <strong>ローカライズページ：</strong>その地域で最も重視されるユースケースを優先して提示します。
        </li>
      </ul>

      <h2>例：1つのアプリ、3つのページ</h2>
      <p>
        習慣トラッカーアプリを例に考えてみましょう。デフォルトの製品ページではアプリ全体を説明します。カスタム製品ページでは以下に焦点を当てることができます：
      </p>
      <ul>
        <li>
          <strong>フィットネス習慣：</strong>ワークアウトの継続記録、進捗チャート、リマインダー、Appleヘルスケアとの連携。
        </li>
        <li>
          <strong>学習習慣：</strong>読書目標、集中セッション、試験対策のルーティン。
        </li>
        <li>
          <strong>新年キャンペーン：</strong>新年からの新たな目標、シンプルな設定、最初の1週間の進捗。
        </li>
      </ul>
      <p>
        アプリは同じですが、訪問者の目的が異なるため、スクリーンショットも異なります。
      </p>

      <h2>スクリーンショットセットの作成手順</h2>
      <ol>
        <li>デザインツールを開く前に、キャンペーンの目的を明確にします。</li>
        <li>その目的に合わせて、最初のスクリーンショットの見出しを決めます。</li>
        <li>ベースとなるスクリーンショットの仕組みを再利用し、デバイスのフレーム、フォント、書き出しサイズの一貫性を保ちます。</li>
        <li>キャンペーンの切り口をサポートする画面に、アプリのスクリーンショットを差し替えます。</li>
        <li>特定の市場をターゲットにする場合は、スクリーンショットのテキストをローカライズします。</li>
        <li>デフォルトの製品ページと同じ、必須의デバイスサイズで書き出します。</li>
      </ol>
      <p>
        正しいサイズについては、Appleの{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          スクリーンショットの仕様
        </a>{" "}
        または当サイトの{" "}
        <a href="/blog/app-store-screenshot-sizes">
          App Storeスクリーンショットサイズガイド
        </a>
        を参照してください。
      </p>

      <h2>審査と効果測定</h2>
      <p>
        Appleによると、カスタム製品ページのメタデータは、アプリのアップデートとは無関係に審査に提出する必要があります。ページが公開された後は、App Analyticsで製品ページのインプレッション数、ダウンロード数、再ダウンロード数、コンバージョン率などのパフォーマンスを測定できます。
      </p>
      <p>
        コンバージョン率だけでカスタム製品ページを評価しないでください。ページが有料広告キャンペーンと連動している場合は、継続率や収益、さらにキャンペーンのメッセージが適切なユーザーを引きつけているかどうかにも注目してください。
      </p>

      <h2>カスタム製品ページ vs A/Bテスト</h2>
      <p>
        デフォルトの製品ページに対してバリエーションをテストしたい場合は、「プロダクトページの最適化（PPO）」を使用します。ターゲット層やキャンペーンがすでに決まっており、App Store内で専用のランディングページが必要な場合は、「カスタム製品ページ」を使用します。これらは関連していますが、解決する課題が異なります。
      </p>
      <p>
        テスト戦略については、こちらの記事をご覧ください：{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          App StoreとGoogle PlayのスクリーンショットでA/Bテストを実施する方法
        </a>
        。
      </p>

      <h2>Screenshot Broの活用方法</h2>
      <p>
        カスタム製品ページを作成すると、スクリーンショット作業の手間が何倍にも増えます。1つのアプリで、デフォルトページ、3つのキャンペーンページ、5つのロケール、そして複数のデバイスサイズがすぐに必要になります。<a href="/">Screenshot Bro</a>は、デバイス行、ローカライズ、一括書き出し、App Store Connectへのアップロード機能を備えた、再利用可能なローカルプロジェクトにスクリーンショットを保持することで作業をサポートします。
      </p>
    </>
  );
}

function ContentPt() {
  return (
    <>
      <p>
        Sua página de produto padrão da App Store precisa explicar o aplicativo inteiro.
        As páginas de produto personalizadas permitem criar versões mais focadas para
        campanhas, recursos, públicos ou momentos sazonais específicos. Para
        muitos aplicativos independentes, isso significa criar vários conjuntos de capturas de tela que
        vêm do mesmo produto, mas contam histórias diferentes.
      </p>
      <p>
        A Apple afirma que você pode publicar até 70 páginas de produto personalizadas adicionais
        para aplicativos de iPhone e iPad. Cada página pode variar capturas de tela,
        texto promocional e prévias do aplicativo, e cada página recebe um URL exclusivo
        que você pode usar em campanhas.
      </p>

      <h2>Para que servem as páginas de produto personalizadas</h2>
      <p>
        Uma página de produto personalizada não substitui sua listagem padrão.
        Ela é uma página de destino direcionada dentro da App Store. Use uma quando o
        visitante chegar com uma intenção específica:
      </p>
      <ul>
        <li>Uma campanha paga do Apple Ads para um recurso específico.</li>
        <li>Uma promoção sazonal ou momento de lançamento.</li>
        <li>Um segmento de público específico, como estudantes, freelancers ou equipes.</li>
        <li>Um mercado local onde um caso de uso é mais importante do que outro.</li>
        <li>Um link direto para uma parte específica do seu aplicativo.</li>
      </ul>

      <h2>O que você pode personalizar</h2>
      <p>
        De acordo com a{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentação de páginas de produto personalizadas
        </a>{" "}
        da Apple, as páginas de produto personalizadas podem variar capturas de tela, texto promocional e
        prévias do aplicativo. No App Store Connect, você pode começar com uma página em branco
        ou copiar sua página de produto padrão e, em seguida, personalizar os recursos para as
        localizações da página.
      </p>
      <p>
        A Apple também afirma que as páginas de produto personalizadas podem ser usadas com o Apple Ads e
        podem aparecer em resultados de pesquisa relevantes. Você pode atribuir palavras-chave a uma
        página de produto personalizada, mas as palavras-chave devem corresponder à intenção dessa página e
        cada combinação de palavras-chave deve ser exclusiva para uma única página de produto personalizada.
      </p>

      <h2>Estratégia de capturas de tela</h2>
      <p>
        O erro comum é copiar suas capturas de tela padrão e alterar apenas
        o primeiro título. Uma página de produto personalizada deve parecer intencionalmente
        construída para o público que clicou no link.
      </p>
      <p>
        Crie cada conjunto de capturas de tela em torno de um ângulo:
      </p>
      <ul>
        <li>
          <strong>Página de recurso:</strong> comece com o recurso, depois mostre
          o fluxo de trabalho e a prova de eficácia.
        </li>
        <li>
          <strong>Página de público:</strong> use linguagem e exemplos que
          se adaptem ao grupo-alvo.
        </li>
        <li>
          <strong>Página sazonal:</strong> torne a campanha relevante, mas
          mantenha a experiência do aplicativo clara.
        </li>
        <li>
          <strong>Página de localização:</strong> comece com o caso de uso que
          mais importa nessa região.
        </li>
      </ul>

      <h2>Exemplo: um aplicativo, três páginas</h2>
      <p>
        Imagine um rastreador de hábitos. A página de produto padrão explica todo o
        aplicativo. As páginas de produto personalizadas podem focar em:
      </p>
      <ul>
        <li>
          <strong>Hábitos de fitness:</strong> sequências de treinos, gráficos de progresso,
          lembretes e contexto com o Apple Health.
        </li>
        <li>
          <strong>Hábitos de estudo:</strong> metas de leitura, sessões de foco e
          rotinas de preparação para exames.
        </li>
        <li>
          <strong>Campanha de Ano Novo:</strong> metas de recomeço, configuração simples
          e progresso na primeira semana.
        </li>
      </ul>
      <p>
        O aplicativo é o mesmo. As capturas de tela são diferentes porque a
        motivação do visitante é diferente.
      </p>

      <h2>Como criar o conjunto de capturas de tela</h2>
      <ol>
        <li>Defina a intenção da campanha antes de abrir uma ferramenta de design.</li>
        <li>Escolha o título da primeira captura de tela para essa intenção.</li>
        <li>Reutilize seu sistema básico de capturas de tela para que molduras, fontes e tamanhos de exportação permaneçam consistentes.</li>
        <li>Substitua as capturas de tela do aplicativo por telas que apoiem o ângulo da campanha.</li>
        <li>Localize o texto da captura de tela se a página for direcionada a um mercado específico.</li>
        <li>Exporte os mesmos tamanhos de dispositivo exigidos da sua página de produto padrão.</li>
      </ol>
      <p>
        Para dimensões válidas, use as{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          especificações de captura de tela
        </a>{" "}
        da Apple ou o{" "}
        <a href="/blog/app-store-screenshot-sizes">
          guia de tamanhos de captura de tela da App Store
        </a>{" "}
        deste site.
      </p>

      <h2>Revisão e medição</h2>
      <p>
        A Apple afirma que os metadados das páginas de produto personalizadas devem ser enviados para
        revisão, independentemente de uma atualização do aplicativo. Assim que as páginas estiverem ativas, você poderá
        medir o desempenho no App Analytics, incluindo impressões da página de produto, downloads, redownloads e taxas de conversão.
      </p>
      <p>
        Não julgue uma página de produto personalizada apenas pela taxa de conversão. Se uma
        página estiver vinculada a uma aquisição paga, acompanhe também a retenção, os lucros e
        se a mensagem da campanha atrai os usuários certos.
      </p>

      <h2>Páginas de produto personalizadas vs. Testes A/B</h2>
      <p>
        Use a Otimização da Página de Produto quando quiser testar variantes em relação à
        sua listagem padrão. Use páginas de produto personalizadas quando você já conhecer
        o público ou a campanha e precisar de uma página de destino direcionada na App Store.
        Elas estão relacionadas, mas resolvem problemas diferentes.
      </p>
      <p>
        Para estratégias de teste, leia{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          Como fazer testes A/B em capturas de tela da App Store e do Google Play
        </a>
        .
      </p>

      <h2>Como o Screenshot Bro ajuda</h2>
      <p>
        As páginas de produto personalizadas multiplicam seu volume de trabalho com capturas de tela. Um aplicativo pode
        rapidamente exigir uma página padrão, três páginas de campanha, cinco idiomas e
        vários tamanhos de dispositivo. O <a href="/">Screenshot Bro</a> ajuda ao
        manter suas capturas de tela em projetos locais reutilizáveis com linhas de dispositivos,
        localização, exportação em lote e upload para o App Store Connect.
      </p>
    </>
  );
}

function ContentIt() {
  return (
    <>
      <p>
        La tua pagina del prodotto predefinita dell&apos;App Store deve spiegare l&apos;intera app.
        Le pagine del prodotto personalizzate ti consentono di creare versioni più mirate per
        campagne, funzionalità, segmenti di pubblico o momenti stagionali specifici. Per
        molte app indie, ciò significa creare più set di screenshot che
        provengono tutti dallo stesso prodotto ma raccontano storie diverse.
      </p>
      <p>
        Apple afferma che è possibile pubblicare fino a 70 pagine del prodotto personalizzate aggiuntive
        per le app iPhone e iPad. Ogni pagina può variare screenshot,
        testo promozionale e anteprime dell&apos;app, e ogni pagina ottiene un URL unico
        da poter utilizzare nelle campagne.
      </p>

      <h2>A cosa servono le pagine del prodotto personalizzate</h2>
      <p>
        Una pagina del prodotto personalizzata non sostituisce la tua scheda di presentazione predefinita.
        Si tratta di una landing page mirata all&apos;interno dell&apos;App Store. Usane una quando un
        visitatore arriva con un intento specifico:
      </p>
      <ul>
        <li>Una campagna Apple Ads a pagamento per una singola funzionalità.</li>
        <li>Una promozione stagionale o il momento del lancio.</li>
        <li>Un segmento di pubblico specifico, come studenti, freelancer o team.</li>
        <li>Un mercato locale in cui un caso d&apos;uso è più importante di un altro.</li>
        <li>Un deep link a una parte specifica della tua app.</li>
      </ul>

      <h2>Cosa puoi personalizzare</h2>
      <p>
        Secondo la{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentazione sulle pagine del prodotto personalizzate
        </a>{" "}
        di Apple, le pagine del prodotto personalizzate possono variare screenshot, testo promozionale e
        anteprime dell&apos;app. In App Store Connect, puoi iniziare da una pagina vuota
        o copiare la tua pagina del prodotto predefinita, quindi personalizzare le risorse per le
        localizzazioni della pagina.
      </p>
      <p>
        Apple afferma inoltre che le pagine del prodotto personalizzate possono essere utilizzate con Apple Ads e
        possono apparire nei risultati di ricerca pertinenti. Puoi assegnare parole chiave a una
        pagina del prodotto personalizzata, ma le parole chiave dovrebbero corrispondere all&apos;intento di
        quella pagina e ogni combinazione di parole chiave dovrebbe essere unica per una singola pagina del prodotto personalizzata.
      </p>

      <h2>Strategia per gli screenshot</h2>
      <p>
        L&apos;erro più comune consiste nel copiare gli screenshot predefiniti e modificare solo
        il primo titolo. Una pagina del prodotto personalizzata dovrebbe sembrare creata intenzionalmente
        per il pubblico che ha fatto clic sul collegamento.
      </p>
      <p>
        Costruisci ogni set di screenshot attorno a una prospettiva specifica:
      </p>
      <ul>
        <li>
          <strong>Pagina funzionalità:</strong> inizia con la funzionalità, quindi mostra
          il flusso di lavoro e le prove di efficacia.
        </li>
        <li>
          <strong>Pagina pubblico:</strong> utilizza un linguaggio e degli esempi che
          corrispondano al gruppo target.
        </li>
        <li>
          <strong>Pagina stagionale:</strong> rende la campagna pertinente, ma
          mantieni chiara l&apos;esperienza dell&apos;app.
        </li>
        <li>
          <strong>Pagina di localizzazione:</strong> inizia con il caso d&apos;uso che
          conta di più in quell&apos;area geografica.
        </li>
      </ul>

      <h2>Esempio: un&apos;app, tre pagine</h2>
      <p>
        Immagina un tracciatore di abitudini. La pagina del prodotto predefinita spiega l&apos;intera
        app. Le pagine del prodotto personalizzate potrebbero concentrarsi su:
      </p>
      <ul>
        <li>
          <strong>Abitudini di fitness:</strong> serie di allenamenti, grafici di progresso,
          promemoria e integrazione con Apple Salute.
        </li>
        <li>
          <strong>Abitudini di studio:</strong> obiettivi di lettura, sessioni di concentrazione e
          routine di preparazione agli esami.
        </li>
        <li>
          <strong>Campagna di Capodanno:</strong> obiettivi di nuovo inizio, configurazione semplice
          e progressi della prima settimana.
        </li>
      </ul>
      <p>
        L&apos;app è la stessa. Gli screenshot sono diversi perché la
        motivazione del visitatore è diversa.
      </p>

      <h2>Come creare il set di screenshot</h2>
      <ol>
        <li>Definisci l&apos;intento della campagna prima di aprire uno strumento di progettazione.</li>
        <li>Scegli il titolo del primo screenshot adatto a quell&apos;intento.</li>
        <li>Riusa il tuo sistema di screenshot di base in modo che cornici, caratteri e dimensioni di esportazione rimangano coerenti.</li>
        <li>Sostituisci gli screenshot dell&apos;app con schermate che supportino l&apos;angolazione della campagna.</li>
        <li>Localizza i testi degli screenshot se la pagina si rivolge a un mercato specifico.</li>
        <li>Esporta le stesse dimensioni del dispositivo richieste per la tua pagina del prodotto predefinita.</li>
      </ol>
      <p>
        Per le dimensioni valide, consulta le{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          specifiche degli screenshot
        </a>{" "}
        di Apple o la{" "}
        <a href="/blog/app-store-screenshot-sizes">
          guida alle dimensioni degli screenshot dell&apos;App Store
        </a>{" "}
        di questo sito.
      </p>

      <h2>Revisione e misurazione</h2>
      <p>
        Apple precisa che i metadati nelle pagine del prodotto personalizzate devono essere inviati per la
        revisione, indipendentemente dall&apos;aggiornamento dell&apos;app. Una volta che le pagine sono attive, puoi
        misurare le prestazioni in App Analytics, inclusi le visualizzazioni della pagina del prodotto, i download, i nuovi download e i tassi di conversione.
      </p>
      <p>
        Non giudicare una pagina del prodotto personalizzata solo in base al tasso di conversione. Se una
        pagina è legata all&apos;acquisizione a pagamento, osserva anche la ritenzione, i ricavi e
        se il messaggio della campagna attira gli utenti giusti.
      </p>

      <h2>Pagine del prodotto personalizzate vs Test A/B</h2>
      <p>
        Utilizza l&apos;ottimizzazione della pagina del prodotto quando desideri testare varianti rispetto alla
        tua scheda predefinita. Cultilizza le pagine del prodotto personalizzate quando conosci già
        il pubblico o la campagna e hai bisogno di una landing page mirata sull&apos;App Store.
        Sono correlate, ma risolvono problemi diversi.
      </p>
      <p>
        Per la strategia di test, leggi{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          Come eseguire test A/B sugli screenshot di App Store e Google Play
        </a>
        .
      </p>

      <h2>Come ti aiuta Screenshot Bro</h2>
      <p>
        Le pagine del prodotto personalizzate moltiplicano il carico di lavoro per gli screenshot. Un&apos;app può
        diventare rapidamente una pagina predefinita, tre pagine di campagna, cinque lingue
        e più dimensioni del dispositivo. <a href="/">Screenshot Bro</a> ti aiuta
        mantenendo i tuoi screenshot in progetti locali riutilizzabili con righe di dispositivi,
        localizzazione, esportazione in batch e caricamento su App Store Connect.
      </p>
    </>
  );
}

function ContentKo() {
  return (
    <>
      <p>
        기본 App Store 제품 페이지는 앱 전체를 설명해야 합니다.
        맞춤형 제품 페이지를 사용하면 특정 캠페인, 기능, 타겟 고객 또는 시즌별 이벤트에 맞춰 더욱 집중된 버전을 만들 수 있습니다.
        많은 인디 앱의 경우, 이는 동일한 제품에서 시작하지만 서로 다른 이야기를 전달하는 여러 스크린샷 세트를 만드는 것을 의미합니다.
      </p>
      <p>
        Apple에 따르면 iPhone 및 iPad 앱용으로 최대 70개의 맞춤형 제품 페이지를 추가로 게시할 수 있습니다.
        각 페이지마다 스크린샷, 홍보 텍스트, 앱 미리보기를 다르게 구성할 수 있으며, 캠페인에 사용할 수 있는 고유한 URL이 제공됩니다.
      </p>

      <h2>맞춤형 제품 페이지의 용도</h2>
      <p>
        맞춤형 제품 페이지는 기본 스토어 등록정보를 대체하는 것이 아닙니다.
        이는 App Store 내부의 타겟팅된 랜딩 페이지입니다. 방문자가 특정 의도를 가지고 유입될 때 유용합니다:
      </p>
      <ul>
        <li>하나의 특정 기능을 타겟팅한 유료 Apple Search Ads 캠페인.</li>
        <li>시즌별 프로모션 또는 출시 이벤트.</li>
        <li>학생, 프리랜서, 팀 등 특정 타겟 고객 세그먼트.</li>
        <li>특정 유즈케이스가 다른 것보다 더 중요한 로컬 시장.</li>
        <li>앱의 특정 위치로 연결되는 딥 링크.</li>
      </ul>

      <h2>수정 및 맞춤 설정할 수 있는 항목</h2>
      <p>
        Apple의{" "}
        <a
          href="https://developer.apple.com/app-store/custom-product-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          맞춤형 제품 페이지 문서
        </a>
        에 따르면, 맞춤형 제품 페이지는 스크린샷, 홍보 텍스트 및 앱 미리보기를 다르게 구성할 수 있습니다. App Store Connect에서 빈 페이지로 시작하거나 기본 제품 페이지를 복사한 다음, 페이지의 각 로컬라이제이션에 맞는 에셋을 커스텀 설정할 수 있습니다.
      </p>
      <p>
        Apple은 또한 맞춤형 제품 페이지를 Apple Search Ads와 함께 사용할 수 있으며 관련 검색 결과에 표시될 수 있다고 설명합니다. 맞춤형 제품 페이지에 키워드를 할당할 수 있지만, 키워드는 해당 페이지의 목적에 부합해야 하며 각 키워드 조합은 하나의 맞춤형 제품 페이지에만 고유하게 사용되어야 합니다.
      </p>

      <h2>스크린샷 전략</h2>
      <p>
        자주 범하는 실수는 기본 스크린샷을 그대로 복사하여 첫 번째 헤드라인만 변경하는 것입니다.
        맞춤형 제품 페이지는 링크를 클릭한 고객을 위해 의도적으로 디자인된 느낌을 주어야 합니다.
      </p>
      <p>
        각 스크린샷 세트를 하나의 명확한 콘셉트를 중심으로 구축하세요:
      </p>
      <ul>
        <li>
          <strong>기능 소개 페이지:</strong> 기능을 먼저 내세운 다음 작업 흐름과 실제 효과를 보여줍니다.
        </li>
        <li>
          <strong>타겟 고객 페이지:</strong> 타겟 그룹의 관심사와 일치하는 언어와 예시를 사용합니다.
        </li>
        <li>
          <strong>시즌별 페이지:</strong> 캠페인을 관련성 있게 만들되, 앱의 핵심 경험을 명확히 전달합니다.
        </li>
        <li>
          <strong>로컬라이제이션 페이지:</strong> 해당 언어권에서 가장 중요한 유즈케이스를 먼저 보여줍니다.
        </li>
      </ul>

      <h2>예시: 하나의 앱, 세 개의 페이지</h2>
      <p>
        습관 관리 앱을 예로 들어 보겠습니다. 기본 제품 페이지는 앱 전체를 설명하지만, 맞춤형 제품 페이지는 다음에 초점을 맞출 수 있습니다:
      </p>
      <ul>
        <li>
          <strong>피트니스 습관:</strong> 운동 연속 달성 기록, 진행 상황 차트, 알림 및 Apple 건강 앱 연동.
        </li>
        <li>
          <strong>학습 습관:</strong> 독서 목표, 집중 세션, 시험 준비 루틴.
        </li>
        <li>
          <strong>새해 맞이 캠페인:</strong> 새로운 시작을 위한 목표 설정, 간편한 초기 설정, 첫 주 진행 상황 체크.
        </li>
      </ul>
      <p>
        앱은 동일합니다. 단지 방문자의 동기가 다르기 때문에 스크린샷이 다르게 보일 뿐입니다.
      </p>

      <h2>스크린샷 세트를 제작하는 방법</h2>
      <ol>
        <li>디자인 도구를 열기 전에 캠페인 의도를 명확하게 정의합니다.</li>
        <li>해당 의도에 부합하는 첫 번째 스크린샷의 헤드라인을 정합니다.</li>
        <li>기존의 기본 스크린샷 시스템을 재사용하여 기기 프레임, 폰트, 내보내기 크기가 일정하게 유지되도록 합니다.</li>
        <li>앱 스크린샷을 캠페인 방향을 가장 잘 보여주는 화면으로 교체합니다.</li>
        <li>페이지가 특정 시장을 타겟으로 하는 경우 스크린샷 텍스트를 현지화합니다.</li>
        <li>기본 제품 페이지와 동일하게 필요한 기기 크기로 내보냅니다.</li>
      </ol>
      <p>
        올바른 기기 크기 사양은 Apple의{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications"
          target="_blank"
          rel="noopener noreferrer"
        >
          스크린샷 사양
        </a>{" "}
        또는 이 사이트의{" "}
        <a href="/blog/app-store-screenshot-sizes">
          App Store 스크린샷 크기 가이드
        </a>
        를 참조하세요.
      </p>

      <h2>심사 및 분석 측정</h2>
      <p>
        Apple에 따르면 맞춤형 제품 페이지의 메타데이터는 앱 업데이트와 무관하게 심사를 위해 제출되어야 합니다. 페이지가 라이브된 후에는 App Analytics에서 제품 페이지 노출 수, 다운로드 수, 재다운로드 수, 전환율 등을 포함한 성과를 측정할 수 있습니다.
      </p>
      <p>
        전환율만으로 맞춤형 제품 페이지를 판단해서는 안 됩니다. 페이지가 유료 획득 마케팅과 연결되어 있다면, 리텐션(유지율), 수익, 그리고 캠페인 메시지가 올바른 유저를 유치하고 있는지 여도 함께 모니터링해야 합니다.
      </p>

      <h2>맞춤형 제품 페이지 vs A/B 테스트</h2>
      <p>
        기본 스토어 등록정보를 기준으로 여러 버전을 테스트하려면 '제품 페이지 최적화(PPO)'를 사용하세요. 타겟 고객이나 캠페인을 이미 파악하고 있으며 App Store 내 전용 랜딩 페이지가 필요한 경우에는 '맞춤형 제품 페이지'를 사용하세요. 두 기능은 서로 연관되어 있지만 해결하는 문제는 다릅니다.
      </p>
      <p>
        테스트 전략에 대한 자세한 정보는 다음 글을 참조하세요:{" "}
        <a href="/blog/ab-test-app-store-screenshots">
          App Store 및 Google Play 스크린샷 A/B 테스트 방법
        </a>
        .
      </p>

      <h2>Screenshot Bro가 도움을 주는 방법</h2>
      <p>
        맞춤형 제품 페이지를 운영하면 스크린샷 작업량이 크게 늘어납니다. 하나의 앱에 대해 기본 페이지, 3개의 캠페인 페이지, 5개의 로컬라이제이션 언어 및 다양한 기기 크기가 순식간에 필요할 수 있습니다. <a href="/">Screenshot Bro</a>는 스크린샷을 기기 행, 로컬라이제이션 번역, 배치 내보내기, App Store Connect 업로드 기능을 갖춘 재사용 가능한 로컬 프로젝트로 유지하여 이를 손쉽게 관리할 수 있게 도와줍니다.
      </p>
    </>
  );
}
