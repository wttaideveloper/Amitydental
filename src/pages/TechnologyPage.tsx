import { SEOHead } from '../components/seo/SEOHead'
import { Card } from '../components/ui/Card'
import { PageBanner } from '../components/ui/PageBanner'
import { Container } from '../components/layout/Container'
import { images } from '../lib/images'
import { technologyData } from '../data'

export function TechnologyPage() {
  const d = technologyData

  return (
    <>
      <SEOHead title={d.seo.title} description={d.seo.description} path="/technology" />
      <PageBanner src={images.technologyBanner} alt="Advanced dental technology in a modern operatory" />
      <div className="border-b border-brand-100/70 bg-gradient-to-b from-white to-[#f4f7fc]">
        <Container>
          <div className="mx-auto max-w-4xl py-10 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-800">Technology</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {d.title}
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-700">{d.intro}</p>
          </div>
        </Container>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:px-8">
        {d.items.map((item) => (
          <Card key={item.id} hover={false}>
            <h2 className="font-display text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
          </Card>
        ))}
      </div>
    </>
  )
}
