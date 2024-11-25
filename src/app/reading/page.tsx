import React from "react"
import { Metadata, NextPage } from "next"

import { getFilteredList } from "../../services/books"

import { Search } from "../../patterns/Search"

import { Separator } from "../../components/Separator"
import { Paragraph } from "../../components/Paragraph"
import { Heading1 } from "../../components/Heading"
import * as List from "../../components/List"
import { BookListItem } from "./book-list-item"

export const metadata: Metadata = {
  title: "Reading",
  description: "I love to read, I read any book that I can get my hands on.",
  alternates: {
    canonical: "/reading",
  },
}

type Params = { [key: string]: string | string[] | undefined }

const ReadingPage: NextPage<{ searchParams: Promise<Params> }> = async (
  props
) => {
  const searchParams = await props.searchParams
  const books = getFilteredList(searchParams.q?.toString() || "")

  return (
    <main>
      <section className="px-4">
        <Heading1>Reading</Heading1>
        <Paragraph>
          Books play an important part in my life. Just sitting on my couch or
          bed and reading a novel can be really inspiring.
        </Paragraph>
        <Paragraph>
          I do fancy crime novels with interesting detective characters from
          good old Sherlock Holmes to Harry Hole. But I read basically any kind
          of book that can broaden one's horizons.
        </Paragraph>
        <Paragraph>
          Actually, I dream of having my own library one day where I can invite
          everybody to pick up a nice book and read.
        </Paragraph>
      </section>
      <section className="mt-12">
        <div className="mb-8">
          <Search defaultValue={searchParams.q?.toString() || ""} />
        </div>
        {books.map(([listTitle, books], index, list) => {
          if (!books.length) {
            return
          }

          return (
            <React.Fragment key={`${listTitle}-${index}`}>
              <List.Root>
                <List.Title>{listTitle}</List.Title>
                <List.Container>
                  {books.map((book, index) => (
                    <BookListItem
                      key={`${listTitle}-book-#${index}`}
                      book={book}
                    />
                  ))}
                </List.Container>
              </List.Root>
              {index !== list.length - 1 && <Separator />}
            </React.Fragment>
          )
        })}
      </section>
    </main>
  )
}

export default ReadingPage
