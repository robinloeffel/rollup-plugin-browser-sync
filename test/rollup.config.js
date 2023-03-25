import browserSync from "../dist/index.js";

const absolute = relative => new URL(relative, import.meta.url).pathname;

/** @type {import("rollup").RollupOptions} */
export default {
  input: absolute("script.js"),
  plugins: [
    browserSync({
      server: absolute("."),
      notify: false,
      ui: false
    })
  ],
  output: {
    file: absolute("script.bundled.js")
  }
};
