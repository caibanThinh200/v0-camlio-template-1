"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ScrollDownButton() {
  const [isVisible, setIsVisible] = useState(true)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce"
      aria-label="Scroll down to next section"
    >
      <Image src="/images/scroll-down.png" alt="Scroll Down" width={50} height={50} priority />
    </button>
  )
}
