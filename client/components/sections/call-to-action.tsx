import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LetsTalkButton from "@/components/ui/lets-talk-button";
import Image from "next/image";
import { ContactBlockComponent } from "@/types/sanity";

interface CallToActionProps {
  data: ContactBlockComponent;
}

export default function CallToAction({ data }: CallToActionProps) {
  const { title, copyright, extraNote, socials } = data;

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
          {socials && socials.length > 0 && (
            <div className="gap-6 hidden md:flex">
              {socials.map((social) => 
                <Link
                    key={social._key}
                    href={social.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-base hover:underline"
                  >
                    {social.text.toUpperCase()} <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  )}
            </div>
          )}
        </div>

        {/* Main Content */}
        <h1 className="text-[40px] md:text-[100px] font-bold leading-tight mb-12">
          {title}
        </h1>
        <LetsTalkButton />

        {/* Footer */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-16 pt-8">
          <span className="text-sm opacity-70 mb-4 md:mb-0">
            {copyright}
          </span>
          {extraNote && (
            <span className="text-sm opacity-70">
              {extraNote}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
