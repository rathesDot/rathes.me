import books from "@/data/books.json"

import * as List from "@/components/List"

type Book = {
  title: string
  author: string
  url: string
}

type ReadingListProps = {
  listKey: string
  title?: string
}

export const ReadingList = ({ listKey, title = listKey }: ReadingListProps) => {
  const items = (books as Record<string, Book[]>)[listKey] ?? []

  return (
    <List.Root>
      {title && <List.Title>{title}</List.Title>}
      <List.Container className="my-8 space-y-4">
        {items.map((book, index) => (
          <List.Item key={`${book.title.replaceAll(" ", "-")}-${index}`}>
            <List.Link href={book.url}>
              {book.title}
              <List.Subtitle>{`by ${book.author}`}</List.Subtitle>
            </List.Link>
          </List.Item>
        ))}
      </List.Container>
    </List.Root>
  )
}
