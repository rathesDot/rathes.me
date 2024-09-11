"use client"

import React from "react"

import * as List from "../../components/List"
import { Book, createSlug } from "../../services/books"

export const BookListItem: React.FC<{ book: Book }> = ({ book }) => {
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
      <List.Link href={book.url}>
        {book.title}
        <List.Subtitle>by {book.author}</List.Subtitle>
      </List.Link>
    </List.Item>
  )
}
