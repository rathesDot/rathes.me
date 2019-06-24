import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Writings = ({ data }) => (
  <Layout className="p-4">
    <SEO title="Writings" />
    {Object.entries(
      data.allMarkdownRemark.edges.reduce((acc, { node }) => {
        ;(acc[new Date(Date.parse(node.frontmatter.date)).getFullYear()] =
          acc[new Date(Date.parse(node.frontmatter.date)).getFullYear()] ||
          []).push(node)
        return acc
      }, {})
    ).map(([key, nodes]) => {
      return (
        <div key={key}>
          <h2>{key}</h2>
          {nodes.map(node => (
            <h3 key={node.id} className="mb-4">
              {node.frontmatter.title}
            </h3>
          ))}
        </div>
      )
    })}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`

export default Writings
