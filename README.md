# My personal website rathes.me

This is the code base for my website at [rathes.me](https://rathes.me).

> **Note:** If you are looking for the website project based on Laravel, head over to [rathesDot/rathes.de](https://github.com/rathesDot/rathes.de). However, that project is not going to be maintained anymore.

---

## Features

This website uses [Astro](https://astro.build), an open source framework for building content-driven websites. The blog is a bunch of markdown files (stored in `src/data/blog`) that are transformed into pages. Additionally, the blog list is populated with some links to external articles.

For the styling part, this website makes use of [Tailwind CSS](https://tailwindcss.com), a utility-first CSS framework.

## Development

```sh
pnpm install
pnpm dev
```

`pnpm check` runs Astro's type checker over the project, and `pnpm build` produces the static site in `dist/`.

## Deployment

This site is deployed on [netlify](https://www.netlify.com/), so whenever code is pushed to `main` in this repository, the changes are deployed continuously. Netlify builds from the repository root; `netlify.toml` holds the build settings and the redirects for URLs the site used to publish.
