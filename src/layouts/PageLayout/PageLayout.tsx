import React, { createContext, useState, useEffect } from "react"

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

const themes = {
  dark: "dark",
  light: "light",
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
      <main className="flex min-h-screen flex-col justify-between bg-neutral-50 p-8 font-sans text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 md:p-16 lg:py-24 lg:px-32">
        <Navigation />
        {children}
        <Footer />
      </main>
    </ThemeContext.Provider>
  )
}

export { PageLayout }
