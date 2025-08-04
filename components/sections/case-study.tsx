"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function CaseStudy() {
  return (
    <section className="py-10">
      <div
        className="rounded-3xl bg-cover bg-center bg-no-repeat p-8 md:p-12 px-6 md:px-8"
        style={{
          backgroundImage: "url('/images/case-study-bg.png')",
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-3 tracking-wide uppercase">CASE STUDY</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Korba</h2>
            </div>

            <div className="flex gap-3 mb-8">
              <Badge
                variant="outline"
                className="border-gray-300 bg-transparent rounded-full px-4 py-2"
              >
                Web design
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-300 bg-transparent rounded-full px-4 py-2"
              >
                Development
              </Badge>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique.
              </p>
              <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>

            <Button
              variant="outline"
              className="mt-8 border-2 border-[#B923FF] text-[#B923FF] hover:bg-[#B923FF] hover:text-white rounded-full px-6 py-3 font-medium transition-all duration-300 group bg-transparent"
            >
              SEE CASE STUDY
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
              <Image
                src="/images/korba-3d-sphere.png"
                alt="Korba project 3D visualization"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
