import slugify from "slugify"

import data from "../../data/books.json"

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

const books: Record<string, Book[]> = data

export const getAllBooks = (): Book[] => Object.values(data).flat()

export const getFilteredList = (term: string): [string, Book[]][] => {
  return Object.entries(books).map(([year, books]) => [
    year,
    books.filter(
      (book) =>
        book.title.toLowerCase().includes(term.toLocaleLowerCase()) ||
        book.author.toLowerCase().includes(term.toLocaleLowerCase())
    ),
  ])
}

export const createSlug = (book: Book): string => {
  return slugify(`${book.title} ${book.author}`, {
    lower: true,
  })
}
