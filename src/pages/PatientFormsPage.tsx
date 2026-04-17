import { SEOHead } from '../components/seo/SEOHead'
import { PageBanner } from '../components/ui/PageBanner'
import { pageBanners } from '../lib/images'
import { patientFormsData } from '../data'

export function PatientFormsPage() {
  const d = patientFormsData

  return (
    <>
      <SEOHead title={d.seo.title} description={d.seo.description} path="/patient-forms" />
      <PageBanner src={pageBanners.forms} alt="Patient forms and paperwork" />
      <div className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-slate-900">{d.title}</h1>
          <p className="mt-3 text-lg font-semibold uppercase tracking-wide text-brand-800">{d.subtitle}</p>
          <p className="mt-6 text-sm italic text-slate-700">***{d.notice}***</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {d.downloads.map((f) => (
            <div key={f.id} className="text-center">
              <a
                href={f.href}
                onClick={(e) => {
                  e.preventDefault()
                }}
                className={
                  f.variant === 'green'
                    ? 'text-lg font-bold text-emerald-700 underline'
                    : 'text-lg font-bold text-sky-800 underline'
                }
              >
                {f.label}
              </a>
              <p className="mt-1 text-sm text-slate-600">{f.language}</p>
              <p className="mt-2 text-xs text-slate-400">PDF placeholder — connect Strapi or upload files to /public/files</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
