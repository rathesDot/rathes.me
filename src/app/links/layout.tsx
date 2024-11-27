import { Link } from "@/components/Link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
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
