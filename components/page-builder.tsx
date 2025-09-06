"use client"

import type { PageComponent } from "@/types/sanity"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import CaseStudy from "@/components/sections/case-study"
import Awards from "@/components/sections/awards"
import CallToAction from "@/components/sections/call-to-action"
import FadeUp from "@/components/animations/fade-up"

interface PageBuilderProps {
  components: PageComponent[]
}

export default function PageBuilder({ components }: PageBuilderProps) {
  const renderComponent = (component: PageComponent, index: number) => {
    const delay = index * 0.1

    switch (component._type) {
      case "hero":
        return (
          <FadeUp key={component._key} delay={delay}>
            <Hero data={component} />
          </FadeUp>
        )

      case "services":
        return (
          <FadeUp key={component._key} delay={delay}>
            <Services data={component} />
          </FadeUp>
        )

      case "caseStudy":
        return (
          <FadeUp key={component._key} delay={delay}>
            <CaseStudy data={component} />
          </FadeUp>
        )

      case "awards":
        return (
          <FadeUp key={component._key} delay={delay}>
            <Awards data={component} />
          </FadeUp>
        )

      case "callToAction":
        return (
          <FadeUp key={component._key} delay={delay}>
            <CallToAction data={component} />
          </FadeUp>
        )

      default:
        console.warn(`Unknown component type: ${component._type}`)
        return null
    }
  }

  return <main>{components.map((component, index) => renderComponent(component, index))}</main>
}
