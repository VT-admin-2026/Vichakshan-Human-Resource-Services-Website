import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-card"
    >
      <Quote className="mb-5 h-8 w-8 text-accent-sky/70" aria-hidden="true" />
      <p className="mb-8 flex-1 text-[15px] leading-relaxed text-ink-muted md:text-base">
        “{testimonial.quote}”
      </p>
      <footer>
        <div className="h-px w-12 bg-primary/20 mb-4" />
        <cite className="not-italic">
          <span className="block font-display font-bold text-ink">{testimonial.name}</span>
          <span className="mt-1 block text-sm text-ink-subtle">
            {testimonial.role}, {testimonial.company}
          </span>
        </cite>
      </footer>
    </motion.blockquote>
  )
}
