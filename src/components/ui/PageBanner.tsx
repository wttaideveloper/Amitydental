type PageBannerProps = {
  src: string
  alt: string
  dim?: boolean
}

/** Full-bleed top banner — brand-tinted overlay for cohesion with the UI palette */
export function PageBanner({ src, alt, dim = true }: PageBannerProps) {
  return (
    <div className="relative w-full overflow-hidden border-b border-brand-200/40 bg-slate-950 shadow-[inset_0_-1px_0_0_rgba(65,90,148,0.1)]">
      <div className="aspect-[2.4/1] min-h-[140px] w-full sm:min-h-[180px] lg:aspect-[2.8/1] lg:min-h-[200px]">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
          width={1600}
          height={600}
          loading="eager"
          decoding="async"
        />
      </div>
      {dim ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/25 via-transparent to-brand-950/20"
          aria-hidden
        />
      ) : null}
      {dim ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-600/15 via-transparent to-lime-400/10"
          aria-hidden
        />
      ) : null}
    </div>
  )
}
