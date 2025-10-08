"use client"

import Image from "next/image"

export default function ScrollDownButton() {
  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToNext}
      className="absolute bottom-2 max-sm:left-1/2 transform max-sm:-translate-x-1/2 md:bottom-8 md:right-8 z-50 hover:scale-110 transition-transform duration-300"
      aria-label="Scroll down"
    >
      <Image
        src="/images/scroll-down.png"
        alt="Scroll down"
        width={60}
        height={60}
        className="w-12 h-12 md:w-28 md:h-28"
      />
    </button>
  )
}
