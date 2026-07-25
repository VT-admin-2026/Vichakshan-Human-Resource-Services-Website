import { ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'

export default function ServicesPreview({ limit = 6 }) {
  const items = services.slice(0, limit)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Workforce solutions for every hiring stage"
          description="From permanent recruitment to executive search and HR advisory, our services are designed to support organizations with precision and care."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/services" variant="secondary" icon={ArrowRight}>
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
