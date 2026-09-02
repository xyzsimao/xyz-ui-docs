// @ts-nocheck
import { frontmatter as __fd_glob_3 } from "../content/docs/tt.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_2 } from "../content/blog/test.mdx?collection=blog&only=frontmatter"
import { frontmatter as __fd_glob_1 } from "../content/blog/2024-5-16.mdx?collection=blog&only=frontmatter"
import { frontmatter as __fd_glob_0 } from "../content/blog/2024-5-15.mdx?collection=blog&only=frontmatter"
import { server } from 'xyzdocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("xyzdocs-mdx/runtime/types").InternalTypeConfig>({});

export const blog = await create.docLazy("blog", "content/blog", {"2024-5-15.mdx": __fd_glob_0, "2024-5-16.mdx": __fd_glob_1, "test.mdx": __fd_glob_2, }, {"2024-5-15.mdx": () => import("../content/blog/2024-5-15.mdx?collection=blog"), "2024-5-16.mdx": () => import("../content/blog/2024-5-16.mdx?collection=blog"), "test.mdx": () => import("../content/blog/test.mdx?collection=blog"), });

export const docs = await create.docsLazy("docs", "content/docs", {}, {"tt.mdx": __fd_glob_3, }, {"tt.mdx": () => import("../content/docs/tt.mdx?collection=docs"), });