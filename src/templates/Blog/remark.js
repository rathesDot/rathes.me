import React from "react"
import { graphql, Link as RouterLink } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Link from "../../components/Link"
import Img from "gatsby-image"

import "./styles.css"
import { Box } from "../../components/Box"

export default ({ data }) => {
  const post = data.markdownRemark
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
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        meta={[...meta, ...imageMeta]}
      />
      <Box maxWidth="640px" marginTop={32} className="blog-post">
        <h1 className="text-3xl font-bold leading-tight mb-6 text-white break-words xs:text-4xl">
          {post.frontmatter.title}
        </h1>
        {post.frontmatter.image && (
          <Img
            className="-mx-4 block my-6 md:mx-0"
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Box element="footer" marginTop={32} marginBottom={32}>
          <Link element={RouterLink} color="white" underlined to="/writings">
            back to articles
          </Link>
        </Box>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(format: PLAIN)
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
