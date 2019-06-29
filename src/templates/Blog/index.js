import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout className="p-4">
      <SEO title={post.frontmatter.title} />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
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
