import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { PageBanner } from '../components/ui/PageBanner'
import { pageBanners } from '../lib/images'
import { completeServicesData } from '../data'

export function CompleteServicesPage() {
  const d = completeServicesData

  return (
    <>
      <SEOHead title={d.seo.title} description={d.seo.description} path="/services" />
      <PageBanner src={pageBanners.services} alt="Dental services and procedures" />
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-800">Procedure</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">
            {d.title}
          </h1>
          <p className="mt-6 max-w-4xl text-lg text-slate-700">{d.intro}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {d.columns.map((col) => (
            <div key={col.id}>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    {item.expandable && item.slug ? (
                      <Link
                        className="font-medium text-sky-700 underline decoration-sky-400 hover:text-sky-900"
                        to={`/services/${item.slug}`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-slate-900">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
