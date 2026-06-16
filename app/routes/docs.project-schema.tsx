import type { Route } from "./+types/docs.project-schema";
import { data, useLoaderData } from "react-router";
import { ContentLayout } from "~/components/ContentLayout";
import { buildBreadcrumbJsonLd, mergeMeta } from "~/config/meta";
import { isLocaleCode, localizedPath, type LocaleCode } from "~/config/localization";
import { SITE_NAME, SITE_URL } from "~/config/site";

const BREADCRUMB_JSON_LD = buildBreadcrumbJsonLd([
  { name: "Docs", path: "/docs/help" },
  { name: "Project Schema", path: "/docs/project-schema" },
]);

const TITLE = `Project File Schema — ${SITE_NAME}`;
const DESCRIPTION =
  "JSON Schema for the Screenshot Bro project file format. Use it to generate, validate, or transform project.json files with AI assistants, scripts, or editor tooling.";
const SCHEMA_URL = `${SITE_URL}/project-schema.json`;

function getRouteLocale(locale?: string): LocaleCode {
  return isLocaleCode(locale) ? locale : "en";
}

export async function loader({ params }: Route.LoaderArgs) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not Found", { status: 404 });
  }
  return { locale: getRouteLocale(locale) };
}

export const meta: Route.MetaFunction = ({ matches, params }) => {
  const locale = getRouteLocale(params.locale);
  const pageUrl = `${SITE_URL}${localizedPath(locale, "/docs/project-schema")}`;

  return mergeMeta(matches, [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: pageUrl },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ]);
};

export default function ProjectSchema() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <ContentLayout locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }}
      />
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <h1>Project File Schema</h1>

          <p>
            Screenshot Bro stores each project as a single <code>project.json</code>{" "}
            file inside <code>~/.screenshot/projects/&lt;uuid&gt;/</code>. The
            format is a well-defined JSON structure derived directly from the
            app's Swift <code>Codable</code> models.
          </p>

          <p>
            The full JSON Schema (Draft 2020-12) is published at:
          </p>

          <pre>
            <code>{SCHEMA_URL}</code>
          </pre>

          <h2>Using the schema with AI</h2>

          <p>
            You can give the schema URL to any AI assistant that can fetch URLs
            (Claude, ChatGPT, Gemini, etc.) and ask it to generate or modify
            project files. This is useful for:
          </p>

          <ul>
            <li>Generating a complete project from a description</li>
            <li>Batch-creating projects for multiple languages or products</li>
            <li>Transforming an existing project (adding rows, changing colors)</li>
            <li>Validating a hand-crafted project file before importing</li>
          </ul>

          <h3>Example prompt — generate a project</h3>

          <pre>
            <code>{`Fetch the JSON Schema at ${SCHEMA_URL} and use it to generate a valid project.json for Screenshot Bro.

Requirements:
- Two rows: one for iPhone 17 (1290×2796) and one for iPad Pro 13" (2064×2752)
- Three templates per row (three color variants)
- Each template has a text shape with the headline "Focus on what matters" centered at the top
- Each template has a device shape showing an iPhone 17 / iPad Pro frame
- Background: a blue-to-purple linear gradient

Return only the raw JSON with no explanation.`}
            </code>
          </pre>

          <h3>Example prompt — edit a project</h3>

          <pre>
            <code>{`Here is my Screenshot Bro project.json (attached). The schema is at ${SCHEMA_URL}.

Change all text shapes whose \`txt\` field contains "Download now" to "Try it free".
Keep everything else unchanged.
Return only the updated JSON.`}
            </code>
          </pre>

          <h3>Using the schema in Claude Projects or a system prompt</h3>

          <p>
            For repeated use, add the schema to a Claude Project or paste it
            into a system prompt so the AI always has it available:
          </p>

          <pre>
            <code>{`You are a Screenshot Bro project file generator. The project file format is
defined by this JSON Schema:

[paste contents of ${SCHEMA_URL} here]

When the user describes a set of screenshots, produce a valid project.json.
Use UUIDs for all \`id\` fields. Use Swift reference-date timestamps
(seconds since 2001-01-01) for the \`m\` field.`}
            </code>
          </pre>

          <h2>File structure overview</h2>

          <p>
            A project file has three top-level fields:
          </p>

          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>r</code></td>
                <td>array</td>
                <td>Ordered list of screenshot rows</td>
              </tr>
              <tr>
                <td><code>ls</code></td>
                <td>object</td>
                <td>Locale state (locales, active locale, per-shape overrides)</td>
              </tr>
              <tr>
                <td><code>m</code></td>
                <td>number</td>
                <td>Last-modified timestamp (seconds since 2001-01-01)</td>
              </tr>
            </tbody>
          </table>

          <p>
            Each <strong>row</strong> (<code>r[]</code>) defines a group of
            templates at a fixed canvas size (e.g. iPhone 17 = 1290×2796). A
            row contains:
          </p>

          <ul>
            <li>
              <code>tp</code> — templates (columns), one per color/variant, each with its own background override
            </li>
            <li>
              <code>s</code> — shapes that span across all templates, positioned by x-coordinate
            </li>
          </ul>

          <p>
            <strong>Shapes</strong> (<code>s[]</code>) are typed by the{" "}
            <code>t</code> field: <code>text</code>, <code>device</code>,{" "}
            <code>image</code>, <code>rectangle</code>, <code>circle</code>,{" "}
            <code>star</code>, or <code>svg</code>.
          </p>

          <h2>Key conventions</h2>

          <ul>
            <li>
              <strong>Short keys.</strong> All JSON field names are abbreviated
              (e.g. <code>w</code> = width, <code>fs</code> = fontSize,{" "}
              <code>bgc</code> = backgroundColor). The schema description for
              each field names the full Swift property.
            </li>
            <li>
              <strong>Colors.</strong> Encoded as hex strings:{" "}
              <code>#RRGGBB</code> (opaque) or <code>#RRGGBBAA</code> (with
              alpha).
            </li>
            <li>
              <strong>Omitted defaults.</strong> Many fields are optional and
              omitted when they equal the default (e.g. <code>opacity</code> is
              omitted when 1.0, <code>rotation</code> when 0).
            </li>
            <li>
              <strong>UUIDs.</strong> Every <code>id</code> field must be a
              standard UUID string (e.g.{" "}
              <code>550e8400-e29b-41d4-a716-446655440000</code>).
            </li>
            <li>
              <strong>Coordinates.</strong> All x/y/w/h values are in
              model-space points at the template's native resolution. Shapes
              that span multiple templates use the combined canvas width (
              <code>templateWidth × templateCount</code>).
            </li>
          </ul>

          <h2>Minimal example</h2>

          <pre>
            <code>{`{
  "r": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "l": "iPhone 17",
      "tw": 1290,
      "th": 2796,
      "bgc": "#FFFFFF",
      "ddc": "iphone",
      "tp": [
        { "id": "550e8400-e29b-41d4-a716-446655440002", "bgc": "#FFFFFF" }
      ],
      "s": [
        {
          "id": "550e8400-e29b-41d4-a716-446655440003",
          "t": "text",
          "x": 100, "y": 150, "w": 1090, "h": 200,
          "c": "#1A1A1A",
          "txt": "Your App Headline",
          "fs": 72,
          "fw": 700,
          "ta": "center"
        }
      ]
    }
  ]
}`}
            </code>
          </pre>

          <h2>Validation</h2>

          <p>
            You can validate a project file against the schema using any
            JSON Schema validator. With the{" "}
            <a
              href="https://github.com/ajv-validator/ajv"
              target="_blank"
              rel="noopener noreferrer"
            >
              ajv
            </a>{" "}
            CLI:
          </p>

          <pre>
            <code>{`npx ajv validate -s ${SCHEMA_URL} -d project.json --spec=draft2020`}
            </code>
          </pre>

          <p>
            Or in Python with{" "}
            <a
              href="https://github.com/python-jsonschema/jsonschema"
              target="_blank"
              rel="noopener noreferrer"
            >
              jsonschema
            </a>
            :
          </p>

          <pre>
            <code>{`import json, urllib.request, jsonschema

schema = json.loads(urllib.request.urlopen("${SCHEMA_URL}").read())
project = json.load(open("project.json"))
jsonschema.validate(project, schema)`}
            </code>
          </pre>
        </article>
      </div>
    </ContentLayout>
  );
}
