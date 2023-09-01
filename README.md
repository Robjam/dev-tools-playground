# devtools-tips-sandbox

This is a companion repository for an upcoming blog series about browser dev-tools.

## Run this sandbox:

> required: `git` and `pnpm`


### 1. Clone the repository:

```zsh
git clone https://github.com/Robjam/dev-tools-playground.git
```

### 2. Install dependencies

```zsh
pnpm install
```

### 3. Run the two applications

```zsh
pnpm run dev
```

You should see something like:

```zsh
❯ pnpm run dev

> @ dev /devtools-tips-sandbox
> turbo run dev

╭────────────────────────────────────────────────────────────────────────╮
│                                                                        │
│                  Update available v1.10.12 ≫ v1.10.13                  │
│    Changelog: https://github.com/vercel/turbo/releases/tag/v1.10.13    │
│               Run "npx @turbo/codemod update" to update                │
│                                                                        │
│      Follow @turborepo for updates: https://twitter.com/turborepo      │
╰────────────────────────────────────────────────────────────────────────╯
• Packages in scope: , eslint-config-custom, tsconfig, ui, web
• Running dev in 5 packages
• Remote caching disabled
:dev: cache bypass, force executing 997faae0e43d3ddf
web:dev: cache bypass, force executing b24921d658594c7f
:dev: 
:dev: > @ dev /devtools-tips-sandbox/apps/api
:dev: > tsx src/index.ts
:dev: 
web:dev: 
web:dev: > web@0.0.0 dev /devtools-tips-sandbox/apps/web
web:dev: > vite
web:dev: 
web:dev: 
web:dev:   VITE v4.0.3  ready in 112 ms
web:dev: 
web:dev:   ➜  Local:   http://localhost:5173/
web:dev:   ➜  Network: use --host to expose
```
