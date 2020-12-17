import React from "react"
import { graphql, Link as RouterLink } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img, { FluidObject } from "gatsby-image"

import { PageLayout } from ".."
import { Heading, Meta } from "../../components"

import { styled } from "../../../stitches.config"

const BackLink = styled("span", {
  color: "$white",
  textDecoration: "underline",
})

const Container = styled("div", {
  marginTop: "$32",
  maxWidth: 640,
})

const FeatureImage = styled("div", {
  marginBottom: "$4",
  marginTop: "$4",
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
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      locale: string
      image: {
        publicURL: string
        childImageSharp: {
          fluid: FluidObject | FluidObject[]
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
      content: data.site.siteMetadata.siteUrl + post.fields.slug,
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
        <Heading level="heading1">{post.frontmatter.title}</Heading>
        <FeatureImage>
          {post.frontmatter.image && (
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
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
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        locale
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export { BlogLayout as default }
