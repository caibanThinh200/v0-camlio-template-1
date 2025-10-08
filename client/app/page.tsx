import { getPageData } from "@/lib/sanity-utils";
import PageBuilder from "@/components/page-builder";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import CaseStudy from "@/components/sections/case-study";
import Awards from "@/components/sections/awards";
import CallToAction from "@/components/sections/call-to-action";
import FadeUp from "@/components/animations/fade-up";
import { Page } from "@/types/sanity";

export default async function Home() {
  // Try to fetch page data from Sanity
  const pageData = await getPageData();

  // If Sanity data is available, use PageBuilder
  // if (pageData && pageData.pageBuilder && pageData.pageBuilder.length > 0) {
  //   return <PageBuilder components={pageData.pageBuilder} />;
  // }

  // Fallback to static components if no Sanity data
  return (
    <main>
      {/* <FadeUp>
        <Hero />
      </FadeUp> */}
      <PageBuilder components={(pageData as Page).pageBuilder} />
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
  );
}
