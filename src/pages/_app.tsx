import type { AppProps } from "next/app"
import Script from "next/script"

import localFont from "next/font/local"

const switzer = localFont({
  src: "../assets/switzer-variable.ttf",
  variable: "--font-switzer",
})

import "../styles/globals.css"

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${switzer.variable}`}>
      <Script
        src="https://cdn.usefathom.com/script.js"
        data-spa="auto"
        data-site="ZYWCGBNZ"
        defer
      />
      <Component {...pageProps} />
    </div>
  )
}
