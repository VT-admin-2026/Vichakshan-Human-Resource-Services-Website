import { services } from '../data/services'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import ContactCTA from '../components/sections/ContactCTA'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive HR and talent solutions"
        description="Explore our suite of recruitment, staffing, and workforce services designed to support employers at every stage of growth."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Specialized services with measurable impact"
            description="Each service is delivered with consultative discovery, quality screening, and clear communication from start to finish."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
