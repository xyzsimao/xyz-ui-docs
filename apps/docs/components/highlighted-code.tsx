// import { CodeBlock } from 'xyzdocs-radix-ui/components/code-block';
import { highlight } from 'xyzdocs-core/highlight';
import { cacheLife } from 'next/cache';
import type { ComponentProps } from 'react';
import type { BundledLanguage } from 'shiki';
import { CodeBlock } from 'xyzdocs-radix-ui/components/codeblock';
const geistShikiTheme = {
    name: "geist",
    type: "dark",
    colors: {
        "editor.foreground": "var(--shiki-color-text, inherit)",
        "editor.background": "var(--shiki-color-background, transparent)",
    },
    tokenColors: [
        {
            scope: ["comment", "punctuation.definition.comment", "string.comment"],
            settings: { foreground: "var(--shiki-token-comment)" },
        },
        {
            scope: [
                "constant",
                "entity.name.constant",
                "variable.other.constant",
                "variable.other.enummember",
                "variable.language",
                "entity",
            ],
            settings: { foreground: "var(--shiki-token-constant)" },
        },
        {
            scope: ["entity.name", "meta.export.default", "meta.definition.variable"],
            settings: { foreground: "var(--shiki-token-function)" },
        },
        {
            scope: [
                "variable.parameter.function",
                "meta.jsx.children",
                "meta.block",
                "meta.tag.attributes",
                "entity.name.section",
                "text",
                "punctuation.definition.tag",
                "punctuation.separator.inheritance.php",
                "punctuation.definition.tag.html",
                "punctuation.definition.tag.begin.html",
                "punctuation.definition.tag.end.html",
                "punctuation.section.embedded",
                "variable.parameter",
            ],
            settings: { foreground: "var(--shiki-token-parameter)" },
        },
        {
            scope: ["entity.name.tag", "support.class.component"],
            settings: { foreground: "var(--shiki-token-function)" },
        },
        {
            scope: "keyword",
            settings: { foreground: "var(--shiki-token-keyword)" },
        },
        {
            scope: ["storage", "storage.type", "storage.modifier"],
            settings: { foreground: "var(--shiki-token-keyword)" },
        },
        {
            scope: [
                "string",
                "string punctuation.section.embedded source",
                "attribute.value",
            ],
            settings: { foreground: "var(--shiki-token-string)" },
        },
        {
            scope: [
                "punctuation",
                "punctuation.definition.string",
                "punctuation.definition.variable",
                "punctuation.definition.string.begin",
                "punctuation.definition.string.end",
                "punctuation.section.embedded.begin",
                "punctuation.section.embedded.end",
            ],
            settings: { foreground: "var(--shiki-token-punctuation)" },
        },
        {
            scope: "string.regexp",
            settings: { foreground: "var(--shiki-token-string-expression)" },
        },
        {
            scope: [
                "support.function",
                "entity.name.function",
                "meta.function-call.generic",
            ],
            settings: { foreground: "var(--shiki-token-function)" },
        },
        {
            scope: "markup.underline.link",
            settings: { foreground: "var(--shiki-token-link)" },
        },
        {
            // Markdown list/task content. Shiki's markdown grammar tokenizes
            // bracketed text (including the "x" in "[x]" task markers) as
            // `string.other.link.title.markdown`; pin those to the surrounding
            // list-item color so markdown blocks look uniform.
            scope: [
                "markup.list",
                "string.other.link.title.markdown",
                "string.other.link.description.markdown",
            ],
            settings: { foreground: "var(--shiki-token-parameter)" },
        },
    ],
};

type HighlightedCodeProps = {
  code: string;
  lang: BundledLanguage;
  filename: string;
  caption: string;
};

export const HighlightedCode = async ({
  code,
  lang,
  filename,
  caption,
}: HighlightedCodeProps) => {
  // Shiki reads Date.now() internally, so Cache Components requires the
  // highlight to be cached rather than re-run during prerendering.
  // 'use cache';
  // cacheLife('max');

  // Highlight with the same theme the docs use and render through the
  // geistdocs CodeBlock so the home page blocks match the documentation.
  const rendered = await highlight(code, {
    lang,
    engine: 'js',
    // theme: geistShikiTheme,
    components: {
      pre: ({ children, className, style }: ComponentProps<'pre'>) => (
        <CodeBlock
          lang="js"
          className={className}
          style={style}
          title={filename}
        >
          {children}
        </CodeBlock>
      ),
    },
  })

  return (
    <div className="flex  flex-col">
      <div className="  flex-1 [&_[data-slot=card-header]>div:first-child]:hidden">
        {rendered}
      </div>
      {/* <span className="mt-2 block text-copy-14 text-gray-900">{caption}</span> */}
    </div>
  )
};
