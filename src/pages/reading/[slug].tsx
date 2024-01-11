import React from "react"
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next"

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

const BookDetailsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ title, author, url, description, genres, rating }) => (
  <PageLayout>
    <Meta title="Book: " />
    <div className="flex max-w-xl flex-col gap-4 p-8 md:px-14">
      <header>
        <Heading1>{title}</Heading1>
        <p className="text-base text-neutral-300/80">by {author}</p>
      </header>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        <div className="col-start-1 col-end-1 row-start-1 row-end-1 md:flex md:items-center md:gap-2">
          <h2 className="hidden text-xs text-neutral-500 antialiased md:block">
            Rating
          </h2>
          <Rating value={rating} />
        </div>
        <div className="col-start-1 col-end-3 row-start-2 row-end-2">
          <Link
            target="_blank"
            className="inline-block rounded-lg bg-neutral-800 px-3 py-2 font-sans text-xs font-medium antialiased"
            href={url}
          >
            Buy on Amazon
          </Link>
        </div>
        <div className="col-start-2 col-end-2 row-start-1 row-end-1 flex items-center gap-2">
          <h2 className="text-xs text-neutral-500 antialiased">Genres</h2>
          <div className="flex gap-2">
            {genres.map((genre) => (
              <Link
                key={genre.toLocaleLowerCase()}
                underlined
                className="text-xs underline-offset-2 antialiased"
                href={`/reading?genre=${genre.toLowerCase()}`}
              >
                {genre}
              </Link>
            ))}
          </div>
        </div>
        {description && (
          <div className="col-start-1 col-end-3 row-start-3 row-end-3">
            <Paragraph>{description}</Paragraph>
          </div>
        )}
      </div>
    </div>
  </PageLayout>
)

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
