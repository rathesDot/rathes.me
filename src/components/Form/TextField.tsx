import { InputHTMLAttributes } from "react"

export const TextField: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => (
  <input
    {...props}
    className="box-border inline-flex h-9 w-full max-w-md items-center justify-center rounded-lg bg-neutral-200 px-2 text-base text-neutral-900 outline-none ring-1 ring-neutral-200 focus:ring-neutral-400 dark:bg-neutral-800 dark:text-neutral-50 dark:ring-neutral-800 dark:focus:ring-neutral-700"
  />
)
