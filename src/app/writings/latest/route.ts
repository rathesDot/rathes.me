import { getLatestBlogposts } from "@/services/blog"

// Same notion of "latest" the home page uses, so externally published posts
// count too and the redirect can point off-site.
export function GET() {
  const [latest] = getLatestBlogposts(1)

  // A relative Location keeps this correct on preview deploys and locally,
  // where an origin baked in from the site config would send visitors to
  // production instead. Absolute links to external posts pass through as they
  // are. Temporary on purpose: the target moves with every new post, and a
  // permanent redirect would pin clients to whichever post was newest then.
  return new Response(null, {
    status: 307,
    headers: { location: latest?.link ?? "/writing" },
  })
}
