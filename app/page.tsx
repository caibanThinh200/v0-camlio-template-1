import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import CaseStudy from "@/components/sections/case-study"
import ScrollDownButton from "@/components/ui/scroll-down-button"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CaseStudy />
    </main>
  )
}
