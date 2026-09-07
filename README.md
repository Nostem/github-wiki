# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Local verification and GitHub Pages deployment

Use Node 22 and npm 10.9.2 or newer. Run the same gates as CI:

```sh
npm ci
npx tsc --noEmit && npm test && npx quartz build
```

The build uses this wiki's `content/` and writes `public/`, not the upstream
Quartz `docs/`. `npm test` includes the parsed workflow regression tests in
`scripts/deployment-gates.test.mjs`.

`.github/workflows/ci.yaml` runs on PRs targeting `main`, supports manual runs,
and is reused by `deploy.yml` on pushes to `main` or manual dispatch. Its single
job must pass installation, typechecking, tests, and the actual site build, in
that order. Only a successful run on `main` uploads the Pages artifact. The
main-only deployment job depends on that verified build and publishes the same
artifact to the existing `github-pages` environment. A manual run on another
branch verifies the site but does not publish it.

These gates do not include whole-repository formatting: `npm run check` also
runs Prettier across the repository and may expose unrelated formatting debt.
They also do not prove browser behavior or production availability. Repository
branch protection must separately require the PR check if merging failed PRs
should be prohibited; these workflow files alone do not configure that policy.
For workflow syntax validation, run `actionlint .github/workflows/ci.yaml
.github/workflows/deploy.yml` (with actionlint installed).

The inherited preview/Cloudflare and Docker workflows remain upstream-only
(`jackyzha0/quartz` guards); they are dormant here and are not this wiki's
hosting or deployment path. GitHub Pages remains the production host.

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
