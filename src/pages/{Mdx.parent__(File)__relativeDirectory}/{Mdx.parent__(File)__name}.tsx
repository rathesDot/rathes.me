import React from "react"
import { graphql, Link as RouterLink } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import { PageLayout } from "../../layouts"
import { Heading, Meta } from "../../components"

import { styled } from "../../../stitches.config"

const BackLink = styled("span", {
  color: "$slate12",
  textDecoration: "underline",
})

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
  marginBottom: "$8",

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
  margin: "$4 -$8",

  "> *": {
    width: "100%",
  },
})

const Footer = styled("footer", {
  marginBottom: "$32",
  marginTop: "$32",
})

type BlogData = {
  site: {
    siteMetadata: {
      siteUrl: string
    }
  }
  mdx: {
    body: string
    excerpt?: string
    parent: { name: string; relativeDirectory: string }
    frontmatter: {
      title: string
      locale: string
      image: {
        publicURL: string
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

export const BlogLayout: React.FC<{ data: BlogData }> = ({ data }) => {
  const post = data.mdx
  const meta = [
    {
      name: `og:url`,
      content: `${data.site.siteMetadata.siteUrl}/${post.parent.relativeDirectory}/${post.parent.name}`,
    },
    {
      name: `og:type`,
      content: `article`,
    },
    {
      name: `og:locale`,
      content: post.frontmatter.locale,
    },
    {
      name: `article:author`,
      content: `https://www.facebook.com/rathes.de`,
    },
  ]
  const imageMeta = post.frontmatter.image
    ? [
        {
          name: `twitter:image`,
          content:
            data.site.siteMetadata.siteUrl + post.frontmatter.image.publicURL,
        },
        {
          name: `og:image`,
          content:
            data.site.siteMetadata.siteUrl + post.frontmatter.image.publicURL,
        },
        {
          name: `og:image:secure_url`,
          content:
            data.site.siteMetadata.siteUrl + post.frontmatter.image.publicURL,
        },
      ]
    : []

  return (
    <PageLayout>
      <Meta
        title={post.frontmatter.title}
        description={post.excerpt}
        meta={[...meta, ...imageMeta]}
      />
      <Container>
        <Title
          size={{ "@initial": "small", "@xs": "default", "@sm": "large" }}
          level="heading1"
        >
          {post.frontmatter.title}
        </Title>
        <FeatureImage>
          {post.frontmatter.image && (
            <GatsbyImage
              alt={`Feature image for "${post.frontmatter.title}"`}
              image={post.frontmatter.image.childImageSharp.gatsbyImageData}
            />
          )}
        </FeatureImage>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Footer>
          <RouterLink to="/writings">
            <BackLink>back to articles</BackLink>
          </RouterLink>
        </Footer>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      body
      parent {
        ... on File {
          id
          name
          relativeDirectory
        }
      }
      frontmatter {
        title
        locale
        image {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export { BlogLayout as default }
