"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { CaseStudyBlockComponent } from "@/types/sanity";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

interface CaseStudyProps {
  data: CaseStudyBlockComponent;
}

export default function CaseStudy({ data }: CaseStudyProps) {
  const { variant = "light", title, headline, description, categories, image, cta } = data;
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
                {headline}
              </p>
              <h2
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  isLight ? "text-gray-900" : "text-white"
                }`}
              >
                {title}
              </h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {categories?.map((category, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`border rounded-full px-4 py-2 ${
                      isLight
                        ? "border-background bg-transparent"
                        : "border-white/30 bg-transparent text-white"
                    }`}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <div
                className={`space-y-4 leading-relaxed ${
                  isLight ? "text-gray-600" : "text-white/80"
                }`}
              >
                <p>{description}</p>
              </div>
              {cta && (
                <div>
                  <Button
                    variant="outline"
                    className={`mt-8 border-2 rounded-full px-6 py-3 font-medium transition-all duration-300 group bg-transparent shadow-md ${
                      isLight
                        ? "border-purple-custom hover:bg-purple-custom shadow-purple-custom text-purple-custom hover:text-white"
                        : "border-white/30 text-white hover:bg-white hover:text-[#1E0044] shadow-white/20"
                    }`}
                    asChild={!!cta.link}
                  >
                    {cta.link ? (
                      <Link href={cta.link} target="_blank" rel="noopener noreferrer">
                        {cta.text}
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </Link>
                    ) : (
                      <>
                        {cta.text}
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {image ? (
              <div className="rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
                <Image
                  src={urlFor(image).url()}
                  alt={title || "Case study image"}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            ) : (
              <div className="rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
                <Image
                  src={isLight ? "/images/korba-3d-sphere.png" : "/images/trailhive-sphere.png"}
                  alt={title || "Case study placeholder"}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
