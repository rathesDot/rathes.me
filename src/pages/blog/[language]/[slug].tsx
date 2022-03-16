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

import path from "path"
import fs from "fs"
import matter from "gray-matter"

import { styled } from "../../../../stitches.config"

import { PageLayout } from "../../../layouts"
import { Heading } from "../../../components"

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

const FeatureImage = styled("div", {
  borderRadius: "10px",
  margin: "$4 -$8",
  overflow: "hidden",
  position: "relative",
  height: 320,

  img: {
    objectFit: "cover",
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
  frontmatter,
}) => (
  <PageLayout>
    {/** @todo Add meta data of blog */}
    <Container>
      {/** @todo Improve image sizes */}
      {frontmatter.image && (
        <FeatureImage>
          <Image src={frontmatter.image} layout="fill" />
        </FeatureImage>
      )}
      <Title
        size={{ "@initial": "small", "@xs": "default", "@sm": "large" }}
        level="heading1"
      >
        {frontmatter.title}
      </Title>
      <MDXRemote {...source} />
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
  frontmatter: { [key: string]: any }
}> = async ({ params }) => {
  const language = params.language
  const slug = params.slug

  const source = fs.readFileSync(
    path.join(process.cwd(), `./src/content/blog/${language}/${slug}.mdx`),
    "utf-8"
  )

  const { content, data } = matter(source)

  return {
    props: {
      frontmatter: JSON.parse(JSON.stringify(data)),
      source: await serialize(content),
    },
  }
}

export default Blogpost
