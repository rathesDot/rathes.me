import React from "react"
import { MDXProvider } from "@mdx-js/react"

import {
  Heading,
  Link,
  OrderedList,
  Paragraph,
  Quote,
  Separator,
} from "./src/components"

import "prism-themes/themes/prism-atom-dark.css"

const H1 = ({ children }) => <Heading level="heading1">{children}</Heading>
const H2 = ({ children }) => <Heading level="heading2">{children}</Heading>
const H3 = ({ children }) => <Heading level="heading3">{children}</Heading>
const H4 = ({ children }) => <Heading level="heading4">{children}</Heading>

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  hr: Separator,
  p: Paragraph,
  ol: OrderedList,
  blockquote: Quote,
  a: ({ children, ...props }) => (
    <Link underlined color="white" {...props}>
      {children}
    </Link>
  ),
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
