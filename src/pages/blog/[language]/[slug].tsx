import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
} from "next"
import { PageLayout } from "../../../layouts"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"

import path from "path"
import fs from "fs"
import matter from "gray-matter"

const Blogpost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  source,
}) => (
  <PageLayout>
    <MDXRemote {...source} />
  </PageLayout>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsPath = path.join(process.cwd(), "./src/content/blog")
  const languages = ["en", "de"]

  const posts = languages
    .map((language) => {
      return fs.readdirSync(path.join(blogsPath, language)).map((entry) => {
        return {
          params: {
            language,
            slug: `${path.basename(entry, ".mdx")}`,
          },
        }
      })
    })
    .flat()

  return {
    paths: posts,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  source: MDXRemoteSerializeResult
}> = async ({ params }) => {
  const language = params.language
  const slug = params.slug

  const source = fs.readFileSync(
    path.join(process.cwd(), `./src/content/blog/${language}/${slug}.mdx`),
    "utf-8"
  )

  const { content } = matter(source)

  return {
    props: {
      source: await serialize(content),
    },
  }
}

export default Blogpost
