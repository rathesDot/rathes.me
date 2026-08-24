import slugify from "slugify"

import data from "@/data/books.json"

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

export const getAllBooks = (): Book[] => Object.values(books).flat()

export const getBookLists = (): [string, Book[]][] => Object.entries(books)

// Only rated books have a detail page — the rest link straight to the shop.
export const getRatedBooks = (): Book[] =>
  getAllBooks().filter((book) => !!book.rating)

export const createSlug = (book: Book): string => {
  return slugify(`${book.title} ${book.author}`, {
    lower: true,
  })
}

export const getBookUrl = (book: Book): string => `/reading/${createSlug(book)}`
