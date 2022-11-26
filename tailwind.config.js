const { fontFamily } = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-notoSans)", ...fontFamily.sans],
        sansDisplay: ["var(--font-notoDisplay)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        ".dark .hljs": {
          color: theme("colors.neutral.400"),
        },
        ".hljs": {
          color: theme("colors.neutral.500"),
        },
        ".dark .hljs-comment, .dark .hljs-quote": {
          color: theme("colors.neutral.500"),
          fontStyle: "italic",
        },
        ".hljs-comment, .hljs-quote": {
          color: theme("colors.neutral.400"),
          fontStyle: "italic",
        },
        ".dark .hljs-doctag, .dark .hljs-keyword, .dark .hljs-formula": {
          color: theme("colors.slate.500"),
        },
        ".hljs-doctag,.hljs-keyword, .hljs-formula": {
          color: theme("colors.slate.500"),
        },
        ".hljs-section, .hljs-name, .hljs-selector-tag, .hljs-deletion, .hljs-subst":
          {
            color: theme("colors.gray.500"),
          },
        ".dark .hljs-literal": {
          color: theme("colors.blue.400"),
        },
        ".hljs-literal": {
          color: theme("colors.blue.600"),
        },
        ".hljs-string, .hljs-regexp, .hljs-addition, .hljs-attribute, .hljs-meta .hljs-string":
          {
            color: theme("colors.gray.400"),
          },
        ".hljs-attr, .hljs-variable, .hljs-template-variable, .hljs-type, .hljs-selector-class, .hljs-selector-attr, .hljs-selector-pseudo, .hljs-number":
          {
            color: theme("colors.slate.600"),
          },
        ".dark .hljs-symbol, .dark .hljs-bullet, .dark .hljs-link, .dark .hljs-meta, .dark .hljs-selector-id, .dark .hljs-title":
          {
            color: theme("colors.slate.300"),
          },
        ".hljs-symbol, .hljs-bullet, .hljs-link, .hljs-meta, .hljs-selector-id, .hljs-title":
          {
            color: theme("colors.slate.600"),
          },
        ".dark .hljs-built_in, .dark .hljs-title.class_, .dark .hljs-class .hljs-title":
          {
            color: theme("colors.blue.100"),
          },
        ".hljs-built_in, .hljs-title.class_, .hljs-class .hljs-title": {
          color: theme("colors.blue.900"),
        },
        ".hljs-emphasis": {
          fontStyle: "italic",
        },
        ".hljs-strong": {
          fontWeight: "bold",
        },
        ".hljs-link": {
          textDecoration: "underline",
        },
      })
    }),
  ],
}
