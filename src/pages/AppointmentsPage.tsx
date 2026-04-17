import { useMemo, useState } from 'react'
import { SEOHead } from '../components/seo/SEOHead'
import { FormField } from '../components/ui/FormField'
import { Button } from '../components/ui/Button'
import { PageBanner } from '../components/ui/PageBanner'
import { SmsDisclaimer } from '../components/ui/SmsDisclaimer'
import { pageBanners } from '../lib/images'
import { siteData } from '../data'

type FormState = {
  fullName: string
  email: string
  phone: string
  preferredDate: string
  preferredTime: string
  reason: string
  notes: string
  consent: boolean
}

const initial: FormState = {
  fullName: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '',
  reason: '',
  notes: '',
  consent: false,
}

function validate(s: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (!s.fullName.trim()) errors.fullName = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) errors.email = 'Enter a valid email.'
  if (!s.phone.trim()) errors.phone = 'Please enter a phone number.'
  if (!s.preferredDate) errors.preferredDate = 'Choose a preferred date.'
  if (!s.preferredTime) errors.preferredTime = 'Choose a preferred time.'
  if (!s.reason.trim()) errors.reason = 'Tell us what you need.'
  if (!s.consent) errors.consent = 'Please confirm you understand this is a request, not a booked appointment yet.'
  return errors
}

export function AppointmentsPage() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [snapshot, setSnapshot] = useState<FormState | null>(null)

  const summary = useMemo(() => snapshot ?? form, [snapshot, form])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const next = validate(form)
    setErrors(next)
    if (Object.keys(next).length) {
      setSubmitted(false)
      return
    }
    setSnapshot(form)
    setSubmitted(true)
  }

  return (
    <>
      <SEOHead
        title="Appointment | Amity Gentle Dental"
        description="Request an appointment at Amity Gentle Dental. Our team will follow up to confirm availability."
        path="/appointments"
      />
      <PageBanner src={pageBanners.appointments} alt="Scheduling a dental appointment" />
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Appointment</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Request an appointment
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600">
            Submit your preferred time and reason for visiting. We’ll contact you to confirm—no backend is connected yet (Strapi integration comes next).
          </p>
        </div>
      </div>

      <div className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-semibold text-slate-900">Office details</h2>
            <p className="mt-3 text-slate-600">
              {siteData.address.line1}
              {siteData.address.line2 ? `, ${siteData.address.line2}` : ''}
              <br />
              {siteData.address.city}, {siteData.address.state} {siteData.address.zip}
            </p>
            <p className="mt-4 text-slate-600">
              Phone:{' '}
              <a className="font-semibold text-brand-800 hover:underline" href={`tel:${siteData.phone.replace(/[^\d+]/g, '')}`}>
                {siteData.phone}
              </a>
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">Hours</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {siteData.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-slate-900">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div
                className="rounded-2xl border border-brand-200 bg-white p-8 shadow-sm"
                role="status"
                aria-live="polite"
              >
                <h2 className="font-display text-2xl font-semibold text-slate-900">Request received</h2>
                <p className="mt-3 text-slate-700">
                  Thank you. In production, this would notify the front desk. For now, this is a static demo—your details were not sent anywhere.
                </p>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  <li>
                    Preferred date:{' '}
                    <strong className="text-slate-900">{summary.preferredDate}</strong>
                  </li>
                  <li>
                    Preferred time:{' '}
                    <strong className="text-slate-900">{summary.preferredTime}</strong>
                  </li>
                </ul>
                <Button
                  className="mt-8"
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false)
                    setSnapshot(null)
                    setForm(initial)
                    setErrors({})
                  }}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" onSubmit={onSubmit} noValidate>
                <FormField label="Full name" htmlFor="appt-name" error={errors.fullName}>
                  <input
                    id="appt-name"
                    name="fullName"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none ring-brand-600/0 transition focus:ring-2 focus:ring-brand-600"
                  />
                </FormField>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Email" htmlFor="appt-email" error={errors.email}>
                    <input
                      id="appt-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none ring-brand-600/0 transition focus:ring-2 focus:ring-brand-600"
                    />
                  </FormField>
                  <FormField label="Phone" htmlFor="appt-phone" error={errors.phone} hint="We’ll only use this to confirm your visit.">
                    <input
                      id="appt-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none ring-brand-600/0 transition focus:ring-2 focus:ring-brand-600"
                    />
                  </FormField>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Preferred date" htmlFor="appt-date" error={errors.preferredDate}>
                    <input
                      id="appt-date"
                      name="preferredDate"
                      type="date"
                      value={form.preferredDate}
                      onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none ring-brand-600/0 transition focus:ring-2 focus:ring-brand-600"
                    />
                  </FormField>
                  <FormField label="Preferred time" htmlFor="appt-time" error={errors.preferredTime}>
                    <select
                      id="appt-time"
                      name="preferredTime"
                      value={form.preferredTime}
                      onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-brand-600/0 transition focus:ring-2 focus:ring-brand-600"
                    >
                      <option value="">Select a window</option>
                      <option value="Morning">Morning</option>
                      <option value="Midday">Midday</option>
                      <option value="Afternoon">Afternoon</option>
                    </select>
                  </FormField>
                </div>
                <FormField label="Reason for visit" htmlFor="appt-reason" error={errors.reason}>
                  <input
                    id="appt-reason"
                    name="reason"
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none ring-brand-600/0 transition focus:ring-2 focus:ring-brand-600"
                    placeholder="Cleaning, tooth pain, consultation…"
                  />
                </FormField>
                <FormField label="Notes (optional)" htmlFor="appt-notes">
                  <textarea
                    id="appt-notes"
                    name="notes"
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none ring-brand-600/0 transition focus:ring-2 focus:ring-brand-600"
                  />
                </FormField>
                <div>
                  <label className="flex items-start gap-3 text-sm text-slate-700" htmlFor="appt-consent">
                    <input
                      id="appt-consent"
                      name="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-600"
                    />
                    <span>
                      I understand this form is a request. Final scheduling happens after staff confirmation.
                    </span>
                  </label>
                  {errors.consent ? (
                    <p className="mt-2 text-sm text-red-600">{errors.consent}</p>
                  ) : null}
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Submit request
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <SmsDisclaimer />
    </>
  )
}
