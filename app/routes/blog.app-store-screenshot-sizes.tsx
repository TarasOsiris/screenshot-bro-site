import type { Route } from "./+types/blog.app-store-screenshot-sizes";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { data, useLoaderData } from "react-router";
import { isLocaleCode, type LocaleCode } from "~/config/localization";

const SLUG = "app-store-screenshot-sizes";

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
        <BlogCTA message={getCTAMessage(locale)} locale={locale} />
        <RelatedPosts currentSlug={SLUG} locale={locale} />
      </div>
    </ContentLayout>
  );
}

function getCTAMessage(locale: LocaleCode): string {
  switch (locale) {
    case "de":
      return "Hör auf, Screenshot-Größen manuell zu verwalten.";
    case "es":
      return "Deja de gestionar los tamaños de las capturas de pantalla manualmente.";
    case "zh":
      return "停止手动管理截图尺寸。";
    case "hi":
      return "स्क्रीनशॉट आकारों को मैन्युअल रूप से प्रबंधित करना बंद करें।";
    case "fr":
      return "Arrêtez de gérer manuellement les tailles de captures d'écran.";
    case "ar":
      return "توقف عن إدارة مقاسات لقطات الشاشة يدويًا.";
    case "ja":
      return "スクリーンショットのサイズを手動で管理するのはもうやめましょう。";
    case "pt":
      return "Pare de gerenciar tamanhos de captura de tela manualmente.";
    case "it":
      return "Smetti di gestire manualmente le dimensioni degli screenshot.";
    case "ko":
      return "더 이상 스크린샷 크기를 수동으로 관리하지 마세요.";
    default:
      return "Stop managing screenshot sizes manually.";
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
        Apple requires specific screenshot dimensions for each platform and
        display class. Miss a required size and App Store Connect can reject
        the asset or fall back to a scaled screenshot. Here are the current
        accepted dimensions for 2026.
      </p>

      <h2>iPhone Screenshots</h2>
      <table>
        <thead>
          <tr>
            <th>Display Size</th>
            <th>Pixels (Portrait)</th>
            <th>Devices</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot; (inner)</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo, unfolded</td>
          </tr>
          <tr>
            <td>5.4&quot; (outer)</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo, folded</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736, 1290 x 2796, or 1320 x 2868</td>
            <td>
              iPhone Air, 18 Pro Max, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 or 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 or 1206 x 2622</td>
            <td>iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532, 1125 x 2436, or 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        iPhone 18 Pro and 18 Pro Max use the same resolutions as the 17 Pro and 17 Pro Max, so an existing 6.3&quot; or 6.9&quot; set already covers them. iPhone Duo is the exception: Apple lists a separate screenshot size for each of its two screens (landscape versions of both are accepted), but App Store Connect does not take Duo uploads yet. Apple says support is coming later in 2026, so until then the 6.9&quot; set is still the one to get right.
      </p>

      <h2>iPad Screenshots</h2>
      <table>
        <thead>
          <tr>
            <th>Display Size</th>
            <th>Pixels (Portrait)</th>
            <th>Devices</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 or 2048 x 2732</td>
            <td>
              iPad Pro 13&quot; (M5/M4), iPad Pro 12.9&quot; (3rd–6th gen), iPad Air
              13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388, or 1640 x 2360
            </td>
            <td>
              iPad Pro 11&quot; (M5/M4 and 1st–4th gen), iPad Air 11&quot;
              (M4/M3/M2), iPad Air (4th–5th gen), iPad (A16/10th gen), iPad
              mini (A17 Pro/6th gen)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Mac Screenshots</h2>
      <p>
        Mac App Store screenshots must use one of Apple&apos;s accepted 16:10
        sizes: <strong>1280 x 800</strong>, <strong>1440 x 900</strong>,{" "}
        <strong>2560 x 1600</strong>, or <strong>2880 x 1800</strong>.
        Apple accepts one to ten screenshots per localization.
      </p>

      <h2>Apple Watch Screenshots</h2>
      <table>
        <thead>
          <tr>
            <th>Watch</th>
            <th>Pixels</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>Apple TV and Vision Pro Screenshots</h2>
      <ul>
        <li>
          <strong>Apple TV:</strong> 1920 x 1080 or 3840 x 2160.
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h2>Tips for Managing Multiple Sizes</h2>
      <ul>
        <li>
          <strong>Design at the largest size first.</strong> It is easier to
          scale down than up. Start with the 6.9&quot; iPhone and 13&quot; iPad, then
          adapt.
        </li>
        <li>
          <strong>Use templates with device frames.</strong> Instead of
          managing raw pixel files, use a tool that wraps your app
          screenshots in the correct device bezel automatically.
        </li>
        <li>
          <strong>Export all sizes in one step.</strong> Manual resizing for
          each device is the main time sink. A batch export workflow
          eliminates it.
        </li>
        <li>
          <strong>Screenshot Bro handles all of this.</strong> Set up your rows with the device sizes you need, design once, and export every size at its exact App Store pixel dimensions in one batch. The frame library already includes iPhone 18 Pro, 18 Pro Max and iPhone Duo (open, closed, and open seen from the back), and the Duo&apos;s two resolutions can be entered as a custom row size.
        </li>
      </ul>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Apple requiere dimensiones específicas de captura de pantalla para cada plataforma y
        tipo de pantalla. Si omites un tamaño obligatorio, App Store Connect puede rechazar
        el recurso o mostrar en su lugar una captura escalada. Aquí tienes las dimensiones
        aceptadas actualmente para 2026.
      </p>

      <h2>Capturas de pantalla de iPhone</h2>
      <table>
        <thead>
          <tr>
            <th>Tamaño de pantalla</th>
            <th>Píxeles (vertical)</th>
            <th>Dispositivos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot; (interior)</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo, desplegado</td>
          </tr>
          <tr>
            <td>5.4&quot; (exterior)</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo, plegado</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736, 1290 x 2796 o 1320 x 2868</td>
            <td>
              iPhone Air, 18 Pro Max, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 o 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 o 1206 x 2622</td>
            <td>iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532, 1125 x 2436 o 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        El iPhone 18 Pro y el 18 Pro Max usan las mismas resoluciones que el 17 Pro y el 17 Pro Max, así que un set de 6.3&quot; o 6.9&quot; que ya tengas los cubre. El iPhone Duo es la excepción: Apple indica un tamaño de captura distinto para cada una de sus dos pantallas (también acepta ambas en horizontal), pero App Store Connect todavía no admite subidas para el Duo. Apple dice que el soporte llegará más adelante en 2026, así que hasta entonces el set de 6.9&quot; sigue siendo el que hay que cuidar.
      </p>

      <h2>Capturas de pantalla de iPad</h2>
      <table>
        <thead>
          <tr>
            <th>Tamaño de pantalla</th>
            <th>Píxeles (vertical)</th>
            <th>Dispositivos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 o 2048 x 2732</td>
            <td>
              iPad Pro de 13&quot; (M5/M4), iPad Pro de 12.9&quot; (3.ª–6.ª gen.), iPad Air
              de 13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388 o 1640 x 2360
            </td>
            <td>
              iPad Pro de 11&quot; (M5/M4 y 1.ª–4.ª gen.), iPad Air de 11&quot;
              (M4/M3/M2), iPad Air (4.ª–5.ª gen.), iPad (A16/10.ª gen.), iPad
              mini (A17 Pro/6.ª gen.)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Capturas de pantalla de Mac</h2>
      <p>
        Las capturas de pantalla de la Mac App Store deben usar uno de los tamaños 16:10
        aceptados por Apple: <strong>1280 x 800</strong>, <strong>1440 x 900</strong>,{" "}
        <strong>2560 x 1600</strong> o <strong>2880 x 1800</strong>.
        Apple acepta de una a diez capturas de pantalla por localización.
      </p>

      <h2>Capturas de pantalla de Apple Watch</h2>
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Píxeles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>Capturas de pantalla de Apple TV y Vision Pro</h2>
      <ul>
        <li>
          <strong>Apple TV:</strong> 1920 x 1080 o 3840 x 2160.
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h2>Consejos para gestionar múltiples tamaños</h2>
      <ul>
        <li>
          <strong>Diseña primero en el tamaño más grande.</strong> Es más fácil
          reducir la escala que aumentarla. Comienza con el iPhone de 6.9&quot; y el iPad de 13&quot;, luego
          adapta.
        </li>
        <li>
          <strong>Usa plantillas con marcos de dispositivos.</strong> En lugar de
          gestionar archivos de píxeles puros, utiliza una herramienta que envuelva las
          capturas de tu aplicación en el marco del dispositivo correcto de forma automática.
        </li>
        <li>
          <strong>Exporta todos los tamaños en un solo paso.</strong> El cambio manual de
          tamaño para cada dispositivo es la principal pérdida de tiempo. Un flujo de
          trabajo de exportación por lotes lo elimina.
        </li>
        <li>
          <strong>Screenshot Bro se encarga de todo esto.</strong> Configura tus filas con los tamaños de dispositivo que necesitas, diseña una vez y exporta cada tamaño con sus píxeles exactos de App Store en un solo lote. La biblioteca de marcos ya incluye el iPhone 18 Pro, el 18 Pro Max y el iPhone Duo (abierto, cerrado y abierto visto por detrás), y las dos resoluciones del Duo se pueden introducir como tamaño de fila personalizado.
        </li>
      </ul>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        Apple 对每个平台和显示类别都有特定的屏幕截图尺寸要求。如果遗漏了要求的尺寸，App Store Connect
        可能会拒绝该素材，或者降级使用缩放后的截图。以下是 2026 年当前接受的尺寸。
      </p>

      <h2>iPhone 屏幕截图</h2>
      <table>
        <thead>
          <tr>
            <th>显示屏尺寸</th>
            <th>像素（竖屏）</th>
            <th>设备</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot;（内屏）</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo（展开）</td>
          </tr>
          <tr>
            <td>5.4&quot;（外屏）</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo（折叠）</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736、1290 x 2796 或 1320 x 2868</td>
            <td>
              iPhone Air、18 Pro Max、17 Pro Max、16 Pro Max、16 Plus、15 Pro Max、15
              Plus、14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 或 1242 x 2688</td>
            <td>
              iPhone 14 Plus、13 Pro Max、12 Pro Max、11 Pro Max、11、XS Max、
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 或 1206 x 2622</td>
            <td>iPhone 18 Pro、17 Pro、17、16 Pro、16、15 Pro、15、14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532、1125 x 2436 或 1080 x 2340</td>
            <td>
              iPhone 17e、16e、14、13 Pro、13、13 mini、12 Pro、12、12 mini、
              11 Pro、XS、X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus、7 Plus、6s Plus、6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        iPhone 18 Pro 和 18 Pro Max 的分辨率与 17 Pro 和 17 Pro Max 相同，因此现有的 6.3&quot; 或 6.9&quot; 截图集已经适用。iPhone Duo 是例外：Apple 为它的两块屏幕分别列出了独立的截图尺寸（两者也都接受横屏版本），但 App Store Connect 目前还不支持上传 Duo 截图。Apple 表示将在 2026 年晚些时候提供支持，在此之前，6.9&quot; 截图集仍然是重点。
      </p>

      <h2>iPad 屏幕截图</h2>
      <table>
        <thead>
          <tr>
            <th>显示屏尺寸</th>
            <th>像素（竖屏）</th>
            <th>设备</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 或 2048 x 2732</td>
            <td>
              iPad Pro 13&quot; (M5/M4)、iPad Pro 12.9&quot; (第 3 代至第 6 代)、iPad Air
              13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266、1668 x 2420、1668 x 2388 或 1640 x 2360
            </td>
            <td>
              iPad Pro 11&quot; (M5/M4 和第 1 代至第 4 代)、iPad Air 11&quot;
              (M4/M3/M2)、iPad Air (第 4 代至第 5 代)、iPad (A16/第 10 代)、iPad
              mini (A17 Pro/第 6 代)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Mac 屏幕截图</h2>
      <p>
        Mac App Store 屏幕截图必须使用 Apple 接受的 16:10 尺寸之一：<strong>1280 x 800</strong>、<strong>1440 x 900</strong>、{" "}
        <strong>2560 x 1600</strong> 或 <strong>2880 x 1800</strong>。
        Apple 每个本地化版本接受一到十张屏幕截图。
      </p>

      <h2>Apple Watch 屏幕截图</h2>
      <table>
        <thead>
          <tr>
            <th>手表</th>
            <th>像素</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>Apple TV 和 Vision Pro 屏幕截图</h2>
      <ul>
        <li>
          <strong>Apple TV：</strong> 1920 x 1080 或 3840 x 2160。
        </li>
        <li>
          <strong>Apple Vision Pro：</strong> 3840 x 2160。
        </li>
      </ul>

      <h2>管理多种尺寸的技巧</h2>
      <ul>
        <li>
          <strong>先设计最大尺寸。</strong> 缩小比例比放大比例更容易。从 6.9&quot; iPhone 和 13&quot; iPad
          开始，然后进行适配。
        </li>
        <li>
          <strong>使用带有设备框架的模板。</strong> 与其管理原始像素文件，不如使用一个能自动将应用截图
          嵌入正确设备边框的工具。
        </li>
        <li>
          <strong>一步导出所有尺寸。</strong> 手动调整每个设备的尺寸是主要的精力消耗点。批量导出工作流可以
          解决这个问题。
        </li>
        <li>
          <strong>Screenshot Bro 可以处理所有这些工作。</strong> 根据需要的设备尺寸设置行，设计一次，然后按 App Store 要求的精确像素尺寸批量导出所有尺寸。设备框架库已包含 iPhone 18 Pro、18 Pro Max 以及 iPhone Duo（展开、折叠和展开后的背面），Duo 的两种分辨率可以通过自定义行尺寸来设置。
        </li>
      </ul>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        Apple को प्रत्येक प्लेटफ़ॉर्म और डिस्प्ले क्लास के लिए विशिष्ट स्क्रीनशॉट आयामों (dimensions) की आवश्यकता होती है। यदि कोई आवश्यक आकार छूट जाता है, तो App Store Connect एसेट को अस्वीकार कर सकता है या उसकी जगह एक स्केल किया हुआ स्क्रीनशॉट दिखा सकता है। यहाँ 2026 के लिए वर्तमान में स्वीकृत आयाम दिए गए हैं।
      </p>

      <h2>iPhone स्क्रीनशॉट</h2>
      <table>
        <thead>
          <tr>
            <th>डिस्प्ले आकार</th>
            <th>पिक्सेल (पोर्ट्रेट)</th>
            <th>डिवाइस</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot; (अंदरूनी)</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo, खुला हुआ</td>
          </tr>
          <tr>
            <td>5.4&quot; (बाहरी)</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo, मुड़ा हुआ</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736, 1290 x 2796, या 1320 x 2868</td>
            <td>
              iPhone Air, 18 Pro Max, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 या 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 या 1206 x 2622</td>
            <td>iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532, 1125 x 2436, या 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        iPhone 18 Pro और 18 Pro Max, 17 Pro और 17 Pro Max वाले ही रिज़ॉल्यूशन इस्तेमाल करते हैं, इसलिए आपका मौजूदा 6.3&quot; या 6.9&quot; सेट इन्हें पहले से कवर करता है। iPhone Duo अपवाद है: Apple इसकी दोनों स्क्रीन के लिए अलग-अलग स्क्रीनशॉट आकार बताता है (दोनों के लैंडस्केप संस्करण भी स्वीकार होते हैं), लेकिन App Store Connect अभी Duo के लिए अपलोड नहीं लेता। Apple के अनुसार यह सुविधा 2026 में आगे चलकर आएगी, इसलिए तब तक 6.9&quot; सेट को सही रखना ही सबसे ज़रूरी है।
      </p>

      <h2>iPad स्क्रीनशॉट</h2>
      <table>
        <thead>
          <tr>
            <th>डिस्प्ले आकार</th>
            <th>पिक्सेल (पोर्ट्रेट)</th>
            <th>डिवाइस</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 या 2048 x 2732</td>
            <td>
              iPad Pro 13&quot; (M5/M4), iPad Pro 12.9&quot; (तीसरी-छठी जनरेशन), iPad Air
              13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388, या 1640 x 2360
            </td>
            <td>
              iPad Pro 11&quot; (M5/M4 और पहली-चौथी जनरेशन), iPad Air 11&quot;
              (M4/M3/M2), iPad Air (चौथी-पांचवीं जनरेशन), iPad (A16/10वीं जनरेशन), iPad
              mini (A17 Pro/छठी जनरेशन)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Mac स्क्रीनशॉट</h2>
      <p>
        Mac App Store स्क्रीनशॉट के लिए Apple द्वारा स्वीकृत 16:10 आकारों में से किसी एक का उपयोग किया जाना चाहिए: <strong>1280 x 800</strong>, <strong>1440 x 900</strong>,{" "}
        <strong>2560 x 1600</strong>, या <strong>2880 x 1800</strong>।
        Apple प्रति स्थानीयकरण (localization) एक से दस स्क्रीनशॉट स्वीकार करता है।
      </p>

      <h2>Apple Watch स्क्रीनशॉट</h2>
      <table>
        <thead>
          <tr>
            <th>मॉडल</th>
            <th>पिक्सेल</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>Apple TV और Vision Pro स्क्रीनशॉट</h2>
      <ul>
        <li>
          <strong>Apple TV:</strong> 1920 x 1080 या 3840 x 2160.
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h2>एकाधिक आकारों को प्रबंधित करने के टिप्स</h2>
      <ul>
        <li>
          <strong>सबसे पहले सबसे बड़े आकार में डिज़ाइन करें।</strong> बड़े आकार को छोटा करना आसान है, छोटे को
          बड़ा करना मुश्किल। पहले 6.9&quot; iPhone और 13&quot; iPad से शुरुआत करें, फिर अन्य में ढालें।
        </li>
        <li>
          <strong>डिवाइस फ़्रेम के साथ टेम्प्लेट का उपयोग करें।</strong> कच्चे पिक्सेल फ़ाइलों को प्रबंधित करने के बजाय,
          ऐसे टूल का उपयोग करें जो आपके ऐप स्क्रीनशॉट को सही डिवाइस बेज़ेल में स्वचालित रूप से लपेटता है।
        </li>
        <li>
          <strong>सभी आकारों को एक ही बार में निर्यात करें।</strong> प्रत्येक डिवाइस के लिए मैन्युअल रूप से आकार बदलना
          समय की सबसे बड़ी बर्बादी है। एक बैच निर्यात वर्कफ़्लो इसे समाप्त करता है।
        </li>
        <li>
          <strong>Screenshot Bro यह सब संभालता है।</strong> जिन डिवाइस आकारों की आपको आवश्यकता है, उनके साथ अपनी पंक्तियाँ सेट करें, एक बार डिज़ाइन करें, और हर आकार को App Store के सटीक पिक्सेल आयामों पर एक ही बैच में निर्यात करें। फ़्रेम लाइब्रेरी में iPhone 18 Pro, 18 Pro Max और iPhone Duo (खुला, बंद, और खुला हुआ पीछे से) पहले से शामिल हैं, और Duo के दोनों रिज़ॉल्यूशन कस्टम पंक्ति आकार के रूप में डाले जा सकते हैं।
        </li>
      </ul>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        Apple exige des dimensions de capture d&apos;écran spécifiques pour chaque plateforme et
        chaque type d&apos;affichage. Si vous oubliez une taille requise, App Store Connect peut rejeter
        le fichier ou utiliser à la place une capture d&apos;écran mise à l&apos;échelle. Voici les dimensions
        actuellement acceptées pour 2026.
      </p>

      <h2>Captures d&apos;écran iPhone</h2>
      <table>
        <thead>
          <tr>
            <th>Taille d&apos;affichage</th>
            <th>Pixels (portrait)</th>
            <th>Appareils</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot; (intérieur)</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo, déplié</td>
          </tr>
          <tr>
            <td>5.4&quot; (extérieur)</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo, plié</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736, 1290 x 2796 ou 1320 x 2868</td>
            <td>
              iPhone Air, 18 Pro Max, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 ou 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 ou 1206 x 2622</td>
            <td>iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532, 1125 x 2436 ou 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        Les iPhone 18 Pro et 18 Pro Max utilisent les mêmes résolutions que les 17 Pro et 17 Pro Max : un lot 6.3&quot; ou 6.9&quot; existant les couvre déjà. L&apos;iPhone Duo fait exception : Apple indique une taille de capture distincte pour chacun de ses deux écrans (les versions paysage sont aussi acceptées), mais App Store Connect n&apos;accepte pas encore les envois pour le Duo. Apple annonce une prise en charge plus tard en 2026 ; d&apos;ici là, c&apos;est toujours le lot 6.9&quot; qu&apos;il faut soigner.
      </p>

      <h2>Captures d&apos;écran iPad</h2>
      <table>
        <thead>
          <tr>
            <th>Taille d&apos;affichage</th>
            <th>Pixels (portrait)</th>
            <th>Appareils</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 ou 2048 x 2732</td>
            <td>
              iPad Pro 13&quot; (M5/M4), iPad Pro 12.9&quot; (3e–6e gén.), iPad Air
              13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388 ou 1640 x 2360
            </td>
            <td>
              iPad Pro 11&quot; (M5/M4 et 1re–4e gén.), iPad Air 11&quot;
              (M4/M3/M2), iPad Air (4e–5e gén.), iPad (A16/10e gén.), iPad
              mini (A17 Pro/6e gén.)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Captures d&apos;écran Mac</h2>
      <p>
        Les captures d&apos;écran du Mac App Store doivent utiliser l&apos;une des tailles 16:10
        acceptées par Apple : <strong>1280 x 800</strong>, <strong>1440 x 900</strong>,{" "}
        <strong>2560 x 1600</strong> ou <strong>2880 x 1800</strong>.
        Apple accepte d&apos;une à dix captures d&apos;écran par localisation.
      </p>

      <h2>Captures d&apos;écran Apple Watch</h2>
      <table>
        <thead>
          <tr>
            <th>Modèle</th>
            <th>Pixels</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>Captures d&apos;écran Apple TV et Vision Pro</h2>
      <ul>
        <li>
          <strong>Apple TV :</strong> 1920 x 1080 ou 3840 x 2160.
        </li>
        <li>
          <strong>Apple Vision Pro :</strong> 3840 x 2160.
        </li>
      </ul>

      <h2>Conseils pour gérer plusieurs tailles</h2>
      <ul>
        <li>
          <strong>Concevez d&apos;abord pour la plus grande taille.</strong> Il est plus facile de
          réduire que d&apos;agrandir. Commencez par l&apos;iPhone 6.9&quot; et l&apos;iPad 13&quot;, puis
          adaptez.
        </li>
        <li>
          <strong>Utilisez des modèles avec des cadres d&apos;appareils.</strong> Au lieu de
          gérer des fichiers de pixels bruts, utilisez un outil qui intègre automatiquement vos captures
          d&apos;écran dans le bon boîtier d&apos;appareil.
        </li>
        <li>
          <strong>Exportez toutes les tailles en une seule étape.</strong> Le redimensionnement manuel pour
          chaque appareil est la tâche la plus chronophage. Un flux d&apos;exportation par lots l&apos;élimine.
        </li>
        <li>
          <strong>Screenshot Bro gère tout cela.</strong> Configurez vos lignes avec les tailles d&apos;appareils requises, concevez une seule fois et exportez chaque taille aux dimensions exactes exigées par l&apos;App Store, en un seul lot. La bibliothèque de cadres inclut déjà les iPhone 18 Pro et 18 Pro Max ainsi que l&apos;iPhone Duo (ouvert, fermé et ouvert vu de dos), et les deux résolutions du Duo se saisissent comme taille de ligne personnalisée.
        </li>
      </ul>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        تتطلب Apple أبعادًا محددة للقطات الشاشة لكل منصة وفئة عرض. وإذا فاتك أحد المقاسات المطلوبة، فقد يرفض
        App Store Connect هذا الأصل أو يعرض لقطة شاشة مصغرة/مكبرة بدلاً منها. إليك الأبعاد المقبولة حاليًا لعام 2026.
      </p>

      <h2>لقطات شاشة iPhone</h2>
      <table>
        <thead>
          <tr>
            <th>مقاس الشاشة</th>
            <th>البكسل (رأسي)</th>
            <th>الأجهزة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot; (الداخلية)</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo مفتوحًا</td>
          </tr>
          <tr>
            <td>5.4&quot; (الخارجية)</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo مطويًا</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736 أو 1290 x 2796 أو 1320 x 2868</td>
            <td>
              iPhone Air, 18 Pro Max, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 أو 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 أو 1206 x 2622</td>
            <td>iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532 أو 1125 x 2436 أو 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        يستخدم iPhone 18 Pro و18 Pro Max نفس دقة 17 Pro و17 Pro Max، لذا فإن مجموعتك الحالية بمقاس 6.3&quot; أو 6.9&quot; تغطيهما بالفعل. أما iPhone Duo فهو الاستثناء: تحدد Apple مقاسًا مستقلًا للقطات الشاشة لكل شاشة من شاشتيه (وتقبل النسخ الأفقية لكلتيهما)، لكن App Store Connect لا يقبل رفع لقطات Duo بعد. تقول Apple إن الدعم سيتوفر لاحقًا في 2026، وحتى ذلك الحين تبقى مجموعة 6.9&quot; هي الأهم.
      </p>

      <h2>لقطات شاشة iPad</h2>
      <table>
        <thead>
          <tr>
            <th>مقاس الشاشة</th>
            <th>البكسل (رأسي)</th>
            <th>الأجهزة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 أو 2048 x 2732</td>
            <td>
              iPad Pro 13&quot; (M5/M4)، iPad Pro 12.9&quot; (الجيل الثالث إلى السادس)، iPad Air
              13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266 أو 1668 x 2420 أو 1668 x 2388 أو 1640 x 2360
            </td>
            <td>
              iPad Pro 11&quot; (M5/M4 والجيل الأول إلى الرابع)، iPad Air 11&quot;
              (M4/M3/M2)، iPad Air (الجيل الرابع إلى الخامس)، iPad (A16/الجيل العاشر)، iPad
              mini (A17 Pro/الجيل السادس)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>لقطات شاشة Mac</h2>
      <p>
        يجب أن تستخدم لقطات شاشة Mac App Store أحد مقاسات 16:10 المقبولة من Apple: <strong>1280 x 800</strong> أو <strong>1440 x 900</strong> أو{" "}
        <strong>2560 x 1600</strong> أو <strong>2880 x 1800</strong>.
        تقبل Apple من لقطة واحدة إلى عشر لقطات شاشة لكل لغة (توطين).
      </p>

      <h2>لقطات شاشة Apple Watch</h2>
      <table>
        <thead>
          <tr>
            <th>الموديل</th>
            <th>البكسل</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>لقطات شاشة Apple TV و Vision Pro</h2>
      <ul>
        <li>
          <strong>Apple TV:</strong> 1920 x 1080 أو 3840 x 2160.
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h2>نصائح لإدارة أحجام متعددة</h2>
      <ul>
        <li>
          <strong>صمم بالمقاس الأكبر أولاً.</strong> من الأسهل التصغير بدلاً من التكبير. ابدأ بجهاز iPhone مقاس 6.9&quot; وجهاز iPad مقاس 13&quot;، ثم قم بالتعديل والملاءمة.
        </li>
        <li>
          <strong>استخدم قوالب ذات إطارات أجهزة.</strong> بدلاً من إدارة ملفات البكسل الخام، استخدم أداة تقوم بإحاطة لقطات شاشة تطبيقك بإطار الجهاز الصحيح تلقائيًا.
        </li>
        <li>
          <strong>تصدير جميع الأحجام في خطوة واحدة.</strong> تغيير الحجم يدويًا لكل جهاز هو المستهلك الرئيسي للوقت. يلغي سير العمل للتصدير المجمّع هذا الأمر.
        </li>
        <li>
          <strong>Screenshot Bro يعالج كل هذا.</strong> قم بإعداد الصفوف بمقاسات الأجهزة التي تحتاجها، وصمم مرة واحدة، ثم صدّر كل مقاس بأبعاد البكسل الدقيقة التي يطلبها App Store دفعة واحدة. تضم مكتبة الإطارات بالفعل iPhone 18 Pro و18 Pro Max وiPhone Duo (مفتوحًا ومطويًا ومفتوحًا من الخلف)، ويمكن إدخال دقتي Duo كمقاس صف مخصص.
        </li>
      </ul>
    </>
  );
}

function ContentDe() {
  return (
    <>
      <p>
        Apple erfordert spezifische Screenshot-Abmessungen für jede Plattform und
        Display-Klasse. Wenn Sie eine erforderliche Größe verpassen, kann App Store Connect
        das Asset ablehnen oder auf einen skalierten Screenshot zurückgreifen. Hier sind die
        aktuell akzeptierten Abmessungen für 2026.
      </p>

      <h2>iPhone-Screenshots</h2>
      <table>
        <thead>
          <tr>
            <th>Displaygröße</th>
            <th>Pixel (Hochformat)</th>
            <th>Geräte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot; (innen)</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo, aufgeklappt</td>
          </tr>
          <tr>
            <td>5.4&quot; (außen)</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo, zugeklappt</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736, 1290 x 2796 oder 1320 x 2868</td>
            <td>
              iPhone Air, 18 Pro Max, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 oder 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 oder 1206 x 2622</td>
            <td>iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532, 1125 x 2436 oder 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        iPhone 18 Pro und 18 Pro Max nutzen dieselben Auflösungen wie 17 Pro und 17 Pro Max – ein vorhandenes 6.3&quot;- oder 6.9&quot;-Set deckt sie also bereits ab. Das iPhone Duo ist die Ausnahme: Apple nennt für jeden seiner beiden Bildschirme eine eigene Screenshot-Größe (jeweils auch im Querformat), doch App Store Connect nimmt noch keine Duo-Uploads an. Laut Apple folgt die Unterstützung später im Jahr 2026 – bis dahin bleibt das 6.9&quot;-Set das entscheidende.
      </p>

      <h2>iPad-Screenshots</h2>
      <table>
        <thead>
          <tr>
            <th>Displaygröße</th>
            <th>Pixel (Hochformat)</th>
            <th>Geräte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 oder 2048 x 2732</td>
            <td>
              iPad Pro 13&quot; (M5/M4), iPad Pro 12.9&quot; (3.–6. Gen.), iPad Air
              13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388 oder 1640 x 2360
            </td>
            <td>
              iPad Pro 11&quot; (M5/M4 und 1.–4. Gen.), iPad Air 11&quot;
              (M4/M3/M2), iPad Air (4.–5. Gen.), iPad (A16/10. Gen.), iPad
              mini (A17 Pro/6. Gen.)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Mac-Screenshots</h2>
      <p>
        Mac App Store-Screenshots müssen eine der von Apple akzeptierten 16:10-Größen
        verwenden: <strong>1280 x 800</strong>, <strong>1440 x 900</strong>,{" "}
        <strong>2560 x 1600</strong> oder <strong>2880 x 1800</strong>.
        Apple akzeptiert ein bis zehn Screenshots pro Lokalisierung.
      </p>

      <h2>Apple Watch-Screenshots</h2>
      <table>
        <thead>
          <tr>
            <th>Modell</th>
            <th>Pixel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>Apple TV- und Vision Pro-Screenshots</h2>
      <ul>
        <li>
          <strong>Apple TV:</strong> 1920 x 1080 oder 3840 x 2160.
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h2>Tipps zur Verwaltung mehrerer Größen</h2>
      <ul>
        <li>
          <strong>Gestalten Sie zuerst für die größte Größe.</strong> Es ist einfacher,
          herunter- als hochzuskalieren. Beginnen Sie mit dem 6.9&quot; iPhone und dem 13&quot; iPad und passen Sie sie dann an.
        </li>
        <li>
          <strong>Verwenden Sie Vorlagen mit Geräterahmen.</strong> Verwenden Sie anstelle
          der Verwaltung roher Pixeldateien ein Tool, das Ihre App-Screenshots automatisch mit dem passenden Geräterahmen versieht.
        </li>
        <li>
          <strong>Exportieren Sie alle Größen in einem Schritt.</strong> Die manuelle Größenanpassung
          für jedes Gerät ist der größte Zeitfresser. Ein Batch-Export-Workflow macht dies überflüssig.
        </li>
        <li>
          <strong>Screenshot Bro erledigt all dies für Sie.</strong> Richten Sie Ihre Zeilen mit den benötigten Gerätegrößen ein, gestalten Sie einmalig und exportieren Sie jede Größe in einem Durchgang mit exakt den Pixelmaßen des App Store. Die Rahmenbibliothek enthält bereits iPhone 18 Pro, 18 Pro Max und das iPhone Duo (aufgeklappt, zugeklappt und aufgeklappt von hinten); die beiden Duo-Auflösungen legen Sie als benutzerdefinierte Zeilengröße an.
        </li>
      </ul>
    </>
  );
}

function ContentJa() {
  return (
    <>
      <p>
        Appleは、プラットフォームおよびディスプレイファミリーごとに特定のスクリーンショットの寸法を要求しています。必要なサイズが不足していると、App Store Connectはアセットを却下するか、代わりに縮小・拡大されたスクリーンショットを表示することがあります。以下は、2026年現在受け入れられている寸法です。
      </p>

      <h2>iPhoneのスクリーンショット</h2>
      <table>
        <thead>
          <tr>
            <th>ディスプレイサイズ</th>
            <th>ピクセル（縦向き）</th>
            <th>デバイス</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot;（内側）</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo（開いた状態）</td>
          </tr>
          <tr>
            <td>5.4&quot;（外側）</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo（閉じた状態）</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736、1290 x 2796、または 1320 x 2868</td>
            <td>
              iPhone Air、18 Pro Max、17 Pro Max、16 Pro Max、16 Plus、15 Pro Max、15
              Plus、14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 または 1242 x 2688</td>
            <td>
              iPhone 14 Plus、13 Pro Max、12 Pro Max、11 Pro Max、11、XS Max、
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 または 1206 x 2622</td>
            <td>iPhone 18 Pro、17 Pro、17、16 Pro、16、15 Pro、15、14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532、1125 x 2436、または 1080 x 2340</td>
            <td>
              iPhone 17e、16e、14、13 Pro、13、13 mini、12 Pro、12、12 mini、
              11 Pro、XS、X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus、7 Plus、6s Plus、6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        iPhone 18 Proと18 Pro Maxの解像度は17 Proと17 Pro Maxと同じなので、既存の6.3&quot;または6.9&quot;のセットでそのまま対応できます。例外はiPhone Duoです。Appleは2つの画面それぞれに専用のスクリーンショットサイズを定めていますが（どちらも横向きも可）、App Store ConnectはまだDuo向けのアップロードを受け付けていません。Appleによると対応は2026年中に始まる予定なので、それまでは6.9&quot;のセットを整えることが最優先です。
      </p>

      <h2>iPadのスクリーンショット</h2>
      <table>
        <thead>
          <tr>
            <th>ディスプレイサイズ</th>
            <th>ピクセル（縦向き）</th>
            <th>デバイス</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 または 2048 x 2732</td>
            <td>
              iPad Pro 13&quot; (M5/M4)、iPad Pro 12.9&quot; (第3〜6世代)、iPad Air
              13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266、1668 x 2420、1668 x 2388、または 1640 x 2360
            </td>
            <td>
              iPad Pro 11&quot; (M5/M4および第1〜4世代)、iPad Air 11&quot;
              (M4/M3/M2)、iPad Air (第4〜5世代)、iPad (A16/第10世代)、iPad
              mini (A17 Pro/第6世代)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Macのスクリーンショット</h2>
      <p>
        Mac App Storeのスクリーンショットは、Appleが許可している16:10サイズのいずれかを使用する必要があります：<strong>1280 x 800</strong>、<strong>1440 x 900</strong>、{" "}
        <strong>2560 x 1600</strong>、または<strong>2880 x 1800</strong>。
        Appleはローカライズごとに1〜10枚のスクリーンショットを受け入れます。
      </p>

      <h2>Apple Watchのスクリーンショット</h2>
      <table>
        <thead>
          <tr>
            <th>モデル</th>
            <th>ピクセル</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>Apple TVおよびVision Proのスクリーンショット</h2>
      <ul>
        <li>
          <strong>Apple TV：</strong> 1920 x 1080または3840 x 2160。
        </li>
        <li>
          <strong>Apple Vision Pro：</strong> 3840 x 2160。
        </li>
      </ul>

      <h2>複数サイズを管理するためのヒント</h2>
      <ul>
        <li>
          <strong>最初に最も大きなサイズでデザインします。</strong> 拡大するよりも縮小する方が簡単です。6.9&quot; iPhoneと13&quot; iPadから始めて、その後で調整します。
        </li>
        <li>
          <strong>デバイスフレーム付きのテンプレートを使用します。</strong> 生のピクセルファイルを管理する代わりに、アプリのスクリーンショットを正しいデバイスのベゼルで自動的に囲むツールを使用します。
        </li>
        <li>
          <strong>すべてのサイズをワンステップで書き出します。</strong> デバイスごとに手動でサイズを変更するのは、主な時間の無駄です。一括書き出しのワークフローを使用すれば、この手間を省くことができます。
        </li>
        <li>
          <strong>Screenshot Broがこれらすべてを処理します。</strong> 必要なデバイスサイズで行を設定し、一度デザインすれば、すべてのサイズをApp Storeが求める正確なピクセル寸法で一括書き出しできます。フレームライブラリにはiPhone 18 Pro、18 Pro Max、iPhone Duo（開いた状態、閉じた状態、開いた状態の背面）がすでに含まれており、Duoの2つの解像度はカスタムの行サイズとして入力できます。
        </li>
      </ul>
    </>
  );
}

function ContentPt() {
  return (
    <>
      <p>
        A Apple exige dimensões de captura de tela específicas para cada plataforma e
        classe de tela. Se você perder um tamanho obrigatório, o App Store Connect
        poderá rejeitar o recurso ou recorrer a uma captura de tela redimensionada. Aqui estão as
        dimensões aceitas atualmente para 2026.
      </p>

      <h2>Capturas de Tela do iPhone</h2>
      <table>
        <thead>
          <tr>
            <th>Tamanho da Tela</th>
            <th>Pixels (Retrato)</th>
            <th>Dispositivos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot; (interna)</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo, aberto</td>
          </tr>
          <tr>
            <td>5.4&quot; (externa)</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo, fechado</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736, 1290 x 2796 ou 1320 x 2868</td>
            <td>
              iPhone Air, 18 Pro Max, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 ou 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 ou 1206 x 2622</td>
            <td>iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532, 1125 x 2436 ou 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        O iPhone 18 Pro e o 18 Pro Max usam as mesmas resoluções do 17 Pro e do 17 Pro Max, então um conjunto de 6.3&quot; ou 6.9&quot; que você já tenha os cobre. O iPhone Duo é a exceção: a Apple lista um tamanho de captura próprio para cada uma das duas telas (as versões em paisagem também são aceitas), mas o App Store Connect ainda não aceita envios para o Duo. A Apple diz que o suporte chega ainda em 2026; até lá, o conjunto de 6.9&quot; continua sendo o que mais importa.
      </p>

      <h2>Capturas de Tela do iPad</h2>
      <table>
        <thead>
          <tr>
            <th>Tamanho da Tela</th>
            <th>Pixels (Retrato)</th>
            <th>Dispositivos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 ou 2048 x 2732</td>
            <td>
              iPad Pro 13&quot; (M5/M4), iPad Pro 12.9&quot; (3ª–6ª ger.), iPad Air
              13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388 ou 1640 x 2360
            </td>
            <td>
              iPad Pro 11&quot; (M5/M4 e 1ª–4ª ger.), iPad Air 11&quot;
              (M4/M3/M2), iPad Air (4ª–5ª ger.), iPad (A16/10ª ger.), iPad
              mini (A17 Pro/6ª ger.)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Capturas de Tela do Mac</h2>
      <p>
        As capturas de tela da Mac App Store devem usar um dos tamanhos 16:10
        aceitos pela Apple: <strong>1280 x 800</strong>, <strong>1440 x 900</strong>,{" "}
        <strong>2560 x 1600</strong> ou <strong>2880 x 1800</strong>.
        A Apple aceita de uma a dez capturas de tela por localização.
      </p>

      <h2>Capturas de Tela do Apple Watch</h2>
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Pixels</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>Capturas de Tela do Apple TV e do Vision Pro</h2>
      <ul>
        <li>
          <strong>Apple TV:</strong> 1920 x 1080 ou 3840 x 2160.
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h2>Dicas para Gerenciar Vários Tamanhos</h2>
      <ul>
        <li>
          <strong>Desenhe primeiro no maior tamanho.</strong> É mais fácil
          reduzir a escala do que aumentá-la. Comece com o iPhone de 6.9&quot; e o iPad de 13&quot;, depois adapte.
        </li>
        <li>
          <strong>Use modelos com molduras de dispositivos.</strong> Em vez de
          gerenciar arquivos de pixels puros, use uma ferramenta que envolva as
          capturas de tela do seu aplicativo na moldura correta do dispositivo automaticamente.
        </li>
        <li>
          <strong>Exporte todos os tamanhos em uma única etapa.</strong> O redimensionamento manual para
          cada dispositivo é a principal perda de tempo. Um fluxo de trabalho de exportação em lote elimina isso.
        </li>
        <li>
          <strong>O Screenshot Bro cuida de tudo isso.</strong> Configure suas linhas com os tamanhos de dispositivos necessários, desenhe uma vez e exporte cada tamanho nas dimensões exatas em pixels da App Store, em um único lote. A biblioteca de molduras já inclui o iPhone 18 Pro, o 18 Pro Max e o iPhone Duo (aberto, fechado e aberto visto por trás), e as duas resoluções do Duo podem ser digitadas como tamanho de linha personalizado.
        </li>
      </ul>
    </>
  );
}

function ContentIt() {
  return (
    <>
      <p>
        Apple richiede dimensioni specifiche per gli screenshot per ciascuna piattaforma e
        classe di display. Se manca una dimensione richiesta, App Store Connect può rifiutare
        la risorsa o utilizzare uno screenshot ridimensionato. Ecco le dimensioni
        attualmente accettate per il 2026.
      </p>

      <h2>Screenshot per iPhone</h2>
      <table>
        <thead>
          <tr>
            <th>Dimensioni Display</th>
            <th>Pixel (Verticale)</th>
            <th>Dispositivi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot; (interno)</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo, aperto</td>
          </tr>
          <tr>
            <td>5.4&quot; (esterno)</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo, chiuso</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736, 1290 x 2796 o 1320 x 2868</td>
            <td>
              iPhone Air, 18 Pro Max, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 o 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 o 1206 x 2622</td>
            <td>iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532, 1125 x 2436 o 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        iPhone 18 Pro e 18 Pro Max usano le stesse risoluzioni di 17 Pro e 17 Pro Max, quindi un set da 6.3&quot; o 6.9&quot; già pronto li copre. L&apos;eccezione è iPhone Duo: Apple indica una dimensione di screenshot distinta per ciascuno dei suoi due schermi (accettate anche in orizzontale), ma App Store Connect non accetta ancora caricamenti per Duo. Apple dice che il supporto arriverà più avanti nel 2026; fino ad allora il set da 6.9&quot; resta quello da curare.
      </p>

      <h2>Screenshot per iPad</h2>
      <table>
        <thead>
          <tr>
            <th>Dimensioni Display</th>
            <th>Pixel (Verticale)</th>
            <th>Dispositivi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 o 2048 x 2732</td>
            <td>
              iPad Pro 13&quot; (M5/M4), iPad Pro 12.9&quot; (3ª–6ª gen), iPad Air
              13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388 o 1640 x 2360
            </td>
            <td>
              iPad Pro 11&quot; (M5/M4 e 1ª–4ª gen), iPad Air 11&quot;
              (M4/M3/M2), iPad Air (4ª–5ª gen), iPad (A16/10ª gen), iPad
              mini (A17 Pro/6ª gen)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Screenshot per Mac</h2>
      <p>
        Gli screenshot del Mac App Store devono utilizzare una delle dimensioni 16:10
        accettate da Apple: <strong>1280 x 800</strong>, <strong>1440 x 900</strong>,{" "}
        <strong>2560 x 1600</strong> o <strong>2880 x 1800</strong>.
        Apple accetta da uno a dieci screenshot per localizzazione.
      </p>

      <h2>Screenshot per Apple Watch</h2>
      <table>
        <thead>
          <tr>
            <th>Modello</th>
            <th>Pixel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>Screenshot per Apple TV e Vision Pro</h2>
      <ul>
        <li>
          <strong>Apple TV:</strong> 1920 x 1080 o 3840 x 2160.
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h2>Consigli per la Gestione di Molteplici Dimensioni</h2>
      <ul>
        <li>
          <strong>Progetta prima per le dimensioni più grandi.</strong> È più facile
          ridurre le dimensioni che aumentarle. Inizia con l&apos;iPhone da 6.9&quot; e l&apos;iPad da 13&quot;, quindi procedi all&apos;adattamento.
        </li>
        <li>
          <strong>Usa modelli con cornici per dispositivi.</strong> Invece di
          gestire file di pixel grezzi, usa uno strumento che inserisca automaticamente gli
          screenshot della tua app all&apos;interno della cornice del dispositivo corretta.
        </li>
        <li>
          <strong>Esporta tutte le dimensioni in un solo passaggio.</strong> Il ridimensionamento manuale per
          ciascun dispositivo è la principale perdita di tempo. Un flusso di lavoro di esportazione in batch lo elimina.
        </li>
        <li>
          <strong>Screenshot Bro gestisce tutto questo.</strong> Imposta le righe con le dimensioni dei dispositivi che desideri, crea il design una sola volta ed esporta ogni dimensione in un unico batch, con i pixel esatti richiesti dall&apos;App Store. La libreria di cornici include già iPhone 18 Pro, 18 Pro Max e iPhone Duo (aperto, chiuso e aperto visto da dietro), e le due risoluzioni di Duo si inseriscono come dimensione personalizzata della riga.
        </li>
      </ul>
    </>
  );
}

function ContentKo() {
  return (
    <>
      <p>
        Apple은 각 플랫폼 및 디스플레이 등급에 따라 구체적인 스크린샷 크기를 요구합니다. 필수 크기를 누락하면 App Store Connect에서 애셋을 거부하거나 크기가 조정된 스크린샷으로 대체할 수 있습니다. 2026년 기준 현재 허용되는 규격은 다음과 같습니다.
      </p>

      <h2>iPhone 스크린샷</h2>
      <table>
        <thead>
          <tr>
            <th>디스플레이 크기</th>
            <th>픽셀 (세로 방향)</th>
            <th>기기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7.6&quot; (내부)</td>
            <td>2007 x 2853</td>
            <td>iPhone Duo, 펼친 상태</td>
          </tr>
          <tr>
            <td>5.4&quot; (외부)</td>
            <td>1398 x 2034</td>
            <td>iPhone Duo, 접은 상태</td>
          </tr>
          <tr>
            <td>6.9&quot;</td>
            <td>1260 x 2736, 1290 x 2796 또는 1320 x 2868</td>
            <td>
              iPhone Air, 18 Pro Max, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5&quot;</td>
            <td>1284 x 2778 또는 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3&quot;</td>
            <td>1179 x 2556 또는 1206 x 2622</td>
            <td>iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1&quot;</td>
            <td>1170 x 2532, 1125 x 2436 또는 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5&quot;</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        iPhone 18 Pro와 18 Pro Max는 17 Pro 및 17 Pro Max와 해상도가 같으므로 기존 6.3&quot; 또는 6.9&quot; 세트로 그대로 대응할 수 있습니다. 예외는 iPhone Duo입니다. Apple은 두 화면 각각에 별도의 스크린샷 크기를 지정했지만(둘 다 가로 방향도 허용), App Store Connect는 아직 Duo용 업로드를 받지 않습니다. Apple에 따르면 지원은 2026년 중에 제공될 예정이므로, 그때까지는 6.9&quot; 세트를 제대로 준비하는 것이 가장 중요합니다.
      </p>

      <h2>iPad 스크린샷</h2>
      <table>
        <thead>
          <tr>
            <th>디스플레이 크기</th>
            <th>픽셀 (세로 방향)</th>
            <th>기기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13&quot;</td>
            <td>2064 x 2752 또는 2048 x 2732</td>
            <td>
              iPad Pro 13&quot; (M5/M4), iPad Pro 12.9&quot; (3~6세대), iPad Air
              13&quot; (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11&quot;</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388 또는 1640 x 2360
            </td>
            <td>
              iPad Pro 11&quot; (M5/M4 및 1~4세대), iPad Air 11&quot;
              (M4/M3/M2), iPad Air (4~5세대), iPad (A16/10세대), iPad
              mini (A17 Pro/6세대)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Mac 스크린샷</h2>
      <p>
        Mac App Store 스크린샷은 Apple에서 허용하는 16:10 비율 크기 중 하나를 사용해야 합니다: <strong>1280 x 800</strong>, <strong>1440 x 900</strong>,{" "}
        <strong>2560 x 1600</strong> 또는 <strong>2880 x 1800</strong>.
        Apple은 현지화당 1~10개의 스크린샷을 지원합니다.
      </p>

      <h2>Apple Watch 스크린샷</h2>
      <table>
        <thead>
          <tr>
            <th>모델</th>
            <th>픽셀</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Watch Ultra 3</td>
            <td>422 x 514</td>
          </tr>
          <tr>
            <td>Apple Watch Ultra 2 / Ultra</td>
            <td>410 x 502</td>
          </tr>
          <tr>
            <td>Series 11 / Series 10</td>
            <td>416 x 496</td>
          </tr>
          <tr>
            <td>Series 9 / 8 / 7</td>
            <td>396 x 484</td>
          </tr>
          <tr>
            <td>Series 6 / 5 / 4, SE 3 / SE</td>
            <td>368 x 448</td>
          </tr>
          <tr>
            <td>Series 3</td>
            <td>312 x 390</td>
          </tr>
        </tbody>
      </table>

      <h2>Apple TV 및 Vision Pro 스크린샷</h2>
      <ul>
        <li>
          <strong>Apple TV:</strong> 1920 x 1080 또는 3840 x 2160.
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h2>다양한 크기 관리를 위한 팁</h2>
      <ul>
        <li>
          <strong>가장 큰 크기로 먼저 디자인하세요.</strong> 크기를 키우는 것보다 줄이는 것이 훨씬 쉽습니다. 6.9&quot; iPhone 및 13&quot; iPad로 시작한 다음 맞게 변형하세요.
        </li>
        <li>
          <strong>기기 프레임이 포함된 템플릿을 사용하세요.</strong> 원본 픽셀 파일을 직접 관리하는 대신, 앱 스크린샷을 적절한 기기 베젤로 자동 래핑해 주는 도구를 사용하는 것이 좋습니다.
        </li>
        <li>
          <strong>한 번에 모든 크기를 내보내세요.</strong> 각 기기별로 수동으로 크기를 조절하는 것이 가장 많은 시간이 소요되는 작업입니다. 일괄 내보내기 워크플로우를 사용하면 이 과정을 생략할 수 있습니다.
        </li>
        <li>
          <strong>Screenshot Bro가 이 모든 것을 대신 해결해 드립니다.</strong> 필요한 기기 크기로 행을 설정하고 디자인을 한 번만 마친 후, 모든 크기를 App Store가 요구하는 정확한 픽셀 크기로 한 번에 일괄 내보낼 수 있습니다. 프레임 라이브러리에는 iPhone 18 Pro, 18 Pro Max, iPhone Duo(펼친 상태, 접은 상태, 펼친 상태의 뒷면)가 이미 포함되어 있으며, Duo의 두 해상도는 사용자 지정 행 크기로 입력할 수 있습니다.
        </li>
      </ul>
    </>
  );
}

