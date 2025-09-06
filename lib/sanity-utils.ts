import { client, getPageQuery } from "./sanity"
import type { Page } from "@/types/sanity"

export async function getPageData(slug = "home"): Promise<Page | null> {
  try {
    const data = await client.fetch(getPageQuery, { slug })
    return data
  } catch (error) {
    console.error("Error fetching page data:", error)
    return null
  }
}

export async function getAllPages(): Promise<Page[]> {
  try {
    const query = `*[_type == "page"]{
      _id,
      title,
      slug
    }`
    const data = await client.fetch(query)
    return data || []
  } catch (error) {
    console.error("Error fetching all pages:", error)
    return []
  }
}
