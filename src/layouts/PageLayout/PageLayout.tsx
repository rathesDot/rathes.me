import React from "react"

import { Footer, Navigation } from "../../patterns"

const PageLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <main className="font-sans">
      <Navigation />
      <div>{children}</div>
      <Footer />
    </main>
  )
}

export { PageLayout }
