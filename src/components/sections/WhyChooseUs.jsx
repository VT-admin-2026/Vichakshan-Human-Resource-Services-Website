import { Check } from 'lucide-react'
import { whyChooseUs } from '../../data/content'
import { valueIcons } from '../../data/valueIcons'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'

export default function WhyChooseUs() {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Hiring partnership built on clarity and trust"
          description="We combine specialized talent expertise with a disciplined process so every engagement feels precise, transparent, and outcome-focused."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = valueIcons[item.icon] || Check
            return (
              <ScrollReveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
