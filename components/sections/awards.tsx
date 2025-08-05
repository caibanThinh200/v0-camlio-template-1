import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Awards() {
  const awards = [
    { year: "2022", title: "Designer of the year nomination", category: "AWWWWARDS", href: "#" },
    { year: "Site of the day winner", title: "Korba", category: "WEB DESIGN INSPIRATION AWARDS", href: "#" },
    { year: "Site of the month nomination", title: "TrailHive", category: "CSS DESIGN AWARDS", href: "#" },
    { year: "2021", title: "Designer of the year nomination", category: "PIXEL AWARDS", href: "#" },
  ]

  return (
    <section className="bg-[#E9DEFF] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-['Montserrat'] text-[32px] font-bold text-[#1E0044] mb-12">Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Link href={award.href} className="flex items-center justify-between group">
                <div className="flex flex-col">
                  <span className="font-['Montserrat'] text-[20px] font-bold text-[#1E0044] group-hover:underline">
                    {award.year} {award.title}
                  </span>
                  <span className="font-['Montserrat'] text-base text-[#1E0044] opacity-70">{award.category}</span>
                </div>
                <ArrowUpRight className="text-[#1E0044] w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
