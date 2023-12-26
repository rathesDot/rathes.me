import { HTMLAttributes } from "react"

import { cva } from "class-variance-authority"

const styles = cva(
  "my-8 -mx-8 p-8 text-lg bg-neutral-900 text-neutral-200/70 [&_p]:m-0 [&_p]:antialiased [&_p]:text-neutral-200/70",
  {
    variants: {
      fontFamily: {
        mono: "font-mono",
      },
    },
  }
)

export const Note: React.FC<
  HTMLAttributes<HTMLDivElement> & { fontFamily?: "mono"; title?: string }
> = ({ className, children, fontFamily, title, ...props }) => (
  <div className={styles({ fontFamily, className })} {...props}>
    {title && (
      <strong className="block font-normal text-white antialiased">
        {title}
      </strong>
    )}
    {children}
  </div>
)
