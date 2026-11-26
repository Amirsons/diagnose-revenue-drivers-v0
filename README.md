# Diagnose Revenue Drivers

A one-page educational explanation of the portable [Diagnose Revenue Drivers skill](https://github.com/Amirsons/diagnose-revenue-drivers-skill).

[Live website](https://diagnose-revenue-drivers.vercel.app/)

The example is synthetic: revenue moves from 1,200 to 1,650. Customer volume contributes 120, average spend 300, and their interaction 30, reconciling to the 450 change. This arithmetic decomposition does not establish causation.

Built with v0. Cloned, run, checked and pushed from a Windows terminal with AI assistance as a Handshake learning exercise.

## Run locally

Use the package manager version declared in package.json:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

On Windows, if the default bundler fails, use `pnpm dev --webpack`. The local exercise was verified with the webpack development server and TypeScript checking.

## Check

```sh
pnpm exec tsc --noEmit
```

Educational use only. Not an investment recommendation.
