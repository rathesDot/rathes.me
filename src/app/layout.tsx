import { Inter } from "next/font/google"
import NextLink from "next/link"

import { Bars2Icon } from "@heroicons/react/24/outline"

import Fathom from "../components/Fathom"

import "../styles/globals.css"

import { SayHi } from "../patterns/SayHi"
import { Link } from "../components/Link"
import { Logo } from "../components/Logo"

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white font-sans text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
        <nav className="mx-auto max-w-lg p-4 sm:px-0">
          <div className="flex items-center justify-between">
            <NextLink href="/">
              <Logo className="size-6" />
            </NextLink>
            <button>
              <Bars2Icon className="size-6" />
            </button>
          </div>
        </nav>
        <Fathom />
        {children}
        <footer className="mx-auto max-w-lg space-y-12 px-4 py-8 sm:px-0">
          <SayHi />
          <div className="text-xs text-neutral-600 dark:text-neutral-400">
            &copy; {new Date(Date.now()).getFullYear()} /{" "}
            <Link href="https://pinkary.com/@tamizhographer" target="_blank">
              @tamizhographer
            </Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
