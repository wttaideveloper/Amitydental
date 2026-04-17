import { Info } from 'lucide-react'
import { smsDisclaimerData } from '../../data'
import { Container } from '../layout/Container'

/** SMS / texting consent copy — shared on Contact & Appointments */
export function SmsDisclaimer() {
  const d = smsDisclaimerData

  return (
    <section className="border-t border-slate-200/90 bg-gradient-to-b from-slate-50/95 to-white py-12 sm:py-14">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-900/[0.03]">
            <div className="flex gap-0">
              <div className="w-1 shrink-0 bg-brand-600" aria-hidden />
              <div className="flex min-w-0 flex-1 gap-4 p-6 sm:gap-5 sm:p-8">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={2} aria-hidden />
                <div className="min-w-0">
                  <h2 className="font-display text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{d.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                    {d.body}{' '}
                    <a
                      href={d.privacyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-700 underline decoration-brand-300/80 underline-offset-[3px] transition hover:text-brand-900 hover:decoration-brand-500/80"
                    >
                      {d.privacyLabel}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
