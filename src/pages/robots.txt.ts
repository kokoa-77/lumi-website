import type { APIContext } from "astro";

export function GET(context: APIContext) {
  const site = (context.site?.toString() || "https://lumilauncher.org").replace(/\/+$/, "");
  const body = `User-agent: *
Allow: /
Disallow: /press
Disallow: /zh/press

Sitemap: ${site}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
