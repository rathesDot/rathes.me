import type { AppProps } from "next/app"
import { MDXProvider } from "@mdx-js/react"

import {
  CodeBlock,
  Heading,
  InlineCode,
  Link,
  OrderedList,
  Paragraph,
  Quote,
  Separator,
  ImageWrapper,
} from "../components"

const H1 = ({ children }) => <Heading level="heading1">{children}</Heading>
const H2 = ({ children }) => <Heading level="heading2">{children}</Heading>
const H3 = ({ children }) => <Heading level="heading3">{children}</Heading>
const H4 = ({ children }) => <Heading level="heading4">{children}</Heading>

const Pre = ({ children, className }) => {
  return <CodeBlock className={className}>{children}</CodeBlock>
}

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
    <Link underlined color="slate12" {...props}>
      {children}
    </Link>
  ),
  img: ({ children, ...props }) => (
    <ImageWrapper>
      <img {...props} />
    </ImageWrapper>
  ),
  pre: Pre,
  code: InlineCode,
}

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
