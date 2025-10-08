"use client";

import { HeroComponent } from "@/types/sanity";
import ScrollDownButton from "../ui/scroll-down-button";
import PortableText from "react-portable-text";

interface HeroProps {
  data: HeroComponent;
}

type SerializerProps = {
  children: React.ReactNode;
};

export default function Hero({ data }: HeroProps) {
  const { title, description, note } = data;
  return (
    <main className="px-6 md:px-8 py-16 md:py-24 text-white rounded-b-3xl bg-russia-purple relative">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
          {/* I create{" "}
          <span className="italic text-[#B923FF] font-light font-georgia">
            beautiful
          </span> */}
          {/* <br />
          website */}
        </h1>
        {title && (
          <PortableText
            // className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
            content={title}
            serializers={{
              h1: ({ children }: SerializerProps) => (
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
                  {children}
                </h1>
              ),
              em: ({ children }: SerializerProps) => (
                <em className="italic text-[#B923FF] font-light font-georgia">
                  {children}
                </em>
              ),
            }}
          />
        )}
        {description && (
          <p className="text-lg md:text-xl max-w-2xl mb-16">{description}</p>
        )}
        {note && <p>{note}</p>}
      </div>
      <ScrollDownButton />
    </main>
  );
}
