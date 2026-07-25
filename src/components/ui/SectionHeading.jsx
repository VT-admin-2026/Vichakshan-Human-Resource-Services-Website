import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 flex max-w-3xl flex-col gap-3 md:mb-16 ${alignment} ${className}`}
    >
      {eyebrow ? (
        <span
          className={`text-xs font-bold tracking-[0.2em] uppercase ${
            light ? 'text-accent-sky' : 'text-accent'
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${
            light ? 'text-white/80' : 'text-ink-muted'
          }`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
