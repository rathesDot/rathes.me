import React from "react"

import { Footer, Navigation } from "../../patterns"

const PageLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <main className="bg-neutral-50 px-8 font-sans text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
      <Navigation />
      <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-between pt-32">
        {children}
        <Footer />
      </div>
    </main>
  )
}

export { PageLayout }
