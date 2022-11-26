import { Html, Head, Main, NextScript } from "next/document"

import { colorModePersistanceKey } from "../layouts/PageLayout/PageLayout"

function getInitialColorMode() {
  const colorModeKey = "COLOR_MODE_KEY"
  const lightThemeClassName = "LIGHT_THEME_CLASSNAME"
  const darkThemeClassName = "DARK_THEME_CLASSNAME"

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
  } else {
    root.classList.add(darkThemeClassName)
  }
}

const ColorMode = () => {
  const boundFn = String(getInitialColorMode)
    .replace("COLOR_MODE_KEY", colorModePersistanceKey)
    .replace("LIGHT_THEME_CLASSNAME", "light")
    .replace("DARK_THEME_CLASSNAME", "dark")

  let calledFunction = `(${boundFn})()`

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
