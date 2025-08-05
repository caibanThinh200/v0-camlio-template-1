import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LetsTalkButton from "@/components/ui/lets-talk-button";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="py-10">
      <div className="bg-[#1E0044] text-white py-16 rounded-3xl px-4 md:px-8 mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-xl font-medium italic">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="Hello Camlio"
                width={150}
                height={40}
              />
            </Link>
          </div>
          <div className="gap-6 hidden md:flex">
            <Link
              href="#"
              className="flex items-center gap-1 text-base hover:underline"
            >
              LINKEDIN <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-base hover:underline"
            >
              TWITTER <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-base hover:underline"
            >
              DRIBBBLE <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-[40px] md:text-[100px] font-bold leading-tight mb-12">
          Interested in working together?
        </h1>
        <LetsTalkButton />

        {/* Footer */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-16 pt-8">
          <span className="text-sm opacity-70 mb-4 md:mb-0">
            ©2024 - All Rights Reserved
          </span>
          <span className="text-sm opacity-70">
            Available for freelance work
          </span>
        </div>
      </div>
    </section>
  );
}
