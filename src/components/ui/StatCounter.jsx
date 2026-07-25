import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'

export default function StatCounter({ value, suffix = '', label, index = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [ready, setReady] = useState(false)
  const count = useCountUp(value, { enabled: ready, duration: 1600 })

  useEffect(() => {
    if (inView) setReady(true)
  }, [inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="text-center"
    >
      <p className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-white/75 md:text-base">{label}</p>
    </motion.div>
  )
}
