import { NextPage } from "next"
import Link from "next/link"

import { ArrowUpRightIcon } from "@heroicons/react/16/solid"

import { Card } from "@/src/components/Card"
import { Heading2 } from "@/src/components/Heading"
import {
  Bluesky,
  Instagram,
  GitHub,
  LinkedIn,
  Threads,
} from "@/src/components/Icons"

type CardLinkProps = {
  children: React.ReactNode
  href: string
  external?: boolean
}

const CardLink = ({ href, children, external = false }: CardLinkProps) => (
  <Card asChild>
    <Link
      href={href}
      className="flex items-center justify-between transition-colors ease-in-out hover:border-neutral-400 dark:hover:border-neutral-600"
      target={external ? "_blank" : undefined}
    >
      <span className="flex items-center gap-2">{children}</span>
      {external && (
        <ArrowUpRightIcon className="size-5 align-middle text-neutral-600 dark:text-neutral-200" />
      )}
    </Link>
  </Card>
)

const LinksPage: NextPage = () => {
  return (
    <main className="mx-auto max-w-lg space-y-16 px-4 sm:px-0">
      <section>
        <ul className="space-y-2">
          <li>
            <CardLink href="https://bsky.app/profile/rathes.me" external>
              <Bluesky className="size-4" color="#0285FF" />
              Bluesky
            </CardLink>
          </li>
          <li>
            <CardLink href="https://instagram.com/tamizhographer" external>
              <Instagram className="size-4" color="#E4405F" />
              Instagram
            </CardLink>
          </li>
          <li>
            <CardLink href="https://github.com/rathesDot" external>
              <GitHub className="size-4" />
              GitHub
            </CardLink>
          </li>
          <li>
            <CardLink
              href="https://www.linkedin.com/in/rathes-sachchithananthan/"
              external
            >
              <LinkedIn className="size-4" color="#0A66C2" />
              LinkedIn
            </CardLink>
          </li>
          <li>
            <CardLink href="https://threads.com/@tamizhographer" external>
              <Threads className="size-4" color="#E4405F" />
              Threads
            </CardLink>
          </li>
        </ul>
      </section>
      <section>
        <header className="mb-3 flex items-center justify-between">
          <Heading2 level="small">Projects</Heading2>
        </header>
        <ul className="space-y-2">
          <li>
            <CardLink href="/">Personal website</CardLink>
          </li>
          <li>
            <CardLink href="https://aheenam.com/apps/offset" external>
              Offset
            </CardLink>
          </li>
          <li>
            <CardLink href="https://aheenam.com/templates/calais" external>
              Calais Portfolio Template
            </CardLink>
          </li>
          <li>
            <CardLink href="https://learn-tamil.com/" external>
              Learn Tamil Online
            </CardLink>
          </li>
          <li>
            <CardLink href="https://getmaxout.app" external>
              Maxout 2.0
            </CardLink>
          </li>
          <li>
            <CardLink href="/blog/en/closing-mozhi">Mozhi</CardLink>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default LinksPage
