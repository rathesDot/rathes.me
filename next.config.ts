import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/reading-list", destination: "/reading", permanent: true },
      { source: "/writings", destination: "/writing", permanent: true },
      {
        source: "/blog/json-web-token",
        destination: "/blog/de/json-web-token",
        permanent: true,
      },
    ]
  },
}

export default nextConfig