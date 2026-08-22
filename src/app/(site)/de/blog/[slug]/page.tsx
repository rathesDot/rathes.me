import { Metadata, NextPage } from "next"

import { generateBlogMetaData, generateBlogParams } from "@/services/blog"

import { BlogPostView } from "../../../blog/_shared/BlogPostView"

type Params = { slug: string }

export async function generateMetadata(props: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await props.params
  return generateBlogMetaData("de", slug)
}

export const dynamicParams = false

export async function generateStaticParams() {
  return generateBlogParams()
    .filter((params) => params.lang === "de")
    .map(({ slug }) => ({ slug }))
}

const BlogPage: NextPage<{ params: Promise<Params> }> = async (props) => {
  const { slug } = await props.params
  return <BlogPostView lang="de" slug={slug} />
}

export default BlogPage
