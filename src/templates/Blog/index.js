import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  const meta = post.frontmatter.image
    ? [
        {
          name: `twitter:image`,
          value:
            data.site.siteMetadata.siteUrl + post.frontmatter.image.publicURL,
        },
        {
          name: `og:url`,
          value: data.site.siteMetadata.siteUrl + post.fields.slug,
        },
        {
          name: `og:type`,
          value: `article`,
        },
        {
          name: `og:locale`,
          value: post.frontmatter.locale,
        },
        {
          name: `og:image`,
          value:
            data.site.siteMetadata.siteUrl + post.frontmatter.image.publicURL,
        },
      ]
    : []

  return (
    <Layout className="p-4">
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        meta={meta}
      />
      <div>
        <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
          {post.frontmatter.title}
        </h1>
        {post.frontmatter.image && (
          <Img
            className="w-full"
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
