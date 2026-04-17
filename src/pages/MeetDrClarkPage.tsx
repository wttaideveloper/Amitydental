import { SEOHead } from '../components/seo/SEOHead'
import { Button } from '../components/ui/Button'
import { images } from '../lib/images'
import { teamData } from '../data'

export function MeetDrClarkPage() {
  const m = teamData[0]

  return (
    <>
      <SEOHead title={m.seo.title} description={m.seo.description} path="/meet-mr-clark" />
      <div className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-white/90 bg-slate-100 shadow-xl shadow-brand-900/15 ring-1 ring-brand-900/5 lg:sticky lg:top-28">
              <div className="aspect-[4/3] lg:aspect-[3/4]">
                <img
                  src={images.drPortrait}
                  alt="Dr. Chester V. Clark Jr. in front of the Amity Gentle Dental office — biological dentistry and breathing wellness"
                  className="h-full w-full object-cover object-[center_18%]"
                  width={800}
                  height={1066}
                  loading="eager"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Meet the doctor</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {m.pageTitle ?? m.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-slate-700">{m.role}</p>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate-700">
              {(m.intro ?? m.bio ?? []).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {(m.community ?? []).length > 0 ? (
              <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate-700">
                {m.community!.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : null}

            <h2 className="mt-12 font-display text-2xl font-semibold text-slate-900">Professional affiliations</h2>
            {m.organizationsAfter ? (
              <p className="mt-4 text-lg text-slate-700">{m.organizationsAfter}</p>
            ) : null}
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              {(m.organizations ?? []).map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            {m.family ? (
              <>
                <h2 className="mt-12 font-display text-2xl font-semibold text-slate-900">Family</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">{m.family}</p>
              </>
            ) : null}

            {(m.interests ?? []).length > 0 ? (
              <>
                <h2 className="mt-12 font-display text-2xl font-semibold text-slate-900">Personal interests</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                  {m.interests!.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}

            {m.credentials && m.credentials.length > 0 ? (
              <>
                <h2 className="mt-12 font-display text-2xl font-semibold text-slate-900">Credentials</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                  {m.credentials.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/appointments">Schedule with us</Button>
              <Button to="/services" variant="secondary">
                View services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
