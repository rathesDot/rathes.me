import React from "react"

import { styled, globalCss } from "../../../stitches.config"

import { Footer, Navigation } from "../../patterns"

const MainContainer = styled("main", {
  backgroundColor: "$slate2",
  color: "$slate11",
  display: "flex",
  flexDirection: "column",
  fontFamily: "$default",
  justifyContent: "space-between",
  minHeight: "100vh",
  padding: "$8",

  variants: {
    padding: {
      md: {
        padding: "$16",
      },
      lg: {
        padding: "$24 $32",
      },
    },
  },
})

const PageLayout: React.FC = ({ children }) => {
  globalCss({
    html: {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      "-webkit-text-size-adjust": "100%",
      boxSizing: "border-box",
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      lineHeight: "1.5",
    },
    hr: {
      boxSizing: "content-box",
      height: 0,
      overflow: "visible",
      borderTopWidth: 1,
    },
    a: {
      backgroundColor: "transparent",
      color: "inherit",
      textDecoration: "inherit",
    },
    "abbr[title]": {
      borderBottom: "none",
      "-webkit-text-decoration": "underline dotted",
      textDecoration: "underline dotted",
    },
    "b, strong": {
      fontWeight: "bolder",
    },
    small: {
      fontSize: "80%",
    },
    "sub, sup": {
      fontSize: "75%",
      lineHeight: 0,
      position: "relative",
      verticalAlign: "baseline",
    },
    sub: {
      bottom: "-0.25em",
    },
    sup: {
      top: "-0.5em",
    },
    img: {
      borderStyle: "solid",
    },
    "button, input, optgroup, select, textarea": {
      fontFamily: "inherit",
      fontSize: "100%",
      lineHeight: "inherit",
      color: "inherit",
      margin: 0,
      padding: 0,
    },
    "button, input": {
      overflow: "visible",
    },
    "button, select": {
      textTransform: "none",
    },
    [`button, [type="button"], [type="reset"], [type="submit"]`]: {
      "-webkit-appearance": "button",
    },
    [`button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner`]:
      {
        borderStyle: "none",
        padding: 0,
      },
    [`button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring`]:
      {
        outline: "1px dotted ButtonText",
      },
    fieldset: {
      margin: 0,
      padding: 0,
    },
    legend: {
      boxSizing: "border-box",
      color: "inherit",
      display: "table",
      maxWidth: "100%",
      whiteSpace: "normal",
      padding: 0,
    },
    progress: {
      verticalAlign: "baseline",
    },
    textarea: {
      overflow: "auto",
      resize: "vertical",
    },
    [`[type="checkbox"], [type="radio"]`]: {
      boxSizing: "border-box",
      padding: 0,
    },
    [`[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button`]:
      {
        height: "auto",
      },
    [`[type="search"]`]: {
      "-webkit-appearance": "textfield",
      outlineOffset: "-2px",
    },
    [`[type="search"]::-webkit-search-decoration`]: {
      "-webkit-appearance": "none",
    },
    "&::-webkit-file-upload-button": {
      "-webkit-appearance": "button",
      font: "inherit",
    },
    summary: {
      display: "list-item",
    },
    "*, ::before, ::after": {
      boxSizing: "inherit",
      borderColor: "#e2e8f0",
      borderStyle: "solid",
      borderWidth: 0,
    },
    button: {
      background: "transparent",
      padding: 0,
    },
    "button:focus": {
      outline: "5px auto 0",
    },
    "ol, ul": {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },

    [`button, [role="button"]`]: {
      cursor: "pointer",
    },

    table: {
      borderCollapse: "collapse",
    },

    "h1, h2, h3, h4, h5, h6": {
      fontSize: "inherit",
      fontWeight: "inherit",
    },

    "pre, code, kbd, samp": {
      fontFamily: "monospace, monospace",
      fontSize: "1em",
    },

    "img, svg, video, canvas, audio, iframe, embed, object": {
      display: "block",
      verticalAlign: "middle",
    },

    "img, video": {
      maxWidth: "100%",
      height: "auto",
    },

    "body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre": {
      margin: 0,
    },

    "main, details": {
      display: "block",
    },

    [`template, [hidden]`]: {
      display: "none",
    },

    "input:-ms-input-placeholder, textarea:-ms-input-placeholder, input::-ms-input-placeholder, textarea::-ms-input-placeholder, input::placeholder, textarea::placeholder":
      {
        color: "#a0aec0",
      },

    ".gatsby-highlight": {
      marginBottom: "$6",
      marginTop: "$6",
    },

    ".gatsby-resp-image-wrapper": {
      margin: "$4 -$8 !important",
    },
  })()
  return (
    <MainContainer padding={{ "@md": "md", "@lg": "lg" }}>
      <Navigation />
      {children}
      <Footer />
    </MainContainer>
  )
}

export { PageLayout }
