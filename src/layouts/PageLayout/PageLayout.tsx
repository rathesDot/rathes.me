import React from "react"

import { Footer, Navigation } from "../../patterns"
import { cx } from "class-variance-authority"

const PageLayout: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <Navigation />
      <div className={cx("mt-14 md:mt-24", className)}>{children}</div>
      <Footer />
    </main>
  )
}

export { PageLayout }
