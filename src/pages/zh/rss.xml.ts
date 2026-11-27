import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getReleases, localizeRelease } from "../../data/site";

export function GET(context: APIContext) {
  const { releases } = getReleases();
  const site = context.site ?? new URL("https://lumilauncher.org");

  return rss({
    title: "Lumi 微光启动器 · 更新日志",
    description: "Lumi Launcher（Windows Minecraft Java 版开源启动器）官方发布说明。",
    site,
    // 链接本身已经带斜杠，再让库补一个会补到 #锚点后面
    trailingSlash: false,
    items: releases.map((r) => {
      const localized = localizeRelease(r, "zh");
      return {
        title: localized.name,
        pubDate: new Date(r.publishedAt),
        description: localized.body.slice(0, 280),
        link: `/zh/changelog/#${r.anchor}`,
      };
    }),
  });
}
