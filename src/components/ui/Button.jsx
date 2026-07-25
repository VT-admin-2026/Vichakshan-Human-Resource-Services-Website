import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-primary text-white shadow-soft hover:bg-primary-dark hover:shadow-elevated',
  secondary:
    'bg-white text-primary border border-primary/20 hover:border-primary/40 hover:bg-surface-muted',
  accent:
    'bg-accent text-white shadow-soft hover:bg-teal-700 hover:shadow-elevated',
  ghost:
    'bg-transparent text-primary hover:bg-primary/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm md:text-base',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  )

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
  }

  if (to) {
    return (
      <motion.div className="inline-flex" {...motionProps}>
        <Link to={to} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div className="inline-flex" {...motionProps}>
        <a href={href} className={classes} {...props}>
          {content}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button type={type} className={classes} onClick={onClick} {...motionProps} {...props}>
      {content}
    </motion.button>
  )
}
