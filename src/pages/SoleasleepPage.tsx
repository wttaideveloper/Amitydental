import { SEOHead } from '../components/seo/SEOHead'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { PageBanner } from '../components/ui/PageBanner'
import { Container } from '../components/layout/Container'
import { images } from '../lib/images'
import { soleasleepData } from '../data'

export function SoleasleepPage() {
  const d = soleasleepData

  return (
    <>
      <SEOHead title={d.seo.title} description={d.seo.description} path="/soleasleep" />
      <PageBanner src={images.soleaComfort} alt="Restful sleep and comfortable airway-focused care" />
      <div className="border-b border-brand-100/70 bg-gradient-to-b from-white to-[#f4f7fc]">
        <Container>
          <div className="mx-auto max-w-3xl py-10 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-800">Soleasleep</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {d.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">{d.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/appointments">Request a consultation</Button>
              <Button to="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {d.sections.map((s, i) => (
        <Section key={i} title={s.title} className="border-t border-slate-100/80 bg-white" surface="default">
          <div className="prose prose-slate max-w-3xl">
            {s.body.map((p, j) => (
              <p key={j} className="text-lg leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
          </div>
        </Section>
      ))}

      <Section
        eyebrow="FAQ"
        title="Common questions"
        description="Straight answers—your final plan is always personalized after a consultation."
        surface="muted"
        className="border-t border-brand-100/50"
      >
        <div className="divide-y divide-slate-200/90 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          {d.faq.map((item) => (
            <div key={item.q} className="p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-2 text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
