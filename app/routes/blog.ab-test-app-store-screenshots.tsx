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
    case "de":
      return "Erstellen Sie Screenshot-Varianten, ohne Ihren gesamten Workflow zu duplizieren.";
    case "ja":
      return "ワークフロー全体を複製することなく、スクリーンショットのバリアントを作成できます。";
    case "pt":
      return "Crie variantes de capturas de tela sem duplicar todo o seu fluxo de trabalho.";
    case "it":
      return "Crea varianti di screenshot senza duplicare l'intero flusso di lavoro.";
    case "ko":
      return "전체 워크플로를 복제하지 않고도 스크린샷 변형을 만들어 보세요.";
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
    case "de":
      return "Screenshot Bro herunterladen";
    case "ja":
      return "Screenshot Bro をダウンロード";
    case "pt":
      return "Baixar Screenshot Bro";
    case "it":
      return "Scarica Screenshot Bro";
    case "ko":
      return "Screenshot Bro 다운로드";
    case "es":
      return "Descargar Screenshot Bro";
    case "zh":
      return "下载 Screenshot Bro";
    case "hi":
      return "다운लोड करें Screenshot Bro";
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

function ContentDe() {
  return (
    <>
      <p>
        Screenshots gehören zu den am einfachsten zu ändernden App Store-Assets, sind jedoch
        am schwersten nach bloßem Gefühl zu beurteilen. A/B-Tests bieten Ihnen eine Möglichkeit,
        Screenshot-Ideen mit echtem Store-Traffic zu vergleichen, anstatt darüber
        zu streiten, welche Version in einer Designdatei besser aussieht.
      </p>
      <p>
        Sowohl Apple als auch Google unterstützen Experimente mit Store-Einträgen. Apple nennt
        sein System{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Produktseiten-Optimierung
        </a>
        . Google nennt sein System{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eintrags-Experimente
        </a>
        . Die Mechanismen sind unterschiedlich, aber die Screenshot-Strategie ist dieselbe:
        Testen Sie jeweils eine klare Hypothese nach der anderen.
      </p>

      <h2>Was Sie testen können</h2>
      <p>
        Im App Store können Sie mit der Produktseiten-Optimierung bis zu drei alternative Versionen
        Ihrer Produktseite mit dem Original vergleichen. Laut Apple können Sie App-Symbole,
        Screenshots und App-Vorschauvideos testen, die Ergebnisse dann in App Analytics einsehen
        und die leistungsstärkste Version übernehmen.
      </p>
      <p>
        Bei Google Play können Eintrags-Experimente grafische Assets wie Symbole,
        Hintergrundgrafiken, Screenshots und Werbevideos testen. Lokalisierte Experimente
        können auch Textfelder wie Kurz- und Vollbeschreibungen testen. Laut Google kann jede App
        ein Standardgrafik-Experiment oder die bis zu fünf lokalisierte Experimente gleichzeitig ausführen.
      </p>

      <h2>Gute Testideen für Screenshots</h2>
      <ul>
        <li>
          <strong>Ergebnisorientiert vs. funktionsorientiert:</strong> Beginnen Sie mit dem
          Nutzen für den Anwender oder stellen Sie die Benutzeroberfläche des Produkts in den Vordergrund.
        </li>
        <li>
          <strong>Anderer erster Screenshot:</strong> Testen Sie den ersten Screenshot besonders genau,
          da er das größte Gewicht für den ersten Eindruck hat.
        </li>
        <li>
          <strong>Reines UI vs. gerahmtes UI:</strong> Testen Sie unbearbeitete Benutzeroberflächen-Screenshots
          gegenüber Marketing-Screenshots mit Geräterahmen.
        </li>
        <li>
          <strong>Kurze Überschrift vs. spezifische Überschrift:</strong> Vergleichen Sie emotionale Klarheit
          mit konkreten Funktionsdetails.
        </li>
        <li>
          <strong>Lokalisiertes Konzept:</strong> Testen Sie, ob eine marktspezifische Funktion oder Formulierung
          in einem bestimmten Land besser funktioniert.
        </li>
      </ul>

      <h2>Was Sie nicht als Erstes testen sollten</h2>
      <p>
        Ändern Sie nicht alle Screenshots, Überschriften, Hintergründe und die Reihenfolge der Funktionen auf einmal,
        es sei denn, Sie möchten lediglich wissen, welches Gesamtpaket gewinnt. Wenn die Variante besser abschneidet,
        werden Sie nicht wissen, warum. Für Indie-Apps mit begrenztem Traffic ist das eine Verschwendung nützlicher Signale.
      </p>
      <p>
        Beginnen Sie mit einer einzigen, wirkungsvollen Änderung: dem ersten Screenshot, der ersten Überschrift,
        dem primären visuellen Stil oder der Reihenfolge der Funktionen. Sobald Sie einen Gewinner haben,
        nutzen Sie diesen als neue Baseline.
      </p>

      <h2>So führen Sie den Test im App Store durch</h2>
      <ol>
        <li>Erstellen Sie eine saubere Screenshot-Variante mit denselben Store-Größen wie Ihr aktueller Eintrag.</li>
        <li>Öffnen Sie App Store Connect und erstellen Sie einen Test zur Produktseiten-Optimierung.</li>
        <li>Wählen Sie bis zu drei Varianten aus und bestimmen Sie, wie viel Traffic in den Test fließen soll.</li>
        <li>Wählen Sie einen aussagekräftigen Namen für den Test, damit Sie ihn später in App Analytics zuordnen können.</li>
        <li>Warten Sie auf ausreichende Daten, bevor Sie eine Gewinnerversion übernehmen.</li>
      </ol>
      <p>
        Apple weist darauf hin, dass Nutzer, die einer bestimmten Testvariante zugewiesen wurden, während der gesamten
        Dauer des Tests dieselbe Variante sehen. Alternative Screenshots und App-Vorschauen können in Suchergebnissen
        und anderen Bereichen des App Stores erscheinen, genau wie Ihre Original-Assets.
      </p>

      <h2>So führen Sie den Test bei Google Play durch</h2>
      <ol>
        <li>Öffnen Sie die Play Console, gehen Sie zu „Präsenz im Store“ und dann zu „Eintrags-Experimente“.</li>
        <li>Erstellen Sie ein Standardgrafik-Experiment oder ein lokalisiertes Experiment.</li>
        <li>Wählen Sie die Zielmetrik, die Zielgruppe, die Varianten und den minimal erkennbaren Effekt aus.</li>
        <li>Testen Sie nach Möglichkeit immer nur ein Attribut zur gleichen Zeit.</li>
        <li>Überprüfen Sie das Ergebnis und übernehmen Sie die erfolgreiche Variante oder behalten Sie den aktuellen Eintrag bei.</li>
      </ol>
      <p>
        Google empfiehlt die Anzahl der verbleibenden Erstinstallateure als Zielmetrik. Zudem wird darauf hingewiesen,
        dass Nutzer, die nicht bei Google Play angemeldet sind, keine experimentellen Varianten sehen.
      </p>

      <h2>Wie viel Traffic benötigen Sie?</h2>
      <p>
        Es gibt keinen allgemeingültigen Wert. Apps mit wenig Traffic benötigen mehr Zeit, und winzige visuelle
        Unterschiede erfordern mehr Traffic, um erkannt zu werden. Wenn Ihre App nur wenige Store-Besuche verzeichnet,
        testen Sie größere Unterschiede: einen deutlicheren ersten Screenshot, ein neues Wertversprechen oder einen lokalisierten Ansatz.
      </p>
      <p>
        Betrachten Sie nicht eindeutige Ergebnisse ebenfalls als wertvolle Information. Sie können bedeuten, dass die Änderung
        zu gering war, die Zielgruppe zu klein war oder beide Versionen in etwa gleichwertig waren.
      </p>

      <h2>Eine praktische Checkliste für Screenshot-Tests</h2>
      <ul>
        <li>Formulieren Sie eine Hypothese, bevor Sie die Variante entwerfen.</li>
        <li>Ändern Sie pro Test nur eine wesentliche Idee.</li>
        <li>Verwenden Sie gültige Screenshot-Abmessungen für App Store und Google Play.</li>
        <li>Halten Sie die Lokalisierung zwischen Kontrollgruppe und Variante konsistent.</li>
        <li>Stoppen Sie einen Test nicht vorzeitig, nur weil die ersten Zahlen vielversprechend aussehen.</li>
        <li>Dokumentieren Sie die Änderungen, damit der nächste Test auf echten Erkenntnissen aufbauen kann.</li>
      </ul>

      <h2>Wo Screenshot Bro ins Spiel kommt</h2>
      <p>
        A/B-Tests erfordern Screenshot-Varianten. Genau hier wird der manuelle Arbeitsablauf chaotisch:
        doppelte Figma-Dateien, umbenannte PNGs, Lokalisierungsordner und wiederholte Exporte.{" "}
        <a href="/">Screenshot Bro</a> hilft Ihnen, Ihre Screenshot-Sets strukturiert zu halten, damit Sie
        Varianten erstellen, lokalisieren und die richtigen Dateien exportieren können, ohne die Baseline zu verlieren.
      </p>
      <p>
        Wenn Sie Varianten immer noch von Hand entwerfen, lesen Sie{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          Wie Sie App Store-Screenshots in Figma entwerfen
        </a>{" "}
        und vergleichen Sie diesen Workflow dann mit einem dedizierten{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          App Store Screenshot-Tool
        </a>
        .
      </p>
    </>
  );
}

function ContentJa() {
  return (
    <>
      <p>
        スクリーンショットは、App Storeの資産の中で最も変更しやすいものの1つですが、主観だけで判断するのが最も難しいものの1つでもあります。A/Bテストを利用すれば、デザインファイル上でどちらのバージョンが見栄えが良いかを議論する代わりに、実際のストアトラフィックを対象にスクリーンショットのアイデアを比較できます。
      </p>
      <p>
        AppleとGoogleはどちらもストア情報の実験をサポートしています。Appleはそのシステムを{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          プロダクトページの最適化
        </a>{" "}
        と呼んでいます。Googleはそのシステムを{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          ストア情報の実験
        </a>{" "}
        と呼んでいます。仕組みは異なりますが、スクリーンショットの戦略は同じです。「一度にテストする明確な仮説は1つだけ」ということです。
      </p>

      <h2>テストできる項目</h2>
      <p>
        App Storeでは、プロダクトページの最適化により、元のバージョンに対して最大3つの代替プロダクトページバージョンをテストできます。Appleによると、アプリのアイコン、スクリーンショット、Appプレビュービデオをテストし、App Analyticsで結果を確認して、最もパフォーマンスの高いバージョンを適用できます。
      </p>
      <p>
        Google Playでは、ストア情報の実験で、アイコン、フィーチャーグラフィック、スクリーンショット、プロモーションビデオなどのグラフィックアセットをテストできます。ローカライズされた実験では、簡易説明や詳細説明などのテキストフィールドもテストできます。Googleによると、各アプリは1つのデフォルトグラフィック実験、または最大5つのローカライズされた実験を同時に実行できます。
      </p>

      <h2>スクリーンショットテストの優れたアイデア</h2>
      <ul>
        <li>
          <strong>成果優先 vs 機能優先：</strong> ユーザーのメリットを前面に出すか、製品のUIを前面に出すか。
        </li>
        <li>
          <strong>最初のスクリーンショットのバリエーション：</strong> 第一印象に最も大きな影響を与えるため、最初のスクリーンショットをテストします。
        </li>
        <li>
          <strong>プレーンUI vs フレーム付きUI：</strong> 未加工のインターフェース画面と、デバイスフレームに収められたマーケティング用スクリーンショットをテストします。
        </li>
        <li>
          <strong>短い見出し vs 具体的な見出し：</strong> 感情的なわかりやすさと、具体的な機能の詳細を比較します。
        </li>
        <li>
          <strong>ローカライズされたコンセプト：</strong> 特定の市場向けの機能や表現が、その地域でより高い効果を発揮するかどうかをテストします。
        </li>
      </ul>

      <h2>最初にテストすべきではないこと</h2>
      <p>
        どのセット全体が勝つかだけを気にするのでない限り、すべてのスクリーンショット、見出し、背景、機能の順序を一度に変更しないでください。バリアントのパフォーマンスが向上したとしても、その理由が分からなくなってしまいます。トラフィックが限られている個人開発アプリにとって、それは有用なシグナルを無駄にすることになります。
      </p>
      <p>
        まずは影響の大きい変更を1つだけ行います。最初のスクリーンショット、最初の見出し、メインの視覚的スタイル、または機能の順序などです。勝者が決まったら、それを新しい基準（ベースライン）として使用します。
      </p>

      <h2>App Storeでのテスト実行方法</h2>
      <ol>
        <li>現在の情報と同じストアサイズで、すっきりとしたスクリーンショットのバリアントを作成します。</li>
        <li>App Store Connectを開き、プロダクトページの最適化テストを作成します。</li>
        <li>最大3つのパターンを選択し、テストに割り当てるトラフィックの割合を決定します。</li>
        <li>後でApp Analyticsで確認したときにわかりやすいよう、説明的なテスト名を付けます。</li>
        <li>勝者を適用する前に、十分なデータが蓄積されるまで待ちます。</li>
      </ol>
      <p>
        Appleは、テストパターンに選ばれたユーザーは、テスト期間中ずっと同じパターンを目にすることになると説明しています。代替のスクリーンショットやAppプレビューは、オリジナルのアセットと同様に、検索結果やApp Storeの他の場所に表示される場合があります。
      </p>

      <h2>Google Playでのテスト実行方法</h2>
      <ol>
        <li>Play Consoleを開き、「ストアでの存在感」から「ストア情報の実験」に移動します。</li>
        <li>デフォルトのグラフィック実験またはローカライズされた実験を作成します。</li>
        <li>ターゲットとする指標、ターゲット層、バリアント、および検出可能な最小効果を選択します。</li>
        <li>可能な限り、一度にテストする属性は1つだけにします。</li>
        <li>結果を確認し、勝者となったバリアントを適用するか、現在の情報を維持します。</li>
      </ol>
      <p>
        Googleは、ターゲットとする指標として「維持された新規インストールユーザー」を推奨しています。また、Google Playにログインしていないユーザーには実験的なバリアントが表示されないことも警告しています。
      </p>

      <h2>どれくらいのトラフィックが必要か？</h2>
      <p>
        万能な数字はありません。トラフィックの少ないアプリはより長い時間が必要であり、微細な視覚的差異を検出するにはより多くのトラフィックが必要です。アプリへのストア訪問数が限られている場合は、より明確な最初のスクリーンショット、新しいバリュープロポジション、ローカライズされた視点など、より大きな違いをテストしてください。
      </p>
      <p>
        決着がつかなかった結果も情報として捉えましょう。それは変更が小さすぎたか、ターゲット層が少なすぎたか、あるいは両方のバージョンがほぼ同等であったことを意味している可能性があります。
      </p>

      <h2>実践的なスクリーンショットテストのチェックリスト</h2>
      <ul>
        <li>バリアントをデザインする前に、仮説を1つ書き出します。</li>
        <li>テスト1回につき、変更する主要なアイデアは1つだけにします。</li>
        <li>App StoreとGoogle Playの有効なスクリーンショットの寸法を使用します。</li>
        <li>コントロール（統制群）とバリアントの間で、ローカライズの整合性を保ちます。</li>
        <li>初期の数値が良いからといって、すぐにテストを中止しないでください。</li>
        <li>次のテストが実際の学習から始められるよう、変更内容を記録に残します。</li>
      </ul>

      <h2>Screenshot Broがお役に立てる理由</h2>
      <p>
        A/Bテストではスクリーンショットのバリアントを作成します。ここで手動のワークフローは非常に煩雑になります。Figmaファイルの複製、PNGのファイル名変更、ロケールごとのフォルダ分け、繰り返される書き出しなどです。{" "}
        <a href="/">Screenshot Bro</a>{" "}
        は、スクリーンショットのセットを構造化された状態に保つのに役立ち、ベースラインを見失うことなくバリアントの作成、ローカライズ、正しいファイルの書き出しを行えるようにします。
      </p>
      <p>
        今でも手作業でバリアントをデザインしている場合は、{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          FigmaでApp Storeのスクリーンショットをデザインする方法
        </a>{" "}
        を読み、そのワークフローを専用の{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          アプリストアスクリーンショットツール
        </a>{" "}
        と比較してみてください。
      </p>
    </>
  );
}

function ContentPt() {
  return (
    <>
      <p>
        As capturas de tela são um dos ativos da App Store mais fáceis de alterar, mas
        um dos mais difíceis de julgar por opinião. Os testes A/B oferecem uma maneira
        de comparar ideias de capturas de tela com o tráfego real da loja, em vez de
        discutir sobre qual versão fica melhor em um arquivo de design.
      </p>
      <p>
        Tanto a Apple quanto o Google oferecem suporte a experimentos de listagem de loja. A Apple chama
        seu sistema de{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Otimização da Página do Produto
        </a>
        . O Google chama seu sistema de{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          Experimentos com Detalhes do App
        </a>
        . A mecânica é diferente, mas a estratégia de captura de tela é a
        mesma: testar uma hipótese clara por vez.
      </p>

      <h2>O que você pode testar</h2>
      <p>
        Na App Store, a Otimização da Página do Produto permite testar até
        três versões alternativas da página do produto em relação à original. A Apple
        informa que você pode testar ícones do aplicativo, capturas de tela e vídeos de pré-visualização,
        depois visualizar os resultados no App Analytics e aplicar la versão com melhor desempenho.
      </p>
      <p>
        No Google Play, os Experimentos com Detalhes do App podem testar ativos gráficos
        como ícones, gráficos de recursos, capturas de tela e vídeos promocionais.
        Experimentos localizados também podem testar campos de texto, como descrições curtas e
        completas. O Google afirma que cada aplicativo pode executar um experimento gráfico padrão
        ou até cinco experimentos localizados ao mesmo tempo.
      </p>

      <h2>Boas ideias de teste de captura de tela</h2>
      <ul>
        <li>
          <strong>Foco no resultado vs. foco nos recursos:</strong> priorize o benefício para o
          usuário ou priorize a interface do produto.
        </li>
        <li>
          <strong>Primeira captura de tela diferente:</strong> teste a captura de tela inicial
          porque ela carrega o maior peso na primeira impressão.
        </li>
        <li>
          <strong>Interface limpa vs. interface moldurada:</strong> teste capturas de tela da interface
          bruta contra capturas de tela de marketing com moldura de dispositivo.
        </li>
        <li>
          <strong>Título curto vs. título específico:</strong> compare a clareza emocional com os
          detalhes concretos dos recursos.
        </li>
        <li>
          <strong>Conceito localizado:</strong> teste se um recurso ou frase específica de um mercado
          funciona melhor para um determinado idioma/região.
        </li>
      </ul>

      <h2>O que não testar primeiro</h2>
      <p>
        Não altere todas as capturas de tela, títulos, planos de fundo e ordem dos recursos
        de uma só vez, a menos que você só se preocupe com qual conjunto completo vencerá. Se a
        variante tiver um desempenho melhor, você não saberá o motivo. Para aplicativos independentes com
        tráfego limitado, isso desperdiça sinais úteis.
      </p>
      <p>
        Comece com uma alteração de alto impacto: a primeira captura de tela, o primeiro
        título, o estilo visual principal ou a ordem dos recursos. Assim que tiver um vencedor,
        use-o como a nova linha de base.
      </p>

      <h2>Como executar o teste na App Store</h2>
      <ol>
        <li>Crie uma variante de captura de tela limpa com os mesmos tamanhos de loja da sua listagem atual.</li>
        <li>Abra o App Store Connect e crie um teste de Otimização da Página do Produto.</li>
        <li>Escolha até três tratamentos e decida quanto tráfego entrará no teste.</li>
        <li>Mantenha o nome do teste descritivo para que você possa entendê-lo mais tarde no App Analytics.</li>
        <li>Aguarde dados suficientes antes de aplicar o vencedor.</li>
      </ol>
      <p>
        A Apple observa que as pessoas selecionadas para um tratamento veem o mesmo
        tratamento durante a duração do teste. Capturas de tela alternativas e pré-visualizações do
        aplicativo podem aparecer nos resultados de pesquisa e em outras áreas da App Store,
        assim como seus ativos originais.
      </p>

      <h2>Como executar o teste no Google Play</h2>
      <ol>
        <li>Abra o Play Console, acesse Presença na loja e, em seguida, Experimentos com detalhes do app.</li>
        <li>Crie um experimento gráfico padrão ou um experimento localizado.</li>
        <li>Selecione a métrica desejada, público-alvo, variantes e efeito mínimo detectável.</li>
        <li>Teste um atributo por vez, quando possível.</li>
        <li>Revise o resultado e aplique a variante vencedora ou mantenha a listagem atual.</li>
      </ol>
      <p>
        O Google recomenda instaladores de primeira viagem retidos como métrica alvo.
        Também alerta que usuários que não estiverem conectados ao Google Play não
        verão as variantes experientes.
      </p>

      <h2>De quanto tráfego você precisa?</h2>
      <p>
        Não existe um número universal. Aplicativos com pouco tráfego precisam de mais tempo, e
        pequenas diferenças visuais precisam de mais tráfego para serem detectadas. Se o seu aplicativo
        tiver visitas limitadas à loja, teste diferenças maiores: uma primeira captura de tela mais clara,
        uma nova proposta de valor ou uma abordagem localizada.
      </p>
      <p>
        Trate resultados inconclusivos como informação. Eles podem significar que a mudança
        foi muito pequena, o público foi muito reduzido ou ambas as versões eram
        praticamente equivalentes.
      </p>

      <h2>Um checklist prático para testes de captura de tela</h2>
      <ul>
        <li>Escreva uma hipótese antes de projetar a variante.</li>
        <li>Altere uma ideia principal por teste.</li>
        <li>Use dimensões de captura de tela válidas para a App Store e Google Play.</li>
        <li>Mantenha a localização consistente entre o grupo de controle e a variante.</li>
        <li>Não pare um teste apenas porque os números iniciais parecem empolgantes.</li>
        <li>Documente o que mudou para que o próximo teste comece a partir de um aprendizado real.</li>
      </ul>

      <h2>Onde o Screenshot Bro se encaixa</h2>
      <p>
        Os testes A/B criam variantes de capturas de tela. É exatamente aí que os fluxos de trabalho
        manuais se tornam complicados: arquivos do Figma duplicados, arquivos PNG renomeados,
        pastas de idiomas e exportações repetidas. <a href="/">Screenshot Bro</a>{" "}
        ajuda você a manter os conjuntos de capturas de tela estruturados para que você possa criar
        variantes, localizá-las e exportar os arquivos certos sem perder a linha de base.
      </p>
      <p>
        Se você ainda estiver projetando variantes manualmente, leia{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          Como projetar capturas de tela da App Store no Figma
        </a>{" "}
        e depois compare esse fluxo de trabalho com uma{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          ferramenta dedicada de capturas de tela de lojas de aplicativos
        </a>
        .
      </p>
    </>
  );
}

function ContentIt() {
  return (
    <>
      <p>
        Gli screenshot sono tra gli elementi dell&apos;App Store più semplici da modificare, ma
        anche tra i più difficili da valutare in base alle opinioni personali. I test A/B offrono un modo
        per confrontare le idee di screenshot con il traffico reale dello store, invece di
        discutere su quale versione sia migliore in un file di progettazione.
      </p>
      <p>
        Sia Apple e Google supportano gli esperimenti sulle schede dello store. Apple chiama
        il suo sistema{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ottimizzazione della pagina prodotto
        </a>
        . Google chiama il suo sistema{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          Esperimenti con la scheda dello store
        </a>
        . I meccanismi sono diversi, ma la strategia degli screenshot è la
        stessa: testare un&apos;unica ipotesi chiara alla volta.
      </p>

      <h2>Cosa puoi testare</h2>
      <p>
        Sull&apos;App Store, l&apos;Ottimizzazione della pagina prodotto ti consente di testare fino a
        tre versioni alternative della pagina prodotto rispetto a quella originale. Apple
        indica che puoi testare icone dell&apos;app, screenshot e video di anteprima dell&apos;app,
        quindi visualizzare i risultati in App Analytics e applicare la versione con il rendimento migliore.
      </p>
      <p>
        Su Google Play, gli Esperimenti con la scheda dello store possono testare elementi grafici
        come icone, grafica promozionale, screenshot e video promozionali.
        Gli esperimenti localizzati possono anche testare campi di testo come le descrizioni brevi e
        complete. Google dichiara che ogni app può eseguire contemporaneamente un esperimento grafico predefinito
        o fino a cinque esperimenti localizzati.
      </p>

      <h2>Idee efficaci per i test degli screenshot</h2>
      <ul>
        <li>
          <strong>Focalizzato sui risultati rispetto alle funzionalità:</strong> dare priorità al vantaggio per l&apos;utente
          oppure all&apos;interfaccia utente del prodotto.
        </li>
        <li>
          <strong>Primo screenshot differente:</strong> testa il primo screenshot
          perché è quello che incide maggiormente sulla prima impressione.
        </li>
        <li>
          <strong>Interfaccia semplice rispetto a inserita in un dispositivo:</strong> testa screenshot dell&apos;interfaccia
          semplice rispetto a screenshot di marketing inseriti nella cornice di un dispositivo.
        </li>
        <li>
          <strong>Titolo breve rispetto a titolo specifico:</strong> confronta la chiarezza emotiva con i
          dettagli concreti delle funzionalità.
        </li>
        <li>
          <strong>Concetto localizzato:</strong> testa se una funzionalità o una frase specifica per un mercato
          funziona meglio per una determinata lingua o paese.
        </li>
      </ul>

      <h2>Cosa non testare per primo</h2>
      <p>
        Non modificare contemporaneamente tutti gli screenshot, i titoli, gli sfondi e l&apos;ordine delle funzionalità,
        a meno che non ti interessi solo sapere quale pacchetto completo sia il vincitore. Se la variante ottiene
        prestazioni migliori, non saprai perché. Per le app indipendenti con traffico limitato, questo
        significa disperdere informazioni utili.
      </p>
      <p>
        Inizia con una singola modifica ad alto impatto: il primo screenshot, il primo
        titolo, lo stile visivo principale o l&apos;ordine delle funzionalità. Una volta ottenuto un vincitore,
        utilizzalo como nuova base di riferimento.
      </p>

      <h2>Come eseguire le test sull&apos;App Store</h2>
      <ol>
        <li>Crea una variante pulita dello screenshot con le stesse dimensioni del tuo store attuale.</li>
        <li>Apri App Store Connect e crea un test di Ottimizzazione della pagina prodotto.</li>
        <li>Scegli fino a tre varianti di trattamento e decidi la percentuale di traffico da assegnare al test.</li>
        <li>Assegna un nome descrittivo al test in modo da poterlo comprendere facilmente in seguito su App Analytics.</li>
        <li>Attendi di avere dati sufficienti prima di applicare la versione vincente.</li>
      </ol>
      <p>
        Apple fa notare che gli utenti selezionati per una variante vedranno lo stesso
        trattamento per l&apos;intera durata del test. Gli screenshot alternativi e i video di anteprima dell&apos;app
        possono apparire nei risultati di ricerca e in altre sezioni dell&apos;App Store, proprio come i tuoi elementi originali.
      </p>

      <h2>Come eseguire il test su Google Play</h2>
      <ol>
        <li>Apri Play Console, vai su Presenza nello store e seleziona Esperimenti con la scheda dello store.</li>
        <li>Crea un esperimento grafico predefinito o un esperimento localizzato.</li>
        <li>Seleziona la metrica obiettivo, il pubblico, le varianti e l&apos;effetto minimo rilevabile.</li>
        <li>Testa un singolo attributo alla volta, quando possibile.</li>
        <li>Esamina il risultato e applica la variante vincente oppure mantieni la scheda attuale.</li>
      </ol>
      <p>
        Google consiglia gli utenti fidelizzati al primo download come metrica di riferimento.
        Inoltre, avverte che gli utenti che non hanno effettuato l&apos;accesso a Google Play non
        vedranno le varianti sperimentali.
      </p>

      <h2>Di quanto traffico hai bisogno?</h2>
      <p>
        Non esiste un numero universale. Le app con traffico limitato hanno bisogno di più tempo, e
        le minime differenze visive richiedono più traffico per essere rilevate. Se la tua app
        riceve poche visite nello store, testa differenze più evidenti: un primo screenshot più chiaro,
        una nuova proposta di valore o un punto di vista localizzato.
      </p>
      <p>
        Considera i risultati non conclusivi come informazioni utili. Possono indicare che la modifica
        era troppo ridotta, il pubblico troppo limitato, o che entrambe le versioni erano
        sostanzialmente equivalenti.
      </p>

      <h2>Una checklist pratica per il test degli screenshot</h2>
      <ul>
        <li>Scrivi un&apos;ipotesi prima di progettare la variante.</li>
        <li>Modifica una sola idea principale per ciascun test.</li>
        <li>Utilizza dimensioni degli screenshot valide per App Store e Google Play.</li>
        <li>Mantieni coerente la localizzazione tra il gruppo di controllo e la variante.</li>
        <li>Non interrompere un test solo perché i primi dati sembrano incoraggianti.</li>
        <li>Documenta cosa è cambiato in modo che il test successivo possa iniziare da un apprendimento reale.</li>
      </ul>

      <h2>Il ruolo di Screenshot Bro</h2>
      <p>
        I test A/B creano varianti di screenshot. È proprio in questa fase che i flussi di lavoro
        manuali si complicano: file Figma duplicati, file PNG rinominati,
        cartelle per ciascuna lingua ed esportazioni ripetute. <a href="/">Screenshot Bro</a>{" "}
        ti aiuta a mantenere organizzati i tuoi set di screenshot per poter creare
        varianti, localizzarle ed esportare i file corretti senza perdere la base di riferimento.
      </p>
      <p>
        Se stai ancora progettando le varianti a mano, leggi{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          Come progettare screenshot per App Store in Figma
        </a>{" "}
        e confronta poi quel flusso di lavoro con uno{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          strumento dedicato agli screenshot per app store
        </a>
        .
      </p>
    </>
  );
}

function ContentKo() {
  return (
    <>
      <p>
        스크린샷은 수정하기 가장 쉬운 App Store 자산 중 하나이지만, 주관적인 의견만으로 판단하기에는
        가장 까다로운 자산이기도 합니다. A/B 테스트는 디자인 파일에서 어떤 버전이 더 나아 보이는지
        논쟁하는 대신, 실제 스토어 트래픽을 대상으로 스크린샷 아이디어를 비교할 수 있는 방법을 제공합니다.
      </p>
      <p>
        Apple과 Google 모두 스토어 등록정보 실험을 지원합니다. Apple은 이 시스템을{" "}
        <a
          href="https://developer.apple.com/app-store/product-page-optimization/"
          target="_blank"
          rel="noopener noreferrer"
        >
          제품 페이지 최적화 (Product Page Optimization)
        </a>
        라고 부르며, Google은{" "}
        <a
          href="https://support.google.com/googleplay/android-developer/answer/12053285"
          target="_blank"
          rel="noopener noreferrer"
        >
          스토어 등록정보 실험 (Store Listing Experiments)
        </a>
        이라고 부릅니다. 세부적인 메커니즘은 다르지만, 스크린샷 전략은 동일합니다. 즉, 한 번에 하나의 명확한 가설만 테스트하는 것입니다.
      </p>

      <h2>테스트할 수 있는 항목</h2>
      <p>
        App Store의 제품 페이지 최적화를 사용하면 원본 페이지와 대조하여 최대 3개의 대체 제품 페이지 버전을 테스트할 수 있습니다. Apple에 따르면 앱 아이콘, 스크린샷, 앱 미리보기 비디오를 테스트한 후, App Analytics에서 결과를 확인하고 가장 성과가 좋은 버전을 적용할 수 있습니다.
      </p>
      <p>
        Google Play의 스토어 등록정보 실험에서는 아이콘, 그래픽 이미지, 스크린샷, 프로모션 비디오 등의 그래픽 자산을 테스트할 수 있습니다. 현지화된 실험을 통해서는 간단한 설명 및 전체 설명과 같은 텍스트 필드도 테스트할 수 있습니다. Google에 따르면 각 앱은 하나의 기본 그래픽 실험 또는 최대 5개의 현지화된 실험을 동시에 실행할 수 있습니다.
      </p>

      <h2>효과적인 스크린샷 테스트 아이디어</h2>
      <ul>
        <li>
          <strong>결과 우선 vs 기능 우선:</strong> 사용자 혜택을 전면에 내세울 것인지, 아니면 제품 UI를 먼저 보여줄 것인지 테스트합니다.
        </li>
        <li>
          <strong>첫 번째 스크린샷 변경:</strong> 첫인상에 가장 큰 영향을 미치므로 첫 번째 스크린샷을 다르게 구성해 봅니다.
        </li>
        <li>
          <strong>기본 UI vs 프레임 적용 UI:</strong> 그래픽 요소가 없는 실제 인터페이스 스크린샷과 기기 프레임이 씌워진 마케팅용 스크린샷을 비교합니다.
        </li>
        <li>
          <strong>짧은 헤드라인 vs 구체적인 헤드라인:</strong> 정서적으로 와닿는 직관적인 문구와 구체적인 기능 설명 중 어느 것이 더 효과적인지 비교합니다.
        </li>
        <li>
          <strong>현지화된 콘셉트:</strong> 특정 시장 전용 기능이나 문구가 해당 지역에서 더 좋은 성과를 내는지 테스트합니다.
        </li>
      </ul>

      <h2>처음에 테스트하지 말아야 할 것</h2>
      <p>
        어떤 조합 세트 전체가 우세한지만 알고 싶은 것이 아니라면, 모든 스크린샷, 헤드라인, 배경, 기능 순서를 한 번에 변경하지 마세요. 변형 버전이 더 나은 성과를 거두더라도 그 정확한 원인을 알 수 없기 때문입니다. 트래픽이 제한적인 인디 앱의 경우, 이는 유용한 분석 기회를 낭비하는 셈이 됩니다.
      </p>
      <p>
        우선 영향력이 큰 하나의 변경 사항부터 시작하세요. 첫 번째 스크린샷, 첫 번째 헤드라인, 주요 비주얼 스타일, 또는 기능 순서 등이 좋습니다. 승리한 버전이 나오면 이를 새로운 기준점(baseline)으로 삼으세요.
      </p>

      <h2>App Store에서 테스트를 실행하는 방법</h2>
      <ol>
        <li>현재 등록정보와 동일한 스토어 크기로 깔끔한 스크린샷 변형 버전을 만듭니다.</li>
        <li>App Store Connect를 열고 제품 페이지 최적화 테스트를 생성합니다.</li>
        <li>최대 3개의 대안을 선택하고 테스트에 투입할 트래픽 비율을 결정합니다.</li>
        <li>나중에 App Analytics에서 쉽게 파악할 수 있도록 테스트 이름을 구체적으로 작성합니다.</li>
        <li>성공적인 버전을 적용하기 전에 충분한 데이터가 쌓일 때까지 기다립니다.</li>
      </ol>
      <p>
        Apple은 테스트 그룹으로 선택된 사용자들은 테스트가 진행되는 동안 동일한 버전을 보게 된다고 설명합니다. 대체 스크린샷 및 앱 미리보기는 원본 자산과 마찬가지로 검색 결과 및 App Store의 다른 영역에 노출될 수 있습니다.
      </p>

      <h2>Google Play에서 테스트를 실행하는 방법</h2>
      <ol>
        <li>Play Console을 열고 &apos;스토어 등록 정보&apos;로 이동한 다음 &apos;스토어 등록정보 실험&apos;을 선택합니다.</li>
        <li>기본 그래픽 실험 또는 현지화된 실험을 생성합니다.</li>
        <li>타겟 메트릭, 잠재고객, 변형 버전 및 최소 감지 효과 크기를 선택합니다.</li>
        <li>가능하면 한 번에 하나의 속성만 테스트하세요.</li>
        <li>결과를 검토하고 우세한 변형 버전을 적용하거나 기존 등록정보를 유지합니다.</li>
      </ol>
      <p>
        Google은 타겟 메트릭으로 &apos;유지된 신규 설치 사용자&apos;를 권장합니다. 또한 Google Play에 로그인하지 않은 사용자에게는 실험 버전이 표시되지 않을 수 있다고 경고합니다.
      </p>

      <h2>얼마나 많은 트래픽이 필요할까요?</h2>
      <p>
        모든 앱에 적용되는 절대적인 숫자는 없습니다. 트래픽이 적은 앱일수록 더 오랜 시간이 걸리고, 미세한 시각적 차이를 감지하려면 더 많은 트래픽이 필요합니다. 스토어 방문자 수가 한정되어 있다면 더 명확한 첫 번째 스크린샷, 새로운 가치 제안, 현지화된 접근법 등 차이가 확연한 요소를 테스트해 보세요.
      </p>
      <p>
        결과가 확실하지 않은 실험도 유용한 정보로 받아들이세요. 이는 변경폭이 너무 미미했거나, 모수가 너무 부족했거나, 혹은 두 버전이 사실상 거의 동일한 효과를 냈음을 의미할 수 있습니다.
      </p>

      <h2>실용적인 스크린샷 테스트 체크리스트</h2>
      <ul>
        <li>변형 버전을 디자인하기 전에 하나의 가설을 세웁니다.</li>
        <li>테스트당 하나의 주요 아이디어만 변경합니다.</li>
        <li>유효한 App Store 및 Google Play 스크린샷 규격을 사용합니다.</li>
        <li>대조군과 실험군 간에 현지화 수준을 일정하게 유지합니다.</li>
        <li>초기 데이터가 흥미로워 보인다는 이유만으로 테스트를 조기 종료하지 마세요.</li>
        <li>다음 테스트가 실제 학습을 바탕으로 시작될 수 있도록 변경 사항을 문서화해 둡니다.</li>
      </ul>

      <h2>Screenshot Bro가 필요한 이유</h2>
      <p>
        A/B 테스트를 하려면 스크린샷 변형 버전을 제작해야 합니다. 이때 피그마 파일 복제, PNG 파일명 변경, 언어별 폴더 관리, 반복되는 내보내기 등으로 수동 워크플로가 복잡해지기 쉽습니다.{" "}
        <a href="/">Screenshot Bro</a>는 스크린샷 세트를 구조화된 상태로 유지할 수 있도록 지원하므로, 기준점을 잃지 않고 변형 버전을 생성, 현지화 및 올바른 파일로 손쉽게 내보낼 수 있습니다.
      </p>
      <p>
        여전히 변형 버전을 수동으로 디자인하고 계신다면,{" "}
        <a href="/blog/design-app-store-screenshots-in-figma">
          Figma에서 App Store 스크린샷을 디자인하는 방법
        </a>
        을 읽어보신 후, 그 워크플로를 전용{" "}
        <a href="/blog/best-app-store-screenshot-tools">
          앱 스토어 스크린샷 도구
        </a>
        와 비교해 보세요.
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
        En Google Play, los experimentos con fichas de tienda pueden probar recursos gráficos como iconos, gráficos de funciones, capturas de pantalla y videos promocionales. Los experimentos localizados también pueden probar campos de texto como descripciones cortas y completas. Google señala que cada aplicación puede ejecutar un experimento gráfico predeterminado o hasta cinco experimentos localizados al mismo tempo.
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
        No existe un número universal. Las aplicaciones con poco tráfico necesitan más tempo, y las pequeñas diferencias visuales requieren más tráfico para ser detectadas. Si tu aplicación recibe visitas limitadas en la tienda, prueba diferencias más grandes: una primera captura de pantalla más clara, una nueva propuesta de valor o un enfoque localizado.
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
        y luego compara ese flujo de trabalho con una{" "}
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
        앱 स्टोर पर, उत्पाद पृष्ठ अनुकूलन (Product Page Optimization) आपको अपने मूल पृष्ठ के विरुद्ध अधिकतम तीन वैकल्पिक उत्पाद पृष्ठ संस्करणों का परीक्षण करने देता है। Apple का कहना है कि आप ऐप आइकन, स्क्रीनशॉट और ऐप पूर्वावलोकन वीडियो का परीक्षण कर सकते हैं, फिर ऐप एनालिटिक्स में परिणाम देख सकते हैं और सर्वोत्तम प्रदर्शन करने वाले संस्करण को लागू कर सकते हैं।
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
        <li> may use valid ऐप स्टोर और Google Play स्क्रीनशॉट आयामों का उपयोग करें।</li>
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
        Sur Google Play, les Expériences de fiche produit peuvent tester des éléments graphiques tels que les icônes, les graphismes de présentation, les captures d&apos;écran et les vidéos promotionnelles. Les expériences localisées peuvent également tester des champs de texte comme les descriptions courtes et complètes. Google précise que chaque application peut exécuter une expérience graphique par défaut ou jusqu&apos;à de cinq expériences localisées en même temps.
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
        Considerez les résultats non concluants comme des informations utiles. Ils peuvent signifier que le changement était trop minime, que l&apos;audience était too restreinte, ou que les deux versions étaient à peu près équivalentes.
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
        في متجر التطبيقات، يتيح لك تحسين صفحة المنتج اختبار ما يصل إلى ثلاثة إصدارات بديلة لصفحة المنتج مقارنة بالإصدار الأصلي. تقول Apple إنه يمكنك اختبار أيقونات التطبيقات، ولقطات الشاشة، وفيديوهات معاينة التطبيق, ثم عرض النتائج في تحليلات التطبيق وتطبيق الإصدار الأفضل أداءً.
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
        <li>أنشئ بديلًا نظيفًا لللقطات الشاشة بنفس المقاسات الحالية لبيانات متجرك.</li>
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
