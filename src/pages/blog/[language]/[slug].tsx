import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
} from "next"
import Image from "next/image"
import Link from "next/link"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import prism from "remark-prism"

import path from "path"
import fs from "fs"
import matter from "gray-matter"

import books from "../../../../data/books.json"

import { PageLayout } from "../../../layouts"
import {
  Heading,
  ImageWrapper,
  List,
  ListItem,
  Meta,
  Note,
  SITE_URL,
  CodeBlock,
  InlineCode,
  OrderedList,
  Paragraph,
  Quote,
  Separator,
  Link as StyleLink,
} from "../../../components"

const H1 = ({ children }) => <Heading level="heading1">{children}</Heading>
const H2 = ({ children }) => <Heading level="heading2">{children}</Heading>
const H3 = ({ children }) => <Heading level="heading3">{children}</Heading>
const H4 = ({ children }) => <Heading level="heading4">{children}</Heading>

const Pre = ({ children, className }) => {
  return <CodeBlock className={className}>{children}</CodeBlock>
}

const Blogpost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  source,
  meta,
  title,
  excerpt,
  image,
}) => {
  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    hr: Separator,
    p: Paragraph,
    ol: OrderedList,
    blockquote: Quote,
    a: ({ children, ...props }) => (
      <StyleLink underlined color="slate12" {...props}>
        {children}
      </StyleLink>
    ),
    img: ({ children, src, alt, ...props }) => (
      <ImageWrapper>
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
      <div className="max-w-[640px]">
        {image && (
          <ImageWrapper>
            <AspectRatio.Root ratio={16 / 9}>
              <Image src={image} fill sizes="704px" priority alt={title} />
            </AspectRatio.Root>
          </ImageWrapper>
        )}
        <h1 className="text-slate-900 font-sansDisplay font-semibold leading-tight break-words max-w-[640px] mb-2 mt-12 text-xl sm:text-2xl dark:text-slate-50">
          {title}
        </h1>
        <MDXRemote {...source} components={components} scope={{ books }} />
        <footer className="my-32">
          <Link
            href="/writings"
            className="text-slate-900 underline underline-offset-2 dark:text-slate-50"
          >
            back to articles
          </Link>
        </footer>
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
  image?: string
  meta: { name: string; content: string }[]
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
        excerpt,
        image: data.image || null,
        meta: [...meta, ...imageMeta],
        url: `${SITE_URL}/blog/${language}/${slug}`,
        source: await serialize(content, {
          mdxOptions: {
            remarkPlugins: [prism],
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
