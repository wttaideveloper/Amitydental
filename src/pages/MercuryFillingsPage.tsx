import { Link } from 'react-router-dom'
import { Quote } from 'lucide-react'
import { SEOHead } from '../components/seo/SEOHead'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { PageBanner } from '../components/ui/PageBanner'
import { Container } from '../components/layout/Container'
import { images } from '../lib/images'
import { mercuryContentData } from '../data'

export function MercuryFillingsPage() {
  const d = mercuryContentData

  return (
    <>
      <SEOHead title={d.seo.title} description={d.seo.description} path="/mercury-fillings" />
      <PageBanner
        src={images.featuredMercury}
        alt="Dental materials and amalgam-related consultation"
      />

      <div className="border-b border-brand-100/70 bg-gradient-to-b from-white to-[#f4f7fc]">
        <Container>
          <div className="mx-auto max-w-3xl py-10 sm:py-12">
            <p className="text-eyebrow">{d.bannerTitle}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {d.amalgamSectionTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">{d.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/appointments">Request an appointment</Button>
              <Button to="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Section
        eyebrow="Patient education"
        title={d.videoSectionTitle}
        surface="default"
        className="border-t border-slate-100/80"
      >
        <div className="max-w-3xl rounded-2xl border border-brand-200/60 bg-brand-50/40 p-6 sm:p-8">
          <div className="flex gap-4">
            <Quote className="mt-1 h-8 w-8 shrink-0 text-brand-600" aria-hidden />
            <p className="text-lg leading-relaxed text-slate-700">{d.videoCaption}</p>
          </div>
        </div>
      </Section>

      <Section
        title={d.amalgamReplacement.title}
        surface="muted"
        className="border-t border-brand-100/50"
      >
        <div className="prose prose-slate max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-700">{d.amalgamReplacement.body}</p>
        </div>
      </Section>

      <Section
        eyebrow="Next steps"
        title="Questions about existing amalgam or replacement options?"
        description="We’ll review your history, discuss risks and benefits, and plan care that fits your goals."
        surface="brand"
        align="center"
        className="border-t border-brand-100/50"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button to="/appointments">Schedule a visit</Button>
          <Button to="/contact" variant="secondary">
            Message the office
          </Button>
        </div>
        <p className="mt-10 text-center text-sm text-slate-600">
          <Link className="font-semibold text-brand-800 underline-offset-4 hover:underline" to="/technology">
            Related: dental technology
          </Link>
        </p>
      </Section>
    </>
  )
}
