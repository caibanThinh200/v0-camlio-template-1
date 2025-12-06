"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HeaderData } from "@/types/sanity"
import { urlFor } from "@/lib/sanity"

interface HeaderProps {
  data?: HeaderData | null;
}

export default function Header({ data }: HeaderProps) {
  const { logo, menuItems, cta } = data || {};
  return (
    <header className="flex items-center justify-between p-6 md:p-8 text-white bg-russia-purple rounded-t-3xl">
      <div className="text-xl font-medium italic">
        <Link href={logo?.link || "/"} className="hover:opacity-80 transition-opacity">
          <Image 
            src={logo?.image ? urlFor(logo.image).url() : "/images/logo.png"} 
            alt="Logo" 
            width={150} 
            height={40} 
            className="w-20 md:w-auto" 
          />
        </Link>
      </div>

      {menuItems && menuItems.length > 0 && (
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item._key}
              href={item?.link || "#"}
              target={item?.link?.startsWith("http") ? "_blank" : undefined}
              rel={item?.link?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            >
              {item.text.toUpperCase()} 
              {item?.link?.startsWith("http") && <ExternalLink className="w-3 h-3" />}
            </Link>
          ))}
        </nav>
      )}

      {cta && (
        <Button
          className="bg-[#1E0044] text-white border-[#B923FF] border bg-transparent p-[2px] rounded-full hover:opacity-90 transition-opacity shadow-md shadow-purple"
          asChild
        >
          <Link href={cta.link || "#"}>
            <span className="px-4 py-2 rounded-full flex items-center gap-2 uppercase">
              {cta.text || "LET'S TALK"} <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </Button>
      )}

      {!cta && (
        <Button
          className="bg-[#1E0044] text-white border-[#B923FF] border bg-transparent p-[2px] rounded-full hover:opacity-90 transition-opacity shadow-md shadow-purple"
        >
          <span className="px-4 py-2 rounded-full flex items-center gap-2">
            LET'S TALK <ArrowUpRight className="w-4 h-4" />
          </span>
        </Button>
      )}
    </header>
  )
}
