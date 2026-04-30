export function CodeBlock({ html }: { html: string }) {
  return (
    <pre className="hljs">
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
}
