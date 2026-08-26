// @ts-nocheck
import { browser } from 'xyzdocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("xyzdocs-mdx/runtime/types").InternalTypeConfig>();
const browserCollections = {
  blog: create.doc("blog", {"test.mdx": () => import("../content/blog/test.mdx?collection=blog"), }),
  docs: create.doc("docs", {"tt.mdx": () => import("../content/docs/tt.mdx?collection=docs"), }),
};
export default browserCollections;