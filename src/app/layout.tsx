import localFont from "next/font/local"

import Fathom from "../components/Fathom"

import * as Navbar from "../patterns/Navbar"
import { Logo } from "../components"

import "../styles/globals.css"

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

const switzer = localFont({
  src: "../assets/switzer-variable.ttf",
  variable: "--font-switzer",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${switzer.variable} bg-neutral-950 font-sans text-white`}
      >
        <Fathom />
        <main className="flex min-h-screen flex-col font-sans">
          <Navbar.Root>
            <Navbar.Banner href="/store/calais">
              Get my latest Figma template "Calais"
            </Navbar.Banner>
            <Navbar.Menu>
              <Navbar.Item href="/">
                <Logo className="h-6 w-6" />
              </Navbar.Item>
              <Navbar.Item href="/about">About me</Navbar.Item>
              <Navbar.Item href="/reading">Reading</Navbar.Item>
              <Navbar.Item href="/writing">Writing</Navbar.Item>
              <Navbar.Item href="/photos">Photography</Navbar.Item>
              <Navbar.Item href="/work">Work</Navbar.Item>
            </Navbar.Menu>
          </Navbar.Root>
          <div className="mt-8">{children}</div>
          <footer className="inline-flex gap-1 p-8 text-xs text-neutral-400 md:px-14">
            <span>&copy; {new Date().getFullYear()}</span>
            <span>/</span>
            <a
              className="mb-4 font-medium text-neutral-400 underline decoration-neutral-600 decoration-dotted underline-offset-2 antialiased transition-colors hover:decoration-neutral-400"
              href="https://mozhi.app/@tamizhographer"
              target="_blank"
            >
              @tamizhographer
            </a>
          </footer>
        </main>
      </body>
    </html>
  )
}
