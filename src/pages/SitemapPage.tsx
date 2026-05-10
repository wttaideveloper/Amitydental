import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { PageBanner } from '../components/ui/PageBanner'
import { pageBanners } from '../lib/images'
import { navigationData } from '../data'

const extra = [{ to: '/privacy-policy', label: 'Privacy policy' }]

export function SitemapPage() {
  return (
    <>
      <SEOHead title="Sitemap | Amity Gentle Dental" description="Sitemap for Amity Gentle Dental." path="/sitemap" />
      <PageBanner src={pageBanners.sitemap} alt="Site navigation overview" />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-slate-900">Sitemap</h1>
        <ul className="mt-8 space-y-2">
          {navigationData.items.map((n) => (
            <li key={n.id}>
              <Link className="text-brand-800 hover:underline" to={n.href}>
                {n.label}
              </Link>
            </li>
          ))}
          {extra.map((e) => (
            <li key={e.to}>
              <Link className="text-brand-800 hover:underline" to={e.to}>
                {e.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
