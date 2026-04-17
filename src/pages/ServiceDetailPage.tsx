import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SEOHead } from '../components/seo/SEOHead'
import { Button } from '../components/ui/Button'
import { PageBanner } from '../components/ui/PageBanner'
import { pageBanners } from '../lib/images'
import { getServiceDetailBySlug } from '../data'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const detail = slug ? getServiceDetailBySlug(slug) : undefined

  if (!detail) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-lg text-slate-700">Service not found.</p>
        <Button to="/services" className="mt-6" variant="secondary">
          Back to services
        </Button>
      </div>
    )
  }

  return (
    <>
      <SEOHead title={detail.title} description={detail.title} path={`/services/${detail.slug}`} />
      <article className="bg-white">
        <PageBanner src={pageBanners.serviceDetail} alt="Gentle dental care" />
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
            to="/services"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All services
          </Link>
          <h1 className="mt-8 font-display text-4xl font-semibold text-slate-900">{detail.title}</h1>
          <div className="prose prose-slate mt-8 max-w-none">
            {detail.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3 border-t border-slate-200 pt-10">
            <Button to="/appointments">Book an appointment</Button>
            <Button to="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </article>
    </>
  )
}
