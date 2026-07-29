import {
  AUTHOR_NAME,
  PERSON_ID,
  SITE_URL,
  WEBSITE_ID,
} from "@/src/site.config"

// Profiles linked from /links. These are what tie the Person node to the same
// identity on other platforms, so keep them in sync with that page.
const PROFILES = [
  "https://bsky.app/profile/rathes.me",
  "https://github.com/rathesDot",
  "https://www.linkedin.com/in/rathes-sachchithananthan/",
  "https://instagram.com/tamizhographer",
  "https://threads.com/@tamizhographer",
  "https://youtube.com/@tamizhographer",
]

export const createSchemaForSite = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: AUTHOR_NAME,
      url: SITE_URL,
      jobTitle: "Senior Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Buffer",
        url: "https://buffer.com/",
      },
      homeLocation: { "@type": "Place", name: "London" },
      sameAs: PROFILES,
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: AUTHOR_NAME,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
  ],
})

export const SiteSchema: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(createSchemaForSite()),
      }}
    />
  )
}
