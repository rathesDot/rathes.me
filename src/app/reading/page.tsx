import React from "react"
import { Metadata, NextPage } from "next"

import { createSlug, getFilteredList } from "../../services/books"

import { Search } from "../../patterns/Search"
import { SayHi } from "../../patterns"

import {
  Heading1,
  List,
  ListItem,
  Paragraph,
  Separator,
} from "../../components"

export const metadata: Metadata = {
  title: "Writing",
  description: "I love to read, I read any book that I can get my hands on.",
}

const ReadingPage: NextPage<{
  searchParams: { [key: string]: string | string[] | undefined }
}> = ({ searchParams }) => {
  const books = getFilteredList(searchParams.q?.toString() || "")

  return (
    <div>
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
            <Search defaultValue={searchParams.q?.toString() || ""} />
          </div>
          {books.map(([listTitle, books], index, list) => {
            if (!books.length) {
              return
            }

            return (
              <React.Fragment key={`${listTitle}-${index}`}>
                <List title={listTitle} className="flex flex-col gap-4">
                  {books.map((book, index) => (
                    <ListItem
                      link={
                        !!book?.rating
                          ? `/reading/${createSlug(book)}`
                          : book.url
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
    </div>
  )
}

export default ReadingPage
