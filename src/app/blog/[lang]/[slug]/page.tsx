import { Metadata, NextPage } from "next"
import Image from "next/image"

import { format } from "date-fns"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"

import {
  getBlogPost,
  generateBlogMetaData,
  generateBlogParams,
} from "@/services/blog"

import books from "@/data/books.json"

import { Heading1 } from "@/components/Heading"

import { components, caption } from "./components"

type Params = { lang: "en" | "de"; slug: string }

export async function generateMetadata(props: {
  params: Promise<Params>
}): Promise<Metadata> {
  const params = await props.params
  return generateBlogMetaData(params.lang, params.slug)
}

export const dynamicParams = false

export async function generateStaticParams() {
  return generateBlogParams()
}

const BlogPage: NextPage<{ params: Promise<Params> }> = async (props) => {
  const params = await props.params
  const { content, data } = getBlogPost(params.lang, params.slug)

  return (
    <main className="py-4 lg:py-8">
      <header className="mx-auto mb-4 max-w-lg space-y-1 px-4 sm:px-0">
        <Heading1 className="mb-1">{data.title}</Heading1>
        <div className="flex items-center gap-2">
          <time
            className="text-sm text-neutral-500 antialiased"
            dateTime={format(new Date(Date.parse(data.date)), "yyyy-MM-dd")}
          >
            {format(new Date(Date.parse(data.date)), "MMM dd, yyyy")}
          </time>
          <span className="text-sm text-neutral-500 antialiased">/</span>
          <span className="text-sm text-neutral-500 antialiased">
            Rathes Sachchithananthan
          </span>
        </div>
      </header>
      {data.image && (
        <figure className="mx-auto my-4 max-w-lg sm:px-0">
          <div className="relative aspect-3/2">
            <Image
              src={data.image}
              fill
              sizes="512px"
              priority
              alt={data.title}
              className="object-cover object-center"
            />
          </div>
          {data.imageCaption && (
            <figcaption className={caption()}>{data.imageCaption}</figcaption>
          )}
        </figure>
      )}
      <article className="mx-auto max-w-lg px-4 sm:px-0">
        <MDXRemote
          source={content}
          options={{
            scope: { books },
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeHighlight],
            },
          }}
          components={components}
        />
      </article>
    </main>
  )
}

export default BlogPage
