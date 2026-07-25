import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'

export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Guidelines for using the Vichakshan Human Resource Services website."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Terms & Conditions' },
        ]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-5 text-ink-muted leading-relaxed sm:px-6 lg:px-8">
          <p>
            By accessing this website, you agree to use its content for informational purposes
            related to Vichakshan Human Resource Services and our professional offerings.
          </p>
          <p>
            Website content—including service descriptions, industry information, and
            statistics—is provided for general guidance and may be updated without prior notice.
            Engagement for recruitment or staffing services is governed by separate commercial
            agreements.
          </p>
          <p>
            This site is not a job portal. Job listings, applications, employer logins, and
            candidate accounts are not currently offered through this experience.
          </p>
          <p>
            Questions about these terms can be directed through our{' '}
            <Link to="/contact" className="font-semibold text-primary hover:underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
