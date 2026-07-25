import { ArrowRight, Mail, Phone } from 'lucide-react'
import { companyInfo } from '../../data/company'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

export default function ContactCTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[1.75rem] gradient-cta px-8 py-14 text-center shadow-elevated md:px-16 md:py-16">
            <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-accent-sky/20 blur-2xl" />

            <div className="relative">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent-sky uppercase">
                Contact Preview
              </p>
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white text-balance md:text-4xl">
                Ready to strengthen your hiring strategy?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
                Share your requirements and our team will help you plan the right recruitment
                or staffing approach for your organization.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  className="border-transparent bg-white text-primary hover:bg-accent-soft"
                  icon={ArrowRight}
                >
                  Start a Conversation
                </Button>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {companyInfo.email}
                </a>
                <a
                  href={`tel:${companyInfo.phoneHref}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
