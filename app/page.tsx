import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import CaseStudy from "@/components/sections/case-study"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CaseStudy variant="light" />
      <CaseStudy variant="dark" />
    </main>
  )
}
