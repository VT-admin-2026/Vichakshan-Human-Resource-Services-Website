import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Vichakshan Human Resource Services handles information shared through this website."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Privacy Policy' },
        ]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="prose prose-slate mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-6 text-ink-muted leading-relaxed">
            <p>
              This informational website may collect details you voluntarily submit through
              contact forms, such as your name, email address, phone number, company name,
              and message content. We use this information solely to respond to inquiries and
              provide requested HR-related assistance.
            </p>
            <p>
              We do not sell personal information. Access to inquiry data is limited to
              authorized team members involved in client communication and service delivery.
            </p>
            <p>
              As future employer or candidate portal features are introduced, updated privacy
              terms will be published to reflect any additional data processing activities.
            </p>
            <p>
              For privacy-related questions, please{' '}
              <Link to="/contact" className="font-semibold text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
