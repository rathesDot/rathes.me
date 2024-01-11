import type { AppProps } from "next/app"
import { useRouter } from "next/router"

import * as Fathom from "fathom-client"

import localFont from "next/font/local"

const switzer = localFont({
  src: "../assets/switzer-variable.ttf",
  variable: "--font-switzer",
})

import "../styles/globals.css"
import { useEffect } from "react"

export default function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load("ZYWCGBNZ", { includedDomains: ["rathes.me"] })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete)
    }
  }, [])

  return (
    <div className={`${switzer.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
