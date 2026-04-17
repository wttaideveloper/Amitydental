import { Link } from 'react-router-dom'
import { SEOHead } from '../components/seo/SEOHead'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { images } from '../lib/images'
import { aboutData } from '../data'

export function AboutPage() {
  return (
    <>
      <SEOHead title={aboutData.seo.title} description={aboutData.seo.description} path="/about" />
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-800">About</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {aboutData.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-600">{aboutData.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/meet-mr-clark">Meet Dr. Clark</Button>
              <Button to="/appointments" variant="secondary">
                Appointment
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md ring-1 ring-slate-900/5">
            <div className="aspect-[4/3] w-full">
              <img
                src={images.aboutOffice}
                alt="Modern, calm dental practice workspace"
                className="h-full w-full object-cover object-center"
                width={1200}
                height={900}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <Section title="Mission" className="bg-slate-50">
        <div className="prose prose-slate max-w-3xl">
          {aboutData.mission.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-slate-700">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Values"
        title="What guides our practice"
        description="Principles you’ll notice in scheduling, treatment conversations, and follow-up."
        className="bg-white"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {aboutData.values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="font-display text-xl font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-600">
          Want to go deeper? Explore{' '}
          <Link className="font-semibold text-brand-700 hover:text-brand-900" to="/procedures">
            procedures
          </Link>{' '}
          or learn about{' '}
          <Link className="font-semibold text-brand-700 hover:text-brand-900" to="/soleasleep">
            Soleasleep
          </Link>
          .
        </p>
      </Section>
    </>
  )
}
