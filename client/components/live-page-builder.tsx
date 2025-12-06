"use client";

import { useLiveQuery } from "next-sanity/preview";
import PageBuilder from "@/components/page-builder";
import { getPageQuery } from "@/lib/sanity";
import type { Page } from "@/types/sanity";

interface LivePageBuilderProps {
  initialData: Page | null;
  slug?: string;
}

export default function LivePageBuilder({ initialData, slug = "home" }: LivePageBuilderProps) {
  const [data] = useLiveQuery<Page | null>(initialData, getPageQuery, { slug });

  if (!data || !data.pageBuilder) {
    return null;
  }

  return <PageBuilder components={data.pageBuilder} />;
}
