// @ts-nocheck
import { dynamic } from 'xyzdocs-mdx/runtime/dynamic';
import * as Config from '../source.config';

const create = await dynamic<typeof Config, import("xyzdocs-mdx/runtime/types").InternalTypeConfig & {
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
}>(Config, {"configPath":"source.config.ts","environment":"next","outDir":".source"}, {"doc":{"passthroughs":["lastModified"]}});