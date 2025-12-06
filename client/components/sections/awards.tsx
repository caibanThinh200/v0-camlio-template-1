import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AwardsBlockComponent } from "@/types/sanity";

interface AwardsProps {
  data: AwardsBlockComponent;
}

export default function Awards({ data }: AwardsProps) {
  const { title, awardsList } = data;

  return (
    <section className="py-10">
      <div className="mx-auto bg-[#E9DEFF] py-16 px-4 md:px-8 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-5">
          <h2 className="text-[32px] font-bold text-[#1E0044] mb-12">{title}</h2>
          <div className="flex flex-col gap-8">
            {awardsList?.map((award) => (
              <div
                key={award._key}
                className="flex flex-col gap-2 border-[#1E0044] border-t pt-5"
              >
                {award.link ? (
                  <Link
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <div className="flex flex-col">
                      <span className="text-[20px] font-bold text-[#1E0044] group-hover:underline">
                        {award.headline}
                      </span>
                      <span className="text-base text-[#1E0044] opacity-70">
                        {award.description}
                      </span>
                    </div>
                    <ArrowUpRight className="text-[#1E0044] w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[20px] font-bold text-[#1E0044]">
                        {award.headline}
                      </span>
                      <span className="text-base text-[#1E0044] opacity-70">
                        {award.description}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
