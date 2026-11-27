# Lumi Website (`lumi-website`)

Official website source for **[Lumi Launcher](https://github.com/kokoa-77/LumiLauncher)** — built with **Astro 7**, **Tailwind CSS 4**, and deployed statically to **Cloudflare Pages**.

## Development

```bash
pnpm install
pnpm dev
```

### Syncing Upstream Release & Design Tokens

```bash
# Fetch latest release metadata (including prereleases) from kokoa-77/LumiLauncher
SYNC_DOWNLOAD_ASSETS=false pnpm run sync:release

# Sync app/src/styles/tokens.css from sibling repo or GitHub ref
pnpm run sync:tokens

# Run full lint, Astro typecheck, production build, and JS budget verification
pnpm check
```

## Architecture Notes

- **Zero React on marketing pages**: Landing, Demo wrapper, Privacy, Changelog, Press, and 404 pages output pure static HTML + minimal vanilla scripts (< 30 KiB gzipped).
- **Automated release pipeline**: `.github/workflows/release-sync.yml` checks `kokoa-77/LumiLauncher` hourly, verifies every installer and portable archive against `SHA256SUMS.txt`, bundles files ≤ 25 MiB into Cloudflare Pages with GitHub Releases fallback, and deploys to `lumilauncher` (`--branch=main`).
- **Environment variables**:
  - `SITE_URL` (optional, defaults to `https://lumilauncher.org`)
  - `PAGES_PROJECT_NAME` (optional, defaults to `lumilauncher`)

## License & Brand Policy

Source code and visual assets are licensed under `GPL-3.0-only` with Section 7 brand protection terms (see [LICENSE](LICENSE)). The `Lumi` / `Lumi Launcher` / `微光` names and official brand assets are governed by [TRADEMARK.md](https://github.com/kokoa-77/LumiLauncher/blob/main/TRADEMARK.md).

> NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.
