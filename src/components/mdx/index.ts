import Link from "@/components/Link.astro"
import Separator from "@/components/Separator.astro"

import ReadingList from "@/patterns/ReadingList.astro"

import Blockquote from "./Blockquote.astro"
import Bold from "./Bold.astro"
import Code from "./Code.astro"
import CodeBlock from "./CodeBlock.astro"
import Heading1 from "./Heading1.astro"
import Heading2 from "./Heading2.astro"
import Heading3 from "./Heading3.astro"
import Heading4 from "./Heading4.astro"
import Image from "./Image.astro"
import List from "./List.astro"
import ListEntry from "./ListEntry.astro"
import ListItem from "./ListItem.astro"
import Note from "./Note.astro"
import OrderedList from "./OrderedList.astro"
import Paragraph from "@/components/Paragraph.astro"
import Strikethrough from "./Strikethrough.astro"
import UnorderedList from "./UnorderedList.astro"

// The element overrides and the components the posts reach for by name. Passed
// to <Content components={...} /> by both blog routes.
export const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  p: Paragraph,
  hr: Separator,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListEntry,
  blockquote: Blockquote,
  a: Link,
  img: Image,
  pre: CodeBlock,
  code: Code,
  strong: Bold,
  del: Strikethrough,
  List,
  ListItem,
  ReadingList,
  Note,
}
