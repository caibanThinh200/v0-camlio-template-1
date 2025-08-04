import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import ScrollDownButton from "@/components/ui/scroll-down-button"

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ScrollDownButton />
    </div>
  )
}
