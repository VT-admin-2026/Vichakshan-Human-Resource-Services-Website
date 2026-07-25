import { Star } from 'lucide-react'
import { coreValues, timeline } from '../data/content'
import { valueIcons } from '../data/valueIcons'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactCTA from '../components/sections/ContactCTA'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building trusted workforce partnerships"
        description="Vichakshan Human Resource Services is a professional HR solutions partner focused on recruitment excellence, staffing agility, and long-term organizational growth."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              align="left"
              eyebrow="Company Overview"
              title="People strategy with operational precision"
              description="We help organizations identify, evaluate, and onboard talent with a process that prioritizes quality, cultural alignment, and business impact."
              className="mb-0"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-ink-muted leading-relaxed">
              <p>
                Founded on the belief that hiring should feel consultative—not transactional—
                Vichakshan partners with employers to understand role context, team dynamics,
                and growth goals before sourcing begins.
              </p>
              <p>
                Our specialists combine industry awareness with disciplined screening so each
                shortlist reflects both capability and character. Whether you need permanent
                hires, flexible staffing, or executive leadership, we deliver with clarity and care.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-card md:p-10">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
                Our Vision
              </p>
              <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                To be a benchmark for trustworthy HR partnerships
              </h2>
              <p className="text-ink-muted leading-relaxed">
                We envision a hiring landscape where organizations and professionals connect
                through integrity, specialization, and mutual growth—supported by technology
                that enhances, rather than replaces, human judgment.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-card md:p-10">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
                Our Mission
              </p>
              <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                Deliver talent outcomes that strengthen organizations
              </h2>
              <p className="text-ink-muted leading-relaxed">
                Our mission is to provide precise recruitment, reliable staffing, and practical
                HR advisory that help businesses build capable teams and create meaningful
                career pathways for professionals.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Values"
            title="Principles that guide every engagement"
            description="These values shape how we advise clients, evaluate candidates, and measure success."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const Icon = valueIcons[value.icon] || Star
              return (
                <ScrollReveal key={value.title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-surface-alt p-7">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-bold text-ink">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{value.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              align="left"
              eyebrow="Why Vichakshan"
              title="Specialized expertise with a partnership mindset"
              className="mb-6 md:mb-8"
            />
            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                Clients choose Vichakshan for thoughtful discovery, industry-aware sourcing,
                and consistent communication. We do not treat hiring as volume work—we treat
                it as a strategic investment in people.
              </p>
              <p>
                Our approach balances speed with diligence, ensuring shortlists are ready for
                real interviews and placements are positioned for long-term contribution.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Our Approach"
              title="Listen deeply. Match carefully. Support fully."
              className="mb-6 md:mb-8"
            />
            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                We begin with requirement clarity, then activate specialized sourcing channels.
                Evaluation covers skills, communication, reliability, and cultural alignment—
                followed by coordinated interviews and offer support.
              </p>
              <p>
                This structured method scales cleanly as we introduce future digital experiences
                for employers and candidates without redesigning the brand foundation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="A professional timeline of purposeful growth"
            description="From foundation to future vision, our path reflects a commitment to quality HR partnerships."
          />

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute top-2 bottom-2 left-3 w-px bg-border md:left-1/2" />
            <ul className="space-y-10">
              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} delay={index * 0.05}>
                  <li className="relative grid gap-3 pl-12 md:grid-cols-2 md:gap-10 md:pl-0">
                    <div
                      className={`md:text-right ${
                        index % 2 === 1 ? 'md:order-2 md:text-left' : ''
                      }`}
                    >
                      <span className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
                        {item.year}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                    </div>
                    <span className="absolute top-1.5 left-0 h-6 w-6 rounded-full border-4 border-white bg-primary shadow-soft md:left-1/2 md:-translate-x-1/2" />
                    <div className="hidden md:block" />
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
              Future Growth Vision
            </p>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Evolving with technology, anchored in trust
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-ink-muted leading-relaxed">
              We are preparing scalable digital experiences—employer and candidate journeys,
              streamlined applications, and smarter collaboration tools—while preserving the
              premium advisory experience that defines Vichakshan today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
