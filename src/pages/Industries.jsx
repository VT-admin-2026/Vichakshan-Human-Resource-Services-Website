import { industries } from '../data/industries'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import IndustryCard from '../components/ui/IndustryCard'
import ContactCTA from '../components/sections/ContactCTA'

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector expertise that sharpens every shortlist"
        description="We support hiring across diverse industries with recruiters who understand role context, market dynamics, and talent expectations."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Industries' },
        ]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Built for the sectors that move business forward"
            description="From technology and healthcare to manufacturing and finance, our coverage is designed for specialized, high-trust hiring."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
