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
  email: "lumilauncher@outlook.com",
  mailto: "mailto:lumilauncher@outlook.com",
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
      // 读取失败时改用仓库里的快照
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

// 页面按文件夹生成（`/zh/demo/index.html`），Cloudflare Pages 会把 `/zh/demo` 308 跳转到 `/zh/demo/`，
// 所以站内链接和规范地址都以斜杠结尾
export function localizedPath(locale: Locale, subPath: string): string {
  const normalized = subPath.startsWith("/") ? subPath : `/${subPath}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  if (locale === "zh") {
    return withSlash === "/" ? "/zh/" : `/zh${withSlash}`;
  }
  return withSlash;
}

const ZH_RELEASE_OVERRIDES: Record<string, { name: string; body: string }> = {
  "v0.6.3-prereview": {
    name: "Lumi Launcher v0.6.3（预审构建）",
    body: [
      "面向源码核验与 Mojang AppID 白名单审核的预审构建（客户端 ID：`732fc771-cf09-4ec5-b899-ee92fd012d57`）。",
      "> 说明：点击「登录」会正常拉起系统浏览器的官方 Microsoft OAuth 2.0 + PKCE 授权流程，并在 Mojang 批准 Lumi 的 AppID 白名单前按预期停在 Minecraft Services 的 `403` 校验门禁。在此期间你已可完整体验界面、管理实例与存档、浏览 Modrinth / CurseForge 并检查各项设置。",
      "> 非 Minecraft 官方产品。未经 Mojang 或 Microsoft 批准，也不与 Mojang 或 Microsoft 关联。",
      "### 本次更新",
      "- 官方预审构建已注入 Lumi 的 Microsoft Entra 公共客户端 ID（`732fc771-cf09-4ec5-b899-ee92fd012d57`），可直接核验系统浏览器的官方 Microsoft 登录跳转流程。",
      "- Minecraft 游戏文件与元数据的默认下载源调整为优先直连 Mojang 官方端点。",
      "- 移除已废弃的旧账户兼容桩代码，并补全英文模式下的启动进度状态翻译。",
      "- 在仓库文档与官网统一补充公开维护者联系邮箱（`lumilauncher@outlook.com`）。",
      "### 文件校验",
      "下载后请对照同页面的 `SHA256SUMS.txt` 核验文件完整性：",
      "`Get-FileHash .\\LumiLauncher_0.6.3_x64-setup.exe -Algorithm SHA256`",
    ].join("\n"),
  },
};

function splitBilingualBody(raw: string): { en: string; zh: string } | null {
  const zhMarker = /^##\s*(?:简体中文|中文)\s*$/m;
  const zhMatch = zhMarker.exec(raw);
  if (!zhMatch || zhMatch.index === undefined) return null;
  const before = raw
    .slice(0, zhMatch.index)
    .replace(/^##\s*English\s*$/m, "")
    .replace(/\n---\s*$/, "")
    .trim();
  const after = raw.slice(zhMatch.index + zhMatch[0].length).trim();
  if (!before || !after) return null;
  return { en: before, zh: after };
}

function localizeReleaseTitle(name: string, locale: Locale): string {
  if (locale !== "zh") return name;
  return name
    .replace(/\s*\(Pre-review Build\)/i, "（预审构建）")
    .replace(/\s*\(Public Beta\)/i, "（公开测试版）");
}

export function localizeRelease(
  rel: Pick<ReleaseEntry, "tag" | "name" | "body">,
  locale: Locale,
): { name: string; body: string } {
  const split = splitBilingualBody(rel.body);
  if (locale === "zh") {
    const override = ZH_RELEASE_OVERRIDES[rel.tag];
    if (override) return override;
    if (split) {
      return { name: localizeReleaseTitle(rel.name, "zh"), body: split.zh };
    }
    return { name: localizeReleaseTitle(rel.name, "zh"), body: rel.body };
  }
  if (split) {
    return { name: rel.name, body: split.en };
  }
  return { name: rel.name, body: rel.body };
}
