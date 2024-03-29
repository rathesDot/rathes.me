import slugify from "slugify"

export type Book = {
  title: string
  url: string
  author: string
  rating?: number
  genres?: string[]
  description?: string
  language?: "English" | "Tamil" | "German"
  image?: string
}

export const createSlug = (book: Book): string => {
  return slugify(`${book.title} ${book.author}`, {
    lower: true,
  })
}

export const findBookBySlug = (slug: string, books: Book[]): Book => {
  return books.find((book) => createSlug(book) === slug)
}

export const getAllBooks = (groups: Record<string, Book[]>): Book[] => {
  return Object.values(groups).flat()
}
