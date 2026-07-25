import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-alt pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0 gradient-hero opacity-80" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-subtle">
              {breadcrumbs.map((item, i) => (
                <li key={item.label} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden="true">/</span> : null}
                  {item.path ? (
                    <Link to={item.path} className="transition hover:text-primary">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-ink-muted">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-ink text-balance md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
