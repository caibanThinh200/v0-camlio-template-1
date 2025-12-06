import { getPageData } from "@/lib/sanity-utils";
import LivePageBuilder from "@/components/live-page-builder";

export default async function Home() {
  // Fetch initial page data from Sanity
  const pageData = await getPageData();

  return (
    <main>
      <LivePageBuilder initialData={pageData} slug="home" />
    </main>
  );
}
