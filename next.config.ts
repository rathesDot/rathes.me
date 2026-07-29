import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // next-sitemap used to emit a sitemap index pointing here; Google still
      // knows the URL, so keep it resolving to the single native sitemap.
      { source: "/sitemap-0.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/reading-list", destination: "/reading", permanent: true },
      { source: "/writings", destination: "/writing", permanent: true },
      { source: "/photos", destination: "/photography", permanent: true },
      {
        source: "/blog/json-web-token",
        destination: "/blog/de/json-web-token",
        permanent: true,
      },
      {
        source: "/store/calais",
        destination: "https://aheenam.com/templates/calais",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
