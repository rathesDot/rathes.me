import { Link } from "@/components/Link"

import Image from "next/image"
import Profile from "@/assets/images/profile-picture.png"
import { Heading1 } from "@/src/components/Heading"
import { Paragraph } from "@/src/components/Paragraph"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="mx-auto max-w-lg space-y-8 pt-16 pb-10 text-center">
        <Image
          src={Profile}
          alt="Profile picture of Rathes Sachchithananthan"
          className="mx-auto size-24 rounded-full"
        />
        <div>
          <Heading1 level="h2">Rathes Sachchithananthan</Heading1>
          <Paragraph className="mx-auto my-1 max-w-sm text-balance">
            Web engineer interested in languages, fitness, reading and cooking.
          </Paragraph>
        </div>
      </header>
      {children}
      <footer className="mx-auto max-w-lg space-y-12 px-4 py-8 text-center sm:px-0">
        <div className="text-xs text-neutral-600 dark:text-neutral-400">
          &copy; {new Date(Date.now()).getFullYear()} /{" "}
          <Link href="https://rathes.me">@tamizhographer</Link>
        </div>
      </footer>
    </>
  )
}
