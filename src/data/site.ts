import fs from "node:fs";
import path from "node:path";
import fallbackData from "./releases.fallback.json";

export type Locale = "en" | "zh";

export interface ReleaseBinary {
  name: string;
  size: number;
  sha256: string;
  githubUrl: string;
  sitePath: string | null;
}

export interface LatestRelease {
  tag: string;
  version: string;
  name: string;
  kind: "prereview" | "beta" | "stable";
  prerelease: boolean;
  publishedAt: string;
  htmlUrl: string;
  body: string;
  anchor: string;
  checksumsUrl: string;
  checksumsSitePath: string | null;
  installer: ReleaseBinary | null;
  portable: ReleaseBinary | null;
}

export interface ReleaseEntry {
  tag: string;
  version: string;
  name: string;
  kind: "prereview" | "beta" | "stable";
  prerelease: boolean;
  publishedAt: string;
  htmlUrl: string;
  body: string;
  anchor: string;
  assets: Array<{
    name: string;
    size: number;
    githubUrl: string;
  }>;
}

export interface ReleasesBundle {
  generatedAt: string;
  repo: string;
  latest: LatestRelease;
  releases: ReleaseEntry[];
}

export const LINKS = {
  github: "https://github.com/kokoa-77/LumiLauncher",
  releases: "https://github.com/kokoa-77/LumiLauncher/releases",
  discussions: "https://github.com/kokoa-77/LumiLauncher/discussions",
  issues: "https://github.com/kokoa-77/LumiLauncher/issues/new/choose",
  securityAdvisory: "https://github.com/kokoa-77/LumiLauncher/security/advisories/new",
  license: "https://github.com/kokoa-77/LumiLauncher/blob/main/LICENSE",
  trademark: "https://github.com/kokoa-77/LumiLauncher/blob/main/TRADEMARK.md",
  trademarkZh:
    "https://github.com/kokoa-77/LumiLauncher/blob/main/TRADEMARK.md#%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87",
  privacyRepo: "https://github.com/kokoa-77/LumiLauncher/blob/main/PRIVACY.md",
  securityRepo: "https://github.com/kokoa-77/LumiLauncher/blob/main/SECURITY.md",
  discord: "https://discord.gg/vrAQ7HwUCw",
  qqGroup: "https://qm.qq.com/q/vSHOPvOKt2",
  qqChannel: "https://pd.qq.com/s/Nr15r3slq",
  bilibili: "https://space.bilibili.com/25681030",
  afdian: "https://afdian.com/a/lumilauncher",
  microsoftConsent: "https://account.live.com/consent/Manage",
  pressKitTag: "https://github.com/kokoa-77/LumiLauncher/releases",
} as const;

let cachedReleases: ReleasesBundle | null = null;

export function getReleases(): ReleasesBundle {
  if (cachedReleases) return cachedReleases;
  const generatedPath = path.join(process.cwd(), "src", "data", "releases.generated.json");
  if (fs.existsSync(generatedPath)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(generatedPath, "utf8")) as ReleasesBundle;
      cachedReleases = parsed;
      return parsed;
    } catch {
      // Fall back cleanly to committed snapshot
    }
  }
  cachedReleases = fallbackData as ReleasesBundle;
  return cachedReleases;
}

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "—";
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(1)} MB`;
  if (bytes < 1024) return `${Math.round(bytes)} B`;
  const kb = bytes / 1024;
  return `${Math.round(kb)} KB`;
}

export function formatDate(iso: string, locale: Locale): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: locale === "zh" ? "long" : "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function primaryDownloadHref(bin: ReleaseBinary | null, fallbackUrl: string): string {
  if (!bin) return fallbackUrl;
  return bin.sitePath || bin.githubUrl;
}

export function localePrefix(locale: Locale): string {
  return locale === "zh" ? "/zh" : "";
}

// Pages are built as folders (`/zh/demo/index.html`) and Cloudflare Pages answers `/zh/demo`
// with a 308 to `/zh/demo/`, so every internal link and canonical URL ends with a slash.
export function localizedPath(locale: Locale, subPath: string): string {
  const normalized = subPath.startsWith("/") ? subPath : `/${subPath}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  if (locale === "zh") {
    return withSlash === "/" ? "/zh/" : `/zh${withSlash}`;
  }
  return withSlash;
}
