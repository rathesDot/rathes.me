import localFont from "next/font/local"

import Fathom from "../components/Fathom"

import * as Navbar from "../patterns/Navbar"
import { Logo } from "../components/Logo"

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
          <div className="container mx-auto my-8 w-full max-w-[560px] flex-grow px-4 md:px-0">
            {children}
          </div>
          <footer className="mx-auto mt-auto inline-flex w-full max-w-[576px] gap-1 px-4 py-8 text-xs text-neutral-400 md:px-0">
            <span>&copy; {new Date().getFullYear()}</span>
            <span>/</span>
            <a
              className="mb-4 font-medium text-neutral-400 underline decoration-neutral-600 decoration-dotted underline-offset-2 antialiased transition-colors hover:decoration-neutral-400"
              href="https://pinkary.com/@tamizhographer"
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
