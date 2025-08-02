import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0044] via-[#2D1B69] to-[#8338EC]">
      <Header />
      <Hero />
      <Services />
    </div>
  )
}
