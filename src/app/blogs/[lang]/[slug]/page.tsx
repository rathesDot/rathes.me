import { Metadata, NextPage } from "next"
import { generateBlogParams } from "../../../../services/blog"

export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: params.slug,
  }
}

export const dynamicParams = false

export async function generateStaticParams() {
  return generateBlogParams()
}

const BlogPage: NextPage<{
  params: { lang: "en" | "de"; slug: string }
}> = ({ params }) => {
  return (
    <div>
      My Post: {params.slug} in {params.lang}
    </div>
  )
}

export default BlogPage
