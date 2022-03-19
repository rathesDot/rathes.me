import { NextPage } from "next"
import React, { useMemo, useState } from "react"

import { styled } from "../../stitches.config"

import data from "../../data/books.json"

import { PageLayout } from "../layouts"
import {
  Heading,
  Meta,
  List,
  ListItem,
  Separator,
  TextField,
} from "../components"

const Container = styled("div", {
  flexGrow: 1,
  marginBottom: "$32",
  maxWidth: 640,
})

const Section = styled("section", {
  marginTop: "$16",
})

const Header = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginBottom: "$16",
})

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
      <Meta title="Reading List" />
      <Container>
        <Header>
          <Heading>Reading List</Heading>
          <TextField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Filter list"
            placeholder="Filter list..."
          />
        </Header>
        <Section>
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
        </Section>
      </Container>
    </PageLayout>
  )
}

export default ReadingList
