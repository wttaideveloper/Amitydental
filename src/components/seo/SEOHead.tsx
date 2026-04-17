import { Helmet } from 'react-helmet-async'

type SEOHeadProps = {
  title: string
  description: string
  path?: string
}

export function SEOHead({ title, description, path = '' }: SEOHeadProps) {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const url = path ? `${origin}${path}` : origin

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url ? <meta property="og:url" content={url} /> : null}
    </Helmet>
  )
}
