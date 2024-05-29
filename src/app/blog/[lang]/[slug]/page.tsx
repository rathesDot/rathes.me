import { Metadata, NextPage } from "next"
import { format } from "date-fns"

import {
  getBlogPost,
  generateBlogMetaData,
  generateBlogParams,
} from "../../../../services/blog"
import { MDXRemote } from "next-mdx-remote/rsc"

import books from "../../../../../data/books.json"

import { components, heading, link, caption } from "./components"

import Image from "next/image"
import Link from "next/link"

import { PageLayout } from "../../../../layouts"
import rehypeHighlight from "rehype-highlight"

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

const BlogPage: NextPage<{ params: Params }> = async ({ params }) => {
  const { content, data } = getBlogPost(params.lang, params.slug)

  return (
    <PageLayout>
      <div className="p-8 md:px-14">
        <article className="max-w-[54ch]">
          <header className="mb-8">
            <h1 className={heading({ level: "h1" })}>{data.title}</h1>
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
              <div className="relative aspect-[3/2]">
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
                <figcaption className={caption()}>
                  {data.imageCaption}
                </figcaption>
              )}
            </figure>
          )}
          <MDXRemote
            source={content}
            options={{
              scope: { books },
              mdxOptions: { rehypePlugins: [rehypeHighlight] },
            }}
            components={components}
          />
          <footer className="my-32">
            <Link href="/writing" className={link()}>
              Back to all articles
            </Link>
          </footer>
        </article>
      </div>
    </PageLayout>
  )
}

export default BlogPage
