import type { Route } from "./+types/blog.screenshot-sizes-app-store-google-play";
import { ContentLayout } from "~/components/ContentLayout";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import { data, useLoaderData } from "react-router";
import { isLocaleCode, type LocaleCode } from "~/config/localization";

const SLUG = "screenshot-sizes-app-store-google-play";

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
      return "Una sola aplicación de Mac para capturas de App Store y Google Play.";
    case "zh":
      return "一款适用于 App Store 和 Google Play 截图的 Mac 应用。";
    case "hi":
      return "ऐप स्टोर और गूगल प्ले स्क्रीनशॉट के लिए एक मैक ऐप।";
    case "fr":
      return "Une seule application Mac pour les captures d'écran App Store et Google Play.";
    case "ar":
      return "تطبيق Mac واحد للقطات شاشة App Store و Google Play.";
    default:
      return "One Mac app for App Store and Google Play screenshots.";
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
        Apple App Store Connect and Google Play Console both reject uploads
        that do not match their accepted dimensions, aspect ratios, and file
        formats. The two stores use completely different rules — Apple pins
        screenshots to specific pixel sizes per device class, while Google
        accepts a range of sizes constrained by aspect ratio. This is the
        full reference for both, current as of April 2026.
      </p>

      <h2>Apple App Store</h2>
      <p>
        Apple groups screenshots by <strong>device family</strong> (iPhone,
        iPad, Mac, Apple Watch, Apple TV, Apple Vision Pro). Each family
        requires screenshots when your app supports that platform. For
        iPhone and iPad, App Store Connect can scale higher-resolution
        screenshots down for older displays when you do not provide custom
        assets for every size.
      </p>
      <p>
        Screenshots must be JPEG, JPG, or PNG. You can upload{" "}
        <strong>1 to 10</strong> screenshots per device family per
        localization.
      </p>

      <h3>iPhone</h3>
      <table>
        <thead>
          <tr>
            <th>Display</th>
            <th>Pixels (Portrait)</th>
            <th>Devices</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              6.9" <em>(required)</em>
            </td>
            <td>1260 x 2736, 1290 x 2796, or 1320 x 2868</td>
            <td>
              iPhone Air, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5"</td>
            <td>1284 x 2778 or 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3"</td>
            <td>1206 x 2622 or 1179 x 2556</td>
            <td>iPhone 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1"</td>
            <td>1170 x 2532, 1125 x 2436, or 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5" (legacy)</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        For current iPhone apps, the 6.9" set is the primary required set.
        The 6.5" set is required only if your app runs on iPhone and you do
        not provide 6.9" screenshots. Landscape variants use the same
        dimensions rotated 90 degrees.
      </p>

      <h3>iPad</h3>
      <table>
        <thead>
          <tr>
            <th>Display</th>
            <th>Pixels (Portrait)</th>
            <th>Devices</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              13" <em>(required)</em>
            </td>
            <td>2064 x 2752 or 2048 x 2732</td>
            <td>
              iPad Pro 13" (M5/M4), iPad Pro 12.9" (3rd–6th gen), iPad Air
              13" (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11"</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388, or 1640 x 2360
            </td>
            <td>
              iPad Pro 11" (M5/M4 and 1st–4th gen), iPad Air 11"
              (M4/M3/M2), iPad Air (4th–5th gen), iPad (A16/10th gen), iPad
              mini (A17 Pro/6th gen)
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Mac</h3>
      <p>
        The Mac App Store accepts four resolutions, each at a 16:10 aspect
        ratio. Pick one and stay consistent across the whole set.
      </p>
      <ul>
        <li>
          <strong>1280 x 800</strong> (minimum)
        </li>
        <li>
          <strong>1440 x 900</strong>
        </li>
        <li>
          <strong>2560 x 1600</strong>
        </li>
        <li>
          <strong>2880 x 1800</strong> (largest accepted size)
        </li>
      </ul>

      <h3>Apple Watch</h3>
      <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>Pixels</th>
            <th>Devices</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>49mm Ultra 3</td>
            <td>422 x 514</td>
            <td>Apple Watch Ultra 3</td>
          </tr>
          <tr>
            <td>49mm Ultra</td>
            <td>410 x 502</td>
            <td>Apple Watch Ultra 2, Ultra</td>
          </tr>
          <tr>
            <td>46mm</td>
            <td>416 x 496</td>
            <td>Series 11, Series 10</td>
          </tr>
          <tr>
            <td>45mm / 41mm</td>
            <td>396 x 484</td>
            <td>Series 9, 8, 7</td>
          </tr>
          <tr>
            <td>44mm / 40mm</td>
            <td>368 x 448</td>
            <td>Series 6, 5, 4, SE 3, SE</td>
          </tr>
          <tr>
            <td>42mm / 38mm</td>
            <td>312 x 390</td>
            <td>Series 3</td>
          </tr>
        </tbody>
      </table>

      <h3>Apple TV and Vision Pro</h3>
      <ul>
        <li>
          <strong>Apple TV:</strong> 3840 x 2160 (4K) or 1920 x 1080 (HD).
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h3>App Previews (video)</h3>
      <p>
        Optional, up to 3 per device family, 15 - 30 seconds, M4V / MP4 /
        MOV. App previews have their own accepted video resolutions, so do
        not assume the screenshot pixel dimensions are valid for preview
        videos.
      </p>

      <h2>Google Play</h2>
      <p>
        Google Play takes a different approach: instead of rigid pixel
        dimensions, it accepts any size that satisfies its{" "}
        <strong>aspect ratio and side-length rules</strong>. Files must be
        JPEG or 24-bit PNG with no alpha channel.
      </p>

      <h3>Phone screenshots</h3>
      <ul>
        <li>
          Google requires at least <strong>2 screenshots overall</strong> to
          publish a store listing, and you can add up to{" "}
          <strong>8 screenshots per supported device type</strong>.
        </li>
        <li>
          Each side must be between <strong>320 px and 3840 px</strong>.
        </li>
        <li>
          The longest side cannot be more than{" "}
          <strong>twice the length</strong> of the shortest side (so the
          aspect ratio sits between 1:2 and 2:1).
        </li>
        <li>
          Recommended: <strong>1080 x 1920</strong> (portrait) or{" "}
          <strong>1920 x 1080</strong> (landscape).
        </li>
      </ul>

      <h3>Tablet screenshots</h3>
      <p>
        Google has a separate large-screen screenshot section for tablets
        and Chromebooks. Add at least 4 screenshots for these surfaces, use
        sides between <strong>1080 px and 7680 px</strong>, and keep them at
        16:9 landscape or 9:16 portrait.
      </p>
      <ul>
        <li>
          <strong>7-inch tablet:</strong> recommended{" "}
          <strong>1200 x 1920</strong>.
        </li>
        <li>
          <strong>10-inch tablet:</strong> recommended{" "}
          <strong>1600 x 2560</strong>.
        </li>
      </ul>

      <h3>Wear OS, Android TV, Chromebook, Auto, XR</h3>
      <ul>
        <li>
          <strong>Wear OS:</strong> 384 x 384 px (square, 1:1).
        </li>
        <li>
          <strong>Android TV:</strong> 1920 x 1080 px (16:9 landscape only).
        </li>
        <li>
          <strong>Chromebook:</strong> aspect ratio of 16:9 or 9:16, sides
          between 1080 px and 7680 px.
        </li>
        <li>
          <strong>Android Automotive OS:</strong> 800 x 1280 portrait or
          1024 x 768 landscape; provide at least 2 of each if you provide
          Automotive screenshots.
        </li>
        <li>
          <strong>Android XR:</strong> 4 to 8 screenshots, 8:5 aspect ratio,
          recommended 3840 x 2400 and minimum 1920 x 1200.
        </li>
      </ul>

      <h3>Other Google Play assets</h3>
      <ul>
        <li>
          <strong>App icon:</strong> 512 x 512 px, 32-bit PNG with alpha.
        </li>
        <li>
          <strong>Feature graphic:</strong> 1024 x 500 px, PNG or JPEG, no
          alpha. Required.
        </li>
        <li>
          <strong>Promo video:</strong> public YouTube URL (no upload).
        </li>
      </ul>

      <h2>Side-by-side cheat sheet</h2>
      <table>
        <thead>
          <tr>
            <th>Surface</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phone</td>
            <td>1320 x 2868 (6.9")</td>
            <td>1080 x 1920 recommended</td>
          </tr>
          <tr>
            <td>Tablet (small)</td>
            <td>1668 x 2388 (11" iPad)</td>
            <td>1200 x 1920 (7-inch)</td>
          </tr>
          <tr>
            <td>Tablet (large)</td>
            <td>2064 x 2752 (13" iPad)</td>
            <td>1600 x 2560 (10-inch)</td>
          </tr>
          <tr>
            <td>Desktop</td>
            <td>2880 x 1800 (Mac)</td>
            <td>1920 x 1080 or 1080 x 1920 minimum (Chromebook)</td>
          </tr>
          <tr>
            <td>Wearable</td>
            <td>422 x 514 (Watch Ultra 3)</td>
            <td>384 x 384 (Wear OS)</td>
          </tr>
          <tr>
            <td>TV</td>
            <td>3840 x 2160</td>
            <td>1920 x 1080</td>
          </tr>
          <tr>
            <td>Min / max count</td>
            <td>1 - 10 per family</td>
            <td>2 total minimum; up to 8 per device type</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>JPEG, JPG, or PNG</td>
            <td>JPEG or 24-bit PNG, no alpha</td>
          </tr>
        </tbody>
      </table>

      <h2>Working tips</h2>
      <ul>
        <li>
          <strong>Design at the largest accepted size.</strong> 1320 x 2868
          for iPhone, 2064 x 2752 for iPad, 2880 x 1800 for Mac. Downscaling
          preserves quality better than upscaling.
        </li>
        <li>
          <strong>Pick one Mac resolution and lock it.</strong> Mixing 2880
          x 1800 and 1440 x 900 in the same set looks visibly inconsistent
          in App Store Connect previews.
        </li>
        <li>
          <strong>Watch the safe area.</strong> Store surfaces crop and
          arrange screenshots differently, so keep critical text away from
          the edges.
        </li>
        <li>
          <strong>Strip alpha for Google Play.</strong> Google rejects PNGs
          with an alpha channel. Export flat 24-bit PNGs.
        </li>
        <li>
          <strong>Reuse layouts across stores.</strong> A 9:19.5 iPhone
          screenshot is close enough to a 9:16 Android phone screenshot
          that the same composition usually works — just re-export at the
          target dimensions.
        </li>
      </ul>

      <h2>Where Screenshot Bro fits</h2>
      <p>
        Screenshot Bro keeps every device size in one project. Pick the
        rows you need (iPhone 6.9", iPad 13", MacBook, Android phone,
        tablet), design once, localize per locale, and batch export. The
        export folder is grouped by locale and row, so the App Store
        Connect upload and the Google Play Console upload pull from the
        same source of truth.
      </p>
    </>
  );
}

function ContentEs() {
  return (
    <>
      <p>
        Tanto Apple App Store Connect como Google Play Console rechazan las cargas que no coinciden con sus dimensiones, relaciones de aspecto y formatos de archivo aceptados. Las dos tiendas utilizan reglas completamente diferentes: Apple vincula las capturas a tamaños de píxeles específicos por clase de dispositivo, mientras que Google acepta una variedad de tamaños limitados por la relación de aspecto. Esta es la referencia completa para ambos, actualizada a abril de 2026.
      </p>

      <h2>Apple App Store</h2>
      <p>
        Apple agrupa las capturas de pantalla por <strong>familia de dispositivos</strong> (iPhone, iPad, Mac, Apple Watch, Apple TV, Apple Vision Pro). Cada familia requiere capturas de pantalla si tu aplicación es compatible con esa plataforma. Para iPhone e iPad, App Store Connect puede reducir las capturas de pantalla de mayor resolución para pantallas más antiguas cuando no proporcionas recursos personalizados para cada tamaño.
      </p>
      <p>
        Las capturas de pantalla deben estar en formato JPEG, JPG o PNG. Puedes subir de <strong>1 a 10</strong> capturas de pantalla por familia de dispositivos y por idioma.
      </p>

      <h3>iPhone</h3>
      <table>
        <thead>
          <tr>
            <th>Pantalla</th>
            <th>Píxeles (Vertical)</th>
            <th>Dispositivos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              6.9" <em>(requerido)</em>
            </td>
            <td>1260 x 2736, 1290 x 2796 o 1320 x 2868</td>
            <td>
              iPhone Air, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5"</td>
            <td>1284 x 2778 o 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3"</td>
            <td>1206 x 2622 o 1179 x 2556</td>
            <td>iPhone 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1"</td>
            <td>1170 x 2532, 1125 x 2436 o 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5" (antiguo)</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        Para las aplicaciones de iPhone actuales, el conjunto de 6.9" es el principal conjunto requerido. El conjunto de 6.5" es obligatorio solo si tu aplicación se ejecuta en iPhone y no proporcionas capturas de pantalla de 6.9". Las variantes horizontales utilizan las mismas dimensiones rotadas 90 grados.
      </p>

      <h3>iPad</h3>
      <table>
        <thead>
          <tr>
            <th>Pantalla</th>
            <th>Píxeles (Vertical)</th>
            <th>Dispositivos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              13" <em>(requerido)</em>
            </td>
            <td>2064 x 2752 o 2048 x 2732</td>
            <td>
              iPad Pro 13" (M5/M4), iPad Pro 12.9" (3rd–6th gen), iPad Air
              13" (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11"</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388 o 1640 x 2360
            </td>
            <td>
              iPad Pro 11" (M5/M4 and 1st–4th gen), iPad Air 11"
              (M4/M3/M2), iPad Air (4th–5th gen), iPad (A16/10th gen), iPad
              mini (A17 Pro/6th gen)
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Mac</h3>
      <p>
        La Mac App Store acepta cuatro resoluciones, cada una con una relación de aspecto de 16:10. Elige una y mantén la coherencia en todo el conjunto.
      </p>
      <ul>
        <li>
          <strong>1280 x 800</strong> (mínimo)
        </li>
        <li>
          <strong>1440 x 900</strong>
        </li>
        <li>
          <strong>2560 x 1600</strong>
        </li>
        <li>
          <strong>2880 x 1800</strong> (tamaño máximo aceptado)
        </li>
      </ul>

      <h3>Apple Watch</h3>
      <table>
        <thead>
          <tr>
            <th>Caja</th>
            <th>Píxeles</th>
            <th>Dispositivos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>49mm Ultra 3</td>
            <td>422 x 514</td>
            <td>Apple Watch Ultra 3</td>
          </tr>
          <tr>
            <td>49mm Ultra</td>
            <td>410 x 502</td>
            <td>Apple Watch Ultra 2, Ultra</td>
          </tr>
          <tr>
            <td>46mm</td>
            <td>416 x 496</td>
            <td>Series 11, Series 10</td>
          </tr>
          <tr>
            <td>45mm / 41mm</td>
            <td>396 x 484</td>
            <td>Series 9, 8, 7</td>
          </tr>
          <tr>
            <td>44mm / 40mm</td>
            <td>368 x 448</td>
            <td>Series 6, 5, 4, SE 3, SE</td>
          </tr>
          <tr>
            <td>42mm / 38mm</td>
            <td>312 x 390</td>
            <td>Series 3</td>
          </tr>
        </tbody>
      </table>

      <h3>Apple TV and Vision Pro</h3>
      <ul>
        <li>
          <strong>Apple TV:</strong> 3840 x 2160 (4K) o 1920 x 1080 (HD).
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h3>Vistas previas de la app (video)</h3>
      <p>
        Opcional, hasta 3 por familia de dispositivos, de 15 a 30 segundos, M4V / MP4 / MOV. Las vistas previas de la app tienen sus propias resoluciones de video aceptadas, así que no asumas que las dimensiones en píxeles de las capturas de pantalla son válidas para los videos de vista previa.
      </p>

      <h2>Google Play</h2>
      <p>
        Google Play adopta un enfoque diferente: en lugar de dimensiones de píxeles rígidas, acepta cualquier tamaño que cumpla con sus <strong>reglas de relación de aspecto y longitud de lado</strong>. Los archivos deben ser JPEG o PNG de 24 bits sin canal alfa.
      </p>

      <h3>Capturas de pantalla para teléfonos</h3>
      <ul>
        <li>
          Google requiere al menos <strong>2 capturas de pantalla en total</strong> para publicar una ficha de Play Store, y puedes añadir hasta <strong>8 capturas por tipo de dispositivo compatible</strong>.
        </li>
        <li>
          Cada lado debe medir entre <strong>320 px y 3840 px</strong>.
        </li>
        <li>
          El lado más largo no puede medir más del <strong>doble de la longitud</strong> del lado más corto (por lo que la relación de aspecto se sitúa entre 1:2 y 2:1).
        </li>
        <li>
          Recomendado: <strong>1080 x 1920</strong> (vertical) o <strong>1920 x 1080</strong> (horizontal).
        </li>
      </ul>

      <h3>Capturas de pantalla para tablets</h3>
      <p>
        Google tiene una sección de capturas de pantalla de pantalla grande separada para tablets y Chromebooks. Añade al menos 4 capturas de pantalla para estas pantallas, utiliza lados de entre <strong>1080 px y 7680 px</strong>, y mantenlas en 16:9 horizontal o 9:16 vertical.
      </p>
      <ul>
        <li>
          <strong>Tablet de 7 pulgadas:</strong> recomendado <strong>1200 x 1920</strong>.
        </li>
        <li>
          <strong>Tablet de 10 pulgadas:</strong> recomendado <strong>1600 x 2560</strong>.
        </li>
      </ul>

      <h3>Wear OS, Android TV, Chromebook, Auto, XR</h3>
      <ul>
        <li>
          <strong>Wear OS:</strong> 384 x 384 px (cuadrado, 1:1).
        </li>
        <li>
          <strong>Android TV:</strong> 1920 x 1080 px (solo 16:9 horizontal).
        </li>
        <li>
          <strong>Chromebook:</strong> relación de aspecto de 16:9 o 9:16, lados de entre 1080 px y 7680 px.
        </li>
        <li>
          <strong>Android Automotive OS:</strong> 800 x 1280 vertical o 1024 x 768 horizontal; proporciona al menos 2 de cada uno si incluyes capturas de pantalla de automoción.
        </li>
        <li>
          <strong>Android XR:</strong> de 4 a 8 capturas de pantalla, relación de aspecto 8:5, recomendado 3840 x 2400 y mínimo 1920 x 1200.
        </li>
      </ul>

      <h3>Otros recursos de Google Play</h3>
      <ul>
        <li>
          <strong>Icono de la app:</strong> 512 x 512 px, PNG de 32 bits con canal alfa.
        </li>
        <li>
          <strong>Gráfico de funciones:</strong> 1024 x 500 px, PNG o JPEG, sin canal alfa. Requerido.
        </li>
        <li>
          <strong>Video promocional:</strong> URL pública de YouTube (no se sube archivo).
        </li>
      </ul>

      <h2>Tabla comparativa de referencia rápida</h2>
      <table>
        <thead>
          <tr>
            <th>Plataforma</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teléfono</td>
            <td>1320 x 2868 (6.9")</td>
            <td>1080 x 1920 recomendado</td>
          </tr>
          <tr>
            <td>Tablet (pequeña)</td>
            <td>1668 x 2388 (iPad de 11")</td>
            <td>1200 x 1920 (7 pulgadas)</td>
          </tr>
          <tr>
            <td>Tablet (grande)</td>
            <td>2064 x 2752 (iPad de 13")</td>
            <td>1600 x 2560 (10 pulgadas)</td>
          </tr>
          <tr>
            <td>Escritorio</td>
            <td>2880 x 1800 (Mac)</td>
            <td>Mínimo de 1920 x 1080 o 1080 x 1920 (Chromebook)</td>
          </tr>
          <tr>
            <td>Wearable</td>
            <td>422 x 514 (Watch Ultra 3)</td>
            <td>384 x 384 (Wear OS)</td>
          </tr>
          <tr>
            <td>Televisión</td>
            <td>3840 x 2160</td>
            <td>1920 x 1080</td>
          </tr>
          <tr>
            <td>Cantidad mín. / máx.</td>
            <td>1 - 10 por familia</td>
            <td>Mínimo de 2 en total; hasta 8 por tipo de dispositivo</td>
          </tr>
          <tr>
            <td>Formato</td>
            <td>JPEG, JPG o PNG</td>
            <td>JPEG o PNG de 24 bits, sin alfa</td>
          </tr>
        </tbody>
      </table>

      <h2>Consejos prácticos</h2>
      <ul>
        <li>
          <strong>Diseña al tamaño máximo aceptado.</strong> 1320 x 2868 para iPhone, 2064 x 2752 para iPad, 2880 x 1800 para Mac. La reducción de escala conserva la calidad mejor que el aumento de escala.
        </li>
        <li>
          <strong>Elige una resolución de Mac y bloquéala.</strong> Mezclar 2880 x 1800 y 1440 x 900 en el mismo conjunto se ve visiblemente inconsistente en las vistas previas de App Store Connect.
        </li>
        <li>
          <strong>Atención a la zona segura.</strong> Las plataformas de las tiendas recortan y organizan las capturas de pantalla de manera diferente, así que mantén el texto crítico alejado de los bordes.
        </li>
        <li>
          <strong>Elimina el canal alfa para Google Play.</strong> Google rechaza los archivos PNG con canal alfa. Exporta archivos PNG planos de 24 bits.
        </li>
        <li>
          <strong>Reutiliza diseños entre tiendas.</strong> Una captura de pantalla de iPhone de 9:19.5 es lo suficientemente cercana a una de teléfono Android de 9:16 para que la misma composición funcione normalmente; solo vuelve a exportar con las dimensiones de destino.
        </li>
      </ul>

      <h2>Dónde encaja Screenshot Bro</h2>
      <p>
        Screenshot Bro mantiene todos los tamaños de dispositivos en un solo proyecto. Elige las filas que necesitas (iPhone 6.9", iPad 13", MacBook, teléfono Android, tablet), diseña una sola vez, localiza por idioma y exporta en lote. La carpeta de exportación se agrupa por idioma y fila, de modo que la subida a App Store Connect y a Google Play Console provienen de la misma fuente de verdad.
      </p>
    </>
  );
}

function ContentZh() {
  return (
    <>
      <p>
        Apple App Store Connect 和 Google Play Console 都会拒绝上传与接受的尺寸、宽高比和文件格式不匹配的截图。这两家商店使用完全不同的规则 —— 苹果将截图绑定到每个设备类别的特定像素大小，而 Google 则接受受宽高比限制的尺寸范围。这是这两者的完整参考指南，更新至2026年4月。
      </p>

      <h2>Apple App Store</h2>
      <p>
        苹果按 <strong>设备系列</strong>（iPhone、iPad、Mac、Apple Watch, Apple TV, Apple Vision Pro）对截图进行分组。当您的应用支持该平台时，每个系列都需要截图。对于 iPhone 和 iPad，如果您没有为每种尺寸提供自定义资源，App Store Connect 可以将高分辨率截图缩放到较旧的显示屏上显示。
      </p>
      <p>
        截图必须是 JPEG、JPG 或 PNG 格式。每个本地化语言每个设备系列可以上传 <strong>1 到 10</strong> 张截图。
      </p>

      <h3>iPhone</h3>
      <table>
        <thead>
          <tr>
            <th>显示屏</th>
            <th>像素 (竖屏)</th>
            <th>设备</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              6.9" <em>(必填)</em>
            </td>
            <td>1260 x 2736、1290 x 2796 或 1320 x 2868</td>
            <td>
              iPhone Air, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5"</td>
            <td>1284 x 2778 或 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3"</td>
            <td>1206 x 2622 或 1179 x 2556</td>
            <td>iPhone 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1"</td>
            <td>1170 x 2532、1125 x 2436 或 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5" (旧款)</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        对于目前的 iPhone 应用，6.9" 截图集是主要必填项。只有当您的应用在 iPhone 上运行且您不提供 6.9" 截图时，才需要 6.5" 截图集。横屏款式使用相同的尺寸旋转 90 度。
      </p>

      <h3>iPad</h3>
      <table>
        <thead>
          <tr>
            <th>显示屏</th>
            <th>像素 (竖屏)</th>
            <th>设备</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              13" <em>(必填)</em>
            </td>
            <td>2064 x 2752 或 2048 x 2732</td>
            <td>
              iPad Pro 13" (M5/M4), iPad Pro 12.9" (3rd–6th gen), iPad Air
              13" (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11"</td>
            <td>
              1488 x 2266、1668 x 2420、1668 x 2388 或 1640 x 2360
            </td>
            <td>
              iPad Pro 11" (M5/M4 and 1st–4th gen), iPad Air 11"
              (M4/M3/M2), iPad Air (4th–5th gen), iPad (A16/10th gen), iPad
              mini (A17 Pro/6th gen)
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Mac</h3>
      <p>
        Mac App Store 接受四种分辨率，每种均为 16:10 的宽高比。请选择其中一种并在整套截图中保持一致。
      </p>
      <ul>
        <li>
          <strong>1280 x 800</strong> (最小)
        </li>
        <li>
          <strong>1440 x 900</strong>
        </li>
        <li>
          <strong>2560 x 1600</strong>
        </li>
        <li>
          <strong>2880 x 1800</strong> (接受的最大尺寸)
        </li>
      </ul>

      <h3>Apple Watch</h3>
      <table>
        <thead>
          <tr>
            <th>表壳</th>
            <th>像素</th>
            <th>设备</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>49mm Ultra 3</td>
            <td>422 x 514</td>
            <td>Apple Watch Ultra 3</td>
          </tr>
          <tr>
            <td>49mm Ultra</td>
            <td>410 x 502</td>
            <td>Apple Watch Ultra 2, Ultra</td>
          </tr>
          <tr>
            <td>46mm</td>
            <td>416 x 496</td>
            <td>Series 11, Series 10</td>
          </tr>
          <tr>
            <td>45mm / 41mm</td>
            <td>396 x 484</td>
            <td>Series 9, 8, 7</td>
          </tr>
          <tr>
            <td>44mm / 40mm</td>
            <td>368 x 448</td>
            <td>Series 6, 5, 4, SE 3, SE</td>
          </tr>
          <tr>
            <td>42mm / 38mm</td>
            <td>312 x 390</td>
            <td>Series 3</td>
          </tr>
        </tbody>
      </table>

      <h3>Apple TV and Vision Pro</h3>
      <ul>
        <li>
          <strong>Apple TV:</strong> 3840 x 2160 (4K) 或 1920 x 1080 (HD)。
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160。
        </li>
      </ul>

      <h3>App 预览 (视频)</h3>
      <p>
        可选，每个设备系列最多 3 个，15 - 30 秒，格式为 M4V / MP4 / MOV。App 预览有其自己接受的视频分辨率，因此不要认为截图的像素尺寸对预览视频也是有效的。
      </p>

      <h2>Google Play</h2>
      <p>
        Google Play 采用不同的方法：它不要求固定的像素尺寸，而是接受任何满足其 <strong>宽高比和边长规则</strong> 的尺寸。文件必须是 JPEG 或无 Alpha 通道的 24 位 PNG。
      </p>

      <h3>手机截图</h3>
      <ul>
        <li>
          Google 要求至少上传 <strong>共 2 张截图</strong> 才能发布商店详情，您最多可以为<strong>每个支持的 设备类型添加 8 张截图</strong>。
        </li>
        <li>
          每条边必须介于 <strong>320 像素和 3840 像素</strong> 之间。
        </li>
        <li>
          最长边不能超过最短边长度的 <strong>两倍</strong>（因此宽高比处于 1:2 和 2:1 之间）。
        </li>
        <li>
          推荐尺寸：<strong>1080 x 1920</strong>（竖屏）或 <strong>1920 x 1080</strong>（横屏）。
        </li>
      </ul>

      <h3>平板电脑截图</h3>
      <p>
        Google 为平板电脑和 Chromebook 设有一个独立的大屏截图板块。为这些设备添加至少 4 张截图，使用介于 <strong>1080 像素和 7680 像素</strong> 之间的边长，并保持 16:9 横屏或 9:16 竖屏。
      </p>
      <ul>
        <li>
          <strong>7 英寸平板电脑：</strong> 推荐 <strong>1200 x 1920</strong>。
        </li>
        <li>
          <strong>10 英寸平板电脑：</strong> 推荐 <strong>1600 x 2560</strong>。
        </li>
      </ul>

      <h3>Wear OS, Android TV, Chromebook, Auto, XR</h3>
      <ul>
        <li>
          <strong>Wear OS:</strong> 384 x 384 像素 (正方形，1:1)。
        </li>
        <li>
          <strong>Android TV:</strong> 1920 x 1080 像素 (仅限 16:9 横屏)。
        </li>
        <li>
          <strong>Chromebook:</strong> 宽高比为 16:9 或 9:16，边长介于 1080 像素和 7680 像素之间。
        </li>
        <li>
          <strong>Android Automotive OS:</strong> 800 x 1280 竖屏或 1024 x 768 横屏；如果提供车载截图，请每种至少提供 2 张。
        </li>
        <li>
          <strong>Android XR:</strong> 4 到 8 张截图，8:5 宽高比，推荐 3840 x 2400，最小 1920 x 1200。
        </li>
      </ul>

      <h3>其他 Google Play 资源</h3>
      <ul>
        <li>
          <strong>应用图标：</strong> 512 x 512 像素，带 Alpha 通道的 32 位 PNG。
        </li>
        <li>
          <strong>置顶大图：</strong> 1024 x 500 像素，PNG 或 JPEG，无 Alpha 通道。必填。
        </li>
        <li>
          <strong>宣传视频：</strong> 公开的 YouTube 链接（无需上传文件）。
        </li>
      </ul>

      <h2>对比速查表</h2>
      <table>
        <thead>
          <tr>
            <th>版面</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>手机</td>
            <td>1320 x 2868 (6.9")</td>
            <td>推荐 1080 x 1920</td>
          </tr>
          <tr>
            <td>平板电脑 (小)</td>
            <td>1668 x 2388 (11 英寸 iPad)</td>
            <td>1200 x 1920 (7 英寸)</td>
          </tr>
          <tr>
            <td>平板电脑 (大)</td>
            <td>2064 x 2752 (13 英寸 iPad)</td>
            <td>1600 x 2560 (10 英寸)</td>
          </tr>
          <tr>
            <td>桌面端</td>
            <td>2880 x 1800 (Mac)</td>
            <td>Chromebook 最低 1920 x 1080 或 1080 x 1920</td>
          </tr>
          <tr>
            <td>可穿戴设备</td>
            <td>422 x 514 (Watch Ultra 3)</td>
            <td>384 x 384 (Wear OS)</td>
          </tr>
          <tr>
            <td>电视</td>
            <td>3840 x 2160</td>
            <td>1920 x 1080</td>
          </tr>
          <tr>
            <td>最少/最多张数</td>
            <td>每个系列 1 - 10 张</td>
            <td>共最少 2 张；每种设备类型最多 8 张</td>
          </tr>
          <tr>
            <td>格式</td>
            <td>JPEG、JPG 或 PNG</td>
            <td>JPEG 或 24 位 PNG，无 Alpha 通道</td>
          </tr>
        </tbody>
      </table>

      <h2>实用技巧</h2>
      <ul>
        <li>
          <strong>以接受的最大尺寸进行设计。</strong>iPhone 使用 1320 x 2868，iPad 使用 2064 x 2752，Mac 使用 2880 x 1800。向下缩放比向上缩放能更好地保留图像质量。
        </li>
        <li>
          <strong>选择一种 Mac 分辨率并锁定。</strong>在同一套截图中混合使用 2880 x 1800 和 1440 x 900 会在 App Store Connect 预览中显得明显不一致。
        </li>
        <li>
          <strong>注意安全区域。</strong>商店版面裁剪和排列截图的方式不同，因此请让关键文字远离边缘。
        </li>
        <li>
          <strong>为 Google Play 去除 Alpha 通道。</strong>Google 会拒绝带 Alpha 通道的 PNG 文件。请导出扁平的 24 位 PNG。
        </li>
        <li>
          <strong>跨商店复用布局。</strong>iPhone 的 9:19.5 截图与 Android 手机的 9:16 截图足够接近，通常可以使用相同的排版结构 —— 只需重新导出为目标尺寸即可。
        </li>
      </ul>

      <h2>Screenshot Bro 的优势</h2>
      <p>
        Screenshot Bro 将所有设备尺寸集中在一个项目中。选择您需要的设备（iPhone 6.9"、iPad 13"、MacBook、Android 手机、平板电脑），一次设计，按语言本地化，然后批量导出。导出文件夹按语言和设备系列进行分组，因此 App Store Connect 上传和 Google Play Console 上传均使用同一数据源。
      </p>
    </>
  );
}

function ContentHi() {
  return (
    <>
      <p>
        Apple App Store Connect और Google Play Console दोनों ही उन अपलोड को अस्वीकार कर देते हैं जो उनके स्वीकृत आयामों (dimensions), पहलू अनुपातों (aspect ratios) और फ़ाइल स्वरूपों से मेल नहीं खाते हैं। दोनों स्टोर पूरी तरह से अलग नियमों का उपयोग करते हैं — Apple प्रति डिवाइस वर्ग विशिष्ट पिक्सेल आकारों में स्क्रीनशॉट तय करता है, जबकि Google पहलू अनुपात द्वारा सीमित आकारों की एक श्रृंखला स्वीकार करता है। यह अप्रैल 2026 तक अपडेटेड दोनों के लिए पूर्ण संदर्भ है।
      </p>

      <h2>Apple App Store</h2>
      <p>
        Apple स्क्रीनशॉट को <strong>डिवाइस श्रेणी (device family)</strong> (iPhone, iPad, Mac, Apple Watch, Apple TV, Apple Vision Pro) के अनुसार समूहित करता है। जब आपका ऐप उस प्लेटफ़ॉर्म का समर्थन करता है तो प्रत्येक श्रेणी के लिए स्क्रीनशॉट की आवश्यकता होती है। iPhone और iPad के लिए, जब आप प्रत्येक आकार के लिए कस्टम एसेट प्रदान नहीं करते हैं, तो App Store Connect पुराने डिस्प्ले के लिए उच्च-रिज़ॉल्यूशन वाले स्क्रीनशॉट को छोटा कर सकता है।
      </p>
      <p>
        स्क्रीनशॉट JPEG, JPG या PNG होने चाहिए। आप प्रति स्थानीयकरण प्रति डिवाइस श्रेणी <strong>1 से 10</strong> स्क्रीनशॉट अपलोड कर सकते हैं।
      </p>

      <h3>iPhone</h3>
      <table>
        <thead>
          <tr>
            <th>डिस्प्ले</th>
            <th>पिक्सेल (पोर्ट्रेट)</th>
            <th>डिवाइस</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              6.9" <em>(आवश्यक)</em>
            </td>
            <td>1260 x 2736, 1290 x 2796, या 1320 x 2868</td>
            <td>
              iPhone Air, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5"</td>
            <td>1284 x 2778 या 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3"</td>
            <td>1206 x 2622 या 1179 x 2556</td>
            <td>iPhone 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1"</td>
            <td>1170 x 2532, 1125 x 2436, या 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5" (लेगेसी)</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        वर्तमान iPhone ऐप्स के लिए, 6.9" सेट प्राथमिक आवश्यक सेट है। 6.5" सेट केवल तभी आवश्यक है जब आपका ऐप iPhone पर चलता है और आप 6.9" स्क्रीनशॉट प्रदान नहीं करते हैं। लैंडस्केप वेरिएंट 90 डिग्री घुमाए गए समान आयामों का उपयोग करते हैं।
      </p>

      <h3>iPad</h3>
      <table>
        <thead>
          <tr>
            <th>डिस्प्ले</th>
            <th>पिक्सेल (पोर्ट्रेट)</th>
            <th>डिवाइस</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              13" <em>(आवश्यक)</em>
            </td>
            <td>2064 x 2752 या 2048 x 2732</td>
            <td>
              iPad Pro 13" (M5/M4), iPad Pro 12.9" (3rd–6th gen), iPad Air
              13" (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11"</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388, या 1640 x 2360
            </td>
            <td>
              iPad Pro 11" (M5/M4 and 1st–4th gen), iPad Air 11"
              (M4/M3/M2), iPad Air (4th–5th gen), iPad (A16/10th gen), iPad
              mini (A17 Pro/6th gen)
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Mac</h3>
      <p>
        Mac App Store चार रिज़ॉल्यूशन स्वीकार करता है, प्रत्येक 16:10 पहलू अनुपात में। किसी एक को चुनें और पूरे सेट में सुसंगत रहें।
      </p>
      <ul>
        <li>
          <strong>1280 x 800</strong> (न्यूनतम)
        </li>
        <li>
          <strong>1440 x 900</strong>
        </li>
        <li>
          <strong>2560 x 1600</strong>
        </li>
        <li>
          <strong>2880 x 1800</strong> (सबसे बड़ा स्वीकृत आकार)
        </li>
      </ul>

      <h3>Apple Watch</h3>
      <table>
        <thead>
          <tr>
            <th>केस</th>
            <th>पिक्सेल</th>
            <th>डिवाइस</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>49mm Ultra 3</td>
            <td>422 x 514</td>
            <td>Apple Watch Ultra 3</td>
          </tr>
          <tr>
            <td>49mm Ultra</td>
            <td>410 x 502</td>
            <td>Apple Watch Ultra 2, Ultra</td>
          </tr>
          <tr>
            <td>46mm</td>
            <td>416 x 496</td>
            <td>Series 11, Series 10</td>
          </tr>
          <tr>
            <td>45mm / 41mm</td>
            <td>396 x 484</td>
            <td>Series 9, 8, 7</td>
          </tr>
          <tr>
            <td>44mm / 40mm</td>
            <td>368 x 448</td>
            <td>Series 6, 5, 4, SE 3, SE</td>
          </tr>
          <tr>
            <td>42mm / 38mm</td>
            <td>312 x 390</td>
            <td>Series 3</td>
          </tr>
        </tbody>
      </table>

      <h3>Apple TV and Vision Pro</h3>
      <ul>
        <li>
          <strong>Apple TV:</strong> 3840 x 2160 (4K) या 1920 x 1080 (HD).
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h3>ऐप पूर्वावलोकन (वीडियो)</h3>
      <p>
        वैकल्पिक, प्रति डिवाइस श्रेणी अधिकतम 3, 15 - 30 सेकंड, M4V / MP4 / MOV। ऐप पूर्वावलोकन के अपने स्वीकृत वीडियो रिज़ॉल्यूशन होते हैं, इसलिए यह न मानें कि स्क्रीनशॉट पिक्सेल आयाम पूर्वावलोकन वीडियो के लिए मान्य हैं।
      </p>

      <h2>Google Play</h2>
      <p>
        Google Play एक अलग तरीका अपनाता है: कठोर पिक्सेल आयामों के बजाय, यह किसी भी आकार को स्वीकार करता है जो इसके <strong>पहलू अनुपात और साइड-लेंथ नियमों</strong> को पूरा करता है। फ़ाइलें बिना किसी अल्फा चैनल के JPEG या 24-बिट PNG होनी चाहिए।
      </p>

      <h3>फ़ोन स्क्रीनशॉट</h3>
      <ul>
        <li>
          Google को स्टोर लिस्टिंग प्रकाशित करने के लिए <strong>कुल मिलाकर कम से कम 2 स्क्रीनशॉट</strong> की आवश्यकता होती है, और आप <strong>प्रति समर्थित डिवाइस प्रकार अधिकतम 8 स्क्रीनशॉट</strong> जोड़ सकते हैं।
        </li>
        <li>
          प्रत्येक पक्ष <strong>320 px और 3840 px</strong> के बीच होना चाहिए।
        </li>
        <li>
          सबसे लंबा पक्ष सबसे छोटे पक्ष की लंबाई के <strong>दोगुने</strong> से अधिक नहीं हो सकता है (तो पहलू अनुपात 1:2 और 2:1 के बीच रहता है)।
        </li>
        <li>
          अनुशंसित: <strong>1080 x 1920</strong> (पोर्ट्रेट) या <strong>1920 x 1080</strong> (लैंडस्केप)।
        </li>
      </ul>

      <h3>टैबलेट स्क्रीनशॉट</h3>
      <p>
        टैबलेट और क्रोमबुक के लिए Google के पास एक अलग बड़ी स्क्रीन वाला स्क्रीनशॉट अनुभाग है। इन सतहों के लिए कम से कम 4 स्क्रीनशॉट जोड़ें, <strong>1080 px और 7680 px</strong> के बीच के पक्षों का उपयोग करें, और उन्हें 16:9 लैंडस्केप या 9:16 पोर्ट्रेट में रखें।
      </p>
      <ul>
        <li>
          <strong>7-इंच टैबलेट:</strong> अनुशंसित <strong>1200 x 1920</strong>.
        </li>
        <li>
          <strong>10-इंच टैबलेट:</strong> अनुशंसित <strong>1600 x 2560</strong>.
        </li>
      </ul>

      <h3>Wear OS, Android TV, Chromebook, Auto, XR</h3>
      <ul>
        <li>
          <strong>Wear OS:</strong> 384 x 384 px (वर्गाकार, 1:1).
        </li>
        <li>
          <strong>Android TV:</strong> 1920 x 1080 px (केवल 16:9 लैंडस्केप).
        </li>
        <li>
          <strong>Chromebook:</strong> 16:9 या 9:16 का पहलू अनुपात, 1080 px और 7680 px के बीच के पक्ष।
        </li>
        <li>
          <strong>Android Automotive OS:</strong> 800 x 1280 पोर्ट्रेट या 1024 x 768 लैंडस्केप; यदि आप ऑटोमोटिव स्क्रीनशॉट प्रदान करते हैं तो प्रत्येक के कम से कम 2 प्रदान करें।
        </li>
        <li>
          <strong>Android XR:</strong> 4 से 8 स्क्रीनशॉट, 8:5 पहलू अनुपात, अनुशंसित 3840 x 2400 और न्यूनतम 1920 x 1200.
        </li>
      </ul>

      <h3>अन्य Google Play एसेट</h3>
      <ul>
        <li>
          <strong>ऐप आइकन:</strong> 512 x 512 px, अल्फा के साथ 32-बिट PNG.
        </li>
        <li>
          <strong>फ़ीचर ग्राफ़िक:</strong> 1024 x 500 px, PNG या JPEG, कोई अल्फा नहीं। आवश्यक।
        </li>
        <li>
          <strong>प्रोमो वीडियो:</strong> सार्वजनिक YouTube URL (कोई अपलोड नहीं)।
        </li>
      </ul>

      <h2>आमने-सामने तुलनात्मक तालिका</h2>
      <table>
        <thead>
          <tr>
            <th>सतह (Surface)</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>फ़ोन</td>
            <td>1320 x 2868 (6.9")</td>
            <td>1080 x 1920 अनुशंसित</td>
          </tr>
          <tr>
            <td>टैबलेट (छोटा)</td>
            <td>1668 x 2388 (11" iPad)</td>
            <td>1200 x 1920 (7-इंच)</td>
          </tr>
          <tr>
            <td>टैबलेट (बड़ा)</td>
            <td>2064 x 2752 (13" iPad)</td>
            <td>1600 x 2560 (10-इंच)</td>
          </tr>
          <tr>
            <td>डेस्कटॉप</td>
            <td>2880 x 1800 (Mac)</td>
            <td>न्यूनतम 1920 x 1080 या 1080 x 1920 (Chromebook)</td>
          </tr>
          <tr>
            <td>वियरेबल</td>
            <td>422 x 514 (Watch Ultra 3)</td>
            <td>384 x 384 (Wear OS)</td>
          </tr>
          <tr>
            <td>टीवी</td>
            <td>3840 x 2160</td>
            <td>1920 x 1080</td>
          </tr>
          <tr>
            <td>न्यूनतम / अधिकतम संख्या</td>
            <td>प्रति श्रेणी 1 - 10</td>
            <td>कुल न्यूनतम 2; प्रति डिवाइस प्रकार अधिकतम 8</td>
          </tr>
          <tr>
            <td>फ़ॉर्मेट</td>
            <td>JPEG, JPG, या PNG</td>
            <td>JPEG या 24-बिट PNG, कोई अल्फा नहीं</td>
          </tr>
        </tbody>
      </table>

      <h2>काम के टिप्स</h2>
      <ul>
        <li>
          <strong>स्वीकृत सबसे बड़े आकार में डिज़ाइन करें।</strong> iPhone के लिए 1320 x 2868, iPad के लिए 2064 x 2752, Mac के लिए 2880 x 1800। डाउनस्केलिंग अपस्केलिंग की तुलना में गुणवत्ता को बेहतर ढंग से संरक्षित करती है।
        </li>
        <li>
          <strong>एक Mac रिज़ॉल्यूशन चुनें और इसे लॉक करें।</strong> एक ही सेट में 2880 x 1800 और 1440 x 900 को मिलाने से App Store Connect पूर्वावलोकन में दृश्य रूप से विसंगति दिखाई देती है।
        </li>
        <li>
          <strong>सुरक्षित क्षेत्र का ध्यान रखें।</strong> स्टोर सतहें स्क्रीनशॉट को अलग तरह से क्रॉप और व्यवस्थित करती हैं, इसलिए महत्वपूर्ण टेक्स्ट को किनारों से दूर रखें।
        </li>
        <li>
          <strong>Google Play के लिए अल्फा हटाएं।</strong> Google अल्फा चैनल वाले PNG को अस्वीकार कर देता है। फ्लैट 24-बिट PNG निर्यात करें।
        </li>
        <li>
          <strong>स्टोरों में लेआउट का पुन: उपयोग करें।</strong> 9:19.5 का iPhone स्क्रीनशॉट 9:16 के Android फ़ोन स्क्रीनशॉट के काफी करीब है कि आमतौर पर एक ही संरचना काम कर जाती है — बस लक्ष्य आयामों पर पुन: निर्यात करें।
        </li>
      </ul>

      <h2>Where Screenshot Bro fits</h2>
      <p>
        Screenshot Bro हर डिवाइस के आकार को एक ही प्रोजेक्ट में रखता है। अपनी ज़रूरत की पंक्तियाँ चुनें (iPhone 6.9", iPad 13", MacBook, Android फ़ोन, टैबलेट), एक बार डिज़ाइन करें, प्रति स्थानीयकरण स्थानीयकृत करें, और बैच निर्यात करें। निर्यात फ़ोल्डर स्थानीयकरण और पंक्ति द्वारा समूहीकृत होता है, इसलिए App Store Connect अपलोड और Google Play Console अपलोड दोनों एक ही स्रोत से डेटा प्राप्त करते हैं।
      </p>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p>
        Apple App Store Connect et Google Play Console rejettent tous deux les téléchargements qui ne correspondent pas aux dimensions, aux ratios d'aspect et aux formats de fichiers acceptés. Les deux stores utilisent des règles complètement différentes : Apple associe les captures à des tailles de pixels spécifiques par classe d'appareil, tandis que Google accepte une gamme de tailles limitées par le ratio d'aspect. Voici la référence complète pour les deux, à jour en avril 2026.
      </p>

      <h2>Apple App Store</h2>
      <p>
        Apple regroupe les captures d'écran par <strong>famille d'appareils</strong> (iPhone, iPad, Mac, Apple Watch, Apple TV, Apple Vision Pro). Chaque famille nécessite des captures d'écran lorsque votre application prend en charge cette plateforme. Pour iPhone et iPad, App Store Connect peut adapter les captures d'écran de résolution supérieure pour les écrans plus anciens lorsque vous ne fournissez pas d'actifs personnalisés pour chaque taille.
      </p>
      <p>
        Les captures d'écran doivent être au format JPEG, JPG ou PNG. Vous pouvez importer de <strong>1 à 10</strong> captures d'écran par famille d'appareils et par langue.
      </p>

      <h3>iPhone</h3>
      <table>
        <thead>
          <tr>
            <th>Écran</th>
            <th>Pixels (Portrait)</th>
            <th>Appareils</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              6.9" <em>(requis)</em>
            </td>
            <td>1260 x 2736, 1290 x 2796 ou 1320 x 2868</td>
            <td>
              iPhone Air, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5"</td>
            <td>1284 x 2778 ou 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3"</td>
            <td>1206 x 2622 ou 1179 x 2556</td>
            <td>iPhone 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1"</td>
            <td>1170 x 2532, 1125 x 2436 ou 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5" (ancien)</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pour les applications iPhone actuelles, le lot 6.9" est le lot principal requis. Le lot 6.5" est requis uniquement si votre application s'exécute sur iPhone et que vous ne fournissez pas de captures d'écran 6.9". Les variantes paysages utilisent les mêmes dimensions pivotées de 90 degrés.
      </p>

      <h3>iPad</h3>
      <table>
        <thead>
          <tr>
            <th>Écran</th>
            <th>Pixels (Portrait)</th>
            <th>Appareils</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              13" <em>(requis)</em>
            </td>
            <td>2064 x 2752 ou 2048 x 2732</td>
            <td>
              iPad Pro 13" (M5/M4), iPad Pro 12.9" (3rd–6th gen), iPad Air
              13" (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11"</td>
            <td>
              1488 x 2266, 1668 x 2420, 1668 x 2388 ou 1640 x 2360
            </td>
            <td>
              iPad Pro 11" (M5/M4 and 1st–4th gen), iPad Air 11"
              (M4/M3/M2), iPad Air (4th–5th gen), iPad (A16/10th gen), iPad
              mini (A17 Pro/6th gen)
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Mac</h3>
      <p>
        Le Mac App Store accepte quatre résolutions, chacune à un ratio d'aspect de 16:10. Choisissez-en une et restez cohérent sur l'ensemble du lot.
      </p>
      <ul>
        <li>
          <strong>1280 x 800</strong> (minimum)
        </li>
        <li>
          <strong>1440 x 900</strong>
        </li>
        <li>
          <strong>2560 x 1600</strong>
        </li>
        <li>
          <strong>2880 x 1800</strong> (taille maximale acceptée)
        </li>
      </ul>

      <h3>Apple Watch</h3>
      <table>
        <thead>
          <tr>
            <th>Boîtier</th>
            <th>Pixels</th>
            <th>Appareils</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>49mm Ultra 3</td>
            <td>422 x 514</td>
            <td>Apple Watch Ultra 3</td>
          </tr>
          <tr>
            <td>49mm Ultra</td>
            <td>410 x 502</td>
            <td>Apple Watch Ultra 2, Ultra</td>
          </tr>
          <tr>
            <td>46mm</td>
            <td>416 x 496</td>
            <td>Series 11, Series 10</td>
          </tr>
          <tr>
            <td>45mm / 41mm</td>
            <td>396 x 484</td>
            <td>Series 9, 8, 7</td>
          </tr>
          <tr>
            <td>44mm / 40mm</td>
            <td>368 x 448</td>
            <td>Series 6, 5, 4, SE 3, SE</td>
          </tr>
          <tr>
            <td>42mm / 38mm</td>
            <td>312 x 390</td>
            <td>Series 3</td>
          </tr>
        </tbody>
      </table>

      <h3>Apple TV and Vision Pro</h3>
      <ul>
        <li>
          <strong>Apple TV :</strong> 3840 x 2160 (4K) ou 1920 x 1080 (HD).
        </li>
        <li>
          <strong>Apple Vision Pro :</strong> 3840 x 2160.
        </li>
      </ul>

      <h3>Aperçus d'application (vidéo)</h3>
      <p>
        Facultatif, jusqu'à 3 par famille d'appareils, de 15 à 30 secondes, M4V / MP4 / MOV. Les aperçus d'application ont leurs propres résolutions vidéo acceptées, alors ne supposez pas que les dimensions en pixels des captures d'écran sont valides pour les vidéos d'aperçu.
      </p>

      <h2>Google Play</h2>
      <p>
        Google Play adopte une approche différente : au lieu de dimensions en pixels rigides, il accepte n'importe quelle taille qui satisfait à ses <strong>règles de ratio d'aspect et de longueur de côté</strong>. Les fichiers doivent être au format JPEG ou PNG 24 bits sans canal alpha.
      </p>

      <h3>Captures d'écran pour téléphones</h3>
      <ul>
        <li>
          Google exige au moins <strong>2 captures d'écran au total</strong> pour publier une fiche de store, et vous pouvez ajouter jusqu'à <strong>8 captures par type d'appareil pris en charge</strong>.
        </li>
        <li>
          Chaque côté doit mesurer entre <strong>320 px et 3840 px</strong>.
        </li>
        <li>
          Le côté le plus long ne peut pas dépasser <strong>le double de la longueur</strong> du côté le plus court (le ratio d'aspect se situe donc entre 1:2 et 2:1).
        </li>
        <li>
          Recommandé : <strong>1080 x 1920</strong> (portrait) ou <strong>1920 x 1080</strong> (paysage).
        </li>
      </ul>

      <h3>Captures d'écran pour tablettes</h3>
      <p>
        Google propose une section distincte pour les captures d'écran sur grand écran pour les tablettes et les Chromebooks. Ajoutez au moins 4 captures d'écran pour ces formats, utilisez des côtés mesurant entre <strong>1080 px et 7680 px</strong>, et conservez-les au format 16:9 paysage ou 9:16 portrait.
      </p>
      <ul>
        <li>
          <strong>Tablette 7 pouces :</strong> recommandé <strong>1200 x 1920</strong>.
        </li>
        <li>
          <strong>Tablette 10 pouces :</strong> recommandé <strong>1600 x 2560</strong>.
        </li>
      </ul>

      <h3>Wear OS, Android TV, Chromebook, Auto, XR</h3>
      <ul>
        <li>
          <strong>Wear OS :</strong> 384 x 384 px (carré, 1:1).
        </li>
        <li>
          <strong>Android TV :</strong> 1920 x 1080 px (16:9 paysage uniquement).
        </li>
        <li>
          <strong>Chromebook :</strong> ratio d'aspect de 16:9 ou 9:16, côtés mesurant entre 1080 px et 7680 px.
        </li>
        <li>
          <strong>Android Automotive OS :</strong> 800 x 1280 portrait ou 1024 x 768 paysage ; fournissez au moins 2 de chaque si vous fournissez des captures d'écran pour l'automobile.
        </li>
        <li>
          <strong>Android XR :</strong> 4 à 8 captures d'écran, ratio d'aspect de 8:5, recommandé 3840 x 2400 et minimum 1920 x 1200.
        </li>
      </ul>

      <h3>Autres éléments Google Play</h3>
      <ul>
        <li>
          <strong>Icône d'application :</strong> 512 x 512 px, PNG 32 bits avec canal alpha.
        </li>
        <li>
          <strong>Graphique de fonction :</strong> 1024 x 500 px, PNG ou JPEG, sans canal alpha. Requis.
        </li>
        <li>
          <strong>Vidéo promotionnelle :</strong> URL YouTube publique (aucun fichier à importer).
        </li>
      </ul>

      <h2>Tableau comparatif rapide</h2>
      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Téléphone</td>
            <td>1320 x 2868 (6.9")</td>
            <td>1080 x 1920 recommandé</td>
          </tr>
          <tr>
            <td>Tablette (petite)</td>
            <td>1668 x 2388 (iPad 11")</td>
            <td>1200 x 1920 (7 pouces)</td>
          </tr>
          <tr>
            <td>Tablette (grande)</td>
            <td>2064 x 2752 (iPad 13")</td>
            <td>1600 x 2560 (10 pouces)</td>
          </tr>
          <tr>
            <td>Ordinateur de bureau</td>
            <td>2880 x 1800 (Mac)</td>
            <td>1920 x 1080 ou 1080 x 1920 minimum (Chromebook)</td>
          </tr>
          <tr>
            <td>Montre connectée</td>
            <td>422 x 514 (Watch Ultra 3)</td>
            <td>384 x 384 (Wear OS)</td>
          </tr>
          <tr>
            <td>Téléviseur</td>
            <td>3840 x 2160</td>
            <td>1920 x 1080</td>
          </tr>
          <tr>
            <td>Nombre min / max</td>
            <td>1 - 10 par famille</td>
            <td>2 au total minimum ; jusqu'à 8 par type d'appareil</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>JPEG, JPG ou PNG</td>
            <td>JPEG ou PNG 24 bits, sans canal alpha</td>
          </tr>
        </tbody>
      </table>

      <h2>Conseils pratiques</h2>
      <ul>
        <li>
          <strong>Concevez vos captures au format maximal accepté.</strong> 1320 x 2868 pour iPhone, 2064 x 2752 pour iPad, 2880 x 1800 pour Mac. La réduction de taille préserve la qualité bien mieux que l'agrandissement.
        </li>
        <li>
          <strong>Choisissez une résolution pour Mac et n'en changez plus.</strong> Mélanger du 2880 x 1800 et du 1440 x 900 dans le même lot crée une incohérence visible dans les aperçus d'App Store Connect.
        </li>
        <li>
          <strong>Faites attention à la zone de sécurité.</strong> Les différentes boutiques recadrent et disposent les captures d'écran de manière différente, veillez donc à ce que vos textes importants ne soient pas trop près des bords.
        </li>
        <li>
          <strong>Supprimez le canal alpha pour Google Play.</strong> Google rejette les fichiers PNG comportant un canal alpha. Exportez des fichiers PNG 24 bits plats.
        </li>
        <li>
          <strong>Réutilisez vos mises en page d'un store à l'autre.</strong> Une capture d'écran iPhone au format 9:19.5 est suffisamment proche d'une capture Android de 9:16 pour que la même composition fonctionne généralement ; il vous suffit de la réexporter aux bonnes dimensions.
        </li>
      </ul>

      <h2>Pourquoi utiliser Screenshot Bro</h2>
      <p>
        Screenshot Bro centralise toutes les tailles d'appareils dans un seul et même projet. Sélectionnez les modèles dont vous avez besoin (iPhone 6.9", iPad 13", MacBook, téléphone Android, tablette), concevez votre visuel une seule fois, localisez-le par langue et exportez le tout. Le dossier d'exportation est organisé par langue et par modèle, garantissant que vos envois vers App Store Connect et Google Play Console proviennent de la même source unique.
      </p>
    </>
  );
}

function ContentAr() {
  return (
    <>
      <p>
        يرفض كل من Apple App Store Connect و Google Play Console عمليات الرفع التي لا تتطابق مع الأبعاد ونسب الارتفاع وتنسيقات الملفات المقبولة لديهما. يستخدم المتجران قواعد مختلفة تمامًا - حيث تقوم Apple بربط لقطات الشاشة بأحجام بكسل محددة لكل فئة جهاز، بينما تقبل Google مجموعة من الأحجام المقيدة بنسبة الارتفاع. هذا هو المرجع الكامل لكليهما، والمحدث اعتبارًا من أبريل 2026.
      </p>

      <h2>Apple App Store</h2>
      <p>
        تقسم Apple لقطات الشاشة حسب <strong>عائلة الأجهزة</strong> (iPhone، وiPad، وMac، وApple Watch، وApple TV، وApple Vision Pro). تتطلب كل عائلة لقطات شاشة عندما يدعم تطبيقك هذا النظام الأساسي. بالنسبة إلى iPhone وiPad، يمكن لـ App Store Connect تقليص لقطات الشاشة ذات الدقة الأعلى للشاشات الأقدم عندما لا توفر عناصر مخصصة لكل حجم.
      </p>
      <p>
        يجب أن تكون لقطات الشاشة بتنسيق JPEG أو JPG أو PNG. يمكنك رفع من <strong>1 إلى 10</strong> لقطات شاشة لكل عائلة أجهزة لكل توطين (لغة).
      </p>

      <h3>iPhone</h3>
      <table>
        <thead>
          <tr>
            <th>الشاشة</th>
            <th>بكسل (طولي)</th>
            <th>الأجهزة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              6.9" <em>(مطلوب)</em>
            </td>
            <td>1260 x 2736 أو 1290 x 2796 أو 1320 x 2868</td>
            <td>
              iPhone Air, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15
              Plus, 14 Pro Max
            </td>
          </tr>
          <tr>
            <td>6.5"</td>
            <td>1284 x 2778 أو 1242 x 2688</td>
            <td>
              iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max,
              XR
            </td>
          </tr>
          <tr>
            <td>6.3"</td>
            <td>1206 x 2622 أو 1179 x 2556</td>
            <td>iPhone 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro</td>
          </tr>
          <tr>
            <td>6.1"</td>
            <td>1170 x 2532 أو 1125 x 2436 أو 1080 x 2340</td>
            <td>
              iPhone 17e, 16e, 14, 13 Pro, 13, 13 mini, 12 Pro, 12, 12 mini,
              11 Pro, XS, X
            </td>
          </tr>
          <tr>
            <td>5.5" (قديم)</td>
            <td>1242 x 2208</td>
            <td>iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus</td>
          </tr>
        </tbody>
      </table>
      <p>
        بالنسبة لتطبيقات iPhone الحالية، فإن مجموعة لقطات الشاشة مقاس 6.9" هي المجموعة الأساسية المطلوبة. ومجموعة 6.5" مطلوبة فقط إذا كان تطبيقك يعمل على iPhone ولم تقم بتقديم لقطات شاشة بمقاس 6.9". تستخدم النسخ الأفقية نفس الأبعاد مدورة بـ 90 درجة.
      </p>

      <h3>iPad</h3>
      <table>
        <thead>
          <tr>
            <th>الشاشة</th>
            <th>بكسل (طولي)</th>
            <th>الأجهزة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              13" <em>(مطلوب)</em>
            </td>
            <td>2064 x 2752 أو 2048 x 2732</td>
            <td>
              iPad Pro 13" (M5/M4), iPad Pro 12.9" (3rd–6th gen), iPad Air
              13" (M4/M3/M2)
            </td>
          </tr>
          <tr>
            <td>11"</td>
            <td>
              1488 x 2266 أو 1668 x 2420 أو 1668 x 2388 أو 1640 x 2360
            </td>
            <td>
              iPad Pro 11" (M5/M4 and 1st–4th gen), iPad Air 11"
              (M4/M3/M2), iPad Air (4th–5th gen), iPad (A16/10th gen), iPad
              mini (A17 Pro/6th gen)
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Mac</h3>
      <p>
        يقبل متجر تطبيقات Mac أربعة مستويات من الدقة، كل منها بنسبة عرض إلى ارتفاع تبلغ 16:10. اختر واحدًا وحافظ على اتساقه عبر المجموعة بأكملها.
      </p>
      <ul>
        <li>
          <strong>1280 x 800</strong> (الحد الأدنى)
        </li>
        <li>
          <strong>1440 x 900</strong>
        </li>
        <li>
          <strong>2560 x 1600</strong>
        </li>
        <li>
          <strong>2880 x 1800</strong> (أكبر حجم مقبول)
        </li>
      </ul>

      <h3>Apple Watch</h3>
      <table>
        <thead>
          <tr>
            <th>الهيكل</th>
            <th>بكسل</th>
            <th>الأجهزة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>49mm Ultra 3</td>
            <td>422 x 514</td>
            <td>Apple Watch Ultra 3</td>
          </tr>
          <tr>
            <td>49mm Ultra</td>
            <td>410 x 502</td>
            <td>Apple Watch Ultra 2, Ultra</td>
          </tr>
          <tr>
            <td>46mm</td>
            <td>416 x 496</td>
            <td>Series 11, Series 10</td>
          </tr>
          <tr>
            <td>45mm / 41mm</td>
            <td>396 x 484</td>
            <td>Series 9, 8, 7</td>
          </tr>
          <tr>
            <td>44mm / 40mm</td>
            <td>368 x 448</td>
            <td>Series 6, 5, 4, SE 3, SE</td>
          </tr>
          <tr>
            <td>42mm / 38mm</td>
            <td>312 x 390</td>
            <td>Series 3</td>
          </tr>
        </tbody>
      </table>

      <h3>Apple TV and Vision Pro</h3>
      <ul>
        <li>
          <strong>Apple TV:</strong> 3840 x 2160 (4K) أو 1920 x 1080 (HD).
        </li>
        <li>
          <strong>Apple Vision Pro:</strong> 3840 x 2160.
        </li>
      </ul>

      <h3>معاينات التطبيق (فيديو)</h3>
      <p>
        اختياري، حتى 3 معاينات لكل عائلة أجهزة، تتراوح مدتها بين 15 و30 ثانية، بتنسيق M4V / MP4 / MOV. تتوفر لمعاينات التطبيقات دقة فيديو مقبولة خاصة بها، لذا لا تفترض أن أبعاد لقطة الشاشة بالبكسل صالحة لمقاطع فيديو المعاينة.
      </p>

      <h2>Google Play</h2>
      <p>
        تتطلب Google Play نهجًا مختلفًا: فبدلاً من أبعاد البكسل الصارمة، فإنها تقبل أي حجم يستوفي <strong>قواعد نسبة الارتفاع وطول الضلع</strong> الخاصة بها. يجب أن تكون الملفات بتنسيق JPEG أو PNG بمعدل 24 بت بدون قناة ألفا.
      </p>

      <h3>لقطات شاشة الهاتف</h3>
      <ul>
        <li>
          تطلب Google <strong>لقطتي شاشة على الأقل في المجمل</strong> لنشر تفاصيل المتجر، ويمكنك إضافة ما يصل إلى <strong>8 لقطات شاشة لكل نوع جهاز مدعوم</strong>.
        </li>
        <li>
          يجب أن يتراوح طول كل ضلع بين <strong>320 بكسل و3840 بكسل</strong>.
        </li>
        <li>
          لا يمكن أن يكون الضلع الأطول أكثر من <strong>ضعف طول</strong> الضلع الأقصر (لذا فإن نسبة العرض إلى الارتفاع تتراوح بين 1:2 و 2:1).
        </li>
        <li>
          موصى به: <strong>1080 x 1920</strong> (طولي) أو <strong>1920 x 1080</strong> (عرضي).
        </li>
      </ul>

      <h3>لقطات شاشة الأجهزة اللوحية</h3>
      <p>
        توفر Google قسمًا منفصلاً للقطات الشاشة المخصصة للشاشات الكبيرة للأجهزة اللوحية وChromebooks. أضف 4 لقطات شاشة على الأقل لهذه الواجهات، واستخدم أضلاعًا تتراوح بين <strong>1080 بكسل و7680 بكسل</strong>، وحافظ عليها بنسبة 16:9 عرضي أو 9:16 طولي.
      </p>
      <ul>
        <li>
          <strong>جهاز لوحي مقاس 7 بوصة:</strong> موصى به <strong>1200 x 1920</strong>.
        </li>
        <li>
          <strong>جهاز لوحي مقاس 10 بوصة:</strong> موصى به <strong>1600 x 2560</strong>.
        </li>
      </ul>

      <h3>Wear OS, Android TV, Chromebook, Auto, XR</h3>
      <ul>
        <li>
          <strong>Wear OS:</strong> 384 x 384 بكسل (مربع، 1:1).
        </li>
        <li>
          <strong>Android TV:</strong> 1920 x 1080 بكسل (16:9 عرضي فقط).
        </li>
        <li>
          <strong>Chromebook:</strong> نسبة عرض إلى ارتفاع 16:9 أو 9:16، والضلع بين 1080 بكسل و7680 بكسل.
        </li>
        <li>
          <strong>Android Automotive OS:</strong> 800 x 1280 طولي أو 1024 x 768 عرضي؛ قدم لقطتين على الأقل من كل منهما إذا قمت بتقديم لقطات شاشة لنظام السيارات Automotive.
        </li>
        <li>
          <strong>Android XR:</strong> من 4 إلى 8 لقطات شاشة، ونسبة عرض إلى ارتفاع تبلغ 8:5، والسرعة الموصى بها هي 3840 x 2400 والحد الأدنى 1920 x 1200.
        </li>
      </ul>

      <h3>أصول Google Play الأخرى</h3>
      <ul>
        <li>
          <strong>أيقونة التطبيق:</strong> 512 x 512 بكسل، PNG بمعدل 32 بت مع قناة ألفا.
        </li>
        <li>
          <strong>الرسم المميز:</strong> 1024 x 500 بكسل، PNG أو JPEG، بدون قناة ألفا. مطلوب.
        </li>
        <li>
          <strong>فيديو ترويجي:</strong> رابط يوتيوب عام (لا يوجد رفع ملف).
        </li>
      </ul>

      <h2>جدول المقارنة السريعة</h2>
      <table>
        <thead>
          <tr>
            <th>الواجهة</th>
            <th>App Store</th>
            <th>Google Play</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>الهاتف</td>
            <td>1320 x 2868 (6.9")</td>
            <td>1080 x 1920 (موصى به)</td>
          </tr>
          <tr>
            <td>جهاز لوحي (صغير)</td>
            <td>1668 x 2388 (iPad مقاس 11 بوصة)</td>
            <td>1200 x 1920 (مقاس 7 بوصة)</td>
          </tr>
          <tr>
            <td>جهاز لوحي (كبير)</td>
            <td>2064 x 2752 (iPad مقاس 13 بوصة)</td>
            <td>1600 x 2560 (مقاس 10 بوصة)</td>
          </tr>
          <tr>
            <td>سطح المكتب</td>
            <td>2880 x 1800 (Mac)</td>
            <td>1920 x 1080 أو 1080 x 1920 كحد أدنى (Chromebook)</td>
          </tr>
          <tr>
            <td>الأجهزة القابلة للارتداء</td>
            <td>422 x 514 (Watch Ultra 3)</td>
            <td>384 x 384 (Wear OS)</td>
          </tr>
          <tr>
            <td>التلفزيون</td>
            <td>3840 x 2160</td>
            <td>1920 x 1080</td>
          </tr>
          <tr>
            <td>العدد الأدنى / الأقصى</td>
            <td>1 - 10 لكل عائلة</td>
            <td>2 في المجمل كحد أدنى؛ ما يصل إلى 8 لكل نوع جهاز</td>
          </tr>
          <tr>
            <td>التنسيق</td>
            <td>JPEG أو JPG أو PNG</td>
            <td>JPEG أو PNG بمعدل 24 بت، بدون قناة ألفا</td>
          </tr>
        </tbody>
      </table>

      <h2>نصائح عملية للعمل</h2>
      <ul>
        <li>
          <strong>صمم بأكبر حجم مقبول.</strong> 1320 x 2868 لجهاز iPhone، و2064 x 2752 لجهاز iPad، و2880 x 1800 لجهاز Mac. يحافظ تقليل الحجم على الجودة بشكل أفضل من تكبيره.
        </li>
        <li>
          <strong>اختر دقة شاشة واحدة لجهاز Mac وثبّتها.</strong> يؤدي خلط 2880 x 1800 و1440 x 900 في نفس المجموعة إلى جعل المعاينات تبدو غير متناسقة بصريًا في App Store Connect.
        </li>
        <li>
          <strong>انتبه للمنطقة الآمنة.</strong> تختلف طريقة قص وترتيب لقطات الشاشة في المتاجر، لذا يرجى إبقاء النصوص المهمة بعيدة عن الحواف.
        </li>
        <li>
          <strong>قم بإزالة قناة ألفا لـ Google Play.</strong> ترفض Google ملفات PNG التي تحتوي على قناة ألفا. قم بتصدير ملفات PNG مسطحة بمعدل 24 بت.
        </li>
        <li>
          <strong>أعد استخدام التخطيطات عبر المتاجر المختلفة.</strong> تقترب لقطة شاشة iPhone بنسبة 9:19.5 بدرجة كافية من لقطة شاشة هاتف Android بنسبة 9:16 بحيث يعمل نفس التكوين عادةً - فقط قم بإعادة التصدير بالأبعاد المستهدفة.
        </li>
      </ul>

      <h2>أين يقع دور Screenshot Bro</h2>
      <p>
        يحتفظ تطبيق Screenshot Bro بكل أحجام الأجهزة في مشروع واحد. اختر الصفوف التي تحتاجها (iPhone 6.9" وiPad 13" وMacBook وهاتف Android وجهاز لوحي)، وصمم لمرة واحدة، وقم بالتوطين لكل لغة، ثم قم بالتصدير دفعة واحدة. يتم تجميع مجلد التصدير حسب اللغة والصف، بحيث يتم سحب الرفع لـ App Store Connect ولـ Google Play Console من نفس المصدر الموثوق للمعلومات.
      </p>
    </>
  );
}
