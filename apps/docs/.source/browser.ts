// @ts-nocheck
import { browser } from 'xyzdocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("xyzdocs-mdx/runtime/types").InternalTypeConfig>();
const browserCollections = {
  blog: create.doc("blog", {"2024-5-15.mdx": () => import("../content/blog/2024-5-15.mdx?collection=blog"), "2024-5-16.mdx": () => import("../content/blog/2024-5-16.mdx?collection=blog"), "openapi-v10.mdx": () => import("../content/blog/openapi-v10.mdx?collection=blog"), "test.mdx": () => import("../content/blog/test.mdx?collection=blog"), }),
  docs: create.doc("docs", {"tt.mdx": () => import("../content/docs/tt.mdx?collection=docs"), "mdx/collections.mdx": () => import("../content/docs/mdx/collections.mdx?collection=docs"), "cli/create-fumadocs-app.mdx": () => import("../content/docs/cli/create-fumadocs-app.mdx?collection=docs"), "cli/index.mdx": () => import("../content/docs/cli/index.mdx?collection=docs"), "cli/preview.mdx": () => import("../content/docs/cli/preview.mdx?collection=docs"), "miscellaneous/cva实现样式变体组件.mdx": () => import("../content/docs/miscellaneous/cva实现样式变体组件.mdx?collection=docs"), "miscellaneous/index.mdx": () => import("../content/docs/miscellaneous/index.mdx?collection=docs"), "miscellaneous/markdown.mdx": () => import("../content/docs/miscellaneous/markdown.mdx?collection=docs"), "miscellaneous/md_doc.mdx": () => import("../content/docs/miscellaneous/md_doc.mdx?collection=docs"), "miscellaneous/turborepo.mdx": () => import("../content/docs/miscellaneous/turborepo.mdx?collection=docs"), }),
};
export default browserCollections;