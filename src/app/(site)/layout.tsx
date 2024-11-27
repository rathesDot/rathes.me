import * as Navbar from "@/patterns/Navbar"
import { SayHi } from "@/patterns/SayHi"

import { Link } from "@/components/Link"
import { Logo } from "@/components/Logo"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar.Root>
        <div className="mx-auto max-w-lg px-4 sm:px-0">
          <Navbar.Menu>
            <Navbar.Item href="/" className="px-1" title="Home">
              <Logo className="size-5 text-neutral-900 dark:text-neutral-400" />
            </Navbar.Item>
            <Navbar.Item href="/about">About</Navbar.Item>
            <Navbar.Item href="/work">Work</Navbar.Item>
            <Navbar.Item href="/writing">Writing</Navbar.Item>
            <Navbar.Item href="/reading">Reading</Navbar.Item>
            <Navbar.Item href="/photography">Photos</Navbar.Item>
          </Navbar.Menu>
        </div>
      </Navbar.Root>
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
    </>
  )
}
