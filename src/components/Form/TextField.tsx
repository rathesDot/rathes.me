import { InputHTMLAttributes } from "react"

export const TextField: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => (
  <input
    {...props}
    className="box-border inline-flex h-9 w-full max-w-md items-center justify-center rounded-lg bg-neutral-800 px-2 text-base text-neutral-50/70 outline-none ring-1 ring-neutral-800 placeholder:text-neutral-500 focus:ring-neutral-700/50"
  />
)
