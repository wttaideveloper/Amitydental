import { Link } from 'react-router-dom'
import { CalendarCheck, Mail } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { SEOHead } from '../components/seo/SEOHead'
import { images } from '../lib/images'
import { siteData } from '../data'

/** Large edge-to-edge practice photos: fixed min height, stable crop. */
function HomePhotoStrip({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full overflow-hidden bg-slate-200">
      <img
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="h-[min(82vh,920px)] w-full min-h-[320px] object-cover object-center lg:h-[min(88vh,980px)]"
        loading="eager"
        decoding="async"
      />
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <SEOHead title={siteData.seo.title} description={siteData.seo.description} path="/" />

      <HomePhotoStrip
        src={images.hero}
        alt="Amity Gentle Dental office building and monument sign in Amity, Arkansas"
      />

      <section className="section-y bg-gradient-to-b from-[#f4f7f5] to-white">
        <Container className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow">{siteData.name}</p>
          <h1 className="text-h1 mt-5">A Christian Dental Practice</h1>
          <p className="text-body mx-auto mt-5 max-w-2xl">
            Serving Amity, AR and surrounding communities with Complete, Biocompatible Care.
          </p>
          <p className="mt-10 text-lg leading-relaxed text-[#3d5248]">
            This website is temporarily unavailable while being updated.
          </p>
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-4" aria-label="Quick links">
            <Link
              to="/appointments"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-600 px-8 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-900/15 transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <CalendarCheck className="h-5 w-5 shrink-0" aria-hidden />
              Appointments
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-brand-600 bg-white px-8 py-2.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <Mail className="h-5 w-5 shrink-0" aria-hidden />
              Contact Us
            </Link>
          </nav>
        </Container>
      </section>

      <HomePhotoStrip
        src={images.homeReception}
        alt="Amity Gentle Dental reception area"
      />
    </>
  )
}
