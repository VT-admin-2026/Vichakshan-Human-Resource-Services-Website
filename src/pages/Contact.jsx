import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import { companyInfo } from '../data/company'
import { faqs } from '../data/content'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import FAQItem from '../components/ui/FAQItem'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from '../components/ui/SocialIcons'

const socialIcons = [
  { name: 'LinkedIn', href: companyInfo.social.linkedin, Icon: LinkedinIcon },
  { name: 'Facebook', href: companyInfo.social.facebook, Icon: FacebookIcon },
  { name: 'Instagram', href: companyInfo.social.instagram, Icon: InstagramIcon },
  { name: 'WhatsApp', href: companyInfo.whatsappHref, Icon: WhatsAppIcon },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your workforce goals"
        description="Reach out for recruitment support, staffing solutions, or a discovery conversation with our team."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
          <ScrollReveal className="lg:col-span-3">
            <SectionHeading
              align="left"
              eyebrow="Contact Form"
              title="Send us a message"
              description="Share a few details and we will respond promptly during business hours."
              className="mb-8 md:mb-10"
            />

            <form
              onSubmit={handleSubmit}
              className="grid gap-5 sm:grid-cols-2"
              noValidate
            >
              {[
                { name: 'name', label: 'Full Name', type: 'text', required: true },
                { name: 'email', label: 'Email Address', type: 'email', required: true },
                { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
                { name: 'company', label: 'Company', type: 'text', required: false },
              ].map((field) => (
                <label key={field.name} className="block text-sm font-semibold text-ink">
                  {field.label}
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="mt-2 w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm font-medium text-ink outline-none transition focus:border-primary focus:bg-white"
                    placeholder={field.label}
                  />
                </label>
              ))}

              <label className="block text-sm font-semibold text-ink sm:col-span-2">
                Subject
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm font-medium text-ink outline-none transition focus:border-primary focus:bg-white"
                  placeholder="How can we help?"
                />
              </label>

              <label className="block text-sm font-semibold text-ink sm:col-span-2">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm font-medium text-ink outline-none transition focus:border-primary focus:bg-white"
                  placeholder="Tell us about your hiring or staffing requirements..."
                />
              </label>

              <div className="sm:col-span-2">
                <Button type="submit" size="lg" icon={Send}>
                  Send Message
                </Button>
                {submitted ? (
                  <p className="mt-4 text-sm font-medium text-accent" role="status">
                    Thank you. Your message has been received. Our team will get back to you shortly.
                  </p>
                ) : null}
              </div>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-surface-alt p-8">
              <h2 className="font-display text-xl font-bold text-ink">Company Information</h2>
              <ul className="mt-6 space-y-5 text-sm text-ink-muted">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{companyInfo.address}</span>
                </li>
                <li>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex gap-3 transition hover:text-primary"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {companyInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${companyInfo.phoneHref}`}
                    className="flex gap-3 transition hover:text-primary"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={companyInfo.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-3 transition hover:text-primary"
                  >
                    <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    WhatsApp: {companyInfo.whatsapp}
                  </a>
                </li>
              </ul>

              <div className="mt-8 border-t border-border pt-8">
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-bold text-ink">Business Hours</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-ink-muted">
                  {companyInfo.hours.map((item) => (
                    <li key={item.day} className="flex justify-between gap-4">
                      <span>{item.day}</span>
                      <span className="font-medium text-ink">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <h3 className="mb-4 font-display font-bold text-ink">Social Media</h3>
                <div className="flex gap-3">
                  {socialIcons.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-card transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface-alt py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Location"
            title="Visit our office"
            description="Find us at Roongta Shopping Hub, Indira Nagar, Nashik."
          />
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Vichakshan Human Resource Services location"
                src={`https://www.google.com/maps?q=${companyInfo.location.lat},${companyInfo.location.lng}&z=16&output=embed`}
                className="h-[320px] w-full border-0 md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-center text-sm text-ink-muted">{companyInfo.address}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Quick answers about how we work and how to get started."
          />
          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
