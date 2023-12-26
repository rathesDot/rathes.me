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
import hightlight from "rehype-highlight"

import path from "path"
import fs from "fs"
import matter from "gray-matter"

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
import { BulletList } from "../../../components/List/BulletList"

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
  const components: any = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    hr: Separator,
    p: ({ ...props }) => <Paragraph {...props} />,
    ol: OrderedList,
    ul: BulletList,
    blockquote: Quote,
    a: ({ ...props }) => (
      <StyleLink underlined className="text-neutral-50" {...props} />
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
      <div className="max-w-xl p-8">
        {image && (
          <ImageWrapper aspect="16/9">
            <Image src={image} fill sizes="704px" priority alt={title} />
          </ImageWrapper>
        )}
        <Heading1>{title}</Heading1>
        <MDXRemote {...source} components={components} scope={{ books }} />
        <footer className="my-32">
          <Link
            href="/writing"
            className="text-slate-50 underline underline-offset-2"
          >
            Back to all articles
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
