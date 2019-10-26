const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const {
    internal: { type },
  } = node
  const { createNodeField } = actions

  if (["MarkdownRemark", "Mdx"].includes(type)) {
    const filePath = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: filePath.replace("/articles/", "/blog/"),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: { allMarkdownRemark, allMdx },
  } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Blog/mdx.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Blog/index.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
