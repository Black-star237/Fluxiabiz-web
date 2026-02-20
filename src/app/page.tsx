import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Modules } from "@/components/sections/Modules"
import { Pricing } from "@/components/sections/Pricing"
import { CtaSection } from "@/components/sections/CtaSection"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main content flow */}
      <Hero />
      <Modules />
      <Pricing />
      <CtaSection />

      <Footer />
    </>
  )
}
