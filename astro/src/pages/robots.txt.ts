import type { APIRoute } from "astro"

import { SITE_URL } from "@/src/site.config"

export const GET: APIRoute = () =>
  new Response(
    [
      "User-Agent: *",
      "Allow: /",
      "",
      `Host: ${SITE_URL}`,
      `Sitemap: ${SITE_URL}/sitemap.xml`,
      "",
    ].join("\n"),
    { headers: { "Content-Type": "text/plain" } }
  )
