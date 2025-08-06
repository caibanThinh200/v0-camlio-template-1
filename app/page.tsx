import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import CaseStudy from "@/components/sections/case-study"
import Awards from "@/components/sections/awards"
import CallToAction from "@/components/sections/call-to-action"
import FadeUp from "@/components/animations/fade-up" // Import the new FadeUp component

export default function Home() {
  return (
    <main>
      <FadeUp>
        <Hero />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Services />
      </FadeUp>
      <FadeUp delay={0.3}>
        <CaseStudy variant="light" />
      </FadeUp>
      <FadeUp delay={0.4}>
        <CaseStudy variant="dark" />
      </FadeUp>
      <FadeUp delay={0.5}>
        <Awards />
      </FadeUp>
      <FadeUp delay={0.6}>
        <CallToAction />
      </FadeUp>
    </main>
  )
}
