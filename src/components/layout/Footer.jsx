import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { companyInfo, navLinks } from '../../data/company'
import { services } from '../../data/services'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from '../ui/SocialIcons'

const socialIcons = [
  { name: 'LinkedIn', href: companyInfo.social.linkedin, Icon: LinkedinIcon },
  { name: 'Facebook', href: companyInfo.social.facebook, Icon: FacebookIcon },
  { name: 'Instagram', href: companyInfo.social.instagram, Icon: InstagramIcon },
  { name: 'WhatsApp', href: companyInfo.whatsappHref, Icon: WhatsAppIcon },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link
            to="/"
            className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-soft"
          >
            <img
              src="/logo-light.jpg"
              alt="Vichakshan Human Resource Services"
              className="h-14 w-auto object-contain"
              width={220}
              height={56}
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Premium recruitment, staffing, and workforce solutions built on trust,
            specialization, and lasting partnerships.
          </p>
          <div className="mt-6 flex gap-3">
            {socialIcons.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/80 transition hover:bg-accent-sky hover:text-primary-dark"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-bold tracking-wider uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-white/70 transition hover:text-accent-sky"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="text-sm text-white/70 transition hover:text-accent-sky">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-white/70 transition hover:text-accent-sky">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-bold tracking-wider uppercase">
            Services
          </h3>
          <ul className="space-y-2.5">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link
                  to="/services"
                  className="text-sm text-white/70 transition hover:text-accent-sky"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-bold tracking-wider uppercase">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-sky" />
              <span>{companyInfo.address}</span>
            </li>
            <li>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex gap-3 transition hover:text-accent-sky"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-sky" />
                {companyInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${companyInfo.phoneHref}`}
                className="flex gap-3 transition hover:text-accent-sky"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-sky" />
                {companyInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-accent-sky"
              >
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-sky" />
                WhatsApp: {companyInfo.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-xs text-white/55 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {year} {companyInfo.name}. All rights reserved.
          </p>
          <p>Built for trust, professionalism, and lasting partnerships.</p>
        </div>
      </div>
    </footer>
  )
}
