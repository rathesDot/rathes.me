import React from "react"
import { cx } from "class-variance-authority"

import { Footer, Navigation } from "../../patterns"
import Link from "next/link"

const PageLayout: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <Link
        href="/store/calais"
        className="fixed inset-x-0 z-40 flex h-8 items-center justify-center bg-neutral-800 text-center text-sm font-semibold text-neutral-50 antialiased"
      >
        Get my latest Figma template "Calais"
      </Link>
      <Navigation />
      <div className={cx("mt-24 md:mt-32", className)}>{children}</div>
      <Footer />
    </main>
  )
}

export { PageLayout }
