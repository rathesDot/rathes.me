import { createSlug } from "./books"

describe("books", () => {
  it("creates slug with title and author", () => {
    expect(
      createSlug({ title: "Book 1", url: "https://abc.com", author: "Author" })
    ).toBe("book-1-author")
  })
  it.todo("finds book by title and author")
})
