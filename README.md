# react-vite-with-koa

React SPA using Vite as the packaging toolchain, with a simple Koa server.

Server-side Rendering not supported. Better try `Next.js` or something similar.

## test suites included

- frontend: `vitest`
- backend: `jest`


## `baseUrl` tricks

`pacakge.json` `"import"` config:

https://nodejs.org/api/packages.html#main-entry-point-export

Use `#` as the prefix of the import paths,
the `tsc`-built `*.js` files will keep the import path and apply the `"import"` config in `package.json`.

For details, check `package.json` and `tsconfig.build.json`.
