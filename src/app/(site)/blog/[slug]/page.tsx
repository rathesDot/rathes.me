import { Metadata, NextPage } from "next"

import { generateBlogMetaData, generateBlogParams } from "@/services/blog"

import { BlogPostView } from "../_shared/BlogPostView"

type Params = { slug: string }

export async function generateMetadata(props: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await props.params
  return generateBlogMetaData("en", slug)
}

export const dynamicParams = false

export async function generateStaticParams() {
  return generateBlogParams()
    .filter((params) => params.lang === "en")
    .map(({ slug }) => ({ slug }))
}

const BlogPage: NextPage<{ params: Promise<Params> }> = async (props) => {
  const { slug } = await props.params
  return <BlogPostView lang="en" slug={slug} />
}

export default BlogPage
