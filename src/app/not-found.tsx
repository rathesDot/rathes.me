import React from "react"

import { List, ListItem, Paragraph, Heading1 } from "../components"
import { cva } from "class-variance-authority"
import Link from "next/link"

export const metaData = {
  title: "Not Found",
}

const heading = cva("text-white antialiased mt-8", {
  variants: {
    level: {
      h1: "text-2xl font-bold tracking-[-0.01em] leading-tight",
      h2: "text-lg font-semibold",
      h3: "text-base font-semibold",
      h4: "text-base font-normal",
    },
  },
})

const paragraph = cva("text-neutral-400 antialiased mb-4 last-of-type:mb-0")

const link = cva(
  "text-neutral-300 underline underline-offset-2 decoration-neutral-600 hover:decoration-neutral-400 transition-colors font-medium antialiased mb-4"
)

const unorderedList = cva("my-4 space-y-4 marker:text-neutral-400/70", {
  variants: {
    withDisc: { true: "list-disc pl-6" },
  },
  defaultVariants: { withDisc: true },
})

const listItem = cva("text-neutral-400 antialiased [&_p]:mb-0")

const NotFoundPage = () => (
  <div className="flex min-h-screen max-w-[54ch] flex-col justify-center p-8 lg:ml-8">
    <h1 className={heading({ level: "h1", className: "mb-2" })}>
      Looks like you are looking for a page that does not exist.
    </h1>
    <p className={paragraph()}>
      If you came here from a Google Search, feel free to go back and try a
      different search term. Otherwise, here are some things that you might have
      been looking for:
    </p>
    <ul className={unorderedList({ withDisc: false, className: "space-y-2" })}>
      <li className={listItem()}>
        <Link className={link()} href="/">
          Homepage
        </Link>
      </li>
      <li className={listItem()}>
        <Link className={link()} href="/writing">
          Blog
        </Link>
      </li>
      <li className={listItem()}>
        <Link className={link()} href="/about">
          About me
        </Link>
      </li>
    </ul>
  </div>
)

export default NotFoundPage
