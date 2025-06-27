import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import ClientLogos from "@/components/client-logos"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ClientLogos />
    </main>
  )
}
