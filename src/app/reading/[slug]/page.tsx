import { Metadata, NextPage } from "next"
import { notFound } from "next/navigation"

import { cva } from "../../../../cva.config"

import {
  findBookBySlug,
  generateBookMetadata,
  generateBookParams,
} from "../../../services/books"

import { Link } from "../../../components/Link"
import { Paragraph } from "../../../components/Paragraph"
import { Heading1, Heading2 } from "../../../components/Heading"
import { Rating } from "../../../components/Rating"
import { BookSchema } from "../../../components/BookSchema"

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: {
  params: Params
}): Promise<Metadata> {
  const params = await props.params
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

const BookDetailsPage: NextPage<{ params: Params }> = async (props) => {
  const params = await props.params

  const { slug } = params

  const book = findBookBySlug(slug)

  if (!book) {
    notFound()
  }

  const { title, author, url, description, genres, rating } = book

  return (
    <main className="mx-auto max-w-lg space-y-4 px-4 py-4 sm:px-0">
      <BookSchema book={book} />
      <header>
        <Heading1 className="mb-0">{title}</Heading1>
        <p className="block text-sm leading-relaxed text-neutral-500 antialiased dark:text-neutral-400">
          by {author}
        </p>
      </header>
      <div className="space-y-2">
        <Heading2 level="small">Rating</Heading2>
        <Rating value={rating || 0} />
      </div>
      <div className="space-y-1">
        <Heading2 level="small">Genres</Heading2>
        <div className="inline-flex flex-wrap gap-2">
          {(genres || []).map((genre) => (
            <Link
              key={genre.toLocaleLowerCase()}
              underlined
              className="text-sm"
              href={`/reading?genre=${genre.toLowerCase()}`}
            >
              {genre}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Link
          target="_blank"
          className="inline-block rounded-md bg-neutral-200 px-3 py-2.5 font-semibold text-neutral-700 antialiased dark:bg-neutral-800 dark:text-neutral-300"
          underlined={false}
          href={url}
        >
          Buy on Amazon
        </Link>
      </div>
      {description && <Paragraph>{description}</Paragraph>}
    </main>
  )
}

export default BookDetailsPage
