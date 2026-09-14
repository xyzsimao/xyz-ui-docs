// source.config.ts
import { z } from "zod";
import {
  applyMdxPreset,
  defineCollections,
  defineConfig,
  defineDocs,
  metaSchema,
  frontmatterSchema
} from "xyzdocs-mdx/config";
import jsonSchema from "xyzdocs-mdx/plugins/json-schema";
import lastModified from "xyzdocs-mdx/plugins/last-modified";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkDirective from "remark-directive";
import { remarkDirectiveAdmonition } from "xyzdocs-core/mdx-plugins";
import codeImport from "remark-code-import";
var docs = defineDocs({
  dir: "content/docs",
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional()
    })
  },
  docs: {
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
      index: z.boolean().default(false),
      /**
       * API routes only
       */
      method: z.string().optional()
    }),
    postprocess: {
      includeProcessedMarkdown: true,
      extractLinkReferences: true
    },
    // lastModified: true,
    async: true,
    // preset: 'xyzdocs',
    async mdxOptions(environment) {
      const { rehypeCodeDefaultOptions } = await import("xyzdocs-core/mdx-plugins/rehype-code");
      const { remarkStructureDefaultOptions } = await import("xyzdocs-core/mdx-plugins/remark-structure");
      const { remarkSteps } = await import("xyzdocs-core/mdx-plugins/remark-steps");
      return applyMdxPreset({
        remarkStructureOptions: {
          types: [...remarkStructureDefaultOptions.types, "code"]
        },
        rehypeCodeOptions: {
          inline: "tailing-curly-colon",
          themes: {
            light: "one-light",
            dark: "one-dark-pro"
          },
          transformers: [
            ...rehypeCodeDefaultOptions.transformers ?? []
            // transformerTwoslash({
            //   typesCache: createFileSystemTypesCache(),
            // }),
            // transformerEscape(),
          ]
        },
        // remarkCodeTabOptions: {
        //   parseMdx: true,
        // },
        // remarkNpmOptions: {
        //   persist: {
        //     id: 'package-manager',
        //   },
        // },
        // remarkPlugins: [
        //   remarkSteps,
        //   remarkMath,
        //   // [remarkFeedbackBlock, feedbackOptions],
        //   // [remarkAutoTypeTable, typeTableOptions],
        //   // remarkTypeScriptToJavaScript,
        // ],
        remarkPlugins: (v) => [
          remarkSteps,
          ...v,
          remarkMath,
          remarkDirective,
          // [!code ++]
          remarkDirectiveAdmonition,
          codeImport
        ],
        rehypePlugins: (v) => [
          [
            rehypeKatex,
            {
              throwOnError: false
              // KaTeX 其他选项
            }
          ],
          ...v
        ]
      })(environment);
    }
  }
});
var blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.iso.date().or(z.date())
  }),
  async: true,
  async mdxOptions(environment) {
    return applyMdxPreset({
      // rehypeCodeOptions: {
      //   inline: 'tailing-curly-colon',
      //   themes: {
      //     // light: 'catppuccin-latte',
      //     // dark: 'catppuccin-mocha',
      //     light: 'one-light',
      //     dark: 'one-dark-pro',
      //   },
      //   transformers: [
      //     ...(rehypeCodeDefaultOptions.transformers ?? []),
      //     transformerEscape(),
      //   ],
      // },
      // remarkCodeTabOptions: {
      //   parseMdx: true,
      // },
      // remarkNpmOptions: {
      //   persist: {
      //     id: 'package-manager',
      //   },
      // },
      remarkPlugins: []
    })(environment);
  }
});
var source_config_default = defineConfig({
  plugins: [
    jsonSchema({
      insert: true
    }),
    lastModified()
  ]
});
export {
  blog,
  source_config_default as default,
  docs
};
