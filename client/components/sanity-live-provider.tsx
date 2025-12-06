"use client";

import { LiveQueryProvider } from "next-sanity/preview";
import { previewClient } from "@/lib/sanity";

export default function SanityLiveProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LiveQueryProvider client={previewClient}>
      {children}
    </LiveQueryProvider>
  );
}
