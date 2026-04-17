import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SEOHead } from '../components/seo/SEOHead'
import { Button } from '../components/ui/Button'
import { getBlogCoverImage } from '../lib/images'
import { getPostBySlug } from '../data'

export function BlogPostPage() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-lg text-slate-700">Article not found.</p>
        <Button to="/blog" className="mt-6" variant="secondary">
          Back to blog
        </Button>
      </div>
    )
  }

  const coverSrc = getBlogCoverImage(post.slug)

  return (
    <>
      <SEOHead title={post.seo.title} description={post.seo.description} path={`/blog/${post.slug}`} />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-950"
            to="/blog"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All posts
          </Link>
          <div className="mt-8 aspect-[21/9] w-full overflow-hidden rounded-2xl bg-slate-100">
            <img
              src={coverSrc}
              alt={post.coverImageAlt}
              className="h-full w-full object-cover object-center"
              width={1200}
              height={514}
              loading="eager"
            />
          </div>
          <p className="mt-6 text-sm text-slate-500">
            {new Date(post.publishedAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>
          <div className="prose prose-slate mt-10 max-w-none">
            {post.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-200 pt-10">
            <Button to="/appointments">Book an appointment</Button>
            <Button to="/contact" variant="secondary">
              Ask a question
            </Button>
          </div>
        </div>
      </article>
    </>
  )
}
