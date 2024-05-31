import slugify from "slugify"

import { Book } from "../services/books"

export const createSchemaForBook = (book: Book) => {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    bookFormat: "Paperback",
    inLanguage: book?.language || "English",
    image: book.image,
    description: book.description,
    author: [{ "@type": "Person", name: book.author }],
    review: {
      reviewBody: book.description,
      reviewRating: {
        author: {
          "@type": "Person",
          givenName: "Rathes",
        },
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
