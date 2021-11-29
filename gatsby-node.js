const { createFilePath } = require(`gatsby-source-filesystem`)

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
