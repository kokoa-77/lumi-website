import fs from "node:fs";
import path from "node:path";

const UPSTREAM_REPO = process.env.UPSTREAM_REPO || "kokoa-77/LumiLauncher";
const UPSTREAM_REF = process.env.UPSTREAM_REF || "";
const LOCAL_SIBLING = path.resolve(
  process.cwd(),
  "..",
  "我的世界启动器",
  "app",
  "src",
  "styles",
  "tokens.css",
);
const TARGET_PATH = path.join(process.cwd(), "src", "styles", "tokens.css");

const REQUIRED_TOKENS = [
  "--font-ui",
  "--font-code",
  "--r-panel",
  "--r-control",
  "--r-cta",
  "--accent-h",
  "--bg",
  "--surface",
  "--fg",
  "--fg-muted",
  "--accent",
  "--sky-top",
  "--sky-bottom",
  "--mote",
  "--glow",
];

function validateContract(css, sourceLabel) {
  const missing = REQUIRED_TOKENS.filter((token) => !css.includes(token));
  if (missing.length > 0) {
    throw new Error(
      `Upstream tokens.css from ${sourceLabel} is missing required tokens: ${missing.join(", ")}`,
    );
  }
}

async function main() {
  let css = "";
  let source = "";

  if (UPSTREAM_REF) {
    const url = `https://raw.githubusercontent.com/${UPSTREAM_REPO}/${encodeURIComponent(UPSTREAM_REF)}/app/src/styles/tokens.css`;
    console.log(`[sync-tokens] Fetching ${url}...`);
    const res = await fetch(url, { headers: { "User-Agent": "lumi-website-token-sync" } });
    if (!res.ok) {
      throw new Error(`Failed to fetch upstream tokens.css: HTTP ${res.status}`);
    }
    css = await res.text();
    source = `${UPSTREAM_REPO}@${UPSTREAM_REF}`;
  } else if (fs.existsSync(LOCAL_SIBLING)) {
    css = fs.readFileSync(LOCAL_SIBLING, "utf8");
    source = LOCAL_SIBLING;
  } else {
    const url = `https://raw.githubusercontent.com/${UPSTREAM_REPO}/main/app/src/styles/tokens.css`;
    console.log(`[sync-tokens] Local sibling not found; fetching ${url}...`);
    const res = await fetch(url, { headers: { "User-Agent": "lumi-website-token-sync" } });
    if (!res.ok) {
      throw new Error(`Failed to fetch upstream tokens.css: HTTP ${res.status}`);
    }
    css = await res.text();
    source = `${UPSTREAM_REPO}@main`;
  }

  validateContract(css, source);
  fs.mkdirSync(path.dirname(TARGET_PATH), { recursive: true });
  fs.writeFileSync(TARGET_PATH, css, "utf8");
  console.log(`[sync-tokens] Synced & verified ${REQUIRED_TOKENS.length} tokens from ${source}.`);
}

main().catch((err) => {
  console.error("[sync-tokens] FAILED:", err instanceof Error ? err.message : err);
  process.exit(1);
});
