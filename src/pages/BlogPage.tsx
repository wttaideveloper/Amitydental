import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEOHead } from '../components/seo/SEOHead'
import { Container } from '../components/layout/Container'
import { PageBanner } from '../components/ui/PageBanner'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { getBlogCoverImage, pageBanners } from '../lib/images'
import { blogData, blogPageMeta } from '../data'

export function BlogPage() {
  const p = blogPageMeta

  return (
    <>
      <SEOHead title={p.seo.title} description={p.seo.description} path="/blog" />
      <PageBanner src={pageBanners.blog} alt="Dental health articles and tips" />

      <div className="border-b border-brand-100/70 bg-gradient-to-b from-white to-[#f4f7fc]">
        <Container>
          <div className="mx-auto max-w-3xl py-10 sm:py-12">
            <p className="text-eyebrow">{p.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{p.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">{p.intro}</p>
          </div>
        </Container>
      </div>

      <Section
        title={p.sectionTitle}
        description={p.sectionDescription}
        surface="muted"
        className="border-t border-slate-100/80"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((post) => (
            <Link
              key={post.documentId}
              to={`/blog/${post.slug}`}
              className="group block h-full rounded-[var(--radius-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              <Card className="h-full border border-transparent transition group-hover:border-brand-200/80 group-hover:shadow-lg group-hover:shadow-brand-900/8">
                <div className="mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={getBlogCoverImage(post.slug)}
                    alt={post.coverImageAlt}
                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-slate-900 group-hover:text-brand-800">{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-900">
                  Read article
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Questions?"
        title="We’re here to help"
        description="Book a visit or reach out—your care plan is always personalized."
        surface="brand"
        align="center"
        className="border-t border-brand-100/50"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button to="/appointments">Request an appointment</Button>
          <Button to="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </Section>
    </>
  )
}
