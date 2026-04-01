import { Link } from '@tanstack/react-router'

type LegalSection = {
  title: string
  paragraphs: string[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  intro: string
  effectiveDate: string
  sections: LegalSection[]
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  effectiveDate,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-brand-blue-light text-neutral-900">
      <div className="mx-auto max-w-3xl px-5 py-6">
        <Link
          to="/"
          className="inline-flex items-center rounded-full border border-brand-blue/20 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-brand-blue/40 hover:text-neutral-950"
        >
          Back to Rotten Mochi
        </Link>
      </div>

      <section className="mx-auto max-w-3xl px-5 pb-24 pt-8 md:pb-32 md:pt-12">
        <div className="rounded-3xl border border-brand-blue/15 bg-white px-6 py-10 shadow-sm md:px-10 md:py-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue-dark">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-neutral-500">Effective date: {effectiveDate}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
            {intro}
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-7 text-neutral-600 md:text-[15px]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
