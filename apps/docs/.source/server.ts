// @ts-nocheck
import { frontmatter as __fd_glob_31 } from "../content/docs/miscellaneous/turborepo.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_30 } from "../content/docs/miscellaneous/md_doc.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_29 } from "../content/docs/miscellaneous/markdown.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_28 } from "../content/docs/miscellaneous/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_27 } from "../content/docs/miscellaneous/export-pdf.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_26 } from "../content/docs/miscellaneous/cva实现样式变体组件.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_25 } from "../content/docs/markdown/mdx.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_24 } from "../content/docs/mdx/collections.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_23 } from "../content/docs/javascript/units-cheatsheet.md?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_22 } from "../content/docs/javascript/test.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_21 } from "../content/docs/javascript/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_20 } from "../content/docs/design-system/字体风格.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_19 } from "../content/docs/design-system/typography.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_18 } from "../content/docs/design-system/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_17 } from "../content/docs/design-system/color.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_16 } from "../content/docs/cli/preview.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_15 } from "../content/docs/cli/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_14 } from "../content/docs/cli/create-fumadocs-app.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_13 } from "../content/docs/(framework)/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_12 } from "../content/docs/(framework)/comparisons.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_11 } from "../content/docs/tt.mdx?collection=docs&only=frontmatter"
import { default as __fd_glob_10 } from "../content/docs/miscellaneous/meta.json?collection=docs"
import { default as __fd_glob_9 } from "../content/docs/mdx/meta.json?collection=docs"
import { default as __fd_glob_8 } from "../content/docs/javascript/meta.json?collection=docs"
import { default as __fd_glob_7 } from "../content/docs/design-system/meta.json?collection=docs"
import { default as __fd_glob_6 } from "../content/docs/cli/meta.json?collection=docs"
import { default as __fd_glob_5 } from "../content/docs/(framework)/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/meta.json?collection=docs"
import { frontmatter as __fd_glob_3 } from "../content/blog/test.mdx?collection=blog&only=frontmatter"
import { frontmatter as __fd_glob_2 } from "../content/blog/openapi-v10.mdx?collection=blog&only=frontmatter"
import { frontmatter as __fd_glob_1 } from "../content/blog/2024-5-16.mdx?collection=blog&only=frontmatter"
import { frontmatter as __fd_glob_0 } from "../content/blog/2024-5-15.mdx?collection=blog&only=frontmatter"
import { server } from 'xyzdocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("xyzdocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
    blog: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
    docs: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
  }
}>({"doc":{"passthroughs":["lastModified"]}});

export const blog = await create.docLazy("blog", "content/blog", {"2024-5-15.mdx": __fd_glob_0, "2024-5-16.mdx": __fd_glob_1, "openapi-v10.mdx": __fd_glob_2, "test.mdx": __fd_glob_3, }, {"2024-5-15.mdx": () => import("../content/blog/2024-5-15.mdx?collection=blog"), "2024-5-16.mdx": () => import("../content/blog/2024-5-16.mdx?collection=blog"), "openapi-v10.mdx": () => import("../content/blog/openapi-v10.mdx?collection=blog"), "test.mdx": () => import("../content/blog/test.mdx?collection=blog"), });

export const docs = await create.docsLazy("docs", "content/docs", {"meta.json": __fd_glob_4, "(framework)/meta.json": __fd_glob_5, "cli/meta.json": __fd_glob_6, "design-system/meta.json": __fd_glob_7, "javascript/meta.json": __fd_glob_8, "mdx/meta.json": __fd_glob_9, "miscellaneous/meta.json": __fd_glob_10, }, {"tt.mdx": __fd_glob_11, "(framework)/comparisons.mdx": __fd_glob_12, "(framework)/index.mdx": __fd_glob_13, "cli/create-fumadocs-app.mdx": __fd_glob_14, "cli/index.mdx": __fd_glob_15, "cli/preview.mdx": __fd_glob_16, "design-system/color.mdx": __fd_glob_17, "design-system/index.mdx": __fd_glob_18, "design-system/typography.mdx": __fd_glob_19, "design-system/字体风格.mdx": __fd_glob_20, "javascript/index.mdx": __fd_glob_21, "javascript/test.mdx": __fd_glob_22, "javascript/units-cheatsheet.md": __fd_glob_23, "mdx/collections.mdx": __fd_glob_24, "markdown/mdx.mdx": __fd_glob_25, "miscellaneous/cva实现样式变体组件.mdx": __fd_glob_26, "miscellaneous/export-pdf.mdx": __fd_glob_27, "miscellaneous/index.mdx": __fd_glob_28, "miscellaneous/markdown.mdx": __fd_glob_29, "miscellaneous/md_doc.mdx": __fd_glob_30, "miscellaneous/turborepo.mdx": __fd_glob_31, }, {"tt.mdx": () => import("../content/docs/tt.mdx?collection=docs"), "(framework)/comparisons.mdx": () => import("../content/docs/(framework)/comparisons.mdx?collection=docs"), "(framework)/index.mdx": () => import("../content/docs/(framework)/index.mdx?collection=docs"), "cli/create-fumadocs-app.mdx": () => import("../content/docs/cli/create-fumadocs-app.mdx?collection=docs"), "cli/index.mdx": () => import("../content/docs/cli/index.mdx?collection=docs"), "cli/preview.mdx": () => import("../content/docs/cli/preview.mdx?collection=docs"), "design-system/color.mdx": () => import("../content/docs/design-system/color.mdx?collection=docs"), "design-system/index.mdx": () => import("../content/docs/design-system/index.mdx?collection=docs"), "design-system/typography.mdx": () => import("../content/docs/design-system/typography.mdx?collection=docs"), "design-system/字体风格.mdx": () => import("../content/docs/design-system/字体风格.mdx?collection=docs"), "javascript/index.mdx": () => import("../content/docs/javascript/index.mdx?collection=docs"), "javascript/test.mdx": () => import("../content/docs/javascript/test.mdx?collection=docs"), "javascript/units-cheatsheet.md": () => import("../content/docs/javascript/units-cheatsheet.md?collection=docs"), "mdx/collections.mdx": () => import("../content/docs/mdx/collections.mdx?collection=docs"), "markdown/mdx.mdx": () => import("../content/docs/markdown/mdx.mdx?collection=docs"), "miscellaneous/cva实现样式变体组件.mdx": () => import("../content/docs/miscellaneous/cva实现样式变体组件.mdx?collection=docs"), "miscellaneous/export-pdf.mdx": () => import("../content/docs/miscellaneous/export-pdf.mdx?collection=docs"), "miscellaneous/index.mdx": () => import("../content/docs/miscellaneous/index.mdx?collection=docs"), "miscellaneous/markdown.mdx": () => import("../content/docs/miscellaneous/markdown.mdx?collection=docs"), "miscellaneous/md_doc.mdx": () => import("../content/docs/miscellaneous/md_doc.mdx?collection=docs"), "miscellaneous/turborepo.mdx": () => import("../content/docs/miscellaneous/turborepo.mdx?collection=docs"), });