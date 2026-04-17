import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SEOHead } from '../components/seo/SEOHead'
import { Button } from '../components/ui/Button'
import { PageBanner } from '../components/ui/PageBanner'
import { ServiceIcon } from '../components/icons/ServiceIcon'
import { pageBanners } from '../lib/images'
import { getServiceBySlug } from '../data'

export function ProcedureDetailPage() {
  const { slug } = useParams()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-lg text-slate-700">Procedure not found.</p>
        <Button to="/procedures" className="mt-6" variant="secondary">
          Back to procedures
        </Button>
      </div>
    )
  }

  return (
    <>
      <SEOHead title={service.seo.title} description={service.seo.description} path={`/procedures/${service.slug}`} />
      <article className="bg-white">
        <PageBanner src={pageBanners.procedureDetail} alt="Dental procedure consultation" />
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
            to="/procedures"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All procedures
          </Link>
          <div className="mt-8 flex items-start gap-4">
            <span className="inline-flex rounded-xl bg-brand-50 p-3 text-brand-800">
              <ServiceIcon name={service.icon} className="h-8 w-8" />
            </span>
            <div>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900">{service.title}</h1>
              <p className="mt-3 text-lg text-slate-600">{service.excerpt}</p>
            </div>
          </div>
          <div className="prose prose-slate mt-10 max-w-none">
            {service.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3 border-t border-slate-200 pt-10">
            <Button to="/appointments">Book an appointment</Button>
            <Button to="/contact" variant="secondary">
              Ask a question
            </Button>
          </div>
        </div>
      </article>
    </>
  )
}
