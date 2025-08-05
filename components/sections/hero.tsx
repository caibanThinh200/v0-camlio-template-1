import type React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-[#1E0044] text-white overflow-hidden">
      <Image
        src="/images/korba-sphere.png"
        alt="Background Sphere"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-30"
        priority
      />
      <div className="relative z-10 flex flex-col items-center space-y-6 px-4 md:px-6">
        <Badge className="bg-[#8338EC] text-white rounded-full px-4 py-2 text-base font-medium font-montserrat">
          Available for freelance work
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold font-montserrat leading-tight">
          Beautiful <span className="text-[#B923FF]">Digital</span> Experiences
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300 font-montserrat">
          I&apos;m a passionate UI/UX designer and web developer dedicated to crafting stunning and user-friendly
          digital products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#8338EC] hover:bg-[#B923FF] text-white rounded-full px-8 py-3 text-lg font-montserrat">
            View My Work
          </Button>
          <Link
            href="#"
            className="inline-flex items-center justify-center text-lg font-montserrat text-[#B923FF] hover:underline"
            prefetch={false}
          >
            Contact Me
            <ArrowUpRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
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
