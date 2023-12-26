import React from "react"

import { Footer, Navigation } from "../../patterns"

const PageLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <main className="font-sans">
      <Navigation />
      <div className="mt-14 md:mt-24">{children}</div>
      <Footer />
    </main>
  )
}

export { PageLayout }
