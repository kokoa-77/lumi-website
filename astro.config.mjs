import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const siteUrl = (process.env.SITE_URL || "https://lumilauncher.pages.dev").replace(/\/+$/, "");

export default defineConfig({
  site: siteUrl,
  output: "static",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/press"),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          zh: "zh-CN",
        },
      },
    }),
  ],
});
