import React from "react"

import { MDXProvider } from "@mdx-js/react"
import {
  Heading1,
  Heading2,
  Paragraph,
  Heading3,
  Heading4,
} from "./src/components/Typography"
import { Separator } from "./src/components/Separator/Separator"
import { Link, OrderedList, Quote } from "./src/components"

import "prism-themes/themes/prism-atom-dark.css"

const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
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
