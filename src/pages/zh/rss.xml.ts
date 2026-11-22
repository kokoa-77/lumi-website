import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getReleases } from "../../data/site";

export function GET(context: APIContext) {
  const { releases } = getReleases();
  const site = context.site ?? new URL("https://lumilauncher.pages.dev");

  return rss({
    title: "Lumi 微光启动器 · 更新日志",
    description: "Lumi Launcher（Windows Minecraft Java 版开源启动器）官方发布说明。",
    site,
    // Links already carry their own slash; letting the library append one would land after the #anchor.
    trailingSlash: false,
    items: releases.map((r) => ({
      title: r.name,
      pubDate: new Date(r.publishedAt),
      description: r.body.slice(0, 280),
      link: `/zh/changelog/#${r.anchor}`,
    })),
  });
}
