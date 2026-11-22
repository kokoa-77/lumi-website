import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const DIST = path.join(process.cwd(), "dist");
const MAX_HOME_JS_GZIP_BYTES = 30 * 1024; // 首页 JS 预算 30 KiB（gzip 后）
const FORBIDDEN_EXTERNAL_PATTERNS = [
  /fonts\.googleapis\.com/i,
  /fonts\.gstatic\.com/i,
  /cdn\.jsdelivr\.net/i,
  /unpkg\.com/i,
  /cdnjs\.cloudflare\.com/i,
  /googletagmanager\.com/i,
  /google-analytics\.com/i,
];

const REQUIRED_PAGES = [
  "index.html",
  "zh/index.html",
  "demo/index.html",
  "zh/demo/index.html",
  "demo-app/index.html",
  "privacy/index.html",
  "zh/privacy/index.html",
  "changelog/index.html",
  "zh/changelog/index.html",
  "press/index.html",
  "zh/press/index.html",
  "404.html",
  "rss.xml",
  "zh/rss.xml",
  "robots.txt",
  "release-meta.json",
  ".well-known/security.txt",
  "_headers",
  "_redirects",
];

function checkPageJsBudget(relHtml) {
  const htmlPath = path.join(DIST, relHtml);
  const html = fs.readFileSync(htmlPath, "utf8");

  // 检查有没有外部 CDN、字体或统计脚本
  for (const re of FORBIDDEN_EXTERNAL_PATTERNS) {
    if (re.test(html)) {
      throw new Error(`Forbidden external reference ${re} found in ${relHtml}`);
    }
  }

  let totalGzip = 0;

  // 统计内联 <script>
  const inlineMatches = html.matchAll(/<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi);
  for (const m of inlineMatches) {
    if (m[1]?.trim()) {
      totalGzip += zlib.gzipSync(Buffer.from(m[1], "utf8")).length;
    }
  }

  // 统计引用的本站 <script src="/...">
  const srcMatches = html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi);
  const seen = new Set();
  for (const m of srcMatches) {
    const src = m[1];
    if (/^https?:\/\//i.test(src)) {
      throw new Error(`External script URL forbidden on landing page (${relHtml}): ${src}`);
    }
    const clean = src.replace(/^\//, "");
    if (seen.has(clean)) continue;
    seen.add(clean);
    const assetPath = path.join(DIST, clean);
    if (fs.existsSync(assetPath)) {
      totalGzip += zlib.gzipSync(fs.readFileSync(assetPath)).length;
    }
  }

  return totalGzip;
}

function main() {
  if (!fs.existsSync(DIST)) {
    throw new Error("dist/ does not exist. Run `pnpm build` first.");
  }

  for (const rel of REQUIRED_PAGES) {
    const full = path.join(DIST, rel);
    if (!fs.existsSync(full)) {
      throw new Error(`Missing required built file: dist/${rel}`);
    }
  }

  for (const page of ["index.html", "zh/index.html"]) {
    const gzipBytes = checkPageJsBudget(page);
    const kib = (gzipBytes / 1024).toFixed(2);
    console.log(`[check-budget] ${page} JS (gzip): ${kib} KiB / 30.00 KiB`);
    if (gzipBytes > MAX_HOME_JS_GZIP_BYTES) {
      throw new Error(`${page} JS budget exceeded: ${kib} KiB > 30 KiB`);
    }
  }

  console.log(`[check-budget] All ${REQUIRED_PAGES.length} routes & budgets passed.`);
}

main();
