import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2019",
  treeshake: true,
  minify: false,
  outExtension: ({ format }) => ({ js: format === "cjs" ? ".cjs" : ".mjs" }),
});
