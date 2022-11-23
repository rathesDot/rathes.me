import React from "react"

import { Link } from "../../components"

export const SayHi: React.FC<React.PropsWithChildren<unknown>> = () => (
  <div className="max-w-lg font-sansDisplay text-4xl font-semibold text-neutral-900 dark:text-neutral-50">
    Work inquiry, question or something else?{" "}
    <Link
      aria-label="Send an E-Mail to hello@rathes.me"
      href="mailto:hello@rathes.me"
      underlined
    >
      Say hi!
    </Link>
  </div>
)
