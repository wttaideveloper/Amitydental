import { SEOHead } from '../components/seo/SEOHead'
import { Button } from '../components/ui/Button'
import { images } from '../lib/images'
import { siteData } from '../data'

const mapQuery = encodeURIComponent('439 E Thompson St, Amity, AR 71921')

export function OfficePage() {
  const addr = `${siteData.address.line1}, ${siteData.address.city}, ${siteData.address.state} ${siteData.address.zip}`

  return (
    <>
      <SEOHead title="Amity Office | Amity Gentle Dental" description={`Visit us at ${addr}`} path="/office" />
      <div className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
            <div className="aspect-[21/9] min-h-[180px] w-full sm:min-h-[240px]">
              <img
                src={images.officePage}
                alt="Professional setting — Amity Gentle Dental serves the Amity community"
                className="h-full w-full object-cover object-[center_20%]"
                width={1600}
                height={686}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#2a2a2a] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="font-display text-4xl font-semibold">Amity Office</h1>
            <p className="mt-4 text-lg text-white/90">{addr}</p>
            <p className="mt-2 text-lg">
              <a className="hover:underline" href={`tel:${siteData.phone.replace(/[^\d+]/g, '')}`}>
                {siteData.phone}
              </a>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Button className="!bg-lime-500 !text-[#0B1221] hover:!bg-lime-400">Directions</Button>
              </a>
              <Button to="/contact" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                More Info
              </Button>
            </div>
          </div>
          <div className="aspect-video min-h-[280px] overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Amity Gentle Dental map"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-93.52%2C34.24%2C-93.44%2C34.30&layer=mapnik&marker=34.267,-93.48"
            />
          </div>
        </div>
      </section>
    </>
  )
}
