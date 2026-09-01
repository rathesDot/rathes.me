import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ base: "./src/data/blog", pattern: "{en,de}/*.mdx" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // One post leaves the key present but empty, which YAML reads as null.
    description: z.string().nullish().transform((value) => value ?? undefined),
    // Frontmatter stores POSIX-style locales (en_US, de_DE); HTML lang needs
    // BCP-47, so this gets normalised at read time rather than in the content.
    locale: z.string(),
    author: z.string().optional(),
    image: z.string().optional(),
    imageCaption: z.string().optional(),
    social: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    template: z.string().optional(),
    // A leftover numeric identifier from the site's previous CMS.
    id: z.number().optional(),
  }),
})

export const collections = { blog }
