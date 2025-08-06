import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import CaseStudy from "@/components/sections/case-study"
import Awards from "@/components/sections/awards"
import CallToAction from "@/components/sections/call-to-action"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CaseStudy variant="light" />
      <CaseStudy variant="dark" />
      <Awards />
      <CallToAction />
    </main>
  )
}
