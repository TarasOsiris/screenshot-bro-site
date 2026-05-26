import type { Route } from "./+types/blog.google-play-screenshot-sizes-requirements";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { data, useLoaderData } from "react-router";
import { isLocaleCode, type LocaleCode } from "~/config/localization";

const SLUG = "google-play-screenshot-sizes-requirements";

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
      return "Crea capturas para Google Play y App Store desde un único flujo de trabalho nativo de Mac.";
    case "zh":
      return "在同一个原生 Mac 工作流中创建 Google Play 和 App Store 屏幕截图。";
    case "hi":
      return "एक नेटिव Mac वर्कफ़्लो से Google Play और App Store स्क्रीनशॉट बनाएं।";
    case "fr":
      return "Générez vos captures Google Play et App Store depuis un unique flux de travail Mac natif.";
    case "ar":
      return "صمّم لقطات شاشة Google Play و App Store من سير عمل Mac أصلي واحد.";
    case "de":
      return "Erstellen Sie Google Play- und App Store-Screenshots in einem einzigen nativen Mac-Workflow.";
    case "ja":
      return "1つのネイティブMacワークフローからGoogle PlayとApp Storeのスクリーンショットを作成します。";
    case "pt":
      return "Crie capturas de tela do Google Play e da App Store a partir de um único fluxo de trabalho nativo do Mac.";
    case "it":
      return "Crea screenshot per Google Play e App Store da un unico flusso di lavoro nativo su Mac.";
    case "ko":
      return "단 하나의 네이티브 Mac 워크플로우로 Google Play 및 App Store 스크린샷을 만드세요.";
    default:
      return "Create Google Play and App Store screenshots from one native Mac workflow.";
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
        Google Play screenshot requirements are more flexible than the App
        Store, but they are not optional. Your listing needs screenshots
        that match Google&apos;s format rules, and larger surfaces such as
        tablets, Chromebooks, Wear OS, TV, Automotive, and Android XR each
        have their own expectations.
      </p>
      <p>
        This guide focuses on the practical version: what to export, what
        Google Play Console accepts, and how to organize screenshots so
        updating your listing does not become a manual file chase.
      </p>

      <h2>Quick Requirements</h2>
      <table>
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Google Play rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screenshot count</td>
            <td>At least 2 screenshots across device types; up to 8 per supported device type</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>JPEG or 24-bit PNG with no alpha channel</td>
          </tr>
          <tr>
            <td>General dimensions</td>
            <td>Minimum 320 px, maximum 3840 px</td>
          </tr>
          <tr>
            <td>General aspect ratio</td>
            <td>The longest side cannot be more than twice the shortest side</td>
          </tr>
          <tr>
            <td>Large screens</td>
            <td>For Chromebook and tablets, add at least 4 screenshots; use 1080-7680 px and 16:9 or 9:16</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sources: Google&apos;s{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9866151"
          target="_blank"
          rel="noopener noreferrer"
        >
          preview asset requirements
        </a>{" "}
        and Google Play Console help.
      </p>

      <h2>Phone Screenshots</h2>
      <p>
        Phone screenshots are the default Play Store screenshot type for
        most Android apps. Google accepts flexible dimensions, but a
        practical export size is <strong>1080 x 1920</strong> for portrait
        screenshots or <strong>1920 x 1080</strong> for landscape
        screenshots. Stay within the 320-3840 px bounds and keep the
        longest side no more than twice the shortest side.
      </p>
      <p>
        For marketing screenshots, avoid tiny captions. Play surfaces can
        crop, resize, or show screenshots in different contexts, so the app
        UI and headline need to survive downscaling.
      </p>

      <h2>Tablet and Chromebook Screenshots</h2>
      <p>
        Google treats large screens as their own store surface. For
        Chromebooks and tablets, Google says you can add a minimum of four
        screenshots to demonstrate the in-app experience. The recommended
        large-screen constraints are 1080-7680 px with 16:9 landscape or
        9:16 portrait.
      </p>
      <p>
        If your app supports tablets or ChromeOS, do not just stretch phone
        screenshots. Show the actual large-screen layout: split views,
        sidebars, wider charts, keyboard workflows, or whatever makes the
        larger surface useful.
      </p>

      <h2>Wear OS, TV, Automotive, and XR</h2>
      <p>
        These surfaces have stricter content expectations than phone
        screenshots:
      </p>
      <ul>
        <li>
          <strong>Wear OS:</strong> at least one screenshot that accurately
          depicts the current Wear OS app; screenshots should show only the
          app interface, use a 1:1 aspect ratio, be at least 384 x 384 px,
          and avoid device frames, extra text, masks, and transparent
          backgrounds.
        </li>
        <li>
          <strong>Android TV:</strong> if you distribute on Android TV, you
          need at least one TV screenshot before publishing, and TV
          screenshots only display on Android TV devices.
        </li>
        <li>
          <strong>Android Automotive OS:</strong> requirements vary by app
          category; when provided, screenshots must accurately show the car
          app experience.
        </li>
        <li>
          <strong>Android XR:</strong> Google lists 4 to 8 screenshots,
          PNG or JPEG up to 8 MB each, with an 8:5 aspect ratio.
        </li>
      </ul>

      <h2>Do You Need a Feature Graphic?</h2>
      <p>
        Yes, for most serious listings you should treat the feature graphic
        as part of the same screenshot production workflow. Google uses it
        in multiple places, including as a preview-video cover image when a
        video is present and in large-format app or game placements.
      </p>
      <p>
        The feature graphic is not a screenshot, so design it separately.
        Use it for brand, promise, and visual identity; use screenshots for
        proof that the app experience matches the promise.
      </p>

      <h2>Recommended Export Workflow</h2>
      <ol>
        <li>Create separate rows or folders for phone, tablet, Chromebook, and any specialty surfaces.</li>
        <li>Export flat JPEG or 24-bit PNG files with no alpha channel.</li>
        <li>Keep file names ordered: <code>01_main.png</code>, <code>02_feature.png</code>, and so on.</li>
        <li>Review screenshots at small sizes before uploading.</li>
        <li>Keep localized screenshots in separate locale folders.</li>
      </ol>

      <h2>App Store vs Google Play</h2>
      <p>
        The App Store is more pixel-specific: Apple lists exact screenshot
        sizes for each display family. Google Play is more constraint-based:
        it accepts a range of dimensions and aspect ratios. If you ship on
        both stores, design from a shared visual system but export separate
        files for each store&apos;s rules.
      </p>
      <p>
        For the combined reference, see{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          Screenshot Sizes for App Store and Google Play
        </a>
        .
      </p>

      <h2>How Screenshot Bro Helps</h2>
      <p>
        <a href="/">Screenshot Bro</a> keeps App Store and Google Play rows
        in one native Mac project. You can design phone, tablet, and Android
        rows together, localize text, batch export organized folders, and
        avoid rebuilding screenshot files by hand every release.
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Los requisitos de las capturas de pantalla de Google Play son más flexibles que los de la App Store, pero no son opcionales. Tu ficha necesita capturas de pantalla que cumplan con las reglas de formato de Google, y las pantallas más grandes, como las de tabletas, Chromebooks, Wear OS, TV, Automotive y Android XR, tienen sus propias expectativas.
      </p>
      <p>
        Esta guía se centra en la parte práctica: qué exportar, qué acepta Google Play Console y cómo organizar las capturas de pantalla para que actualizar tu ficha no se convierta en una búsqueda manual de archivos.
      </p>

      <h2>Requisitos rápidos</h2>
      <table>
        <thead>
          <tr>
            <th>Requisito</th>
            <th>Regla de Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Número de capturas</td>
            <td>Al menos 2 capturas de pantalla en todos los tipos de dispositivos; hasta 8 por tipo de dispositivo admitido</td>
          </tr>
          <tr>
            <td>Formato</td>
            <td>JPEG o PNG de 24 bits sin canal alfa</td>
          </tr>
          <tr>
            <td>Dimensiones generales</td>
            <td>Mínimo 320 px, máximo 3840 px</td>
          </tr>
          <tr>
            <td>Relación de aspecto general</td>
            <td>El lado más largo no puede medir más del doble que el lado más corto</td>
          </tr>
          <tr>
            <td>Pantallas grandes</td>
            <td>Para Chromebook y tabletas, añade al menos 4 capturas de pantalla; usa de 1080 a 7680 px y relaciones de aspecto 16:9 o 9:16</td>
          </tr>
        </tbody>
      </table>
      <p>
        Fuentes: Los{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9866151"
          target="_blank"
          rel="noopener noreferrer"
        >
          requisitos de recursos de vista previa
        </a>{" "}
        de Google y la ayuda de Google Play Console.
      </p>

      <h2>Capturas de pantalla para teléfonos</h2>
      <p>
        Las capturas de pantalla para teléfonos son el tipo de captura predeterminado en Play Store para la mayoría de las aplicaciones de Android. Google acepta dimensiones flexibles, pero un tamaño de exportación práctico es <strong>1080 x 1920</strong> para capturas verticales o <strong>1920 x 1080</strong> para capturas horizontales. Mantente dentro de los límites de 320 a 3840 px y asegúrate de que el lado más largo no sea más del doble que el más corto.
      </p>
      <p>
        Para las capturas de marketing, evita subtítulos diminutos. Las superficies de Play pueden recortar, cambiar el tamaño o mostrar capturas en diferentes contextos, por lo que la interfaz de la aplicación y el título deben ser legibles incluso al reducir su tamaño.
      </p>

      <h2>Capturas de pantalla para tabletas y Chromebooks</h2>
      <p>
        Google trata las pantallas grandes como su propia superficie de tienda. Para Chromebooks y tabletas, Google indica que puedes añadir un mínimo de cuatro capturas de pantalla para demostrar la experiencia dentro de la aplicación. Las restricciones recomendadas para pantallas grandes son de 1080 a 7680 px con orientación horizontal de 16:9 o vertical de 9:16.
      </p>
      <p>
        Si tu aplicación es compatible con tabletas o ChromeOS, no te limites a estirar las capturas de teléfono. Muestra el diseño real para pantallas grandes: vistas divididas, barras laterales, gráficos más amplios, flujos de trabajo con teclado o cualquier elemento que haga útil la pantalla más grande.
      </p>

      <h2>Wear OS, TV, Automotive y XR</h2>
      <p>
        Estas superficies tienen expectativas de contenido más estrictas que las capturas de pantalla para teléfonos:
      </p>
      <ul>
        <li>
          <strong>Wear OS:</strong> al menos una captura de pantalla que represente con precisión la aplicación de Wear OS actual; las capturas deben mostrar únicamente la interfaz de la aplicación, usar una relación de aspecto 1:1, tener al menos 384 x 384 px y evitar marcos de dispositivos, texto adicional, máscaras y fondos transparentes.
        </li>
        <li>
          <strong>Android TV:</strong> si distribuyes en Android TV, necesitas al menos una captura de pantalla de TV antes de publicar, y las capturas de TV solo se muestran en dispositivos Android TV.
        </li>
        <li>
          <strong>Android Automotive OS:</strong> los requisitos varían según la categoría de la aplicación; cuando se proporcionen, las capturas deben mostrar con precisión la experiencia de la aplicación para el automóvil.
        </li>
        <li>
          <strong>Android XR:</strong> Google requiere de 4 a 8 capturas de pantalla, en formato PNG o JPEG de hasta 8 MB cada una, con una relación de aspecto de 8:5.
        </li>
      </ul>

      <h2>¿Necesitas un gráfico de funciones?</h2>
      <p>
        Sí, para la mayoría de las fichas profesionales deberías tratar el gráfico de funciones como parte del mismo flujo de producción de capturas. Google lo utiliza en varios lugares, como imagen de portada de videos promocionales cuando los hay, y en ubicaciones destacadas de aplicaciones o juegos de gran formato.
      </p>
      <p>
        El gráfico de funciones no es una captura de pantalla, por lo que debes diseñarlo por separado. Utilízalo para la marca, la propuesta de valor y la identidad visual; y usa las capturas como prueba de que la experiencia de la aplicación cumple con esa promesa.
      </p>

      <h2>Flujo de trabajo de exportación recomendado</h2>
      <ol>
        <li>Crea filas o carpetas separadas para teléfonos, tabletas, Chromebooks y cualquier superficie especial.</li>
        <li>Exporta archivos planos en JPEG o PNG de 24 bits sin canal alfa.</li>
        <li>Mantén los nombres de los archivos ordenados: <code>01_main.png</code>, <code>02_feature.png</code>, etc.</li>
        <li>Revisa las capturas de pantalla a tamaños pequeños antes de subirlas.</li>
        <li>Mantén las capturas de pantalla localizadas en carpetas separadas por idioma.</li>
      </ol>

      <h2>App Store vs. Google Play</h2>
      <p>
        La App Store es más específica con los píxeles: Apple indica tamaños de captura exactos para cada familia de pantallas. Google Play se basa más en restricciones: acepta una variedad de dimensiones y relaciones de aspecto. Si publicas en ambas tiendas, diseña a partir de un sistema visual compartido pero exporta archivos separados para cumplir con las reglas de cada tienda.
      </p>
      <p>
        Para ver la referencia combinada, consulta{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          Tamaños de capturas de pantalla para App Store y Google Play
        </a>
        .
      </p>

      <h2>Cómo ayuda Screenshot Bro</h2>
      <p>
        <a href="/">Screenshot Bro</a> mantiene las filas de App Store y Google Play en un único proyecto nativo de Mac. Puedes diseñar filas para teléfonos, tabletas y Android juntos, localizar el texto, exportar carpetas organizadas por lotes y evitar tener que volver a crear los archivos de captura a mano en cada lanzamiento.
      </p>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        Google Play 的屏幕截图要求比 App Store 更具弹性，但并非可选。您的应用详情页需要符合 Google 格式规则的截图，并且针对平板电脑、Chromebook、Wear OS、电视、汽车和 Android XR 等大屏幕或特定平台，各有不同的规范。
      </p>
      <p>
        本指南侧重于实用操作：导出什么格式、Google Play 管理中心接受什么规格，以及如何整理截图，从而避免在每次更新详情页时陷入手动找文件的混乱中。
      </p>

      <h2>快速要求</h2>
      <table>
        <thead>
          <tr>
            <th>要求</th>
            <th>Google Play 规则</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>截图数量</td>
            <td>在所有设备类型中至少提供 2 张截图；每个受支持的设备类型最多提供 8 张</td>
          </tr>
          <tr>
            <td>格式</td>
            <td>JPEG 或不含 Alpha 通道的 24 位 PNG</td>
          </tr>
          <tr>
            <td>一般尺寸</td>
            <td>最小 320 像素，最大 3840 像素</td>
          </tr>
          <tr>
            <td>一般宽高比</td>
            <td>最长边不能超过最短边的两倍</td>
          </tr>
          <tr>
            <td>大屏幕</td>
            <td>对于 Chromebook 和平板电脑，至少添加 4 张截图；使用 1080–7680 像素，宽高比为 16:9 或 9:16</td>
          </tr>
        </tbody>
      </table>
      <p>
        来源：Google 的{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9866151"
          target="_blank"
          rel="noopener noreferrer"
        >
          预览资产要求
        </a>{" "}
        和 Google Play 管理中心帮助。
      </p>

      <h2>手机屏幕截图</h2>
      <p>
        手机截图是大多数 Android 应用在 Play 商店的默认截图类型。Google 接受灵活的尺寸，但在实际操作中，推荐的导出尺寸是：竖屏截图使用 <strong>1080 x 1920</strong>，横屏截图使用 <strong>1920 x 1080</strong>。确保尺寸在 320–3840 像素之间，且最长边不超过最短边的两倍。
      </p>
      <p>
        对于宣传截图，应避免使用过小的文字说明。Play 商店的展示界面可能会对截图进行裁剪、缩放，或在不同的场景下展示，因此应用的 UI 和标题必须在缩小后依然清晰可见。
      </p>

      <h2>平板电脑和 Chromebook 屏幕截图</h2>
      <p>
        Google 将大屏幕设备视为独立的商店展示面。对于 Chromebook 和平板电脑，Google 规定您至少需要添加四张截图来展示应用内体验。推荐的大屏幕限制为 1080–7680 像素，使用 16:9 横屏或 9:16 竖屏。
      </p>
      <p>
        如果您的应用支持平板电脑或 ChromeOS，请不要只是拉伸手机截图。展示真实的大屏幕布局：分栏视图、侧边栏、更宽的图表、键盘工作流，或者任何能凸显大屏幕优势的设计。
      </p>

      <h2>Wear OS、电视、汽车和 XR</h2>
      <p>
        与手机截图相比，这些特定平台有更严格的内容规范：
      </p>
      <ul>
        <li>
          <strong>Wear OS：</strong>至少提供一张准确描绘当前 Wear OS 应用的截图；截图应仅显示应用界面，使用 1:1 的宽高比，尺寸至少为 384 x 384 像素，且应避免设备边框、额外文本、蒙版和透明背景。
        </li>
        <li>
          <strong>Android TV：</strong>如果您在 Android TV 上分发应用，在发布前需要至少提供一张电视截图，电视截图仅在 Android TV 设备上显示。
        </li>
        <li>
          <strong>Android Automotive OS：</strong>要求因应用类别而异；提供截图时，必须准确展示车载应用的使用体验。
        </li>
        <li>
          <strong>Android XR：</strong>Google 要求提供 4 到 8 张截图，格式为 PNG 或 JPEG，每张最大 8 MB，宽高比为 8:5。
        </li>
      </ul>

      <h2>您需要置顶大图（Feature Graphic）吗？</h2>
      <p>
        是的，对于大多数专业的应用详情页，您应该将置顶大图视为截图制作工作流的一部分。Google 会在多个位置使用它，包括在有预览视频时的视频封面图，以及大版面的应用或游戏推荐位中。
      </p>
      <p>
        置顶大图并不是截图，因此需要单独设计。它用于传达品牌、核心承诺和视觉身份；而屏幕截图则用于证实应用体验确实符合该承诺。
      </p>

      <h2>推荐的导出工作流</h2>
      <ol>
        <li>为手机、平板电脑、Chromebook 以及任何特殊平台创建独立的行或文件夹。</li>
        <li>导出平扁的 JPEG 或不含 Alpha 通道的 24 位 PNG 文件。</li>
        <li>保持文件名有序：如 <code>01_main.png</code>、<code>02_feature.png</code> 等。</li>
        <li>上传前，先在小尺寸下预览检查截图。</li>
        <li>将不同语言的本地化截图保存在各自独立的语言文件夹中。</li>
      </ol>

      <h2>App Store 对比 Google Play</h2>
      <p>
        App Store 对像素要求更具体：Apple 列出了每个显示设备系列的精确截图尺寸。Google Play 则更倾向于规则限制：它接受一定范围内的尺寸和宽高比。如果您同时在两个商店发布，请基于共享的视觉系统进行设计，但针对每个商店的规则导出不同的文件。
      </p>
      <p>
        有关合并参考，请参阅{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          App Store 和 Google Play 的屏幕截图尺寸
        </a>
        。
      </p>

      <h2>Screenshot Bro 如何提供帮助</h2>
      <p>
        <a href="/">Screenshot Bro</a> 在同一个原生 Mac 项目中管理 App Store 和 Google Play 的截图行。您可以同时设计手机、平板和 Android 的截图，进行文本本地化，批量导出整理好的文件夹，避免在每次发布时手动重新制作截图文件。
      </p>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        Google Play स्क्रीनशॉट की आवश्यकताएं App Store की तुलना में अधिक लचीली हैं, लेकिन वे वैकल्पिक नहीं हैं। आपकी लिस्टिंग को ऐसे स्क्रीनशॉट की आवश्यकता होती है जो Google के फ़ॉर्मेट नियमों से मेल खाते हों, और बड़ी स्क्रीन जैसे कि टैबलेट, Chromebook, Wear OS, TV, Automotive, और Android XR में से प्रत्येक की अपनी आवश्यकताएं होती हैं।
      </p>
      <p>
        यह गाइड व्यावहारिक संस्करण पर केंद्रित है: क्या निर्यात (export) करना है, Google Play Console क्या स्वीकार करता है, और स्क्रीनशॉट को कैसे व्यवस्थित करना है ताकि आपकी लिस्टिंग को अपडेट करना मैन्युअल फ़ाइल खोजने का काम न बन जाए।
      </p>

      <h2>त्वरित आवश्यकताएं</h2>
      <table>
        <thead>
          <tr>
            <th>आवश्यकता</th>
            <th>Google Play नियम</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>स्क्रीनशॉट संख्या</td>
            <td>डिवाइस के प्रकारों में कम से कम 2 स्क्रीनशॉट; प्रत्येक समर्थित डिवाइस प्रकार के लिए 8 तक</td>
          </tr>
          <tr>
            <td>फ़ॉर्मेट</td>
            <td>बिना अल्फा चैनल के JPEG या 24-बिट PNG</td>
          </tr>
          <tr>
            <td>सामान्य आयाम</td>
            <td>न्यूनतम 320 px, अधिकतम 3840 px</td>
          </tr>
          <tr>
            <td>सामान्य पहलू अनुपात (Aspect Ratio)</td>
            <td>सबसे लंबी भुजा सबसे छोटी भुजा के दोगुने से अधिक नहीं हो सकती</td>
          </tr>
          <tr>
            <td>बड़ी स्क्रीन</td>
            <td>Chromebook और टैबलेट के लिए, कम से कम 4 स्क्रीनशॉट जोड़ें; 1080-7680 px और 16:9 या 9:16 का उपयोग करें</td>
          </tr>
        </tbody>
      </table>
      <p>
        स्रोत: Google की{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9866151"
          target="_blank"
          rel="noopener noreferrer"
        >
          पूर्वावलोकन एसेट आवश्यकताएं (preview asset requirements)
        </a>{" "}
        और Google Play Console सहायता।
      </p>

      <h2>फ़ोन स्क्रीनशॉट</h2>
      <p>
        अधिकांश Android ऐप्स के लिए फ़ोन स्क्रीनशॉट डिफ़ॉल्ट Play Store स्क्रीनशॉट प्रकार हैं। Google लचीले आयामों को स्वीकार करता है, लेकिन एक व्यावहारिक निर्यात आकार पोर्ट्रेट स्क्रीनशॉट के लिए <strong>1080 x 1920</strong> या लैंडस्केप स्क्रीनशॉट के लिए <strong>1920 x 1080</strong> है। 320-3840 px की सीमा के भीतर रहें और सबसे लंबी भुजा को सबसे छोटी भुजा के दोगुने से अधिक न रखें।
      </p>
      <p>
        मार्केटिंग स्क्रीनशॉट के लिए, छोटे कैप्शन से बचें। Play की सतहें स्क्रीनशॉट को क्रॉप, रीसाइज या विभिन्न संदर्भों में दिखा सकती हैं, इसलिए ऐप UI और हेडलाइन को डाउनस्केलिंग के बाद भी स्पष्ट दिखना चाहिए।
      </p>

      <h2>टैबलेट और Chromebook स्क्रीनशॉट</h2>
      <p>
        Google बड़ी स्क्रीन को अपनी खुद की स्टोर सतह के रूप में मानता है। Chromebook और टैबलेट के लिए, Google का कहना है कि आप इन-ऐप अनुभव को प्रदर्शित करने के लिए कम से कम चार स्क्रीनशॉट जोड़ सकते हैं। अनुशंसित बड़ी-स्क्रीन सीमाएं 16:9 लैंडस्केप या 9:16 पोर्ट्रेट के साथ 1080-7680 px हैं।
      </p>
      <p>
        यदि आपका ऐप टैबलेट या ChromeOS का समर्थन करता है, तो केवल फ़ोन स्क्रीनशॉट को स्ट्रेच न करें। वास्तविक बड़ी-स्क्रीन लेआउट दिखाएं: स्प्लिट व्यू, साइडबार, व्यापक चार्ट, कीबोर्ड वर्कफ़्लो, या जो कुछ भी बड़ी सतह को उपयोगी बनाता है।
      </p>

      <h2>Wear OS, TV, Automotive, और XR</h2>
      <p>
        इन सतहों पर फ़ोन स्क्रीनशॉट की तुलना में अधिक सख्त कंटेंट अपेक्षाएं होती हैं:
      </p>
      <ul>
        <li>
          <strong>Wear OS:</strong> कम से कम एक स्क्रीनशॉट जो वर्तमान Wear OS ऐप को सटीक रूप से दर्शाता हो; स्क्रीनशॉट में केवल ऐप इंटरफ़ेस दिखना चाहिए, 1:1 पहलू अनुपात का उपयोग करना चाहिए, कम से कम 384 x 384 px का होना चाहिए, और डिवाइस फ्रेम, अतिरिक्त टेक्स्ट, मास्क और पारदर्शी बैकग्राउंड से बचना चाहिए।
        </li>
        <li>
          <strong>Android TV:</strong> यदि आप Android TV पर वितरित करते हैं, तो आपको प्रकाशित करने से पहले कम से कम एक टीवी स्क्रीनशॉट की आवश्यकता होगी, और टीवी स्क्रीनशॉट केवल Android TV डिवाइस पर प्रदर्शित होते हैं।
        </li>
        <li>
          <strong>Android Automotive OS:</strong> आवश्यकताएं ऐप श्रेणी के अनुसार भिन्न होती हैं; प्रदान किए जाने पर, स्क्रीनशॉट को कार ऐप अनुभव को सटीक रूप से दिखाना चाहिए।
        </li>
        <li>
          <strong>Android XR:</strong> Google 4 से 8 स्क्रीनशॉट सूचीबद्ध करता है, PNG या JPEG प्रत्येक 8 MB तक, 8:5 पहलू अनुपात के साथ।
        </li>
      </ul>

      <h2>क्या आपको फ़ीचर ग्राफ़िक (Feature Graphic) की आवश्यकता है?</h2>
      <p>
        हाँ, अधिकांश गंभीर लिस्टिंग के लिए आपको फ़ीचर ग्राफ़िक को उसी स्क्रीनशॉट प्रोडक्शन वर्कफ़्लो के हिस्से के रूप में मानना चाहिए। Google इसका उपयोग कई स्थानों पर करता है, जिसमें वीडियो मौजूद होने पर पूर्वावलोकन-वीडियो कवर छवि के रूप में और बड़े-फ़ॉर्मेट ऐप या गेम प्लेसमेंट शामिल हैं।
      </p>
      <p>
        फ़ीचर ग्राफ़िक स्क्रीनशॉट नहीं है, इसलिए इसे अलग से डिज़ाइन करें। इसका उपयोग ब्रांड, वादे और दृश्य पहचान के लिए करें; स्क्रीनशॉट का उपयोग इस प्रमाण के रूप में करें कि ऐप का अनुभव वादे से मेल खाता है।
      </p>

      <h2>अनुशंसित निर्यात वर्कफ़्लो</h2>
      <ol>
        <li>फ़ोन, टैबलेट, Chromebook और किसी भी विशेष सतह के लिए अलग-अलग पंक्तियाँ या फ़ोल्डर बनाएँ।</li>
        <li>बिना अल्फा चैनल के फ्लैट JPEG या 24-बिट PNG फाइलें निर्यात करें।</li>
        <li>फ़ाइल नामों को क्रमबद्ध रखें: <code>01_main.png</code>, <code>02_feature.png</code>, इत्यादि।</li>
        <li>अपलोड करने से पहले छोटे आकार में स्क्रीनशॉट की समीक्षा करें।</li>
        <li>स्थानीयकृत स्क्रीनशॉट को अलग-अलग लोकेल फ़ोल्डरों में रखें।</li>
      </ol>

      <h2>App Store बनाम Google Play</h2>
      <p>
        App Store अधिक पिक्सेल-विशिष्ट है: Apple प्रत्येक डिस्प्ले फ़ैमिली के लिए सटीक स्क्रीनशॉट आकार सूचीबद्ध करता है। Google Play अधिक बाधा-आधारित (constraint-based) है: यह आयामों और पहलू अनुपातों की एक श्रृंखला को स्वीकार करता है। यदि आप दोनों स्टोर पर शिप करते हैं, तो एक साझा विजुअल सिस्टम से डिज़ाइन करें लेकिन प्रत्येक स्टोर के नियमों के लिए अलग फ़ाइलें निर्यात करें।
      </p>
      <p>
        संयुक्त संदर्भ के लिए, देखें{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          App Store और Google Play के लिए स्क्रीनशॉट आकार
        </a>
        .
      </p>

      <h2>Screenshot Bro कैसे मदद करता है</h2>
      <p>
        <a href="/">Screenshot Bro</a> App Store और Google Play पंक्तियों को एक नेटिव Mac प्रोजेक्ट में रखता है। आप फ़ोन, टैबलेट और Android पंक्तियों को एक साथ डिज़ाइन कर सकते हैं, टेक्स्ट को स्थानीयकृत कर सकते हैं, व्यवस्थित फ़ोल्डरों को बैच निर्यात कर सकते हैं, और हर रिलीज़ में स्क्रीनशॉट फ़ाइलों को मैन्युअल रूप से बनाने से बच सकते हैं।
      </p>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        Les exigences de Google Play en matière de captures d&apos;écran sont plus flexibles que celles de l&apos;App Store, mais elles ne sont pas facultatives. Votre fiche doit inclure des captures d&apos;écran conformes aux règles de format de Google, et les écrans plus grands comme les tablettes, les Chromebooks, Wear OS, la TV, l&apos;Automotive et Android XR ont chacun leurs propres spécificités.
      </p>
      <p>
        Ce guide se concentre sur l&apos;aspect pratique : que faut-il exporter, qu&apos;accepte la Google Play Console et comment organiser vos captures d&apos;écran pour que la mise à jour de votre fiche ne se transforme pas en une recherche manuelle de fichiers.
      </p>

      <h2>Exigences rapides</h2>
      <table>
        <thead>
          <tr>
            <th>Exigence</th>
            <th>Règle Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre de captures</td>
            <td>Au moins 2 captures d&apos;écran par type d&apos;appareil ; jusqu&apos;à 8 par type d&apos;appareil pris en charge</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>JPEG ou PNG 24 bits sans canal alpha</td>
          </tr>
          <tr>
            <td>Dimensions générales</td>
            <td>Minimum 320 px, maximum 3840 px</td>
          </tr>
          <tr>
            <td>Rapport d&apos;aspect général</td>
            <td>Le côté le plus long ne peut pas dépasser le double du côté le plus court</td>
          </tr>
          <tr>
            <td>Grands écrans</td>
            <td>Pour les Chromebooks et les tablettes, ajoutez au moins 4 captures d&apos;écran ; utilisez de 1080 à 7680 px et un format 16:9 ou 9:16</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sources : Les{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9866151"
          target="_blank"
          rel="noopener noreferrer"
        >
          exigences relatives aux éléments d&apos;aperçu
        </a>{" "}
        de Google et l&apos;aide de la Google Play Console.
      </p>

      <h2>Captures d&apos;écran pour téléphone</h2>
      <p>
        Les captures d&apos;écran pour téléphone sont le type par défaut sur le Play Store pour la plupart des applications Android. Google accepte des dimensions flexibles, mais une taille d&apos;exportation pratique est <strong>1080 x 1920</strong> pour le mode portrait ou <strong>1920 x 1080</strong> pour le mode paysage. Restez dans les limites de 320 à 3840 px et veillez à ce que le côté le plus long ne dépasse pas le double du côté le plus court.
      </p>
      <p>
        Pour les captures d&apos;écran marketing, évitez les légendes minuscules. Les interfaces Google Play peuvent recadrer, redimensionner ou afficher les captures dans différents contextes, l&apos;interface utilisateur et le titre doivent donc rester lisibles même après réduction.
      </p>

      <h2>Captures d&apos;écran pour tablettes et Chromebooks</h2>
      <p>
        Google considère les grands écrans comme une surface de magasin distincte. Pour les Chromebooks et les tablettes, Google indique que vous pouvez ajouter un minimum de quatre captures d&apos;écran pour illustrer l&apos;expérience dans l&apos;application. Les limites recommandées pour les grands écrans sont de 1080 à 7680 px avec un format paysage 16:9 ou portrait 9:16.
      </p>
      <p>
        Si votre application prend en charge les tablettes ou ChromeOS, ne vous contentez pas d&apos;étirer vos captures pour téléphone. Présentez la véritable interface grand écran : vues partagées, barres latérales, graphiques plus larges, flux de travail avec clavier ou tout autre élément valorisant cette surface.
      </p>

      <h2>Wear OS, TV, Automotive et XR</h2>
      <p>
        Ces surfaces imposent des règles de contenu plus strictes que les captures d&apos;écran pour téléphone :
      </p>
      <ul>
        <li>
          <strong>Wear OS :</strong> au moins une capture d&apos;écran décrivant fidèlement l&apos;application Wear OS actuelle ; les captures doivent uniquement afficher l&apos;interface de l&apos;application, utiliser un format 1:1, mesurer au moins 384 x 384 px et éviter les cadres d&apos;appareils, le texte supplémentaire, les masques et les arrière-plans transparents.
        </li>
        <li>
          <strong>Android TV :</strong> si vous distribuez votre application sur Android TV, vous devez fournir au moins une capture d&apos;écran TV avant la publication, ces captures n&apos;étant visibles que sur les appareils Android TV.
        </li>
        <li>
          <strong>Android Automotive OS :</strong> les exigences varient selon la catégorie de l&apos;application ; lorsqu&apos;elles sont fournies, les captures d&apos;écran doivent montrer fidèlement l&apos;expérience de l&apos;application embarquée.
        </li>
        <li>
          <strong>Android XR :</strong> Google requiert 4 à 8 captures d&apos;écran, au format PNG ou JPEG, jusqu&apos;à 8 Mo chacune, avec un format d&apos;image 8:5.
        </li>
      </ul>

      <h2>Avez-vous besoin d&apos;un graphique de couverture ?</h2>
      <p>
        Oui, pour la plupart des fiches professionnelles, le graphique de couverture doit faire partie du même flux de production que vos captures d&apos;écran. Google l&apos;utilise à plusieurs endroits, notamment comme image de couverture de la vidéo d&apos;aperçu (si présente) et dans les sélections d&apos;applications ou de jeux grand format.
      </p>
      <p>
        Le graphique de couverture n&apos;est pas une capture d&apos;écran, concevez-le donc séparément. Utilisez-le pour valoriser votre marque, votre promesse et votre identité visuelle ; utilisez les captures pour prouver que l&apos;expérience utilisateur correspond bien à cette promesse.
      </p>

      <h2>Flux d&apos;exportation recommandé</h2>
      <ol>
        <li>Créez des lignes ou dossiers distincts pour les téléphones, tablettes, Chromebooks et toute autre surface spécifique.</li>
        <li>Exportez des fichiers plats au format JPEG ou PNG 24 bits sans canal alpha.</li>
        <li>Conservez des noms de fichiers ordonnés : <code>01_main.png</code>, <code>02_feature.png</code>, etc.</li>
        <li>Vérifiez vos captures à petite taille avant de les mettre en ligne.</li>
        <li>Conservez les captures d&apos;écran localisées dans des dossiers de langue distincts.</li>
      </ol>

      <h2>App Store vs Google Play</h2>
      <p>
        L&apos;App Store est plus strict sur les pixels : Apple liste les tailles exactes de captures pour chaque famille d&apos;écrans. Google Play fonctionne davantage par contraintes : il accepte une plage de dimensions et de rapports d&apos;aspect. Si vous publiez sur les deux stores, concevez à partir d&apos;un système visuel commun mais exportez des fichiers distincts selon les règles de chaque boutique.
      </p>
      <p>
        Pour obtenir une référence combinée, consultez{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          les tailles de captures d&apos;écran pour l&apos;App Store et Google Play
        </a>
        .
      </p>

      <h2>Comment Screenshot Bro vous aide</h2>
      <p>
        <a href="/">Screenshot Bro</a> regroupe vos captures App Store et Google Play dans un unique projet Mac natif. Vous pouvez concevoir ensemble vos lignes pour téléphone, tablette et Android, localiser les textes, exporter vos dossiers organisés par lots et éviter de recréer manuellement vos captures d&apos;écran à chaque mise à jour.
      </p>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        تعد متطلبات لقطات الشاشة في Google Play أكثر مرونة مقارنةً بـ App Store، لكنها ليست اختيارية. تحتاج صفحة تطبيقك إلى لقطات شاشة تتوافق مع قواعد التنسيق الخاصة بـ Google، كما أن الشاشات الأكبر حجمًا مثل الأجهزة اللوحية وChromebook وWear OS وAndroid TV والسيارات وAndroid XR لها متطلباتها الخاصة.
      </p>
      <p>
        يركز هذا الدليل على الجانب العملي: ما يجب تصديره، وما تقبله لوحة تحكم Google Play (Google Play Console)، وكيفية تنظيم لقطات الشاشة حتى لا يتحول تحديث صفحة تطبيقك إلى عملية بحث يدوية ومملة عن الملفات.
      </p>

      <h2>متطلبات سريعة</h2>
      <table>
        <thead>
          <tr>
            <th>المتطلبات</th>
            <th>قاعدة Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>عدد لقطات الشاشة</td>
            <td>ما لا يقل عن لقطتي شاشة لكل نوع من الأجهزة؛ وما يصل إلى 8 لقطات لكل نوع جهاز مدعوم</td>
          </tr>
          <tr>
            <td>التنسيق</td>
            <td>JPEG أو PNG بترميز 24 بت بدون قناة ألفا (Alpha Channel)</td>
          </tr>
          <tr>
            <td>الأبعاد العامة</td>
            <td>الحد الأدنى 320 بكسل، والحد الأقصى 3840 بكسل</td>
          </tr>
          <tr>
            <td>نسبة العرض إلى الارتفاع العامة</td>
            <td>لا يمكن أن يكون الجانب الأطول أكثر من ضعف الجانب الأقصر</td>
          </tr>
          <tr>
            <td>الشاشات الكبيرة</td>
            <td>بالنسبة لأجهزة Chromebook والأجهزة اللوحية، أضف 4 لقطات شاشة على الأقل؛ واستخدم المقاسات من 1080 إلى 7680 بكسل ونسبة 16:9 أو 9:16</td>
          </tr>
        </tbody>
      </table>
      <p>
        المصادر:{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/9866151"
          target="_blank"
          rel="noopener noreferrer"
        >
          متطلبات أصول المعاينة
        </a>{" "}
        من Google ومركز مساعدة Google Play Console.
      </p>

      <h2>لقطات شاشة الهاتف</h2>
      <p>
        تعد لقطات شاشة الهاتف هي النوع الافتراضي في Play Store لمعظم تطبيقات Android. تقبل Google أبعادًا مرنة، ولكن مقاس التصدير العملي هو <strong>1080 × 1920</strong> للقطات الرأسية أو <strong>1920 × 1080</strong> للقطات الأفقية. ابقَ ضمن حدود 320-3840 بكسل واحرص على ألا يتجاوز الجانب الأطول ضعف الجانب الأقصر.
      </p>
      <p>
        بالنسبة للقطات الشاشة التسويقية، تجنب كتابة نصوص توضيحية صغيرة جدًا. قد تقوم واجهات متجر Play باقتصاص لقطات الشاشة أو تغيير حجمها أو عرضها في سياقات مختلفة، لذا يجب أن تظل واجهة التطبيق والعناوين واضحة حتى بعد تصغير الحجم.
      </p>

      <h2>لقطات شاشة الأجهزة اللوحية وأجهزة Chromebook</h2>
      <p>
        تتعامل Google مع الشاشات الكبيرة كواجهة متجر مستقلة. بالنسبة لأجهزة Chromebook والأجهزة اللوحية، تذكر Google أنه يمكنك إضافة 4 لقطات شاشة كحد أدنى لتوضيح تجربة الاستخدام داخل التطبيق. القيود الموصى بها للشاشات الكبيرة هي 1080-7680 بكسل مع نسبة عرض إلى ارتفاع 16:9 أفقية أو 9:16 رأسية.
      </p>
      <p>
        إذا كان تطبيقك يدعم الأجهزة اللوحية أو نظام ChromeOS، فلا تكتفِ بمط لقطات شاشة الهاتف. اعرض التخطيط الفعلي للشاشة الكبيرة: طرق العرض المنقسمة، أو الأشرطة الجانبية، أو الرسوم البيانية الأوسع، أو سير عمل لوحة المفاتيح، أو أي شيء يجعل الشاشة الكبيرة مفيدة.
      </p>

      <h2>أنظمة Wear OS والتلفزيون والسيارات وXR</h2>
      <p>
        تفرض هذه الواجهات توقعات محتوى أكثر صرامة من لقطات شاشة الهاتف:
      </p>
      <ul>
        <li>
          <strong>Wear OS:</strong> لقطة شاشة واحدة على الأقل تصف بدقة تطبيق Wear OS الحالي؛ ويجب أن تظهر لقطات الشاشة واجهة التطبيق فقط، وتستخدم نسبة عرض إلى ارتفاع 1:1، وتكون بمقاس 384 × 384 بكسل على الأقل، مع تجنب إطارات الأجهزة، والنصوص الإضافية، والأقنعة، والخلفيات الشفافة.
        </li>
        <li>
          <strong>Android TV:</strong> إذا كنت توزع تطبيقك على Android TV، فستحتاج إلى لقطة شاشة تلفزيون واحدة على الأقل قبل النشر، ولا تظهر لقطات شاشة التلفزيون إلا على أجهزة Android TV.
        </li>
        <li>
          <strong>Android Automotive OS:</strong> تختلف المتطلبات حسب فئة التطبيق؛ وعند تقديمها، يجب أن تعرض لقطات الشاشة تجربة تطبيق السيارة بدقة.
        </li>
        <li>
          <strong>Android XR:</strong> تحدد Google من 4 إلى 8 لقطات شاشة، بصيغة PNG أو JPEG وبحجم يصل إلى 8 ميجابايت لكل منها، مع نسبة عرض إلى ارتفاع تبلغ 8:5.
        </li>
      </ul>

      <h2>هل تحتاج إلى الرسم الترويجي المميز (Feature Graphic)؟</h2>
      <p>
        نعم، بالنسبة لمعظم صفحات التطبيقات الاحترافية، يجب عليك التعامل مع الرسم الترويجي المميز كجزء من سير عمل إنتاج لقطات الشاشة نفسه. تستخدمه Google في أماكن متعددة، بما في ذلك كصورة غلاف للفيديو الترويجي عندما يكون متوفرًا، وفي مواضع عرض التطبيقات أو الألعاب ذات التنسيق الكبير.
      </p>
      <p>
        الرسم الترويجي المميز ليس لقطة شاشة، لذا صممه بشكل منفصل. استخدمه لتعزيز العلامة التجارية والوعد والهوية البصرية؛ واستخدم لقطات الشاشة كدليل على أن تجربة التطبيق تتطابق مع هذا الوعد.
      </p>

      <h2>سير عمل التصدير الموصى به</h2>
      <ol>
        <li>أنشئ صفوفًا أو مجلدات منفصلة للهاتف، والجهاز اللوحي، وجهاز Chromebook، وأي شاشات مخصصة أخرى.</li>
        <li>صدّر ملفات JPEG مسطحة أو ملفات PNG بدقة 24 بت بدون قناة ألفا.</li>
        <li>حافظ على ترتيب أسماء الملفات: <code>01_main.png</code>، و <code>02_feature.png</code>، وهكذا.</li>
        <li>راجع لقطات الشاشة بأحجام صغيرة قبل رفعها.</li>
        <li>احتفظ بلقطات الشاشة المترجمة (الموطنة) في مجلدات منفصلة لكل لغة.</li>
      </ol>

      <h2>متجر App Store مقابل Google Play</h2>
      <p>
        يعد متجر App Store أكثر تحديدًا للبكسل: تدرج Apple أحجام لقطات شاشة دقيقة لكل عائلة شاشات. بينما يعتمد Google Play أكثر على القيود والنسب: فهو يقبل مجموعة من الأبعاد ونسب العرض إلى الارتفاع. إذا كنت تنشر تطبيقك على كلا المتجرين، فقم بالتصميم من نظام مرئي مشترك ولكن صدّر ملفات منفصلة تتوافق مع قواعد كل متجر.
      </p>
      <p>
        للحصول على مرجع مشترك، راجع{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          أحجام لقطات الشاشة لمتجر App Store و Google Play
        </a>
        .
      </p>

      <h2>كيف يساعدك تطبيق Screenshot Bro</h2>
      <p>
        يحتفظ تطبيق <a href="/">Screenshot Bro</a> بصفوف لقطات App Store و Google Play في مشروع Mac أصلي واحد. يمكنك تصميم صفوف الهاتف والجهاز اللوحي وAndroid معًا، وتوطين النصوص، وتصدير المجلدات المنظمة دفعة واحدة، وتجنب إعادة بناء ملفات لقطات الشاشة يدويًا مع كل إصدار جديد.
      </p>
    </>
  );
}
