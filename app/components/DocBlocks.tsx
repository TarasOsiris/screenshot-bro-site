import {
  isGlobalPath,
  localizedPath,
  type LocaleCode,
} from "~/config/localization";

// The block DSL shared by the help docs (/docs/help) and the written tutorial
// (/tutorials/how-to-use-screenshot-bro). Content lives as data; these are the
// only renderers that turn it into markup.

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "li"; text: string }
  | { kind: "oli"; text: string }
  | { kind: "tip"; text: string }
  | {
      kind: "table";
      title: string;
      rows: { keys: string; description: string }[];
    };

export type SectionImage = {
  src?: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

const MD_REGEX = /\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;

export function MD({ text, locale }: { text: string; locale: LocaleCode }) {
  const parts: React.ReactNode[] = [];
  let lastIdx = 0;
  let key = 0;
  for (const match of text.matchAll(MD_REGEX)) {
    const idx = match.index ?? 0;
    if (idx > lastIdx) {
      parts.push(text.slice(lastIdx, idx));
    }
    if (match[1] !== undefined) {
      parts.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      parts.push(<code key={key++}>{match[2]}</code>);
    } else if (match[3] !== undefined && match[4] !== undefined) {
      const href = match[4];
      const external = /^https?:\/\//.test(href);
      const localizedHref =
        href.startsWith("/") && !isGlobalPath(href) ? localizedPath(locale, href) : href;
      parts.push(
        <a
          key={key++}
          href={localizedHref}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {match[3]}
        </a>,
      );
    }
    lastIdx = idx + match[0].length;
  }
  if (lastIdx < text.length) {
    parts.push(text.slice(lastIdx));
  }
  return <>{parts}</>;
}

export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-5 rounded-lg border border-yellow-300/25 bg-yellow-300/[0.06] px-4 py-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-yellow-300/80">
        Tip
      </span>
      <p className="mt-1 mb-0 text-white/75">{children}</p>
    </div>
  );
}

export function renderBlocks(blocks: Block[], locale: LocaleCode): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.kind === "li" || b.kind === "oli") {
      const start = b.kind;
      const items: Extract<Block, { kind: "li" | "oli" }>[] = [];
      while (i < blocks.length) {
        const next = blocks[i];
        if (next.kind !== start) break;
        items.push(next);
        i++;
      }
      const ListTag = start === "oli" ? "ol" : "ul";
      out.push(
        <ListTag key={key++}>
          {items.map((item, j) => (
            <li key={j}>
              <MD text={item.text} locale={locale} />
            </li>
          ))}
        </ListTag>,
      );
    } else if (b.kind === "p") {
      out.push(
        <p key={key++}>
          <MD text={b.text} locale={locale} />
        </p>,
      );
      i++;
    } else if (b.kind === "h") {
      out.push(
        <h3 key={key++}>
          <MD text={b.text} locale={locale} />
        </h3>,
      );
      i++;
    } else if (b.kind === "tip") {
      out.push(
        <Tip key={key++}>
          <MD text={b.text} locale={locale} />
        </Tip>,
      );
      i++;
    } else if (b.kind === "table") {
      out.push(
        <div key={key++}>
          <h3>{b.title}</h3>
          <table>
            <tbody>
              {b.rows.map((row) => (
                <tr key={row.keys}>
                  <td className="whitespace-nowrap align-top w-1">
                    <code>{row.keys}</code>
                  </td>
                  <td>{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      i++;
    }
  }
  return out;
}

/** A screenshot with its caption. `src` must already be resolved by the caller. */
export function DocFigure({
  image,
  src,
  locale,
}: {
  image: SectionImage;
  src: string;
  locale: LocaleCode;
}) {
  return (
    <figure className="not-prose my-6">
      <img
        src={src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-lg border border-border-subtle bg-surface-raised"
      />
      {image.caption && (
        <figcaption className="mt-2 text-center text-xs text-white/55 italic">
          <MD text={image.caption} locale={locale} />
        </figcaption>
      )}
    </figure>
  );
}
