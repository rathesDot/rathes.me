import React from "react"

import { Link } from "../components"

export const SayHi: React.FC<React.PropsWithChildren<unknown>> = () => (
  <div className="max-w-md font-sans text-4xl font-bold leading-none text-neutral-50 antialiased md:text-5xl">
    Work inquiry, question or something else? <br />
    <Link
      aria-label="Send an E-Mail to hello+website@rathes.me"
      href="mailto:hello+website@rathes.me"
      underlined
    >
      Say hi!
    </Link>
  </div>
)
