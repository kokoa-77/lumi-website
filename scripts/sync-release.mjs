import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const UPSTREAM_REPO = process.env.UPSTREAM_REPO || "kokoa-77/LumiLauncher";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const DOWNLOAD_ASSETS = process.env.SYNC_DOWNLOAD_ASSETS !== "false";
const MAX_PAGES_FILE_BYTES = 25 * 1024 * 1024; // Cloudflare Pages 25 MiB hard ceiling

const ROOT = process.cwd();
const GENERATED_JSON_PATH = path.join(ROOT, "src", "data", "releases.generated.json");
const FALLBACK_JSON_PATH = path.join(ROOT, "src", "data", "releases.fallback.json");
const PUBLIC_DOWNLOAD_ROOT = path.join(ROOT, "public", "download");

function githubHeaders(accept = "application/vnd.github+json") {
  const headers = {
    Accept: accept,
    "User-Agent": "lumi-website-release-sync",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }
  return headers;
}

function parseSha256Sums(text) {
  const map = new Map();
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const match = line.match(/^([a-fA-F0-9]{64})\s+\*?(.+)$/);
    if (match) {
      map.set(match[2].trim(), match[1].toLowerCase());
    }
  }
  return map;
}

function sha256Buffer(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex").toLowerCase();
}

function toAnchor(tag) {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function classifyRelease(release) {
  const tag = (release.tag_name || "").toLowerCase();
  if (tag.includes("prereview")) return "prereview";
  if (release.prerelease || tag.includes("beta") || tag.includes("alpha") || tag.includes("rc")) {
    return "beta";
  }
  return "stable";
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: githubHeaders() });
  if (!res.ok) {
    throw new Error(`GitHub API ${url} failed: HTTP ${res.status} ${res.statusText}`);
  }
  return res.json();
}

async function downloadBuffer(url) {
  const res = await fetch(url, {
    headers: githubHeaders("application/octet-stream"),
    redirect: "follow",
  });
  if (!res.ok) {
    throw new Error(`Download failed (${url}): HTTP ${res.status} ${res.statusText}`);
  }
  const ab = await res.arrayBuffer();
  return Buffer.from(ab);
}

async function main() {
  console.log(`[sync-release] Fetching releases from ${UPSTREAM_REPO}...`);
  // Always use /releases?per_page=10 instead of /releases/latest so prereleases are included.
  const rawReleases = await fetchJson(
    `https://api.github.com/repos/${UPSTREAM_REPO}/releases?per_page=10`,
  );

  const published = rawReleases.filter((r) => !r.draft);
  if (published.length === 0) {
    throw new Error(`No published releases found in ${UPSTREAM_REPO}`);
  }

  const latest = published[0];
  const tag = latest.tag_name;
  const cleanVersion = tag.replace(/^v/i, "");
  const assets = latest.assets || [];

  const checksumAsset = assets.find((a) => a.name === "SHA256SUMS.txt");
  const installerAsset = assets.find((a) => /setup\.exe$/i.test(a.name));
  const portableAsset = assets.find((a) => /portable\.zip$/i.test(a.name));

  let checksumMap = new Map();
  let checksumText = "";
  if (checksumAsset) {
    console.log(`[sync-release] Downloading ${checksumAsset.name}...`);
    const buf = await downloadBuffer(checksumAsset.browser_download_url);
    checksumText = buf.toString("utf8");
    checksumMap = parseSha256Sums(checksumText);
    console.log(`[sync-release] Parsed ${checksumMap.size} SHA-256 entries.`);
  } else {
    throw new Error(`Release ${tag} is missing SHA256SUMS.txt; refusing to deploy.`);
  }

  // Reset public/download so only the latest version is hosted on Cloudflare Pages
  if (fs.existsSync(PUBLIC_DOWNLOAD_ROOT)) {
    fs.rmSync(PUBLIC_DOWNLOAD_ROOT, { recursive: true, force: true });
  }

  const versionDirName = `v${cleanVersion}`;
  const versionOutDir = path.join(PUBLIC_DOWNLOAD_ROOT, versionDirName);
  if (DOWNLOAD_ASSETS) {
    fs.mkdirSync(versionOutDir, { recursive: true });
    fs.writeFileSync(path.join(versionOutDir, "SHA256SUMS.txt"), checksumText, "utf8");
  }

  async function processBinary(asset, kind) {
    if (!asset) return null;
    const expectedSha = checksumMap.get(asset.name);
    if (!expectedSha) {
      throw new Error(`SHA256SUMS.txt has no entry for ${asset.name}; aborting deploy.`);
    }

    let sitePath = null;
    const exceedsPagesLimit = asset.size > MAX_PAGES_FILE_BYTES;

    if (exceedsPagesLimit) {
      console.warn(
        `::warning::[sync-release] ${asset.name} (${asset.size} bytes) exceeds Cloudflare Pages 25 MiB limit; falling back to GitHub Releases.`,
      );
    }

    if (DOWNLOAD_ASSETS) {
      console.log(
        `[sync-release] Downloading & verifying ${kind}: ${asset.name} (${asset.size} B)...`,
      );
      const buf = await downloadBuffer(asset.browser_download_url);
      const actualSha = sha256Buffer(buf);
      if (actualSha !== expectedSha) {
        throw new Error(
          `SHA-256 mismatch for ${asset.name}!\n  expected: ${expectedSha}\n  actual:   ${actualSha}`,
        );
      }
      console.log(`[sync-release] Verified SHA-256 OK for ${asset.name}: ${actualSha}`);

      if (!exceedsPagesLimit) {
        fs.writeFileSync(path.join(versionOutDir, asset.name), buf);
        sitePath = `/download/${versionDirName}/${asset.name}`;
      }
    }

    return {
      name: asset.name,
      size: asset.size,
      sha256: expectedSha,
      githubUrl: asset.browser_download_url,
      sitePath,
    };
  }

  const installer = await processBinary(installerAsset, "installer");
  const portable = await processBinary(portableAsset, "portable");

  const payload = {
    generatedAt: new Date().toISOString(),
    repo: UPSTREAM_REPO,
    latest: {
      tag,
      version: cleanVersion,
      name: latest.name || tag,
      kind: classifyRelease(latest),
      prerelease: Boolean(latest.prerelease),
      publishedAt: latest.published_at,
      htmlUrl: latest.html_url,
      body: latest.body || "",
      anchor: toAnchor(tag),
      checksumsUrl: checksumAsset.browser_download_url,
      checksumsSitePath: DOWNLOAD_ASSETS ? `/download/${versionDirName}/SHA256SUMS.txt` : null,
      installer,
      portable,
    },
    releases: published.map((r) => ({
      tag: r.tag_name,
      version: r.tag_name.replace(/^v/i, ""),
      name: r.name || r.tag_name,
      kind: classifyRelease(r),
      prerelease: Boolean(r.prerelease),
      publishedAt: r.published_at,
      htmlUrl: r.html_url,
      body: r.body || "",
      anchor: toAnchor(r.tag_name),
      assets: (r.assets || []).map((a) => ({
        name: a.name,
        size: a.size,
        githubUrl: a.browser_download_url,
      })),
    })),
  };

  fs.mkdirSync(path.dirname(GENERATED_JSON_PATH), { recursive: true });
  fs.writeFileSync(GENERATED_JSON_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`[sync-release] Wrote ${path.relative(ROOT, GENERATED_JSON_PATH)} (latest=${tag}).`);

  // Also update fallback snapshot when explicitly requested
  if (process.env.UPDATE_FALLBACK === "true") {
    const fallbackPayload = structuredClone(payload);
    if (fallbackPayload.latest.installer) fallbackPayload.latest.installer.sitePath = null;
    if (fallbackPayload.latest.portable) fallbackPayload.latest.portable.sitePath = null;
    fallbackPayload.latest.checksumsSitePath = null;
    fs.writeFileSync(FALLBACK_JSON_PATH, `${JSON.stringify(fallbackPayload, null, 2)}\n`, "utf8");
    console.log(`[sync-release] Updated ${path.relative(ROOT, FALLBACK_JSON_PATH)}.`);
  }
}

main().catch((err) => {
  console.error("[sync-release] FAILED:", err instanceof Error ? err.message : err);
  process.exit(1);
});
