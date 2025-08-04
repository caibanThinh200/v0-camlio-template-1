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
      className="fixed bottom-8 right-8 z-50 hover:scale-110 transition-transform duration-300"
      aria-label="Scroll down"
    >
      <Image
        src="/images/scroll-down.png"
        alt="Scroll down"
        width={60}
        height={60}
        className="w-12 h-12 md:w-15 md:h-15"
      />
    </button>
  )
}
