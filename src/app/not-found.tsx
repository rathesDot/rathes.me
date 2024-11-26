import React from "react"

import { Heading1 } from "../components/Heading"
import { Paragraph } from "../components/Paragraph"
import * as List from "../components/List"

export const metadata = {
  title: "Not Found",
}

const NotFoundPage = () => (
  <main className="p-4">
    <Heading1>
      Looks like you are looking for a page that does not exist.
    </Heading1>
    <Paragraph>
      If you came here from a Google Search, feel free to go back and try a
      different search term. Otherwise, here are some things that you might have
      been looking for:
    </Paragraph>
    <List.Root className="my-4">
      <List.Container className="space-y-2">
        <List.Item>
          <List.Link href="/">Homepage</List.Link>
        </List.Item>
        <List.Item>
          <List.Link href="/writing">Blog</List.Link>
        </List.Item>
        <List.Item>
          <List.Link href="/about">About me</List.Link>
        </List.Item>
      </List.Container>
    </List.Root>
  </main>
)

export default NotFoundPage
