import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Awards() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E9DEFF] flex justify-center items-center">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1E0044] font-montserrat">Awards</h1>
          </div>
          <Card className="bg-[#1E0044] text-white rounded-3xl p-8 shadow-lg">
            <CardContent className="space-y-6 p-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold font-montserrat">2022 Designer of the year nomination</h3>
                  <p className="text-gray-300 text-sm">AWWWARDS</p>
                </div>
                <Link href="#" className="text-gray-300 hover:text-purple-300 transition-colors" prefetch={false}>
                  <ArrowUpRightIcon className="h-5 w-5" />
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold font-montserrat">Site of the day winner - Korba</h3>
                  <p className="text-gray-300 text-sm">WEB DESIGN INSPIRATION AWARDS</p>
                </div>
                <Link href="#" className="text-gray-300 hover:text-purple-300 transition-colors" prefetch={false}>
                  <ArrowUpRightIcon className="h-5 w-5" />
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold font-montserrat">Site of the month nomination - TrailHive</h3>
                  <p className="text-gray-300 text-sm">CSS DESIGN AWARDS</p>
                </div>
                <Link href="#" className="text-gray-300 hover:text-purple-300 transition-colors" prefetch={false}>
                  <ArrowUpRightIcon className="h-5 w-5" />
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold font-montserrat">2021 Designer of the year nomination</h3>
                  <p className="text-gray-300 text-sm">PIXEL AWARDS</p>
                </div>
                <Link href="#" className="text-gray-300 hover:text-purple-300 transition-colors" prefetch={false}>
                  <ArrowUpRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
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
