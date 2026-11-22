import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getReleases } from "../data/site";

export function GET(context: APIContext) {
  const { releases } = getReleases();
  const site = context.site ?? new URL("https://lumilauncher.pages.dev");

  return rss({
    title: "Lumi Launcher Releases",
    description: "Official release notes for Lumi Launcher (Minecraft: Java Edition for Windows).",
    site,
    items: releases.map((r) => ({
      title: r.name,
      pubDate: new Date(r.publishedAt),
      description: r.body.slice(0, 280),
      link: `/changelog#${r.anchor}`,
    })),
  });
}
