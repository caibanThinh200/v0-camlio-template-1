import { client, getPageQuery, getAllPagesQuery, getHeaderQuery, getSettingsQuery } from "./sanity";
import type { Page, HeaderData, SettingsData } from "@/types/sanity";

export async function getPageData(slug: string = "home"): Promise<Page | null> {
  try {
    const data = await client.fetch(getPageQuery, { slug });
    return data || null;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
}

export async function getAllPages(): Promise<{ slug: string }[]> {
  try {
    const data = await client.fetch(getAllPagesQuery);
    return data || [];
  } catch (error) {
    console.error("Error fetching all pages:", error);
    return [];
  }
}

export async function getHeaderData(): Promise<HeaderData | null> {
  try {
    const data = await client.fetch(getHeaderQuery);
    return data || null;
  } catch (error) {
    console.error("Error fetching header data:", error);
    return null;
  }
}

export async function getSettingsData(): Promise<SettingsData | null> {
  try {
    const data = await client.fetch(getSettingsQuery);
    return data || null;
  } catch (error) {
    console.error("Error fetching settings data:", error);
    return null;
  }
}
