// source.config.ts
import { z } from "zod";
import {
  applyMdxPreset,
  defineCollections,
  defineDocs,
  metaSchema,
  frontmatterSchema
} from "xyzdocs-mdx/config";
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
    // postprocess: {
    //   includeProcessedMarkdown: true,
    //   extractLinkReferences: true,
    // },
    async: true,
    // preset: 'minimal',
    async mdxOptions(environment) {
      return applyMdxPreset({
        // remarkStructureOptions: {
        //   types: [...remarkStructureDefaultOptions.types, 'code'],
        // },
        // rehypeCodeOptions: {
        //   langs: ['ts', 'js', 'html', 'tsx', 'mdx'],
        //   inline: 'tailing-curly-colon',
        //   themes: {
        //     // light: 'catppuccin-latte',
        //     // dark: 'catppuccin-mocha',
        //     light: 'one-light',
        //     // light: smoothuiLight,
        //     dark: 'one-dark-pro',
        //   },
        //   transformers: [
        //     ...(rehypeCodeDefaultOptions.transformers ?? []),
        //     transformerTwoslash({
        //       typesCache: createFileSystemTypesCache(),
        //     }),
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
        // remarkPlugins: [
        //   remarkSteps,
        //   remarkMath,
        //   [remarkFeedbackBlock, feedbackOptions],
        //   [remarkAutoTypeTable, typeTableOptions],
        //   remarkTypeScriptToJavaScript,
        // ],
        // rehypePlugins: (v) => [rehypeKatex, ...v],
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
export {
  blog,
  docs
};
