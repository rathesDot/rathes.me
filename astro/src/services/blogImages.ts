import type { ImageMetadata } from "astro"

// The posts reference their images by the Next site's public path. Those paths
// are mapped onto the copies inside src/assets/blog here, so astro:assets can
// optimise them at build time without the content having to know where the
// Astro project keeps them.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/blog/*.{jpg,jpeg,png,gif,webp,avif}",
  { eager: true }
)

const byPublicPath = new Map<string, ImageMetadata>(
  Object.entries(modules).map(([file, module]) => [
    `/images/blog/${file.split("/").pop()}`,
    module.default,
  ])
)

export const getBlogImage = (src?: string): ImageMetadata | undefined =>
  src ? byPublicPath.get(src) : undefined
