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
import {
  ImageWrapper,
  List,
  ListItem,
  Meta,
  Note,
  SITE_URL,
  CodeBlock,
  InlineCode,
  BulletList,
  OrderedList,
  Paragraph,
  Quote,
  Separator,
  Link as StyleLink,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from "../../../components"

import { cva } from "class-variance-authority"

const Pre = ({ children, className }) => {
  return <CodeBlock className={className}>{children}</CodeBlock>
}

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

const Blogpost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  source,
  meta,
  title,
  excerpt,
  image,
  date,
}) => {
  const components: any = {
    h1: ({ className, ...props }: ComponentPropsWithRef<"h1">) => (
      <h1 {...props} className={heading({ level: "h1", className })} />
    ),
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    hr: Separator,
    p: ({ ...props }) => (
      <Paragraph {...props} className="mb-4 leading-normal md:mb-8" />
    ),
    ol: OrderedList,
    ul: BulletList,
    blockquote: Quote,
    a: ({ ...props }) => (
      <StyleLink
        underlined
        className="text-neutral-50 underline-offset-4"
        {...props}
      />
    ),
    img: ({ children, src, alt, ...props }) => (
      <ImageWrapper className="my-8">
        <img src={src} alt={alt} {...props} />
      </ImageWrapper>
    ),
    pre: Pre,
    code: InlineCode,
    List,
    ListItem,
    Note,
  }

  return (
    <PageLayout>
      <Meta title={title} description={excerpt} meta={meta} />
      <article className="max-w-[54ch] p-8 md:px-14">
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
        {image && (
          <ImageWrapper aspect="16/9" className="mb-8">
            <Image src={image} fill sizes="704px" priority alt={title} />
          </ImageWrapper>
        )}
        <MDXRemote {...source} components={components} scope={{ books }} />
        <footer className="my-32">
          <Link
            href="/writing"
            className="text-slate-50 underline underline-offset-2"
          >
            Back to all articles
          </Link>
        </footer>
      </article>
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
  image?: string
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
        image: data.image || null,
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
