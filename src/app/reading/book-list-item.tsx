"use client"

import React from "react"

import * as List from "../../components/List"
import { Book, createSlug } from "../../services/books"

export const BookListItem: React.FC<{ book: Book }> = ({ book }) => (
  <List.Item>
    <List.Link
      href={!!book?.rating ? `/reading/${createSlug(book)}` : book.url}
    >
      {book.title}
      <List.Subtitle>by {book.author}</List.Subtitle>
    </List.Link>
  </List.Item>
)
