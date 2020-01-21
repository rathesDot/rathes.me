import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { Heading1, Heading2, Paragraph } from "./src/components/Typography"

import "prism-themes/themes/prism-atom-dark.css"

const components = {
  h1: Heading1,
  h2: Heading2,
  p: Paragraph,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
