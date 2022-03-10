import { Html, Head, Main, NextScript } from "next/document"

import { getCssText, lightTheme } from "../../stitches.config"

import { colorModePersistanceKey } from "../layouts/PageLayout/PageLayout"

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

export default function Document() {
  return (
    <Html>
      <Head>
        <FallbackStyles />
      </Head>
      <body>
        <ColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
