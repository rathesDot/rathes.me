import type { MetadataRoute } from "next"

import { SITE_URL } from "@/src/site.config"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
