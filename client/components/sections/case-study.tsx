"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface CaseStudyProps {
  variant?: "light" | "dark";
}

export default function CaseStudy({ variant = "light" }: CaseStudyProps) {
  const isLight = variant === "light";

  return (
    <section className="py-10">
      <div
        className={`rounded-3xl bg-cover bg-center bg-no-repeat p-8 md:p-12 px-6 md:px-8 ${
          isLight
            ? ""
            : "bg-gradient-to-br from-[#1E0044] via-[#2D1B69] to-[#8338EC]"
        }`}
        style={{
          backgroundImage: isLight
            ? "url('/images/case-study-bg.png')"
            : "url('/images/case-study-bg-dark.png')",
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col justify-between">
              <p
                className={`text-sm font-medium mb-3 tracking-wide uppercase ${
                  isLight ? "text-gray-600" : "text-white/80"
                }`}
              >
                CASE STUDY
              </p>
              <h2
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  isLight ? "text-gray-900" : "text-white"
                }`}
              >
                {isLight ? "Korba" : "TrailHive"}
              </h2>
              <div className="flex gap-3 mb-8">
                <Badge
                  variant="outline"
                  className={`border rounded-full px-4 py-2 ${
                    isLight
                      ? "border-background bg-transparent"
                      : "border-white/30 bg-transparent text-white"
                  }`}
                >
                  {isLight ? "Web design" : "Concept design"}
                </Badge>
                <Badge
                  variant="outline"
                  className={`border rounded-full px-4 py-2 ${
                    isLight
                      ? "border-background bg-transparent"
                      : "border-white/30 bg-transparent text-white"
                  }`}
                >
                  {isLight ? "Development" : "Brand identity"}
                </Badge>
              </div>
            </div>

            <div>
              <div
                className={`space-y-4 leading-relaxed ${
                  isLight ? "text-gray-600" : "text-white/80"
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <p>
                  Duis cursus, mi quis viverra ornare, eros dolor interdum
                  nulla.
                </p>
              </div>
              <div>
                <Button
                  variant="outline"
                  className={`mt-8 border-2 rounded-full px-6 py-3 font-medium transition-all duration-300 group bg-transparent shadow-md ${
                    isLight
                      ? "border-purple-custom hover:bg-purple-custom shadow-purple-custom text-purple-custom hover:text-white"
                      : "border-white/30 text-white hover:bg-white hover:text-[#1E0044] shadow-white/20"
                  }`}
                >
                  SEE CASE STUDY
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {isLight ? (
              <div className="rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/korba-3d-sphere.png"
                  alt="Korba project 3D visualization"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            ) : (
              <div className="relative">
                {/* Design Elements Overlay */}
                <div className="absolute lg:top-8 -top-4 -left-4 lg:-left-24 z-10">
                  <Image
                    src="/images/site-winner-badge.png"
                    alt="Site Winner Badge"
                    width={150}
                    height={150}
                    className="lg:w-48 lg:h-48 w-16 h-16"
                  />
                </div>

                {/* Main Sphere Image */}
                <div className="rounded-3xl aspect-square flex items-center justify-center overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                  <Image
                    src="/images/trailhive-sphere.png"
                    alt="TrailHive project 3D visualization"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Dots - Only show for light variant */}
        {/* {isLight && (
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        )} */}
      </div>
    </section>
  );
}
