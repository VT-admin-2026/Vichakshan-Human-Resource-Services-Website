import { motion } from 'framer-motion'
import { ArrowRight, ArrowDownRight } from 'lucide-react'
import Button from '../ui/Button'
import FloatingShapes from '../ui/FloatingShapes'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden gradient-hero">
      <FloatingShapes />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-5 pt-28 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-24 lg:pb-20">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-bold tracking-[0.22em] text-accent uppercase"
          >
            Human Resource Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-4xl font-extrabold tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl xl:text-[4.1rem] xl:leading-[1.05]"
          >
            Vichakshan
            <span className="mt-2 block text-primary">Human Resource Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg"
          >
            Premium recruitment, staffing, and workforce partnerships that help
            organizations hire with clarity, confidence, and lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button to="/services" size="lg" icon={ArrowRight}>
              Explore Services
            </Button>
            <Button to="/contact" size="lg" variant="secondary" icon={ArrowDownRight}>
              Contact Us
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:col-span-5"
          aria-hidden="true"
        >
          <div className="relative mx-auto aspect-square max-w-md lg:max-w-none">
            <div className="absolute inset-[8%] rounded-[2rem] bg-gradient-to-br from-primary via-primary-light to-accent opacity-90 shadow-elevated" />
            <div className="absolute inset-[18%] rounded-[1.5rem] border border-white/25 bg-white/10 backdrop-blur-sm" />
            <svg
              viewBox="0 0 420 420"
              className="absolute inset-0 h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="210" cy="210" r="150" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
              <circle cx="210" cy="210" r="108" stroke="rgba(56,189,248,0.35)" strokeWidth="1.5" strokeDasharray="6 8" />
              <circle cx="210" cy="148" r="28" fill="rgba(255,255,255,0.95)" />
              <path
                d="M160 248c0-28 22-50 50-50s50 22 50 50v18H160v-18z"
                fill="rgba(255,255,255,0.92)"
              />
              <circle cx="132" cy="176" r="18" fill="rgba(56,189,248,0.9)" />
              <path
                d="M98 248c0-18 14-32 32-32s32 14 32 32v12H98v-12z"
                fill="rgba(56,189,248,0.75)"
              />
              <circle cx="288" cy="176" r="18" fill="rgba(255,255,255,0.75)" />
              <path
                d="M254 248c0-18 14-32 32-32s32 14 32 32v12H254v-12z"
                fill="rgba(255,255,255,0.6)"
              />
              <path
                d="M120 320h180"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="150" cy="320" r="5" fill="#38BDF8" />
              <circle cx="210" cy="320" r="5" fill="#fff" />
              <circle cx="270" cy="320" r="5" fill="#99F6E4" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
