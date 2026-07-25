import { motion } from 'framer-motion'
import { companyInfo } from '../../data/company'

function WhatsAppIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.04 3C9.4 3 4 8.34 4 14.9c0 2.1.56 4.14 1.62 5.94L4 29l8.4-2.2a12.2 12.2 0 0 0 3.64.54h.01c6.64 0 12.04-5.34 12.04-11.9C28.09 8.34 22.68 3 16.04 3zm6.98 16.86c-.3.84-1.74 1.54-2.42 1.64-.62.1-1.4.14-2.26-.14-.52-.17-1.18-.4-2.04-.78-3.58-1.55-5.92-5.16-6.1-5.4-.18-.24-1.44-1.92-1.44-3.66s.9-2.6 1.24-2.96c.34-.36.74-.44 1-.44h.72c.24 0 .54-.08.84.64.3.74 1.04 2.54 1.12 2.72.08.18.14.4.02.64-.12.24-.18.4-.36.62-.18.22-.38.48-.54.64-.18.18-.36.38-.16.74.2.36.9 1.48 1.94 2.4 1.34 1.18 2.46 1.56 2.82 1.74.36.18.56.14.76-.08.2-.22.86-.98 1.1-1.32.24-.34.46-.28.78-.16.32.12 2.04.96 2.38 1.14.34.18.56.26.64.4.08.14.08.82-.22 1.66z" />
    </svg>
  )
}

export default function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-5 bottom-5 z-50 md:right-7 md:bottom-7"
    >
      <a
        href={companyInfo.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center"
      >
        <span className="pointer-events-none absolute right-[4.25rem] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/60 bg-white/95 px-4 py-2 text-sm font-semibold text-ink shadow-[0_12px_30px_-10px_rgba(15,76,129,0.28)] backdrop-blur-md opacity-0 translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Chat with us
        </span>

        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/25 blur-md animate-pulse"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -inset-1 rounded-full border border-[#25D366]/35 opacity-70 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
          aria-hidden="true"
        />

        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#34e07a] via-[#25D366] to-[#128C7E] text-white shadow-[0_14px_34px_-8px_rgba(18,140,126,0.55)] ring-4 ring-white/90 transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_18px_40px_-10px_rgba(18,140,126,0.65)] group-active:scale-[0.97]">
          <WhatsAppIcon className="h-[1.55rem] w-[1.55rem]" />
        </span>
      </a>
    </motion.div>
  )
}
