import { motion } from 'framer-motion'

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-16 right-[8%] h-64 w-64 rounded-full bg-accent-sky/15 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[5%] h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[40%] right-[18%] h-40 w-40 rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-[22%] left-[12%] h-3 w-3 rounded-full bg-accent-sky/50"
        animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[28%] right-[28%] h-2.5 w-2.5 rounded-full bg-primary/30"
        animate={{ y: [0, 14, 0], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
