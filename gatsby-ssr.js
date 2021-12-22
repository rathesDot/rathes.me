import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { getCssText, lightTheme } from "./stitches.config"

import {
  CodeBlock,
  Heading,
  InlineCode,
  Link,
  OrderedList,
  Paragraph,
  Quote,
  Separator,
} from "./src/components"

import { colorModePersistanceKey } from "./src/layouts/PageLayout/PageLayout"

function getInitialColorMode() {
  const colorModeKey = "🔑"
  const lightThemeClassName = "🌙"

  const mql = window.matchMedia("(prefers-color-scheme: light)")
  const prefersLightModefromMq = mql.matches

  const persistedPreference = localStorage.getItem(colorModeKey)
  const hasPersistedPreference = typeof persistedPreference === "string"

  let colorMode = "dark"

  if (hasPersistedPreference) {
    colorMode = persistedPreference
  } else {
    colorMode = prefersLightModefromMq ? "light" : "dark"
  }

  let root = document.documentElement
  if (colorMode === "light") {
    root.classList.add(lightThemeClassName)
  }
}

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
    <Link underlined color="white" {...props}>
      {children}
    </Link>
  ),
  pre: Pre,
  code: InlineCode,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)

const ColorMode = () => {
  const boundFn = String(getInitialColorMode)
    .replace("🔑", colorModePersistanceKey)
    .replace("🌙", lightTheme.className)

  let calledFunction = `(${boundFn})()`

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

const FallbackStyles = () => {
  return (
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />
  )
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles key="fallback-styles" />)
  setPreBodyComponents(<ColorMode key="magic-script-tag" />)
}
