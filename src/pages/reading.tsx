import { NextPage } from "next"
import React, { useMemo, useState } from "react"

import data from "../../data/books.json"

import { PageLayout } from "../layouts"
import {
  Heading1,
  Meta,
  List,
  ListItem,
  Separator,
  TextField,
  Paragraph,
} from "../components"

type Book = { title: string; url: string; author: string }

const ReadingList: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const filteredList: [string, Book[]][] = useMemo(() => {
    return (Object.entries(data) as [string, Book[]][]).map(([year, books]) => {
      return [
        year,
        books.filter(
          (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      ]
    })
  }, [searchTerm])

  return (
    <PageLayout>
      <Meta title="Reading" />
      <div className="mb-32 max-w-xl flex-grow p-8">
        <section className="mb-16 flex flex-col gap-4">
          <Heading1 size={2}>Reading</Heading1>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            suscipit nunc massa, condimentum accumsan lectus luctus vitae.
            Vestibulum commodo porta neque eget semper. Phasellus non dictum
            metus. Pellentesque pretium est quis aliquet tempus.
          </Paragraph>
          <TextField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Filter list"
            placeholder="Filter list..."
          />
        </section>
        <section className="mt-16">
          {filteredList.map(([listTitle, books], index, list) => {
            if (!books.length) {
              return
            }

            return (
              <React.Fragment key={`${listTitle}-${index}`}>
                <List title={listTitle}>
                  {books.map((book, index) => (
                    <ListItem
                      link={book.url}
                      subtitle={`by ${book.author}`}
                      key={`${listTitle}-book-#${index}`}
                    >
                      {book.title}
                    </ListItem>
                  ))}
                </List>
                {index !== list.length - 1 && <Separator />}
              </React.Fragment>
            )
          })}
        </section>
      </div>
    </PageLayout>
  )
}

export default ReadingList