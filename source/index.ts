import type { Plugin } from "rollup";

import { basename } from "node:path";
import browserSync from "browser-sync";

const bs = browserSync.create();
let watchMode = false;

export default (
  options: browserSync.Options = {}
): Plugin => ({
  name: "browser-sync",
  options: ({ watch }) => {
    watchMode = Boolean(watch);
  },
  writeBundle: ({ file = "" }) => {
    if (watchMode) {
      if (bs.active) {
        bs.reload(basename(file));
      } else {
        bs.init(options);
      }
    }
  }
});
