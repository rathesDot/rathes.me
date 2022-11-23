import React, { createContext, useState, useEffect } from "react"

import { styled, lightTheme } from "../../../stitches.config"

import { Footer, Navigation } from "../../patterns"

type ThemeContextType = {
  theme: ColorMode
  toggleTheme: () => void
}

type ColorMode = "dark" | "light"

export const colorModePersistanceKey = "color-mode"

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

const MainContainer = styled("main", {
  backgroundColor: "$slate2",
  color: "$slate11",
  display: "flex",
  flexDirection: "column",
  fontFamily: "$default",
  justifyContent: "space-between",
  minHeight: "100vh",
  padding: "$8",

  variants: {
    padding: {
      md: {
        padding: "$16",
      },
      lg: {
        padding: "$24 $32",
      },
    },
  },
})

const themes = {
  dark: "dark",
  light: lightTheme.className,
}

const PageLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ColorMode>()

  useEffect(() => {
    const root = document.documentElement
    const initialColorMode = root.classList.contains(themes["light"])
      ? "light"
      : "dark"
    setTheme(initialColorMode)
  }, [])

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add(themes["dark"])
      localStorage.setItem(colorModePersistanceKey, "dark")
      return
    }

    setTheme("light")
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add(themes["light"])
    localStorage.setItem(colorModePersistanceKey, "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContainer padding={{ "@md": "md", "@lg": "lg" }}>
        <Navigation />
        {children}
        <Footer />
      </MainContainer>
    </ThemeContext.Provider>
  )
}

export { PageLayout }
