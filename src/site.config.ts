export const SITE_URL = "https://rathes.me"

export const AUTHOR_NAME = "Rathes Sachchithananthan"

export const FEED_PATH = "/writing/feed.xml"

// The site-wide sharing image, used by every page that has no cover image of
// its own. Kept in public/ rather than optimised through astro:assets so its
// URL stays stable across builds -- social platforms cache what they scraped.
export const DEFAULT_SOCIAL_IMAGE = {
  url: `${SITE_URL}/opengraph-image.png`,
  width: 1600,
  height: 836,
}

// Stable identifiers so the Person and WebSite nodes emitted across the site
// resolve to one entity each, instead of a new anonymous node per page.
export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`
