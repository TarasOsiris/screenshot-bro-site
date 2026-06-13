import type { Route } from "./+types/blog.upload-screenshots-to-app-store-connect";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { data, useLoaderData } from "react-router";
import { isLocaleCode, type LocaleCode } from "~/config/localization";

const SLUG = "upload-screenshots-to-app-store-connect";

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
      return "Diseña y sube tus capturas de la App Store en una sola herramienta: sin arrastrar y soltar, sin mantenimiento de fastlane.";
    case "zh":
      return "在一个工具中设计并上传您的 App Store 截图 —— 无需拖放，无需维护 fastlane。";
    case "hi":
      return "एक ही टूल में अपने ऐप स्टोर स्क्रीनशॉट डिज़ाइन और अपलोड करें — कोई ड्रैग-एंड-ड्रॉप नहीं, कोई फ़ास्टलेन मेंटेनेंस नहीं।";
    case "fr":
      return "Concevez et envoyez vos captures App Store dans un seul outil — sans glisser-déposer, ni maintenance de fastlane.";
    case "ar":
      return "صمم لقطات شاشة App Store الخاصة بك وارفعها في أداة واحدة - دون سحب وإفلات، ودون عناء صيانة fastlane.";
    default:
      return "Design and upload your App Store screenshots in one tool — no drag-and-drop, no fastlane maintenance.";
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
        Uploading App Store screenshots is still one of the clunkiest parts
        of shipping an iOS, iPadOS, or macOS app. Apple supports{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          multiple display types per platform
        </a>{" "}
        and every locale has its own slot, so even a small app can end up
        with 80–200 files to push per release. This guide covers four
        practical ways to get screenshots into App Store Connect in 2026,
        when to pick each, and the gotchas that waste an afternoon if you
        do not know about them in advance.
      </p>

      <h2>Option 1: The App Store Connect Web Uploader</h2>
      <p>
        The default path. Open your app in{" "}
        <a
          href="https://appstoreconnect.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect
        </a>
        , pick the version you want to edit, scroll to{" "}
        <strong>Screenshots</strong>, and drag your PNG or JPEG files into
        the correct display-type bucket (6.9&quot;, 6.5&quot;, 13&quot; iPad, Mac, etc.).
        Repeat for every locale.
      </p>
      <ul>
        <li>
          <strong>Good for:</strong> a first submission, a small app with
          one or two locales, or when you need to preview exactly what the
          reviewer will see.
        </li>
        <li>
          <strong>Bad for:</strong> anything multilingual, anything with
          more than a couple of display types, or any workflow you need to
          repeat every release. 30 minutes of drag-and-drop per locale adds
          up fast.
        </li>
      </ul>
      <p>
        <strong>Common gotchas:</strong>
      </p>
      <ul>
        <li>
          Wrong display type. If your exported file is 1320 × 2868 (iPhone
          16/17 Pro Max, 6.9&quot;) and you drop it into the 6.5&quot; bucket, App
          Store Connect rejects the upload.
        </li>
        <li>
          Locked versions. Once a version is &quot;In Review&quot; or &quot;Pending
          Developer Release&quot;, screenshots are read-only. Create a new
          version first.
        </li>
        <li>
          Partial uploads. If a replacement workflow fails midway, verify
          the full display-type set before submitting instead of assuming
          the old set is still intact.
        </li>
      </ul>

      <h2>Option 2: Transporter or Fastlane Deliver</h2>
      <p>
        Both tools automate App Store Connect delivery, but with different
        packaging and setup tradeoffs.
      </p>
      <p>
        <strong>Transporter</strong> is a free Apple utility for shipping
        builds and metadata packages. It is scriptable but assumes you
        already have an iTMSTransporter-compatible folder structure with
        metadata XML. Great if you already build IPA packages with
        xcodebuild; clunky if you only want to push screenshots.
      </p>
      <p>
        <strong>
          <a
            href="https://docs.fastlane.tools/actions/deliver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            fastlane deliver
          </a>
        </strong>{" "}
        is the community standard. You keep your screenshots in a folder
        structure like{" "}
        <code>fastlane/screenshots/en-US/iPhone 6.9 - 01.png</code> and run{" "}
        <code>fastlane deliver</code>. It uploads screenshots, metadata,
        and keywords in one pass.
      </p>
      <ul>
        <li>
          <strong>Good for:</strong> teams that already have a CI pipeline,
          want screenshot uploads in git, and do not mind Ruby.
        </li>
        <li>
          <strong>Bad for:</strong> designers who do not want to maintain a
          Ruby toolchain, and anyone who wants a GUI that shows what will
          be uploaded before it happens.
        </li>
      </ul>
      <p>
        <strong>Common gotchas:</strong>
      </p>
      <ul>
        <li>
          Resolution and naming matter. fastlane can infer display targets
          from image resolution, and ambiguous iPad families may need
          Apple&apos;s display-family name in the filename to land in the right
          screenshot slot.
        </li>
        <li>
          App Store Connect API keys must be generated once and stored
          securely (Key ID, Issuer ID, and .p8 file). Losing the .p8 means
          regenerating.
        </li>
        <li>
          Replacement is all-or-nothing. Every existing screenshot in the
          target display type is deleted before the new ones upload.
        </li>
      </ul>

      <h2>Option 3: The App Store Connect API Directly</h2>
      <p>
        If you are building a tool yourself, the{" "}
        <a
          href="https://developer.apple.com/documentation/appstoreconnectapi"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect API
        </a>{" "}
        exposes screenshot upload via three endpoints:
      </p>
      <ol>
        <li>
          <code>POST /v1/appScreenshotSets</code> — create a screenshot set
          for a specific display type and localization.
        </li>
        <li>
          <code>POST /v1/appScreenshots</code> — create a screenshot
          reservation, returning upload operation metadata (chunked PUT
          URLs).
        </li>
        <li>
          <code>PATCH /v1/appScreenshots/&#123;id&#125;</code> with{" "}
          <code>uploaded: true</code> — commit the upload after all chunks
          are pushed.
        </li>
      </ol>
      <p>
        You authenticate with a JWT signed by your .p8 key. The auth JWT is
        short-lived (20 minutes max) and scoped to the App Store Connect
        API audience. Apple also rate-limits aggressive uploads, so chunked
        concurrent uploads need a retry/backoff strategy.
      </p>
      <p>
        <strong>Good for:</strong> building custom automation or tools. You
        get full control, typed responses, and can build UX around the
        upload flow.
      </p>
      <p>
        <strong>Bad for:</strong> anyone who just wants to ship, not
        maintain. Expect to spend a weekend on auth, chunked uploads, and
        error handling before it is reliable.
      </p>

      <h2>Option 4: A Design Tool That Uploads For You</h2>
      <p>
        This is the workflow we built into{" "}
        <a href="/">Screenshot Bro</a>. You design your screenshots, add
        locales, auto-translate the copy, and then click{" "}
        <strong>Upload to App Store Connect</strong>. The app:
      </p>
      <ul>
        <li>
          Auto-detects the right display type from your row size
          (1320 × 2868 → iPhone 6.9&quot;, 2064 × 2752 → iPad 13&quot;, etc.).
        </li>
        <li>
          Matches your project locales against the App Store Connect
          localizations on the selected version. Mismatches are flagged up
          front.
        </li>
        <li>
          Runs a preflight — oversized files, missing locales, locked
          versions, or platform conflicts surface before Apple sees
          anything.
        </li>
        <li>
          Replaces each matching set atomically. No half-replaced state,
          no rename-the-folder dance.
        </li>
      </ul>
      <p>
        The API key (Issuer ID, Key ID, .p8) is stored once in the macOS
        Keychain. After setup, every release is one click.
      </p>

      <h2>Which Option Should You Pick?</h2>
      <p>
        A rough decision tree:
      </p>
      <ul>
        <li>
          <strong>One locale, one app, rarely update.</strong> The web
          uploader is fine.
        </li>
        <li>
          <strong>CI pipeline, git-tracked screenshots, Ruby team.</strong>{" "}
          fastlane deliver.
        </li>
        <li>
          <strong>Custom tool / in-house automation.</strong> The API
          directly.
        </li>
        <li>
          <strong>
            Indie dev or small team, designing + shipping screenshots
            yourself.
          </strong>{" "}
          Use a Mac/iPad app that collapses design and upload into one flow.
        </li>
      </ul>

      <h2>Before You Upload: A Checklist</h2>
      <p>
        Whichever route you pick, these are the mistakes that cost the most
        time:
      </p>
      <ul>
        <li>
          Your screenshots are exactly the{" "}
          <a href="/blog/app-store-screenshot-sizes">
            supported dimensions
          </a>{" "}
          — not one pixel off. Apple can reject mismatches during upload or
          processing.
        </li>
        <li>
          The selected App Store version is editable (not &quot;In Review&quot; or
          &quot;Pending Developer Release&quot;).
        </li>
        <li>
          Every locale you plan to upload has a matching App Store Connect
          localization enabled on that version.
        </li>
        <li>
          PNG or JPEG only. No HEIC, no WebP, no progressive JPEGs.
        </li>
        <li>
          RGB color, with no alpha channel for screenshots.
        </li>
      </ul>

      <h2>TL;DR</h2>
      <p>
        The web uploader is the least fun option for anything repeated.
        fastlane is the default for teams that ship often. The API is
        powerful but a weekend of work. If you want one-click upload
        straight from a design app, that is exactly what Screenshot Bro&apos;s{" "}
        <strong>Upload to App Store Connect</strong> feature was built for
        — auto-detected display types, locale matching, preflight, and one
        Keychain-stored API key.
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Subir capturas de pantalla a la App Store sigue siendo una de las partes más engorrosas
        al lanzar una aplicación para iOS, iPadOS o macOS. Apple admite{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          múltiples tipos de pantalla por plataforma
        </a>{" "}
        y cada idioma tiene su propio espacio, por lo que incluso una aplicación pequeña puede terminar
        con 80–200 archivos que subir por lanzamiento. Esta guía cubre cuatro
        formas prácticas de subir capturas a App Store Connect en 2026,
        cuándo elegir cada una y los inconvenientes que pueden hacerte perder una tarde entera si
        no los conoces de antemano.
      </p>

      <h2>Opción 1: El cargador web de App Store Connect</h2>
      <p>
        El camino predeterminado. Abre tu aplicación en{" "}
        <a
          href="https://appstoreconnect.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect
        </a>
        , elige la versión que deseas editar, desplázate hasta{" "}
        <strong>Capturas de pantalla</strong> y arrastra tus archivos PNG o JPEG al
        contenedor del tipo de pantalla correcto (6.9&quot;, 6.5&quot;, iPad de 13&quot;, Mac, etc.).
        Repite para cada idioma.
      </p>
      <ul>
        <li>
          <strong>Ideal para:</strong> un primer envío, una aplicación pequeña con
          uno o dos idiomas, o cuando necesitas previsualizar exactamente lo que el
          revisor verá.
        </li>
        <li>
          <strong>No recomendado para:</strong> aplicaciones multilingües, cualquier aplicación con
          más de un par de tipos de pantalla, o cualquier flujo de trabajo que debas
          repetir en cada lanzamiento. 30 minutos de arrastrar y soltar por idioma se
          acumulan rápidamente.
        </li>
      </ul>
      <p>
        <strong>Errores comunes:</strong>
      </p>
      <ul>
        <li>
          Tipo de pantalla incorrecto. Si tu archivo exportado mide 1320 × 2868 (iPhone
          16/17 Pro Max, de 6.9&quot;) y lo sueltas en el contenedor de 6.5&quot;, App
          Store Connect rechazará la subida.
        </li>
        <li>
          Versiones bloqueadas. Una vez que una versión está &quot;En revisión&quot; o &quot;Pendiente de
          lanzamiento por el desarrollador&quot;, las capturas de pantalla son de solo lectura. Crea una
          nueva versión primero.
        </li>
        <li>
          Subidas parciales. Si un flujo de reemplazo falla a mitad del camino, verifica
          todo el conjunto de tipos de pantalla antes de enviar, en lugar de asumir
          que el conjunto anterior sigue intacto.
        </li>
      </ul>

      <h2>Opción 2: Transporter o Fastlane Deliver</h2>
      <p>
        Ambas herramientas automatizan la entrega en App Store Connect, pero con diferentes
        compensaciones en la preparación y configuración.
      </p>
      <p>
        <strong>Transporter</strong> es una utilidad gratuita de Apple para enviar
        compilaciones y paquetes de metadatos. Es programable pero asume que
        ya tienes una estructura de carpetas compatible con iTMSTransporter con
        XML de metadatos. Ideal si ya creas paquetes IPA con
        xcodebuild; engorroso si solo deseas subir capturas de pantalla.
      </p>
      <p>
        <strong>
          <a
            href="https://docs.fastlane.tools/actions/deliver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            fastlane deliver
          </a>
        </strong>{" "}
        es el estándar de la comunidad. Guardas tus capturas en una estructura
        de carpetas como{" "}
        <code>fastlane/screenshots/es-ES/iPhone 6.9 - 01.png</code> y ejecutas{" "}
        <code>fastlane deliver</code>. Sube capturas de pantalla, metadatos y
        palabras clave en una sola pasada.
      </p>
      <ul>
        <li>
          <strong>Ideal para:</strong> equipos que ya tienen un pipeline de CI,
          quieren las subidas de capturas en git y no les importa usar Ruby.
        </li>
        <li>
          <strong>No recomendado para:</strong> diseñadores que no quieren mantener un
          entorno de Ruby, y cualquiera que busque una interfaz gráfica que muestre lo que se
          subirá antes de que suceda.
        </li>
      </ul>
      <p>
        <strong>Errores comunes:</strong>
      </p>
      <ul>
        <li>
          La resolución y el nombre importan. fastlane puede deducir los objetivos de pantalla
          a partir de la resolución de la imagen, y las familias de iPad ambiguas pueden necesitar el
          nombre de la familia de pantallas de Apple en el nombre del archivo para llegar al hueco correcto.
        </li>
        <li>
          Las claves API de App Store Connect deben generarse una vez y almacenarse de forma
          segura (Key ID, Issuer ID y archivo .p8). Perder el archivo .p8 significa
          tener que regenerarlo.
        </li>
        <li>
          El reemplazo es todo o nada. Todas las capturas de pantalla existentes en el
          tipo de pantalla de destino se eliminan antes de que se suban las nuevas.
        </li>
      </ul>

      <h2>Opción 3: Directamente la API de App Store Connect</h2>
      <p>
        Si estás creando tu propia herramienta, la{" "}
        <a
          href="https://developer.apple.com/documentation/appstoreconnectapi"
          target="_blank"
          rel="noopener noreferrer"
        >
          API de App Store Connect
        </a>{" "}
        expone la subida de capturas a través de tres endpoints:
      </p>
      <ol>
        <li>
          <code>POST /v1/appScreenshotSets</code> — crea un conjunto de capturas
          para un tipo de pantalla e idioma específicos.
        </li>
        <li>
          <code>POST /v1/appScreenshots</code> — crea una reserva de captura
          de pantalla, devolviendo metadatos de la operación de subida (URLs de PUT
          fragmentadas).
        </li>
        <li>
          <code>PATCH /v1/appScreenshots/&#123;id&#125;</code> con{" "}
          <code>uploaded: true</code> — confirma la subida después de que se hayan
          enviado todos los fragmentos.
        </li>
      </ol>
      <p>
        Te autenticas con un JWT firmado por tu clave .p8. El JWT de autenticación es de
        corta duración (máximo 20 minutos) y está limitado a la audiencia de la API de App Store Connect.
        Apple también limita el ritmo de las subidas agresivas, por lo que las subidas concurrentes
        fragmentadas necesitan una estrategia de reintentos y esperas (retry/backoff).
      </p>
      <p>
        <strong>Ideal para:</strong> construir automatizaciones o herramientas personalizadas. Obtienes
        un control total, respuestas tipadas y puedes crear una experiencia de usuario (UX) adaptada al
        flujo de subida.
      </p>
      <p>
        <strong>No recomendado para:</strong> cualquiera que solo quiera publicar y no
        mantener código. Cuenta con pasar un fin de semana entero en la autenticación, las subidas fragmentadas y
        el manejo de errores antes de que sea confiable.
      </p>

      <h2>Opción 4: Una herramienta de diseño que sube los archivos por ti</h2>
      <p>
        Este es el flujo de trabajo que integramos en{" "}
        <a href="/">Screenshot Bro</a>. Diseñas tus capturas de pantalla, añades
        los idiomas, traduces automáticamente el texto y luego haces clic en{" "}
        <strong>Subir a App Store Connect</strong>. La aplicación:
      </p>
      <ul>
        <li>
          Detecta automáticamente el tipo de pantalla correcto a partir del tamaño de tu fila
          (1320 × 2868 → iPhone 6.9&quot;, 2064 × 2752 → iPad 13&quot;, etc.).
        </li>
        <li>
          Compara los idiomas de tu proyecto con las localizaciones de App Store Connect
          en la versión seleccionada. Cualquier discrepancia se avisa de antemano.
        </li>
        <li>
          Realiza un chequeo previo (preflight): los archivos demasiado grandes, los idiomas faltantes, las versiones
          bloqueadas o los conflictos de plataforma se detectan antes de que Apple vea nada.
        </li>
        <li>
          Reemplaza cada conjunto coincidente de forma atómica. Sin estados a medio reemplazar,
          ni tener que andar renombrando carpetas.
        </li>
      </ul>
      <p>
        La clave API (Issuer ID, Key ID, .p8) se almacena una vez en el llavero de macOS
        (Keychain). Después de la configuración, cada lanzamiento se realiza con un solo clic.
      </p>

      <h2>¿Qué opción deberías elegir?</h2>
      <p>
        Un árbol de decisión rápido:
      </p>
      <ul>
        <li>
          <strong>Un idioma, una aplicación, actualizaciones poco frecuentes.</strong> El cargador
          web es suficiente.
        </li>
        <li>
          <strong>Pipeline de CI, capturas rastreadas en git, equipo que usa Ruby.</strong>{" "}
          fastlane deliver.
        </li>
        <li>
          <strong>Herramienta personalizada / automatización interna.</strong> La API
          directamente.
        </li>
        <li>
          <strong>
            Desarrollador independiente o equipo pequeño, que diseña y sube las capturas
            usted mismo.
          </strong>{" "}
          Usa una aplicación de Mac que unifique el diseño y la subida en un solo flujo.
        </li>
      </ul>

      <h2>Antes de subir: Una lista de verificación</h2>
      <p>
        Independientemente de la ruta que elijas, estos son los errores que más tiempo cuestan:
      </p>
      <ul>
        <li>
          Tus capturas de pantalla deben tener exactamente las{" "}
          <a href="/blog/app-store-screenshot-sizes">
            dimensiones compatibles
          </a>{" "}
          — ni un píxel más ni uno menos. Apple puede rechazar las discrepancias durante la subida o el procesamiento.
        </li>
        <li>
          La versión seleccionada de la App Store debe ser editable (no estar &quot;En revisión&quot; o &quot;Pendiente de lanzamiento por el desarrollador&quot;).
        </li>
        <li>
          Cada idioma que planees subir debe tener habilitada una localización coincidente de App Store Connect en esa versión.
        </li>
        <li>
          Solo PNG o JPEG. Nada de HEIC, WebP ni JPEGs progresivos.
        </li>
        <li>
          Color RGB y sin canal alfa en las capturas de pantalla.
        </li>
      </ul>

      <h2>Resumen rápido (TL;DR)</h2>
      <p>
        El cargador web es la opción menos divertida para cualquier tarea repetitiva.
        fastlane es la opción por defecto para los equipos que lanzan versiones a menudo. La API es
        potente pero requiere un fin de semana entero de trabajo. Si buscas una subida con un solo clic
        directamente desde una aplicación de diseño, eso es exactamente para lo que se diseñó la función{" "}
        <strong>Subir a App Store Connect</strong> de Screenshot Bro:
        detección automática de tipos de pantalla, emparejamiento de idiomas, chequeo previo y una
        sola clave API almacenada en el Llavero de macOS.
      </p>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        上传 App Store 屏幕截图仍然是发布 iOS、iPadOS 或 macOS 应用时最繁琐的环节之一。苹果支持{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          每个平台有多种显示类型
        </a>{" "}
        并且每个语言都有自己的插槽，因此即使是一个小应用，每次发布最终也可能需要推送
        80-200 个文件。本指南介绍了 2026 年将屏幕截图上传到 App Store Connect 的四种
        实用方法、何时选择每种方法，以及如果不提前了解就会浪费整个下午时间的注意事项。
      </p>

      <h2>选项 1：App Store Connect 网页上传器</h2>
      <p>
        默认路径。在{" "}
        <a
          href="https://appstoreconnect.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect
        </a>{" "}
        中打开您的应用，选择要编辑的版本，滚动到<strong>屏幕截图</strong>，然后将 PNG 或 JPEG 文件拖入
        正确的显示类型分区（6.9 英寸、6.5 英寸、13 英寸 iPad、Mac 等）。
        对每个语言重复此操作。
      </p>
      <ul>
        <li>
          <strong>适合：</strong> 首次提交、只有一两个语言的小型应用，或者当您需要精确预览审核人员将看到的内容时。
        </li>
        <li>
          <strong>不适合：</strong> 任何多语言应用、任何具有超过几种显示类型的应用，或任何您需要在每次发布时重复的工作流。每个语言拖放 30 分钟会快速累积。
        </li>
      </ul>
      <p>
        <strong>常见问题：</strong>
      </p>
      <ul>
        <li>
          显示类型错误。如果导出的文件尺寸是 1320 × 2868（iPhone 16/17 Pro Max，6.9&quot;）并且您将其放入 6.5&quot; 分区，App Store Connect 将拒绝该上传。
        </li>
        <li>
          版本已锁定。一旦版本进入“正在审核”或“等待开发者发布”状态，屏幕截图将变为只读。请先创建一个新版本。
        </li>
        <li>
          部分上传。如果替换工作流中途失败，请在提交前验证完整的显示类型集，而不是假设旧的图片集仍然完好无损。
        </li>
      </ul>

      <h2>选项 2：Transporter 或 Fastlane Deliver</h2>
      <p>
        这两个工具都实现了 App Store Connect 交付的自动化，但在打包和配置方面有不同的权衡。
      </p>
      <p>
        <strong>Transporter</strong> 是苹果提供的一个免费实用工具，用于交付构建版本和元数据包。它支持脚本化，但前提是您已经拥有一个包含元数据 XML 且兼容 iTMSTransporter 的文件夹结构。如果您已经使用 xcodebuild 构建 IPA 包，那这很棒；但如果您只想上传屏幕截图，那就显得很繁琐。
      </p>
      <p>
        <strong>
          <a
            href="https://docs.fastlane.tools/actions/deliver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            fastlane deliver
          </a>
        </strong>{" "}
        是社区标准。您将屏幕截图保留在类似于 <code>fastlane/screenshots/zh-CN/iPhone 6.9 - 01.png</code> 的文件夹结构中并运行 <code>fastlane deliver</code>。它会一并上传屏幕截图、元数据和关键词。
      </p>
      <ul>
        <li>
          <strong>适合：</strong> 已经拥有 CI 流水线、希望在 git 中跟踪屏幕截图上传，并且不介意 Ruby 的团队。
        </li>
        <li>
          <strong>不适合：</strong> 不想维护 Ruby 工具链的设计师，以及任何希望在上传之前通过 GUI 预览将要上传的内容的人。
        </li>
      </ul>
      <p>
        <strong>常见问题：</strong>
      </p>
      <ul>
        <li>
          分辨率和命名至关重要。fastlane 可以从图像分辨率推断出显示目标，对于有些定义模糊的 iPad 系列，可能需要在文件名中包含苹果的显示系列名称，才能被正确放入对应的屏幕截图槽位。
        </li>
        <li>
          App Store Connect API 密钥必须生成一次并安全存储（Key ID、Issuer ID 和 .p8 文件）。丢失 .p8 意味着需要重新生成。
        </li>
        <li>
          替换是“全或无”。在上传新截图之前，目标显示类型中的每个现有屏幕截图都将被删除。
        </li>
      </ul>

      <h2>选项 3：直接调用 App Store Connect API</h2>
      <p>
        如果您要自己开发工具，{" "}
        <a
          href="https://developer.apple.com/documentation/appstoreconnectapi"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect API
        </a>{" "}
        通过三个端点公开了屏幕截图上传：
      </p>
      <ol>
        <li>
          <code>POST /v1/appScreenshotSets</code> — 为特定的显示类型和本地化创建屏幕截图集。
        </li>
        <li>
          <code>POST /v1/appScreenshots</code> — 创建屏幕截图预留，返回上传操作的元数据（分块 PUT URL）。
        </li>
        <li>
          <code>PATCH /v1/appScreenshots/&#123;id&#125;</code>，附带 <code>uploaded: true</code> — 在所有分块推送完后提交上传。
        </li>
      </ol>
      <p>
        您可以使用由 .p8 密钥签名的 JWT 进行身份验证。授权 JWT 的有效期很短（最多 20 分钟），并且作用域限定在 App Store Connect API 受众。苹果还会限制过于频繁的上传频率，因此分块并发上传需要实现重试/退避策略。
      </p>
      <p>
        <strong>适合：</strong> 构建自定义自动化或工具。您可以获得完全的控制权、类型安全的响应，并且可以围绕上传流程构建用户体验。
      </p>
      <p>
        <strong>不适合：</strong> 只想发布产品而不愿维护工具的人。在它稳定运行之前，预计要花费一个周末的时间来处理身份验证、分块上传和错误处理。
      </p>

      <h2>选项 4：自动为您上传的设计工具</h2>
      <p>
        这就是我们内置于 <a href="/">Screenshot Bro</a> 中的工作流。您设计屏幕截图、添加语言、自动翻译文案，然后点击 <strong>上传到 App Store Connect</strong>。该应用会：
      </p>
      <ul>
        <li>
          根据您的模板尺寸自动检测正确的显示类型（1320 × 2868 → iPhone 6.9&quot;，2064 × 2752 → iPad 13&quot;等）。
        </li>
        <li>
          将您的项目语言与所选版本上的 App Store Connect 本地化语言进行匹配。不匹配的情况会提前指出。
        </li>
        <li>
          运行预检 —— 尺寸过大的文件、缺失的语言、已锁定的版本或平台冲突会在苹果看到任何内容之前显现出来。
        </li>
        <li>
          原子化替换每个匹配的图片集。没有替换了一半的尴尬状态，也不用手动重命名文件夹。
        </li>
      </ul>
      <p>
        API 密钥（Issuer ID、Key ID、.p8）只需一次性存储在 macOS 的 Keychain（钥匙串）中。配置完成后，之后的每次发布都只需一键完成。
      </p>

      <h2>您应该选择哪种方案？</h2>
      <p>
        一个粗略的决策树：
      </p>
      <ul>
        <li>
          <strong>单一语言、单一应用、很少更新。</strong> 网页上传器就足够了。
        </li>
        <li>
          <strong>CI 流水线、git 跟踪的屏幕截图、传统 Ruby 团队。</strong>{" "}
          fastlane deliver。
        </li>
        <li>
          <strong>自定义工具 / 内部自动化。</strong> 直接使用 API。
        </li>
        <li>
          <strong>
            独立开发者或小型团队，自己设计并提交屏幕截图。
          </strong>{" "}
          使用能将设计和上传整合进同一个流程的原生 Mac 和 iPad 应用。
        </li>
      </ul>

      <h2>上传之前：检查清单</h2>
      <p>
        无论您选择哪种路径，以下都是最耗费时间的错误：
      </p>
      <ul>
        <li>
          您的屏幕截图尺寸必须完全符合{" "}
          <a href="/blog/app-store-screenshot-sizes">
            支持的尺寸
          </a>{" "}
          —— 像素不能有半点偏差。苹果可能会在上传或处理过程中拒绝不匹配的文件。
        </li>
        <li>
          所选的 App Store 版本是可编辑的（不是“正在审核”或“等待开发者发布”）。
        </li>
        <li>
          您计划上传的每个语言，都必须在所选版本上启用了相匹配的 App Store Connect 本地化语言。
        </li>
        <li>
          仅支持 PNG 或 JPEG。不支持 HEIC、WebP 以及渐进式 JPEG。
        </li>
        <li>
          RGB 色彩空间，并且截图不能包含 alpha 通道。
        </li>
      </ul>

      <h2>简而言之 (TL;DR)</h2>
      <p>
        对于任何重复性的操作，网页上传器都是最无趣的选择。对于频繁交付的团队来说，fastlane 是默认选项。直接使用 API 很强大，但需要花费一个周末的工作量。如果您想直接从设计应用一键上传，这正是 Screenshot Bro 研发 <strong>上传到 App Store Connect</strong> 功能的初衷 —— 自动检测显示类型、语言匹配、预检，并且只需一个存储在钥匙串中的 API 密钥。
      </p>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        ऐप स्टोर स्क्रीनशॉट अपलोड करना अभी भी iOS, iPadOS, या macOS ऐप शिप करने के सबसे कठिन हिस्सों में से एक है। एप्पल प्रति प्लेटफॉर्म{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          कई डिस्प्ले प्रकारों का समर्थन करता है
        </a>{" "}
        और हर लोकेल (locale) का अपना स्लॉट होता है, इसलिए एक छोटे ऐप को भी प्रति रिलीज़
        80-200 फ़ाइलें पुश करनी पड़ सकती हैं। यह गाइड 2026 में ऐप स्टोर कनेक्ट में स्क्रीनशॉट अपलोड करने के चार व्यावहारिक तरीकों,
        प्रत्येक को कब चुनना है, और उन गोटचा (gotchas) के बारे में बताती है जो पहले से न पता होने पर आपका पूरा दोपहर बर्बाद कर सकते हैं।
      </p>

      <h2>विकल्प 1: ऐप स्टोर कनेक्ट वेब अपलोडर</h2>
      <p>
        डिफ़ॉल्ट रास्ता। अपने ऐप को{" "}
        <a
          href="https://appstoreconnect.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect
        </a>{" "}
        में खोलें, उस संस्करण को चुनें जिसे आप संपादित करना चाहते हैं, <strong>Screenshots</strong> पर स्क्रॉल करें, और अपनी PNG या JPEG फ़ाइलों को सही डिस्प्ले-प्रकार वाले बकेट (6.9&quot;, 6.5&quot;, 13&quot; iPad, Mac आदि) में खींचें (drag करें)। हर लोकेल के लिए इसे दोहराएं।
      </p>
      <ul>
        <li>
          <strong>इसके लिए अच्छा है:</strong> पहली बार सबमिशन, एक या दो लोकेल वाला छोटा ऐप, या जब आपको ठीक से यह देखना हो कि रिव्यु करने वाले को क्या दिखेगा।
        </li>
        <li>
          <strong>इसके लिए खराब है:</strong> कुछ भी बहुभाषी (multilingual), कोई भी ऐप जिसमें दो से अधिक डिस्प्ले प्रकार हों, या कोई भी वर्कफ़्लो जिसे आपको हर रिलीज़ पर दोहराना पड़े। प्रति लोकेल 30 मिनट का ड्रैग-एंड-ड्रॉप समय बहुत जल्दी बढ़ जाता है।
        </li>
      </ul>
      <p>
        <strong>सामान्य गोटचा (गलतियां):</strong>
      </p>
      <ul>
        <li>
          गलत डिस्प्ले प्रकार। यदि आपकी एक्सपोर्ट की गई फ़ाइल 1320 × 2868 (iPhone 16/17 Pro Max, 6.9&quot;) है और आप इसे 6.5&quot; बकेट में डालते हैं, तो ऐप स्टोर कनेक्ट अपलोड को अस्वीकार कर देता है।
        </li>
        <li>
          लॉक किए गए वर्शन। एक बार जब कोई संस्करण &quot;In Review&quot; या &quot;Pending Developer Release&quot; में चला जाता है, तो स्क्रीनशॉट केवल पढ़ने के लिए (read-only) रह जाते हैं। पहले एक नया संस्करण बनाएं।
        </li>
        <li>
          अधूरे अपलोड। यदि प्रतिस्थापन वर्कफ़्लो बीच में विफल हो जाता है, तो यह मान लेने के बजाय कि पुराना सेट अभी भी वैसा ही है, सबमिट करने से पहले पूरे डिस्प्ले-प्रकार सेट को सत्यापित करें।
        </li>
      </ul>

      <h2>विकल्प 2: Transporter या Fastlane Deliver</h2>
      <p>
        दोनों उपकरण ऐप स्टोर कनेक्ट डिलीवरी को स्वचालित (automate) करते हैं, लेकिन विभिन्न पैकेजिंग और सेटअप समझौतों के साथ।
      </p>
      <p>
        <strong>Transporter</strong> बिल्ड और मेटाडेटा पैकेज शिप करने के लिए एक मुफ्त एप्पल उपयोगिता (utility) है। यह स्क्रिप्ट करने योग्य है लेकिन यह मानती है कि आपके पास मेटाडेटा XML के साथ पहले से ही iTMSTransporter-संगत फ़ोल्डर संरचना (folder structure) है। यदि आप xcodebuild के साथ पहले से ही IPA पैकेज बनाते हैं, तो यह बहुत अच्छा है; लेकिन यदि आप केवल स्क्रीनशॉट अपलोड करना चाहते हैं, तो यह काफी मुश्किल है।
      </p>
      <p>
        <strong>
          <a
            href="https://docs.fastlane.tools/actions/deliver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            fastlane deliver
          </a>
        </strong>{" "}
        कम्युनिटी स्टैंडर्ड है। आप अपने स्क्रीनशॉट को <code>fastlane/screenshots/hi-IN/iPhone 6.9 - 01.png</code> जैसी फ़ोल्डर संरचना में रखते हैं और <code>fastlane deliver</code> चलाते हैं। यह एक ही बार में स्क्रीनशॉट, मेटाडेटा और कीवर्ड अपलोड कर देता है।
      </p>
      <ul>
        <li>
          <strong>इसके लिए अच्छा है:</strong> वे टीमें जिनके पास पहले से ही एक CI पाइपलाइन है, जो गिट में स्क्रीनशॉट अपलोड रखना चाहती हैं, और जिन्हें रूबी (Ruby) से कोई दिक्कत नहीं है।
        </li>
        <li>
          <strong>इसके लिए खराब है:</strong> वे डिज़ाइनर जो रूबी टूलचेन को मेंटेन नहीं करना चाहते, और कोई भी जो एक GUI चाहता है जो यह दिखाए कि अपलोड होने से पहले क्या अपलोड होने जा रहा है।
        </li>
      </ul>
      <p>
        <strong>सामान्य गोटचा (गलतियां):</strong>
      </p>
      <ul>
        <li>
          रिज़ॉल्यूशन और नामकरण मायने रखते हैं। fastlane इमेज रिज़ॉल्यूशन से डिस्प्ले टारगेट का अनुमान लगा सकता है, और संदिग्ध iPad परिवारों को सही स्क्रीनशॉट स्लॉट में जाने के लिए फ़ाइल नाम में एप्पल के डिस्प्ले-फैमिली नाम की आवश्यकता हो सकती है।
        </li>
        <li>
          ऐप स्टोर कनेक्ट एपीआई कीज़ को एक बार जेनरेट किया जाना चाहिए और सुरक्षित रूप से स्टोर किया जाना चाहिए (Key ID, Issuer ID और .p8 फ़ाइल)। .p8 फ़ाइल खोने का मतलब है इसे फिर से जेनरेट करना।
        </li>
        <li>
          प्रतिस्थापन सब-या-कुछ-नहीं (all-or-nothing) है। नए स्क्रीनशॉट अपलोड होने से पहले लक्षित डिस्प्ले प्रकार के हर मौजूदा स्क्रीनशॉट को हटा दिया जाता है।
        </li>
      </ul>

      <h2>विकल्प 3: सीधे ऐप स्टोर कनेक्ट एपीआई का उपयोग</h2>
      <p>
        यदि आप स्वयं कोई टूल बना रहे हैं, तो{" "}
        <a
          href="https://developer.apple.com/documentation/appstoreconnectapi"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect API
        </a>{" "}
        तीन एंडपॉइंट्स के माध्यम से स्क्रीनशॉट अपलोड की सुविधा देता है:
      </p>
      <ol>
        <li>
          <code>POST /v1/appScreenshotSets</code> — एक विशिष्ट डिस्प्ले प्रकार और स्थानीयकरण के लिए एक स्क्रीनशॉट सेट बनाएं।
        </li>
        <li>
          <code>POST /v1/appScreenshots</code> — एक स्क्रीनशॉट रिज़र्वेशन बनाएं, अपलोड ऑपरेशन मेटाडेटा (chunked PUT URLs) प्राप्त करें।
        </li>
        <li>
          <code>PATCH /v1/appScreenshots/&#123;id&#125;</code>, <code>uploaded: true</code> के साथ — सभी टुकड़ों (chunks) को पुश करने के बाद अपलोड कमिट करें।
        </li>
      </ol>
      <p>
        आप अपनी .p8 की द्वारा हस्ताक्षरित JWT के साथ प्रमाणित होते हैं। ऑथ JWT का जीवनकाल छोटा (अधिकतम 20 मिनट) होता है और यह केवल ऐप स्टोर कनेक्ट एपीआई ऑडियंस के दायरे में होता है। एप्पल आक्रामक अपलोड्स को रेट-लिमिट भी करता है, इसलिए समवर्ती अपलोड टुकड़ों (chunked concurrent uploads) को एक पुनः प्रयास/बैकऑफ़ (retry/backoff) रणनीति की आवश्यकता होती है।
      </p>
      <p>
        <strong>इसके लिए अच्छा है:</strong> कस्टम ऑटोमेशन या टूल बनाना। आपको पूर्ण नियंत्रण, टाइप की गई प्रतिक्रियाएं मिलती हैं, और आप अपलोड प्रवाह के आसपास UX बना सकते हैं।
      </p>
      <p>
        <strong>इसके लिए खराब है:</strong> कोई भी जो सिर्फ शिप करना चाहता है, मेंटेन नहीं। उम्मीद करें कि इसे विश्वसनीय बनाने से पहले ऑथ, चंक्ड अपलोड और एरर हैंडलिंग पर एक वीकेंड खर्च करना होगा।
      </p>

      <h2>विकल्प 4: एक डिज़ाइन टूल जो आपके लिए अपलोड करता है</h2>
      <p>
        यह वह वर्कफ़्लो है जिसे हमने{" "}
        <a href="/">Screenshot Bro</a> में बनाया है। आप अपने स्क्रीनशॉट डिज़ाइन करते हैं, लोकेल जोड़ते हैं, कॉपी को ऑटो-ट्रांसलेट करते हैं, और फिर{" "}
        <strong>Upload to App Store Connect</strong> पर क्लिक करते हैं। ऐप:
      </p>
      <ul>
        <li>
          आपकी रो (row) के आकार से सही डिस्प्ले प्रकार का ऑटो-डिटेक्ट करता है (1320 × 2868 → iPhone 6.9&quot;, 2064 × 2752 → iPad 13&quot; आदि)।
        </li>
        <li>
          चयनित संस्करण पर आपके प्रोजेक्ट लोकेल्स का ऐप स्टोर कनेक्ट लोकलाइजेशन से मिलान करता है। मिसमैच होने पर पहले ही फ्लैग कर दिया जाता है।
        </li>
        <li>
          एक प्रीफ़्लाइट चलाता है — बड़े आकार की फ़ाइलें, छूटे हुए लोकेल्स, लॉक किए गए वर्शन या प्लेटफ़ॉर्म विरोधाभास एप्पल द्वारा कुछ भी देखे जाने से पहले सामने आ जाते हैं।
        </li>
        <li>
          प्रत्येक मैचिंग सेट को एटॉमिक रूप से रिप्लेस करता है। कोई आधा-अधूरा रिप्लेसमेंट स्टेट नहीं, कोई फोल्डर-रीनेम करने का झंझट नहीं।
        </li>
      </ul>
      <p>
        एपीआई की (Issuer ID, Key ID, .p8) को macOS कीचेन (Keychain) में एक बार स्टोर किया जाता है। सेटअप के बाद, हर रिलीज़ सिर्फ एक क्लिक की दूरी पर होती है।
      </p>

      <h2>आपको कौन सा विकल्प चुनना चाहिए?</h2>
      <p>
        एक अनुमानित निर्णय वृक्ष (decision tree):
      </p>
      <ul>
        <li>
          <strong>एक लोकेल, एक ऐप, शायद ही कभी अपडेट करना हो।</strong> वेब अपलोडर ठीक है।
        </li>
        <li>
          <strong>CI पाइपलाइन, गिट-ट्रैक्ड स्क्रीनशॉट, रूबी टीम।</strong>{" "}
          fastlane deliver।
        </li>
        <li>
          <strong>कस्टम टूल / इन-हाउस ऑटोमेशन।</strong> सीधे एपीआई।
        </li>
        <li>
          <strong>
            इंडी डेवलपर या छोटी टीम, स्क्रीनशॉट खुद डिज़ाइन और शिप करना।
          </strong>{" "}
          एक मैक ऐप का उपयोग करें जो डिज़ाइन और अपलोड को एक प्रवाह में समाहित कर देता है।
        </li>
      </ul>

      <h2>अपलोड करने से पहले: एक चेकलिस्ट</h2>
      <p>
        आप जो भी रास्ता चुनें, ये वे गलतियां हैं जिनमें सबसे ज्यादा समय बर्बाद होता है:
      </p>
      <ul>
        <li>
          आपके स्क्रीनशॉट का आकार बिल्कुल{" "}
          <a href="/blog/app-store-screenshot-sizes">
            समर्थित आयामों
          </a>{" "}
          जैसा होना चाहिए — एक पिक्सेल भी कम या ज्यादा नहीं। एप्पल अपलोड या प्रोसेसिंग के दौरान मिसमैच को अस्वीकार कर सकता है।
        </li>
        <li>
          चयनित ऐप स्टोर संस्करण संपादन योग्य होना चाहिए (&quot;In Review&quot; या &quot;Pending Developer Release&quot; में न हो)।
        </li>
        <li>
          हर उस लोकेल के लिए जिसका आप अपलोड करने की योजना बना रहे हैं, उस संस्करण पर एक मैचिंग ऐप स्टोर कनेक्ट लोकलाइजेशन सक्षम होना चाहिए।
        </li>
        <li>
          केवल PNG या JPEG। कोई HEIC नहीं, कोई WebP नहीं, कोई प्रगतिशील (progressive) JPEGs नहीं।
        </li>
        <li>
          RGB कलर मोड, और स्क्रीनशॉट के लिए कोई अल्फा चैनल (alpha channel) नहीं होना चाहिए।
        </li>
      </ul>

      <h2>संक्षेप में (TL;DR)</h2>
      <p>
        वेब अपलोडर किसी भी बार-बार किए जाने वाले काम के लिए सबसे कम मजेदार विकल्प है। अक्सर शिप करने वाली टीमों के लिए fastlane डिफ़ॉल्ट है। एपीआई शक्तिशाली है लेकिन काम करने में एक वीकेंड का समय ले सकता है। यदि आप सीधे एक डिज़ाइन ऐप से वन-क्लिक अपलोड चाहते हैं, तो ठीक इसी काम के लिए Screenshot Bro का <strong>Upload to App Store Connect</strong> फ़ीचर बनाया गया था — ऑटो-डिटेक्ट डिस्प्ले प्रकार, लोकेल मिलान, प्रीफ़्लाइट और कीचेन में स्टोर की गई एक एपीआई की।
      </p>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        L&apos;envoi de captures d&apos;écran sur l&apos;App Store reste l&apos;une des étapes les plus fastidieuses
        du déploiement d&apos;une application iOS, iPadOS o macOS. Apple prend en charge{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          plusieurs types d&apos;affichage par plateforme
        </a>{" "}
        et chaque langue possède son propre emplacement, ce qui signifie qu&apos;une petite application peut rapidement se retrouver
        avec 80 à 200 fichiers à envoyer à chaque mise à jour. Ce guide présente quatre
        méthodes pratiques pour envoyer vos captures vers App Store Connect en 2026,
        comment choisir la bonne, et les pièges qui risquent de vous faire perdre une après-midi si
        vous ne les connaissez pas à l&apos;avance.
      </p>

      <h2>Option 1 : Le chargeur web d&apos;App Store Connect</h2>
      <p>
        La méthode par défaut. Ouvrez votre application dans{" "}
        <a
          href="https://appstoreconnect.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect
        </a>
        , choisissez la version que vous souhaitez modifier, faites défiler jusqu&apos;à{" "}
        <strong>Captures d&apos;écran</strong>, et glissez-déposez vos fichiers PNG ou JPEG dans le
        bon encart de type d&apos;affichage (6.9&quot;, 6.5&quot;, iPad 13&quot;, Mac, etc.).
        Répétez l&apos;opération pour chaque langue.
      </p>
      <ul>
        <li>
          <strong>Idéal pour :</strong> une première soumission, une petite application disponible dans
          une ou deux langues, ou lorsque vous devez visualiser exactement ce que le
          validateur verra.
        </li>
        <li>
          <strong>Inadapté pour :</strong> les applications multilingues, tout projet avec
          plus de deux types d&apos;affichage, ou tout flux de travail à répéter à chaque
          mise à jour. 30 minutes de glisser-déposer par langue, cela devient vite fastidieux.
        </li>
      </ul>
      <p>
        <strong>Pièges fréquents :</strong>
      </p>
      <ul>
        <li>
          Mauvais type d&apos;affichage. Si votre fichier exporté mesure 1320 × 2868 (iPhone
          16/17 Pro Max, 6.9&quot;) et que vous le déposez dans la catégorie 6.5&quot;, App
          Store Connect rejettera le fichier.
        </li>
        <li>
          Versions verrouillées. Dès qu&apos;une version passe en statut « En cours de vérification » ou « En attente de
          publication par le développeur », les captures d&apos;écran passent en lecture seule. Créez
          d&apos;abord une nouvelle version.
        </li>
        <li>
          Envois partiels. Si une mise à jour de captures échoue en cours de route, verifiez
          l&apos;ensemble complet des types d&apos;affichage avant de soumettre au lieu de supposer
          que l&apos;ancien ensemble est toujours intact.
        </li>
      </ul>

      <h2>Option 2 : Transporter ou Fastlane Deliver</h2>
      <p>
        Ces deux outils automatisent l&apos;envoi vers App Store Connect, mais présentent des différences
        en matière de préparation et de configuration.
      </p>
      <p>
        <strong>Transporter</strong> es un outil gratuit d&apos;Apple pour envoyer
        vos builds et paquets de metadonnées. Il peut être scripté mais nécessite que
        vous ayez déjà une structure de dossiers compatible avec iTMSTransporter avec un fichier
        XML de métadonnées. Très pratique si vous créez déjà des builds IPA avec
        xcodebuild, mais complexe si vous souhaitez uniquement envoyer des captures d&apos;écran.
      </p>
      <p>
        <strong>
          <a
            href="https://docs.fastlane.tools/actions/deliver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            fastlane deliver
          </a>
        </strong>{" "}
        est le standard de la communauté. Vous organisez vos captures dans un dossier
        selon une structure du type{" "}
        <code>fastlane/screenshots/fr-FR/iPhone 6.9 - 01.png</code> puis exécutez la commande{" "}
        <code>fastlane deliver</code>. L&apos;outil envoie les captures d&apos;écran, les métadonnées et
        les mots-clés en une seule fois.
      </p>
      <ul>
        <li>
          <strong>Idéal pour :</strong> les équipes qui disposent déjà d&apos;un pipeline CI,
          souhaitent suivre les captures dans git et maîtrisent Ruby.
        </li>
        <li>
          <strong>Inadapté pour :</strong> les designers qui ne souhaitent pas gérer un
          environnement Ruby, et tous ceux qui veulent une interface graphique pour prévisualiser l&apos;envoi.
        </li>
      </ul>
      <p>
        <strong>Pièges fréquents :</strong>
      </p>
      <ul>
        <li>
          Résolution et nommage stricts. fastlane déduit les cibles d&apos;affichage
          à partir de la résolution de l&apos;image. Pour les iPads, il peut être nécessaire d&apos;inclure
          le nom officiel de la gamme d&apos;appareils dans le nom du fichier pour qu&apos;il soit placé dans le bon emplacement.
        </li>
        <li>
          La clé API App Store Connect doit être générée une seule fois et conservée de façon
          sécurisée (Key ID, Issuer ID, et fichier .p8). Si vous perdez le fichier .p8, vous devrez en
          générer un nouveau.
        </li>
        <li>
          Le remplacement est global. Toutes les captures existantes pour un
          type d&apos;affichage donné sont supprimées avant l&apos;envoi de la nouvelle série.
        </li>
      </ul>

      <h2>Option 3 : Directement via l&apos;API d&apos;App Store Connect</h2>
      <p>
        Si vous développez votre propre outil, l&apos;{" "}
        <a
          href="https://developer.apple.com/documentation/appstoreconnectapi"
          target="_blank"
          rel="noopener noreferrer"
        >
          API d&apos;App Store Connect
        </a>{" "}
        propose trois points d&apos;accès (endpoints) pour l&apos;envoi de captures :
      </p>
      <ol>
        <li>
          <code>POST /v1/appScreenshotSets</code> — crée un ensemble de captures
          pour un type d&apos;affichage et une langue donnés.
        </li>
        <li>
          <code>POST /v1/appScreenshots</code> — génère une réservation de capture
          d&apos;écran, renvoyant les métadonnées de l&apos;envoi (URLs de requêtes PUT fragmentées).
        </li>
        <li>
          <code>PATCH /v1/appScreenshots/&#123;id&#125;</code> avec{" "}
          <code>uploaded: true</code> — valide l&apos;envoi une fois tous les fragments
          transmis.
        </li>
      </ol>
      <p>
        L&apos;authentification s&apos;effectue via un token JWT signé avec votre clé .p8. Ce jeton JWT est
        de courte durée (20 minutes maximum) et restreint à l&apos;API d&apos;App Store Connect.
        De plus, Apple applique des limitations de débit sur les envois fréquents. Les transferts concurrents
        et fragmentés doivent donc intégrer une gestion des tentatives de reconnexion (retry/backoff).
      </p>
      <p>
        <strong>Idéal pour :</strong> concevoir une automatisation sur mesure ou vos propres outils. Vous bénéficiez
        d&apos;un contrôle total, de réponses typées et pouvez construire une expérience utilisateur personnalisée.
      </p>
      <p>
        <strong>Inadapté pour :</strong> ceux qui veulent simplement publier sans avoir à faire
        de maintenance de code. Comptez y passer un week-end complet pour l&apos;authentification, les transferts fragmentés et
        la gestion des erreurs avant d&apos;obtenir un résultat fiable.
      </p>

      <h2>Option 4 : Un outil de conception qui envoie les captures pour vous</h2>
      <p>
        Il s&apos;agit du flux de travail que nous avons intégré à{" "}
        <a href="/">Screenshot Bro</a>. Vous concevez vos captures d&apos;écran, ajoutez
        les langues, traduisez automatiquement vos textes, puis cliquez sur{" "}
        <strong>Upload to App Store Connect</strong>. L&apos;application :
      </p>
      <ul>
        <li>
          Détecte automatiquement le bon type d&apos;affichage à partir de la taille de vos images
          (1320 × 2868 → iPhone 6.9&quot;, 2064 × 2752 → iPad 13&quot;, etc.).
        </li>
        <li>
          Associe les langues de votre projet aux localisations d&apos;App Store Connect
          sur la version sélectionnée. Les erreurs d&apos;association sont signalées d&apos;emblée.
        </li>
        <li>
          Effectue une vérification préalable — les fichiers trop volumineux, les langues manquantes, les versions
          verrouillées ou les conflits de plateformes sont signalés avant que les données ne soient envoyées à Apple.
        </li>
        <li>
          Remplace chaque ensemble correspondant de manière atomique. Aucun état partiellement envoyé,
          plus besoin de renommer sans arrêt vos dossiers.
        </li>
      </ul>
      <p>
        La clé API (Issuer ID, Key ID, .p8) is stockée de manière sécurisée dans le Trousseau d&apos;accès (Keychain) de macOS.
        Une fois configuré, chaque envoi se fait en un seul clic.
      </p>

      <h2>Quelle option devriez-vous choisir ?</h2>
      <p>
        Un arbre de décision simple :
      </p>
      <ul>
        <li>
          <strong>Une seule langue, une seule app, mises à jour rares.</strong> Le chargeur
          web convient très bien.
        </li>
        <li>
          <strong>Pipeline CI, captures suivies sur git, équipe à l&apos;aise avec Ruby.</strong>{" "}
          fastlane deliver.
        </li>
        <li>
          <strong>Outil personnalisé / automatisation interne.</strong> Directement via l&apos;API.
        </li>
        <li>
          <strong>
            Développeur indépendant ou petite équipe, créant et gérant vous-même vos captures.
          </strong>{" "}
          Utilisez une application Mac qui regroupe la conception et l&apos;envoi dans un seul flux de travail.
        </li>
      </ul>

      <h2>Avant l&apos;envoi : Liste de contrôle</h2>
      <p>
        Quelle que soit la méthode choisie, voici les erreurs qui font perdre le plus de temps :
      </p>
      <ul>
        <li>
          Vos captures d&apos;écran doivent respecter au pixel près les{" "}
          <a href="/blog/app-store-screenshot-sizes">
            dimensions requises
          </a>{" "}
          — sans décalage. Apple peut rejeter les dimensions erronées au moment de l&apos;envoi ou du traitement.
        </li>
        <li>
          La version sélectionnée dans l&apos;App Store doit être éditable (pas de statut « En cours de vérification » ou « En attente de publication par le développeur »).
        </li>
        <li>
          Chaque langue que vous prévoyez d&apos;envoyer doit avoir sa localisation correspondante activée sur cette version dans App Store Connect.
        </li>
        <li>
          Formats PNG ou JPEG uniquement. Pas de HEIC, pas de WebP, pas de JPEGs progressifs.
        </li>
        <li>
          Espace colorimétrique RGB, sans canal alpha (transparence) pour les captures d&apos;écran.
        </li>
      </ul>

      <h2>En résumé (TL;DR)</h2>
      <p>
        Le chargeur web est la solution la moins plaisante pour les tâches récurrentes.
        fastlane est le choix par défaut pour les équipes qui publient souvent. L&apos;API est
        puissante mais nécessite un week-end complet de développement. Si vous souhaitez un envoi en un clic
        directement depuis une application de design, c&apos;est précisément pour cela que la fonctionnalité{" "}
        <strong>Upload to App Store Connect</strong> de Screenshot Bro a été conçue :
        détection automatique des types d&apos;affichage, correspondance des langues, vérification préalable et
        une clé API unique stockée dans le Trousseau d&apos;accès de macOS.
      </p>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        لا يزال رفع لقطات شاشة App Store أحد أكثر الأجزاء تعقيدًا
        في شحن تطبيق لنظام iOS أو iPadOS أو macOS. تدعم Apple{" "}
        <a href="/blog/screenshot-sizes-app-store-google-play">
          أنواع عرض متعددة لكل منصة
        </a>{" "}
        وكل لغة لها خانتها الخاصة، لذا فحتى التطبيق الصغير يمكن أن ينتهي به المطاف
        بـ 80-200 ملف لدفعها لكل إصدار. يغطي هذا الدليل أربع
        طرق عملية لرفع لقطات الشاشة إلى App Store Connect في عام 2026،
        ومتى تختار كل منها، والمشاكل التي قد تضيع عليك فترة ما بعد الظهيرة بأكملها إذا
        لم تكن على دراية بها مسبقًا.
      </p>

      <h2>الخيار 1: رافع الويب لـ App Store Connect</h2>
      <p>
        المسار الافتراضي. افتح تطبيقك في{" "}
        <a
          href="https://appstoreconnect.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store Connect
        </a>
        ، واختر الإصدار الذي تريد تعديله، ثم مرر إلى{" "}
        <strong>لقطات الشاشة</strong>، واسحب ملفات PNG أو JPEG إلى
        مربع نوع العرض الصحيح (6.9&quot;، 6.5&quot;، iPad 13&quot;، Mac، إلخ).
        كرر العملية لكل لغة.
      </p>
      <ul>
        <li>
          <strong>جيد لـ:</strong> التقديم الأول، أو تطبيق صغير بلغة واحدة أو لغتين، أو عندما تحتاج إلى معاينة ما سيراه المراجع بالضبط.
        </li>
        <li>
          <strong>سيئ لـ:</strong> أي تطبيق متعدد اللغات، أو أي تطبيق يحتوي على أكثر من نوعين من أنواع العرض، أو أي سير عمل تحتاج إلى تكراره مع كل إصدار. 30 دقيقة من السحب والإفلات لكل لغة تتراكم بسرعة.
        </li>
      </ul>
      <p>
        <strong>المشاكل الشائعة:</strong>
      </p>
      <ul>
        <li>
          نوع عرض خاطئ. إذا كان ملفك المصدر بمقاس 1320 × 2868 (iPhone 16/17 Pro Max، 6.9&quot;) وقمت بإسقاطه في مربع 6.5&quot;، سيرفض App Store Connect عملية الرفع.
        </li>
        <li>
          الإصدارات المقفلة. بمجرد أن يصبح الإصدار &quot;قيد المراجعة&quot; أو &quot;بانتظار إصدار المطور&quot;، تكون لقطات الشاشة للقراءة فقط. أنشئ إصدارًا جديدًا أولاً.
        </li>
        <li>
          الرفع الجزئي. إذا فشل سير عمل الاستبدال في منتصف الطريق، فتحقق من مجموعة نوع العرض الكاملة قبل التقديم بدلاً من افتراض أن المجموعة القديمة لا تزال سليمة.
        </li>
      </ul>

      <h2>الخيار 2: Transporter أو Fastlane Deliver</h2>
      <p>
        يعمل كلا الأداتين على أتمتة التسليم إلى App Store Connect، ولكن مع تباين في طريقة التعبئة والتهيئة.
      </p>
      <p>
        <strong>Transporter</strong> هو أداة مجانية من Apple لشحن
        إصدارات التطبيقات وحزم البيانات الوصفية (Metadata). إنه قابل للبرمجة النصية ولكنه يفترض أن
        لديك بالفعل بنية مجلدات متوافقة مع iTMSTransporter تحتوي على ملف XML للبيانات الوصفية. ممتاز إذا كنت تقوم بالفعل ببناء حزم IPA باستخدام
        xcodebuild؛ ولكنه معقد إذا كنت تريد فقط رفع لقطات الشاشة.
      </p>
      <p>
        <strong>
          <a
            href="https://docs.fastlane.tools/actions/deliver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            fastlane deliver
          </a>
        </strong>{" "}
        هو المعيار المجتمعي. تحتفظ بلقطات الشاشة في بنية مجلدات مثل
        <code>fastlane/screenshots/ar-SA/iPhone 6.9 - 01.png</code> وتقوم بتشغيل
        <code>fastlane deliver</code>. حيث يقوم برفع لقطات الشاشة، والبيانات الوصفية،
        والكلمات المفتاحية في تمريرة واحدة.
      </p>
      <ul>
        <li>
          <strong>جيد لـ:</strong> الفرق التي لديها بالفعل خط أنابيب CI،
          وتريد تتبع رفع لقطات الشاشة في git، ولا تمانع في استخدام لغة Ruby.
        </li>
        <li>
          <strong>سيئ لـ:</strong> المصممين الذين لا يريدون صيانة بيئة عمل Ruby،
          وأي شخص يريد واجهة مستخدم رسومية تعرض ما سيتم رفعه قبل حدوثه.
        </li>
      </ul>
      <p>
        <strong>المشاكل الشائعة:</strong>
      </p>
      <ul>
        <li>
          الدقة والتسمية مهمتان. يمكن لـ fastlane استنتاج شاشات العرض المستهدفة من دقة الصورة، وقد تحتاج عائلات iPad غير الواضحة إلى اسم عائلة العرض من Apple في اسم الملف لتوضع في خانة لقطة الشاشة الصحيحة.
        </li>
        <li>
          يجب إنشاء مفاتيح واجهة برمجة تطبيقات App Store Connect مرة واحدة وتخزينها بشكل آمن (معرف المفتاح، ومعرف المصدر، وملف .p8). يعني فقدان ملف .p8 إعادة إنشائه من جديد.
        </li>
        <li>
          الاستبدال هو عملية كل شيء أو لا شيء. يتم حذف كل لقطة شاشة موجودة في نوع العرض المستهدف قبل رفع اللقطات الجديدة.
        </li>
      </ul>

      <h2>الخيار 3: واجهة برمجة تطبيقات App Store Connect مباشرة</h2>
      <p>
        إذا كنت تبني أداة بنفسك، فإن{" "}
        <a
          href="https://developer.apple.com/documentation/appstoreconnectapi"
          target="_blank"
          rel="noopener noreferrer"
        >
          واجهة برمجة تطبيقات App Store Connect
        </a>{" "}
        تتيح رفع لقطات الشاشة عبر ثلاثة نقاط نهاية (Endpoints):
      </p>
      <ol>
        <li>
          <code>POST /v1/appScreenshotSets</code> — إنشاء مجموعة لقطات شاشة لنوع عرض وتوطين معينين.
        </li>
        <li>
          <code>POST /v1/appScreenshots</code> — إنشاء حجز للقطة الشاشة، وإرجاع البيانات الوصفية لعملية الرفع (روابط PUT المجزأة).
        </li>
        <li>
          <code>PATCH /v1/appScreenshots/&#123;id&#125;</code> مع{" "}
          <code>uploaded: true</code> — تثبيت عملية الرفع بعد دفع جميع الأجزاء.
        </li>
      </ol>
      <p>
        تقوم بالمصادقة باستخدام رمز JWT موقع بواسطة مفتاح .p8 الخاص بك. رمز JWT للمصادقة قصير الأجل (20 دقيقة كحد أقصى) ومقتصر على جمهور واجهة برمجة تطبيقات App Store Connect. تفرض Apple أيضًا قيودًا على معدل عمليات الرفع المكثفة، لذا تحتاج عمليات الرفع المتزامنة والمجزأة إلى استراتيجية إعادة محاولة/تراجع (retry/backoff).
      </p>
      <p>
        <strong>جيد لـ:</strong> بناء أتمتة أو أدوات مخصصة. تحصل على تحكم كامل، واستجابات محددة الأنواع، ويمكنك بناء تجربة مستخدم حول تدفق الرفع.
      </p>
      <p>
        <strong>سيئ لـ:</strong> أي شخص يريد الشحن فقط، دون صيانة. توقع قضاء عطلة نهاية الأسبوع في التعامل مع المصادقة، والرفع المجزأ، ومعالجة الأخطاء قبل أن تصبح الأداة موثوقة.
      </p>

      <h2>الخيار 4: أداة تصميم ترفع الملفات نيابة عنك</h2>
      <p>
        هذا هو سير العمل الذي بنيناه داخل{" "}
        <a href="/">Screenshot Bro</a>. تقوم بتصميم لقطات الشاشة الخاصة بك، وإضافة اللغات، وترجمة النصوص تلقائيًا، ثم النقر فوق{" "}
        <strong>Upload to App Store Connect</strong>. يقوم التطبيق بـ:
      </p>
      <ul>
        <li>
          الكشف التلقائي عن نوع العرض الصحيح من حجم الصف الخاص بك (1320 × 2868 ← iPhone 6.9&quot;، 2064 × 2752 ← iPad 13&quot;، إلخ).
        </li>
        <li>
          مطابقة لغات مشروعك مع توطينات App Store Connect في الإصدار المحدد. يتم الكشف عن عدم التطابق مسبقًا.
        </li>
        <li>
          إجراء فحص أولي — الملفات ذات الحجم الزائد، أو اللغات المفقودة، أو الإصدارات المقفلة، أو تعارضات المنصات تظهر قبل أن ترى Apple أي شيء.
        </li>
        <li>
          استبدال كل مجموعة مطابقة بشكل متزامن وبسيط (Atomically). لا توجد حالات مستبدلة جزئيًا، ولا حاجة لتغيير أسماء المجلدات باستمرار.
        </li>
      </ul>
      <p>
        يتم تخزين مفتاح واجهة برمجة التطبيقات (معرف المصدر، ومعرف المفتاح، وملف .p8) مرة واحدة في سلسلة مفاتيح macOS (Keychain). بعد الإعداد، يتم شحن كل إصدار بنقرة واحدة فقط.
      </p>

      <h2>أي خيار يجب أن تختار؟</h2>
      <p>
        مخطط قرار تقريبي:
      </p>
      <ul>
        <li>
          <strong>لغة واحدة، تطبيق واحد، تحديث نادر.</strong> رافع الويب كافٍ تمامًا.
        </li>
        <li>
          <strong>خط أنابيب CI، لقطات شاشة متتبعة في git، فريق يعتمد على Ruby.</strong>{" "}
          fastlane deliver.
        </li>
        <li>
          <strong>أداة مخصصة / أتمتة داخلية.</strong> واجهة برمجة التطبيقات مباشرة.
        </li>
        <li>
          <strong>
            مطور مستقل أو فريق صغير، تقوم بتصميم وشحن لقطات الشاشة بنفسك.
          </strong>{" "}
          استخدم تطبيق Mac يدمج التصميم والرفع في مسار واحد.
        </li>
      </ul>

      <h2>قبل الرفع: قائمة مرجعية</h2>
      <p>
        أياً كان المسار الذي تختار، فهذه هي الأخطاء الأكثر استهلاكًا للوقت:
      </p>
      <ul>
        <li>
          أن تكون لقطات الشاشة الخاصة بك بالمقاسات{" "}
          <a href="/blog/app-store-screenshot-sizes">
            المدعومة تمامًا
          </a>{" "}
          — دون زيادة أو نقصان بمقدار بكسل واحد. يمكن لـ Apple رفض الملفات غير المتطابقة أثناء الرفع أو المعالجة.
        </li>
        <li>
          أن يكون إصدار App Store المحدد قابلاً للتعديل (ليس &quot;قيد المراجعة&quot; أو &quot;بانتظار إصدار المطور&quot;).
        </li>
        <li>
          أن تحتوي كل لغة تخطط لرفعها على توطين مطابق مفعل في App Store Connect على ذلك الإصدار.
        </li>
        <li>
          صيغة PNG أو JPEG فقط. لا تقبل صيغ HEIC، أو WebP، أو JPEG التدريجي (Progressive JPEGs).
        </li>
        <li>
          نظام ألوان RGB، مع عدم وجود قناة ألفا (شفافية) لقطات الشاشة.
        </li>
      </ul>

      <h2>ملخص سريع (TL;DR)</h2>
      <p>
        رافع الويب هو الخيار الأقل متعة لأي عملية متكررة. بينما fastlane هو الخيار الافتراضي للفرق التي تشحن تحديثات باستمرار. واجهة برمجة التطبيقات قوية ولكنها تتطلب عطلة نهاية أسبوع كاملة من العمل. إذا كنت تريد رفعاً بنقرة واحدة مباشرة من تطبيق التصميم، فهذا هو بالضبط ما تم بناء ميزة <strong>Upload to App Store Connect</strong> في Screenshot Bro لأجله — كشف تلقائي لأنواع العرض، مطابقة اللغات، فحص أولي، ومفتاح واجهة برمجة تطبيقات واحد مخزن في سلسلة المفاتيح.
      </p>
    </>
  );
}
