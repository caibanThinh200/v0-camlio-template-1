import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import CaseStudy from "@/components/sections/case-study"
import ScrollDownButton from "@/components/ui/scroll-down-button"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Services />
      <CaseStudy variant="light" />
      <CaseStudy variant="dark" />
      <ScrollDownButton />
    </main>
  )
}
