import type { Route } from "./+types/blog.design-app-store-screenshots-in-figma";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { data, useLoaderData } from "react-router";
import { isLocaleCode, type LocaleCode } from "~/config/localization";

const SLUG = "design-app-store-screenshots-in-figma";

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
      return "¿Cansado de reconstruir archivos de capturas en Figma en cada lanzamiento? Prueba un flujo de trabajo nativo de Mac diseñado para capturas de la App Store y Google Play.";
    case "zh":
      return "厌倦了每次发布都要重新制作 Figma 截图文件？试试专为 App Store 和 Google Play 截图打造的 Mac 原生工作流。";
    case "hi":
      return "हर रिलीज़ में फिग्मा स्क्रीनशॉट फ़ाइलों को फिर से बनाने से थक गए हैं? ऐप स्टोर और Google Play स्क्रीनशॉट के लिए बने नेटिव मैक वर्कफ़्लो को आज़माएं।";
    case "fr":
      return "Fatigué de recréer vos fichiers de captures d'écran Figma à chaque version ? Essayez un flux de travail Mac natif conçu pour les captures App Store et Google Play.";
    case "ar":
      return "هل سئمت من إعادة بناء ملفات لقطات شاشة Figma مع كل إصدار؟ جرب سير عمل Mac أصليًا مصممًا للقطات شاشة App Store و Google Play.";
    default:
      return "Tired of rebuilding Figma screenshot files every release? Try a native Mac workflow built for App Store and Google Play screenshots.";
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
        Figma is a solid way to design App Store screenshots if you want
        total layout control. You can build your own device frames,
        typography, gradients, components, export presets, and localized
        variants. The tradeoff is that Figma does not know much about App
        Store Connect or Google Play. You have to create the production
        system yourself.
      </p>
      <p>
        This tutorial walks through how to design app store screenshots in
        Figma without letting the file turn into a pile of duplicated
        frames. It works for iOS, iPadOS, macOS, and Android screenshots,
        and it is especially useful if you are still deciding whether Figma
        is enough or whether you need a dedicated{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          app store screenshot tool
        </a>
        .
      </p>

      <h2>1. Start With the Store Sizes</h2>
      <p>
        Do not start with a random presentation frame. Start with the pixel
        sizes the stores actually accept. Apple and Google can reject
        screenshots that do not match their dimension, format, or aspect
        ratio rules.
      </p>
      <p>
        For current iPhone screenshots, a safe primary App Store size is
        <strong> 1320 x 2868</strong> for 6.9&quot; devices. For iPad, common
        sizes include <strong>2064 x 2752</strong> for 13&quot; iPad and{" "}
        <strong>1668 x 2388</strong> for 11&quot; iPad. Google Play is more
        flexible, but screenshots still need to fit Google&apos;s side
        length and aspect ratio rules.
      </p>
      <p>
        Useful references:
      </p>
      <ul>
        <li>
          <a href="/blog/screenshot-sizes-app-store-google-play">
            Screenshot sizes for App Store and Google Play
          </a>
        </li>
        <li>
          <a
            href="https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple screenshot specifications
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/googleplay/android-developer/answer/9866151"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play preview asset requirements
          </a>
        </li>
      </ul>

      <h2>2. Create One Figma Page per Store Surface</h2>
      <p>
        Keep the file boring and predictable. A clean structure is more
        valuable than a clever one:
      </p>
      <ul>
        <li>
          <strong>01 - iPhone 6.9</strong> for primary App Store phone
          screenshots.
        </li>
        <li>
          <strong>02 - iPad 13</strong> for iPad screenshots.
        </li>
        <li>
          <strong>03 - Google Play Phone</strong> for Android phone
          screenshots.
        </li>
        <li>
          <strong>04 - Components</strong> for shared styles, device
          frames, badges, and copy blocks.
        </li>
        <li>
          <strong>05 - Archive</strong> for old screenshots you may need
          later.
        </li>
      </ul>
      <p>
        Inside each page, create one frame for each screenshot slot:
        <code>01 - Main Benefit</code>, <code>02 - Feature Detail</code>,
        <code>03 - Social Proof</code>, and so on. Keep the number prefix
        in the frame name because Figma exports will be easier to sort.
      </p>

      <h2>3. Build a Reusable Screenshot Component</h2>
      <p>
        The biggest mistake is designing every screenshot as a unique
        artboard. That works for one release, then breaks as soon as you
        update the app, add a language, or change the background style.
      </p>
      <p>
        Instead, build a reusable screenshot structure:
      </p>
      <ul>
        <li>
          A background layer with your color, gradient, or image treatment.
        </li>
        <li>A headline text block with shared typography styles.</li>
        <li>An optional subheadline block.</li>
        <li>A device frame component.</li>
        <li>A masked screenshot layer inside the device frame.</li>
        <li>Optional badges, arrows, callouts, or feature labels.</li>
      </ul>
      <p>
        Use Figma components for repeated parts such as device frames,
        badges, and callout labels. Use Auto Layout where the content should
        reflow, especially for text groups that may change length during
        localization.
      </p>
      <p>
        Figma references:{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-component-properties"
          target="_blank"
          rel="noopener noreferrer"
        >
          component properties
        </a>
        ,{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants"
          target="_blank"
          rel="noopener noreferrer"
        >
          variants
        </a>
        , and{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout"
          target="_blank"
          rel="noopener noreferrer"
        >
          Auto Layout
        </a>
        .
      </p>

      <h2>4. Design the First Screenshot Like a Store Visitor</h2>
      <p>
        Your first screenshot should answer one question: why should a
        person care about this app? Avoid using the first slot for a
        settings screen, onboarding screen, or vague feature list.
      </p>
      <p>
        A practical formula:
      </p>
      <ul>
        <li>
          <strong>Headline:</strong> 4 to 8 words that state the outcome.
        </li>
        <li>
          <strong>Device screenshot:</strong> show the app doing the thing,
          not an empty state.
        </li>
        <li>
          <strong>Support visual:</strong> one badge, chart, or callout if
          it clarifies the value.
        </li>
        <li>
          <strong>Background:</strong> branded, simple, and consistent
          across the set.
        </li>
      </ul>
      <p>
        Keep text large enough to read in App Store search results and
        product-page previews. If the text only works when the Figma canvas
        is zoomed in, it is probably too small.
      </p>

      <h2>5. Turn One Layout Into a Set</h2>
      <p>
        Once the first screenshot works, duplicate the frame for each store
        slot and change one message at a time. A common seven-screenshot
        sequence:
      </p>
      <ol>
        <li>Main outcome.</li>
        <li>Core workflow.</li>
        <li>Feature that differentiates the app.</li>
        <li>Personalization or settings.</li>
        <li>Trust, privacy, sync, or integrations.</li>
        <li>Secondary use case.</li>
        <li>Final reason to download.</li>
      </ol>
      <p>
        Keep device position, headline position, and background treatment
        consistent unless you have a deliberate reason to change them. The
        set should feel like one product story, not seven separate ads.
      </p>

      <h2>6. Prepare for Localization Before You Translate</h2>
      <p>
        Localization is where many Figma screenshot files become painful.
        If you duplicate every artboard for every language, a small design
        change turns into dozens of manual edits.
      </p>
      <p>
        To make localization less fragile:
      </p>
      <ul>
        <li>
          Keep text in predictable layers: <code>Headline</code>,{" "}
          <code>Subheadline</code>, <code>Badge</code>.
        </li>
        <li>
          Use Auto Layout for text containers that need to grow.
        </li>
        <li>
          Avoid hard line breaks unless the phrase is final.
        </li>
        <li>
          Leave extra width for German, French, Spanish, and other longer
          translations.
        </li>
        <li>
          Create a separate page or section per locale only after the base
          English layout is stable.
        </li>
      </ul>
      <p>
        If you support many languages, this is the point where Figma often
        becomes a production bottleneck. You can still do it, but you need
        discipline: naming, components, export presets, and a checklist for
        every release. If localization is a recurring job, compare that
        manual setup with a dedicated{" "}
        <a href="/docs/help#localization">screenshot localization workflow</a>.
      </p>

      <h2>7. Set Up Export Presets</h2>
      <p>
        Figma lets you export selected layers and frames in common image
        formats. For store screenshots, export the final top-level frames,
        not nested groups.
      </p>
      <p>
        Recommended export setup:
      </p>
      <ul>
        <li>
          Set each screenshot frame to the exact store pixel dimensions.
        </li>
        <li>
          Add a PNG export setting for each final frame.
        </li>
        <li>
          Name frames with a zero-padded prefix: <code>01</code>,{" "}
          <code>02</code>, <code>03</code>.
        </li>
        <li>
          Export one device family at a time so files do not get mixed.
        </li>
        <li>
          Review the exported PNGs in Finder before uploading.
        </li>
      </ul>
      <p>
        Figma&apos;s export behavior is documented in its{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design"
          target="_blank"
          rel="noopener noreferrer"
        >
          export guide
        </a>
        . The important production rule is simple: App Store Connect and
        Google Play care about the final file, not how clean your Figma file
        looks.
      </p>

      <h2>8. Upload Carefully</h2>
      <p>
        Before uploading, check four things:
      </p>
      <ul>
        <li>The file dimensions match the target store slot.</li>
        <li>The files are ordered correctly.</li>
        <li>The screenshots are in the correct locale.</li>
        <li>No transparent backgrounds or accidental crop issues slipped in.</li>
      </ul>
      <p>
        For App Store Connect specifically, every locale has its own
        screenshot set. If you export English, German, Spanish, and French
        from Figma, keep those folders separate and upload them one locale
        at a time. For a deeper walkthrough, read{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          How to Upload Screenshots to App Store Connect
        </a>
        .
      </p>

      <h2>Where Figma Works Well</h2>
      <p>
        Figma is a good choice when you need custom layouts, a designer is
        already involved, and your screenshot set is not changing every
        week. It gives you full control over composition, typography, brand
        systems, and visual polish.
      </p>

      <h2>Where Figma Gets Painful</h2>
      <p>
        Figma becomes harder when screenshots are part of your regular
        release process. Common pain points:
      </p>
      <ul>
        <li>Duplicated frames for every device size.</li>
        <li>Duplicated frames for every locale.</li>
        <li>Manual replacement of simulator screenshots.</li>
        <li>Manual export and folder organization.</li>
        <li>Easy-to-break layouts when translated text gets longer.</li>
        <li>No native App Store Connect upload workflow.</li>
      </ul>
      <p>
        None of these make Figma a bad tool. They just mean Figma is a
        general design tool, not a purpose-built App Store screenshot
        workflow.
      </p>

      <h2>A Faster Alternative for Indie Developers</h2>
      <p>
        If you only make screenshots once or twice a year, Figma may be
        enough. If you ship often, support multiple languages, or maintain
        App Store and Google Play screenshots together, try{" "}
        <a href="/">Screenshot Bro</a>.
      </p>
      <p>
        Screenshot Bro is a native macOS app for designing, localizing,
        exporting, and uploading store screenshots. It gives you device
        rows, reusable templates, built-in localization, batch export, and
        <a href="/blog/upload-screenshots-to-app-store-connect">
          {" "}
          App Store Connect upload
        </a>{" "}
        without rebuilding a production system in Figma. You can also skim
        the <a href="/#features">feature overview</a> to see how the
        workflow differs from a general design file.
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Figma es una excelente opción para diseñar capturas de pantalla de la App Store si deseas un
        control total del diseño. Puedes crear tus propios marcos de dispositivos,
        tipografía, degradados, componentes, ajustes preestablecidos de exportación y variantes
        localizadas. La desventaja es que Figma no tiene conocimientos sobre App
        Store Connect o Google Play. Debes crear el sistema de producción
        tú mismo.
      </p>
      <p>
        Este tutorial explica cómo diseñar capturas de pantalla de la tienda de aplicaciones en
        Figma sin que el archivo se convierta en una pila de marcos duplicados.
        Funciona para capturas de pantalla de iOS, iPadOS, macOS y Android,
        y es especialmente útil si aún estás decidiendo si Figma
        es suficiente o si necesitas una herramienta dedicada de{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          capturas de pantalla de la App Store
        </a>
        .
      </p>

      <h2>1. Empieza con los tamaños de las tiendas</h2>
      <p>
        No comiences con un marco de presentación aleatorio. Empieza con los tamaños de píxeles que las tiendas realmente aceptan. Apple y Google pueden rechazar capturas de pantalla que no coincidan con sus reglas de dimensión, formato o relación de aspecto.
      </p>
      <p>
        Para las capturas de pantalla de iPhone actuales, un tamaño primario seguro de la App Store es
        <strong> 1320 x 2868</strong> para dispositivos de 6.9&quot;. Para iPad, los tamaños comunes incluyen <strong>2064 x 2752</strong> para iPad de 13&quot; y{" "}
        <strong>1668 x 2388</strong> para iPad de 11&quot;. Google Play es más flexible, pero las capturas aún deben cumplir con las reglas de longitud lateral y relación de aspecto de Google.
      </p>
      <p>
        Referencias útiles:
      </p>
      <ul>
        <li>
          <a href="/blog/screenshot-sizes-app-store-google-play">
            Tamaños de capturas de pantalla para App Store y Google Play
          </a>
        </li>
        <li>
          <a
            href="https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications"
            target="_blank"
            rel="noopener noreferrer"
          >
            Especificaciones de capturas de pantalla de Apple
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/googleplay/android-developer/answer/9866151"
            target="_blank"
            rel="noopener noreferrer"
          >
            Requisitos de recursos de vista previa de Google Play
          </a>
        </li>
      </ul>

      <h2>2. Crea una página de Figma por superficie de tienda</h2>
      <p>
        Mantén el archivo simple y predecible. Una estructura limpia es más valiosa que una ingeniosa:
      </p>
      <ul>
        <li>
          <strong>01 - iPhone 6.9</strong> para capturas de pantalla principales de teléfonos en la App Store.
        </li>
        <li>
          <strong>02 - iPad 13</strong> para capturas de pantalla de iPad.
        </li>
        <li>
          <strong>03 - Google Play Phone</strong> para capturas de pantalla de teléfonos Android.
        </li>
        <li>
          <strong>04 - Components</strong> para estilos compartidos, marcos de dispositivos, insignias y bloques de texto.
        </li>
        <li>
          <strong>05 - Archive</strong> para capturas de pantalla antiguas que puedas necesitar más adelante.
        </li>
      </ul>
      <p>
        Dentro de cada página, crea un marco para cada ranura de captura de pantalla:
        <code>01 - Main Benefit</code>, <code>02 - Feature Detail</code>,
        <code>03 - Social Proof</code>, etcétera. Mantén el prefijo numérico en el nombre del marco porque será más fácil ordenar las exportaciones de Figma.
      </p>

      <h2>3. Crea un componente de captura de pantalla reutilizable</h2>
      <p>
        El mayor error es diseñar cada captura de pantalla como una mesa de trabajo única. Eso funciona para una versión, pero se rompe tan pronto como actualizas la aplicación, agregas un idioma o cambias el estilo de fondo.
      </p>
      <p>
        En su lugar, crea una estructura de captura de pantalla reutilizable:
      </p>
      <ul>
        <li>
          Una capa de fondo con tu tratamiento de color, degradado o imagen.
        </li>
        <li>Un bloque de texto de título con estilos tipográficos compartidos.</li>
        <li>Un bloque de subtítulo opcional.</li>
        <li>Un componente de marco de dispositivo.</li>
        <li>Una capa de captura de pantalla enmascarada dentro del marco del dispositivo.</li>
        <li>Insignias, flechas, llamadas o etiquetas de características opcionales.</li>
      </ul>
      <p>
        Usa componentes de Figma para las partes repetidas, como los marcos de los dispositivos, las insignias y las etiquetas de llamada. Usa Auto Layout donde el contenido deba refluir, especialmente para grupos de texto que puedan cambiar de longitud durante la localización.
      </p>
      <p>
        Referencias de Figma:{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-component-properties"
          target="_blank"
          rel="noopener noreferrer"
        >
          propiedades de componentes
        </a>
        ,{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants"
          target="_blank"
          rel="noopener noreferrer"
        >
          variantes
        </a>{" "}
        y{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout"
          target="_blank"
          rel="noopener noreferrer"
        >
          Auto Layout
        </a>
        .
      </p>

      <h2>4. Diseña la primera captura pensando en el visitante de la tienda</h2>
      <p>
        Tu primera captura de pantalla debe responder a una pregunta: ¿por qué debería importarle esta aplicación a alguien? Evita usar el primer espacio para una pantalla de configuración, una pantalla de bienvenida o una lista vaga de características.
      </p>
      <p>
        Una fórmula práctica:
      </p>
      <ul>
        <li>
          <strong>Título:</strong> de 4 a 8 palabras que expresen el resultado.
        </li>
        <li>
          <strong>Captura del dispositivo:</strong> muestra la aplicación realizando la acción, no un estado vacío.
        </li>
        <li>
          <strong>Apoyo visual:</strong> una insignia, gráfico o llamada si aclara el valor.
        </li>
        <li>
          <strong>Fondo:</strong> coherente con la marca, simple y consistente en todo el conjunto.
        </li>
      </ul>
      <p>
        Mantén el texto lo suficientemente grande como para que sea legible en los resultados de búsqueda de la App Store y en las vistas previas de la página del producto. Si el texto solo es legible al hacer zoom en el lienzo de Figma, probablemente sea demasiado pequeño.
      </p>

      <h2>5. Convierte un diseño en un conjunto completo</h2>
      <p>
        Una vez que la primera captura funcione, duplica el marco para cada ranura de la tienda y cambia un mensaje a la vez. Una secuencia común de siete capturas de pantalla:
      </p>
      <ol>
        <li>Resultado principal.</li>
        <li>Flujo de trabajo principal.</li>
        <li>Característica que diferencia a la aplicación.</li>
        <li>Personalización o ajustes.</li>
        <li>Confianza, privacidad, sincronización o integraciones.</li>
        <li>Caso de uso secundario.</li>
        <li>Razón final para descargar.</li>
      </ol>
      <p>
        Mantén la posición del dispositivo, la posición del título y el tratamiento del fondo de manera consistente a menos que tengas un motivo deliberado para cambiarlos. El conjunto debe sentirse como una sola historia del producto, no como siete anuncios separados.
      </p>

      <h2>6. Prepárate para la localización antes de traducir</h2>
      <p>
        La localización es el punto en el que muchos archivos de capturas en Figma se vuelven difíciles de manejar. Si duplicas cada mesa de trabajo para cada idioma, un pequeño cambio de diseño se convierte en docenas de ediciones manuales.
      </p>
      <p>
        Para que la localización sea menos frágil:
      </p>
      <ul>
        <li>
          Mantén el texto en capas predecibles: <code>Headline</code>,{" "}
          <code>Subheadline</code>, <code>Badge</code>.
        </li>
        <li>
          Usa Auto Layout para los contenedores de texto que necesiten crecer.
        </li>
        <li>
          Evita los saltos de línea forzados a menos que la frase sea definitiva.
        </li>
        <li>
          Deja un ancho adicional para alemán, francés, español y otras traducciones más largas.
        </li>
        <li>
          Crea una página o sección separada por idioma únicamente después de que el diseño base en inglés sea estable.
        </li>
      </ul>
      <p>
        Si ofreces soporte para muchos idiomas, este suele ser el momento en que Figma se convierte en un cuello de botella de producción. Aún puedes hacerlo, pero requieres disciplina: nombres claros, componentes, ajustes de exportación y una lista de verificación para cada lanzamiento. Si la localización es una tarea recurrente, compara esa configuración manual con un flujo de trabajo de{" "}
        <a href="/docs/help#localization">localización de capturas de pantalla</a> dedicado.
      </p>

      <h2>7. Configura los ajustes preestablecidos de exportación</h2>
      <p>
        Figma te permite exportar capas y marcos seleccionados en formatos de imagen comunes. Para las capturas de pantalla de la tienda, exporta los marcos finales de nivel superior, no los grupos anidados.
      </p>
      <p>
        Configuración de exportación recomendada:
      </p>
      <ul>
        <li>
          Configura cada marco de captura de pantalla con las dimensiones de píxeles exactas de la tienda.
        </li>
        <li>
          Agrega una configuración de exportación PNG para cada marco final.
        </li>
        <li>
          Nombra los marcos con un prefijo relleno con ceros: <code>01</code>,{" "}
          <code>02</code>, <code>03</code>.
        </li>
        <li>
          Exporta una familia de dispositivos a la vez para que los archivos no se mezclen.
        </li>
        <li>
          Revisa los archivos PNG exportados en el Finder antes de subirlos.
        </li>
      </ul>
      <p>
        El comportamiento de exportación de Figma está documentado en su{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design"
          target="_blank"
          rel="noopener noreferrer"
        >
          guía de exportación
        </a>
        . La regla de producción importante es simple: a App Store Connect y Google Play les importa el archivo final, no lo limpio que se vea tu archivo de Figma.
      </p>

      <h2>8. Sube los archivos con cuidado</h2>
      <p>
        Antes de subirlos, verifica cuatro cosas:
      </p>
      <ul>
        <li>Las dimensiones del archivo coinciden con la ranura del store de destino.</li>
        <li>Los archivos están ordenados correctamente.</li>
        <li>Las capturas de pantalla están en el idioma correcto.</li>
        <li>No se han filtrado fondos transparentes ni problemas de recorte accidentales.</li>
      </ul>
      <p>
        Específicamente para App Store Connect, cada idioma tiene su propio conjunto de capturas de pantalla. Si exportas inglés, alemán, español y francés desde Figma, mantén esas carpetas separadas y súbelas un idioma a la vez. Para obtener una guía detallada, lee{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          Cómo subir capturas de pantalla a App Store Connect
        </a>
        .
      </p>

      <h2>Dónde funciona bien Figma</h2>
      <p>
        Figma es una buena opción cuando necesitas diseños personalizados, hay un diseñador involucrado y tu conjunto de capturas de pantalla no cambia todas las semanas. Te brinda control total sobre la composición, la tipografía, los sistemas de marca y el acabado visual.
      </p>

      <h2>Dónde se vuelve problemático Figma</h2>
      <p>
        Figma se vuelve más difícil cuando las capturas de pantalla son parte de tu proceso de lanzamiento regular. Puntos débiles comunes:
      </p>
      <ul>
        <li>Marcos duplicados para cada tamaño de dispositivo.</li>
        <li>Marcos duplicados para cada idioma.</li>
        <li>Reemplazo manual de capturas de pantalla del simulador.</li>
        <li>Exportación manual y organización de carpetas.</li>
        <li>Diseños fáciles de romper cuando los textos traducidos son más largos.</li>
        <li>Sin flujo de trabajo nativo para subir a App Store Connect.</li>
      </ul>
      <p>
        Nada de esto convierte a Figma en una mala herramienta. Simplemente significa que Figma es una herramienta de diseño general, no un flujo de trabajo diseñado específicamente para capturas de pantalla de la App Store.
      </p>

      <h2>Una alternativa más rápida para desarrolladores independientes</h2>
      <p>
        Si solo creas capturas de pantalla una o dos veces al año, Figma puede ser suficiente. Si realizas lanzamientos a menudo, ofreces soporte para múltiples idiomas o mantienes capturas de pantalla de la App Store y Google Play juntas, prueba{" "}
        <a href="/">Screenshot Bro</a>.
      </p>
      <p>
        Screenshot Bro es una aplicación nativa de macOS para diseñar, localizar, exportar y subir capturas de pantalla de tiendas. Te proporciona filas de dispositivos, plantillas reutilizables, localización integrada, exportación por lotes y{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          subida a App Store Connect
        </a>{" "}
        sin necesidad de reconstruir un sistema de producción en Figma. También puedes echar un vistazo a la{" "}
        <a href="/#features">descripción general de características</a> para ver en qué se diferencia este flujo de trabajo de un archivo de diseño general.
      </p>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        如果您想完全控制布局，Figma 是设计 App Store 截图的一个可靠选择。您可以构建自己的设备框架、
        排版、渐变、组件、导出预设和本地化变体。权衡之处在于 Figma 对 App Store Connect 或 Google Play 知之甚少。您必须自己创建生产系统。
      </p>
      <p>
        本教程将介绍如何在 Figma 中设计应用商店截图，而不会让文件变成一堆重复的框架。它适用于 iOS、iPadOS、macOS 和 Android 截图，如果您仍在犹豫 Figma 是否足够，或者您是否需要一个专用的{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          应用商店截图工具
        </a>
        ，本教程将特别有用。
      </p>

      <h2>1. 从商店尺寸开始</h2>
      <p>
        不要随便创建一个展示框架就开始设计。从商店实际接受的像素尺寸开始。如果截图不符合尺寸、格式或高宽比规则，Apple 和 Google 可能会拒绝接收。
      </p>
      <p>
        对于当前的 iPhone 截图，安全的 App Store 首选尺寸是适用于 6.9 英寸设备的 <strong>1320 x 2868</strong>。对于 iPad，常用尺寸包括适用于 13 英寸 iPad 的 <strong>2064 x 2752</strong> 和适用于 11 英寸 iPad 的 <strong>1668 x 2388</strong>。Google Play 的灵活性更高，但截图仍需符合 Google 的边长和高宽比规则。
      </p>
      <p>
        有用参考：
      </p>
      <ul>
        <li>
          <a href="/blog/screenshot-sizes-app-store-google-play">
            App Store 和 Google Play 截图尺寸
          </a>
        </li>
        <li>
          <a
            href="https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple 截图规格
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/googleplay/android-developer/answer/9866151"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play 预览素材要求
          </a>
        </li>
      </ul>

      <h2>2. 为每个商店界面创建一个 Figma 页面</h2>
      <p>
        让文件保持简单和可预测。清晰的结构比聪明的结构更有价值：
      </p>
      <ul>
        <li>
          <strong>01 - iPhone 6.9</strong> 适用于主要的 App Store 手机截图。
        </li>
        <li>
          <strong>02 - iPad 13</strong> 适用于 iPad 截图。
        </li>
        <li>
          <strong>03 - Google Play Phone</strong> 适用于 Android 手机截图。
        </li>
        <li>
          <strong>04 - Components</strong> 适用于共享样式、设备框架、徽章和文案块。
        </li>
        <li>
          <strong>05 - Archive</strong> 适用于以后可能需要的老旧截图。
        </li>
      </ul>
      <p>
        在每个页面中，为每个截图展示位创建一个框架：
        <code>01 - Main Benefit</code>、<code>02 - Feature Detail</code>、
        <code>03 - Social Proof</code>等。在框架名称中保留数字前缀，这样在导出 Figma 时会更容易排序。
      </p>

      <h2>3. 构建可复用的截图组件</h2>
      <p>
        最大的错误是将每张截图设计为唯一的画板。这在一次发布中可行，但只要您更新应用、添加语言或更改背景样式，它就会失效。
      </p>
      <p>
        相反，您应该构建一个可复用的截图结构：
      </p>
      <ul>
        <li>
          具有您的颜色、渐变或图像处理效果的背景层。
        </li>
        <li>具有共享排版样式的标题文本块。</li>
        <li>可选的副标题块。</li>
        <li>设备框架组件。</li>
        <li>设备框架内带有遮罩的截图层。</li>
        <li>可选的徽章、箭头、标注或功能标签。</li>
      </ul>
      <p>
        为设备框架、徽章和标注标签等重复部分使用 Figma 组件。在内容应该重新排列的地方使用自动布局（Auto Layout），特别是对于在本地化期间长度可能会发生变化的文本组。
      </p>
      <p>
        Figma 参考：{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-component-properties"
          target="_blank"
          rel="noopener noreferrer"
        >
          组件属性
        </a>
        、{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants"
          target="_blank"
          rel="noopener noreferrer"
        >
          变体
        </a>{" "}
        以及{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout"
          target="_blank"
          rel="noopener noreferrer"
        >
          自动布局
        </a>
        。
      </p>

      <h2>4. 像商店访客一样设计第一张截图</h2>
      <p>
        您的第一张截图应该回答一个问题：为什么人们要关注这款应用？避免在第一个展示位放置设置界面、新手引导界面或模糊的功能列表。
      </p>
      <p>
        一个实用的公式：
      </p>
      <ul>
        <li>
          <strong>标题：</strong> 4 到 8 个字，说明最终结果。
        </li>
        <li>
          <strong>设备截图：</strong> 展示正在运行关键功能的应用界面，而不是空白状态。
        </li>
        <li>
          <strong>辅助视觉：</strong> 如果能更清晰地展现价值，可以加上一个徽章、图表或标注。
        </li>
        <li>
          <strong>背景：</strong> 品牌化、简单，并在整套截图中保持一致。
        </li>
      </ul>
      <p>
        确保文字足够大，以便在 App Store 搜索结果和产品页面预览中清晰易读。如果文字只有在 Figma 画布放大时才能看清，那么它可能太小了。
      </p>

      <h2>5. 将单一布局拓展为一套截图</h2>
      <p>
        第一张截图搞定后，复制该框架以用于每个商店展示位，并逐一修改文案。常见的七张截图顺序：
      </p>
      <ol>
        <li>主要结果。</li>
        <li>核心工作流。</li>
        <li>让应用与众不同的特色功能。</li>
        <li>个性化设置或普通设置。</li>
        <li>信任、隐私、同步或集成。</li>
        <li>次要使用场景。</li>
        <li>下载的最终理由。</li>
      </ol>
      <p>
        保持设备位置、标题位置和背景处理的一致性，除非您有刻意修改的理由。整套截图应该让人感觉是一个完整的产品故事，而不是七个独立的广告。
      </p>

      <h2>6. 在翻译之前为本地化做准备</h2>
      <p>
        本地化是许多 Figma 截图文件开始让人痛苦的地方。如果您为每种语言复制每个画板，一个微小的设计改动就会变成数十次的手动编辑。
      </p>
      <p>
        为了降低本地化的脆弱性：
      </p>
      <ul>
        <li>
          将文本保存在可预测的图层中：<code>Headline</code>、{" "}
          <code>Subheadline</code>、<code>Badge</code>。
        </li>
        <li>
          为需要拉伸的文本容器使用自动布局（Auto Layout）。
        </li>
        <li>
          除非短语已完全确定，否则避免硬换行。
        </li>
        <li>
          为德语、法语、西班牙语和其他较长的译文留出额外的宽度。
        </li>
        <li>
          仅在基础英文布局稳定后，再按语言环境创建单独的页面或部分。
        </li>
      </ul>
      <p>
        如果您支持多种语言，这通常是 Figma 成为生产瓶颈的时刻。您仍然可以这样做，但需要极高的自律：清晰的命名、组件化、导出预设以及每次发布的清单。如果本地化是一项经常性的工作，请将那种手动设置与专用的{" "}
        <a href="/docs/help#localization">截图本地化工作流</a> 进行对比。
      </p>

      <h2>7. 设置导出预设</h2>
      <p>
        Figma 允许您以常用图像格式导出选定的图层和框架。对于商店截图，请导出最终的顶层框架，而不是嵌套的组。
      </p>
      <p>
        推荐的导出设置：
      </p>
      <ul>
        <li>
          将每个截图框架设置为精确的商店像素尺寸。
        </li>
        <li>
          为每个最终框架添加 PNG 导出设置。
        </li>
        <li>
          使用补零前缀为框架命名：<code>01</code>、{" "}
          <code>02</code>、<code>03</code>。
        </li>
        <li>
          一次只导出一个设备系列，以免文件混淆。
        </li>
        <li>
          在上传之前，先在访达（Finder）中检查导出的 PNG 文件。
        </li>
      </ul>
      <p>
        Figma 的导出行为在其{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design"
          target="_blank"
          rel="noopener noreferrer"
        >
          导出指南
        </a>{" "}
        中有所说明。重要的生产规则很简单：App Store Connect 和 Google Play 只关心最终文件，而不是您的 Figma 文件看起来有多整洁。
      </p>

      <h2>8. 仔细上传</h2>
      <p>
        在上传之前，请检查以下四项：
      </p>
      <ul>
        <li>文件尺寸符合目标商店展示位。</li>
        <li>文件顺序正确。</li>
        <li>截图所用的语言符合配置。</li>
        <li>没有混入透明背景或发生意外的裁剪问题。</li>
      </ul>
      <p>
        特别是在 App Store Connect 中，每个语言环境都有自己独立的截图集。如果您从 Figma 中导出了英语、德语、西班牙语和法语的截图，请保持这些文件夹独立，并逐个语言环境进行上传。如需更深入的演练，请阅读{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          如何将截图上传到 App Store Connect
        </a>
        。
      </p>

      <h2>Figma 适合的场景</h2>
      <p>
        当您需要自定义布局、已有设计师参与，且您的截图集不会每周都发生更改时，Figma 是一个不错的选择。它为您提供对排版、字体、品牌体系和视觉效果的完全控制。
      </p>

      <h2>Figma 让人痛苦的场景</h2>
      <p>
        当截图是您常规发布流程的一部分时，Figma 会变得更加困难。常见的痛点包括：
      </p>
      <ul>
        <li>为每个设备尺寸复制框架。</li>
        <li>为每个语言环境复制框架。</li>
        <li>手动替换模拟器截图。</li>
        <li>手动导出和文件夹整理。</li>
        <li>翻译文本变长时，布局极易混乱。</li>
        <li>没有原生的 App Store Connect 上传工作流。</li>
      </ul>
      <p>
        这并不意味着 Figma 是一款糟糕的工具。它只是意味着 Figma 是一个通用的设计工具，而不是专门构建的 App Store 截图工作流。
      </p>

      <h2>适合独立开发者的更快速替代方案</h2>
      <p>
        如果您每年只制作一两次截图，Figma 可能就足够了。如果您频繁发版、支持多种语言，或者需要同时维护 App Store 和 Google Play 截图，请尝试使用{" "}
        <a href="/">Screenshot Bro</a>。
      </p>
      <p>
        Screenshot Bro 是一款用于设计、本地化、导出和上传商店截图的原生 macOS 应用。它为您提供设备行、可复用模板、内置本地化、批量导出以及{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          App Store Connect 上传
        </a>{" "}
        功能，而无需在 Figma 中重新构建生产系统。您也可以浏览{" "}
        <a href="/#features">功能概览</a>，了解该工作流与通用设计文件有何不同。
      </p>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        यदि आप कुल लेआउट नियंत्रण चाहते हैं तो ऐप स्टोर स्क्रीनशॉट डिजाइन करने के लिए Figma एक ठोस तरीका है। आप अपने खुद के डिवाइस फ्रेम, टाइपोग्राफी, ग्रेडिएंट, घटक, निर्यात प्रीसेट और स्थानीयकृत वेरिएंट बना सकते हैं। इसका समझौता यह है कि फिग्मा को ऐप स्टोर कनेक्ट या Google Play के बारे में ज्यादा जानकारी नहीं है। उत्पादन प्रणाली आपको खुद बनानी होगी।
      </p>
      <p>
        यह ट्यूटोरियल बताता है कि फिग्मा में ऐप स्टोर स्क्रीनशॉट को फ़ाइल को डुप्लिकेट फ़्रेमों के ढेर में बदले बिना कैसे डिज़ाइन किया जाए। यह iOS, iPadOS, macOS और Android स्क्रीनशॉट के लिए काम करता है, और यह विशेष रूप से तब उपयोगी होता है जब आप अभी भी यह तय कर रहे हों कि फिग्मा पर्याप्त है या आपको एक समर्पित{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          ऐप स्टोर स्क्रीनशॉट टूल
        </a>
         की आवश्यकता है।
      </p>

      <h2>1. स्टोर आकारों के साथ शुरुआत करें</h2>
      <p>
        किसी भी यादृच्छिक प्रस्तुति फ़्रेम से शुरुआत न करें। उन पिक्सेल आकारों से शुरुआत करें जिन्हें स्टोर वास्तव में स्वीकार करते हैं। Apple और Google उन स्क्रीनशॉट को अस्वीकार कर सकते हैं जो उनके आयाम, प्रारूप या पहलू अनुपात नियमों से मेल नहीं खाते हैं.
      </p>
      <p>
        वर्तमान iPhone स्क्रीनशॉट के लिए, 6.9&quot; उपकरणों के लिए एक सुरक्षित प्राथमिक ऐप स्टोर आकार <strong> 1320 x 2868</strong> है। iPad के लिए, सामान्य आकारों में 13&quot; iPad के लिए <strong>2064 x 2752</strong> और 11&quot; iPad के लिए <strong>1668 x 2388</strong> शामिल हैं। Google Play अधिक लचीला है, लेकिन स्क्रीनशॉट को अभी भी Google के साइड लंबाई और पहलू अनुपात नियमों के अनुकूल होना चाहिए।
      </p>
      <p>
        उपयोगी संदर्भ:
      </p>
      <ul>
        <li>
          <a href="/blog/screenshot-sizes-app-store-google-play">
            App Store और Google Play के लिए स्क्रीनशॉट आकार
          </a>
        </li>
        <li>
          <a
            href="https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications"
            target="_blank"
            rel="noopener noreferrer"
          >
            एप्पल स्क्रीनशॉट विनिर्देश
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/googleplay/android-developer/answer/9866151"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play पूर्वावलोकन संपत्ति आवश्यकताएं
          </a>
        </li>
      </ul>

      <h2>2. प्रत्येक स्टोर सतह के लिए एक फिग्मा पेज बनाएं</h2>
      <p>
        फ़ाइल को सरल और अनुमानित रखें। एक साफ संरचना एक चालाकी भरी संरचना से अधिक मूल्यवान है:
      </p>
      <ul>
        <li>
          मुख्य ऐप स्टोर फोन स्क्रीनशॉट के लिए <strong>01 - iPhone 6.9</strong>।
        </li>
        <li>
          iPad स्क्रीनशॉट के लिए <strong>02 - iPad 13</strong>।
        </li>
        <li>
          Android फोन स्क्रीनशॉट के लिए <strong>03 - Google Play Phone</strong>।
        </li>
        <li>
          साझा शैलियों, डिवाइस फ़्रेम, बैज और कॉपी ब्लॉक के लिए <strong>04 - Components</strong>।
        </li>
        <li>
          पुराने स्क्रीनशॉट के लिए <strong>05 - Archive</strong> जिनकी आपको बाद में आवश्यकता हो सकती है।
        </li>
      </ul>
      <p>
        प्रत्येक पृष्ठ के अंदर, प्रत्येक स्क्रीनशॉट स्लॉट के लिए एक फ्रेम बनाएं:
        <code>01 - Main Benefit</code>, <code>02 - Feature Detail</code>,
        <code>03 - Social Proof</code>, और इसी तरह। फ़्रेम नाम में संख्या उपसर्ग रखें क्योंकि फिग्मा निर्यात को सॉर्ट करना आसान होगा।
      </p>

      <h2>3. एक पुन: प्रयोज्य स्क्रीनशॉट घटक बनाएं</h2>
      <p>
        सबसे बड़ी गलती प्रत्येक स्क्रीनशॉट को एक अद्वितीय आर्टबोर्ड के रूप में डिज़ाइन करना है। यह एक रिलीज के लिए काम करता है, फिर जैसे ही आप ऐप अपडेट करते हैं, कोई भाषा जोड़ते हैं, या पृष्ठभूमि शैली बदलते हैं, वैसे ही टूट जाता है।
      </p>
      <p>
        इसके बजाय, एक पुन: प्रयोज्य स्क्रीनशॉट संरचना का निर्माण करें:
      </p>
      <ul>
        <li>
          आपके रंग, ग्रेडिएंट या छवि उपचार के साथ एक पृष्ठभूमि परत।
        </li>
        <li>साझा टाइपोग्राफी शैलियों के साथ एक हेडलाइन टेक्स्ट ब्लॉक।</li>
        <li>एक वैकल्पिक सबहेडलाइन ब्लॉक।</li>
        <li>एक डिवाइस फ़्रेम घटक।</li>
        <li>डिवाइस फ़्रेम के अंदर एक नकाबपोश स्क्रीनशॉट परत।</li>
        <li>वैकल्पिक बैज, तीर, कॉलआउट या सुविधा लेबल।</li>
      </ul>
      <p>
        डिवाइस फ़्रेम, बैज और कॉलआउट लेबल जैसे दोहराए गए भागों के लिए Figma घटकों का उपयोग करें। ऑटो लेआउट का उपयोग करें जहां सामग्री को रीफ़्लो करना चाहिए, विशेष रूप से टेक्स्ट समूहों के लिए जो स्थानीयकरण के दौरान लंबाई बदल सकते हैं।
      </p>
      <p>
        Figma संदर्भ:{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-component-properties"
          target="_blank"
          rel="noopener noreferrer"
        >
          घटक गुण
        </a>
        ,{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants"
          target="_blank"
          rel="noopener noreferrer"
        >
          वेरिएंट
        </a>
        , और{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout"
          target="_blank"
          rel="noopener noreferrer"
        >
          ऑटो लेआउट
        </a>
        ।
      </p>

      <h2>4. पहले स्क्रीनशॉट को एक स्टोर विज़िटर की तरह डिज़ाइन करें</h2>
      <p>
        आपके पहले स्क्रीनशॉट को एक प्रश्न का उत्तर देना चाहिए: किसी व्यक्ति को इस ऐप की परवाह क्यों करनी चाहिए? सेटिंग्स स्क्रीन, ऑनबोर्डिंग स्क्रीन, या अस्पष्ट सुविधा सूची के लिए पहले स्लॉट का उपयोग करने से बचें।
      </p>
      <p>
        एक व्यावहारिक सूत्र:
      </p>
      <ul>
        <li>
          <strong>हेडलाइन:</strong> 4 से 8 शब्द जो परिणाम बताते हैं।
        </li>
        <li>
          <strong>डिवाइस स्क्रीनशॉट:</strong> ऐप को काम करते हुए दिखाएं, खाली स्थिति नहीं।
        </li>
        <li>
          <strong>सहायक विजुअल:</strong> यदि यह मूल्य स्पष्ट करता है तो एक बैज, चार्ट या कॉलआउट।
        </li>
        <li>
          <strong>बैकग्राउंड:</strong> ब्रांडेड, सरल, और पूरे सेट में सुसंगत।
        </li>
      </ul>
      <p>
        ऐप स्टोर खोज परिणामों और उत्पाद-पृष्ठ पूर्वावलोकन में पढ़ने के लिए टेक्स्ट को पर्याप्त बड़ा रखें। यदि टेक्स्ट केवल फिग्मा कैनवास के ज़ूम इन होने पर ही काम करता है, तो यह शायद बहुत छोटा है।
      </p>

      <h2>5. एक लेआउट को एक सेट में बदलें</h2>
      <p>
        एक बार जब पहला स्क्रीनशॉट काम करने लगे, तो प्रत्येक स्टोर स्लॉट के लिए फ्रेम को डुप्लिकेट करें और एक समय में एक संदेश बदलें। एक सामान्य सात-स्क्रीनशॉट अनुक्रम:
      </p>
      <ol>
        <li>मुख्य परिणाम।</li>
        <li>मुख्य वर्कफ़्लो।</li>
        <li>सुविधा जो ऐप को अलग करती है।</li>
        <li>निजीकरण या सेटिंग्स।</li>
        <li>विश्वास, गोपनीयता, सिंक, या एकीकरण।</li>
        <li>माध्यमिक उपयोग मामला।</li>
        <li>डाउनलोड करने का अंतिम कारण।</li>
      </ol>
      <p>
        डिवाइस की स्थिति, हेडलाइन की स्थिति और बैकग्राउंड ट्रीटमेंट को सुसंगत रखें जब तक कि आपके पास उन्हें बदलने का कोई जानबूझकर कारण न हो। सेट को एक उत्पाद कहानी की तरह महसूस होना चाहिए, सात अलग-अलग विज्ञापनों की तरह नहीं।
      </p>

      <h2>6. अनुवाद करने से पहले स्थानीयकरण की तैयारी करें</h2>
      <p>
        स्थानीयकरण वह जगह है जहां कई Figma स्क्रीनशॉट फ़ाइलें कठिन हो जाती हैं। यदि आप प्रत्येक भाषा के लिए प्रत्येक आर्टबोर्ड को डुप्लिकेट करते हैं, तो एक छोटा डिज़ाइन परिवर्तन दर्जनों मैन्युअल संपादन में बदल जाता है।
      </p>
      <p>
        स्थानीयकरण को कम नाजुक बनाने के लिए:
      </p>
      <ul>
        <li>
          टेक्स्ट को अनुमानित परतों में रखें: <code>Headline</code>,{" "}
          <code>Subheadline</code>, <code>Badge</code>।
        </li>
        <li>
          उन टेक्स्ट कंटेनरों के लिए ऑटो लेआउट का उपयोग करें जिन्हें बढ़ने की आवश्यकता है।
        </li>
        <li>
          कठिन लाइन ब्रेक से बचें जब तक कि वाक्यांश अंतिम न हो।
        </li>
        <li>
          जर्मन, फ्रेंच, स्पेनिश और अन्य लंबे अनुवादों के लिए अतिरिक्त चौड़ाई छोड़ें।
        </li>
        <li>
          मूल अंग्रेजी लेआउट स्थिर होने के बाद ही प्रति लोकेल एक अलग पृष्ठ या अनुभाग बनाएं।
        </li>
      </ul>
      <p>
        यदि आप कई भाषाओं का समर्थन करते हैं, तो यह वह बिंदु है जहां फिग्मा अक्सर उत्पादन अड़चन बन जाता है। आप अभी भी ऐसा कर सकते, हैं लेकिन आपको अनुशासन की आवश्यकता है: नामकरण, घटक, निर्यात प्रीसेट, और हर रिलीज के लिए एक चेकलिस्ट। यदि स्थानीयकरण एक आवर्ती काम है, तो उस मैन्युअल सेटअप की तुलना एक समर्पित{" "}
        <a href="/docs/help#localization">स्क्रीनशॉट स्थानीयकरण वर्कफ़्लो</a> से करें।
      </p>

      <h2>7. निर्यात प्रीसेट सेट करें</h2>
      <p>
        Figma आपको सामान्य छवि प्रारूपों में चयनित परतों और फ़्रेमों को निर्यात करने की अनुमति देता है। स्टोर स्क्रीनशॉट के लिए, अंतिम शीर्ष-स्तरीय फ़्रेम निर्यात करें, नेस्टेड समूह नहीं।
      </p>
      <p>
        अनुशंसित निर्यात सेटअप:
      </p>
      <ul>
        <li>
          प्रत्येक स्क्रीनशॉट फ़्रेम को सटीक स्टोर पिक्सेल आयामों पर सेट करें।
        </li>
        <li>
          प्रत्येक अंतिम फ़्रेम के लिए एक PNG निर्यात सेटिंग जोड़ें।
        </li>
        <li>
          शून्य-पैडेड उपसर्ग के साथ फ़्रेम का नाम रखें: <code>01</code>,{" "}
          <code>02</code>, <code>03</code>।
        </li>
        <li>
          एक बार में एक ही डिवाइस फ़ैमिली का निर्यात करें ताकि फ़ाइलें मिश्रित न हों।
        </li>
        <li>
          अपलोड करने से पहले फ़ाइंडर में निर्यात किए गए PNG की समीक्षा करें।
        </li>
      </ul>
      <p>
        Figma का निर्यात व्यवहार उसके{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design"
          target="_blank"
          rel="noopener noreferrer"
        >
          निर्यात गाइड
        </a>
         में प्रलेखित है। महत्वपूर्ण उत्पादन नियम सरल है: ऐप स्टोर कनेक्ट और Google Play अंतिम फ़ाइल की परवाह करते हैं, न कि इस बात की कि आपकी फिग्मा फ़ाइल कितनी साफ दिखती है।
      </p>

      <h2>8. सावधानी से अपलोड करें</h2>
      <p>
        अपलोड करने से पहले, चार चीज़ें जाँचें:
      </p>
      <ul>
        <li>फ़ाइल आयाम लक्षित स्टोर स्लॉट से मेल खाते हैं।</li>
        <li>फ़ाइलें सही क्रम में व्यवस्थित हैं।</li>
        <li>स्क्रीनशॉट सही लोकेल में हैं।</li>
        <li>कोई पारदर्शी बैकग्राउंड या आकस्मिक क्रॉप समस्याएँ नहीं छूटी हैं।</li>
      </ul>
      <p>
        विशेष रूप से ऐप स्टोर कनेक्ट के लिए, प्रत्येक लोकेल का अपना स्क्रीनशॉट सेट होता है। यदि आप फिग्मा से अंग्रेजी, जर्मन, स्पेनिश और फ्रेंच निर्यात करते हैं, तो उन फ़ोल्डरों को अलग रखें और उन्हें एक समय में एक लोकेल अपलोड करें। गहन पूर्वाभ्यास के लिए, पढ़ें{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          App Store Connect पर स्क्रीनशॉट कैसे अपलोड करें
        </a>
        ।
      </p>

      <h2>जहां Figma अच्छा काम करता है</h2>
      <p>
        Figma एक अच्छा विकल्प है जब आपको कस्टम लेआउट की आवश्यकता होती है, एक डिज़ाइनर पहले से ही शामिल होता है, और आपका स्क्रीनशॉट सेट हर हफ्ते नहीं बदलता है। यह आपको रचना, टाइपोग्राफी, ब्रांड सिस्टम और विज़ुअल पॉलिश पर पूर्ण नियंत्रण देता है।
      </p>

      <h2>जहां Figma कठिन हो जाता है</h2>
      <p>
        Figma तब कठिन हो जाता है जब स्क्रीनशॉट आपके नियमित रिलीज़ प्रक्रिया का हिस्सा होते हैं। सामान्य दर्द बिंदु:
      </p>
      <ul>
        <li>प्रत्येक डिवाइस आकार के लिए डुप्लिकेट फ़्रेम।</li>
        <li>प्रत्येक लोकेल के लिए डुप्लिकेट फ़्रेम।</li>
        <li>सिम्युलेटर स्क्रीनशॉट का मैन्युअल प्रतिस्थापन।</li>
        <li>मैन्युअल निर्यात और फ़ोल्डर संगठन।</li>
        <li>अनुवादित पाठ लंबा होने पर आसानी से टूटने वाले लेआउट।</li>
        <li>कोई मूल ऐप स्टोर कनेक्ट अपलोड वर्कफ़्लो नहीं।</li>
      </ul>
      <p>
        इनमें से कोई भी Figma को एक बुरा उपकरण नहीं बनाता है। उनका मतलब केवल यह है कि फिग्मा एक सामान्य डिज़ाइन उपकरण है, न कि ऐप स्टोर स्क्रीनशॉट वर्कफ़्लो के लिए उद्देश्य-निर्मित।
      </p>

      <h2>इंडी डेवलपर्स के लिए एक तेज़ विकल्प</h2>
      <p>
        यदि आप साल में केवल एक या दो बार ही स्क्रीनशॉट बनाते हैं, तो Figma काफी हो सकता है। यदि आप अक्सर शिप करते हैं, कई भाषाओं का समर्थन करते हैं, या ऐप स्टोर और Google Play स्क्रीनशॉट को एक साथ बनाए रखते हैं, तो आज़माएं{" "}
        <a href="/">Screenshot Bro</a>।
      </p>
      <p>
        Screenshot Bro स्टोर स्क्रीनशॉट डिजाइन करने, स्थानीयकृत करने, निर्यात करने और अपलोड करने के लिए एक मूल macOS ऐप है। यह आपको डिवाइस पंक्तियाँ, पुन: प्रयोज्य टेम्पलेट, अंतर्निहित स्थानीयकरण, बैच निर्यात और{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          ऐप स्टोर कनेक्ट अपलोड
        </a>{" "}
        सुविधा प्रदान करता है बिना फिग्मा में उत्पादन प्रणाली को फिर से बनाए। आप यह देखने के लिए{" "}
        <a href="/#features">सुविधा अवलोकन</a> भी देख सकते हैं कि यह वर्कफ़्लो एक सामान्य डिज़ाइन फ़ाइल से कैसे भिन्न है।
      </p>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        Figma est une solution solide pour concevoir des captures d&apos;écran de l&apos;App Store si vous souhaitez
        un contrôle total de la mise en page. Vous pouvez créer vos propres cadres d&apos;appareils,
        typographies, dégradés, composants, préréglages d&apos;exportation et variantes localisées.
        La contrepartie est que Figma ne connaît pas grand-chose d&apos;App Store Connect ou de Google Play.
        Vous devez créer le système de production vous-même.
      </p>
      <p>
        Ce tutoriel explique comment concevoir des captures d&apos;écran d&apos;App Store dans Figma sans laisser le fichier se transformer en une pile de cadres dupliqués. Il fonctionne pour les captures d&apos;écran iOS, iPadOS, macOS et Android, et il est particulièrement utile si vous hésitez encore à savoir si Figma suffit ou si vous avez besoin d&apos;un{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          outil de captures d&apos;écran d&apos;App Store
        </a>{" "}
        dédié.
      </p>

      <h2>1. Commencez par les tailles imposées par les stores</h2>
      <p>
        Ne commencez pas avec un cadre de présentation aléatoire. Partez des tailles en pixels réellement acceptées par les boutiques. Apple et Google peuvent rejeter des captures d&apos;écran qui ne correspondent pas à leurs règles de dimension, de format ou de ratio d&apos;aspect.
      </p>
      <p>
        Pour les captures d&apos;écran iPhone actuelles, une taille principale sûre pour l&apos;App Store est de <strong>1320 x 2868</strong> pour les appareils de 6,9 pouces. Pour l&apos;iPad, les tailles courantes incluent <strong>2064 x 2752</strong> pour l&apos;iPad 13&quot; et <strong>1668 x 2388</strong> pour l&apos;iPad 11&quot;. Google Play est plus flexible, mais les captures d&apos;écran doivent tout de même respecter les règles de longueur de côté et de ratio d&apos;aspect de Google.
      </p>
      <p>
        Références utiles :
      </p>
      <ul>
        <li>
          <a href="/blog/screenshot-sizes-app-store-google-play">
            Tailles de captures pour l&apos;App Store et Google Play
          </a>
        </li>
        <li>
          <a
            href="https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spécifications des captures d&apos;écran Apple
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/googleplay/android-developer/answer/9866151"
            target="_blank"
            rel="noopener noreferrer"
          >
            Exigences relatives aux éléments de prévisualisation Google Play
          </a>
        </li>
      </ul>

      <h2>2. Créez une page Figma par type d&apos;écran</h2>
      <p>
        Restez simple et prévisible. Une structure claire est bien plus précieuse qu&apos;une organisation trop complexe :
      </p>
      <ul>
        <li>
          <strong>01 - iPhone 6.9</strong> pour les captures d&apos;écran principales de l&apos;App Store sur téléphone.
        </li>
        <li>
          <strong>02 - iPad 13</strong> pour les captures d&apos;écran iPad.
        </li>
        <li>
          <strong>03 - Google Play Phone</strong> pour les captures d&apos;écran de téléphones Android.
        </li>
        <li>
          <strong>04 - Components</strong> pour les styles partagés, les cadres d&apos;appareils, les badges et les blocs de texte.
        </li>
        <li>
          <strong>05 - Archive</strong> pour les anciennes captures d&apos;écran dont vous pourriez avoir besoin plus tard.
        </li>
      </ul>
      <p>
        Dans chaque page, créez un cadre (frame) pour chaque emplacement de capture d&apos;écran :
        <code>01 - Main Benefit</code>, <code>02 - Feature Detail</code>,
        <code>03 - Social Proof</code>, etc. Conservez le préfixe numérique dans le nom du cadre, car cela facilitera le tri des exportations Figma.
      </p>

      <h2>3. Créez un composant de capture d&apos;écran réutilisable</h2>
      <p>
        La plus grande erreur est de concevoir chaque capture d&apos;écran sur un plan de travail (artboard) unique. Cela fonctionne pour une version, puis tout s&apos;effondre dès que vous mettez à jour l&apos;application, ajoutez une langue ou modifiez le style d&apos;arrière-plan.
      </p>
      <p>
        Créez plutôt une structure de capture d&apos;écran réutilisable :
      </p>
      <ul>
        <li>
          Un calque d&apos;arrière-plan avec votre traitement de couleur, dégradé ou image.
        </li>
        <li>Un bloc de texte de titre avec des styles de typographie partagés.</li>
        <li>Un bloc de sous-titre facultatif.</li>
        <li>Un composant de cadre d&apos;appareil.</li>
        <li>Un calque de capture d&apos;écran masqué à l&apos;intérieur du cadre de l&apos;appareil.</li>
        <li>Des badges, flèches, légendes ou étiquettes de fonctionnalités optionnels.</li>
      </ul>
      <p>
        Utilisez les composants Figma pour les éléments récurrents tels que les cadres d&apos;appareils, les badges et les étiquettes de légende. Utilisez l&apos;Auto Layout aux endroits où le contenu doit s&apos;adapter, en particulier pour les groupes de texte dont la longueur peut varier lors de la localisation.
      </p>
      <p>
        Références Figma :{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-component-properties"
          target="_blank"
          rel="noopener noreferrer"
        >
          propriétés des composants
        </a>
        ,{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants"
          target="_blank"
          rel="noopener noreferrer"
        >
          variantes
        </a>{" "}
        et{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout"
          target="_blank"
          rel="noopener noreferrer"
        >
          Auto Layout
        </a>
        .
      </p>

      <h2>4. Concevez la première capture du point de vue d&apos;un visiteur</h2>
      <p>
        Votre première capture d&apos;écran doit répondre à une seule question : pourquoi devrais-je m&apos;intéresser à cette application ? Évitez d&apos;utiliser le premier emplacement pour un écran de paramètres, un écran de bienvenue (onboarding) ou une liste floue de fonctionnalités.
      </p>
      <p>
        Une formule pratique :
      </p>
      <ul>
        <li>
          <strong>Titre :</strong> 4 à 8 mots qui décrivent le bénéfice ou le résultat.
        </li>
        <li>
          <strong>Capture d&apos;écran de l&apos;appareil :</strong> montrez l&apos;application en action, pas un écran vide.
        </li>
        <li>
          <strong>Visuel d&apos;appui :</strong> un badge, un graphique ou une légende si cela clarifie la valeur.
        </li>
        <li>
          <strong>Arrière-plan :</strong> aux couleurs de la marque, simple et cohérent sur toute la série.
        </li>
      </ul>
      <p>
        Gardez le texte suffisamment grand pour qu&apos;il soit lisible dans les résultats de recherche de l&apos;App Store et les aperçus des pages produit. Si le texte n&apos;est lisible que lorsque le canevas Figma est zoomé, c&apos;est qu&apos;il est probablement trop petit.
      </p>

      <h2>5. Déclinez une mise en page en une série complète</h2>
      <p>
        Une fois que la première capture d&apos;écran est prête, dupliquez le cadre pour chaque emplacement et changez un message à la fois. Voici un enchaînement classique de sept captures d&apos;écran :
      </p>
      <ol>
        <li>Bénéfice principal.</li>
        <li>Flux de travail de base.</li>
        <li>Fonctionnalité qui différencie l&apos;application.</li>
        <li>Personnalisation ou paramètres.</li>
        <li>Confiance, confidentialité, synchronisation ou intégrations.</li>
        <li>Cas d&apos;usage secondaire.</li>
        <li>Raison finale de télécharger.</li>
      </ol>
      <p>
        Conservez la même position pour l&apos;appareil, le titre et l&apos;arrière-plan, à moins d&apos;avoir une raison bien précise d&apos;en changer. La série doit être perçue comme une seule histoire de produit, et non comme sept publicités distinctes.
      </p>

      <h2>6. Anticipez la localisation avant de traduire</h2>
      <p>
        La localisation est l&apos;étape où la gestion des captures d&apos;écran sur Figma peut devenir un calvaire. Si vous dupliquez chaque plan de travail pour chaque langue, la moindre modification esthétique se traduit par des dizaines de retouches manuelles.
      </p>
      <p>
        Pour rendre la localisation moins fastidieuse :
      </p>
      <ul>
        <li>
          Conservez le texte dans des calques bien identifiés : <code>Headline</code>,{" "}
          <code>Subheadline</code>, <code>Badge</code>.
        </li>
        <li>
          Utilisez l&apos;Auto Layout pour les conteneurs de texte qui doivent s&apos;étirer.
        </li>
        <li>
          Évitez les retours à la ligne forcés, sauf si la phrase est définitive.
        </li>
        <li>
          Laissez de la largeur supplémentaire pour l&apos;allemand, le français, l&apos;espagnol et les autres langues aux formulations plus longues.
        </li>
        <li>
          Attendez que la version de base en anglais soit parfaitement stable avant de créer une page ou une section distincte par langue.
        </li>
      </ul>
      <p>
        Si vous devez gérer de nombreuses langues, c&apos;est à ce moment précis que Figma montre ses limites en termes de productivité. C&apos;est faisable, mais cela demande une rigueur de fer : conventions de nommage, composants, préréglages d&apos;exportation et checklist de vérification à chaque version. Si la traduction de vos visuels est une tâche récurrente, comparez ce processus manuel à un flux de travail de{" "}
        <a href="/docs/help#localization">localisation de captures d&apos;écran</a> dédié.
      </p>

      <h2>7. Configurez des profils d&apos;exportation</h2>
      <p>
        Figma vous permet d&apos;exporter les calques et cadres sélectionnés dans les formats d&apos;image courants. Pour les captures d&apos;écran destinées aux stores, exportez les cadres principaux (top-level) et non les groupes imbriqués.
      </p>
      <p>
        Configuration d&apos;exportation recommandée :
      </p>
      <ul>
        <li>
          Réglez chaque cadre de capture d&apos;écran sur les dimensions exactes en pixels requises par le store.
        </li>
        <li>
          Ajoutez un paramètre d&apos;exportation au format PNG pour chaque cadre final.
        </li>
        <li>
          Nommez vos cadres avec un préfixe numéroté à deux chiffres : <code>01</code>,{" "}
          <code>02</code>, <code>03</code>.
        </li>
        <li>
          Exportez une seule gamme d&apos;appareils à la fois pour éviter de mélanger les fichiers.
        </li>
        <li>
          Vérifiez les fichiers PNG exportés dans le Finder avant de les mettre en ligne.
        </li>
      </ul>
      <p>
        Le fonctionnement de l&apos;exportation dans Figma est détaillé dans son{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design"
          target="_blank"
          rel="noopener noreferrer"
        >
          guide d&apos;exportation
        </a>
        . La règle d&apos;or pour la mise en production est simple : App Store Connect et Google Play ne s&apos;intéressent qu&apos;au fichier final, et non à l&apos;organisation interne de votre document Figma.
      </p>

      <h2>8. Soyez méticuleux lors de la mise en ligne</h2>
      <p>
        Avant d&apos;importer vos captures, vérifiez ces quatre points :
      </p>
      <ul>
        <li>Les dimensions des fichiers correspondent bien à l&apos;emplacement cible.</li>
        <li>Les fichiers sont classés dans le bon ordre.</li>
        <li>Les captures d&apos;écran correspondent à la bonne langue.</li>
        <li>Aucun fond transparent ou problème de recadrage accidentel ne s&apos;est glissé dans la version finale.</li>
      </ul>
      <p>
        Concernant plus spécifiquement App Store Connect, chaque langue possède sa propre série de captures d&apos;écran. Si vous exportez vos visuels en anglais, allemand, espagnol et français depuis Figma, séparez ces répertoires et importez-les langue par langue. Pour un guide plus complet, lisez{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          Comment envoyer des captures d&apos;écran vers App Store Connect
        </a>
        .
      </p>

      <h2>Dans quels cas Figma est-il performant ?</h2>
      <p>
        Figma est idéal si vous avez besoin de mises en page sur mesure, si vous travaillez déjà avec un designer et si vos captures d&apos;écran ne changent pas toutes les semaines. Il vous offre un contrôle absolu sur la composition, la typographie, les éléments de marque et la finition visuelle.
      </p>

      <h2>Dans quels cas Figma devient-il contraignant ?</h2>
      <p>
        Figma complique la tâche dès lors que les captures d&apos;écran font partie intégrante de votre cycle de déploiement régulier. Les inconvénients les plus fréquents sont :
      </p>
      <ul>
        <li>Des cadres dupliqués pour chaque taille d&apos;écran d&apos;appareil.</li>
        <li>Des cadres dupliqués pour chaque langue.</li>
        <li>Le remplacement manuel des captures d&apos;écran issues de simulateurs.</li>
        <li>L&apos;exportation manuelle et la gestion fastidieuse des dossiers.</li>
        <li>Des mises en page qui se déforment facilement lorsque les traductions s&apos;allongent.</li>
        <li>L&apos;absence de passerelle native pour envoyer les visuels vers App Store Connect.</li>
      </ul>
      <p>
        Cela ne signifie pas pour autant que Figma est un mauvais outil. C&apos;est simplement un outil de conception généraliste, et non une solution dédiée à la création et à l&apos;envoi de captures d&apos;écran pour l&apos;App Store.
      </p>

      <h2>Une alternative plus rapide pour les développeurs indépendants</h2>
      <p>
        Si vous ne créez des captures d&apos;écran qu&apos;une ou deux fois par an, Figma peut suffire. Mais si vous publiez fréquemment des mises à jour, si vous gérez plusieurs langues ou si vous devez maintenir simultanément des captures pour l&apos;App Store et Google Play, essayez{" "}
        <a href="/">Screenshot Bro</a>.
      </p>
      <p>
        Screenshot Bro est une application macOS native pour concevoir, localiser, exporter et mettre en ligne les captures d&apos;écran de vos fiches de store. Elle vous propose des rangées d&apos;appareils, des modèles réutilisables, une localisation intégrée, l&apos;exportation par lots et le{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          transfert vers App Store Connect
        </a>{" "}
        sans avoir à réinventer un système complexe dans Figma. Vous pouvez également parcourir la{" "}
        <a href="/#features">présentation des fonctionnalités</a> pour découvrir en quoi ce flux de travail se distingue d&apos;un simple fichier de conception.
      </p>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        يعد Figma خيارًا قويًا لتصميم لقطات شاشة App Store إذا كنت تريد التحكم الكامل في التخطيط. يمكنك بناء إطارات الأجهزة الخاصة بك، والخطوط، والتدرجات، والمكونات، والإعدادات المسبقة للتصدير، والمتغيرات المحلية. المفاضلة هي أن Figma لا يعرف الكثير عن App Store Connect أو Google Play. عليك إنشاء نظام الإنتاج بنفسك.
      </p>
      <p>
        يشرح هذا البرنامج التعليمي كيفية تصميم لقطات شاشة متجر التطبيقات في Figma دون السماح للملف بالتحول إلى كومة من الإطارات المكررة. وهو يعمل مع لقطات شاشة iOS وiPadOS وmacOS وAndroid، وهو مفيد بشكل خاص إذا كنت لا تزال تقرر ما إذا كان Figma كافيًا أم أنك بحاجة إلى{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          أداة لقطات شاشة مخصصة لمتجر التطبيقات
        </a>
        .
      </p>

      <h2>1. ابدأ بمقاسات المتجر</h2>
      <p>
        لا تبدأ بإطار عرض عشوائي. ابدأ بمقاسات البكسل التي تقبلها المتاجر بالفعل. يمكن لـ Apple وGoogle رفض لقطات الشاشة التي لا تتطابق مع قواعد الأبعاد أو التنسيق أو نسبة العرض إلى الارتفاع الخاصة بهما.
      </p>
      <p>
        بالنسبة للقطات شاشة iPhone الحالية، فإن المقاس الآمن الأساسي لمتجر التطبيقات هو <strong>1320 x 2868</strong> للأجهزة بمقاس 6.9&quot; بوصات. بالنسبة لجهاز iPad، تشمل المقاسات الشائعة <strong>2064 x 2752</strong> لجهاز iPad مقاس 13&quot; بوصة و<strong>1668 x 2388</strong> لجهاز iPad مقاس 11&quot; بوصة. يعد Google Play أكثر مرونة، ولكن لقطات الشاشة لا تزال بحاجة إلى التوافق مع قواعد طول الجانب ونسبة العرض إلى الارتفاع الخاصة بـ Google.
      </p>
      <p>
        مراجع مفيدة:
      </p>
      <ul>
        <li>
          <a href="/blog/screenshot-sizes-app-store-google-play">
            مقاسات لقطات الشاشة لـ App Store وGoogle Play
          </a>
        </li>
        <li>
          <a
            href="https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications"
            target="_blank"
            rel="noopener noreferrer"
          >
            مواصفات لقطات شاشة Apple
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/googleplay/android-developer/answer/9866151"
            target="_blank"
            rel="noopener noreferrer"
          >
            متطلبات أصول المعاينة في Google Play
          </a>
        </li>
      </ul>

      <h2>2. أنشئ صفحة Figma واحدة لكل نوع من لقطات الشاشة</h2>
      <p>
        حافظ على ملفك بسيطًا وقابلاً للتنبؤ. الهيكل النظيف أكثر قيمة من الهيكل الذكي:
      </p>
      <ul>
        <li>
          <strong>01 - iPhone 6.9</strong> للقطات شاشة الهاتف الرئيسية لـ App Store.
        </li>
        <li>
          <strong>02 - iPad 13</strong> للقطات شاشة iPad.
        </li>
        <li>
          <strong>03 - Google Play Phone</strong> للقطات شاشة هواتف Android.
        </li>
        <li>
          <strong>04 - Components</strong> للأنماط المشتركة وإطارات الأجهزة والشارات ونصوص النسخ.
        </li>
        <li>
          <strong>05 - Archive</strong> للقطات الشاشة القديمة التي قد تحتاجها لاحقًا.
        </li>
      </ul>
      <p>
        داخل كل صفحة، أنشئ إطارًا واحدًا لكل موضع لقطة شاشة:
        <code>01 - Main Benefit</code>، و <code>02 - Feature Detail</code>،
        و <code>03 - Social Proof</code>، وهكذا. احتفظ بالبادئة الرقمية في اسم الإطار لأن تصدير Figma سيكون أسهل في الفرز.
      </p>

      <h2>3. قم ببناء مكون لقطة شاشة قابل لإعادة الاستخدام</h2>
      <p>
        أكبر خطأ هو تصميم كل لقطة شاشة كلوحة عمل (artboard) فريدة. هذا ينجح في إصدار واحد، ثم يتعطل بمجرد تحديث التطبيق، أو إضافة لغة، أو تغيير نمط الخلفية.
      </p>
      <p>
        بدلاً من ذلك، قم ببناء هيكل لقطة شاشة قابل لإعادة الاستخدام:
      </p>
      <ul>
        <li>
          طبقة خلفية مع معالجة الألوان أو التدرج اللوني أو الصورة الخاصة بك.
        </li>
        <li>كتلة نص العنوان الرئيسي مع أنماط خطوط مشتركة.</li>
        <li>كتلة عنوان فرعي اختيارية.</li>
        <li>مكون إطار الجهاز.</li>
        <li>طبقة لقطة شاشة مقنعة داخل إطار الجهاز.</li>
        <li>شارات أو أسهم أو وسائل شرح أو تسميات ميزات اختيارية.</li>
      </ul>
      <p>
        استخدم مكونات Figma للأجزاء المتكررة مثل إطارات الأجهزة والشارات وتسميات الشرح. استخدم التخطيط التلقائي (Auto Layout) حيث يجب إعادة تدفق المحتوى، خاصةً لمجموعات النصوص التي قد يتغير طولها أثناء التوطين.
      </p>
      <p>
        مراجع Figma:{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-component-properties"
          target="_blank"
          rel="noopener noreferrer"
        >
          خصائص المكونات
        </a>
        ، و{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants"
          target="_blank"
          rel="noopener noreferrer"
        >
          المتغيرات
        </a>
        ، و{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout"
          target="_blank"
          rel="noopener noreferrer"
        >
          التخطيط التلقائي
        </a>
        .
      </p>

      <h2>4. صمم لقطة الشاشة الأولى كأنك زائر للمتجر</h2>
      <p>
        يجب أن تجيب لقطة شاشتك الأولى عن سؤال واحد: لماذا يجب أن يهتم الشخص بهذا التطبيق؟ تجنب استخدام الموضع الأول لشاشة الإعدادات، أو شاشة التهيئة (onboarding)، أو قائمة ميزات غامضة.
      </p>
      <p>
        صيغة عملية:
      </p>
      <ul>
        <li>
          <strong>العنوان الرئيسي:</strong> من 4 إلى 8 كلمات تحدد النتيجة.
        </li>
        <li>
          <strong>لقطة شاشة الجهاز:</strong> اعرض التطبيق وهو يؤدي المهمة، وليس في حالة فارغة.
        </li>
        <li>
          <strong>العنصر البصري الداعم:</strong> شارة واحدة، أو رسم بياني، أو وسيلة شرح إذا كانت توضح القيمة.
        </li>
        <li>
          <strong>الخلفية:</strong> متوافقة مع الهوية التجارية، وبسيطة، ومتسقة عبر المجموعة بأكملها.
        </li>
      </ul>
      <p>
        حافظ على النص كبيرًا بما يكفي ليتم قراءته في نتائج بحث App Store ومعاينات صفحة المنتج. إذا كان النص يظهر فقط عندما يكون قماش Figma مكبرًا، فمن المحتمل أنه صغير جدًا.
      </p>

      <h2>5. حول التخطيط الواحد إلى مجموعة متكاملة</h2>
      <p>
        بمجرد أن تعمل لقطة الشاشة الأولى بشكل جيد، كرر الإطار لكل موضع في المتجر وغير رسالة واحدة في كل مرة. تسلسل شائع من سبع لقطات شاشة:
      </p>
      <ol>
        <li>النتيجة الرئيسية.</li>
        <li>سير العمل الأساسي.</li>
        <li>الميزة التي تميز التطبيق عن غيره.</li>
        <li>التخصيص أو الإعدادات.</li>
        <li>الثقة أو الخصوصية أو المزامنة أو التكاملات.</li>
        <li>حالة استخدام ثانوية.</li>
        <li>السبب النهائي للتنزيل.</li>
      </ol>
      <p>
        حافظ على موضع الجهاز وموضع العنوان الرئيسي ومعالجة الخلفية بشكل متسق ما لم يكن لديك سبب متعمد لتغييرها. يجب أن تبدو المجموعة وكأنها قصة منتج واحد، وليست سبعة إعلانات منفصلة.
      </p>

      <h2>6. استعد للتوطين قبل البدء في الترجمة</h2>
      <p>
        التوطين هو النقطة التي تصبح فيها العديد من ملفات لقطات شاشة Figma متعبة. إذا قمت بتكرار كل لوحة عمل لكل لغة، فإن أي تغيير بسيط في التصميم سيتحول إلى عشرات التعديلات اليدوية.
      </p>
      <p>
        لجعل عملية التوطين أقل عرضة للأخطاء:
      </p>
      <ul>
        <li>
          حافظ على النصوص في طبقات يمكن التنبؤ بها: <code>Headline</code>، و{" "}
          <code>Subheadline</code>، و <code>Badge</code>.
        </li>
        <li>
          استخدم التخطيط التلقائي (Auto Layout) لحاويات النصوص التي تحتاج إلى التمدد.
        </li>
        <li>
          تجنب فواصل السطور الإجبارية ما لم تكن العبارة نهائية.
        </li>
        <li>
          اترك عرضًا إضافيًا للغات الألمانية والفرنسية والإسبانية وغيرها من الترجمات الطويلة.
        </li>
        <li>
          أنشئ صفحة أو قسمًا منفصلاً لكل لغة فقط بعد استقرار التخطيط الإنجليزي الأساسي.
        </li>
      </ul>
      <p>
        إذا كنت تدعم العديد من اللغات، فهذه هي النقطة التي غالبًا ما يصبح فيها Figma عنق زجاجة في الإنتاج. لا يزال بإمكانك القيام بذلك، لكنك تحتاج إلى الانضباط: التسمية، والمكونات، والإعدادات المسبقة للتصدير، وقائمة مرجعية لكل إصدار. إذا كان التوطين وظيفة متكررة، فقارن هذا الإعداد اليدوي بسير عمل{" "}
        <a href="/docs/help#localization">توطين لقطات شاشة مخصص</a>.
      </p>

      <h2>7. إعداد الإعدادات المسبقة للتصدير</h2>
      <p>
        يتيح لك Figma تصدير الطبقات والإطارات المحددة بتنسيقات صور شائعة. بالنسبة للقطات شاشة المتجر، قم بتصدير الإطارات النهائية ذات المستوى الأعلى، وليس المجموعات المتداخلة.
      </p>
      <p>
        إعداد التصدير الموصى به:
      </p>
      <ul>
        <li>
          اضبط كل إطار لقطة شاشة على أبعاد بكسل المتجر الدقيقة.
        </li>
        <li>
          أضف إعداد تصدير PNG لكل إطار نهائي.
        </li>
        <li>
          سمِّ الإطارات ببادئة تحتوي على أصفار: <code>01</code>، و{" "}
          <code>02</code>، و <code>03</code>.
        </li>
        <li>
          قم بتصدير عائلة أجهزة واحدة في كل مرة حتى لا تختلط الملفات.
        </li>
        <li>
          راجع صور PNG المصدرة في Finder قبل رفعها.
        </li>
      </ul>
      <p>
        تم توثيق سلوك التصدير في Figma في{" "}
        <a
          href="https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design"
          target="_blank"
          rel="noopener noreferrer"
        >
          دليل التصدير
        </a>
        . قاعدة الإنتاج المهمة بسيطة: يهتم App Store Connect وGoogle Play بالملف النهائي، وليس بمدى نظافة ملف Figma الخاص بك.
      </p>

      <h2>8. ارفع اللقطات بحذر</h2>
      <p>
        قبل الرفع، تحقق من أربعة أشياء:
      </p>
      <ul>
        <li>أبعاد الملف تطابق موضع المتجر المستهدف.</li>
        <li>الملفات مرتبة بشكل صحيح.</li>
        <li>لقطات الشاشة باللغة الصحيحة.</li>
        <li>لم يتم تمرير خلفيات شفافة أو مشكلات قص غير مقصودة.</li>
      </ul>
      <p>
        بالنسبة لـ App Store Connect على وجه التحديد، فإن كل لغة لها مجموعة لقطات الشاشة الخاصة بها. إذا قمت بتصدير الإنجليزية والألمانية والإسبانية والفرنسية من Figma، فاحتفظ بتلك المجلدات منفصلة وارفعها لغة تلو الأخرى. لمزيد من التفاصيل، اقرأ{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          كيفية رفع لقطات الشاشة إلى App Store Connect
        </a>
        .
      </p>

      <h2>أين يعمل Figma بشكل جيد</h2>
      <p>
        يعد Figma خيارًا جيدًا عندما تحتاج إلى تخطيطات مخصصة، ويكون المصمم مشاركًا بالفعل، ولا تتغير مجموعة لقطات الشاشة الخاصة بك كل أسبوع. يمنحك التحكم الكامل في التكوين والخطوط وأنظمة الهوية البصرية واللمسات الجمالية.
      </p>

      <h2>أين يصبح Figma متعبًا</h2>
      <p>
        يصبح Figma أكثر صعوبة عندما تكون لقطات الشاشة جزءًا من عملية الإصدار المنتظمة. نقاط الألم الشائعة:
      </p>
      <ul>
        <li>إطارات مكررة لكل مقاس جهاز.</li>
        <li>إطارات مكررة لكل لغة.</li>
        <li>الاستبدال اليدوي للقطات شاشة المحاكي.</li>
        <li>التصدير اليدوي وتنظيم المجلدات.</li>
        <li>تخطيطات سهلة التعطل عندما تصبح النصوص المترجمة أطول.</li>
        <li>لا يوجد سير عمل رفع أصلي لـ App Store Connect.</li>
      </ul>
      <p>
        لا شيء من هذا يجعل Figma أداة سيئة. هذا يعني فقط أن Figma أداة تصميم عامة، وليس سير عمل مخصصًا للقطات شاشة App Store.
      </p>

      <h2>بديل أسرع للمطورين المستقلين</h2>
      <p>
        إذا كنت تقوم بإنشاء لقطات شاشة مرة أو مرتين فقط في السنة، فقد يكون Figma كافيًا. ولكن إذا كنت تشحن التحديثات كثيرًا، أو تدعم لغات متعددة، أو تدير لقطات شاشة App Store وGoogle Play معًا، فجرب{" "}
        <a href="/">Screenshot Bro</a>.
      </p>
      <p>
        تطبيق Screenshot Bro هو تطبيق macOS أصيل لتصميم لقطات شاشة المتاجر وتوطينها وتصديرها ورفعها. يوفر لك صفوف أجهزة، وقوالب قابلة لإعادة الاستخدام، وتوطينًا مدمجًا، وتصديرًا دفعيًا، و{" "}
        <a href="/blog/upload-screenshots-to-app-store-connect">
          رفعًا إلى App Store Connect
        </a>{" "}
        دون إعادة بناء نظام إنتاج في Figma. يمكنك أيضًا إلقاء نظرة سريعة على{" "}
        <a href="/#features">نظرة عامة على الميزات</a> لمعرفة كيف يختلف سير العمل هذا عن ملف تصميم عام.
      </p>
    </>
  );
}
