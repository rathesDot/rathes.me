const { fontFamily } = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        defaultSans: fontFamily.sans,
        sans: ["var(--font-switzer)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        ".hljs": { color: "#c9d1d9" },
        ".hljs-doctag, .hljs-keyword, .hljs-meta .hljs-keyword, .hljs-template-tag, .hljs-template-variable, .hljs-type, .hljs-variable.language_":
          {
            color: "#ff7b72",
          },
        ".hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_":
          {
            color: "#d2a8ff",
          },
        ".hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id":
          {
            color: "#79c0ff",
          },
        ".hljs-regexp,.hljs-string,.hljs-meta .hljs-string": {
          color: "#a5d6ff",
        },

        ".hljs-built_in, .hljs-symbol": {
          color: "#ffa657",
        },
        ".hljs-comment,.hljs-code,.hljs-formula": {
          color: "#8b949e",
        },
        " .hljs-name, .hljs-quote, .hljs-selector-tag, .hljs-selector-pseudo": {
          color: "#7ee787",
        },

        ".hljs-subst": {
          color: "#c9d1d9",
        },

        ".hljs-section": {
          color: "#1f6feb",
          fontWeight: "bold",
        },

        ".hljs-bullet": {
          color: "#f2cc60",
        },

        ".hljs-emphasis": {
          color: "#c9d1d9",
          fontStyle: "italic",
        },

        ".hljs-strong": {
          color: "#c9d1d9",
          fontWeight: "bold",
        },

        ".hljs-addition": {
          color: "#aff5b4",
          backgroundColor: "#033a16",
        },

        ".hljs-deletion": {
          color: "#ffdcd7",
          backgroundColor: "#67060c",
        },
        ".hljs-char.escape_,.hljs-link,.hljs-params,.hljs-property,.hljs-punctuation,.hljs-tag":
          {},
      })
    }),
  ],
}
