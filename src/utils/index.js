export const extractBlogPosts = data => {
  return data.allMarkdownRemark.edges.map(({ node: post }) => {
    return {
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      link: post.fields.slug,
    }
  })
}

export const groupPostsByYear = posts => {
  return posts
    .sort((a, b) =>
      Date.parse(a.date) < Date.parse(b.date)
        ? 1
        : Date.parse(b.date) < Date.parse(a.date)
        ? -1
        : 0
    )
    .reduce((list, post) => {
      ;(list[new Date(Date.parse(post.date)).getFullYear()] =
        list[new Date(Date.parse(post.date)).getFullYear()] || []).push(post)
      return list
    }, {})
}
