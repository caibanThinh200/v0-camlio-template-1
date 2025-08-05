import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import LetsTalkButton from "@/components/ui/lets-talk-button"

export default function CallToAction() {
  return (
    <section className="bg-[#1E0044] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-16">
          <span className="font-['Montserrat'] text-base font-bold mb-4 md:mb-0">Hello Camlio</span>
          <div className="flex gap-6">
            <Link href="#" className="flex items-center gap-1 font-['Montserrat'] text-base hover:underline">
              LINKEDIN <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="#" className="flex items-center gap-1 font-['Montserrat'] text-base hover:underline">
              TWITTER <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="#" className="flex items-center gap-1 font-['Montserrat'] text-base hover:underline">
              DRIBBBLE <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="font-['Montserrat'] text-[32px] md:text-[54px] font-bold leading-tight mb-12 max-w-3xl">
          Interested in working together?
        </h1>
        <LetsTalkButton />

        {/* Footer */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white border-opacity-20">
          <span className="font-['Montserrat'] text-sm opacity-70 mb-4 md:mb-0">©2024 - All Rights Reserved</span>
          <span className="font-['Montserrat'] text-sm opacity-70">Available for freelance work</span>
        </div>
      </div>
    </section>
  )
}
