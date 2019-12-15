# My personal website rathes.me

This is the code base for my website at [rathes.me](https://rathes.me).

> **Note:** If you are looking for the website project based on Laravel, head over to [rathesDot/rathes.de](https://github.com/rathesDot/rathes.de). However, that project is not going to be maintained anymore.

---

## Features

This website uses [Gatsby](https://www.gatsbyjs.org), an open source framework based on React to build websites and apps. The blog is a bunch of markdown files (stored in `src/content/`) that a Gatsby plugin transforms into pages. Additionally, the blog list is populated with some links to external articles.

For the styling part, this website makes use of [Tailwind](https://tailwindcss.com/), a utility-first CSS framework.

## Testing

[Jest](https://jestjs.io/) is used for testing purposes. Run

```sh
npm test
```

to run the tests.

## Deployment

This site is deployed on [netlify](https://www.netlify.com/), so whenever code is pushed to master in this repository, the changed are deployed continuously.
