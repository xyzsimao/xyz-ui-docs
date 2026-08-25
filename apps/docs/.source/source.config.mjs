// source.config.ts
import { z } from "zod";
import {
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
    })
    // postprocess: {
    //   includeProcessedMarkdown: true,
    //   extractLinkReferences: true,
    // },
    // async: true,
    // async mdxOptions(environment) {
    //   const { rehypeCodeDefaultOptions } =
    //     await import('xyzdocs-core/mdx-plugins/rehype-code')
    //   const { remarkStructureDefaultOptions } =
    //     await import('xyzdocs-core/mdx-plugins/remark-structure')
    //   const { remarkSteps } =
    //     await import('xyzdocs-core/mdx-plugins/remark-steps')
    //   const { remarkFeedbackBlock } =
    //     await import('xyzdocs-core/mdx-plugins/remark-feedback-block')
    //   const { transformerTwoslash } = await import('xyzdocs-twoslash')
    //   const { createFileSystemTypesCache } =
    //     await import('xyzdocs-twoslash/cache-fs')
    //   const { default: remarkMath } = await import('remark-math')
    //   const { remarkTypeScriptToJavaScript } =
    //     await import('xyzdocs-docgen/remark-ts2js')
    //   const { default: rehypeKatex } = await import('rehype-katex')
    //   const {
    //     remarkAutoTypeTable,
    //     createGenerator,
    //     createFileSystemGeneratorCache,
    //   } = await import('xyzdocs-typescript')
    //   const feedbackOptions: RemarkFeedbackBlockOptions = {
    //     resolve(node) {
    //       // defensive approach
    //       if (node.type === 'mdxJsxFlowElement') return 'skip'
    //       return (
    //         node.type === 'paragraph' ||
    //         node.type === 'image' ||
    //         node.type === 'list'
    //       )
    //     },
    //   }
    //   const typeTableOptions: RemarkAutoTypeTableOptions = {
    //     generator: createGenerator({
    //       cache: createFileSystemGeneratorCache('.next/xyzdocs-typescript'),
    //     }),
    //     shiki: shikiConfig,
    //   }
    //   return applyMdxPreset({
    //     remarkStructureOptions: {
    //       types: [...remarkStructureDefaultOptions.types, 'code'],
    //     },
    //     rehypeCodeOptions: {
    //       langs: ['ts', 'js', 'html', 'tsx', 'mdx'],
    //       inline: 'tailing-curly-colon',
    //       themes: {
    //         // light: 'catppuccin-latte',
    //         // dark: 'catppuccin-mocha',
    //         light: 'one-light',
    //         // light: smoothuiLight,
    //         dark: 'one-dark-pro',
    //       },
    //       transformers: [
    //         ...(rehypeCodeDefaultOptions.transformers ?? []),
    //         transformerTwoslash({
    //           typesCache: createFileSystemTypesCache(),
    //         }),
    //         transformerEscape(),
    //       ],
    //     },
    //     remarkCodeTabOptions: {
    //       parseMdx: true,
    //     },
    //     remarkNpmOptions: {
    //       persist: {
    //         id: 'package-manager',
    //       },
    //     },
    //     remarkPlugins: [
    //       remarkSteps,
    //       remarkMath,
    //       [remarkFeedbackBlock, feedbackOptions],
    //       [remarkAutoTypeTable, typeTableOptions],
    //       remarkTypeScriptToJavaScript,
    //     ],
    //     rehypePlugins: (v) => [rehypeKatex, ...v],
    //   })(environment)
    // },
  }
});
var blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.iso.date().or(z.date())
  }),
  async: true
  //   async mdxOptions(environment) {
  //     const { rehypeCodeDefaultOptions } =
  //       await import('xyzdocs-core/mdx-plugins/rehype-code')
  //     const { remarkSteps } =
  //       await import('xyzdocs-core/mdx-plugins/remark-steps')
  //     return applyMdxPreset({
  //       rehypeCodeOptions: {
  //         inline: 'tailing-curly-colon',
  //         themes: {
  //           // light: 'catppuccin-latte',
  //           // dark: 'catppuccin-mocha',
  //           light: 'one-light',
  //           dark: 'one-dark-pro',
  //         },
  //         transformers: [
  //           ...(rehypeCodeDefaultOptions.transformers ?? []),
  //           transformerEscape(),
  //         ],
  //       },
  //       remarkCodeTabOptions: {
  //         parseMdx: true,
  //       },
  //       remarkNpmOptions: {
  //         persist: {
  //           id: 'package-manager',
  //         },
  //       },
  //       remarkPlugins: [remarkSteps],
  //     })(environment)
  //   },
});
export {
  blog,
  docs
};
