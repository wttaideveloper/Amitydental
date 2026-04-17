import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { PageBanner } from '../components/ui/PageBanner'
import { SmsDisclaimer } from '../components/ui/SmsDisclaimer'
import { pageBanners } from '../lib/images'
import { siteData } from '../data'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function validate(s: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (!s.name.trim()) errors.name = 'Required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) errors.email = 'Enter a valid email.'
  if (!s.phone.trim()) errors.phone = 'Required.'
  if (!s.message.trim()) errors.message = 'Required.'
  return errors
}

function ReqLabel({ children, htmlFor }: { children: string; htmlFor: string }) {
  return (
    <label className="mb-1.5 block text-sm font-bold uppercase tracking-wide text-slate-900" htmlFor={htmlFor}>
      {children} <span className="text-red-600">*</span>
    </label>
  )
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const next = validate(form)
    setErrors(next)
    if (Object.keys(next).length) return
    setSubmitted(true)
  }

  const mapSrc =
    'https://www.openstreetmap.org/export/embed.html?bbox=-93.52%2C34.24%2C-93.44%2C34.30&layer=mapnik&marker=34.267,-93.48'

  return (
    <>
      <SEOHead
        title="Contact Us | Amity Gentle Dental"
        description="Contact Amity Gentle Dental in Amity, AR."
        path="/contact"
      />
      <PageBanner src={pageBanners.contact} alt="Welcoming dental office reception" />
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Call, email, or send a message — we’re glad to help.</p>
        </div>
      </div>

      <div className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-semibold text-slate-900">Visit & phone</h2>
            <p className="mt-3 text-slate-700">
              {siteData.address.line1}
              {siteData.address.line2 ? `, ${siteData.address.line2}` : ''}
              <br />
              {siteData.address.city}, {siteData.address.state} {siteData.address.zip}
            </p>
            <p className="mt-4 text-slate-700">
              <span className="font-semibold text-slate-900">Phone:</span>{' '}
              <a className="text-brand-900 hover:underline" href={`tel:${siteData.phone.replace(/[^\d+]/g, '')}`}>
                {siteData.phone}
              </a>
            </p>
            <p className="mt-2 text-slate-700">
              <span className="font-semibold text-slate-900">Email:</span>{' '}
              <a className="text-brand-900 hover:underline" href={`mailto:${siteData.email}`}>
                {siteData.email}
              </a>
            </p>
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
              <iframe title="Amity AR map" className="h-full w-full" loading="lazy" src={mapSrc} />
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-2xl border border-brand-200 bg-white p-8 shadow-sm" role="status" aria-live="polite">
                <h2 className="font-display text-2xl font-semibold text-slate-900">Message sent</h2>
                <p className="mt-3 text-slate-700">Thanks for reaching out.</p>
                <button
                  type="button"
                  className="mt-8 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  onClick={() => {
                    setSubmitted(false)
                    setForm(initial)
                    setErrors({})
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={onSubmit} noValidate>
                <div>
                  <ReqLabel htmlFor="contact-name">Name</ReqLabel>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Name"
                    className="w-full rounded border border-slate-400 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-brand-600"
                  />
                  {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
                </div>
                <div>
                  <ReqLabel htmlFor="contact-email">Email</ReqLabel>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full rounded border border-slate-400 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-brand-600"
                  />
                  {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
                </div>
                <div>
                  <ReqLabel htmlFor="contact-phone">Phone Number</ReqLabel>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full rounded border border-slate-400 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-brand-600"
                  />
                  {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone}</p> : null}
                </div>
                <div>
                  <ReqLabel htmlFor="contact-message">Message</ReqLabel>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Message"
                    className="w-full rounded border border-slate-400 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-brand-600"
                  />
                  {errors.message ? <p className="mt-1 text-sm text-red-600">{errors.message}</p> : null}
                </div>
                <button
                  type="submit"
                  className="w-full bg-black py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-slate-900"
                >
                  Send message
                </button>
                <p className="text-sm font-semibold">
                  <Link className="underline" to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <SmsDisclaimer />
    </>
  )
}
