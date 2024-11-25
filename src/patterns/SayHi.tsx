import React from "react"

import { Link } from "../components/Link"

export const SayHi: React.FC<React.PropsWithChildren<unknown>> = () => (
  <div className="font-sans text-[2rem] leading-[1.125em] font-bold text-neutral-950 antialiased md:text-5xl dark:text-neutral-50">
    Work inquiry, question or something else? <br />
    <Link
      aria-label="Send an E-Mail to hello+website@rathes.me"
      href="mailto:hello+website@rathes.me"
      className="decoration-currentColor decoration-solid"
    >
      Say hi!
    </Link>
  </div>
)
