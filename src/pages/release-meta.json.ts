import type { APIRoute } from "astro";
import { getReleases } from "../data/site";

export const GET: APIRoute = () => {
  const { latest, generatedAt } = getReleases();
  return new Response(
    JSON.stringify(
      {
        tag: latest.tag,
        version: latest.version,
        kind: latest.kind,
        publishedAt: latest.publishedAt,
        generatedAt,
      },
      null,
      2,
    ),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
};
