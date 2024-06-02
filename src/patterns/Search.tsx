"use client"

import { ComponentPropsWithRef } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { cva } from "../../cva.config"

const textField = cva({
  base: "box-border inline-flex h-9 w-full max-w-md items-center justify-center rounded-lg bg-neutral-800 px-2 text-base text-neutral-50/70 outline-none ring-1 ring-neutral-800 placeholder:text-neutral-500 focus:ring-neutral-700/50",
})

const TextField: React.FC<ComponentPropsWithRef<"input">> = ({
  className,
  ...props
}) => <input {...props} className={textField({ className })} />

export const Search: React.FC<ComponentPropsWithRef<"input">> = ({
  ...props
}) => {
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const updateSearchTerm = (term: string) => {
    const params = new URLSearchParams(searchParams || {})
    if (term) {
      params.set("q", term)
    } else {
      params.delete("q")
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <TextField
      onChange={(e) => updateSearchTerm(e.target.value)}
      aria-label="Filter list"
      placeholder="Filter list..."
      {...props}
    />
  )
}
