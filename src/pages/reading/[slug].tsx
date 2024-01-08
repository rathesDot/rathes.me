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

import { Meta, Heading1, Paragraph } from "../../components"

const BookDetailsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ title, author }) => (
  <PageLayout>
    <Meta title="Book: " />
    <div className="max-w-xl p-8 md:px-14">
      <Heading1>{title}</Heading1>
      <p className="text-base text-neutral-300">by {author}</p>
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
