type MdxQuery = {
  allMdx: {
    edges: Array<{
      node: {
        parent: { name: string; relativeDirectory: string }
        frontmatter: { title: string; date: string }
      }
    }>
  }
}

type Post = {
  title: string
  date: string
  link: string
}

export const extractBlogPosts = (data: MdxQuery): Post[] => {
  return [
    ...data.allMdx.edges.map(({ node: post }) => {
      return {
        title: post.frontmatter.title,
        date: post.frontmatter.date,
        link: `/${post.parent.relativeDirectory}/${post.parent.name}`,
      }
    }),
  ]
}

export const groupPostsByYear = (posts: Post[]): { [key: number]: Post[] } => {
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

export const getSortedGroups = (groups: { [key: number]: Post[] }) => {
  return Object.entries(groups).sort((a, b) => (a < b ? 1 : b < a ? -1 : 0))
}
