import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getReleases, localizeRelease } from "../data/site";

export function GET(context: APIContext) {
  const { releases } = getReleases();
  const site = context.site ?? new URL("https://lumilauncher.pages.dev");

  return rss({
    title: "Lumi Launcher Releases",
    description: "Official release notes for Lumi Launcher (Minecraft: Java Edition for Windows).",
    site,
    // 链接本身已经带斜杠，再让库补一个会补到 #锚点后面
    trailingSlash: false,
    items: releases.map((r) => {
      const localized = localizeRelease(r, "en");
      return {
        title: localized.name,
        pubDate: new Date(r.publishedAt),
        description: localized.body.slice(0, 280),
        link: `/changelog/#${r.anchor}`,
      };
    }),
  });
}
