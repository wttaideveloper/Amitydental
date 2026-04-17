import { SEOHead } from '../components/seo/SEOHead'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { PageBanner } from '../components/ui/PageBanner'
import { Container } from '../components/layout/Container'
import { images } from '../lib/images'
import { approachData, patientReviewsSection, testimonialsData } from '../data'

export function OurApproachPage() {
  return (
    <>
      <SEOHead title={approachData.seo.title} description={approachData.seo.description} path="/our-approach" />
      <PageBanner src={images.approachTeam} alt="Collaborative, wellness-focused dental care" />
      <div className="border-b border-brand-100/70 bg-gradient-to-b from-white to-[#f4f7fc]">
        <Container>
          <div className="mx-auto max-w-3xl py-10 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-800">Philosophy</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {approachData.sectionTitle}
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Patient testimonials belong in a dedicated reviews section (per handwritten note)—not overlaid on a hero
              photo.
            </p>
          </div>
        </Container>
      </div>

      <Section title={approachData.heroQuote} className="border-t border-slate-100/80 bg-white" surface="default">
        <p className="max-w-3xl text-slate-600">
          Pull quote from the original mockup—used here as a headline, separate from image overlays.
        </p>
      </Section>

      <div className="bg-gradient-to-b from-[#f6f8fc] to-[#eef2f8] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {approachData.columns.map((col) => (
              <Card key={col.id} hover={false}>
                <h2 className="font-display text-xl font-semibold text-brand-900">{col.title}</h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  {col.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <section className="border-y border-brand-200/40 bg-gradient-to-br from-brand-50/80 via-white to-lime-50/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-800">
            {patientReviewsSection.eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold text-brand-900">
            {patientReviewsSection.title}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonialsData.map((t) => (
              <Card key={t.id}>
                <blockquote className="text-sm leading-relaxed text-slate-800">“{t.quote}”</blockquote>
                <p className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-900">{t.author}</p>
                {t.context ? <p className="mt-1 text-xs text-slate-500">{t.context}</p> : null}
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slate-500">{approachData.heroInstruction}</p>
        </div>
      </section>
    </>
  )
}
