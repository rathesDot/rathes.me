import slugify from "slugify"

import { AUTHOR_NAME, PERSON_ID } from "@/src/site.config"

import { Book } from "@/services/books"

// schema.org expects a language code rather than an English label.
const LANGUAGE_CODES: Record<string, string> = {
  English: "en",
  German: "de",
  Tamil: "ta",
}

export const createSchemaForBook = (book: Book) => {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    bookFormat: "https://schema.org/Paperback",
    // Only claim a language when the book actually records one; undefined keys
    // are dropped by JSON.stringify.
    inLanguage: book.language ? LANGUAGE_CODES[book.language] : undefined,
    image: book.image,
    description: book.description,
    author: [{ "@type": "Person", name: book.author }],
    review: {
      "@type": "Review",
      // The reviewer belongs on the Review, not on the Rating.
      author: { "@type": "Person", "@id": PERSON_ID, name: AUTHOR_NAME },
      reviewBody: book.description,
      reviewRating: {
        "@type": "Rating",
        bestRating: 5,
        worstRating: 0,
        ratingValue: book.rating,
      },
    },
  }
}

export const BookSchema: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <script
      key={`book-${slugify(book.title)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(createSchemaForBook(book)),
      }}
    />
  )
}
