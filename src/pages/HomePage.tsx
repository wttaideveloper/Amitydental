import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck, Moon, Phone, Sparkles } from 'lucide-react'
import { IconFacebook, IconLinkedIn } from '../components/icons/SocialIcons'
import { Container } from '../components/layout/Container'
import { Hero } from '../components/ui/Hero'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { SEOHead } from '../components/seo/SEOHead'
import { ServiceIcon } from '../components/icons/ServiceIcon'
import { getBlogCoverImage, images } from '../lib/images'
import {
  blogData,
  featuredServicesData,
  personalMessageData,
  servicesData,
  siteData,
  patientReviewsSection,
  testimonialsData,
} from '../data'

export function HomePage() {
  const previewPosts = blogData.slice(0, 2)
  const previewServices = servicesData.slice(0, 3)

  return (
    <>
      <SEOHead title={siteData.seo.title} description={siteData.seo.description} path="/" />
      <div className="border-b border-brand-100/60 bg-gradient-to-r from-white via-blue-50/40 to-lime-50/25">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-3.5">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <span className="text-body-sm">Give us a call:</span>
            <a
              className="inline-flex items-center gap-1.5 font-semibold text-brand-800 transition hover:text-brand-900"
              href={`tel:${siteData.phone.replace(/[^\d+]/g, '')}`}
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              {siteData.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-body-sm text-slate-600 sm:inline">Social</span>
            {siteData.social ? (
              <>
                <a
                  href={siteData.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-100 p-2 text-brand-800 transition hover:bg-brand-50"
                  aria-label="Facebook"
                >
                  <IconFacebook className="h-4 w-4" />
                </a>
                <a
                  href={siteData.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-100 p-2 text-brand-800 transition hover:bg-brand-50"
                  aria-label="LinkedIn"
                >
                  <IconLinkedIn className="h-4 w-4" />
                </a>
              </>
            ) : null}
          </div>
        </Container>
      </div>

      <Hero
        accent={siteData.headlineAccent}
        title={siteData.tagline}
        subtitle={`${siteData.name} — ${siteData.practiceSubtitle}. Serving Amity, AR and surrounding communities with holistic, biocompatible care.`}
      >
        <Button to="/appointments" size="lg">
          <CalendarCheck className="h-5 w-5" aria-hidden />
          Appointment
        </Button>
        <Button to="/contact" variant="secondary" size="lg">
          Contact us
        </Button>
      </Hero>

      <section className="section-y border-y border-brand-100/50 bg-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="flex justify-center lg:col-span-4 lg:justify-start">
              <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-lg shadow-brand-900/10 ring-4 ring-brand-50 sm:h-52 sm:w-52">
                <img
                  src={images.homePersonalMessage}
                  alt="Dr. Chester V. Clark Jr., Amity Gentle Dental"
                  className="h-full w-full object-cover object-[center_15%]"
                  width={208}
                  height={208}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-h2 text-brand-900">{personalMessageData.title}</h2>
              <blockquote className="mt-6 border-l-4 border-brand-600 pl-6 text-lg leading-relaxed text-slate-800">
                “{personalMessageData.quote}”
              </blockquote>
              <p className="mt-8 text-right font-display text-lg font-semibold text-slate-900">
                — {personalMessageData.signature}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y bg-gradient-to-b from-[#f4f7fc] to-slate-50">
        <Container>
          <header className="section-inner-gap mx-auto max-w-3xl text-center">
            <p className="text-eyebrow">{featuredServicesData.subtitle}</p>
            <h2 className="text-h2 mt-2">{featuredServicesData.title}</h2>
            <p className="text-body mt-4">{featuredServicesData.intro}</p>
          </header>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {featuredServicesData.items.map((item, idx) => (
              <Link
                key={item.id}
                to={item.href}
                className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-slate-200/70 bg-white/95 shadow-lg shadow-brand-900/[0.06] ring-1 ring-brand-100/35 backdrop-blur-[2px] transition hover:border-brand-300/80 hover:shadow-xl hover:shadow-brand-900/10"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={idx === 0 ? images.featuredMercury : images.featuredSleep}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    width={600}
                    height={450}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-center font-display text-base font-semibold text-brand-900 underline decoration-brand-300 underline-offset-4 group-hover:text-brand-950">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Your journey"
        title="From first call to confident care"
        description="Clarity, comfort, and continuity—whether you’re new to the area or returning for ongoing treatment."
        align="center"
        surface="default"
        className="border-t border-slate-100"
      >
        <ol className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3 sm:gap-6">
          {[
            { step: '1', title: 'Connect', text: 'Tell us what you need—routine care, a concern, or a comfort-focused visit.' },
            { step: '2', title: 'Plan', text: 'We explain options in plain language and align treatment with your goals.' },
            { step: '3', title: 'Smile', text: 'Leave with a clear next step and support for maintaining results at home.' },
          ].map((s) => (
            <li key={s.step} className="flex flex-col items-center text-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {s.step}
              </span>
              <h3 className="text-h3 mt-5">{s.title}</h3>
              <p className="text-body-sm mt-3 max-w-xs">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Philosophy"
        title="Our unique approach"
        description="Holistic, biocompatible care with your long-term health in mind—not just your smile."
        surface="muted"
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/our-approach">Read our approach</Button>
          <Button to="/mercury-fillings" variant="secondary">
            Mercury fillings impact
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Procedure highlights"
        title="More ways we can help"
        description="A few entry points—see the full interactive list on our services page."
        surface="default"
      >
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {previewServices.map((s) => (
            <Card key={s.documentId}>
              <div className="flex items-start gap-4">
                <span className="inline-flex shrink-0 rounded-xl bg-brand-50 p-2.5 text-brand-800">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-h3">{s.title}</h3>
                  <p className="text-body-sm mt-2">{s.excerpt}</p>
                </div>
              </div>
              <Link
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-800 transition hover:text-brand-950"
                to={`/procedures/${s.slug}`}
              >
                Read more <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button to="/services">Our complete services</Button>
          <Button to="/technology" variant="secondary">
            Technology
          </Button>
          <Button to="/meet-mr-clark" variant="ghost">
            Meet Dr. Clark
          </Button>
        </div>
      </Section>

      <section className="section-y border-y border-slate-100 bg-gradient-to-br from-brand-50/80 to-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-eyebrow">Soleasleep</p>
              <h2 className="text-h2 mt-3">Extra calm when you need it most</h2>
              <p className="text-body mt-5">
                Comfort-first care—including Solea and related options when appropriate.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button to="/soleasleep">
                  <Moon className="h-5 w-5" aria-hidden />
                  Explore Soleasleep
                </Button>
                <Button to="/appointments" variant="secondary">
                  Request an appointment
                </Button>
              </div>
            </div>
            <Card hover={false} className="bg-white/90">
              <div className="flex items-center gap-3">
                <Sparkles className="h-8 w-8 shrink-0 text-brand-700" aria-hidden />
                <span className="text-h3">Comfort-forward dentistry</span>
              </div>
              <p className="text-body-sm mt-4">
                We discuss your history and concerns, then build a plan that respects both your health and your peace of mind.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section
        className="section-y border-y border-slate-100 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(248,250,252,0.92), rgba(248,250,252,0.92)), url(${images.reviewsBg})` }}
      >
        <Container>
          <header className="section-inner-gap mx-auto max-w-3xl text-center">
            <p className="text-eyebrow">{patientReviewsSection.eyebrow}</p>
            <h2 className="text-h2 mt-3">{patientReviewsSection.title}</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {testimonialsData.map((t) => (
              <Card key={t.id}>
                <blockquote className="text-body text-slate-800">“{t.quote}”</blockquote>
                <p className="mt-6 text-sm font-bold uppercase tracking-wide text-slate-900">{t.author}</p>
                {t.context ? <p className="text-body-sm mt-1">{t.context}</p> : null}
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Section eyebrow="Blog" title="Practical tips between visits" description="Short articles on habits, kids, and anxiety." surface="default">
        <div className="grid gap-8 md:grid-cols-2">
          {previewPosts.map((p) => (
            <Card key={p.documentId}>
              <div className="mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={getBlogCoverImage(p.slug)}
                  alt={p.coverImageAlt}
                  className="h-full w-full object-cover object-center"
                  width={640}
                  height={400}
                  loading="lazy"
                />
              </div>
              <p className="text-body-sm font-medium text-slate-500">
                {new Date(p.publishedAt).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h3 className="text-h3 mt-2">{p.title}</h3>
              <p className="text-body-sm mt-2">{p.excerpt}</p>
              <Link
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-800 transition hover:text-brand-950"
                to={`/blog/${p.slug}`}
              >
                Continue reading <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Button to="/blog" variant="secondary">
            View all posts
          </Button>
        </div>
      </Section>

      {/* CTA — dark band + accent strip (matches brand comp: serif headline, pill CTAs) */}
      <section className="relative bg-[#0a0f1e]">
        <Container className="section-y">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready when you are
              </h2>
              <p className="mt-4 font-sans text-lg leading-relaxed text-white">
                Book an appointment, download patient forms, or visit our Amity office.
              </p>
            </div>
            <div className="flex w-full flex-shrink-0 flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-end">
              <Link
                to="/appointments"
                className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full bg-gradient-to-b from-[#6a82b8] to-[#5b74a8] px-7 py-2.5 text-center text-sm font-semibold text-[#0a0f1e] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),0_4px_12px_rgba(0,0,0,0.35)] ring-1 ring-black/20 transition hover:brightness-[1.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b74a8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]"
              >
                Book appointment
              </Link>
              <Link
                to="/patient-forms"
                className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full border border-white bg-[#4a608a] px-7 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#546f9a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]"
              >
                Patient forms
              </Link>
              <Link
                to="/office"
                className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full border border-white bg-[#4a608a] px-7 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#546f9a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]"
              >
                Office &amp; map
              </Link>
            </div>
          </div>
        </Container>
        <div className="h-1.5 w-full bg-[#3b5284]" aria-hidden />
      </section>
    </>
  )
}
