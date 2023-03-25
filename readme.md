# `rollup-plugin-browser-sync`

[![latest version on npm](https://img.shields.io/npm/v/rollup-plugin-browser-sync)](https://www.npmjs.com/package/rollup-plugin-browser-sync)
[![npm downloads a month](https://img.shields.io/npm/dm/rollup-plugin-browser-sync)](https://www.npmjs.com/package/rollup-plugin-browser-sync)
[![browser-sync dep](https://img.shields.io/npm/dependency-version/rollup-plugin-browser-sync/browser-sync)](https://github.com/BrowserSync/browser-sync)
[![required node version](https://img.shields.io/node/v/rollup-plugin-browser-sync)](https://github.com/nodejs/Release)
[![package license](https://img.shields.io/npm/l/rollup-plugin-browser-sync)](license)

> easily integrate [`browser-sync`](https://github.com/BrowserSync/browser-sync) into your [`rollup`](https://github.com/rollup/rollup) development flow 🌊

## install

```bash
yarn install --dev rollup-plugin-browser-sync
```

## use

```typescript
import browserSync from "rollup-plugin-browser-sync";

export default {
  /* rollup config */
  plugins: [
    /* rollup plugins */
    browserSync({ /* options */ })
  ]
};
```

_be aware that the plugin only works in watch mode_

## config

all of the supplied configuration options get directly forwarded to `browser-sync`. you can find the official docs here: https://browsersync.io/docs/options

## license

[mit](https://choosealicense.com/licenses/mit)
