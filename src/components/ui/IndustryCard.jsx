import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { industryIcons } from '../../data/industryIcons'

export default function IndustryCard({ industry, index = 0 }) {
  const Icon = industryIcons[industry.icon] || Building2

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-colors duration-300 hover:border-accent/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-soft/0 via-transparent to-primary/0 opacity-0 transition-opacity duration-300 group-hover:from-accent-soft/40 group-hover:to-primary/5 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-muted text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="mb-2 font-display text-lg font-bold text-ink">{industry.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{industry.description}</p>
      </div>
    </motion.article>
  )
}
