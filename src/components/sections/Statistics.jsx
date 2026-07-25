import { stats } from '../../data/content'
import StatCounter from '../ui/StatCounter'
import ScrollReveal from '../ui/ScrollReveal'

export default function Statistics() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 gradient-cta" />
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-accent-sky/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent-sky uppercase">
            Company Statistics
          </p>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Outcomes that reflect consistent delivery
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
