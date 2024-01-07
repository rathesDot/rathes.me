import slugify from "slugify"

export type Book = {
  title: string
  url: string
  author: string
  rating?: number
  genres?: string[]
  description?: string
}

export const createSlug = (book: Book): string => {
  return slugify(`${book.title} ${book.author}`, {
    lower: true,
  })
}
