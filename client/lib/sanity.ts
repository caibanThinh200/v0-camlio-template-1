import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: true,
});

// Client for live preview (no CDN, with token for draft content)
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

// Get the appropriate client based on preview mode
export const getClient = (preview?: boolean) => (preview ? previewClient : client);

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ query to get page data with all page builder blocks
export const getPageQuery = `*[_type == "page" && slug.current == $slug][0]{
  _id,
  pageName,
  "slug": slug.current,
  pageBuilder[]{
    _type,
    _key,
    _type == "heroBanner" => {
      title,
      description,
      cta,
      extraNote
    },
    _type == "servicesBlock" => {
      serviceCards[]{
        _key,
        title,
        description,
        skills
      }
    },
    _type == "caseStudyBlock" => {
      variant,
      title,
      headline,
      description,
      categories,
      image,
      cta
    },
    _type == "awardsBlock" => {
      title,
      awardsList[]{
        _key,
        headline,
        description,
        link
      }
    },
    _type == "contactBlock" => {
      title,
      copyright,
      extraNote,
      cta,
      socials[]{
        _key,
        text,
        url
      }
    }
  }
}`;

// Query to get all pages (for generating static paths)
export const getAllPagesQuery = `*[_type == "page"]{
  "slug": slug.current
}`;

// Query to get header data
export const getHeaderQuery = `*[_type == "header"]{
  _id,
  logo{
    image,
    link
  },
  menuItems[]{
    _key,
    text,
    link
  },
  cta{
    text,
    link
  }
}[0]`;

// Query to get page by slug
export const getPageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  _id,
  pageName,
  "slug": slug.current,
  pageBuilder[]{
    _type,
    _key,
    _type == "heroBanner" => {
      title,
      description,
      cta,
      extraNote
    },
    _type == "servicesBlock" => {
      serviceCards[]{
        _key,
        title,
        description,
        skills
      }
    },
    _type == "caseStudyBlock" => {
      variant,
      title,
      headline,
      description,
      categories,
      image,
      cta
    },
    _type == "awardsBlock" => {
      title,
      awardsList[]{
        _key,
        headline,
        description,
        link
      }
    },
    _type == "contactBlock" => {
      title,
      copyright,
      extraNote,
      cta,
      socials[]{
        _key,
        text,
        url
      }
    }
  }
}`;

// Query to get settings data (singleton)
export const getSettingsQuery = `*[_type == "settings"][0]{
  _id,
  seo{
    title,
    description,
    ogImage
  }
}`;
