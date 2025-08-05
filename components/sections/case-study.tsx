"use client"

import type React from "react"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CaseStudyProps {
  variant: "light" | "dark"
}

export default function CaseStudy({ variant }: CaseStudyProps) {
  const isLight = variant === "light"
  const bgColor = isLight ? "#E9DEFF" : "#1E0044"
  const textColor = isLight ? "#1E0044" : "#FFFFFF"
  const headingColor = isLight ? "#1E0044" : "#FFFFFF"
  const descriptionColor = isLight ? "#4A4A4A" : "#D1D1D1"
  const badgeBg = isLight ? "#B923FF" : "#8338EC"
  const badgeText = isLight ? "#FFFFFF" : "#FFFFFF"
  const buttonBg = isLight ? "#8338EC" : "#B923FF"
  const buttonHoverBg = isLight ? "#B923FF" : "#8338EC"
  const linkColor = isLight ? "#8338EC" : "#B923FF"
  const linkHoverColor = isLight ? "#B923FF" : "#8338EC"
  const backgroundImage = isLight ? "/images/case-study-bg.png" : "/images/case-study-bg-dark.png"

  return (
    <section
      className={cn(
        "w-full py-12 md:py-24 lg:py-32 relative overflow-hidden",
        isLight ? "text-[#1E0044]" : "text-white",
      )}
      style={{ backgroundColor: bgColor }}
    >
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt="Background Pattern"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-30"
        priority
      />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2
              className="text-4xl md:text-5xl font-bold font-montserrat leading-tight"
              style={{ color: headingColor }}
            >
              Korba - Website Design & Development
            </h2>
            <p className="text-lg" style={{ color: descriptionColor }}>
              Korba is a leading digital agency specializing in creating immersive web experiences. We partnered with
              them to redesign their corporate website, focusing on a modern aesthetic and improved user journey.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge
                className="rounded-full px-4 py-1 text-base font-medium"
                style={{ backgroundColor: badgeBg, color: badgeText }}
              >
                Web Design
              </Badge>
              <Badge
                className="rounded-full px-4 py-1 text-base font-medium"
                style={{ backgroundColor: badgeBg, color: badgeText }}
              >
                Development
              </Badge>
              <Badge
                className="rounded-full px-4 py-1 text-base font-medium"
                style={{ backgroundColor: badgeBg, color: badgeText }}
              >
                UI/UX
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="rounded-full px-8 py-3 text-lg font-montserrat"
                style={{ backgroundColor: buttonBg, color: "white" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverBg)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonBg)}
              >
                View Case Study
              </Button>
              <Link
                href="#"
                className="inline-flex items-center justify-center text-lg font-montserrat hover:underline"
                style={{ color: linkColor, textDecorationColor: linkColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
                prefetch={false}
              >
                Visit Website
                <ArrowUpRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/korba-3d-sphere.png"
              alt="Korba 3D Sphere"
              width={500}
              height={500}
              className="relative z-10"
              priority
            />
            <Image
              src="/images/site-winner-badge.png"
              alt="Site Winner Badge"
              width={150}
              height={150}
              className="absolute top-0 right-0 z-20 -mt-8 -mr-8"
              priority
            />
          </div>
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
