import { useEffect, useRef, useState } from 'react'

export function useCountUp(end, { duration = 1800, start = 0, enabled = true } = {}) {
  const [value, setValue] = useState(start)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!enabled) {
      setValue(start)
      return undefined
    }

    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(start + (end - start) * eased))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [end, duration, start, enabled])

  return value
}
