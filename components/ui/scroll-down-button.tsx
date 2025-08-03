"use client"

import Image from "next/image"

export default function ScrollDownButton() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToNext}
      className="fixed bottom-8 right-8 z-50 hover:scale-110 transition-transform duration-300 ease-in-out"
      aria-label="Scroll down"
    >
      <Image src="/images/scroll-down.png" alt="Scroll Down" width={64} height={64} className="w-16 h-16" />
    </button>
  )
}
