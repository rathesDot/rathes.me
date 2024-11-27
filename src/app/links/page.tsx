import { NextPage } from "next"
import Link from "next/link"

import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import {
  SiBluesky,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons"

import { Card } from "@/src/components/Card"
import { Heading2 } from "@/src/components/Heading"

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
        <header className="mb-3 flex items-center justify-between">
          <Heading2 level="small">Social Media</Heading2>
        </header>
        <ul className="space-y-2">
          <li>
            <CardLink href="https://bsky.app/profile/rathes.me" external>
              <SiBluesky className="size-4" color="#0285FF" />
              Bluesky
            </CardLink>
          </li>
          <li>
            <CardLink href="https://instagram.com/tamizhographer" external>
              <SiInstagram className="size-4" color="#E4405F" />
              Instagram
            </CardLink>
          </li>
          <li>
            <CardLink href="https://instagram.com/tamizhographer" external>
              <SiLinkedin className="size-4" color="#0A66C2" />
              LinkedIn
            </CardLink>
          </li>
        </ul>
      </section>
      <section>
        <header className="mb-3 flex items-center justify-between">
          <Heading2 level="small">My projects</Heading2>
        </header>
        <ul className="space-y-2">
          <li>
            <CardLink href="/">My website</CardLink>
          </li>
          <li>
            <CardLink href="https://aheenam.com/templates/calais" external>
              Calais Portfolio Template
            </CardLink>
          </li>
          <li>
            <CardLink href="https://getkodi.com/" external>
              Kodi
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
            <CardLink href="https://espresso-at-home.com" external>
              Espresso at home
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
