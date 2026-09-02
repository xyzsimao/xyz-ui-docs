// @ts-nocheck
import { browser } from 'xyzdocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("xyzdocs-mdx/runtime/types").InternalTypeConfig>();
const browserCollections = {
  blog: create.doc("blog", {"2024-5-15.mdx": () => import("../content/blog/2024-5-15.mdx?collection=blog"), "2024-5-16.mdx": () => import("../content/blog/2024-5-16.mdx?collection=blog"), "test.mdx": () => import("../content/blog/test.mdx?collection=blog"), }),
  docs: create.doc("docs", {"tt.mdx": () => import("../content/docs/tt.mdx?collection=docs"), }),
};
export default browserCollections;