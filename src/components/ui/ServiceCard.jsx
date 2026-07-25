import { motion } from 'framer-motion'
import { ArrowRight, Briefcase } from 'lucide-react'
import { serviceIcons } from '../../data/icons'
import Button from './Button'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = serviceIcons[service.icon] || Briefcase

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-card transition-shadow duration-300 hover:border-primary/20 hover:shadow-elevated"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mb-2 font-display text-xl font-bold text-ink">{service.title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-muted md:text-[15px]">
        {service.description}
      </p>
      <Button
        variant="ghost"
        size="sm"
        className="w-fit px-0 hover:bg-transparent"
        icon={ArrowRight}
        onClick={(e) => e.preventDefault()}
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
      </Button>
    </motion.article>
  )
}
