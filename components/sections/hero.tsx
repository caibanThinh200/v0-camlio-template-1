"use client"

import { ChevronDown } from "lucide-react"
import { Georama as Georgia } from "next/font/google"

const georgia = Georgia({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic"],
})

export default function Hero() {
  return (
    <main className="px-6 md:px-8 pt-16 md:pt-24 text-white">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
          I create <span className={`italic text-[#B923FF] font-light ${georgia.className}`}>beautiful</span>
          <br />
          website
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-16">
          I work with people all over the world to create
          <br />
          tailor-made Webflow experiences
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex items-end justify-between mt-32 md:mt-48">
        <div className="text-sm text-white/60">Available for freelance work</div>

        <div className="flex items-center justify-center w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </main>
  )
}
