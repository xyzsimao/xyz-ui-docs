// @ts-nocheck
import { frontmatter as __fd_glob_17 } from "../content/docs/miscellaneous/turborepo.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_16 } from "../content/docs/miscellaneous/md_doc.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_15 } from "../content/docs/miscellaneous/markdown.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_14 } from "../content/docs/miscellaneous/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_13 } from "../content/docs/miscellaneous/cva实现样式变体组件.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_12 } from "../content/docs/mdx/collections.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_11 } from "../content/docs/cli/preview.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_10 } from "../content/docs/cli/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_9 } from "../content/docs/cli/create-fumadocs-app.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_8 } from "../content/docs/tt.mdx?collection=docs&only=frontmatter"
import { default as __fd_glob_7 } from "../content/docs/miscellaneous/meta.json?collection=docs"
import { default as __fd_glob_6 } from "../content/docs/mdx/meta.json?collection=docs"
import { default as __fd_glob_5 } from "../content/docs/cli/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/meta.json?collection=docs"
import { frontmatter as __fd_glob_3 } from "../content/blog/test.mdx?collection=blog&only=frontmatter"
import { frontmatter as __fd_glob_2 } from "../content/blog/openapi-v10.mdx?collection=blog&only=frontmatter"
import { frontmatter as __fd_glob_1 } from "../content/blog/2024-5-16.mdx?collection=blog&only=frontmatter"
import { frontmatter as __fd_glob_0 } from "../content/blog/2024-5-15.mdx?collection=blog&only=frontmatter"
import { server } from 'xyzdocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("xyzdocs-mdx/runtime/types").InternalTypeConfig>({});

export const blog = await create.docLazy("blog", "content/blog", {"2024-5-15.mdx": __fd_glob_0, "2024-5-16.mdx": __fd_glob_1, "openapi-v10.mdx": __fd_glob_2, "test.mdx": __fd_glob_3, }, {"2024-5-15.mdx": () => import("../content/blog/2024-5-15.mdx?collection=blog"), "2024-5-16.mdx": () => import("../content/blog/2024-5-16.mdx?collection=blog"), "openapi-v10.mdx": () => import("../content/blog/openapi-v10.mdx?collection=blog"), "test.mdx": () => import("../content/blog/test.mdx?collection=blog"), });

export const docs = await create.docsLazy("docs", "content/docs", {"meta.json": __fd_glob_4, "cli/meta.json": __fd_glob_5, "mdx/meta.json": __fd_glob_6, "miscellaneous/meta.json": __fd_glob_7, }, {"tt.mdx": __fd_glob_8, "cli/create-fumadocs-app.mdx": __fd_glob_9, "cli/index.mdx": __fd_glob_10, "cli/preview.mdx": __fd_glob_11, "mdx/collections.mdx": __fd_glob_12, "miscellaneous/cva实现样式变体组件.mdx": __fd_glob_13, "miscellaneous/index.mdx": __fd_glob_14, "miscellaneous/markdown.mdx": __fd_glob_15, "miscellaneous/md_doc.mdx": __fd_glob_16, "miscellaneous/turborepo.mdx": __fd_glob_17, }, {"tt.mdx": () => import("../content/docs/tt.mdx?collection=docs"), "cli/create-fumadocs-app.mdx": () => import("../content/docs/cli/create-fumadocs-app.mdx?collection=docs"), "cli/index.mdx": () => import("../content/docs/cli/index.mdx?collection=docs"), "cli/preview.mdx": () => import("../content/docs/cli/preview.mdx?collection=docs"), "mdx/collections.mdx": () => import("../content/docs/mdx/collections.mdx?collection=docs"), "miscellaneous/cva实现样式变体组件.mdx": () => import("../content/docs/miscellaneous/cva实现样式变体组件.mdx?collection=docs"), "miscellaneous/index.mdx": () => import("../content/docs/miscellaneous/index.mdx?collection=docs"), "miscellaneous/markdown.mdx": () => import("../content/docs/miscellaneous/markdown.mdx?collection=docs"), "miscellaneous/md_doc.mdx": () => import("../content/docs/miscellaneous/md_doc.mdx?collection=docs"), "miscellaneous/turborepo.mdx": () => import("../content/docs/miscellaneous/turborepo.mdx?collection=docs"), });