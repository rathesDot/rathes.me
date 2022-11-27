import type { AppProps } from "next/app"
import Script from "next/script"

import { Noto_Sans, Noto_Sans_Display } from "@next/font/google"

const notoSans = Noto_Sans({
  weight: ["400"],
  variable: "--font-notoSans",
  subsets: ["latin"],
  preload: true,
})

const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-notoDisplay",
  subsets: ["latin"],
  preload: true,
})

import "../styles/globals.css"

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${notoSans.variable} ${notoSansDisplay.variable}`}>
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
