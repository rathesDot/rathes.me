"use client"

import { ComponentPropsWithRef } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

import { cx } from "@/src/cva.config"

import { heading } from "@/components/Heading"

const TextField: React.FC<ComponentPropsWithRef<"input">> = ({
  className,
  ...props
}) => {
  return (
    <div className="group: flex items-center gap-2 rounded-lg bg-neutral-100 px-2 py-1.5 ring ring-transparent transition-colors focus-within:ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-800 dark:focus-within:ring-neutral-700">
      <span>
        <MagnifyingGlassIcon className="size-5 text-neutral-400" />
      </span>
      <input
        {...props}
        className={cx(
          "box-border inline-flex w-full max-w-md items-center justify-center text-base text-neutral-800 outline-hidden placeholder:font-medium placeholder:text-neutral-400 dark:text-neutral-50",
          className
        )}
      />
    </div>
  )
}

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
    <>
      <label
        className={heading({ level: "small", className: "mb-1 block" })}
        htmlFor="search"
      >
        Search
      </label>
      <TextField
        id="search"
        onChange={(e) => updateSearchTerm(e.target.value)}
        aria-label="Search"
        {...props}
      />
    </>
  )
}
