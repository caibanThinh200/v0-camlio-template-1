import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ScrollDownButton from "@/components/ui/scroll-down-button";
import FadeUp from "@/components/animations/fade-up"
import { getHeaderData, getSettingsData } from "@/lib/sanity-utils";
import { urlFor } from "@/lib/sanity";
import SanityLiveProvider from "@/components/sanity-live-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettingsData();
  const seo = settings?.seo;

  return {
    title: seo?.title || "Camlio - Creative Web Developer & Designer",
    description: seo?.description || "I work with people all over the world to create tailor-made Webflow experiences. Specializing in development and art direction.",
    keywords: [
      "webflow",
      "web development",
      "art direction",
      "freelance",
      "creative",
    ],
    authors: [{ name: "Camlio" }],
    openGraph: {
      title: seo?.title || "Camlio - Creative Web Developer & Designer",
      description: seo?.description || "I work with people all over the world to create tailor-made Webflow experiences.",
      type: "website",
      ...(seo?.ogImage && {
        images: [
          {
            url: urlFor(seo.ogImage).url(),
          },
        ],
      }),
    },
    generator: "v0.dev",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData = await getHeaderData();
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>
        <SanityLiveProvider>
          <div className="p-5 relative overflow-hidden">
            <FadeUp>
              <Header data={headerData} />
            </FadeUp>
            {children}
          </div>
        </SanityLiveProvider>
      </body>
    </html>
  );
}
