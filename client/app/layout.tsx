import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ScrollDownButton from "@/components/ui/scroll-down-button";
import FadeUp from "@/components/animations/fade-up"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Camlio - Creative Web Developer & Designer",
  description:
    "I work with people all over the world to create tailor-made Webflow experiences. Specializing in development and art direction.",
  keywords: [
    "webflow",
    "web development",
    "art direction",
    "freelance",
    "creative",
  ],
  authors: [{ name: "Camlio" }],
  openGraph: {
    title: "Camlio - Creative Web Developer & Designer",
    description:
      "I work with people all over the world to create tailor-made Webflow experiences.",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>
        <div className="p-5 relative overflow-hidden">
          <FadeUp>
            <Header />
          </FadeUp>
          {children}
        </div>
      </body>
    </html>
  );
}
