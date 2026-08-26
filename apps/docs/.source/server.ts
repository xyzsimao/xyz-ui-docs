// @ts-nocheck
import * as __fd_glob_1 from "../content/docs/tt.mdx?collection=docs"
import { frontmatter as __fd_glob_0 } from "../content/blog/test.mdx?collection=blog&only=frontmatter"
import { server } from 'xyzdocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("xyzdocs-mdx/runtime/types").InternalTypeConfig>({});

export const blog = await create.docLazy("blog", "content/blog", {"test.mdx": __fd_glob_0, }, {"test.mdx": () => import("../content/blog/test.mdx?collection=blog"), });

export const docs = await create.docs("docs", "content/docs", {}, {"tt.mdx": __fd_glob_1, });