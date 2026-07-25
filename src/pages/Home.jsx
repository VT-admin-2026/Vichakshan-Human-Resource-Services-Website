import Hero from '../components/sections/Hero'
import AboutPreview from '../components/sections/AboutPreview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ServicesPreview from '../components/sections/ServicesPreview'
import IndustriesPreview from '../components/sections/IndustriesPreview'
import Process from '../components/sections/Process'
import Statistics from '../components/sections/Statistics'
import Testimonials from '../components/sections/Testimonials'
import ContactCTA from '../components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <ServicesPreview />
      <IndustriesPreview />
      <Process />
      <Statistics />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
