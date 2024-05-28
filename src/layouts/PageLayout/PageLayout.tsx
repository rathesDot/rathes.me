import React from "react"
import { cx } from "class-variance-authority"

import * as Navbar from "../../patterns/Navbar"
import { Footer } from "../../patterns"
import { Logo } from "../../components"

const PageLayout: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
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
      <div className={cx("mt-8", className)}>{children}</div>
      <Footer />
    </main>
  )
}

export { PageLayout }
