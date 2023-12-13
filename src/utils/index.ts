export type Post = {
  title: string
  date: string
  link: string
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
