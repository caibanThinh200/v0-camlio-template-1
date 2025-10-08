import { client, getPageQuery } from "./sanity";
import type { BaseComponent, Page, PageComponent } from "@/types/sanity";

export async function getPageData(): Promise<Page | null> {
  try {
    const data = await client.fetch(getPageQuery, {
      userId: process.env.NEXT_PUBLIC_USER_ID,
    });
    const template = data?.paidTemplate?.find(
      (template: BaseComponent) => template?._type === "template_1"
    ) as Page;
    return template || null;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
}

export async function getAllPages(): Promise<Page[]> {
  try {
    const query = `*[_type == "page"]{
      _id,
      title,
      slug
    }`;
    const data = await client.fetch(query);
    return data || [];
  } catch (error) {
    console.error("Error fetching all pages:", error);
    return [];
  }
}
