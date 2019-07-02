export const extractBlogPosts = data => {
  return data.allMarkdownRemark.edges.map(({ node: post }) => {
    return {
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      link: post.fields.slug,
    }
  })
}
