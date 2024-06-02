import { Metadata, NextPage } from "next"
import { notFound } from "next/navigation"

import { cva } from "../../../../cva.config"

import {
  findBookBySlug,
  generateBookMetadata,
  generateBookParams,
} from "../../../services/books"

import { Paragraph, Link } from "../../../components"
import { Heading1 } from "../../../components/Heading"
import { Rating } from "../../../components/Rating"
import { BookSchema } from "../../../components/BookSchema"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  return generateBookMetadata(params.slug)
}

export const dynamicParams = false

export async function generateStaticParams() {
  return generateBookParams()
}

const smallTitle = cva({
  base: "text-xs text-neutral-500 antialiased md:text-sm",
  variants: {
    hiddenOnMobile: {
      true: "hidden  md:block",
    },
  },
})

const BookDetailsPage: NextPage<{ params: { slug: string } }> = ({
  params: { slug },
}) => {
  const book = findBookBySlug(slug)

  if (!book) {
    notFound()
  }

  const { title, author, url, description, genres, rating } = book

  return (
    <div>
      <BookSchema book={book} />
      <div className="flex max-w-xl flex-col gap-4 md:gap-6">
        <header>
          <Heading1>{title}</Heading1>
          <p className="text-base text-neutral-300/80">by {author}</p>
        </header>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-2 md:gap-y-6">
          <div className="col-start-1 col-end-1 row-start-1 row-end-1 md:flex md:items-center md:gap-2">
            <h2 className={smallTitle({ hiddenOnMobile: true })}>Rating</h2>
            <Rating value={rating || 0} />
          </div>
          <div className="col-start-1 col-end-3 row-start-2 row-end-2">
            <Link
              target="_blank"
              className="inline-block rounded-lg bg-neutral-800 px-3 py-2 font-sans text-xs font-medium antialiased md:text-sm"
              href={url}
            >
              Buy on Amazon
            </Link>
          </div>
          <div className="col-start-2 col-end-2 row-start-1 row-end-1 flex items-center gap-2">
            <h2 className={smallTitle({ hiddenOnMobile: true })}>Genres</h2>
            <div className="flex gap-2">
              {(genres || []).map((genre) => (
                <Link
                  key={genre.toLocaleLowerCase()}
                  underlined
                  className="text-xs underline-offset-2 antialiased md:text-sm"
                  href={`/reading?genre=${genre.toLowerCase()}`}
                >
                  {genre}
                </Link>
              ))}
            </div>
          </div>
          {description && (
            <div className="col-start-1 col-end-3 row-start-3 row-end-3">
              <Paragraph className="mt-0">{description}</Paragraph>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookDetailsPage
