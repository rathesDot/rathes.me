import { Metadata, NextPage } from "next"
import {
  generateBlogMetaData,
  generateBlogParams,
} from "../../../../services/blog"

type Params = { lang: "en" | "de"; slug: string }

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  return generateBlogMetaData(params.lang, params.slug)
}

export const dynamicParams = false

export async function generateStaticParams() {
  return generateBlogParams()
}

const BlogPage: NextPage<{ params: Params }> = ({ params }) => {
  return (
    <div>
      My Post: {params.slug} in {params.lang}
    </div>
  )
}

export default BlogPage
