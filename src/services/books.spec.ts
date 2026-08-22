import { createSlug, generateBookParams, getAllBooks } from "./books"

describe("books", () => {
  describe("createSlug", () => {
    it("slugifies title and author into a lowercase, hyphenated string", () => {
      expect(
        createSlug({
          title: "Poor Charlie's Almanack",
          author: "Charles T. Munger",
          url: "https://example.com",
        })
      ).toBe("poor-charlie's-almanack-charles-t.-munger")
    })

    it("produces the same slug for the same title/author pair", () => {
      const book = {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        url: "https://example.com",
      }

      expect(createSlug(book)).toBe(createSlug({ ...book }))
    })
  })

  describe("generateBookParams", () => {
    it("only includes rated books", () => {
      const params = generateBookParams()
      const ratedBooks = getAllBooks().filter((book) => !!book.rating)

      expect(params).toHaveLength(ratedBooks.length)
    })

    it("returns a slug for each rated book", () => {
      const params = generateBookParams()

      expect(params.length).toBeGreaterThan(0)
      params.forEach((param) => {
        expect(typeof param.slug).toBe("string")
        expect(param.slug.length).toBeGreaterThan(0)
      })
    })
  })
})
