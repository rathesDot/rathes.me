import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
} from "next"
import Image from "next/image"
import Link from "next/link"
import { ComponentPropsWithRef } from "react"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import hightlight from "rehype-highlight"

import path from "path"
import fs from "fs"
import matter from "gray-matter"

import { format } from "date-fns"

import books from "../../../../data/books.json"

import { PageLayout } from "../../../layouts"
import { List, ListItem, Meta, Note, SITE_URL } from "../../../components"

import { cva } from "class-variance-authority"

const heading = cva("text-white antialiased mt-8", {
  variants: {
    level: {
      h1: "text-2xl font-bold tracking-[-0.01em] leading-tight",
      h2: "text-lg font-semibold",
      h3: "text-base font-semibold",
      h4: "text-base font-normal",
    },
  },
})

const paragraph = cva("text-neutral-400 antialiased mb-4 last-of-type:mb-0")

const link = cva(
  "text-neutral-300 underline underline-offset-2 decoration-neutral-600 hover:decoration-neutral-400 transition-colors font-medium antialiased mb-4"
)

const image = cva(
  "relative block my-4 [&_img]:object-cover [&_img]:object-center"
)

const caption = cva("text-neutral-400 block my-1 text-xs")

const hr = cva(
  "h-auto border-none leading-none my-8 text-neutral-600 antialiased font-semibold before:block before:content-['*_*_*']"
)

const orderedList = cva(
  "list-decimal pl-6 my-4 space-y-4 marker:text-neutral-400/70"
)
const unorderedList = cva(
  "list-disc pl-6 my-4 space-y-4 marker:text-neutral-400/70"
)
const listItem = cva("text-neutral-400 antialiased [&_p]:mb-0")

const bold = cva("text-neutral-300 font-semibold antialiased")

const quote = cva(
  "relative my-8 py-8 pl-12 pr-8 bg-neutral-800/30 text-neutral-400"
)

const inlineCode = cva("font-mono text-sm", {
  variants: {
    codeblock: {
      false:
        "whitespace-normal break-all text-neutral-300 bg-neutral-800 rounded-sm px-1 py-[0.1em]",
    },
  },
})

const codeBlock = cva(
  "my-8 overflow-x-auto rounded bg-neutral-800/30 p-8 text-neutral-400 outline outline-neutral-800"
)

const Blogpost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  source,
  meta,
  title,
  excerpt,
  featureImage,
  featureImageCaption,
  date,
}) => {
  const components: any = {
    h1: ({ className, ...props }: ComponentPropsWithRef<"h1">) => (
      <h1 {...props} className={heading({ level: "h1", className })} />
    ),
    h2: ({ className, ...props }: ComponentPropsWithRef<"h2">) => (
      <h2 {...props} className={heading({ level: "h2", className })} />
    ),
    h3: ({ className, ...props }: ComponentPropsWithRef<"h3">) => (
      <h3 {...props} className={heading({ level: "h3", className })} />
    ),
    h4: ({ className, ...props }: ComponentPropsWithRef<"h4">) => (
      <h4 {...props} className={heading({ level: "h4", className })} />
    ),
    p: ({ className, ...props }: ComponentPropsWithRef<"p">) => (
      <p {...props} className={paragraph({ className })} />
    ),
    hr: ({ className, ...props }: ComponentPropsWithRef<"hr">) => (
      <hr {...props} className={hr({ className })} />
    ),
    ol: ({ className, ...props }: ComponentPropsWithRef<"ol">) => (
      <ol {...props} className={orderedList({ className })} />
    ),
    ul: ({ className, ...props }: ComponentPropsWithRef<"ul">) => (
      <ul {...props} className={unorderedList({ className })} />
    ),
    li: ({ className, ...props }: ComponentPropsWithRef<"li">) => (
      <li {...props} className={listItem({ className })} />
    ),
    blockquote: ({
      className,
      children,
      ...props
    }: ComponentPropsWithRef<"blockquote">) => (
      <blockquote className={quote({ className })} {...props}>
        <svg
          width="41"
          height="33"
          viewBox="0 0 41 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-6 top-6"
        >
          <path
            d="M40.232 17.984V32.832H24.36V23.104C24.36 18.4106 24.872 14.4426 25.896 11.2C26.92 7.87196 28.456 4.45862 30.504 0.959961H38.056C37.288 3.00796 36.5626 4.92796 35.88 6.71996C35.2826 8.51196 34.7706 10.3466 34.344 12.224C34.0026 14.016 33.832 15.936 33.832 17.984H40.232ZM16.04 17.984V32.832H0.167969V23.104C0.167969 18.4106 0.679969 14.4426 1.70397 11.2C2.8133 7.87196 4.3493 4.45862 6.31197 0.959961H13.864C13.0106 3.00796 12.2853 4.92796 11.688 6.71996C11.0906 8.51196 10.6213 10.3466 10.28 12.224C9.93864 14.016 9.76797 15.936 9.76797 17.984H16.04Z"
            fill="currentColor"
            fillOpacity="0.05"
          />
        </svg>

        {children}
      </blockquote>
    ),
    a: ({ className, ...props }: ComponentPropsWithRef<"a">) => (
      <a {...props} className={link({ className })} />
    ),
    img: ({ className, alt, ...props }: ComponentPropsWithRef<"img">) => (
      <img alt={alt} {...props} className={image({ className })} />
    ),
    pre: ({ className, ...props }: ComponentPropsWithRef<"pre">) => (
      <pre {...props} className={codeBlock({ className })} />
    ),
    code: ({ className, ...props }: ComponentPropsWithRef<"code">) => (
      <code
        className={inlineCode({ codeblock: className !== "" })}
        {...props}
      />
    ),
    List,
    ListItem,
    Note,
    strong: ({ className, ...props }: ComponentPropsWithRef<"strong">) => (
      <strong {...props} className={bold({ className })} />
    ),
  }

  return (
    <PageLayout>
      <Meta title={title} description={excerpt} meta={meta} />
      <div className="p-8 md:px-14">
        <article className="max-w-[54ch]">
          <header className="mb-8">
            <h1 className={heading({ level: "h1" })}>{title}</h1>
            <div className="flex items-center gap-2">
              <time
                className="text-sm text-neutral-400 antialiased"
                dateTime={format(new Date(Date.parse(date)), "yyyy-MM-dd")}
              >
                {format(new Date(Date.parse(date)), "MMM dd, yyyy")}
              </time>
              <span className="text-sm text-neutral-600 antialiased">/</span>
              <span className="text-sm text-neutral-400 antialiased">
                Rathes Sachchithananthan
              </span>
            </div>
          </header>
          {featureImage && (
            <figure className="my-8">
              <div className="relative aspect-[3/2]">
                <Image
                  src={featureImage}
                  fill
                  sizes="704px"
                  priority
                  alt={title}
                  className="object-cover object-center"
                />
              </div>
              {featureImageCaption && (
                <figcaption className={caption()}>
                  {featureImageCaption}
                </figcaption>
              )}
            </figure>
          )}
          <MDXRemote {...source} components={components} scope={{ books }} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsPath = path.join(process.cwd(), "./src/content/blog")
  const languages = ["en", "de"]

  const posts = languages
    .map((language) =>
      fs.readdirSync(path.join(blogsPath, language)).map((entry) => ({
        params: {
          language,
          slug: `${path.basename(entry, ".mdx")}`,
        },
      }))
    )
    .flat()

  return {
    paths: posts,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  source: MDXRemoteSerializeResult
  title: string
  excerpt: string
  featureImage?: string
  featureImageCaption?: string
  meta: { name: string; content: string }[]
  date?: string
}> = async ({ params }) => {
  const language = params.language
  const slug = params.slug

  try {
    const source = fs.readFileSync(
      path.join(process.cwd(), `./src/content/blog/${language}/${slug}.mdx`),
      "utf-8"
    )

    const { content, data, excerpt } = matter(source, {
      excerpt: true,
      excerpt_separator: "{/* more */}",
    })

    const meta = [
      { name: `og:url`, content: `${SITE_URL}/blog/${language}/${slug}` },
      { name: `og:type`, content: `article` },
      { name: `og:locale`, content: data.locale },
    ]

    const imageMeta = data.image
      ? [
          { name: `twitter:image`, content: SITE_URL + data.image },
          { name: `og:image`, content: SITE_URL + data.image },
          { name: `og:image:secure_url`, content: SITE_URL + data.image },
        ]
      : []

    return {
      props: {
        title: data.title,
        excerpt: excerpt || data.description,
        featureImage: data.image || null,
        featureImageCaption: data.imageCaption || null,
        date: data.date.toString() || null,
        meta: [...meta, ...imageMeta],
        url: `${SITE_URL}/blog/${language}/${slug}`,
        source: await serialize(content, {
          mdxOptions: {
            /** @ts-ignore */
            rehypePlugins: [hightlight],
          },
        }),
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export default Blogpost
