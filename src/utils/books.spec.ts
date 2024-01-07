import { Book, createSlug, findBookBySlug, getAllBooks } from "./books"

describe("books", () => {
  it("creates slug with title and author", () => {
    expect(
      createSlug({ title: "Book 1", url: "https://abc.com", author: "Author" })
    ).toBe("book-1-author")
  })

  it("finds book by slug", () => {
    const books: Book[] = [
      { title: "Book 1", url: "https://abc.com", author: "Author" },
      { title: "Book 2", url: "https://abc.com", author: "Author" },
      { title: "Book 1", url: "https://abc.com", author: "Other Author" },
      { title: "Book 1", url: "https://abc.com", author: "Author 2" },
    ]

    expect(findBookBySlug("book-1-author", books)).toStrictEqual({
      title: "Book 1",
      url: "https://abc.com",
      author: "Author",
    })

    expect(findBookBySlug("book-2-author", books)).toStrictEqual({
      title: "Book 2",
      url: "https://abc.com",
      author: "Author",
    })

    expect(findBookBySlug("book-1-author-2", books)).toStrictEqual({
      title: "Book 1",
      url: "https://abc.com",
      author: "Author 2",
    })
  })

  it("returns list of books from groups", () => {
    const section1: Book[] = [
      { title: "Book 1", url: "https://abc.com", author: "Author" },
      { title: "Book 2", url: "https://abc.com", author: "Author" },
      { title: "Book 1", url: "https://abc.com", author: "Other Author" },
      { title: "Book 1", url: "https://abc.com", author: "Author 2" },
    ]

    const section2: Book[] = [
      { title: "Book 3", url: "https://abc.com", author: "Author" },
      { title: "Book 4", url: "https://abc.com", author: "Author" },
      { title: "Book 5", url: "https://abc.com", author: "Other Author" },
      { title: "Book 6", url: "https://abc.com", author: "Author 2" },
    ]

    const group = {
      "My first Group": section1,
      "My other Group": section2,
    }

    expect(getAllBooks(group)).toStrictEqual([...section1, ...section2])
  })
})
