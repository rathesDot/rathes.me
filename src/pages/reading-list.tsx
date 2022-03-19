import { NextPage } from "next"

import { styled } from "../../stitches.config"

import data from "../../data/books.json"

import { PageLayout } from "../layouts"
import { Heading, Meta, List, ListItem, Separator } from "../components"

const Container = styled("div", {
  marginBottom: "$32",
  maxWidth: 640,
})

const Section = styled("section", {
  marginTop: "$16",
})

const ReadingList: NextPage = () => (
  <PageLayout>
    <Meta title="Reading List" />
    <Container>
      <Heading>Reading List</Heading>
      <Section>
        {Object.entries(data).map(([listTitle, books], index, list) => (
          <>
            <List key={listTitle} title={listTitle}>
              {books.map((book, index) => (
                <ListItem
                  link={book.url}
                  subtitle={`by ${book.author}`}
                  key={`${listTitle} Book #${index}`}
                >
                  {book.title}
                </ListItem>
              ))}
            </List>
            {index !== list.length - 1 && <Separator />}
          </>
        ))}
      </Section>
    </Container>
  </PageLayout>
)

export default ReadingList
