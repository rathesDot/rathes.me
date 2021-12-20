import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { renderToString } from "react-dom/server"

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

import {
  colorModePersistanceKey,
  getInitialColorMode,
} from "./src/layouts/PageLayout/PageLayout"

export const replaceRenderer = ({
  bodyComponent,
  setHeadComponents,
  replaceBodyHTMLString,
}) => {
  const bodyHTML = renderToString(bodyComponent)
  const styles = getCssText()

  setHeadComponents([
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: styles,
      }}
    />,

    replaceBodyHTMLString(bodyHTML),
  ])
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
  const getInitialColorModeString = `const getInitialColorMode = ${String(
    getInitialColorMode
  ).replace("colorModePersistanceKey", `"${colorModePersistanceKey}"`)}`

  const themesString = `const themes = {dark: "dark", light: "${lightTheme.className}"}`

  const colorModeScript = `(function() {
      ${getInitialColorModeString};
      ${themesString};
      const colorMode = getInitialColorMode();
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("${lightTheme.className}");
      document.documentElement.classList.add(themes[colorMode]);
      localStorage.setItem("${colorModePersistanceKey}", colorMode);
    })()
  `
  return <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ColorMode />)
}
