import React from "react"

import { cva } from "../../cva.config"
import { Link } from "../components/Link"
import { Heading1 } from "../components/Heading"
import { Paragraph } from "../components/Paragraph"

export const metadata = {
  title: "Not Found",
}

const unorderedList = cva({
  base: "my-4 space-y-4 marker:text-neutral-400/70",
  variants: {
    withDisc: { true: "list-disc pl-6" },
  },
  defaultVariants: { withDisc: true },
})

const listItem = cva({
  base: "text-neutral-400 antialiased [&_p]:mb-0",
})

const NotFoundPage = () => (
  <div className="mt-8">
    <Heading1 className="mb-2 max-w-md">
      Looks like you are looking for a page that does not exist.
    </Heading1>
    <Paragraph>
      If you came here from a Google Search, feel free to go back and try a
      different search term. Otherwise, here are some things that you might have
      been looking for:
    </Paragraph>
    <ul className={unorderedList({ withDisc: false, className: "space-y-2" })}>
      <li className={listItem()}>
        <Link href="/">Homepage</Link>
      </li>
      <li className={listItem()}>
        <Link href="/writing">Blog</Link>
      </li>
      <li className={listItem()}>
        <Link href="/about">About me</Link>
      </li>
    </ul>
  </div>
)

export default NotFoundPage
