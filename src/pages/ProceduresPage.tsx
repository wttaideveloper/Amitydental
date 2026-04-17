import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEOHead } from '../components/seo/SEOHead'
import { PageBanner } from '../components/ui/PageBanner'
import { pageBanners } from '../lib/images'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { ServiceIcon } from '../components/icons/ServiceIcon'
import { servicesData, siteData } from '../data'

export function ProceduresPage() {
  return (
    <>
      <SEOHead
        title="Procedure | Amity Gentle Dental"
        description="Explore preventive, restorative, cosmetic, and emergency dental procedures at Amity Gentle Dental."
        path="/procedures"
      />
      <PageBanner src={pageBanners.procedures} alt="Dental procedures and smile care" />
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Procedure</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Care for every stage of your smile
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600">
            Each service page includes what to expect and how we approach planning—so you can choose confidently alongside {siteData.name}.
          </p>
        </div>
      </div>

      <Section title="Featured procedures" className="bg-slate-50">
        <div className="grid gap-6 md:grid-cols-2">
          {servicesData.map((s) => (
            <Card key={s.documentId}>
              <div className="flex items-start gap-4">
                <span className="inline-flex rounded-xl bg-brand-50 p-3 text-brand-800">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-slate-900">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.excerpt}</p>
                  <Link
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
                    to={`/procedures/${s.slug}`}
                  >
                    View details <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
