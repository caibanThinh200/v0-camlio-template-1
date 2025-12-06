"use client";

import type {
  BaseComponent,
  HeroBannerComponent,
  ServicesBlockComponent,
  CaseStudyBlockComponent,
  AwardsBlockComponent,
  ContactBlockComponent,
  PageComponent,
} from "@/types/sanity";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import CaseStudy from "@/components/sections/case-study";
import Awards from "@/components/sections/awards";
import CallToAction from "@/components/sections/call-to-action";
import FadeUp from "@/components/animations/fade-up";

interface PageBuilderProps {
  components: PageComponent[];
}

export default function PageBuilder({ components }: PageBuilderProps) {
  const renderComponent = (component: PageComponent, index: number) => {
    const delay = index * 0.1;

    switch (component._type) {
      case "heroBanner":
        return (
          <FadeUp key={component._key} delay={delay}>
            <Hero data={component as HeroBannerComponent} />
          </FadeUp>
        );

      case "servicesBlock":
        return (
          <FadeUp key={component._key} delay={delay}>
            <Services data={component as ServicesBlockComponent} />
          </FadeUp>
        );

      case "caseStudyBlock":
        return (
          <FadeUp key={component._key} delay={delay}>
            <CaseStudy data={component as CaseStudyBlockComponent} />
          </FadeUp>
        );

      case "awardsBlock":
        return (
          <FadeUp key={component._key} delay={delay}>
            <Awards data={component as AwardsBlockComponent} />
          </FadeUp>
        );

      case "contactBlock":
        return (
          <FadeUp key={component._key} delay={delay}>
            <CallToAction data={component as ContactBlockComponent} />
          </FadeUp>
        );

      default:
        console.warn(
          `Unknown component type: ${(component as BaseComponent)._type}`
        );
        return null;
    }
  };

  return (
    <main>
      {components.map((component, index) => renderComponent(component, index))}
    </main>
  );
}
