import { NextPage } from "next"
import React, { useMemo, useState } from "react"

import data from "../../data/books.json"

import { Book, createSlug } from "../utils/books"

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
import { SayHi } from "../patterns"

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
      <div className="max-w-xl flex-grow p-8 md:px-14">
        <section>
          <Heading1>Reading</Heading1>
          <Paragraph>
            Books play an important part in my life. Just sitting on my couch or
            bed and reading a novel can be really inspiring.
          </Paragraph>
          <Paragraph>
            I do fancy crime novels with interesting detective characters from
            good old Sherlock Holmes to Harry Hole. But I read basically any
            kind of book that can broaden one's horizons.
          </Paragraph>
          <Paragraph>
            Actually, I dream of having my own library one day where I can
            invite everybody to pick up a nice book and read.
          </Paragraph>
        </section>
        <section className="mt-12">
          <div className="mb-8">
            <TextField
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Filter list"
              placeholder="Filter list..."
            />
          </div>
          {filteredList.map(([listTitle, books], index, list) => {
            if (!books.length) {
              return
            }

            return (
              <React.Fragment key={`${listTitle}-${index}`}>
                <List title={listTitle} className="flex flex-col gap-4">
                  {books.map((book, index) => (
                    <ListItem
                      link={
                        !!book?.rating ? `/book/${createSlug(book)}` : book.url
                      }
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
        <div className="mt-16">
          <SayHi />
        </div>
      </div>
    </PageLayout>
  )
}

export default ReadingList
