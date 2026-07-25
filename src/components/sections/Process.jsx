import { motion } from 'framer-motion'
import { processSteps } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function Process() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear path from briefing to placement"
          description="Every engagement follows a structured, transparent process designed to reduce hiring friction and improve match quality."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-3 bottom-3 left-[1.35rem] w-px bg-gradient-to-b from-primary via-accent to-accent-sky md:left-1/2 md:-translate-x-px" />

          <ol className="space-y-8">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.li
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                    isLeft ? '' : 'md:[&>*:first-child]:order-2'
                  }`}
                >
                  <div className={`${isLeft ? 'md:text-right' : 'md:text-left'} pl-14 md:pl-0`}>
                    <p className="mb-1 text-xs font-bold tracking-[0.18em] text-accent uppercase">
                      Step {step.step}
                    </p>
                    <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-[15px]">
                      {step.description}
                    </p>
                  </div>

                  <div className="absolute top-1 left-0 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-primary font-display text-sm font-bold text-white shadow-soft md:left-1/2 md:-translate-x-1/2">
                    {step.step}
                  </div>

                  <div className="hidden md:block" />
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
