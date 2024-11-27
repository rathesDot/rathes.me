import { Inter } from "next/font/google"

import Fathom from "@/components/Fathom"

import "@/styles/globals.css"

export const metadata = {
  title: {
    template: "%s — Rathes Sachchithananthan",
    default: "Rathes Sachchithananthan",
  },
  description:
    "I'm a passionate software engineer and maker turning ideas into reality.  I specialize in web development with React and Laravel and can help you with custom solutions for your projects.  Let's discuss your project and see how I can help make it a success!",
  metadataBase: new URL("https://rathes.me"),
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Rathes Sachchithananthan", url: "https://rathes.me" }],
  creator: "Rathes Sachchithananthan",
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
})

type LayoutProps = { children: React.ReactNode }

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white font-sans text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
        <Fathom />
        {children}
      </body>
    </html>
  )
}
