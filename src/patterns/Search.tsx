"use client"

import { ComponentPropsWithRef } from "react"
import { TextField } from "../components"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

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

    replace(`${pathname}?${params.toString()}`)
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
