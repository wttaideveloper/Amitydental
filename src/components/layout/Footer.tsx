import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { IconFacebook, IconLinkedIn } from '../icons/SocialIcons'
import { siteData } from '../../data'
import { Button } from '../ui/Button'
import { FormField } from '../ui/FormField'
import { Container } from './Container'
import { Logo } from './Logo'

const footerExplore = [
  { label: 'Appointments', to: '/appointments' },
  { label: 'Contact Us', to: '/contact' },
]

const iconBtnOnBlue =
  'flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-md shadow-black/10 transition hover:border-white/40 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300/80'

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle')
  const year = siteData.credit?.copyrightYear ?? new Date().getFullYear()
  const designer = siteData.credit?.designer ?? ''

  function onNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    setStatus(ok ? 'ok' : 'err')
    if (ok) setEmail('')
  }

  return (
    <footer className="border-t border-white/10 text-white">
      <div className="bg-header-bar">
        <Container className="section-y pb-12 pt-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">Review & Explore</p>
          <div className="mt-6 flex justify-center gap-4 sm:gap-5">
            {siteData.social ? (
              <>
                <a href={siteData.social.facebook} target="_blank" rel="noreferrer" className={iconBtnOnBlue} aria-label="Facebook">
                  <IconFacebook className="h-5 w-5" />
                </a>
                <a href={siteData.social.google} target="_blank" rel="noreferrer" className={iconBtnOnBlue} aria-label="Google">
                  <span className="text-base font-bold">G</span>
                </a>
                <a href={siteData.social.linkedin} target="_blank" rel="noreferrer" className={iconBtnOnBlue} aria-label="LinkedIn">
                  <IconLinkedIn className="h-5 w-5" />
                </a>
              </>
            ) : null}
          </div>
        </Container>

        <div className="border-t border-white/10">
          <Container className="section-y grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="text-left lg:col-span-4">
              <Logo variant="footer" />
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                {siteData.tagline} — {siteData.headlineAccent}
              </p>
              <div className="mt-8 space-y-3 text-sm text-white/90">
                <p className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-200" aria-hidden />
                  <span>
                    {siteData.address.line1}
                    {siteData.address.line2 ? `, ${siteData.address.line2}` : ''}
                    <br />
                    {siteData.address.city}, {siteData.address.state} {siteData.address.zip}
                  </span>
                </p>
                <p className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-lime-200" aria-hidden />
                  <a className="font-medium text-white hover:underline" href={`tel:${siteData.phone.replace(/[^\d+]/g, '')}`}>
                    {siteData.phone}
                  </a>
                </p>
                <p className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-lime-200" aria-hidden />
                  <a className="font-medium text-white hover:underline" href={`mailto:${siteData.email}`}>
                    {siteData.email}
                  </a>
                </p>
              </div>
            </div>

            <nav className="text-left lg:col-span-5" aria-label="Footer">
              <p className="text-sm font-semibold uppercase tracking-wide text-white">Explore</p>
              <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {footerExplore.map((l) => (
                  <li key={l.to}>
                    <Link className="text-sm font-medium text-white/80 transition hover:text-white" to={l.to}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="text-left lg:col-span-3 [&_label>span]:text-white/90 [&_span.text-red-600]:text-red-300">
              <p className="text-sm font-semibold uppercase tracking-wide text-white">Stay updated</p>
              <form className="mt-5 space-y-3" onSubmit={onNewsletterSubmit} noValidate>
                <FormField label="Email" htmlFor="footer-email" error={status === 'err' ? 'Enter a valid email.' : undefined}>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setStatus('idle')
                    }}
                    className="w-full rounded-xl border border-white/20 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-lime-300/90"
                    placeholder="you@example.com"
                  />
                </FormField>
                <Button type="submit" variant="onDark" size="sm">
                  Sign up
                </Button>
                {status === 'ok' ? (
                  <p className="text-sm text-lime-200" role="status">
                    Thanks — you’re on the list.
                  </p>
                ) : null}
              </form>
              <div className="mt-6">
                <Button to="/appointments" variant="onDark" size="sm" className="w-full border border-white/25 !bg-white/10 !text-white !shadow-none hover:!bg-white/20">
                  Book an appointment
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="bg-slate-950 px-4 py-10 text-center text-xs text-slate-100 sm:px-6">
        <Container>
          <p className="text-sm text-slate-200">
            Copyright © {year} {siteData.name}
            {designer ? ` | Designed & Developed by ${designer}` : ''}
          </p>
          <p className="mt-8 text-sm">
            <Link className="font-medium text-slate-300 underline-offset-2 hover:text-white hover:underline" to="/sitemap">
              Sitemap
            </Link>
            <span className="mx-3 text-slate-600">|</span>
            <Link
              className="font-medium text-slate-300 underline-offset-2 hover:text-white hover:underline"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  )
}
