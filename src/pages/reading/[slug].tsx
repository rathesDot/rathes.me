import React, { useMemo, useState } from "react"
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next"
import { cva } from "class-variance-authority"
import * as Fathom from "fathom-client"

import data from "../../../data/books.json"

import {
  Book,
  createSlug,
  findBookBySlug,
  getAllBooks,
} from "../../utils/books"

import { PageLayout } from "../../layouts"

import { Meta, Heading1, Paragraph, Link } from "../../components"
import { Rating } from "../../components/Rating"
import { BookSchema } from "../../components/BookSchema"

const readMore = cva(
  "relative delay-100 after:h-8 after:bg-gradient-to-t after:from-neutral-950 after:absolute after:bottom-0 after:inset-x-0 transition-all overflow-hidden",
  {
    variants: {
      open: {
        false: "max-h-56 after:opacity-100 md:max-h-none",
        true: "max-h-[540px] after:opacity-0 md:max-h-none",
      },
    },
  }
)

const MIN_DESCRIPTION_LENGTH = 480

const smallTitle = cva("text-xs text-neutral-500 antialiased md:text-sm", {
  variants: {
    hiddenOnMobile: {
      true: "hidden  md:block",
    },
  },
})

const BookDetailsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = (book) => {
  const { title, author, url, description, genres, rating } = book
  const descriptionLength = useMemo(() => description.length, [description])
  const [open, setOpen] = useState(descriptionLength <= MIN_DESCRIPTION_LENGTH)
  return (
    <PageLayout>
      <Meta title={`${title} by ${author}`} />
      <BookSchema book={book} />
      <div className="flex max-w-xl flex-col gap-4 p-8 md:gap-6 md:px-14">
        <header>
          <Heading1>{title}</Heading1>
          <p className="text-base text-neutral-300/80">by {author}</p>
        </header>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-2 md:gap-y-6">
          <div className="col-start-1 col-end-1 row-start-1 row-end-1 md:flex md:items-center md:gap-2">
            <h2 className={smallTitle({ hiddenOnMobile: true })}>Rating</h2>
            <Rating value={rating} />
          </div>
          <div className="col-start-1 col-end-3 row-start-2 row-end-2">
            <Link
              target="_blank"
              className="inline-block rounded-lg bg-neutral-800 px-3 py-2 font-sans text-xs font-medium antialiased md:text-sm"
              href={url}
              onClick={() => Fathom.trackEvent(`buy_${title}_book_clicked`)}
            >
              Buy on Amazon
            </Link>
          </div>
          <div className="col-start-2 col-end-2 row-start-1 row-end-1 flex items-center gap-2">
            <h2 className={smallTitle({ hiddenOnMobile: true })}>Genres</h2>
            <div className="flex gap-2">
              {genres.map((genre) => (
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
              <section className={readMore({ open })}>
                <Paragraph className="mt-0">{description}</Paragraph>
              </section>
              {descriptionLength > MIN_DESCRIPTION_LENGTH && (
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="mt-4 inline-block text-white underline underline-offset-2 md:hidden"
                >
                  {open ? "Read less" : "Continue Reading"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllBooks(data)
      .filter((book) => !!book.rating)
      .map((book) => ({ params: { slug: createSlug(book) } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Book> = async ({ params }) => {
  const slug = params.slug

  try {
    const book = findBookBySlug(`${slug}`, getAllBooks(data))

    return { props: { ...book } }
  } catch (e) {
    return { notFound: true }
  }
}

export default BookDetailsPage
