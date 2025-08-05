import type React from "react"
import Link from "next/link"
import LetsTalkButton from "@/components/ui/lets-talk-button"

export default function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1E0044] text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute top-6 left-6 text-lg font-semibold font-montserrat">Hello Camlio</div>
      <div className="absolute top-6 right-6 flex space-x-4 text-lg font-semibold">
        <Link href="#" className="hover:text-[#B923FF] transition-colors flex items-center gap-1" prefetch={false}>
          LINKEDIN
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
        <Link href="#" className="hover:text-[#B923FF] transition-colors flex items-center gap-1" prefetch={false}>
          TWITTER
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
        <Link href="#" className="hover:text-[#B923FF] transition-colors flex items-center gap-1" prefetch={false}>
          DRIBBBLE
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="container px-4 md:px-6 py-20 flex flex-col items-center justify-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold font-montserrat leading-tight max-w-3xl">
          Interested in working together?
        </h1>
        <LetsTalkButton />
      </div>
      <div className="absolute bottom-6 left-6 text-sm text-gray-400">©2024 - All Rights Reserved</div>
      <div className="absolute bottom-6 right-6 text-sm text-gray-400">Available for freelance work</div>
    </section>
  )
}

function ArrowUpRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}
