import { Book, createSlug, findBookBySlug } from "./books"

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
})
