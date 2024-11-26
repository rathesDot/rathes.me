"use client"

import React from "react"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"

import * as List from "../../components/List"
import { Book, createSlug } from "../../services/books"
import { useRouter } from "next/navigation"

export const BookListItem: React.FC<{ book: Book }> = ({ book }) => {
  const router = useRouter()

  if (!!book?.rating) {
    return (
      <List.Item>
        <List.Link href={`/reading/${createSlug(book)}`}>
          {book.title}
          <List.Subtitle>by {book.author}</List.Subtitle>
        </List.Link>
      </List.Item>
    )
  }

  return (
    <List.Item>
      <List.Button onClick={() => router.push(book.url)}>
        <span className="flex items-center gap-1">
          {book.title}
          <ArrowUpRightIcon className="hidden size-5 text-neutral-400 sm:inline" />
        </span>
        <List.Subtitle>by {book.author}</List.Subtitle>
      </List.Button>
    </List.Item>
  )
}
