import { ArrowRight } from 'lucide-react'
import { industries } from '../../data/industries'
import SectionHeading from '../ui/SectionHeading'
import IndustryCard from '../ui/IndustryCard'
import Button from '../ui/Button'

export default function IndustriesPreview({ limit = 8 }) {
  const items = industries.slice(0, limit)

  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Domain expertise across critical sectors"
          description="Our recruiters understand industry realities—so shortlists reflect both technical fit and workplace context."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/industries" variant="secondary" icon={ArrowRight}>
            Explore Industries
          </Button>
        </div>
      </div>
    </section>
  )
}
