import { SEOHead } from '../components/seo/SEOHead'
import { Button } from '../components/ui/Button'
import { PageBanner } from '../components/ui/PageBanner'
import { pageBanners } from '../lib/images'

export function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page not found | Amity Gentle Dental"
        description="The page you’re looking for doesn’t exist. Return home or book an appointment."
        path="/404"
      />
      <PageBanner src={pageBanners.notFound} alt="Friendly illustration — page not found" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          This page isn’t here
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          The link may be outdated, or the page may have moved. Try the home page or contact us for help.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/">Go home</Button>
          <Button to="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </>
  )
}
