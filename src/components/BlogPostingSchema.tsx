import { AUTHOR_NAME, PERSON_ID, SITE_URL } from "@/src/site.config"

export type BlogPost = {
  title: string
  description?: string
  date: string
  updated?: string
  image?: string
  lang: string
  path: string
}

const absolute = (url: string) =>
  url.startsWith("http") ? url : `${SITE_URL}${url}`

export const createSchemaForBlogPost = (post: BlogPost) => {
  const url = absolute(post.path)

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    mainEntityOfPage: url,
    url,
    headline: post.title,
    // Undefined keys are dropped by JSON.stringify, so posts without a
    // description or hero image simply omit those properties.
    description: post.description || undefined,
    image: post.image ? absolute(post.image) : undefined,
    datePublished: new Date(post.date).toISOString(),
    dateModified: post.updated ? new Date(post.updated).toISOString() : undefined,
    inLanguage: post.lang,
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: AUTHOR_NAME,
      url: `${SITE_URL}/about`,
    },
    publisher: { "@id": PERSON_ID },
  }
}

export const BlogPostingSchema: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(createSchemaForBlogPost(post)),
      }}
    />
  )
}
