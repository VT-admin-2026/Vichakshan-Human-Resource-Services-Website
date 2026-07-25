import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-surface-muted p-8 md:p-12">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-sky/20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />
            <p className="relative font-display text-2xl font-bold leading-snug text-primary md:text-3xl">
              We connect ambitious organizations with professionals who elevate performance,
              culture, and long-term growth.
            </p>
            <p className="relative mt-6 text-sm leading-relaxed text-ink-muted md:text-base">
              Vichakshan Human Resource Services operates as a consultative HR partner—
              combining specialized recruitment, flexible staffing, and workforce advisory
              with a disciplined, quality-first approach.
            </p>
          </div>
        </ScrollReveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title="A trusted partner for people-first growth"
            description="Built for employers seeking dependable hiring outcomes and professionals seeking meaningful opportunities—without turning this experience into a job portal."
            className="mb-8 md:mb-10"
          />
          <ScrollReveal delay={0.1}>
            <ul className="mb-8 space-y-3 text-sm text-ink-muted md:text-[15px]">
              {[
                'Strategic recruitment aligned to business outcomes',
                'Specialized coverage across high-demand industries',
                'Transparent communication from briefing to placement',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button to="/about" variant="secondary" icon={ArrowRight}>
              Discover Our Story
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
