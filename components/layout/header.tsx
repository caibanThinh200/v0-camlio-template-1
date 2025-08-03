"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 md:p-8 text-white">
      <div className="text-xl font-medium italic">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image src="/images/logo.png" alt="Hello Camlio" width={150} height={40} />
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        >
          LINKEDIN <ExternalLink className="w-3 h-3" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        >
          TWITTER <ExternalLink className="w-3 h-3" />
        </Link>
        <Link
          href="https://dribbble.com"
          target="_blank"
          className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        >
          DRIBBBLE <ExternalLink className="w-3 h-3" />
        </Link>
      </nav>

      <Button variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
        LET'S TALK <ExternalLink className="w-4 h-4 ml-2" />
      </Button>
    </header>
  )
}
