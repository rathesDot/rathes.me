import { Metadata, NextPage } from "next"
import { format } from "date-fns"

import {
  getBlogPost,
  generateBlogMetaData,
  generateBlogParams,
} from "../../../../services/blog"
import { MDXRemote } from "next-mdx-remote/rsc"

import books from "../../../../../data/books.json"

import Image from "next/image"

import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"

import { components, caption } from "./components"
import { Heading1 } from "../../../../components/Heading"
import { Link } from "../../../../components/Link"

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
    <article className="max-w-[54ch]">
      <header className="mb-8">
        <Heading1>{data.title}</Heading1>
        <div className="flex items-center gap-2">
          <time
            className="text-sm text-neutral-400 antialiased"
            dateTime={format(new Date(Date.parse(data.date)), "yyyy-MM-dd")}
          >
            {format(new Date(Date.parse(data.date)), "MMM dd, yyyy")}
          </time>
          <span className="text-sm text-neutral-600 antialiased">/</span>
          <span className="text-sm text-neutral-400 antialiased">
            Rathes Sachchithananthan
          </span>
        </div>
      </header>
      {data.image && (
        <figure className="my-8">
          <div className="relative aspect-3/2">
            <Image
              src={data.image}
              fill
              sizes="704px"
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
      <footer className="my-32">
        <Link href="/writing">Back to all articles</Link>
      </footer>
    </article>
  )
}

export default BlogPage
