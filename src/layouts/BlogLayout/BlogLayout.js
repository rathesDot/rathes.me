import React from "react"
import { graphql, Link as RouterLink } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import { PageLayout } from "../"
import { Box, Heading1, Meta } from "../../components"

import { styled } from "../../../stitches.config"

const BackLink = styled("span", {
  color: "$white",
  textDecoration: "underline",
})

export const BlogLayout = ({ data }) => {
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
      <Box maxWidth="640px" marginTop={32}>
        <Heading1>{post.frontmatter.title}</Heading1>
        <Box marginBottom={4} marginTop={4}>
          {post.frontmatter.image && (
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
          )}
        </Box>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Box element="footer" marginTop={32} marginBottom={32}>
          <RouterLink to="/writings">
            <BackLink>back to articles</BackLink>
          </RouterLink>
        </Box>
      </Box>
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
