import React from "react"
import { Metadata, NextPage } from "next"

import * as Collapsible from "@radix-ui/react-collapsible"
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/16/solid"

import { getFilteredList } from "../../services/books"

import { Search } from "../../patterns/Search"

import { Paragraph } from "../../components/Paragraph"
import { heading, Heading1 } from "../../components/Heading"
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
      <section className="space-y-8 py-8">
        <div className="px-4">
          <Search
            placeholder="Book title or Author"
            defaultValue={searchParams.q?.toString() || ""}
          />
        </div>
        {books.map(([listTitle, books], index) => {
          if (!books.length) {
            return
          }

          return (
            <div className="px-4" key={`${listTitle}-${index}`}>
              <Collapsible.Root
                asChild
                defaultOpen={
                  listTitle === "Currently reading" ||
                  (!!searchParams.q && searchParams.q.toString() !== "")
                }
              >
                <List.Root>
                  <Collapsible.Trigger
                    className={heading({
                      level: "small",
                      className: "group flex cursor-pointer items-center gap-1",
                    })}
                  >
                    <ChevronRightIcon className="size-4 group-data-[state='open']:hidden" />
                    <ChevronDownIcon className="size-4 group-data-[state='closed']:hidden" />
                    {listTitle}
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    <List.Container className="mt-3 space-y-3 pl-5">
                      {books.map((book, index) => (
                        <BookListItem
                          key={`${listTitle}-book-#${index}`}
                          book={book}
                        />
                      ))}
                    </List.Container>
                  </Collapsible.Content>
                </List.Root>
              </Collapsible.Root>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default ReadingPage
