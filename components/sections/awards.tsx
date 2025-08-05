import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Awards() {
  const awards = [
    {
      year: "2022",
      title: "Designer of the year nomination",
      category: "AWWWWARDS",
      href: "#",
    },
    {
      year: "Site of the day winner",
      title: "Korba",
      category: "WEB DESIGN INSPIRATION AWARDS",
      href: "#",
    },
    {
      year: "Site of the month nomination",
      title: "TrailHive",
      category: "CSS DESIGN AWARDS",
      href: "#",
    },
    {
      year: "2021",
      title: "Designer of the year nomination",
      category: "PIXEL AWARDS",
      href: "#",
    },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto bg-[#E9DEFF] py-16 px-4 md:px-8 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-5">
          <h2 className="text-[32px] font-bold text-[#1E0044] mb-12">Awards</h2>
          <div className="flex flex-col gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 border-[#1E0044] border-t pt-5"
              >
                <Link
                  href={award.href}
                  className="flex items-center justify-between group"
                >
                  <div className="flex flex-col">
                    <span className="text-[20px] font-bold text-[#1E0044] group-hover:underline">
                      {award.year} {award.title}
                    </span>
                    <span className="text-base text-[#1E0044] opacity-70">
                      {award.category}
                    </span>
                  </div>
                  <ArrowUpRight className="text-[#1E0044] w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
