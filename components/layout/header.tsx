import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
      <div className="flex items-center">
        <Link href="#" prefetch={false}>
          <Image src="/images/logo.png" alt="Camlio Logo" width={120} height={40} priority />
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-8 text-white text-lg font-montserrat">
        <Link href="#" className="hover:text-[#B923FF] transition-colors" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="hover:text-[#B923FF] transition-colors" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="hover:text-[#B923FF] transition-colors" prefetch={false}>
          Portfolio
        </Link>
        <Link href="#" className="hover:text-[#B923FF] transition-colors" prefetch={false}>
          About
        </Link>
        <Link href="#" className="hover:text-[#B923FF] transition-colors" prefetch={false}>
          Contact
        </Link>
      </nav>
      <Button className="hidden md:inline-flex bg-[#8338EC] hover:bg-[#B923FF] text-white rounded-full px-6 py-3 text-lg font-montserrat">
        Let&apos;s Talk
      </Button>
      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
