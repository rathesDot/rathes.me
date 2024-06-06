import React from "react"
import { Metadata, NextPage } from "next"

import { createSlug, getFilteredList } from "../../services/books"

import { Search } from "../../patterns/Search"
import { SayHi } from "../../patterns/SayHi"

import { Separator } from "../../components/Separator"
import { Paragraph } from "../../components/Paragraph"
import { Heading1 } from "../../components/Heading"
import * as List from "../../components/List"

export const metadata: Metadata = {
  title: "Reading",
  description: "I love to read, I read any book that I can get my hands on.",
}

const ReadingPage: NextPage<{
  searchParams: { [key: string]: string | string[] | undefined }
}> = ({ searchParams }) => {
  const books = getFilteredList(searchParams.q?.toString() || "")

  return (
    <div>
      <section>
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
                    <List.Item key={`${listTitle}-book-#${index}`}>
                      <List.Link
                        href={
                          !!book?.rating
                            ? `/reading/${createSlug(book)}`
                            : book.url
                        }
                      >
                        {book.title}
                        <List.Subtitle>by {book.author}</List.Subtitle>
                      </List.Link>
                    </List.Item>
                  ))}
                </List.Container>
              </List.Root>
              {index !== list.length - 1 && <Separator />}
            </React.Fragment>
          )
        })}
      </section>
      <div className="mt-16">
        <SayHi />
      </div>
    </div>
  )
}

export default ReadingPage
