import { SITE_URL } from "@/src/site.config"

export function GET() {
  const body = [
    "User-Agent: *",
    "Allow: /",
    "",
    `Host: ${SITE_URL}`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
  ]
    .join("\n")
    .concat("\n")

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  })
}
