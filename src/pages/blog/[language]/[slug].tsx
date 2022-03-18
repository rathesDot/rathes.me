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

import { styled } from "../../../../stitches.config"

import { PageLayout } from "../../../layouts"
import {
  Heading,
  ImageWrapper,
  List,
  ListItem,
  Meta,
  Note,
  SITE_URL,
} from "../../../components"

const Container = styled("div", {
  maxWidth: 640,
})

const Title = styled(Heading, {
  color: "$slate12",
  fontFamily: "$display",
  fontWeight: 600,
  lineHeight: "$400",
  overflowWrap: "break-word",
  maxWidth: 640,
  marginBottom: "$2",
  marginTop: "$12",

  variants: {
    size: {
      small: {
        fontSize: "$lg",
      },
      default: {
        fontSize: "$xl",
      },
      large: {
        fontSize: "$2xl",
      },
    },
  },
})

const Footer = styled("footer", {
  marginBottom: "$32",
  marginTop: "$32",
})

const BackLink = styled("span", {
  color: "$slate12",
  textDecoration: "underline",
})

const Blogpost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  source,
  meta,
  title,
  excerpt,
  image,
}) => {
  return (
    <PageLayout>
      <Meta
        title={title}
        /** @todo Fix exerpt */
        description={excerpt}
        meta={meta}
      />
      <Container>
        {image && (
          <ImageWrapper>
            <AspectRatio.Root ratio={16 / 9}>
              <Image src={image} layout="fill" objectFit="cover" alt={title} />
            </AspectRatio.Root>
          </ImageWrapper>
        )}
        <Title
          size={{ "@initial": "small", "@xs": "default", "@sm": "large" }}
          level="heading1"
        >
          {title}
        </Title>
        <MDXRemote {...source} components={{ List, ListItem, Note }} />
        <Footer>
          <Link href="/writings">
            <a>
              <BackLink>back to articles</BackLink>
            </a>
          </Link>
        </Footer>
      </Container>
    </PageLayout>
  )
}

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
  title: string
  excerpt: string
  image?: string
  meta: { name: string; content: string }[]
}> = async ({ params }) => {
  const language = params.language
  const slug = params.slug

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
}

export default Blogpost
