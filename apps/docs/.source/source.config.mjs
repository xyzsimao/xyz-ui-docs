// source.config.ts
import { defineConfig } from "fumadocs-mdx/config";
import jsonSchema from "fumadocs-mdx/plugins/json-schema";
import lastModified from "fumadocs-mdx/plugins/last-modified";
var source_config_default = defineConfig({
  compiler: "satteri",
  plugins: [
    jsonSchema({
      insert: true
    }),
    lastModified()
  ]
});
export {
  source_config_default as default
};
